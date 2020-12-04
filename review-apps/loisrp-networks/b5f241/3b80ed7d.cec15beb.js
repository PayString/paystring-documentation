(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(99)),o={id:"payid-schemas",title:"Schemas",sidebar_label:"Schemas"},c={unversionedId:"payid-schemas",id:"payid-schemas",isDocsHomePage:!1,title:"Schemas",description:"See also: PayID API Reference.",source:"@site/docs/payid-schemas.md",permalink:"/payid-documentation/review-apps/loisrp-networks/b5f241/payid-schemas",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/payid-schemas.md",sidebar_label:"Schemas",sidebar:"docs",previous:{title:"Interfaces",permalink:"/payid-documentation/review-apps/loisrp-networks/b5f241/payid-interfaces"},next:{title:"Use RippleX Dev Kit With PayID",permalink:"/payid-documentation/review-apps/loisrp-networks/b5f241/ripplex-dev-kit-payid"}},s=[{value:"Example single user schema",id:"example-single-user-schema",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"See also: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://api.payid.org"}),"PayID API Reference"),"."),Object(i.b)("p",null,"The PayID protocol includes the following schema definitions."),Object(i.b)("p",null,"These schemas are used for request or response payloads for various requests."),Object(i.b)("h3",{id:"example-single-user-schema"},"Example single user schema"),Object(i.b)("p",null,"A single user can have multiple destinations, because the same user can have addresses on different networks for different currencies. This schema is used as a payload with a request to create a user, or as a response to a request to get information about a user."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "payId": "johndoe$ripplex.money",\n  "addresses": [\n    {\n      "paymentNetwork": "XRPL",\n      "environment": "TESTNET",\n      "details": {\n        "address": "TVQWr6BhgBLW2jbFyqqufgq8T9eN7KresB684ZSHKQ3oDth"\n      }\n    },\n    {\n      "paymentNetwork": "XRPL",\n      "environment": "MAINNET",\n      "details": {\n        "address": "X7zmKiqEhMznSXgj9cirEnD5sWo3iZSbeFRexSFN1xZ8Ktn"\n      }\n    }\n  ]\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"payId")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PayID user address")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"addresses")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Object that includes payment address information for one or more payment networks.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"addresses.paymentNetwork")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A payment network, like the bitcoin network, the XRPL, or ACH.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"addresses.environment")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"Environment" of the payment network for this payment address. For example, the XPR Ledger has MAINNET, TESTNET, and DEVNET.')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"address.details")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Actual payment information for this address. Must be in the form ",Object(i.b)("inlineCode",{parentName:"td"},"CryptoAddressDetails")," or ",Object(i.b)("inlineCode",{parentName:"td"},"FiatAddressDetails"),". See ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"#interfaces"}),"Interfaces"),".")))))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);