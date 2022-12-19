import { NextResponse } from 'next/server'
export async function middleware(request) {
  const jwt = request.cookies.get('token')
  if (request.nextUrl.pathname.includes('/user')) {

    if (jwt === undefined) {
      return NextResponse.redirect(new URL('/', request.url))
    }

  }
    NextResponse.next()

  
}
