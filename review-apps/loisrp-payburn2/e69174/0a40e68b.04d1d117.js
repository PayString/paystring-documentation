(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return S})),a.d(t,"metadata",(function(){return I})),a.d(t,"rightToc",(function(){return _})),a.d(t,"default",(function(){return P}));var o=a(2),r=a(7),i=a(0),n=a.n(i),s=a(101),c=a(109),l=a(102),m=a(104),d=a(103),p=a(157),g=a.n(p),u=function(e,t){var a=JSON.stringify({type:"Typewriter JSON Schema Validation Error",description:"You made an analytics call ("+e.event+") using Typewriter that doesn't match the Tracking Plan spec.",errors:t},void 0,2);console.warn(a)},h=function(){return window.analytics};function v(e,t){var o=new g.a({schemaId:"auto",allErrors:!0,verbose:!0});o.addMetaSchema(a(191)),o.addMetaSchema(a(192)),!o.validate(t,e)&&o.errors&&u(e,o.errors)}function y(e){return void 0===e&&(e={}),Object.assign({},e,{context:Object.assign({},e.context||{},{typewriter:{language:"typescript",version:"7.2.1"}})})}function b(e,t,a){v({event:"Form Submitted",properties:e||{},options:t},{$schema:"http://json-schema.org/draft-07/schema#",labels:{},properties:{context:{},properties:{properties:{company:{description:"",type:"string"},email:{description:"",type:"string"},first_name:{description:"",type:"string"},form_name:{description:"",type:"string"},implementing_payid:{description:"",type:"string"},last_name:{description:"",type:"string"},message:{description:"",type:"string"},notify_future_developer_events:{description:"",type:"string"},role:{description:"",type:"string"}},required:["email"],type:"object"},traits:{type:"object"}},required:["properties"],title:"Form Submitted",type:"object"});var o=h();o&&o.track("Form Submitted",e||{},y(t),a)}new Proxy({setTypewriterOptions:function(e){h=e.analytics?function(){return e.analytics||window.analytics}:h,u=e.onViolation||u},accountRegistered:function(e,t,a){v({event:"Account Registered",properties:e||{},options:t},{$schema:"http://json-schema.org/draft-07/schema#",labels:{},properties:{context:{},properties:{properties:{github_id:{description:"",type:"string"},type:{description:"",type:"string"}},required:["type","github_id"],type:"object"},traits:{type:"object"}},required:["properties"],title:"Account Registered",type:"object"});var o=h();o&&o.track("Account Registered",e||{},y(t),a)},documentationViewed:function(e,t,a){v({event:"Documentation Viewed",properties:e||{},options:t},{$schema:"http://json-schema.org/draft-07/schema#",labels:{},properties:{context:{},properties:{properties:{category:{description:"",type:"string"},title:{description:"",type:"string"}},required:["title"],type:"object"},traits:{type:"object"}},required:["properties"],title:"Documentation Viewed",type:"object"});var o=h();o&&o.track("Documentation Viewed",e||{},y(t),a)},formSubmitted:b,githubNavigation:function(e,t,a){v({event:"Github Navigation",properties:e||{},options:t},{$schema:"http://json-schema.org/draft-07/schema#",labels:{},properties:{context:{},properties:{properties:{text:{description:"",type:"string"},type:{description:"",type:"string"},url:{description:"",type:"string"}},required:["type","url"],type:"object"},traits:{type:"object"}},required:["properties"],title:"Github Navigation",type:"object"});var o=h();o&&o.track("Github Navigation",e||{},y(t),a)},loggedIn:function(e,t,a){v({event:"Logged In",properties:e||{},options:t},{$schema:"http://json-schema.org/draft-07/schema#",labels:{},properties:{context:{},properties:{properties:{type:{description:"",type:"string"}},required:["type"],type:"object"},traits:{type:"object"}},required:["properties"],title:"Logged In",type:"object"});var o=h();o&&o.track("Logged In",e||{},y(t),a)},sandboxCreated:function(e,t,a){v({event:"Sandbox Created",properties:e||{},options:t},{$schema:"http://json-schema.org/draft-07/schema#",labels:{},properties:{context:{},properties:{properties:{domain:{description:"",type:"string"},sandbox_id:{description:"",type:"string"}},required:["domain","sandbox_id"],type:"object"},traits:{type:"object"}},required:["properties"],title:"Sandbox Created",type:"object"});var o=h();o&&o.track("Sandbox Created",e||{},y(t),a)}},{get:function(e,t){return"string"==typeof t&&e.hasOwnProperty(t)?e[t]:function(){console.warn("\u26a0\ufe0f  You made an analytics call ("+String(t)+") that can't be found. Either:\n    a) Re-generate your typewriter client: `npx typewriter`\n    b) Add it to your Tracking Plan: https://app.segment.com/ripplex/protocols/tracking-plans/rs_1ibhNXCFfrXSwj4y7YNiWCRf27l");var e=h();e&&e.track("Unknown Analytics Call Fired",{method:t},y())}}});var f=/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,w=function(e){return!(!e||!f.test(e))},E=function(){var e=Object(i.useState)(""),t=e[0],a=e[1],o=Object(i.useState)(""),r=o[0],s=o[1],c=Object(i.useState)(!1),l=c[0],m=c[1],d=Object(i.useState)(!1),p=d[0],g=d[1],u=Object(i.useMemo)((function(){return w(t)}),[t]),h=Object(i.useCallback)((function(){if(s(""),w(t)){"undefined"!=typeof window&&(void 0!==window.heap&&window.heap.track("newsletter",{email:t}),void 0!==window.gtag&&(window.gtag("event","conversion",{send_to:"AW-877332159/jdvuCLLdpdQBEL-NrKID"}),window.gtag("event","conversion",{send_to:"AW-616173950/7ehtCOKFvNYBEP6i6KUC"})));var e="email="+t;g(!0),fetch("https://go.ripple.com/l/105572/2020-06-15/cspx4n",{mode:"no-cors",method:"POST",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(){a(""),s(""),m(!0)})).catch((function(e){s("Error sending email."),console.error(e)})).finally((function(){g(!1)})),fetch("https://script.google.com/macros/s/AKfycbyT7zjGQMQKaSrE9ef1NuvAFGKGUc8cnnUGSFo7V5Q6HWeBx-DL/exec?"+e,{mode:"no-cors"}).catch((function(){})),b({email:t,form_name:"documentation_newsletter"}),window.analytics.identify({email:t})}else s("Invalid email.")}),[t,s,a,m,g]);return n.a.createElement("div",{className:"newsletter"},n.a.createElement("label",{className:"title"},"Sign Up for the Newsletter"),n.a.createElement("div",{className:"input-group"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h()}},!l&&n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{type:"email",placeholder:"Email",name:"email",className:"text-input email-input",value:t,onChange:function(e){var t=e.target.value;a(t),s("")},disabled:p}),n.a.createElement("button",{type:"submit",disabled:!u||p,className:"button contact-btn "+(u?"":"disabled")},"Contact Us"))),l&&n.a.createElement("div",{className:"alert alert--success margin-vert--sm",role:"alert"},"Successfully subscribed!"),r&&n.a.createElement("div",{className:"alert alert--danger margin-vert--sm",role:"alert"},r)))},N=[{logo:"/img/docs/home/logo/briskid.svg",whiteLogo:"/img/docs/home/logo/briskid-white.svg",title:"Brisk ID",description:"allows anyone with a mobile phone to create and manage a PayID.",userLogo:"/img/docs/home/developers/briskid.svg",userName:"Leighton Scarlett,",userdetail:"Founder",link:"https://devpost.com/software/briskid"},{logo:"/img/docs/home/logo/kyc-crypto.svg",whiteLogo:"/img/docs/home/logo/kyc-crypto-white.svg",title:"Verified PayID",description:"decentralized saved identities assigned to PayID.",userLogo:"/img/docs/home/developers/kyc-crypto.svg",userName:"Tobias Graf,",userdetail:"CEO KYC.Crypto",link:"https://devpost.com/software/verified-payid"},{logo:"/img/docs/home/logo/insta-pay.svg",whiteLogo:"/img/docs/home/logo/insta-pay-white.svg",title:"Instapay",description:"the fastest, easiest payment app for all financial transactions.",userLogo:"/img/docs/home/developers/insta-pay.svg",userName:"Jayshree Anandakumar,",userdetail:"Founder",link:"https://devpost.com/software/instapay"},{logo:"/img/docs/home/logo/xnd.svg",whiteLogo:"/img/docs/home/logo/xnd-white.svg",title:"XND",description:"a wallet that can perform cross-chain transfers directly to a PayID.",userLogo:"/img/docs/home/developers/xnd.svg",userName:"Anirudha Bose,",userdetail:"Backend Developer",link:"https://devpost.com/software/xnd"},{logo:"/img/docs/home/logo/x-payments.svg",whiteLogo:"/img/docs/home/logo/x-payments-white.svg",title:"Xpayments.me",description:"a central gateway for cryptocurrency payment information.",userLogo:"/img/docs/home/developers/x-payments.svg",userName:"Roshan Pawar,",userdetail:"Founder",link:"https://devpost.com/software/xpayments-me"},{logo:"/img/docs/home/logo/upay.svg",whiteLogo:"/img/docs/home/logo/upay-white.svg",title:"Upay",description:"get paid for your online services by anyone anywhere in the world.",userLogo:"/img/docs/home/developers/upay.svg",userName:"Konstantin Shkut,",userdetail:"Founder",link:"https://devpost.com/software/u-pay"},{logo:"/img/docs/home/logo/payid-validator.svg",whiteLogo:"/img/docs/home/logo/payid-validator-white.svg",title:"PayID Validator",description:"a tool for performing checks to validate PayID response headers.",userLogo:"/img/docs/home/developers/payid-validator.svg",userName:"Robert Swarthout,",userdetail:"Founder",link:"https://devpost.com/software/payid-validator"},{logo:"/img/docs/home/logo/zero-games.svg",whiteLogo:"/img/docs/home/logo/zero-games-white.svg",title:"0Games",description:"a peer-to-peer 0% fee video game crypto-marketplace.",userLogo:"/img/docs/home/developers/zero-games.svg",userName:"Aymeric Bethencourt,",userdetail:"Founder",link:"https://devpost.com/software/0games"},{logo:"/img/docs/home/logo/unisend.svg",whiteLogo:"/img/docs/home/logo/unisend-white.svg",title:"Unisend",description:"app to send money internationally for free using PayID.",userLogo:"/img/docs/home/developers/unisend.svg",userName:"Drew Patel,",userdetail:"Backend Developer",link:"https://devpost.com/software/temp-project-name-duso2p"}],j=[{text:"A full-featured cryptocurrency wallet with borrowing, lending, and exchange capabilities",logo:"/img/docs/home/logo/crypto.svg",logoWhite:"/img/docs/home/logo/crypto-white.svg",banner:"/img/docs/home/banners/crypto.png",url:"https://crypto.com/en/index.html"},{text:"A simple platform that offers the easiest way to get a PayID.",logo:"/img/docs/home/logo/payme-plus.svg",logoWhite:"/img/docs/home/logo/payme-plus-white.svg",banner:"/img/docs/home/banners/payme-plus.png",url:"https://www.payme.plus/"},{text:"An XRP-first digital assets exchange that is focused on delivering best-in-class customer security",logo:"/img/docs/home/logo/bitrue.svg",logoWhite:"/img/docs/home/logo/bitrue-white.svg",banner:"/img/docs/home/banners/bitrue.png",url:"https://www.bitrue.com/"},{text:"A hardware wallet in the form of a credit card that can send, store, and receive digital assets",logo:"/img/docs/home/logo/tangem.svg",logoWhite:"/img/docs/home/logo/tangem-white.svg",banner:"/img/docs/home/banners/tangem.png",url:"https://tangem.com/apps/"},{text:"A fully regulated cryptocurrency exchange that is available in 190+ countries",logo:"/img/docs/home/logo/coin-field.svg",logoWhite:"/img/docs/home/logo/coin-field-white.svg",banner:"/img/docs/home/banners/coin-field.png",url:"https://www.coinfield.com/"}],k=(a(57),[{title:"Getting Started",description:"Getting Started guide that covers basics that go beyond the sandbox.",icon:"/img/docs/home/getting-started.svg",whiteIcon:"/img/docs/home/getting-started-white.svg",url:"/getting-started"},{title:"Deploy PayID",description:"Check the deployment options page to integrate PayID in your project.",icon:"/img/docs/home/deploy.svg",whiteIcon:"/img/docs/home/deploy-white.svg",url:"/intro-deploy"},{title:"Reference Implementation",description:"Here you can find API Reference, Security and Metrics.",icon:"/img/docs/home/reference.svg",whiteIcon:"/img/docs/home/reference-white.svg",url:"/payid-reference-overview"}]),x="/img/docs/home/join-discord.svg",O="/img/docs/home/join-discord-small.svg",D=function(){var e=Object(i.useState)(0),t=e[0],a=e[1],o=Object(c.a)().isDarkTheme,r=Object(l.a)().siteConfig.customFields,s=void 0===r?{}:r,p=Object(i.useMemo)((function(){return j[t]}),[t]),g=function(e){var o=j.length,r=0;e>0?t!==o-1&&(r=t+1):e<0&&(r=0!==t?t-1:o-1),a(r)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--6"},n.a.createElement("div",{className:"markdown greetings"},n.a.createElement("h1",{className:"markdown-title"},"Start building with PayID"),n.a.createElement("p",null,"Explore how easily you can build with PayID"),n.a.createElement("a",{href:s.sandboxUrl,target:"_blank"},n.a.createElement("button",{className:"button"},"Sign Up for Sandbox")))),n.a.createElement("div",{className:"col col--6 image-container"},n.a.createElement("img",{src:Object(m.a)("/img/docs/sandbox-image.png")}))),n.a.createElement("div",{className:"row home-middle"},k.map((function(e){return n.a.createElement("div",{className:"col col--4 sm-p-20 centered-col",key:e.title},n.a.createElement(d.a,{to:e.url},n.a.createElement("div",{className:"home-card"},n.a.createElement("div",{className:"home-card-body"},n.a.createElement("img",{src:o?Object(m.a)(e.whiteIcon):Object(m.a)(e.icon),className:"home-card-icon"}),n.a.createElement("h3",{className:"home-card-title"},e.title),n.a.createElement("p",null,e.description)))))}))),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",null,"Built by Developers"),n.a.createElement("p",null,"Explore what our developers are building.")),n.a.createElement("div",{className:"row home-middle built-by-developers"},N.map((function(e){return n.a.createElement("div",{className:"col col--4 sm-p-20 centered-parent",key:"developer-"+e.title},n.a.createElement("a",{href:e.link},n.a.createElement("div",{className:"developer-card centered-col"},n.a.createElement("div",{className:"developer-card-top"},n.a.createElement("img",{src:o?Object(m.a)(e.whiteLogo):Object(m.a)(e.logo)})),n.a.createElement("div",{className:"developer-card-middle"},n.a.createElement("div",{className:"developer-card-title"},e.title),n.a.createElement("p",null,e.description))),n.a.createElement("div",{className:"developer-info"},n.a.createElement("div",{className:"developer-image"},n.a.createElement("img",{src:Object(m.a)(e.userLogo)})),n.a.createElement("div",{className:"developer-details"},n.a.createElement("div",{className:"details"},e.userName),n.a.createElement("div",{className:"details"},e.userdetail)))))})),n.a.createElement("div",{className:"developer-btn"},n.a.createElement("a",{href:s.developerUrl,target:"_blank"},n.a.createElement("button",{className:"button"},"See More")))),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",null,"Get PayID Today")),n.a.createElement("div",{className:"banner-container"},n.a.createElement("div",{className:"banner-cards"},j.map((function(e,r){return n.a.createElement("div",{className:"banner-card "+(r===j.length-1?"last-idx":""),key:"cards-"+e.text},n.a.createElement("div",{className:"active-card "+(r===t?"active":"")}),n.a.createElement("div",{className:"banner-card-image",onClick:function(){a(r)}},n.a.createElement("img",{src:o?Object(m.a)(e.logoWhite):Object(m.a)(e.logo)})))}))),n.a.createElement("div",{className:"banner-body"},n.a.createElement("div",{className:"banner-arrow left",onClick:function(){return g(-1)}},n.a.createElement("img",{src:Object(m.a)("/img/docs/home/banners/go-left.svg")})),n.a.createElement("div",{className:"banner-content"},n.a.createElement("div",{className:"banner-left"},n.a.createElement("img",{src:Object(m.a)(p.logoWhite)}),n.a.createElement("p",{className:"banner-text"},p.text),n.a.createElement("a",{href:p.url,target:"_blank"},n.a.createElement("button",{className:"button"},"Get a PayID"))),n.a.createElement("div",{className:"banner-right",style:{backgroundImage:"url("+Object(m.a)(p.banner)+")",backgroundSize:"cover",backgroundPosition:"50% 50%"}})),n.a.createElement("div",{className:"banner-arrow right",onClick:function(){return g(1)}},n.a.createElement("img",{src:Object(m.a)("/img/docs/home/banners/go-right.svg")}))),n.a.createElement("div",{className:"banner-body-small"},n.a.createElement("div",{className:"banner-small-top",style:{backgroundImage:"url("+Object(m.a)(p.banner)+")",backgroundSize:"100% 100%"}}),n.a.createElement("div",{className:"banner-small-bottom"},n.a.createElement("img",{src:Object(m.a)(p.logoWhite)}),n.a.createElement("p",{className:"banner-small-text"},p.text),n.a.createElement(d.a,{to:"/getting-started"},n.a.createElement("button",{className:"button"},"Get a PayID"))))),n.a.createElement("div",{className:"discord-card",style:{backgroundImage:"url("+Object(m.a)(x)+")"}},n.a.createElement("img",{src:Object(m.a)("/img/docs/home/logo/discord.svg")}),n.a.createElement("h2",null,"Join Discord Community"),n.a.createElement("a",{href:s.discordUrl,className:"button",target:"_blank"},"Join Discord")),n.a.createElement("div",{className:"discord-card-small",style:{backgroundImage:"url("+Object(m.a)(O)+")"}},n.a.createElement("img",{src:Object(m.a)("/img/docs/home/logo/discord.svg")}),n.a.createElement("h2",{className:"discord-small-text"},"Join Discord Community"),n.a.createElement("a",{href:s.discordUrl,className:"button",target:"_blank"},"Join Discord")),n.a.createElement("div",{className:"divider"}),n.a.createElement(E,null))},S={id:"home",title:"Home",hide_title:!0,sidebar_label:"Home",hide_table_of_contents:!0,custom_edit_url:null},I={unversionedId:"home",id:"home",isDocsHomePage:!0,title:"Home",source:"@site/docs/home.mdx",permalink:"/payid-documentation/review-apps/loisrp-payburn2/e69174/",editUrl:null,sidebar_label:"Home",sidebar:"docs",next:{title:"What is PayID?",permalink:"/payid-documentation/review-apps/loisrp-payburn2/e69174/what-is-payid"}},_=[],L={rightToc:_};function P(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},L,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(D,{mdxType:"Home"}))}P.isMDXComponent=!0}}]);