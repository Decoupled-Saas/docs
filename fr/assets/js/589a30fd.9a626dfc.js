"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2,description:"Plugin Presets for Docs, Blog etc."},o="Plugin Presets",s={unversionedId:"intermediate/plugin-presets",id:"intermediate/plugin-presets",title:"Plugin Presets",description:"Plugin Presets for Docs, Blog etc.",source:"@site/docs/intermediate/plugin-presets.md",sourceDirName:"intermediate",slug:"/intermediate/plugin-presets",permalink:"/fr/intermediate/plugin-presets",draft:!1,editUrl:"https://github.com/arisac/docusaurus-boilerplate/edit/main/docs/intermediate/plugin-presets.md",tags:[],version:"current",lastUpdatedBy:"Allan",lastUpdatedAt:1678018726,formattedLastUpdatedAt:"5 mars 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Plugin Presets for Docs, Blog etc."},sidebar:"docsSidebar",previous:{title:"Intermediate",permalink:"/fr/intermediate/"},next:{title:"Theme",permalink:"/fr/intermediate/theme"}},l={},u=[{value:"Docs",id:"docs",level:2},{value:"Edit Url",id:"edit-url",level:3},{value:"Last Update",id:"last-update",level:3},{value:"Breadcrumbs",id:"breadcrumbs",level:3},{value:"Blog",id:"blog",level:2},{value:"Edit Url",id:"edit-url-1",level:3},{value:"Reading Time",id:"reading-time",level:3},{value:"Blog Sidebar List Number",id:"blog-sidebar-list-number",level:3},{value:"Other",id:"other",level:2},{value:"Announcement Bar",id:"announcement-bar",level:3},{value:"Google Analytics",id:"google-analytics",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugin-presets"},"Plugin Presets"),(0,i.kt)("h2",{id:"docs"},"Docs"),(0,i.kt)("h3",{id:"edit-url"},"Edit Url"),(0,i.kt)("p",null,"Remove the ",(0,i.kt)("strong",{parentName:"p"},"highlighted line")," will turn off this feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {6,7}',title:'"docusaurus.config.js"',"{6,7}":!0},'const config = {\n  presets: [\n    [\n      ({\n        docs: {\n          editUrl:\n            "https://github.com/arisac/docusaurus-boilerplate/edit/main/",\n        },\n      }),\n    ],\n  ],\n};\n')),(0,i.kt)("h3",{id:"last-update"},"Last Update"),(0,i.kt)("p",null,"Remove the ",(0,i.kt)("strong",{parentName:"p"},"highlighted line(s)")," will turn off this feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {6,7}',title:'"docusaurus.config.js"',"{6,7}":!0},"const config = {\n  presets: [\n    [\n      ({\n        docs: {\n          showLastUpdateAuthor: true,\n          showLastUpdateTime: true,\n        },\n      }),\n    ],\n  ],\n};\n")),(0,i.kt)("h3",{id:"breadcrumbs"},"Breadcrumbs"),(0,i.kt)("p",null,"Remove the ",(0,i.kt)("strong",{parentName:"p"},"highlighted line")," will turn off this feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {6}',title:'"docusaurus.config.js"',"{6}":!0},"const config = {\n  presets: [\n    [\n      ({\n        docs: {\n          breadcrumbs: true,\n        },\n      }),\n    ],\n  ],\n};\n")),(0,i.kt)("h2",{id:"blog"},"Blog"),(0,i.kt)("h3",{id:"edit-url-1"},"Edit Url"),(0,i.kt)("p",null,"Remove the ",(0,i.kt)("strong",{parentName:"p"},"highlighted line")," will turn off this feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {6,7}',title:'"docusaurus.config.js"',"{6,7}":!0},"const config = {\n  presets: [\n    [\n      ({\n        blog: {\n          editUrl:\n            'https://github.com/arisac/docusaurus-boilerplate/edit/main/blog/',\n        },\n      }),\n    ],\n  ],\n};\n")),(0,i.kt)("h3",{id:"reading-time"},"Reading Time"),(0,i.kt)("p",null,"Remove the ",(0,i.kt)("strong",{parentName:"p"},"highlighted line")," will turn off this feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {6}',title:'"docusaurus.config.js"',"{6}":!0},"const config = {\n  presets: [\n    [\n      ({\n        blog: {\n          showReadingTime: true,\n        },\n      }),\n    ],\n  ],\n};\n")),(0,i.kt)("h3",{id:"blog-sidebar-list-number"},"Blog Sidebar List Number"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {6}',title:'"docusaurus.config.js"',"{6}":!0},"const config = {\n  presets: [\n    [\n      ({\n        blog: {\n          blogSidebarCount: 10,\n        },\n      }),\n    ],\n  ],\n};\n")),(0,i.kt)("h2",{id:"other"},"Other"),(0,i.kt)("h3",{id:"announcement-bar"},"Announcement Bar"),(0,i.kt)("p",null,"Remove the ",(0,i.kt)("strong",{parentName:"p"},"highlighted line")," will turn off this feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {4-8}',title:'"docusaurus.config.js"',"{4-8}":!0},'const config = {\n  themeConfig:\n    ({\n      announcementBar: {\n        id: \'announcementBar-0\', // Increment on change\n        content: `\u2b50\ufe0f If you like this Docusaurus Boilerplate, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arisac/docusaurus-boilerplate">GitHub</a> and follow me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/arisdotac" >${TwitterSvg} Twitter</a>`,\n        isCloseable: true,\n      },\n    }),\n};\n')),(0,i.kt)("p",null,"Css style for the Announcement Bar is under ",(0,i.kt)("inlineCode",{parentName:"p"},"// Announcment Bar")," section in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/css/custom.scss"),"."),(0,i.kt)("p",null,"Additional fields: ",(0,i.kt)("inlineCode",{parentName:"p"},"backgroundColor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"textColor"),"."),(0,i.kt)("p",null,"More @ ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/themes/configuration#announcement-bar"},"https://docusaurus.io/docs/api/themes/configuration#announcement-bar")),(0,i.kt)("h3",{id:"google-analytics"},"Google Analytics"),(0,i.kt)("p",null,"Uncomment the ",(0,i.kt)("strong",{parentName:"p"},"highlighted lines")," to enable Google Analytics feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {5-9}',title:'"docusaurus.config.js"',"{5-9}":!0},"const config = {\n  presets: [\n    [\n      ({\n        /** Google Analytics **/\n        // googleAnalytics: {\n        //   trackingID: 'UA-123456789-1',\n        //   anonymizeIP: true,\n        // },\n      }),\n    ],\n  ],\n};\n")),(0,i.kt)("admonition",{title:"production only",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This plugin is always inactive in development and ",(0,i.kt)("strong",{parentName:"p"},"only active in production")," to avoid polluting the analytics statistics.")),(0,i.kt)("p",null,"More @ ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-analytics"},"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-analytics")))}p.isMDXComponent=!0}}]);