export default function ({app: {router}}, inject) {
  if(false){
    // inject empty gtag function for disabled mode
    inject('gtag', () => {})
    return
  }

  window.dataLayer = window.dataLayer || []
  function gtag () {
    dataLayer.push(arguments)
    if(true){
      console.debug('gtag tracking called with following arguments:', arguments)
    }
  }
  inject('gtag', gtag)
  gtag('js', new Date())
  gtag('config','UA-158057791-1',{
  "anonymize_ip": true,
  "send_page_view": false
})

  if(!false){
    router.afterEach((to) => {
      gtag('config', 'UA-158057791-1', {'page_path': to.fullPath})
    })
  }

  // additional accounts

    gtag('config', '',)
}
