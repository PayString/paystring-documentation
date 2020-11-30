(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),y=n,d=s["".concat(i,".").concat(y)]||s[y]||b[y]||a;return r?o.a.createElement(d,p(p({ref:t},l),{},{components:r})):o.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(7),a=(r(0),r(100)),i={id:"intro-deploy",title:"Deployment Options",sidebar_label:"Deployment Options"},p={unversionedId:"intro-deploy",id:"intro-deploy",isDocsHomePage:!1,title:"Deployment Options",description:"When you want to experiment with or deploy a PayID server, you have several options.",source:"@site/docs/intro-deploy.md",permalink:"/payid-documentation/review-apps/loisrp-networks/09a7da/intro-deploy",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/intro-deploy.md",sidebar_label:"Deployment Options",sidebar:"docs",previous:{title:"Metrics",permalink:"/payid-documentation/review-apps/loisrp-networks/09a7da/metrics"},next:{title:"Server Requirements",permalink:"/payid-documentation/review-apps/loisrp-networks/09a7da/payid-server-requirements"}},c=[],l={rightToc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When you want to experiment with or deploy a PayID server, you have several options."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To experiment without deploying a server, use the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://payid.org/sandbox"}),"PayID Sandbox"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"local-deployment"}),"Deploy Locally Without Docker"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"remote-deployment"}),"Deploy a PayID server on AWS with NGINX reverse proxy"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"aws-lambda-deploy"}),"Deploy on AWS Lambda")))),Object(a.b)("p",null,"You can use the same principles to deploy a PayID server on other cloud providers, or on your own machines. See the suggested ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"payid-server-requirements"}),"requirements"),"."),Object(a.b)("p",null,"When you have set up your PayID server, you can also configure an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"nginx-ssl-deploy"}),"NGINX reverse proxy and SSL")," to improve load bearing and security."))}u.isMDXComponent=!0}}]);