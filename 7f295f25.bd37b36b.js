(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{177:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(8),a=(t(0),t(268)),i=t(277),c={id:"job",sidebar_label:"Job Configuration",hide_title:!0},u={unversionedId:"configure_hydra/job",id:"configure_hydra/job",isDocsHomePage:!1,title:"job",description:"Job configuration",source:"@site/docs/configure_hydra/job.md",slug:"/configure_hydra/job",permalink:"/docs/next/configure_hydra/job",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/configure_hydra/job.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1612222741,sidebar_label:"Job Configuration",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/configure_hydra/intro"},next:{title:"Customizing logging",permalink:"/docs/next/configure_hydra/logging"}},s=[{value:"Job configuration",id:"job-configuration",children:[]},{value:"Documentation",id:"documentation",children:[{value:"hydra.job.name",id:"hydrajobname",children:[]},{value:"hydra.job.override_dirname",id:"hydrajoboverride_dirname",children:[]},{value:"hydra.job.id",id:"hydrajobid",children:[]},{value:"hydra.job.num",id:"hydrajobnum",children:[]},{value:"hydra.job.config_name",id:"hydrajobconfig_name",children:[]},{value:"hydra.job.env_set",id:"hydrajobenv_set",children:[]},{value:"hydra.job.env_copy",id:"hydrajobenv_copy",children:[]}]}],l={toc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"job-configuration"},"Job configuration"),Object(a.b)("p",null,"The job configuration resides in ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.job"),".\nThe Structured Config is below, the latest definition is ",Object(a.b)(i.b,{to:"hydra/conf/__init__.py",mdxType:"GithubLink"},"here"),"."),Object(a.b)("details",null,Object(a.b)("summary",null,"Expand definition"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'# job runtime information will be populated here\n@dataclass\nclass JobConf:\n    # Job name, populated automatically unless specified by the user (in config or cli)\n    name: str = MISSING\n\n    # Concatenation of job overrides that can be used as a part\n    # of the directory name.\n    # This can be configured in hydra.job.config.override_dirname\n    override_dirname: str = MISSING\n\n    # Job ID in underlying scheduling system\n    id: str = MISSING\n\n    # Job number if job is a part of a sweep\n    num: int = MISSING\n\n    # The config name used by the job\n    config_name: Optional[str] = MISSING\n\n    # Environment variables to set remotely\n    env_set: Dict[str, str] = field(default_factory=dict)\n    # Environment variables to copy from the launching machine\n    env_copy: List[str] = field(default_factory=list)\n\n    # Job config\n    @dataclass\n    class JobConfig:\n        @dataclass\n        # configuration for the ${hydra.job.override_dirname} runtime variable\n        class OverrideDirname:\n            kv_sep: str = "="\n            item_sep: str = ","\n            exclude_keys: List[str] = field(default_factory=list)\n\n        override_dirname: OverrideDirname = OverrideDirname()\n\n    config: JobConfig = JobConfig()\n'))),Object(a.b)("h2",{id:"documentation"},"Documentation"),Object(a.b)("h3",{id:"hydrajobname"},"hydra.job.name"),Object(a.b)(i.a,{text:"Example application",to:"examples/configure_hydra/job_name",mdxType:"ExampleGithubLink"}),Object(a.b)("p",null,"The job name is used by different things in Hydra, such as the log file name (",Object(a.b)("inlineCode",{parentName:"p"},"${hydra.job.name}.log"),").\nIt is normally derived from the Python file name (The job name of the file ",Object(a.b)("inlineCode",{parentName:"p"},"train.py")," is ",Object(a.b)("inlineCode",{parentName:"p"},"train"),").\nYou can override it via the command line, or your config file. "),Object(a.b)("h3",{id:"hydrajoboverride_dirname"},"hydra.job.override_dirname"),Object(a.b)("p",null,"This field is populated automatically using your command line arguments and is typically being used as a part of your\noutput directory pattern.\nFor example, the command line arguments:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ python foo.py a=10 b=20\n")),Object(a.b)("p",null,"Would result in ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.job.override_dirname")," getting the value a=10,b=20.\nWhen used with the output directory override, it can automatically generate directories that represent the\ncommand line arguments used in your run.   "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")),Object(a.b)("p",null,"The generation of override_dirname can be controlled by ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname"),".\nIn particular, the separator char ",Object(a.b)("inlineCode",{parentName:"p"},"=")," and the item separator char ",Object(a.b)("inlineCode",{parentName:"p"},",")," can be modified, and in addition some command line\noverride keys can be automatically excluded from the generated ",Object(a.b)("inlineCode",{parentName:"p"},"override_dirname"),".\nAn example of a case where the exclude is useful is a random seed."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}/seed=${seed}\n  job:\n    config:\n      override_dirname:\n        exclude_keys:\n          - seed\n")),Object(a.b)("p",null,"With this configuration, running"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ python foo.py a=10 b=20 seed=999\n")),Object(a.b)("p",null,"Would result in a directory like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"output/a=10,b=20/seed=999\n")),Object(a.b)("p",null,"Allowing you to more easily group identical runs with different random seeds together."),Object(a.b)("h3",{id:"hydrajobid"},"hydra.job.id"),Object(a.b)("p",null,"The job ID is populated by active Hydra launcher. For the basic launcher, the job ID is just a serial job number, but\nfor other systems this could be the SLURM job ID or the AWS Instance ID."),Object(a.b)("h3",{id:"hydrajobnum"},"hydra.job.num"),Object(a.b)("p",null,"Serial job number within this current sweep run. (0 to n-1)"),Object(a.b)("h3",{id:"hydrajobconfig_name"},"hydra.job.config_name"),Object(a.b)("p",null,"The config name used by the job, this is populated automatically to match the config name in @hydra.main()"),Object(a.b)("h3",{id:"hydrajobenv_set"},"hydra.job.env_set"),Object(a.b)("p",null,"A Dict","[str, str]"," that is used to set the environment variables of the running job.\nSome common use cases are to set environment variables that are effecting underlying libraries, for example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job:\n    env_set:\n      OMP_NUM_THREADS: 1\n")),Object(a.b)("p",null,"Disables multithreading in Intel IPP and MKL."),Object(a.b)("p",null,"Another example, is to use interpolation to automatically set the rank\nfor ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://pytorch.org/tutorials/intermediate/dist_tuto.html"}),"Torch Distributed")," run to match the job number\nin the sweep. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job:\n    env_set:\n      RANK: ${hydra:job.num}\n")),Object(a.b)("h3",{id:"hydrajobenv_copy"},"hydra.job.env_copy"),Object(a.b)("p",null,"In some cases you want to automatically copy local environment variables to the running job environment variables.\nThis is particularly useful for remote runs."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job:\n    env_copy:\n      - AWS_KEY\n")))}d.isMDXComponent=!0},268:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,p=d["".concat(i,".").concat(f)]||d[f]||b[f]||a;return t?o.a.createElement(p,c(c({ref:n},s),{},{components:t})):o.a.createElement(p,c({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},269:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},270:function(e,n,t){"use strict";t.r(n);var r=t(11);t.d(n,"MemoryRouter",(function(){return r.d})),t.d(n,"Prompt",(function(){return r.f})),t.d(n,"Redirect",(function(){return r.g})),t.d(n,"Route",(function(){return r.h})),t.d(n,"Router",(function(){return r.i})),t.d(n,"StaticRouter",(function(){return r.j})),t.d(n,"Switch",(function(){return r.k})),t.d(n,"generatePath",(function(){return r.l})),t.d(n,"matchPath",(function(){return r.m})),t.d(n,"useHistory",(function(){return r.n})),t.d(n,"useLocation",(function(){return r.o})),t.d(n,"useParams",(function(){return r.p})),t.d(n,"useRouteMatch",(function(){return r.q})),t.d(n,"withRouter",(function(){return r.r})),t.d(n,"BrowserRouter",(function(){return r.a})),t.d(n,"HashRouter",(function(){return r.b})),t.d(n,"Link",(function(){return r.c})),t.d(n,"NavLink",(function(){return r.e}))},271:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(11),i=t(269),c=t(7),u=Object(r.createContext)({collectLink:function(){}}),s=t(272),l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};n.a=function(e){var n,t,d,b=e.isNavLink,f=e.to,p=e.href,m=e.activeClassName,h=e.isActive,v=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,j=void 0===g||g,y=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=Object(s.b)().withBaseUrl,D=Object(r.useContext)(u),_=f||p,w=Object(i.a)(_),x=null==_?void 0:_.replace("pathname://",""),N=void 0!==x?(t=x,j&&function(e){return e.startsWith("/")}(t)?O(t):t):void 0,A=Object(r.useRef)(!1),P=b?a.e:a.c,C=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&w&&window.docusaurus.prefetch(N),function(){C&&d&&d.disconnect()}}),[N,C,w]);var E=null!==(n=null==N?void 0:N.startsWith("#"))&&void 0!==n&&n,k=!N||!w||E;return N&&w&&!E&&!v&&D.collectLink(N),k?o.a.createElement("a",Object.assign({href:N},_&&!w&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(P,Object.assign({},y,{onMouseEnter:function(){A.current||(window.docusaurus.preload(N),A.current=!0)},innerRef:function(e){var n,t;C&&e&&w&&(n=e,t=function(){window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(n),d.disconnect(),t())}))}))).observe(n))},to:N||""},b&&{isActive:h,activeClassName:m}))}},272:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t(21),o=t(269);function a(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(a,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},273:function(e,n,t){try{e.exports=t(274)}catch(r){e.exports={}}},274:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useDocVersionSuggestions=n.useActiveDocContext=n.useActiveVersion=n.useLatestVersion=n.useVersions=n.useActivePluginAndVersion=n.useActivePlugin=n.useDocsData=n.useAllDocsData=void 0;var r=t(270),o=t(275),a=t(276);n.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},n.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},n.useActivePlugin=function(e){void 0===e&&(e={});var t=n.useAllDocsData(),o=r.useLocation().pathname;return a.getActivePlugin(t,o,e)},n.useActivePluginAndVersion=function(e){void 0===e&&(e={});var t=n.useActivePlugin(e),o=r.useLocation().pathname;if(t)return{activePlugin:t,activeVersion:a.getActiveVersion(t.pluginData,o)}},n.useVersions=function(e){return n.useDocsData(e).versions},n.useLatestVersion=function(e){var t=n.useDocsData(e);return a.getLatestVersion(t)},n.useActiveVersion=function(e){var t=n.useDocsData(e),o=r.useLocation().pathname;return a.getActiveVersion(t,o)},n.useActiveDocContext=function(e){var t=n.useDocsData(e),o=r.useLocation().pathname;return a.getActiveDocContext(t,o)},n.useDocVersionSuggestions=function(e){var t=n.useDocsData(e),o=r.useLocation().pathname;return a.getDocVersionSuggestions(t,o)}},275:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o})),t.d(n,"useAllPluginInstancesData",(function(){return a})),t.d(n,"usePluginData",(function(){return i}));var r=t(21);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var n=o()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function i(e,n){void 0===n&&(n="default");var t=a(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},276:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(270);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&t.failfast)throw new Error("Can't find active docs plugin for pathname="+n+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},n.getActiveVersion=function(e,t){var o=n.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(t,{path:e.path,exact:!1,strict:!1})}))},n.getActiveDocContext=function(e,t){var o,a,i=n.getActiveVersion(e,t),c=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:c,alternateDocVersions:c?(o=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(a[e.name]=n)}))})),a):{}}},n.getDocVersionSuggestions=function(e,t){var r=n.getLatestVersion(e),o=n.getActiveDocContext(e,t),a=o.activeVersion!==r;return{latestDocSuggestion:a?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},277:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return l}));var r=t(3),o=t(0),a=t.n(o),i=t(271),c=t(21),u=t(273);function s(e){return a.a.createElement(i.a,Object(r.a)({},e,{to:(n=e.to,o=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(t=null==o?void 0:o.name)&&void 0!==t?t:"current"]+n),target:"_blank"}));var n,t,o}function l(e){var n,t=null!==(n=e.text)&&void 0!==n?n:"Example";return a.a.createElement(s,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}}}]);