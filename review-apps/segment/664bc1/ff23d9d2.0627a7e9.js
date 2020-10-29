(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),o=(n(0),n(97)),i={id:"local-deployment",title:"Deploy Locally Without Docker",sidebar_label:"Deploy Locally Without Docker"},l={unversionedId:"local-deployment",id:"local-deployment",isDocsHomePage:!1,title:"Deploy Locally Without Docker",description:"Basic requirements",source:"@site/docs/local-deployment.md",permalink:"/payid-documentation/review-apps/segment/664bc1/local-deployment",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/local-deployment.md",sidebar_label:"Deploy Locally Without Docker",sidebar:"docs",previous:{title:"Server Requirements",permalink:"/payid-documentation/review-apps/segment/664bc1/payid-server-requirements"},next:{title:"Deploy a PayID Server with Docker",permalink:"/payid-documentation/review-apps/segment/664bc1/deploy-with-docker"}},c=[{value:"Basic requirements",id:"basic-requirements",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"basic-requirements"},"Basic requirements"),Object(o.b)("p",null,"Make sure your system meets these requirements before you set up a PayID server."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"RAM: Minimum of 100 MB"),Object(o.b)("li",{parentName:"ul"},"Postgres: 11.7 or later, with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.pgpool.net"}),"pgpool-II")," in front"),Object(o.b)("li",{parentName:"ul"},"Node.js version: 12 or later")),Object(o.b)("p",null,"Before you begin, make sure that you have installed Postgres locally, or in an otherwise accessible location."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the PayID repo.\n",Object(o.b)("inlineCode",{parentName:"p"},"git clone https://github.com/payid-org/payid.git && cd payid"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install dependencies."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm i"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Generate the build files in ",Object(o.b)("inlineCode",{parentName:"p"},"build/*")," (app code + SQL scripts)."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm run build"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start PayID. The ",Object(o.b)("inlineCode",{parentName:"p"},"npm run start")," command generates the schema if it does not yet exist."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"DB_HOSTNAME=localhost DB_NAME=dev_payid DB_USERNAME=payid_dev\n\nDB_PASSWORD='xxxxx' npm run start\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To make sure PayID runs continuously, run PayID through a tool like ",Object(o.b)("inlineCode",{parentName:"p"},"forever"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm install forever -g"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run PayID with ",Object(o.b)("inlineCode",{parentName:"p"},"forever"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"DB_HOSTNAME=localhost DB_NAME=dev_payid DB_USERNAME=payid_dev\n\nDB_PASSWORD='xxxxx' forever start build/src/index.js\n")))))}b.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);