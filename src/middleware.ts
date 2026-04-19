import { defineMiddleware } from 'astro:middleware'

const ROOT_ASSET_PROBES = new Set([
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/apple-touch-icon-precomposed.png',
])

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  if (base) {
    if (ROOT_ASSET_PROBES.has(pathname)) {
      return context.redirect(`${base}${pathname}`, 308)
    }
    if (pathname === '/') {
      return context.redirect(`${base}/`, 308)
    }
  }
  return next()
})
