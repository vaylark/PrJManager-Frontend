var D={grad:.9,turn:360,rad:360/(2*Math.PI)},l=function(r){return typeof r=="string"?r.length>0:typeof r=="number"},u=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*r)/t+0},d=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),r>t?t:r>e?r:e},L=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},I=function(r){return{r:d(r.r,0,255),g:d(r.g,0,255),b:d(r.b,0,255),a:d(r.a)}},p=function(r){return{r:u(r.r),g:u(r.g),b:u(r.b),a:u(r.a,3)}},F=/^#([0-9a-f]{3,8})$/i,c=function(r){var e=r.toString(16);return e.length<2?"0"+e:e},P=function(r){var e=r.r,t=r.g,a=r.b,n=r.a,f=Math.max(e,t,a),i=f-Math.min(e,t,a),o=i?f===e?(t-a)/i:f===t?2+(a-e)/i:4+(e-t)/i:0;return{h:60*(o<0?o+6:o),s:f?i/f*100:0,v:f/255*100,a:n}},z=function(r){var e=r.h,t=r.s,a=r.v,n=r.a;e=e/360*6,t/=100,a/=100;var f=Math.floor(e),i=a*(1-t),o=a*(1-(e-f)*t),s=a*(1-(1-e+f)*t),g=f%6;return{r:255*[a,o,i,i,s,a][g],g:255*[s,a,a,o,i,i][g],b:255*[i,i,s,a,a,o][g],a:n}},H=function(r){return{h:L(r.h),s:d(r.s,0,100),l:d(r.l,0,100),a:d(r.a)}},$=function(r){return{h:u(r.h),s:u(r.s),l:u(r.l),a:u(r.a,3)}},j=function(r){return z((t=(e=r).s,{h:e.h,s:(t*=((a=e.l)<50?a:100-a)/100)>0?2*t/(a+t)*100:0,v:a+t,a:e.a}));var e,t,a},h=function(r){return{h:(e=P(r)).h,s:(n=(200-(t=e.s))*(a=e.v)/100)>0&&n<200?t*a/100/(n<=100?n:200-n)*100:0,l:n/2,a:e.a};var e,t,a,n},O=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,V=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,A=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,B=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var e=F.exec(r);return e?(r=e[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:r.length===4?u(parseInt(r[3]+r[3],16)/255,2):1}:r.length===6||r.length===8?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:r.length===8?u(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var e=A.exec(r)||B.exec(r);return e?e[2]!==e[4]||e[4]!==e[6]?null:I({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(r){var e=O.exec(r)||V.exec(r);if(!e)return null;var t,a,n=H({h:(t=e[1],a=e[2],a===void 0&&(a="deg"),Number(t)*(D[a]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return j(n)},"hsl"]],object:[[function(r){var e=r.r,t=r.g,a=r.b,n=r.a,f=n===void 0?1:n;return l(e)&&l(t)&&l(a)?I({r:Number(e),g:Number(t),b:Number(a),a:Number(f)}):null},"rgb"],[function(r){var e=r.h,t=r.s,a=r.l,n=r.a,f=n===void 0?1:n;if(!l(e)||!l(t)||!l(a))return null;var i=H({h:Number(e),s:Number(t),l:Number(a),a:Number(f)});return j(i)},"hsl"],[function(r){var e=r.h,t=r.s,a=r.v,n=r.a,f=n===void 0?1:n;if(!l(e)||!l(t)||!l(a))return null;var i=function(o){return{h:L(o.h),s:d(o.s,0,100),v:d(o.v,0,100),a:d(o.a)}}({h:Number(e),s:Number(t),v:Number(a),a:Number(f)});return z(i)},"hsv"]]},R=function(r,e){for(var t=0;t<e.length;t++){var a=e[t][0](r);if(a)return[a,e[t][1]]}return[null,void 0]},G=function(r){return typeof r=="string"?R(r.trim(),y.string):typeof r=="object"&&r!==null?R(r,y.object):[null,void 0]},v=function(r,e){var t=h(r);return{h:t.h,s:d(t.s+100*e,0,100),l:t.l,a:t.a}},m=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},S=function(r,e){var t=h(r);return{h:t.h,s:t.s,l:d(t.l+100*e,0,100),a:t.a}},k=function(){function r(e){this.parsed=G(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return this.parsed!==null},r.prototype.brightness=function(){return u(m(this.rgba),2)},r.prototype.isDark=function(){return m(this.rgba)<.5},r.prototype.isLight=function(){return m(this.rgba)>=.5},r.prototype.toHex=function(){return e=p(this.rgba),t=e.r,a=e.g,n=e.b,i=(f=e.a)<1?c(u(255*f)):"","#"+c(t)+c(a)+c(n)+i;var e,t,a,n,f,i},r.prototype.toRgb=function(){return p(this.rgba)},r.prototype.toRgbString=function(){return e=p(this.rgba),t=e.r,a=e.g,n=e.b,(f=e.a)<1?"rgba("+t+", "+a+", "+n+", "+f+")":"rgb("+t+", "+a+", "+n+")";var e,t,a,n,f},r.prototype.toHsl=function(){return $(h(this.rgba))},r.prototype.toHslString=function(){return e=$(h(this.rgba)),t=e.h,a=e.s,n=e.l,(f=e.a)<1?"hsla("+t+", "+a+"%, "+n+"%, "+f+")":"hsl("+t+", "+a+"%, "+n+"%)";var e,t,a,n,f},r.prototype.toHsv=function(){return e=P(this.rgba),{h:u(e.h),s:u(e.s),v:u(e.v),a:u(e.a,3)};var e},r.prototype.invert=function(){return b({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},r.prototype.saturate=function(e){return e===void 0&&(e=.1),b(v(this.rgba,e))},r.prototype.desaturate=function(e){return e===void 0&&(e=.1),b(v(this.rgba,-e))},r.prototype.grayscale=function(){return b(v(this.rgba,-1))},r.prototype.lighten=function(e){return e===void 0&&(e=.1),b(S(this.rgba,e))},r.prototype.darken=function(e){return e===void 0&&(e=.1),b(S(this.rgba,-e))},r.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},r.prototype.alpha=function(e){return typeof e=="number"?b({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):u(this.rgba.a,3);var t},r.prototype.hue=function(e){var t=h(this.rgba);return typeof e=="number"?b({h:e,s:t.s,l:t.l,a:t.a}):u(t.h)},r.prototype.isEqual=function(e){return this.toHex()===b(e).toHex()},r}(),b=function(r){return r instanceof k?r:new k(r)},E=[],J=function(r){r.forEach(function(e){E.indexOf(e)<0&&(e(k,y),E.push(e))})};function K(r,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},a={};for(var n in t)a[t[n]]=n;var f={};r.prototype.toName=function(i){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var o,s,g=a[this.toHex()];if(g)return g;if(i!=null&&i.closest){var C=this.toRgb(),w=1/0,N="black";if(!f.length)for(var x in t)f[x]=new r(t[x]).toRgb();for(var q in t){var M=(o=C,s=f[q],Math.pow(o.r-s.r,2)+Math.pow(o.g-s.g,2)+Math.pow(o.b-s.b,2));M<w&&(w=M,N=q)}return N}},e.string.push([function(i){var o=i.toLowerCase(),s=o==="transparent"?"#0000":t[o];return s?new r(s).toRgb():null},"name"])}export{J as k,K as n,b as w};
