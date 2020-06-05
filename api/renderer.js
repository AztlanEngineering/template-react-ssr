module.exports=function(e){var s={};function t(o){if(s[o])return s[o].exports;var a=s[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=s,t.d=function(e,s,o){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)t.d(o,a,function(s){return e[s]}.bind(null,a));return o},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="/",t(t.s=0)}({"./public/loadable-stats.json":
/*!************************************!*\
  !*** ./public/loadable-stats.json ***!
  \************************************/
/*!***********************************!*\
  !*** ./src/config/siteContext.js ***!
  \***********************************/
/*! exports provided: default */function(e,s,t){"use strict";t.r(s),s.default={SITE_NAME:"Internet 1999",SITE_CANONICAL:"https://internet1999.org",SUPPORT_EMAIL:"support@support.com",FACEBOOK:"facebook_id",INSTAGRAM:"@superaccount"}},"./src/site/App.js":
/*!*************************!*\
  !*** ./src/site/App.js ***!
  \*************************/
/*! exports provided: default */function(e,s,t){"use strict";t.r(s);var o=t(/*! react */"react"),a=t.n(o),i=t(/*! react-router-dom */"react-router-dom"),l=t(/*! @fwrlines/ds */"@fwrlines/ds"),r=t(/*! react-intl */"react-intl"),n=t(/*! ./allRoutes.js */"./src/site/allRoutes.js"),f=Object(r.defineMessages)({loginTitle:{id:"app.auth.pages.login.title",defaultMessage:"Dashboard Access"},loginSubtitle:{id:"app.auth.pages.login.subtitle",defaultMessage:"Login here to your dashboard account"},unauthorizedTitle:{id:"app.auth.pages.unauthorized.title",defaultMessage:"Unauthorized"},unauthorizedSubtitle:{id:"app.auth.pages.unauthorized.subtitle",defaultMessage:"Your have sucessfully connected your account, but you are not allowed to log in."},unauthorizedExplanation:{id:"app.auth.pages.unauthorized.explanation",defaultMessage:"You can try to login with another account. Alternatively, if you believe this is a mistake"},unauthorizedContact:{id:"app.auth.pages.unauthorized.contact",defaultMessage:"you can contact support here."}});s.default=()=>{var[e,s]=Object(o.useState)(!1);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"x-primary c-x"},"Hello there"),a.a.createElement(l.Paginator,{paginator:{totalPages:200,page:77}}),a.a.createElement(l.HorizontalBar,null,"iHey"),a.a.createElement(r.FormattedMessage,f.unauthorizedContact),a.a.createElement(l.AnimatedVCaret,{active:e,setActive:s,id:"myarrow",width:"200px"}),a.a.createElement(l.SwitchRouteMap,{routes:n.default,NotFound:a.a.createElement(i.Redirect,{to:"404"})}))}},"./src/site/allRoutes.js":
/*!*******************************!*\
  !*** ./src/site/allRoutes.js ***!
  \*******************************/
/*! exports provided: default */function(e,s,t){"use strict";t.r(s),s.default=[]},"./src/ssr/renderer.simple.js":
/*!************************************!*\
  !*** ./src/ssr/renderer.simple.js ***!
  \************************************/
/*! exports provided: default */function(e,s,t){"use strict";t.r(s);var o=t(/*! react */"react"),a=t.n(o),i=t(/*! react-dom/server */"react-dom/server"),l=t.n(i),r=t(/*! @loadable/server */"@loadable/server"),n=t(/*! react-router-dom */"react-router-dom"),f=t(/*! react-helmet */"react-helmet"),m=t(/*! ../site/App.js */"./src/site/App.js"),c=t(/*! ../../public/loadable-stats.json */"./public/loadable-stats.json"),d=t(/*! @fwrlines/ds */"@fwrlines/ds"),w=t(/*! react-intl */"react-intl"),p=t(/*! ../translations/it.json */"./src/translations/it.json"),u=t(/*! ../config/siteContext */"./src/config/siteContext.js");function g(e,s,t,o,a,i,l){try{var r=e[i](l),n=r.value}catch(e){return void t(e)}r.done?s(n):Promise.resolve(n).then(o,a)}var h={},_=l.a.renderToString;s.default=function(){var e,s=(e=function*(e,s){var t=new r.ChunkExtractor({stats:c}),o=a.a.createElement(n.StaticRouter,{location:e.url,context:h},a.a.createElement(d.SiteContextProvider,{config:u.default,initialTheme:"system"},a.a.createElement(w.IntlProvider,{locale:"en",messages:p},a.a.createElement(m.default,null)))),i=yield _(o);console.log(e.method," ",e.baseUrl||e.url);var l=t.getScriptTags(),g=t.getLinkTags(),v=t.getStyleTags(),b=f.Helmet.renderStatic();return s.send('<!DOCTYPE html>\n<html lang="it">\n  <head>\n    <title></title>\n\t\t<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n\t\t<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n\t\t<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n\t\t<link rel="manifest" href="/manifest.json">\n\t\t<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#060930">\n\t\t<meta name="robots" content="index, follow">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t<meta name="msapplication-TileColor" content="#060930">\n\t\t<meta name="theme-color" content="#ffffff">\n    <meta name=\'twitter:site\' content="@meccamico" />\n    <meta name=\'twitter:creator\' content="@meccamico" />\n    <meta property=\'og:site_name\' content="Meccamico" />\n  </head>\n  <body>\n\t\t<div id="main"></div>\n  </body>\n</html>\n\n\n'.replace('<div id="main"></div>','<div id="main">'.concat(i,"</div>")).replace("</body>",l+"</body>").replace("<title></title>",b.title.toString()+b.meta.toString()+g+v).replace(/(\r\n|\n|\r)/gm,"").replace(/\s\s+/g,""))},function(){var s=this,t=arguments;return new Promise((function(o,a){var i=e.apply(s,t);function l(e){g(i,o,a,l,r,"next",e)}function r(e){g(i,o,a,l,r,"throw",e)}l(void 0)}))});return function(e,t){return s.apply(this,arguments)}}()},"./src/translations/it.json":
/*!**********************************!*\
  !*** ./src/translations/it.json ***!
  \**********************************/
/*! exports provided: app.auth.pages.login.subtitle, app.auth.pages.login.title, app.auth.pages.unauthorized.contact, app.auth.pages.unauthorized.explanation, app.auth.pages.unauthorized.subtitle, app.auth.pages.unauthorized.title, app.dashboard.navtree.account, app.dashboard.navtree.account_google_integration, app.dashboard.navtree.account_home, app.dashboard.navtree.account_label, app.dashboard.navtree.account_profile, app.dashboard.navtree.billing, app.dashboard.navtree.billing_home, app.dashboard.navtree.billing_payment, app.dashboard.navtree.billing_plan, app.dashboard.navtree.home, app.dashboard.navtree.logout, app.dashboard.navtree.shop, app.dashboard.navtree.shop_contact, app.dashboard.navtree.shop_home, app.dashboard.navtree.shop_hours, app.dashboard.navtree.website, app.dashboard.navtree.website_pages, app.dashboard.theme_selector.dark_theme, app.dashboard.theme_selector.light_theme, app.dashboard.theme_selector.system_theme, app.dashboard.theme_selector.theme, default */function(e){e.exports=JSON.parse('{"app.auth.pages.login.subtitle":"","app.auth.pages.login.title":"","app.auth.pages.unauthorized.contact":"","app.auth.pages.unauthorized.explanation":"","app.auth.pages.unauthorized.subtitle":"","app.auth.pages.unauthorized.title":"","app.dashboard.navtree.account":"","app.dashboard.navtree.account_google_integration":"","app.dashboard.navtree.account_home":"","app.dashboard.navtree.account_label":"","app.dashboard.navtree.account_profile":"","app.dashboard.navtree.billing":"","app.dashboard.navtree.billing_home":"","app.dashboard.navtree.billing_payment":"","app.dashboard.navtree.billing_plan":"","app.dashboard.navtree.home":"","app.dashboard.navtree.logout":"","app.dashboard.navtree.shop":"","app.dashboard.navtree.shop_contact":"","app.dashboard.navtree.shop_home":"","app.dashboard.navtree.shop_hours":"","app.dashboard.navtree.website":"","app.dashboard.navtree.website_pages":"","app.dashboard.theme_selector.dark_theme":"","app.dashboard.theme_selector.light_theme":"","app.dashboard.theme_selector.system_theme":"","app.dashboard.theme_selector.theme":""}')},0:
/*!******************************************!*\
  !*** multi ./src/ssr/renderer.simple.js ***!
  \******************************************/
/*! no static exports found */function(e,s,t){e.exports=t(/*! /home/adrian_villa/code/fwrlines/template-react-ssr/src/ssr/renderer.simple.js */"./src/ssr/renderer.simple.js")},"@fwrlines/ds":
/*!*******************************!*\
  !*** external "@fwrlines/ds" ***!
  \*******************************/
/*! no static exports found */function(e,s){e.exports=require("@fwrlines/ds")},"@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */function(e,s){e.exports=require("@loadable/server")},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,s){e.exports=require("react")},"react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */function(e,s){e.exports=require("react-dom/server")},"react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */function(e,s){e.exports=require("react-helmet")},"react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */function(e,s){e.exports=require("react-intl")},"react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */function(e,s){e.exports=require("react-router-dom")}});