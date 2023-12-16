import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("token");
    const url = request.nextUrl.clone();
    const pathname = url.pathname;

    if (pathname.startsWith('/api') || pathname.startsWith('/_next/static')) {
        return NextResponse.next();
    }

    if (token && !pathname.startsWith('/dashboard')) {
        console.log("Redirecting to dashboard");
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
    }

    if (!token && pathname.startsWith('/dashboard')) {
        console.log("Redirecting to home");
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export default middleware;
