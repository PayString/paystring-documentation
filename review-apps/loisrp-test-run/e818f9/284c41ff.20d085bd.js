(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},139:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/prometheus-sum-beed14adb81e5b9308a0bab2b206d018.png"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(110)),o={id:"metrics-tutorial",title:"Metrics",sidebar_label:"Metrics"},s={unversionedId:"metrics-tutorial",id:"metrics-tutorial",isDocsHomePage:!1,title:"Metrics",description:"PayString was previously known as PayID.",source:"@site/docs/metrics-tutorial.md",slug:"/metrics-tutorial",permalink:"/payid-documentation/review-apps/loisrp-test-run/e818f9/metrics-tutorial",editUrl:"https://github.com/paystring/paystring-documentation/tree/master/docs/metrics-tutorial.md",version:"current",sidebar_label:"Metrics",sidebar:"docs",previous:{title:"RippleX Dev Kit and PayString",permalink:"/payid-documentation/review-apps/loisrp-test-run/e818f9/ripplex-dev-kit-paystring-get-started"},next:{title:"Reference Implementation Overview",permalink:"/payid-documentation/review-apps/loisrp-test-run/e818f9/paystring-reference-overview"}},c=[{value:"Deploy a PayString server with Docker, and pull PayString metrics into Prometheus",id:"deploy-a-paystring-server-with-docker-and-pull-paystring-metrics-into-prometheus",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Build a Docker container for setting up a PayString server",id:"build-a-docker-container-for-setting-up-a-paystring-server",children:[]},{value:"Create Docker network for PayString",id:"create-docker-network-for-paystring",children:[]},{value:"Start a Postgres Database",id:"start-a-postgres-database",children:[]},{value:"Start and test the PayString server",id:"start-and-test-the-paystring-server",children:[]},{value:"Start Prometheus",id:"start-prometheus",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"PayString was previously known as PayID."))),Object(i.b)("h2",{id:"deploy-a-paystring-server-with-docker-and-pull-paystring-metrics-into-prometheus"},"Deploy a PayString server with Docker, and pull PayString metrics into Prometheus"),Object(i.b)("p",null,"In this tutorial, you will deploy a PayString server and run Prometheus locally using Docker, and you will create a configuration file for the PayString server so that PayString metrics are pulled into Prometheus."),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Install the following software on your machine, if not already present."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/get-npm"}),"npm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker/"}),"docker")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"git"))),Object(i.b)("h3",{id:"build-a-docker-container-for-setting-up-a-paystring-server"},"Build a Docker container for setting up a PayString server"),Object(i.b)("p",null,"Run these commands to build a Docker container for a PayString server."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/paystring/paystring.git\ncd paystring\ndocker build -t paystring-server .\n")),Object(i.b)("h3",{id:"create-docker-network-for-paystring"},"Create Docker network for PayString"),Object(i.b)("p",null,"You will run several containers in Docker that must talk to each other. To set up these containers, create a docker network called ",Object(i.b)("inlineCode",{parentName:"p"},"paystring-network"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker network create paystring-network\n")),Object(i.b)("h3",{id:"start-a-postgres-database"},"Start a Postgres Database"),Object(i.b)("p",null,"To have a PayString server, you require a Postgres database to store PayString accounts and address mappings. To do this, run the postgres database in docker with a default password of ",Object(i.b)("inlineCode",{parentName:"p"},"password"),", and tell the database to use the ",Object(i.b)("inlineCode",{parentName:"p"},"paystring-network")," that you previously created. Name this docker container ",Object(i.b)("inlineCode",{parentName:"p"},"paystring-postgres"),", so that you can reference the container by name when you connect your PayString server. Note that both the default database and the user are named ",Object(i.b)("inlineCode",{parentName:"p"},"postgres"),", as described at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/postgres"}),"Postgres Docker Official Images"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --rm --name paystring-postgres --network paystring-network -e POSTGRES_PASSWORD=password postgres\n")),Object(i.b)("h3",{id:"start-and-test-the-paystring-server"},"Start and test the PayString server"),Object(i.b)("p",null,"To start the PayString server, run the PayString server in docker using the image you created. You must also use the docker network ",Object(i.b)("inlineCode",{parentName:"p"},"paystring-network")," so that it can connect to the ",Object(i.b)("inlineCode",{parentName:"p"},"paystring-postgres")," container."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run -it -p 8080:8080 -p 8081:8081 --name paystring-server --network paystring-network -e DB_PASSWORD=password -e\n    DB_NAME=postgres -e DB_HOSTNAME=paystring-postgres paystring-server\n")),Object(i.b)("p",null,"Test whether the PayString server is running by creating a PayString with this cURL command."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' curl --location --request POST \'http://127.0.0.1:8081/users\' --header \'PayID-API-Version: 2020-06-16\' --header \'Content-Type: application/json\' --data-raw \'{\n     "payId": "charlie$127.0.0.1",\n     "addresses": [\n         {\n             "paymentNetwork": "XRPL",\n             "environment": "TESTNET",\n             "details": {\n                 "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS"\n             }\n         }\n     ]\n }\'\n')),Object(i.b)("p",null,"You should get a ",Object(i.b)("inlineCode",{parentName:"p"},"Created")," response."),Object(i.b)("p",null,"Query the PayString server to make sure it resolves, using this cURL command."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl http://127.0.0.1:8080/charlie -H "PayID-Version: 1.0" -H "Accept: application/xrpl-testnet+json"`\n')),Object(i.b)("h3",{id:"start-prometheus"},"Start Prometheus"),Object(i.b)("p",null,"In this step, you will run prometheus in docker and configure it to scrape the PayString server\u2019s metrics. To do this, you need to create a ",Object(i.b)("inlineCode",{parentName:"p"},"prometheus.yml")," file on the host machine and mount it in the docker container."),Object(i.b)("p",null,"Create a file named ",Object(i.b)("inlineCode",{parentName:"p"},"prometheus.yml")," with these contents."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"global:\n  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\n\nscrape_configs:\n  - job_name: 'paystring-metric'\n    honor_labels: true\n    static_configs:\n      - targets: ['paystring-server:8081']\n")),Object(i.b)("p",null,"Start the docker container:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --network paystrings-network -p 9090:9090 -v $PWD/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus`\n")),Object(i.b)("p",null,"You can verify Prometheus is running by opening ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:9090/graph")," in a browser."),Object(i.b)("p",null,"You can verify metrics collection metrics are being collected by entering the following expression into the form:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sum(payid_count)")),Object(i.b)("p",null,"Click ",Object(i.b)("inlineCode",{parentName:"p"},"Execute"),". If successful, the results look like this:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"PayString Metrics setup and configuration",src:r(139).default})),Object(i.b)("p",null,"Click the ",Object(i.b)("strong",{parentName:"p"},"Graph")," tab to display the results in graph format."),Object(i.b)("p",null,"Here are some other example expressions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sum(payid_count) by (paymentNetwork)")," - Sum of ",Object(i.b)("inlineCode",{parentName:"li"},"PayString")," count by payment network, such as XRPL, BTC, and so forth."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sum(payid_lookup_request)")," - Total number of ",Object(i.b)("inlineCode",{parentName:"li"},"PayString")," lookup requests."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rate(payid_lookup_request[5m])")," - Rate of ",Object(i.b)("inlineCode",{parentName:"li"},"PayString")," lookup requests per second.")))}p.isMDXComponent=!0}}]);