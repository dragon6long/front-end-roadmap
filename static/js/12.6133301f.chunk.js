(this["webpackJsonpfront-end-roadmap"]=this["webpackJsonpfront-end-roadmap"]||[]).push([[12],{50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(54)),u=i(n(6));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)({}),s=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(l,null,(function(t){return o.default.createElement(e,r({components:n||t},a))}))}};var p=function(e){var t=e.components,n=e.children;return o.default.createElement(s,{value:t},n)};p.propTypes={components:u.default.object.isRequired,children:u.default.element.isRequired},t.default=p},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(52);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(50);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=s(a),i=s(n(53)),c=n(50);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,c=e.children,s=e.components,l=void 0===s?{}:s,p=e.Layout,m=e.layoutProps,h=l[n+"."+t]||l[t]||f[t]||t;return p?((0,i.default)(this,p),u.default.createElement(p,r({components:l},m),u.default.createElement(h,a,c))):u.default.createElement(h,a,c)}}]),t}(a.Component);t.default=(0,c.withMDXComponents)(m)},53:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,l=s&&s(Object);e.exports=function e(t,n,p){if("string"!==typeof n){if(l){var f=s(n);f&&f!==l&&e(t,f,p)}var m=u(n);i&&(m=m.concat(i(n)));for(var h=0;h<m.length;++h){var d=m[h];if(!r[d]&&!o[d]&&(!p||!p[d])){var v=c(n,d);try{a(t,d,v)}catch(y){}}}return t}return t}},54:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(0)),o=a(n(55));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},55:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(u(r),u(n(6))),a=u(n(56));u(n(57));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}t.default=function(e,t){var n,u,p="__create-react-context-"+(0,a.default)()+"__",f=function(e){function n(){var t,r;i(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return t=r=c(this,e.call.apply(e,[this].concat(a))),r.emitter=l(r.props.value),c(r,t)}return s(n,e),n.prototype.getChildContext=function(){var e;return(e={})[p]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(u=r)?0!==a||1/a===1/u:a!==a&&u!==u)?o=0:(o="function"===typeof t?t(n,r):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,u},n.prototype.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[p]=o.default.object.isRequired,n);var m=function(t){function n(){var e,r;i(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return e=r=c(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},c(r,e)}return s(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return m.contextTypes=((u={})[p]=o.default.object,u),{Provider:f,Consumer:m}},e.exports=t.default},56:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(17))},57:function(e,t,n){"use strict";var r=n(58);e.exports=r},58:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},59:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},66:function(e,t,n){"use strict";n.r(t);var r=n(59),o=n(0),a=n.n(o),u=n(51);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return a.a.createElement(u.MDXTag,{name:"wrapper",components:t},a.a.createElement(u.MDXTag,{name:"h1",components:t},"Git"),a.a.createElement(u.MDXTag,{name:"h2",components:t},"Git \u4f7f\u7528\u6559\u7a0b"),a.a.createElement(u.MDXTag,{name:"ul",components:t},a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.liaoxuefeng.com/wiki/896043488029600"}},"Git \u6559\u7a0b-\u5ed6\u96ea\u5cf0\u51fa\u54c1")),a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://learngitbranching.js.org/?demo=&locale=zh_CN"}},"\u5b66\u4e60 git \u5206\u652f-\u53ef\u89c6\u5316\u5b66\u4e60\uff0c\u8d85\u8d5e \ud83d\udc4d")),a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html"}},"\u56fe\u89e3 Git")),a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://think-like-a-git.net/"}},"think like a Git "))),a.a.createElement(u.MDXTag,{name:"h2",components:t},"Github \u7684\u4f7f\u7528"),a.a.createElement(u.MDXTag,{name:"ul",components:t},a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://juejin.im/post/5d635670e51d4561e721df15"}},"Github \u4f7f\u7528\u6559\u7a0b\u56fe\u6587\u8be6\u89e3"))),a.a.createElement(u.MDXTag,{name:"h2",components:t},"\u4f7f\u7528 github \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2"),a.a.createElement(u.MDXTag,{name:"blockquote",components:t},a.a.createElement(u.MDXTag,{name:"p",components:t,parentName:"blockquote"},"\u641c\u4e86\u4e0b\u57fa\u672c\u90fd\u662f\u7528 hexo \u6765\u642d\u5efa\u535a\u5ba2\uff0c\u8fd9\u91cc\u4e0d\u5c31\u4e0d\u8d34\u5730\u5740\u4e86\u3002\u6211\u66f4\u63a8\u8350\u4f7f\u7528 gatsby,vuePress \u8fd9\u79cd\u9759\u6001\u7ad9\u70b9\u6846\u67b6\u6765\u642d\u5efa\uff0c\u540e\u9762\u51fa\u4e2a\u6559\u7a0b\u3002\uff08\u6216\u8005\u81ea\u5df1\u5199\u4e2a\u9875\u9762\uff08\u4f7f\u7528 react/vue\uff09\uff0c\u7136\u540e\u4f7f\u7528 gp-pages \u5305\u6765\u90e8\u7f72\u5230 github \u4ed3\u5e93\uff09")))}}}]);
//# sourceMappingURL=12.6133301f.chunk.js.map