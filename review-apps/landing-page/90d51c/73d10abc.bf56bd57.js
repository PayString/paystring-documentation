(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(2),n=r(6),i=(r(0),r(96)),o={id:"ripplex-dev-kit-payid-get-started",title:"Get Started with RippleX Dev Kit and PayID",sidebar_label:"Get Started with RippleX Dev Kit and PayID"},p={unversionedId:"ripplex-dev-kit-payid-get-started",id:"ripplex-dev-kit-payid-get-started",isDocsHomePage:!1,title:"Get Started with RippleX Dev Kit and PayID",description:"RippleX Dev Kit, a platform that provides developer tools, services, and programs to integrate money into your apps, also provides support for PayID by simplifying the resolution of a PayID to its associated network addresses. RippleX Dev Kit is available for JavaScript, Java, and Swift.",source:"@site/docs/ripplex-dev-kit-payid-get-started.md",permalink:"/payid-documentation/review-apps/landing-page/90d51c/ripplex-dev-kit-payid-get-started",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/ripplex-dev-kit-payid-get-started.md",sidebar_label:"Get Started with RippleX Dev Kit and PayID",sidebar:"docs",previous:{title:"Get Started with Verifiable PayID",permalink:"/payid-documentation/review-apps/landing-page/90d51c/verifiable-payid-tutorial"},next:{title:"Metrics Tutorial",permalink:"/payid-documentation/review-apps/landing-page/90d51c/metrics-tutorial"}},s=[],c={rightToc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://RippleX.io/docs/"}),"RippleX Dev Kit"),", a platform that provides developer tools, services, and programs to integrate money into your apps, also provides support for PayID by simplifying the resolution of a PayID to its associated network addresses. RippleX Dev Kit is available for JavaScript, Java, and Swift."),Object(i.b)("p",null,"Try this demo that uses RippleX-JS."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Clone the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/xpring-eng/Xpring-SDK-Demo"}),"GitHub repository"),". If you want to use SSH, enter this command at the command line:\n",Object(i.b)("inlineCode",{parentName:"li"},"git clone git@github.com:xpring-eng/Xpring-SDK-Demo.git")),Object(i.b)("li",{parentName:"ol"},"Install the node dependencies you need.\n",Object(i.b)("inlineCode",{parentName:"li"},"npm i")),Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/src/index-payid.js"}),"demo script"),". This demo takes a PayID and resolves it to its associated network addresses. Each associated network address, with accompanying details, is displayed in JSON format.\n",Object(i.b)("inlineCode",{parentName:"li"},"node src/index-xrp.js")),Object(i.b)("li",{parentName:"ol"},"If you have another PayID, you can edit the script and substitute that PayID, and then run it and see the results.")),Object(i.b)("p",null,"To see similar functionality for Java and Swift, follow the README.md instructions for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/java"}),"RippleX4j")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/swift"}),"RippleXKit"),"."))}l.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),l=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return r?n.a.createElement(m,p(p({ref:t},c),{},{components:r})):n.a.createElement(m,p({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);