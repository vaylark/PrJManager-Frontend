import{d as x}from"./lodash-es-jOsQeQUn.js";function F(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r,g,s,d,u=[],v=!0,h=!1;try{if(s=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;v=!1}else for(;!(v=(r=s.call(e)).done)&&(u.push(r.value),u.length!==n);v=!0);}catch(p){h=!0,g=p}finally{try{if(!v&&e.return!=null&&(d=e.return(),Object(d)!==d))return}finally{if(h)throw g}}return u}}function H(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function C(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,z(r.key),r)}}function K(t,n,e){return n&&C(t.prototype,n),e&&C(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function L(t,n){return M(t)||F(t,n)||R(t,n)||W()}function M(t){if(Array.isArray(t))return t}function R(t,n){if(t){if(typeof t=="string")return V(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return V(t,n)}}function V(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(t,n){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var r=e.call(t,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function z(t){var n=q(t,"string");return typeof n=="symbol"?n:String(n)}var B=K(function t(n,e){var r=e.default,g=r===void 0?null:r,s=e.triggerUpdate,d=s===void 0?!0:s,u=e.onChange,v=u===void 0?function(h,p){}:u;H(this,t),this.name=n,this.defaultVal=g,this.triggerUpdate=d,this.onChange=v});function G(t){var n=t.stateInit,e=n===void 0?function(){return{}}:n,r=t.props,g=r===void 0?{}:r,s=t.methods,d=s===void 0?{}:s,u=t.aliases,v=u===void 0?{}:u,h=t.init,p=h===void 0?function(){}:h,P=t.update,I=P===void 0?function(){}:P,A=Object.keys(g).map(function(m){return new B(m,g[m])});return function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=Object.assign({},e instanceof Function?e(m):e,{initialised:!1}),b={};function a(i){return E(i,m),$(),a}var E=function(f,o){p.call(a,f,l,o),l.initialised=!0},$=x(function(){l.initialised&&(I.call(a,l,b),b={})},1);return A.forEach(function(i){a[i.name]=f(i);function f(o){var c=o.name,y=o.triggerUpdate,T=y===void 0?!1:y,O=o.onChange,U=O===void 0?function(j,w){}:O,S=o.defaultVal,k=S===void 0?null:S;return function(j){var w=l[c];if(!arguments.length)return w;var _=j===void 0?k:j;return l[c]=_,U.call(a,_,l,w),!b.hasOwnProperty(c)&&(b[c]=w),T&&$(),a}}}),Object.keys(d).forEach(function(i){a[i]=function(){for(var f,o=arguments.length,c=new Array(o),y=0;y<o;y++)c[y]=arguments[y];return(f=d[i]).call.apply(f,[a,l].concat(c))}}),Object.entries(v).forEach(function(i){var f=L(i,2),o=f[0],c=f[1];return a[o]=a[c]}),a.resetProps=function(){return A.forEach(function(i){a[i.name](i.defaultVal)}),a},a.resetProps(),l._rerender=$,a}}export{G as i};
