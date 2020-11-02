(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(98)),i={id:"local-deployment",title:"Deploy Locally Without Docker",sidebar_label:"Deploy Locally Without Docker"},l={unversionedId:"local-deployment",id:"local-deployment",isDocsHomePage:!1,title:"Deploy Locally Without Docker",description:"Basic requirements",source:"@site/docs/local-deployment.md",permalink:"/payid-documentation/review-apps/loisrp-welcome-what/59c96e/local-deployment",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/local-deployment.md",sidebar_label:"Deploy Locally Without Docker",sidebar:"docs",previous:{title:"Server Requirements",permalink:"/payid-documentation/review-apps/loisrp-welcome-what/59c96e/payid-server-requirements"},next:{title:"Deploy a PayID Server with Docker",permalink:"/payid-documentation/review-apps/loisrp-welcome-what/59c96e/deploy-with-docker"}},c=[{value:"Basic requirements",id:"basic-requirements",children:[]}],p={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"basic-requirements"},"Basic requirements"),Object(o.b)("p",null,"Make sure your system meets these requirements before you set up a PayID server."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"RAM: Minimum of 100 MB"),Object(o.b)("li",{parentName:"ul"},"Postgres: 11.7 or later, with ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.pgpool.net"}),"pgpool-II")," in front"),Object(o.b)("li",{parentName:"ul"},"Node.js version: 12 or later")),Object(o.b)("p",null,"Before you begin, make sure that you have installed Postgres locally, or in an otherwise accessible location."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the PayID repo.\n",Object(o.b)("inlineCode",{parentName:"p"},"git clone https://github.com/payid-org/payid.git && cd payid"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install dependencies."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm i"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Generate the build files in ",Object(o.b)("inlineCode",{parentName:"p"},"build/*")," (app code + SQL scripts)."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm run build"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start PayID. The ",Object(o.b)("inlineCode",{parentName:"p"},"npm run start")," command generates the schema if it does not yet exist."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"DB_HOSTNAME=localhost DB_NAME=dev_payid DB_USERNAME=payid_dev\n\nDB_PASSWORD='xxxxx' npm run start\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To make sure PayID runs continuously, run PayID through a tool like ",Object(o.b)("inlineCode",{parentName:"p"},"forever"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm install forever -g"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run PayID with ",Object(o.b)("inlineCode",{parentName:"p"},"forever"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"DB_HOSTNAME=localhost DB_NAME=dev_payid DB_USERNAME=payid_dev\n\nDB_PASSWORD='xxxxx' forever start build/src/index.js\n")))))}b.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return r?a.a.createElement(d,l(l({ref:t},p),{},{components:r})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);