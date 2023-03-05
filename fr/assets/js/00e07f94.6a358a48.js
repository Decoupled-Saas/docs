"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7277],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="Use Docs",l={unversionedId:"quick-start/use-docs",id:"quick-start/use-docs",title:"Use Docs",description:"Docs are located under /docs directory by default.",source:"@site/docs/quick-start/use-docs.md",sourceDirName:"quick-start",slug:"/quick-start/use-docs",permalink:"/fr/quick-start/use-docs",draft:!1,editUrl:"https://github.com/arisac/docusaurus-boilerplate/edit/main/docs/quick-start/use-docs.md",tags:[],version:"current",lastUpdatedBy:"Allan",lastUpdatedAt:1678017222,formattedLastUpdatedAt:"5 mars 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Quick Start",permalink:"/fr/quick-start/"},next:{title:"Use Pages",permalink:"/fr/quick-start/use-pages"}},s={},d=[{value:"Create a doc",id:"create-a-doc",level:2},{value:"Front Matter",id:"front-matter",level:2},{value:"<code>title</code> for doc Title",id:"title-for-doc-title",level:3},{value:"<code>id</code> for doc Identifier",id:"id-for-doc-identifier",level:3},{value:"<code>slug</code> for doc Url",id:"slug-for-doc-url",level:3},{value:"<code>description</code> field",id:"description-field",level:3},{value:"<code>tags</code> field",id:"tags-field",level:3},{value:"<code>sidebar_position</code> field",id:"sidebar_position-field",level:3},{value:"Docs routeBasePath",id:"docs-routebasepath",level:2},{value:"Change Docs routeBasePath",id:"change-docs-routebasepath",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-docs"},"Use Docs"),(0,r.kt)("p",null,"Docs are located under ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," directory by default."),(0,r.kt)("h2",{id:"create-a-doc"},"Create a doc"),(0,r.kt)("p",null,"Create a Markdown file, ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting.md"),", and place it under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 ...\n")),(0,r.kt)("h2",{id:"front-matter"},"Front Matter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Front Matter Demo"',title:'"Front',Matter:!0,'Demo"':!0},"---\ntitle: Name Of Doc\nid: your-doc\nslug: /your-doc\ndescription: Create a Markdown Document\ntags:\n  - Demo\n  - Getting started\nsidebar_position: 10\n---\n")),(0,r.kt)("h3",{id:"title-for-doc-title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")," for doc Title"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This field is ",(0,r.kt)("strong",{parentName:"p"},"optional"),", by default ",(0,r.kt)("inlineCode",{parentName:"p"},"h1")," in document body will be used for the title.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," in Front Matter will change the sitebar and webpage title. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"h1")," in the document body, ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," will be used in the page."))),(0,r.kt)("h3",{id:"id-for-doc-identifier"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")," for doc Identifier"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This field is ",(0,r.kt)("strong",{parentName:"p"},"optional"),", by default the filename of the doc is used as ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for the document.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id")," is also used in the url to the doc by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id")," is unique when linking resources, such as use ",(0,r.kt)("inlineCode",{parentName:"p"},"docId")," to link to the doc in navbar.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sometimes multiple docs can have the same filename under different directory, to use ",(0,r.kt)("inlineCode",{parentName:"p"},"docId")," to link these 2 docs, different ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," should be set."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="e.g. same filename"',title:'"e.g.',same:!0,'filename"':!0},"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 guide-for-something\n\u2502   \u2502   \u2514\u2500\u2500 `step-1.md`\n\u2502   \u2514\u2500\u2500 guide-for-something-else\n\u2502       \u2514\u2500\u2500 `step-1.md`\n\u251c\u2500\u2500 ...\n")),(0,r.kt)("h3",{id:"slug-for-doc-url"},(0,r.kt)("inlineCode",{parentName:"h3"},"slug")," for doc Url"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This field is ",(0,r.kt)("strong",{parentName:"p"},"optional"),", by default docusaurus will use ",(0,r.kt)("inlineCode",{parentName:"p"},"directory/filename")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"directory/docId")," as the url for the doc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can override the default url by using ",(0,r.kt)("inlineCode",{parentName:"p"},"slug")," field. Even create non-exsiting directorys:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="e.g. slug for custom url"',title:'"e.g.',slug:!0,for:!0,custom:!0,'url"':!0},"// doc location\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 demo\n\u2502   \u2502   \u2514\u2500\u2500 docname\n\u251c\u2500\u2500 ...\n\n// Front Matter slug Override\nslug: /this/is/a/cool/name\n")),(0,r.kt)("p",null,"When Docs routeBasePath is ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs"),", that doc url will be ",(0,r.kt)("inlineCode",{parentName:"p"},"your.domain/docs/this/is/a/cool/name")," other than the default ",(0,r.kt)("inlineCode",{parentName:"p"},"your.domain/docs/demo/docname"),"."),(0,r.kt)("h3",{id:"description-field"},(0,r.kt)("inlineCode",{parentName:"h3"},"description")," field"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This field is ",(0,r.kt)("strong",{parentName:"p"},"optional"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Can be useful for SEO."))),(0,r.kt)("h3",{id:"tags-field"},(0,r.kt)("inlineCode",{parentName:"h3"},"tags")," field"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This field is ",(0,r.kt)("strong",{parentName:"li"},"optional"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Tags in ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"blog")," are not shared, they are in separated namespaces.")),(0,r.kt)("h3",{id:"sidebar_position-field"},(0,r.kt)("inlineCode",{parentName:"h3"},"sidebar_position")," field"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This field is ",(0,r.kt)("strong",{parentName:"p"},"optional"),", but it's recommended to set mannually to keep the docs in order.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_position")," set the orders of docs in the same directory level.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This also apply in ",(0,r.kt)("inlineCode",{parentName:"p"},"Previous / Next"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more Sidebar and Docs ordering, visit ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/sidebar/autogenerated#autogenerated-sidebar-metadata"},"https://docusaurus.io/docs/sidebar/autogenerated#autogenerated-sidebar-metadata")))),(0,r.kt)("h2",{id:"docs-routebasepath"},"Docs routeBasePath"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This template uses ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," as docs ",(0,r.kt)("strong",{parentName:"p"},"routeBasePath")," by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As this doc ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/quick-setup/use-docs.md")," is using url: ",(0,r.kt)("inlineCode",{parentName:"p"},"your.domain/quick-setup/use-docs"),"."))),(0,r.kt)("h3",{id:"change-docs-routebasepath"},"Change Docs routeBasePath"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," as Docs routeBasePath will move docs under ",(0,r.kt)("inlineCode",{parentName:"p"},"your.domain/docs/"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then this doc's url will be changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"your.domain/docs/quick-setup/use-docs"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  presets: [\n    [\n      'classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: {\n-          routeBasePath: '/',\n+          routeBasePath: '/docs',\n        },\n      }),\n    ],\n  ],\n};\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This template uses ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/start.md")," as homepage."),(0,r.kt)("p",{parentName:"admonition"},"After changing routeBasePath from '/' to other location, the homepage will unable to access, You will need to ",(0,r.kt)("a",{parentName:"p",href:"/fr/quick-start/use-pages"},"create a homepage")," after changing the docs routeBasePath.")))}u.isMDXComponent=!0}}]);