(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{54:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=(a(0),a(98)),c={id:"payid-use-cases",title:"PayID Use Cases",sidebar_label:"PayID Use Cases"},s={unversionedId:"payid-use-cases",id:"payid-use-cases",isDocsHomePage:!1,title:"PayID Use Cases",description:"PayID can be used anywhere that a payment workflow occurs. Due to the ease of PayID, you can also consider new ways to monetize products and services.",source:"@site/docs/payid-use-cases.md",permalink:"/payid-documentation/review-apps/loisrp-welcome-what/86f5fb/payid-use-cases",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/payid-use-cases.md",sidebar_label:"PayID Use Cases"},i=[{value:"Wallets and exchanges",id:"wallets-and-exchanges",children:[]},{value:"Building with PayID",id:"building-with-payid",children:[]},{value:"Tutorials based on PayID use cases",id:"tutorials-based-on-payid-use-cases",children:[]}],l={rightToc:i};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"PayID can be used anywhere that a payment workflow occurs. Due to the ease of PayID, you can also consider new ways to monetize products and services."),Object(o.b)("p",null,"If you are using PayID for your app, you can use the reference implementation as a basis for your PayID methodology, or you can develop your own implementation."),Object(o.b)("p",null,"You can see some examples of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.payid.org/"}),"PayID technology in action"),". These apps cover use cases like these. Payments may be done end-to-end in cryptocurrency, but do not have to be. Some ideas implemented by partners or hackathon participants include the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a PayID with a mobile phone"),Object(o.b)("li",{parentName:"ul"},"Create QR codes that represent a PayID"),Object(o.b)("li",{parentName:"ul"},"Game key marketplace"),Object(o.b)("li",{parentName:"ul"},"International money transfers"),Object(o.b)("li",{parentName:"ul"},"International payments for work"),Object(o.b)("li",{parentName:"ul"},"Wallet that performs cross-chain transfers directly to a PayID"),Object(o.b)("li",{parentName:"ul"},"Central gateway to send and receive crypto and fiat payments"),Object(o.b)("li",{parentName:"ul"},"A physical store of value on a card")),Object(o.b)("h2",{id:"wallets-and-exchanges"},"Wallets and exchanges"),Object(o.b)("p",null,"A wallet is a software program in which you store your cryptocurrency. An exchange can host a wallet, but primarily an exchange is used primarily to store cryptocurrency and to convert between cryptocurrency and fiat currency. PayID can be used for all of these transaction types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Wallet to wallet"),Object(o.b)("li",{parentName:"ul"},"Exchange to exchange"),Object(o.b)("li",{parentName:"ul"},"Exchange to wallet"),Object(o.b)("li",{parentName:"ul"},"Wallet to exchange")),Object(o.b)("h2",{id:"building-with-payid"},"Building with PayID"),Object(o.b)("p",null,"PayID can become part of payment flows. Wherever there is a credit card request or an option to pay by PayID or Venmo or another such service, PayID can be used as well."),Object(o.b)("p",null,"A harder question is: Where can PayID be used where it's not an obvious option?"),Object(o.b)("h2",{id:"tutorials-based-on-payid-use-cases"},"Tutorials based on PayID use cases"),Object(o.b)("p",null,"Stripe can be deployed to implement much of a bank's machinery, as [shown here[(",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stripe.com/docs/payments/charges-api"}),"https://stripe.com/docs/payments/charges-api"),") and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stripe.com/docs"}),"here"),". PayID simply lacks that level of functionality, and it's not what it is trying to do anyway. We should concentrate on simple options at first."),Object(o.b)("p",null,"We have simple tutorials showing how to use the PayID APIs, how to use PayID CLI, how to use Verifiable PayID, how to deploy PayID, and how to use metrics."),Object(o.b)("p",null,"A simple tutorial could show the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use a Payburner wallet (or maybe look at incorporating a workflow on creating a walllet) and load it with a few XRP."),Object(o.b)("li",{parentName:"ul"},"Create a different wallet, or another Payburner wallet."),Object(o.b)("li",{parentName:"ul"},"Create a PayID (signed) for each wallet."),Object(o.b)("li",{parentName:"ul"},"Use one wallet to pay the other."),Object(o.b)("li",{parentName:"ul"},"Use Get Payment Information, and Get User."),Object(o.b)("li",{parentName:"ul"},"For bonus points, use RippleX Dev Kit.")),Object(o.b)("p",null,"A related tutorial could show transfers between different networks (so maybe two different types of wallets?)."),Object(o.b)("p",null,"As new features come into play, then we have more options."))}u.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(a),y=n,d=p["".concat(c,".").concat(y)]||p[y]||b[y]||o;return a?r.a.createElement(d,s(s({ref:t},l),{},{components:a})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);