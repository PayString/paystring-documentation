const DEFAULT_OPTIONS = {
  appId: null,
  enableOnDevMode: false, // if 'false', heap will be fired on NODE_ENV=production only
}

module.exports = function (context, opts) {
  const options = { ...DEFAULT_OPTIONS, ...opts }
  const isEnabled =
    (process.env.NODE_ENV === 'production' || options.enableOnDevMode) &&
    options.appId

  return {
    name: 'docusaurus2-heap',
    injectHtmlTags() {
      if (!isEnabled) return {}
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: `
              window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};
              var r=document.createElement("script");
              r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";
              var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);
              for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
              heap.load("${options.appId}");
            `,
          },
        ],
      }
    },
  }
}
