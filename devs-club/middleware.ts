import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/home',  
  '/about',          
  '/auth(.*)', 
  '/achievements',    
  '/contact',    
  '/projects',  
  '/open-source',
  '/api(/.*)?',
  '/',
  '/web-team',
  '/team',
  '/api/webhooks(.*)',
  '/privacy-policy',
  '/terms-conditions',
  '/events',
  '/vashishthackathon'
]);
export default clerkMiddleware((auth, request) => {
  
  if (!isPublicRoute(request)) {
    auth().protect(); 
  }
});

export const config = {
    matcher: [
      /*
        Protects everything except:
        - Static files like .js, .css, .png, etc.
        - `_next` internals and static assets.
      */
      '/((?!_next|[^?]*\\.(?:html?|css|js|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|eot|json)).*)',
    ],
  };
