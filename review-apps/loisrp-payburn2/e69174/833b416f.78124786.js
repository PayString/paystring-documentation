(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(r),s=n,y=b["".concat(i,".").concat(s)]||b[s]||u[s]||o;return r?a.a.createElement(y,p(p({ref:t},l),{},{components:r})):a.a.createElement(y,p({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(7),o=(r(0),r(101)),i={id:"deploy-with-docker",title:"Deploy a PayID Server with Docker",sidebar_label:"Deploy a PayID Server with Docker"},p={unversionedId:"deploy-with-docker",id:"deploy-with-docker",isDocsHomePage:!1,title:"Deploy a PayID Server with Docker",description:"To get started, the first thing to do is set up a PayID server.",source:"@site/docs/deploy-with-docker.md",permalink:"/payid-documentation/review-apps/loisrp-payburn2/e69174/deploy-with-docker",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/deploy-with-docker.md",sidebar_label:"Deploy a PayID Server with Docker",sidebar:"docs",previous:{title:"Deploy Locally Without Docker",permalink:"/payid-documentation/review-apps/loisrp-payburn2/e69174/local-deployment"},next:{title:"Deploy on AWS Lambda",permalink:"/payid-documentation/review-apps/loisrp-payburn2/e69174/aws-lambda-deploy"}},c=[],l={rightToc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To get started, the first thing to do is set up a PayID server."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you haven't already, install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docks.docker.com/get-docker/"}),"Docker")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node")," on your machine.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The reference implementation server is available at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid"}),"https://github.com/payid-org/payid"),". You can download the reference implementation server by cloning the repository at the command line:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/payid-org/payid.git\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("inlineCode",{parentName:"p"},"/payid")," directory that you just created:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"cd payid\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Boot up the PayID HTTP server and a Postgres database to develop against:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run devEnvUp\n")))))}d.isMDXComponent=!0}}]);