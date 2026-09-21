-- Esquema para el sistema de reservas de "Renacer por Dentro" (Zanatte, Ibague 10-11 oct 2026).
-- Ejecutar este archivo completo en la pestana "Query" de la base de datos Postgres en Vercel.

CREATE TYPE tipo_servicio AS ENUM ('suero', 'paquete');
CREATE TYPE modalidad_reserva AS ENUM ('manana_sueroterapia', 'tarde_paquete');
CREATE TYPE estado_reserva AS ENUM (
  'hold_pendiente_pago',   -- formulario enviado, esperando confirmacion de Wompi
  'confirmada',            -- pago aprobado, cupo de la manana descontado
  'pendiente_agendar',     -- pago aprobado, es un paquete de tarde por coordinar manualmente
  'cancelada',             -- cancelada por el cliente o el equipo
  'expirada',              -- el hold vencio sin pago aprobado
  'completada'             -- la sesion ya se realizo
);
CREATE TYPE estado_pago AS ENUM ('pendiente', 'aprobado', 'rechazado', 'expirado');

-- Catalogo de sueros y paquetes. Los sueros pueden reservarse en la manana (con horario
-- fijo) y tambien como parte de la tarde (sin horario fijo). Los paquetes solo en la tarde.
CREATE TABLE servicios (
  id                SERIAL PRIMARY KEY,
  nombre            TEXT NOT NULL,
  tipo              tipo_servicio NOT NULL,
  descripcion       TEXT NOT NULL DEFAULT '',
  precio            INTEGER NOT NULL,              -- COP, precio base (sin adicionales)
  duracion_min      INTEGER,                        -- aproximada, informativa
  disponible_manana BOOLEAN NOT NULL DEFAULT FALSE,
  disponible_tarde  BOOLEAN NOT NULL DEFAULT FALSE,
  activo            BOOLEAN NOT NULL DEFAULT TRUE,
  orden             INTEGER NOT NULL DEFAULT 0
);

-- Cupos por bloque horario, solo para sueroterapia de la manana (10 y 11 de oct, 7am-12pm).
-- Las tardes (paquetes) no tienen disponibilidad digital: se coordinan manualmente.
CREATE TABLE disponibilidad (
  id               SERIAL PRIMARY KEY,
  fecha            DATE NOT NULL,
  hora_inicio      TIME NOT NULL,
  capacidad_total  INTEGER NOT NULL DEFAULT 8,
  cupos_ocupados   INTEGER NOT NULL DEFAULT 0,
  UNIQUE (fecha, hora_inicio),
  CHECK (cupos_ocupados >= 0 AND cupos_ocupados <= capacidad_total)
);

CREATE TABLE reservas (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  servicio_id       INTEGER NOT NULL REFERENCES servicios(id),
  modalidad         modalidad_reserva NOT NULL,
  slot_id           INTEGER REFERENCES disponibilidad(id),   -- solo si modalidad = manana_sueroterapia
  fecha_evento      DATE NOT NULL,                            -- 2026-10-10 o 2026-10-11

  nombre_cliente    TEXT NOT NULL,
  whatsapp_cliente  TEXT NOT NULL,
  email_cliente     TEXT NOT NULL,

  precio_servicio   INTEGER NOT NULL,   -- snapshot del precio al momento de reservar
  porcentaje_pago   INTEGER NOT NULL CHECK (porcentaje_pago IN (50, 100)),
  monto_pagado      INTEGER NOT NULL,   -- precio_servicio * porcentaje_pago / 100
  bono_sorpresa     BOOLEAN NOT NULL DEFAULT FALSE,  -- true si porcentaje_pago = 100

  estado_reserva    estado_reserva NOT NULL DEFAULT 'hold_pendiente_pago',
  estado_pago       estado_pago NOT NULL DEFAULT 'pendiente',

  wompi_reference   TEXT NOT NULL UNIQUE,
  wompi_transaction_id TEXT,

  reembolso_monto   INTEGER,   -- calculado solo si se cancela

  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  confirmed_at      TIMESTAMPTZ,
  cancelled_at      TIMESTAMPTZ,
  hold_expires_at   TIMESTAMPTZ NOT NULL DEFAULT (now() + interval '15 minutes')
);

CREATE INDEX idx_reservas_servicio ON reservas(servicio_id);
CREATE INDEX idx_reservas_slot ON reservas(slot_id);
CREATE INDEX idx_reservas_estado_pago ON reservas(estado_pago);
CREATE INDEX idx_reservas_fecha_evento ON reservas(fecha_evento);

-- ---------- Seed: catalogo de servicios ----------

INSERT INTO servicios (nombre, tipo, descripcion, precio, duracion_min, disponible_manana, disponible_tarde, orden) VALUES
('Vitamina C', 'suero', 'Refuerza el sistema inmune, potente antioxidante y favorece la produccion de colageno.', 120000, 60, TRUE, TRUE, 1),
('Complejo B', 'suero', 'Energia y vitalidad: apoya el metabolismo y el sistema nervioso.', 120000, 60, TRUE, TRUE, 2),
('Azul de Metileno', 'suero', 'Antioxidante potente con apoyo cognitivo y mitocondrial, ayuda a la desintoxicacion celular.', 120000, 60, TRUE, TRUE, 3),
('Hierro', 'suero', 'Combate el cansancio y la anemia, mejora el transporte de oxigeno en el cuerpo.', 120000, 60, TRUE, TRUE, 4),
('Acido Hialuronico', 'suero', 'Hidratacion profunda de la piel, elasticidad y efecto antiaging.', 120000, 60, TRUE, TRUE, 5),
('Limpieza facial', 'paquete', 'Limpieza facial profunda profesional.', 120000, 60, FALSE, TRUE, 6),
('Plasma', 'paquete', 'Plasma rico en plaquetas para regeneracion y rejuvenecimiento.', 180000, 90, FALSE, TRUE, 7),
('Plasma capilar', 'paquete', 'Plasma rico en plaquetas aplicado al cuero cabelludo, estimula el crecimiento capilar.', 150000, 90, FALSE, TRUE, 8),
('Limpieza facial + Dermapen', 'paquete', 'Combo de limpieza facial profunda mas microneedling con dermapen.', 180000, 90, FALSE, TRUE, 9),
('Plasma + Sueroterapia', 'paquete', 'Combo de plasma rico en plaquetas mas una sesion de sueroterapia.', 280000, 120, FALSE, TRUE, 10),
('Biotina + Alta frecuencia', 'paquete', 'Combo de biotina capilar mas tratamiento de alta frecuencia.', 180000, 60, FALSE, TRUE, 11);

-- ---------- Seed: disponibilidad de la manana (sueroterapia), 10 y 11 de octubre 2026 ----------

INSERT INTO disponibilidad (fecha, hora_inicio, capacidad_total) VALUES
('2026-10-10', '07:00', 8),
('2026-10-10', '08:00', 8),
('2026-10-10', '09:00', 8),
('2026-10-10', '10:00', 8),
('2026-10-10', '11:00', 8),
('2026-10-11', '07:00', 8),
('2026-10-11', '08:00', 8),
('2026-10-11', '09:00', 8),
('2026-10-11', '10:00', 8),
('2026-10-11', '11:00', 8);
