export { default } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function isAuthorized(req: NextRequest){
    return false
}

export function middleware(req: NextRequest) {
    // if(!isAuthorized(req)){
    //     return NextResponse.json({message: 'Unathorized'})
    // }
    const verify = req.cookies.get('next-auth.session-token')?.valueOf
    if(!verify){
        return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/cms/:path*'],
}