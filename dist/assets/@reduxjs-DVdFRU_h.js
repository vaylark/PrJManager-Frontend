import{i as U,c as z,a as X,b as G,d as v,e as H}from"./redux-DITMfSWq.js";import{i as B,c as Q,a as P,p as I}from"./immer-BWU1mfoO.js";import{c as V,w as W}from"./reselect-BeKUwQU7.js";import{t as Y,w as K}from"./redux-thunk-ClJT1hhx.js";var J=(...e)=>{const r=V(...e),n=Object.assign((...i)=>{const t=r(...i),c=(s,...o)=>t(B(s)?Q(s):s,...o);return Object.assign(c,t),c},{withTypes:()=>n});return n};J(W);var Z=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?v:v.apply(null,arguments)};function b(e,r){function n(...i){if(r){let t=r(...i);if(!t)throw new Error(y(0));return{type:e,payload:t.payload,..."meta"in t&&{meta:t.meta},..."error"in t&&{error:t.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>H(i)&&i.type===e,n}var L=class S extends Array{constructor(...r){super(...r),Object.setPrototypeOf(this,S.prototype)}static get[Symbol.species](){return S}concat(...r){return super.concat.apply(this,r)}prepend(...r){return r.length===1&&Array.isArray(r[0])?new S(...r[0].concat(this)):new S(...r.concat(this))}};function A(e){return P(e)?I(e,()=>{}):e}function x(e,r,n){if(e.has(r)){let t=e.get(r);return n.update&&(t=n.update(t,r,e),e.set(r,t)),t}if(!n.insert)throw new Error(y(10));const i=n.insert(r,e);return e.set(r,i),i}function ee(e){return typeof e=="boolean"}var re=()=>function(r){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:t=!0,actionCreatorCheck:c=!0}=r??{};let s=new L;return n&&(ee(n)?s.push(Y):s.push(K(n.extraArgument))),s},te="RTK_autoBatch",N=e=>r=>{setTimeout(r,e)},ne=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:N(10),ie=(e={type:"raf"})=>r=>(...n)=>{const i=r(...n);let t=!0,c=!1,s=!1;const o=new Set,p=e.type==="tick"?queueMicrotask:e.type==="raf"?ne:e.type==="callback"?e.queueNotification:N(e.timeout),f=()=>{s=!1,c&&(c=!1,o.forEach(a=>a()))};return Object.assign({},i,{subscribe(a){const d=()=>t&&a(),m=i.subscribe(d);return o.add(a),()=>{m(),o.delete(a)}},dispatch(a){var d;try{return t=!((d=a==null?void 0:a.meta)!=null&&d[te]),c=!t,c&&(s||(s=!0,p(f))),i.dispatch(a)}finally{t=!0}}})},ce=e=>function(n){const{autoBatch:i=!0}=n??{};let t=new L(e);return i&&t.push(ie(typeof i=="object"?i:void 0)),t},ae=!0;function Oe(e){const r=re(),{reducer:n=void 0,middleware:i,devTools:t=!0,preloadedState:c=void 0,enhancers:s=void 0}=e||{};let o;if(typeof n=="function")o=n;else if(U(n))o=z(n);else throw new Error(y(1));let p;typeof i=="function"?p=i(r):p=r();let f=v;t&&(f=Z({trace:!ae,...typeof t=="object"&&t}));const a=X(...p),d=ce(a);let m=typeof s=="function"?s(d):d();const E=f(...m);return G(o,c,E)}function $(e){const r={},n=[];let i;const t={addCase(c,s){const o=typeof c=="string"?c:c.type;if(!o)throw new Error(y(28));if(o in r)throw new Error(y(29));return r[o]=s,t},addMatcher(c,s){return n.push({matcher:c,reducer:s}),t},addDefaultCase(c){return i=c,t}};return e(t),[r,n,i]}function se(e){return typeof e=="function"}function oe(e,r){let[n,i,t]=$(r),c;if(se(e))c=()=>A(e());else{const o=A(e);c=()=>o}function s(o=c(),p){let f=[n[p.type],...i.filter(({matcher:a})=>a(p)).map(({reducer:a})=>a)];return f.filter(a=>!!a).length===0&&(f=[t]),f.reduce((a,d)=>{if(d)if(B(a)){const E=d(a,p);return E===void 0?a:E}else{if(P(a))return I(a,m=>d(m,p));{const m=d(a,p);if(m===void 0){if(a===null)return a;throw new Error(y(9))}return m}}return a},o)}return s.getInitialState=c,s}var ue="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",fe=(e=21)=>{let r="",n=e;for(;n--;)r+=ue[Math.random()*64|0];return r},de=Symbol.for("rtk-slice-createasyncthunk");function le(e,r){return`${e}/${r}`}function pe({creators:e}={}){var n;const r=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[de];return function(t){const{name:c,reducerPath:s=c}=t;if(!c)throw new Error(y(11));typeof process<"u";const o=(typeof t.reducers=="function"?t.reducers(we()):t.reducers)||{},p=Object.keys(o),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},a={addCase(u,l){const h=typeof u=="string"?u:u.type;if(!h)throw new Error(y(12));if(h in f.sliceCaseReducersByType)throw new Error(y(13));return f.sliceCaseReducersByType[h]=l,a},addMatcher(u,l){return f.sliceMatchers.push({matcher:u,reducer:l}),a},exposeAction(u,l){return f.actionCreators[u]=l,a},exposeCaseReducer(u,l){return f.sliceCaseReducersByName[u]=l,a}};p.forEach(u=>{const l=o[u],h={reducerName:u,type:le(c,u),createNotation:typeof t.reducers=="function"};me(l)?ge(h,l,a,r):ye(h,l,a)});function d(){const[u={},l=[],h=void 0]=typeof t.extraReducers=="function"?$(t.extraReducers):[t.extraReducers],g={...u,...f.sliceCaseReducersByType};return oe(t.initialState,C=>{for(let w in g)C.addCase(w,g[w]);for(let w of f.sliceMatchers)C.addMatcher(w.matcher,w.reducer);for(let w of l)C.addMatcher(w.matcher,w.reducer);h&&C.addDefaultCase(h)})}const m=u=>u,E=new Map;let T;function k(u,l){return T||(T=d()),T(u,l)}function M(){return T||(T=d()),T.getInitialState()}function O(u,l=!1){function h(C){let w=C[u];return typeof w>"u"&&l&&(w=M()),w}function g(C=m){const w=x(E,l,{insert:()=>new WeakMap});return x(w,C,{insert:()=>{const j={};for(const[F,q]of Object.entries(t.selectors??{}))j[F]=he(q,C,M,l);return j}})}return{reducerPath:u,getSelectors:g,get selectors(){return g(h)},selectSlice:h}}const _={name:c,reducer:k,actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState:M,...O(s),injectInto(u,{reducerPath:l,...h}={}){const g=l??s;return u.inject({reducerPath:g,reducer:k},h),{..._,...O(g,!0)}}};return _}}function he(e,r,n,i){function t(c,...s){let o=r(c);return typeof o>"u"&&i&&(o=n()),e(o,...s)}return t.unwrapped=e,t}var _e=pe();function we(){function e(r,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:r,...n}}return e.withTypes=()=>e,{reducer(r){return Object.assign({[r.name](...n){return r(...n)}}[r.name],{_reducerDefinitionType:"reducer"})},preparedReducer(r,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:r,reducer:n}},asyncThunk:e}}function ye({type:e,reducerName:r,createNotation:n},i,t){let c,s;if("reducer"in i){if(n&&!Ce(i))throw new Error(y(17));c=i.reducer,s=i.prepare}else c=i;t.addCase(e,c).exposeCaseReducer(r,c).exposeAction(r,s?b(e,s):b(e))}function me(e){return e._reducerDefinitionType==="asyncThunk"}function Ce(e){return e._reducerDefinitionType==="reducerWithPrepare"}function ge({type:e,reducerName:r},n,i,t){if(!t)throw new Error(y(18));const{payloadCreator:c,fulfilled:s,pending:o,rejected:p,settled:f,options:a}=n,d=t(e,c,a);i.exposeAction(r,d),s&&i.addCase(d.fulfilled,s),o&&i.addCase(d.pending,o),p&&i.addCase(d.rejected,p),f&&i.addMatcher(d.settled,f),i.exposeCaseReducer(r,{fulfilled:s||D,pending:o||D,rejected:p||D,settled:f||D})}function D(){}var Ee=(e,r)=>{if(typeof e!="function")throw new Error(y(32))},R="listenerMiddleware",Te=e=>{let{type:r,actionCreator:n,matcher:i,predicate:t,effect:c}=e;if(r)t=b(r).match;else if(n)r=n.type,t=n.match;else if(i)t=i;else if(!t)throw new Error(y(21));return Ee(c),{predicate:t,type:r,effect:c}},be=Object.assign(e=>{const{type:r,predicate:n,effect:i}=Te(e);return{id:fe(),effect:i,type:r,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(y(22))}}},{withTypes:()=>be}),Se=Object.assign(b(`${R}/add`),{withTypes:()=>Se});b(`${R}/removeAll`);var De=Object.assign(b(`${R}/remove`),{withTypes:()=>De});function y(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}export{Oe as a,_e as c};
