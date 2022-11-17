const qr=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Er=function(e){return"/"+e},ft={},Ct=function(t,r,n){if(!r||r.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Er(i),i in ft)return;ft[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!n)for(let a=s.length-1;a>=0;a--){const f=s[a];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":qr,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((a,f)=>{c.addEventListener("load",a),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},de=e=>e&&typeof e.nodeType=="number",xr=e=>e&&e.nodeType===9,oe=e=>e.nodeType===1,ke=e=>de(e)&&(e.nodeType===1||e.nodeType===111),B=e=>e.nodeType===111,$t=e=>e.nodeType===3,Ae=e=>e.nodeType===8,je=(e,...t)=>{const r=e instanceof Error?e:new Error(e);return console.error("%cQWIK ERROR","",r.message,...kr(t),r.stack),r},De=(e,...t)=>je(e,...t),kr=e=>e,k=(e,...t)=>{const r=Ce(e);return De(r,...t)},Ce=e=>`Code(${e})`,Pt=e=>{const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},O=e=>e&&typeof e=="object",x=e=>Array.isArray(e),pe=e=>typeof e=="string",P=e=>typeof e=="function";let Ar={isServer:!1,importSymbol(e,t,r){const n=((o,l,u)=>{var f;const c=o.baseURI,a=new URL((f=l.getAttribute("q:base"))!=null?f:c,c);return new URL(u,a)})(e.ownerDocument,e,t).toString(),s=new URL(n);s.hash="",s.search="";const i=s.href;return Ct(()=>import(i),[]).then(o=>((l,u)=>{if(u in l)return l[u];for(const c of Object.values(l))if(O(c)&&u in c)return c[u]})(o,r))},raf:e=>new Promise(t=>{requestAnimationFrame(()=>{t(e())})}),nextTick:e=>new Promise(t=>{setTimeout(()=>{t(e())})}),chunkForSymbol(){}};const $e=()=>Ar,D=e=>e instanceof Promise,Je=(e,t,r)=>{try{const n=e();return D(n)?n.then(t,r):t(n)}catch(n){return r(n)}},S=(e,t)=>D(e)?e.then(t):t(e),He=e=>e.some(D)?Promise.all(e):e,Ot=e=>e.length>0?Promise.all(e):e,jr=e=>e!=null,Cr=e=>new Promise(t=>{setTimeout(t,e)}),R=[],W={},ht=new Set,$r=(e,t,r=R,n=0)=>{let s=null,i=null;if(P(e))i=e;else{if(!pe(e))throw k(12,e);s=e}return ht.has(t)&&(ht.add(t),br("qprefetch",{symbols:[wr(t)]})),yr(s,t,null,i,null,r,null)},Rt=(e,t={})=>{var c;let r=e.o,n=e.l;const s=(c=e.u)!=null?c:r,i=$e();if(i){const a=i.chunkForSymbol(s);a&&(n=a[1],e.u||(r=a[0]))}if(!n)throw k(31,e.o);n.startsWith("./")&&(n=n.slice(2));const o=[n,"#",r],l=e.$,u=e.p;if(u&&u.length){if(t.v){const a=u.map(t.v);o.push(`[${a.join(" ")}]`)}else if(t.m){const a=u.map(t.m);o.push(`[${a.join(" ")}]`)}}else l&&l.length>0&&o.push(`[${l.join(" ")}]`);return o.join("")},Pe=(e,t)=>{const r=e.length,n=dt(e,0,"#"),s=dt(e,n,"["),i=Math.min(n,s),o=e.substring(0,i),l=n==r?n:n+1,u=s,c=l==u?"default":e.substring(l,u),a=s,f=r,h=a===f?R:e.substring(a+1,f-1).split(" "),p=yr(o,c,null,null,h,null,null);return t&&p.S(t),p},dt=(e,t,r)=>{const n=e.length,s=e.indexOf(r,t==n?0:t);return s==-1?n:s},Tt=(e,t)=>(e.$,e.p=e.$.map(r=>{const n=parseInt(r,10),s=t.q[n];return t.q.length,s})),F="q:slot";let X,ne;function ps(e){if(X===void 0){const t=ie();if(t&&t.j)return t.j;if(e!==void 0)return e;throw new Error("Reading `locale` outside of context.")}return X}function ms(e,t){const r=X;try{return X=e,t()}finally{X=r}}const ie=()=>{if(!ne){const e=typeof document<"u"&&document&&document.__q_context__;return e?x(e)?document.__q_context__=Nt(e):e:void 0}return ne},It=()=>{const e=ie();if(!e)throw k(14);return e},Lt=()=>{const e=It();if(e.C!=="qRender")throw k(20);return e.O,e.k,e.M,e.P,e},le=(e,t,...r)=>{const n=ne;let s;try{ne=e,s=t.apply(null,r)}finally{ne=n}return s},Pr=(e,t)=>{const r=e.k;if(r.length===0){const n=t();D(n)&&r.push(n)}else r.push(Promise.all(r).then(t))},Nt=e=>{var n;const t=e[0],r=((n=t.closest("[q\\:container]"))==null?void 0:n.getAttribute("q:locale"))||void 0;return r&&function(s){X=s}(r),L(r,void 0,t,e[1],e[2])},L=(e,t,r,n,s)=>({R:0,O:t,g:r,C:n,T:s,I:void 0,A:void 0,M:void 0,P:void 0,k:void 0,j:e}),Ut=e=>e.closest("[q\\:container]"),Ze=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),Or=/^(on|window:|document:)/,Yt=e=>e.endsWith("$")&&Or.test(e),Rr=(e,t,r,n)=>(t.endsWith("$"),t=Ir(t.slice(0,-1)),r&&(x(r)?e.push(...r.map(s=>[t,mt(s,n)])):e.push([t,mt(r,n)])),t),pt=["on","window:on","document:on"],Tr=["on","on-window","on-document"],Ir=e=>{let t="on";for(let r=0;r<pt.length;r++){const n=pt[r];if(e.startsWith(n)){t=Tr[r],e=e.slice(n.length);break}}return t+":"+(e.startsWith("-")?Ze(e.slice(1)):e.toLowerCase())},mt=(e,t)=>{const r=ut(e)?e:hs();return r.S(t),r},T=(e,t,r)=>e.setAttribute(t,r),Y=(e,t)=>e.getAttribute(t);function gt(e){return function(t){return t&&typeof t.nodeType=="number"}(e)&&e.nodeType===1}const Ye=Symbol("proxy target"),G=Symbol("proxy flags"),I=Symbol("proxy manager"),N=Symbol("IMMUTABLE");class ve{constructor(t,r){this.untrackedValue=t,this[I]=r}valueOf(){throw new TypeError("Cannot coerce a Signal, use `.value` instead")}toString(){return`[Signal ${String(this.value)}]`}toJSON(){return{value:this.value}}get value(){var r;const t=(r=ie())==null?void 0:r.P;return t&&this[I].L([0,t,void 0]),this.untrackedValue}set value(t){const r=this[I],n=this.untrackedValue;r&&n!==t&&(this.untrackedValue=t,r.N())}}const U=e=>e instanceof ve||e instanceof Q,Oe=(e,t,r,n,s)=>{const i=r instanceof Q?[e,t,me(r.ref),n,s,r.prop==="value"?void 0:r.prop]:[e,t,r,n,s,void 0];H(r).L(i)};class Q{constructor(t,r){this.ref=t,this.prop=r}get[I](){return H(this.ref)}get value(){return this.ref[this.prop]}set value(t){this.ref[this.prop]=t}}const gs=(e,t)=>{var s;if(!O(e))return;if(e instanceof ve||e instanceof Q)return e;const r=me(e);if(r){const i=r["$$"+t];return i||new Q(e,t)}const n=(s=e[N])==null?void 0:s[t];return U(n)?n:e[t]},Ve=(e,t,r=0)=>t.H.get(e)||(r!==0&&(e[G]=r),Re(e,t,void 0)),Re=(e,t,r)=>{Ne(e),t.H.has(e);const n=t.F.D(r),s=new Proxy(e,new Lr(t,n));return t.H.set(e,s),s};class Lr{constructor(t,r){this.U=t,this.W=r}get(t,r){var c,a;if(typeof r=="symbol")return r===Ye?t:r===I?this.W:t[r];let n;const s=(c=t[G])!=null?c:0,i=ie(),o=(1&s)!=0,l=(2&s)!=0;let u=t[r];if(i&&(n=i.P),l){const f=t["$$"+r];(!(r in t)||f||((a=t[N])==null?void 0:a[r]))&&(n=null),f&&(u=f.value)}if(n){const f=x(t);this.W.L([0,n,f?void 0:r])}return o?Nr(u,this.U):u}set(t,r,n){var o;if(typeof r=="symbol")return t[r]=n,!0;const s=(o=t[G])!=null?o:0;if((2&s)!=0)throw k(17);const i=(1&s)!=0?Ne(n):n;return x(t)?(t[r]=i,this.W.N(),!0):(t[r]!==i&&(t[r]=i,this.W.N(r)),!0)}has(t,r){if(r===Ye)return!0;const n=Object.prototype.hasOwnProperty;return!!n.call(t,r)||!(typeof r!="string"||!n.call(t,"$$"+r))}ownKeys(t){let r=null;const n=ie();return n&&(r=n.P),r&&this.W.L([0,r,void 0]),x(t)?Reflect.ownKeys(t):Reflect.ownKeys(t).map(s=>typeof s=="string"&&s.startsWith("$$")?s.slice(2):s)}getOwnPropertyDescriptor(t,r){return x(t)?Object.getOwnPropertyDescriptor(t,r):{enumerable:!0,configurable:!0}}}const Nr=(e,t)=>{if(ut(e))return e;if(O(e)){if(Object.isFrozen(e))return e;const r=Ne(e);return r!==e||de(r)?e:os(r)?t.H.get(e)||Ve(e,t,1):e}return e},J=e=>e._qc_,C=(e,t)=>{const r=J(e);if(r)return r;const n=zt(e),s=Y(e,"q:id");if(s){const i=t.B;if(n.G=s,i){const{getObject:o,meta:l,refs:u}=i;if(gt(e)){const c=u[s];c&&(gt(e),n.q=c.split(" ").map(o),n.li=((a,f)=>{const h=a.g.attributes,p=[];for(let m=0;m<h.length;m++){const{name:y,value:w}=h.item(m);if(y.startsWith("on:")||y.startsWith("on-window:")||y.startsWith("on-document:")){const g=w.split(`
`);for(const d of g){const v=Pe(d,f);v.$&&Tt(v,a),p.push([y,v])}}}return p})(n,t.J))}else{const c=l[s];if(c){const a=c.s,f=c.h,h=c.c,p=c.w;if(a&&(n.R=a.split(" ").map(o)),p&&(n.K=p.split(" ").map(o)),h){n.Z=new Map;for(const m of h.split(" ")){const[y,w]=m.split("=");n.Z.set(y,o(w))}}if(f){const[m,y]=f.split(" "),w=e.getAttribute("q:sstyle");n.X=w?w.split(" "):null,n.Y=4,n.tt=o(m),n.A=y?o(y):Re({[G]:2},t)}}}}}return n},zt=e=>{const t={Y:0,G:"",g:e,q:[],li:[],K:null,R:null,nt:null,X:null,et:null,A:null,rt:null,tt:null,Z:null,ot:null,st:null,it:null};return e._qc_=t,t},Te=()=>{const e=Lt(),t=e.R,r=e.O,n=C(r,e.M.ct.U),s=n.R?n.R:n.R=[];return e.R++,{get:s[t],set:i=>s[t]=i,i:t,rCtx:e,elCtx:n}},vt=Symbol("ContainerState"),Ke=e=>{let t=e[vt];return t||(e[vt]=t=Ur(e)),t},Ur=e=>{const t={J:e,lt:0,H:new WeakMap,ut:new Set,ft:new Set,dt:new Set,$t:new Set,ht:new Set,vt:new Set,wt:new Set,bt:new Set,yt:{},gt:void 0,qt:void 0,B:void 0,F:null};return t.F=cs(t),t},Wt=(e,t)=>{if(P(e))return e(t);if(O(e)){if("current"in e)return e.current=t;if("value"in e)return e.value=t}throw k(32,e)},Mt=(e,t)=>{var r;const n=Yr(e);try{((r=globalThis).qwikevents||(r.qwikevents=[])).push(n)}catch{}},ze=e=>e.toString(36),z=e=>parseInt(e,36),Yr=e=>{const t=e.indexOf(":");return e&&e.slice(t+1).replace(/-./g,r=>r[1].toUpperCase())},Ft=(e,t,r)=>{const n=r==null?null:String(r);return new Bt(e,t,n)};class Bt{constructor(t,r,n=null){this.type=t,this.props=r,this.key=n}}const zr=e=>e instanceof Bt,vs=e=>e.children,Dt=Symbol("skip render"),Xe=e=>e.children,ye=e=>document,we=(e,t,r,n)=>{e?e.xt.push({St:yt,jt:[t,r,n]}):yt(t,r,n)},yt=(e,t,r)=>{if(r==null||r===!1)e.removeAttribute(t);else{const n=r===!0?"":String(r);T(e,t,n)}},M=(e,t,r,n)=>{e?e.xt.push({St:wt,jt:[t,r,n]}):wt(t,r,n)},wt=(e,t,r)=>{try{e[t]=r!=null?r:"",r==null&&de(e)&&oe(e)&&e.removeAttribute(t)}catch(n){je(Ce(6),{node:e,key:t,value:r},n)}},Ge=(e,t,r)=>r?e.createElementNS(rt,t):e.createElement(t),K=(e,t,r,n)=>(e.xt.push({St:Ie,jt:[t,r,n||null]}),r),bt=(e,t,r)=>{const n=e.classList;n.remove(...t),n.add(...r)},Wr=(e,t)=>{const r=ye(),n=r.documentElement===e,s=r.head,i=r.createElement("style");T(i,"q:style",t.styleId),i.textContent=t.content,n&&s?fe(s,i):Ie(e,i,e.firstChild)},Jt=(e,t)=>{e.xt.push({St:Mr,jt:[t,e]})},Mr=(e,t)=>{const r=e.parentElement;if(r){if(e.nodeType===1||e.nodeType===111){const n=t.U.F;it(e,t,n,!0)}gn(r,e)}},Ht=(e,t)=>{const r=Ge(e,"q:template",!1);return T(r,F,t),T(r,"hidden",""),T(r,"aria-hidden","true"),r},Fr=e=>{for(const t of e.xt)t.St.apply(void 0,t.jt);Br(e)},We=e=>Y(e,"q:key"),_t=(e,t)=>{t!==null&&T(e,"q:key",t)},Br=e=>{const t=e.U.F;for(const r of e.Ct){const n=We(r),s=ce(r,"root");if(s.length>0){const i=r.getAttribute("q:sref"),o=e.Ot.find(l=>l.G===i);if(o){const l=Ht(e.kt,n),u=o.g;for(const c of s)fe(l,c);Ie(u,l,u.firstChild)}else it(r,e,t,!1)}}for(const[r,n]of e.Mt){const s=We(r),i=Array.from(n.childNodes).find(o=>nr(o)&&o.getAttribute(F)===s);i&&(ce(i,"root").forEach(o=>{fe(r,o)}),i.remove())}};class Qe{constructor(t,r){this.open=t,this.close=r,this._qc_=null,this.nodeType=111,this.localName=":virtual",this.nodeName=":virtual";const n=this.ownerDocument=t.ownerDocument;this.template=Ge(n,"template",!1),this.attributes=(s=>{if(!s)return new Map;const i=s.split(" ");return new Map(i.map(o=>{const l=o.indexOf("=");return l>=0?[o.slice(0,l),(u=o.slice(l+1),u.replace(/\+/g," "))]:[o,""];var u}))})(t.data.slice(3)),t.data.startsWith("qv "),t.__virtual=this}insertBefore(t,r){const n=this.parentElement;if(n){const s=r||this.close;n.insertBefore(t,s)}else this.template.insertBefore(t,r);return t}remove(){const t=this.parentElement;if(t){const r=Array.from(this.childNodes);this.template.childElementCount,t.removeChild(this.open),this.template.append(...r),t.removeChild(this.close)}}appendChild(t){return this.insertBefore(t,null)}insertBeforeTo(t,r){const n=Array.from(this.childNodes);t.insertBefore(this.open,r);for(const s of n)t.insertBefore(s,r);t.insertBefore(this.close,r),this.template.childElementCount}appendTo(t){this.insertBeforeTo(t,null)}get namespaceURI(){var t,r;return(r=(t=this.parentElement)==null?void 0:t.namespaceURI)!=null?r:""}removeChild(t){this.parentElement?this.parentElement.removeChild(t):this.template.removeChild(t)}getAttribute(t){var r;return(r=this.attributes.get(t))!=null?r:null}hasAttribute(t){return this.attributes.has(t)}setAttribute(t,r){this.attributes.set(t,r)}removeAttribute(t){this.attributes.delete(t)}matches(t){return!1}compareDocumentPosition(t){return this.open.compareDocumentPosition(t)}closest(t){const r=this.parentElement;return r?r.closest(t):null}querySelectorAll(t){const r=[];return ce(this,"elements").forEach(n=>{ke(n)&&(n.matches(t)&&r.push(n),r.concat(Array.from(n.querySelectorAll(t))))}),r}querySelector(t){for(const r of this.childNodes)if(oe(r)){if(r.matches(t))return r;const n=r.querySelector(t);if(n!==null)return n}return null}get firstChild(){if(this.parentElement){const t=this.open.nextSibling;return t===this.close?null:t}return this.template.firstChild}get nextSibling(){return this.close.nextSibling}get previousSibling(){return this.open.previousSibling}get childNodes(){if(!this.parentElement)return this.template.childNodes;const t=[];let r=this.open;for(;(r=r.nextSibling)&&r!==this.close;)t.push(r);return t}get isConnected(){return this.open.isConnected}get parentElement(){return this.open.parentElement}}const Dr=e=>{if(e==null)return null;if(Ae(e)){const t=be(e);if(t)return t}return e},be=e=>{const t=e.__virtual;if(t)return t;if(e.data.startsWith("qv ")){const r=Zt(e);return new Qe(e,r)}return null},Zt=e=>{let t=e.nextSibling,r=1;for(;t;){if(Ae(t)){if(t.data.startsWith("qv "))r++;else if(t.data==="/qv"&&(r--,r===0))return t}t=t.nextSibling}throw new Error("close not found")},_e=e=>e==null?null:B(e)?e.open:e,Jr=e=>(/^[\w/.-]+$/.test(e),Object.freeze({id:Ze(e)})),ys=(e,t)=>{const{get:r,set:n,elCtx:s}=Te();if(r!==void 0)return;let i=s.Z;i||(s.Z=i=new Map),i.set(e.id,t),n(!0)},ws=(e,t)=>{const{get:r,set:n,rCtx:s,elCtx:i}=Te();if(r!==void 0)return r;const o=Vt(e,i,s.M.ct.U);if(o!==void 0)return n(o);if(t!==void 0)return n(t);throw k(13,e.id)},Vt=(e,t,r)=>{var s,i;const n=e.id;if(t){let o=t.g,l=(s=t.it)!=null?s:t.st;for(;l;){if(o=l.g,l.Z){const u=l.Z.get(n);if(u)return u;if(l.Z.get("_")===!0)break}l=(i=l.it)!=null?i:l.st}if(o.closest){const u=Hr(o,r,n);if(u!==void 0)return u}}},Hr=(e,t,r)=>{var s;let n=e;for(;n;){let i,o=n;for(;o&&(i=Zr(o));){const l=(s=C(i,t))==null?void 0:s.Z;if(l&&l.has(r))return l.get(r);o=i}n=n.parentElement}},Zr=e=>{let t=e,r=1;for(;t=t.previousSibling;)if(Ae(t)){if(t.data==="/qv")r++;else if(t.data.startsWith("qv ")&&(r--,r===0))return be(t)}return null},Vr=Jr("qk-error"),Kt=(e,t,r)=>{const n=J(t);{const s=Vt(Vr,n,r.ct.U);if(s===void 0)throw e;s.error=e}},Me=(e,t)=>{t.Y&=-2,t.Y|=4,t.nt=[],t.li.length=0;const r=t.g,n=t.tt,s=t.A,i=et(e),o=L(e.ct.j,r,void 0,"qRender"),l=o.k=[];i.Pt=t,i.Et=null,o.P=r,o.M=e,n.S(e.ct.U.J);const u=n.getFn(o);return Je(()=>u(s),c=>l.length>0?Promise.all(l).then(()=>1&t.Y?Me(e,t):{node:c,rCtx:i}):1&t.Y?Me(e,t):{node:c,rCtx:i},c=>(Kt(c,r,e),{node:Dt,rCtx:i}))},Kr=(e,t)=>({ct:{kt:e,j:t.yt.locale,U:t,Rt:new Set,xt:[],Tt:[],Ot:[],Mt:[],Ct:[]},Pt:null,Et:null}),et=e=>({ct:e.ct,Pt:e.Pt,Et:e.Et}),Xt=e=>{if(pe(e))return e;if(O(e)){if(x(e))return e.join(" ");{let t="",r=!1;for(const n of Object.keys(e))e[n]&&(r&&(t+=" "),t+=n,r=!0);return t}}return""},Xr=/\s/,Fe=e=>e?e.split(Xr):R,Gr=e=>{if(e==null)return"";if(typeof e=="object"){if(x(e))throw k(0,e,"style");{const t=[];for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const n=e[r];n&&t.push(Ze(r)+":"+n)}return t.join(";")}}return String(e)},Qr=e=>ze(e.ct.U.lt++),Gt=(e,t)=>{const r=Qr(e);t.G=r},Qt=e=>e==null||typeof e=="boolean"?"":String(e);function en(e){return e.startsWith("aria-")}const tt=(e,t,r)=>{const n=!(4&t.Y),s=t.g,i=e.ct.U;return i.vt.delete(s),i.F.It(s),S(Me(e,t),o=>{const l=e.ct,u=o.rCtx,c=L(e.ct.j,s);if(l.Rt.add(s),c.P=s,c.M=u,n&&t.et)for(const p of t.et)f=p,(a=l).U.wt.add(f.styleId),a.Tt.push({St:Wr,jt:[a.U.J,f]});var a,f;const h=re(o.node,c);return S(h,p=>{const m=tn(s,p),y=er(t);return S(rn(u,y,m,r),()=>{t.rt=m})})})},er=e=>(e.rt||(e.rt=ue(e.g)),e.rt);class ${constructor(t,r,n,s){this.At=t,this.A=r,this.zt=n,this.Lt=s,this._t=null,this.Nt="",this.Ht=null}}const tn=(e,t)=>{const r=t===void 0?R:x(t)?t:[t],n=new $(":virtual",{},r,null);return n._t=e,n},re=(e,t)=>{if(e!=null&&typeof e!="boolean"){if(tr(e)){const r=new $("#text",W,R,null);return r.Nt=String(e),r}if(zr(e))return((r,n)=>{const s=r.key!=null?String(r.key):null,i=r.type,o=r.props,l=o.children;let u="";if(pe(i))u=i;else{if(i!==Xe){if(P(i)){const a=le(n,i,o,r.key);return re(a,n)}throw k(25,i)}u=":virtual"}let c=R;return l!=null?S(re(l,n),a=>(a!==void 0&&(c=x(a)?a:[a]),new $(u,o,c,s))):new $(u,o,c,s)})(e,t);if(U(e)){const r=e.value,n=new $("#text",W,R,null);return n.Nt=Qt(r),n.Ht=e,n}if(x(e)){const r=He(e.flatMap(n=>re(n,t)));return S(r,n=>n.flat(100).filter(jr))}return D(e)?e.then(r=>re(r,t)):e===Dt?new $(":skipRender",W,R,null):void 0}},tr=e=>pe(e)||typeof e=="number",rt="http://www.w3.org/2000/svg",Se=[],rn=(e,t,r,n)=>nt(e,t,r,"root",n),nt=(e,t,r,n,s)=>{t._t;const i=r.zt;if(i.length===1&&i[0].At===":skipRender")return;const o=t._t;t.zt===Se&&o.nodeName==="HEAD"&&(n="head",s|=2);const l=nn(t,n);return l.length>0&&i.length>0?sn(e,o,l,i,s):i.length>0?sr(e,o,null,i,0,i.length-1,s):l.length>0?st(e.ct,l,0,l.length-1):void 0},nn=(e,t)=>{const r=e.zt,n=e._t;return r===Se?e.zt=rr(n,t):r},sn=(e,t,r,n,s)=>{let i,o,l,u=0,c=0,a=r.length-1,f=r[0],h=r[a],p=n.length-1,m=n[0],y=n[p];const w=[],g=e.ct;for(;u<=a&&c<=p;)if(f==null)f=r[++u];else if(h==null)h=r[--a];else if(m==null)m=n[++c];else if(y==null)y=n[--p];else if(ge(f,m))w.push(ee(e,f,m,s)),f=r[++u],m=n[++c];else if(ge(h,y))w.push(ee(e,h,y,s)),h=r[--a],y=n[--p];else if(ge(f,y))f._t,h._t,w.push(ee(e,f,y,s)),K(g,t,f._t,h._t.nextSibling),f=r[++u],y=n[--p];else if(ge(h,m))f._t,h._t,w.push(ee(e,h,m,s)),K(g,t,h._t,f._t),h=r[--a],m=n[++c];else{if(i===void 0&&(i=vn(r,u,a)),o=i[m.Lt],o===void 0){const v=ae(e,m,s,w);K(g,t,v,f==null?void 0:f._t)}else if(l=r[o],yn(l,m.At))w.push(ee(e,l,m,s)),r[o]=void 0,l._t,K(g,t,l._t,f._t);else{const v=ae(e,m,s,w);S(v,b=>{K(g,t,b,f==null?void 0:f._t)})}m=n[++c]}if(c<=p){const v=n[p+1]==null?null:n[p+1]._t;w.push(sr(e,t,v,n,c,p,s))}let d=He(w);return u<=a&&(d=S(d,()=>{st(g,r,u,a)})),d},Ue=(e,t)=>{const r=B(e)?e.close:null,n=[];let s=e.firstChild;for(;(s=Dr(s))&&(t(s)&&n.push(s),s=s.nextSibling,s!==r););return n},ce=(e,t)=>{switch(t){case"root":return Ue(e,an);case"head":return Ue(e,un);case"elements":return Ue(e,ke)}},rr=(e,t)=>ce(e,t).map(on),on=e=>{var t,r;return oe(e)&&(r=(t=J(e))==null?void 0:t.rt)!=null?r:ue(e)},ue=e=>{if(ke(e)){const t=B(e)?W:ln(e),r=new $(e.localName,t,Se,We(e));return r._t=e,r}if($t(e)){const t=new $(e.nodeName,{},Se,null);return t.Nt=e.data,t._t=e,t}throw new Error("invalid node")},ln=e=>{const t={},r=e.attributes,n=r.length;for(let s=0;s<n;s++){const i=r.item(s),o=i.name;o.includes(":")||(t[o]=o==="class"?cn(i.value):i.value)}return t},cn=e=>Fe(e).filter(t=>!t.startsWith("\u2B50\uFE0F")).join(" "),un=e=>{const t=e.nodeType;return t===1?e.hasAttribute("q:head"):t===111},nr=e=>e.nodeName==="Q:TEMPLATE",an=e=>{const t=e.nodeType;if(t===3||t===111)return!0;if(t!==1)return!1;const r=e.nodeName;return r!=="Q:TEMPLATE"&&(r!=="HEAD"||e.hasAttribute("q:head"))},ee=(e,t,r,n)=>{t.At,r.At;const s=t._t,i=r.At,o=e.ct,l=i===":virtual",u=e.Pt;if(r._t=s,i==="#text"){const y=r.Ht;return y&&Oe(2,u.g,y,s,"data"),void(t.Nt!==r.Nt&&M(o,s,"data",r.Nt))}let c=!!(1&n);c||i!=="svg"||(n|=1,c=!0);const a=r.A,f=l&&"q:renderFn"in a,h=C(s,e.ct.U);if(!f){const y=u.li,w=h.li;return w.length=0,r.A=dn(o,h,u.g,t.A,a,c),y.length>0&&(w.push(...y),y.length=0),c&&r.At==="foreignObject"&&(n&=-2,c=!1),l&&"q:s"in a?(u.nt,void u.nt.push(r)):a[se]!==void 0||l&&"qonce"in a?void 0:nt(e,t,r,"root",n)}const p=a.props;let m=cr(h,e,p);return m||h.tt||h.g.hasAttribute("q:id")||(Gt(e,h),h.tt=p["q:renderFn"],h.tt,m=!0),m?S(tt(e,h,n),()=>St(e,h,r,n)):St(e,h,r,n)},St=(e,t,r,n)=>{const s=r.zt,i=e.ct,o=(u=>{var a;const c={};for(const f of u){const h=ir(f);((a=c[h])!=null?a:c[h]=new $(":virtual",{"q:s":""},[],h)).zt.push(f)}return c})(s),l=lr(t);for(const u of Object.keys(l.slots))if(!o[u]){const c=l.slots[u],a=rr(c,"root");if(a.length>0){const f=J(c);f&&f.rt&&(f.rt.zt=[]),st(i,a,0,a.length-1)}}for(const u of Object.keys(l.templates)){const c=l.templates[u];c&&(o[u]&&!l.slots[u]||(Jt(i,c),l.templates[u]=void 0))}return He(Object.keys(o).map(u=>{const c=o[u],a=or(i,l,t.g,u),f=C(a,e.ct.U),h=er(f),p=et(e);return p.Et=f,f.rt=c,c._t=a,nt(p,h,c,"root",n)}))},sr=(e,t,r,n,s,i,o)=>{const l=[];for(;s<=i;++s){const u=n[s],c=ae(e,u,o,l);K(e.ct,t,c,r)}return Ot(l)},st=(e,t,r,n)=>{for(;r<=n;++r){const s=t[r];s&&(s._t,Jt(e,s._t))}},or=(e,t,r,n)=>{const s=t.slots[n];if(s)return s;const i=t.templates[n];if(i)return i;const o=Ht(e.kt,n);return((l,u,c)=>{l.xt.push({St:Ie,jt:[u,c,u.firstChild]})})(e,r,o),t.templates[n]=o,o},ir=e=>{var t;return(t=e.A[F])!=null?t:""},ae=(e,t,r,n)=>{const s=t.At,i=e.ct.kt,o=e.Pt;if(s==="#text"){const d=t.Ht,v=((b,E)=>b.createTextNode(E))(i,t.Nt);return d&&o&&Oe(2,o.g,d,v,"data"),t._t=v}let l,u=!!(1&r);u||s!=="svg"||(r|=1,u=!0);const c=s===":virtual",a=t.A,f="q:renderFn"in a,h=e.ct;c?l=(d=>{const v=d.createComment("qv "),b=d.createComment("/qv");return new Qe(v,b)})(i):s==="head"?(l=i.head,r|=2):(l=Ge(i,s,u),r&=-3),t._t=l,u&&s==="foreignObject"&&(u=!1,r&=-2);const p=zt(l);if(p.st=e.Pt,p.it=e.Et,f){_t(l,t.Lt);const d=a["q:renderFn"];cr(p,e,a.props),Gt(e,p),p.tt=d;const v=S(tt(e,p,r),()=>{let b=t.zt;if(b.length===0)return;b.length===1&&b[0].At===":skipRender"&&(b=b[0].zt);const E=lr(p),A=[];for(const Z of b){const V=or(h,E,l,ir(Z)),at=et(e);at.Et=C(V,h.U);const Sr=ae(at,Z,r,A);Z._t,Z._t,j=V,_=Sr,h.xt.push({St:fe,jt:[j,_]})}var j,_;return Ot(A)});return D(v)&&n.push(v),l}const m=c&&"q:s"in a,y=p.li;if(t.A=mn(h,p,o==null?void 0:o.g,a,u),o&&!c){const d=o.X;d&&d.forEach(v=>{l.classList.add(v)}),2&o.Y&&(y.push(...o.li),o.Y&=-3)}if(m&&(o.nt,_t(l,t.Lt),T(l,"q:sref",o.G),o.nt.push(t),h.Mt.push([l,o.g])),a[se]!==void 0)return l;let w=t.zt;if(w.length===0)return l;w.length===1&&w[0].At===":skipRender"&&(w=w[0].zt);const g=w.map(d=>ae(e,d,r,n));for(const d of g)fe(l,d);return l},lr=e=>{var i,o;const t=(l=>l.nt||(l.g.parentElement,l.nt=fn(l)))(e),r={},n={},s=Array.from(e.g.childNodes).filter(nr);for(const l of t)l._t,r[(i=l.Lt)!=null?i:""]=l._t;for(const l of s)n[(o=Y(l,F))!=null?o:""]=l;return{slots:r,templates:n}},fn=e=>((t,r,n)=>{const s=((l,u,c)=>l.ownerDocument.createTreeWalker(l,128,{acceptNode(a){const f=be(a);return f&&Y(f,"q:sref")===c?1:2}}))(t,0,n),i=[];let o=null;for(;o=s.nextNode();)i.push(be(o));return i})(e.g.parentElement,0,e.G).map(ue),qt=(e,t,r,n)=>(r in t&&t[r]!==n&&M(e,t,r,n),!0),te=(e,t,r,n)=>(we(e,t,r.toLowerCase(),n),!0),se="dangerouslySetInnerHTML",hn={style:(e,t,r,n)=>(M(e,t.style,"cssText",Gr(n)),!0),class:(e,t,r,n,s)=>{const i=Fe(s),o=Fe(n);return((l,u,c,a)=>{l?l.xt.push({St:bt,jt:[u,c,a]}):bt(u,c,a)})(e,t,i.filter(l=>l&&!o.includes(l)),o.filter(l=>l&&!i.includes(l))),!0},value:qt,checked:qt,href:te,list:te,form:te,tabIndex:te,download:te,[se]:(e,t,r,n)=>(se in t?M(e,t,se,n):"innerHTML"in t&&M(e,t,"innerHTML",n),!0),innerHTML:()=>!0},dn=(e,t,r,n,s,i)=>{var a;const o=pn(n,s),l={};if(o.length===0)return l;const u=(a=s[N])!=null?a:W,c=t.g;for(let f of o){if(f==="ref"){Wt(s[f],c);continue}let h=U(u[f])?u[f]:s[f];if(Yt(f)){ur(e,t,f,h);continue}f==="className"&&(f="class"),U(h)&&(Oe(1,r,h,c,f),h=h.value),f==="class"&&(s.class=h=Xt(h));const p=i?f:f.toLowerCase(),m=n[p];l[p]=h,m!==h&&ot(e,c,f,h,m,i)}return l},ot=(e,t,r,n,s,i)=>{if(en(r))return void we(e,t,r,n!=null?String(n):n);const o=hn[r];o&&o(e,t,r,n,s)||(i||!(r in t)?(r.startsWith("preventdefault:")&&Mt(r.slice(15),e.U),we(e,t,r,n)):M(e,t,r,n))},pn=(e,t)=>{const r=Object.keys(t),n=r.map(i=>i.toLowerCase()),s=Object.keys(e);return r.push(...s.filter(i=>!n.includes(i))),r.filter(i=>i!=="children")},mn=(e,t,r,n,s)=>{var c;const i=t.g,o=Object.keys(n),l={};if(o.length===0)return l;const u=(c=n[N])!=null?c:W;for(let a of o){if(a==="children")continue;if(a==="ref"){Wt(n[a],i);continue}let f=U(u[a])?u[a]:n[a];Yt(a)?ur(e,t,a,f):(a==="className"&&(a="class"),r&&U(f)&&(Oe(1,r,f,i,a),f=f.value),a==="class"&&(f=Xt(f)),l[s?a:a.toLowerCase()]=f,ot(e,i,a,f,void 0,s))}return l},cr=(e,t,r)=>{var u;const n=Object.keys(r);let s=e.A;if(s||(e.A=s=Re({[G]:2},t.ct.U)),n.length===0)return!1;const i=H(s),o=me(s),l=o[N]=(u=r[N])!=null?u:W;for(const c of n)if(c!=="children"&&c!==F)if(U(l[c]))o["$$"+c]=l[c];else{const a=r[c],f=o[c];o[c]=a,f!==a&&i.N(c)}return!!(1&e.Y)},it=(e,t,r,n)=>{if(n&&e.hasAttribute("q:s"))return void t.Ct.push(e);const s=J(e);s&&((o,l)=>{var c;const u=o.g;(c=o.K)==null||c.forEach(a=>{l.It(a),Fn(a)}),o.tt&&l.It(u),o.tt=null,o.R=null,o.K=null,o.Y=0,u._qc_=void 0})(s,r);const i=ce(e,"elements");for(const o of i)it(o,t,r,!0)},fe=(e,t)=>{B(t)?t.appendTo(e):e.appendChild(t)},gn=(e,t)=>{B(t)?t.remove():e.removeChild(t)},Ie=(e,t,r)=>{B(t)?t.insertBeforeTo(e,_e(r)):e.insertBefore(t,_e(r))},vn=(e,t,r)=>{const n={};for(let s=t;s<=r;++s){const i=e[s].Lt;i!=null&&(n[i]=s)}return n},ur=(e,t,r,n)=>{const s=e.U,i=Rr(t.li,r,n,s.J);r.startsWith("on")||we(e,t.g,i,""),Mt(i)},ge=(e,t)=>e.At===t.At&&e.Lt===t.Lt,yn=(e,t)=>e.At===t,wn=(e,t)=>{const r=J(e);t.Wt.includes(r)||(t.Wt.push(r),t.Vt++,8&r.Y?bn(r,t,!0):t.Bt.push(r),t.Vt--)},bn=(e,t,r)=>{if(e.A&&!_n(e.A)&&q(e.A,t,r),e.tt&&q(e.tt,t,r),e.R)for(const n of e.R)q(n,t,r);if(e.K)for(const n of e.K)q(n,t,r);if(r&&(Et(e,t),e.ot))for(const n of e.ot)Et(n,t)},Et=(e,t)=>{var r;for(;e;){if(e.Z){for(const n of e.Z.values())q(n,t,!0);if(e.Z.get("_")===!0)break}e=(r=e.it)!=null?r:e.st}},ar=(e,t)=>{if(t.Zt.has(e))return;t.Zt.add(e);const r=e.Jt;for(const n of r){const s=n[1];de(s)&&B(s)?n[0]===0&&wn(s,t):q(s,t,!0)}},xt=Symbol(),q=(e,t,r)=>{if(e!==null){const s=typeof e;switch(s){case"function":case"object":{const i=t.Zt;if(i.has(e))return;if(i.add(e),!is(e))return t.Gt.add(void 0),void t.Kt.push(e);const o=e,l=me(e);if(l){if(e=l,i.has(e))return;i.add(e),r&&ar(H(o),t)}if(rs(e,t,r))return void t.Gt.add(e);if(D(e))return void t.Qt.push((n=e,n.then(u=>{const c={resolved:!0,value:u};return n[xt]=c,u},u=>{const c={resolved:!1,value:u};return n[xt]=c,u})).then(u=>{q(u,t,r)}));if(s==="object"){if(de(e))return;if(x(e))for(let u=0;u<e.length;u++)q(e[u],t,r);else if(Pt(e))for(const u of Object.keys(e))q(e[u],t,r)}break}}}var n;t.Gt.add(e)},_n=e=>Object.keys(e).length===0,fr=e=>{Y(e,"q:container")==="paused"&&Sn(e)},Sn=e=>{var w;if(!oe(t=e)||!t.hasAttribute("q:container"))return;var t;const r=(w=e._qwikjson_)!=null?w:(g=>{const d=ye(),v=g===d.documentElement?d.body:g,b=kt(v);if(b){const E=b.firstChild.data;return JSON.parse(An(E)||"{}")}})(e);if(e._qwikjson_=null,!r)return;const n=ye(),s=e===n.documentElement?n.body:e;if(!kt(s))return;const i=Ke(e);kn(e,i);const o=new Map;let l=null,u=0;const c=n.createTreeWalker(e,128);for(;l=c.nextNode();){const g=l.data;if(u===0){if(g.startsWith("qv ")){const d=Cn(g);d>=0&&o.set(d,l)}else if(g.startsWith("t=")){const d=g.slice(2),v=z(d);o.set(v,jn(l))}}g==="cq"?u++:g==="/cq"&&u--}const a=e.getElementsByClassName("qc\u{1F4E6}").length!==0;e.querySelectorAll("[q\\:id]").forEach(g=>{if(a&&g.closest("[q\\:container]")!==e)return;const d=Y(g,"q:id"),v=z(d);o.set(v,g)});const f=ns(i,n),h=new Map,p=new Set,m=g=>(typeof g=="string"&&g.length,h.has(g)?h.get(g):y(g)),y=g=>{if(g.startsWith("#")){const A=g.slice(1),j=z(A);o.has(j);const _=o.get(j);if(Ae(_)){if(!_.isConnected)return void h.set(g,void 0);const Z=Zt(_),V=new Qe(_,Z);return h.set(g,V),C(V,i),V}return oe(_)?(h.set(g,_),C(_,i).rt=ue(_),_):(h.set(g,_),_)}const d=z(g),v=r.objs;v.length;const b=v[d];let E=b;for(let A=g.length-1;A>=0;A--){const j=g[A],_=ss[j];if(!_)break;E=_(E,i)}return h.set(g,E),tr(b)||p.has(d)||(p.add(d),En(b,d,r.subs,m,i,f),xn(b,m,f)),E};i.lt=1e5,i.B={getObject:m,meta:r.ctx,refs:r.refs},qn(r.objs,f),T(e,"q:container","resumed"),((g,d,v,b)=>{g&&typeof CustomEvent=="function"&&g.dispatchEvent(new CustomEvent("qresume",{detail:void 0,bubbles:!0,composed:!0}))})(e)},qn=(e,t)=>{for(let r=0;r<e.length;r++){const n=e[r];pe(n)&&(e[r]=n===Dn?void 0:t.prepare(n))}},En=(e,t,r,n,s,i)=>{const o=r[t];if(o){const l=[];let u=0;for(const c of o)if(c.startsWith("_"))u=parseInt(c.slice(1),10);else{const a=ls(c,n);a&&l.push(a)}if(u>0&&(e[G]=u),!i.subs(e,l)){const c=s.H.get(e);c?H(c).Xt(l):Re(e,s,l)}}},xn=(e,t,r)=>{if(!r.fill(e,t)&&e&&typeof e=="object"){if(x(e))for(let n=0;n<e.length;n++)e[n]=t(e[n]);else if(Pt(e))for(const n of Object.keys(e))e[n]=t(e[n])}},kn=(e,t)=>{const r=e.ownerDocument.head;e.querySelectorAll("style[q\\:style]").forEach(n=>{t.wt.add(Y(n,"q:style")),r.appendChild(n)})},An=e=>e.replace(/\\x3C(\/?script)/g,"<$1"),kt=e=>{let t=e.lastElementChild;for(;t;){if(t.tagName==="SCRIPT"&&Y(t,"type")==="qwik/json")return t;t=t.previousElementSibling}},jn=e=>{const t=e.nextSibling;if($t(t))return t;{const r=e.ownerDocument.createTextNode("");return e.parentElement.insertBefore(r,e),r}},Cn=e=>{const t=e.indexOf("q:id=");return t>0?z(e.slice(t+5)):-1},$n=()=>{const e=It();let t=e.I;if(t)t.p;else{const r=e.g,n=Ut(r);t=Pe(decodeURIComponent(String(e.T)),n),fr(n);const s=C(r,Ke(n));Tt(t,s)}return t.p},Pn=(e,t)=>{if(e[0]===0){const r=e[1];ke(r)?On(r,t):hr(r,t)}else Rn(e,t)},On=(e,t)=>{fr(t.J);const r=C(e,t);r.tt,1&r.Y||(r.Y|=1,t.qt!==void 0?(t.gt,t.vt.add(e)):(t.ht.add(e),Le(t)))},Rn=(e,t)=>{t.qt!==void 0?(t.gt,t.ft.add(e)):(t.ut.add(e),Le(t))},hr=(e,t)=>{e.Y&he||(e.Y|=he,t.qt!==void 0?(t.gt,t.$t.add(e)):(t.dt.add(e),Le(t)))},Le=e=>(e.gt===void 0&&(e.gt=$e().nextTick(()=>Tn(e))),e.gt),bs=()=>{const[e]=$n();hr(e,Ke(Ut(e.Yt)))},Tn=async e=>{const t=ye(e.J);try{const r=Kr(t,e),n=r.ct,s=e.qt=new Set(e.ht);e.ht.clear(),await Ln(e),e.vt.forEach(o=>{s.add(o)}),e.vt.clear();const i=Array.from(s);Un(i);for(const o of i)if(!n.Rt.has(o)){const l=C(o,e);if(l.tt){o.isConnected,n.Ot.push(l);try{await tt(r,l,In(o.parentElement))}catch{}}}if(e.ut.forEach(o=>{n.Rt.has(o[1])||((l,u)=>{var f;const c=(f=u[5])!=null?f:"value",a=u[2][c];switch(u[0]){case 1:{const h=u[4],p=u[3],m=J(p),y=p.namespaceURI===rt;let w;if(m&&m.rt){const g=y?h:h.toLowerCase();w=m.rt.A[g],m.rt.A[g]=a}return ot(l,p,h,a,w,y)}case 2:M(l,u[3],"data",Qt(a))}})(n,o)}),e.ut.clear(),n.xt.push(...n.Tt),n.xt.length===0)return void await At(e,n);await $e().raf(()=>((({ct:o})=>{Fr(o)})(r),At(e,n)))}catch(r){je(r)}},In=e=>{let t=0;return e&&(e.namespaceURI===rt&&(t|=1),e.tagName==="HEAD"&&(t|=2)),t},At=async(e,t)=>{await Nn(e,(r,n)=>(r.Y&Yn)!=0&&(!n||t.Rt.has(r.Yt))),e.vt.forEach(r=>{e.ht.add(r)}),e.vt.clear(),e.ft.forEach(r=>{e.ut.add(r)}),e.ft.clear(),e.qt=void 0,e.gt=void 0,e.ht.size+e.dt.size+e.ut.size>0&&Le(e)},Ln=async e=>{const t=e.J,r=[],n=[],s=o=>(o.Y&dr)!=0,i=o=>(o.Y&zn)!=0;e.dt.forEach(o=>{s(o)&&(n.push(S(o.I.tn(t),()=>o)),e.dt.delete(o)),i(o)&&(r.push(S(o.I.tn(t),()=>o)),e.dt.delete(o))});do if(e.$t.forEach(o=>{s(o)?n.push(S(o.I.tn(t),()=>o)):i(o)?r.push(S(o.I.tn(t),()=>o)):e.dt.add(o)}),e.$t.clear(),n.length>0){const o=await Promise.all(n);Be(o),await Promise.all(o.map(l=>qe(l,e))),n.length=0}while(e.$t.size>0);if(r.length>0){const o=await Promise.all(r);Be(o),o.forEach(l=>qe(l,e))}},Nn=async(e,t)=>{const r=[],n=e.J;e.dt.forEach(s=>{t(s,!1)&&(r.push(S(s.I.tn(n),()=>s)),e.dt.delete(s))});do if(e.$t.forEach(s=>{t(s,!0)?r.push(S(s.I.tn(n),()=>s)):e.dt.add(s)}),e.$t.clear(),r.length>0){const s=await Promise.all(r);Be(s);for(const i of s)await qe(i,e);r.length=0}while(e.$t.size>0)},Un=e=>{e.sort((t,r)=>2&t.compareDocumentPosition(_e(r))?1:-1)},Be=e=>{e.sort((t,r)=>t.Yt===r.Yt?t.nn<r.nn?-1:1:(2&t.Yt.compareDocumentPosition(_e(r.Yt)))!=0?1:-1)},Yn=1,dr=2,he=4,jt=8,zn=16,_s=(e,t)=>{const{get:r,set:n,rCtx:s,i,elCtx:o}=Te();if(r)return;const l=s.M.ct.U,u=new lt(he|dr,i,o.g,e,void 0);n(!0),e.tn(l.J),o.K||(o.K=[]),o.K.push(u),Pr(s,()=>qe(u,l,s.M))},pr=e=>!!e.Ft,qe=async(e,t,r)=>(e.Y,pr(e)?Wn(e,t,r):Mn(e,t,r)),Wn=(e,t,r,n)=>{e.Y&=~he,Ee(e);const s=e.Yt,i=L(r==null?void 0:r.ct.j,s,void 0,"WatchEvent"),{F:o}=t;e.I.p;const l=e.I.getFn(i,()=>{o.It(e)}),u=[],c=e.Ft,a=Ne(c),f={track:(d,v)=>{if(P(d)){const E=L();return E.P=e,le(E,d)}const b=H(d);return b?b.L([0,e,v]):De(Ce(26),d),v?d[v]:U(d)?d.value:d},cleanup(d){u.push(d)},cache(d){let v=0;v=d==="immutable"?1/0:d,c._cache=v},previous:a._resolved};let h,p,m=!1;const y=(d,v)=>!m&&(m=!0,d?(m=!0,c.loading=!1,c._state="resolved",c._resolved=v,c._error=void 0,h(v)):(m=!0,c.loading=!1,c._state="rejected",c._resolved=void 0,c._error=v,p(v)),!0);le(i,()=>{c._state="pending",c.loading=!0,c._resolved=void 0,c.promise=new Promise((d,v)=>{h=d,p=v})}),e.en=vr(()=>{u.forEach(d=>d())});const w=Je(()=>S(n,()=>l(f)),d=>{y(!0,d)},d=>{y(!1,d)}),g=a._timeout;return g>0?Promise.race([w,Cr(g).then(()=>{y(!1,new Error("timeout"))&&Ee(e)})]):w},Mn=(e,t,r)=>{e.Y&=~he,Ee(e);const n=e.Yt,s=L(r==null?void 0:r.ct.j,n,void 0,"WatchEvent"),{F:i}=t,o=e.I.getFn(s,()=>{i.It(e)}),l=[];e.en=vr(()=>{l.forEach(c=>c())});const u={track:(c,a)=>{if(P(c)){const h=L();return h.P=e,le(h,c)}const f=H(c);return f?f.L([0,e,a]):De(Ce(26),c),a?c[a]:c},cleanup(c){l.push(c)}};return Je(()=>o(u),c=>{P(c)&&l.push(c)},c=>{Kt(c,n,r)})},Ee=e=>{const t=e.en;if(t){e.en=void 0;try{t()}catch(r){je(r)}}},Fn=e=>{e.Y&jt?(e.Y&=~jt,(0,e.I)()):Ee(e)},mr=e=>O(e)&&e instanceof lt;class lt{constructor(t,r,n,s,i){this.Y=t,this.nn=r,this.Yt=n,this.I=s,this.Ft=i}}const Bn=e=>{var t;return{__brand:"resource",promise:void 0,loading:!0,_resolved:void 0,_error:void 0,_state:"pending",_timeout:(t=e==null?void 0:e.timeout)!=null?t:-1,_cache:0}},Dn="",Jn={prefix:"",test:e=>ut(e),collect:(e,t,r)=>{if(e.p)for(const n of e.p)q(n,t,r);t.Vt===0&&t.Ut.push(e)},serialize:(e,t)=>Rt(e,{v:t}),prepare:(e,t)=>Pe(e,t.J),fill:(e,t)=>{e.$&&e.$.length>0&&(e.p=e.$.map(t),e.$=null)}},Hn={prefix:"",test:e=>mr(e),collect:(e,t,r)=>{q(e.I,t,r),e.Ft&&q(e.Ft,t,r)},serialize:(e,t)=>((r,n)=>{let s=`${ze(r.Y)} ${ze(r.nn)} ${n(r.I)} ${n(r.Yt)}`;return pr(r)&&(s+=` ${n(r.Ft)}`),s})(e,t),prepare:e=>(t=>{const[r,n,s,i,o]=t.split(" ");return new lt(z(r),z(n),i,s,o)})(e),fill:(e,t)=>{e.Yt=t(e.Yt),e.I=t(e.I),e.Ft&&(e.Ft=t(e.Ft))}},Zn={prefix:"",test:e=>{return O(t=e)&&t.__brand==="resource";var t},collect:(e,t,r)=>{q(e.promise,t,r),q(e._resolved,t,r)},serialize:(e,t)=>((r,n)=>{const s=r._state;return s==="resolved"?`0 ${n(r._resolved)}`:s==="pending"?"1":`2 ${n(r._error)}`})(e,t),prepare:e=>(t=>{const[r,n]=t.split(" "),s=Bn(void 0);return s.promise=Promise.resolve(),r==="0"?(s._state="resolved",s._resolved=n,s.loading=!1):r==="1"?(s._state="pending",s.promise=new Promise(()=>{}),s.loading=!0):r==="2"&&(s._state="rejected",s._error=n,s.loading=!1),s})(e),fill:(e,t)=>{if(e._state==="resolved")e._resolved=t(e._resolved),e.promise=Promise.resolve(e._resolved);else if(e._state==="rejected"){const r=Promise.reject(e._error);r.catch(()=>null),e._error=t(e._error),e.promise=r}}},Vn={prefix:"",test:e=>e instanceof URL,serialize:e=>e.href,prepare:e=>new URL(e),fill:void 0},Kn={prefix:"",test:e=>e instanceof Date,serialize:e=>e.toISOString(),prepare:e=>new Date(e),fill:void 0},Xn={prefix:"\x07",test:e=>e instanceof RegExp,serialize:e=>`${e.flags} ${e.source}`,prepare:e=>{const t=e.indexOf(" "),r=e.slice(t+1),n=e.slice(0,t);return new RegExp(r,n)},fill:void 0},Gn={prefix:"",test:e=>e instanceof Error,serialize:e=>e.message,prepare:e=>{const t=new Error(e);return t.stack=void 0,t},fill:void 0},Qn={prefix:"",test:e=>xr(e),serialize:void 0,prepare:(e,t,r)=>r,fill:void 0},xe=Symbol("serializable-data"),es={prefix:"",test:e=>ds(e),serialize:(e,t)=>{const[r]=e[xe];return Rt(r,{v:t})},prepare:(e,t)=>{const r=e.indexOf("{"),n=r==-1?e:e.slice(0,r),s=Pe(n,t.J);return _r(s)},fill:(e,t)=>{const[r]=e[xe];r.$&&r.$.length>0&&(r.p=r.$.map(t),r.$=null)}},gr=[Jn,{prefix:"",test:e=>e instanceof ve,collect:(e,t,r)=>(q(e.untrackedValue,t,r),r&&ar(e[I],t),e),serialize:(e,t)=>t(e.untrackedValue),prepare:(e,t)=>new ve(e,t.F.D()),subs:(e,t)=>{e[I].Xt(t)},fill:(e,t)=>{e.untrackedValue=t(e.untrackedValue)}},{prefix:"",test:e=>e instanceof Q,collect:(e,t,r)=>(q(e.ref,t,r),e),serialize:(e,t)=>`${t(e.ref)} ${e.prop}`,prepare:e=>{const[t,r]=e.split(" ");return new Q(t,r)},fill:(e,t)=>{e.ref=t(e.ref)}},Hn,Zn,Vn,Kn,Xn,Gn,Qn,es,{prefix:"",test:e=>typeof e=="function"&&e.__qwik_serializable__!==void 0,serialize:e=>e.toString(),prepare:e=>{const t=new Function("return "+e)();return t.__qwik_serializable__=!0,t},fill:void 0},{prefix:"",test:e=>typeof e=="number",serialize:e=>String(e),prepare:e=>Number(e),fill:void 0}],ts=gr.filter(e=>e.collect),rs=(e,t,r)=>{for(const n of ts)if(n.test(e))return n.collect(e,t,r),!0;return!1},ns=(e,t)=>{const r=new Map,n=new Map;return{prepare(s){for(const i of gr){const o=i.prefix;if(s.startsWith(o)){const l=i.prepare(s.slice(o.length),e,t);return i.fill&&r.set(l,i),i.subs&&n.set(l,i),l}}return s},subs(s,i){const o=n.get(s);return!!o&&(o.subs(s,i,e),!0)},fill(s,i){const o=r.get(s);return!!o&&(o.fill(s,i,e),!0)}}},ss={"!":(e,t)=>{var r;return(r=t.H.get(e))!=null?r:Ve(e,t)},"~":e=>Promise.resolve(e),_:e=>Promise.reject(e)},ct=new WeakSet,os=e=>!O(e)&&!P(e)||!ct.has(e),is=e=>!ct.has(e),vr=e=>(e!=null&&ct.add(e),e),Ne=e=>{var t;return O(e)&&(t=me(e))!=null?t:e},me=e=>e[Ye],H=e=>e[I],ls=(e,t)=>{const r=e.split(" "),n=parseInt(r[0],10);r.length;const s=t(r[1]);if(!s||mr(s)&&!s.Yt)return;const i=[n,s];return n===0?(r.length,i.push(r[2])):(r.length===5||r.length,i.push(t(r[2]),t(r[3]),r[4],r[5])),i},cs=e=>{const t=new Map;return{D:r=>new us(t,e,r),It:r=>{const n=t.get(r);if(n){for(const s of n)s.rn(r);t.delete(r),n.length=0}}}};class us{constructor(t,r,n){this.on=t,this.U=r,this.Jt=[],n&&this.Xt(n)}Xt(t){this.Jt.push(...t);for(const r of this.Jt)this.sn(r[1],this)}sn(t,r){let n=this.on.get(t);n||this.on.set(t,n=[]),n.includes(r)||n.push(r)}rn(t){const r=this.Jt;for(let n=0;n<r.length;n++)r[n][1]===t&&(r.splice(n,1),n--)}L(t){const r=this.Jt,n=t[1],s=t[t.length-1];r.some(([i,o,l])=>i===0&&o===n&&l===s)||(r.push(t),this.sn(n,this))}N(t){const r=this.Jt;for(const n of r){const s=n[n.length-1];t&&s&&s!==t||Pn(n,this.U)}}}const ut=e=>typeof e=="function"&&typeof e.getSymbol=="function",yr=(e,t,r,n,s,i,o)=>{let l;const u=d=>{l||(l=d)},c=async d=>{if(d&&u(d),r!==null)return r;if(n!==null)return r=n().then(v=>r=v[t]);{if(!e)throw k(31,t);if(!l)throw k(30,e,t);const v=$e().importSymbol(l,e,t);return r=S(v,b=>r=b)}},a=d=>r!==null?r:c(d),f=(d,v)=>(...b)=>{const E=fs(),A=a();return S(A,j=>{if(P(j)){if(v&&v()===!1)return;const _={...h(d),I:w};return as(t,_.g,E),le(_,j,...b)}throw k(10)})},h=d=>d==null?L():x(d)?Nt(d):d,p=async function(...d){return await f()(...d)},m=o!=null?o:t,y=wr(m),w=p;return Object.assign(p,{getSymbol:()=>m,getHash:()=>y,resolve:c,tn:a,S:u,l:e,o:t,u:o,cn:y,getFn:f,$:s,p:i,t:null})},wr=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},as=(e,t,r)=>{br("qsymbol",{symbol:e,element:t,reqTime:r})},br=(e,t)=>{typeof document=="object"&&document.dispatchEvent(new CustomEvent(e,{bubbles:!1,detail:t}))},fs=()=>typeof performance=="object"?performance.now():0,hs=e=>{throw new Error("Optimizer should replace all usages of $() with some special syntax. If you need to create a QRL manually, use inlinedQrl() instead.")},_r=e=>{function t(r,n){const s=e.cn+":"+(n||"");return Ft(Xe,{"q:renderFn":e,[F]:r[F],[N]:r[N],children:r.children,props:r},s)}return t[xe]=[e],t},ds=e=>typeof e=="function"&&e[xe]!==void 0,Ss=e=>{var r;const t=(r=e.name)!=null?r:"";return Ft(Xe,{"q:s":""},t)},qs=(e,t)=>{const{get:r,set:n,rCtx:s}=Te();if(r!=null)return r;const i=P(e)?e():e;if((t==null?void 0:t.reactive)===!1)return n(i),i;{const o=s.M.ct.U,l=Ve(i,o,t!=null&&t.recursive?1:0);return n(l),l}};function Es(e,t){var r;return(r=Lt().M.ct.U.yt[e])!=null?r:t}const xs=_r($r(()=>Ct(()=>import("./q-54f0e730.js").then(e=>e.k),[]),"s_vgNegdacmcE"));export{_r as A,vs as B,ys as C,Ss as H,Dt as J,ws as O,$r as P,ms as Q,Ft as U,Ct as _,ps as a,_s as b,gs as c,bs as h,Jr as j,$n as l,N as p,Es as q,xs as r,vr as w,qs as y};
