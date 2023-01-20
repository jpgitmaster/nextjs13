export { default } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const verify = req.cookies.get('next-auth.session-token')?.valueOf
    console.log(verify)
    if(!verify){
        return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/cms/:path*', '/((?!_next/static|favicon.ico|login|).*)',],
}