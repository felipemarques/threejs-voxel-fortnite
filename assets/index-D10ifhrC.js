(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mr="160",Qa=0,Ur=1,ec=2,tc=0,pa=1,nc=2,nn=3,_n=0,Rt=1,Ot=2,pn=0,si=1,sr=2,Nr=3,Fr=4,ic=5,An=100,sc=101,rc=102,Br=103,Or=104,oc=200,ac=201,cc=202,lc=203,rr=204,or=205,hc=206,uc=207,dc=208,fc=209,pc=210,mc=211,gc=212,_c=213,vc=214,xc=0,yc=1,Mc=2,os=3,Sc=4,wc=5,Ec=6,bc=7,ms=0,Tc=1,Ac=2,mn=0,Cc=1,Rc=2,Pc=3,Lc=4,Dc=5,Ic=6,ma=300,ci=301,li=302,ar=303,cr=304,gs=306,as=1e3,Xt=1001,lr=1002,Mt=1003,kr=1004,Uc=1004,Ts=1005,Bt=1006,Nc=1007,bi=1008,gn=1009,Fc=1010,Bc=1011,gr=1012,ga=1013,dn=1014,fn=1015,Ti=1016,_a=1017,va=1018,Rn=1020,Oc=1021,qt=1023,kc=1024,zc=1025,Pn=1026,hi=1027,Hc=1028,xa=1029,Gc=1030,ya=1031,Ma=1033,As=33776,Cs=33777,Rs=33778,Ps=33779,zr=35840,Hr=35841,Gr=35842,Vr=35843,Sa=36196,Wr=37492,Xr=37496,qr=37808,jr=37809,Yr=37810,Kr=37811,$r=37812,Zr=37813,Jr=37814,Qr=37815,eo=37816,to=37817,no=37818,io=37819,so=37820,ro=37821,Ls=36492,oo=36494,ao=36495,Vc=36283,co=36284,lo=36285,ho=36286,wa=3e3,Ln=3001,Wc=3200,Xc=3201,_s=0,qc=1,kt="",_t="srgb",rn="srgb-linear",_r="display-p3",vs="display-p3-linear",cs="linear",Je="srgb",ls="rec709",hs="p3",Fn=7680,uo=519,jc=512,Yc=513,Kc=514,Ea=515,$c=516,Zc=517,Jc=518,Qc=519,fo=35044,po="300 es",hr=1035,sn=2e3,us=2001;class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mo=1234567;const Mi=Math.PI/180,Ai=180/Math.PI;function di(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function vr(s,e){return(s%e+e)%e}function el(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function tl(s,e,t){return s!==e?(t-s)/(e-s):0}function Si(s,e,t){return(1-t)*s+t*e}function nl(s,e,t,n){return Si(s,e,1-Math.exp(-t*n))}function il(s,e=1){return e-Math.abs(vr(s,e*2)-e)}function sl(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function rl(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ol(s,e){return s+Math.floor(Math.random()*(e-s+1))}function al(s,e){return s+Math.random()*(e-s)}function cl(s){return s*(.5-Math.random())}function ll(s){s!==void 0&&(mo=s);let e=mo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hl(s){return s*Mi}function ul(s){return s*Ai}function ur(s){return(s&s-1)===0&&s!==0}function dl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ds(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fl(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const gt={DEG2RAD:Mi,RAD2DEG:Ai,generateUUID:di,clamp:Ct,euclideanModulo:vr,mapLinear:el,inverseLerp:tl,lerp:Si,damp:nl,pingpong:il,smoothstep:sl,smootherstep:rl,randInt:ol,randFloat:al,randFloatSpread:cl,seededRandom:ll,degToRad:hl,radToDeg:ul,isPowerOfTwo:ur,ceilPowerOfTwo:dl,floorPowerOfTwo:ds,setQuaternionFromProperEuler:fl,normalize:Tt,denormalize:ti};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,r,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],x=i[4],S=i[7],C=i[2],T=i[5],A=i[8];return r[0]=o*_+a*y+c*C,r[3]=o*m+a*x+c*T,r[6]=o*f+a*S+c*A,r[1]=l*_+h*y+u*C,r[4]=l*m+h*x+u*T,r[7]=l*f+h*S+u*A,r[2]=d*_+p*y+g*C,r[5]=d*m+p*x+g*T,r[8]=d*f+p*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Ge;function ba(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pl(){const s=fs("canvas");return s.style.display="block",s}const go={};function wi(s){s in go||(go[s]=!0,console.warn(s))}const _o=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Di={[rn]:{transfer:cs,primaries:ls,toReference:s=>s,fromReference:s=>s},[_t]:{transfer:Je,primaries:ls,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[vs]:{transfer:cs,primaries:hs,toReference:s=>s.applyMatrix3(vo),fromReference:s=>s.applyMatrix3(_o)},[_r]:{transfer:Je,primaries:hs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(vo),fromReference:s=>s.applyMatrix3(_o).convertLinearToSRGB()}},ml=new Set([rn,vs]),Ye={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ml.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Di[e].toReference,i=Di[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Di[s].primaries},getTransfer:function(s){return s===kt?cs:Di[s].transfer}};function ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bn;class Ta{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=fs("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gl=0;class Aa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Us(i[o].image)):r.push(Us(i[o]))}else r=Us(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Us(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ta.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _l=0;class Pt extends Nn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Xt,i=Xt,r=Bt,o=bi,a=qt,c=gn,l=Pt.DEFAULT_ANISOTROPY,h=kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=di(),this.name="",this.source=new Aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ln?_t:kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ma)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Ln:wa}set encoding(e){wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ln?_t:kt}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=ma;Pt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(p+1)/2,C=(f+1)/2,T=(h+d)/4,A=(u+_)/4,I=(g+m)/4;return x>S&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=A/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=I/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vl extends Nn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ln?_t:kt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Aa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ca extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,f*y);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*y;if(c=c*m+d*S,l=l*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new R,xo=new Ci;class vn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zt):zt.fromBufferAttribute(r,o),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ii.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ii.copy(n.boundingBox)),Ii.applyMatrix4(e.matrixWorld),this.union(Ii)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Ui.subVectors(this.max,gi),On.subVectors(e.a,gi),kn.subVectors(e.b,gi),zn.subVectors(e.c,gi),an.subVectors(kn,On),cn.subVectors(zn,kn),Mn.subVectors(On,zn);let t=[0,-an.z,an.y,0,-cn.z,cn.y,0,-Mn.z,Mn.y,an.z,0,-an.x,cn.z,0,-cn.x,Mn.z,0,-Mn.x,-an.y,an.x,0,-cn.y,cn.x,0,-Mn.y,Mn.x,0];return!Fs(t,On,kn,zn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,On,kn,zn,Ui))?!1:(Ni.crossVectors(an,cn),t=[Ni.x,Ni.y,Ni.z],Fs(t,On,kn,zn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new R,new R,new R,new R,new R,new R,new R,new R],zt=new R,Ii=new vn,On=new R,kn=new R,zn=new R,an=new R,cn=new R,Mn=new R,gi=new R,Ui=new R,Ni=new R,Sn=new R;function Fs(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Sn.fromArray(s,r);const a=i.x*Math.abs(Sn.x)+i.y*Math.abs(Sn.y)+i.z*Math.abs(Sn.z),c=e.dot(Sn),l=t.dot(Sn),h=n.dot(Sn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const yl=new vn,_i=new R,Bs=new R;class Ri{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_i,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(Bs)),this.expandByPoint(_i.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new R,Os=new R,Fi=new R,ln=new R,ks=new R,Bi=new R,zs=new R;class xs{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Os.copy(e).add(t).multiplyScalar(.5),Fi.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Os);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fi),a=ln.dot(this.direction),c=-ln.dot(Fi),l=ln.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Os).addScaledVector(Fi,d),p}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),i=Jt.dot(Jt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,i,r){ks.subVectors(t,e),Bi.subVectors(n,e),zs.crossVectors(ks,Bi);let o=this.direction.dot(zs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ln.subVectors(this.origin,e);const c=a*this.direction.dot(Bi.crossVectors(ln,Bi));if(c<0)return null;const l=a*this.direction.dot(ks.cross(ln));if(l<0||c+l>o)return null;const h=-a*ln.dot(zs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hn.setFromMatrixColumn(e,0).length(),r=1/Hn.setFromMatrixColumn(e,1).length(),o=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ml,e,Sl)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),hn.crossVectors(n,Dt),hn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),hn.crossVectors(n,Dt)),hn.normalize(),Oi.crossVectors(Dt,hn),i[0]=hn.x,i[4]=Oi.x,i[8]=Dt.x,i[1]=hn.y,i[5]=Oi.y,i[9]=Dt.y,i[2]=hn.z,i[6]=Oi.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],S=n[11],C=n[15],T=i[0],A=i[4],I=i[8],v=i[12],w=i[1],N=i[5],H=i[9],X=i[13],L=i[2],U=i[6],V=i[10],j=i[14],q=i[3],Y=i[7],K=i[11],ie=i[15];return r[0]=o*T+a*w+c*L+l*q,r[4]=o*A+a*N+c*U+l*Y,r[8]=o*I+a*H+c*V+l*K,r[12]=o*v+a*X+c*j+l*ie,r[1]=h*T+u*w+d*L+p*q,r[5]=h*A+u*N+d*U+p*Y,r[9]=h*I+u*H+d*V+p*K,r[13]=h*v+u*X+d*j+p*ie,r[2]=g*T+_*w+m*L+f*q,r[6]=g*A+_*N+m*U+f*Y,r[10]=g*I+_*H+m*V+f*K,r[14]=g*v+_*X+m*j+f*ie,r[3]=y*T+x*w+S*L+C*q,r[7]=y*A+x*N+S*U+C*Y,r[11]=y*I+x*H+S*V+C*K,r[15]=y*v+x*X+S*j+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,x=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,S=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,C=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,T=t*y+n*x+i*S+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*A,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*A,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*A,e[4]=x*A,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*A,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*f-t*c*f)*A,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*p+t*c*p)*A,e[8]=S*A,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*A,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*A,e[12]=C*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,y=c*l,x=c*h,S=c*u,C=n.x,T=n.y,A=n.z;return i[0]=(1-(_+f))*C,i[1]=(p+S)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(p-S)*T,i[5]=(1-(d+f))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+x)*A,i[9]=(m-y)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Hn.set(i[0],i[1],i[2]).length();const o=Hn.set(i[4],i[5],i[6]).length(),a=Hn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const l=1/r,h=1/o,u=1/a;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=h,Ht.elements[5]*=h,Ht.elements[6]*=h,Ht.elements[8]*=u,Ht.elements[9]*=u,Ht.elements[10]*=u,t.setFromRotationMatrix(Ht),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=sn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===sn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===us)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=sn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,p=(n+i)*h;let g,_;if(a===sn)g=(o+r)*u,_=-2*u;else if(a===us)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hn=new R,Ht=new rt,Ml=new R(0,0,0),Sl=new R(1,1,1),hn=new R,Oi=new R,Dt=new R,yo=new rt,Mo=new Ci;class fi{constructor(e=0,t=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class xr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wl=0;const So=new R,Gn=new Ci,Qt=new rt,ki=new R,vi=new R,El=new R,bl=new Ci,wo=new R(1,0,0),Eo=new R(0,1,0),bo=new R(0,0,1),Tl={type:"added"},Al={type:"removed"};class pt extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new R,t=new fi,n=new Ci,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ge}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(wo,e)}rotateY(e){return this.rotateOnAxis(Eo,e)}rotateZ(e){return this.rotateOnAxis(bo,e)}translateOnAxis(e,t){return So.copy(e).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wo,e)}translateY(e){return this.translateOnAxis(Eo,e)}translateZ(e){return this.translateOnAxis(bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ki.copy(e):ki.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(vi,ki,this.up):Qt.lookAt(ki,vi,this.up),this.quaternion.setFromRotationMatrix(Qt),i&&(Qt.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix(Qt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Al)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,e,El),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,bl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new R(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new R,en=new R,Hs=new R,tn=new R,Vn=new R,Wn=new R,To=new R,Gs=new R,Vs=new R,Ws=new R;let zi=!1;class Vt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gt.subVectors(e,t),i.cross(Gt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gt.subVectors(i,t),en.subVectors(n,t),Hs.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(en),c=Gt.dot(Hs),l=en.dot(en),h=en.dot(Hs),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(e,t,n,i,r,o,a,c){return zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zi=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,tn.x),c.addScaledVector(o,tn.y),c.addScaledVector(a,tn.z),c)}static isFrontFacing(e,t,n,i){return Gt.subVectors(n,t),en.subVectors(e,t),Gt.cross(en).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Gt.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zi=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Vn.subVectors(i,n),Wn.subVectors(r,n),Gs.subVectors(e,n);const c=Vn.dot(Gs),l=Wn.dot(Gs);if(c<=0&&l<=0)return t.copy(n);Vs.subVectors(e,i);const h=Vn.dot(Vs),u=Wn.dot(Vs);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Vn,o);Ws.subVectors(e,r);const p=Vn.dot(Ws),g=Wn.dot(Ws);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Wn,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return To.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(To,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Vn,o).addScaledVector(Wn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ra={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function Xs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=vr(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xs(o,r,e+1/3),this.g=Xs(o,r,e),this.b=Xs(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Ra[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ye.fromWorkingColorSpace(yt.copy(this),e),Math.round(Ct(yt.r*255,0,255))*65536+Math.round(Ct(yt.g*255,0,255))*256+Math.round(Ct(yt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,i=yt.g,r=yt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=_t){Ye.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,i=yt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Hi);const n=Si(un.h,Hi.h,t),i=Si(un.s,Hi.s,t),r=Si(un.l,Hi.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Re;Re.NAMES=Ra;let Cl=0;class on extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=di(),this.name="",this.type="Material",this.blending=si,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rr,this.blendDst=or,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rr&&(n.blendSrc=this.blendSrc),this.blendDst!==or&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class In extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ms,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new R,Gi=new we;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),e}}class Pa extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class La extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rl=0;const Ft=new rt,qs=new pt,Xn=new R,It=new vn,xi=new vn,dt=new R;class mt extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rl++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ba(e)?La:Pa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];xi.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(It.min,xi.min),It.expandByPoint(dt),dt.addVectors(It.max,xi.max),It.expandByPoint(dt)):(It.expandByPoint(xi.min),It.expandByPoint(xi.max))}It.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)dt.fromBufferAttribute(a,l),c&&(Xn.fromBufferAttribute(e,l),dt.add(Xn)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new R,h[w]=new R;const u=new R,d=new R,p=new R,g=new we,_=new we,m=new we,f=new R,y=new R;function x(w,N,H){u.fromArray(i,w*3),d.fromArray(i,N*3),p.fromArray(i,H*3),g.fromArray(o,w*2),_.fromArray(o,N*2),m.fromArray(o,H*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const X=1/(_.x*m.y-m.x*_.y);isFinite(X)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(X),y.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(X),l[w].add(f),l[N].add(f),l[H].add(f),h[w].add(y),h[N].add(y),h[H].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,N=S.length;w<N;++w){const H=S[w],X=H.start,L=H.count;for(let U=X,V=X+L;U<V;U+=3)x(n[U+0],n[U+1],n[U+2])}const C=new R,T=new R,A=new R,I=new R;function v(w){A.fromArray(r,w*3),I.copy(A);const N=l[w];C.copy(N),C.sub(A.multiplyScalar(A.dot(N))).normalize(),T.crossVectors(I,N);const X=T.dot(h[w])<0?-1:1;c[w*4]=C.x,c[w*4+1]=C.y,c[w*4+2]=C.z,c[w*4+3]=X}for(let w=0,N=S.length;w<N;++w){const H=S[w],X=H.start,L=H.count;for(let U=X,V=X+L;U<V;U+=3)v(n[U+0]),v(n[U+1]),v(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new St(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ao=new rt,wn=new xs,Vi=new Ri,Co=new R,qn=new R,jn=new R,Yn=new R,js=new R,Wi=new R,Xi=new we,qi=new we,ji=new we,Ro=new R,Po=new R,Lo=new R,Yi=new R,Ki=new R;class z extends pt{constructor(e=new mt,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Wi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(js.fromBufferAttribute(u,e),o?Wi.addScaledVector(js,h):Wi.addScaledVector(js.sub(t),h))}t.add(Wi)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),wn.copy(e.ray).recast(e.near),!(Vi.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Vi,Co)===null||wn.origin.distanceToSquared(Co)>(e.far-e.near)**2))&&(Ao.copy(r).invert(),wn.copy(e.ray).applyMatrix4(Ao),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,C=x;S<C;S+=3){const T=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);i=$i(this,f,e,n,l,h,u,T,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);i=$i(this,o,e,n,l,h,u,y,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,C=x;S<C;S+=3){const T=S,A=S+1,I=S+2;i=$i(this,f,e,n,l,h,u,T,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,x=m+1,S=m+2;i=$i(this,o,e,n,l,h,u,y,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Pl(s,e,t,n,i,r,o,a){let c;if(e.side===Rt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===_n,a),c===null)return null;Ki.copy(a),Ki.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ki);return l<t.near||l>t.far?null:{distance:l,point:Ki.clone(),object:s}}function $i(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,qn),s.getVertexPosition(c,jn),s.getVertexPosition(l,Yn);const h=Pl(s,e,t,n,qn,jn,Yn,Yi);if(h){i&&(Xi.fromBufferAttribute(i,a),qi.fromBufferAttribute(i,c),ji.fromBufferAttribute(i,l),h.uv=Vt.getInterpolation(Yi,qn,jn,Yn,Xi,qi,ji,new we)),r&&(Xi.fromBufferAttribute(r,a),qi.fromBufferAttribute(r,c),ji.fromBufferAttribute(r,l),h.uv1=Vt.getInterpolation(Yi,qn,jn,Yn,Xi,qi,ji,new we),h.uv2=h.uv1),o&&(Ro.fromBufferAttribute(o,a),Po.fromBufferAttribute(o,c),Lo.fromBufferAttribute(o,l),h.normal=Vt.getInterpolation(Yi,qn,jn,Yn,Ro,Po,Lo,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new R,materialIndex:0};Vt.getNormal(qn,jn,Yn,u.normal),h.face=u}return h}class ee extends mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(_,m,f,y,x,S,C,T,A,I,v){const w=S/A,N=C/I,H=S/2,X=C/2,L=T/2,U=A+1,V=I+1;let j=0,q=0;const Y=new R;for(let K=0;K<V;K++){const ie=K*N-X;for(let se=0;se<U;se++){const W=se*w-H;Y[_]=W*y,Y[m]=ie*x,Y[f]=L,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(se/A),u.push(1-K/I),j+=1}}for(let K=0;K<I;K++)for(let ie=0;ie<A;ie++){const se=d+ie+U*K,W=d+ie+U*(K+1),$=d+(ie+1)+U*(K+1),le=d+(ie+1)+U*K;c.push(se,W,le),c.push(W,$,le),q+=6}a.addGroup(p,q,v),p+=q,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ee(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ui(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=ui(s[t]);for(const i in n)e[i]=n[i]}return e}function Ll(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Da(s){return s.getRenderTarget()===null?s.outputColorSpace:Ye.workingColorSpace}const Dl={clone:ui,merge:At};var Il=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ul=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Il,this.fragmentShader=Ul,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=Ll(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ia extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends Ia{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ai*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,$n=1;class Nl extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ut(Kn,$n,e,t);i.layers=this.layers,this.add(i);const r=new Ut(Kn,$n,e,t);r.layers=this.layers,this.add(r);const o=new Ut(Kn,$n,e,t);o.layers=this.layers,this.add(o);const a=new Ut(Kn,$n,e,t);a.layers=this.layers,this.add(a);const c=new Ut(Kn,$n,e,t);c.layers=this.layers,this.add(c);const l=new Ut(Kn,$n,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ua extends Pt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fl extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ln?_t:kt),this.texture=new Ua(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ee(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:pn});r.uniforms.tEquirect.value=t;const o=new z(i,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Bt),new Nl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ys=new R,Bl=new R,Ol=new Ge;class bn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ys.subVectors(n,t).cross(Bl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ys),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ol.getNormalMatrix(e),i=this.coplanarPoint(Ys).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const En=new Ri,Zi=new R;class yr{constructor(e=new bn,t=new bn,n=new bn,i=new bn,r=new bn,o=new bn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],x=i[14],S=i[15];if(n[0].setComponents(c-r,d-l,m-p,S-f).normalize(),n[1].setComponents(c+r,d+l,m+p,S+f).normalize(),n[2].setComponents(c+o,d+h,m+g,S+y).normalize(),n[3].setComponents(c-o,d-h,m-g,S-y).normalize(),n[4].setComponents(c-a,d-u,m-_,S-x).normalize(),t===sn)n[5].setComponents(c+a,d+u,m+_,S+x).normalize();else if(t===us)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(e){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(e.matrixWorld),this.intersectsSphere(En)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zi.x=i.normal.x>0?e.max.x:e.min.x,Zi.y=i.normal.y>0?e.max.y:e.min.y,Zi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Na(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function kl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),p.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class Wt extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*d-o;for(let x=0;x<l;x++){const S=x*u-r;g.push(S,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const x=y+l*f,S=y+l*(f+1),C=y+1+l*(f+1),T=y+1+l*f;p.push(x,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.widthSegments,e.heightSegments)}}var zl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ql=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yl=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$l=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ql=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",_h=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ah=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ch=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ph=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ih=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$h=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,su=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,au=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,du=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Eu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Au=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Du=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ju=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,od=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ad=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,md=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:zl,alphahash_pars_fragment:Hl,alphamap_fragment:Gl,alphamap_pars_fragment:Vl,alphatest_fragment:Wl,alphatest_pars_fragment:Xl,aomap_fragment:ql,aomap_pars_fragment:jl,batching_pars_vertex:Yl,batching_vertex:Kl,begin_vertex:$l,beginnormal_vertex:Zl,bsdfs:Jl,iridescence_fragment:Ql,bumpmap_pars_fragment:eh,clipping_planes_fragment:th,clipping_planes_pars_fragment:nh,clipping_planes_pars_vertex:ih,clipping_planes_vertex:sh,color_fragment:rh,color_pars_fragment:oh,color_pars_vertex:ah,color_vertex:ch,common:lh,cube_uv_reflection_fragment:hh,defaultnormal_vertex:uh,displacementmap_pars_vertex:dh,displacementmap_vertex:fh,emissivemap_fragment:ph,emissivemap_pars_fragment:mh,colorspace_fragment:gh,colorspace_pars_fragment:_h,envmap_fragment:vh,envmap_common_pars_fragment:xh,envmap_pars_fragment:yh,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Ih,envmap_vertex:Sh,fog_vertex:wh,fog_pars_vertex:Eh,fog_fragment:bh,fog_pars_fragment:Th,gradientmap_pars_fragment:Ah,lightmap_fragment:Ch,lightmap_pars_fragment:Rh,lights_lambert_fragment:Ph,lights_lambert_pars_fragment:Lh,lights_pars_begin:Dh,lights_toon_fragment:Uh,lights_toon_pars_fragment:Nh,lights_phong_fragment:Fh,lights_phong_pars_fragment:Bh,lights_physical_fragment:Oh,lights_physical_pars_fragment:kh,lights_fragment_begin:zh,lights_fragment_maps:Hh,lights_fragment_end:Gh,logdepthbuf_fragment:Vh,logdepthbuf_pars_fragment:Wh,logdepthbuf_pars_vertex:Xh,logdepthbuf_vertex:qh,map_fragment:jh,map_pars_fragment:Yh,map_particle_fragment:Kh,map_particle_pars_fragment:$h,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Jh,morphcolor_vertex:Qh,morphnormal_vertex:eu,morphtarget_pars_vertex:tu,morphtarget_vertex:nu,normal_fragment_begin:iu,normal_fragment_maps:su,normal_pars_fragment:ru,normal_pars_vertex:ou,normal_vertex:au,normalmap_pars_fragment:cu,clearcoat_normal_fragment_begin:lu,clearcoat_normal_fragment_maps:hu,clearcoat_pars_fragment:uu,iridescence_pars_fragment:du,opaque_fragment:fu,packing:pu,premultiplied_alpha_fragment:mu,project_vertex:gu,dithering_fragment:_u,dithering_pars_fragment:vu,roughnessmap_fragment:xu,roughnessmap_pars_fragment:yu,shadowmap_pars_fragment:Mu,shadowmap_pars_vertex:Su,shadowmap_vertex:wu,shadowmask_pars_fragment:Eu,skinbase_vertex:bu,skinning_pars_vertex:Tu,skinning_vertex:Au,skinnormal_vertex:Cu,specularmap_fragment:Ru,specularmap_pars_fragment:Pu,tonemapping_fragment:Lu,tonemapping_pars_fragment:Du,transmission_fragment:Iu,transmission_pars_fragment:Uu,uv_pars_fragment:Nu,uv_pars_vertex:Fu,uv_vertex:Bu,worldpos_vertex:Ou,background_vert:ku,background_frag:zu,backgroundCube_vert:Hu,backgroundCube_frag:Gu,cube_vert:Vu,cube_frag:Wu,depth_vert:Xu,depth_frag:qu,distanceRGBA_vert:ju,distanceRGBA_frag:Yu,equirect_vert:Ku,equirect_frag:$u,linedashed_vert:Zu,linedashed_frag:Ju,meshbasic_vert:Qu,meshbasic_frag:ed,meshlambert_vert:td,meshlambert_frag:nd,meshmatcap_vert:id,meshmatcap_frag:sd,meshnormal_vert:rd,meshnormal_frag:od,meshphong_vert:ad,meshphong_frag:cd,meshphysical_vert:ld,meshphysical_frag:hd,meshtoon_vert:ud,meshtoon_frag:dd,points_vert:fd,points_frag:pd,shadow_vert:md,shadow_frag:gd,sprite_vert:_d,sprite_frag:vd},oe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yt={basic:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:At([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:At([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:At([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:At([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:At([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:At([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:At([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:At([oe.lights,oe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Yt.physical={uniforms:At([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ji={r:0,b:0,g:0};function xd(s,e,t,n,i,r,o){const a=new Re(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let y=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),y=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===gs)?(h===void 0&&(h=new z(new ee(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ui(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(x.colorSpace)!==Je,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new z(new Wt(2,2),new Un({name:"BackgroundMaterial",uniforms:ui(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(x.colorSpace)!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(Ji,Da(s)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function yd(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(L,U,V,j,q){let Y=!1;if(o){const K=_(j,V,U);l!==K&&(l=K,p(l.object)),Y=f(L,j,V,q),Y&&y(L,j,V,q)}else{const K=U.wireframe===!0;(l.geometry!==j.id||l.program!==V.id||l.wireframe!==K)&&(l.geometry=j.id,l.program=V.id,l.wireframe=K,Y=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,I(L,U,V,j),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,U,V){const j=V.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let Y=q[U.id];Y===void 0&&(Y={},q[U.id]=Y);let K=Y[j];return K===void 0&&(K=m(d()),Y[j]=K),K}function m(L){const U=[],V=[],j=[];for(let q=0;q<i;q++)U[q]=0,V[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:j,object:L,attributes:{},index:null}}function f(L,U,V,j){const q=l.attributes,Y=U.attributes;let K=0;const ie=V.getAttributes();for(const se in ie)if(ie[se].location>=0){const $=q[se];let le=Y[se];if(le===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;K++}return l.attributesNum!==K||l.index!==j}function y(L,U,V,j){const q={},Y=U.attributes;let K=0;const ie=V.getAttributes();for(const se in ie)if(ie[se].location>=0){let $=Y[se];$===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const le={};le.attribute=$,$&&$.data&&(le.data=$.data),q[se]=le,K++}l.attributes=q,l.attributesNum=K,l.index=j}function x(){const L=l.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function S(L){C(L,0)}function C(L,U){const V=l.newAttributes,j=l.enabledAttributes,q=l.attributeDivisors;V[L]=1,j[L]===0&&(s.enableVertexAttribArray(L),j[L]=1),q[L]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),q[L]=U)}function T(){const L=l.newAttributes,U=l.enabledAttributes;for(let V=0,j=U.length;V<j;V++)U[V]!==L[V]&&(s.disableVertexAttribArray(V),U[V]=0)}function A(L,U,V,j,q,Y,K){K===!0?s.vertexAttribIPointer(L,U,V,q,Y):s.vertexAttribPointer(L,U,V,j,q,Y)}function I(L,U,V,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=j.attributes,Y=V.getAttributes(),K=U.defaultAttributeValues;for(const ie in Y){const se=Y[ie];if(se.location>=0){let W=q[ie];if(W===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const $=W.normalized,le=W.itemSize,_e=t.get(W);if(_e===void 0)continue;const me=_e.buffer,pe=_e.type,Ue=_e.bytesPerElement,Te=n.isWebGL2===!0&&(pe===s.INT||pe===s.UNSIGNED_INT||W.gpuType===ga);if(W.isInterleavedBufferAttribute){const Xe=W.data,F=Xe.stride,wt=W.offset;if(Xe.isInstancedInterleavedBuffer){for(let Me=0;Me<se.locationSize;Me++)C(se.location+Me,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Me=0;Me<se.locationSize;Me++)S(se.location+Me);s.bindBuffer(s.ARRAY_BUFFER,me);for(let Me=0;Me<se.locationSize;Me++)A(se.location+Me,le/se.locationSize,pe,$,F*Ue,(wt+le/se.locationSize*Me)*Ue,Te)}else{if(W.isInstancedBufferAttribute){for(let Xe=0;Xe<se.locationSize;Xe++)C(se.location+Xe,W.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Xe=0;Xe<se.locationSize;Xe++)S(se.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,me);for(let Xe=0;Xe<se.locationSize;Xe++)A(se.location+Xe,le/se.locationSize,pe,$,le*Ue,le/se.locationSize*Xe*Ue,Te)}}else if(K!==void 0){const $=K[ie];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(se.location,$);break;case 3:s.vertexAttrib3fv(se.location,$);break;case 4:s.vertexAttrib4fv(se.location,$);break;default:s.vertexAttrib1fv(se.location,$)}}}}T()}function v(){H();for(const L in a){const U=a[L];for(const V in U){const j=U[V];for(const q in j)g(j[q].object),delete j[q];delete U[V]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const U=a[L.id];for(const V in U){const j=U[V];for(const q in j)g(j[q].object),delete j[q];delete U[V]}delete a[L.id]}function N(L){for(const U in a){const V=a[U];if(V[L.id]===void 0)continue;const j=V[L.id];for(const q in j)g(j[q].object),delete j[q];delete V[L.id]}}function H(){X(),h=!0,l!==c&&(l=c,p(l.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:H,resetDefaultState:X,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function Md(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Sd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=o||e.has("OES_texture_float"),C=x&&S,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:T}}function wd(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new bn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,x=y*4;let S=f.clippingState||null;c.value=S,S=h(g,d,x,p);for(let C=0;C!==x;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ed(s){let e=new WeakMap;function t(o,a){return a===ar?o.mapping=ci:a===cr&&(o.mapping=li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ar||a===cr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fa extends Ia{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,Do=[.125,.215,.35,.446,.526,.582],Cn=20,Ks=new Fa,Io=new Re;let $s=null,Zs=0,Js=0;const Tn=(1+Math.sqrt(5))/2,Zn=1/Tn,Uo=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Tn,Zn),new R(0,Tn,-Zn),new R(Zn,0,Tn),new R(-Zn,0,Tn),new R(Tn,Zn,0),new R(-Tn,Zn,0)];class No{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s,Zs,Js),e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ti,format:qt,colorSpace:rn,depthBuffer:!1},i=Fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bd(r)),this._blurMaterial=Td(r,e,t)}return i}_compileMaterial(e){const t=new z(this._lodPlanes[0],e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,n,i){const a=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Io),h.toneMapping=mn,h.autoClear=!1;const p=new In({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new z(new ee,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Io),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):y===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;Qi(i,y*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ci||e.mapping===li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Qi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ks)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Uo[(i-1)%Uo.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new z(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Cn;m>Cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cn}`);const f=[];let y=0;for(let A=0;A<Cn;++A){const I=A/_,v=Math.exp(-I*I/2);f.push(v),A===0?y+=v:A<m&&(y+=2*v)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[i],C=3*S*(i>x-ni?i-x+ni:0),T=4*(this._cubeSize-S);Qi(t,C,T,3*S,2*S),c.setRenderTarget(t),c.render(u,Ks)}}function bd(s){const e=[],t=[],n=[];let i=s;const r=s-ni+1+Do.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ni?c=Do[o-s+ni-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,I=T>2?0:-1,v=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(v,_*g*T),x.set(d,m*g*T);const w=[T,T,T,T,T,T];S.set(w,f*g*T)}const C=new mt;C.setAttribute("position",new St(y,_)),C.setAttribute("uv",new St(x,m)),C.setAttribute("faceIndex",new St(S,f)),e.push(C),i>ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fo(s,e,t){const n=new Dn(s,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Td(s,e,t){const n=new Float32Array(Cn),i=new R(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Bo(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Oo(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Mr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ad(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ar||c===cr,h=c===ci||c===li;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new No(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new No(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rd(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,S=y.length;x<S;x+=3){const C=y[x+0],T=y[x+1],A=y[x+2];d.push(C,T,T,A,A,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const C=x+0,T=x+1,A=x+2;d.push(C,T,T,A,A,C)}}else return;const m=new(ba(d)?La:Pa)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pd(s,e,t,n){const i=n.isWebGL2;let r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){s.drawElements(r,g,a,p*c),t.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*c,_),t.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y];t.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ld(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dd(s,e){return s[0]-e[0]}function Id(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ud(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new et,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let U=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var p=U;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),C===!0&&(v=3);let w=h.attributes.position.count*v,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const H=new Float32Array(w*N*4*_),X=new Ca(H,w,N,_);X.type=fn,X.needsUpdate=!0;const L=v*4;for(let V=0;V<_;V++){const j=T[V],q=A[V],Y=I[V],K=w*N*4*V;for(let ie=0;ie<j.count;ie++){const se=ie*L;x===!0&&(o.fromBufferAttribute(j,ie),H[K+se+0]=o.x,H[K+se+1]=o.y,H[K+se+2]=o.z,H[K+se+3]=0),S===!0&&(o.fromBufferAttribute(q,ie),H[K+se+4]=o.x,H[K+se+5]=o.y,H[K+se+6]=o.z,H[K+se+7]=0),C===!0&&(o.fromBufferAttribute(Y,ie),H[K+se+8]=o.x,H[K+se+9]=o.y,H[K+se+10]=o.z,H[K+se+11]=Y.itemSize===4?o.w:1)}}m={count:_,texture:X,size:new we(w,N)},r.set(h,m),h.addEventListener("dispose",U)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const C=_[S];C[0]=S,C[1]=d[S]}_.sort(Id);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Dd);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const C=a[S],T=C[0],A=C[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+S)!==m[T]&&h.setAttribute("morphTarget"+S,m[T]),f&&h.getAttribute("morphNormal"+S)!==f[T]&&h.setAttribute("morphNormal"+S,f[T]),i[S]=A,y+=A):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const x=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Nd(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Ba extends Pt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Pn,h!==Pn&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pn&&(n=dn),n===void 0&&h===hi&&(n=Rn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=c!==void 0?c:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Oa=new Pt,ka=new Ba(1,1);ka.compareFunction=Ea;const za=new Ca,Ha=new xl,Ga=new Ua,ko=[],zo=[],Ho=new Float32Array(16),Go=new Float32Array(9),Vo=new Float32Array(4);function pi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ko[i];if(r===void 0&&(r=new Float32Array(i),ko[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ys(s,e){let t=zo[e];t===void 0&&(t=new Int32Array(e),zo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Fd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Bd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2fv(this.addr,e),lt(t,e)}}function Od(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;s.uniform3fv(this.addr,e),lt(t,e)}}function kd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4fv(this.addr,e),lt(t,e)}}function zd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ct(t,n))return;Vo.set(n),s.uniformMatrix2fv(this.addr,!1,Vo),lt(t,n)}}function Hd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ct(t,n))return;Go.set(n),s.uniformMatrix3fv(this.addr,!1,Go),lt(t,n)}}function Gd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ct(t,n))return;Ho.set(n),s.uniformMatrix4fv(this.addr,!1,Ho),lt(t,n)}}function Vd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2iv(this.addr,e),lt(t,e)}}function Xd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;s.uniform3iv(this.addr,e),lt(t,e)}}function qd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4iv(this.addr,e),lt(t,e)}}function jd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Yd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2uiv(this.addr,e),lt(t,e)}}function Kd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;s.uniform3uiv(this.addr,e),lt(t,e)}}function $d(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4uiv(this.addr,e),lt(t,e)}}function Zd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?ka:Oa;t.setTexture2D(e||r,i)}function Jd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ha,i)}function Qd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ga,i)}function ef(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||za,i)}function tf(s){switch(s){case 5126:return Fd;case 35664:return Bd;case 35665:return Od;case 35666:return kd;case 35674:return zd;case 35675:return Hd;case 35676:return Gd;case 5124:case 35670:return Vd;case 35667:case 35671:return Wd;case 35668:case 35672:return Xd;case 35669:case 35673:return qd;case 5125:return jd;case 36294:return Yd;case 36295:return Kd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return ef}}function nf(s,e){s.uniform1fv(this.addr,e)}function sf(s,e){const t=pi(e,this.size,2);s.uniform2fv(this.addr,t)}function rf(s,e){const t=pi(e,this.size,3);s.uniform3fv(this.addr,t)}function of(s,e){const t=pi(e,this.size,4);s.uniform4fv(this.addr,t)}function af(s,e){const t=pi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function cf(s,e){const t=pi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function lf(s,e){const t=pi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function hf(s,e){s.uniform1iv(this.addr,e)}function uf(s,e){s.uniform2iv(this.addr,e)}function df(s,e){s.uniform3iv(this.addr,e)}function ff(s,e){s.uniform4iv(this.addr,e)}function pf(s,e){s.uniform1uiv(this.addr,e)}function mf(s,e){s.uniform2uiv(this.addr,e)}function gf(s,e){s.uniform3uiv(this.addr,e)}function _f(s,e){s.uniform4uiv(this.addr,e)}function vf(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Oa,r[o])}function xf(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ha,r[o])}function yf(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ga,r[o])}function Mf(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||za,r[o])}function Sf(s){switch(s){case 5126:return nf;case 35664:return sf;case 35665:return rf;case 35666:return of;case 35674:return af;case 35675:return cf;case 35676:return lf;case 5124:case 35670:return hf;case 35667:case 35671:return uf;case 35668:case 35672:return df;case 35669:case 35673:return ff;case 5125:return pf;case 36294:return mf;case 36295:return gf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Mf}}class wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tf(t.type)}}class Ef{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sf(t.type)}}class bf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function Wo(s,e){s.seq.push(e),s.map[e.id]=e}function Tf(s,e,t){const n=s.name,i=n.length;for(Qs.lastIndex=0;;){const r=Qs.exec(n),o=Qs.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Wo(t,l===void 0?new wf(a,s,e):new Ef(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new bf(a),Wo(t,u)),t=u}}}class rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Tf(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Af=37297;let Cf=0;function Rf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Pf(s){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(s);let n;switch(e===t?n="":e===hs&&t===ls?n="LinearDisplayP3ToLinearSRGB":e===ls&&t===hs&&(n="LinearSRGBToLinearDisplayP3"),s){case rn:case vs:return[n,"LinearTransferOETF"];case _t:case _r:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function qo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Rf(s.getShaderSource(e),o)}else return i}function Lf(s,e){const t=Pf(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Df(s,e){let t;switch(e){case Cc:t="Linear";break;case Rc:t="Reinhard";break;case Pc:t="OptimizedCineon";break;case Lc:t="ACESFilmic";break;case Ic:t="AgX";break;case Dc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function If(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function Uf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ii).join(`
`)}function Nf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ff(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ii(s){return s!==""}function jo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function dr(s){return s.replace(Bf,kf)}const Of=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kf(s,e){let t=Fe[e];if(t===void 0){const n=Of.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dr(t)}const zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ko(s){return s.replace(zf,Hf)}function Hf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $o(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gf(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pa?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ci:case li:e="ENVMAP_TYPE_CUBE";break;case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function Xf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ms:e="ENVMAP_BLENDING_MULTIPLY";break;case Tc:e="ENVMAP_BLENDING_MIX";break;case Ac:e="ENVMAP_BLENDING_ADD";break}return e}function qf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jf(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Gf(t),l=Vf(t),h=Wf(t),u=Xf(t),d=qf(t),p=t.isWebGL2?"":If(t),g=Uf(t),_=Nf(r),m=i.createProgram();let f,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ii).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ii).join(`
`),y.length>0&&(y+=`
`)):(f=[$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),y=[p,$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==mn?Df("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Lf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ii).join(`
`)),o=dr(o),o=jo(o,t),o=Yo(o,t),a=dr(a),a=jo(a,t),a=Yo(a,t),o=Ko(o),a=Ko(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=x+f+o,C=x+y+a,T=Xo(i,i.VERTEX_SHADER,S),A=Xo(i,i.FRAGMENT_SHADER,C);i.attachShader(m,T),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(H){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(T).trim(),U=i.getShaderInfoLog(A).trim();let V=!0,j=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,A);else{const q=qo(i,T,"vertex"),Y=qo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+q+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(L===""||U==="")&&(j=!1);j&&(H.diagnostics={runnable:V,programLog:X,vertexShader:{log:L,prefix:f},fragmentShader:{log:U,prefix:y}})}i.deleteShader(T),i.deleteShader(A),v=new rs(i,m),w=Ff(i,m)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,Af)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cf++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let Yf=0;class Kf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $f(e),t.set(e,n)),n}}class $f{constructor(e){this.id=Yf++,this.code=e,this.usedTimes=0}}function Zf(s,e,t,n,i,r,o){const a=new xr,c=new Kf,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,w,N,H,X){const L=H.fog,U=X.geometry,V=v.isMeshStandardMaterial?H.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),q=j&&j.mapping===gs?j.image.height:null,Y=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ie=K!==void 0?K.length:0;let se=0;U.morphAttributes.position!==void 0&&(se=1),U.morphAttributes.normal!==void 0&&(se=2),U.morphAttributes.color!==void 0&&(se=3);let W,$,le,_e;if(Y){const Et=Yt[Y];W=Et.vertexShader,$=Et.fragmentShader}else W=v.vertexShader,$=v.fragmentShader,c.update(v),le=c.getVertexShaderID(v),_e=c.getFragmentShaderID(v);const me=s.getRenderTarget(),pe=X.isInstancedMesh===!0,Ue=X.isBatchedMesh===!0,Te=!!v.map,Xe=!!v.matcap,F=!!j,wt=!!v.aoMap,Me=!!v.lightMap,Le=!!v.bumpMap,ge=!!v.normalMap,tt=!!v.displacementMap,Be=!!v.emissiveMap,b=!!v.metalnessMap,M=!!v.roughnessMap,O=v.anisotropy>0,te=v.clearcoat>0,Q=v.iridescence>0,ne=v.sheen>0,ve=v.transmission>0,he=O&&!!v.anisotropyMap,de=te&&!!v.clearcoatMap,be=te&&!!v.clearcoatNormalMap,Oe=te&&!!v.clearcoatRoughnessMap,J=Q&&!!v.iridescenceMap,je=Q&&!!v.iridescenceThicknessMap,Ve=ne&&!!v.sheenColorMap,Pe=ne&&!!v.sheenRoughnessMap,ye=!!v.specularMap,fe=!!v.specularColorMap,Ne=!!v.specularIntensityMap,qe=ve&&!!v.transmissionMap,it=ve&&!!v.thicknessMap,ze=!!v.gradientMap,re=!!v.alphaMap,P=v.alphaTest>0,ae=!!v.alphaHash,ce=!!v.extensions,Ae=!!U.attributes.uv1,Se=!!U.attributes.uv2,Ke=!!U.attributes.uv3;let $e=mn;return v.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&($e=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:$,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ue,instancing:pe,instancingColor:pe&&X.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:rn,map:Te,matcap:Xe,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:q,aoMap:wt,lightMap:Me,bumpMap:Le,normalMap:ge,displacementMap:d&&tt,emissiveMap:Be,normalMapObjectSpace:ge&&v.normalMapType===qc,normalMapTangentSpace:ge&&v.normalMapType===_s,metalnessMap:b,roughnessMap:M,anisotropy:O,anisotropyMap:he,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:be,clearcoatRoughnessMap:Oe,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:je,sheen:ne,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:ye,specularColorMap:fe,specularIntensityMap:Ne,transmission:ve,transmissionMap:qe,thicknessMap:it,gradientMap:ze,opaque:v.transparent===!1&&v.blending===si,alphaMap:re,alphaTest:P,alphaHash:ae,combine:v.combine,mapUv:Te&&_(v.map.channel),aoMapUv:wt&&_(v.aoMap.channel),lightMapUv:Me&&_(v.lightMap.channel),bumpMapUv:Le&&_(v.bumpMap.channel),normalMapUv:ge&&_(v.normalMap.channel),displacementMapUv:tt&&_(v.displacementMap.channel),emissiveMapUv:Be&&_(v.emissiveMap.channel),metalnessMapUv:b&&_(v.metalnessMap.channel),roughnessMapUv:M&&_(v.roughnessMap.channel),anisotropyMapUv:he&&_(v.anisotropyMap.channel),clearcoatMapUv:de&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(v.sheenRoughnessMap.channel),specularMapUv:ye&&_(v.specularMap.channel),specularColorMapUv:fe&&_(v.specularColorMap.channel),specularIntensityMapUv:Ne&&_(v.specularIntensityMap.channel),transmissionMapUv:qe&&_(v.transmissionMap.channel),thicknessMapUv:it&&_(v.thicknessMap.channel),alphaMapUv:re&&_(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ge||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Se,vertexUv3s:Ke,pointsUvs:X.isPoints===!0&&!!U.attributes.uv&&(Te||re),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Te&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===Je,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ot,flipSided:v.side===Rt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ce&&v.extensions.derivatives===!0,extensionFragDepth:ce&&v.extensions.fragDepth===!0,extensionDrawBuffers:ce&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)w.push(N),w.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(y(w,v),x(w,v),w.push(s.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function S(v){const w=g[v.type];let N;if(w){const H=Yt[w];N=Dl.clone(H.uniforms)}else N=v.uniforms;return N}function C(v,w){let N;for(let H=0,X=l.length;H<X;H++){const L=l[H];if(L.cacheKey===w){N=L,++N.usedTimes;break}}return N===void 0&&(N=new jf(s,w,v,r),l.push(N)),N}function T(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function A(v){c.remove(v)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:I}}function Jf(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Qf),n.length>1&&n.sort(d||Zo),i.length>1&&i.sort(d||Zo)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function ep(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Jo,s.set(n,[o])):i>=r.length?(o=new Jo,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function tp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function np(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ip=0;function sp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function rp(s,e){const t=new tp,n=np(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,o=new rt,a=new rt;function c(h,u){let d=0,p=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,m=0,f=0,y=0,x=0,S=0,C=0,T=0,A=0,I=0,v=0;h.sort(sp);const w=u===!0?Math.PI:1;for(let H=0,X=h.length;H<X;H++){const L=h[H],U=L.color,V=L.intensity,j=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*V*w,p+=U.g*V*w,g+=U.b*V*w;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],V);v++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const K=L.shadow,ie=n.get(L);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.directionalShadow[_]=ie,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=L.shadow.matrix,S++}i.directional[_]=Y,_++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(U).multiplyScalar(V*w),Y.distance=j,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[f]=Y;const K=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[f]=K.matrix,L.castShadow){const ie=n.get(L);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.spotShadow[f]=ie,i.spotShadowMap[f]=q,T++}f++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(U).multiplyScalar(V),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=Y,y++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*w),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const K=L.shadow,ie=n.get(L);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,ie.shadowCameraNear=K.camera.near,ie.shadowCameraFar=K.camera.far,i.pointShadow[m]=ie,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,C++}i.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(V*w),Y.groundColor.copy(L.groundColor).multiplyScalar(V*w),i.hemi[x]=Y,x++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==y||N.hemiLength!==x||N.numDirectionalShadows!==S||N.numPointShadows!==C||N.numSpotShadows!==T||N.numSpotMaps!==A||N.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=T+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=v,N.directionalLength=_,N.pointLength=m,N.spotLength=f,N.rectAreaLength=y,N.hemiLength=x,N.numDirectionalShadows=S,N.numPointShadows=C,N.numSpotShadows=T,N.numSpotMaps=A,N.numLightProbes=v,i.version=ip++)}function l(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const S=h[y];if(S.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(S.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function Qo(s,e){const t=new rp(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function op(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Qo(s,e),t.set(r,[c])):o>=a.length?(c=new Qo(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class ap extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cp extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function up(s,e,t){let n=new yr;const i=new we,r=new we,o=new et,a=new ap({depthPacking:Xc}),c=new cp,l={},h=t.maxTextureSize,u={[_n]:Rt,[Rt]:_n,[Ot]:Ot},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:lp,fragmentShader:hp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new mt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new z(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let f=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const v=s.getRenderTarget(),w=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),H=s.state;H.setBlending(pn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const X=f!==nn&&this.type===nn,L=f===nn&&this.type!==nn;for(let U=0,V=T.length;U<V;U++){const j=T[U],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Y=q.getFrameExtents();if(i.multiply(Y),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||X===!0||L===!0){const ie=this.type!==nn?{minFilter:Mt,magFilter:Mt}:{};q.map!==null&&q.map.dispose(),q.map=new Dn(i.x,i.y,ie),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const K=q.getViewportCount();for(let ie=0;ie<K;ie++){const se=q.getViewport(ie);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),H.viewport(o),q.updateMatrices(j,ie),n=q.getFrustum(),S(A,I,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===nn&&y(q,I),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(v,w,N)};function y(T,A){const I=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Dn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,I,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,I,p,_,null)}function x(T,A,I,v){let w=null;const N=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)w=N;else if(w=I.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=w.uuid,X=A.uuid;let L=l[H];L===void 0&&(L={},l[H]=L);let U=L[X];U===void 0&&(U=w.clone(),L[X]=U,A.addEventListener("dispose",C)),w=U}if(w.visible=A.visible,w.wireframe=A.wireframe,v===nn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=s.properties.get(w);H.light=I}return w}function S(T,A,I,v,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const X=e.update(T),L=T.material;if(Array.isArray(L)){const U=X.groups;for(let V=0,j=U.length;V<j;V++){const q=U[V],Y=L[q.materialIndex];if(Y&&Y.visible){const K=x(T,Y,v,w);T.onBeforeShadow(s,T,A,I,X,K,q),s.renderBufferDirect(I,null,X,K,T,q),T.onAfterShadow(s,T,A,I,X,K,q)}}}else if(L.visible){const U=x(T,L,v,w);T.onBeforeShadow(s,T,A,I,X,U,null),s.renderBufferDirect(I,null,X,U,T,null),T.onAfterShadow(s,T,A,I,X,U,null)}}const H=T.children;for(let X=0,L=H.length;X<L;X++)S(H[X],A,I,v,w)}function C(T){T.target.removeEventListener("dispose",C);for(const I in l){const v=l[I],w=T.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function dp(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new et;let ce=null;const Ae=new et(0,0,0,0);return{setMask:function(Se){ce!==Se&&!P&&(s.colorMask(Se,Se,Se,Se),ce=Se)},setLocked:function(Se){P=Se},setClear:function(Se,Ke,$e,ht,Et){Et===!0&&(Se*=ht,Ke*=ht,$e*=ht),ae.set(Se,Ke,$e,ht),Ae.equals(ae)===!1&&(s.clearColor(Se,Ke,$e,ht),Ae.copy(ae))},reset:function(){P=!1,ce=null,Ae.set(-1,0,0,0)}}}function r(){let P=!1,ae=null,ce=null,Ae=null;return{setTest:function(Se){Se?Ue(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Se){ae!==Se&&!P&&(s.depthMask(Se),ae=Se)},setFunc:function(Se){if(ce!==Se){switch(Se){case xc:s.depthFunc(s.NEVER);break;case yc:s.depthFunc(s.ALWAYS);break;case Mc:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case Sc:s.depthFunc(s.EQUAL);break;case wc:s.depthFunc(s.GEQUAL);break;case Ec:s.depthFunc(s.GREATER);break;case bc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Se}},setLocked:function(Se){P=Se},setClear:function(Se){Ae!==Se&&(s.clearDepth(Se),Ae=Se)},reset:function(){P=!1,ae=null,ce=null,Ae=null}}}function o(){let P=!1,ae=null,ce=null,Ae=null,Se=null,Ke=null,$e=null,ht=null,Et=null;return{setTest:function(Ze){P||(Ze?Ue(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!P&&(s.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,bt,jt){(ce!==Ze||Ae!==bt||Se!==jt)&&(s.stencilFunc(Ze,bt,jt),ce=Ze,Ae=bt,Se=jt)},setOp:function(Ze,bt,jt){(Ke!==Ze||$e!==bt||ht!==jt)&&(s.stencilOp(Ze,bt,jt),Ke=Ze,$e=bt,ht=jt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){Et!==Ze&&(s.clearStencil(Ze),Et=Ze)},reset:function(){P=!1,ae=null,ce=null,Ae=null,Se=null,Ke=null,$e=null,ht=null,Et=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,x=null,S=null,C=null,T=null,A=null,I=null,v=new Re(0,0,0),w=0,N=!1,H=null,X=null,L=null,U=null,V=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=Y>=2);let ie=null,se={};const W=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),le=new et().fromArray(W),_e=new et().fromArray($);function me(P,ae,ce,Ae){const Se=new Uint8Array(4),Ke=s.createTexture();s.bindTexture(P,Ke),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ce;$e++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(ae+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return Ke}const pe={};pe[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ue(s.DEPTH_TEST),c.setFunc(os),Be(!1),b(Ur),Ue(s.CULL_FACE),ge(pn);function Ue(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function Te(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function Xe(P,ae){return p[P]!==ae?(s.bindFramebuffer(P,ae),p[P]=ae,n&&(P===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=ae),P===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function F(P,ae){let ce=_,Ae=!1;if(P)if(ce=g.get(ae),ce===void 0&&(ce=[],g.set(ae,ce)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(ce.length!==Se.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Ke=0,$e=Se.length;Ke<$e;Ke++)ce[Ke]=s.COLOR_ATTACHMENT0+Ke;ce.length=Se.length,Ae=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Ae=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Ae=!0);Ae&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function wt(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const Me={[An]:s.FUNC_ADD,[sc]:s.FUNC_SUBTRACT,[rc]:s.FUNC_REVERSE_SUBTRACT};if(n)Me[Br]=s.MIN,Me[Or]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Me[Br]=P.MIN_EXT,Me[Or]=P.MAX_EXT)}const Le={[oc]:s.ZERO,[ac]:s.ONE,[cc]:s.SRC_COLOR,[rr]:s.SRC_ALPHA,[pc]:s.SRC_ALPHA_SATURATE,[dc]:s.DST_COLOR,[hc]:s.DST_ALPHA,[lc]:s.ONE_MINUS_SRC_COLOR,[or]:s.ONE_MINUS_SRC_ALPHA,[fc]:s.ONE_MINUS_DST_COLOR,[uc]:s.ONE_MINUS_DST_ALPHA,[mc]:s.CONSTANT_COLOR,[gc]:s.ONE_MINUS_CONSTANT_COLOR,[_c]:s.CONSTANT_ALPHA,[vc]:s.ONE_MINUS_CONSTANT_ALPHA};function ge(P,ae,ce,Ae,Se,Ke,$e,ht,Et,Ze){if(P===pn){f===!0&&(Te(s.BLEND),f=!1);return}if(f===!1&&(Ue(s.BLEND),f=!0),P!==ic){if(P!==y||Ze!==N){if((x!==An||T!==An)&&(s.blendEquation(s.FUNC_ADD),x=An,T=An),Ze)switch(P){case si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sr:s.blendFunc(s.ONE,s.ONE);break;case Nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,C=null,A=null,I=null,v.set(0,0,0),w=0,y=P,N=Ze}return}Se=Se||ae,Ke=Ke||ce,$e=$e||Ae,(ae!==x||Se!==T)&&(s.blendEquationSeparate(Me[ae],Me[Se]),x=ae,T=Se),(ce!==S||Ae!==C||Ke!==A||$e!==I)&&(s.blendFuncSeparate(Le[ce],Le[Ae],Le[Ke],Le[$e]),S=ce,C=Ae,A=Ke,I=$e),(ht.equals(v)===!1||Et!==w)&&(s.blendColor(ht.r,ht.g,ht.b,Et),v.copy(ht),w=Et),y=P,N=!1}function tt(P,ae){P.side===Ot?Te(s.CULL_FACE):Ue(s.CULL_FACE);let ce=P.side===Rt;ae&&(ce=!ce),Be(ce),P.blending===si&&P.transparent===!1?ge(pn):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ae=P.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),O(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ue(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){H!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),H=P)}function b(P){P!==Qa?(Ue(s.CULL_FACE),P!==X&&(P===Ur?s.cullFace(s.BACK):P===ec?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),X=P}function M(P){P!==L&&(q&&s.lineWidth(P),L=P)}function O(P,ae,ce){P?(Ue(s.POLYGON_OFFSET_FILL),(U!==ae||V!==ce)&&(s.polygonOffset(ae,ce),U=ae,V=ce)):Te(s.POLYGON_OFFSET_FILL)}function te(P){P?Ue(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function Q(P){P===void 0&&(P=s.TEXTURE0+j-1),ie!==P&&(s.activeTexture(P),ie=P)}function ne(P,ae,ce){ce===void 0&&(ie===null?ce=s.TEXTURE0+j-1:ce=ie);let Ae=se[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},se[ce]=Ae),(Ae.type!==P||Ae.texture!==ae)&&(ie!==ce&&(s.activeTexture(ce),ie=ce),s.bindTexture(P,ae||pe[P]),Ae.type=P,Ae.texture=ae)}function ve(){const P=se[ie];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(P){le.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),le.copy(P))}function qe(P){_e.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function it(P,ae){let ce=u.get(ae);ce===void 0&&(ce=new WeakMap,u.set(ae,ce));let Ae=ce.get(P);Ae===void 0&&(Ae=s.getUniformBlockIndex(ae,P.name),ce.set(P,Ae))}function ze(P,ae){const Ae=u.get(ae).get(P);h.get(ae)!==Ae&&(s.uniformBlockBinding(ae,Ae,P.__bindingPointIndex),h.set(ae,Ae))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ie=null,se={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,x=null,S=null,C=null,T=null,A=null,I=null,v=new Re(0,0,0),w=0,N=!1,H=null,X=null,L=null,U=null,V=null,le.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ue,disable:Te,bindFramebuffer:Xe,drawBuffers:F,useProgram:wt,setBlending:ge,setMaterial:tt,setFlipSided:Be,setCullFace:b,setLineWidth:M,setPolygonOffset:O,setScissorTest:te,activeTexture:Q,bindTexture:ne,unbindTexture:ve,compressedTexImage2D:he,compressedTexImage3D:de,texImage2D:ye,texImage3D:fe,updateUBOMapping:it,uniformBlockBinding:ze,texStorage2D:Ve,texStorage3D:Pe,texSubImage2D:be,texSubImage3D:Oe,compressedTexSubImage2D:J,compressedTexSubImage3D:je,scissor:Ne,viewport:qe,reset:re}}function fp(s,e,t,n,i,r,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):fs("canvas")}function _(b,M,O,te){let Q=1;if((b.width>te||b.height>te)&&(Q=te/Math.max(b.width,b.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=M?ds:Math.floor,ve=ne(Q*b.width),he=ne(Q*b.height);u===void 0&&(u=g(ve,he));const de=O?g(ve,he):u;return de.width=ve,de.height=he,de.getContext("2d").drawImage(b,0,0,ve,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+he+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ur(b.width)&&ur(b.height)}function f(b){return a?!1:b.wrapS!==Xt||b.wrapT!==Xt||b.minFilter!==Mt&&b.minFilter!==Bt}function y(b,M){return b.generateMipmaps&&M&&b.minFilter!==Mt&&b.minFilter!==Bt}function x(b){s.generateMipmap(b)}function S(b,M,O,te,Q=!1){if(a===!1)return M;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=M;if(M===s.RED&&(O===s.FLOAT&&(ne=s.R32F),O===s.HALF_FLOAT&&(ne=s.R16F),O===s.UNSIGNED_BYTE&&(ne=s.R8)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(ne=s.R8UI),O===s.UNSIGNED_SHORT&&(ne=s.R16UI),O===s.UNSIGNED_INT&&(ne=s.R32UI),O===s.BYTE&&(ne=s.R8I),O===s.SHORT&&(ne=s.R16I),O===s.INT&&(ne=s.R32I)),M===s.RG&&(O===s.FLOAT&&(ne=s.RG32F),O===s.HALF_FLOAT&&(ne=s.RG16F),O===s.UNSIGNED_BYTE&&(ne=s.RG8)),M===s.RGBA){const ve=Q?cs:Ye.getTransfer(te);O===s.FLOAT&&(ne=s.RGBA32F),O===s.HALF_FLOAT&&(ne=s.RGBA16F),O===s.UNSIGNED_BYTE&&(ne=ve===Je?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(b,M,O){return y(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==Mt&&b.minFilter!==Bt?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function T(b){return b===Mt||b===kr||b===Ts?s.NEAREST:s.LINEAR}function A(b){const M=b.target;M.removeEventListener("dispose",A),v(M),M.isVideoTexture&&h.delete(M)}function I(b){const M=b.target;M.removeEventListener("dispose",I),N(M)}function v(b){const M=n.get(b);if(M.__webglInit===void 0)return;const O=b.source,te=d.get(O);if(te){const Q=te[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(b),Object.keys(te).length===0&&d.delete(O)}n.remove(b)}function w(b){const M=n.get(b);s.deleteTexture(M.__webglTexture);const O=b.source,te=d.get(O);delete te[M.__cacheKey],o.memory.textures--}function N(b){const M=b.texture,O=n.get(b),te=n.get(M);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(O.__webglFramebuffer[Q]))for(let ne=0;ne<O.__webglFramebuffer[Q].length;ne++)s.deleteFramebuffer(O.__webglFramebuffer[Q][ne]);else s.deleteFramebuffer(O.__webglFramebuffer[Q]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[Q])}else{if(Array.isArray(O.__webglFramebuffer))for(let Q=0;Q<O.__webglFramebuffer.length;Q++)s.deleteFramebuffer(O.__webglFramebuffer[Q]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,ne=M.length;Q<ne;Q++){const ve=n.get(M[Q]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(b)}let H=0;function X(){H=0}function L(){const b=H;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),H+=1,b}function U(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function V(b,M){const O=n.get(b);if(b.isVideoTexture&&tt(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(O,b,M);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function j(b,M){const O=n.get(b);if(b.version>0&&O.__version!==b.version){le(O,b,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function q(b,M){const O=n.get(b);if(b.version>0&&O.__version!==b.version){le(O,b,M);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function Y(b,M){const O=n.get(b);if(b.version>0&&O.__version!==b.version){_e(O,b,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}const K={[as]:s.REPEAT,[Xt]:s.CLAMP_TO_EDGE,[lr]:s.MIRRORED_REPEAT},ie={[Mt]:s.NEAREST,[kr]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},se={[jc]:s.NEVER,[Qc]:s.ALWAYS,[Yc]:s.LESS,[Ea]:s.LEQUAL,[Kc]:s.EQUAL,[Jc]:s.GEQUAL,[$c]:s.GREATER,[Zc]:s.NOTEQUAL};function W(b,M,O){if(O?(s.texParameteri(b,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,K[M.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ie[M.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ie[M.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==Xt||M.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,T(M.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Mt&&M.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Mt||M.minFilter!==Ts&&M.minFilter!==bi||M.type===fn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function $(b,M){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));const te=M.source;let Q=d.get(te);Q===void 0&&(Q={},d.set(te,Q));const ne=U(M);if(ne!==b.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[ne].usedTimes++;const ve=Q[b.__cacheKey];ve!==void 0&&(Q[b.__cacheKey].usedTimes--,ve.usedTimes===0&&w(M)),b.__cacheKey=ne,b.__webglTexture=Q[ne].texture}return O}function le(b,M,O){let te=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=s.TEXTURE_3D);const Q=$(b,M),ne=M.source;t.bindTexture(te,b.__webglTexture,s.TEXTURE0+O);const ve=n.get(ne);if(ne.version!==ve.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const he=Ye.getPrimaries(Ye.workingColorSpace),de=M.colorSpace===kt?null:Ye.getPrimaries(M.colorSpace),be=M.colorSpace===kt||he===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Oe=f(M)&&m(M.image)===!1;let J=_(M.image,Oe,!1,i.maxTextureSize);J=Be(M,J);const je=m(J)||a,Ve=r.convert(M.format,M.colorSpace);let Pe=r.convert(M.type),ye=S(M.internalFormat,Ve,Pe,M.colorSpace,M.isVideoTexture);W(te,M,je);let fe;const Ne=M.mipmaps,qe=a&&M.isVideoTexture!==!0&&ye!==Sa,it=ve.__version===void 0||Q===!0,ze=C(M,J,je);if(M.isDepthTexture)ye=s.DEPTH_COMPONENT,a?M.type===fn?ye=s.DEPTH_COMPONENT32F:M.type===dn?ye=s.DEPTH_COMPONENT24:M.type===Rn?ye=s.DEPTH24_STENCIL8:ye=s.DEPTH_COMPONENT16:M.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Pn&&ye===s.DEPTH_COMPONENT&&M.type!==gr&&M.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=dn,Pe=r.convert(M.type)),M.format===hi&&ye===s.DEPTH_COMPONENT&&(ye=s.DEPTH_STENCIL,M.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Rn,Pe=r.convert(M.type))),it&&(qe?t.texStorage2D(s.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,ye,J.width,J.height,0,Ve,Pe,null));else if(M.isDataTexture)if(Ne.length>0&&je){qe&&it&&t.texStorage2D(s.TEXTURE_2D,ze,ye,Ne[0].width,Ne[0].height);for(let re=0,P=Ne.length;re<P;re++)fe=Ne[re],qe?t.texSubImage2D(s.TEXTURE_2D,re,0,0,fe.width,fe.height,Ve,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,re,ye,fe.width,fe.height,0,Ve,Pe,fe.data);M.generateMipmaps=!1}else qe?(it&&t.texStorage2D(s.TEXTURE_2D,ze,ye,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Ve,Pe,J.data)):t.texImage2D(s.TEXTURE_2D,0,ye,J.width,J.height,0,Ve,Pe,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,ye,Ne[0].width,Ne[0].height,J.depth);for(let re=0,P=Ne.length;re<P;re++)fe=Ne[re],M.format!==qt?Ve!==null?qe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,J.depth,Ve,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,ye,fe.width,fe.height,J.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,J.depth,Ve,Pe,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,ye,fe.width,fe.height,J.depth,0,Ve,Pe,fe.data)}else{qe&&it&&t.texStorage2D(s.TEXTURE_2D,ze,ye,Ne[0].width,Ne[0].height);for(let re=0,P=Ne.length;re<P;re++)fe=Ne[re],M.format!==qt?Ve!==null?qe?t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,fe.width,fe.height,Ve,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,re,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(s.TEXTURE_2D,re,0,0,fe.width,fe.height,Ve,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,re,ye,fe.width,fe.height,0,Ve,Pe,fe.data)}else if(M.isDataArrayTexture)qe?(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,ye,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ve,Pe,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,Ve,Pe,J.data);else if(M.isData3DTexture)qe?(it&&t.texStorage3D(s.TEXTURE_3D,ze,ye,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ve,Pe,J.data)):t.texImage3D(s.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,Ve,Pe,J.data);else if(M.isFramebufferTexture){if(it)if(qe)t.texStorage2D(s.TEXTURE_2D,ze,ye,J.width,J.height);else{let re=J.width,P=J.height;for(let ae=0;ae<ze;ae++)t.texImage2D(s.TEXTURE_2D,ae,ye,re,P,0,Ve,Pe,null),re>>=1,P>>=1}}else if(Ne.length>0&&je){qe&&it&&t.texStorage2D(s.TEXTURE_2D,ze,ye,Ne[0].width,Ne[0].height);for(let re=0,P=Ne.length;re<P;re++)fe=Ne[re],qe?t.texSubImage2D(s.TEXTURE_2D,re,0,0,Ve,Pe,fe):t.texImage2D(s.TEXTURE_2D,re,ye,Ve,Pe,fe);M.generateMipmaps=!1}else qe?(it&&t.texStorage2D(s.TEXTURE_2D,ze,ye,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,Pe,J)):t.texImage2D(s.TEXTURE_2D,0,ye,Ve,Pe,J);y(M,je)&&x(te),ve.__version=ne.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function _e(b,M,O){if(M.image.length!==6)return;const te=$(b,M),Q=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const ne=n.get(Q);if(Q.version!==ne.__version||te===!0){t.activeTexture(s.TEXTURE0+O);const ve=Ye.getPrimaries(Ye.workingColorSpace),he=M.colorSpace===kt?null:Ye.getPrimaries(M.colorSpace),de=M.colorSpace===kt||ve===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Oe=M.image[0]&&M.image[0].isDataTexture,J=[];for(let re=0;re<6;re++)!be&&!Oe?J[re]=_(M.image[re],!1,!0,i.maxCubemapSize):J[re]=Oe?M.image[re].image:M.image[re],J[re]=Be(M,J[re]);const je=J[0],Ve=m(je)||a,Pe=r.convert(M.format,M.colorSpace),ye=r.convert(M.type),fe=S(M.internalFormat,Pe,ye,M.colorSpace),Ne=a&&M.isVideoTexture!==!0,qe=ne.__version===void 0||te===!0;let it=C(M,je,Ve);W(s.TEXTURE_CUBE_MAP,M,Ve);let ze;if(be){Ne&&qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,it,fe,je.width,je.height);for(let re=0;re<6;re++){ze=J[re].mipmaps;for(let P=0;P<ze.length;P++){const ae=ze[P];M.format!==qt?Pe!==null?Ne?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ae.width,ae.height,Pe,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ae.width,ae.height,Pe,ye,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,fe,ae.width,ae.height,0,Pe,ye,ae.data)}}}else{ze=M.mipmaps,Ne&&qe&&(ze.length>0&&it++,t.texStorage2D(s.TEXTURE_CUBE_MAP,it,fe,J[0].width,J[0].height));for(let re=0;re<6;re++)if(Oe){Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,J[re].width,J[re].height,Pe,ye,J[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,J[re].width,J[re].height,0,Pe,ye,J[re].data);for(let P=0;P<ze.length;P++){const ce=ze[P].image[re].image;Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,ce.width,ce.height,Pe,ye,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,fe,ce.width,ce.height,0,Pe,ye,ce.data)}}else{Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,ye,J[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,Pe,ye,J[re]);for(let P=0;P<ze.length;P++){const ae=ze[P];Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,Pe,ye,ae.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,fe,Pe,ye,ae.image[re])}}}y(M,Ve)&&x(s.TEXTURE_CUBE_MAP),ne.__version=Q.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function me(b,M,O,te,Q,ne){const ve=r.convert(O.format,O.colorSpace),he=r.convert(O.type),de=S(O.internalFormat,ve,he,O.colorSpace);if(!n.get(M).__hasExternalTextures){const Oe=Math.max(1,M.width>>ne),J=Math.max(1,M.height>>ne);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,de,Oe,J,M.depth,0,ve,he,null):t.texImage2D(Q,ne,de,Oe,J,0,ve,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),ge(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,Q,n.get(O).__webglTexture,0,Le(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,Q,n.get(O).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(b,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let te=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||ge(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===fn?te=s.DEPTH_COMPONENT32F:Q.type===dn&&(te=s.DEPTH_COMPONENT24));const ne=Le(M);ge(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,te,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,te,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,te,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const te=Le(M);O&&ge(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,M.width,M.height):ge(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<te.length;Q++){const ne=te[Q],ve=r.convert(ne.format,ne.colorSpace),he=r.convert(ne.type),de=S(ne.internalFormat,ve,he,ne.colorSpace),be=Le(M);O&&ge(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,de,M.width,M.height):ge(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,de,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,de,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,Q=Le(M);if(M.depthTexture.format===Pn)ge(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(M.depthTexture.format===hi)ge(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(b){const M=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ue(M.__webglFramebuffer,b)}else if(O){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=s.createRenderbuffer(),pe(M.__webglDepthbuffer[te],b,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),pe(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(b,M,O){const te=n.get(b);M!==void 0&&me(te.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Te(b)}function F(b){const M=b.texture,O=n.get(b),te=n.get(M);b.addEventListener("dispose",I),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=M.version,o.memory.textures++);const Q=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,ve=m(b)||a;if(Q){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let de=0;de<M.mipmaps.length;de++)O.__webglFramebuffer[he][de]=s.createFramebuffer()}else O.__webglFramebuffer[he]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)O.__webglFramebuffer[he]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){const he=b.texture;for(let de=0,be=he.length;de<be;de++){const Oe=n.get(he[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ge(b)===!1){const he=ne?M:[M];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const be=he[de];O.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Oe=r.convert(be.format,be.colorSpace),J=r.convert(be.type),je=S(be.internalFormat,Oe,J,be.colorSpace,b.isXRRenderTarget===!0),Ve=Le(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,je,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,O.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),W(s.TEXTURE_CUBE_MAP,M,ve);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)me(O.__webglFramebuffer[he][de],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,de);else me(O.__webglFramebuffer[he],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(M,ve)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const he=b.texture;for(let de=0,be=he.length;de<be;de++){const Oe=he[de],J=n.get(Oe);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),W(s.TEXTURE_2D,Oe,ve),me(O.__webglFramebuffer,b,Oe,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),y(Oe,ve)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,te.__webglTexture),W(he,M,ve),a&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)me(O.__webglFramebuffer[de],b,M,s.COLOR_ATTACHMENT0,he,de);else me(O.__webglFramebuffer,b,M,s.COLOR_ATTACHMENT0,he,0);y(M,ve)&&x(he),t.unbindTexture()}b.depthBuffer&&Te(b)}function wt(b){const M=m(b)||a,O=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,Q=O.length;te<Q;te++){const ne=O[te];if(y(ne,M)){const ve=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,he=n.get(ne).__webglTexture;t.bindTexture(ve,he),x(ve),t.unbindTexture()}}}function Me(b){if(a&&b.samples>0&&ge(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],O=b.width,te=b.height;let Q=s.COLOR_BUFFER_BIT;const ne=[],ve=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<M.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let be=0;be<M.length;be++){ne.push(s.COLOR_ATTACHMENT0+be),b.depthBuffer&&ne.push(ve);const Oe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Oe===!1&&(b.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[be]),Oe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ve]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ve])),de){const J=n.get(M[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,O,te,0,0,O,te,Q,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<M.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,he.__webglColorRenderbuffer[be]);const Oe=n.get(M[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Le(b){return Math.min(i.maxSamples,b.samples)}function ge(b){const M=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function tt(b){const M=o.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function Be(b,M){const O=b.colorSpace,te=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===hr||O!==rn&&O!==kt&&(Ye.getTransfer(O)===Je?a===!1?e.has("EXT_sRGB")===!0&&te===qt?(b.format=hr,b.minFilter=Bt,b.generateMipmaps=!1):M=Ta.sRGBToLinear(M):(te!==qt||Q!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}this.allocateTextureUnit=L,this.resetTextureUnits=X,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Xe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function pp(s,e,t){const n=t.isWebGL2;function i(r,o=kt){let a;const c=Ye.getTransfer(o);if(r===gn)return s.UNSIGNED_BYTE;if(r===_a)return s.UNSIGNED_SHORT_4_4_4_4;if(r===va)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Fc)return s.BYTE;if(r===Bc)return s.SHORT;if(r===gr)return s.UNSIGNED_SHORT;if(r===ga)return s.INT;if(r===dn)return s.UNSIGNED_INT;if(r===fn)return s.FLOAT;if(r===Ti)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Oc)return s.ALPHA;if(r===qt)return s.RGBA;if(r===kc)return s.LUMINANCE;if(r===zc)return s.LUMINANCE_ALPHA;if(r===Pn)return s.DEPTH_COMPONENT;if(r===hi)return s.DEPTH_STENCIL;if(r===hr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Hc)return s.RED;if(r===xa)return s.RED_INTEGER;if(r===Gc)return s.RG;if(r===ya)return s.RG_INTEGER;if(r===Ma)return s.RGBA_INTEGER;if(r===As||r===Cs||r===Rs||r===Ps)if(c===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zr||r===Hr||r===Gr||r===Vr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===zr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sa)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wr||r===Xr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wr)return c===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xr)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qr||r===jr||r===Yr||r===Kr||r===$r||r===Zr||r===Jr||r===Qr||r===eo||r===to||r===no||r===io||r===so||r===ro)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===qr)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jr)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yr)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kr)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$r)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zr)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jr)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qr)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eo)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===to)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===no)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===io)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===so)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ro)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ls||r===oo||r===ao)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ls)return c===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===oo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ao)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vc||r===co||r===lo||r===ho)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ls)return a.COMPRESSED_RED_RGTC1_EXT;if(r===co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ho)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class mp extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class We extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gp={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new We;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _p extends Nn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const y=[],x=[],S=new we;let C=null;const T=new Ut;T.layers.enable(1),T.viewport=new et;const A=new Ut;A.layers.enable(2),A.viewport=new et;const I=[T,A],v=new mp;v.layers.enable(1),v.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=y[W];return $===void 0&&($=new er,y[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=y[W];return $===void 0&&($=new er,y[W]=$),$.getGripSpace()},this.getHand=function(W){let $=y[W];return $===void 0&&($=new er,y[W]=$),$.getHandSpace()};function H(W){const $=x.indexOf(W.inputSource);if($===-1)return;const le=y[$];le!==void 0&&(le.update(W.inputSource,W.frame,l||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",L);for(let W=0;W<y.length;W++){const $=x[W];$!==null&&(x[W]=null,y[W].disconnect($))}w=null,N=null,e.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",X),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Dn(p.framebufferWidth,p.framebufferHeight,{format:qt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,le=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?hi:Pn,le=_.stencil?Rn:dn);const me={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Dn(d.textureWidth,d.textureHeight,{format:qt,type:gn,depthTexture:new Ba(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const pe=e.properties.get(f);pe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(W){for(let $=0;$<W.removed.length;$++){const le=W.removed[$],_e=x.indexOf(le);_e>=0&&(x[_e]=null,y[_e].disconnect(le))}for(let $=0;$<W.added.length;$++){const le=W.added[$];let _e=x.indexOf(le);if(_e===-1){for(let pe=0;pe<y.length;pe++)if(pe>=x.length){x.push(le),_e=pe;break}else if(x[pe]===null){x[pe]=le,_e=pe;break}if(_e===-1)break}const me=y[_e];me&&me.connect(le)}}const U=new R,V=new R;function j(W,$,le){U.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(le.matrixWorld);const _e=U.distanceTo(V),me=$.projectionMatrix.elements,pe=le.projectionMatrix.elements,Ue=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],F=(me[9]-1)/me[5],wt=(me[8]-1)/me[0],Me=(pe[8]+1)/pe[0],Le=Ue*wt,ge=Ue*Me,tt=_e/(-wt+Me),Be=tt*-wt;$.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Be),W.translateZ(tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const b=Ue+tt,M=Te+tt,O=Le-Be,te=ge+(_e-Be),Q=Xe*Te/M*b,ne=F*Te/M*b;W.projectionMatrix.makePerspective(O,te,Q,ne,b,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;v.near=A.near=T.near=W.near,v.far=A.far=T.far=W.far,(w!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,N=v.far);const $=W.parent,le=v.cameras;q(v,$);for(let _e=0;_e<le.length;_e++)q(le[_e],$);le.length===2?j(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),Y(W,v,$)};function Y(W,$,le){le===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ai*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let K=null;function ie(W,$){if(h=$.getViewerPose(l||o),g=$,h!==null){const le=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let _e=!1;le.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let me=0;me<le.length;me++){const pe=le[me];let Ue=null;if(p!==null)Ue=p.getViewport(pe);else{const Xe=u.getViewSubImage(d,pe);Ue=Xe.viewport,me===0&&(e.setRenderTargetTextures(f,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(f))}let Te=I[me];Te===void 0&&(Te=new Ut,Te.layers.enable(me),Te.viewport=new et,I[me]=Te),Te.matrix.fromArray(pe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(pe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(v.matrix.copy(Te.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_e===!0&&v.cameras.push(Te)}}for(let le=0;le<y.length;le++){const _e=x[le],me=y[le];_e!==null&&me!==void 0&&me.update(_e,$,l||o)}K&&K(W,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const se=new Na;se.setAnimationLoop(ie),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function vp(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Da(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Rt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Rt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xp(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function l(y,x){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(y,C);const T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const x=u();y.__bindingPointIndex=x;const S=s.createBuffer(),C=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,S),S}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],S=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,A=S.length;T<A;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,w=I.length;v<w;v++){const N=I[v];if(p(N,T,v,C)===!0){const H=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let L=0;for(let U=0;U<X.length;U++){const V=X[U],j=_(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,H+L,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,x,S,C){const T=y.value,A=x+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const I=C[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){const x=y.uniforms;let S=0;const C=16;for(let A=0,I=x.length;A<I;A++){const v=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,N=v.length;w<N;w++){const H=v[w],X=Array.isArray(H.value)?H.value:[H.value];for(let L=0,U=X.length;L<U;L++){const V=X[L],j=_(V),q=S%C;q!==0&&C-q<j.boundary&&(S+=C-q),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=j.storage}}}const T=S%C;return T>0&&(S+=C-T),y.__size=S,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class Va{constructor(e={}){const{canvas:t=pl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const x=this;let S=!1,C=0,T=0,A=null,I=-1,v=null;const w=new et,N=new et;let H=null;const X=new Re(0);let L=0,U=t.width,V=t.height,j=1,q=null,Y=null;const K=new et(0,0,U,V),ie=new et(0,0,U,V);let se=!1;const W=new yr;let $=!1,le=!1,_e=null;const me=new rt,pe=new we,Ue=new R,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return A===null?j:1}let F=n;function wt(E,D){for(let k=0;k<E.length;k++){const G=E[k],B=t.getContext(G,D);if(B!==null)return B}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mr}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),F===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),F=wt(D,E),F===null)throw wt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Me,Le,ge,tt,Be,b,M,O,te,Q,ne,ve,he,de,be,Oe,J,je,Ve,Pe,ye,fe,Ne,qe;function it(){Me=new Cd(F),Le=new Sd(F,Me,e),Me.init(Le),fe=new pp(F,Me,Le),ge=new dp(F,Me,Le),tt=new Ld(F),Be=new Jf,b=new fp(F,Me,ge,Be,Le,fe,tt),M=new Ed(x),O=new Ad(x),te=new kl(F,Le),Ne=new yd(F,Me,te,Le),Q=new Rd(F,te,tt,Ne),ne=new Nd(F,Q,te,tt),Ve=new Ud(F,Le,b),Oe=new wd(Be),ve=new Zf(x,M,O,Me,Le,Ne,Oe),he=new vp(x,Be),de=new ep,be=new op(Me,Le),je=new xd(x,M,O,ge,ne,d,c),J=new up(x,ne,Le),qe=new xp(F,tt,Le,ge),Pe=new Md(F,Me,tt,Le),ye=new Pd(F,Me,tt,Le),tt.programs=ve.programs,x.capabilities=Le,x.extensions=Me,x.properties=Be,x.renderLists=de,x.shadowMap=J,x.state=ge,x.info=tt}it();const ze=new _p(x,F);this.xr=ze,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(U,V,!1))},this.getSize=function(E){return E.set(U,V)},this.setSize=function(E,D,k=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,V=D,t.width=Math.floor(E*j),t.height=Math.floor(D*j),k===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(U*j,V*j).floor()},this.setDrawingBufferSize=function(E,D,k){U=E,V=D,j=k,t.width=Math.floor(E*k),t.height=Math.floor(D*k),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,D,k,G){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,D,k,G),ge.viewport(w.copy(K).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,D,k,G){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,D,k,G),ge.scissor(N.copy(ie).multiplyScalar(j).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){ge.setScissorTest(se=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(E=!0,D=!0,k=!0){let G=0;if(E){let B=!1;if(A!==null){const ue=A.texture.format;B=ue===Ma||ue===ya||ue===xa}if(B){const ue=A.texture.type,xe=ue===gn||ue===dn||ue===gr||ue===Rn||ue===_a||ue===va,Ee=je.getClearColor(),Ce=je.getClearAlpha(),ke=Ee.r,De=Ee.g,Ie=Ee.b;xe?(p[0]=ke,p[1]=De,p[2]=Ie,p[3]=Ce,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=ke,g[1]=De,g[2]=Ie,g[3]=Ce,F.clearBufferiv(F.COLOR,0,g))}else G|=F.COLOR_BUFFER_BIT}D&&(G|=F.DEPTH_BUFFER_BIT),k&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),be.dispose(),Be.dispose(),M.dispose(),O.dispose(),ne.dispose(),Ne.dispose(),qe.dispose(),ve.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Et),ze.removeEventListener("sessionend",Ze),_e&&(_e.dispose(),_e=null),bt.stop()};function re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=tt.autoReset,D=J.enabled,k=J.autoUpdate,G=J.needsUpdate,B=J.type;it(),tt.autoReset=E,J.enabled=D,J.autoUpdate=k,J.needsUpdate=G,J.type=B}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ce(E){const D=E.target;D.removeEventListener("dispose",ce),Ae(D)}function Ae(E){Se(E),Be.remove(E)}function Se(E){const D=Be.get(E).programs;D!==void 0&&(D.forEach(function(k){ve.releaseProgram(k)}),E.isShaderMaterial&&ve.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,k,G,B,ue){D===null&&(D=Te);const xe=B.isMesh&&B.matrixWorld.determinant()<0,Ee=Ka(E,D,k,G,B);ge.setMaterial(G,xe);let Ce=k.index,ke=1;if(G.wireframe===!0){if(Ce=Q.getWireframeAttribute(k),Ce===void 0)return;ke=2}const De=k.drawRange,Ie=k.attributes.position;let ot=De.start*ke,Lt=(De.start+De.count)*ke;ue!==null&&(ot=Math.max(ot,ue.start*ke),Lt=Math.min(Lt,(ue.start+ue.count)*ke)),Ce!==null?(ot=Math.max(ot,0),Lt=Math.min(Lt,Ce.count)):Ie!=null&&(ot=Math.max(ot,0),Lt=Math.min(Lt,Ie.count));const ut=Lt-ot;if(ut<0||ut===1/0)return;Ne.setup(B,G,Ee,k,Ce);let $t,nt=Pe;if(Ce!==null&&($t=te.get(Ce),nt=ye,nt.setIndex($t)),B.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*Xe()),nt.setMode(F.LINES)):nt.setMode(F.TRIANGLES);else if(B.isLine){let He=G.linewidth;He===void 0&&(He=1),ge.setLineWidth(He*Xe()),B.isLineSegments?nt.setMode(F.LINES):B.isLineLoop?nt.setMode(F.LINE_LOOP):nt.setMode(F.LINE_STRIP)}else B.isPoints?nt.setMode(F.POINTS):B.isSprite&&nt.setMode(F.TRIANGLES);if(B.isBatchedMesh)nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)nt.renderInstances(ot,ut,B.count);else if(k.isInstancedBufferGeometry){const He=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ss=Math.min(k.instanceCount,He);nt.renderInstances(ot,ut,Ss)}else nt.render(ot,ut)};function Ke(E,D,k){E.transparent===!0&&E.side===Ot&&E.forceSinglePass===!1?(E.side=Rt,E.needsUpdate=!0,Li(E,D,k),E.side=_n,E.needsUpdate=!0,Li(E,D,k),E.side=Ot):Li(E,D,k)}this.compile=function(E,D,k=null){k===null&&(k=E),m=be.get(k),m.init(),y.push(m),k.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==k&&E.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);const G=new Set;return E.traverse(function(B){const ue=B.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const Ee=ue[xe];Ke(Ee,k,B),G.add(Ee)}else Ke(ue,k,B),G.add(ue)}),y.pop(),m=null,G},this.compileAsync=function(E,D,k=null){const G=this.compile(E,D,k);return new Promise(B=>{function ue(){if(G.forEach(function(xe){Be.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){B(E);return}setTimeout(ue,10)}Me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let $e=null;function ht(E){$e&&$e(E)}function Et(){bt.stop()}function Ze(){bt.start()}const bt=new Na;bt.setAnimationLoop(ht),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(E){$e=E,ze.setAnimationLoop(E),E===null?bt.stop():bt.start()},ze.addEventListener("sessionstart",Et),ze.addEventListener("sessionend",Ze),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(D),D=ze.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,D,A),m=be.get(E,y.length),m.init(),y.push(m),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(me),le=this.localClippingEnabled,$=Oe.init(this.clippingPlanes,le),_=de.get(E,f.length),_.init(),f.push(_),jt(E,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,Y),this.info.render.frame++,$===!0&&Oe.beginShadows();const k=m.state.shadowsArray;if(J.render(k,E,D),$===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,E),m.setupLights(x._useLegacyLights),D.isArrayCamera){const G=D.cameras;for(let B=0,ue=G.length;B<ue;B++){const xe=G[B];Cr(_,E,xe,xe.viewport)}}else Cr(_,E,D);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,D),Ne.resetDefaultState(),I=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function jt(E,D,k,G){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){G&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);const xe=ne.update(E),Ee=E.material;Ee.visible&&_.push(E,xe,Ee,k,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const xe=ne.update(E),Ee=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ue.copy(xe.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(Ee)){const Ce=xe.groups;for(let ke=0,De=Ce.length;ke<De;ke++){const Ie=Ce[ke],ot=Ee[Ie.materialIndex];ot&&ot.visible&&_.push(E,xe,ot,k,Ue.z,Ie)}}else Ee.visible&&_.push(E,xe,Ee,k,Ue.z,null)}}const ue=E.children;for(let xe=0,Ee=ue.length;xe<Ee;xe++)jt(ue[xe],D,k,G)}function Cr(E,D,k,G){const B=E.opaque,ue=E.transmissive,xe=E.transparent;m.setupLightsView(k),$===!0&&Oe.setGlobalState(x.clippingPlanes,k),ue.length>0&&Ya(B,ue,D,k),G&&ge.viewport(w.copy(G)),B.length>0&&Pi(B,D,k),ue.length>0&&Pi(ue,D,k),xe.length>0&&Pi(xe,D,k),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ya(E,D,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ue=Le.isWebGL2;_e===null&&(_e=new Dn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ti:gn,minFilter:bi,samples:ue?4:0})),x.getDrawingBufferSize(pe),ue?_e.setSize(pe.x,pe.y):_e.setSize(ds(pe.x),ds(pe.y));const xe=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(X),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ee=x.toneMapping;x.toneMapping=mn,Pi(E,k,G),b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e);let Ce=!1;for(let ke=0,De=D.length;ke<De;ke++){const Ie=D[ke],ot=Ie.object,Lt=Ie.geometry,ut=Ie.material,$t=Ie.group;if(ut.side===Ot&&ot.layers.test(G.layers)){const nt=ut.side;ut.side=Rt,ut.needsUpdate=!0,Rr(ot,k,G,Lt,ut,$t),ut.side=nt,ut.needsUpdate=!0,Ce=!0}}Ce===!0&&(b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e)),x.setRenderTarget(xe),x.setClearColor(X,L),x.toneMapping=Ee}function Pi(E,D,k){const G=D.isScene===!0?D.overrideMaterial:null;for(let B=0,ue=E.length;B<ue;B++){const xe=E[B],Ee=xe.object,Ce=xe.geometry,ke=G===null?xe.material:G,De=xe.group;Ee.layers.test(k.layers)&&Rr(Ee,D,k,Ce,ke,De)}}function Rr(E,D,k,G,B,ue){E.onBeforeRender(x,D,k,G,B,ue),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,D,k,G,E,ue),B.transparent===!0&&B.side===Ot&&B.forceSinglePass===!1?(B.side=Rt,B.needsUpdate=!0,x.renderBufferDirect(k,D,G,B,E,ue),B.side=_n,B.needsUpdate=!0,x.renderBufferDirect(k,D,G,B,E,ue),B.side=Ot):x.renderBufferDirect(k,D,G,B,E,ue),E.onAfterRender(x,D,k,G,B,ue)}function Li(E,D,k){D.isScene!==!0&&(D=Te);const G=Be.get(E),B=m.state.lights,ue=m.state.shadowsArray,xe=B.state.version,Ee=ve.getParameters(E,B.state,ue,D,k),Ce=ve.getProgramCacheKey(Ee);let ke=G.programs;G.environment=E.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||G.environment),ke===void 0&&(E.addEventListener("dispose",ce),ke=new Map,G.programs=ke);let De=ke.get(Ce);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===xe)return Lr(E,Ee),De}else Ee.uniforms=ve.getUniforms(E),E.onBuild(k,Ee,x),E.onBeforeCompile(Ee,x),De=ve.acquireProgram(Ee,Ce),ke.set(Ce,De),G.uniforms=Ee.uniforms;const Ie=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=Oe.uniform),Lr(E,Ee),G.needsLights=Za(E),G.lightsStateVersion=xe,G.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function Pr(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=rs.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Lr(E,D){const k=Be.get(E);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Ka(E,D,k,G,B){D.isScene!==!0&&(D=Te),b.resetTextureUnits();const ue=D.fog,xe=G.isMeshStandardMaterial?D.environment:null,Ee=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rn,Ce=(G.isMeshStandardMaterial?O:M).get(G.envMap||xe),ke=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!k.morphAttributes.position,ot=!!k.morphAttributes.normal,Lt=!!k.morphAttributes.color;let ut=mn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ut=x.toneMapping);const $t=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,nt=$t!==void 0?$t.length:0,He=Be.get(G),Ss=m.state.lights;if($===!0&&(le===!0||E!==v)){const Nt=E===v&&G.id===I;Oe.setState(G,E,Nt)}let st=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ss.state.version||He.outputColorSpace!==Ee||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||He.envMap!==Ce||G.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Oe.numPlanes||He.numIntersection!==Oe.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==De||He.morphTargets!==Ie||He.morphNormals!==ot||He.morphColors!==Lt||He.toneMapping!==ut||Le.isWebGL2===!0&&He.morphTargetsCount!==nt)&&(st=!0):(st=!0,He.__version=G.version);let xn=He.currentProgram;st===!0&&(xn=Li(G,D,B));let Dr=!1,mi=!1,ws=!1;const vt=xn.getUniforms(),yn=He.uniforms;if(ge.useProgram(xn.program)&&(Dr=!0,mi=!0,ws=!0),G.id!==I&&(I=G.id,mi=!0),Dr||v!==E){vt.setValue(F,"projectionMatrix",E.projectionMatrix),vt.setValue(F,"viewMatrix",E.matrixWorldInverse);const Nt=vt.map.cameraPosition;Nt!==void 0&&Nt.setValue(F,Ue.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,mi=!0,ws=!0)}if(B.isSkinnedMesh){vt.setOptional(F,B,"bindMatrix"),vt.setOptional(F,B,"bindMatrixInverse");const Nt=B.skeleton;Nt&&(Le.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),vt.setValue(F,"boneTexture",Nt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(vt.setOptional(F,B,"batchingTexture"),vt.setValue(F,"batchingTexture",B._matricesTexture,b));const Es=k.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&Le.isWebGL2===!0)&&Ve.update(B,k,xn),(mi||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,vt.setValue(F,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=Ce,yn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),mi&&(vt.setValue(F,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&$a(yn,ws),ue&&G.fog===!0&&he.refreshFogUniforms(yn,ue),he.refreshMaterialUniforms(yn,G,j,V,_e),rs.upload(F,Pr(He),yn,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(rs.upload(F,Pr(He),yn,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(F,"center",B.center),vt.setValue(F,"modelViewMatrix",B.modelViewMatrix),vt.setValue(F,"normalMatrix",B.normalMatrix),vt.setValue(F,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Nt=G.uniformsGroups;for(let bs=0,Ja=Nt.length;bs<Ja;bs++)if(Le.isWebGL2){const Ir=Nt[bs];qe.update(Ir,xn),qe.bind(Ir,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function $a(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Za(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,D,k){Be.get(E.texture).__webglTexture=D,Be.get(E.depthTexture).__webglTexture=k;const G=Be.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const k=Be.get(E);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,k=0){A=E,C=D,T=k;let G=!0,B=null,ue=!1,xe=!1;if(E){const Ce=Be.get(E);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):Ce.__webglFramebuffer===void 0?b.setupRenderTarget(E):Ce.__hasExternalTextures&&b.rebindTextures(E,Be.get(E.texture).__webglTexture,Be.get(E.depthTexture).__webglTexture);const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const De=Be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[D])?B=De[D][k]:B=De[D],ue=!0):Le.isWebGL2&&E.samples>0&&b.useMultisampledRTT(E)===!1?B=Be.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?B=De[k]:B=De,w.copy(E.viewport),N.copy(E.scissor),H=E.scissorTest}else w.copy(K).multiplyScalar(j).floor(),N.copy(ie).multiplyScalar(j).floor(),H=se;if(ge.bindFramebuffer(F.FRAMEBUFFER,B)&&Le.drawBuffers&&G&&ge.drawBuffers(E,B),ge.viewport(w),ge.scissor(N),ge.setScissorTest(H),ue){const Ce=Be.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ce.__webglTexture,k)}else if(xe){const Ce=Be.get(E.texture),ke=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,k||0,ke)}I=-1},this.readRenderTargetPixels=function(E,D,k,G,B,ue,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){ge.bindFramebuffer(F.FRAMEBUFFER,Ee);try{const Ce=E.texture,ke=Ce.format,De=Ce.type;if(ke!==qt&&fe.convert(ke)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===Ti&&(Me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Me.has("EXT_color_buffer_float"));if(De!==gn&&fe.convert(De)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===fn&&(Le.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-G&&k>=0&&k<=E.height-B&&F.readPixels(D,k,G,B,fe.convert(ke),fe.convert(De),ue)}finally{const Ce=A!==null?Be.get(A).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(E,D,k=0){const G=Math.pow(2,-k),B=Math.floor(D.image.width*G),ue=Math.floor(D.image.height*G);b.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,E.x,E.y,B,ue),ge.unbindTexture()},this.copyTextureToTexture=function(E,D,k,G=0){const B=D.image.width,ue=D.image.height,xe=fe.convert(k.format),Ee=fe.convert(k.type);b.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,B,ue,xe,Ee,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,xe,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,xe,Ee,D.image),G===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(E,D,k,G,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=E.max.x-E.min.x+1,xe=E.max.y-E.min.y+1,Ee=E.max.z-E.min.z+1,Ce=fe.convert(G.format),ke=fe.convert(G.type);let De;if(G.isData3DTexture)b.setTexture3D(G,0),De=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)b.setTexture2DArray(G,0),De=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Ie=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Lt=F.getParameter(F.UNPACK_SKIP_PIXELS),ut=F.getParameter(F.UNPACK_SKIP_ROWS),$t=F.getParameter(F.UNPACK_SKIP_IMAGES),nt=k.isCompressedTexture?k.mipmaps[B]:k.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),k.isDataTexture||k.isData3DTexture?F.texSubImage3D(De,B,D.x,D.y,D.z,ue,xe,Ee,Ce,ke,nt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(De,B,D.x,D.y,D.z,ue,xe,Ee,Ce,nt.data)):F.texSubImage3D(De,B,D.x,D.y,D.z,ue,xe,Ee,Ce,ke,nt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Lt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ut),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$t),B===0&&G.generateMipmaps&&F.generateMipmap(De),ge.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_r?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===vs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Ln:wa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ln?_t:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class yp extends Va{}yp.prototype.isWebGL1Renderer=!0;class Sr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new Sr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mp extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ms extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ea=new R,ta=new R,na=new rt,tr=new xs,es=new Ri;class Wa extends pt{constructor(e=new mt,t=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ea.fromBufferAttribute(t,i-1),ta.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(i),es.radius+=r,e.ray.intersectsSphere(es)===!1)return;na.copy(i).invert(),tr.copy(e.ray).applyMatrix4(na);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,u=new R,d=new R,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=f,S=y-1;x<S;x+=p){const C=g.getX(x),T=g.getX(x+1);if(l.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),tr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=f,S=y-1;x<S;x+=p){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),tr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ia=new R,sa=new R;class Xa extends Wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ia.fromBufferAttribute(t,i),sa.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ia.distanceTo(sa);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qa extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ra=new rt,fr=new xs,ts=new Ri,ns=new R;class Sp extends pt{constructor(e=new mt,t=new qa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(i),ts.radius+=r,e.ray.intersectsSphere(ts)===!1)return;ra.copy(i).invert(),fr.copy(e.ray).applyMatrix4(ra);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);ns.fromBufferAttribute(u,m),oa(ns,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ns.fromBufferAttribute(u,g),oa(ns,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oa(s,e,t,n,i,r,o){const a=fr.distanceSqToPoint(s);if(a<t){const c=new R;fr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class wp extends Pt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new we;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ft extends mt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(p,2));function y(){const S=new R,C=new R;let T=0;const A=(t-e)/n;for(let I=0;I<=r;I++){const v=[],w=I/r,N=w*(t-e)+e;for(let H=0;H<=i;H++){const X=H/i,L=X*c+a,U=Math.sin(L),V=Math.cos(L);C.x=N*U,C.y=-w*n+m,C.z=N*V,u.push(C.x,C.y,C.z),S.set(U,A,V).normalize(),d.push(S.x,S.y,S.z),p.push(X,1-w),v.push(g++)}_.push(v)}for(let I=0;I<i;I++)for(let v=0;v<r;v++){const w=_[v][I],N=_[v+1][I],H=_[v+1][I+1],X=_[v][I+1];h.push(w,N,X),h.push(N,H,X),T+=6}l.addGroup(f,T,0),f+=T}function x(S){const C=g,T=new we,A=new R;let I=0;const v=S===!0?e:t,w=S===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),g++;const N=g;for(let H=0;H<=i;H++){const L=H/i*c+a,U=Math.cos(L),V=Math.sin(L);A.x=v*V,A.y=m*w,A.z=v*U,u.push(A.x,A.y,A.z),d.push(0,w,0),T.x=U*.5+.5,T.y=V*.5*w+.5,p.push(T.x,T.y),g++}for(let H=0;H<i;H++){const X=C+H,L=N+H;S===!0?h.push(L,L+1,X):h.push(L+1,L,X),I+=3}l.addGroup(f,I,S===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oi extends ft{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new oi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wr extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new R,S=new R,C=new R;for(let T=0;T<t.length;T+=3)p(t[T+0],x),p(t[T+1],S),p(t[T+2],C),c(x,S,C,y)}function c(y,x,S,C){const T=C+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const v=y.clone().lerp(S,I/T),w=x.clone().lerp(S,I/T),N=T-I;for(let H=0;H<=N;H++)H===0&&I===T?A[I][H]=v:A[I][H]=v.clone().lerp(w,H/N)}for(let I=0;I<T;I++)for(let v=0;v<2*(T-I)-1;v++){const w=Math.floor(v/2);v%2===0?(d(A[I][w+1]),d(A[I+1][w]),d(A[I][w])):(d(A[I][w+1]),d(A[I+1][w+1]),d(A[I+1][w]))}}function l(y){const x=new R;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(y),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){const y=new R;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const S=m(y)/2/Math.PI+.5,C=f(y)/Math.PI+.5;o.push(S,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],S=o[y+2],C=o[y+4],T=Math.max(x,S,C),A=Math.min(x,S,C);T>.9&&A<.1&&(x<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,x){const S=y*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const y=new R,x=new R,S=new R,C=new R,T=new we,A=new we,I=new we;for(let v=0,w=0;v<r.length;v+=9,w+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),S.set(r[v+6],r[v+7],r[v+8]),T.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),C.copy(y).add(x).add(S).divideScalar(3);const N=m(C);_(T,w+0,y,N),_(A,w+2,x,N),_(I,w+4,S,N)}}function _(y,x,S,C){C<0&&y.x===1&&(o[x]=y.x-1),S.x===0&&S.z===0&&(o[x]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.vertices,e.indices,e.radius,e.details)}}class Er extends wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Er(e.radius,e.detail)}}class ai extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let S=0;f===0&&o===0?S=.5/t:f===n&&c===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(i+T*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-x),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const x=h[f][y+1],S=h[f][y],C=h[f+1][y],T=h[f+1][y+1];(f!==0||o>0)&&p.push(x,S,T),(f!==n-1||c<Math.PI)&&p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class br extends mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Z extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_s,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jn extends on{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_s,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ms,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ep extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_s,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ms,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tr extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const nr=new rt,aa=new R,ca=new R;class ja{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(aa),ca.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ca),t.updateMatrixWorld(),nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const la=new rt,yi=new R,ir=new R;class bp extends ja{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(yi),ir.copy(n.position),ir.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ir),n.updateMatrixWorld(),i.makeTranslation(-yi.x,-yi.y,-yi.z),la.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la)}}class Tp extends Tr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ap extends ja{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cp extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Ap}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rp extends Tr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ha(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ha();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ha(){return(typeof performance>"u"?Date:performance).now()}class Kt{constructor(e,t,n=0,i=1/0){this.ray=new xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return pr(e,this,n,t),n.sort(ua),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)pr(e[i],this,n,t);return n.sort(ua),n}}function ua(s,e){return s.distance-e.distance}function pr(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)pr(i[r],e,t,!0)}}const is=new vn;class Lp extends Xa{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new mt;r.setIndex(new St(n,1)),r.setAttribute("position",new St(i,3)),super(r,new Ms({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&is.setFromObject(this.object),is.isEmpty())return;const t=is.min,n=is.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Dp extends Xa{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new mt;r.setIndex(new St(n,1)),r.setAttribute("position",new Qe(i,3)),super(r,new Ms({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mr);const Ip="/threejs-voxel-firecraft/dist/assets/background-music-by-suno-B4M28EgO.ogg",ps=400;class Up{constructor(e,t,n){this.scene=e,this.itemManager=t,this.objects=[],this.gameMode=n&&n.gameMode?n.gameMode:"survival",this.gameMode==="arena"?this.mapSize=150:this.mapSize=n&&n.mapSize?n.mapSize:ps,this.halfMapSize=this.mapSize/2,this.stormRadius=this.halfMapSize,this.initialStormRadius=this.stormRadius,this._heightFn=this._buildHeightFn();const i=n?n.stormTime:180;this.stormShrinkRate=this.stormRadius/i,this.safeZoneCenter=new R(0,0,0),this.init()}init(){this.gameMode==="arena"?this.createArenaEnvironment():this.gameMode==="matrix"?this.createMatrixEnvironment():this.gameMode==="studio"?this.createStudioEnvironment():this.createEnvironment(),this.gameMode!=="matrix"&&this.gameMode!=="studio"&&this.createStormVisuals()}createEnvironment(){const e=(p=1)=>(Math.random()-.5)*(this.mapSize*p),t=(p=1)=>{const g=this.halfMapSize-5,_=e(p);return Math.max(-g,Math.min(g,_))},n=(p,g)=>this.getHeightAt?this.getHeightAt(p,g):0,i={trees:70,rocks:50,bushes:50,grass:180,houses:12,vehicles:12,plateaus:4,smallBuildings:5},r=new Wt(this.mapSize,this.mapSize,64,64),o=r.attributes.position;for(let p=0;p<o.count;p++)o.setZ(p,0);o.needsUpdate=!0;const a=r.attributes.position.count;r.setAttribute("color",new St(new Float32Array(a*3),3));const c=r.attributes.color,l=new Re;for(let p=0;p<a;p++){const g=Math.random();g>.8?l.setHex(2600544):g>.4?l.setHex(3066993):l.setHex(5822093),c.setXYZ(p,l.r,l.g,l.b)}const h=new Z({vertexColors:!0,roughness:.8}),u=new z(r,h);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,u.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(u),this.objects.push(u);for(let p=0;p<i.trees;p++){const g=t(.9),_=t(.9),m=n(g,_),f=Math.random()>.5?"Oak":"Pine",y=this.createTree(g,_,f);y.position.y=m,y.userData={gameId:this.generateID(),gameName:`Tree_${f}`,type:"tree"},this.scene.add(y),this.objects.push(y)}const d=[(p,g)=>this.createRock(p,g),(p,g,_)=>this.createRockPillar(p,g,_),(p,g,_)=>this.createFlatBoulder(p,g,_),(p,g,_)=>this.createCrystalShard(p,g,_),(p,g,_)=>this.createStackedRock(p,g,_),(p,g,_)=>this.createBasaltCluster(p,g,_)];for(let p=0;p<i.rocks;p++){const g=t(.9),_=t(.9),m=n(g,_),f=d[p%d.length],y=f(g,_,m);y.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(y),this.objects.push(y)}for(let p=0;p<i.bushes;p++){const g=t(.85),_=t(.85),m=n(g,_),f=this.createBush(g,_);f.position.y=m,f.userData={gameId:this.generateID(),gameName:"Bush"},this.scene.add(f),this.objects.push(f)}for(let p=0;p<i.grass;p++){const g=t(.95),_=t(.95),m=n(g,_),f=this.createGrassClump(g,_);f.position.y=m,this.scene.add(f)}for(let p=0;p<i.houses;p++){const g=t(.75),_=t(.75),m=n(g,_),f=Math.random(),y=f>.7,x=f<.25,S=y?1.55:x?.9:1,C=y?"Mansion":x?"Cabin":"House",T=y?"large":x?"small":"medium",A=this.createHouse(g,_,{scale:S});A.position.y=m,A.userData={gameId:this.generateID(),gameName:C,type:"house",size:T},this.scene.add(A),this.objects.push(A),this.itemManager.spawnLootInHouse(g,1,_)}for(let p=0;p<i.vehicles;p++){const g=t(.8),_=t(.8),m=n(g,_),f=Math.random()>.6?"truck":"car",y=this.createVehicle(g,_,f);y.position.y=m,y.userData={...y.userData||{},gameId:this.generateID(),gameName:`Vehicle_${f}`,type:"vehicle"},this.scene.add(y),this.objects.push(y)}for(let p=0;p<i.plateaus;p++){const g=t(.6),_=t(.6),m=6+Math.random()*6,f=8+Math.random()*6,y=n(g,_),x=this.createPlateau(g,_,f,m,y);x.userData={gameId:this.generateID(),gameName:"Plateau",type:"house"},this.scene.add(x),this.objects.push(x)}for(let p=0;p<i.smallBuildings;p++){const g=t(.7),_=t(.7),m=n(g,_),f=this.createSmallBuilding(g,_);f.position.y=m,f.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"},this.scene.add(f),this.objects.push(f)}}createArenaEnvironment(){const e=(o=1)=>(Math.random()-.5)*(this.mapSize*o),t=(o=1)=>{const a=this.halfMapSize-5,c=e(o);return Math.max(-a,Math.min(a,c))},n=new Wt(this.mapSize,this.mapSize,1,1),i=new Jn({color:3885915,flatShading:!0}),r=new z(n,i);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,r.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(r),this.objects.push(r);for(let o=0;o<30;o++){const a=t(.8),c=t(.8),l=1+Math.random()*3,h=1+Math.random()*2,u=1+Math.random()*2,d=new ee(h,l,u),p=new Jn({color:5596791,flatShading:!0}),g=new z(d,p);g.position.set(a,l/2,c),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=t(.7),c=t(.7),l=6+Math.random()*3,h=3+Math.random()*2,u=3,d=new ee(u,h,l),p=new Jn({color:4937059,flatShading:!0}),g=new z(d,p);g.position.set(a,h/2,c),g.rotation.x=-Math.atan(h/l),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Ramp",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=t(.6),c=t(.6),l=this.createArenaBunker(a,c);l.userData={gameId:this.generateID(),gameName:"Bunker",type:"house"},this.scene.add(l),this.objects.push(l)}for(let o=0;o<20;o++){const a=t(.8),c=t(.8),l=this.createFlatBoulder(a,c,0);l.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(l),this.objects.push(l)}this.itemManager.spawnLootInHouse(0,0,0)}createMatrixEnvironment(){const e=new Wt(this.mapSize,this.mapSize,128,128),t=e.attributes.position.count;e.setAttribute("color",new St(new Float32Array(t*3),3));const n=e.attributes.color,i=new Re;for(let d=0;d<t;d++){const p=Math.random();p>.8?i.setHex(2600544):p>.4?i.setHex(3066993):i.setHex(5822093),n.setXYZ(d,i.r,i.g,i.b)}const r=new Z({vertexColors:!0,roughness:.8}),o=new z(e,r);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(o),this.objects.push(o);const a=new ee(20,6,.5),c=new Z({color:15987699,roughness:.9}),l=new z(a,c);l.position.set(0,3,-15),l.castShadow=!0,l.receiveShadow=!0,l.userData={gameId:this.generateID(),gameName:"Wall",type:"house"},this.scene.add(l),this.objects.push(l);const h=this.createTree(-12,-15,"Oak"),u=this.createTree(12,-15,"Pine");this.scene.add(h),this.scene.add(u),this.objects.push(h),this.objects.push(u)}createStudioEnvironment(){const e=new Wt(this.mapSize,this.mapSize,128,128),t=this.buildVoxelGroundMaterial(),n=new z(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(n),this.objects.push(n);const i=12;for(let r=0;r<i;r++){const o=(Math.random()-.5)*this.mapSize*.6,a=(Math.random()-.5)*this.mapSize*.6,c=this.createVoxelCloud(o,a);this.scene.add(c)}}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}createTree(e,t,n){const i=new We;i.position.set(e,0,t);const r=.8+Math.random()*.4;i.scale.set(r,r,r);const o=3.5+Math.random()*1.5,a=new ft(.45,.6,o,8),c=new Z({color:7028518,roughness:1}),l=new z(a,c);if(l.position.y=o/2,l.castShadow=!0,l.receiveShadow=!0,i.add(l),this.objects.push(l),Math.random()>.7){const u=new ee(.15,.15,.05),d=new Z({color:5911328}),p=new z(u,d);p.position.set(.25,l.position.y+.6,.45),p.rotation.z=.4,i.add(p)}const h=new Z({color:n==="Oak"?3050327:1728040,roughness:.9});if(n==="Oak"){const u=6+Math.floor(Math.random()*4);for(let d=0;d<u;d++){const p=1.2+Math.random()*1.6,g=new ai(p,8,6),_=new z(g,h);_.position.y=l.position.y+.8+Math.random()*1.6,_.position.x=(Math.random()-.5)*1.5,_.position.z=(Math.random()-.5)*1.5,_.castShadow=!1,_.receiveShadow=!1,i.add(_)}}else{const u=3+Math.floor(Math.random()*3);for(let g=0;g<u;g++){const _=1.8-g*.4+Math.random()*.2,m=new oi(_,1.2+Math.random()*.6,8),f=new z(m,h);f.position.y=l.position.y+.6+g*.9,f.position.x=(Math.random()-.5)*.2,f.position.z=(Math.random()-.5)*.2,f.castShadow=!1,f.receiveShadow=!1,i.add(f)}const d=new ai(.25,6,6),p=new z(d,h);p.position.y=l.position.y+u*.9+.3,p.castShadow=!1,p.receiveShadow=!1,i.add(p)}if(Math.random()>.3){const u=new Wt(.8,.8),d=new Z({color:3066993,side:Ot}),p=new z(u,d);p.rotation.x=-Math.PI/2,p.position.y=.01,p.position.x=(Math.random()-.5)*.5,p.position.z=(Math.random()-.5)*.5,p.receiveShadow=!1,i.add(p)}return i}createVoxelCloud(e,t){const n=new We,i=new ee(3,2,3),r=new Ep({color:15922943,transparent:!0,opacity:.9}),o=8+Math.floor(Math.random()*6);for(let a=0;a<o;a++){const c=(Math.random()-.5)*12,l=(Math.random()-.5)*12,h=(Math.random()-.5)*2,u=new z(i,r);u.position.set(c,h,l),u.castShadow=!1,u.receiveShadow=!1,n.add(u)}return n.position.set(e,30+Math.random()*8,t),n}buildVoxelGroundMaterial(){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i="#4caf50",r="#66bb6a",o="#8d6e63",a=8;for(let u=0;u<64;u+=a)for(let d=0;d<64;d+=a){const g=Math.random()>.85?o:(d/a+u/a)%2===0?i:r;n.fillStyle=g,n.fillRect(d,u,a,a)}const c=n.getImageData(0,0,64,64),l=c.data;for(let u=0;u<l.length;u+=4){const d=Math.random()*30-15;l[u]=Math.min(255,Math.max(0,l[u]+d)),l[u+1]=Math.min(255,Math.max(0,l[u+1]+d)),l[u+2]=Math.min(255,Math.max(0,l[u+2]+d))}n.putImageData(c,0,0);const h=new wp(t);return h.wrapS=h.wrapT=as,h.repeat.set(this.mapSize/10,this.mapSize/10),h.magFilter=Mt,h.minFilter=Uc,new Z({map:h,roughness:1,metalness:0})}createRock(e,t,n=0){const i=.6+Math.random()*1.4,r=new Er(i,1),o=r.attributes.position;for(let l=0;l<o.count;l++){const h=o.getX(l),u=o.getY(l),d=o.getZ(l),p=(Math.random()-.5)*i*.15;o.setXYZ(l,h+p,u+p*.5,d+(Math.random()-.5)*i*.15)}r.computeVertexNormals();const a=new Z({color:8359053,roughness:1}),c=new z(r,a);if(c.position.set(e,n+i/2,t),c.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),c.castShadow=!0,c.receiveShadow=!0,Math.random()>.6){const l=new z(new Ei(i*.4,6),new Z({color:3066993}));l.rotation.x=-Math.PI/2,l.position.y=.01,c.add(l)}return this._tagStaticCollider(c,"rock"),c}createRockPillar(e,t,n=0){const i=2.5+Math.random()*2.5,r=.4+Math.random()*.3,o=r+.5,a=new ft(r,o,i,8,1),c=new Z({color:7171437,roughness:1}),l=new z(a,c);return l.position.set(e,n+i/2,t),l.castShadow=!0,l.receiveShadow=!0,this._tagStaticCollider(l,"rock"),l}createFlatBoulder(e,t,n=0){const i=2+Math.random()*2,r=.8+Math.random()*.6,o=1.5+Math.random()*1,a=new ee(i,r,o),c=new Z({color:9145227,roughness:1}),l=new z(a,c);return l.position.set(e,n+r/2,t),l.rotation.y=Math.random()*Math.PI,l.castShadow=!0,l.receiveShadow=!0,this._tagStaticCollider(l,"rock"),l}createCrystalShard(e,t,n=0){const i=2+Math.random()*2,r=new oi(.6+Math.random()*.4,i,6),o=new Z({color:10181046,roughness:.7,metalness:.2,emissive:4008804,emissiveIntensity:.25}),a=new z(r,o);return a.position.set(e,n+i/2,t),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,a}createStackedRock(e,t,n=0){const i=new We,r=this.createRock(0,0,0);i.add(r);const o=this.createRock(0,0);o.scale.set(.6,.6,.6),o.position.set(.3,o.position.y+.9,-.2),i.add(o);const a=this.createRock(0,0);return a.scale.set(.4,.4,.4),a.position.set(-.2,a.position.y+1.5,.3),i.add(a),i.position.set(e,n,t),i.traverse(c=>{c.castShadow=!0,c.receiveShadow=!0}),this._tagStaticCollider(i,"rock"),i}createBasaltCluster(e,t,n=0){const i=new We,r=3+Math.floor(Math.random()*4);for(let o=0;o<r;o++){const a=1+Math.random()*2,c=new ft(.35,.4,a,6),l=new Z({color:4934475,roughness:.9}),h=new z(c,l);h.position.set((Math.random()-.5)*.9,a/2,(Math.random()-.5)*.9),h.castShadow=!0,h.receiveShadow=!0,i.add(h)}return i.position.set(e,n,t),this._tagStaticCollider(i,"rock"),i}createBush(e,t){const n=new We;n.position.set(e,0,t);const i=new Z({color:2924588,roughness:1}),r=2+Math.floor(Math.random()*3);for(let o=0;o<r;o++){const a=1.2+Math.random()*1,c=new z(new ai(a,6,6),i);c.position.set((Math.random()-.5)*1.2,a*.65,(Math.random()-.5)*1.2),c.castShadow=!0,n.add(c)}return n}createVehicle(e,t,n="car"){const i=new We;i.position.set(e,0,t),i.rotation.y=Math.random()*Math.PI*2;const r=n==="truck"?.45:.35,o=n==="truck"?.4:.3;if(i.userData=i.userData||{},i.userData={vehicleType:n,wheelRadius:r,wheelCenterY:o,groundClearance:r-o,wheels:[]},n==="car"){const a=[1668818,15921906,1118481,9116186,15022389,15844367],c=new Z({color:a[Math.floor(Math.random()*a.length)],metalness:.45,roughness:.38}),l=new Z({color:16119285,metalness:.2,roughness:.6}),h=new Z({color:2042416,roughness:.8}),u=new z(new ee(2.2,.9,4.2),c);u.position.y=.85,u.castShadow=!0,i.add(u);const d=new z(new ee(2.25,.15,4.25),l);d.position.set(0,.9,0),i.add(d);const p=new z(new ee(1.8,.9,2.1),h);p.position.set(0,1.55,-.2),p.castShadow=!0,i.add(p);const g=new Z({color:1710618,transparent:!0,opacity:.7,metalness:.2,roughness:.1}),_=new z(new ee(1.6,.6,.08),g);_.position.set(0,1.55,1),i.add(_);const m=new z(new ee(1.6,.6,.08),g);m.position.set(0,1.55,-1.5),i.add(m);const f=new z(new ee(2.1,.25,.35),h);f.position.set(0,.55,2.1),i.add(f);const y=f.clone();y.position.z=-2.1,i.add(y);const x=new Z({color:855309,roughness:.9}),S=[14673130,789516,16777215];[[-.95,o,1.35],[.95,o,1.35],[-.95,o,-1.35],[.95,o,-1.35]].forEach(H=>{const X=new z(new ft(r,r,.35,14,1,!1),x);X.rotation.z=Math.PI/2,X.position.set(...H),X.castShadow=!0;const L=new z(new ee(.35,.12,.14),new Z({color:273}));L.position.set(0,0,0),L.rotation.y=Math.PI/8,X.add(L);const U=new z(new ft(r*.55,r*.55,.18,12),new Z({color:S[Math.floor(Math.random()*S.length)],roughness:.45,metalness:.65}));U.rotation.z=Math.PI/2,U.position.set(0,0,0),X.add(U);const V=new z(new ee(.05,r*1.2,.02),new Z({color:16777215,emissive:8947848,emissiveIntensity:.6}));V.position.set(0,0,.18),X.add(V),i.add(X),i.userData.wheels.push(X)});const T=new Z({color:16777130,emissive:16774557,emissiveIntensity:.8}),A=new Z({color:16732754,emissive:16732754,emissiveIntensity:.6}),I=new z(new ee(.25,.2,.1),T);I.position.set(-.75,.8,2.15),i.add(I);const v=I.clone();v.position.x=.75,i.add(v);const w=new z(new ee(.25,.2,.1),A);w.position.set(-.75,.8,-2.15),i.add(w);const N=w.clone();N.position.x=.75,i.add(N)}else if(n==="truck"){const a=[1981023,15921906,1118481,9116186,15022389,15844367],c=new Z({color:a[Math.floor(Math.random()*a.length)],metalness:.55,roughness:.42}),l=new Z({color:16119285,roughness:.7}),h=new Z({color:2042416,roughness:.8}),u=new z(new ee(2.6,1.1,5.2),c);u.position.y=1.05,u.castShadow=!0,i.add(u);const d=new z(new ee(2.65,.18,5.25),l);d.position.set(0,1.1,0),i.add(d);const p=new z(new ee(2.3,1.3,2.2),h);p.position.set(0,2.05,1.2),p.castShadow=!0,i.add(p);const g=new z(new ee(2.35,.85,2.6),new Z({color:8359053}));g.position.set(0,1.55,-1.55),g.castShadow=!0,i.add(g);const _=new Z({color:1710618,transparent:!0,opacity:.7}),m=new z(new ee(2,.7,.08),_);m.position.set(0,2.05,2.05),i.add(m);const f=new z(new ee(.08,.6,1.2),_);f.position.set(-1.15,2.05,1.2),i.add(f);const y=f.clone();y.position.x=1.15,i.add(y);const x=new Z({color:855309}),S=[14673130,789516,16777215];[[-1.1,.4,1.8],[1.1,.4,1.8],[-1.1,.4,-1.5],[1.1,.4,-1.5],[-1.1,.4,-2.2],[1.1,.4,-2.2]].forEach(H=>{const X=new z(new ft(r,r,.45,14,1,!1),x);X.rotation.z=Math.PI/2,X.position.set(...H),X.castShadow=!0;const L=new z(new ee(.4,.14,.16),new Z({color:273}));L.rotation.y=Math.PI/8,X.add(L);const U=new z(new ft(r*.55,r*.55,.2,12),new Z({color:S[Math.floor(Math.random()*S.length)],roughness:.45,metalness:.65}));U.rotation.z=Math.PI/2,U.position.set(0,0,0),X.add(U);const V=new z(new ee(.06,r*1.3,.025),new Z({color:16777215,emissive:8947848,emissiveIntensity:.6}));V.position.set(0,0,.2),X.add(V),i.add(X),i.userData.wheels.push(X)});const T=new Z({color:16776960,emissive:16776960,emissiveIntensity:.6}),A=new Z({color:16732754,emissive:16732754,emissiveIntensity:.5}),I=new z(new ee(.28,.22,.12),T);I.position.set(-.95,1.85,2.35),i.add(I);const v=I.clone();v.position.x=.95,i.add(v);const w=new z(new ee(.28,.22,.12),A);w.position.set(-.95,1.2,-2.55),i.add(w);const N=w.clone();N.position.x=.95,i.add(N)}return i}createGrassClump(e,t){const n=new We;n.position.set(e,0,t);const i=3+Math.floor(Math.random()*4);for(let r=0;r<i;r++){const o=.2+Math.random()*.6,a=new Wt(.05,o),c=new Z({color:5620331,side:Ot}),l=new z(a,c);l.position.y=o/2,l.rotation.y=Math.random()*Math.PI,l.rotation.z=(Math.random()-.5)*.6,l.receiveShadow=!0,n.add(l)}return n}createHouse(e,t,{scale:n=1}={}){const i=new We;i.position.set(e,0,t),i.rotation.y=Math.random()*Math.PI*2;const r=new Z({color:9807270}),o=new Z({color:12597547});[{w:6,h:4,d:.5,x:0,y:2,z:-3},{w:.5,h:4,d:6,x:-3,y:2,z:0},{w:.5,h:4,d:6,x:3,y:2,z:0},{w:2,h:4,d:.5,x:-2,y:2,z:3},{w:2,h:4,d:.5,x:2,y:2,z:3},{w:2,h:1,d:.5,x:0,y:3.5,z:3}].forEach(g=>{const _=new z(new ee(g.w,g.h,g.d),r);_.position.set(g.x,g.y,g.z),_.castShadow=!0,_.receiveShadow=!0,i.add(_),this.objects.push(_)});const c=new z(new oi(5,2,4),o);c.position.y=5,c.rotation.y=Math.PI/4,c.castShadow=!0,i.add(c);const l=new Z({color:5057307}),h=new z(new ee(1,2.2,.1),l);h.position.set(0,1.1,3.26),i.add(h);const u=new Z({color:8962303,metalness:.1,roughness:.2,transparent:!0,opacity:.8}),d=new z(new ee(1,1,.05),u);d.position.set(-2,2.2,-3.26);const p=d.clone();return p.position.set(2,2.2,-3.26),i.add(d),i.add(p),i.scale.setScalar(n),i}createPlateau(e,t,n=10,i=8,r=0){const o=new We,a=new Z({color:8355711,roughness:1}),c=new z(new ft(n,n*1.05,i,16,1),a);c.position.set(0,i/2,0),c.castShadow=!0,c.receiveShadow=!0,o.add(c);const l=n*1.4,h=i,u=n*.8,d=new ee(u,h,l),p=new z(d,new Z({color:9342606,roughness:1}));p.castShadow=!0,p.receiveShadow=!0;const g=Math.atan(h/l);p.rotation.x=-g,p.position.set(0,h/2,n),p.userData={type:"house"},o.add(p);const _=new ee(u,.2,l),m=new z(_,new Z({color:7105644}));return m.position.set(0,h,n),m.rotation.x=p.rotation.x,m.castShadow=!0,o.add(m),o.position.set(e,r,t),o.userData={type:"house"},o}createSmallBuilding(e,t){const n=new We;n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI*2;const i=new Z({color:8359053}),r=new Z({color:12436423}),o=8,a=8,c=6,l=.35,h=2.2,u=o/2,d=a/2,p=new z(new ee(o,c,l),i);p.position.set(0,c/2,-d);const g=new z(new ee(l,c,a),i);g.position.set(-u,c/2,0);const _=g.clone();_.position.x=u;const m=new z(new ee((o-h)/2,c,l),i);m.position.set(-2.55,c/2,d);const f=m.clone();f.position.x=h/2+(o-h)/4,[p,g,_,m,f].forEach(v=>{v.castShadow=!0,v.receiveShadow=!0,n.add(v)});const y=new z(new ee(o-.4,.3,a-.4),r);y.position.y=.15,y.receiveShadow=!0,n.add(y);const x=new z(new ee(o-.4,.3,a-.4),r);x.position.y=3.4,x.receiveShadow=!0,n.add(x);const S=x.position.y,C=10,T=new ee(3,S,C),A=new z(T,r);A.position.set(0,S/2,d+C/2),A.rotation.x=-Math.atan(S/C),A.castShadow=!0,A.receiveShadow=!0,n.add(A);const I=new z(new ee(o+.4,.4,a+.4),new Z({color:9807270}));return I.position.y=c+.2,I.castShadow=!0,n.add(I),n}spawnPrefab(e,t,n,i={}){const r=this.getHeightAt&&typeof this.getHeightAt=="function"?this.getHeightAt(t,n):0;let o=null;switch(e){case"house":{o=this.createHouse(t,n,{scale:1}),o.position.y=r,o.userData={gameId:this.generateID(),gameName:"House",type:"house"};break}case"mansion":{o=this.createHouse(t,n,{scale:1.6}),o.position.y=r,o.userData={gameId:this.generateID(),gameName:"Mansion",type:"house",size:"large"};break}case"cabin":{o=this.createHouse(t,n,{scale:.85}),o.position.y=r,o.userData={gameId:this.generateID(),gameName:"Cabin",type:"house",size:"small"};break}case"smallBuilding":{o=this.createSmallBuilding(t,n),o.position.y=r,o.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"};break}case"plateau":{const a=this.createPlateau(t,n,10+Math.random()*6,8+Math.random()*6,r);a.userData={gameId:this.generateID(),gameName:"Plateau",type:"house",size:"large"},o=a;break}case"rock":{o=this.createRock(t,n),o.position.y=r,o.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"};break}case"tree":{const a=i.variant||(Math.random()>.5?"Oak":"Pine");o=this.createTree(t,n,a),o.position.y=r,o.userData={gameId:this.generateID(),gameName:`Tree_${a}`,type:"tree"};break}case"vehicle":{const a=i.variant||(Math.random()>.6?"truck":"car");o=this.createVehicle(t,n,a),o.position.y=r,o.userData={gameId:this.generateID(),gameName:`Vehicle_${a}`,type:"vehicle"};break}case"crate":{const a=new z(new ee(2,2,2),new Z({color:9342606,roughness:.9}));a.position.set(t,r+1,n),a.castShadow=!0,a.receiveShadow=!0,a.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},o=a;break}}return o&&(this.scene.add(o),this.objects.push(o)),o}createArenaBunker(e,t){const n=new We;n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI*2;const i=new Jn({color:4937059,flatShading:!0}),r=new Jn({color:6253691,flatShading:!0}),o=new z(new ee(6,2.5,6),i);o.position.y=1.25,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new z(new ee(6.2,.3,6.2),r);a.position.y=2.65,a.castShadow=!0,n.add(a);const c=new z(new ee(1.2,1.8,.2),new Jn({color:9280168,flatShading:!0,transparent:!0,opacity:.2}));c.position.set(0,.9,3.1),n.add(c);const l=new ee(2,1.2,4),h=new z(l,r);return h.position.set(-2.5,.6,-1),h.rotation.x=-Math.atan(1.2/4),h.castShadow=!0,h.receiveShadow=!0,h.userData={type:"house"},n.add(h),n}createStormVisuals(){if(this.gameMode==="matrix")return;const e=new ft(this.stormRadius,this.stormRadius,50,32,1,!0),t=new In({color:9323693,transparent:!0,opacity:.3,side:Ot});this.stormMesh=new z(e,t),this.stormMesh.position.y=25,this.scene.add(this.stormMesh)}createTarget(e,t){const n=new We;n.position.set(e,0,t);const i=new z(new ft(.05,.05,2,6),new Z({color:8947848}));i.position.y=1,n.add(i);const r=new Ei(.8,24),o=new Z({color:16777215}),a=new z(r,o);a.position.set(0,2,0),a.rotation.y=Math.PI,n.add(a);const c=new Z({color:16729156}),l=new Z({color:15844367}),h=new Z({color:3447003}),u=(p,g)=>{const _=new z(new br(p,.02,6,24),g);return _.rotation.x=Math.PI/2,_.position.y=2,_};n.add(u(.75,h)),n.add(u(.55,c)),n.add(u(.35,l));const d=new z(new Ei(.1,12),new Z({color:0}));return d.position.set(0,2.01,0),d.rotation.y=Math.PI,n.add(d),n.userData={gameId:this.generateID(),gameName:"Target",type:"house"},n}update(e,t){if(this.gameMode==="matrix"||this.gameMode==="studio")return{inStorm:!1};if(this.stormRadius>10){this.stormRadius-=this.stormShrinkRate*e;const i=this.initialStormRadius?this.stormRadius/this.initialStormRadius:1;this.stormMesh.scale.set(i,1,i)}return{inStorm:Math.sqrt(t.x*t.x+t.z*t.z)>this.stormRadius}}_buildHeightFn(){return()=>0}_tagStaticCollider(e,t=null){if(!e)return;e.updateWorldMatrix(!0,!0);const n=new vn().setFromObject(e);e.userData=e.userData||{},t&&!e.userData.type&&(e.userData.type=t),e.userData.colliderBox=n,e.userData.colliderType="solid"}getHeightAt(e,t){return this._heightFn?this._heightFn(e,t):0}}const Np="modulepreload",Fp=function(s){return"/threejs-voxel-firecraft/dist/"+s},da={},Bp=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=Fp(c),c in da)return;da[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Np,l||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},Qn=new fi(0,0,0,"YXZ"),ei=new R,Op={type:"change"},kp={type:"lock"},zp={type:"unlock"},fa=Math.PI/2;class Hp extends Nn{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Gp.bind(this),this._onPointerlockChange=Vp.bind(this),this._onPointerlockError=Wp.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;ei.setFromMatrixColumn(t.matrix,0),ei.crossVectors(t.up,ei),t.position.addScaledVector(ei,e)}moveRight(e){const t=this.camera;ei.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ei,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Gp(s){if(this.isLocked===!1)return;const e=s.movementX||s.mozMovementX||s.webkitMovementX||0,t=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.camera;Qn.setFromQuaternion(n.quaternion),Qn.y-=e*.002*this.pointerSpeed,Qn.x-=t*.002*this.pointerSpeed,Qn.x=Math.max(fa-this.maxPolarAngle,Math.min(fa-this.minPolarAngle,Qn.x)),n.quaternion.setFromEuler(Qn),this.dispatchEvent(Op)}function Vp(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(kp),this.isLocked=!0):(this.dispatchEvent(zp),this.isLocked=!1)}function Wp(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Xp="/threejs-voxel-firecraft/dist/assets/mixkit-game-gun-shot-D1lu3gfh.ogg",qp="/threejs-voxel-firecraft/dist/assets/smack-BAv2er9i.ogg",jp="/threejs-voxel-firecraft/dist/assets/ugh-CPf3Qqe6.ogg",Yp="/threejs-voxel-firecraft/dist/assets/mixkit-footsteps-on-tall-grass-532-DkmduvPT.ogg",Kp="/threejs-voxel-firecraft/dist/assets/mixkit-car-door-slam-xN3cwxzE.wav";class $p{constructor(e,t,n,i={}){this.camera=e,this.scene=t,this.worldObjects=n,this.world=null,this.gameMode=i.gameMode||"survival",this.showTracers=i.showTracers===!0,this.backpack=null,this.backpackColor=null,this.placedBlocks=[],this.blockSize=1,this.minBlockSize=.5,this.maxBlockSize=2,this.previewBlock=null,this.isFloating=!1,this.selectedBlock=null,this.selectedBlockHelper=null,this.health=100,this.shield=100,this.isDead=!1,this.stamina=100,this.punchCount=0,this.isTired=!1,this.velocity=new R,this.direction=new R,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.canJump=!1,this.speed=42,this.jumpHeight=30,this.gravity=250,this.distanceTraveled=0,this.previousPosition=new R,this.allWeapons=[{name:"Pistol",ammo:12,maxAmmo:60,magazineSize:12,currentMag:12,damage:20,cooldown:.5,lastShot:0,reloadTime:1.5,range:50},{name:"Fist",ammo:1/0,maxAmmo:1/0,magazineSize:1/0,currentMag:1/0,damage:10,cooldown:.2,lastShot:0,reloadTime:0,range:3},{name:"Rifle",ammo:30,maxAmmo:120,magazineSize:30,currentMag:30,damage:25,cooldown:.15,lastShot:0,reloadTime:2,range:120,zoomFov:30},{name:"Sniper",ammo:5,maxAmmo:20,magazineSize:5,currentMag:5,damage:100,cooldown:2,lastShot:0,reloadTime:3,range:400,zoomFov:12},{name:"SMG",ammo:40,maxAmmo:200,magazineSize:40,currentMag:40,damage:15,cooldown:.08,lastShot:0,reloadTime:1.8,range:80},{name:"Shotgun",ammo:6,maxAmmo:24,magazineSize:6,currentMag:6,damage:60,cooldown:1,lastShot:0,reloadTime:2.5,range:25},{name:"DMR",ammo:12,maxAmmo:48,magazineSize:12,currentMag:12,damage:45,cooldown:.35,lastShot:0,reloadTime:2.2,range:200,zoomFov:18}],this.weapons=[this.allWeapons[1],this.allWeapons[0]],this.currentWeaponIndex=0,this.isReloading=!1,this.controls=new Hp(e,document.body),document.addEventListener("pointerlockerror",r=>{try{r.stopImmediatePropagation()}catch{}console.warn("Pointer lock request failed or unavailable in this environment.")},!0),this.allowTouchMovement=!1,this._touchYaw=0,this._touchPitch=0,document.addEventListener("fullscreenchange",()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}),this.createPlayerMesh(),this.cameraMode=i.cameraMode||"TPS",this.fpsCameraOffset=new R(0,1.6,0),this.tpsCameraOffset=new R(1,1.8,3.4),this.initControls(),this.sfxVolume=.7,this.sfxVolume=.7,this.gunshotBuffer=null,this.reloadBuffer=null,this.smackBuffer=null,this.ughBuffer=null,this.footstepsBuffer=null,this._footstepsSource=null,this._footstepsGain=null,this.vehicleDoorBuffer=null,this.vehicleDriveBuffer=null,this._vehicleDriveSource=null,this._vehicleDriveGain=null,this._lastVehicleDriveActive=!1,this.enableVehicleDriveSound=!1,this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer=null,this._lastFootstepsActive=!1,this.isCrouching=!1,this.crouchHeight=.8,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.vehicleBaseMaxSpeed=70,this.vehicleBoostMax=45,this.vehicleAccel=70,this.vehicleTurnSpeed=1.8,this.vehicleFriction=2.8,this.vehicleAccelHold=0,this.vehiclePromptEl=document.getElementById("interaction-prompt"),this.nearVehicle=null,this.vehicleFuel=0,this.vehicleFuelCapacity=0,this.vehicleDistance=0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=0,this.vehicleEfficiencyKmPerL=10,this.vehicleIdleLph=.4,this.vehicleThrottleLph=.8,this._vehicleStateCache=null,this.vehicleTurbo=!1,this.currentSpeed=0,this.vehicleHud={root:document.getElementById("vehicle-hud"),speed:document.getElementById("vehicle-speed"),fuelBar:document.getElementById("vehicle-fuel-bar"),fuelFill:document.getElementById("vehicle-fuel-fill"),fuelText:document.getElementById("vehicle-fuel-text"),distance:document.getElementById("vehicle-distance"),efficiency:document.getElementById("vehicle-efficiency"),range:document.getElementById("vehicle-range")},this.studioSelected=null,this._studioRaycaster=new Kt,this.studioSelectionHelper=null,this.selectionInfo=document.getElementById("selection-info"),this.controls.enabled=this.gameMode!=="studio";try{const r=window.AudioContext||window.webkitAudioContext;r&&(this.audioCtx=new r,fetch(Xp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.gunshotBuffer=o}).catch(o=>console.warn("Error loading gunshot SFX:",o)),Bp(()=>import("./mixkit-shotgun-recharge-CcrH8C2K.js"),[]).then(o=>fetch(o.default)).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.reloadBuffer=o}).catch(o=>console.warn("Error loading reload SFX:",o)),fetch(qp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.smackBuffer=o}).catch(o=>console.warn("Error loading smack SFX:",o)),fetch(jp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.ughBuffer=o}).catch(o=>console.warn("Error loading hurt SFX:",o)),fetch(Yp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.footstepsBuffer=o}).catch(o=>console.warn("Error loading footsteps SFX:",o)),fetch(Kp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.vehicleDoorBuffer=o}).catch(o=>console.warn("Error loading vehicle door SFX:",o)))}catch(r){console.warn("Web Audio API not supported:",r)}}placeBlock(){if(!this.world)return;const e=this.getBlockTarget(),t=e.size,n=new ee(t,t,t),i=new Z({color:11887901,roughness:.9}),r=new z(n,i);r.position.copy(e.position),r.castShadow=!0,r.receiveShadow=!0,r.userData={type:"block",size:t,gameId:this.world.generateID?this.world.generateID():void 0,gameName:"Block"},this.scene.add(r),this.world.objects&&this.world.objects.push(r),this.placedBlocks.push(r)}createPlayerMesh(){this.mesh=new We,this.scene.add(this.mesh);const e=new Z({color:3447003}),t=new Z({color:16764074}),n=new Z({color:2899536});this.head=new z(new ee(.5,.5,.5),t),this.head.position.y=1.75,this.mesh.add(this.head);const i=new Z({color:15158332}),r=new z(new ee(.52,.1,.52),i);r.position.set(0,.3,0),this.head.add(r);const o=new z(new ee(.52,.02,.35),i);o.position.set(0,.22,.35),this.head.add(o);const a=new Z({color:0}),c=new Z({color:1710618,transparent:!0,opacity:.7,metalness:.8,roughness:.2}),l=new z(new ee(.18,.12,.02),c);l.position.set(-.12,.05,.26),this.head.add(l);const h=new z(new ee(.18,.12,.02),c);h.position.set(.12,.05,.26),this.head.add(h);const u=new z(new ee(.08,.02,.02),a);u.position.set(0,.05,.26),this.head.add(u);const d=new z(new ee(.02,.02,.3),a);d.position.set(-.21,.05,.1),this.head.add(d);const p=new z(new ee(.02,.02,.3),a);p.position.set(.21,.05,.1),this.head.add(p);const g=new z(new ee(.6,.8,.3),e);g.position.y=1.1,this.mesh.add(g);const _=new ee(.2,.8,.2);_.translate(0,-.3,0),this.leftArmPivot=new We,this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot);const m=new z(_,t);this.leftArmPivot.add(m),this.rightArmPivot=new We,this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot);const f=new z(_,t);this.rightArmPivot.add(f),this.weaponModels={};const y=new We,x=new z(new ee(.12,.12,.35),new Z({color:1710618,metalness:.8,roughness:.3}));x.position.set(0,-.28,.2);const S=new z(new ee(.06,.06,.15),new Z({color:657930,metalness:.9,roughness:.2}));S.position.set(0,-.28,.4);const C=new z(new ee(.1,.25,.12),new Z({color:2894892}));C.position.set(0,-.42,.15);const T=new z(new ee(.03,.05,.03),new Z({color:1710618}));T.position.set(0,-.35,.18),y.add(x,S,C,T),this.rightArmPivot.add(y),this.weaponModels.Pistol=y;const A=new We,I=new z(new ee(.08,.08,.9),new Z({color:1710618,metalness:.8,roughness:.3}));I.position.set(0,-.28,.45);const v=new z(new ee(.12,.14,.4),new Z({color:2894892}));v.position.set(0,-.3,.2);const w=new z(new ee(.1,.22,.12),new Z({color:2894892}));w.position.set(0,-.44,.15);const N=new z(new ee(.1,.12,.25),new Z({color:3815994}));N.position.set(0,-.28,-.1);const H=new z(new ee(.08,.25,.1),new Z({color:1710618}));H.position.set(0,-.5,.2),A.add(I,v,w,N,H),this.rightArmPivot.add(A),this.weaponModels.Rifle=A;const X=new We,L=new z(new ee(.08,.08,1.3),new Z({color:1727514,metalness:.6,roughness:.4}));L.position.set(0,-.28,.65);const U=new z(new ee(.14,.16,.5),new Z({color:2969622}));U.position.set(0,-.3,.25);const V=new z(new ft(.06,.06,.35,8),new Z({color:657930,metalness:.9,roughness:.1}));V.rotation.z=Math.PI/2,V.position.set(0,-.18,.4);const j=new z(new ft(.05,.05,.02,8),new Z({color:1723791,metalness:.9,roughness:.1,emissive:663616}));j.rotation.z=Math.PI/2,j.position.set(0,-.18,.58);const q=new z(new ee(.12,.14,.3),new Z({color:3811866}));q.position.set(0,-.28,-.05);const Y=new z(new ee(.02,.15,.02),new Z({color:1710618}));Y.position.set(0,-.42,.5),X.add(L,U,V,j,q,Y),this.rightArmPivot.add(X),this.weaponModels.Sniper=X,Object.values(this.weaponModels).forEach(pe=>pe.visible=!1);const K=A.clone();K.traverse(pe=>{pe.material&&pe.material.color&&pe.material.color.setHex(5598095)}),K.scale.set(.8,.8,.8),this.rightArmPivot.add(K),this.weaponModels.SMG=K;const ie=A.clone();ie.traverse(pe=>{pe.material&&pe.material.color&&pe.material.color.setHex(9132587)}),ie.scale.set(1.1,1,.8),this.rightArmPivot.add(ie),this.weaponModels.Shotgun=ie;const se=A.clone();se.traverse(pe=>{pe.material&&pe.material.color&&pe.material.color.setHex(3050327)}),se.scale.set(.95,.95,1),this.rightArmPivot.add(se),this.weaponModels.DMR=se;const W=new ee(this.blockSize,this.blockSize,this.blockSize),$=new Z({color:3066993,transparent:!0,opacity:.35,wireframe:!0});this.previewBlock=new z(W,$),this.previewBlock.visible=this.gameMode==="studio",this.previewBlock.castShadow=!1,this.previewBlock.receiveShadow=!1,this.scene.add(this.previewBlock);const le=new ee(.25,.8,.25);le.translate(0,-.4,0),this.leftLegPivot=new We,this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot);const _e=new z(le,n);this.leftLegPivot.add(_e),this.rightLegPivot=new We,this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot);const me=new z(le,n);if(this.rightLegPivot.add(me),this.isAiming=!1,this.baseFov=75,this.aimFov=20,this.hitTimer=0,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.isPunching=!1,this.punchSide=0,this.isBlocking=!1,this.yaw=0,this.pitch=0,this.camera){const pe=new fi().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=pe.y,this.pitch=pe.x}}rotateCamera(e,t){if(!this.controls||!this.controls.isLocked){this.yaw-=e,this.pitch-=t;const n=Math.PI/2-.01;this.pitch=Math.max(-n,Math.min(n,this.pitch)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}initControls(){const e=r=>{if(this.gameMode==="studio"&&this.studioSelected)switch(r.code){case"ArrowUp":r.shiftKey?this.moveSelectedObject(0,0,1.5):this.moveSelectedObject(0,-2),r.preventDefault();return;case"ArrowDown":r.shiftKey?this.moveSelectedObject(0,0,-1.5):this.moveSelectedObject(0,2),r.preventDefault();return;case"ArrowLeft":this.moveSelectedObject(-2,0),r.preventDefault();return;case"ArrowRight":this.moveSelectedObject(2,0),r.preventDefault();return;case"KeyX":this.removeSelectedObject(),r.preventDefault();return}switch(r.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"Digit1":this.switchWeapon(0);break;case"Digit2":this.switchWeapon(1);break;case"Digit3":this.switchWeapon(2);break;case"Digit4":this.switchWeapon(3);break;case"Digit5":this.switchWeapon(4);break;case"Digit6":this.switchWeapon(5);break;case"Numpad1":this.switchWeapon(0);break;case"Numpad2":this.switchWeapon(1);break;case"Numpad3":this.switchWeapon(2);break;case"Numpad4":this.switchWeapon(3);break;case"Numpad5":this.switchWeapon(4);break;case"Numpad6":this.switchWeapon(5);break;case"KeyB":this.gameMode==="studio"&&this.placeBlock();break;case"KeyU":if(this.gameMode==="studio"&&(this.isFloating=!this.isFloating,!this.isFloating)){const o=this.getSurfaceHeight(this.position.x,this.position.z);this.mesh.position.y=o,this.velocity.y=0}break;case"Minus":this.gameMode==="studio"&&this.adjustBlockSize(-.1);break;case"Equal":this.gameMode==="studio"&&this.adjustBlockSize(.1);break;case"KeyM":this.gameMode==="studio"&&this.moveLastBlock();break;case"KeyX":this.gameMode==="studio"&&(this.studioSelected?this.removeSelectedObject():this.selectedBlock?this.removeBlock(this.selectedBlock):this.removeLastBlock());break;case"KeyR":this.reload();break;case"KeyC":this.isCrouching=!this.isCrouching,this.isCrouching&&(this.isSprinting=!1);break;case"ShiftLeft":case"ShiftRight":this.isCrouching||(this.isSprinting=!0);break;case"Space":!this.isInVehicle&&this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"KeyN":this.isInVehicle&&(this.vehicleTurbo=!0);break;case"KeyV":this.toggleCameraMode();break;case"KeyE":if(this.isInVehicle){this.exitVehicle();return}else{const o=this.findNearbyVehicle();if(o){this.enterVehicle(o);return}}break}},t=r=>{switch(r.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break;case"Space":break;case"KeyN":this.vehicleTurbo=!1;break}},n=r=>{this.gameMode==="studio"&&(this.selectStudioObject(r)||this.selectBlockUnderCrosshair())||this.controls.isLocked&&(r.button===0?this.shoot():r.button===2&&(this.isAiming=!0))},i=r=>{r.button===2&&(this.isAiming=!1)};document.addEventListener("keydown",e),document.addEventListener("keyup",t),document.addEventListener("mousedown",n),document.addEventListener("mouseup",i),document.addEventListener("contextmenu",r=>r.preventDefault())}lockControls(){if(!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)){console.warn("Pointer Lock API not available in this environment.");return}const t=document.getElementById("main-menu");if(!(t&&t.style.display!=="none")&&!this.isPaused)try{const n=this.controls.lock();n&&typeof n.catch=="function"&&n.catch(()=>{})}catch(n){console.warn("Unable to lock pointer:",n)}}toggleCameraMode(){this.cameraMode=this.cameraMode==="FPS"?"TPS":"FPS",this.mesh&&(this.mesh.visible=this.cameraMode==="TPS"),console.log(`Camera mode: ${this.cameraMode}`)}switchWeapon(e){if(e>=0&&e<this.weapons.length){if(this.isReloading)return;this.currentWeaponIndex=e;const t=this.weapons[e].name;Object.values(this.weaponModels).forEach(n=>n.visible=!1),this.weaponModels[t]&&(this.weaponModels[t].visible=!0)}}reload(){if(this.isReloading)return;const e=this.weapons[this.currentWeaponIndex];e.ammo!==1/0&&e.currentMag!==e.magazineSize&&(e.ammo<=0||(this.isReloading=!0,console.log("Reloading..."),this.playReloadSound(),setTimeout(()=>{this.finishReload()},e.reloadTime*1e3)))}playReloadSound(){try{if(this.audioCtx&&this.reloadBuffer){this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.createBufferSource();e.buffer=this.reloadBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume*.8,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}catch(e){console.warn("Error playing reload sound:",e)}}finishReload(){if(!this.isReloading)return;const e=this.weapons[this.currentWeaponIndex],t=e.magazineSize-e.currentMag,n=e.ammo,i=Math.min(t,n);e.currentMag+=i,e.ammo-=i,this.isReloading=!1,console.log("Reloaded!")}startBlocking(){this.weapons[this.currentWeaponIndex].name==="Fist"&&(this.isBlocking=!0)}stopBlocking(){this.isBlocking=!1}collectItem(e){if(e==="ShieldPotion"){this.shield=Math.min(100,this.shield+50);return}if(e&&e.startsWith("Backpack:")){const n=e.split(":")[1]||"2c3e50";return this.equipBackpack(parseInt(n,16))}const t=this.weapons.find(n=>n.name===e);if(t)t.ammo=Math.min(t.maxAmmo,t.ammo+t.magazineSize),console.log("Added ammo for "+e);else{const n=this.allWeapons.find(i=>i.name===e);n&&(this.weapons.push(n),console.log("Picked up "+e))}}setEnemyManager(e){this.enemyManager=e}shoot(){if(!(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0)||this.isDead||this.isReloading||this.isBlocking)return;const t=this.weapons[this.currentWeaponIndex],n=performance.now()/1e3;if(n-t.lastShot<t.cooldown)return;if(t.currentMag<=0){this.reload();return}if(t.lastShot=n,t.ammo!==1/0&&t.currentMag--,t.name==="Fist"){this.punch();return}this.createMuzzleFlash();try{if(this.audioCtx&&this.gunshotBuffer&&this.audioCtx.state==="running"){const c=this.audioCtx.createBufferSource();c.buffer=this.gunshotBuffer,t.name==="Pistol"?c.playbackRate.value=1:t.name==="Rifle"?c.playbackRate.value=1.15:t.name==="Sniper"?c.playbackRate.value=.9:c.playbackRate.value=1;const l=this.audioCtx.createGain();l.gain.value=this.sfxVolume,c.connect(l),l.connect(this.audioCtx.destination),c.start(0)}else this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}catch{}const i=new Kt;i.setFromCamera(new we(0,0),this.camera);const r=this.camera.position.clone();new R,i.ray.direction.clone().normalize();let o=r.clone().add(i.ray.direction.clone().multiplyScalar(1e3)),a=!1;if(this.worldObjects&&this.worldObjects.length>0){const c=i.intersectObjects(this.worldObjects,!0);c.length>0&&(o=c[0].point.clone(),a=!0)}if(this.enemyManager&&this.enemyManager.enemies){const c=i.intersectObjects(this.enemyManager.enemies.map(l=>l.mesh),!0);if(c.length>0){const l=c[0].point,h=r.distanceTo(l),u=r.distanceTo(o);if(h<u){const d=c[0].object;o=l.clone(),a=!0;let p=null;if(p=(_=>{let m=_;for(;m;){const f=this.enemyManager.enemies.find(y=>y.mesh===m);if(f)return f;m=m.parent}return null})(d),p){const _=r.distanceTo(p.position),m=t.range||1e3;_<=m?p.takeDamage(t.damage):a=!1}}}}this.showTracers&&this.createBulletTracer(r,o,a),a&&t.name==="Sniper"&&this.createImpactSmoke(o)}createMuzzleFlash(){const e=new Tp(16776960,1,5),t=new R;this.camera.getWorldDirection(t),e.position.copy(this.mesh.position),e.position.y+=1.5,e.position.add(t.multiplyScalar(1)),this.scene.add(e),setTimeout(()=>this.scene.remove(e),100)}createBulletTracer(e,t,n){const i=[e,t],r=new mt().setFromPoints(i),o=n?16729156:16776960,a=new Ms({color:o,linewidth:2,opacity:.8,transparent:!0}),c=new Wa(r,a);this.scene.add(c);let l=.8;const h=setInterval(()=>{l-=.1,a.opacity=l,l<=0&&(clearInterval(h),this.scene.remove(c),r.dispose(),a.dispose())},30)}createImpactSmoke(e){const t=new We;t.position.copy(e);const n=8;for(let a=0;a<n;a++){const c=.15+Math.random()*.2,l=new ai(c,6,6),h=new In({color:6710886,transparent:!0,opacity:.5}),u=new z(l,h);u.position.set((Math.random()-.5)*.4,(Math.random()-.5)*.2,(Math.random()-.5)*.4),t.add(u)}this.scene.add(t);const i=600,r=performance.now(),o=()=>{const a=performance.now()-r,c=Math.max(0,1-a/i);t.children.forEach(l=>{l.material&&(l.material.opacity=c*.5)}),a<i?requestAnimationFrame(o):(t.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),this.scene.remove(t))};o()}update(e){if(this.isDead)return;if(this.updateVehiclePrompt(),this.isInVehicle){this.updateVehicleDrive(e);return}if(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0){this.velocity.x-=this.velocity.x*10*e,this.velocity.z-=this.velocity.z*10*e,this.isFloating?this.velocity.y*=.9:this.velocity.y-=this.gravity*e,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*this.speed*e),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*this.speed*e);const n=new R;this.camera.getWorldDirection(n),n.y=0,n.normalize();const i=new R;i.crossVectors(n,new R(0,1,0));const r=new R;this.moveForward&&r.add(n),this.moveBackward&&r.sub(n),this.moveRight&&r.add(i),this.moveLeft&&r.sub(i),r.normalize();const o=r.length()>0;let a=1;this.isSprinting&&!this.isCrouching&&o&&this.stamina>0&&(a=2);const c=this.speed*e*.1*a,l=r.multiplyScalar(c);l.x!==0&&(this.checkCollision(new R(Math.sign(l.x),0,0),Math.abs(l.x))||(this.mesh.position.x+=l.x)),l.z!==0&&(this.checkCollision(new R(0,0,Math.sign(l.z)),Math.abs(l.z))||(this.mesh.position.z+=l.z));let h=0;if(this.isFloating){const f=new R;this.camera.getWorldDirection(f);const y=f.y;this.moveForward&&(h+=y*this.speed*e*.3),this.moveBackward&&(h-=y*this.speed*e*.3)}if(this.mesh.position.y+=this.velocity.y*e+h,r.length()>0){const f=Math.atan2(r.x,r.z);this.mesh.rotation.y=f}if(this.mesh.position.y+=this.velocity.y*e,!this.isFloating&&!this.isFloating){this.mesh.position.y<0&&(this.velocity.y=0,this.mesh.position.y=0,this.canJump=!0);const f=this.getSurfaceHeight(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<f&&(this.mesh.position.y=f,this.velocity.y=0,this.canJump=!0)}const u=!this.isFloating&&(this.canJump||this.mesh.position.y<=.01);if(this.handleFootsteps(o&&u&&!this.isDead),this.gameMode==="studio"?this.updateBlockPreview():this.previewBlock&&(this.previewBlock.visible=!1),this.world&&typeof this.world.halfMapSize=="number"){const f=this.world.halfMapSize-1;this.mesh.position.x=Math.max(-f,Math.min(f,this.mesh.position.x)),this.mesh.position.z=Math.max(-f,Math.min(f,this.mesh.position.z))}if(this.previousPosition.length()>0){const f=this.mesh.position.distanceTo(this.previousPosition);this.distanceTraveled+=f,e>0&&(this.currentSpeed=f/e)}if(this.previousPosition.copy(this.mesh.position),this.isSprinting&&!this.isCrouching&&o&&this.stamina>0){if(this.gameMode!=="studio"){const f=20*e;this.stamina=Math.max(0,this.stamina-f),this.stamina<=0&&(this.isSprinting=!1)}}else if(this.gameMode!=="studio"){const f=10*e;this.stamina=Math.min(100,this.stamina+f)}this.gameMode==="studio"&&(this.stamina=100),this.camera.position.copy(this.mesh.position);const d=this.isCrouching?1.6*this.crouchHeight:1.6;this.camera.position.y+=d;const p=this.isCrouching?this.crouchHeight:1;this.mesh.scale.y+=(p-this.mesh.scale.y)*10*e;let g=this.baseFov;const _=this.weapons[this.currentWeaponIndex];this.isAiming&&_&&_.zoomFov&&(g=_.zoomFov),Math.abs(this.camera.fov-g)>.1&&(this.camera.fov+=(g-this.camera.fov)*10*e,this.camera.updateProjectionMatrix());let m;this.cameraMode==="FPS"?m=this.fpsCameraOffset.clone():(m=this.tpsCameraOffset.clone(),m.applyQuaternion(this.camera.quaternion)),m.add(this.mesh.position),this.camera.position.copy(m),this.updateAnimations(e)}}findNearbyVehicle(){if(!this.worldObjects)return null;let e=null,t=4;return this.worldObjects.forEach(n=>{if(!n||!n.userData||n.userData.type!=="vehicle")return;const i=n.position.distanceTo(this.mesh.position);i<t&&(e=n,t=i)}),e}updateVehiclePrompt(){const e=this.vehiclePromptEl;if(!e)return;if(this.isInVehicle){e.innerText="Press E to exit vehicle",e.dataset.vehiclePrompt="1",e.classList.remove("hidden");return}const t=this.findNearbyVehicle();this.nearVehicle=t,t?(e.innerText="Press E to drive vehicle",e.dataset.vehiclePrompt="1",e.classList.remove("hidden")):e.dataset.vehiclePrompt==="1"&&(e.classList.add("hidden"),delete e.dataset.vehiclePrompt)}enterVehicle(e){if(!e||this.isInVehicle)return!1;e.userData||(e.userData={}),e.userData.hasFrontAligned||(e.rotation.y+=Math.PI,e.userData.hasFrontAligned=!0);const t=this.loadVehicleState(e);this.isInVehicle=!0,this.vehicleAccelHold=0,this.isSprinting=!1,this.vehicleTurbo=!1,this.currentVehicle=e,this.vehicleSpeed=0,this.currentSpeed=0;const n=e.userData&&e.userData.vehicleType||"car";return this.vehicleFuelCapacity=t?t.capacity:n==="truck"?60:40,this.vehicleFuel=t?t.fuel:this.vehicleFuelCapacity,this.vehicleDistance=t?t.distanceKm:0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=t?t.fuelUsed:0,this.vehicleEfficiencyKmPerL=n==="truck"?3.5:5.5,this.vehicleIdleLph=n==="truck"?1:.7,this.vehicleThrottleLph=n==="truck"?2.8:1.9,this._vehicleMaxSpeed=n==="truck"?80/3.6:null,this._vehicleTurboMaxSpeed=n==="truck"?100/3.6:null,this._vehicleStateCache=t||null,this.previousPosition.copy(e.position),this.stopFootsteps(),this.stopVehicleDriveSound(),this.playVehicleDoor(),this.mesh.visible=!1,this.velocity.set(0,0,0),this.mesh.position.copy(e.position),this.updateVehicleHUD(!0),!0}exitVehicle(){if(!this.currentVehicle){this.isInVehicle=!1;return}const e=this.currentVehicle;if(this.playVehicleDoor(),this.stopVehicleDriveSound(),this.stopFootsteps(),this.world&&typeof this.world.getHeightAt=="function"){const r=this.world.getHeightAt(e.position.x,e.position.z),o=this.getVehicleGroundClearance(e);e.position.y=r+o}const t=new R(-1.5,0,-2).applyEuler(e.rotation),n=e.position.clone().add(t);this.mesh.position.copy(n);const i=typeof this.getSurfaceHeight=="function"?this.getSurfaceHeight(n.x,n.z):this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(n.x,n.z):n.y;this.mesh.position.y=i,this.velocity.set(0,0,0),this.mesh.visible=!0,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.canJump=!0,this.previousPosition.copy(this.mesh.position),this.saveVehicleState(e),this.updateVehicleHUD(!1),this.vehiclePromptEl&&this.vehiclePromptEl.dataset.vehiclePrompt==="1"&&(this.vehiclePromptEl.classList.add("hidden"),delete this.vehiclePromptEl.dataset.vehiclePrompt)}getVehicleGroundClearance(e){if(!e)return .05;const t=e.userData||{};return typeof t.groundClearance=="number"?t.groundClearance:typeof t.wheelRadius=="number"&&typeof t.wheelCenterY=="number"?Math.max(0,t.wheelRadius-t.wheelCenterY):.05}updateVehicleDrive(e){const t=this.currentVehicle;if(!t){this.isInVehicle=!1;return}this.stopFootsteps();const n=t.position.clone();if(this.vehicleFuel<=0){this.vehicleSpeed=0,this.mesh.position.copy(t.position),this.previousPosition.copy(t.position),this.currentSpeed=0,this.updateVehicleHUD(!0);return}let i=0;this.moveForward&&(i+=1),this.moveBackward&&(i-=1),this.vehicleSpeed+=i*this.vehicleAccel*e,this.moveForward&&i>0?this.vehicleAccelHold=Math.min(1,this.vehicleAccelHold+e*.8):this.vehicleAccelHold=Math.max(0,this.vehicleAccelHold-e*.6);const r=this.vehicleTurbo&&i>0,o=r?vType==="truck"?1.25:1.6:1,a=r?vType==="truck"?1.15:1.35:1,c=(this.vehicleBaseMaxSpeed+this.vehicleBoostMax*this.vehicleAccelHold)*o,l=this.vehicleBaseMaxSpeed*.5;this.vehicleSpeed=Math.min(c,Math.max(-l,this.vehicleSpeed)),this.vehicleSpeed+=i*this.vehicleAccel*e*(a-1),this.vehicleSpeed*=Math.max(0,1-this.vehicleFriction*e),this._vehicleMaxSpeed&&!r?this.vehicleSpeed=Math.min(this._vehicleMaxSpeed,this.vehicleSpeed):this._vehicleTurboMaxSpeed&&r&&(this.vehicleSpeed=Math.min(this._vehicleTurboMaxSpeed,this.vehicleSpeed)),this.currentSpeed=Math.abs(this.vehicleSpeed);const h=i>0,u=this.vehicleSpeed>=0?1:-1;this.moveLeft&&(t.rotation.y+=this.vehicleTurnSpeed*e*u),this.moveRight&&(t.rotation.y-=this.vehicleTurnSpeed*e*u);const d=new R(0,0,1).applyEuler(t.rotation),p=t.position.clone().addScaledVector(d,this.vehicleSpeed*e);if(this.checkVehicleCollision(p,t)?this.vehicleSpeed*=.2:t.position.copy(p),this.world&&typeof this.world.getHeightAt=="function"){const S=this.world.getHeightAt(t.position.x,t.position.z),C=this.getVehicleGroundClearance(t);t.position.y=S+C}if(this.world&&typeof this.world.halfMapSize=="number"){const S=this.world.halfMapSize-1;t.position.x=Math.max(-S,Math.min(S,t.position.x)),t.position.z=Math.max(-S,Math.min(S,t.position.z))}if(this.previousPosition.length()>0){const S=t.position.distanceTo(this.previousPosition);this.distanceTraveled+=S}this.mesh.position.copy(t.position),this.previousPosition.copy(t.position);const g=t.position.distanceTo(n);this.rotateVehicleWheels(t,g);let _=0;if(_+=this.vehicleIdleLph/3600*e,h&&(_+=this.vehicleThrottleLph/3600*e*(r?1.7:1)),g>0){const S=g/1e3;this.vehicleDistance+=S;const C=S/this.vehicleEfficiencyKmPerL,T=h?C*.35*(r?1.35:1):0;_+=C+T}if(this.vehicleFuelUsed+=_,this.vehicleFuel=Math.max(0,this.vehicleFuel-_),this.vehicleFuel<=0&&(this.vehicleSpeed=0),this.saveVehicleState(t),this.updateVehicleHUD(!0),this.enemyManager&&Array.isArray(this.enemyManager.enemies)){const S=performance.now();this.enemyManager.enemies.forEach(C=>{if(!C||!C.position)return;if(C.position.distanceTo(t.position)<2.4){C.userData||(C.userData={});const A=C.userData.lastRunOver||0;if(S-A>400){C.userData.lastRunOver=S;try{C.takeDamage(999)}catch{}}}})}const m=t.position.clone(),f=new R(0,2,6).applyQuaternion(this.camera.quaternion),y=m.clone().add(f);this.camera.position.lerp(y,.18);const x=Math.abs(this.vehicleSpeed)>.5;this.handleVehicleDriveSound(x)}rotateVehicleWheels(e,t){if(!e||!e.userData||!e.userData.wheels||!e.userData.wheels.length)return;const n=e.userData.wheelRadius||.35,i=t/n;e.userData.wheels.forEach(r=>{try{r.rotation.x-=i}catch{}})}updateVehicleHUD(e){if(!this.vehicleHud||!this.vehicleHud.root)return;const t=this.vehicleHud.root,n=document.getElementById("dashboard");if(n){const r=n.getBoundingClientRect();t.style.left=`${r.left}px`,t.style.top=`${r.top+r.height+8}px`,t.style.width=`${r.width}px`}if(!e){t.classList.add("hidden");return}t.classList.remove("hidden");const i=Math.abs(this.vehicleSpeed)*3.6;if(this.vehicleHud.speed&&(this.vehicleHud.speed.innerText=i.toFixed(0)),this.vehicleHud.fuelFill){const r=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/r*100));this.vehicleHud.fuelFill.style.width=`${o}%`,this.vehicleHud.fuelFill.style.background=o<20?"linear-gradient(90deg, #ff7043, #ff3d00)":"linear-gradient(90deg, #8bc34a, #cddc39)"}if(this.vehicleHud.fuelText){const r=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/r*100));this.vehicleHud.fuelText.innerText=`${this.vehicleFuel.toFixed(1)}L (${o.toFixed(1)}%)`}if(this.vehicleHud.distance&&(this.vehicleHud.distance.innerText=this.vehicleDistance.toFixed(2)),this.vehicleHud.efficiency){const r=this.vehicleFuelUsed>0&&this.vehicleDistance>0?this.vehicleDistance/this.vehicleFuelUsed:0;this.vehicleHud.efficiency.innerText=r.toFixed(2)}if(this.vehicleHud.range){const r=this.vehicleFuel*this.vehicleEfficiencyKmPerL;this.vehicleHud.range.innerText=r.toFixed(1)}}getVehicleStorageKey(e){return!e||!e.userData||!e.userData.gameId?null:`vehicle-state-${e.userData.gameId}`}loadVehicleState(e){try{if(e&&e.userData&&e.userData.vehicleState)return e.userData.vehicleState;const t=this.getVehicleStorageKey(e);if(!t||typeof localStorage>"u")return null;const n=localStorage.getItem(t);if(!n)return null;const i=JSON.parse(n);return e.userData.vehicleState=i,i}catch{return null}}saveVehicleState(e){if(!e)return;const t=this.getVehicleStorageKey(e);if(!t)return;const n={fuel:this.vehicleFuel,capacity:this.vehicleFuelCapacity,distanceKm:this.vehicleDistance,fuelUsed:this.vehicleFuelUsed,vehicleType:e.userData&&e.userData.vehicleType||"car"};e.userData.vehicleState=n;try{typeof localStorage<"u"&&localStorage.setItem(t,JSON.stringify(n))}catch{}}selectStudioObject(e){if(this.gameMode!=="studio"||!this.worldObjects||this.worldObjects.length===0)return null;const t=new we;this.controls&&this.controls.isLocked?t.set(0,0):e&&e.clientX!==void 0?(t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1):t.set(0,0),this._studioRaycaster.setFromCamera(t,this.camera);const n=this.worldObjects.filter(o=>o&&o.userData&&o.userData.gameName!=="Ground"),i=this._studioRaycaster.intersectObjects(n,!0);if(!i.length)return this.clearStudioSelection(),null;let r=i[0].object;for(;r&&!this.worldObjects.includes(r);)r=r.parent;return r&&this.setStudioSelection(r),r}moveSelectedObject(e,t,n=0){if(!this.studioSelected)return;const i=this.studioSelected;i.position.x+=e,i.position.z+=t,i.position.y+=n,n===0&&this.world&&typeof this.world.getHeightAt=="function"&&(i.position.y=this.world.getHeightAt(i.position.x,i.position.z)),this.refreshStudioSelectionHelper()}clearStudioSelection(){if(this.studioSelected=null,this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}this.selectionInfo&&this.selectionInfo.classList.add("hidden")}removeSelectedObject(){if(!this.studioSelected)return;const e=this.studioSelected;this.clearStudioSelection();try{this.scene.remove(e)}catch{}if(this.worldObjects){const t=this.worldObjects.indexOf(e);t>=0&&this.worldObjects.splice(t,1)}}setStudioSelection(e){if(this.studioSelected=e,this.selectionInfo){const t=e.userData||{};this.selectionInfo.innerText=`${t.gameName||"Object"} (${t.gameId||"---"})`,this.selectionInfo.classList.remove("hidden")}this.refreshStudioSelectionHelper()}refreshStudioSelectionHelper(){if(this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}if(this.studioSelected)try{const e=this.buildStudioSelectionBox(this.studioSelected);this.studioSelectionHelper=new Dp(e,16766720),this.studioSelectionHelper.material.depthTest=!1,this.studioSelectionHelper.material.transparent=!0,this.studioSelectionHelper.material.opacity=.9,this.scene.add(this.studioSelectionHelper)}catch{this.studioSelectionHelper=null}}buildStudioSelectionBox(e){const t=new vn;return e.traverse(n=>{if(!n.isMesh||!n.geometry)return;const i=n.userData||{},r=n.material;if(!(r&&r.transparent||i.isShadow||i.shadow)){if(!n.geometry.boundingBox)try{n.geometry.computeBoundingBox()}catch{}if(n.geometry.boundingBox){const a=n.geometry.boundingBox.clone();n.updateWorldMatrix(!0,!1),a.applyMatrix4(n.matrixWorld),t.union(a)}}}),t.isEmpty()&&t.setFromCenterAndSize(e.position,new R(1,1,1)),t}checkVehicleCollision(e,t=null){if(!this.worldObjects)return!1;const n=2;for(let i=0;i<this.worldObjects.length;i++){const r=this.worldObjects[i];if(!r)continue;const o=r.userData||{};if(t&&r===t||o.gameName==="Ground"||o.type==="ground")continue;const a=r.position||(r.getWorldPosition?r.getWorldPosition(new R):null);if(!a)continue;const c=a.distanceTo(e);let l=1.5;if(r.geometry&&r.geometry.boundingSphere?l=r.geometry.boundingSphere.radius||l:o&&o.size==="large"?l=5:o.type==="vehicle"&&(l=2.5),c<n+l)return!0}return!1}updateAnimations(e){const t=this.moveForward||this.moveBackward||this.moveLeft||this.moveRight,n=10,i=this.isSprinting&&t?1.8:1;if(t){this.animTime+=e*n*i;const r=Math.sin(this.animTime)*(.5*i);this.leftLegPivot.rotation.x=r,this.rightLegPivot.rotation.x=-r}else this.leftLegPivot.rotation.x=gt.lerp(this.leftLegPivot.rotation.x,0,e*n),this.rightLegPivot.rotation.x=gt.lerp(this.rightLegPivot.rotation.x,0,e*n);if(this.isBlocking){const r=-Math.PI/2.5,o=.5;this.leftArmPivot.rotation.x=gt.lerp(this.leftArmPivot.rotation.x,r,e*15),this.rightArmPivot.rotation.x=gt.lerp(this.rightArmPivot.rotation.x,r,e*15),this.leftArmPivot.rotation.z=gt.lerp(this.leftArmPivot.rotation.z,-o,e*15),this.rightArmPivot.rotation.z=gt.lerp(this.rightArmPivot.rotation.z,o,e*15)}else if(this.isPunching){this.punchTime+=e*20;const r=-Math.PI/2+Math.sin(this.punchTime)*.8;this.punchSide===0?(this.rightArmPivot.rotation.x=r,this.leftArmPivot.rotation.x=gt.lerp(this.leftArmPivot.rotation.x,0,e*10)):(this.leftArmPivot.rotation.x=r,this.rightArmPivot.rotation.x=gt.lerp(this.rightArmPivot.rotation.x,0,e*10)),this.punchTime>Math.PI&&(this.isPunching=!1,this.rightArmPivot.rotation.x=0,this.leftArmPivot.rotation.x=0),this.leftArmPivot.rotation.z=gt.lerp(this.leftArmPivot.rotation.z,0,e*10),this.rightArmPivot.rotation.z=gt.lerp(this.rightArmPivot.rotation.z,0,e*10)}else{if(t){const r=Math.sin(this.animTime)*.5*i;this.leftArmPivot.rotation.x=-r,this.rightArmPivot.rotation.x=r}else this.leftArmPivot.rotation.x=gt.lerp(this.leftArmPivot.rotation.x,0,e*10),this.rightArmPivot.rotation.x=gt.lerp(this.rightArmPivot.rotation.x,0,e*10);this.leftArmPivot.rotation.z=gt.lerp(this.leftArmPivot.rotation.z,0,e*10),this.rightArmPivot.rotation.z=gt.lerp(this.rightArmPivot.rotation.z,0,e*10)}if(this.hitTimer>0){this.hitTimer-=e;const r=Math.max(0,this.hitTimer)/.6,o=gt.lerp(-Math.PI/2.2,0,1-r);this.leftArmPivot.rotation.x=gt.lerp(this.leftArmPivot.rotation.x,o,e*20),this.rightArmPivot.rotation.x=gt.lerp(this.rightArmPivot.rotation.x,o,e*20)}}punch(){if(!this.isTired&&!(this.isPunching||this.isBlocking)&&(this.isPunching=!0,this.punchTime=0,this.punchSide=this.punchSide===0?1:0,this.punchCount++,this.punchCount>=20&&(this.isTired=!0,this.stamina=Math.max(0,this.stamina-20),setTimeout(()=>{this.isTired=!1,this.punchCount=0},3e3)),this.enemyManager&&this.enemyManager.enemies)){const e=new R;this.mesh.getWorldDirection(e);let t=!1;this.enemyManager.enemies.forEach(n=>{if(this.mesh.position.distanceTo(n.position)<3){const r=new R().subVectors(n.position,this.mesh.position).normalize();if(e.angleTo(r)<Math.PI/3){n.takeDamage(10);const a=e.clone().multiplyScalar(2);n.position.add(a),t=!0}}}),t&&this.playSmack()}}playSmack(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playSmack());return}if(this.smackBuffer){const e=this.audioCtx.createBufferSource();e.buffer=this.smackBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}}catch(e){console.warn("playSmack error:",e)}}equipBackpack(e=2899536){const t=this.backpackColor;this.backpack&&this.backpack.parent&&this.backpack.parent.remove(this.backpack);const n=new We;n.position.set(0,1.25,-.32);const i=new z(new ee(.7,.9,.35),new Z({color:e,metalness:.15,roughness:.8}));i.position.set(0,0,0),n.add(i);const r=new z(new ee(.6,.25,.16),new Z({color:3426654,metalness:.1,roughness:.8}));r.position.set(0,-.55,.22),n.add(r);const o=new Z({color:2042938,metalness:.1,roughness:.9}),a=new z(new ee(.1,.82,.07),o);a.position.set(-.28,-.03,.2);const c=a.clone();return c.position.x=.28,n.add(a,c),this.mesh.add(n),this.backpack=n,this.backpackColor=e,t}queueHurtBeat(){if(this._hurtAccumulator+=1,this._hurtAccumulator>=2){const e=Math.floor(this._hurtAccumulator/2);this._hurtQueue+=e,this._hurtAccumulator-=e*2}this._hurtQueue===0&&this._hurtAccumulator>0&&(this._hurtQueue=1,this._hurtAccumulator=0),this._hurtBeatTimer||this._playHurtBeatLoop()}_playHurtBeatLoop(){if(this._hurtQueue<=0){this._hurtBeatTimer=null;return}this.playHurt(),this._hurtQueue=Math.max(0,this._hurtQueue-1),this._hurtBeatTimer=setTimeout(()=>this._playHurtBeatLoop(),2e3)}clearHurtQueue(){this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer&&(clearTimeout(this._hurtBeatTimer),this._hurtBeatTimer=null)}playHurt(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playHurt());return}if(this.ughBuffer){const e=this.audioCtx.createBufferSource();e.buffer=this.ughBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}}catch(e){console.warn("playHurt error:",e)}}playVehicleDoor(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playVehicleDoor());return}if(this.vehicleDoorBuffer){const e=this.audioCtx.createBufferSource();e.buffer=this.vehicleDoorBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}}catch(e){console.warn("playVehicleDoor error:",e)}}handleVehicleDriveSound(e){try{if(!this.audioCtx||!this.enableVehicleDriveSound){this.stopVehicleDriveSound();return}if(!this.vehicleDriveBuffer){this.stopVehicleDriveSound();return}if(e===this._lastVehicleDriveActive&&(e&&this._vehicleDriveSource||!e&&!this._vehicleDriveSource))return;if(this._lastVehicleDriveActive=e,e){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._vehicleDriveSource)return;const t=this.audioCtx.createBufferSource();t.buffer=this.vehicleDriveBuffer,t.loop=!0;const n=this.audioCtx.createGain();n.gain.value=this.sfxVolume*.4,t.connect(n),n.connect(this.audioCtx.destination),t.start(0),this._vehicleDriveSource=t,this._vehicleDriveGain=n,t.onended=()=>{this._vehicleDriveSource=null,this._vehicleDriveGain=null}}else this.stopVehicleDriveSound()}catch(t){console.warn("handleVehicleDriveSound error:",t)}}stopVehicleDriveSound(){if(this._lastVehicleDriveActive=!1,this._vehicleDriveSource){try{this._vehicleDriveSource.stop()}catch{}try{this._vehicleDriveSource.disconnect()}catch{}}if(this._vehicleDriveGain)try{this._vehicleDriveGain.disconnect()}catch{}this._vehicleDriveSource=null,this._vehicleDriveGain=null}handleFootsteps(e){try{if(this.isInVehicle){this.stopFootsteps();return}if(!this.audioCtx||!this.footstepsBuffer){this.stopFootsteps();return}if(e===this._lastFootstepsActive&&(e&&this._footstepsSource||!e&&!this._footstepsSource)){if(e&&this._footstepsSource){const t=this.isSprinting?1.4:this.isCrouching?.8:1;this._footstepsSource.playbackRate.value=t}return}if(this._lastFootstepsActive=e,e){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._footstepsSource){try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}const t=this.audioCtx.createBufferSource();t.buffer=this.footstepsBuffer,t.loop=!0,t.playbackRate.value=this.isSprinting?1.4:this.isCrouching?.8:1;const n=this.audioCtx.createGain();n.gain.value=this.sfxVolume*.35,t.connect(n),n.connect(this.audioCtx.destination),t.start(0),this._footstepsSource=t,this._footstepsGain=n,t.onended=()=>{this._footstepsSource=null,this._footstepsGain=null}}else this.stopFootsteps()}catch(t){console.warn("handleFootsteps error:",t)}}stopFootsteps(){if(this._lastFootstepsActive=!1,this._footstepsSource){try{this._footstepsSource.onended=null}catch{}try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}get position(){return this.mesh.position}getSurfaceHeight(e,t){let n=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(e,t):0;return(this.world&&this.world.objects?this.world.objects:[]).forEach(r=>{if(!(!r||!r.userData)){if(r.userData.type==="block"){const o=r.userData.size||this.blockSize;if(Math.abs(r.position.x-e)<o*.6&&Math.abs(r.position.z-t)<o*.6){const a=r.position.y+o/2;a>n&&(n=a)}}if(r.userData.colliderBox){const o=r.userData.colliderBox;e>=o.min.x&&e<=o.max.x&&t>=o.min.z&&t<=o.max.z&&o.max.y>n&&(n=o.max.y)}}}),n}adjustBlockSize(e){const t=Math.max(this.minBlockSize,Math.min(this.maxBlockSize,this.blockSize+e));this.blockSize=t,console.log("Block size:",this.blockSize.toFixed(2))}moveLastBlock(){if(!this.placedBlocks.length)return;const e=this.placedBlocks[this.placedBlocks.length-1];if(!e)return;const t=this.getBlockTarget(e);e.position.set(t.position.x,t.position.y,t.position.z)}getBlockTarget(e=null){const t=e&&e.userData&&e.userData.size?e.userData.size:this.blockSize,n=new Kt;n.setFromCamera(new we(0,0),this.camera);const i=u=>Math.round(u);let r=null;if(this.world&&Array.isArray(this.world.objects)){const u=this.world.objects.filter(p=>p&&p.userData&&(p.userData.type==="block"||p.userData.gameName==="Ground")),d=n.intersectObjects(u,!0);d.length>0&&(r=d[0].point.clone())}if(!r){const u=new R;this.camera.getWorldDirection(u),r=this.mesh.position.clone().add(u.multiplyScalar(1.2))}const o=new R(i(r.x),r.y,i(r.z));if(this.world&&typeof this.world.halfMapSize=="number"){const u=this.world.halfMapSize-1;o.x=Math.max(-u,Math.min(u,o.x)),o.z=Math.max(-u,Math.min(u,o.z))}let a=this.world.getHeightAt?this.world.getHeightAt(o.x,o.z):r.y;const l=(this.world.objects||[]).filter(u=>u.userData&&u.userData.type==="block"&&u!==e).filter(u=>Math.abs(u.position.x-o.x)<.1&&Math.abs(u.position.z-o.z)<.1);l.length>0&&(a=Math.max(...l.map(d=>d.position.y+(d.userData&&d.userData.size?d.userData.size/2:t/2))));const h=a+t/2;return{position:new R(o.x,h,o.z),size:t}}updateBlockPreview(){if(!this.previewBlock)return;const e=this.getBlockTarget();this.previewBlock.visible=!0,this.previewBlock.position.copy(e.position);const t=e.size/this.blockSize;this.previewBlock.scale.set(t,t,t)}removeLastBlock(){if(!this.placedBlocks.length)return;const e=this.placedBlocks.pop();e&&e.parent&&e.parent.remove(e),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(t=>t!==e)),e&&e.geometry&&e.geometry.dispose(),e&&e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),this.selectedBlock===e&&this.clearBlockSelection()}selectBlockUnderCrosshair(){if(!this.world||!this.world.objects)return!1;const e=new Kt;e.setFromCamera(new we(0,0),this.camera);const t=e.intersectObjects(this.world.objects,!0);if(t.length===0)return this.clearBlockSelection(),!1;let n=null;for(const i of t){let r=i.object;for(;r&&r.parent;){if(r.userData&&r.userData.type==="block"){n=r;break}r=r.parent}if(n)break}return n?(this.setBlockSelection(n),!0):(this.clearBlockSelection(),!1)}setBlockSelection(e){this.clearBlockSelection(),this.selectedBlock=e;const t=new Lp(e,16776960);t.userData={ignoreSelect:!0},this.scene.add(t),this.selectedBlockHelper=t}clearBlockSelection(){this.selectedBlock=null,this.selectedBlockHelper&&(this.scene.remove(this.selectedBlockHelper),this.selectedBlockHelper.material&&this.selectedBlockHelper.material.dispose(),this.selectedBlockHelper.geometry&&this.selectedBlockHelper.geometry.dispose(),this.selectedBlockHelper=null)}removeBlock(e){e&&(this.placedBlocks=this.placedBlocks.filter(t=>t!==e),e.parent&&e.parent.remove(e),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(t=>t!==e)),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),this.selectedBlock===e&&this.clearBlockSelection())}takeDamage(e){this.gameMode==="matrix"||this.gameMode==="studio"||(this.isBlocking&&(e*=.2,console.log("Blocked! Reduced damage to "+e)),this.shield>0?(this.shield-=e,this.shield<0&&(this.health+=this.shield,this.shield=0)):this.health-=e,e>0&&this.queueHurtBeat(),this.health<=0&&(this.health=0,this.die()),this.hitTimer=.6)}die(){this.gameMode==="matrix"||this.gameMode==="studio"||(this.handleFootsteps(!1),this.isDead=!0,this.controls.unlock(),this.mesh.rotation.x=-Math.PI/2)}checkCollision(e,t){const n=new Kt,i=.5,r=[1.6,1,.35];let o=this.worldObjects||[];if(this.enemyManager&&this.enemyManager.enemies){const l=this.enemyManager.enemies.map(h=>h.mesh);o=o.concat(l)}const a=1.5,c=l=>{let h=l;for(;h;){if(h.userData&&h.userData.colliderBox)return h.userData.colliderBox;h=h.parent}return null};for(const l of r){const h=this.mesh.position.clone();if(h.y+=l,n.set(h,e),o.length>0){const u=n.intersectObjects(o,!0);if(u.length>0){const d=u[0];if(d.distance<t+i){const p=c(d.object);if(p){const g=p.max.y,_=g-this.mesh.position.y;if(_<=a&&_>-.5)return this.mesh.position.y=g,this.velocity.y=0,this.canJump=!0,!1}return!0}}}}return!1}}const Zp="/threejs-voxel-firecraft/dist/assets/mixkit-player-losing-or-failing-vCPqUTFf.ogg",Jp="/threejs-voxel-firecraft/dist/assets/game-level-completed-envato-mixkit.co-OEgWp6-U.ogg";class Qp{constructor(e,t,n){this.player=e,this.world=t,this.settings=n||{},this.healthBar=document.getElementById("health-bar"),this.healthText=document.getElementById("health-text"),this.shieldBar=document.getElementById("shield-bar"),this.shieldText=document.getElementById("shield-text"),this.staminaBar=document.getElementById("stamina-bar"),this.staminaText=document.getElementById("stamina-text"),this.weaponName=document.getElementById("weapon-name"),this.ammoCount=document.getElementById("ammo-count"),this.slots=document.querySelectorAll(".slot"),this.timerValue=document.getElementById("timer-value"),this.debugContainer=document.getElementById("debug-container"),this.gameOverScreen=document.getElementById("game-over-screen"),this.selectionInfo=document.getElementById("selection-info"),this.selectionInfoTimeout=null,this.fpsCounter=document.getElementById("fps-counter"),this.enemyCount=document.getElementById("enemy-count"),this.killCount=document.getElementById("kill-count"),this.dropCount=document.getElementById("drop-count"),this.distanceTraveled=document.getElementById("distance-traveled"),this.playerSpeed=document.getElementById("player-speed"),this.memoryUsage=document.getElementById("memory-usage"),this.targetInspect=document.getElementById("target-inspect"),this.perfFrame=document.getElementById("perf-frame"),this.perfCalls=document.getElementById("perf-calls"),this.perfTris=document.getElementById("perf-tris"),this.perfGeoms=document.getElementById("perf-geoms"),this.perfTextures=document.getElementById("perf-textures"),this.perfPrograms=document.getElementById("perf-programs"),this.perfObjects=document.getElementById("perf-objects"),this.perfMem=document.getElementById("perf-mem"),this.perfCpu=document.getElementById("perf-cpu"),this.perfGpu=document.getElementById("perf-gpu"),this._renderer=null,this.debugInfo=document.getElementById("debug-info"),this.debugName=document.getElementById("debug-target-name"),this.debugId=document.getElementById("debug-target-id"),this.settings.debugMode?this.debugInfo.style.display="block":this.debugInfo.style.display="none",this.timeRemaining=30,this.lastTime=performance.now(),this.frames=0,this.fps=0,this.lastFpsTime=performance.now(),this.lastFrameTime=performance.now(),this.raycaster=new Kt,this.mouse=new we,this.hoveredEnemy=null,this.currentOutlinedEnemy=null,this.hoverInfo=document.getElementById("hover-info"),this.scopeOverlay=document.getElementById("scope-overlay"),this.minimapContainer=document.getElementById("minimap"),this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas?this.minimapCanvas.getContext("2d"):null,this.minimapSize=this.minimapCanvas?this.minimapCanvas.width:180,this.mapSize=t&&t.mapSize?t.mapSize:200,window.addEventListener("mousemove",i=>{const r=i.clientX/window.innerWidth*2-1,o=-(i.clientY/window.innerHeight)*2+1;if(this.mouse.set(r,o),this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const a=[];this.player.enemyManager.enemies.forEach(l=>{l.mesh.traverse(h=>{h.isMesh&&a.push(h)})}),this.raycaster.setFromCamera(this.mouse,this.player.camera);const c=this.raycaster.intersectObjects(a,!0);if(c.length>0){const l=c[0].object;let h=l,u=null;for(;h&&(u=this.player.enemyManager.enemies.find(d=>h.parent===d.mesh||h===d.mesh||d.mesh.children.includes(h)),!u);)h=h.parent;this.hoveredEnemy=u||l||null}else this.hoveredEnemy=null}});try{this.slots.forEach((i,r)=>{const o=a=>{try{a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),this.player&&typeof this.player.switchWeapon=="function"&&this.player.switchWeapon(r)}catch{}};i.addEventListener("pointerdown",o),i.addEventListener("touchstart",o,{passive:!1}),i.addEventListener("click",o)})}catch{}}update(){if(this.hoveredEnemy=null,this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0&&this.currentOutlinedEnemy!==this.hoveredEnemy){if(this.currentOutlinedEnemy&&this.currentOutlinedEnemy._outline){try{this.currentOutlinedEnemy.mesh.remove(this.currentOutlinedEnemy._outline)}catch{}this.currentOutlinedEnemy._outline=null}if(this.hoveredEnemy&&this.hoveredEnemy.mesh){const c=new We;this.hoveredEnemy.mesh.traverse(l=>{if(l.isMesh){const h=new z(l.geometry,new In({color:16776960,side:Rt}));h.position.copy(l.position),h.quaternion.copy(l.quaternion),h.scale.copy(l.scale).multiplyScalar(1.06),h.renderOrder=999,h.material.depthTest=!0,c.add(h)}}),this.hoveredEnemy.mesh.add(c),this.hoveredEnemy._outline=c}this.currentOutlinedEnemy=this.hoveredEnemy}this.frames++;const e=performance.now();e-this.lastFpsTime>=1e3&&(this.fpsCounter.innerText=this.frames,this.frames=0,this.lastFpsTime=e,performance.memory&&this.memoryUsage&&(this.memoryUsage.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)));const t=e-this.lastFrameTime;if(this.lastFrameTime=e,this.player.enemyManager&&(this.enemyCount.innerText=this.player.enemyManager.enemies.length,this.killCount.innerText=this.player.enemyManager.killedCount||0),this.dropCount){const c=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;if(c&&Array.isArray(c.items)){const l=c.items.filter(h=>!(h.userData&&h.userData.isOpened)).length;this.dropCount.innerText=l}else this.dropCount.innerText="0"}const n=(this.player.distanceTraveled/1e3).toFixed(2);if(this.distanceTraveled&&(this.distanceTraveled.innerText=n),this.playerSpeed){let c=0;this.player.isInVehicle&&typeof this.player.currentSpeed=="number"?c=this.player.currentSpeed*3.6:typeof this.player.currentSpeed=="number"&&(c=this.player.currentSpeed*3.6),this.playerSpeed.innerText=c.toFixed(1)}if(this._renderer){const c=this._renderer.info;this.perfFrame&&(this.perfFrame.innerText=t.toFixed(1)),this.perfCalls&&(this.perfCalls.innerText=c.render.calls),this.perfTris&&(this.perfTris.innerText=c.render.triangles),this.perfGeoms&&(this.perfGeoms.innerText=c.memory.geometries),this.perfTextures&&(this.perfTextures.innerText=c.memory.textures),this.perfPrograms&&(this.perfPrograms.innerText=c.programs?c.programs.length:"0");let l=0;this.world&&Array.isArray(this.world.objects)&&(l+=this.world.objects.length);const h=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;h&&Array.isArray(h.items)&&(l+=h.items.length),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&(l+=this.player.enemyManager.enemies.length),this.perfObjects&&(this.perfObjects.innerText=l),this.perfMem&&performance.memory&&(this.perfMem.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)),this.perfCpu&&(this.perfCpu.innerText="N/A"),this.perfGpu&&(this.perfGpu.innerText="N/A")}this.healthBar.style.width=`${this.player.health}%`,this.healthText.innerText=Math.ceil(this.player.health),this.shieldBar.style.width=`${this.player.shield}%`,this.shieldText.innerText=Math.ceil(this.player.shield),this.staminaBar.style.width=`${this.player.stamina}%`,this.staminaText.innerText=Math.ceil(this.player.stamina);const i=this.player.weapons[this.player.currentWeaponIndex];if(this.weaponName.innerText=i.name,this.player.isReloading?this.ammoCount.innerText="RELOADING...":this.ammoCount.innerText=i.ammo===1/0?"∞":`${i.currentMag} / ${i.ammo}`,this.debugContainer&&(this.debugContainer.innerHTML=""),this.debugInfo)if(this.settings.debugMode)if(this.debugInfo.style.display="block",this.hoveredEnemy){const c=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,l=c&&c.userData&&c.userData.gameName?c.userData.gameName:"Enemy",h=c&&c.userData&&(c.userData.gameId||c.userData.gameid)?c.userData.gameId||c.userData.gameid:"---",u=this.hoveredEnemy.position?this.hoveredEnemy.position:c?c.position:null,d=u?this.player.position.distanceTo(u).toFixed(2):"---";this.debugName.innerText=l,this.debugId.innerText=`${h} (${d}m)`}else this.debugName.innerText="None",this.debugId.innerText="---";else this.debugInfo.style.display="none";let r=null;if(!this.hoveredEnemy&&this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const c=[];if(this.player.enemyManager.enemies.forEach(l=>{l.mesh.traverse(h=>{h.isMesh&&c.push(h)})}),c.length>0){this.raycaster.setFromCamera(new we(0,0),this.player.camera);const l=this.raycaster.intersectObjects(c,!0);if(l.length>0){let u=l[0].object,d=null;for(;u&&(d=this.player.enemyManager.enemies.find(p=>u.parent===p.mesh||u===p.mesh||p.mesh.children.includes(u)),!d);)u=u.parent;d?this.hoveredEnemy=d:this.hoveredEnemy=null}else this.hoveredEnemy=null}}if(this.hoverInfo)if(this.hoveredEnemy){const c=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,l=c&&c.userData&&(c.userData.gameId||c.userData.gameid)?c.userData.gameId||c.userData.gameid:"---",h=this.hoveredEnemy.position?this.hoveredEnemy.position:c?c.position:null;r=h?this.player.position.distanceTo(h):null;const u=r?r.toFixed(2):"---";this.hoverInfo.innerText=`${l} • ${u}m`}else this.hoverInfo.innerText="";if(this.scopeOverlay){const c=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],l=this.player.isAiming&&c&&c.name==="Sniper";this.scopeOverlay.classList.toggle("hidden",!l);const h=document.getElementById("crosshair");h&&h.classList.toggle("hidden",l)}const o=document.getElementById("crosshair");if(o){o.classList.remove("target-red","target-yellow");const c=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],l=c&&c.range?c.range:1e3;this.hoveredEnemy&&r!==null&&(r<=l?o.classList.add("target-red"):o.classList.add("target-yellow"))}this.updateMinimap(),this.slots.forEach(c=>c.style.display="none"),this.player.weapons.forEach((c,l)=>{let h=this.slots[l];h&&(h.style.display="flex",h.innerText=l+1,l===this.player.currentWeaponIndex?h.classList.add("active"):h.classList.remove("active"))});const a=performance.now();if(a-this.lastTime>1e3){this.timeRemaining--,this.timeRemaining<0&&(this.timeRemaining=0);const c=Math.floor(this.timeRemaining/60).toString().padStart(2,"0"),l=(this.timeRemaining%60).toString().padStart(2,"0");this.timerValue.innerText=`${c}:${l}`,this.lastTime=a}this.player.isDead&&this.player.gameMode!=="matrix"&&this.showGameOver("YOU DIED"),this.updateTargetInspect()}showSelectionInfo(e,t){if(!this.selectionInfo)return;const n=e||"Object",i=t||"---";this.selectionInfo.innerText=`${n} (${i})`,this.selectionInfo.classList.remove("hidden"),this.selectionInfoTimeout&&clearTimeout(this.selectionInfoTimeout),this.selectionInfoTimeout=setTimeout(()=>{try{this.selectionInfo.classList.add("hidden")}catch{}},2500)}updateTargetInspect(){if(!this.targetInspect||!this.player||!this.player.camera)return;const e=this.raycaster,t=new we(0,0);e.setFromCamera(t,this.player.camera);const n=[];if(this.world&&Array.isArray(this.world.objects)&&n.push(...this.world.objects),this.world&&this.world.itemManager&&Array.isArray(this.world.itemManager.items)&&n.push(...this.world.itemManager.items),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&this.player.enemyManager.enemies.forEach(h=>{h&&h.mesh&&n.push(h.mesh)}),n.length===0){this.targetInspect.innerText="Target: ---";return}const i=Array.from(new Set(n)),r=e.intersectObjects(i,!0);if(!r.length){this.targetInspect.innerText="Target: ---";return}let o=null;for(let h=0;h<r.length;h++){let u=r[h].object;for(;u;){if(u.userData&&(u.userData.gameName||u.userData.type||u.userData.gameId||u.userData.gameid)){o=u.userData;break}u=u.parent}if(o)break}if(!o){this.targetInspect.innerText="Target: ---";return}const a=o.gameName||"Object",c=o.gameId||o.gameid||"---",l=o.type||"---";this.targetInspect.innerText=`Target: ${a} (ID: ${c}) [${l}]`}showGameOver(e){if(this.player&&this.player.gameMode==="matrix"||this.gameOverShown)return;this.gameOverShown=!0,this.gameOverScreen.classList.remove("hidden"),document.getElementById("game-over-title").innerText=e;try{const n=document.getElementById("touch-controls");n&&(n.style.display="none")}catch{}const t=document.getElementById("restart-btn");t.onclick=()=>{location.reload()},t.style.pointerEvents="auto",t.style.cursor="pointer";try{typeof window<"u"&&window.game&&e&&e.toUpperCase().includes("DIED")&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(Zp)}catch{}}showVictory(){if(!(this.player&&this.player.gameMode==="matrix")){this.gameOverShown=!1,this.showGameOver("VICTORY ROYALE!"),document.getElementById("game-over-title").style.color="#f1c40f";try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}try{const e=document.getElementById("touch-controls");e&&(e.style.display="none")}catch{}try{typeof window<"u"&&window.game&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(Jp)}catch{}}}updateMinimap(){if(!this.minimapContainer)return;const e=this.settings.showMinimap!==!1;if(this.minimapContainer.classList.toggle("hidden",!e),!e||!this.minimapCtx||!this.player)return;const t=this.minimapCtx,n=this.minimapSize;t.clearRect(0,0,n,n),t.fillStyle="rgba(10, 12, 20, 0.75)",t.fillRect(0,0,n,n),t.strokeStyle="rgba(255, 255, 255, 0.25)",t.lineWidth=2,t.strokeRect(1,1,n-2,n-2);const i=Math.max(1,this.world&&this.world.halfMapSize?this.world.halfMapSize:this.mapSize/2),r=n*.45,o=n/2,a=n/2;if(this.world&&typeof this.world.stormRadius=="number"&&this.world.stormRadius>0){const d=Math.max(0,Math.min(1.2,this.world.stormRadius/i)),p=r*d;t.beginPath(),t.strokeStyle="rgba(157, 77, 187, 0.85)",t.lineWidth=3,t.arc(o,a,p,0,Math.PI*2),t.stroke()}const c=this.player&&this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)?this.player.enemyManager.enemies:[];c.length&&(t.fillStyle="#ff3b30",t.strokeStyle="#660000",t.lineWidth=1.5,c.forEach(d=>{if(!d)return;const p=d.position||d.mesh&&d.mesh.position;if(!p)return;const g=Math.max(o-r,Math.min(o+r,o+p.x/i*r)),_=Math.max(a-r,Math.min(a+r,a-p.z/i*r));t.beginPath(),t.arc(g,_,4,0,Math.PI*2),t.fill(),t.stroke()}));const l=this.world&&Array.isArray(this.world.objects)?this.world.objects.filter(d=>d&&d.userData&&d.userData.type==="house"):[];l.length&&(t.fillStyle="#ffd166",t.strokeStyle="#8c5a00",t.lineWidth=1,l.forEach(d=>{const p=d.position;if(!p)return;const g=Math.max(o-r,Math.min(o+r,o+p.x/i*r)),_=Math.max(a-r,Math.min(a+r,a-p.z/i*r));t.beginPath(),t.arc(g,_,3,0,Math.PI*2),t.fill(),t.stroke()}));const h=Math.max(o-r,Math.min(o+r,o+this.player.position.x/i*r)),u=Math.max(a-r,Math.min(a+r,a-this.player.position.z/i*r));t.beginPath(),t.fillStyle="#00d8ff",t.strokeStyle="#ffffff",t.lineWidth=2,t.arc(h,u,6,0,Math.PI*2),t.fill(),t.stroke();try{const d=new R;if(this.player&&this.player.camera&&this.player.camera.getWorldDirection&&this.player.camera.getWorldDirection(d),d.y=0,d.lengthSq()<1e-4&&this.player.mesh&&(d.set(0,0,-1).applyEuler(this.player.mesh.rotation),d.y=0),d.lengthSq()>1e-4){d.normalize();const p=d.x,g=-d.z,_=Math.atan2(g,p)+Math.PI/2;t.save(),t.translate(h,u),t.rotate(_),t.beginPath(),t.moveTo(0,-10),t.lineTo(6,8),t.lineTo(-6,8),t.closePath(),t.fillStyle="#00d8ff",t.strokeStyle="#003f4f",t.lineWidth=2,t.fill(),t.stroke(),t.restore()}}catch{}}setRenderer(e){this._renderer=e}}const em="/threejs-voxel-firecraft/dist/assets/mixkit-kill-blood-zombie-By90BKfb.ogg",tm="/threejs-voxel-firecraft/dist/assets/zombie-B8PCKsyJ.ogg";class nm{constructor(e,t,n,i){this.scene=e,this.player=t,this.world=n,this.enemies=[],this.spawnInterval=5e3,this.lastSpawn=0,this.killedCount=0,this.groanBuffer=null;const r=i&&(i.gameMode==="matrix"||i.gameMode==="studio")?0:i?i.enemyCount:15;this.difficulty=i?i.difficulty:"medium",this.gameMode=i&&i.gameMode?i.gameMode:"survival",this.studioAiEnabled=!1;for(let o=0;o<r;o++)this.spawnEnemy();this.deathBuffer=null;try{const o=window.AudioContext||window.webkitAudioContext;o&&(this.audioCtx=new o,fetch(em).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.deathBuffer=a,this.enemies.forEach(c=>{c.audioCtx=this.audioCtx,c.deathBuffer=a})}).catch(a=>{}),fetch(tm).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.groanBuffer=a,this.enemies.forEach(c=>{c.audioCtx=this.audioCtx,c.groanBuffer=a})}).catch(a=>{}))}catch{}}spawnEnemy(e=!1){if(!e&&(this.gameMode==="matrix"||this.gameMode==="studio"))return;const t=this.world&&this.world.halfMapSize?this.world.halfMapSize:100,n=(Math.random()-.5)*t,i=(Math.random()-.5)*t,r=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(n,i):0,o=this.world&&this.world.halfMapSize?this.world.halfMapSize:100,a=new im(this.scene,n,r,i,this.difficulty,o,this.player);a.audioCtx=this.audioCtx,a.deathBuffer=this.deathBuffer,a.groanBuffer=this.groanBuffer,a.world=this.world,this.enemies.push(a),e&&this.gameMode==="studio"&&(this.studioAiEnabled=!0)}update(e){this.gameMode!=="matrix"&&(this.gameMode==="studio"&&!this.studioAiEnabled||(this.enemies.forEach(t=>{if(t.update(e,this.player),Math.sqrt(t.position.x*t.position.x+t.position.z*t.position.z)>this.world.stormRadius&&t.takeDamage(5*e),this.world&&typeof this.world.halfMapSize=="number"){const i=this.world.halfMapSize-1;t.position.x=Math.max(-i,Math.min(i,t.position.x)),t.position.z=Math.max(-i,Math.min(i,t.position.z))}}),this.enemies=this.enemies.filter(t=>t.readyToDespawn?(this.killedCount++,!1):!0)))}}class im{constructor(e,t,n,i,r,o=100,a=null){this.scene=e,this.position=new R(t,n,i),this.mapHalfSize=o,this.world=null,this.player=a,this.deathTimer=0,this.deathDuration=0,this.deathFallProgress=0,this.readyToDespawn=!1,this.groanBuffer=null,this.groanCooldown=0,this.groanRange=15,this._groanSource=null,this._groanGain=null,r==="easy"?(this.health=50,this.damage=2,this.speed=3):r==="hard"?(this.health=150,this.damage=10,this.speed=6):(this.health=100,this.damage=5,this.speed=4.5),this.state="wander",this.isDead=!1,this.attackRange=2,this.detectionRange=25,this.attackCooldown=1.5,this.lastAttack=0,this.wanderTarget=null,this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4,this.createMesh()}createMesh(){this.mesh=new We,this.mesh.position.copy(this.position),this.mesh.userData={gameId:Math.random().toString(36).substr(2,9).toUpperCase(),gameName:"Zombie"},this.scene.add(this.mesh);const e=new Z({color:9323693}),t=new Z({color:2899536}),n=new z(new ee(.5,.5,.5),e);n.position.y=1.75,this.mesh.add(n);const i=new Z({color:16717636,emissive:16717636,emissiveIntensity:.8,roughness:.2}),r=new ee(.12,.08,.02),o=new z(r,i);o.position.set(-.12,.05,.26);const a=o.clone();a.position.x=.12,n.add(o),n.add(a);const c=new Z({color:855309,emissive:3342336,emissiveIntensity:.4}),l=new z(new ee(.24,.08,.04),c);l.position.set(0,-.14,.25),n.add(l);const h=new Z({color:15921906,roughness:.3}),u=new ee(.05,.06,.02);for(let _=-1;_<=1;_+=2){const m=new z(u,h);m.position.set(_*.06,-.05,.04),l.add(m)}const d=new z(new ee(.6,.8,.3),t);d.position.y=1.1,this.mesh.add(d);const p=new ee(.2,.8,.2);p.translate(0,-.3,0),this.leftArmPivot=new We,this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot),this.leftArmPivot.add(new z(p,e)),this.rightArmPivot=new We,this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot),this.rightArmPivot.add(new z(p,e));const g=new ee(.25,.8,.25);g.translate(0,-.4,0),this.leftLegPivot=new We,this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot),this.leftLegPivot.add(new z(g,t)),this.rightLegPivot=new We,this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot),this.rightLegPivot.add(new z(g,t)),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.attackAnimTime=0,this.attackAnimDuration=.5,this.createHealthBar()}createHealthBar(){const e=new Wt(1,.1),t=new In({color:0});this.healthBarBg=new z(e,t),this.healthBarBg.position.y=2.3,this.mesh.add(this.healthBarBg);const n=new Wt(1,.1),i=new In({color:16711680});this.healthBarFg=new z(n,i),this.healthBarFg.position.y=2.3,this.healthBarFg.position.z=.01,this.mesh.add(this.healthBarFg)}update(e,t){if(this.isDead){this.updateDeath(e);return}this.groanCooldown=Math.max(0,this.groanCooldown-e),this.groanBuffer&&this.audioCtx&&t&&this.groanCooldown<=0&&this.position.distanceTo(t.position)<=this.groanRange&&(this.playGroan(),this.groanCooldown=2+Math.random()*2.5);const n=t.position;this.healthBarBg.lookAt(n),this.healthBarFg.lookAt(n);const i=this.position.distanceTo(n);i<this.detectionRange?this.state="chase":this.state="wander";let r=!1;if(this.state==="chase"){const o=this.hasLineOfSight(t,n);if(i<this.detectionRange&&o){const a=new R().subVectors(n,this.position).normalize();if(a.y=0,i>2){const l=a.clone(),h=Math.sin(performance.now()/500+this.position.x)*.5,u=new R(a.z,0,-a.x).multiplyScalar(h);l.add(u).normalize();const d=this.position.clone().add(l.multiplyScalar(this.speed*e));this.checkCollision(d)||this.position.copy(d),this.mesh.lookAt(n),r=!0}else{const l=a.clone().multiplyScalar(-1),h=this.position.clone().add(l.multiplyScalar(this.speed*e*.5));this.checkCollision(h)||this.position.copy(h),this.mesh.lookAt(n)}if(i<this.attackRange){const l=performance.now()/1e3;l-this.lastAttack>this.attackCooldown&&(t.takeDamage(this.damage),this.lastAttack=l,this.attackAnimTime=this.attackAnimDuration)}}else this.state="wander"}else{if(this.wanderTimer+=e,!this.wanderTarget||this.wanderTimer>this.wanderChangeInterval){const o=10+Math.random()*30,a=Math.random()*Math.PI*2,c=this.position.x+Math.cos(a)*o,l=this.position.z+Math.sin(a)*o,h=(g,_,m)=>Math.max(_,Math.min(m,g)),u=this.mapHalfSize*.9,d=h(c,-u,u),p=h(l,-u,u);this.wanderTarget=new R(d,0,p),this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4}if(this.wanderTarget){const o=new R().subVectors(this.wanderTarget,this.position);o.y=0,o.length()>.5?(o.normalize(),this.position.add(o.multiplyScalar(this.speed*e*.5)),this.mesh.lookAt(this.wanderTarget.x,this.position.y,this.wanderTarget.z),r=!0):(this.wanderTimer+=e,this.wanderTimer>this.wanderChangeInterval&&(this.wanderTarget=null,this.wanderTimer=0))}}if(this.mesh.position.copy(this.position),this.world&&typeof this.world.getHeightAt=="function"){const o=this.world.getHeightAt(this.position.x,this.position.z);this.mesh.position.y=Math.max(this.mesh.position.y,o),this.position.y=this.mesh.position.y}if(r){this.animTime+=e*5;const o=Math.sin(this.animTime)*.5;this.leftLegPivot.rotation.x=o,this.rightLegPivot.rotation.x=-o,this.leftArmPivot.rotation.x=-Math.PI/3+o*.2,this.rightArmPivot.rotation.x=-Math.PI/3-o*.2}else this.state!=="attack"&&(this.leftLegPivot.rotation.x=0,this.rightLegPivot.rotation.x=0,this.leftArmPivot.rotation.x=-Math.PI/3,this.rightArmPivot.rotation.x=-Math.PI/3);if(this.attackAnimTime>0){this.attackAnimTime=Math.max(0,this.attackAnimTime-e);const o=1-this.attackAnimTime/this.attackAnimDuration,a=Math.sin(o*Math.PI)*1.5;if(this.leftArmPivot.rotation.x=-Math.PI/2+a*.2,this.rightArmPivot.rotation.x=-Math.PI/2-a*.2,o>.3&&o<.7){const c=new R;this.mesh.getWorldDirection(c),c.y=0,c.normalize(),this.position.add(c.multiplyScalar(.02))}}}takeDamage(e){this.health-=e;const t=Math.max(0,this.health/100);this.healthBarFg.scale.x=t,this.mesh.traverse(n=>{if(n.isMesh&&n!==this.healthBarBg&&n!==this.healthBarFg){const i=n.material;if(!n.userData.originalColor&&i&&i.color)try{n.userData.originalColor=i.color.clone()}catch{n.userData.originalColor=null}if(i&&(i.isMeshStandardMaterial||i.isMeshPhongMaterial||i.isMeshLambertMaterial))i.emissive=new Re(16711680);else if(i&&i.color)try{i.color=i.color.clone().lerp(new Re(16711680),.6)}catch{}}}),setTimeout(()=>{this.isDead||this.mesh.traverse(n=>{if(n.isMesh&&n!==this.healthBarBg&&n!==this.healthBarFg){const i=n.material;if(i&&(i.isMeshStandardMaterial||i.isMeshPhongMaterial||i.isMeshLambertMaterial))i.emissive=new Re(0);else if(i&&i.color&&n.userData&&n.userData.originalColor)try{i.color.copy(n.userData.originalColor)}catch{}}})},100),this.health<=0&&!this.isDead&&this.startDeath()}playDeathSound(){try{const e=this.audioCtx.createBufferSource();e.buffer=this.deathBuffer;const t=this.audioCtx.createGain();t.gain.value=.7,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}catch(e){console.warn("playDeathSound error:",e)}}checkCollision(e){if(!this.scene)return!1;const t=.5;for(let n of this.scene.children)if(n.userData&&(n.userData.type==="house"||n.userData.type==="tree")){const i=n.position,r=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2)),o=n.userData.type==="house"?5:2;if(r<t+o)return!0}return!1}hasLineOfSight(e,t){if(!this.scene)return!0;const n=new R().subVectors(t,this.position).normalize(),i=this.position.distanceTo(t),o=new Kt(this.position.clone().add(new R(0,1,0)),n,0,i).intersectObjects(this.scene.children,!0);for(let a of o){if(a.object===this.mesh||a.object.parent===this.mesh||a.object===e.mesh||a.object.parent===e.mesh)continue;let c=a.object;for(;c.parent&&c.parent!==this.scene;)c=c.parent;if(c.userData&&(c.userData.type==="house"||c.userData.type==="tree"))return!1}return!0}startDeath(){this.isDead=!0,this.deathTimer=0,this.deathFallProgress=0,this.deathDuration=3+Math.random()*2,this.stopGroan(),this.healthBarBg&&(this.healthBarBg.visible=!1),this.healthBarFg&&(this.healthBarFg.visible=!1);const e=25,t=this.player&&this.player.position;if(t?this.position.distanceTo(t)<=e:!0)try{this.audioCtx&&this.deathBuffer&&(this.audioCtx.state==="suspended"?this.audioCtx.resume().then(()=>{this.playDeathSound()}):this.audioCtx.state==="running"&&this.playDeathSound())}catch(i){console.warn("Error playing death sound:",i)}}updateDeath(e){this.deathFallProgress=Math.min(1,this.deathFallProgress+e*2.5);const t=-Math.PI/2*this.deathFallProgress;this.mesh&&(this.mesh.rotation.x=t,this.mesh.position.y=Math.max(0,this.mesh.position.y-e*.6)),this.deathTimer+=e,this.deathTimer>=(this.deathDuration||3)&&(this.mesh&&this.mesh.parent&&this.scene.remove(this.mesh),this.readyToDespawn=!0)}playGroan(){try{if(!this.audioCtx||!this.groanBuffer)return;if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playGroan());return}const e=this.audioCtx.createBufferSource();e.buffer=this.groanBuffer;const t=this.audioCtx.createGain();t.gain.value=.45,e.connect(t),t.connect(this.audioCtx.destination),e.onended=()=>{this._groanSource=null,this._groanGain=null},e.start(0),this._groanSource=e,this._groanGain=t}catch(e){console.warn("playGroan error:",e)}}stopGroan(){if(this._groanSource){try{this._groanSource.stop()}catch{}try{this._groanSource.disconnect()}catch{}this._groanSource=null}if(this._groanGain){try{this._groanGain.disconnect()}catch{}this._groanGain=null}}}class sm{constructor(e,t,n){this.scene=e,this.player=t,this.items=[],this.interactionPrompt=document.getElementById("interaction-prompt"),this.mapSize=n&&n.mapSize?n.mapSize:ps,this.spawnSpan=this.mapSize*.75,this.glowRadius=7,this.world=null,this.settings=n||{},this.matrixDropInterval=5,this._matrixDropTimer=0,this.matrixDropBatchSize=10,this.matrixDropRadiusLimit=10,this.initLoot(),document.addEventListener("keydown",i=>{i.code==="KeyE"&&this.tryInteract()})}setWorld(e){this.world=e,this.realignItemsToGround()}getClampedCoord(e,t){if(this.world&&typeof this.world.halfMapSize=="number"){const n=this.world.halfMapSize-1;return{x:Math.max(-n,Math.min(n,e)),z:Math.max(-n,Math.min(n,t))}}return{x:e,z:t}}initLoot(){if(this.settings.gameMode==="matrix"||this.settings.gameMode==="studio"||this.settings.skipLoot)return;for(let t=0;t<24;t++){let n=(Math.random()-.5)*this.spawnSpan,i=(Math.random()-.5)*this.spawnSpan;({x:n,z:i}=this.getClampedCoord(n,i)),this.createChest(n,.5,i)}for(let t=0;t<36;t++){let n=(Math.random()-.5)*this.spawnSpan,i=(Math.random()-.5)*this.spawnSpan;({x:n,z:i}=this.getClampedCoord(n,i)),this.spawnJuiceBottle(n,i)}const e=[2899536,15105570,1752220,15158332,10181046];for(let t=0;t<8;t++){let n=(Math.random()-.5)*this.spawnSpan,i=(Math.random()-.5)*this.spawnSpan;({x:n,z:i}=this.getClampedCoord(n,i));const r=e[t%e.length];this.spawnBackpack(n,i,r)}}createChest(e,t,n){this.spawnChest(e,n)}spawnChest(e,t){const n=new We;({x:e,z:t}=this.getClampedCoord(e,t));let i=.5;this.world&&typeof this.world.getHeightAt=="function"&&(i=this.world.getHeightAt(e,t)+.5),n.position.set(e,i,t);const r=new ee(1,.8,.6),o=new Z({color:15844367,roughness:.3,metalness:.5}),a=new z(r,o);n.add(a);const c=new ee(1,.2,.6),l=new z(c,o);l.position.y=.5,n.add(l);const h=new z(new ee(.2,.3,.1),new Z({color:9807270}));h.position.set(0,.3,.3),n.add(h),n.castShadow=!0,n.receiveShadow=!0;const u=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR"],d=u[Math.floor(Math.random()*u.length)];n.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:d};const p=this.createGlowEffect();return p.position.y=1,n.add(p),n.userData.glow=p,this.scene.add(n),this.items.push(n),n}spawnChestWithLoot(e,t,n){const i=new We;({x:e,z:t}=this.getClampedCoord(e,t));let r=.5;this.world&&typeof this.world.getHeightAt=="function"&&(r=this.world.getHeightAt(e,t)+.5),i.position.set(e,r,t);const o=new ee(1,.8,.6),a=new Z({color:15844367,roughness:.3,metalness:.5}),c=new z(o,a);i.add(c);const l=new ee(1,.2,.6),h=new z(l,a);h.position.y=.5,i.add(h);const u=new z(new ee(.2,.3,.1),new Z({color:9807270}));u.position.set(0,.3,.3),i.add(u),i.castShadow=!0,i.receiveShadow=!0,i.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:n};const d=this.createGlowEffect();return d.position.y=1,i.add(d),i.userData.glow=d,this.scene.add(i),this.items.push(i),i}spawnJuiceBottle(e,t){const n=new We;({x:e,z:t}=this.getClampedCoord(e,t));let i=.5;this.world&&typeof this.world.getHeightAt=="function"&&(i=this.world.getHeightAt(e,t)+.5),n.position.set(e,i,t);const r=new z(new ft(.2,.2,.6,8),new Z({color:2600544}));r.position.y=.5,n.add(r);const o=new z(new ft(.12,.12,.15,8),new Z({color:12597547}));o.position.y=.9,n.add(o),n.castShadow=!0,n.receiveShadow=!0,n.userData={type:"stamina",gameId:this.generateID(),gameName:"JuiceBottle",amount:50};const a=this.createGlowEffect();return a.position.y=.9,n.add(a),n.userData.glow=a,this.scene.add(n),this.items.push(n),n}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}spawnLootInHouse(e,t,n){this.spawnChest(e,n)}spawnBackpack(e,t,n){const i=new We;({x:e,z:t}=this.getClampedCoord(e,t));let r=.5;this.world&&typeof this.world.getHeightAt=="function"&&(r=this.world.getHeightAt(e,t)+.5),i.position.set(e,r,t);const o=new z(new ee(.7,.9,.35),new Z({color:n,metalness:.15,roughness:.8}));i.add(o);const a=new z(new ee(.6,.25,.16),new Z({color:3426654,metalness:.1,roughness:.8}));a.position.set(0,-.55,.18),i.add(a),i.castShadow=!0,i.receiveShadow=!0;const c=this.createGlowEffect();return c.position.y=1,i.add(c),i.userData={type:"backpack",color:n,gameId:this.generateID(),gameName:"Backpack",isOpened:!1,glow:c},this.scene.add(i),this.items.push(i),i}spawnMatrixLoadout(e=0,t=0){[{dx:2,dz:0,loot:"Pistol"},{dx:-2,dz:0,loot:"Rifle"},{dx:0,dz:2,loot:"Sniper"},{dx:0,dz:-2,loot:"ShieldPotion"},{dx:2,dz:2,loot:"SMG"},{dx:-2,dz:-2,loot:"Shotgun"},{dx:-2,dz:2,loot:"DMR"}].forEach(r=>{this.spawnChestWithLoot(e+r.dx,t+r.dz,r.loot)}),this.spawnJuiceBottle(e+3,t+3),this.spawnJuiceBottle(e-3,t-3),[2899536,15105570,1752220].forEach((r,o)=>{this.spawnBackpack(e+(o-1)*2,t+4,r)})}countNearbyChests(e=10){if(!this.player)return 0;const t=this.player.position;let n=0;return this.items.forEach(i=>{const r=i.userData||{};if(r.type!=="chest"||r.isOpened)return;const o=i.position.x-t.x,a=i.position.z-t.z;Math.sqrt(o*o+a*a)<=e&&n++}),n}createUmbrella(){const e=new We,t=new z(new ft(.08,.08,1.6,6),new Z({color:4863016,roughness:.8}));t.position.y=-.2,e.add(t),[16726832,15844367,3447003].forEach((r,o)=>{const a=new z(new ee(1.8-o*.3,.15,1.8-o*.3),new Z({color:r,roughness:.4,metalness:.2}));a.position.y=.7+o*.12,e.add(a)});const i=new z(new oi(.2,.25,6),new Z({color:2899536}));return i.position.y=1.1,e.add(i),e.castShadow=!0,e.receiveShadow=!0,e}spawnMatrixDropNearPlayer(){if(!this.player)return;const e=Math.random()*Math.PI*2,t=4+Math.random()*8;let n=this.player.position.x+Math.cos(e)*t,i=this.player.position.z+Math.sin(e)*t;({x:n,z:i}=this.getClampedCoord(n,i));let r=.5;this.world&&typeof this.world.getHeightAt=="function"&&(r=this.world.getHeightAt(n,i)+.5);const o=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR"],a=o[Math.floor(Math.random()*o.length)],c=this.spawnChestWithLoot(n,i,a);if(c){c.position.y=r+18,c.userData.isDropping=!0,c.userData.dropTargetY=r,c.userData.dropVelocity=0;const l=this.createUmbrella();l.position.y=1.2,c.add(l),c.userData.umbrella=l}}spawnMatrixDropsBatch(){if(this.countNearbyChests(this.matrixDropRadiusLimit)>=this.matrixDropBatchSize)return;const e=this.matrixDropBatchSize-this.countNearbyChests(this.matrixDropRadiusLimit),t=Math.max(0,Math.min(this.matrixDropBatchSize,e));for(let n=0;n<t;n++)this.spawnMatrixDropNearPlayer()}update(e=.016){const t=Math.max(0,e||0);this.settings.gameMode==="matrix"&&this.player&&(this._matrixDropTimer+=t,this._matrixDropTimer>=this.matrixDropInterval&&(this._matrixDropTimer=0,this.spawnMatrixDropsBatch())),this.items.forEach(r=>{const o=r.userData||{};if(o.isDropping&&(o.dropVelocity=(o.dropVelocity||0)+5*t,r.position.y-=o.dropVelocity*t,r.position.y<=o.dropTargetY&&(r.position.y=o.dropTargetY,o.isDropping=!1,o.dropVelocity=0,o.umbrella))){try{r.remove(o.umbrella)}catch{}o.umbrella=null}});let n=null;const i=this.player.position;for(const r of this.items){if(r.userData&&r.userData.isOpened)continue;const o=i.distanceTo(r.position);if(this.updateGlow(r,o),o<3){n=r;break}}if(!(this.interactionPrompt&&this.interactionPrompt.dataset.vehiclePrompt==="1"))if(n){this.interactionPrompt.classList.remove("hidden");const r=n.userData||{};if(r.type==="chest")this.interactionPrompt.innerText=`Press E to open (Contains: ${r.loot})`;else if(r.type==="stamina")this.interactionPrompt.innerText=`Press E to collect ${r.gameName} (+${r.amount} Stamina)`;else if(r.type==="backpack"){const o=r.color?"#"+r.color.toString(16).padStart(6,"0"):"";this.interactionPrompt.innerText=`Press E to equip Backpack ${o}`}else this.interactionPrompt.innerText="Press E to interact";this.currentItem=n}else this.interactionPrompt.classList.add("hidden"),this.currentItem=null}tryInteract(){if(this.currentItem){const e=this.currentItem.userData;if(!e)return;if(e.type==="chest"&&!e.isOpened)e.isOpened=!0,this.scene.remove(this.currentItem),this.player.collectItem(e.loot),console.log(`Looted ${e.loot}!`);else if(e.type==="stamina"){const t=e.amount||50;this.player&&(this.player.stamina=Math.min(100,this.player.stamina+t)),this.scene.remove(this.currentItem),e.isOpened=!0,console.log(`Picked up stamina item: +${t}`)}else if(e.type==="backpack"){const t=e.color||2899536;if(this.player&&typeof this.player.collectItem=="function"){const n=this.player.collectItem(`Backpack:${t.toString(16)}`);if(n!=null){const i=this.player.position.clone();this.spawnBackpack(i.x+.5,i.z+.5,n)}}this.scene.remove(this.currentItem),e.isOpened=!0,console.log(`Equipped backpack ${t.toString(16)}`)}}}realignItemsToGround(){!this.world||typeof this.world.getHeightAt!="function"||this.items.forEach(e=>{const t=e.position,n=this.world.getHeightAt(t.x,t.z),i=(e.userData&&e.userData.type==="chest",.5);e.position.y=n+i})}updateGlow(e,t){if(!e||!e.userData||!e.userData.glow)return;const n=e.userData.glow,i=!e.userData.isOpened&&t<this.glowRadius;n.visible=i,i&&(n.rotation.y+=.02,n.position.y=(e.userData.type==="chest"?1:.9)+Math.sin(performance.now()/500)*.1)}createGlowEffect(){const t=new Float32Array(120),n=.6;for(let a=0;a<40;a++){const c=n*Math.random(),l=Math.random()*Math.PI*2,h=Math.random()*n*.6;t[a*3]=Math.cos(l)*c,t[a*3+1]=h,t[a*3+2]=Math.sin(l)*c}const i=new mt;i.setAttribute("position",new St(t,3));const r=new qa({color:16765286,size:.15,transparent:!0,opacity:.9,depthWrite:!1,blending:sr,sizeAttenuation:!0}),o=new Sp(i,r);return o.visible=!1,o}}class rm{constructor(e,t={}){this.player=e,this.container=document.getElementById("touch-controls"),this.enabled=!0,this.joystick=document.createElement("div"),this.joystick.className="tc-joystick",this.joystick.style.zIndex="210",this.stick=document.createElement("div"),this.stick.className="tc-stick",this.joystick.appendChild(this.stick),this.buttons=document.createElement("div"),this.buttons.className="tc-buttons",this.buttons.style.zIndex="210",this.fireBtn=document.createElement("button"),this.fireBtn.className="tc-btn",this.fireBtn.innerText="FIRE",this.jumpBtn=document.createElement("button"),this.jumpBtn.className="tc-btn",this.jumpBtn.innerText="JUMP",this.sprintBtn=document.createElement("button"),this.sprintBtn.className="tc-btn",this.sprintBtn.innerText="SPRINT",this.interactBtn=document.createElement("button"),this.interactBtn.className="tc-btn tc-interact-btn",this.interactBtn.innerText="E",this.interactBtn.style.display="none",this.crouchBtn=document.createElement("button"),this.crouchBtn.className="tc-btn",this.crouchBtn.innerText="CROUCH",this.crouchBtn.style.fontSize="16px",this.buttons.appendChild(this.fireBtn),this.buttons.appendChild(this.jumpBtn),this.buttons.appendChild(this.sprintBtn),this.buttons.appendChild(this.crouchBtn),this.buttons.appendChild(this.interactBtn),this.container.appendChild(this.joystick),this.container.appendChild(this.buttons),this.container.classList.remove("hidden"),this.active=!1,this.startPos=null,this.currentPos={x:0,y:0},this.lookActive=!1,this.lookStartPos=null,this._bindJoystick(),this._bindButtons(),this._bindLookArea(),this.deadZone=10,this.maxRadius=50,document.body.style.touchAction="none";try{this.player&&(this.player.allowTouchMovement=!0)}catch{}}_dispatchTouchLook(e,t){try{window.dispatchEvent(new CustomEvent("game-touch-look",{detail:{dx:e,dy:t}}))}catch{}}destroy(){try{this.container.classList.add("hidden"),this.container.removeChild(this.joystick),this.container.removeChild(this.buttons),document.body.style.touchAction="",this.player&&(this.player.allowTouchMovement=!1)}catch{}}_bindJoystick(){this.joystick.addEventListener("touchstart",t=>{t.preventDefault();const n=t.changedTouches[0];this.joystick.getBoundingClientRect(),this.startPos={x:n.clientX,y:n.clientY},this.active=!0}),this.joystick.addEventListener("touchmove",t=>{if(!this.active)return;t.preventDefault();const n=t.changedTouches[0],i=n.clientX-this.startPos.x,r=n.clientY-this.startPos.y,o=Math.sqrt(i*i+r*r),a=Math.atan2(r,i),c=Math.min(this.maxRadius,o),l=Math.cos(a)*c,h=Math.sin(a)*c;this.stick.style.transform=`translate(${l}px, ${h}px)`;const u=i/this.maxRadius,d=r/this.maxRadius;this.player.moveForward=d<-.3,this.player.moveBackward=d>.3,this.player.moveLeft=u<-.3,this.player.moveRight=u>.3});const e=t=>{this.active&&(t.preventDefault(),this.active=!1,this.startPos=null,this.stick.style.transform="translate(0,0)",this.player.moveForward=!1,this.player.moveBackward=!1,this.player.moveLeft=!1,this.player.moveRight=!1)};this.joystick.addEventListener("touchend",e),this.joystick.addEventListener("touchcancel",e)}_bindButtons(){let e=null;this.fireBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&typeof this.player.shoot=="function"&&(this.player.shoot(),e=setInterval(()=>{this.player&&typeof this.player.shoot=="function"&&this.player.shoot()},150))}),this.fireBtn.addEventListener("touchend",t=>{t.preventDefault(),e&&(clearInterval(e),e=null)}),this.jumpBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&this.player.canJump===!0&&(this.player.velocity.y+=this.player.jumpHeight,this.player.canJump=!1)}),this.sprintBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&(this.player.isSprinting=!0)}),this.sprintBtn.addEventListener("touchend",t=>{t.preventDefault(),this.player&&(this.player.isSprinting=!1)}),this.interactBtn.addEventListener("touchstart",t=>{t.preventDefault(),window.game&&window.game.itemManager&&window.game.itemManager.tryInteract()}),this.crouchBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&(this.player.isCrouching=!this.player.isCrouching,this.crouchBtn.style.background=this.player.isCrouching?"rgba(52, 152, 219, 0.9)":"rgba(241, 196, 15, 0.9)")})}update(){window.game&&window.game.itemManager&&window.game.itemManager.currentItem?this.interactBtn.style.display="block":this.interactBtn.style.display="none"}destroyLookArea(){try{this.lookArea&&this.container&&this.lookArea.parentElement===this.container&&this.container.removeChild(this.lookArea)}catch{}this.lookArea=null}rebuildLookArea(){this.destroyLookArea(),this._bindLookArea()}_bindLookArea(){try{if(this.lookArea)try{this.container.removeChild(this.lookArea)}catch{}this.lookArea=document.createElement("div"),this.lookArea.className="tc-look-area",this.lookArea.style.position="absolute",this.lookArea.style.top="0",this.lookArea.style.bottom="0",this.lookArea.style.right="0",this.lookArea.style.left="0",this.lookArea.style.width="100%",this.lookArea.style.zIndex="190",this.lookArea.style.background="transparent",this.lookArea.style.touchAction="none",this.lookArea.style.pointerEvents="auto",this.container.appendChild(this.lookArea);let e=null,t=0,n=0;this.lookArea.addEventListener("touchstart",r=>{if(e!==null)return;const o=r.changedTouches[0];e=o.identifier,t=o.clientX,n=o.clientY,r.cancelable&&r.preventDefault()},{passive:!1}),this.lookArea.addEventListener("touchmove",r=>{if(e!==null){r.cancelable&&r.preventDefault();for(let o=0;o<r.changedTouches.length;o++)if(r.changedTouches[o].identifier===e){const a=r.changedTouches[o],c=a.clientX-t,l=a.clientY-n;t=a.clientX,n=a.clientY,this._dispatchTouchLook(c,l);break}}},{passive:!1});const i=r=>{if(e!==null){for(let o=0;o<r.changedTouches.length;o++)if(r.changedTouches[o].identifier===e){e=null;break}}};this.lookArea.addEventListener("touchend",i),this.lookArea.addEventListener("touchcancel",i)}catch{}}}function om({maxLines:s=400,autoShow:e=!1}={}){const t=[],n={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)},i=document.createElement("div");i.id="debug-overlay",i.className="debug-overlay hidden";const r=document.createElement("div");r.className="debug-overlay-header",r.innerHTML="<strong>DEBUG</strong>";const o=document.createElement("div");o.className="debug-overlay-actions";const a=document.createElement("button");a.textContent="Clear";const c=document.createElement("button");c.textContent="Close",o.appendChild(a),o.appendChild(c),r.appendChild(o);const l=document.createElement("div");l.className="debug-overlay-list",i.appendChild(r),i.appendChild(l),document.body.appendChild(i),r.style.cursor="move";let h=!1,u=0,d=0;function p(C){if(!h)return;const T=Math.max(0,Math.min(window.innerWidth-i.offsetWidth,C.clientX-u)),A=Math.max(0,Math.min(window.innerHeight-i.offsetHeight,C.clientY-d));i.style.left=T+"px",i.style.top=A+"px",i.style.right="auto"}function g(C){h=!1,window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g);try{C&&C.pointerId&&i.releasePointerCapture&&i.releasePointerCapture(C.pointerId)}catch{}}r.addEventListener("pointerdown",C=>{try{const T=i.getBoundingClientRect();i.style.left=T.left+"px",i.style.top=T.top+"px",i.style.position="fixed",i.style.transform="none",i.style.right="auto",u=C.clientX-T.left,d=C.clientY-T.top,h=!0,window.addEventListener("pointermove",p),window.addEventListener("pointerup",g);try{i.setPointerCapture&&i.setPointerCapture(C.pointerId)}catch{}}catch{}},{passive:!1});function _(){l.innerHTML="";const C=Math.max(0,t.length-s);for(let T=C;T<t.length;T++){const A=document.createElement("div");A.className="debug-line debug-"+t[T].level;const I=new Date(t[T].ts).toLocaleTimeString();A.textContent=`[${I}] ${t[T].level.toUpperCase()}: ${t[T].msg}`,l.appendChild(A)}l.scrollTop=l.scrollHeight}function m(C,T){try{const A=T.map(I=>{try{return typeof I=="string"?I:JSON.stringify(I)}catch{return String(I)}}).join(" ");t.push({level:C,msg:A,ts:Date.now()}),t.length>s*2&&t.splice(0,t.length-s*2),_()}catch{}}console.log=function(...C){n.log(...C),m("log",C)},console.info=function(...C){n.info(...C),m("info",C)},console.warn=function(...C){n.warn(...C),m("warn",C)},console.error=function(...C){n.error(...C),m("error",C)};function f(C,T,A,I,v){typeof C=="string"?m("error",[C+" "+(T||"")+":"+(A||"?")]):C&&C.message&&m("error",[C.message,C.error||v])}function y(C){try{m("error",["UnhandledRejection",C&&C.reason?C.reason:C])}catch{}}window.addEventListener("error",f),window.addEventListener("unhandledrejection",y),a.addEventListener("click",()=>{t.length=0,_()}),c.addEventListener("click",()=>S());function x(){i.classList.remove("hidden")}function S(){i.classList.add("hidden")}return e&&x(),{show:x,hide:S,destroy(){console.log=n.log,console.info=n.info,console.warn=n.warn,console.error=n.error,window.removeEventListener("error",f),window.removeEventListener("unhandledrejection",y);try{i.remove()}catch{}},logs:t}}const ss=(()=>{try{return typeof navigator>"u"?!1:/Mobi|Android|iPhone|iPad|Tablet|Mobile/i.test(navigator.userAgent)||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}catch{return!1}})();window.addEventListener("unhandledrejection",s=>{try{const e=s.reason,t=e&&e.message?e.message:String(e);if(t&&t.includes("If you see this error we have a bug")){console.warn("Suppressed Chromium UnknownError:",t),s.preventDefault&&s.preventDefault();return}}catch{}});class Ar{constructor(){this.scene=new Mp,this.scene.background=new Re(8900331),this.scene.fog=new Sr(8900331,20,100),this.renderer=new Va({antialias:!0});const e=ss?1:1.5;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tc,document.getElementById("game-container").appendChild(this.renderer.domElement);const t=new Rp(16777215,.6);this.scene.add(t);const n=new Cp(16777215,.8);n.position.set(50,100,50),n.castShadow=!0,n.shadow.camera.left=-100,n.shadow.camera.right=100,n.shadow.camera.top=100,n.shadow.camera.bottom=-100,n.shadow.camera.near=.1,n.shadow.camera.far=160,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,this.scene.add(n),this.camera=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),this.clock=new Pp,this._pickRaycaster=new Kt,this._objectClickHandler=null,this._objectClickTarget=null,this._longPressTimer=null,this.hotkeyModalVisible=!1,this.isPaused=!1,this.pauseMenu=document.getElementById("pause-menu"),this.bgAudio=null,this.bgMusicVolume=.5,this._endSequenceAudio=null,this._prevBgVolume=null,document.addEventListener("keydown",i=>{if(i.code==="Escape"&&this.togglePause(),this.player&&this.player.gameMode==="studio")if(i.code==="KeyL")try{this.spawnStudioDrops()}catch(r){console.warn("Studio drop failed:",r)}else i.code==="KeyH"&&this.toggleHotkeyModal(!this.hotkeyModalVisible)}),this.setupMenu(),this.setupLongPressMenu(),document.addEventListener("pointerlockerror",i=>{i.preventDefault&&i.preventDefault(),console.warn("Pointer lock request failed or was cancelled.")})}spawnStudioDrops(){if(!(!this.itemManager||!this.player||this.player.gameMode!=="studio"))try{for(let e=0;e<3;e++)this.itemManager.spawnMatrixDropNearPlayer()}catch(e){console.warn("spawnStudioDrops error:",e)}}toggleHotkeyModal(e){const t=document.getElementById("hotkey-modal");t&&(t.classList.toggle("hidden",!e),t.setAttribute("aria-hidden",e?"false":"true"),this.hotkeyModalVisible=e)}toggleTouchLookArea(e){try{if(!this.touchControls)return;e?this.touchControls.lookArea?this.touchControls.lookArea.style.display="":this.touchControls.rebuildLookArea&&this.touchControls.rebuildLookArea():this.touchControls.destroyLookArea?this.touchControls.destroyLookArea():this.touchControls.lookArea&&(this.touchControls.lookArea.style.display="none")}catch{}}setHotbarVisible(e){const t=document.getElementById("hotbar");t&&(t.style.display=e?"flex":"none")}updateDebugToggleVisibility(e){const t=document.getElementById("debug-toggle-btn");if(t&&(t.classList.toggle("hidden",!e),!e&&window.debugOverlay&&typeof window.debugOverlay.hide=="function")){try{window.debugOverlay.hide()}catch{}try{localStorage.removeItem("showDebugOverlay")}catch{}}}setupMenu(){const e=document.getElementById("main-menu"),t=document.getElementById("play-btn"),n=document.getElementById("setting-difficulty"),i=document.getElementById("setting-enemies"),r=document.getElementById("setting-storm"),o=document.getElementById("setting-map-size"),a=document.getElementById("map-size-val"),c=document.getElementById("setting-debug"),l=document.getElementById("setting-minimap"),h=document.getElementById("setting-music-volume"),u=document.getElementById("setting-music-volume-val"),d=document.getElementById("setting-camera"),p=document.getElementById("setting-touch-controls"),g=document.getElementById("setting-game-mode"),_=document.getElementById("quit-btn"),m=document.getElementById("float-btn"),f=document.getElementById("hotkey-hint"),y=document.getElementById("hotkey-modal"),x=document.getElementById("hotkey-modal-close"),S=document.getElementById("enemy-count-val"),C=document.getElementById("storm-time-val"),T=(v,w)=>{if(!v||!w)return;const N=()=>{w.innerText=v.value};v.addEventListener("input",N),v.addEventListener("change",N),N()},A=localStorage.getItem("voxel-firecraft-settings");if(A){const v=JSON.parse(A);if(n.value=v.difficulty,i.value=v.enemyCount,r.value=v.stormTime,S.innerText=v.enemyCount,C.innerText=v.stormTime,o&&a){const w=v.mapSize||ps;o.value=w,a.innerText=w}if(v.debugMode&&(c.checked=!0),l&&(l.checked=v.showMinimap!==!1),v.musicVolume!==void 0&&h&&u){const w=parseInt(v.musicVolume,10);h.value=w,u.innerText=w,this.bgMusicVolume=w/100}v.cameraMode&&(d.value=v.cameraMode),v.useTouchControls!==void 0&&p&&(p.checked=!!v.useTouchControls),v.gameMode&&g&&(g.value=v.gameMode)}T(i,S),T(r,C),T(o,a),t.onclick=()=>{const v={difficulty:n.value,enemyCount:parseInt(i.value),stormTime:parseInt(r.value),mapSize:o?parseInt(o.value):ps,debugMode:c.checked,showMinimap:l?l.checked:!0,musicVolume:h?parseInt(h.value):Math.round(this.bgMusicVolume*100),musicEnabled:document.getElementById("setting-music-enabled")?document.getElementById("setting-music-enabled").checked:!0,cameraMode:d.value,useTouchControls:p?p.checked:!1,gameMode:g?g.value:"survival"};if(localStorage.setItem("voxel-firecraft-settings",JSON.stringify(v)),this.updateDebugToggleVisibility(v.debugMode),e.style.display="none",v.musicEnabled!==!1?this.playBackgroundMusic():this.stopBackgroundMusic(),this.player&&this.world&&this.enemyManager){if(this.isPaused=!1,this.clock.getDelta(),t.innerText="PLAY GAME",this.player)try{this.player.lockControls()}catch{}this.hud&&(this.hud.settings=v),this.setHotbarVisible(!0)}else t.innerText="PLAY GAME",this.startGame(v);if(f){const w=v&&v.gameMode==="studio";f.classList.toggle("hidden",!w)}},_&&(_.onclick=()=>{try{localStorage.removeItem("voxel-firecraft-settings")}catch{}location.reload()}),m&&m.classList.add("hidden"),f&&(f.onclick=()=>this.toggleHotkeyModal(!0)),x&&(x.onclick=()=>this.toggleHotkeyModal(!1)),y&&y.addEventListener("click",v=>{v.target===y&&this.toggleHotkeyModal(!1)}),h&&(h.oninput=()=>{const v=parseInt(h.value,10);if(u&&(u.innerText=v),this.bgMusicVolume=v/100,this.bgAudio)try{this.bgAudio.volume=this.bgMusicVolume}catch{}});const I=document.getElementById("setting-music-enabled");I&&(I.onchange=()=>{I.checked?this.playBackgroundMusic():this.stopBackgroundMusic()}),p&&(p.onchange=()=>{try{const v=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");v.useTouchControls=p.checked,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(v))}catch{}}),this.setHotbarVisible(!1)}startGame(e){const t={...e};(t.gameMode==="matrix"||t.gameMode==="studio")&&(t.enemyCount=0,t.skipLoot=!0),this.player=new $p(this.camera,this.scene,null,t),this.itemManager=new sm(this.scene,this.player,t),this.world=new Up(this.scene,this.itemManager,t),this.player.worldObjects=this.world.objects,this.player.world=this.world,this.itemManager&&typeof this.itemManager.setWorld=="function"&&this.itemManager.setWorld(this.world),t.gameMode==="matrix"&&this.itemManager&&typeof this.itemManager.spawnMatrixLoadout=="function"&&this.itemManager.spawnMatrixLoadout(this.player.position.x,this.player.position.z),this.hud=new Qp(this.player,this.world,e),this.hud&&typeof this.hud.setRenderer=="function"&&this.hud.setRenderer(this.renderer),this.enemyManager=new nm(this.scene,this.player,this.world,t),this.player.setEnemyManager(this.enemyManager),this.setupObjectInspector(),this.updateDebugToggleVisibility(!!e.debugMode),this.setHotbarVisible(!0);const n=document.getElementById("float-btn");n&&(t.gameMode==="studio"?(n.classList.remove("hidden"),n.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF",n.onclick=()=>{if(this.player.isFloating=!this.player.isFloating,!this.player.isFloating){const o=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=o,this.player.velocity.y=0}n.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF"}):n.classList.add("hidden"));const i=document.getElementById("storm-timer");if(i){const o=t.gameMode==="studio";i.classList.toggle("hidden",o)}window.addEventListener("resize",()=>this.onWindowResize(),!1),this.renderer.domElement.addEventListener("pointerdown",()=>{if(!ss){try{const o=document.getElementById("main-menu")&&document.getElementById("main-menu").style.display!=="none",a=this.player&&this.player.gameMode==="studio";if(this.isPaused||o||a)return;this.player&&!this.player.isDead&&this.player.lockControls()}catch(o){console.warn("Pointer lock request skipped or failed:",o)}this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic()}}),this.setupPauseMenu();try{const o=typeof navigator<"u"&&/Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent),a=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;(!!e.useTouchControls||o||a)&&(this.touchControls=new rm(this.player))}catch{}if(this.setupStudioPalette(t),!ss&&this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch(o){console.warn("Pointer lock on start skipped/failed:",o)}this.animate()}setupLongPressMenu(){if(!ss)return;const e=document.getElementById("ui-layer")||document.body;if(!e)return;const t=i=>{try{if(i.touches&&i.touches.length>1)return;this._longPressTimer&&clearTimeout(this._longPressTimer),this._longPressTimer=setTimeout(()=>{this._longPressTimer=null,this.showPauseMenu()},800)}catch{}},n=()=>{this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)};e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n),e.addEventListener("touchmove",n)}refreshStudioPaletteVisibility(){const e=document.getElementById("studio-palette");if(!e)return;const t=this.player&&this.player.gameMode==="studio"&&!this.isPaused;e.classList.toggle("hidden",!t)}setupStudioPalette(e){const t=document.getElementById("studio-palette");if(!t)return;const n=e&&e.gameMode==="studio";if(t.classList.toggle("hidden",!n),!n)return;this.initStudioPaletteDrag(t),t.querySelectorAll("button").forEach(r=>{if(r._boundStudio)return;r._boundStudio=!0;const o=c=>{if(c&&c.stopPropagation&&c.stopPropagation(),!this.player||!this.world)return;const l=r.getAttribute("data-action");if(l==="resume"){if(this.isPaused=!1,this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch{}const g=document.getElementById("main-menu");g&&(g.style.display="none"),this.setHotbarVisible(!0);try{t.classList.add("hidden")}catch{}if(this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0),this.player&&this.player.studioSelectionHelper){try{this.player.scene.remove(this.player.studioSelectionHelper)}catch{}this.player.studioSelectionHelper=null}this.refreshStudioPaletteVisibility(),this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic();return}else if(l==="float-toggle"){if(this.player&&this.player.gameMode==="studio"){this.player.isFloating=!this.player.isFloating;const g=this.player.isFloating?"FLOAT ON":"FLOAT OFF";if(r.innerText=g,!this.player.isFloating){const _=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=_,this.player.velocity.y=0}}return}else if(l==="spawn-npc"){this.enemyManager&&typeof this.enemyManager.spawnEnemy=="function"&&this.enemyManager.spawnEnemy(!0);return}else if(l==="drops"){this.spawnStudioDrops();return}else if(l==="menu"){this.showPauseMenu();return}else if(l==="quit"){try{localStorage.removeItem("voxel-firecraft-settings")}catch{}location.reload();return}const h=r.getAttribute("data-prefab"),u=r.getAttribute("data-vehicle-type"),d=r.getAttribute("data-tree-type"),p=r.getAttribute("data-submenu");if(p){const g=document.getElementById(p);g&&g.classList.toggle("hidden");return}if(this.studioSelectedPrefab=h,this.studioSelectedOptions=u?{variant:u}:d?{variant:d}:{},this.toggleTouchLookArea(!1),p){const g=document.getElementById(p);g&&g.classList.add("hidden")}},a=c=>{c&&c.preventDefault&&c.preventDefault(),o(c)};r.addEventListener("pointerdown",a),r.addEventListener("click",c=>{c&&c.preventDefault&&c.preventDefault(),o(c)})})}setupObjectInspector(){const e=this.renderer?this.renderer.domElement:null;if(e){if(this._objectClickHandler&&this._objectClickTarget)try{this._objectClickTarget.removeEventListener("click",this._objectClickHandler),this._objectClickTarget.removeEventListener("pointerdown",this._objectClickHandler)}catch{}this._objectClickTarget=e,this._objectClickHandler=t=>{if(!this.player||!this.hud)return;const n=this.player.gameMode||"survival";if(n==="matrix")return;if(n==="studio"&&this.studioSelectedPrefab){const d=e.getBoundingClientRect(),p=(t.clientX-d.left)/d.width*2-1,g=-((t.clientY-d.top)/d.height*2-1),_=new Kt;_.setFromCamera(new we(p,g),this.camera);const m=_.intersectObjects(this.world.objects,!0);let f=null;for(const y of m)if(y.object&&y.object.userData&&y.object.userData.gameName==="Ground"){f=y;break}if(!f){const y=new Kt;y.setFromCamera(new we(0,0),this.camera);const x=y.intersectObjects(this.world.objects,!0);for(const S of x)if(S.object&&S.object.userData&&S.object.userData.gameName==="Ground"){f=S;break}}if(f&&typeof this.world.spawnPrefab=="function"){const y=this.studioSelectedOptions||{};this.world.spawnPrefab(this.studioSelectedPrefab,f.point.x,f.point.z,y)}this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0);return}let i=0,r=0;if(this.player.controls&&this.player.controls.isLocked)i=0,r=0;else{const d=e.getBoundingClientRect();i=(t.clientX-d.left)/d.width*2-1,r=-((t.clientY-d.top)/d.height*2-1)}this._pickRaycaster.setFromCamera(new we(i,r),this.camera);const o=[];if(this.world&&Array.isArray(this.world.objects)&&o.push(...this.world.objects),this.itemManager&&Array.isArray(this.itemManager.items)&&o.push(...this.itemManager.items),this.enemyManager&&Array.isArray(this.enemyManager.enemies)&&this.enemyManager.enemies.forEach(d=>{d&&d.mesh&&o.push(d.mesh)}),o.length===0)return;const a=this._pickRaycaster.intersectObjects(o,!0);if(!a.length)return;let c=a[0].object,l=null;for(;c;){if(c.userData&&(c.userData.gameId||c.userData.gameid)&&c.userData.gameName){l=c.userData;break}c=c.parent}if(!l)return;const h=l.gameName||"Object",u=l.gameId||l.gameid||"---";typeof this.hud.showSelectionInfo=="function"&&this.hud.showSelectionInfo(h,u)},e.addEventListener("click",this._objectClickHandler),e.addEventListener("pointerdown",this._objectClickHandler)}}initStudioPaletteDrag(e){if(!e||e._dragInit)return;e._dragInit=!0;const t=e.querySelector(".palette-title")||e;let n=!1,i=0,r=0,o=0,a=0,c=null;e.style.touchAction="none";const l=u=>{if(!n){const _=Math.abs(u.clientX-o),m=Math.abs(u.clientY-a);if(_<3&&m<3)return;n=!0,c&&(e.style.right="auto",e.style.bottom="auto",e.style.position="fixed",e.style.width=`${c.width}px`,e.style.minWidth=`${c.width}px`,e.style.maxWidth=`${c.width}px`,e.style.left=`${c.left}px`,e.style.top=`${c.top}px`)}const d=e.getBoundingClientRect(),p=Math.max(0,Math.min(window.innerWidth-d.width,u.clientX-i)),g=Math.max(0,Math.min(window.innerHeight-d.height,u.clientY-r));e.style.left=`${p}px`,e.style.top=`${g}px`},h=()=>{n=!1,t.releasePointerCapture&&t.releasePointerCapture(t._dragPointerId),document.removeEventListener("pointermove",l),document.removeEventListener("pointerup",h)};t.addEventListener("pointerdown",u=>{try{u.preventDefault()}catch{}const d=e.getBoundingClientRect();c=d,i=u.clientX-d.left,r=u.clientY-d.top,o=u.clientX,a=u.clientY,n=!1,t._dragPointerId=u.pointerId;try{t.setPointerCapture(u.pointerId)}catch{}document.addEventListener("pointermove",l),document.addEventListener("pointerup",h)})}togglePause(){if(this.player){if(this.player.controls&&this.player.controls.isLocked){this.showPauseMenu();return}this.isPaused=!this.isPaused,this.isPaused?this.pauseBackgroundMusic():this.playBackgroundMusic()}}setupPauseMenu(){document.addEventListener("keydown",t=>{t.code==="Escape"&&this.player&&!this.player.isDead&&(t.preventDefault(),this.showPauseMenu())});const e=document.getElementById("pause-menu");e&&e.remove()}showPauseMenu(){this.isPaused=!0,this.player.controls&&this.player.controls.isLocked&&this.player.controls.unlock(),this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps(),this.pauseBackgroundMusic();const e=document.getElementById("main-menu");if(e){e.style.display="flex";const t=document.getElementById("play-btn");t&&this.player&&(t.innerText="RESUME GAME")}if(this.setHotbarVisible(!1),this.player&&this.player.gameMode==="studio"){const t=document.getElementById("studio-palette");t&&t.classList.remove("hidden")}}playBackgroundMusic(){try{this.bgAudio||(this.bgAudio=new Audio(Ip),this.bgAudio.loop=!0,this.bgAudio.volume=this.bgMusicVolume,this.bgAudio.preload="auto");const e=this.bgAudio.play();e&&typeof e.then=="function"&&e.catch(()=>{})}catch(e){console.warn("Could not play background music:",e)}}pauseBackgroundMusic(){if(this.bgAudio&&!this.bgAudio.paused)try{this.bgAudio.pause()}catch{}}stopBackgroundMusic(){if(this.bgAudio)try{this.bgAudio.pause(),this.bgAudio.currentTime=0}catch{}}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());try{const e=this.clock.getDelta(),t=Math.min(e,.1),n=!!(this.touchControls&&this.touchControls.enabled),i=!!(this.player&&this.player.controls&&this.player.controls.isLocked),r=!!(this.player&&this.player.gameMode==="studio");if(!this.isPaused&&this.player&&(i||n||r)){try{this.player.update(t)}catch(o){console.error("Error in player.update:",o)}try{const o=this.world.update(t,this.player.position);!(this.player&&this.player.gameMode==="studio")&&o&&o.inStorm?this.player.takeDamage(1*t):this.player&&typeof this.player.clearHurtQueue=="function"&&this.player.clearHurtQueue()}catch(o){console.error("Error in world.update:",o)}try{this.enemyManager.update(t)}catch(o){console.error("Error in enemyManager.update:",o)}try{this.itemManager.update(t)}catch(o){console.error("Error in itemManager.update:",o)}try{this.hud.update()}catch(o){console.error("Error in hud.update:",o)}try{this.touchControls&&typeof this.touchControls.update=="function"&&this.touchControls.update()}catch(o){console.error("Error in touchControls.update:",o)}try{if(!(this.player&&(this.player.gameMode==="matrix"||this.player.gameMode==="studio"))&&this.enemyManager.enemies.length===0&&!this.player.isDead&&!this.victoryShown){this.victoryShown=!0;try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}this.hud.showVictory(),this.player.controls.unlock()}}catch(o){console.error("Error in victory check:",o)}}this.renderer.render(this.scene,this.camera)}catch(e){try{console.error("Unhandled error in Game.animate:",e,{playerExists:!!this.player,playerWeaponCount:this.player?this.player.weapons?this.player.weapons.length:"no-weapons":"no-player",currentWeaponIndex:this.player?this.player.currentWeaponIndex:"no-player",hudExists:!!this.hud,hudSettings:this.hud?this.hud.settings:null});try{this._logRenderMaterialDiagnostics(e)}catch(t){console.error("Error during render diagnostics:",t)}}catch(t){console.error("Error logging animate failure:",t)}return}}}Ar.prototype.playEndSequence=function(s,e={}){try{if(this._playingEndSequence)return;if(this._playingEndSequence=!0,this.bgAudio)try{this._prevBgVolume=this.bgAudio.volume,this.bgAudio.pause()}catch{this._prevBgVolume=this.bgMusicVolume}if(this._endSequenceAudio){try{this._endSequenceAudio.pause(),this._endSequenceAudio.currentTime=0}catch{}this._endSequenceAudio=null}const t=new Audio(s);t.loop=e.loop||!1,t.volume=e.volume!==void 0?e.volume:1,t.preload="auto",this._endSequenceAudio=t,t.load(),setTimeout(()=>{const n=t.play();n&&typeof n.then=="function"&&n.catch(i=>{console.log("Audio playback blocked, waiting for user interaction:",i);const r=()=>{t.readyState<2&&t.load(),t.play().catch(()=>{}),document.removeEventListener("touchstart",r),document.removeEventListener("click",r)};document.addEventListener("touchstart",r,{once:!0}),document.addEventListener("click",r,{once:!0})})},100),t.addEventListener("ended",()=>{try{this.bgAudio&&this._prevBgVolume!==null&&(this.bgAudio.volume=this._prevBgVolume)}catch{}this._endSequenceAudio=null,this._prevBgVolume=null,this._playingEndSequence=!1})}catch(t){console.warn("playEndSequence error:",t)}};Ar.prototype._logRenderMaterialDiagnostics=function(s){try{const e=[];let t=0;this.scene.traverse(n=>{if(n.isMesh){t++;const i=n.material;if(!i){e.push({uuid:n.uuid,name:n.name||n.userData&&n.userData.gameName||"mesh",issue:"no-material"});return}const r=o=>({type:o.type||o.constructor&&o.constructor.name||"Unknown",isShaderMaterial:!!o.isShaderMaterial,isStandardMaterial:!!o.isMeshStandardMaterial,hasEmissive:o.emissive!==void 0,uniformsKeys:o.uniforms?Object.keys(o.uniforms):null,userData:o.userData||null});Array.isArray(i)?e.push({uuid:n.uuid,name:n.name||n.userData&&n.userData.gameName||"mesh",materials:i.map(r)}):e.push({uuid:n.uuid,name:n.userData&&n.userData.gameName||n.name||"mesh",material:r(i)})}}),console.error("Render diagnostics:",{originalError:s&&s.toString(),totalMeshes:t,sampleProblems:e.slice(0,30),note:"Look for materials missing expected uniforms (shader/standard) or meshes without material."})}catch(e){console.error("Failed collecting render diagnostics:",e)}};window.game=new Ar;(function(){try{const e=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}"),t=e&&e.debugMode||localStorage.getItem("showDebugOverlay")==="true"||!!window.DEBUG_OVERLAY;window.debugOverlay=om({autoShow:!!t}),window.addEventListener("keydown",n=>{if(n.key==="`"&&window.debugOverlay){const i=document.getElementById("debug-overlay");i&&i.classList.contains("hidden")?window.debugOverlay.show():window.debugOverlay&&window.debugOverlay.hide()}});try{let n=document.getElementById("debug-toggle-btn");n||(n=document.createElement("button"),n.id="debug-toggle-btn",n.title="Debug logs",n.innerText="DBG",document.body.appendChild(n));const i=!0;n.addEventListener("click",r=>{try{const o=document.getElementById("debug-overlay");o&&o.classList.contains("hidden")?(window.debugOverlay&&window.debugOverlay.show(),localStorage.setItem("showDebugOverlay","true")):(window.debugOverlay&&window.debugOverlay.hide(),localStorage.removeItem("showDebugOverlay"))}catch(o){console.warn("debug toggle error",o)}})}catch{}}catch(e){console.warn("debugOverlay init failed",e)}})();window.addEventListener("game-touch-look",s=>{try{const e=s.detail||{dx:0,dy:0},t=.003;if(window.game&&window.game.player)try{if(typeof window.game.player.rotateCamera=="function")window.game.player.rotateCamera(e.dx*t,e.dy*t);else{window.game.player._touchYaw=(window.game.player._touchYaw||0)-e.dx*.01,window.game.player._touchPitch=(window.game.player._touchPitch||0)-e.dy*.01;const i=Math.PI/2-.1;window.game.player._touchPitch=Math.max(-i,Math.min(i,window.game.player._touchPitch))}}catch{}}catch{}});
