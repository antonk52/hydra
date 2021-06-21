(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7554],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,h=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3046:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),c=["components"],i={id:"search_path",title:"Config search path",sidebar_label:"Config search path"},p=void 0,s={unversionedId:"advanced/search_path",id:"version-0.11/advanced/search_path",isDocsHomePage:!1,title:"Config search path",description:"Hydra uses a search path approach to find configuration files as it composes the configuration object.",source:"@site/versioned_docs/version-0.11/advanced/search_path.md",sourceDirName:"advanced",slug:"/advanced/search_path",permalink:"/docs/0.11/advanced/search_path",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/advanced/search_path.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1624318963,formattedLastUpdatedAt:"6/21/2021",frontMatter:{id:"search_path",title:"Config search path",sidebar_label:"Config search path"},sidebar:"version-0.11/docs",previous:{title:"Application packaging",permalink:"/docs/0.11/advanced/app_packaging"},next:{title:"Hydra plugins",permalink:"/docs/0.11/advanced/plugins"}},u=[],l={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hydra uses a search path approach to find configuration files as it composes the configuration object.\n",(0,o.kt)("inlineCode",{parentName:"p"},"SearchPathPlugin")," can manipulate the search path."),(0,o.kt)("p",null,"You can inspect the search path and the configurations loaded by Hydra by turning on verbose logging for the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra")," logger:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=hydra\n")))}d.isMDXComponent=!0}}]);