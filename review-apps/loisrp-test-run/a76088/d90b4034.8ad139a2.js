(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||l[u]||s;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<s;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),s=(a(0),a(100)),i={id:"integrate-paystring-users",title:"Integrate Existing User Databases",sidebar_label:"Integrate Existing User Databases"},c={unversionedId:"integrate-paystring-users",id:"integrate-paystring-users",isDocsHomePage:!1,title:"Integrate Existing User Databases",description:"PayString was previously known as PayID.",source:"@site/docs/integrate-paystring-users.md",permalink:"/payid-documentation/review-apps/loisrp-test-run/a76088/integrate-paystring-users",editUrl:"https://github.com/paystring/paystring-documentation/tree/master/docs/integrate-paystring-users.md",sidebar_label:"Integrate Existing User Databases",sidebar:"docs",previous:{title:"Security Best Practices",permalink:"/payid-documentation/review-apps/loisrp-test-run/a76088/best-practices"},next:{title:"Metrics",permalink:"/payid-documentation/review-apps/loisrp-test-run/a76088/metrics"}},o=[{value:"Extend existing database tables with new columns",id:"extend-existing-database-tables-with-new-columns",children:[]},{value:"Match column names in data access functions",id:"match-column-names-in-data-access-functions",children:[]},{value:"Change the type of database",id:"change-the-type-of-database",children:[]},{value:"Set environment variables",id:"set-environment-variables",children:[]},{value:"Update database migrations",id:"update-database-migrations",children:[]},{value:"Update SQL files",id:"update-sql-files",children:[]}],b={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"PayString was previously known as PayID."))),Object(s.b)("p",null,"If you have an existing user database, you can take the following steps to integrate PayString functionality into your product."),Object(s.b)("h2",{id:"extend-existing-database-tables-with-new-columns"},"Extend existing database tables with new columns"),Object(s.b)("p",null,"The PayString ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/blob/master/src/db/schema/01_account.sql"}),"account schema")," is used to define a table for users."),Object(s.b)("p",null,"The account table contains two fields: ",Object(s.b)("inlineCode",{parentName:"p"},"id")," and ",Object(s.b)("inlineCode",{parentName:"p"},"pay_id"),". The address table uses a foreign key column called ",Object(s.b)("inlineCode",{parentName:"p"},"account_id")," which depends on ",Object(s.b)("inlineCode",{parentName:"p"},"id")," as a foreign key to associate addresses with individual accounts. The second column is ",Object(s.b)("inlineCode",{parentName:"p"},"pay_id")," which is where we store the string identifier (such as ",Object(s.b)("inlineCode",{parentName:"p"},"alice$wallet.com"),")."),Object(s.b)("p",null,"With an existing user database, you will need to add the ",Object(s.b)("inlineCode",{parentName:"p"},"pay_id")," column. Your user database might already have the equivalent of an ",Object(s.b)("inlineCode",{parentName:"p"},"id")," field, but if not, add this column so that each address can reference a specific user."),Object(s.b)("p",null,"The PayString account schema has three constraints that could be useful to apply to your existing user database. Two constraints guarantee that all entered PayStrings are lowercase and are not empty strings. The final and most important constraint is that the regex constraint ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/blob/master/src/db/schema/01_account.sql#L17"}),"valid_pay_id")," guarantees that all entered PayStrings are in compliance with the format outlined in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://paystring.org/whitepaper.pdf"}),"PayString whitepaper"),"."),Object(s.b)("p",null,"The PayString ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/blob/master/src/db/schema/02_address.sql"}),"address schema")," is used to define a table of addresses associated with users."),Object(s.b)("p",null,"Whenever a PayString is queried, the payment network and environment are sent via an Accept header. Therefore, it is important that each address stored has an associated payment network and environment. For example, upon receipt of the accept header ",Object(s.b)("inlineCode",{parentName:"p"},"application/xrpl-testnet+json")," you should query your address table for the address associated with the ",Object(s.b)("inlineCode",{parentName:"p"},"xrpl")," payment network and ",Object(s.b)("inlineCode",{parentName:"p"},"testnet")," environment."),Object(s.b)("h2",{id:"match-column-names-in-data-access-functions"},"Match column names in data access functions"),Object(s.b)("p",null,"All functions that query the database are located in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/tree/master/src/data-access"}),"src/data-access"),". If you use column names that do not match the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/tree/master/src/db/schema"}),"schema"),", then you must reflect those changes in the data access functions. The following table lists the files contained within ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/tree/master/src/data-access"}),"src/data-access")," and the corresponding column names they use:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"File name"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Columns used"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/paystring/paystring/blob/master/src/data-access/payIds.ts"}),"payIds.ts")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"address.payment_network, address.environment, address.details")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/paystring/paystring/blob/master/src/data-access/reports.ts"}),"reports.ts")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"address.payment_network, address.environment")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/paystring/paystring/blob/master/src/data-access/users.ts"}),"users.ts")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"account.pay_id, account.id, address.account_id, address.payment_network, address.environment, address.details")))),Object(s.b)("h2",{id:"change-the-type-of-database"},"Change the type of database"),Object(s.b)("p",null,"The reference implementation described in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/"}),"Getting Started")," uses a Postgres database. To use a different type of database, either update the settings in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/blob/master/src/db/knex.ts"}),"knexfile"),", or replace the use of ",Object(s.b)("inlineCode",{parentName:"p"},"knex")," throughout the repository with your preferred database connection tool."),Object(s.b)("h2",{id:"set-environment-variables"},"Set environment variables"),Object(s.b)("p",null,"PayString depends on environment variables. All of these environment variables are read in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/blob/master/src/config.ts"}),"src/config.ts")," and assigned to variables. During integration, look through all of the environment variables used in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/blob/master/src/config.ts"}),"src/config.ts")," to ensure all are set properly for your environment."),Object(s.b)("h2",{id:"update-database-migrations"},"Update database migrations"),Object(s.b)("p",null,"If you use your own database, there are migration files written specifically for the tables outlined in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/tree/master/src/db/schema"}),"src/db/schema"),". Either remove these migration files, or update them to match your database."),Object(s.b)("h2",{id:"update-sql-files"},"Update SQL files"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},".sql")," files within ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/tree/master/src/db"}),"src/db")," are each executed by the function ",Object(s.b)("inlineCode",{parentName:"p"},"syncDatabaseSchema")," located in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/blob/master/src/db/syncDatabaseSchema.ts"}),"db/syncDatabaseSchema.ts"),". To integrate into an existing system, be sure to look through the directories in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paystring/paystring/blob/master/src/db/"}),"src/db")," to identify any ",Object(s.b)("inlineCode",{parentName:"p"},".sql")," files that you need to modify to fit your existing system, or to remove because they do not apply."))}p.isMDXComponent=!0}}]);