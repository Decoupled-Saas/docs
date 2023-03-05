"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(i,".").concat(g)]||d[g]||p[g]||s;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:5},l="Translate Site",o={unversionedId:"quick-start/translate-site",id:"quick-start/translate-site",title:"Translate Site",description:"This section will cover:",source:"@site/docs/quick-start/translate-site.md",sourceDirName:"quick-start",slug:"/quick-start/translate-site",permalink:"/fr/quick-start/translate-site",draft:!1,editUrl:"https://github.com/arisac/docusaurus-boilerplate/edit/main/docs/quick-start/translate-site.md",tags:[],version:"current",lastUpdatedBy:"Allan",lastUpdatedAt:1678017222,formattedLastUpdatedAt:"5 mars 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Use Blog",permalink:"/fr/quick-start/use-blog"},next:{title:"Deploy your site",permalink:"/fr/quick-start/deploy"}},i={},u=[{value:"Basics on Translation in Docusaurus",id:"basics-on-translation-in-docusaurus",level:2},{value:"Add/remove a language",id:"addremove-a-language",level:2},{value:"Configure i18n",id:"configure-i18n",level:3},{value:"Translate a doc",id:"translate-a-doc",level:3},{value:"Translate a blog post",id:"translate-a-blog-post",level:3},{value:"Translate pages",id:"translate-pages",level:3},{value:"Translate other strings",id:"translate-other-strings",level:2},{value:"Run local dev server in another language",id:"run-local-dev-server-in-another-language",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"translate-site"},"Translate Site"),(0,r.kt)("p",null,"This section will cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basics on Translation in Docusaurus"),(0,r.kt)("li",{parentName:"ul"},"Pre-configs for Chinese Lanugages (zh)"),(0,r.kt)("li",{parentName:"ul"},"Add/remove a language",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Docs location"),(0,r.kt)("li",{parentName:"ul"},"Blog posts location"),(0,r.kt)("li",{parentName:"ul"},"Pages location"))),(0,r.kt)("li",{parentName:"ul"},"Translate default strings, navbar and footer, theme etc.")),(0,r.kt)("h2",{id:"basics-on-translation-in-docusaurus"},"Basics on Translation in Docusaurus"),(0,r.kt)("p",null,"This template has a French translation for docs, but only one doc, ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/start.md"),", is translated."),(0,r.kt)("p",null,"Because ",(0,r.kt)("strong",{parentName:"p"},"English")," is set to the ",(0,r.kt)("em",{parentName:"p"},"default")," language, for other languages, if there is no translation file, the ",(0,r.kt)("strong",{parentName:"p"},"English")," one will be used."),(0,r.kt)("h2",{id:"addremove-a-language"},"Add/remove a language"),(0,r.kt)("p",null,"This example will guide you to add ",(0,r.kt)("strong",{parentName:"p"},"Spanish (es)")," \ud83c\uddea\ud83c\uddf8 to your website."),(0,r.kt)("h3",{id:"configure-i18n"},"Configure i18n"),(0,r.kt)("p",null,"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultLocale")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"locales")," in docusaurus config file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"defaultLocale: default language"),(0,r.kt)("li",{parentName:"ul"},"locales: languages in this site")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"es")," to locales:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3,4}title="docusaurus.config.js"',"{3,4}title":'"docusaurus.config.js"'},"const config = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr', 'es'],\n  },\n")),(0,r.kt)("p",null,"Update search setting in docusaurus config file, add ",(0,r.kt)("inlineCode",{parentName:"p"},"es")," to the language:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5} title="docusaurus.config.js"',"{5}":!0,title:'"docusaurus.config.js"'},'const config = {\n  plugins: [\n    [require.resolve(\'@cmfcmf/docusaurus-search-local\'), {\n      // language of your documentation, see next section\n      language: ["en", "fr", "es"],\n    }]\n  ],\n')),(0,r.kt)("h3",{id:"translate-a-doc"},"Translate a doc"),(0,r.kt)("p",null,"Docs for ",(0,r.kt)("inlineCode",{parentName:"p"},"es")," are placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/es/docusaurus-plugin-content-docs/current/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/es/docusaurus-plugin-content-docs/current/\n\ncp docs/start.md i18n/es/docusaurus-plugin-content-docs/current/start.md\n")),(0,r.kt)("p",null,"Translate ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/es/docusaurus-plugin-content-docs/current/start.md")," in Spanish."),(0,r.kt)("h3",{id:"translate-a-blog-post"},"Translate a blog post"),(0,r.kt)("p",null,"Blog posts for ",(0,r.kt)("inlineCode",{parentName:"p"},"es")," are placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/es/docusaurus-plugin-content-blog")),(0,r.kt)("p",null,"Copy your blog Markdown files to ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/es/docusaurus-plugin-content-blog"),", and translate them:"),(0,r.kt)("h3",{id:"translate-pages"},"Translate pages"),(0,r.kt)("p",null,"Pages for ",(0,r.kt)("inlineCode",{parentName:"p"},"es")," are placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/es/docusaurus-plugin-content-pages")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/es/docusaurus-plugin-content-pages\ncp -r src/pages/**.md i18n/es/docusaurus-plugin-content-pages\ncp -r src/pages/**.mdx i18n/es/docusaurus-plugin-content-pages\n")),(0,r.kt)("h2",{id:"translate-other-strings"},"Translate other strings"),(0,r.kt)("p",null,"Translate Navbar, Footer, Global strings in Docs and Blog, i18n strings in code is a ton of works. This template is using ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus-theme-classic"),", and it should be no setup for the UI translation out of the box."),(0,r.kt)("p",null,"Docusaurus provide a quick way to generate json files for all strings supports i18n by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# replace `es` for your desired language\nyarn run write-translations -- --locale es\n")),(0,r.kt)("p",null,"This will generate the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"{5,8,11,12,14}","{5,8,11,12,14}":!0},"  project-root\n  \u251c\u2500\u2500 i18n\n  \u2502   \u2514\u2500\u2500 es\n  \u2502       \u251c\u2500\u2500 docusaurus-plugin-content-blog\n+ \u2502       \u2502   \u2514\u2500\u2500 options.json\n  \u2502       \u2502\n  \u2502       \u251c\u2500\u2500 docusaurus-plugin-content-docs\n+ \u2502       \u2502   \u2514\u2500\u2500 current.json\n  \u2502       \u2502\n  \u2502       \u2514\u2500\u2500 docusaurus-theme-classic\n+ \u2502       \u2502   \u251c\u2500\u2500 footer.json\n+ \u2502       \u2502   \u2514\u2500\u2500 navbar.json\n  \u2502       \u2502\n+ \u2502       \u2514\u2500\u2500 code.json\n  .\n")),(0,r.kt)("p",null,"You can continue translating other strings with the generated json files."),(0,r.kt)("h2",{id:"run-local-dev-server-in-another-language"},"Run local dev server in another language"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start -- --locale es\n")))}p.isMDXComponent=!0}}]);