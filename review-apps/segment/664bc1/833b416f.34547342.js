(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(7),o=(r(0),r(97)),c={id:"deploy-with-docker",title:"Deploy a PayID Server with Docker",sidebar_label:"Deploy a PayID Server with Docker"},i={unversionedId:"deploy-with-docker",id:"deploy-with-docker",isDocsHomePage:!1,title:"Deploy a PayID Server with Docker",description:"To get started, the first thing to do is set up a PayID server.",source:"@site/docs/deploy-with-docker.md",permalink:"/payid-documentation/review-apps/segment/664bc1/deploy-with-docker",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/deploy-with-docker.md",sidebar_label:"Deploy a PayID Server with Docker",sidebar:"docs",previous:{title:"Deploy Locally Without Docker",permalink:"/payid-documentation/review-apps/segment/664bc1/local-deployment"},next:{title:"Deploy on AWS Lambda",permalink:"/payid-documentation/review-apps/segment/664bc1/aws-lambda-deploy"}},p=[],l={rightToc:p};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To get started, the first thing to do is set up a PayID server."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you haven't already, install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docks.docker.com/get-docker/"}),"Docker")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node")," on your machine.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The reference implementation server is available at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid"}),"https://github.com/payid-org/payid"),". You can download the reference implementation server by cloning the repository at the command line:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/payid-org/payid.git\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("inlineCode",{parentName:"p"},"/payid")," directory that you just created:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"cd payid\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Boot up the PayID HTTP server and a Postgres database to develop against:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run devEnvUp\n")))))}d.isMDXComponent=!0},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=d(r),u=n,m=b["".concat(c,".").concat(u)]||b[u]||s[u]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);