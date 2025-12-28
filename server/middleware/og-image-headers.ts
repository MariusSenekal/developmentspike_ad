export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  // Add headers for OG image to help WhatsApp and other social platforms
  if (url.pathname === '/og-image.jpg' || url.pathname === '/og-image.png') {
    setResponseHeaders(event, {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS'
    })
  }
})
