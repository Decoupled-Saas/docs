"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:4},a="Use Blog",i={unversionedId:"quick-start/use-blog",id:"quick-start/use-blog",title:"Use Blog",description:"Add Blog Posts",source:"@site/docs/quick-start/use-blog.md",sourceDirName:"quick-start",slug:"/quick-start/use-blog",permalink:"/fr/quick-start/use-blog",draft:!1,editUrl:"https://github.com/arisac/docusaurus-boilerplate/edit/main/docs/quick-start/use-blog.md",tags:[],version:"current",lastUpdatedBy:"Allan",lastUpdatedAt:1678017222,formattedLastUpdatedAt:"5 mars 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Use Pages",permalink:"/fr/quick-start/use-pages"},next:{title:"Translate Site",permalink:"/fr/quick-start/translate-site"}},s={},u=[{value:"Add Blog Posts",id:"add-blog-posts",level:2},{value:"Remove Blog Feature",id:"remove-blog-feature",level:2},{value:"Remove links to blog",id:"remove-links-to-blog",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-blog"},"Use Blog"),(0,o.kt)("h2",{id:"add-blog-posts"},"Add Blog Posts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WIP")),(0,o.kt)("p",null,"Create files under ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog")," directory."),(0,o.kt)("p",null,"More @ ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"https://docusaurus.io/docs/blog")),(0,o.kt)("h2",{id:"remove-blog-feature"},"Remove Blog Feature"),(0,o.kt)("p",null,"Blog in a docs site is useful for release notes, updates etc. But it can be turned off by following steps below, or you can just temporarily hide the blog by removing posts in ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," directory and remove the links to blog in navbar and footer."),(0,o.kt)("p",null,"To remove the blog feature:"),(0,o.kt)("p",null,"Remove the following highlightend lines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'{4-5,11-16} title="docusaurus.config.js"',"{4-5,11-16}":!0,title:'"docusaurus.config.js"'},"const config = {\n  plugins: [\n    [require.resolve('@cmfcmf/docusaurus-search-local'), {\n-      // whether to index blog pages\n-      indexBlog: true,\n    }]\n  ],\n  presets: [\n    [\n      /** @type {import('@docusaurus/preset-classic').Options} */\n-        blog: {\n-          showReadingTime: true,\n-          // Please change this to your repo.\n-          editUrl:\n-            'https://github.com/arisac/docusaurus-boilerplate/edit/main/blog/',\n-        },\n      }),\n    ],\n  ],\n};\n")),(0,o.kt)("h2",{id:"remove-links-to-blog"},"Remove links to blog"),(0,o.kt)("p",null,"If you have docs or pages linked to blog, remove the links from the file."),(0,o.kt)("p",null,"And finally, remove links in navbar and footer. Some pre-configs in this template is highlightened:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'{6,13-16}title="docusaurus.config.js"',"{6,13-16}title":'"docusaurus.config.js"'},'const config = {\n  themeConfig:\n    /** @type {import(\'@docusaurus/preset-classic\').ThemeConfig} */\n    ({\n      navbar: {\n-        items: [{ to: "/blog", label: "Blog", position: "left" }],\n      },\n      footer: {\n        links: [\n          {\n            title: "More",\n            items: [\n-              {\n-                label: "Blog",\n-                to: "/blog",\n-              },\n            ],\n          },\n        ],\n      },\n    }),\n};\n')))}p.isMDXComponent=!0}}]);