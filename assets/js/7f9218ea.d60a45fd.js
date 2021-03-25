(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{189:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(8),c=(t(0),t(277)),l={id:"overriding_packages",title:"Packages"},i={unversionedId:"advanced/overriding_packages",id:"advanced/overriding_packages",isDocsHomePage:!1,title:"Packages",description:"The package determines where the content of each input config is placed in the output config.",source:"@site/docs/advanced/overriding_packages.md",slug:"/advanced/overriding_packages",permalink:"/docs/next/advanced/overriding_packages",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/overriding_packages.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1616713990,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"The Defaults List",permalink:"/docs/next/advanced/defaults_list"},next:{title:"Config Search Path",permalink:"/docs/next/advanced/search_path"}},o=[{value:"An example using only default packages",id:"an-example-using-only-default-packages",children:[]},{value:"Overriding packages using the Defaults List",id:"overriding-packages-using-the-defaults-list",children:[]},{value:"Overriding the package via the package directive",id:"overriding-the-package-via-the-package-directive",children:[]},{value:"Using a config group more than once",id:"using-a-config-group-more-than-once",children:[]}],s={toc:o};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The package determines where the content of each input config is placed in the output config.\nThe default package of an input config is derived from its Config Group. e.g. The default package of ",Object(c.b)("inlineCode",{parentName:"p"},"server/db/mysql.yaml")," is ",Object(c.b)("inlineCode",{parentName:"p"},"server.db"),"."),Object(c.b)("p",null,"The default package can be overridden ",Object(c.b)("a",{parentName:"p",href:"#overriding-packages-using-the-defaults-list"},"in the Defaults List"),"\nor via a ",Object(c.b)("a",{parentName:"p",href:"#overriding-the-package-via-the-package-directive"},"Package Directive")," at the top of the config file.\nChanging the package of a config can be useful when using a config from another library, or when using the same\nconfig group twice in the same app."),Object(c.b)("p",null,"The priority for determining the final package for a config is as follows:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"The package specified in the Defaults List (relative to the package of the including config)"),Object(c.b)("li",{parentName:"ol"},"The package specified in the Package Directive (absolute)"),Object(c.b)("li",{parentName:"ol"},"The default package")),Object(c.b)("p",null,"We will use the following configs in the examples below:"),Object(c.b)("div",{className:"row"},Object(c.b)("div",{className:"col col--4"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - server/apache\n\ndebug: false\n\n\n\n"))),Object(c.b)("div",{className:"col col--4"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml"',title:'"server/apache.yaml"'},"defaults:\n  - db: mysql\n\nname: apache\n\n\n\n"))),Object(c.b)("div",{className:"col col--4"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/db/mysql.yaml"',title:'"server/db/mysql.yaml"'},"name: mysql\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/db/sqlite.yaml"',title:'"server/db/sqlite.yaml"'},"name: sqlite\n")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory structure"',title:'"Config',directory:!0,'structure"':!0},"\u251c\u2500\u2500 server\n\u2502   \u251c\u2500\u2500 db\n\u2502   \u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2502   \u2514\u2500\u2500 sqlite.yaml\n\u2502   \u2514\u2500\u2500 apache.yaml\n\u2514\u2500\u2500 config.yaml\n")),Object(c.b)("h3",{id:"an-example-using-only-default-packages"},"An example using only default packages"),Object(c.b)("p",null,"The default package of ",Object(c.b)("em",{parentName:"p"},"config.yaml")," is the global package, of ",Object(c.b)("em",{parentName:"p"},"server/apache.yaml")," is ",Object(c.b)("em",{parentName:"p"},"server")," and of ",Object(c.b)("em",{parentName:"p"},"server/db/mysql.yaml")," is ",Object(c.b)("em",{parentName:"p"},"server.db"),". "),Object(c.b)("div",{className:"row"},Object(c.b)("div",{className:"col col--6"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py" {1-2}',title:'"$',python:!0,'my_app.py"':!0,"{1-2}":!0},"server:\n  db:\n    name: mysql\n  name: apache\ndebug: false\n")))),Object(c.b)("h3",{id:"overriding-packages-using-the-defaults-list"},"Overriding packages using the Defaults List"),Object(c.b)("p",null,"By default, packages specified in the Defaults List are relative to the package of containing config.\nAs a consequence, overriding a package relocates the entire subtree. "),Object(c.b)("div",{className:"row"},Object(c.b)("div",{className:"col col--4"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - server/apache@admin\n\ndebug: false\n\n"))),Object(c.b)("div",{className:"col col--4"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {2}',title:'"server/apache.yaml"',"{2}":!0},"defaults:\n - db@backup: mysql\n\nname: apache\n\n"))),Object(c.b)("div",{className:"col col--4"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output config" {1-4}',title:'"Output','config"':!0,"{1-4}":!0},"admin:\n  backup:\n    name: mysql\n  name: apache\ndebug: false\n")))),Object(c.b)("p",null,"Note that content of ",Object(c.b)("em",{parentName:"p"},"server/apache.yaml")," is relocated to ",Object(c.b)("em",{parentName:"p"},"admin"),"\nand the content of ",Object(c.b)("em",{parentName:"p"},"server/db/mysql.yaml")," to ",Object(c.b)("em",{parentName:"p"},"admin.backup"),"."),Object(c.b)("h4",{id:"default-list-package-keywords"},"Default List package keywords"),Object(c.b)("p",null,"We will use this example, replacing ",Object(c.b)("em",{parentName:"p"},"<@PACKAGE>")," to demonstrate different cases:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config_group/config.yaml"',title:'"config_group/config.yaml"'},"defaults:\n  - /server/db<@PACKAGE>: mysql\n")),Object(c.b)("p",null,"Without a package override, the resulting package is ",Object(c.b)("inlineCode",{parentName:"p"},"config_group.server.db"),".",Object(c.b)("br",{parentName:"p"}),"\n","With the ",Object(c.b)("strong",{parentName:"p"},"@","_","here","_")," keyword, The resulting package is the same as the containing config (",Object(c.b)("inlineCode",{parentName:"p"},"config_group"),"). "),Object(c.b)("h5",{id:"absolute-keywords"},"Absolute keywords:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"@","_","group","_"),": ","_","group","_"," is the absolute default package of the config (",Object(c.b)("inlineCode",{parentName:"li"},"server.db"),")"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"@","_","global","_"),": The global package. Anything following ","_","global","_"," is absolute.",Object(c.b)("br",{parentName:"li"}),"e.g. ",Object(c.b)("strong",{parentName:"li"},"@","_","global","_",".foo")," becomes ",Object(c.b)("inlineCode",{parentName:"li"},"foo"),".")),Object(c.b)("h3",{id:"overriding-the-package-via-the-package-directive"},"Overriding the package via the package directive"),Object(c.b)("p",null,"The @package directive changes the package of a config file. The package specified by a @package directive is always absolute."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/db/mysql.yaml" {1}',title:'"server/db/mysql.yaml"',"{1}":!0},"# @package foo.bar\nname: mysql\n")),Object(c.b)("p",null,"To change the package to the global (empty) package, use the keyword ",Object(c.b)("inlineCode",{parentName:"p"},"_global_"),"."),Object(c.b)("h3",{id:"using-a-config-group-more-than-once"},"Using a config group more than once"),Object(c.b)("p",null,"The following example adds the ",Object(c.b)("inlineCode",{parentName:"p"},"server/db/mysql")," config in the packages ",Object(c.b)("inlineCode",{parentName:"p"},"src")," and ",Object(c.b)("inlineCode",{parentName:"p"},"dst"),"."),Object(c.b)("div",{className:"row"},Object(c.b)("div",{className:"col col--6"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n - server/db@src: mysql\n - server/db@dst: mysql\n\n"))),Object(c.b)("div",{className:"col  col--6"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"src:\n  name: mysql\ndst:\n  name: mysql\n")))),Object(c.b)("p",null,"When overriding config groups with a non-default package, the package must be used:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py server/db@src=sqlite"',title:'"$',python:!0,"my_app.py":!0,"server/db@src":'sqlite"'},"src:\n  name: sqlite\ndst:\n  name: mysql\n")))}p.isMDXComponent=!0},277:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},g=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(t),g=n,d=b["".concat(l,".").concat(g)]||b[g]||m[g]||c;return t?r.a.createElement(d,i(i({ref:a},s),{},{components:t})):r.a.createElement(d,i({ref:a},s))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=g;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<c;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);