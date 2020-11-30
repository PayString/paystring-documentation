(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return t?o.a.createElement(b,s(s({ref:r},p),{},{components:t})):o.a.createElement(b,s({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(2),o=t(7),a=(t(0),t(100)),i={id:"payid-server-requirements",title:"Server Requirements",sidebar_label:"Server Requirements"},s={unversionedId:"payid-server-requirements",id:"payid-server-requirements",isDocsHomePage:!1,title:"Server Requirements",description:"The reference PayID server is comprised of a simple Node.js HTTP server and a Postgres database.",source:"@site/docs/payid-server-requirements.md",permalink:"/payid-documentation/review-apps/loisrp-networks/09a7da/payid-server-requirements",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/payid-server-requirements.md",sidebar_label:"Server Requirements",sidebar:"docs",previous:{title:"Deployment Options",permalink:"/payid-documentation/review-apps/loisrp-networks/09a7da/intro-deploy"},next:{title:"Deploy Locally Without Docker",permalink:"/payid-documentation/review-apps/loisrp-networks/09a7da/local-deployment"}},c=[{value:"Production Requirements",id:"production-requirements",children:[]}],p={rightToc:c};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The reference PayID server is comprised of a simple Node.js HTTP server and a Postgres database."),Object(a.b)("p",null,"In production environments, you should set up a reverse proxy like nginx in front of the Node.js HTTP server, as described at ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"remote-deployment#nginx-reverse-proxy--ssl-setup"}),"NGINX Reverse Proxy + SSL setup"),"."),Object(a.b)("h2",{id:"production-requirements"},"Production Requirements"),Object(a.b)("p",null,"To run a PayID server in a production environment, you should:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Give each component of the stack a vCPU and 500 MB of RAM"),Object(a.b)("li",{parentName:"ul"},"Ensure there are at least two High-Availability replicas for each component")),Object(a.b)("p",null,"Here's how the requirements would break down:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"1 vCPU + 500 MB RAM per nginx replica (2x)"),Object(a.b)("li",{parentName:"ul"},"1 vCPU + 500 MB RAM per PayID Node.js server replica (2x)"),Object(a.b)("li",{parentName:"ul"},"1 vCPU + 500 MB RAM per Postgres replica (2x)")),Object(a.b)("p",null,"Note that these are ",Object(a.b)("em",{parentName:"p"},"conservative")," requirements for an environment with a non-trivial amount of traffic. The PayID server is not resource-hungry. If you have an environment with smaller amounts of traffic, you may be able to run a PayID server with less robust specs."))}u.isMDXComponent=!0}}]);