import{i as k,a as M,b as y}from"./d3-interpolate-BTwI1hjd.js";import{b as N,t as b,a as d,c as w}from"./d3-array-DW6NUCqg.js";import{f as A,p as R,a as x,b as F,c as I,d as P}from"./d3-format-BVCctd7o.js";function S(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function j(n){return function(){return n}}function z(n){return+n}var g=[0,1];function h(n){return n}function p(n,t){return(t-=n=+n)?function(a){return(a-n)/t}:j(isNaN(t)?NaN:.5)}function $(n,t){var a;return n>t&&(a=n,n=t,t=a),function(r){return Math.max(n,Math.min(t,r))}}function q(n,t,a){var r=n[0],o=n[1],i=t[0],e=t[1];return o<r?(r=p(o,r),i=a(e,i)):(r=p(r,o),i=a(i,e)),function(l){return i(r(l))}}function B(n,t,a){var r=Math.min(n.length,t.length)-1,o=new Array(r),i=new Array(r),e=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++e<r;)o[e]=p(n[e],n[e+1]),i[e]=a(t[e],t[e+1]);return function(l){var s=N(n,l,1,r)-1;return i[s](o[s](l))}}function C(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function D(){var n=g,t=g,a=M,r,o,i,e=h,l,s,c;function m(){var u=Math.min(n.length,t.length);return e!==h&&(e=$(n[0],n[u-1])),l=u>2?B:q,s=c=null,f}function f(u){return u==null||isNaN(u=+u)?i:(s||(s=l(n.map(r),t,a)))(r(e(u)))}return f.invert=function(u){return e(o((c||(c=l(t,n.map(r),k)))(u)))},f.domain=function(u){return arguments.length?(n=Array.from(u,z),m()):n.slice()},f.range=function(u){return arguments.length?(t=Array.from(u),m()):t.slice()},f.rangeRound=function(u){return t=Array.from(u),a=y,m()},f.clamp=function(u){return arguments.length?(e=u?!0:h,m()):e!==h},f.interpolate=function(u){return arguments.length?(a=u,m()):a},f.unknown=function(u){return arguments.length?(i=u,f):i},function(u,v){return r=u,o=v,m()}}function E(){return D()(h,h)}function G(n,t,a,r){var o=b(n,t,a),i;switch(r=A(r??",f"),r.type){case"s":{var e=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(i=F(o,e))&&(r.precision=i),I(r,e)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=x(o,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=R(o))&&(r.precision=i-(r.type==="%")*2);break}}return P(r)}function H(n){var t=n.domain;return n.ticks=function(a){var r=t();return d(r[0],r[r.length-1],a??10)},n.tickFormat=function(a,r){var o=t();return G(o[0],o[o.length-1],a??10,r)},n.nice=function(a){a==null&&(a=10);var r=t(),o=0,i=r.length-1,e=r[o],l=r[i],s,c,m=10;for(l<e&&(c=e,e=l,l=c,c=o,o=i,i=c);m-- >0;){if(c=w(e,l,a),c===s)return r[o]=e,r[i]=l,t(r);if(c>0)e=Math.floor(e/c)*c,l=Math.ceil(l/c)*c;else if(c<0)e=Math.ceil(e*c)/c,l=Math.floor(l*c)/c;else break;s=c}return n},n}function J(){var n=E();return n.copy=function(){return C(n,J())},S.apply(n,arguments),H(n)}export{J as l};
