(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),i=(a(0),a(99)),o={id:"what-is-payid",title:"What is PayID?",sidebar_label:"What is PayID?"},s={unversionedId:"what-is-payid",id:"what-is-payid",isDocsHomePage:!1,title:"What is PayID?",description:"PayID is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. With the PayID protocol, you use human-readable addresses to transmit value in the currency of your choice. The PayID network allows participants to reach one another through standardized addresses. An address such as alice$example.com maps to the corresponding URL https://example.com/alice.",source:"@site/docs/what-is-payid.md",permalink:"/payid-documentation/review-apps/segment/4bbdfa/what-is-payid",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/what-is-payid.md",sidebar_label:"What is PayID?",sidebar:"docs",previous:{title:"Home",permalink:"/payid-documentation/review-apps/segment/4bbdfa/"},next:{title:"Get Started Overview",permalink:"/payid-documentation/review-apps/segment/4bbdfa/getting-started"}},c=[{value:"PayID standards",id:"payid-standards",children:[{value:"PayID protocol whitepaper",id:"payid-protocol-whitepaper",children:[]},{value:"PayID RFCs",id:"payid-rfcs",children:[]}]},{value:"Implementations",id:"implementations",children:[]},{value:"Building blocks",id:"building-blocks",children:[{value:"Web standards",id:"web-standards",children:[]},{value:"Decentralization",id:"decentralization",children:[]},{value:"Protocol abstraction",id:"protocol-abstraction",children:[]},{value:"Security requirements",id:"security-requirements",children:[]}]},{value:"Future features and integrations",id:"future-features-and-integrations",children:[{value:"Verifiable PayID",id:"verifiable-payid",children:[]},{value:"Compliance and Travel Rule",id:"compliance-and-travel-rule",children:[]},{value:"Other upcoming features and integrations",id:"other-upcoming-features-and-integrations",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"PayID is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. With the PayID protocol, you use human-readable addresses to transmit value in the currency of your choice. The PayID network allows participants to reach one another through standardized addresses. An address such as ",Object(i.b)("inlineCode",{parentName:"p"},"alice$example.com")," maps to the corresponding URL ",Object(i.b)("inlineCode",{parentName:"p"},"https://example.com/alice"),"."),Object(i.b)("p",null,"When you make an HTTP GET request that follows the PayID protocol, it resolves to an address on the underlying payment network. PayID is a payment-network-agnostic protocol, capable of sending payments in BTC, ETH, XRP, or fiat networks like ACH."),Object(i.b)("p",null,"PayID is fully peer-to-peer with no central counterparty. Anyone can set up their own PayID server or integrate with a trustless blockchain solution so they have no counterparty risk."),Object(i.b)("p",null,"The PayID protocol is designed to be simple, general, open, and universal. This makes it composable with any other existing namespace, including blockchain namespace projects like ENS and Unstoppable Domains or app-specific usernames. Anyone with an existing username or address can get a PayID address that works across all platforms."),Object(i.b)("p",null,"Payid.org has created a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"payid-reference-overview"}),"reference implementation")," of the PayID protocol, which you can ","[view on GitHub]","((",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid"}),"https://github.com/payid-org/payid"),"). You are welcome to create your own implementation as well."),Object(i.b)("h2",{id:"payid-standards"},"PayID standards"),Object(i.b)("p",null,"PayID is an open standard. Commentary is welcome. You can open a Github issue to provide feedback."),Object(i.b)("h3",{id:"payid-protocol-whitepaper"},"PayID protocol whitepaper"),Object(i.b)("p",null,"Refer to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://payid.org/whitepaper.pdf"}),"PayID protocol whitepaper")," for an extensive discussion of the underlying principles."),Object(i.b)("h3",{id:"payid-rfcs"},"PayID RFCs"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/rfcs"}),"Current PayID RFCs")," describe the 'payid' URL Scheme, PayID Discovery, and the PayID protocol."),Object(i.b)("h2",{id:"implementations"},"Implementations"),Object(i.b)("p",null,"You can decide how you want to implement the PayID protocol. To facilitate ease of use, RippleX has created a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"payid-reference-overview"}),"reference implementation for a PayID server"),". Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/xpring-eng/payid/"}),"PayID repository on Github"),". Refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/"}),"Getting started")," for a quick guide to deploy your own PayID server, manage users, and execute transactions."),Object(i.b)("p",null,"If you want to contribute to PayID, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid/blob/master/CONTRIBUTING.md"}),"Contributing to PayID"),"."),Object(i.b)("h2",{id:"building-blocks"},"Building blocks"),Object(i.b)("h3",{id:"web-standards"},"Web standards"),Object(i.b)("p",null,"PayID uses existing web standards and infrastructure, including HTTP and DNS. Each institution supports its users through its domain, creating a decentralized network where institutions maintain sovereignty over their own users. Each institution is empowered to participate in the network by deploying its own server with its own users. Additionally, a user who prefers to self-custody their cryptocurrency can deploy a personal PayID server, as described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#set-up-a-payid-server"}),"Set up a PayID server"),"."),Object(i.b)("p",null,"PayID does not rely on any consensus protocols, which simplifies infrastructure demands."),Object(i.b)("h3",{id:"decentralization"},"Decentralization"),Object(i.b)("p",null,"PayID is built on the most successful decentralized network in history: the web. PayID is fully peer-to-peer with no central counterparty. Anyone can set up their own personal PayID server so they have no counterparty risk."),Object(i.b)("h3",{id:"protocol-abstraction"},"Protocol abstraction"),Object(i.b)("p",null,"PayID fully abstracts away underlying payment rail details from end users. A user only needs to keep track of a single PayID rather than a complex address for each network. Service operators can manage the underlying addresses behind the scenes according to their own security and privacy best practices without requiring the end user to take any action."),Object(i.b)("h3",{id:"security-requirements"},"Security requirements"),Object(i.b)("p",null,"A PayID implementation requires the use of TLS (Transport Level Security). As described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"payid-best-practices"}),"PayID Security and Best Practices"),", the use of TLS 1.3 is highly recommended."),Object(i.b)("h2",{id:"future-features-and-integrations"},"Future features and integrations"),Object(i.b)("p",null,"PayID is an extensible and flexible open standard, and therefore can be used as a basis for additional solutions. In upcoming releases, RippleX intends to extend PayID capabilities as described here."),Object(i.b)("h3",{id:"verifiable-payid"},"Verifiable PayID"),Object(i.b)("p",null,"Verifiable PayID is a suite of security enhancements to the base PayID request and response that adds in a variety of digital signature fields for linking external digital identities, proving control of the payment rail address, and providing non-repudiable messaging. It can be used to enable trust-minimized and trust-free security regimes and has applications in both custodial and non-custodial settings."),Object(i.b)("p",null,"To learn more, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/rfcs/blob/master/dist/spec/verifiable-payid-protocol.txt"}),"Verifiable PayID RFC"),"."),Object(i.b)("h3",{id:"compliance-and-travel-rule"},"Compliance and Travel Rule"),Object(i.b)("p",null,"As a system designed for all payments, PayID needs to accommodate the variety of compliance requirements that may apply to any particular payment, whether over a traditional or crypto payment rail."),Object(i.b)("p",null,"Of particular relevance, PayID can be extended to provide an elegant solution for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.fatf-gafi.org/media/fatf/documents/recommendations/RBA-VA-VASPs.pdf"}),"Travel Rule")," compliance with a focus on crypto transactions. Travel Rule has proven to be a tricky problem for crypto transactions, but it is greatly simplified when sending to a PayID."),Object(i.b)("p",null,"The compliance extension to PayID provides an abstraction layer so that users can send payments to human-readable addresses while virtual asset service providers (VASPs) can meet the necessary compliance requirements in the background. Financial institutions can communicate regulatory requirements and the corresponding necessary data by using the PayID Public API, which is a standard REST API."),Object(i.b)("p",null,"By default, data exchange in the Travel Rule extension is accomplished via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://trisa.io/"}),"TRISA protocol"),". TRISA is a complementary protocol built on common principles shared by PayID, including simplicity, security, a commitment to free and open source tech, use of proven technology, and an emphasis on interoperability and scalability."),Object(i.b)("h3",{id:"other-upcoming-features-and-integrations"},"Other upcoming features and integrations"),Object(i.b)("p",null,"Some features and integrations on the roadmap include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Additional payment rail standards"),Object(i.b)("li",{parentName:"ul"},"Payment request (",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.w3.org/TR/payment-request/"}),"W3C Standard"),") integration"),Object(i.b)("li",{parentName:"ul"},"Advanced payment type support: pull, push, streaming, subscription"),Object(i.b)("li",{parentName:"ul"},"PayID forwarding and redirection")))}p.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return y}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,y=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return a?r.a.createElement(y,s(s({ref:t},l),{},{components:a})):r.a.createElement(y,s({ref:t},l))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);