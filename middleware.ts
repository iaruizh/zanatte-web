import { NextRequest, NextResponse } from 'next/server'

// Protege /admin y /api/admin con usuario/contrasena simples (HTTP Basic Auth).
// No es para datos ultra sensibles, pero evita que cualquiera con el link vea
// nombres, telefonos y correos de los clientes que reservaron.
export function middleware(request: NextRequest) {
  const auth = request.headers.get('authorization')
  const usuario = process.env.ADMIN_USER
  const clave = process.env.ADMIN_PASSWORD

  if (auth?.startsWith('Basic ')) {
    const decoded = Buffer.from(auth.slice(6), 'base64').toString()
    const separador = decoded.indexOf(':')
    const u = decoded.slice(0, separador)
    const p = decoded.slice(separador + 1)
    if (u === usuario && p === clave) return NextResponse.next()
  }

  return new NextResponse('Autenticacion requerida', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Renacer por Dentro - Admin"' },
  })
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
