(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(e,t,a){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n}))},103:function(e,t,a){"use strict";var o=a(0),n=a(104);t.a=function(){var e=Object(o.useContext)(n.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},104:function(e,t,a){"use strict";var o=a(0),n=a.n(o).a.createContext(void 0);t.a=n},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return E})),a.d(t,"metadata",(function(){return O})),a.d(t,"rightToc",(function(){return N})),a.d(t,"default",(function(){return k}));var o=a(2),n=a(6),r=a(0),i=a.n(r),c=a(96),s=a(103),l=a(97),m=a(99),d=a(98),u=/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,g=function(e){return!(!e||!u.test(e))},p=function(){var e=Object(r.useState)(""),t=e[0],a=e[1],o=Object(r.useState)(""),n=o[0],c=o[1],s=Object(r.useState)(!1),l=s[0],m=s[1],d=Object(r.useState)(!1),u=d[0],p=d[1],v=Object(r.useMemo)((function(){return g(t)}),[t]),h=Object(r.useCallback)((function(){if(c(""),g(t)){"undefined"!=typeof window&&(void 0!==window.heap&&window.heap.track("newsletter",{email:t}),void 0!==window.gtag&&(window.gtag("event","conversion",{send_to:"AW-877332159/jdvuCLLdpdQBEL-NrKID"}),window.gtag("event","conversion",{send_to:"AW-616173950/7ehtCOKFvNYBEP6i6KUC"})));var e="email="+t;p(!0),fetch("https://go.ripple.com/l/105572/2020-06-15/cspx4n",{mode:"no-cors",method:"POST",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(){a(""),c(""),m(!0)})).catch((function(e){c("Error sending email."),console.error(e)})).finally((function(){p(!1)})),fetch("https://script.google.com/macros/s/AKfycbyT7zjGQMQKaSrE9ef1NuvAFGKGUc8cnnUGSFo7V5Q6HWeBx-DL/exec?"+e,{mode:"no-cors"}).catch((function(){}))}else c("Invalid email.")}),[t,c,a,m,p]);return i.a.createElement("div",{className:"newsletter"},i.a.createElement("label",{className:"title"},"Sign Up for the Newsletter"),i.a.createElement("div",{className:"input-group"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h()}},!l&&i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",placeholder:"Email",className:"text-input email-input",value:t,onChange:function(e){var t=e.target.value;a(t),c("")},disabled:u}),i.a.createElement("button",{type:"submit",disabled:!v||u,className:"button contact-btn "+(v?"":"disabled")},"Contact Us"))),l&&i.a.createElement("div",{className:"alert alert--success margin-vert--sm",role:"alert"},"Successfully subscribed!"),n&&i.a.createElement("div",{className:"alert alert--danger margin-vert--sm",role:"alert"},n)))},v=[{logo:"/img/docs/home/logo/briskid.svg",whiteLogo:"/img/docs/home/logo/briskid-white.svg",title:"Brisk ID",description:"allows anyone with a mobile phone to create and manage a PayID.",userLogo:"/img/docs/home/developers/briskid.svg",userName:"Leighton Scarlett,",userdetail:"Founder",link:"https://devpost.com/software/briskid"},{logo:"/img/docs/home/logo/kyc-crypto.svg",whiteLogo:"/img/docs/home/logo/kyc-crypto-white.svg",title:"Verified PayID",description:"decentralized saved identities assigned to PayID.",userLogo:"/img/docs/home/developers/kyc-crypto.svg",userName:"Tobias Graf,",userdetail:"CEO KYC.Crypto",link:"https://devpost.com/software/verified-payid"},{logo:"/img/docs/home/logo/insta-pay.svg",whiteLogo:"/img/docs/home/logo/insta-pay-white.svg",title:"Instapay",description:"the fastest, easiest payment app for all financial transactions.",userLogo:"/img/docs/home/developers/insta-pay.svg",userName:"Jayshree Anandakumar,",userdetail:"Founder",link:"https://devpost.com/software/instapay"},{logo:"/img/docs/home/logo/xnd.svg",whiteLogo:"/img/docs/home/logo/xnd-white.svg",title:"XND",description:"a wallet that can perform cross-chain transfers directly to a PayID.",userLogo:"/img/docs/home/developers/xnd.svg",userName:"Anirudha Bose,",userdetail:"Backend Developer",link:"https://devpost.com/software/xnd"},{logo:"/img/docs/home/logo/x-payments.svg",whiteLogo:"/img/docs/home/logo/x-payments-white.svg",title:"Xpayments.me",description:"a central gateway for cryptocurrency payment information.",userLogo:"/img/docs/home/developers/x-payments.svg",userName:"Roshan Pawar,",userdetail:"Founder",link:"https://devpost.com/software/xpayments-me"},{logo:"/img/docs/home/logo/upay.svg",whiteLogo:"/img/docs/home/logo/upay-white.svg",title:"Upay",description:"get paid for your online services by anyone anywhere in the world.",userLogo:"/img/docs/home/developers/upay.svg",userName:"Konstantin Shkut,",userdetail:"Founder",link:"https://devpost.com/software/u-pay"},{logo:"/img/docs/home/logo/payid-validator.svg",whiteLogo:"/img/docs/home/logo/payid-validator-white.svg",title:"PayID Validator",description:"a tool for performing checks to validate PayID response headers.",userLogo:"/img/docs/home/developers/payid-validator.svg",userName:"Robert Swarthout,",userdetail:"Founder",link:"https://devpost.com/software/payid-validator"},{logo:"/img/docs/home/logo/zero-games.svg",whiteLogo:"/img/docs/home/logo/zero-games-white.svg",title:"0Games",description:"a peer-to-peer 0% fee video game crypto-marketplace.",userLogo:"/img/docs/home/developers/zero-games.svg",userName:"Aymeric Bethencourt,",userdetail:"Founder",link:"https://devpost.com/software/0games"},{logo:"/img/docs/home/logo/unisend.svg",whiteLogo:"/img/docs/home/logo/unisend-white.svg",title:"Unisend",description:"app to send money internationally for free using PayID.",userLogo:"/img/docs/home/developers/unisend.svg",userName:"Drew Patel,",userdetail:"Backend Developer",link:"https://devpost.com/software/temp-project-name-duso2p"}],h=[{text:"A full-featured cryptocurrency wallet with borrowing, lending, and exchange capabilities",logo:"/img/docs/home/logo/crypto.svg",logoWhite:"/img/docs/home/logo/crypto-white.svg",banner:"/img/docs/home/banners/crypto.png",url:"https://crypto.com/en/index.html"},{text:"A simple platform that offers the easiest way to get a PayID.",logo:"/img/docs/home/logo/payme-plus.svg",logoWhite:"/img/docs/home/logo/payme-plus-white.svg",banner:"/img/docs/home/banners/payme-plus.png",url:"https://www.payme.plus/"},{text:"An XRP-first digital assets exchange that is focused on delivering best-in-class customer security",logo:"/img/docs/home/logo/bitrue.svg",logoWhite:"/img/docs/home/logo/bitrue-white.svg",banner:"/img/docs/home/banners/bitrue.png",url:"https://www.bitrue.com/"},{text:"A hardware wallet in the form of a credit card that can send, store, and receive digital assets",logo:"/img/docs/home/logo/tangem.svg",logoWhite:"/img/docs/home/logo/tangem-white.svg",banner:"/img/docs/home/banners/tangem.png",url:"https://tangem.com/apps/"},{text:"A fully regulated cryptocurrency exchange that is available in 190+ countries",logo:"/img/docs/home/logo/coin-field.svg",logoWhite:"/img/docs/home/logo/coin-field-white.svg",banner:"/img/docs/home/banners/coin-field.png",url:"https://www.coinfield.com/"}],f=(a(54),[{title:"Getting Started",description:"Getting Started guide that covers basics that go beyond the sanbox.",icon:"/img/docs/home/getting-started.svg",whiteIcon:"/img/docs/home/getting-started-white.svg",url:"/getting-started"},{title:"Deploy PayID",description:"Check the deployment options page to integrate payID in your project.",icon:"/img/docs/home/deploy.svg",whiteIcon:"/img/docs/home/deploy-white.svg",url:"/intro-deploy"},{title:"Reference Implementation",description:"Here you can find API Reference, Security and Metrics.",icon:"/img/docs/home/reference.svg",whiteIcon:"/img/docs/home/reference-white.svg",url:"/payid-reference-overview"}]),b="/img/docs/home/join-discord.svg",y="/img/docs/home/join-discord-small.svg",w=function(){var e=Object(r.useState)(0),t=e[0],a=e[1],o=Object(s.a)().isDarkTheme,n=Object(l.a)().siteConfig.customFields,c=void 0===n?{}:n,u=Object(r.useMemo)((function(){return h[t]}),[t]),g=function(e){var o=h.length,n=0;e>0?t!==o-1&&(n=t+1):e<0&&(n=0!==t?t-1:o-1),a(n)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--6"},i.a.createElement("div",{className:"markdown greetings"},i.a.createElement("h1",{className:"markdown-title"},"Start building with PayID"),i.a.createElement("p",null,"Explore how easily you can build with PayID"),i.a.createElement("a",{href:c.sandboxUrl,target:"_blank"},i.a.createElement("button",{className:"button"},"Sign Up for Sandbox")))),i.a.createElement("div",{className:"col col--6 image-container"},i.a.createElement("img",{src:Object(m.a)("/img/docs/sandbox-image.png")}))),i.a.createElement("div",{className:"row home-middle"},f.map((function(e){return i.a.createElement("div",{className:"col col--4 sm-p-20 centered-col",key:e.title},i.a.createElement(d.a,{to:e.url},i.a.createElement("div",{className:"home-card"},i.a.createElement("div",{className:"home-card-body"},i.a.createElement("img",{src:o?Object(m.a)(e.whiteIcon):Object(m.a)(e.icon),className:"home-card-icon"}),i.a.createElement("h3",{className:"home-card-title"},e.title),i.a.createElement("p",null,e.description)))))}))),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",null,"Built by Developers"),i.a.createElement("p",null,"Explore what our developers are building.")),i.a.createElement("div",{className:"row home-middle built-by-developers"},v.map((function(e){return i.a.createElement("div",{className:"col col--4 sm-p-20 centered-parent",key:"developer-"+e.title},i.a.createElement("a",{href:e.link},i.a.createElement("div",{className:"developer-card centered-col"},i.a.createElement("div",{className:"developer-card-top"},i.a.createElement("img",{src:o?Object(m.a)(e.whiteLogo):Object(m.a)(e.logo)})),i.a.createElement("div",{className:"developer-card-middle"},i.a.createElement("div",{className:"developer-card-title"},e.title),i.a.createElement("p",null,e.description))),i.a.createElement("div",{className:"developer-info"},i.a.createElement("div",{className:"developer-image"},i.a.createElement("img",{src:Object(m.a)(e.userLogo)})),i.a.createElement("div",{className:"developer-details"},i.a.createElement("div",{className:"details"},e.userName),i.a.createElement("div",{className:"details"},e.userdetail)))))})),i.a.createElement("div",{className:"developer-btn"},i.a.createElement("a",{href:c.developerUrl,target:"_blank"},i.a.createElement("button",{className:"button"},"See More")))),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",null,"Get PayID Today")),i.a.createElement("div",{className:"banner-container"},i.a.createElement("div",{className:"banner-cards"},h.map((function(e,n){return i.a.createElement("div",{className:"banner-card "+(n===h.length-1?"last-idx":""),key:"cards-"+e.text},i.a.createElement("div",{className:"active-card "+(n===t?"active":"")}),i.a.createElement("div",{className:"banner-card-image",onClick:function(){a(n)}},i.a.createElement("img",{src:o?Object(m.a)(e.logoWhite):Object(m.a)(e.logo)})))}))),i.a.createElement("div",{className:"banner-body"},i.a.createElement("div",{className:"banner-arrow left",onClick:function(){return g(-1)}},i.a.createElement("img",{src:Object(m.a)("/img/docs/home/banners/go-left.svg")})),i.a.createElement("div",{className:"banner-content"},i.a.createElement("div",{className:"banner-left"},i.a.createElement("img",{src:Object(m.a)(u.logoWhite)}),i.a.createElement("p",{className:"banner-text"},u.text),i.a.createElement("a",{href:u.url},i.a.createElement("button",{className:"button"},"Get a PayID"))),i.a.createElement("div",{className:"banner-right",style:{backgroundImage:"url("+Object(m.a)(u.banner)+")",backgroundSize:"cover",backgroundPosition:"50% 50%"}})),i.a.createElement("div",{className:"banner-arrow right",onClick:function(){return g(1)}},i.a.createElement("img",{src:Object(m.a)("/img/docs/home/banners/go-right.svg")}))),i.a.createElement("div",{className:"banner-body-small"},i.a.createElement("div",{className:"banner-small-top",style:{backgroundImage:"url("+Object(m.a)(u.banner)+")",backgroundSize:"100% 100%"}}),i.a.createElement("div",{className:"banner-small-bottom"},i.a.createElement("img",{src:Object(m.a)(u.logoWhite)}),i.a.createElement("p",{className:"banner-small-text"},u.text),i.a.createElement(d.a,{to:"/getting-started"},i.a.createElement("button",{className:"button"},"Get a PayID"))))),i.a.createElement("div",{className:"discord-card",style:{backgroundImage:"url("+Object(m.a)(b)+")"}},i.a.createElement("img",{src:Object(m.a)("/img/docs/home/logo/discord.svg")}),i.a.createElement("h2",null,"Join Discord Community"),i.a.createElement("a",{href:c.discordUrl,className:"button",target:"_blank"},"Join Discord")),i.a.createElement("div",{className:"discord-card-small",style:{backgroundImage:"url("+Object(m.a)(y)+")"}},i.a.createElement("img",{src:Object(m.a)("/img/docs/home/logo/discord.svg")}),i.a.createElement("h2",{className:"discord-small-text"},"Join Discord Community"),i.a.createElement("a",{href:c.discordUrl,className:"button",target:"_blank"},"Join Discord")),i.a.createElement("div",{className:"divider"}),i.a.createElement(p,null))},E={id:"home",title:"Home",hide_title:!0,sidebar_label:"Home",hide_table_of_contents:!0,custom_edit_url:null},O={unversionedId:"home",id:"home",isDocsHomePage:!0,title:"Home",source:"@site/docs/home.mdx",permalink:"/payid-documentation/review-apps/fix-payid-links/eb96c2/",editUrl:null,sidebar_label:"Home",sidebar:"docs",next:{title:"Getting Started",permalink:"/payid-documentation/review-apps/fix-payid-links/eb96c2/getting-started"}},N=[],j={rightToc:N};function k(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(w,{mdxType:"Home"}))}k.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),m=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=m(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(a),g=o,p=d["".concat(i,".").concat(g)]||d[g]||u[g]||r;return a?n.a.createElement(p,c(c({ref:t},l),{},{components:a})):n.a.createElement(p,c({ref:t},l))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";var o=a(0),n=a(22);t.a=function(){var e=Object(o.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},98:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(13),i=a(101),c=a(7),s=Object(o.createContext)({collectLink:function(){}}),l=a(99),m=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};t.a=function(e){var t,a,d,u=e.isNavLink,g=e.to,p=e.href,v=e.activeClassName,h=e["data-noBrokenLinkCheck"],f=m(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),b=Object(l.b)().withBaseUrl,y=Object(o.useContext)(s),w=g||p,E=void 0!==w?function(e){return e.startsWith("/")}(a=w)?b(a):w:void 0,O=Object(i.a)(E),N=Object(o.useRef)(!1),j=u?r.e:r.c,k=c.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!k&&O&&window.docusaurus.prefetch(E),function(){k&&d&&d.disconnect()}}),[E,k,O]);var x=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,D=!E||!O||x;return E&&O&&!x&&!h&&y.collectLink(E),D?n.a.createElement("a",Object.assign({href:E},!O&&{target:"_blank",rel:"noopener noreferrer"},f)):n.a.createElement(j,Object.assign({},f,{onMouseEnter:function(){N.current||(window.docusaurus.preload(E),N.current=!0)},innerRef:function(e){var t,a;k&&e&&O&&(t=e,a=function(){window.docusaurus.prefetch(E)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:E},u&&{activeClassName:v}))}},99:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var o=a(97),n=a(101);function r(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,c=void 0!==i&&i,s=r.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var m=!a.startsWith(t)?t+a.replace(/^\//,""):a;return l?e+m:m}(r,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}}}]);