import type { ModalidadReserva } from './db'
import { WHATSAPP_NOTIFICACION } from './db'

interface DatosNotificacion {
  modalidad: ModalidadReserva
  servicioNombre: string
  fechaEvento: string
  horaInicio: string | null
  reservaId: string
}

// Envia la notificacion de una reserva confirmada al WhatsApp de la enfermera o la
// esteticista segun la modalidad. No incluye datos del cliente (nombre/telefono) en el
// mensaje: solo un aviso generico con el id de reserva, para revisar el detalle en el
// panel en vez de exponer datos personales en un query string de terceros.
export async function notificarReserva(datos: DatosNotificacion) {
  const numero = WHATSAPP_NOTIFICACION[datos.modalidad]
  const mensaje =
    `Nueva reserva confirmada - Renacer por Dentro\n` +
    `${datos.servicioNombre}\n` +
    `${datos.fechaEvento}${datos.horaInicio ? ` a las ${datos.horaInicio}` : ' (tarde, por agendar)'}\n` +
    `Detalle del cliente en el panel, reserva #${datos.reservaId.slice(0, 8)}`

  const apiKey = process.env.CALLMEBOT_API_KEY
  if (!apiKey) {
    console.log(`[notify] CALLMEBOT_API_KEY no configurada, notificacion pendiente para ${numero}:\n${mensaje}`)
    return
  }

  const url = `https://api.callmebot.com/whatsapp.php?phone=${numero}&text=${encodeURIComponent(mensaje)}&apikey=${apiKey}`
  try {
    const res = await fetch(url)
    if (!res.ok) console.error(`[notify] CallMeBot respondio ${res.status} para ${numero}`)
  } catch (err) {
    console.error('[notify] Error enviando notificacion WhatsApp', err)
  }
}
