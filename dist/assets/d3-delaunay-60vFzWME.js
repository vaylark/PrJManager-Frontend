import{D as Z}from"./delaunator-CzPOmzqK.js";const B=1e-6;class y{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(t,e){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(t,e){this._+=`L${this._x1=+t},${this._y1=+e}`}arc(t,e,n){t=+t,e=+e,n=+n;const i=t+n,s=e;if(n<0)throw new Error("negative radius");this._x1===null?this._+=`M${i},${s}`:(Math.abs(this._x1-i)>B||Math.abs(this._y1-s)>B)&&(this._+="L"+i+","+s),n&&(this._+=`A${n},${n},0,1,1,${t-n},${e}A${n},${n},0,1,1,${this._x1=i},${this._y1=s}`)}rect(t,e,n,i){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${+n}v${+i}h${-n}Z`}value(){return this._||null}}class S{constructor(){this._=[]}moveTo(t,e){this._.push([t,e])}closePath(){this._.push(this._[0].slice())}lineTo(t,e){this._.push([t,e])}value(){return this._.length?this._:null}}class q{constructor(t,[e,n,i,s]=[0,0,960,500]){if(!((i=+i)>=(e=+e))||!((s=+s)>=(n=+n)))throw new Error("invalid bounds");this.delaunay=t,this._circumcenters=new Float64Array(t.points.length*2),this.vectors=new Float64Array(t.points.length*2),this.xmax=i,this.xmin=e,this.ymax=s,this.ymin=n,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:t,hull:e,triangles:n},vectors:i}=this;let s,l;const r=this.circumcenters=this._circumcenters.subarray(0,n.length/3*2);for(let g=0,m=0,p=n.length,b,k;g<p;g+=3,m+=2){const F=n[g]*2,D=n[g+1]*2,H=n[g+2]*2,T=t[F],$=t[F+1],X=t[D],Y=t[D+1],C=t[H],E=t[H+1],j=X-T,A=Y-$,w=C-T,x=E-$,L=(j*x-A*w)*2;if(Math.abs(L)<1e-9){if(s===void 0){s=l=0;for(const I of e)s+=t[I*2],l+=t[I*2+1];s/=e.length,l/=e.length}const M=1e9*Math.sign((s-T)*x-(l-$)*w);b=(T+C)/2-M*x,k=($+E)/2+M*w}else{const M=1/L,I=j*j+A*A,V=w*w+x*x;b=T+(x*I-A*V)*M,k=$+(j*V-w*I)*M}r[m]=b,r[m+1]=k}let h=e[e.length-1],o,a=h*4,u,c=t[2*h],f,d=t[2*h+1];i.fill(0);for(let g=0;g<e.length;++g)h=e[g],o=a,u=c,f=d,a=h*4,c=t[2*h],d=t[2*h+1],i[o+2]=i[a]=f-d,i[o+3]=i[a+1]=c-u}render(t){const e=t==null?t=new y:void 0,{delaunay:{halfedges:n,inedges:i,hull:s},circumcenters:l,vectors:r}=this;if(s.length<=1)return null;for(let a=0,u=n.length;a<u;++a){const c=n[a];if(c<a)continue;const f=Math.floor(a/3)*2,d=Math.floor(c/3)*2,g=l[f],m=l[f+1],p=l[d],b=l[d+1];this._renderSegment(g,m,p,b,t)}let h,o=s[s.length-1];for(let a=0;a<s.length;++a){h=o,o=s[a];const u=Math.floor(i[o]/3)*2,c=l[u],f=l[u+1],d=h*4,g=this._project(c,f,r[d+2],r[d+3]);g&&this._renderSegment(c,f,g[0],g[1],t)}return e&&e.value()}renderBounds(t){const e=t==null?t=new y:void 0;return t.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),e&&e.value()}renderCell(t,e){const n=e==null?e=new y:void 0,i=this._clip(t);if(i===null||!i.length)return;e.moveTo(i[0],i[1]);let s=i.length;for(;i[0]===i[s-2]&&i[1]===i[s-1]&&s>1;)s-=2;for(let l=2;l<s;l+=2)(i[l]!==i[l-2]||i[l+1]!==i[l-1])&&e.lineTo(i[l],i[l+1]);return e.closePath(),n&&n.value()}*cellPolygons(){const{delaunay:{points:t}}=this;for(let e=0,n=t.length/2;e<n;++e){const i=this.cellPolygon(e);i&&(i.index=e,yield i)}}cellPolygon(t){const e=new S;return this.renderCell(t,e),e.value()}_renderSegment(t,e,n,i,s){let l;const r=this._regioncode(t,e),h=this._regioncode(n,i);r===0&&h===0?(s.moveTo(t,e),s.lineTo(n,i)):(l=this._clipSegment(t,e,n,i,r,h))&&(s.moveTo(l[0],l[1]),s.lineTo(l[2],l[3]))}contains(t,e,n){return e=+e,e!==e||(n=+n,n!==n)?!1:this.delaunay._step(t,e,n)===t}*neighbors(t){const e=this._clip(t);if(e)for(const n of this.delaunay.neighbors(t)){const i=this._clip(n);if(i){t:for(let s=0,l=e.length;s<l;s+=2)for(let r=0,h=i.length;r<h;r+=2)if(e[s]===i[r]&&e[s+1]===i[r+1]&&e[(s+2)%l]===i[(r+h-2)%h]&&e[(s+3)%l]===i[(r+h-1)%h]){yield n;break t}}}}_cell(t){const{circumcenters:e,delaunay:{inedges:n,halfedges:i,triangles:s}}=this,l=n[t];if(l===-1)return null;const r=[];let h=l;do{const o=Math.floor(h/3);if(r.push(e[o*2],e[o*2+1]),h=h%3===2?h-2:h+1,s[h]!==t)break;h=i[h]}while(h!==l&&h!==-1);return r}_clip(t){if(t===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const e=this._cell(t);if(e===null)return null;const{vectors:n}=this,i=t*4;return this._simplify(n[i]||n[i+1]?this._clipInfinite(t,e,n[i],n[i+1],n[i+2],n[i+3]):this._clipFinite(t,e))}_clipFinite(t,e){const n=e.length;let i=null,s,l,r=e[n-2],h=e[n-1],o,a=this._regioncode(r,h),u,c=0;for(let f=0;f<n;f+=2)if(s=r,l=h,r=e[f],h=e[f+1],o=a,a=this._regioncode(r,h),o===0&&a===0)u=c,c=0,i?i.push(r,h):i=[r,h];else{let d,g,m,p,b;if(o===0){if((d=this._clipSegment(s,l,r,h,o,a))===null)continue;[g,m,p,b]=d}else{if((d=this._clipSegment(r,h,s,l,a,o))===null)continue;[p,b,g,m]=d,u=c,c=this._edgecode(g,m),u&&c&&this._edge(t,u,c,i,i.length),i?i.push(g,m):i=[g,m]}u=c,c=this._edgecode(p,b),u&&c&&this._edge(t,u,c,i,i.length),i?i.push(p,b):i=[p,b]}if(i)u=c,c=this._edgecode(i[0],i[1]),u&&c&&this._edge(t,u,c,i,i.length);else if(this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return i}_clipSegment(t,e,n,i,s,l){const r=s<l;for(r&&([t,e,n,i,s,l]=[n,i,t,e,l,s]);;){if(s===0&&l===0)return r?[n,i,t,e]:[t,e,n,i];if(s&l)return null;let h,o,a=s||l;a&8?(h=t+(n-t)*(this.ymax-e)/(i-e),o=this.ymax):a&4?(h=t+(n-t)*(this.ymin-e)/(i-e),o=this.ymin):a&2?(o=e+(i-e)*(this.xmax-t)/(n-t),h=this.xmax):(o=e+(i-e)*(this.xmin-t)/(n-t),h=this.xmin),s?(t=h,e=o,s=this._regioncode(t,e)):(n=h,i=o,l=this._regioncode(n,i))}}_clipInfinite(t,e,n,i,s,l){let r=Array.from(e),h;if((h=this._project(r[0],r[1],n,i))&&r.unshift(h[0],h[1]),(h=this._project(r[r.length-2],r[r.length-1],s,l))&&r.push(h[0],h[1]),r=this._clipFinite(t,r))for(let o=0,a=r.length,u,c=this._edgecode(r[a-2],r[a-1]);o<a;o+=2)u=c,c=this._edgecode(r[o],r[o+1]),u&&c&&(o=this._edge(t,u,c,r,o),a=r.length);else this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(r=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return r}_edge(t,e,n,i,s){for(;e!==n;){let l,r;switch(e){case 5:e=4;continue;case 4:e=6,l=this.xmax,r=this.ymin;break;case 6:e=2;continue;case 2:e=10,l=this.xmax,r=this.ymax;break;case 10:e=8;continue;case 8:e=9,l=this.xmin,r=this.ymax;break;case 9:e=1;continue;case 1:e=5,l=this.xmin,r=this.ymin;break}(i[s]!==l||i[s+1]!==r)&&this.contains(t,l,r)&&(i.splice(s,0,l,r),s+=2)}return s}_project(t,e,n,i){let s=1/0,l,r,h;if(i<0){if(e<=this.ymin)return null;(l=(this.ymin-e)/i)<s&&(h=this.ymin,r=t+(s=l)*n)}else if(i>0){if(e>=this.ymax)return null;(l=(this.ymax-e)/i)<s&&(h=this.ymax,r=t+(s=l)*n)}if(n>0){if(t>=this.xmax)return null;(l=(this.xmax-t)/n)<s&&(r=this.xmax,h=e+(s=l)*i)}else if(n<0){if(t<=this.xmin)return null;(l=(this.xmin-t)/n)<s&&(r=this.xmin,h=e+(s=l)*i)}return[r,h]}_edgecode(t,e){return(t===this.xmin?1:t===this.xmax?2:0)|(e===this.ymin?4:e===this.ymax?8:0)}_regioncode(t,e){return(t<this.xmin?1:t>this.xmax?2:0)|(e<this.ymin?4:e>this.ymax?8:0)}_simplify(t){if(t&&t.length>4){for(let e=0;e<t.length;e+=2){const n=(e+2)%t.length,i=(e+4)%t.length;(t[e]===t[n]&&t[n]===t[i]||t[e+1]===t[n+1]&&t[n+1]===t[i+1])&&(t.splice(n,2),e-=2)}t.length||(t=null)}return t}}const z=2*Math.PI,v=Math.pow;function G(_){return _[0]}function J(_){return _[1]}function K(_){const{triangles:t,coords:e}=_;for(let n=0;n<t.length;n+=3){const i=2*t[n],s=2*t[n+1],l=2*t[n+2];if((e[l]-e[i])*(e[s+1]-e[i+1])-(e[s]-e[i])*(e[l+1]-e[i+1])>1e-10)return!1}return!0}function N(_,t,e){return[_+Math.sin(_+t)*e,t+Math.cos(_-t)*e]}class O{static from(t,e=G,n=J,i){return new O("length"in t?P(t,e,n,i):Float64Array.from(Q(t,e,n,i)))}constructor(t){this._delaunator=new Z(t),this.inedges=new Int32Array(t.length/2),this._hullIndex=new Int32Array(t.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const t=this._delaunator,e=this.points;if(t.hull&&t.hull.length>2&&K(t)){this.collinear=Int32Array.from({length:e.length/2},(c,f)=>f).sort((c,f)=>e[2*c]-e[2*f]||e[2*c+1]-e[2*f+1]);const h=this.collinear[0],o=this.collinear[this.collinear.length-1],a=[e[2*h],e[2*h+1],e[2*o],e[2*o+1]],u=1e-8*Math.hypot(a[3]-a[1],a[2]-a[0]);for(let c=0,f=e.length/2;c<f;++c){const d=N(e[2*c],e[2*c+1],u);e[2*c]=d[0],e[2*c+1]=d[1]}this._delaunator=new Z(e)}else delete this.collinear;const n=this.halfedges=this._delaunator.halfedges,i=this.hull=this._delaunator.hull,s=this.triangles=this._delaunator.triangles,l=this.inedges.fill(-1),r=this._hullIndex.fill(-1);for(let h=0,o=n.length;h<o;++h){const a=s[h%3===2?h-2:h+1];(n[h]===-1||l[a]===-1)&&(l[a]=h)}for(let h=0,o=i.length;h<o;++h)r[i[h]]=h;i.length<=2&&i.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=i[0],l[i[0]]=1,i.length===2&&(l[i[1]]=0,this.triangles[1]=i[1],this.triangles[2]=i[1]))}voronoi(t){return new q(this,t)}*neighbors(t){const{inedges:e,hull:n,_hullIndex:i,halfedges:s,triangles:l,collinear:r}=this;if(r){const u=r.indexOf(t);u>0&&(yield r[u-1]),u<r.length-1&&(yield r[u+1]);return}const h=e[t];if(h===-1)return;let o=h,a=-1;do{if(yield a=l[o],o=o%3===2?o-2:o+1,l[o]!==t)return;if(o=s[o],o===-1){const u=n[(i[t]+1)%n.length];u!==a&&(yield u);return}}while(o!==h)}find(t,e,n=0){if(t=+t,t!==t||(e=+e,e!==e))return-1;const i=n;let s;for(;(s=this._step(n,t,e))>=0&&s!==n&&s!==i;)n=s;return s}_step(t,e,n){const{inedges:i,hull:s,_hullIndex:l,halfedges:r,triangles:h,points:o}=this;if(i[t]===-1||!o.length)return(t+1)%(o.length>>1);let a=t,u=v(e-o[t*2],2)+v(n-o[t*2+1],2);const c=i[t];let f=c;do{let d=h[f];const g=v(e-o[d*2],2)+v(n-o[d*2+1],2);if(g<u&&(u=g,a=d),f=f%3===2?f-2:f+1,h[f]!==t)break;if(f=r[f],f===-1){if(f=s[(l[t]+1)%s.length],f!==d&&v(e-o[f*2],2)+v(n-o[f*2+1],2)<u)return f;break}}while(f!==c);return a}render(t){const e=t==null?t=new y:void 0,{points:n,halfedges:i,triangles:s}=this;for(let l=0,r=i.length;l<r;++l){const h=i[l];if(h<l)continue;const o=s[l]*2,a=s[h]*2;t.moveTo(n[o],n[o+1]),t.lineTo(n[a],n[a+1])}return this.renderHull(t),e&&e.value()}renderPoints(t,e){e===void 0&&(!t||typeof t.moveTo!="function")&&(e=t,t=null),e=e==null?2:+e;const n=t==null?t=new y:void 0,{points:i}=this;for(let s=0,l=i.length;s<l;s+=2){const r=i[s],h=i[s+1];t.moveTo(r+e,h),t.arc(r,h,e,0,z)}return n&&n.value()}renderHull(t){const e=t==null?t=new y:void 0,{hull:n,points:i}=this,s=n[0]*2,l=n.length;t.moveTo(i[s],i[s+1]);for(let r=1;r<l;++r){const h=2*n[r];t.lineTo(i[h],i[h+1])}return t.closePath(),e&&e.value()}hullPolygon(){const t=new S;return this.renderHull(t),t.value()}renderTriangle(t,e){const n=e==null?e=new y:void 0,{points:i,triangles:s}=this,l=s[t*=3]*2,r=s[t+1]*2,h=s[t+2]*2;return e.moveTo(i[l],i[l+1]),e.lineTo(i[r],i[r+1]),e.lineTo(i[h],i[h+1]),e.closePath(),n&&n.value()}*trianglePolygons(){const{triangles:t}=this;for(let e=0,n=t.length/3;e<n;++e)yield this.trianglePolygon(e)}trianglePolygon(t){const e=new S;return this.renderTriangle(t,e),e.value()}}function P(_,t,e,n){const i=_.length,s=new Float64Array(i*2);for(let l=0;l<i;++l){const r=_[l];s[l*2]=t.call(n,r,l,_),s[l*2+1]=e.call(n,r,l,_)}return s}function*Q(_,t,e,n){let i=0;for(const s of _)yield t.call(n,s,i,_),yield e.call(n,s,i,_),++i}export{O as D};
