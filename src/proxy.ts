import { NextRequest, NextResponse } from "next/server";

// async function refreshTokenMiddleware(refreshToken: string): Promise<boolean> {
//     try {
//         const refresh = await getNewTokensWithRefreshToken(refreshToken);
//         if (!refresh) {
//             return false;
//         }
//         return true;
//     } catch (error) {
//         console.error("Error refreshing token in middleware:", error);
//         return false;
//     }
// }


export async function proxy(request: NextRequest) {

    console.log(request);
   

   
  
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
    ]
}