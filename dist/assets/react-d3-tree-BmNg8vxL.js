import{a as b}from"./react-DShcIP8I.js";import{d as F,i as Z}from"./d3-zoom-DWEAq9g5.js";import{d as B}from"./dequal-CnqicUFC.js";import{c as J}from"./@babel-AtFDC0j3.js";import{r as Q}from"./@bkrem-B-yLnVFm.js";import{s as z}from"./d3-selection-DSeOx27A.js";import{l as tt,a as et}from"./d3-shape-0Bul5OOZ.js";import{v as P}from"./uuid-8I8R7izr.js";function nt(i){var t=0,e=i.children,n=e&&e.length;if(!n)t=1;else for(;--n>=0;)t+=e[n].value;i.value=t}function st(){return this.eachAfter(nt)}function it(i){var t=this,e,n=[t],s,r,o;do for(e=n.reverse(),n=[];t=e.pop();)if(i(t),s=t.children,s)for(r=0,o=s.length;r<o;++r)n.push(s[r]);while(n.length);return this}function rt(i){for(var t=this,e=[t],n,s;t=e.pop();)if(i(t),n=t.children,n)for(s=n.length-1;s>=0;--s)e.push(n[s]);return this}function at(i){for(var t=this,e=[t],n=[],s,r,o;t=e.pop();)if(n.push(t),s=t.children,s)for(r=0,o=s.length;r<o;++r)e.push(s[r]);for(;t=n.pop();)i(t);return this}function ot(i){return this.eachAfter(function(t){for(var e=+i(t.data)||0,n=t.children,s=n&&n.length;--s>=0;)e+=n[s].value;t.value=e})}function lt(i){return this.eachBefore(function(t){t.children&&t.children.sort(i)})}function ct(i){for(var t=this,e=dt(t,i),n=[t];t!==e;)t=t.parent,n.push(t);for(var s=n.length;i!==e;)n.splice(s,0,i),i=i.parent;return n}function dt(i,t){if(i===t)return i;var e=i.ancestors(),n=t.ancestors(),s=null;for(i=e.pop(),t=n.pop();i===t;)s=i,i=e.pop(),t=n.pop();return s}function ht(){for(var i=this,t=[i];i=i.parent;)t.push(i);return t}function ut(){var i=[];return this.each(function(t){i.push(t)}),i}function ft(){var i=[];return this.eachBefore(function(t){t.children||i.push(t)}),i}function pt(){var i=this,t=[];return i.each(function(e){e!==i&&t.push({source:e.parent,target:e})}),t}function H(i,t){var e=new R(i),n=+i.value&&(e.value=i.value),s,r=[e],o,u,p,a;for(t==null&&(t=mt);s=r.pop();)if(n&&(s.value=+s.data.value),(u=t(s.data))&&(a=u.length))for(s.children=new Array(a),p=a-1;p>=0;--p)r.push(o=s.children[p]=new R(u[p])),o.parent=s,o.depth=s.depth+1;return e.eachBefore(bt)}function gt(){return H(this).eachBefore(yt)}function mt(i){return i.children}function yt(i){i.data=i.data.data}function bt(i){var t=0;do i.height=t;while((i=i.parent)&&i.height<++t)}function R(i){this.data=i,this.depth=this.height=0,this.parent=null}R.prototype=H.prototype={constructor:R,count:st,each:it,eachAfter:at,eachBefore:rt,sum:ot,sort:lt,path:ct,ancestors:ht,descendants:ut,leaves:ft,links:pt,copy:gt};function Nt(i,t){return i.parent===t.parent?1:2}function U(i){var t=i.children;return t?t[0]:i.t}function K(i){var t=i.children;return t?t[t.length-1]:i.t}function Ot(i,t,e){var n=e/(t.i-i.i);t.c-=n,t.s+=e,i.c+=n,t.z+=e,t.m+=e}function _t(i){for(var t=0,e=0,n=i.children,s=n.length,r;--s>=0;)r=n[s],r.z+=t,r.m+=t,t+=r.s+(e+=r.c)}function Ct(i,t,e){return i.a.parent===t.parent?i.a:e}function I(i,t){this._=i,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}I.prototype=Object.create(R.prototype);function kt(i){for(var t=new I(i,0),e,n=[t],s,r,o,u;e=n.pop();)if(r=e._.children)for(e.children=new Array(u=r.length),o=u-1;o>=0;--o)n.push(s=e.children[o]=new I(r[o],o)),s.parent=e;return(t.parent=new I(null,0)).children=[t],t}function xt(){var i=Nt,t=1,e=1,n=null;function s(a){var h=kt(a);if(h.eachAfter(r),h.parent.m=-h.z,h.eachBefore(o),n)a.eachBefore(p);else{var f=a,l=a,d=a;a.eachBefore(function(y){y.x<f.x&&(f=y),y.x>l.x&&(l=y),y.depth>d.depth&&(d=y)});var g=f===l?1:i(f,l)/2,N=g-f.x,k=t/(l.x+g+N),C=e/(d.depth||1);a.eachBefore(function(y){y.x=(y.x+N)*k,y.y=y.depth*C})}return a}function r(a){var h=a.children,f=a.parent.children,l=a.i?f[a.i-1]:null;if(h){_t(a);var d=(h[0].z+h[h.length-1].z)/2;l?(a.z=l.z+i(a._,l._),a.m=a.z-d):a.z=d}else l&&(a.z=l.z+i(a._,l._));a.parent.A=u(a,l,a.parent.A||f[0])}function o(a){a._.x=a.z+a.parent.m,a.m+=a.parent.m}function u(a,h,f){if(h){for(var l=a,d=a,g=h,N=l.parent.children[0],k=l.m,C=d.m,y=g.m,D=N.m,O;g=K(g),l=U(l),g&&l;)N=U(N),d=K(d),d.a=a,O=g.z+y-l.z-k+i(g._,l._),O>0&&(Ot(Ct(g,a,f),a,O),k+=O,C+=O),y+=g.m,k+=l.m,D+=N.m,C+=d.m;g&&!K(d)&&(d.t=g,d.m+=y-C),l&&!U(N)&&(N.t=l,N.m+=k-D,f=a)}return f}function p(a){a.x*=t,a.y=a.depth*e}return s.separation=function(a){return arguments.length?(i=a,s):i},s.size=function(a){return arguments.length?(n=!1,t=+a[0],e=+a[1],s):n?null:[t,e]},s.nodeSize=function(a){return arguments.length?(n=!0,t=+a[0],e=+a[1],s):n?[t,e]:null},s}var q={exports:{}};(function(i){var t=function(){function e(l,d){return d!=null&&l instanceof d}var n;try{n=Map}catch{n=function(){}}var s;try{s=Set}catch{s=function(){}}var r;try{r=Promise}catch{r=function(){}}function o(l,d,g,N,k){typeof d=="object"&&(g=d.depth,N=d.prototype,k=d.includeNonEnumerable,d=d.circular);var C=[],y=[],D=typeof Buffer<"u";typeof d>"u"&&(d=!0),typeof g>"u"&&(g=1/0);function O(c,x){if(c===null)return null;if(x===0)return c;var m,M;if(typeof c!="object")return c;if(e(c,n))m=new n;else if(e(c,s))m=new s;else if(e(c,r))m=new r(function(T,S){c.then(function(L){T(O(L,x-1))},function(L){S(O(L,x-1))})});else if(o.__isArray(c))m=[];else if(o.__isRegExp(c))m=new RegExp(c.source,f(c)),c.lastIndex&&(m.lastIndex=c.lastIndex);else if(o.__isDate(c))m=new Date(c.getTime());else{if(D&&Buffer.isBuffer(c))return Buffer.allocUnsafe?m=Buffer.allocUnsafe(c.length):m=new Buffer(c.length),c.copy(m),m;e(c,Error)?m=Object.create(c):typeof N>"u"?(M=Object.getPrototypeOf(c),m=Object.create(M)):(m=Object.create(N),M=N)}if(d){var G=C.indexOf(c);if(G!=-1)return y[G];C.push(c),y.push(m)}e(c,n)&&c.forEach(function(T,S){var L=O(S,x-1),X=O(T,x-1);m.set(L,X)}),e(c,s)&&c.forEach(function(T){var S=O(T,x-1);m.add(S)});for(var E in c){var A;M&&(A=Object.getOwnPropertyDescriptor(M,E)),!(A&&A.set==null)&&(m[E]=O(c[E],x-1))}if(Object.getOwnPropertySymbols)for(var W=Object.getOwnPropertySymbols(c),E=0;E<W.length;E++){var v=W[E],$=Object.getOwnPropertyDescriptor(c,v);$&&!$.enumerable&&!k||(m[v]=O(c[v],x-1),$.enumerable||Object.defineProperty(m,v,{enumerable:!1}))}if(k)for(var V=Object.getOwnPropertyNames(c),E=0;E<V.length;E++){var j=V[E],$=Object.getOwnPropertyDescriptor(c,j);$&&$.enumerable||(m[j]=O(c[j],x-1),Object.defineProperty(m,j,{enumerable:!1}))}return m}return O(l,g)}o.clonePrototype=function(d){if(d===null)return null;var g=function(){};return g.prototype=d,new g};function u(l){return Object.prototype.toString.call(l)}o.__objToStr=u;function p(l){return typeof l=="object"&&u(l)==="[object Date]"}o.__isDate=p;function a(l){return typeof l=="object"&&u(l)==="[object Array]"}o.__isArray=a;function h(l){return typeof l=="object"&&u(l)==="[object RegExp]"}o.__isRegExp=h;function f(l){var d="";return l.global&&(d+="g"),l.ignoreCase&&(d+="i"),l.multiline&&(d+="m"),d}return o.__getRegExpFlags=f,o}();i.exports&&(i.exports=t)})(q);var wt=q.exports;const _=J(wt),Et=i=>i.enableLegacyTransitions?b.createElement(Q.TransitionGroup,{component:i.component,className:i.className,transform:i.transform},i.children):b.createElement("g",{className:i.className,transform:i.transform},i.children),zt=15,Y={title:{textAnchor:"start",x:40},attribute:{x:40,dy:"1.2em"}},Dt=({nodeDatum:i,toggleNode:t,onNodeClick:e,onNodeMouseOver:n,onNodeMouseOut:s})=>b.createElement(b.Fragment,null,b.createElement("circle",{r:zt,onClick:r=>{t(),e(r)},onMouseOver:n,onMouseOut:s}),b.createElement("g",{className:"rd3t-label"},b.createElement("text",Object.assign({className:"rd3t-label__title"},Y.title),i.name),b.createElement("text",{className:"rd3t-label__attributes"},i.attributes&&Object.entries(i.attributes).map(([r,o],u)=>b.createElement("tspan",Object.assign({key:`${r}-${u}`},Y.attribute),r,": ",typeof o=="boolean"?o.toString():o)))));class $t extends b.Component{constructor(){super(...arguments),this.nodeRef=null,this.state={transform:this.setTransform(this.props.position,this.props.parent,this.props.orientation,!0),initialStyle:{opacity:0},wasClicked:!1},this.shouldNodeTransform=(t,e,n,s)=>e.subscriptions!==t.subscriptions||e.position.x!==t.position.x||e.position.y!==t.position.y||e.orientation!==t.orientation||s.wasClicked!==n.wasClicked,this.renderNodeElement=()=>{const{data:t,hierarchyPointNode:e,renderCustomNodeElement:n}=this.props,s=typeof n=="function"?n:Dt,r={hierarchyPointNode:e,nodeDatum:t,toggleNode:this.handleNodeToggle,onNodeClick:this.handleOnClick,onNodeMouseOver:this.handleOnMouseOver,onNodeMouseOut:this.handleOnMouseOut,addChildren:this.handleAddChildren};return s(r)},this.handleNodeToggle=()=>{this.setState({wasClicked:!0}),this.props.onNodeToggle(this.props.data.__rd3t.id)},this.handleOnClick=t=>{this.setState({wasClicked:!0}),this.props.onNodeClick(this.props.hierarchyPointNode,t)},this.handleOnMouseOver=t=>{this.props.onNodeMouseOver(this.props.hierarchyPointNode,t)},this.handleOnMouseOut=t=>{this.props.onNodeMouseOut(this.props.hierarchyPointNode,t)},this.handleAddChildren=t=>{this.props.handleAddChildrenToNode(this.props.data.__rd3t.id,t)}}componentDidMount(){this.commitTransform()}componentDidUpdate(){this.state.wasClicked&&(this.props.centerNode(this.props.hierarchyPointNode),this.setState({wasClicked:!1})),this.commitTransform()}shouldComponentUpdate(t,e){return this.shouldNodeTransform(this.props,t,this.state,e)}setTransform(t,e,n,s=!1){if(s){const r=e!=null,o=r?e.x:0,u=r?e.y:0;return n==="horizontal"?`translate(${u},${o})`:`translate(${o},${u})`}return n==="horizontal"?`translate(${t.y},${t.x})`:`translate(${t.x},${t.y})`}applyTransform(t,e,n=1,s=()=>{}){this.props.enableLegacyTransitions?z(this.nodeRef).transition().duration(e).attr("transform",t).style("opacity",n).on("end",s):(z(this.nodeRef).attr("transform",t).style("opacity",n),s())}commitTransform(){const{orientation:t,transitionDuration:e,position:n,parent:s}=this.props,r=this.setTransform(n,s,t);this.applyTransform(r,e)}componentWillLeave(t){const{orientation:e,transitionDuration:n,position:s,parent:r}=this.props,o=this.setTransform(s,r,e,!0);this.applyTransform(o,n,0,t)}render(){const{data:t,nodeClassName:e}=this.props;return b.createElement("g",{id:t.__rd3t.id,ref:n=>{this.nodeRef=n},style:this.state.initialStyle,className:[t.children&&t.children.length>0?"rd3t-node":"rd3t-leaf-node",e].join(" ").trim(),transform:this.state.transform},this.renderNodeElement())}}class Mt extends b.PureComponent{constructor(){super(...arguments),this.linkRef=null,this.state={initialStyle:{opacity:0}},this.handleOnClick=t=>{this.props.onClick(this.props.linkData.source,this.props.linkData.target,t)},this.handleOnMouseOver=t=>{this.props.onMouseOver(this.props.linkData.source,this.props.linkData.target,t)},this.handleOnMouseOut=t=>{this.props.onMouseOut(this.props.linkData.source,this.props.linkData.target,t)}}componentDidMount(){this.applyOpacity(1,this.props.transitionDuration)}componentWillLeave(t){this.applyOpacity(0,this.props.transitionDuration,t)}applyOpacity(t,e,n=()=>{}){this.props.enableLegacyTransitions?z(this.linkRef).transition().duration(e).style("opacity",t).on("end",n):(z(this.linkRef).style("opacity",t),n())}drawStepPath(t,e){const{source:n,target:s}=t,r=s.y-n.y;return e==="horizontal"?`M${n.y},${n.x} H${n.y+r/2} V${s.x} H${s.y}`:`M${n.x},${n.y} V${n.y+r/2} H${s.x} V${s.y}`}drawDiagonalPath(t,e){const{source:n,target:s}=t;return e==="horizontal"?tt()({source:[n.y,n.x],target:[s.y,s.x]}):et()({source:[n.x,n.y],target:[s.x,s.y]})}drawStraightPath(t,e){const{source:n,target:s}=t;return e==="horizontal"?`M${n.y},${n.x}L${s.y},${s.x}`:`M${n.x},${n.y}L${s.x},${s.y}`}drawElbowPath(t,e){return e==="horizontal"?`M${t.source.y},${t.source.x}V${t.target.x}H${t.target.y}`:`M${t.source.x},${t.source.y}V${t.target.y}H${t.target.x}`}drawPath(){const{linkData:t,orientation:e,pathFunc:n}=this.props;return typeof n=="function"?n(t,e):n==="elbow"?this.drawElbowPath(t,e):n==="straight"?this.drawStraightPath(t,e):n==="step"?this.drawStepPath(t,e):this.drawDiagonalPath(t,e)}getClassNames(){const{linkData:t,orientation:e,pathClassFunc:n}=this.props,s=["rd3t-link"];return typeof n=="function"&&s.push(n(t,e)),s.join(" ").trim()}render(){const{linkData:t}=this.props;return b.createElement("path",{ref:e=>{this.linkRef=e},style:Object.assign({},this.state.initialStyle),className:this.getClassNames(),d:this.drawPath(),onClick:this.handleOnClick,onMouseOver:this.handleOnMouseOver,onMouseOut:this.handleOnMouseOut,"data-source-id":t.source.id,"data-target-id":t.target.id})}}const Tt=`
/* Tree */
.rd3t-tree-container {
  width: 100%;
  height: 100%;
}

.rd3t-grabbable {
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
.rd3t-grabbable:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
}

/* Node */
.rd3t-node {
  cursor: pointer;
  fill: #777;
  stroke: #000;
  stroke-width: 2;
}

.rd3t-leaf-node {
  cursor: pointer;
  fill: transparent;
  stroke: #000;
  stroke-width: 1;
}

.rd3t-label__title {
  fill: #000;
  stroke: none;
  font-weight: bolder;
}

.rd3t-label__attributes {
  fill: #777;
  stroke: none;
  font-weight: bolder;
  font-size: smaller;
}

/* Link */
.rd3t-link {
  fill: none;
  stroke: #000;
}
`;class w extends b.Component{constructor(){super(...arguments),this.state={dataRef:this.props.data,data:w.assignInternalProperties(_(this.props.data)),d3:w.calculateD3Geometry(this.props),isTransitioning:!1,isInitialRenderForDataset:!0,dataKey:this.props.dataKey},this.internalState={targetNode:null,isTransitioning:!1},this.svgInstanceRef=`rd3t-svg-${P()}`,this.gInstanceRef=`rd3t-g-${P()}`,this.handleNodeToggle=t=>{const e=_(this.state.data),s=this.findNodesById(t,e,[])[0];this.props.collapsible&&!this.state.isTransitioning&&(s.__rd3t.collapsed?(w.expandNode(s),this.props.shouldCollapseNeighborNodes&&this.collapseNeighborNodes(s,e)):w.collapseNode(s),this.props.enableLegacyTransitions?(this.setState({data:e,isTransitioning:!0}),setTimeout(()=>this.setState({isTransitioning:!1}),this.props.transitionDuration+10)):this.setState({data:e}),this.internalState.targetNode=s)},this.handleAddChildrenToNode=(t,e)=>{const n=_(this.state.data),s=this.findNodesById(t,n,[]);if(s.length>0){const r=s[0],o=r.__rd3t.depth,u=_(e).map(p=>w.assignInternalProperties([p],o+1));r.children.push(...u.flat()),this.setState({data:n})}},this.handleOnNodeClickCb=(t,e)=>{const{onNodeClick:n}=this.props;n&&typeof n=="function"&&(e.persist(),n(_(t),e))},this.handleOnLinkClickCb=(t,e,n)=>{const{onLinkClick:s}=this.props;s&&typeof s=="function"&&(n.persist(),s(_(t),_(e),n))},this.handleOnNodeMouseOverCb=(t,e)=>{const{onNodeMouseOver:n}=this.props;n&&typeof n=="function"&&(e.persist(),n(_(t),e))},this.handleOnLinkMouseOverCb=(t,e,n)=>{const{onLinkMouseOver:s}=this.props;s&&typeof s=="function"&&(n.persist(),s(_(t),_(e),n))},this.handleOnNodeMouseOutCb=(t,e)=>{const{onNodeMouseOut:n}=this.props;n&&typeof n=="function"&&(e.persist(),n(_(t),e))},this.handleOnLinkMouseOutCb=(t,e,n)=>{const{onLinkMouseOut:s}=this.props;s&&typeof s=="function"&&(n.persist(),s(_(t),_(e),n))},this.centerNode=t=>{const{dimensions:e,orientation:n,zoom:s,centeringTransitionDuration:r}=this.props;if(e){const o=z(`.${this.gInstanceRef}`),u=z(`.${this.svgInstanceRef}`),p=this.state.d3.scale;let a,h;n==="horizontal"?(h=-t.x*p+e.height/2,a=-t.y*p+e.width/2):(a=-t.x*p+e.width/2,h=-t.y*p+e.height/2),o.transition().duration(r).attr("transform","translate("+a+","+h+")scale("+p+")"),u.call(F().transform,Z.translate(a,h).scale(s))}},this.getNodeClassName=(t,e)=>{const{rootNodeClassName:n,branchNodeClassName:s,leafNodeClassName:r}=this.props;return t!=null?e.children?s:r:n}}static getDerivedStateFromProps(t,e){let n=null;const s=!t.dataKey||e.dataKey!==t.dataKey;t.data!==e.dataRef&&s&&(n={dataRef:t.data,data:w.assignInternalProperties(_(t.data)),isInitialRenderForDataset:!0,dataKey:t.dataKey});const r=w.calculateD3Geometry(t);return B(r,e.d3)||(n=n||{},n.d3=r),n}componentDidMount(){this.bindZoomListener(this.props),this.setState({isInitialRenderForDataset:!1})}componentDidUpdate(t){this.props.data!==t.data&&this.setState({isInitialRenderForDataset:!1}),(!B(this.props.translate,t.translate)||!B(this.props.scaleExtent,t.scaleExtent)||this.props.zoomable!==t.zoomable||this.props.draggable!==t.draggable||this.props.zoom!==t.zoom||this.props.enableLegacyTransitions!==t.enableLegacyTransitions)&&this.bindZoomListener(this.props),typeof this.props.onUpdate=="function"&&this.props.onUpdate({node:this.internalState.targetNode?_(this.internalState.targetNode):null,zoom:this.state.d3.scale,translate:this.state.d3.translate}),this.internalState.targetNode=null}setInitialTreeDepth(t,e){t.forEach(n=>{n.data.__rd3t.collapsed=n.depth>=e})}bindZoomListener(t){const{zoomable:e,scaleExtent:n,translate:s,zoom:r,onUpdate:o,hasInteractiveNodes:u}=t,p=z(`.${this.svgInstanceRef}`),a=z(`.${this.gInstanceRef}`);p.call(F().transform,Z.translate(s.x,s.y).scale(r)),p.call(F().scaleExtent(e?[n.min,n.max]:[r,r]).filter(h=>u?h.target.classList.contains(this.svgInstanceRef)||h.target.classList.contains(this.gInstanceRef)||h.shiftKey:!0).on("zoom",h=>{!this.props.draggable&&["mousemove","touchmove","dblclick"].includes(h.sourceEvent.type)||(a.attr("transform",h.transform),typeof o=="function"&&(o({node:null,zoom:h.transform.k,translate:{x:h.transform.x,y:h.transform.y}}),this.state.d3.scale=h.transform.k,this.state.d3.translate={x:h.transform.x,y:h.transform.y}))}))}static assignInternalProperties(t,e=0){return(Array.isArray(t)?t:[t]).map(s=>{const r=s;return r.__rd3t={id:null,depth:null,collapsed:!1},r.__rd3t.id=P(),r.__rd3t.depth=e,r.children&&r.children.length>0&&(r.children=w.assignInternalProperties(r.children,e+1)),r})}findNodesById(t,e,n){return n.length>0||(n=n.concat(e.filter(s=>s.__rd3t.id===t)),e.forEach(s=>{s.children&&s.children.length>0&&(n=this.findNodesById(t,s.children,n))})),n}findNodesAtDepth(t,e,n){return n=n.concat(e.filter(s=>s.__rd3t.depth===t)),e.forEach(s=>{s.children&&s.children.length>0&&(n=this.findNodesAtDepth(t,s.children,n))}),n}static collapseNode(t){t.__rd3t.collapsed=!0,t.children&&t.children.length>0&&t.children.forEach(e=>{w.collapseNode(e)})}static expandNode(t){t.__rd3t.collapsed=!1}collapseNeighborNodes(t,e){this.findNodesAtDepth(t.__rd3t.depth,e,[]).filter(s=>s.__rd3t.id!==t.__rd3t.id).forEach(s=>w.collapseNode(s))}generateTree(){const{initialDepth:t,depthFactor:e,separation:n,nodeSize:s,orientation:r}=this.props,{isInitialRenderForDataset:o}=this.state,p=xt().nodeSize(r==="horizontal"?[s.y,s.x]:[s.x,s.y]).separation((f,l)=>f.parent.data.__rd3t.id===l.parent.data.__rd3t.id?n.siblings:n.nonSiblings)(H(this.state.data[0],f=>f.__rd3t.collapsed?null:f.children));let a=p.descendants();const h=p.links();return t!==void 0&&o&&this.setInitialTreeDepth(a,t),e&&a.forEach(f=>{f.y=f.depth*e}),{nodes:a,links:h}}static calculateD3Geometry(t){let e;return t.zoom>t.scaleExtent.max?e=t.scaleExtent.max:t.zoom<t.scaleExtent.min?e=t.scaleExtent.min:e=t.zoom,{translate:t.translate,scale:e}}render(){const{nodes:t,links:e}=this.generateTree(),{renderCustomNodeElement:n,orientation:s,pathFunc:r,transitionDuration:o,nodeSize:u,depthFactor:p,initialDepth:a,separation:h,enableLegacyTransitions:f,svgClassName:l,pathClassFunc:d}=this.props,{translate:g,scale:N}=this.state.d3,k=Object.assign(Object.assign(Object.assign({},u),h),{depthFactor:p,initialDepth:a});return b.createElement("div",{className:"rd3t-tree-container rd3t-grabbable"},b.createElement("style",null,Tt),b.createElement("svg",{className:`rd3t-svg ${this.svgInstanceRef} ${l}`,width:"100%",height:"100%"},b.createElement(Et,{enableLegacyTransitions:f,component:"g",className:`rd3t-g ${this.gInstanceRef}`,transform:`translate(${g.x},${g.y}) scale(${N})`},e.map((C,y)=>b.createElement(Mt,{key:"link-"+y,orientation:s,pathFunc:r,pathClassFunc:d,linkData:C,onClick:this.handleOnLinkClickCb,onMouseOver:this.handleOnLinkMouseOverCb,onMouseOut:this.handleOnLinkMouseOutCb,enableLegacyTransitions:f,transitionDuration:o})),t.map((C,y)=>{const{data:D,x:O,y:c,parent:x}=C;return b.createElement($t,{key:"node-"+y,data:D,position:{x:O,y:c},hierarchyPointNode:C,parent:x,nodeClassName:this.getNodeClassName(x,D),renderCustomNodeElement:n,nodeSize:u,orientation:s,enableLegacyTransitions:f,transitionDuration:o,onNodeToggle:this.handleNodeToggle,onNodeClick:this.handleOnNodeClickCb,onNodeMouseOver:this.handleOnNodeMouseOverCb,onNodeMouseOut:this.handleOnNodeMouseOutCb,handleAddChildrenToNode:this.handleAddChildrenToNode,subscriptions:k,centerNode:this.centerNode})}))))}}w.defaultProps={onNodeClick:void 0,onNodeMouseOver:void 0,onNodeMouseOut:void 0,onLinkClick:void 0,onLinkMouseOver:void 0,onLinkMouseOut:void 0,onUpdate:void 0,orientation:"horizontal",translate:{x:0,y:0},pathFunc:"diagonal",pathClassFunc:void 0,transitionDuration:500,depthFactor:void 0,collapsible:!0,initialDepth:void 0,zoomable:!0,draggable:!0,zoom:1,scaleExtent:{min:.1,max:1},nodeSize:{x:140,y:140},separation:{siblings:1,nonSiblings:2},shouldCollapseNeighborNodes:!1,svgClassName:"",rootNodeClassName:"",branchNodeClassName:"",leafNodeClassName:"",renderCustomNodeElement:void 0,enableLegacyTransitions:!1,hasInteractiveNodes:!1,dimensions:void 0,centeringTransitionDuration:800,dataKey:void 0};export{w as T};
