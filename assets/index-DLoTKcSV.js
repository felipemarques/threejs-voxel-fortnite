(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mr="160",tl=0,Nr=1,il=2,nl=0,_a=1,sl=2,ii=3,gi=0,Rt=1,kt=2,fi=0,rn=1,sr=2,Br=3,Fr=4,rl=5,Ai=100,ol=101,al=102,Or=103,kr=104,ll=200,cl=201,hl=202,ul=203,rr=204,or=205,dl=206,fl=207,pl=208,ml=209,gl=210,_l=211,yl=212,vl=213,xl=214,Ml=0,Sl=1,wl=2,as=3,El=4,bl=5,Tl=6,Al=7,gs=0,Cl=1,Rl=2,pi=0,Pl=1,Ll=2,Dl=3,Il=4,Ul=5,Nl=6,ya=300,cn=301,hn=302,ar=303,lr=304,_s=306,ls=1e3,Xt=1001,cr=1002,St=1003,zr=1004,Bl=1004,Ts=1005,Ot=1006,Fl=1007,Tn=1008,mi=1009,Ol=1010,kl=1011,gr=1012,va=1013,ui=1014,di=1015,An=1016,xa=1017,Ma=1018,Ri=1020,zl=1021,qt=1023,Hl=1024,Gl=1025,Pi=1026,un=1027,Vl=1028,Sa=1029,Wl=1030,wa=1031,Ea=1033,As=33776,Cs=33777,Rs=33778,Ps=33779,Hr=35840,Gr=35841,Vr=35842,Wr=35843,ba=36196,Xr=37492,qr=37496,jr=37808,Yr=37809,Kr=37810,$r=37811,Zr=37812,Jr=37813,Qr=37814,eo=37815,to=37816,io=37817,no=37818,so=37819,ro=37820,oo=37821,Ls=36492,ao=36494,lo=36495,Xl=36283,co=36284,ho=36285,uo=36286,Ta=3e3,Li=3001,ql=3200,jl=3201,ys=0,Yl=1,zt="",yt="srgb",si="srgb-linear",_r="display-p3",vs="display-p3-linear",cs="linear",et="srgb",hs="rec709",us="p3",Ni=7680,fo=519,Kl=512,$l=513,Zl=514,Aa=515,Jl=516,Ql=517,ec=518,tc=519,po=35044,mo="300 es",hr=1035,ni=2e3,ds=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let go=1234567;const Sn=Math.PI/180,Cn=180/Math.PI;function fn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Ct(r,e,t){return Math.max(e,Math.min(t,r))}function yr(r,e){return(r%e+e)%e}function ic(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function nc(r,e,t){return r!==e?(t-r)/(e-r):0}function wn(r,e,t){return(1-t)*r+t*e}function sc(r,e,t,i){return wn(r,e,1-Math.exp(-t*i))}function rc(r,e=1){return e-Math.abs(yr(r,e*2)-e)}function oc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ac(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function lc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function cc(r,e){return r+Math.random()*(e-r)}function hc(r){return r*(.5-Math.random())}function uc(r){r!==void 0&&(go=r);let e=go+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dc(r){return r*Sn}function fc(r){return r*Cn}function ur(r){return(r&r-1)===0&&r!==0}function pc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mc(r,e,t,i,n){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _t={DEG2RAD:Sn,RAD2DEG:Cn,generateUUID:fn,clamp:Ct,euclideanModulo:yr,mapLinear:ic,inverseLerp:nc,lerp:wn,damp:sc,pingpong:rc,smoothstep:oc,smootherstep:ac,randInt:lc,randFloat:cc,randFloatSpread:hc,seededRandom:uc,degToRad:dc,radToDeg:fc,isPowerOfTwo:ur,ceilPowerOfTwo:pc,floorPowerOfTwo:fs,setQuaternionFromProperEuler:mc,normalize:Tt,denormalize:tn};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,n,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c)}set(e,t,i,n,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],x=n[1],v=n[4],S=n[7],C=n[2],T=n[5],A=n[8];return s[0]=o*_+a*x+l*C,s[3]=o*m+a*v+l*T,s[6]=o*f+a*S+l*A,s[1]=c*_+h*x+u*C,s[4]=c*m+h*v+u*T,s[7]=c*f+h*S+u*A,s[2]=d*_+p*x+g*C,s[5]=d*m+p*v+g*T,s[8]=d*f+p*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(a*i-n*o)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Ve;function Ca(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ps(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gc(){const r=ps("canvas");return r.style.display="block",r}const _o={};function En(r){r in _o||(_o[r]=!0,console.warn(r))}const yo=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vo=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Un={[si]:{transfer:cs,primaries:hs,toReference:r=>r,fromReference:r=>r},[yt]:{transfer:et,primaries:hs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[vs]:{transfer:cs,primaries:us,toReference:r=>r.applyMatrix3(vo),fromReference:r=>r.applyMatrix3(yo)},[_r]:{transfer:et,primaries:us,toReference:r=>r.convertSRGBToLinear().applyMatrix3(vo),fromReference:r=>r.applyMatrix3(yo).convertLinearToSRGB()}},_c=new Set([si,vs]),Ye={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!_c.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Un[e].toReference,n=Un[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Un[r].primaries},getTransfer:function(r){return r===zt?cs:Un[r].transfer}};function on(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bi;class Ra{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=ps("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=on(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(on(t[i]/255)*255):t[i]=on(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yc=0;class Pa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Us(n[o].image)):s.push(Us(n[o]))}else s=Us(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Us(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ra.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vc=0;class Pt extends Ui{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Xt,n=Xt,s=Ot,o=Tn,a=qt,l=mi,c=Pt.DEFAULT_ANISOTROPY,h=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=fn(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Li?yt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ya)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?Li:Ta}set encoding(e){En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Li?yt:zt}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=ya;Pt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,i=0,n=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(f+1)/2,T=(h+d)/4,A=(u+_)/4,I=(g+m)/4;return v>S&&v>C?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=T/i,s=A/i):S>C?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=T/n,s=I/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=A/s,n=I/s),this.set(i,n,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xc extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(En("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Li?yt:zt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends xc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class La extends Pt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=St,this.minFilter=St,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends Pt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=St,this.minFilter=St,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,f*x);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*x;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),p=l(n/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-n)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-s*n),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new R,xo=new Rn;class yi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ht):Ht.fromBufferAttribute(s,o),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nn.copy(i.boundingBox)),Nn.applyMatrix4(e.matrixWorld),this.union(Nn)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_n),Bn.subVectors(this.max,_n),Fi.subVectors(e.a,_n),Oi.subVectors(e.b,_n),ki.subVectors(e.c,_n),oi.subVectors(Oi,Fi),ai.subVectors(ki,Oi),Mi.subVectors(Fi,ki);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Mi.z,Mi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Mi.z,0,-Mi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Mi.y,Mi.x,0];return!Bs(t,Fi,Oi,ki,Bn)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,Fi,Oi,ki,Bn))?!1:(Fn.crossVectors(oi,ai),t=[Fn.x,Fn.y,Fn.z],Bs(t,Fi,Oi,ki,Bn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new R,new R,new R,new R,new R,new R,new R,new R],Ht=new R,Nn=new yi,Fi=new R,Oi=new R,ki=new R,oi=new R,ai=new R,Mi=new R,_n=new R,Bn=new R,Fn=new R,Si=new R;function Bs(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Si.fromArray(r,s);const a=n.x*Math.abs(Si.x)+n.y*Math.abs(Si.y)+n.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),h=i.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Sc=new yi,yn=new R,Fs=new R;class Pn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sc.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yn.subVectors(e,this.center);const t=yn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(yn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yn.copy(e.center).add(Fs)),this.expandByPoint(yn.copy(e.center).sub(Fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new R,Os=new R,On=new R,li=new R,ks=new R,kn=new R,zs=new R;class xs{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Os.copy(e).add(t).multiplyScalar(.5),On.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Os);const s=e.distanceTo(t)*.5,o=-this.direction.dot(On),a=li.dot(this.direction),l=-li.dot(On),c=li.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Os).addScaledVector(On,d),p}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const i=Jt.dot(this.direction),n=Jt.dot(Jt)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,i,n,s){ks.subVectors(t,e),kn.subVectors(i,e),zs.crossVectors(ks,kn);let o=this.direction.dot(zs),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(kn.crossVectors(li,kn));if(l<0)return null;const c=a*this.direction.dot(ks.cross(li));if(c<0||l+c>o)return null;const h=-a*li.dot(zs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,n,s,o,a,l,c,h,u,d,p,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c,h,u,d,p,g,_,m)}set(e,t,i,n,s,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wc,e,Ec)}lookAt(e,t,i){const n=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),ci.crossVectors(i,Dt),ci.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),ci.crossVectors(i,Dt)),ci.normalize(),zn.crossVectors(Dt,ci),n[0]=ci.x,n[4]=zn.x,n[8]=Dt.x,n[1]=ci.y,n[5]=zn.y,n[9]=Dt.y,n[2]=ci.z,n[6]=zn.z,n[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],x=i[3],v=i[7],S=i[11],C=i[15],T=n[0],A=n[4],I=n[8],M=n[12],E=n[1],F=n[5],z=n[9],X=n[13],P=n[2],N=n[6],G=n[10],j=n[14],q=n[3],K=n[7],Y=n[11],ne=n[15];return s[0]=o*T+a*E+l*P+c*q,s[4]=o*A+a*F+l*N+c*K,s[8]=o*I+a*z+l*G+c*Y,s[12]=o*M+a*X+l*j+c*ne,s[1]=h*T+u*E+d*P+p*q,s[5]=h*A+u*F+d*N+p*K,s[9]=h*I+u*z+d*G+p*Y,s[13]=h*M+u*X+d*j+p*ne,s[2]=g*T+_*E+m*P+f*q,s[6]=g*A+_*F+m*N+f*K,s[10]=g*I+_*z+m*G+f*Y,s[14]=g*M+_*X+m*j+f*ne,s[3]=x*T+v*E+S*P+C*q,s[7]=x*A+v*F+S*N+C*K,s[11]=x*I+v*z+S*G+C*Y,s[15]=x*M+v*X+S*j+C*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*p-i*l*p)+_*(+t*l*p-t*c*d+s*o*d-n*o*p+n*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+i*o*p+s*a*h-i*c*h)+f*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,v=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,S=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=t*x+i*v+n*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(_*d*s-u*m*s-_*n*p+i*m*p+u*n*f-i*d*f)*A,e[2]=(a*m*s-_*l*s+_*n*c-i*m*c-a*n*f+i*l*f)*A,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*p-i*l*p)*A,e[4]=v*A,e[5]=(h*m*s-g*d*s+g*n*p-t*m*p-h*n*f+t*d*f)*A,e[6]=(g*l*s-o*m*s-g*n*c+t*m*c+o*n*f-t*l*f)*A,e[7]=(o*d*s-h*l*s+h*n*c-t*d*c-o*n*p+t*l*p)*A,e[8]=S*A,e[9]=(g*u*s-h*_*s-g*i*p+t*_*p+h*i*f-t*u*f)*A,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*f+t*a*f)*A,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*p-t*a*p)*A,e[12]=C*A,e[13]=(h*_*n-g*u*n+g*i*d-t*_*d-h*i*m+t*u*m)*A,e[14]=(g*a*n-o*_*n-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,_=o*h,m=o*u,f=a*u,x=l*c,v=l*h,S=l*u,C=i.x,T=i.y,A=i.z;return n[0]=(1-(_+f))*C,n[1]=(p+S)*C,n[2]=(g-v)*C,n[3]=0,n[4]=(p-S)*T,n[5]=(1-(d+f))*T,n[6]=(m+x)*T,n[7]=0,n[8]=(g+v)*A,n[9]=(m-x)*A,n[10]=(1-(d+_))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=zi.set(n[0],n[1],n[2]).length();const o=zi.set(n[4],n[5],n[6]).length(),a=zi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Gt.copy(this);const c=1/s,h=1/o,u=1/a;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=u,Gt.elements[9]*=u,Gt.elements[10]*=u,t.setFromRotationMatrix(Gt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=ni){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let p,g;if(a===ni)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ds)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=ni){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(o-s),d=(t+e)*c,p=(i+n)*h;let g,_;if(a===ni)g=(o+s)*u,_=-2*u;else if(a===ds)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zi=new R,Gt=new rt,wc=new R(0,0,0),Ec=new R(1,1,1),ci=new R,zn=new R,Dt=new R,Mo=new rt,So=new Rn;class pn{constructor(e=0,t=0,i=0,n=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class vr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bc=0;const wo=new R,Hi=new Rn,Qt=new rt,Hn=new R,vn=new R,Tc=new R,Ac=new Rn,Eo=new R(1,0,0),bo=new R(0,1,0),To=new R(0,0,1),Cc={type:"added"},Rc={type:"removed"};class gt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new R,t=new pn,i=new Rn,n=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ve}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(bo,e)}rotateZ(e){return this.rotateOnAxis(To,e)}translateOnAxis(e,t){return wo.copy(e).applyQuaternion(this.quaternion),this.position.add(wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(bo,e)}translateZ(e){return this.translateOnAxis(To,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hn.copy(e):Hn.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(vn,Hn,this.up):Qt.lookAt(Hn,vn,this.up),this.quaternion.setFromRotationMatrix(Qt),n&&(Qt.extractRotation(n.matrixWorld),Hi.setFromRotationMatrix(Qt),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,e,Tc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,Ac,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}gt.DEFAULT_UP=new R(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new R,ei=new R,Hs=new R,ti=new R,Gi=new R,Vi=new R,Ao=new R,Gs=new R,Vs=new R,Ws=new R;let Gn=!1;class Wt{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Vt.subVectors(e,t),n.cross(Vt);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Vt.subVectors(n,t),ei.subVectors(i,t),Hs.subVectors(e,t);const o=Vt.dot(Vt),a=Vt.dot(ei),l=Vt.dot(Hs),c=ei.dot(ei),h=ei.dot(Hs),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,i,n,s,o,a,l){return Gn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gn=!0),this.getInterpolation(e,t,i,n,s,o,a,l)}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static isFrontFacing(e,t,i,n){return Vt.subVectors(i,t),ei.subVectors(e,t),Vt.cross(ei).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Vt.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Gn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gn=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;Gi.subVectors(n,i),Vi.subVectors(s,i),Gs.subVectors(e,i);const l=Gi.dot(Gs),c=Vi.dot(Gs);if(l<=0&&c<=0)return t.copy(i);Vs.subVectors(e,n);const h=Gi.dot(Vs),u=Vi.dot(Vs);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Gi,o);Ws.subVectors(e,s);const p=Gi.dot(Ws),g=Vi.dot(Ws);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Vi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ao.subVectors(s,n),a=(u-h)/(u-h+(p-g)),t.copy(n).addScaledVector(Ao,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(Gi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Da={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function Xs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ye.workingColorSpace){if(e=yr(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xs(o,s,e+1/3),this.g=Xs(o,s,e),this.b=Xs(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,n),this}setStyle(e,t=yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const i=Da[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Ye.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Ct(Mt.r*255,0,255))*65536+Math.round(Ct(Mt.g*255,0,255))*256+Math.round(Ct(Mt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Mt.copy(this),t);const i=Mt.r,n=Mt.g,s=Mt.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=yt){Ye.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,n=Mt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Vn);const i=wn(hi.h,Vn.h,t),n=wn(hi.s,Vn.s,t),s=wn(hi.l,Vn.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new be;be.NAMES=Da;let Pc=0;class ri extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=rn,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rr,this.blendDst=or,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rn&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rr&&(i.blendSrc=this.blendSrc),this.blendDst!==or&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _i extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new R,Wn=new Se;class wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix3(e),this.setXY(t,Wn.x,Wn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),e}}class Ia extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ua extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ke extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lc=0;const Ft=new rt,qs=new gt,Wi=new R,It=new yi,xn=new yi,pt=new R;class ut extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ca(e)?Ua:Ia)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,i){return Ft.makeTranslation(e,t,i),this.applyMatrix4(Ft),this}scale(e,t,i){return Ft.makeScale(e,t,i),this.applyMatrix4(Ft),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];It.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xn.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(It.min,xn.min),It.expandByPoint(pt),pt.addVectors(It.max,xn.max),It.expandByPoint(pt)):(It.expandByPoint(xn.min),It.expandByPoint(xn.max))}It.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pt.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),pt.add(Wi)),n=Math.max(n,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new R,h[E]=new R;const u=new R,d=new R,p=new R,g=new Se,_=new Se,m=new Se,f=new R,x=new R;function v(E,F,z){u.fromArray(n,E*3),d.fromArray(n,F*3),p.fromArray(n,z*3),g.fromArray(o,E*2),_.fromArray(o,F*2),m.fromArray(o,z*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const X=1/(_.x*m.y-m.x*_.y);isFinite(X)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(X),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(X),c[E].add(f),c[F].add(f),c[z].add(f),h[E].add(x),h[F].add(x),h[z].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,F=S.length;E<F;++E){const z=S[E],X=z.start,P=z.count;for(let N=X,G=X+P;N<G;N+=3)v(i[N+0],i[N+1],i[N+2])}const C=new R,T=new R,A=new R,I=new R;function M(E){A.fromArray(s,E*3),I.copy(A);const F=c[E];C.copy(F),C.sub(A.multiplyScalar(A.dot(F))).normalize(),T.crossVectors(I,F);const X=T.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=X}for(let E=0,F=S.length;E<F;++E){const z=S[E],X=z.start,P=z.count;for(let N=X,G=X+P;N<G;N+=3)M(i[N+0]),M(i[N+1]),M(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Co=new rt,wi=new xs,Xn=new Pn,Ro=new R,Xi=new R,qi=new R,ji=new R,js=new R,qn=new R,jn=new Se,Yn=new Se,Kn=new Se,Po=new R,Lo=new R,Do=new R,$n=new R,Zn=new R;class k extends gt{constructor(e=new ut,t=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){qn.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(js.fromBufferAttribute(u,e),o?qn.addScaledVector(js,h):qn.addScaledVector(js.sub(t),h))}t.add(qn)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xn.copy(i.boundingSphere),Xn.applyMatrix4(s),wi.copy(e.ray).recast(e.near),!(Xn.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Xn,Ro)===null||wi.origin.distanceToSquared(Ro)>(e.far-e.near)**2))&&(Co.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Co),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const T=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);n=Jn(this,f,e,i,c,h,u,T,A,I),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);n=Jn(this,o,e,i,c,h,u,x,v,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const T=S,A=S+1,I=S+2;n=Jn(this,f,e,i,c,h,u,T,A,I),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,S=m+2;n=Jn(this,o,e,i,c,h,u,x,v,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Dc(r,e,t,i,n,s,o,a){let l;if(e.side===Rt?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===gi,a),l===null)return null;Zn.copy(a),Zn.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Zn);return c<t.near||c>t.far?null:{distance:c,point:Zn.clone(),object:r}}function Jn(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,Xi),r.getVertexPosition(l,qi),r.getVertexPosition(c,ji);const h=Dc(r,e,t,i,Xi,qi,ji,$n);if(h){n&&(jn.fromBufferAttribute(n,a),Yn.fromBufferAttribute(n,l),Kn.fromBufferAttribute(n,c),h.uv=Wt.getInterpolation($n,Xi,qi,ji,jn,Yn,Kn,new Se)),s&&(jn.fromBufferAttribute(s,a),Yn.fromBufferAttribute(s,l),Kn.fromBufferAttribute(s,c),h.uv1=Wt.getInterpolation($n,Xi,qi,ji,jn,Yn,Kn,new Se),h.uv2=h.uv1),o&&(Po.fromBufferAttribute(o,a),Lo.fromBufferAttribute(o,l),Do.fromBufferAttribute(o,c),h.normal=Wt.getInterpolation($n,Xi,qi,ji,Po,Lo,Do,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};Wt.getNormal(Xi,qi,ji,u.normal),h.face=u}return h}class ie extends ut{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(_,m,f,x,v,S,C,T,A,I,M){const E=S/A,F=C/I,z=S/2,X=C/2,P=T/2,N=A+1,G=I+1;let j=0,q=0;const K=new R;for(let Y=0;Y<G;Y++){const ne=Y*F-X;for(let se=0;se<N;se++){const W=se*E-z;K[_]=W*x,K[m]=ne*v,K[f]=P,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(se/A),u.push(1-Y/I),j+=1}}for(let Y=0;Y<I;Y++)for(let ne=0;ne<A;ne++){const se=d+ne+N*Y,W=d+ne+N*(Y+1),Z=d+(ne+1)+N*(Y+1),ae=d+(ne+1)+N*Y;l.push(se,W,ae),l.push(W,Z,ae),q+=6}a.addGroup(p,q,M),p+=q,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ie(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function At(r){const e={};for(let t=0;t<r.length;t++){const i=dn(r[t]);for(const n in i)e[n]=i[n]}return e}function Ic(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Na(r){return r.getRenderTarget()===null?r.outputColorSpace:Ye.workingColorSpace}const Uc={clone:dn,merge:At};var Nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nc,this.fragmentShader=Bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dn(e.uniforms),this.uniformsGroups=Ic(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ba extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Ba{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cn*2*Math.atan(Math.tan(Sn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,Ki=1;class Fc extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Nt(Yi,Ki,e,t);n.layers=this.layers,this.add(n);const s=new Nt(Yi,Ki,e,t);s.layers=this.layers,this.add(s);const o=new Nt(Yi,Ki,e,t);o.layers=this.layers,this.add(o);const a=new Nt(Yi,Ki,e,t);a.layers=this.layers,this.add(a);const l=new Nt(Yi,Ki,e,t);l.layers=this.layers,this.add(l);const c=new Nt(Yi,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fa extends Pt{constructor(e,t,i,n,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:cn,super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oc extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(En("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Li?yt:zt),this.texture=new Fa(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ie(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:dn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:fi});s.uniforms.tEquirect.value=t;const o=new k(n,s),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=Ot),new Fc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const Ys=new R,kc=new R,zc=new Ve;class bi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Ys.subVectors(i,t).cross(kc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ys),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zc.getNormalMatrix(e),n=this.coplanarPoint(Ys).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Pn,Qn=new R;class xr{constructor(e=new bi,t=new bi,i=new bi,n=new bi,s=new bi,o=new bi){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],x=n[13],v=n[14],S=n[15];if(i[0].setComponents(l-s,d-c,m-p,S-f).normalize(),i[1].setComponents(l+s,d+c,m+p,S+f).normalize(),i[2].setComponents(l+o,d+h,m+g,S+x).normalize(),i[3].setComponents(l-o,d-h,m-g,S-x).normalize(),i[4].setComponents(l-a,d-u,m-_,S-v).normalize(),t===ni)i[5].setComponents(l+a,d+u,m+_,S+v).normalize();else if(t===ds)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Qn.x=n.normal.x>0?e.max.x:e.min.x,Qn.y=n.normal.y>0?e.max.y:e.min.y,Qn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Qn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oa(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Hc(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),p.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Ut extends ut{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let v=0;v<c;v++){const S=v*u-s;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,S=x+c*(f+1),C=x+1+c*(f+1),T=x+1+c*f;p.push(v,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vc=`#ifdef USE_ALPHAHASH
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
#endif`,Wc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yc=`#ifdef USE_AOMAP
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
#endif`,Kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$c=`#ifdef USE_BATCHING
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
#endif`,Zc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,th=`#ifdef USE_IRIDESCENCE
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
#endif`,ih=`#ifdef USE_BUMPMAP
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
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uh=`#define PI 3.141592653589793
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
} // validated`,dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fh=`vec3 transformedNormal = objectNormal;
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
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",vh=`
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
}`,xh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rh=`#ifdef USE_GRADIENTMAP
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
}`,Ph=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uh=`uniform bool receiveShadow;
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
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zh=`PhysicalMaterial material;
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
#endif`,Hh=`struct PhysicalMaterial {
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
}`,Gh=`
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
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$h=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jh=`#if defined( USE_POINTS_UV )
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
#endif`,Qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iu=`#ifdef USE_MORPHNORMALS
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
#endif`,nu=`#ifdef USE_MORPHTARGETS
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
#endif`,su=`#ifdef USE_MORPHTARGETS
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
#endif`,ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ou=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hu=`#ifdef USE_NORMALMAP
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
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Su=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tu=`float getShadowMask() {
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
}`,Au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cu=`#ifdef USE_SKINNING
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
#endif`,Ru=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pu=`#ifdef USE_SKINNING
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
#endif`,Lu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nu=`#ifdef USE_TRANSMISSION
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
#endif`,Bu=`#ifdef USE_TRANSMISSION
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
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gu=`uniform sampler2D t2D;
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
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ju=`#include <common>
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
}`,Yu=`#if DEPTH_PACKING == 3200
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
}`,Ku=`#define DISTANCE
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
}`,$u=`#define DISTANCE
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
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`uniform float scale;
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
}`,ed=`uniform vec3 diffuse;
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
}`,td=`#include <common>
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
}`,id=`uniform vec3 diffuse;
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
}`,nd=`#define LAMBERT
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
}`,sd=`#define LAMBERT
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
}`,rd=`#define MATCAP
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
}`,od=`#define MATCAP
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
}`,ad=`#define NORMAL
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
}`,ld=`#define NORMAL
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
}`,cd=`#define PHONG
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
}`,hd=`#define PHONG
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
}`,ud=`#define STANDARD
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
}`,dd=`#define STANDARD
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
}`,fd=`#define TOON
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
}`,pd=`#define TOON
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
}`,md=`uniform float size;
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
}`,gd=`uniform vec3 diffuse;
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
}`,_d=`#include <common>
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
}`,yd=`uniform vec3 color;
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
}`,vd=`uniform float rotation;
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
}`,xd=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Gc,alphahash_pars_fragment:Vc,alphamap_fragment:Wc,alphamap_pars_fragment:Xc,alphatest_fragment:qc,alphatest_pars_fragment:jc,aomap_fragment:Yc,aomap_pars_fragment:Kc,batching_pars_vertex:$c,batching_vertex:Zc,begin_vertex:Jc,beginnormal_vertex:Qc,bsdfs:eh,iridescence_fragment:th,bumpmap_pars_fragment:ih,clipping_planes_fragment:nh,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:rh,clipping_planes_vertex:oh,color_fragment:ah,color_pars_fragment:lh,color_pars_vertex:ch,color_vertex:hh,common:uh,cube_uv_reflection_fragment:dh,defaultnormal_vertex:fh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:gh,emissivemap_pars_fragment:_h,colorspace_fragment:yh,colorspace_pars_fragment:vh,envmap_fragment:xh,envmap_common_pars_fragment:Mh,envmap_pars_fragment:Sh,envmap_pars_vertex:wh,envmap_physical_pars_fragment:Nh,envmap_vertex:Eh,fog_vertex:bh,fog_pars_vertex:Th,fog_fragment:Ah,fog_pars_fragment:Ch,gradientmap_pars_fragment:Rh,lightmap_fragment:Ph,lightmap_pars_fragment:Lh,lights_lambert_fragment:Dh,lights_lambert_pars_fragment:Ih,lights_pars_begin:Uh,lights_toon_fragment:Bh,lights_toon_pars_fragment:Fh,lights_phong_fragment:Oh,lights_phong_pars_fragment:kh,lights_physical_fragment:zh,lights_physical_pars_fragment:Hh,lights_fragment_begin:Gh,lights_fragment_maps:Vh,lights_fragment_end:Wh,logdepthbuf_fragment:Xh,logdepthbuf_pars_fragment:qh,logdepthbuf_pars_vertex:jh,logdepthbuf_vertex:Yh,map_fragment:Kh,map_pars_fragment:$h,map_particle_fragment:Zh,map_particle_pars_fragment:Jh,metalnessmap_fragment:Qh,metalnessmap_pars_fragment:eu,morphcolor_vertex:tu,morphnormal_vertex:iu,morphtarget_pars_vertex:nu,morphtarget_vertex:su,normal_fragment_begin:ru,normal_fragment_maps:ou,normal_pars_fragment:au,normal_pars_vertex:lu,normal_vertex:cu,normalmap_pars_fragment:hu,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:du,clearcoat_pars_fragment:fu,iridescence_pars_fragment:pu,opaque_fragment:mu,packing:gu,premultiplied_alpha_fragment:_u,project_vertex:yu,dithering_fragment:vu,dithering_pars_fragment:xu,roughnessmap_fragment:Mu,roughnessmap_pars_fragment:Su,shadowmap_pars_fragment:wu,shadowmap_pars_vertex:Eu,shadowmap_vertex:bu,shadowmask_pars_fragment:Tu,skinbase_vertex:Au,skinning_pars_vertex:Cu,skinning_vertex:Ru,skinnormal_vertex:Pu,specularmap_fragment:Lu,specularmap_pars_fragment:Du,tonemapping_fragment:Iu,tonemapping_pars_fragment:Uu,transmission_fragment:Nu,transmission_pars_fragment:Bu,uv_pars_fragment:Fu,uv_pars_vertex:Ou,uv_vertex:ku,worldpos_vertex:zu,background_vert:Hu,background_frag:Gu,backgroundCube_vert:Vu,backgroundCube_frag:Wu,cube_vert:Xu,cube_frag:qu,depth_vert:ju,depth_frag:Yu,distanceRGBA_vert:Ku,distanceRGBA_frag:$u,equirect_vert:Zu,equirect_frag:Ju,linedashed_vert:Qu,linedashed_frag:ed,meshbasic_vert:td,meshbasic_frag:id,meshlambert_vert:nd,meshlambert_frag:sd,meshmatcap_vert:rd,meshmatcap_frag:od,meshnormal_vert:ad,meshnormal_frag:ld,meshphong_vert:cd,meshphong_frag:hd,meshphysical_vert:ud,meshphysical_frag:dd,meshtoon_vert:fd,meshtoon_frag:pd,points_vert:md,points_frag:gd,shadow_vert:_d,shadow_frag:yd,sprite_vert:vd,sprite_frag:xd},oe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Yt={basic:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:At([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:At([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:At([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:At([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:At([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:At([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:At([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:At([oe.lights,oe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Yt.physical={uniforms:At([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const es={r:0,b:0,g:0};function Md(r,e,t,i,n,s,o){const a=new be(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_s)?(h===void 0&&(h=new k(new ie(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:dn(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==et,(u!==v||d!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new k(new Ut(2,2),new Ii({name:"BackgroundMaterial",uniforms:dn(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(es,Na(r)),i.buffers.color.setClear(es.r,es.g,es.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Sd(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(P,N,G,j,q){let K=!1;if(o){const Y=_(j,G,N);c!==Y&&(c=Y,p(c.object)),K=f(P,j,G,q),K&&x(P,j,G,q)}else{const Y=N.wireframe===!0;(c.geometry!==j.id||c.program!==G.id||c.wireframe!==Y)&&(c.geometry=j.id,c.program=G.id,c.wireframe=Y,K=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,I(P,N,G,j),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,N,G){const j=G.wireframe===!0;let q=a[P.id];q===void 0&&(q={},a[P.id]=q);let K=q[N.id];K===void 0&&(K={},q[N.id]=K);let Y=K[j];return Y===void 0&&(Y=m(d()),K[j]=Y),Y}function m(P){const N=[],G=[],j=[];for(let q=0;q<n;q++)N[q]=0,G[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:j,object:P,attributes:{},index:null}}function f(P,N,G,j){const q=c.attributes,K=N.attributes;let Y=0;const ne=G.getAttributes();for(const se in ne)if(ne[se].location>=0){const Z=q[se];let ae=K[se];if(ae===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;Y++}return c.attributesNum!==Y||c.index!==j}function x(P,N,G,j){const q={},K=N.attributes;let Y=0;const ne=G.getAttributes();for(const se in ne)if(ne[se].location>=0){let Z=K[se];Z===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),q[se]=ae,Y++}c.attributes=q,c.attributesNum=Y,c.index=j}function v(){const P=c.newAttributes;for(let N=0,G=P.length;N<G;N++)P[N]=0}function S(P){C(P,0)}function C(P,N){const G=c.newAttributes,j=c.enabledAttributes,q=c.attributeDivisors;G[P]=1,j[P]===0&&(r.enableVertexAttribArray(P),j[P]=1),q[P]!==N&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),q[P]=N)}function T(){const P=c.newAttributes,N=c.enabledAttributes;for(let G=0,j=N.length;G<j;G++)N[G]!==P[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function A(P,N,G,j,q,K,Y){Y===!0?r.vertexAttribIPointer(P,N,G,q,K):r.vertexAttribPointer(P,N,G,j,q,K)}function I(P,N,G,j){if(i.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=j.attributes,K=G.getAttributes(),Y=N.defaultAttributeValues;for(const ne in K){const se=K[ne];if(se.location>=0){let W=q[ne];if(W===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const Z=W.normalized,ae=W.itemSize,de=t.get(W);if(de===void 0)continue;const fe=de.buffer,Te=de.type,ge=de.bytesPerElement,we=i.isWebGL2===!0&&(Te===r.INT||Te===r.UNSIGNED_INT||W.gpuType===va);if(W.isInterleavedBufferAttribute){const ze=W.data,B=ze.stride,lt=W.offset;if(ze.isInstancedInterleavedBuffer){for(let ye=0;ye<se.locationSize;ye++)C(se.location+ye,ze.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let ye=0;ye<se.locationSize;ye++)S(se.location+ye);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ye=0;ye<se.locationSize;ye++)A(se.location+ye,ae/se.locationSize,Te,Z,B*ge,(lt+ae/se.locationSize*ye)*ge,we)}else{if(W.isInstancedBufferAttribute){for(let ze=0;ze<se.locationSize;ze++)C(se.location+ze,W.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ze=0;ze<se.locationSize;ze++)S(se.location+ze);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ze=0;ze<se.locationSize;ze++)A(se.location+ze,ae/se.locationSize,Te,Z,ae*ge,ae/se.locationSize*ze*ge,we)}}else if(Y!==void 0){const Z=Y[ne];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(se.location,Z);break;case 3:r.vertexAttrib3fv(se.location,Z);break;case 4:r.vertexAttrib4fv(se.location,Z);break;default:r.vertexAttrib1fv(se.location,Z)}}}}T()}function M(){z();for(const P in a){const N=a[P];for(const G in N){const j=N[G];for(const q in j)g(j[q].object),delete j[q];delete N[G]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;const N=a[P.id];for(const G in N){const j=N[G];for(const q in j)g(j[q].object),delete j[q];delete N[G]}delete a[P.id]}function F(P){for(const N in a){const G=a[N];if(G[P.id]===void 0)continue;const j=G[P.id];for(const q in j)g(j[q].object),delete j[q];delete G[P.id]}}function z(){X(),h=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:X,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function wd(r,e,t,i){const n=i.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,d){if(d===0)return;let p,g;if(n)p=r,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,h,u,d),t.update(u,s,d)}function c(h,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ed(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||e.has("OES_texture_float"),C=v&&S,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:T}}function bd(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new bi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:i,v=x*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,p);for(let C=0;C!==v;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Td(r){let e=new WeakMap;function t(o,a){return a===ar?o.mapping=cn:a===lr&&(o.mapping=hn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ar||a===lr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Oc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ka extends Ba{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nn=4,Io=[.125,.215,.35,.446,.526,.582],Ci=20,Ks=new ka,Uo=new be;let $s=null,Zs=0,Js=0;const Ti=(1+Math.sqrt(5))/2,$i=1/Ti,No=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Ti,$i),new R(0,Ti,-$i),new R($i,0,Ti),new R(-$i,0,Ti),new R(Ti,$i,0),new R(-Ti,$i,0)];class Bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s,Zs,Js),e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cn||e.mapping===hn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:An,format:qt,colorSpace:si,depthBuffer:!1},n=Fo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ad(s)),this._blurMaterial=Cd(s,e,t)}return n}_compileMaterial(e){const t=new k(this._lodPlanes[0],e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,i,n){const a=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uo),h.toneMapping=pi,h.autoClear=!1;const p=new _i({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new k(new ie,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Uo),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;ts(n,x*v,f>2?v:0,v,v),h.setRenderTarget(n),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===cn||e.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oo());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ks)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=No[(n-1)%No.length];this._blur(e,n-1,n,s,o)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new k(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ci-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const f=[];let x=0;for(let A=0;A<Ci;++A){const I=A/_,M=Math.exp(-I*I/2);f.push(M),A===0?x+=M:A<m&&(x+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[n],C=3*S*(n>v-nn?n-v+nn:0),T=4*(this._cubeSize-S);ts(t,C,T,3*S,2*S),l.setRenderTarget(t),l.render(u,Ks)}}function Ad(r){const e=[],t=[],i=[];let n=r;const s=r-nn+1+Io.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>r-nn?l=Io[o-r+nn-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,I=T>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(M,_*g*T),v.set(d,m*g*T);const E=[T,T,T,T,T,T];S.set(E,f*g*T)}const C=new ut;C.setAttribute("position",new wt(x,_)),C.setAttribute("uv",new wt(v,m)),C.setAttribute("faceIndex",new wt(S,f)),e.push(C),n>nn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fo(r,e,t){const i=new Di(r,e,t);return i.texture.mapping=_s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Cd(r,e,t){const i=new Float32Array(Ci),n=new R(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Mr(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Oo(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mr(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ko(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Mr(){return`

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
	`}function Rd(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ar||l===lr,h=l===cn||l===hn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Bo(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Bo(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Pd(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ld(r,e,t,i){const n={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete n[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],T=x[v+1],A=x[v+2];d.push(C,T,T,A,A,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,T=v+1,A=v+2;d.push(C,T,T,A,A,C)}}else return;const m=new(Ca(d)?Ua:Ia)(d,1);m.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dd(r,e,t,i){const n=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){r.drawElements(s,g,a,p*l),t.update(g,s,1)}function u(p,g,_){if(_===0)return;let m,f;if(n)m=r,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*l,_),t.update(g,s,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Id(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Ud(r,e){return r[0]-e[0]}function Nd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Bd(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,o=new tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==_){let N=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),C===!0&&(M=3);let E=h.attributes.position.count*M,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const z=new Float32Array(E*F*4*_),X=new La(z,E,F,_);X.type=di,X.needsUpdate=!0;const P=M*4;for(let G=0;G<_;G++){const j=T[G],q=A[G],K=I[G],Y=E*F*4*G;for(let ne=0;ne<j.count;ne++){const se=ne*P;v===!0&&(o.fromBufferAttribute(j,ne),z[Y+se+0]=o.x,z[Y+se+1]=o.y,z[Y+se+2]=o.z,z[Y+se+3]=0),S===!0&&(o.fromBufferAttribute(q,ne),z[Y+se+4]=o.x,z[Y+se+5]=o.y,z[Y+se+6]=o.z,z[Y+se+7]=0),C===!0&&(o.fromBufferAttribute(K,ne),z[Y+se+8]=o.x,z[Y+se+9]=o.y,z[Y+se+10]=o.z,z[Y+se+11]=K.itemSize===4?o.w:1)}}m={count:_,texture:X,size:new Se(E,F)},s.set(h,m),h.addEventListener("dispose",N)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];i[h.id]=_}for(let S=0;S<g;S++){const C=_[S];C[0]=S,C[1]=d[S]}_.sort(Nd);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Ud);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const C=a[S],T=C[0],A=C[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+S)!==m[T]&&h.setAttribute("morphTarget"+S,m[T]),f&&h.getAttribute("morphNormal"+S)!==f[T]&&h.setAttribute("morphNormal"+S,f[T]),n[S]=A,x+=A):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),n[S]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function Fd(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class za extends Pt{constructor(e,t,i,n,s,o,a,l,c,h){if(h=h!==void 0?h:Pi,h!==Pi&&h!==un)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Pi&&(i=ui),i===void 0&&h===un&&(i=Ri),super(null,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ha=new Pt,Ga=new za(1,1);Ga.compareFunction=Aa;const Va=new La,Wa=new Mc,Xa=new Fa,zo=[],Ho=[],Go=new Float32Array(16),Vo=new Float32Array(9),Wo=new Float32Array(4);function mn(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=zo[n];if(s===void 0&&(s=new Float32Array(n),zo[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ms(r,e){let t=Ho[e];t===void 0&&(t=new Int32Array(e),Ho[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Od(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function zd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function Hd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function Gd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Wo.set(i),r.uniformMatrix2fv(this.addr,!1,Wo),ht(t,i)}}function Vd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Vo.set(i),r.uniformMatrix3fv(this.addr,!1,Vo),ht(t,i)}}function Wd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Go.set(i),r.uniformMatrix4fv(this.addr,!1,Go),ht(t,i)}}function Xd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function jd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function Yd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function Kd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $d(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function Zd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function Jd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function Qd(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const s=this.type===r.SAMPLER_2D_SHADOW?Ga:Ha;t.setTexture2D(e||s,n)}function ef(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Wa,n)}function tf(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Xa,n)}function nf(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Va,n)}function sf(r){switch(r){case 5126:return Od;case 35664:return kd;case 35665:return zd;case 35666:return Hd;case 35674:return Gd;case 35675:return Vd;case 35676:return Wd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return jd;case 35669:case 35673:return Yd;case 5125:return Kd;case 36294:return $d;case 36295:return Zd;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Qd;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return nf}}function rf(r,e){r.uniform1fv(this.addr,e)}function of(r,e){const t=mn(e,this.size,2);r.uniform2fv(this.addr,t)}function af(r,e){const t=mn(e,this.size,3);r.uniform3fv(this.addr,t)}function lf(r,e){const t=mn(e,this.size,4);r.uniform4fv(this.addr,t)}function cf(r,e){const t=mn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hf(r,e){const t=mn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function uf(r,e){const t=mn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function df(r,e){r.uniform1iv(this.addr,e)}function ff(r,e){r.uniform2iv(this.addr,e)}function pf(r,e){r.uniform3iv(this.addr,e)}function mf(r,e){r.uniform4iv(this.addr,e)}function gf(r,e){r.uniform1uiv(this.addr,e)}function _f(r,e){r.uniform2uiv(this.addr,e)}function yf(r,e){r.uniform3uiv(this.addr,e)}function vf(r,e){r.uniform4uiv(this.addr,e)}function xf(r,e,t){const i=this.cache,n=e.length,s=Ms(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Ha,s[o])}function Mf(r,e,t){const i=this.cache,n=e.length,s=Ms(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Wa,s[o])}function Sf(r,e,t){const i=this.cache,n=e.length,s=Ms(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Xa,s[o])}function wf(r,e,t){const i=this.cache,n=e.length,s=Ms(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Va,s[o])}function Ef(r){switch(r){case 5126:return rf;case 35664:return of;case 35665:return af;case 35666:return lf;case 35674:return cf;case 35675:return hf;case 35676:return uf;case 5124:case 35670:return df;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return _f;case 36295:return yf;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return wf}}class bf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sf(t.type)}}class Tf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ef(t.type)}}class Af{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function Xo(r,e){r.seq.push(e),r.map[e.id]=e}function Cf(r,e,t){const i=r.name,n=i.length;for(Qs.lastIndex=0;;){const s=Qs.exec(i),o=Qs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Xo(t,c===void 0?new bf(a,r,e):new Tf(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Af(a),Xo(t,u)),t=u}}}class os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Cf(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function qo(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Rf=37297;let Pf=0;function Lf(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Df(r){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(r);let i;switch(e===t?i="":e===us&&t===hs?i="LinearDisplayP3ToLinearSRGB":e===hs&&t===us&&(i="LinearSRGBToLinearDisplayP3"),r){case si:case vs:return[i,"LinearTransferOETF"];case yt:case _r:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function jo(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+Lf(r.getShaderSource(e),o)}else return n}function If(r,e){const t=Df(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Uf(r,e){let t;switch(e){case Pl:t="Linear";break;case Ll:t="Reinhard";break;case Dl:t="OptimizedCineon";break;case Il:t="ACESFilmic";break;case Nl:t="AgX";break;case Ul:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sn).join(`
`)}function Bf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sn).join(`
`)}function Ff(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Of(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function sn(r){return r!==""}function Yo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ko(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function dr(r){return r.replace(kf,Hf)}const zf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hf(r,e){let t=Fe[e];if(t===void 0){const i=zf.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dr(t)}const Gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(r){return r.replace(Gf,Vf)}function Vf(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Zo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_a?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Xf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case cn:case hn:e="ENVMAP_TYPE_CUBE";break;case _s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case hn:e="ENVMAP_MODE_REFRACTION";break}return e}function jf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gs:e="ENVMAP_BLENDING_MULTIPLY";break;case Cl:e="ENVMAP_BLENDING_MIX";break;case Rl:e="ENVMAP_BLENDING_ADD";break}return e}function Yf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kf(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Wf(t),c=Xf(t),h=qf(t),u=jf(t),d=Yf(t),p=t.isWebGL2?"":Nf(t),g=Bf(t),_=Ff(s),m=n.createProgram();let f,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sn).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sn).join(`
`),x.length>0&&(x+=`
`)):(f=[Zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),x=[p,Zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==pi?Uf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,If("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sn).join(`
`)),o=dr(o),o=Yo(o,t),o=Ko(o,t),a=dr(a),a=Yo(a,t),a=Ko(a,t),o=$o(o),a=$o(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+f+o,C=v+x+a,T=qo(n,n.VERTEX_SHADER,S),A=qo(n,n.FRAGMENT_SHADER,C);n.attachShader(m,T),n.attachShader(m,A),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function I(z){if(r.debug.checkShaderErrors){const X=n.getProgramInfoLog(m).trim(),P=n.getShaderInfoLog(T).trim(),N=n.getShaderInfoLog(A).trim();let G=!0,j=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,T,A);else{const q=jo(n,T,"vertex"),K=jo(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+q+`
`+K)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(P===""||N==="")&&(j=!1);j&&(z.diagnostics={runnable:G,programLog:X,vertexShader:{log:P,prefix:f},fragmentShader:{log:N,prefix:x}})}n.deleteShader(T),n.deleteShader(A),M=new os(n,m),E=Of(n,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(m,Rf)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pf++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let $f=0;class Zf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jf(e),t.set(e,i)),i}}class Jf{constructor(e){this.id=$f++,this.code=e,this.usedTimes=0}}function Qf(r,e,t,i,n,s,o){const a=new vr,l=new Zf,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,E,F,z,X){const P=z.fog,N=X.geometry,G=M.isMeshStandardMaterial?z.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),q=j&&j.mapping===_s?j.image.height:null,K=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ne=Y!==void 0?Y.length:0;let se=0;N.morphAttributes.position!==void 0&&(se=1),N.morphAttributes.normal!==void 0&&(se=2),N.morphAttributes.color!==void 0&&(se=3);let W,Z,ae,de;if(K){const Et=Yt[K];W=Et.vertexShader,Z=Et.fragmentShader}else W=M.vertexShader,Z=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const fe=r.getRenderTarget(),Te=X.isInstancedMesh===!0,ge=X.isBatchedMesh===!0,we=!!M.map,ze=!!M.matcap,B=!!j,lt=!!M.aoMap,ye=!!M.lightMap,Le=!!M.bumpMap,_e=!!M.normalMap,$e=!!M.displacementMap,Ne=!!M.emissiveMap,b=!!M.metalnessMap,y=!!M.roughnessMap,D=M.anisotropy>0,J=M.clearcoat>0,$=M.iridescence>0,ee=M.sheen>0,ve=M.transmission>0,he=D&&!!M.anisotropyMap,pe=J&&!!M.clearcoatMap,Ce=J&&!!M.clearcoatNormalMap,Oe=J&&!!M.clearcoatRoughnessMap,te=$&&!!M.iridescenceMap,je=$&&!!M.iridescenceThicknessMap,We=ee&&!!M.sheenColorMap,De=ee&&!!M.sheenRoughnessMap,Me=!!M.specularMap,me=!!M.specularColorMap,Be=!!M.specularIntensityMap,qe=ve&&!!M.transmissionMap,nt=ve&&!!M.thicknessMap,He=!!M.gradientMap,re=!!M.alphaMap,L=M.alphaTest>0,le=!!M.alphaHash,ce=!!M.extensions,Re=!!N.attributes.uv1,Ee=!!N.attributes.uv2,Ze=!!N.attributes.uv3;let Je=pi;return M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Je=r.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:Z,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ge,instancing:Te,instancingColor:Te&&X.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:si,map:we,matcap:ze,envMap:B,envMapMode:B&&j.mapping,envMapCubeUVHeight:q,aoMap:lt,lightMap:ye,bumpMap:Le,normalMap:_e,displacementMap:d&&$e,emissiveMap:Ne,normalMapObjectSpace:_e&&M.normalMapType===Yl,normalMapTangentSpace:_e&&M.normalMapType===ys,metalnessMap:b,roughnessMap:y,anisotropy:D,anisotropyMap:he,clearcoat:J,clearcoatMap:pe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Oe,iridescence:$,iridescenceMap:te,iridescenceThicknessMap:je,sheen:ee,sheenColorMap:We,sheenRoughnessMap:De,specularMap:Me,specularColorMap:me,specularIntensityMap:Be,transmission:ve,transmissionMap:qe,thicknessMap:nt,gradientMap:He,opaque:M.transparent===!1&&M.blending===rn,alphaMap:re,alphaTest:L,alphaHash:le,combine:M.combine,mapUv:we&&_(M.map.channel),aoMapUv:lt&&_(M.aoMap.channel),lightMapUv:ye&&_(M.lightMap.channel),bumpMapUv:Le&&_(M.bumpMap.channel),normalMapUv:_e&&_(M.normalMap.channel),displacementMapUv:$e&&_(M.displacementMap.channel),emissiveMapUv:Ne&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(M.sheenRoughnessMap.channel),specularMapUv:Me&&_(M.specularMap.channel),specularColorMapUv:me&&_(M.specularColorMap.channel),specularIntensityMapUv:Be&&_(M.specularIntensityMap.channel),transmissionMapUv:qe&&_(M.transmissionMap.channel),thicknessMapUv:nt&&_(M.thicknessMap.channel),alphaMapUv:re&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_e||D),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Ee,vertexUv3s:Ze,pointsUvs:X.isPoints===!0&&!!N.attributes.uv&&(we||re),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Je,useLegacyLights:r._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===kt,flipSided:M.side===Rt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)E.push(F),E.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(x(E,M),v(E,M),E.push(r.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const E=g[M.type];let F;if(E){const z=Yt[E];F=Uc.clone(z.uniforms)}else F=M.uniforms;return F}function C(M,E){let F;for(let z=0,X=c.length;z<X;z++){const P=c[z];if(P.cacheKey===E){F=P,++F.usedTimes;break}}return F===void 0&&(F=new Kf(r,E,M,s),c.push(F)),F}function T(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:I}}function ep(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function tp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Jo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qo(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,p,g,_,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||tp),i.length>1&&i.sort(d||Jo),n.length>1&&n.sort(d||Jo)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function ip(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new Qo,r.set(i,[o])):n>=s.length?(o=new Qo,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function np(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new be};break;case"SpotLight":t={position:new R,direction:new R,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function sp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let rp=0;function op(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ap(r,e){const t=new np,i=sp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);const s=new R,o=new rt,a=new rt;function l(h,u){let d=0,p=0,g=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,S=0,C=0,T=0,A=0,I=0,M=0;h.sort(op);const E=u===!0?Math.PI:1;for(let z=0,X=h.length;z<X;z++){const P=h[z],N=P.color,G=P.intensity,j=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*G*E,p+=N.g*G*E,g+=N.b*G*E;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],G);M++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const Y=P.shadow,ne=i.get(P);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,n.directionalShadow[_]=ne,n.directionalShadowMap[_]=q,n.directionalShadowMatrix[_]=P.shadow.matrix,S++}n.directional[_]=K,_++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(N).multiplyScalar(G*E),K.distance=j,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[f]=K;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[f]=Y.matrix,P.castShadow){const ne=i.get(P);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,n.spotShadow[f]=ne,n.spotShadowMap[f]=q,T++}f++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(N).multiplyScalar(G),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=K,x++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*E),K.distance=P.distance,K.decay=P.decay,P.castShadow){const Y=P.shadow,ne=i.get(P);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,ne.shadowCameraNear=Y.camera.near,ne.shadowCameraFar=Y.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=P.shadow.matrix,C++}n.point[m]=K,m++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(G*E),K.groundColor.copy(P.groundColor).multiplyScalar(G*E),n.hemi[v]=K,v++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==x||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==C||F.numSpotShadows!==T||F.numSpotMaps!==A||F.numLightProbes!==M)&&(n.directional.length=_,n.spot.length=f,n.rectArea.length=x,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+A-I,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=M,F.directionalLength=_,F.pointLength=m,F.spotLength=f,F.rectAreaLength=x,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=C,F.numSpotShadows=T,F.numSpotMaps=A,F.numLightProbes=M,n.version=rp++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const S=h[x];if(S.isDirectionalLight){const C=n.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),d++}else if(S.isSpotLight){const C=n.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const C=n.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const C=n.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:n}}function ea(r,e){const t=new ap(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lp(r,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ea(r,e),t.set(s,[l])):o>=a.length?(l=new ea(r,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class cp extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hp extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const up=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dp=`uniform sampler2D shadow_pass;
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
}`;function fp(r,e,t){let i=new xr;const n=new Se,s=new Se,o=new tt,a=new cp({depthPacking:jl}),l=new hp,c={},h=t.maxTextureSize,u={[gi]:Rt,[Rt]:gi,[kt]:kt},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:up,fragmentShader:dp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ut;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new k(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let f=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=r.getRenderTarget(),E=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),z=r.state;z.setBlending(fi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=f!==ii&&this.type===ii,P=f===ii&&this.type!==ii;for(let N=0,G=T.length;N<G;N++){const j=T[N],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);const K=q.getFrameExtents();if(n.multiply(K),s.copy(q.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/K.x),n.x=s.x*K.x,q.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/K.y),n.y=s.y*K.y,q.mapSize.y=s.y)),q.map===null||X===!0||P===!0){const ne=this.type!==ii?{minFilter:St,magFilter:St}:{};q.map!==null&&q.map.dispose(),q.map=new Di(n.x,n.y,ne),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const Y=q.getViewportCount();for(let ne=0;ne<Y;ne++){const se=q.getViewport(ne);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),z.viewport(o),q.updateMatrices(j,ne),i=q.getFrustum(),S(A,I,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===ii&&x(q,I),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(M,E,F)};function x(T,A){const I=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Di(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,I,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,I,p,_,null)}function v(T,A,I,M){let E=null;const F=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)E=F;else if(E=I.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=E.uuid,X=A.uuid;let P=c[z];P===void 0&&(P={},c[z]=P);let N=P[X];N===void 0&&(N=E.clone(),P[X]=N,A.addEventListener("dispose",C)),E=N}if(E.visible=A.visible,E.wireframe=A.wireframe,M===ii?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=r.properties.get(E);z.light=I}return E}function S(T,A,I,M,E){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===ii)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const X=e.update(T),P=T.material;if(Array.isArray(P)){const N=X.groups;for(let G=0,j=N.length;G<j;G++){const q=N[G],K=P[q.materialIndex];if(K&&K.visible){const Y=v(T,K,M,E);T.onBeforeShadow(r,T,A,I,X,Y,q),r.renderBufferDirect(I,null,X,Y,T,q),T.onAfterShadow(r,T,A,I,X,Y,q)}}}else if(P.visible){const N=v(T,P,M,E);T.onBeforeShadow(r,T,A,I,X,N,null),r.renderBufferDirect(I,null,X,N,T,null),T.onAfterShadow(r,T,A,I,X,N,null)}}const z=T.children;for(let X=0,P=z.length;X<P;X++)S(z[X],A,I,M,E)}function C(T){T.target.removeEventListener("dispose",C);for(const I in c){const M=c[I],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function pp(r,e,t){const i=t.isWebGL2;function n(){let L=!1;const le=new tt;let ce=null;const Re=new tt(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!L&&(r.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){L=Ee},setClear:function(Ee,Ze,Je,dt,Et){Et===!0&&(Ee*=dt,Ze*=dt,Je*=dt),le.set(Ee,Ze,Je,dt),Re.equals(le)===!1&&(r.clearColor(Ee,Ze,Je,dt),Re.copy(le))},reset:function(){L=!1,ce=null,Re.set(-1,0,0,0)}}}function s(){let L=!1,le=null,ce=null,Re=null;return{setTest:function(Ee){Ee?ge(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Ee){le!==Ee&&!L&&(r.depthMask(Ee),le=Ee)},setFunc:function(Ee){if(ce!==Ee){switch(Ee){case Ml:r.depthFunc(r.NEVER);break;case Sl:r.depthFunc(r.ALWAYS);break;case wl:r.depthFunc(r.LESS);break;case as:r.depthFunc(r.LEQUAL);break;case El:r.depthFunc(r.EQUAL);break;case bl:r.depthFunc(r.GEQUAL);break;case Tl:r.depthFunc(r.GREATER);break;case Al:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Ee}},setLocked:function(Ee){L=Ee},setClear:function(Ee){Re!==Ee&&(r.clearDepth(Ee),Re=Ee)},reset:function(){L=!1,le=null,ce=null,Re=null}}}function o(){let L=!1,le=null,ce=null,Re=null,Ee=null,Ze=null,Je=null,dt=null,Et=null;return{setTest:function(Qe){L||(Qe?ge(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(Qe){le!==Qe&&!L&&(r.stencilMask(Qe),le=Qe)},setFunc:function(Qe,bt,jt){(ce!==Qe||Re!==bt||Ee!==jt)&&(r.stencilFunc(Qe,bt,jt),ce=Qe,Re=bt,Ee=jt)},setOp:function(Qe,bt,jt){(Ze!==Qe||Je!==bt||dt!==jt)&&(r.stencilOp(Qe,bt,jt),Ze=Qe,Je=bt,dt=jt)},setLocked:function(Qe){L=Qe},setClear:function(Qe){Et!==Qe&&(r.clearStencil(Qe),Et=Qe)},reset:function(){L=!1,le=null,ce=null,Re=null,Ee=null,Ze=null,Je=null,dt=null,Et=null}}}const a=new n,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,C=null,T=null,A=null,I=null,M=new be(0,0,0),E=0,F=!1,z=null,X=null,P=null,N=null,G=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=K>=2);let ne=null,se={};const W=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ae=new tt().fromArray(W),de=new tt().fromArray(Z);function fe(L,le,ce,Re){const Ee=new Uint8Array(4),Ze=r.createTexture();r.bindTexture(L,Ze),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<ce;Je++)i&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(le,0,r.RGBA,1,1,Re,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(le+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return Ze}const Te={};Te[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(r.DEPTH_TEST),l.setFunc(as),Ne(!1),b(Nr),ge(r.CULL_FACE),_e(fi);function ge(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function we(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function ze(L,le){return p[L]!==le?(r.bindFramebuffer(L,le),p[L]=le,i&&(L===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=le),L===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=le)),!0):!1}function B(L,le){let ce=_,Re=!1;if(L)if(ce=g.get(le),ce===void 0&&(ce=[],g.set(le,ce)),L.isWebGLMultipleRenderTargets){const Ee=L.texture;if(ce.length!==Ee.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let Ze=0,Je=Ee.length;Ze<Je;Ze++)ce[Ze]=r.COLOR_ATTACHMENT0+Ze;ce.length=Ee.length,Re=!0}}else ce[0]!==r.COLOR_ATTACHMENT0&&(ce[0]=r.COLOR_ATTACHMENT0,Re=!0);else ce[0]!==r.BACK&&(ce[0]=r.BACK,Re=!0);Re&&(t.isWebGL2?r.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function lt(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const ye={[Ai]:r.FUNC_ADD,[ol]:r.FUNC_SUBTRACT,[al]:r.FUNC_REVERSE_SUBTRACT};if(i)ye[Or]=r.MIN,ye[kr]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ye[Or]=L.MIN_EXT,ye[kr]=L.MAX_EXT)}const Le={[ll]:r.ZERO,[cl]:r.ONE,[hl]:r.SRC_COLOR,[rr]:r.SRC_ALPHA,[gl]:r.SRC_ALPHA_SATURATE,[pl]:r.DST_COLOR,[dl]:r.DST_ALPHA,[ul]:r.ONE_MINUS_SRC_COLOR,[or]:r.ONE_MINUS_SRC_ALPHA,[ml]:r.ONE_MINUS_DST_COLOR,[fl]:r.ONE_MINUS_DST_ALPHA,[_l]:r.CONSTANT_COLOR,[yl]:r.ONE_MINUS_CONSTANT_COLOR,[vl]:r.CONSTANT_ALPHA,[xl]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(L,le,ce,Re,Ee,Ze,Je,dt,Et,Qe){if(L===fi){f===!0&&(we(r.BLEND),f=!1);return}if(f===!1&&(ge(r.BLEND),f=!0),L!==rl){if(L!==x||Qe!==F){if((v!==Ai||T!==Ai)&&(r.blendEquation(r.FUNC_ADD),v=Ai,T=Ai),Qe)switch(L){case rn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sr:r.blendFunc(r.ONE,r.ONE);break;case Br:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fr:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Br:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fr:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,C=null,A=null,I=null,M.set(0,0,0),E=0,x=L,F=Qe}return}Ee=Ee||le,Ze=Ze||ce,Je=Je||Re,(le!==v||Ee!==T)&&(r.blendEquationSeparate(ye[le],ye[Ee]),v=le,T=Ee),(ce!==S||Re!==C||Ze!==A||Je!==I)&&(r.blendFuncSeparate(Le[ce],Le[Re],Le[Ze],Le[Je]),S=ce,C=Re,A=Ze,I=Je),(dt.equals(M)===!1||Et!==E)&&(r.blendColor(dt.r,dt.g,dt.b,Et),M.copy(dt),E=Et),x=L,F=!1}function $e(L,le){L.side===kt?we(r.CULL_FACE):ge(r.CULL_FACE);let ce=L.side===Rt;le&&(ce=!ce),Ne(ce),L.blending===rn&&L.transparent===!1?_e(fi):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Re=L.stencilWrite;c.setTest(Re),Re&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){z!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),z=L)}function b(L){L!==tl?(ge(r.CULL_FACE),L!==X&&(L===Nr?r.cullFace(r.BACK):L===il?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),X=L}function y(L){L!==P&&(q&&r.lineWidth(L),P=L)}function D(L,le,ce){L?(ge(r.POLYGON_OFFSET_FILL),(N!==le||G!==ce)&&(r.polygonOffset(le,ce),N=le,G=ce)):we(r.POLYGON_OFFSET_FILL)}function J(L){L?ge(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function $(L){L===void 0&&(L=r.TEXTURE0+j-1),ne!==L&&(r.activeTexture(L),ne=L)}function ee(L,le,ce){ce===void 0&&(ne===null?ce=r.TEXTURE0+j-1:ce=ne);let Re=se[ce];Re===void 0&&(Re={type:void 0,texture:void 0},se[ce]=Re),(Re.type!==L||Re.texture!==le)&&(ne!==ce&&(r.activeTexture(ce),ne=ce),r.bindTexture(L,le||Te[L]),Re.type=L,Re.texture=le)}function ve(){const L=se[ne];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(L){ae.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function qe(L){de.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),de.copy(L))}function nt(L,le){let ce=u.get(le);ce===void 0&&(ce=new WeakMap,u.set(le,ce));let Re=ce.get(L);Re===void 0&&(Re=r.getUniformBlockIndex(le,L.name),ce.set(L,Re))}function He(L,le){const Re=u.get(le).get(L);h.get(le)!==Re&&(r.uniformBlockBinding(le,Re,L.__bindingPointIndex),h.set(le,Re))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ne=null,se={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,C=null,T=null,A=null,I=null,M=new be(0,0,0),E=0,F=!1,z=null,X=null,P=null,N=null,G=null,ae.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ge,disable:we,bindFramebuffer:ze,drawBuffers:B,useProgram:lt,setBlending:_e,setMaterial:$e,setFlipSided:Ne,setCullFace:b,setLineWidth:y,setPolygonOffset:D,setScissorTest:J,activeTexture:$,bindTexture:ee,unbindTexture:ve,compressedTexImage2D:he,compressedTexImage3D:pe,texImage2D:Me,texImage3D:me,updateUBOMapping:nt,uniformBlockBinding:He,texStorage2D:We,texStorage3D:De,texSubImage2D:Ce,texSubImage3D:Oe,compressedTexSubImage2D:te,compressedTexSubImage3D:je,scissor:Be,viewport:qe,reset:re}}function mp(r,e,t,i,n,s,o){const a=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):ps("canvas")}function _(b,y,D,J){let $=1;if((b.width>J||b.height>J)&&($=J/Math.max(b.width,b.height)),$<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ee=y?fs:Math.floor,ve=ee($*b.width),he=ee($*b.height);u===void 0&&(u=g(ve,he));const pe=D?g(ve,he):u;return pe.width=ve,pe.height=he,pe.getContext("2d").drawImage(b,0,0,ve,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+he+")."),pe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ur(b.width)&&ur(b.height)}function f(b){return a?!1:b.wrapS!==Xt||b.wrapT!==Xt||b.minFilter!==St&&b.minFilter!==Ot}function x(b,y){return b.generateMipmaps&&y&&b.minFilter!==St&&b.minFilter!==Ot}function v(b){r.generateMipmap(b)}function S(b,y,D,J,$=!1){if(a===!1)return y;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee=y;if(y===r.RED&&(D===r.FLOAT&&(ee=r.R32F),D===r.HALF_FLOAT&&(ee=r.R16F),D===r.UNSIGNED_BYTE&&(ee=r.R8)),y===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(ee=r.R8UI),D===r.UNSIGNED_SHORT&&(ee=r.R16UI),D===r.UNSIGNED_INT&&(ee=r.R32UI),D===r.BYTE&&(ee=r.R8I),D===r.SHORT&&(ee=r.R16I),D===r.INT&&(ee=r.R32I)),y===r.RG&&(D===r.FLOAT&&(ee=r.RG32F),D===r.HALF_FLOAT&&(ee=r.RG16F),D===r.UNSIGNED_BYTE&&(ee=r.RG8)),y===r.RGBA){const ve=$?cs:Ye.getTransfer(J);D===r.FLOAT&&(ee=r.RGBA32F),D===r.HALF_FLOAT&&(ee=r.RGBA16F),D===r.UNSIGNED_BYTE&&(ee=ve===et?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function C(b,y,D){return x(b,D)===!0||b.isFramebufferTexture&&b.minFilter!==St&&b.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function T(b){return b===St||b===zr||b===Ts?r.NEAREST:r.LINEAR}function A(b){const y=b.target;y.removeEventListener("dispose",A),M(y),y.isVideoTexture&&h.delete(y)}function I(b){const y=b.target;y.removeEventListener("dispose",I),F(y)}function M(b){const y=i.get(b);if(y.__webglInit===void 0)return;const D=b.source,J=d.get(D);if(J){const $=J[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(b),Object.keys(J).length===0&&d.delete(D)}i.remove(b)}function E(b){const y=i.get(b);r.deleteTexture(y.__webglTexture);const D=b.source,J=d.get(D);delete J[y.__cacheKey],o.memory.textures--}function F(b){const y=b.texture,D=i.get(b),J=i.get(y);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(D.__webglFramebuffer[$]))for(let ee=0;ee<D.__webglFramebuffer[$].length;ee++)r.deleteFramebuffer(D.__webglFramebuffer[$][ee]);else r.deleteFramebuffer(D.__webglFramebuffer[$]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[$])}else{if(Array.isArray(D.__webglFramebuffer))for(let $=0;$<D.__webglFramebuffer.length;$++)r.deleteFramebuffer(D.__webglFramebuffer[$]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let $=0;$<D.__webglColorRenderbuffer.length;$++)D.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[$]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let $=0,ee=y.length;$<ee;$++){const ve=i.get(y[$]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(y[$])}i.remove(y),i.remove(b)}let z=0;function X(){z=0}function P(){const b=z;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),z+=1,b}function N(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function G(b,y){const D=i.get(b);if(b.isVideoTexture&&$e(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(D,b,y);return}}t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+y)}function j(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ae(D,b,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+y)}function q(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ae(D,b,y);return}t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+y)}function K(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){de(D,b,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+y)}const Y={[ls]:r.REPEAT,[Xt]:r.CLAMP_TO_EDGE,[cr]:r.MIRRORED_REPEAT},ne={[St]:r.NEAREST,[zr]:r.NEAREST_MIPMAP_NEAREST,[Ts]:r.NEAREST_MIPMAP_LINEAR,[Ot]:r.LINEAR,[Fl]:r.LINEAR_MIPMAP_NEAREST,[Tn]:r.LINEAR_MIPMAP_LINEAR},se={[Kl]:r.NEVER,[tc]:r.ALWAYS,[$l]:r.LESS,[Aa]:r.LEQUAL,[Zl]:r.EQUAL,[ec]:r.GEQUAL,[Jl]:r.GREATER,[Ql]:r.NOTEQUAL};function W(b,y,D){if(D?(r.texParameteri(b,r.TEXTURE_WRAP_S,Y[y.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,Y[y.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,Y[y.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,ne[y.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,ne[y.minFilter])):(r.texParameteri(b,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(b,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==Xt||y.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,r.TEXTURE_MAG_FILTER,T(y.magFilter)),r.texParameteri(b,r.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==St&&y.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===St||y.minFilter!==Ts&&y.minFilter!==Tn||y.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===An&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(r.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Z(b,y){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));const J=y.source;let $=d.get(J);$===void 0&&($={},d.set(J,$));const ee=N(y);if(ee!==b.__cacheKey){$[ee]===void 0&&($[ee]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,D=!0),$[ee].usedTimes++;const ve=$[b.__cacheKey];ve!==void 0&&($[b.__cacheKey].usedTimes--,ve.usedTimes===0&&E(y)),b.__cacheKey=ee,b.__webglTexture=$[ee].texture}return D}function ae(b,y,D){let J=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=r.TEXTURE_3D);const $=Z(b,y),ee=y.source;t.bindTexture(J,b.__webglTexture,r.TEXTURE0+D);const ve=i.get(ee);if(ee.version!==ve.__version||$===!0){t.activeTexture(r.TEXTURE0+D);const he=Ye.getPrimaries(Ye.workingColorSpace),pe=y.colorSpace===zt?null:Ye.getPrimaries(y.colorSpace),Ce=y.colorSpace===zt||he===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Oe=f(y)&&m(y.image)===!1;let te=_(y.image,Oe,!1,n.maxTextureSize);te=Ne(y,te);const je=m(te)||a,We=s.convert(y.format,y.colorSpace);let De=s.convert(y.type),Me=S(y.internalFormat,We,De,y.colorSpace,y.isVideoTexture);W(J,y,je);let me;const Be=y.mipmaps,qe=a&&y.isVideoTexture!==!0&&Me!==ba,nt=ve.__version===void 0||$===!0,He=C(y,te,je);if(y.isDepthTexture)Me=r.DEPTH_COMPONENT,a?y.type===di?Me=r.DEPTH_COMPONENT32F:y.type===ui?Me=r.DEPTH_COMPONENT24:y.type===Ri?Me=r.DEPTH24_STENCIL8:Me=r.DEPTH_COMPONENT16:y.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Pi&&Me===r.DEPTH_COMPONENT&&y.type!==gr&&y.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ui,De=s.convert(y.type)),y.format===un&&Me===r.DEPTH_COMPONENT&&(Me=r.DEPTH_STENCIL,y.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ri,De=s.convert(y.type))),nt&&(qe?t.texStorage2D(r.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,Me,te.width,te.height,0,We,De,null));else if(y.isDataTexture)if(Be.length>0&&je){qe&&nt&&t.texStorage2D(r.TEXTURE_2D,He,Me,Be[0].width,Be[0].height);for(let re=0,L=Be.length;re<L;re++)me=Be[re],qe?t.texSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,We,De,me.data):t.texImage2D(r.TEXTURE_2D,re,Me,me.width,me.height,0,We,De,me.data);y.generateMipmaps=!1}else qe?(nt&&t.texStorage2D(r.TEXTURE_2D,He,Me,te.width,te.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,te.width,te.height,We,De,te.data)):t.texImage2D(r.TEXTURE_2D,0,Me,te.width,te.height,0,We,De,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,Me,Be[0].width,Be[0].height,te.depth);for(let re=0,L=Be.length;re<L;re++)me=Be[re],y.format!==qt?We!==null?qe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,te.depth,We,me.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Me,me.width,me.height,te.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,te.depth,We,De,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Me,me.width,me.height,te.depth,0,We,De,me.data)}else{qe&&nt&&t.texStorage2D(r.TEXTURE_2D,He,Me,Be[0].width,Be[0].height);for(let re=0,L=Be.length;re<L;re++)me=Be[re],y.format!==qt?We!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,We,me.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Me,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,We,De,me.data):t.texImage2D(r.TEXTURE_2D,re,Me,me.width,me.height,0,We,De,me.data)}else if(y.isDataArrayTexture)qe?(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,Me,te.width,te.height,te.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,We,De,te.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,We,De,te.data);else if(y.isData3DTexture)qe?(nt&&t.texStorage3D(r.TEXTURE_3D,He,Me,te.width,te.height,te.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,We,De,te.data)):t.texImage3D(r.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,We,De,te.data);else if(y.isFramebufferTexture){if(nt)if(qe)t.texStorage2D(r.TEXTURE_2D,He,Me,te.width,te.height);else{let re=te.width,L=te.height;for(let le=0;le<He;le++)t.texImage2D(r.TEXTURE_2D,le,Me,re,L,0,We,De,null),re>>=1,L>>=1}}else if(Be.length>0&&je){qe&&nt&&t.texStorage2D(r.TEXTURE_2D,He,Me,Be[0].width,Be[0].height);for(let re=0,L=Be.length;re<L;re++)me=Be[re],qe?t.texSubImage2D(r.TEXTURE_2D,re,0,0,We,De,me):t.texImage2D(r.TEXTURE_2D,re,Me,We,De,me);y.generateMipmaps=!1}else qe?(nt&&t.texStorage2D(r.TEXTURE_2D,He,Me,te.width,te.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,We,De,te)):t.texImage2D(r.TEXTURE_2D,0,Me,We,De,te);x(y,je)&&v(J),ve.__version=ee.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function de(b,y,D){if(y.image.length!==6)return;const J=Z(b,y),$=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+D);const ee=i.get($);if($.version!==ee.__version||J===!0){t.activeTexture(r.TEXTURE0+D);const ve=Ye.getPrimaries(Ye.workingColorSpace),he=y.colorSpace===zt?null:Ye.getPrimaries(y.colorSpace),pe=y.colorSpace===zt||ve===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,Oe=y.image[0]&&y.image[0].isDataTexture,te=[];for(let re=0;re<6;re++)!Ce&&!Oe?te[re]=_(y.image[re],!1,!0,n.maxCubemapSize):te[re]=Oe?y.image[re].image:y.image[re],te[re]=Ne(y,te[re]);const je=te[0],We=m(je)||a,De=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),me=S(y.internalFormat,De,Me,y.colorSpace),Be=a&&y.isVideoTexture!==!0,qe=ee.__version===void 0||J===!0;let nt=C(y,je,We);W(r.TEXTURE_CUBE_MAP,y,We);let He;if(Ce){Be&&qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,nt,me,je.width,je.height);for(let re=0;re<6;re++){He=te[re].mipmaps;for(let L=0;L<He.length;L++){const le=He[L];y.format!==qt?De!==null?Be?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,le.width,le.height,De,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,le.width,le.height,De,Me,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,me,le.width,le.height,0,De,Me,le.data)}}}else{He=y.mipmaps,Be&&qe&&(He.length>0&&nt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,nt,me,te[0].width,te[0].height));for(let re=0;re<6;re++)if(Oe){Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,te[re].width,te[re].height,De,Me,te[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,te[re].width,te[re].height,0,De,Me,te[re].data);for(let L=0;L<He.length;L++){const ce=He[L].image[re].image;Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,ce.width,ce.height,De,Me,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,me,ce.width,ce.height,0,De,Me,ce.data)}}else{Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,Me,te[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,De,Me,te[re]);for(let L=0;L<He.length;L++){const le=He[L];Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,De,Me,le.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,me,De,Me,le.image[re])}}}x(y,We)&&v(r.TEXTURE_CUBE_MAP),ee.__version=$.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function fe(b,y,D,J,$,ee){const ve=s.convert(D.format,D.colorSpace),he=s.convert(D.type),pe=S(D.internalFormat,ve,he,D.colorSpace);if(!i.get(y).__hasExternalTextures){const Oe=Math.max(1,y.width>>ee),te=Math.max(1,y.height>>ee);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,ee,pe,Oe,te,y.depth,0,ve,he,null):t.texImage2D($,ee,pe,Oe,te,0,ve,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),_e(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,$,i.get(D).__webglTexture,0,Le(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,$,i.get(D).__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(b,y,D){if(r.bindRenderbuffer(r.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let J=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(D||_e(y)){const $=y.depthTexture;$&&$.isDepthTexture&&($.type===di?J=r.DEPTH_COMPONENT32F:$.type===ui&&(J=r.DEPTH_COMPONENT24));const ee=Le(y);_e(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,J,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,J,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const J=Le(y);D&&_e(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,y.width,y.height):_e(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,b)}else{const J=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0;$<J.length;$++){const ee=J[$],ve=s.convert(ee.format,ee.colorSpace),he=s.convert(ee.type),pe=S(ee.internalFormat,ve,he,ee.colorSpace),Ce=Le(y);D&&_e(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,pe,y.width,y.height):_e(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,pe,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,pe,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const J=i.get(y.depthTexture).__webglTexture,$=Le(y);if(y.depthTexture.format===Pi)_e(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(y.depthTexture.format===un)_e(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function we(b){const y=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ge(y.__webglFramebuffer,b)}else if(D){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]=r.createRenderbuffer(),Te(y.__webglDepthbuffer[J],b,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Te(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(b,y,D){const J=i.get(b);y!==void 0&&fe(J.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&we(b)}function B(b){const y=b.texture,D=i.get(b),J=i.get(y);b.addEventListener("dispose",I),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=y.version,o.memory.textures++);const $=b.isWebGLCubeRenderTarget===!0,ee=b.isWebGLMultipleRenderTargets===!0,ve=m(b)||a;if($){D.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[he]=[];for(let pe=0;pe<y.mipmaps.length;pe++)D.__webglFramebuffer[he][pe]=r.createFramebuffer()}else D.__webglFramebuffer[he]=r.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)D.__webglFramebuffer[he]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(ee)if(n.drawBuffers){const he=b.texture;for(let pe=0,Ce=he.length;pe<Ce;pe++){const Oe=i.get(he[pe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&_e(b)===!1){const he=ee?y:[y];D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const Ce=he[pe];D.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[pe]);const Oe=s.convert(Ce.format,Ce.colorSpace),te=s.convert(Ce.type),je=S(Ce.internalFormat,Oe,te,Ce.colorSpace,b.isXRRenderTarget===!0),We=Le(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,We,je,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,D.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(D.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),W(r.TEXTURE_CUBE_MAP,y,ve);for(let he=0;he<6;he++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)fe(D.__webglFramebuffer[he][pe],b,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else fe(D.__webglFramebuffer[he],b,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(y,ve)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const he=b.texture;for(let pe=0,Ce=he.length;pe<Ce;pe++){const Oe=he[pe],te=i.get(Oe);t.bindTexture(r.TEXTURE_2D,te.__webglTexture),W(r.TEXTURE_2D,Oe,ve),fe(D.__webglFramebuffer,b,Oe,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),x(Oe,ve)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,J.__webglTexture),W(he,y,ve),a&&y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)fe(D.__webglFramebuffer[pe],b,y,r.COLOR_ATTACHMENT0,he,pe);else fe(D.__webglFramebuffer,b,y,r.COLOR_ATTACHMENT0,he,0);x(y,ve)&&v(he),t.unbindTexture()}b.depthBuffer&&we(b)}function lt(b){const y=m(b)||a,D=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,$=D.length;J<$;J++){const ee=D[J];if(x(ee,y)){const ve=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,he=i.get(ee).__webglTexture;t.bindTexture(ve,he),v(ve),t.unbindTexture()}}}function ye(b){if(a&&b.samples>0&&_e(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],D=b.width,J=b.height;let $=r.COLOR_BUFFER_BIT;const ee=[],ve=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=i.get(b),pe=b.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){ee.push(r.COLOR_ATTACHMENT0+Ce),b.depthBuffer&&ee.push(ve);const Oe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Oe===!1&&(b.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),pe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),Oe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ve])),pe){const te=i.get(y[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,D,J,0,0,D,J,$,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const Oe=i.get(y[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,Oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Le(b){return Math.min(n.maxSamples,b.samples)}function _e(b){const y=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $e(b){const y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Ne(b,y){const D=b.colorSpace,J=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===hr||D!==si&&D!==zt&&(Ye.getTransfer(D)===et?a===!1?e.has("EXT_sRGB")===!0&&J===qt?(b.format=hr,b.minFilter=Ot,b.generateMipmaps=!1):y=Ra.sRGBToLinear(y):(J!==qt||$!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}this.allocateTextureUnit=P,this.resetTextureUnits=X,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=ze,this.setupRenderTarget=B,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function gp(r,e,t){const i=t.isWebGL2;function n(s,o=zt){let a;const l=Ye.getTransfer(o);if(s===mi)return r.UNSIGNED_BYTE;if(s===xa)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ma)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ol)return r.BYTE;if(s===kl)return r.SHORT;if(s===gr)return r.UNSIGNED_SHORT;if(s===va)return r.INT;if(s===ui)return r.UNSIGNED_INT;if(s===di)return r.FLOAT;if(s===An)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zl)return r.ALPHA;if(s===qt)return r.RGBA;if(s===Hl)return r.LUMINANCE;if(s===Gl)return r.LUMINANCE_ALPHA;if(s===Pi)return r.DEPTH_COMPONENT;if(s===un)return r.DEPTH_STENCIL;if(s===hr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Vl)return r.RED;if(s===Sa)return r.RED_INTEGER;if(s===Wl)return r.RG;if(s===wa)return r.RG_INTEGER;if(s===Ea)return r.RGBA_INTEGER;if(s===As||s===Cs||s===Rs||s===Ps)if(l===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hr||s===Gr||s===Vr||s===Wr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ba)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xr||s===qr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xr)return l===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qr)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jr||s===Yr||s===Kr||s===$r||s===Zr||s===Jr||s===Qr||s===eo||s===to||s===io||s===no||s===so||s===ro||s===oo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jr)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yr)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kr)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$r)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zr)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jr)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qr)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===eo)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===to)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===io)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===no)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===so)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ro)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oo)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ls||s===ao||s===lo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ls)return l===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xl||s===co||s===ho||s===uo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ls)return a.COMPRESSED_RED_RGTC1_EXT;if(s===co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ho)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ri?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class _p extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xe extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vp extends Ui{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const x=[],v=[],S=new Se;let C=null;const T=new Nt;T.layers.enable(1),T.viewport=new tt;const A=new Nt;A.layers.enable(2),A.viewport=new tt;const I=[T,A],M=new _p;M.layers.enable(1),M.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=x[W];return Z===void 0&&(Z=new er,x[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=x[W];return Z===void 0&&(Z=new er,x[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=x[W];return Z===void 0&&(Z=new er,x[W]=Z),Z.getHandSpace()};function z(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const ae=x[Z];ae!==void 0&&(ae.update(W.inputSource,W.frame,c||o),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",P);for(let W=0;W<x.length;W++){const Z=v[W];Z!==null&&(v[W]=null,x[W].disconnect(Z))}E=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,n=null,f=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",X),n.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Di(p.framebufferWidth,p.framebufferHeight,{format:qt,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ae=null,de=null;_.depth&&(de=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?un:Pi,ae=_.stencil?Ri:ui);const fe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(fe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Di(d.textureWidth,d.textureHeight,{format:qt,type:mi,depthTexture:new za(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),se.setContext(n),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function P(W){for(let Z=0;Z<W.removed.length;Z++){const ae=W.removed[Z],de=v.indexOf(ae);de>=0&&(v[de]=null,x[de].disconnect(ae))}for(let Z=0;Z<W.added.length;Z++){const ae=W.added[Z];let de=v.indexOf(ae);if(de===-1){for(let Te=0;Te<x.length;Te++)if(Te>=v.length){v.push(ae),de=Te;break}else if(v[Te]===null){v[Te]=ae,de=Te;break}if(de===-1)break}const fe=x[de];fe&&fe.connect(ae)}}const N=new R,G=new R;function j(W,Z,ae){N.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(ae.matrixWorld);const de=N.distanceTo(G),fe=Z.projectionMatrix.elements,Te=ae.projectionMatrix.elements,ge=fe[14]/(fe[10]-1),we=fe[14]/(fe[10]+1),ze=(fe[9]+1)/fe[5],B=(fe[9]-1)/fe[5],lt=(fe[8]-1)/fe[0],ye=(Te[8]+1)/Te[0],Le=ge*lt,_e=ge*ye,$e=de/(-lt+ye),Ne=$e*-lt;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ne),W.translateZ($e),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const b=ge+$e,y=we+$e,D=Le-Ne,J=_e+(de-Ne),$=ze*we/y*b,ee=B*we/y*b;W.projectionMatrix.makePerspective(D,J,$,ee,b,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;M.near=A.near=T.near=W.near,M.far=A.far=T.far=W.far,(E!==M.near||F!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,F=M.far);const Z=W.parent,ae=M.cameras;q(M,Z);for(let de=0;de<ae.length;de++)q(ae[de],Z);ae.length===2?j(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),K(W,M,Z)};function K(W,Z,ae){ae===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Cn*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let Y=null;function ne(W,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let de=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let fe=0;fe<ae.length;fe++){const Te=ae[fe];let ge=null;if(p!==null)ge=p.getViewport(Te);else{const ze=u.getViewSubImage(d,Te);ge=ze.viewport,fe===0&&(e.setRenderTargetTextures(f,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(f))}let we=I[fe];we===void 0&&(we=new Nt,we.layers.enable(fe),we.viewport=new tt,I[fe]=we),we.matrix.fromArray(Te.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Te.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(ge.x,ge.y,ge.width,ge.height),fe===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(we)}}for(let ae=0;ae<x.length;ae++){const de=v[ae],fe=x[ae];de!==null&&fe!==void 0&&fe.update(de,Z,c||o)}Y&&Y(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const se=new Oa;se.setAnimationLoop(ne),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}}function xp(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Na(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Rt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Rt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Mp(r,e,t,i){let n={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=n[x.id];S===void 0&&(g(x),S=h(x),n[x.id]=S,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const T=e.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function h(x){const v=u();x.__bindingPointIndex=v;const S=r.createBuffer(),C=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=n[x.id],S=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,E=I.length;M<E;M++){const F=I[M];if(p(F,T,M,C)===!0){const z=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let N=0;N<X.length;N++){const G=X[N],j=_(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,z+P,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(x,v,S,C){const T=x.value,A=v+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const I=C[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(x){const v=x.uniforms;let S=0;const C=16;for(let A=0,I=v.length;A<I;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,F=M.length;E<F;E++){const z=M[E],X=Array.isArray(z.value)?z.value:[z.value];for(let P=0,N=X.length;P<N;P++){const G=X[P],j=_(G),q=S%C;q!==0&&C-q<j.boundary&&(S+=C-q),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=j.storage}}}const T=S%C;return T>0&&(S+=C-T),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function f(){for(const x in n)r.deleteBuffer(n[x]);o=[],n={},s={}}return{bind:l,update:c,dispose:f}}class qa{constructor(e={}){const{canvas:t=gc(),context:i=null,depth:n=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const v=this;let S=!1,C=0,T=0,A=null,I=-1,M=null;const E=new tt,F=new tt;let z=null;const X=new be(0);let P=0,N=t.width,G=t.height,j=1,q=null,K=null;const Y=new tt(0,0,N,G),ne=new tt(0,0,N,G);let se=!1;const W=new xr;let Z=!1,ae=!1,de=null;const fe=new rt,Te=new Se,ge=new R,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return A===null?j:1}let B=i;function lt(w,U){for(let H=0;H<w.length;H++){const V=w[H],O=t.getContext(V,U);if(O!==null)return O}return null}try{const w={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mr}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",le,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),B=lt(U,w),B===null)throw lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,Le,_e,$e,Ne,b,y,D,J,$,ee,ve,he,pe,Ce,Oe,te,je,We,De,Me,me,Be,qe;function nt(){ye=new Pd(B),Le=new Ed(B,ye,e),ye.init(Le),me=new gp(B,ye,Le),_e=new pp(B,ye,Le),$e=new Id(B),Ne=new ep,b=new mp(B,ye,_e,Ne,Le,me,$e),y=new Td(v),D=new Rd(v),J=new Hc(B,Le),Be=new Sd(B,ye,J,Le),$=new Ld(B,J,$e,Be),ee=new Fd(B,$,J,$e),We=new Bd(B,Le,b),Oe=new bd(Ne),ve=new Qf(v,y,D,ye,Le,Be,Oe),he=new xp(v,Ne),pe=new ip,Ce=new lp(ye,Le),je=new Md(v,y,D,_e,ee,d,l),te=new fp(v,ee,Le),qe=new Mp(B,$e,Le,_e),De=new wd(B,ye,$e,Le),Me=new Dd(B,ye,$e,Le),$e.programs=ve.programs,v.capabilities=Le,v.extensions=ye,v.properties=Ne,v.renderLists=pe,v.shadowMap=te,v.state=_e,v.info=$e}nt();const He=new vp(v,B);this.xr=He,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(N,G,!1))},this.getSize=function(w){return w.set(N,G)},this.setSize=function(w,U,H=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,G=U,t.width=Math.floor(w*j),t.height=Math.floor(U*j),H===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(N*j,G*j).floor()},this.setDrawingBufferSize=function(w,U,H){N=w,G=U,j=H,t.width=Math.floor(w*H),t.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,U,H,V){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,U,H,V),_e.viewport(E.copy(Y).multiplyScalar(j).floor())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,U,H,V){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,U,H,V),_e.scissor(F.copy(ne).multiplyScalar(j).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){_e.setScissorTest(se=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(w=!0,U=!0,H=!0){let V=0;if(w){let O=!1;if(A!==null){const ue=A.texture.format;O=ue===Ea||ue===wa||ue===Sa}if(O){const ue=A.texture.type,xe=ue===mi||ue===ui||ue===gr||ue===Ri||ue===xa||ue===Ma,Ae=je.getClearColor(),Pe=je.getClearAlpha(),ke=Ae.r,Ie=Ae.g,Ue=Ae.b;xe?(p[0]=ke,p[1]=Ie,p[2]=Ue,p[3]=Pe,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=ke,g[1]=Ie,g[2]=Ue,g[3]=Pe,B.clearBufferiv(B.COLOR,0,g))}else V|=B.COLOR_BUFFER_BIT}U&&(V|=B.DEPTH_BUFFER_BIT),H&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",le,!1),pe.dispose(),Ce.dispose(),Ne.dispose(),y.dispose(),D.dispose(),ee.dispose(),Be.dispose(),qe.dispose(),ve.dispose(),He.dispose(),He.removeEventListener("sessionstart",Et),He.removeEventListener("sessionend",Qe),de&&(de.dispose(),de=null),bt.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=$e.autoReset,U=te.enabled,H=te.autoUpdate,V=te.needsUpdate,O=te.type;nt(),$e.autoReset=w,te.enabled=U,te.autoUpdate=H,te.needsUpdate=V,te.type=O}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){const U=w.target;U.removeEventListener("dispose",ce),Re(U)}function Re(w){Ee(w),Ne.remove(w)}function Ee(w){const U=Ne.get(w).programs;U!==void 0&&(U.forEach(function(H){ve.releaseProgram(H)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,V,O,ue){U===null&&(U=we);const xe=O.isMesh&&O.matrixWorld.determinant()<0,Ae=Za(w,U,H,V,O);_e.setMaterial(V,xe);let Pe=H.index,ke=1;if(V.wireframe===!0){if(Pe=$.getWireframeAttribute(H),Pe===void 0)return;ke=2}const Ie=H.drawRange,Ue=H.attributes.position;let ot=Ie.start*ke,Lt=(Ie.start+Ie.count)*ke;ue!==null&&(ot=Math.max(ot,ue.start*ke),Lt=Math.min(Lt,(ue.start+ue.count)*ke)),Pe!==null?(ot=Math.max(ot,0),Lt=Math.min(Lt,Pe.count)):Ue!=null&&(ot=Math.max(ot,0),Lt=Math.min(Lt,Ue.count));const ft=Lt-ot;if(ft<0||ft===1/0)return;Be.setup(O,V,Ae,H,Pe);let $t,it=De;if(Pe!==null&&($t=J.get(Pe),it=Me,it.setIndex($t)),O.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*ze()),it.setMode(B.LINES)):it.setMode(B.TRIANGLES);else if(O.isLine){let Ge=V.linewidth;Ge===void 0&&(Ge=1),_e.setLineWidth(Ge*ze()),O.isLineSegments?it.setMode(B.LINES):O.isLineLoop?it.setMode(B.LINE_LOOP):it.setMode(B.LINE_STRIP)}else O.isPoints?it.setMode(B.POINTS):O.isSprite&&it.setMode(B.TRIANGLES);if(O.isBatchedMesh)it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)it.renderInstances(ot,ft,O.count);else if(H.isInstancedBufferGeometry){const Ge=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ss=Math.min(H.instanceCount,Ge);it.renderInstances(ot,ft,Ss)}else it.render(ot,ft)};function Ze(w,U,H){w.transparent===!0&&w.side===kt&&w.forceSinglePass===!1?(w.side=Rt,w.needsUpdate=!0,In(w,U,H),w.side=gi,w.needsUpdate=!0,In(w,U,H),w.side=kt):In(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),m=Ce.get(H),m.init(),x.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(v._useLegacyLights);const V=new Set;return w.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const Ae=ue[xe];Ze(Ae,H,O),V.add(Ae)}else Ze(ue,H,O),V.add(ue)}),x.pop(),m=null,V},this.compileAsync=function(w,U,H=null){const V=this.compile(w,U,H);return new Promise(O=>{function ue(){if(V.forEach(function(xe){Ne.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){O(w);return}setTimeout(ue,10)}ye.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Je=null;function dt(w){Je&&Je(w)}function Et(){bt.stop()}function Qe(){bt.start()}const bt=new Oa;bt.setAnimationLoop(dt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(w){Je=w,He.setAnimationLoop(w),w===null?bt.stop():bt.start()},He.addEventListener("sessionstart",Et),He.addEventListener("sessionend",Qe),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(U),U=He.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),m=Ce.get(w,x.length),m.init(),x.push(m),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(fe),ae=this.localClippingEnabled,Z=Oe.init(this.clippingPlanes,ae),_=pe.get(w,f.length),_.init(),f.push(_),jt(w,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,K),this.info.render.frame++,Z===!0&&Oe.beginShadows();const H=m.state.shadowsArray;if(te.render(H,w,U),Z===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,w),m.setupLights(v._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let O=0,ue=V.length;O<ue;O++){const xe=V[O];Rr(_,w,xe,xe.viewport)}}else Rr(_,w,U);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),Be.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function jt(w,U,H,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){V&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const xe=ee.update(w),Ae=w.material;Ae.visible&&_.push(w,xe,Ae,H,ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){const xe=ee.update(w),Ae=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ge.copy(xe.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Ae)){const Pe=xe.groups;for(let ke=0,Ie=Pe.length;ke<Ie;ke++){const Ue=Pe[ke],ot=Ae[Ue.materialIndex];ot&&ot.visible&&_.push(w,xe,ot,H,ge.z,Ue)}}else Ae.visible&&_.push(w,xe,Ae,H,ge.z,null)}}const ue=w.children;for(let xe=0,Ae=ue.length;xe<Ae;xe++)jt(ue[xe],U,H,V)}function Rr(w,U,H,V){const O=w.opaque,ue=w.transmissive,xe=w.transparent;m.setupLightsView(H),Z===!0&&Oe.setGlobalState(v.clippingPlanes,H),ue.length>0&&$a(O,ue,U,H),V&&_e.viewport(E.copy(V)),O.length>0&&Dn(O,U,H),ue.length>0&&Dn(ue,U,H),xe.length>0&&Dn(xe,U,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function $a(w,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const ue=Le.isWebGL2;de===null&&(de=new Di(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?An:mi,minFilter:Tn,samples:ue?4:0})),v.getDrawingBufferSize(Te),ue?de.setSize(Te.x,Te.y):de.setSize(fs(Te.x),fs(Te.y));const xe=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(X),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ae=v.toneMapping;v.toneMapping=pi,Dn(w,H,V),b.updateMultisampleRenderTarget(de),b.updateRenderTargetMipmap(de);let Pe=!1;for(let ke=0,Ie=U.length;ke<Ie;ke++){const Ue=U[ke],ot=Ue.object,Lt=Ue.geometry,ft=Ue.material,$t=Ue.group;if(ft.side===kt&&ot.layers.test(V.layers)){const it=ft.side;ft.side=Rt,ft.needsUpdate=!0,Pr(ot,H,V,Lt,ft,$t),ft.side=it,ft.needsUpdate=!0,Pe=!0}}Pe===!0&&(b.updateMultisampleRenderTarget(de),b.updateRenderTargetMipmap(de)),v.setRenderTarget(xe),v.setClearColor(X,P),v.toneMapping=Ae}function Dn(w,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ue=w.length;O<ue;O++){const xe=w[O],Ae=xe.object,Pe=xe.geometry,ke=V===null?xe.material:V,Ie=xe.group;Ae.layers.test(H.layers)&&Pr(Ae,U,H,Pe,ke,Ie)}}function Pr(w,U,H,V,O,ue){w.onBeforeRender(v,U,H,V,O,ue),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(v,U,H,V,w,ue),O.transparent===!0&&O.side===kt&&O.forceSinglePass===!1?(O.side=Rt,O.needsUpdate=!0,v.renderBufferDirect(H,U,V,O,w,ue),O.side=gi,O.needsUpdate=!0,v.renderBufferDirect(H,U,V,O,w,ue),O.side=kt):v.renderBufferDirect(H,U,V,O,w,ue),w.onAfterRender(v,U,H,V,O,ue)}function In(w,U,H){U.isScene!==!0&&(U=we);const V=Ne.get(w),O=m.state.lights,ue=m.state.shadowsArray,xe=O.state.version,Ae=ve.getParameters(w,O.state,ue,U,H),Pe=ve.getProgramCacheKey(Ae);let ke=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?D:y).get(w.envMap||V.environment),ke===void 0&&(w.addEventListener("dispose",ce),ke=new Map,V.programs=ke);let Ie=ke.get(Pe);if(Ie!==void 0){if(V.currentProgram===Ie&&V.lightsStateVersion===xe)return Dr(w,Ae),Ie}else Ae.uniforms=ve.getUniforms(w),w.onBuild(H,Ae,v),w.onBeforeCompile(Ae,v),Ie=ve.acquireProgram(Ae,Pe),ke.set(Pe,Ie),V.uniforms=Ae.uniforms;const Ue=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=Oe.uniform),Dr(w,Ae),V.needsLights=Qa(w),V.lightsStateVersion=xe,V.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ie,V.uniformsList=null,Ie}function Lr(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=os.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Dr(w,U){const H=Ne.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Za(w,U,H,V,O){U.isScene!==!0&&(U=we),b.resetTextureUnits();const ue=U.fog,xe=V.isMeshStandardMaterial?U.environment:null,Ae=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:si,Pe=(V.isMeshStandardMaterial?D:y).get(V.envMap||xe),ke=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!H.morphAttributes.position,ot=!!H.morphAttributes.normal,Lt=!!H.morphAttributes.color;let ft=pi;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=v.toneMapping);const $t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=$t!==void 0?$t.length:0,Ge=Ne.get(V),Ss=m.state.lights;if(Z===!0&&(ae===!0||w!==M)){const Bt=w===M&&V.id===I;Oe.setState(V,w,Bt)}let st=!1;V.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ss.state.version||Ge.outputColorSpace!==Ae||O.isBatchedMesh&&Ge.batching===!1||!O.isBatchedMesh&&Ge.batching===!0||O.isInstancedMesh&&Ge.instancing===!1||!O.isInstancedMesh&&Ge.instancing===!0||O.isSkinnedMesh&&Ge.skinning===!1||!O.isSkinnedMesh&&Ge.skinning===!0||O.isInstancedMesh&&Ge.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ge.instancingColor===!1&&O.instanceColor!==null||Ge.envMap!==Pe||V.fog===!0&&Ge.fog!==ue||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Oe.numPlanes||Ge.numIntersection!==Oe.numIntersection)||Ge.vertexAlphas!==ke||Ge.vertexTangents!==Ie||Ge.morphTargets!==Ue||Ge.morphNormals!==ot||Ge.morphColors!==Lt||Ge.toneMapping!==ft||Le.isWebGL2===!0&&Ge.morphTargetsCount!==it)&&(st=!0):(st=!0,Ge.__version=V.version);let vi=Ge.currentProgram;st===!0&&(vi=In(V,U,O));let Ir=!1,gn=!1,ws=!1;const vt=vi.getUniforms(),xi=Ge.uniforms;if(_e.useProgram(vi.program)&&(Ir=!0,gn=!0,ws=!0),V.id!==I&&(I=V.id,gn=!0),Ir||M!==w){vt.setValue(B,"projectionMatrix",w.projectionMatrix),vt.setValue(B,"viewMatrix",w.matrixWorldInverse);const Bt=vt.map.cameraPosition;Bt!==void 0&&Bt.setValue(B,ge.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,gn=!0,ws=!0)}if(O.isSkinnedMesh){vt.setOptional(B,O,"bindMatrix"),vt.setOptional(B,O,"bindMatrixInverse");const Bt=O.skeleton;Bt&&(Le.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),vt.setValue(B,"boneTexture",Bt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(vt.setOptional(B,O,"batchingTexture"),vt.setValue(B,"batchingTexture",O._matricesTexture,b));const Es=H.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&Le.isWebGL2===!0)&&We.update(O,H,vi),(gn||Ge.receiveShadow!==O.receiveShadow)&&(Ge.receiveShadow=O.receiveShadow,vt.setValue(B,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(xi.envMap.value=Pe,xi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),gn&&(vt.setValue(B,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&Ja(xi,ws),ue&&V.fog===!0&&he.refreshFogUniforms(xi,ue),he.refreshMaterialUniforms(xi,V,j,G,de),os.upload(B,Lr(Ge),xi,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(os.upload(B,Lr(Ge),xi,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(B,"center",O.center),vt.setValue(B,"modelViewMatrix",O.modelViewMatrix),vt.setValue(B,"normalMatrix",O.normalMatrix),vt.setValue(B,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Bt=V.uniformsGroups;for(let bs=0,el=Bt.length;bs<el;bs++)if(Le.isWebGL2){const Ur=Bt[bs];qe.update(Ur,vi),qe.bind(Ur,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function Ja(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Qa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,H){Ne.get(w.texture).__webglTexture=U,Ne.get(w.depthTexture).__webglTexture=H;const V=Ne.get(w);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const H=Ne.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){A=w,C=U,T=H;let V=!0,O=null,ue=!1,xe=!1;if(w){const Pe=Ne.get(w);Pe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(B.FRAMEBUFFER,null),V=!1):Pe.__webglFramebuffer===void 0?b.setupRenderTarget(w):Pe.__hasExternalTextures&&b.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const Ie=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?O=Ie[U][H]:O=Ie[U],ue=!0):Le.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?O=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[H]:O=Ie,E.copy(w.viewport),F.copy(w.scissor),z=w.scissorTest}else E.copy(Y).multiplyScalar(j).floor(),F.copy(ne).multiplyScalar(j).floor(),z=se;if(_e.bindFramebuffer(B.FRAMEBUFFER,O)&&Le.drawBuffers&&V&&_e.drawBuffers(w,O),_e.viewport(E),_e.scissor(F),_e.setScissorTest(z),ue){const Pe=Ne.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,H)}else if(xe){const Pe=Ne.get(w.texture),ke=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.__webglTexture,H||0,ke)}I=-1},this.readRenderTargetPixels=function(w,U,H,V,O,ue,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){_e.bindFramebuffer(B.FRAMEBUFFER,Ae);try{const Pe=w.texture,ke=Pe.format,Ie=Pe.type;if(ke!==qt&&me.convert(ke)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ie===An&&(ye.has("EXT_color_buffer_half_float")||Le.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ie!==mi&&me.convert(Ie)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===di&&(Le.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&H>=0&&H<=w.height-O&&B.readPixels(U,H,V,O,me.convert(ke),me.convert(Ie),ue)}finally{const Pe=A!==null?Ne.get(A).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(w,U,H=0){const V=Math.pow(2,-H),O=Math.floor(U.image.width*V),ue=Math.floor(U.image.height*V);b.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,w.x,w.y,O,ue),_e.unbindTexture()},this.copyTextureToTexture=function(w,U,H,V=0){const O=U.image.width,ue=U.image.height,xe=me.convert(H.format),Ae=me.convert(H.type);b.setTexture2D(H,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,V,w.x,w.y,O,ue,xe,Ae,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,V,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,V,w.x,w.y,xe,Ae,U.image),V===0&&H.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H,V,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=w.max.x-w.min.x+1,xe=w.max.y-w.min.y+1,Ae=w.max.z-w.min.z+1,Pe=me.convert(V.format),ke=me.convert(V.type);let Ie;if(V.isData3DTexture)b.setTexture3D(V,0),Ie=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)b.setTexture2DArray(V,0),Ie=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Ue=B.getParameter(B.UNPACK_ROW_LENGTH),ot=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Lt=B.getParameter(B.UNPACK_SKIP_PIXELS),ft=B.getParameter(B.UNPACK_SKIP_ROWS),$t=B.getParameter(B.UNPACK_SKIP_IMAGES),it=H.isCompressedTexture?H.mipmaps[O]:H.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,it.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,it.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,w.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,w.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?B.texSubImage3D(Ie,O,U.x,U.y,U.z,ue,xe,Ae,Pe,ke,it.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ie,O,U.x,U.y,U.z,ue,xe,Ae,Pe,it.data)):B.texSubImage3D(Ie,O,U.x,U.y,U.z,ue,xe,Ae,Pe,ke,it),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ue),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Lt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ft),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$t),O===0&&V.generateMipmaps&&B.generateMipmap(Ie),_e.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,_e.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_r?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===vs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?Li:Ta}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Li?yt:si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Sp extends qa{}Sp.prototype.isWebGL1Renderer=!0;class Sr{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=i}clone(){return new Sr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ln extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ta=new R,ia=new R,na=new rt,tr=new xs,is=new Pn;class ja extends gt{constructor(e=new ut,t=new Ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)ta.fromBufferAttribute(t,n-1),ia.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ta.distanceTo(ia);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(n),is.radius+=s,e.ray.intersectsSphere(is)===!1)return;na.copy(n).invert(),tr.copy(e.ray).applyMatrix4(na);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,u=new R,d=new R,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){const C=g.getX(v),T=g.getX(v+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),tr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),tr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const sa=new R,ra=new R;class wr extends ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+sa.distanceTo(ra);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ya extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oa=new rt,fr=new xs,ns=new Pn,ss=new R;class Ep extends gt{constructor(e=new ut,t=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(n),ns.radius+=s,e.ray.intersectsSphere(ns)===!1)return;oa.copy(n).invert(),fr.copy(e.ray).applyMatrix4(oa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);ss.fromBufferAttribute(u,m),aa(ss,m,l,n,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ss.fromBufferAttribute(u,g),aa(ss,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function aa(r,e,t,i,n,s,o){const a=fr.distanceSqToPoint(r);if(a<t){const l=new R;fr.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class bp extends Pt{constructor(e,t,i,n,s,o,a,l,c){super(e,t,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bn extends ut{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new R,h=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mt extends ut{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(p,2));function x(){const S=new R,C=new R;let T=0;const A=(t-e)/i;for(let I=0;I<=s;I++){const M=[],E=I/s,F=E*(t-e)+e;for(let z=0;z<=n;z++){const X=z/n,P=X*l+a,N=Math.sin(P),G=Math.cos(P);C.x=F*N,C.y=-E*i+m,C.z=F*G,u.push(C.x,C.y,C.z),S.set(N,A,G).normalize(),d.push(S.x,S.y,S.z),p.push(X,1-E),M.push(g++)}_.push(M)}for(let I=0;I<n;I++)for(let M=0;M<s;M++){const E=_[M][I],F=_[M+1][I],z=_[M+1][I+1],X=_[M][I+1];h.push(E,F,X),h.push(F,z,X),T+=6}c.addGroup(f,T,0),f+=T}function v(S){const C=g,T=new Se,A=new R;let I=0;const M=S===!0?e:t,E=S===!0?1:-1;for(let z=1;z<=n;z++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;const F=g;for(let z=0;z<=n;z++){const P=z/n*l+a,N=Math.cos(P),G=Math.sin(P);A.x=M*G,A.y=m*E,A.z=M*N,u.push(A.x,A.y,A.z),d.push(0,E,0),T.x=N*.5+.5,T.y=G*.5*E+.5,p.push(T.x,T.y),g++}for(let z=0;z<n;z++){const X=C+z,P=F+z;S===!0?h.push(P,P+1,X):h.push(P+1,P,X),I+=3}c.addGroup(f,I,S===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class an extends mt{constructor(e=1,t=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new an(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Er extends ut{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(s.slice(),3)),this.setAttribute("uv",new Ke(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new R,S=new R,C=new R;for(let T=0;T<t.length;T+=3)p(t[T+0],v),p(t[T+1],S),p(t[T+2],C),l(v,S,C,x)}function l(x,v,S,C){const T=C+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const M=x.clone().lerp(S,I/T),E=v.clone().lerp(S,I/T),F=T-I;for(let z=0;z<=F;z++)z===0&&I===T?A[I][z]=M:A[I][z]=M.clone().lerp(E,z/F)}for(let I=0;I<T;I++)for(let M=0;M<2*(T-I)-1;M++){const E=Math.floor(M/2);M%2===0?(d(A[I][E+1]),d(A[I+1][E]),d(A[I][E])):(d(A[I][E+1]),d(A[I+1][E+1]),d(A[I+1][E]))}}function c(x){const v=new R;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function h(){const x=new R;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=m(x)/2/Math.PI+.5,C=f(x)/Math.PI+.5;o.push(S,1-C)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],C=o[x+4],T=Math.max(v,S,C),A=Math.min(v,S,C);T>.9&&A<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function p(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const x=new R,v=new R,S=new R,C=new R,T=new Se,A=new Se,I=new Se;for(let M=0,E=0;M<s.length;M+=9,E+=6){x.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),T.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),C.copy(x).add(v).add(S).divideScalar(3);const F=m(C);_(T,E+0,x,F),_(A,E+2,v,F),_(I,E+4,S,F)}}function _(x,v,S,C){C<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.vertices,e.indices,e.radius,e.details)}}class br extends Er{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new br(e.radius,e.detail)}}class ln extends ut{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const x=[],v=f/i;let S=0;f===0&&o===0?S=.5/t:f===i&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(n+T*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(n+T*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-v),x.push(c++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<t;x++){const v=h[f][x+1],S=h[f][x],C=h[f+1][x],T=h[f+1][x+1];(f!==0||o>0)&&p.push(v,S,T),(f!==i-1||l<Math.PI)&&p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tr extends ut{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){const _=g/n*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){const _=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,f=(n+1)*(p-1)+g,x=(n+1)*p+g;o.push(_,m,x),o.push(m,f,x)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Q extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zi extends ri{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tp extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ar extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ir=new rt,la=new R,ca=new R;class Ka{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;la.setFromMatrixPosition(e.matrixWorld),t.position.copy(la),ca.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ca),t.updateMatrixWorld(),ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ha=new rt,Mn=new R,nr=new R;class Ap extends Ka{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Mn.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mn),nr.copy(i.position),nr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(nr),i.updateMatrixWorld(),n.makeTranslation(-Mn.x,-Mn.y,-Mn.z),ha.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha)}}class Cp extends Ar{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rp extends Ka{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ua extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class da extends Ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fa(){return(typeof performance>"u"?Date:performance).now()}class Kt{constructor(e,t,i=0,n=1/0){this.ray=new xs(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return pr(e,this,i,t),i.sort(pa),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)pr(e[n],this,i,t);return i.sort(pa),i}}function pa(r,e){return r.distance-e.distance}function pr(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let s=0,o=n.length;s<o;s++)pr(n[s],e,t,!0)}}class Lp extends wr{constructor(e=10,t=10,i=4473924,n=8947848){i=new be(i),n=new be(n);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===s?i:n;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new ut;h.setAttribute("position",new Ke(l,3)),h.setAttribute("color",new Ke(c,3));const u=new Ln({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const rs=new yi;class Dp extends wr{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(8*3),s=new ut;s.setIndex(new wt(i,1)),s.setAttribute("position",new wt(n,3)),super(s,new Ln({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&rs.setFromObject(this.object),rs.isEmpty())return;const t=rs.min,i=rs.max,n=this.geometry.attributes.position,s=n.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=t.x,s[4]=i.y,s[5]=i.z,s[6]=t.x,s[7]=t.y,s[8]=i.z,s[9]=i.x,s[10]=t.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=t.z,s[15]=t.x,s[16]=i.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=i.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ip extends wr{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new ut;s.setIndex(new wt(i,1)),s.setAttribute("position",new Ke(n,3)),super(s,new Ln({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mr);const Up="/threejs-voxel-firecraft/dist/assets/background-music-by-suno-B4M28EgO.ogg",ms=400;class Np{constructor(e,t,i){this.scene=e,this.itemManager=t,this.objects=[],this.gameMode=i&&i.gameMode?i.gameMode:"survival",this.gameMode==="arena"?this.mapSize=150:this.mapSize=i&&i.mapSize?i.mapSize:ms,this.halfMapSize=this.mapSize/2,this.stormRadius=this.halfMapSize,this.initialStormRadius=this.stormRadius,this._heightFn=this._buildHeightFn(),this.stormEnabled=i&&i.stormEnabled!==!1;const n=i?i.stormTime:180;this.stormShrinkRate=this.stormRadius/n,this.safeZoneCenter=new R(0,0,0),this.init()}init(){this.gameMode==="arena"?this.createArenaEnvironment():this.gameMode==="matrix"?this.createMatrixEnvironment():this.gameMode==="matrix-ai"?this.createMatrixAIEnvironment():this.gameMode==="multiplayer"?this.createMultiplayerEnvironment():this.gameMode==="studio"?this.createStudioEnvironment():this.createEnvironment(),this.gameMode!=="matrix"&&this.gameMode!=="studio"&&this.stormEnabled&&this.createStormVisuals()}createEnvironment(){const e=(p=1)=>(Math.random()-.5)*(this.mapSize*p),t=(p=1)=>{const g=this.halfMapSize-5,_=e(p);return Math.max(-g,Math.min(g,_))},i=(p,g)=>this.getHeightAt?this.getHeightAt(p,g):0,n={trees:70,rocks:50,bushes:50,grass:180,houses:12,vehicles:12,plateaus:4,smallBuildings:5},s=new Ut(this.mapSize,this.mapSize,64,64),o=s.attributes.position;for(let p=0;p<o.count;p++)o.setZ(p,0);o.needsUpdate=!0;const a=s.attributes.position.count;s.setAttribute("color",new wt(new Float32Array(a*3),3));const l=s.attributes.color,c=new be;for(let p=0;p<a;p++){const g=Math.random();g>.8?c.setHex(2600544):g>.4?c.setHex(3066993):c.setHex(5822093),l.setXYZ(p,c.r,c.g,c.b)}const h=new Q({vertexColors:!0,roughness:.8}),u=new k(s,h);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,u.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(u),this.objects.push(u);for(let p=0;p<n.trees;p++){const g=t(.9),_=t(.9),m=i(g,_),f=Math.random()>.5?"Oak":"Pine",x=this.createTree(g,_,f);x.position.y=m,x.userData={gameId:this.generateID(),gameName:`Tree_${f}`,type:"tree"},this.scene.add(x),this.objects.push(x)}const d=[(p,g)=>this.createRock(p,g),(p,g,_)=>this.createRockPillar(p,g,_),(p,g,_)=>this.createFlatBoulder(p,g,_),(p,g,_)=>this.createCrystalShard(p,g,_),(p,g,_)=>this.createStackedRock(p,g,_),(p,g,_)=>this.createBasaltCluster(p,g,_)];for(let p=0;p<n.rocks;p++){const g=t(.9),_=t(.9),m=i(g,_),f=d[p%d.length],x=f(g,_,m);x.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(x),this.objects.push(x)}for(let p=0;p<n.bushes;p++){const g=t(.85),_=t(.85),m=i(g,_),f=this.createBush(g,_);f.position.y=m,f.userData={gameId:this.generateID(),gameName:"Bush"},this.scene.add(f),this.objects.push(f)}for(let p=0;p<n.grass;p++){const g=t(.95),_=t(.95),m=i(g,_),f=this.createGrassClump(g,_);f.position.y=m,this.scene.add(f)}for(let p=0;p<n.houses;p++){const g=t(.75),_=t(.75),m=i(g,_),f=Math.random(),x=f>.7,v=f<.25,S=x?1.55:v?.9:1,C=x?"Mansion":v?"Cabin":"House",T=x?"large":v?"small":"medium",A=this.createHouse(g,_,{scale:S});A.position.y=m,A.userData={gameId:this.generateID(),gameName:C,type:"house",size:T},this.scene.add(A),this.objects.push(A),this.itemManager.spawnLootInHouse(g,1,_)}for(let p=0;p<n.vehicles;p++){const g=t(.8),_=t(.8),m=i(g,_),f=Math.random()>.6?"truck":"car",x=this.createVehicle(g,_,f);x.position.y=m,x.userData={...x.userData||{},gameId:this.generateID(),gameName:`Vehicle_${f}`,type:"vehicle"},this.scene.add(x),this.objects.push(x)}for(let p=0;p<n.plateaus;p++){const g=t(.6),_=t(.6),m=6+Math.random()*6,f=8+Math.random()*6,x=i(g,_),v=this.createPlateau(g,_,f,m,x);v.userData={gameId:this.generateID(),gameName:"Plateau",type:"house"},this.scene.add(v),this.objects.push(v)}for(let p=0;p<n.smallBuildings;p++){const g=t(.7),_=t(.7),m=i(g,_),f=this.createSmallBuilding(g,_);f.position.y=m,f.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"},this.scene.add(f),this.objects.push(f)}}createArenaEnvironment(){const e=(o=1)=>(Math.random()-.5)*(this.mapSize*o),t=(o=1)=>{const a=this.halfMapSize-5,l=e(o);return Math.max(-a,Math.min(a,l))},i=new Ut(this.mapSize,this.mapSize,1,1),n=new Zi({color:3885915,flatShading:!0}),s=new k(i,n);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(s),this.objects.push(s);for(let o=0;o<30;o++){const a=t(.8),l=t(.8),c=1+Math.random()*3,h=1+Math.random()*2,u=1+Math.random()*2,d=new ie(h,c,u),p=new Zi({color:5596791,flatShading:!0}),g=new k(d,p);g.position.set(a,c/2,l),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=t(.7),l=t(.7),c=6+Math.random()*3,h=3+Math.random()*2,u=3,d=new ie(u,h,c),p=new Zi({color:4937059,flatShading:!0}),g=new k(d,p);g.position.set(a,h/2,l),g.rotation.x=-Math.atan(h/c),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Ramp",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=t(.6),l=t(.6),c=this.createArenaBunker(a,l);c.userData={gameId:this.generateID(),gameName:"Bunker",type:"house"},this.scene.add(c),this.objects.push(c)}for(let o=0;o<20;o++){const a=t(.8),l=t(.8),c=this.createFlatBoulder(a,l,0);c.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(c),this.objects.push(c)}this.itemManager.spawnLootInHouse(0,0,0)}createMatrixEnvironment(){const e=new Ut(this.mapSize,this.mapSize,128,128),t=e.attributes.position.count;e.setAttribute("color",new wt(new Float32Array(t*3),3));const i=e.attributes.color,n=new be;for(let d=0;d<t;d++){const p=Math.random();p>.8?n.setHex(2600544):p>.4?n.setHex(3066993):n.setHex(5822093),i.setXYZ(d,n.r,n.g,n.b)}const s=new Q({vertexColors:!0,roughness:.8}),o=new k(e,s);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(o),this.objects.push(o);const a=new ie(20,6,.5),l=new Q({color:15987699,roughness:.9}),c=new k(a,l);c.position.set(0,3,-15),c.castShadow=!0,c.receiveShadow=!0,c.userData={gameId:this.generateID(),gameName:"Wall",type:"house"},this.scene.add(c),this.objects.push(c);const h=this.createTree(-12,-15,"Oak"),u=this.createTree(12,-15,"Pine");this.scene.add(h),this.scene.add(u),this.objects.push(h),this.objects.push(u)}createStudioEnvironment(){const e=new Ut(this.mapSize,this.mapSize,128,128),t=this.buildVoxelGroundMaterial(),i=new k(e,t);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(i),this.objects.push(i);const n=12;for(let s=0;s<n;s++){const o=(Math.random()-.5)*this.mapSize*.6,a=(Math.random()-.5)*this.mapSize*.6,l=this.createVoxelCloud(o,a);this.scene.add(l)}}createMatrixAIEnvironment(){const e=this.mapSize,t=80,i=new Lp(e,t,6737151,6737151);i.material.opacity=.2,i.material.transparent=!0,this.scene.add(i);const n=new Ut(e,e,1,1),s=new _i({visible:!1}),o=new k(n,s);o.rotation.x=-Math.PI/2,o.userData={gameId:this.generateID(),gameName:"Ground",type:"ground"},this.scene.add(o),this.objects.push(o)}createMultiplayerEnvironment(){const e=new Ut(this.mapSize,this.mapSize,128,128),t=this.buildVoxelGroundMaterial(),i=new k(e,t);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(i),this.objects.push(i),this.stormEnabled=!1}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}createTree(e,t,i){const n=new Xe;n.position.set(e,0,t);const s=.8+Math.random()*.4;n.scale.set(s,s,s);const o=3.5+Math.random()*1.5,a=new mt(.45,.6,o,8),l=new Q({color:7028518,roughness:1}),c=new k(a,l);if(c.position.y=o/2,c.castShadow=!0,c.receiveShadow=!0,n.add(c),this.objects.push(c),Math.random()>.7){const u=new ie(.15,.15,.05),d=new Q({color:5911328}),p=new k(u,d);p.position.set(.25,c.position.y+.6,.45),p.rotation.z=.4,n.add(p)}const h=new Q({color:i==="Oak"?3050327:1728040,roughness:.9});if(i==="Oak"){const u=6+Math.floor(Math.random()*4);for(let d=0;d<u;d++){const p=1.2+Math.random()*1.6,g=new ln(p,8,6),_=new k(g,h);_.position.y=c.position.y+.8+Math.random()*1.6,_.position.x=(Math.random()-.5)*1.5,_.position.z=(Math.random()-.5)*1.5,_.castShadow=!1,_.receiveShadow=!1,n.add(_)}}else{const u=3+Math.floor(Math.random()*3);for(let g=0;g<u;g++){const _=1.8-g*.4+Math.random()*.2,m=new an(_,1.2+Math.random()*.6,8),f=new k(m,h);f.position.y=c.position.y+.6+g*.9,f.position.x=(Math.random()-.5)*.2,f.position.z=(Math.random()-.5)*.2,f.castShadow=!1,f.receiveShadow=!1,n.add(f)}const d=new ln(.25,6,6),p=new k(d,h);p.position.y=c.position.y+u*.9+.3,p.castShadow=!1,p.receiveShadow=!1,n.add(p)}if(Math.random()>.3){const u=new Ut(.8,.8),d=new Q({color:3066993,side:kt}),p=new k(u,d);p.rotation.x=-Math.PI/2,p.position.y=.01,p.position.x=(Math.random()-.5)*.5,p.position.z=(Math.random()-.5)*.5,p.receiveShadow=!1,n.add(p)}return n}createVoxelCloud(e,t){const i=new Xe,n=new ie(3,2,3),s=new Tp({color:15922943,transparent:!0,opacity:.9}),o=8+Math.floor(Math.random()*6);for(let a=0;a<o;a++){const l=(Math.random()-.5)*12,c=(Math.random()-.5)*12,h=(Math.random()-.5)*2,u=new k(n,s);u.position.set(l,h,c),u.castShadow=!1,u.receiveShadow=!1,i.add(u)}return i.position.set(e,30+Math.random()*8,t),i}buildVoxelGroundMaterial(){const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d"),n="#4caf50",s="#66bb6a",o="#8d6e63",a=8;for(let u=0;u<64;u+=a)for(let d=0;d<64;d+=a){const g=Math.random()>.85?o:(d/a+u/a)%2===0?n:s;i.fillStyle=g,i.fillRect(d,u,a,a)}const l=i.getImageData(0,0,64,64),c=l.data;for(let u=0;u<c.length;u+=4){const d=Math.random()*30-15;c[u]=Math.min(255,Math.max(0,c[u]+d)),c[u+1]=Math.min(255,Math.max(0,c[u+1]+d)),c[u+2]=Math.min(255,Math.max(0,c[u+2]+d))}i.putImageData(l,0,0);const h=new bp(t);return h.wrapS=h.wrapT=ls,h.repeat.set(this.mapSize/10,this.mapSize/10),h.magFilter=St,h.minFilter=Bl,new Q({map:h,roughness:1,metalness:0})}createRock(e,t,i=0){const n=.6+Math.random()*1.4,s=new br(n,1),o=s.attributes.position;for(let c=0;c<o.count;c++){const h=o.getX(c),u=o.getY(c),d=o.getZ(c),p=(Math.random()-.5)*n*.15;o.setXYZ(c,h+p,u+p*.5,d+(Math.random()-.5)*n*.15)}s.computeVertexNormals();const a=new Q({color:8359053,roughness:1}),l=new k(s,a);if(l.position.set(e,i+n/2,t),l.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),l.castShadow=!0,l.receiveShadow=!0,Math.random()>.6){const c=new k(new bn(n*.4,6),new Q({color:3066993}));c.rotation.x=-Math.PI/2,c.position.y=.01,l.add(c)}return this._tagStaticCollider(l,"rock"),l}createRockPillar(e,t,i=0){const n=2.5+Math.random()*2.5,s=.4+Math.random()*.3,o=s+.5,a=new mt(s,o,n,8,1),l=new Q({color:7171437,roughness:1}),c=new k(a,l);return c.position.set(e,i+n/2,t),c.castShadow=!0,c.receiveShadow=!0,this._tagStaticCollider(c,"rock"),c}createFlatBoulder(e,t,i=0){const n=2+Math.random()*2,s=.8+Math.random()*.6,o=1.5+Math.random()*1,a=new ie(n,s,o),l=new Q({color:9145227,roughness:1}),c=new k(a,l);return c.position.set(e,i+s/2,t),c.rotation.y=Math.random()*Math.PI,c.castShadow=!0,c.receiveShadow=!0,this._tagStaticCollider(c,"rock"),c}createCrystalShard(e,t,i=0){const n=2+Math.random()*2,s=new an(.6+Math.random()*.4,n,6),o=new Q({color:10181046,roughness:.7,metalness:.2,emissive:4008804,emissiveIntensity:.25}),a=new k(s,o);return a.position.set(e,i+n/2,t),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,a}createStackedRock(e,t,i=0){const n=new Xe,s=this.createRock(0,0,0);n.add(s);const o=this.createRock(0,0);o.scale.set(.6,.6,.6),o.position.set(.3,o.position.y+.9,-.2),n.add(o);const a=this.createRock(0,0);return a.scale.set(.4,.4,.4),a.position.set(-.2,a.position.y+1.5,.3),n.add(a),n.position.set(e,i,t),n.traverse(l=>{l.castShadow=!0,l.receiveShadow=!0}),this._tagStaticCollider(n,"rock"),n}createBasaltCluster(e,t,i=0){const n=new Xe,s=3+Math.floor(Math.random()*4);for(let o=0;o<s;o++){const a=1+Math.random()*2,l=new mt(.35,.4,a,6),c=new Q({color:4934475,roughness:.9}),h=new k(l,c);h.position.set((Math.random()-.5)*.9,a/2,(Math.random()-.5)*.9),h.castShadow=!0,h.receiveShadow=!0,n.add(h)}return n.position.set(e,i,t),this._tagStaticCollider(n,"rock"),n}createBush(e,t){const i=new Xe;i.position.set(e,0,t);const n=new Q({color:2924588,roughness:1}),s=2+Math.floor(Math.random()*3);for(let o=0;o<s;o++){const a=1.2+Math.random()*1,l=new k(new ln(a,6,6),n);l.position.set((Math.random()-.5)*1.2,a*.65,(Math.random()-.5)*1.2),l.castShadow=!0,i.add(l)}return i}createVehicle(e,t,i="car"){const n=new Xe;n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI*2;const s=i==="truck"?.45:.35,o=i==="truck"?.4:.3;if(n.userData=n.userData||{},n.userData={vehicleType:i,wheelRadius:s,wheelCenterY:o,groundClearance:s-o,wheels:[]},i==="car"){const a=[1668818,15921906,1118481,9116186,15022389,15844367],l=new Q({color:a[Math.floor(Math.random()*a.length)],metalness:.45,roughness:.38}),c=new Q({color:16119285,metalness:.2,roughness:.6}),h=new Q({color:2042416,roughness:.8}),u=new k(new ie(2.2,.9,4.2),l);u.position.y=.85,u.castShadow=!0,n.add(u);const d=new k(new ie(2.25,.15,4.25),c);d.position.set(0,.9,0),n.add(d);const p=new k(new ie(1.8,.9,2.1),h);p.position.set(0,1.55,-.2),p.castShadow=!0,n.add(p);const g=new Q({color:1710618,transparent:!0,opacity:.7,metalness:.2,roughness:.1}),_=new k(new ie(1.6,.6,.08),g);_.position.set(0,1.55,1),n.add(_);const m=new k(new ie(1.6,.6,.08),g);m.position.set(0,1.55,-1.5),n.add(m);const f=new k(new ie(2.1,.25,.35),h);f.position.set(0,.55,2.1),n.add(f);const x=f.clone();x.position.z=-2.1,n.add(x);const v=new Q({color:855309,roughness:.9}),S=[14673130,789516,16777215];[[-.95,o,1.35],[.95,o,1.35],[-.95,o,-1.35],[.95,o,-1.35]].forEach(z=>{const X=new k(new mt(s,s,.35,14,1,!1),v);X.rotation.z=Math.PI/2,X.position.set(...z),X.castShadow=!0;const P=new k(new ie(.35,.12,.14),new Q({color:273}));P.position.set(0,0,0),P.rotation.y=Math.PI/8,X.add(P);const N=new k(new mt(s*.55,s*.55,.18,12),new Q({color:S[Math.floor(Math.random()*S.length)],roughness:.45,metalness:.65}));N.rotation.z=Math.PI/2,N.position.set(0,0,0),X.add(N);const G=new k(new ie(.05,s*1.2,.02),new Q({color:16777215,emissive:8947848,emissiveIntensity:.6}));G.position.set(0,0,.18),X.add(G),n.add(X),n.userData.wheels.push(X)});const T=new Q({color:16777130,emissive:16774557,emissiveIntensity:.8}),A=new Q({color:16732754,emissive:16732754,emissiveIntensity:.6}),I=new k(new ie(.25,.2,.1),T);I.position.set(-.75,.8,2.15),n.add(I);const M=I.clone();M.position.x=.75,n.add(M);const E=new k(new ie(.25,.2,.1),A);E.position.set(-.75,.8,-2.15),n.add(E);const F=E.clone();F.position.x=.75,n.add(F)}else if(i==="truck"){const a=[1981023,15921906,1118481,9116186,15022389,15844367],l=new Q({color:a[Math.floor(Math.random()*a.length)],metalness:.55,roughness:.42}),c=new Q({color:16119285,roughness:.7}),h=new Q({color:2042416,roughness:.8}),u=new k(new ie(2.6,1.1,5.2),l);u.position.y=1.05,u.castShadow=!0,n.add(u);const d=new k(new ie(2.65,.18,5.25),c);d.position.set(0,1.1,0),n.add(d);const p=new k(new ie(2.3,1.3,2.2),h);p.position.set(0,2.05,1.2),p.castShadow=!0,n.add(p);const g=new k(new ie(2.35,.85,2.6),new Q({color:8359053}));g.position.set(0,1.55,-1.55),g.castShadow=!0,n.add(g);const _=new Q({color:1710618,transparent:!0,opacity:.7}),m=new k(new ie(2,.7,.08),_);m.position.set(0,2.05,2.05),n.add(m);const f=new k(new ie(.08,.6,1.2),_);f.position.set(-1.15,2.05,1.2),n.add(f);const x=f.clone();x.position.x=1.15,n.add(x);const v=new Q({color:855309}),S=[14673130,789516,16777215];[[-1.1,.4,1.8],[1.1,.4,1.8],[-1.1,.4,-1.5],[1.1,.4,-1.5],[-1.1,.4,-2.2],[1.1,.4,-2.2]].forEach(z=>{const X=new k(new mt(s,s,.45,14,1,!1),v);X.rotation.z=Math.PI/2,X.position.set(...z),X.castShadow=!0;const P=new k(new ie(.4,.14,.16),new Q({color:273}));P.rotation.y=Math.PI/8,X.add(P);const N=new k(new mt(s*.55,s*.55,.2,12),new Q({color:S[Math.floor(Math.random()*S.length)],roughness:.45,metalness:.65}));N.rotation.z=Math.PI/2,N.position.set(0,0,0),X.add(N);const G=new k(new ie(.06,s*1.3,.025),new Q({color:16777215,emissive:8947848,emissiveIntensity:.6}));G.position.set(0,0,.2),X.add(G),n.add(X),n.userData.wheels.push(X)});const T=new Q({color:16776960,emissive:16776960,emissiveIntensity:.6}),A=new Q({color:16732754,emissive:16732754,emissiveIntensity:.5}),I=new k(new ie(.28,.22,.12),T);I.position.set(-.95,1.85,2.35),n.add(I);const M=I.clone();M.position.x=.95,n.add(M);const E=new k(new ie(.28,.22,.12),A);E.position.set(-.95,1.2,-2.55),n.add(E);const F=E.clone();F.position.x=.95,n.add(F)}return n}createGrassClump(e,t){const i=new Xe;i.position.set(e,0,t);const n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const o=.2+Math.random()*.6,a=new Ut(.05,o),l=new Q({color:5620331,side:kt}),c=new k(a,l);c.position.y=o/2,c.rotation.y=Math.random()*Math.PI,c.rotation.z=(Math.random()-.5)*.6,c.receiveShadow=!0,i.add(c)}return i}createHouse(e,t,{scale:i=1}={}){const n=new Xe;n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI*2;const s=new Q({color:9807270}),o=new Q({color:12597547});[{w:6,h:4,d:.5,x:0,y:2,z:-3},{w:.5,h:4,d:6,x:-3,y:2,z:0},{w:.5,h:4,d:6,x:3,y:2,z:0},{w:2,h:4,d:.5,x:-2,y:2,z:3},{w:2,h:4,d:.5,x:2,y:2,z:3},{w:2,h:1,d:.5,x:0,y:3.5,z:3}].forEach(g=>{const _=new k(new ie(g.w,g.h,g.d),s);_.position.set(g.x,g.y,g.z),_.castShadow=!0,_.receiveShadow=!0,n.add(_),this.objects.push(_)});const l=new k(new an(5,2,4),o);l.position.y=5,l.rotation.y=Math.PI/4,l.castShadow=!0,n.add(l);const c=new Q({color:5057307}),h=new k(new ie(1,2.2,.1),c);h.position.set(0,1.1,3.26),n.add(h);const u=new Q({color:8962303,metalness:.1,roughness:.2,transparent:!0,opacity:.8}),d=new k(new ie(1,1,.05),u);d.position.set(-2,2.2,-3.26);const p=d.clone();return p.position.set(2,2.2,-3.26),n.add(d),n.add(p),n.scale.setScalar(i),n}createPlateau(e,t,i=10,n=8,s=0){const o=new Xe,a=new Q({color:8355711,roughness:1}),l=new k(new mt(i,i*1.05,n,16,1),a);l.position.set(0,n/2,0),l.castShadow=!0,l.receiveShadow=!0,o.add(l);const c=i*1.4,h=n,u=i*.8,d=new ie(u,h,c),p=new k(d,new Q({color:9342606,roughness:1}));p.castShadow=!0,p.receiveShadow=!0;const g=Math.atan(h/c);p.rotation.x=-g,p.position.set(0,h/2,i),p.userData={type:"house"},o.add(p);const _=new ie(u,.2,c),m=new k(_,new Q({color:7105644}));return m.position.set(0,h,i),m.rotation.x=p.rotation.x,m.castShadow=!0,o.add(m),o.position.set(e,s,t),o.userData={type:"house"},o}createSmallBuilding(e,t){const i=new Xe;i.position.set(e,0,t),i.rotation.y=Math.random()*Math.PI*2;const n=new Q({color:8359053}),s=new Q({color:12436423}),o=8,a=8,l=6,c=.35,h=2.2,u=o/2,d=a/2,p=new k(new ie(o,l,c),n);p.position.set(0,l/2,-d);const g=new k(new ie(c,l,a),n);g.position.set(-u,l/2,0);const _=g.clone();_.position.x=u;const m=new k(new ie((o-h)/2,l,c),n);m.position.set(-2.55,l/2,d);const f=m.clone();f.position.x=h/2+(o-h)/4,[p,g,_,m,f].forEach(M=>{M.castShadow=!0,M.receiveShadow=!0,i.add(M)});const x=new k(new ie(o-.4,.3,a-.4),s);x.position.y=.15,x.receiveShadow=!0,i.add(x);const v=new k(new ie(o-.4,.3,a-.4),s);v.position.y=3.4,v.receiveShadow=!0,i.add(v);const S=v.position.y,C=10,T=new ie(3,S,C),A=new k(T,s);A.position.set(0,S/2,d+C/2),A.rotation.x=-Math.atan(S/C),A.castShadow=!0,A.receiveShadow=!0,i.add(A);const I=new k(new ie(o+.4,.4,a+.4),new Q({color:9807270}));return I.position.y=l+.2,I.castShadow=!0,i.add(I),i}spawnPrefab(e,t,i,n={}){const s=this.getHeightAt&&typeof this.getHeightAt=="function"?this.getHeightAt(t,i):0;let o=null;switch(e){case"house":{o=this.createHouse(t,i,{scale:1}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"House",type:"house"};break}case"mansion":{o=this.createHouse(t,i,{scale:1.6}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Mansion",type:"house",size:"large"};break}case"cabin":{o=this.createHouse(t,i,{scale:.85}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Cabin",type:"house",size:"small"};break}case"smallBuilding":{o=this.createSmallBuilding(t,i),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"};break}case"plateau":{const a=this.createPlateau(t,i,10+Math.random()*6,8+Math.random()*6,s);a.userData={gameId:this.generateID(),gameName:"Plateau",type:"house",size:"large"},o=a;break}case"rock":{o=this.createRock(t,i),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"};break}case"tree":{const a=n.variant||(Math.random()>.5?"Oak":"Pine");o=this.createTree(t,i,a),o.position.y=s,o.userData={gameId:this.generateID(),gameName:`Tree_${a}`,type:"tree"};break}case"vehicle":{const a=n.variant||(Math.random()>.6?"truck":"car");o=this.createVehicle(t,i,a),o.position.y=s,o.userData={gameId:this.generateID(),gameName:`Vehicle_${a}`,type:"vehicle"};break}case"crate":{const a=new k(new ie(2,2,2),new Q({color:9342606,roughness:.9}));a.position.set(t,s+1,i),a.castShadow=!0,a.receiveShadow=!0,a.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},o=a;break}}return o&&(this.scene.add(o),this.objects.push(o)),o}createArenaBunker(e,t){const i=new Xe;i.position.set(e,0,t),i.rotation.y=Math.random()*Math.PI*2;const n=new Zi({color:4937059,flatShading:!0}),s=new Zi({color:6253691,flatShading:!0}),o=new k(new ie(6,2.5,6),n);o.position.y=1.25,o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=new k(new ie(6.2,.3,6.2),s);a.position.y=2.65,a.castShadow=!0,i.add(a);const l=new k(new ie(1.2,1.8,.2),new Zi({color:9280168,flatShading:!0,transparent:!0,opacity:.2}));l.position.set(0,.9,3.1),i.add(l);const c=new ie(2,1.2,4),h=new k(c,s);return h.position.set(-2.5,.6,-1),h.rotation.x=-Math.atan(1.2/4),h.castShadow=!0,h.receiveShadow=!0,h.userData={type:"house"},i.add(h),i}createStormVisuals(){if(this.gameMode==="matrix")return;const e=new mt(this.stormRadius,this.stormRadius,50,32,1,!0),t=new _i({color:9323693,transparent:!0,opacity:.3,side:kt});this.stormMesh=new k(e,t),this.stormMesh.position.y=25,this.scene.add(this.stormMesh)}createTarget(e,t){const i=new Xe;i.position.set(e,0,t);const n=new k(new mt(.05,.05,2,6),new Q({color:8947848}));n.position.y=1,i.add(n);const s=new bn(.8,24),o=new Q({color:16777215}),a=new k(s,o);a.position.set(0,2,0),a.rotation.y=Math.PI,i.add(a);const l=new Q({color:16729156}),c=new Q({color:15844367}),h=new Q({color:3447003}),u=(p,g)=>{const _=new k(new Tr(p,.02,6,24),g);return _.rotation.x=Math.PI/2,_.position.y=2,_};i.add(u(.75,h)),i.add(u(.55,l)),i.add(u(.35,c));const d=new k(new bn(.1,12),new Q({color:0}));return d.position.set(0,2.01,0),d.rotation.y=Math.PI,i.add(d),i.userData={gameId:this.generateID(),gameName:"Target",type:"house"},i}update(e,t){if(this.gameMode==="matrix"||this.gameMode==="studio"||this.gameMode==="matrix-ai")return{inStorm:!1};if(this.stormEnabled===!1)return{inStorm:!1};if(this.stormRadius>10){this.stormRadius-=this.stormShrinkRate*e;const n=this.initialStormRadius?this.stormRadius/this.initialStormRadius:1;this.stormMesh&&this.stormMesh.scale&&this.stormMesh.scale.set(n,1,n)}return{inStorm:Math.sqrt(t.x*t.x+t.z*t.z)>this.stormRadius}}_buildHeightFn(){return()=>0}_tagStaticCollider(e,t=null){if(!e)return;e.updateWorldMatrix(!0,!0);const i=new yi().setFromObject(e);e.userData=e.userData||{},t&&!e.userData.type&&(e.userData.type=t),e.userData.colliderBox=i,e.userData.colliderType="solid"}getHeightAt(e,t){return this._heightFn?this._heightFn(e,t):0}}const Bp="modulepreload",Fp=function(r){return"/threejs-voxel-firecraft/dist/"+r},ma={},Op=function(e,t,i){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(t.map(l=>{if(l=Fp(l),l in ma)return;ma[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Bp,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Ji=new pn(0,0,0,"YXZ"),Qi=new R,kp={type:"change"},zp={type:"lock"},Hp={type:"unlock"},ga=Math.PI/2;class Gp extends Ui{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Vp.bind(this),this._onPointerlockChange=Wp.bind(this),this._onPointerlockError=Xp.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;Qi.setFromMatrixColumn(t.matrix,0),Qi.crossVectors(t.up,Qi),t.position.addScaledVector(Qi,e)}moveRight(e){const t=this.camera;Qi.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Qi,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Vp(r){if(this.isLocked===!1)return;const e=r.movementX||r.mozMovementX||r.webkitMovementX||0,t=r.movementY||r.mozMovementY||r.webkitMovementY||0,i=this.camera;Ji.setFromQuaternion(i.quaternion),Ji.y-=e*.002*this.pointerSpeed,Ji.x-=t*.002*this.pointerSpeed,Ji.x=Math.max(ga-this.maxPolarAngle,Math.min(ga-this.minPolarAngle,Ji.x)),i.quaternion.setFromEuler(Ji),this.dispatchEvent(kp)}function Wp(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(zp),this.isLocked=!0):(this.dispatchEvent(Hp),this.isLocked=!1)}function Xp(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const qp="/threejs-voxel-firecraft/dist/assets/mixkit-game-gun-shot-D1lu3gfh.ogg",jp="/threejs-voxel-firecraft/dist/assets/smack-BAv2er9i.ogg",Yp="/threejs-voxel-firecraft/dist/assets/ugh-CPf3Qqe6.ogg",Kp="/threejs-voxel-firecraft/dist/assets/mixkit-footsteps-on-tall-grass-532-DkmduvPT.ogg",$p="/threejs-voxel-firecraft/dist/assets/mixkit-car-door-slam-xN3cwxzE.wav";class Zp{constructor(e,t,i,n={}){this.camera=e,this.scene=t,this.worldObjects=i,this.world=null,this.hud=null,this.gameMode=n.gameMode||"survival",this.showTracers=n.showTracers===!0,this.backpack=null,this.backpackColor=null,this.placedBlocks=[],this.blockSize=1,this.minBlockSize=.5,this.maxBlockSize=2,this.previewBlock=null,this.isFloating=!1,this.selectedBlock=null,this.selectedBlockHelper=null,this.health=100,this.shield=100,this.isDead=!1,this.stamina=100,this.punchCount=0,this.isTired=!1,this.velocity=new R,this.direction=new R,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.canJump=!1,this.speed=42,this.jumpHeight=30,this.gravity=250,this.distanceTraveled=0,this.previousPosition=new R,this.allWeapons=[{name:"Pistol",ammo:12,maxAmmo:60,magazineSize:12,currentMag:12,damage:20,cooldown:.5,lastShot:0,reloadTime:1.5,range:50},{name:"Fist",ammo:1/0,maxAmmo:1/0,magazineSize:1/0,currentMag:1/0,damage:10,cooldown:.2,lastShot:0,reloadTime:0,range:3},{name:"Rifle",ammo:30,maxAmmo:120,magazineSize:30,currentMag:30,damage:25,cooldown:.15,lastShot:0,reloadTime:2,range:120,zoomFov:30},{name:"Sniper",ammo:5,maxAmmo:20,magazineSize:5,currentMag:5,damage:100,cooldown:2,lastShot:0,reloadTime:3,range:400,zoomFov:12},{name:"SMG",ammo:40,maxAmmo:200,magazineSize:40,currentMag:40,damage:15,cooldown:.08,lastShot:0,reloadTime:1.8,range:80},{name:"Shotgun",ammo:6,maxAmmo:24,magazineSize:6,currentMag:6,damage:60,cooldown:1,lastShot:0,reloadTime:2.5,range:25},{name:"DMR",ammo:12,maxAmmo:48,magazineSize:12,currentMag:12,damage:45,cooldown:.35,lastShot:0,reloadTime:2.2,range:200,zoomFov:18}],this.weapons=[this.allWeapons[1],this.allWeapons[0]],this.currentWeaponIndex=0,this.isReloading=!1,this.controls=new Gp(e,document.body),document.addEventListener("pointerlockerror",s=>{try{s.stopImmediatePropagation()}catch{}console.warn("Pointer lock request failed or unavailable in this environment.")},!0),this.allowTouchMovement=!1,this._touchYaw=0,this._touchPitch=0,document.addEventListener("fullscreenchange",()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}),this.createPlayerMesh(),this.cameraMode=n.cameraMode||"TPS",this.fpsCameraOffset=new R(0,1.6,0),this.tpsCameraOffset=new R(1,1.8,3.4),this.initControls(),this.sfxVolume=.7,this.sfxVolume=.7,this.gunshotBuffer=null,this.reloadBuffer=null,this.smackBuffer=null,this.ughBuffer=null,this.footstepsBuffer=null,this._footstepsSource=null,this._footstepsGain=null,this.vehicleDoorBuffer=null,this.vehicleDriveBuffer=null,this._vehicleDriveSource=null,this._vehicleDriveGain=null,this._lastVehicleDriveActive=!1,this.enableVehicleDriveSound=!1,this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer=null,this._lastFootstepsActive=!1,this.isCrouching=!1,this.crouchHeight=.8,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.vehicleBaseMaxSpeed=70,this.vehicleBoostMax=45,this.vehicleAccel=70,this.vehicleTurnSpeed=1.8,this.vehicleFriction=2.8,this.vehicleAccelHold=0,this.vehiclePromptEl=document.getElementById("interaction-prompt"),this.nearVehicle=null,this.vehicleFuel=0,this.vehicleFuelCapacity=0,this.vehicleDistance=0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=0,this.vehicleEfficiencyKmPerL=10,this.vehicleIdleLph=.4,this.vehicleThrottleLph=.8,this._vehicleStateCache=null,this.vehicleTurbo=!1,this.currentSpeed=0,this.vehicleHud={root:document.getElementById("vehicle-hud"),speed:document.getElementById("vehicle-speed"),fuelBar:document.getElementById("vehicle-fuel-bar"),fuelFill:document.getElementById("vehicle-fuel-fill"),fuelText:document.getElementById("vehicle-fuel-text"),distance:document.getElementById("vehicle-distance"),efficiency:document.getElementById("vehicle-efficiency"),range:document.getElementById("vehicle-range")},this.studioSelected=null,this._studioRaycaster=new Kt,this.studioSelectionHelper=null,this.selectionInfo=document.getElementById("selection-info"),this.controls.enabled=this.gameMode!=="studio";try{const s=window.AudioContext||window.webkitAudioContext;s&&(this.audioCtx=new s,fetch(qp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.gunshotBuffer=o}).catch(o=>console.warn("Error loading gunshot SFX:",o)),Op(()=>import("./mixkit-shotgun-recharge-CcrH8C2K.js"),[]).then(o=>fetch(o.default)).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.reloadBuffer=o}).catch(o=>console.warn("Error loading reload SFX:",o)),fetch(jp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.smackBuffer=o}).catch(o=>console.warn("Error loading smack SFX:",o)),fetch(Yp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.ughBuffer=o}).catch(o=>console.warn("Error loading hurt SFX:",o)),fetch(Kp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.footstepsBuffer=o}).catch(o=>console.warn("Error loading footsteps SFX:",o)),fetch($p).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.vehicleDoorBuffer=o}).catch(o=>console.warn("Error loading vehicle door SFX:",o)))}catch(s){console.warn("Web Audio API not supported:",s)}}separateFromRemotePlayers(){if(!this.multiplayerClient||!this.multiplayerClient.others||this.multiplayerClient.others.size===0)return;const t=.6*2,i=this.mesh.position;this.multiplayerClient.others.forEach(n=>{if(!n||!n.position||n.userData&&n.userData.dead)return;const s=i.x-n.position.x,o=i.z-n.position.z,a=s*s+o*o;if(a<t*t&&a>1e-4){const l=Math.sqrt(a),c=(t-l)*.5,h=s/l,u=o/l;i.x+=h*c,i.z+=u*c}})}placeBlock(){if(!this.world)return;const e=this.getBlockTarget(),t=e.size,i=new ie(t,t,t),n=new Q({color:11887901,roughness:.9}),s=new k(i,n);s.position.copy(e.position),s.castShadow=!0,s.receiveShadow=!0,s.userData={type:"block",size:t,gameId:this.world.generateID?this.world.generateID():void 0,gameName:"Block"},this.scene.add(s),this.world.objects&&this.world.objects.push(s),this.placedBlocks.push(s)}createPlayerMesh(){this.mesh=new Xe,this.scene.add(this.mesh);const e=this.playerColor||3447003,t=new Q({color:e}),i=new Q({color:16764074}),n=new Q({color:2899536});this.head=new k(new ie(.5,.5,.5),i),this.head.position.y=1.75,this.mesh.add(this.head);const s=new Q({color:15158332}),o=new k(new ie(.52,.1,.52),s);o.position.set(0,.3,0),this.head.add(o);const a=new k(new ie(.52,.02,.35),s);a.position.set(0,.22,.35),this.head.add(a);const l=new Q({color:0}),c=new Q({color:1710618,transparent:!0,opacity:.7,metalness:.8,roughness:.2}),h=new k(new ie(.18,.12,.02),c);h.position.set(-.12,.05,.26),this.head.add(h);const u=new k(new ie(.18,.12,.02),c);u.position.set(.12,.05,.26),this.head.add(u);const d=new k(new ie(.08,.02,.02),l);d.position.set(0,.05,.26),this.head.add(d);const p=new k(new ie(.02,.02,.3),l);p.position.set(-.21,.05,.1),this.head.add(p);const g=new k(new ie(.02,.02,.3),l);g.position.set(.21,.05,.1),this.head.add(g);const _=new k(new ie(.6,.8,.3),t);_.position.y=1.1,this.mesh.add(_);const m=new ie(.2,.8,.2);m.translate(0,-.3,0),this.leftArmPivot=new Xe,this.leftArmPivot.name="leftArmPivot",this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot);const f=new k(m,i);this.leftArmPivot.add(f),this.rightArmPivot=new Xe,this.rightArmPivot.name="rightArmPivot",this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot);const x=new k(m,i);this.rightArmPivot.add(x),this.weaponModels={};const v=new Xe,S=new k(new ie(.12,.12,.35),new Q({color:1710618,metalness:.8,roughness:.3}));S.position.set(0,-.28,.2);const C=new k(new ie(.06,.06,.15),new Q({color:657930,metalness:.9,roughness:.2}));C.position.set(0,-.28,.4);const T=new k(new ie(.1,.25,.12),new Q({color:2894892}));T.position.set(0,-.42,.15);const A=new k(new ie(.03,.05,.03),new Q({color:1710618}));A.position.set(0,-.35,.18),v.add(S,C,T,A),this.rightArmPivot.add(v),this.weaponModels.Pistol=v;const I=new Xe,M=new k(new ie(.08,.08,.9),new Q({color:1710618,metalness:.8,roughness:.3}));M.position.set(0,-.28,.45);const E=new k(new ie(.12,.14,.4),new Q({color:2894892}));E.position.set(0,-.3,.2);const F=new k(new ie(.1,.22,.12),new Q({color:2894892}));F.position.set(0,-.44,.15);const z=new k(new ie(.1,.12,.25),new Q({color:3815994}));z.position.set(0,-.28,-.1);const X=new k(new ie(.08,.25,.1),new Q({color:1710618}));X.position.set(0,-.5,.2),I.add(M,E,F,z,X),this.rightArmPivot.add(I),this.weaponModels.Rifle=I;const P=new Xe,N=new k(new ie(.08,.08,1.3),new Q({color:1727514,metalness:.6,roughness:.4}));N.position.set(0,-.28,.65);const G=new k(new ie(.14,.16,.5),new Q({color:2969622}));G.position.set(0,-.3,.25);const j=new k(new mt(.06,.06,.35,8),new Q({color:657930,metalness:.9,roughness:.1}));j.rotation.z=Math.PI/2,j.position.set(0,-.18,.4);const q=new k(new mt(.05,.05,.02,8),new Q({color:1723791,metalness:.9,roughness:.1,emissive:663616}));q.rotation.z=Math.PI/2,q.position.set(0,-.18,.58);const K=new k(new ie(.12,.14,.3),new Q({color:3811866}));K.position.set(0,-.28,-.05);const Y=new k(new ie(.02,.15,.02),new Q({color:1710618}));Y.position.set(0,-.42,.5),P.add(N,G,j,q,K,Y),this.rightArmPivot.add(P),this.weaponModels.Sniper=P,Object.values(this.weaponModels).forEach(ge=>ge.visible=!1);const ne=I.clone();ne.traverse(ge=>{ge.material&&ge.material.color&&ge.material.color.setHex(5598095)}),ne.scale.set(.8,.8,.8),this.rightArmPivot.add(ne),this.weaponModels.SMG=ne;const se=I.clone();se.traverse(ge=>{ge.material&&ge.material.color&&ge.material.color.setHex(9132587)}),se.scale.set(1.1,1,.8),this.rightArmPivot.add(se),this.weaponModels.Shotgun=se;const W=I.clone();W.traverse(ge=>{ge.material&&ge.material.color&&ge.material.color.setHex(3050327)}),W.scale.set(.95,.95,1),this.rightArmPivot.add(W),this.weaponModels.DMR=W;const Z=new ie(this.blockSize,this.blockSize,this.blockSize),ae=new Q({color:3066993,transparent:!0,opacity:.35,wireframe:!0});this.previewBlock=new k(Z,ae),this.previewBlock.visible=this.gameMode==="studio",this.previewBlock.castShadow=!1,this.previewBlock.receiveShadow=!1,this.scene.add(this.previewBlock);const de=new ie(.25,.8,.25);de.translate(0,-.4,0),this.leftLegPivot=new Xe,this.leftLegPivot.name="leftLegPivot",this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot);const fe=new k(de,n);this.leftLegPivot.add(fe),this.rightLegPivot=new Xe,this.rightLegPivot.name="rightLegPivot",this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot);const Te=new k(de,n);if(this.rightLegPivot.add(Te),this.isAiming=!1,this.baseFov=75,this.aimFov=20,this.hitTimer=0,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.isPunching=!1,this.punchSide=0,this.isBlocking=!1,this.yaw=0,this.pitch=0,this.camera){const ge=new pn().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=ge.y,this.pitch=ge.x}}rotateCamera(e,t){if(!this.controls||!this.controls.isLocked){this.yaw-=e,this.pitch-=t;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}initControls(){const e=s=>{if(this.gameMode==="studio"&&this.studioSelected)switch(s.code){case"ArrowUp":s.shiftKey?this.moveSelectedObject(0,0,1.5):this.moveSelectedObject(0,-2),s.preventDefault();return;case"ArrowDown":s.shiftKey?this.moveSelectedObject(0,0,-1.5):this.moveSelectedObject(0,2),s.preventDefault();return;case"ArrowLeft":this.moveSelectedObject(-2,0),s.preventDefault();return;case"ArrowRight":this.moveSelectedObject(2,0),s.preventDefault();return;case"KeyX":this.removeSelectedObject(),s.preventDefault();return}switch(s.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"Digit1":this.switchWeapon(0);break;case"Digit2":this.switchWeapon(1);break;case"Digit3":this.switchWeapon(2);break;case"Digit4":this.switchWeapon(3);break;case"Digit5":this.switchWeapon(4);break;case"Digit6":this.switchWeapon(5);break;case"Numpad1":this.switchWeapon(0);break;case"Numpad2":this.switchWeapon(1);break;case"Numpad3":this.switchWeapon(2);break;case"Numpad4":this.switchWeapon(3);break;case"Numpad5":this.switchWeapon(4);break;case"Numpad6":this.switchWeapon(5);break;case"KeyB":this.gameMode==="studio"&&this.placeBlock();break;case"KeyU":if(this.gameMode==="studio"&&(this.isFloating=!this.isFloating,!this.isFloating)){const o=this.getSurfaceHeight(this.position.x,this.position.z);this.mesh.position.y=o,this.velocity.y=0}break;case"Minus":this.gameMode==="studio"&&this.adjustBlockSize(-.1);break;case"Equal":this.gameMode==="studio"&&this.adjustBlockSize(.1);break;case"KeyM":this.gameMode==="studio"&&this.moveLastBlock();break;case"KeyX":this.gameMode==="studio"&&(this.studioSelected?this.removeSelectedObject():this.selectedBlock?this.removeBlock(this.selectedBlock):this.removeLastBlock());break;case"KeyR":this.reload();break;case"KeyC":this.isCrouching=!this.isCrouching,this.isCrouching&&(this.isSprinting=!1);break;case"ShiftLeft":case"ShiftRight":this.isCrouching||(this.isSprinting=!0);break;case"Space":!this.isInVehicle&&this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"KeyN":this.isInVehicle&&(this.vehicleTurbo=!0);break;case"KeyV":this.toggleCameraMode();break;case"KeyE":if(this.isInVehicle){this.exitVehicle();return}else{const o=this.findNearbyVehicle();if(o){this.enterVehicle(o);return}}break}},t=s=>{switch(s.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break;case"Space":break;case"KeyN":this.vehicleTurbo=!1;break}},i=s=>{this.gameMode==="studio"&&(this.selectStudioObject(s)||this.selectBlockUnderCrosshair())||this.controls.isLocked&&(s.button===0?this.shoot():s.button===2&&(this.isAiming=!0))},n=s=>{s.button===2&&(this.isAiming=!1)};document.addEventListener("keydown",e),document.addEventListener("keyup",t),document.addEventListener("mousedown",i),document.addEventListener("mouseup",n),document.addEventListener("contextmenu",s=>s.preventDefault())}lockControls(){if(!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)){console.warn("Pointer Lock API not available in this environment.");return}const t=document.getElementById("main-menu");if(!(t&&t.style.display!=="none")&&!this.isPaused)try{const i=this.controls.lock();i&&typeof i.catch=="function"&&i.catch(()=>{})}catch(i){console.warn("Unable to lock pointer:",i)}}toggleCameraMode(){this.cameraMode=this.cameraMode==="FPS"?"TPS":"FPS",this.mesh&&(this.mesh.visible=this.cameraMode==="TPS"),console.log(`Camera mode: ${this.cameraMode}`)}switchWeapon(e){if(e>=0&&e<this.weapons.length){if(this.isReloading)return;this.currentWeaponIndex=e;const t=this.weapons[e].name;Object.values(this.weaponModels).forEach(i=>i.visible=!1),this.weaponModels[t]&&(this.weaponModels[t].visible=!0)}}reload(){if(this.isReloading)return;const e=this.weapons[this.currentWeaponIndex];e.ammo!==1/0&&e.currentMag!==e.magazineSize&&(e.ammo<=0||(this.isReloading=!0,console.log("Reloading..."),this.playReloadSound(),setTimeout(()=>{this.finishReload()},e.reloadTime*1e3)))}playReloadSound(){try{if(this.audioCtx&&this.reloadBuffer){this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.createBufferSource();e.buffer=this.reloadBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume*.8,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}catch(e){console.warn("Error playing reload sound:",e)}}finishReload(){if(!this.isReloading)return;const e=this.weapons[this.currentWeaponIndex],t=e.magazineSize-e.currentMag,i=e.ammo,n=Math.min(t,i);e.currentMag+=n,e.ammo-=n,this.isReloading=!1,console.log("Reloaded!")}startBlocking(){this.weapons[this.currentWeaponIndex].name==="Fist"&&(this.isBlocking=!0)}stopBlocking(){this.isBlocking=!1}collectItem(e){if(e==="ShieldPotion"){this.shield=Math.min(100,this.shield+50);return}if(e&&e.startsWith("Backpack:")){const i=e.split(":")[1]||"2c3e50";return this.equipBackpack(parseInt(i,16))}const t=this.weapons.find(i=>i.name===e);if(t)t.ammo=Math.min(t.maxAmmo,t.ammo+t.magazineSize),console.log("Added ammo for "+e);else{const i=this.allWeapons.find(n=>n.name===e);i&&(this.weapons.push(i),console.log("Picked up "+e))}}setEnemyManager(e){this.enemyManager=e}setMultiplayerClient(e){this.multiplayerClient=e}shoot(){var l;if(!(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0)||this.isDead||this.isReloading||this.isBlocking)return;const t=this.weapons[this.currentWeaponIndex],i=performance.now()/1e3;if(i-t.lastShot<t.cooldown)return;if(t.currentMag<=0){this.reload();return}if(t.lastShot=i,t.ammo!==1/0&&t.currentMag--,t.name==="Fist"){this.punch();return}this.createMuzzleFlash();try{if(this.audioCtx&&this.gunshotBuffer&&this.audioCtx.state==="running"){const c=this.audioCtx.createBufferSource();c.buffer=this.gunshotBuffer,t.name==="Pistol"?c.playbackRate.value=1:t.name==="Rifle"?c.playbackRate.value=1.15:t.name==="Sniper"?c.playbackRate.value=.9:c.playbackRate.value=1;const h=this.audioCtx.createGain();h.gain.value=this.sfxVolume,c.connect(h),h.connect(this.audioCtx.destination),c.start(0)}else this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}catch{}const n=new Kt;n.setFromCamera(new Se(0,0),this.camera);const s=this.camera.position.clone();new R,n.ray.direction.clone().normalize();let o=s.clone().add(n.ray.direction.clone().multiplyScalar(1e3)),a=!1;if(this.worldObjects&&this.worldObjects.length>0){const c=n.intersectObjects(this.worldObjects,!0);c.length>0&&(o=c[0].point.clone(),a=!0)}if(this.enemyManager&&this.enemyManager.enemies){const c=n.intersectObjects(this.enemyManager.enemies.map(h=>h.mesh),!0);if(c.length>0){const h=c[0].point,u=s.distanceTo(h),d=s.distanceTo(o);if(u<d){const p=c[0].object;o=h.clone(),a=!0;let g=null;if(g=(m=>{let f=m;for(;f;){const x=this.enemyManager.enemies.find(v=>v.mesh===f);if(x)return x;f=f.parent}return null})(p),g){const m=s.distanceTo(g.position),f=t.range||1e3;m<=f?g.takeDamage(t.damage):a=!1}}}}if(this.multiplayerClient&&this.multiplayerClient.others&&this.multiplayerClient.others.size>0){const c=Array.from(this.multiplayerClient.others.values()),h=n.intersectObjects(c,!0);if(h.length>0){const u=h[0].point,d=s.distanceTo(u),p=s.distanceTo(o);if(d<p){o=u.clone(),a=!0;let g=h[0].object;for(;g&&!((l=g.userData)!=null&&l.gameId)&&g.parent;)g=g.parent;const _=g&&g.userData?g.userData.gameId:null;_&&this.multiplayerClient&&typeof this.multiplayerClient.sendHit=="function"&&this.multiplayerClient.sendHit(_,t.damage)}}}this.showTracers&&this.createBulletTracer(s,o,a),a&&t.name==="Sniper"&&this.createImpactSmoke(o)}createMuzzleFlash(){const e=new Cp(16776960,1,5),t=new R;this.camera.getWorldDirection(t),e.position.copy(this.mesh.position),e.position.y+=1.5,e.position.add(t.multiplyScalar(1)),this.scene.add(e),setTimeout(()=>this.scene.remove(e),100)}createBulletTracer(e,t,i){const n=[e,t],s=new ut().setFromPoints(n),o=i?16729156:16776960,a=new Ln({color:o,linewidth:2,opacity:.8,transparent:!0}),l=new ja(s,a);this.scene.add(l);let c=.8;const h=setInterval(()=>{c-=.1,a.opacity=c,c<=0&&(clearInterval(h),this.scene.remove(l),s.dispose(),a.dispose())},30)}createImpactSmoke(e){const t=new Xe;t.position.copy(e);const i=8;for(let a=0;a<i;a++){const l=.15+Math.random()*.2,c=new ln(l,6,6),h=new _i({color:6710886,transparent:!0,opacity:.5}),u=new k(c,h);u.position.set((Math.random()-.5)*.4,(Math.random()-.5)*.2,(Math.random()-.5)*.4),t.add(u)}this.scene.add(t);const n=600,s=performance.now(),o=()=>{const a=performance.now()-s,l=Math.max(0,1-a/n);t.children.forEach(c=>{c.material&&(c.material.opacity=l*.5)}),a<n?requestAnimationFrame(o):(t.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),this.scene.remove(t))};o()}update(e){if(this.isDead)return;if(this.updateVehiclePrompt(),this.isInVehicle){this.updateVehicleDrive(e);return}if(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0){this.velocity.x-=this.velocity.x*10*e,this.velocity.z-=this.velocity.z*10*e,this.isFloating?this.velocity.y*=.9:this.velocity.y-=this.gravity*e,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*this.speed*e),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*this.speed*e);const i=new R;this.camera.getWorldDirection(i),i.y=0,i.normalize();const n=new R;n.crossVectors(i,new R(0,1,0));const s=new R;this.moveForward&&s.add(i),this.moveBackward&&s.sub(i),this.moveRight&&s.add(n),this.moveLeft&&s.sub(n),s.normalize();const o=s.length()>0;let a=1;this.isSprinting&&!this.isCrouching&&o&&this.stamina>0&&(a=2);const l=this.speed*e*.1*a,c=s.multiplyScalar(l);c.x!==0&&(this.checkCollision(new R(Math.sign(c.x),0,0),Math.abs(c.x))||(this.mesh.position.x+=c.x)),c.z!==0&&(this.checkCollision(new R(0,0,Math.sign(c.z)),Math.abs(c.z))||(this.mesh.position.z+=c.z));let h=0;if(this.isFloating){const f=new R;this.camera.getWorldDirection(f);const x=f.y;this.moveForward&&(h+=x*this.speed*e*.3),this.moveBackward&&(h-=x*this.speed*e*.3)}if(this.mesh.position.y+=this.velocity.y*e+h,s.length()>0){const f=Math.atan2(s.x,s.z);this.mesh.rotation.y=f}if(this.mesh.position.y+=this.velocity.y*e,!this.isFloating&&!this.isFloating){this.mesh.position.y<0&&(this.velocity.y=0,this.mesh.position.y=0,this.canJump=!0);const f=this.getSurfaceHeight(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<f&&(this.mesh.position.y=f,this.velocity.y=0,this.canJump=!0)}const u=!this.isFloating&&(this.canJump||this.mesh.position.y<=.01);if(this.handleFootsteps(o&&u&&!this.isDead),this.gameMode==="studio"?this.updateBlockPreview():this.previewBlock&&(this.previewBlock.visible=!1),this.world&&typeof this.world.halfMapSize=="number"){const f=this.world.halfMapSize-1;this.mesh.position.x=Math.max(-f,Math.min(f,this.mesh.position.x)),this.mesh.position.z=Math.max(-f,Math.min(f,this.mesh.position.z))}if(this.separateFromRemotePlayers(),this.previousPosition.length()>0){const f=this.mesh.position.distanceTo(this.previousPosition);this.distanceTraveled+=f,e>0&&(this.currentSpeed=f/e)}if(this.previousPosition.copy(this.mesh.position),this.isSprinting&&!this.isCrouching&&o&&this.stamina>0){if(this.gameMode!=="studio"){const f=20*e;this.stamina=Math.max(0,this.stamina-f),this.stamina<=0&&(this.isSprinting=!1)}}else if(this.gameMode!=="studio"){const f=10*e;this.stamina=Math.min(100,this.stamina+f)}this.gameMode==="studio"&&(this.stamina=100),this.camera.position.copy(this.mesh.position);const d=this.isCrouching?1.6*this.crouchHeight:1.6;this.camera.position.y+=d;const p=this.isCrouching?this.crouchHeight:1;this.mesh.scale.y+=(p-this.mesh.scale.y)*10*e;let g=this.baseFov;const _=this.weapons[this.currentWeaponIndex];this.isAiming&&_&&_.zoomFov&&(g=_.zoomFov),Math.abs(this.camera.fov-g)>.1&&(this.camera.fov+=(g-this.camera.fov)*10*e,this.camera.updateProjectionMatrix());let m;this.cameraMode==="FPS"?m=this.fpsCameraOffset.clone():(m=this.tpsCameraOffset.clone(),m.applyQuaternion(this.camera.quaternion)),m.add(this.mesh.position),this.camera.position.copy(m),this.updateAnimations(e)}}findNearbyVehicle(){if(!this.worldObjects)return null;let e=null,t=4;return this.worldObjects.forEach(i=>{if(!i||!i.userData||i.userData.type!=="vehicle")return;const n=i.position.distanceTo(this.mesh.position);n<t&&(e=i,t=n)}),e}updateVehiclePrompt(){const e=this.vehiclePromptEl;if(!e)return;if(this.isInVehicle){e.innerText="Press E to exit vehicle",e.dataset.vehiclePrompt="1",e.classList.remove("hidden");return}const t=this.findNearbyVehicle();this.nearVehicle=t,t?(e.innerText="Press E to drive vehicle",e.dataset.vehiclePrompt="1",e.classList.remove("hidden")):e.dataset.vehiclePrompt==="1"&&(e.classList.add("hidden"),delete e.dataset.vehiclePrompt)}enterVehicle(e){if(!e||this.isInVehicle)return!1;e.userData||(e.userData={}),e.userData.hasFrontAligned||(e.rotation.y+=Math.PI,e.userData.hasFrontAligned=!0);const t=this.loadVehicleState(e);this.isInVehicle=!0,this.vehicleAccelHold=0,this.isSprinting=!1,this.vehicleTurbo=!1,this.currentVehicle=e,this.vehicleSpeed=0,this.currentSpeed=0;const i=e.userData&&e.userData.vehicleType||"car";return this.vehicleFuelCapacity=t?t.capacity:i==="truck"?60:40,this.vehicleFuel=t?t.fuel:this.vehicleFuelCapacity,this.vehicleDistance=t?t.distanceKm:0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=t?t.fuelUsed:0,this.vehicleEfficiencyKmPerL=i==="truck"?3.5:5.5,this.vehicleIdleLph=i==="truck"?1:.7,this.vehicleThrottleLph=i==="truck"?2.8:1.9,this._vehicleMaxSpeed=i==="truck"?80/3.6:null,this._vehicleTurboMaxSpeed=i==="truck"?100/3.6:null,this._vehicleStateCache=t||null,this.previousPosition.copy(e.position),this.stopFootsteps(),this.stopVehicleDriveSound(),this.playVehicleDoor(),this.mesh.visible=!1,this.velocity.set(0,0,0),this.mesh.position.copy(e.position),this.updateVehicleHUD(!0),!0}exitVehicle(){if(!this.currentVehicle){this.isInVehicle=!1;return}const e=this.currentVehicle;if(this.playVehicleDoor(),this.stopVehicleDriveSound(),this.stopFootsteps(),this.world&&typeof this.world.getHeightAt=="function"){const s=this.world.getHeightAt(e.position.x,e.position.z),o=this.getVehicleGroundClearance(e);e.position.y=s+o}const t=new R(-1.5,0,-2).applyEuler(e.rotation),i=e.position.clone().add(t);this.mesh.position.copy(i);const n=typeof this.getSurfaceHeight=="function"?this.getSurfaceHeight(i.x,i.z):this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(i.x,i.z):i.y;this.mesh.position.y=n,this.velocity.set(0,0,0),this.mesh.visible=!0,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.canJump=!0,this.previousPosition.copy(this.mesh.position),this.saveVehicleState(e),this.updateVehicleHUD(!1),this.vehiclePromptEl&&this.vehiclePromptEl.dataset.vehiclePrompt==="1"&&(this.vehiclePromptEl.classList.add("hidden"),delete this.vehiclePromptEl.dataset.vehiclePrompt)}getVehicleGroundClearance(e){if(!e)return .05;const t=e.userData||{};return typeof t.groundClearance=="number"?t.groundClearance:typeof t.wheelRadius=="number"&&typeof t.wheelCenterY=="number"?Math.max(0,t.wheelRadius-t.wheelCenterY):.05}updateVehicleDrive(e){const t=this.currentVehicle;if(!t){this.isInVehicle=!1;return}this.stopFootsteps();const i=t.position.clone();if(this.vehicleFuel<=0){this.vehicleSpeed=0,this.mesh.position.copy(t.position),this.previousPosition.copy(t.position),this.currentSpeed=0,this.updateVehicleHUD(!0);return}let n=0;this.moveForward&&(n+=1),this.moveBackward&&(n-=1),this.vehicleSpeed+=n*this.vehicleAccel*e,this.moveForward&&n>0?this.vehicleAccelHold=Math.min(1,this.vehicleAccelHold+e*.8):this.vehicleAccelHold=Math.max(0,this.vehicleAccelHold-e*.6);const s=this.vehicleTurbo&&n>0,o=s?vType==="truck"?1.25:1.6:1,a=s?vType==="truck"?1.15:1.35:1,l=(this.vehicleBaseMaxSpeed+this.vehicleBoostMax*this.vehicleAccelHold)*o,c=this.vehicleBaseMaxSpeed*.5;this.vehicleSpeed=Math.min(l,Math.max(-c,this.vehicleSpeed)),this.vehicleSpeed+=n*this.vehicleAccel*e*(a-1),this.vehicleSpeed*=Math.max(0,1-this.vehicleFriction*e),this._vehicleMaxSpeed&&!s?this.vehicleSpeed=Math.min(this._vehicleMaxSpeed,this.vehicleSpeed):this._vehicleTurboMaxSpeed&&s&&(this.vehicleSpeed=Math.min(this._vehicleTurboMaxSpeed,this.vehicleSpeed)),this.currentSpeed=Math.abs(this.vehicleSpeed);const h=n>0,u=this.vehicleSpeed>=0?1:-1;this.moveLeft&&(t.rotation.y+=this.vehicleTurnSpeed*e*u),this.moveRight&&(t.rotation.y-=this.vehicleTurnSpeed*e*u);const d=new R(0,0,1).applyEuler(t.rotation),p=t.position.clone().addScaledVector(d,this.vehicleSpeed*e);if(this.checkVehicleCollision(p,t)?this.vehicleSpeed*=.2:t.position.copy(p),this.world&&typeof this.world.getHeightAt=="function"){const S=this.world.getHeightAt(t.position.x,t.position.z),C=this.getVehicleGroundClearance(t);t.position.y=S+C}if(this.world&&typeof this.world.halfMapSize=="number"){const S=this.world.halfMapSize-1;t.position.x=Math.max(-S,Math.min(S,t.position.x)),t.position.z=Math.max(-S,Math.min(S,t.position.z))}if(this.previousPosition.length()>0){const S=t.position.distanceTo(this.previousPosition);this.distanceTraveled+=S}this.mesh.position.copy(t.position),this.previousPosition.copy(t.position);const g=t.position.distanceTo(i);this.rotateVehicleWheels(t,g,this.vehicleSpeed);let _=0;if(_+=this.vehicleIdleLph/3600*e,h&&(_+=this.vehicleThrottleLph/3600*e*(s?1.7:1)),g>0){const S=g/1e3;this.vehicleDistance+=S;const C=S/this.vehicleEfficiencyKmPerL,T=h?C*.35*(s?1.35:1):0;_+=C+T}if(this.vehicleFuelUsed+=_,this.vehicleFuel=Math.max(0,this.vehicleFuel-_),this.vehicleFuel<=0&&(this.vehicleSpeed=0),this.saveVehicleState(t),this.updateVehicleHUD(!0),this.enemyManager&&Array.isArray(this.enemyManager.enemies)){const S=performance.now();this.enemyManager.enemies.forEach(C=>{if(!C||!C.position)return;if(C.position.distanceTo(t.position)<2.4){C.userData||(C.userData={});const A=C.userData.lastRunOver||0;if(S-A>400){C.userData.lastRunOver=S;try{C.takeDamage(999)}catch{}}}})}const m=t.position.clone(),f=new R(0,2,6).applyQuaternion(this.camera.quaternion),x=m.clone().add(f);this.camera.position.lerp(x,.18);const v=Math.abs(this.vehicleSpeed)>.5;this.handleVehicleDriveSound(v)}rotateVehicleWheels(e,t,i){if(!e||!e.userData||!e.userData.wheels||!e.userData.wheels.length)return;const n=e.userData.wheelRadius||.35,s=t/n,o=i>=0?-1:1;e.userData.wheels.forEach(a=>{try{a.rotation.x+=o*s}catch{}})}updateVehicleHUD(e){if(!this.vehicleHud||!this.vehicleHud.root)return;const t=this.vehicleHud.root,i=document.getElementById("dashboard");if(i){const s=i.getBoundingClientRect();t.style.left=`${s.left}px`,t.style.top=`${s.top+s.height+8}px`,t.style.width=`${s.width}px`}if(!e){t.classList.add("hidden");return}t.classList.remove("hidden");const n=Math.abs(this.vehicleSpeed)*3.6;if(this.vehicleHud.speed&&(this.vehicleHud.speed.innerText=n.toFixed(0)),this.vehicleHud.fuelFill){const s=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/s*100));this.vehicleHud.fuelFill.style.width=`${o}%`,this.vehicleHud.fuelFill.style.background=o<20?"linear-gradient(90deg, #ff7043, #ff3d00)":"linear-gradient(90deg, #8bc34a, #cddc39)"}if(this.vehicleHud.fuelText){const s=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/s*100));this.vehicleHud.fuelText.innerText=`${this.vehicleFuel.toFixed(1)}L (${o.toFixed(1)}%)`}if(this.vehicleHud.distance&&(this.vehicleHud.distance.innerText=this.vehicleDistance.toFixed(2)),this.vehicleHud.efficiency){const s=this.vehicleFuelUsed>0&&this.vehicleDistance>0?this.vehicleDistance/this.vehicleFuelUsed:0;this.vehicleHud.efficiency.innerText=s.toFixed(2)}if(this.vehicleHud.range){const s=this.vehicleFuel*this.vehicleEfficiencyKmPerL;this.vehicleHud.range.innerText=s.toFixed(1)}}getVehicleStorageKey(e){return!e||!e.userData||!e.userData.gameId?null:`vehicle-state-${e.userData.gameId}`}loadVehicleState(e){try{if(e&&e.userData&&e.userData.vehicleState)return e.userData.vehicleState;const t=this.getVehicleStorageKey(e);if(!t||typeof localStorage>"u")return null;const i=localStorage.getItem(t);if(!i)return null;const n=JSON.parse(i);return e.userData.vehicleState=n,n}catch{return null}}saveVehicleState(e){if(!e)return;const t=this.getVehicleStorageKey(e);if(!t)return;const i={fuel:this.vehicleFuel,capacity:this.vehicleFuelCapacity,distanceKm:this.vehicleDistance,fuelUsed:this.vehicleFuelUsed,vehicleType:e.userData&&e.userData.vehicleType||"car"};e.userData.vehicleState=i;try{typeof localStorage<"u"&&localStorage.setItem(t,JSON.stringify(i))}catch{}}selectStudioObject(e){if(this.gameMode!=="studio"||!this.worldObjects||this.worldObjects.length===0)return null;const t=new Se;this.controls&&this.controls.isLocked?t.set(0,0):e&&e.clientX!==void 0?(t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1):t.set(0,0),this._studioRaycaster.setFromCamera(t,this.camera);const i=this.worldObjects.filter(o=>o&&o.userData&&o.userData.gameName!=="Ground"),n=this._studioRaycaster.intersectObjects(i,!0);if(!n.length)return this.clearStudioSelection(),null;let s=n[0].object;for(;s&&!this.worldObjects.includes(s);)s=s.parent;return s&&this.setStudioSelection(s),s}moveSelectedObject(e,t,i=0){if(!this.studioSelected)return;const n=this.studioSelected;n.position.x+=e,n.position.z+=t,n.position.y+=i,i===0&&this.world&&typeof this.world.getHeightAt=="function"&&(n.position.y=this.world.getHeightAt(n.position.x,n.position.z)),this.refreshStudioSelectionHelper()}clearStudioSelection(){if(this.studioSelected=null,this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}this.selectionInfo&&this.selectionInfo.classList.add("hidden")}removeSelectedObject(){if(!this.studioSelected)return;const e=this.studioSelected;this.clearStudioSelection();try{this.scene.remove(e)}catch{}if(this.worldObjects){const t=this.worldObjects.indexOf(e);t>=0&&this.worldObjects.splice(t,1)}}setStudioSelection(e){if(this.studioSelected=e,this.selectionInfo){const t=e.userData||{};this.selectionInfo.innerText=`${t.gameName||"Object"} (${t.gameId||"---"})`,this.selectionInfo.classList.remove("hidden")}this.refreshStudioSelectionHelper()}refreshStudioSelectionHelper(){if(this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}if(this.studioSelected)try{const e=this.buildStudioSelectionBox(this.studioSelected);this.studioSelectionHelper=new Ip(e,16766720),this.studioSelectionHelper.material.depthTest=!1,this.studioSelectionHelper.material.transparent=!0,this.studioSelectionHelper.material.opacity=.9,this.scene.add(this.studioSelectionHelper)}catch{this.studioSelectionHelper=null}}buildStudioSelectionBox(e){const t=new yi;return e.traverse(i=>{if(!i.isMesh||!i.geometry)return;const n=i.userData||{},s=i.material;if(!(s&&s.transparent||n.isShadow||n.shadow)){if(!i.geometry.boundingBox)try{i.geometry.computeBoundingBox()}catch{}if(i.geometry.boundingBox){const a=i.geometry.boundingBox.clone();i.updateWorldMatrix(!0,!1),a.applyMatrix4(i.matrixWorld),t.union(a)}}}),t.isEmpty()&&t.setFromCenterAndSize(e.position,new R(1,1,1)),t}checkVehicleCollision(e,t=null){if(!this.worldObjects)return!1;const i=2;for(let n=0;n<this.worldObjects.length;n++){const s=this.worldObjects[n];if(!s)continue;const o=s.userData||{};if(t&&s===t||o.gameName==="Ground"||o.type==="ground")continue;const a=s.position||(s.getWorldPosition?s.getWorldPosition(new R):null);if(!a)continue;const l=a.distanceTo(e);let c=1.5;if(s.geometry&&s.geometry.boundingSphere?c=s.geometry.boundingSphere.radius||c:o&&o.size==="large"?c=5:o.type==="vehicle"&&(c=2.5),l<i+c)return!0}return!1}updateAnimations(e){const t=this.moveForward||this.moveBackward||this.moveLeft||this.moveRight,i=10,n=this.isSprinting&&t?1.8:1;if(t){this.animTime+=e*i*n;const s=Math.sin(this.animTime)*(.5*n);this.leftLegPivot.rotation.x=s,this.rightLegPivot.rotation.x=-s}else this.leftLegPivot.rotation.x=_t.lerp(this.leftLegPivot.rotation.x,0,e*i),this.rightLegPivot.rotation.x=_t.lerp(this.rightLegPivot.rotation.x,0,e*i);if(this.isBlocking){const s=-Math.PI/2.5,o=.5;this.leftArmPivot.rotation.x=_t.lerp(this.leftArmPivot.rotation.x,s,e*15),this.rightArmPivot.rotation.x=_t.lerp(this.rightArmPivot.rotation.x,s,e*15),this.leftArmPivot.rotation.z=_t.lerp(this.leftArmPivot.rotation.z,-o,e*15),this.rightArmPivot.rotation.z=_t.lerp(this.rightArmPivot.rotation.z,o,e*15)}else if(this.isPunching){this.punchTime+=e*20;const s=-Math.PI/2+Math.sin(this.punchTime)*.8;this.punchSide===0?(this.rightArmPivot.rotation.x=s,this.leftArmPivot.rotation.x=_t.lerp(this.leftArmPivot.rotation.x,0,e*10)):(this.leftArmPivot.rotation.x=s,this.rightArmPivot.rotation.x=_t.lerp(this.rightArmPivot.rotation.x,0,e*10)),this.punchTime>Math.PI&&(this.isPunching=!1,this.rightArmPivot.rotation.x=0,this.leftArmPivot.rotation.x=0),this.leftArmPivot.rotation.z=_t.lerp(this.leftArmPivot.rotation.z,0,e*10),this.rightArmPivot.rotation.z=_t.lerp(this.rightArmPivot.rotation.z,0,e*10)}else{if(t){const s=Math.sin(this.animTime)*.5*n;this.leftArmPivot.rotation.x=-s,this.rightArmPivot.rotation.x=s}else this.leftArmPivot.rotation.x=_t.lerp(this.leftArmPivot.rotation.x,0,e*10),this.rightArmPivot.rotation.x=_t.lerp(this.rightArmPivot.rotation.x,0,e*10);this.leftArmPivot.rotation.z=_t.lerp(this.leftArmPivot.rotation.z,0,e*10),this.rightArmPivot.rotation.z=_t.lerp(this.rightArmPivot.rotation.z,0,e*10)}if(this.hitTimer>0){this.hitTimer-=e;const s=Math.max(0,this.hitTimer)/.6,o=_t.lerp(-Math.PI/2.2,0,1-s);this.leftArmPivot.rotation.x=_t.lerp(this.leftArmPivot.rotation.x,o,e*20),this.rightArmPivot.rotation.x=_t.lerp(this.rightArmPivot.rotation.x,o,e*20)}}punch(){if(!this.isTired&&!(this.isPunching||this.isBlocking)&&(this.isPunching=!0,this.punchTime=0,this.punchSide=this.punchSide===0?1:0,this.punchCount++,this.punchCount>=20&&(this.isTired=!0,this.stamina=Math.max(0,this.stamina-20),setTimeout(()=>{this.isTired=!1,this.punchCount=0},3e3)),this.enemyManager&&this.enemyManager.enemies)){const e=new R;this.mesh.getWorldDirection(e);let t=!1;if(this.enemyManager.enemies.forEach(i=>{if(this.mesh.position.distanceTo(i.position)<3){const s=new R().subVectors(i.position,this.mesh.position).normalize();if(e.angleTo(s)<Math.PI/3){i.takeDamage(10);const a=e.clone().multiplyScalar(2);i.position.add(a),t=!0}}}),this.gameMode==="multiplayer"&&this.multiplayerClient&&this.multiplayerClient.others&&this.multiplayerClient.others.size>0){const i=Math.PI/3,n=3;this.multiplayerClient.others.forEach((s,o)=>{if(!s||!s.position||s.userData&&s.userData.dead||this.mesh.position.distanceTo(s.position)>n)return;const l=new R().subVectors(s.position,this.mesh.position).normalize();e.angleTo(l)<i&&(typeof this.multiplayerClient.sendHit=="function"&&this.multiplayerClient.sendHit(o,10),t=!0)})}t&&this.playSmack()}}playSmack(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playSmack());return}if(this.smackBuffer){const e=this.audioCtx.createBufferSource();e.buffer=this.smackBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}}catch(e){console.warn("playSmack error:",e)}}equipBackpack(e=2899536){const t=this.backpackColor;this.backpack&&this.backpack.parent&&this.backpack.parent.remove(this.backpack);const i=new Xe;i.position.set(0,1.25,-.32);const n=new k(new ie(.7,.9,.35),new Q({color:e,metalness:.15,roughness:.8}));n.position.set(0,0,0),i.add(n);const s=new k(new ie(.6,.25,.16),new Q({color:3426654,metalness:.1,roughness:.8}));s.position.set(0,-.55,.22),i.add(s);const o=new Q({color:2042938,metalness:.1,roughness:.9}),a=new k(new ie(.1,.82,.07),o);a.position.set(-.28,-.03,.2);const l=a.clone();return l.position.x=.28,i.add(a,l),this.mesh.add(i),this.backpack=i,this.backpackColor=e,t}queueHurtBeat(){if(this._hurtAccumulator+=1,this._hurtAccumulator>=2){const e=Math.floor(this._hurtAccumulator/2);this._hurtQueue+=e,this._hurtAccumulator-=e*2}this._hurtQueue===0&&this._hurtAccumulator>0&&(this._hurtQueue=1,this._hurtAccumulator=0),this._hurtBeatTimer||this._playHurtBeatLoop()}_playHurtBeatLoop(){if(this._hurtQueue<=0){this._hurtBeatTimer=null;return}this.playHurt(),this._hurtQueue=Math.max(0,this._hurtQueue-1),this._hurtBeatTimer=setTimeout(()=>this._playHurtBeatLoop(),2e3)}clearHurtQueue(){this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer&&(clearTimeout(this._hurtBeatTimer),this._hurtBeatTimer=null)}playHurt(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playHurt());return}if(this.ughBuffer){const e=this.audioCtx.createBufferSource();e.buffer=this.ughBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}}catch(e){console.warn("playHurt error:",e)}}playVehicleDoor(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playVehicleDoor());return}if(this.vehicleDoorBuffer){const e=this.audioCtx.createBufferSource();e.buffer=this.vehicleDoorBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}}catch(e){console.warn("playVehicleDoor error:",e)}}handleVehicleDriveSound(e){try{if(!this.audioCtx||!this.enableVehicleDriveSound){this.stopVehicleDriveSound();return}if(!this.vehicleDriveBuffer){this.stopVehicleDriveSound();return}if(e===this._lastVehicleDriveActive&&(e&&this._vehicleDriveSource||!e&&!this._vehicleDriveSource))return;if(this._lastVehicleDriveActive=e,e){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._vehicleDriveSource)return;const t=this.audioCtx.createBufferSource();t.buffer=this.vehicleDriveBuffer,t.loop=!0;const i=this.audioCtx.createGain();i.gain.value=this.sfxVolume*.4,t.connect(i),i.connect(this.audioCtx.destination),t.start(0),this._vehicleDriveSource=t,this._vehicleDriveGain=i,t.onended=()=>{this._vehicleDriveSource=null,this._vehicleDriveGain=null}}else this.stopVehicleDriveSound()}catch(t){console.warn("handleVehicleDriveSound error:",t)}}stopVehicleDriveSound(){if(this._lastVehicleDriveActive=!1,this._vehicleDriveSource){try{this._vehicleDriveSource.stop()}catch{}try{this._vehicleDriveSource.disconnect()}catch{}}if(this._vehicleDriveGain)try{this._vehicleDriveGain.disconnect()}catch{}this._vehicleDriveSource=null,this._vehicleDriveGain=null}handleFootsteps(e){try{if(this.isInVehicle){this.stopFootsteps();return}if(!this.audioCtx||!this.footstepsBuffer){this.stopFootsteps();return}if(e===this._lastFootstepsActive&&(e&&this._footstepsSource||!e&&!this._footstepsSource)){if(e&&this._footstepsSource){const t=this.isSprinting?1.4:this.isCrouching?.8:1;this._footstepsSource.playbackRate.value=t}return}if(this._lastFootstepsActive=e,e){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._footstepsSource){try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}const t=this.audioCtx.createBufferSource();t.buffer=this.footstepsBuffer,t.loop=!0,t.playbackRate.value=this.isSprinting?1.4:this.isCrouching?.8:1;const i=this.audioCtx.createGain();i.gain.value=this.sfxVolume*.35,t.connect(i),i.connect(this.audioCtx.destination),t.start(0),this._footstepsSource=t,this._footstepsGain=i,t.onended=()=>{this._footstepsSource=null,this._footstepsGain=null}}else this.stopFootsteps()}catch(t){console.warn("handleFootsteps error:",t)}}stopFootsteps(){if(this._lastFootstepsActive=!1,this._footstepsSource){try{this._footstepsSource.onended=null}catch{}try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}get position(){return this.mesh.position}getSurfaceHeight(e,t){let i=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(e,t):0;return(this.world&&this.world.objects?this.world.objects:[]).forEach(s=>{if(!(!s||!s.userData)){if(s.userData.type==="block"){const o=s.userData.size||this.blockSize;if(Math.abs(s.position.x-e)<o*.6&&Math.abs(s.position.z-t)<o*.6){const a=s.position.y+o/2;a>i&&(i=a)}}if(s.userData.colliderBox){const o=s.userData.colliderBox;e>=o.min.x&&e<=o.max.x&&t>=o.min.z&&t<=o.max.z&&o.max.y>i&&(i=o.max.y)}}}),i}adjustBlockSize(e){const t=Math.max(this.minBlockSize,Math.min(this.maxBlockSize,this.blockSize+e));this.blockSize=t,console.log("Block size:",this.blockSize.toFixed(2))}moveLastBlock(){if(!this.placedBlocks.length)return;const e=this.placedBlocks[this.placedBlocks.length-1];if(!e)return;const t=this.getBlockTarget(e);e.position.set(t.position.x,t.position.y,t.position.z)}getBlockTarget(e=null){const t=e&&e.userData&&e.userData.size?e.userData.size:this.blockSize,i=new Kt;i.setFromCamera(new Se(0,0),this.camera);const n=u=>Math.round(u);let s=null;if(this.world&&Array.isArray(this.world.objects)){const u=this.world.objects.filter(p=>p&&p.userData&&(p.userData.type==="block"||p.userData.gameName==="Ground")),d=i.intersectObjects(u,!0);d.length>0&&(s=d[0].point.clone())}if(!s){const u=new R;this.camera.getWorldDirection(u),s=this.mesh.position.clone().add(u.multiplyScalar(1.2))}const o=new R(n(s.x),s.y,n(s.z));if(this.world&&typeof this.world.halfMapSize=="number"){const u=this.world.halfMapSize-1;o.x=Math.max(-u,Math.min(u,o.x)),o.z=Math.max(-u,Math.min(u,o.z))}let a=this.world.getHeightAt?this.world.getHeightAt(o.x,o.z):s.y;const c=(this.world.objects||[]).filter(u=>u.userData&&u.userData.type==="block"&&u!==e).filter(u=>Math.abs(u.position.x-o.x)<.1&&Math.abs(u.position.z-o.z)<.1);c.length>0&&(a=Math.max(...c.map(d=>d.position.y+(d.userData&&d.userData.size?d.userData.size/2:t/2))));const h=a+t/2;return{position:new R(o.x,h,o.z),size:t}}updateBlockPreview(){if(!this.previewBlock)return;const e=this.getBlockTarget();this.previewBlock.visible=!0,this.previewBlock.position.copy(e.position);const t=e.size/this.blockSize;this.previewBlock.scale.set(t,t,t)}removeLastBlock(){if(!this.placedBlocks.length)return;const e=this.placedBlocks.pop();e&&e.parent&&e.parent.remove(e),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(t=>t!==e)),e&&e.geometry&&e.geometry.dispose(),e&&e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),this.selectedBlock===e&&this.clearBlockSelection()}selectBlockUnderCrosshair(){if(!this.world||!this.world.objects)return!1;const e=new Kt;e.setFromCamera(new Se(0,0),this.camera);const t=e.intersectObjects(this.world.objects,!0);if(t.length===0)return this.clearBlockSelection(),!1;let i=null;for(const n of t){let s=n.object;for(;s&&s.parent;){if(s.userData&&s.userData.type==="block"){i=s;break}s=s.parent}if(i)break}return i?(this.setBlockSelection(i),!0):(this.clearBlockSelection(),!1)}setBlockSelection(e){this.clearBlockSelection(),this.selectedBlock=e;const t=new Dp(e,16776960);t.userData={ignoreSelect:!0},this.scene.add(t),this.selectedBlockHelper=t}clearBlockSelection(){this.selectedBlock=null,this.selectedBlockHelper&&(this.scene.remove(this.selectedBlockHelper),this.selectedBlockHelper.material&&this.selectedBlockHelper.material.dispose(),this.selectedBlockHelper.geometry&&this.selectedBlockHelper.geometry.dispose(),this.selectedBlockHelper=null)}removeBlock(e){e&&(this.placedBlocks=this.placedBlocks.filter(t=>t!==e),e.parent&&e.parent.remove(e),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(t=>t!==e)),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),this.selectedBlock===e&&this.clearBlockSelection())}takeDamage(e){this.gameMode==="matrix"||this.gameMode==="studio"||this.multiplayerClient&&!this.multiplayerClient.isMatchLive()||(this.isBlocking&&(e*=.2,console.log("Blocked! Reduced damage to "+e)),this.shield>0?(this.shield-=e,this.shield<0&&(this.health+=this.shield,this.shield=0)):this.health-=e,e>0&&this.queueHurtBeat(),this.health<=0&&(this.health=0,this.die()),this.hitTimer=.6)}die(){this.gameMode==="matrix"||this.gameMode==="studio"||(this.handleFootsteps(!1),this.isDead=!0,this.controls.unlock(),this.mesh.rotation.x=-Math.PI/2,this.multiplayerClient&&typeof this.multiplayerClient.sendDeath=="function"&&this.multiplayerClient.sendDeath(),this.moveForward=this.moveBackward=this.moveLeft=this.moveRight=!1,this.velocity.set(0,0,0),this.hud&&typeof this.hud.showGameOver=="function"&&this.hud.showGameOver("YOU DIED"))}checkCollision(e,t){const i=new Kt,n=.5,s=[1.6,1,.35];let o=this.worldObjects||[];if(this.enemyManager&&this.enemyManager.enemies){const c=this.enemyManager.enemies.map(h=>h.mesh);o=o.concat(c)}const a=1.5,l=c=>{let h=c;for(;h;){if(h.userData&&h.userData.colliderBox)return h.userData.colliderBox;h=h.parent}return null};for(const c of s){const h=this.mesh.position.clone();if(h.y+=c,i.set(h,e),o.length>0){const u=i.intersectObjects(o,!0);if(u.length>0){const d=u[0];if(d.distance<t+n){const p=l(d.object);if(p){const g=p.max.y,_=g-this.mesh.position.y;if(_<=a&&_>-.5)return this.mesh.position.y=g,this.velocity.y=0,this.canJump=!0,!1}return!0}}}}return!1}}const Jp="/threejs-voxel-firecraft/dist/assets/mixkit-player-losing-or-failing-vCPqUTFf.ogg",Qp="/threejs-voxel-firecraft/dist/assets/game-level-completed-envato-mixkit.co-OEgWp6-U.ogg";class em{constructor(e,t,i){this.player=e,this.world=t,this.settings=i||{},this.healthBar=document.getElementById("health-bar"),this.healthText=document.getElementById("health-text"),this.shieldBar=document.getElementById("shield-bar"),this.shieldText=document.getElementById("shield-text"),this.staminaBar=document.getElementById("stamina-bar"),this.staminaText=document.getElementById("stamina-text"),this.weaponName=document.getElementById("weapon-name"),this.ammoCount=document.getElementById("ammo-count"),this.slots=document.querySelectorAll(".slot"),this.timerValue=document.getElementById("timer-value"),this.debugContainer=document.getElementById("debug-container"),this.gameOverScreen=document.getElementById("game-over-screen"),this.selectionInfo=document.getElementById("selection-info"),this.selectionInfoTimeout=null,this.fpsCounter=document.getElementById("fps-counter"),this.enemyCount=document.getElementById("enemy-count"),this.killCount=document.getElementById("kill-count"),this.dropCount=document.getElementById("drop-count"),this.distanceTraveled=document.getElementById("distance-traveled"),this.playerSpeed=document.getElementById("player-speed"),this.mapSizeText=document.getElementById("map-size-readout"),this.memoryUsage=document.getElementById("memory-usage"),this.targetInspect=document.getElementById("target-inspect"),this.perfFrame=document.getElementById("perf-frame"),this.perfCalls=document.getElementById("perf-calls"),this.perfTris=document.getElementById("perf-tris"),this.perfGeoms=document.getElementById("perf-geoms"),this.perfTextures=document.getElementById("perf-textures"),this.perfPrograms=document.getElementById("perf-programs"),this.perfObjects=document.getElementById("perf-objects"),this.perfMem=document.getElementById("perf-mem"),this.perfCpu=document.getElementById("perf-cpu"),this.perfGpu=document.getElementById("perf-gpu"),this._renderer=null,this.debugInfo=document.getElementById("debug-info"),this.debugName=document.getElementById("debug-target-name"),this.debugId=document.getElementById("debug-target-id"),this.settings.debugMode?this.debugInfo.style.display="block":this.debugInfo.style.display="none",this.timeRemaining=30,this.lastTime=performance.now(),this.frames=0,this.fps=0,this.lastFpsTime=performance.now(),this.lastFrameTime=performance.now(),this.raycaster=new Kt,this.mouse=new Se,this.hoveredEnemy=null,this.hoveredPlayer=null,this.currentOutlinedEnemy=null,this.hoverInfo=document.getElementById("hover-info"),this.scopeOverlay=document.getElementById("scope-overlay"),this.minimapContainer=document.getElementById("minimap"),this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas?this.minimapCanvas.getContext("2d"):null,this.minimapSize=this.minimapCanvas?this.minimapCanvas.width:180,this.mapSize=t&&t.mapSize?t.mapSize:200,this.multiplayer=null,window.addEventListener("mousemove",n=>{const s=n.clientX/window.innerWidth*2-1,o=-(n.clientY/window.innerHeight)*2+1;if(this.mouse.set(s,o),this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const a=[];this.player.enemyManager.enemies.forEach(c=>{c.mesh.traverse(h=>{h.isMesh&&a.push(h)})}),this.raycaster.setFromCamera(this.mouse,this.player.camera);const l=this.raycaster.intersectObjects(a,!0);if(l.length>0){const c=l[0].object;let h=c,u=null;for(;h&&(u=this.player.enemyManager.enemies.find(d=>h.parent===d.mesh||h===d.mesh||d.mesh.children.includes(h)),!u);)h=h.parent;this.hoveredEnemy=u||c||null}else this.hoveredEnemy=null}});try{this.slots.forEach((n,s)=>{const o=a=>{try{a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),this.player&&typeof this.player.switchWeapon=="function"&&this.player.switchWeapon(s)}catch{}};n.addEventListener("pointerdown",o),n.addEventListener("touchstart",o,{passive:!1}),n.addEventListener("click",o)})}catch{}}update(){var l,c;if(this.hoveredEnemy=null,this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0&&this.currentOutlinedEnemy!==this.hoveredEnemy){if(this.currentOutlinedEnemy&&this.currentOutlinedEnemy._outline){try{this.currentOutlinedEnemy.mesh.remove(this.currentOutlinedEnemy._outline)}catch{}this.currentOutlinedEnemy._outline=null}if(this.hoveredEnemy&&this.hoveredEnemy.mesh){const h=new Xe;this.hoveredEnemy.mesh.traverse(u=>{if(u.isMesh){const d=new k(u.geometry,new _i({color:16776960,side:Rt}));d.position.copy(u.position),d.quaternion.copy(u.quaternion),d.scale.copy(u.scale).multiplyScalar(1.06),d.renderOrder=999,d.material.depthTest=!0,h.add(d)}}),this.hoveredEnemy.mesh.add(h),this.hoveredEnemy._outline=h}this.currentOutlinedEnemy=this.hoveredEnemy}this.frames++;const e=performance.now();e-this.lastFpsTime>=1e3&&(this.fpsCounter.innerText=this.frames,this.frames=0,this.lastFpsTime=e,performance.memory&&this.memoryUsage&&(this.memoryUsage.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)));const t=e-this.lastFrameTime;if(this.lastFrameTime=e,this.player.enemyManager&&(this.enemyCount.innerText=this.player.enemyManager.enemies.length,this.killCount.innerText=this.player.enemyManager.killedCount||0),this.dropCount){const h=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;if(h&&Array.isArray(h.items)){const u=h.items.filter(d=>!(d.userData&&d.userData.isOpened)).length;this.dropCount.innerText=u}else this.dropCount.innerText="0"}const i=(this.player.distanceTraveled/1e3).toFixed(2);if(this.distanceTraveled&&(this.distanceTraveled.innerText=i),this.playerSpeed){let h=0;this.player.isInVehicle&&typeof this.player.currentSpeed=="number"?h=this.player.currentSpeed*3.6:typeof this.player.currentSpeed=="number"&&(h=this.player.currentSpeed*3.6),this.playerSpeed.innerText=h.toFixed(1)}if(this.mapSizeText){const h=this.world&&this.world.mapSize?this.world.mapSize:this.mapSize;this.mapSizeText.innerText=Math.round(h)}if(this._renderer){const h=this._renderer.info;this.perfFrame&&(this.perfFrame.innerText=t.toFixed(1)),this.perfCalls&&(this.perfCalls.innerText=h.render.calls),this.perfTris&&(this.perfTris.innerText=h.render.triangles),this.perfGeoms&&(this.perfGeoms.innerText=h.memory.geometries),this.perfTextures&&(this.perfTextures.innerText=h.memory.textures),this.perfPrograms&&(this.perfPrograms.innerText=h.programs?h.programs.length:"0");let u=0;this.world&&Array.isArray(this.world.objects)&&(u+=this.world.objects.length);const d=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;d&&Array.isArray(d.items)&&(u+=d.items.length),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&(u+=this.player.enemyManager.enemies.length),this.perfObjects&&(this.perfObjects.innerText=u),this.perfMem&&performance.memory&&(this.perfMem.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)),this.perfCpu&&(this.perfCpu.innerText="N/A"),this.perfGpu&&(this.perfGpu.innerText="N/A")}this.healthBar.style.width=`${this.player.health}%`,this.healthText.innerText=Math.ceil(this.player.health),this.shieldBar.style.width=`${this.player.shield}%`,this.shieldText.innerText=Math.ceil(this.player.shield),this.staminaBar.style.width=`${this.player.stamina}%`,this.staminaText.innerText=Math.ceil(this.player.stamina);const n=this.player.weapons[this.player.currentWeaponIndex];if(this.weaponName.innerText=n.name,this.player.isReloading?this.ammoCount.innerText="RELOADING...":this.ammoCount.innerText=n.ammo===1/0?"∞":`${n.currentMag} / ${n.ammo}`,this.debugContainer&&(this.debugContainer.innerHTML=""),this.debugInfo)if(this.settings.debugMode)if(this.debugInfo.style.display="block",this.hoveredEnemy){const h=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,u=h&&h.userData&&h.userData.gameName?h.userData.gameName:"Enemy",d=h&&h.userData&&(h.userData.gameId||h.userData.gameid)?h.userData.gameId||h.userData.gameid:"---",p=this.hoveredEnemy.position?this.hoveredEnemy.position:h?h.position:null,g=p?this.player.position.distanceTo(p).toFixed(2):"---";this.debugName.innerText=u,this.debugId.innerText=`${d} (${g}m)`}else this.debugName.innerText="None",this.debugId.innerText="---";else this.debugInfo.style.display="none";let s=null;if(this.hoveredPlayer=null,!this.hoveredEnemy&&this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const h=[];if(this.player.enemyManager.enemies.forEach(u=>{u.mesh.traverse(d=>{d.isMesh&&h.push(d)})}),h.length>0){this.raycaster.setFromCamera(new Se(0,0),this.player.camera);const u=this.raycaster.intersectObjects(h,!0);if(u.length>0){let p=u[0].object,g=null;for(;p&&(g=this.player.enemyManager.enemies.find(_=>p.parent===_.mesh||p===_.mesh||_.mesh.children.includes(p)),!g);)p=p.parent;g?this.hoveredEnemy=g:this.hoveredEnemy=null}else this.hoveredEnemy=null}}if(!this.hoveredEnemy&&this.multiplayer&&this.multiplayer.others&&this.multiplayer.others.size>0){const h=[];if(this.multiplayer.others.forEach(u=>{u&&(u.isMesh?h.push(u):u.traverse&&u.traverse(d=>{d.isMesh&&h.push(d)}))}),h.length>0){this.raycaster.setFromCamera(new Se(0,0),this.player.camera);const u=this.raycaster.intersectObjects(h,!0);if(u.length>0){let d=u[0].object;for(;d.parent&&!((l=d.userData)!=null&&l.nick)&&!this.multiplayer.others.has((c=d.userData)==null?void 0:c.gameId);)d=d.parent;this.hoveredPlayer=d}}}if(this.hoverInfo)if(this.hoveredEnemy){const h=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,u=h&&h.userData&&(h.userData.gameId||h.userData.gameid)?h.userData.gameId||h.userData.gameid:"---",d=this.hoveredEnemy.position?this.hoveredEnemy.position:h?h.position:null;s=d?this.player.position.distanceTo(d):null;const p=s?s.toFixed(2):"---";this.hoverInfo.innerText=`${u} • ${p}m`}else if(this.hoveredPlayer){const h=this.hoveredPlayer.userData&&this.hoveredPlayer.userData.nick?this.hoveredPlayer.userData.nick:"Player";let u=null;this.hoveredPlayer.getWorldPosition?(u=new R,this.hoveredPlayer.getWorldPosition(u)):u=this.hoveredPlayer.position||null,s=u?this.player.position.distanceTo(u):null;const d=s?s.toFixed(2):"---";this.hoverInfo.innerText=`${h} • ${d}m`}else this.hoverInfo.innerText="";if(this.scopeOverlay){const h=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],u=this.player.isAiming&&h&&h.name==="Sniper";this.scopeOverlay.classList.toggle("hidden",!u);const d=document.getElementById("crosshair");d&&d.classList.toggle("hidden",u)}const o=document.getElementById("crosshair");if(o){o.classList.remove("target-red","target-yellow");const h=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],u=h&&h.range?h.range:1e3;this.hoveredEnemy&&s!==null&&(s<=u?o.classList.add("target-red"):o.classList.add("target-yellow"))}this.updateMinimap(),this.slots.forEach(h=>h.style.display="none"),this.player.weapons.forEach((h,u)=>{let d=this.slots[u];d&&(d.style.display="flex",d.innerText=u+1,u===this.player.currentWeaponIndex?d.classList.add("active"):d.classList.remove("active"))});const a=performance.now();if(a-this.lastTime>1e3){this.timeRemaining--,this.timeRemaining<0&&(this.timeRemaining=0);const h=Math.floor(this.timeRemaining/60).toString().padStart(2,"0"),u=(this.timeRemaining%60).toString().padStart(2,"0");this.timerValue.innerText=`${h}:${u}`,this.lastTime=a}this.player.isDead&&this.player.gameMode!=="matrix"&&this.showGameOver("YOU DIED"),this.updateTargetInspect()}showSelectionInfo(e,t){if(!this.selectionInfo)return;const i=e||"Object",n=t||"---";this.selectionInfo.innerText=`${i} (${n})`,this.selectionInfo.classList.remove("hidden"),this.selectionInfoTimeout&&clearTimeout(this.selectionInfoTimeout),this.selectionInfoTimeout=setTimeout(()=>{try{this.selectionInfo.classList.add("hidden")}catch{}},2500)}updateTargetInspect(){if(!this.targetInspect||!this.player||!this.player.camera)return;const e=this.raycaster,t=new Se(0,0);e.setFromCamera(t,this.player.camera);const i=[];if(this.world&&Array.isArray(this.world.objects)&&i.push(...this.world.objects),this.world&&this.world.itemManager&&Array.isArray(this.world.itemManager.items)&&i.push(...this.world.itemManager.items),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&this.player.enemyManager.enemies.forEach(h=>{h&&h.mesh&&i.push(h.mesh)}),i.length===0){this.targetInspect.innerText="Target: ---";return}const n=Array.from(new Set(i)),s=e.intersectObjects(n,!0);if(!s.length){this.targetInspect.innerText="Target: ---";return}let o=null;for(let h=0;h<s.length;h++){let u=s[h].object;for(;u;){if(u.userData&&(u.userData.gameName||u.userData.type||u.userData.gameId||u.userData.gameid)){o=u.userData;break}u=u.parent}if(o)break}if(!o){this.targetInspect.innerText="Target: ---";return}const a=o.gameName||"Object",l=o.gameId||o.gameid||"---",c=o.type||"---";this.targetInspect.innerText=`Target: ${a} (ID: ${l}) [${c}]`}showGameOver(e){if(this.player&&this.player.gameMode==="matrix"||this.gameOverShown)return;this.gameOverShown=!0,this.gameOverScreen.classList.remove("hidden"),document.getElementById("game-over-title").innerText=e;try{const i=document.getElementById("touch-controls");i&&(i.style.display="none")}catch{}const t=document.getElementById("restart-btn");t.onclick=()=>{location.reload()},t.style.pointerEvents="auto",t.style.cursor="pointer";try{typeof window<"u"&&window.game&&e&&e.toUpperCase().includes("DIED")&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(Jp)}catch{}}showVictory(){if(!(this.player&&this.player.gameMode==="matrix")){this.gameOverShown=!1,this.showGameOver("VICTORY ROYALE!"),document.getElementById("game-over-title").style.color="#f1c40f";try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}try{const e=document.getElementById("touch-controls");e&&(e.style.display="none")}catch{}try{typeof window<"u"&&window.game&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(Qp)}catch{}}}updateMinimap(){if(!this.minimapContainer)return;const e=this.settings.showMinimap!==!1;if(this.minimapContainer.classList.toggle("hidden",!e),!e||!this.minimapCtx||!this.player)return;const t=this.minimapCtx,i=this.minimapSize;t.clearRect(0,0,i,i),t.fillStyle="rgba(10, 12, 20, 0.75)",t.fillRect(0,0,i,i),t.strokeStyle="rgba(255, 255, 255, 0.25)",t.lineWidth=2,t.strokeRect(1,1,i-2,i-2);const n=Math.max(1,this.world&&this.world.halfMapSize?this.world.halfMapSize:this.mapSize/2),s=i*.45,o=i/2,a=i/2;if(this.world&&typeof this.world.stormRadius=="number"&&this.world.stormRadius>0){const d=Math.max(0,Math.min(1.2,this.world.stormRadius/n)),p=s*d;t.beginPath(),t.strokeStyle="rgba(157, 77, 187, 0.85)",t.lineWidth=3,t.arc(o,a,p,0,Math.PI*2),t.stroke()}const l=this.player&&this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)?this.player.enemyManager.enemies:[];l.length&&(t.fillStyle="#ff3b30",t.strokeStyle="#660000",t.lineWidth=1.5,l.forEach(d=>{if(!d)return;const p=d.position||d.mesh&&d.mesh.position;if(!p)return;const g=Math.max(o-s,Math.min(o+s,o+p.x/n*s)),_=Math.max(a-s,Math.min(a+s,a-p.z/n*s));t.beginPath(),t.arc(g,_,4,0,Math.PI*2),t.fill(),t.stroke()}));const c=this.world&&Array.isArray(this.world.objects)?this.world.objects.filter(d=>d&&d.userData&&d.userData.type==="house"):[];c.length&&(t.fillStyle="#ffd166",t.strokeStyle="#8c5a00",t.lineWidth=1,c.forEach(d=>{const p=d.position;if(!p)return;const g=Math.max(o-s,Math.min(o+s,o+p.x/n*s)),_=Math.max(a-s,Math.min(a+s,a-p.z/n*s));t.beginPath(),t.arc(g,_,3,0,Math.PI*2),t.fill(),t.stroke()}));const h=Math.max(o-s,Math.min(o+s,o+this.player.position.x/n*s)),u=Math.max(a-s,Math.min(a+s,a-this.player.position.z/n*s));t.beginPath(),t.fillStyle="#00d8ff",t.strokeStyle="#ffffff",t.lineWidth=2,t.arc(h,u,6,0,Math.PI*2),t.fill(),t.stroke(),this.multiplayer&&this.multiplayer.others&&this.multiplayer.others.size>0&&this.multiplayer.others.forEach(d=>{if(!d||!d.position)return;const p=Math.max(o-s,Math.min(o+s,o+d.position.x/n*s)),g=Math.max(a-s,Math.min(a+s,a-d.position.z/n*s)),_=d.userData&&d.userData.color?d.userData.color:"#ffaa00";t.beginPath(),t.fillStyle=_,t.strokeStyle="#111",t.lineWidth=2,t.arc(p,g,5,0,Math.PI*2),t.fill(),t.stroke()});try{const d=new R;if(this.player&&this.player.camera&&this.player.camera.getWorldDirection&&this.player.camera.getWorldDirection(d),d.y=0,d.lengthSq()<1e-4&&this.player.mesh&&(d.set(0,0,-1).applyEuler(this.player.mesh.rotation),d.y=0),d.lengthSq()>1e-4){d.normalize();const p=d.x,g=-d.z,_=Math.atan2(g,p)+Math.PI/2;t.save(),t.translate(h,u),t.rotate(_),t.beginPath(),t.moveTo(0,-10),t.lineTo(6,8),t.lineTo(-6,8),t.closePath(),t.fillStyle="#00d8ff",t.strokeStyle="#003f4f",t.lineWidth=2,t.fill(),t.stroke(),t.restore()}}catch{}}setRenderer(e){this._renderer=e}setMultiplayer(e){this.multiplayer=e}}const tm="/threejs-voxel-firecraft/dist/assets/mixkit-kill-blood-zombie-By90BKfb.ogg",im="/threejs-voxel-firecraft/dist/assets/zombie-B8PCKsyJ.ogg";class nm{constructor(e,t,i,n){this.scene=e,this.player=t,this.world=i,this.enemies=[],this.spawnInterval=5e3,this.lastSpawn=0,this.killedCount=0,this.groanBuffer=null;const s=n&&(n.gameMode==="matrix"||n.gameMode==="studio")?0:n&&n.gameMode==="matrix-ai"?5:n?n.enemyCount:15;this.targetCount=s,this.difficulty=n?n.difficulty:"medium",this.gameMode=n&&n.gameMode?n.gameMode:"survival",this.studioAiEnabled=!1;for(let o=0;o<s;o++)this.spawnEnemy();this.deathBuffer=null;try{const o=window.AudioContext||window.webkitAudioContext;o&&(this.audioCtx=new o,fetch(tm).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.deathBuffer=a,this.enemies.forEach(l=>{l.audioCtx=this.audioCtx,l.deathBuffer=a})}).catch(a=>{}),fetch(im).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.groanBuffer=a,this.enemies.forEach(l=>{l.audioCtx=this.audioCtx,l.groanBuffer=a})}).catch(a=>{}))}catch{}}spawnEnemy(e=!1){if(!e&&(this.gameMode==="matrix"||this.gameMode==="studio"))return;const t=this.world&&this.world.halfMapSize?this.world.halfMapSize:100;let i=(Math.random()-.5)*t,n=(Math.random()-.5)*t;if(this.gameMode==="matrix-ai"&&this.player){const l=(this.world&&this.world.halfMapSize?this.world.halfMapSize:100)*.6;let c=0;for(;c<10;){const h=this.player.position.x,u=this.player.position.z,d=i-h,p=n-u;if(Math.sqrt(d*d+p*p)>=l)break;i=(Math.random()-.5)*t,n=(Math.random()-.5)*t,c++}}const s=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(i,n):0,o=this.world&&this.world.halfMapSize?this.world.halfMapSize:100,a=new sm(this.scene,i,s,n,this.difficulty,o,this.player);a.audioCtx=this.audioCtx,a.deathBuffer=this.deathBuffer,a.groanBuffer=this.groanBuffer,a.world=this.world,this.enemies.push(a),e&&this.gameMode==="studio"&&(this.studioAiEnabled=!0)}setTargetCount(e){typeof e=="number"&&e>=0&&(this.targetCount=e)}update(e){if(this.gameMode!=="matrix"&&!(this.gameMode==="studio"&&!this.studioAiEnabled)&&(this.enemies.forEach(t=>{if(t.update(e,this.player),Math.sqrt(t.position.x*t.position.x+t.position.z*t.position.z)>this.world.stormRadius&&t.takeDamage(5*e),this.world&&typeof this.world.halfMapSize=="number"){const n=this.world.halfMapSize-1;t.position.x=Math.max(-n,Math.min(n,t.position.x)),t.position.z=Math.max(-n,Math.min(n,t.position.z))}}),this.enemies=this.enemies.filter(t=>t.readyToDespawn?(this.killedCount++,!1):!0),this.gameMode!=="multiplayer"&&this.targetCount!==void 0&&this.targetCount>0)){const t=this.targetCount-this.enemies.length;if(t>0)for(let i=0;i<t;i++)this.spawnEnemy()}}}class sm{constructor(e,t,i,n,s,o=100,a=null){this.scene=e,this.position=new R(t,i,n),this.mapHalfSize=o,this.world=null,this.player=a,this.deathTimer=0,this.deathDuration=0,this.deathFallProgress=0,this.readyToDespawn=!1,this.groanBuffer=null,this.groanCooldown=0,this.groanRange=15,this._groanSource=null,this._groanGain=null,s==="easy"?(this.health=50,this.damage=2,this.speed=3):s==="hard"?(this.health=150,this.damage=10,this.speed=6):(this.health=100,this.damage=5,this.speed=4.5),this.state="wander",this.isDead=!1,this.attackRange=2,this.detectionRange=25,this.attackCooldown=1.5,this.lastAttack=0,this.wanderTarget=null,this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4,this.createMesh()}createMesh(){this.mesh=new Xe,this.mesh.position.copy(this.position),this.mesh.userData={gameId:Math.random().toString(36).substr(2,9).toUpperCase(),gameName:"Zombie"},this.scene.add(this.mesh);const e=new Q({color:9323693}),t=new Q({color:2899536}),i=new k(new ie(.5,.5,.5),e);i.position.y=1.75,this.mesh.add(i);const n=new Q({color:16717636,emissive:16717636,emissiveIntensity:.8,roughness:.2}),s=new ie(.12,.08,.02),o=new k(s,n);o.position.set(-.12,.05,.26);const a=o.clone();a.position.x=.12,i.add(o),i.add(a);const l=new Q({color:855309,emissive:3342336,emissiveIntensity:.4}),c=new k(new ie(.24,.08,.04),l);c.position.set(0,-.14,.25),i.add(c);const h=new Q({color:15921906,roughness:.3}),u=new ie(.05,.06,.02);for(let _=-1;_<=1;_+=2){const m=new k(u,h);m.position.set(_*.06,-.05,.04),c.add(m)}const d=new k(new ie(.6,.8,.3),t);d.position.y=1.1,this.mesh.add(d);const p=new ie(.2,.8,.2);p.translate(0,-.3,0),this.leftArmPivot=new Xe,this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot),this.leftArmPivot.add(new k(p,e)),this.rightArmPivot=new Xe,this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot),this.rightArmPivot.add(new k(p,e));const g=new ie(.25,.8,.25);g.translate(0,-.4,0),this.leftLegPivot=new Xe,this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot),this.leftLegPivot.add(new k(g,t)),this.rightLegPivot=new Xe,this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot),this.rightLegPivot.add(new k(g,t)),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.attackAnimTime=0,this.attackAnimDuration=.5,this.createHealthBar()}createHealthBar(){const e=new Ut(1,.1),t=new _i({color:0});this.healthBarBg=new k(e,t),this.healthBarBg.position.y=2.3,this.mesh.add(this.healthBarBg);const i=new Ut(1,.1),n=new _i({color:16711680});this.healthBarFg=new k(i,n),this.healthBarFg.position.y=2.3,this.healthBarFg.position.z=.01,this.mesh.add(this.healthBarFg)}update(e,t){if(this.isDead){this.updateDeath(e);return}this.groanCooldown=Math.max(0,this.groanCooldown-e),this.groanBuffer&&this.audioCtx&&t&&this.groanCooldown<=0&&this.position.distanceTo(t.position)<=this.groanRange&&(this.playGroan(),this.groanCooldown=2+Math.random()*2.5);const i=t.position;this.healthBarBg.lookAt(i),this.healthBarFg.lookAt(i);const n=this.position.distanceTo(i);n<this.detectionRange?this.state="chase":this.state="wander";let s=!1;if(this.state==="chase"){const o=this.hasLineOfSight(t,i);if(n<this.detectionRange&&o){const a=new R().subVectors(i,this.position).normalize();if(a.y=0,n>2){const c=a.clone(),h=Math.sin(performance.now()/500+this.position.x)*.5,u=new R(a.z,0,-a.x).multiplyScalar(h);c.add(u).normalize();const d=this.position.clone().add(c.multiplyScalar(this.speed*e));this.checkCollision(d)||this.position.copy(d),this.mesh.lookAt(i),s=!0}else{const c=a.clone().multiplyScalar(-1),h=this.position.clone().add(c.multiplyScalar(this.speed*e*.5));this.checkCollision(h)||this.position.copy(h),this.mesh.lookAt(i)}if(n<this.attackRange){const c=performance.now()/1e3;c-this.lastAttack>this.attackCooldown&&(t.takeDamage(this.damage),this.lastAttack=c,this.attackAnimTime=this.attackAnimDuration)}}else this.state="wander"}else{if(this.wanderTimer+=e,!this.wanderTarget||this.wanderTimer>this.wanderChangeInterval){const o=10+Math.random()*30,a=Math.random()*Math.PI*2,l=this.position.x+Math.cos(a)*o,c=this.position.z+Math.sin(a)*o,h=(g,_,m)=>Math.max(_,Math.min(m,g)),u=this.mapHalfSize*.9,d=h(l,-u,u),p=h(c,-u,u);this.wanderTarget=new R(d,0,p),this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4}if(this.wanderTarget){const o=new R().subVectors(this.wanderTarget,this.position);o.y=0,o.length()>.5?(o.normalize(),this.position.add(o.multiplyScalar(this.speed*e*.5)),this.mesh.lookAt(this.wanderTarget.x,this.position.y,this.wanderTarget.z),s=!0):(this.wanderTimer+=e,this.wanderTimer>this.wanderChangeInterval&&(this.wanderTarget=null,this.wanderTimer=0))}}if(this.mesh.position.copy(this.position),this.world&&typeof this.world.getHeightAt=="function"){const o=this.world.getHeightAt(this.position.x,this.position.z);this.mesh.position.y=Math.max(this.mesh.position.y,o),this.position.y=this.mesh.position.y}if(s){this.animTime+=e*5;const o=Math.sin(this.animTime)*.5;this.leftLegPivot.rotation.x=o,this.rightLegPivot.rotation.x=-o,this.leftArmPivot.rotation.x=-Math.PI/3+o*.2,this.rightArmPivot.rotation.x=-Math.PI/3-o*.2}else this.state!=="attack"&&(this.leftLegPivot.rotation.x=0,this.rightLegPivot.rotation.x=0,this.leftArmPivot.rotation.x=-Math.PI/3,this.rightArmPivot.rotation.x=-Math.PI/3);if(this.attackAnimTime>0){this.attackAnimTime=Math.max(0,this.attackAnimTime-e);const o=1-this.attackAnimTime/this.attackAnimDuration,a=Math.sin(o*Math.PI)*1.5;if(this.leftArmPivot.rotation.x=-Math.PI/2+a*.2,this.rightArmPivot.rotation.x=-Math.PI/2-a*.2,o>.3&&o<.7){const l=new R;this.mesh.getWorldDirection(l),l.y=0,l.normalize(),this.position.add(l.multiplyScalar(.02))}}}takeDamage(e){this.health-=e;const t=Math.max(0,this.health/100);this.healthBarFg.scale.x=t,this.mesh.traverse(i=>{if(i.isMesh&&i!==this.healthBarBg&&i!==this.healthBarFg){const n=i.material;if(!i.userData.originalColor&&n&&n.color)try{i.userData.originalColor=n.color.clone()}catch{i.userData.originalColor=null}if(n&&(n.isMeshStandardMaterial||n.isMeshPhongMaterial||n.isMeshLambertMaterial))n.emissive=new be(16711680);else if(n&&n.color)try{n.color=n.color.clone().lerp(new be(16711680),.6)}catch{}}}),setTimeout(()=>{this.isDead||this.mesh.traverse(i=>{if(i.isMesh&&i!==this.healthBarBg&&i!==this.healthBarFg){const n=i.material;if(n&&(n.isMeshStandardMaterial||n.isMeshPhongMaterial||n.isMeshLambertMaterial))n.emissive=new be(0);else if(n&&n.color&&i.userData&&i.userData.originalColor)try{n.color.copy(i.userData.originalColor)}catch{}}})},100),this.health<=0&&!this.isDead&&this.startDeath()}playDeathSound(){try{const e=this.audioCtx.createBufferSource();e.buffer=this.deathBuffer;const t=this.audioCtx.createGain();t.gain.value=.7,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}catch(e){console.warn("playDeathSound error:",e)}}checkCollision(e){if(!this.scene)return!1;const t=.5;for(let i of this.scene.children)if(i.userData&&(i.userData.type==="house"||i.userData.type==="tree")){const n=i.position,s=Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.z-n.z,2)),o=i.userData.type==="house"?5:2;if(s<t+o)return!0}return!1}hasLineOfSight(e,t){if(!this.scene)return!0;const i=new R().subVectors(t,this.position).normalize(),n=this.position.distanceTo(t),o=new Kt(this.position.clone().add(new R(0,1,0)),i,0,n).intersectObjects(this.scene.children,!0);for(let a of o){if(a.object===this.mesh||a.object.parent===this.mesh||a.object===e.mesh||a.object.parent===e.mesh)continue;let l=a.object;for(;l.parent&&l.parent!==this.scene;)l=l.parent;if(l.userData&&(l.userData.type==="house"||l.userData.type==="tree"))return!1}return!0}startDeath(){this.isDead=!0,this.deathTimer=0,this.deathFallProgress=0,this.deathDuration=3+Math.random()*2,this.stopGroan(),this.healthBarBg&&(this.healthBarBg.visible=!1),this.healthBarFg&&(this.healthBarFg.visible=!1);const e=25,t=this.player&&this.player.position;if(t?this.position.distanceTo(t)<=e:!0)try{this.audioCtx&&this.deathBuffer&&(this.audioCtx.state==="suspended"?this.audioCtx.resume().then(()=>{this.playDeathSound()}):this.audioCtx.state==="running"&&this.playDeathSound())}catch(n){console.warn("Error playing death sound:",n)}}updateDeath(e){this.deathFallProgress=Math.min(1,this.deathFallProgress+e*2.5);const t=-Math.PI/2*this.deathFallProgress;this.mesh&&(this.mesh.rotation.x=t,this.mesh.position.y=Math.max(0,this.mesh.position.y-e*.6)),this.deathTimer+=e,this.deathTimer>=(this.deathDuration||3)&&(this.mesh&&this.mesh.parent&&this.scene.remove(this.mesh),this.readyToDespawn=!0)}playGroan(){try{if(!this.audioCtx||!this.groanBuffer)return;if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playGroan());return}const e=this.audioCtx.createBufferSource();e.buffer=this.groanBuffer;const t=this.audioCtx.createGain();t.gain.value=.45,e.connect(t),t.connect(this.audioCtx.destination),e.onended=()=>{this._groanSource=null,this._groanGain=null},e.start(0),this._groanSource=e,this._groanGain=t}catch(e){console.warn("playGroan error:",e)}}stopGroan(){if(this._groanSource){try{this._groanSource.stop()}catch{}try{this._groanSource.disconnect()}catch{}this._groanSource=null}if(this._groanGain){try{this._groanGain.disconnect()}catch{}this._groanGain=null}}}class rm{constructor(e,t,i){this.scene=e,this.player=t,this.items=[],this.interactionPrompt=document.getElementById("interaction-prompt"),this.mapSize=i&&i.mapSize?i.mapSize:ms,this.spawnSpan=this.mapSize*.75,this.glowRadius=7,this.world=null,this.settings=i||{},this.matrixDropInterval=5,this._matrixDropTimer=0,this.matrixDropBatchSize=10,this.matrixDropRadiusLimit=10,this.initLoot(),document.addEventListener("keydown",n=>{n.code==="KeyE"&&this.tryInteract()})}setWorld(e){this.world=e,this.realignItemsToGround()}getClampedCoord(e,t){if(this.world&&typeof this.world.halfMapSize=="number"){const i=this.world.halfMapSize-1;return{x:Math.max(-i,Math.min(i,e)),z:Math.max(-i,Math.min(i,t))}}return{x:e,z:t}}initLoot(){if(this.settings.gameMode==="matrix"||this.settings.gameMode==="studio"||this.settings.skipLoot)return;for(let t=0;t<24;t++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n)),this.createChest(i,.5,n)}for(let t=0;t<36;t++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n)),this.spawnJuiceBottle(i,n)}const e=[2899536,15105570,1752220,15158332,10181046];for(let t=0;t<8;t++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n));const s=e[t%e.length];this.spawnBackpack(i,n,s)}}createChest(e,t,i){this.spawnChest(e,i)}spawnChest(e,t){const i=new Xe;({x:e,z:t}=this.getClampedCoord(e,t));let n=.5;this.world&&typeof this.world.getHeightAt=="function"&&(n=this.world.getHeightAt(e,t)+.5),i.position.set(e,n,t);const s=new ie(1,.8,.6),o=new Q({color:15844367,roughness:.3,metalness:.5}),a=new k(s,o);i.add(a);const l=new ie(1,.2,.6),c=new k(l,o);c.position.y=.5,i.add(c);const h=new k(new ie(.2,.3,.1),new Q({color:9807270}));h.position.set(0,.3,.3),i.add(h),i.castShadow=!0,i.receiveShadow=!0;const u=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR"],d=u[Math.floor(Math.random()*u.length)];i.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:d};const p=this.createGlowEffect();return p.position.y=1,i.add(p),i.userData.glow=p,this.scene.add(i),this.items.push(i),i}spawnChestWithLoot(e,t,i){const n=new Xe;({x:e,z:t}=this.getClampedCoord(e,t));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(e,t)+.5),n.position.set(e,s,t);const o=new ie(1,.8,.6),a=new Q({color:15844367,roughness:.3,metalness:.5}),l=new k(o,a);n.add(l);const c=new ie(1,.2,.6),h=new k(c,a);h.position.y=.5,n.add(h);const u=new k(new ie(.2,.3,.1),new Q({color:9807270}));u.position.set(0,.3,.3),n.add(u),n.castShadow=!0,n.receiveShadow=!0,n.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:i};const d=this.createGlowEffect();return d.position.y=1,n.add(d),n.userData.glow=d,this.scene.add(n),this.items.push(n),n}spawnJuiceBottle(e,t){const i=new Xe;({x:e,z:t}=this.getClampedCoord(e,t));let n=.5;this.world&&typeof this.world.getHeightAt=="function"&&(n=this.world.getHeightAt(e,t)+.5),i.position.set(e,n,t);const s=new k(new mt(.2,.2,.6,8),new Q({color:2600544}));s.position.y=.5,i.add(s);const o=new k(new mt(.12,.12,.15,8),new Q({color:12597547}));o.position.y=.9,i.add(o),i.castShadow=!0,i.receiveShadow=!0,i.userData={type:"stamina",gameId:this.generateID(),gameName:"JuiceBottle",amount:50};const a=this.createGlowEffect();return a.position.y=.9,i.add(a),i.userData.glow=a,this.scene.add(i),this.items.push(i),i}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}spawnLootInHouse(e,t,i){this.spawnChest(e,i)}spawnBackpack(e,t,i){const n=new Xe;({x:e,z:t}=this.getClampedCoord(e,t));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(e,t)+.5),n.position.set(e,s,t);const o=new k(new ie(.7,.9,.35),new Q({color:i,metalness:.15,roughness:.8}));n.add(o);const a=new k(new ie(.6,.25,.16),new Q({color:3426654,metalness:.1,roughness:.8}));a.position.set(0,-.55,.18),n.add(a),n.castShadow=!0,n.receiveShadow=!0;const l=this.createGlowEffect();return l.position.y=1,n.add(l),n.userData={type:"backpack",color:i,gameId:this.generateID(),gameName:"Backpack",isOpened:!1,glow:l},this.scene.add(n),this.items.push(n),n}spawnMatrixLoadout(e=0,t=0){[{dx:2,dz:0,loot:"Pistol"},{dx:-2,dz:0,loot:"Rifle"},{dx:0,dz:2,loot:"Sniper"},{dx:0,dz:-2,loot:"ShieldPotion"},{dx:2,dz:2,loot:"SMG"},{dx:-2,dz:-2,loot:"Shotgun"},{dx:-2,dz:2,loot:"DMR"}].forEach(s=>{this.spawnChestWithLoot(e+s.dx,t+s.dz,s.loot)}),this.spawnJuiceBottle(e+3,t+3),this.spawnJuiceBottle(e-3,t-3),[2899536,15105570,1752220].forEach((s,o)=>{this.spawnBackpack(e+(o-1)*2,t+4,s)})}countNearbyChests(e=10){if(!this.player)return 0;const t=this.player.position;let i=0;return this.items.forEach(n=>{const s=n.userData||{};if(s.type!=="chest"||s.isOpened)return;const o=n.position.x-t.x,a=n.position.z-t.z;Math.sqrt(o*o+a*a)<=e&&i++}),i}createUmbrella(){const e=new Xe,t=new k(new mt(.08,.08,1.6,6),new Q({color:4863016,roughness:.8}));t.position.y=-.2,e.add(t),[16726832,15844367,3447003].forEach((s,o)=>{const a=new k(new ie(1.8-o*.3,.15,1.8-o*.3),new Q({color:s,roughness:.4,metalness:.2}));a.position.y=.7+o*.12,e.add(a)});const n=new k(new an(.2,.25,6),new Q({color:2899536}));return n.position.y=1.1,e.add(n),e.castShadow=!0,e.receiveShadow=!0,e}spawnMatrixDropNearPlayer(){if(!this.player)return;const e=Math.random()*Math.PI*2,t=4+Math.random()*8;let i=this.player.position.x+Math.cos(e)*t,n=this.player.position.z+Math.sin(e)*t;({x:i,z:n}=this.getClampedCoord(i,n));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(i,n)+.5);const o=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR"],a=o[Math.floor(Math.random()*o.length)],l=this.spawnChestWithLoot(i,n,a);if(l){l.position.y=s+18,l.userData.isDropping=!0,l.userData.dropTargetY=s,l.userData.dropVelocity=0;const c=this.createUmbrella();c.position.y=1.2,l.add(c),l.userData.umbrella=c}}spawnMatrixDropsBatch(){if(this.countNearbyChests(this.matrixDropRadiusLimit)>=this.matrixDropBatchSize)return;const e=this.matrixDropBatchSize-this.countNearbyChests(this.matrixDropRadiusLimit),t=Math.max(0,Math.min(this.matrixDropBatchSize,e));for(let i=0;i<t;i++)this.spawnMatrixDropNearPlayer()}update(e=.016){const t=Math.max(0,e||0);this.settings.gameMode==="matrix"&&this.player&&(this._matrixDropTimer+=t,this._matrixDropTimer>=this.matrixDropInterval&&(this._matrixDropTimer=0,this.spawnMatrixDropsBatch())),this.items.forEach(s=>{const o=s.userData||{};if(o.isDropping&&(o.dropVelocity=(o.dropVelocity||0)+5*t,s.position.y-=o.dropVelocity*t,s.position.y<=o.dropTargetY&&(s.position.y=o.dropTargetY,o.isDropping=!1,o.dropVelocity=0,o.umbrella))){try{s.remove(o.umbrella)}catch{}o.umbrella=null}});let i=null;const n=this.player.position;for(const s of this.items){if(s.userData&&s.userData.isOpened)continue;const o=n.distanceTo(s.position);if(this.updateGlow(s,o),o<3){i=s;break}}if(!(this.interactionPrompt&&this.interactionPrompt.dataset.vehiclePrompt==="1"))if(i){this.interactionPrompt.classList.remove("hidden");const s=i.userData||{};if(s.type==="chest")this.interactionPrompt.innerText=`Press E to open (Contains: ${s.loot})`;else if(s.type==="stamina")this.interactionPrompt.innerText=`Press E to collect ${s.gameName} (+${s.amount} Stamina)`;else if(s.type==="backpack"){const o=s.color?"#"+s.color.toString(16).padStart(6,"0"):"";this.interactionPrompt.innerText=`Press E to equip Backpack ${o}`}else this.interactionPrompt.innerText="Press E to interact";this.currentItem=i}else this.interactionPrompt.classList.add("hidden"),this.currentItem=null}tryInteract(){if(this.currentItem){const e=this.currentItem.userData;if(!e)return;if(e.type==="chest"&&!e.isOpened)e.isOpened=!0,this.scene.remove(this.currentItem),this.player.collectItem(e.loot),console.log(`Looted ${e.loot}!`);else if(e.type==="stamina"){const t=e.amount||50;this.player&&(this.player.stamina=Math.min(100,this.player.stamina+t)),this.scene.remove(this.currentItem),e.isOpened=!0,console.log(`Picked up stamina item: +${t}`)}else if(e.type==="backpack"){const t=e.color||2899536;if(this.player&&typeof this.player.collectItem=="function"){const i=this.player.collectItem(`Backpack:${t.toString(16)}`);if(i!=null){const n=this.player.position.clone();this.spawnBackpack(n.x+.5,n.z+.5,i)}}this.scene.remove(this.currentItem),e.isOpened=!0,console.log(`Equipped backpack ${t.toString(16)}`)}}}realignItemsToGround(){!this.world||typeof this.world.getHeightAt!="function"||this.items.forEach(e=>{const t=e.position,i=this.world.getHeightAt(t.x,t.z),n=(e.userData&&e.userData.type==="chest",.5);e.position.y=i+n})}updateGlow(e,t){if(!e||!e.userData||!e.userData.glow)return;const i=e.userData.glow,n=!e.userData.isOpened&&t<this.glowRadius;i.visible=n,n&&(i.rotation.y+=.02,i.position.y=(e.userData.type==="chest"?1:.9)+Math.sin(performance.now()/500)*.1)}createGlowEffect(){const t=new Float32Array(120),i=.6;for(let a=0;a<40;a++){const l=i*Math.random(),c=Math.random()*Math.PI*2,h=Math.random()*i*.6;t[a*3]=Math.cos(c)*l,t[a*3+1]=h,t[a*3+2]=Math.sin(c)*l}const n=new ut;n.setAttribute("position",new wt(t,3));const s=new Ya({color:16765286,size:.15,transparent:!0,opacity:.9,depthWrite:!1,blending:sr,sizeAttenuation:!0}),o=new Ep(n,s);return o.visible=!1,o}}class om{constructor(e,t={}){this.player=e,this.container=document.getElementById("touch-controls"),this.enabled=!0,this.joystick=document.createElement("div"),this.joystick.className="tc-joystick",this.joystick.style.zIndex="210",this.stick=document.createElement("div"),this.stick.className="tc-stick",this.joystick.appendChild(this.stick),this.buttons=document.createElement("div"),this.buttons.className="tc-buttons",this.buttons.style.zIndex="210",this.fireBtn=document.createElement("button"),this.fireBtn.className="tc-btn",this.fireBtn.innerText="FIRE",this.jumpBtn=document.createElement("button"),this.jumpBtn.className="tc-btn",this.jumpBtn.innerText="JUMP",this.sprintBtn=document.createElement("button"),this.sprintBtn.className="tc-btn",this.sprintBtn.innerText="SPRINT",this.interactBtn=document.createElement("button"),this.interactBtn.className="tc-btn tc-interact-btn",this.interactBtn.innerText="E",this.interactBtn.style.display="none",this.crouchBtn=document.createElement("button"),this.crouchBtn.className="tc-btn",this.crouchBtn.innerText="CROUCH",this.crouchBtn.style.fontSize="16px",this.buttons.appendChild(this.fireBtn),this.buttons.appendChild(this.jumpBtn),this.buttons.appendChild(this.sprintBtn),this.buttons.appendChild(this.crouchBtn),this.buttons.appendChild(this.interactBtn),this.container.appendChild(this.joystick),this.container.appendChild(this.buttons),this.container.classList.remove("hidden"),this.active=!1,this.startPos=null,this.currentPos={x:0,y:0},this.lookActive=!1,this.lookStartPos=null,this._bindJoystick(),this._bindButtons(),this._bindLookArea(),this.deadZone=10,this.maxRadius=50,document.body.style.touchAction="none";try{this.player&&(this.player.allowTouchMovement=!0)}catch{}}_dispatchTouchLook(e,t){try{window.dispatchEvent(new CustomEvent("game-touch-look",{detail:{dx:e,dy:t}}))}catch{}}destroy(){try{this.container.classList.add("hidden"),this.container.removeChild(this.joystick),this.container.removeChild(this.buttons),document.body.style.touchAction="",this.player&&(this.player.allowTouchMovement=!1)}catch{}}_bindJoystick(){this.joystick.addEventListener("touchstart",t=>{t.preventDefault();const i=t.changedTouches[0];this.joystick.getBoundingClientRect(),this.startPos={x:i.clientX,y:i.clientY},this.active=!0}),this.joystick.addEventListener("touchmove",t=>{if(!this.active)return;t.preventDefault();const i=t.changedTouches[0],n=i.clientX-this.startPos.x,s=i.clientY-this.startPos.y,o=Math.sqrt(n*n+s*s),a=Math.atan2(s,n),l=Math.min(this.maxRadius,o),c=Math.cos(a)*l,h=Math.sin(a)*l;this.stick.style.transform=`translate(${c}px, ${h}px)`;const u=n/this.maxRadius,d=s/this.maxRadius;this.player.moveForward=d<-.3,this.player.moveBackward=d>.3,this.player.moveLeft=u<-.3,this.player.moveRight=u>.3});const e=t=>{this.active&&(t.preventDefault(),this.active=!1,this.startPos=null,this.stick.style.transform="translate(0,0)",this.player.moveForward=!1,this.player.moveBackward=!1,this.player.moveLeft=!1,this.player.moveRight=!1)};this.joystick.addEventListener("touchend",e),this.joystick.addEventListener("touchcancel",e)}_bindButtons(){let e=null;this.fireBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&typeof this.player.shoot=="function"&&(this.player.shoot(),e=setInterval(()=>{this.player&&typeof this.player.shoot=="function"&&this.player.shoot()},150))}),this.fireBtn.addEventListener("touchend",t=>{t.preventDefault(),e&&(clearInterval(e),e=null)}),this.jumpBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&this.player.canJump===!0&&(this.player.velocity.y+=this.player.jumpHeight,this.player.canJump=!1)}),this.sprintBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&(this.player.isSprinting=!0)}),this.sprintBtn.addEventListener("touchend",t=>{t.preventDefault(),this.player&&(this.player.isSprinting=!1)}),this.interactBtn.addEventListener("touchstart",t=>{t.preventDefault(),window.game&&window.game.itemManager&&window.game.itemManager.tryInteract()}),this.crouchBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&(this.player.isCrouching=!this.player.isCrouching,this.crouchBtn.style.background=this.player.isCrouching?"rgba(52, 152, 219, 0.9)":"rgba(241, 196, 15, 0.9)")})}update(){window.game&&window.game.itemManager&&window.game.itemManager.currentItem?this.interactBtn.style.display="block":this.interactBtn.style.display="none"}destroyLookArea(){try{this.lookArea&&this.container&&this.lookArea.parentElement===this.container&&this.container.removeChild(this.lookArea)}catch{}this.lookArea=null}rebuildLookArea(){this.destroyLookArea(),this._bindLookArea()}_bindLookArea(){try{if(this.lookArea)try{this.container.removeChild(this.lookArea)}catch{}this.lookArea=document.createElement("div"),this.lookArea.className="tc-look-area",this.lookArea.style.position="absolute",this.lookArea.style.top="0",this.lookArea.style.bottom="0",this.lookArea.style.right="0",this.lookArea.style.left="0",this.lookArea.style.width="100%",this.lookArea.style.zIndex="190",this.lookArea.style.background="transparent",this.lookArea.style.touchAction="none",this.lookArea.style.pointerEvents="auto",this.container.appendChild(this.lookArea);let e=null,t=0,i=0;this.lookArea.addEventListener("touchstart",s=>{if(e!==null)return;const o=s.changedTouches[0];e=o.identifier,t=o.clientX,i=o.clientY,s.cancelable&&s.preventDefault()},{passive:!1}),this.lookArea.addEventListener("touchmove",s=>{if(e!==null){s.cancelable&&s.preventDefault();for(let o=0;o<s.changedTouches.length;o++)if(s.changedTouches[o].identifier===e){const a=s.changedTouches[o],l=a.clientX-t,c=a.clientY-i;t=a.clientX,i=a.clientY,this._dispatchTouchLook(l,c);break}}},{passive:!1});const n=s=>{if(e!==null){for(let o=0;o<s.changedTouches.length;o++)if(s.changedTouches[o].identifier===e){e=null;break}}};this.lookArea.addEventListener("touchend",n),this.lookArea.addEventListener("touchcancel",n)}catch{}}}class am{constructor({player:e,scene:t,url:i,nick:n="Player",color:s="#29b6f6",roomCode:o="PUBLIC",settings:a=null}){this.player=e,this.scene=t,this.url=i,this.nick=n,this.color=s,this.roomCode=o||"PUBLIC",this.socket=null,this.id=null,this.others=new Map,this.lastSend=0,this.sendInterval=.1,this.lastSentPos=null,this.lastAnimSig=null,this.heartbeatTimer=0,this.isHost=!1,this.roomSettings=a,this._manualClose=!1,this.deadPeers=new Set,this.matchLive=!1,this.connect()}applyColorToTorso(e,t){if(!e||!t)return;let i=!1;const n=new be(t);return e.traverse(s=>{if(!s.isMesh||!s.material||Array.isArray(s.material))return;const o=s.userData&&s.userData.gameName?s.userData.gameName.toLowerCase():"";(o.includes("body")||o.includes("torso")||o.includes("shirt")||o.includes("clothes")||s.geometry&&s.geometry.parameters&&Math.abs(s.geometry.parameters.width-.6)<.05)&&(s.material=s.material.clone(),s.material.color=n,i=!0)}),e.userData&&(e.userData.color=t),i}connect(){if(!this.url){console.warn("Multiplayer URL not configured.");const e=document.getElementById("ai-log");if(e){const t=document.createElement("div");t.textContent="Multiplayer URL not set in settings.",t.style.color="#ff9b9b",e.appendChild(t)}return}try{this.socket=new WebSocket(this.url),this.socket.onopen=()=>{this.sendJoin()},this.socket.onmessage=e=>this.handleMessage(e),this.socket.onclose=()=>{this.others.forEach(e=>{try{this.scene.remove(e)}catch{}}),this.others.clear(),this.deadPeers.clear(),this.matchLive=!1,this._manualClose||setTimeout(()=>this.connect(),1500)},this.socket.onerror=()=>{}}catch(e){console.warn("Multiplayer connect failed:",e)}}handleMessage(e){var t;try{const i=JSON.parse(e.data);if(i.type!=="hello")if(i.type==="welcome")this.id=i.id,this.isHost=!!i.isHost,i.settings&&(this.roomSettings=i.settings),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount()),this.onHostChanged&&this.onHostChanged(this.isHost),i.settings&&this.onSettings&&this.onSettings(i.settings);else if(i.type==="player-join")i.id&&i.id!==this.id&&this.ensureRemote(i.id),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount());else if(i.type==="player-leave")this.removeRemote(i.id),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount());else if(i.type==="state"&&i.id!==this.id){if(this.deadPeers.has(i.id))return;const n=this.ensureRemote(i.id,i.color);n&&i.pos&&(i.color&&((t=n.userData)==null?void 0:t.color)!==i.color&&this.applyColorToTorso(n,i.color),n.position.set(i.pos.x,i.pos.y,i.pos.z),this.applyRemoteAnimation(n,i.anim),this.updateLabel(n,i.nick))}else i.type==="hit"?this.onHit&&this.onHit(i):i.type==="host-changed"?(this.isHost=i.hostId===this.id,this.onHostChanged&&this.onHostChanged(this.isHost)):i.type==="start-countdown"?this.onCountdown&&this.onCountdown(i.duration||10):i.type==="match-start"?(this.onMatchStart&&this.onMatchStart(),this.matchLive=!0):i.type==="settings"?(this.roomSettings=i.settings,this.onSettings&&this.onSettings(i.settings)):i.type==="player-dead"&&i.id&&(this.deadPeers.add(i.id),this.killRemote(i.id),this.onPeerDeath&&this.onPeerDeath(i.id))}catch(i){console.warn("Multiplayer parse error:",i)}}ensureRemote(e,t=null){if(!e||e===this.id||this.deadPeers&&this.deadPeers.has(e))return null;if(this.others.has(e))return this.others.get(e);const i=this.clonePlayerAvatar(t);if(i)return i.userData={...i.userData||{},gameId:e,gameName:"Player",color:t||this.color},this.applyColorToTorso(i,t||this.color),i.traverse(a=>{a.isMesh&&(a.castShadow=!1,a.receiveShadow=!0)}),this.scene.add(i),this.others.set(e,i),i;const n=new ie(.8,1.8,.8),s=new Q({color:t||this.color,emissive:0,roughness:.7}),o=new k(n,s);return o.position.y=1,o.userData={gameId:e,gameName:"Player"},this.scene.add(o),this.others.set(e,o),o}removeRemote(e){const t=this.others.get(e);if(t){if(t.userData&&t.userData.label&&t.userData.label.parentNode)try{t.userData.label.parentNode.removeChild(t.userData.label)}catch{}try{this.scene.remove(t)}catch{}this.others.delete(e)}}killRemote(e){const t=this.others.get(e);if(t){try{t.rotation.x=-Math.PI/2,t.userData.dead=!0}catch{}setTimeout(()=>{this.removeRemote(e)},3500)}}clonePlayerAvatar(e=null){if(!this.player||!this.player.mesh)return null;try{const t=this.player.mesh.clone(!0),i={leftArm:null,rightArm:null,leftLeg:null,rightLeg:null};return t.traverse(n=>{if(n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material&&n.material.clone&&(n.material=n.material.clone()),n.geometry&&n.geometry.clone&&(n.geometry=n.geometry.clone()),e&&n.material&&!Array.isArray(n.material))){const s=n.userData&&n.userData.gameName?n.userData.gameName.toLowerCase():"";(s.includes("body")||s.includes("torso")||s.includes("shirt")||s.includes("clothes")||n.geometry&&n.geometry.parameters&&Math.abs(n.geometry.parameters.width-.6)<.05)&&(n.material=n.material.clone(),n.material.color=new be(e))}n.userData&&(n.userData={...n.userData}),n.name==="leftArmPivot"?i.leftArm=n:n.name==="rightArmPivot"?i.rightArm=n:n.name==="leftLegPivot"?i.leftLeg=n:n.name==="rightLegPivot"&&(i.rightLeg=n)}),t.userData={...t.userData||{},pivots:i},t}catch(t){return console.warn("Failed to clone player avatar:",t),null}}applyRemoteAnimation(e,t){var n,s,o,a;if(!t||!e||!e.userData)return;const i=e.userData.pivots||{};try{i.leftArm&&typeof((n=t==null?void 0:t.arms)==null?void 0:n.leftX)=="number"&&(i.leftArm.rotation.x=t.arms.leftX),i.rightArm&&typeof((s=t==null?void 0:t.arms)==null?void 0:s.rightX)=="number"&&(i.rightArm.rotation.x=t.arms.rightX),i.leftLeg&&typeof((o=t==null?void 0:t.legs)==null?void 0:o.leftX)=="number"&&(i.leftLeg.rotation.x=t.legs.leftX),i.rightLeg&&typeof((a=t==null?void 0:t.legs)==null?void 0:a.rightX)=="number"&&(i.rightLeg.rotation.x=t.legs.rightX)}catch{}}update(e){var c,h,u;if(!this.socket||this.socket.readyState!==WebSocket.OPEN||(this.lastSend+=e,this.heartbeatTimer+=e,this.lastSend<this.sendInterval)||(this.lastSend=0,!this.player||!this.player.mesh)||this.player.isDead)return;const t=this.player.mesh.position,i={arms:{leftX:this.player.leftArmPivot?this.player.leftArmPivot.rotation.x:0,rightX:this.player.rightArmPivot?this.player.rightArmPivot.rotation.x:0},legs:{leftX:this.player.leftLegPivot?this.player.leftLegPivot.rotation.x:0,rightX:this.player.rightLegPivot?this.player.rightLegPivot.rotation.x:0}},n={type:"state",pos:{x:t.x,y:t.y,z:t.z},nick:this.nick,color:this.color,anim:i};let s=!1;this.lastSentPos?t.distanceTo?s=t.distanceTo(new R(this.lastSentPos.x,this.lastSentPos.y,this.lastSentPos.z))>.015:s=Math.abs(t.x-(((c=this.lastSentPos)==null?void 0:c.x)||0))>.015||Math.abs(t.y-(((h=this.lastSentPos)==null?void 0:h.y)||0))>.015||Math.abs(t.z-(((u=this.lastSentPos)==null?void 0:u.z)||0))>.015:s=!0;const o=`${i.arms.leftX.toFixed(3)},${i.arms.rightX.toFixed(3)},${i.legs.leftX.toFixed(3)},${i.legs.rightX.toFixed(3)}`,a=this.lastAnimSig!==o,l=this.heartbeatTimer>=5;if(s||a||l){try{this.socket.send(JSON.stringify(n))}catch{}this.lastSentPos={x:t.x,y:t.y,z:t.z},this.lastAnimSig=o,l&&(this.heartbeatTimer=0)}}dispose(){if(this._manualClose=!0,this.socket)try{this.socket.close()}catch{}this.others.forEach(e=>{try{this.scene.remove(e)}catch{}}),this.others.clear()}updateLabel(e,t){if(e.userData&&e.userData.label)try{e.userData.label.style.display="none"}catch{}e.userData&&(e.userData.nick=t||"Player")}sendHit(e,t){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!e||typeof t!="number")return;const i={type:"hit",targetId:e,amount:t};try{this.socket.send(JSON.stringify(i))}catch{}}getPeerCount(){return 1+this.others.size}sendJoin(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN))try{this.socket.send(JSON.stringify({type:"join",room:this.roomCode,nick:this.nick,color:this.color}))}catch{}}sendStart(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN))try{this.socket.send(JSON.stringify({type:"start"}))}catch{}}sendSettings(e){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN)&&!(!this.isHost||!e))try{this.socket.send(JSON.stringify({type:"settings",settings:e}))}catch{}}sendDeath(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN)&&this.id)try{this.socket.send(JSON.stringify({type:"player-dead",id:this.id}))}catch{}}isMatchLive(){return this.matchLive===!0}resetMatchState(){this.deadPeers.clear(),this.matchLive=!1}}function lm({maxLines:r=400,autoShow:e=!1}={}){const t=[],i={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)},n=document.createElement("div");n.id="debug-overlay",n.className="debug-overlay hidden";const s=document.createElement("div");s.className="debug-overlay-header",s.innerHTML="<strong>DEBUG</strong>";const o=document.createElement("div");o.className="debug-overlay-actions";const a=document.createElement("button");a.textContent="Clear";const l=document.createElement("button");l.textContent="Close",o.appendChild(a),o.appendChild(l),s.appendChild(o);const c=document.createElement("div");c.className="debug-overlay-list",n.appendChild(s),n.appendChild(c),document.body.appendChild(n),s.style.cursor="move";let h=!1,u=0,d=0;function p(C){if(!h)return;const T=Math.max(0,Math.min(window.innerWidth-n.offsetWidth,C.clientX-u)),A=Math.max(0,Math.min(window.innerHeight-n.offsetHeight,C.clientY-d));n.style.left=T+"px",n.style.top=A+"px",n.style.right="auto"}function g(C){h=!1,window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g);try{C&&C.pointerId&&n.releasePointerCapture&&n.releasePointerCapture(C.pointerId)}catch{}}s.addEventListener("pointerdown",C=>{try{const T=n.getBoundingClientRect();n.style.left=T.left+"px",n.style.top=T.top+"px",n.style.position="fixed",n.style.transform="none",n.style.right="auto",u=C.clientX-T.left,d=C.clientY-T.top,h=!0,window.addEventListener("pointermove",p),window.addEventListener("pointerup",g);try{n.setPointerCapture&&n.setPointerCapture(C.pointerId)}catch{}}catch{}},{passive:!1});function _(){c.innerHTML="";const C=Math.max(0,t.length-r);for(let T=C;T<t.length;T++){const A=document.createElement("div");A.className="debug-line debug-"+t[T].level;const I=new Date(t[T].ts).toLocaleTimeString();A.textContent=`[${I}] ${t[T].level.toUpperCase()}: ${t[T].msg}`,c.appendChild(A)}c.scrollTop=c.scrollHeight}function m(C,T){try{const A=T.map(I=>{try{return typeof I=="string"?I:JSON.stringify(I)}catch{return String(I)}}).join(" ");t.push({level:C,msg:A,ts:Date.now()}),t.length>r*2&&t.splice(0,t.length-r*2),_()}catch{}}console.log=function(...C){i.log(...C),m("log",C)},console.info=function(...C){i.info(...C),m("info",C)},console.warn=function(...C){i.warn(...C),m("warn",C)},console.error=function(...C){i.error(...C),m("error",C)};function f(C,T,A,I,M){typeof C=="string"?m("error",[C+" "+(T||"")+":"+(A||"?")]):C&&C.message&&m("error",[C.message,C.error||M])}function x(C){try{m("error",["UnhandledRejection",C&&C.reason?C.reason:C])}catch{}}window.addEventListener("error",f),window.addEventListener("unhandledrejection",x),a.addEventListener("click",()=>{t.length=0,_()}),l.addEventListener("click",()=>S());function v(){n.classList.remove("hidden")}function S(){n.classList.add("hidden")}return e&&v(),{show:v,hide:S,destroy(){console.log=i.log,console.info=i.info,console.warn=i.warn,console.error=i.error,window.removeEventListener("error",f),window.removeEventListener("unhandledrejection",x);try{n.remove()}catch{}},logs:t}}const en=(()=>{try{return typeof navigator>"u"?!1:/Mobi|Android|iPhone|iPad|Tablet|Mobile/i.test(navigator.userAgent)||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}catch{return!1}})();window.addEventListener("unhandledrejection",r=>{try{const e=r.reason,t=e&&e.message?e.message:String(e);if(t&&t.includes("If you see this error we have a bug")){console.warn("Suppressed Chromium UnknownError:",t),r.preventDefault&&r.preventDefault();return}}catch{}});class Cr{constructor(){this.scene=new wp,this.scene.background=new be(8900331),this.scene.fog=new Sr(8900331,20,100),this._animationStarted=!1,this._selectedMode="survival",this._defaultRandom=Math.random,this._currentRandomSeed=null,this.matchSettings=null,this.lastPlaySettings=null,this.renderer=new qa({antialias:!0});const e=en?1:1.5;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nl,document.getElementById("game-container").appendChild(this.renderer.domElement),this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0,this.forceFixedMultiplayerSpawn=!1;const t=new da(16777215,.6);this.scene.add(t);const i=new ua(16777215,.8);i.position.set(50,100,50),i.castShadow=!0,i.shadow.camera.left=-100,i.shadow.camera.right=100,i.shadow.camera.top=100,i.shadow.camera.bottom=-100,i.shadow.camera.near=.1,i.shadow.camera.far=160,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,this.scene.add(i),this.camera=new Nt(75,window.innerWidth/window.innerHeight,.1,1e3),this.clock=new Pp,this._pickRaycaster=new Kt,this._objectClickHandler=null,this._objectClickTarget=null,this._longPressTimer=null,this.hotkeyModalVisible=!1,this.isPaused=!1,this.pauseMenu=document.getElementById("pause-menu"),this.bgAudio=null,this.bgMusicVolume=.5,this._endSequenceAudio=null,this._prevBgVolume=null,document.addEventListener("keydown",n=>{if(n.code==="Escape"&&this.togglePause(),this.player&&this.player.gameMode==="studio")if(n.code==="KeyL")try{this.spawnStudioDrops()}catch(s){console.warn("Studio drop failed:",s)}else n.code==="KeyH"&&this.toggleHotkeyModal(!this.hotkeyModalVisible)}),this.setupMenu(),this.setupLongPressMenu(),document.addEventListener("pointerlockerror",n=>{n.preventDefault&&n.preventDefault(),console.warn("Pointer lock request failed or was cancelled.")})}applyDeterministicRandom(e){if(!e)return;this._currentRandomSeed=e;const t=String(e);let i=1779033703^t.length;for(let o=0;o<t.length;o++)i=Math.imul(i^t.charCodeAt(o),3432918353),i=i<<13|i>>>19;i=Math.imul(i^i>>>16,2246822507),i=(i^i>>>13)>>>0;let n=i;Math.random=()=>{n=n+1831565813|0;let o=Math.imul(n^n>>>15,1|n);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}spawnStudioDrops(){if(!(!this.itemManager||!this.player||this.player.gameMode!=="studio"))try{for(let e=0;e<3;e++)this.itemManager.spawnMatrixDropNearPlayer()}catch(e){console.warn("spawnStudioDrops error:",e)}}toggleHotkeyModal(e){const t=document.getElementById("hotkey-modal");t&&(t.classList.toggle("hidden",!e),t.setAttribute("aria-hidden",e?"false":"true"),this.hotkeyModalVisible=e)}toggleTouchLookArea(e){try{if(!this.touchControls)return;e?this.touchControls.lookArea?this.touchControls.lookArea.style.display="":this.touchControls.rebuildLookArea&&this.touchControls.rebuildLookArea():this.touchControls.destroyLookArea?this.touchControls.destroyLookArea():this.touchControls.lookArea&&(this.touchControls.lookArea.style.display="none")}catch{}}setHotbarVisible(e){const t=document.getElementById("hotbar");t&&(t.style.display=e?"flex":"none")}updateDebugToggleVisibility(e){const t=document.getElementById("debug-toggle-btn");if(t&&(t.classList.toggle("hidden",!e),!e&&window.debugOverlay&&typeof window.debugOverlay.hide=="function")){try{window.debugOverlay.hide()}catch{}try{localStorage.removeItem("showDebugOverlay")}catch{}}}assignMultiplayerSpawn(){if(!this.player||!this.world)return;const e=this.world&&typeof this.world.halfMapSize=="number"?this.world.halfMapSize-5:100;let t=null;const i=this._defaultRandom||Math.random;if(this.forceFixedMultiplayerSpawn)t={x:0,y:this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(0,0):0,z:0};else for(let n=0;n<12;n++){const s=(i()*2-1)*e,o=(i()*2-1)*e;let a=0;if(this.world&&typeof this.world.getHeightAt=="function"&&(a=this.world.getHeightAt(s,o)),!this.multiplayer||this.multiplayer.others.size===0||Array.from(this.multiplayer.others.values()).every(c=>{if(!c||!c.position)return!0;const h=c.position.x-s,u=c.position.z-o;return Math.sqrt(h*h+u*u)>15})){t={x:s,y:a,z:o};break}}t||(t={x:0,y:0,z:0}),this.player.mesh.position.set(t.x,t.y,t.z),this.player.controls&&this.player.controls.getObject&&this.player.controls.getObject().position.set(t.x,t.y+1.6,t.z),this.player.camera&&this.player.camera.position.set(t.x,t.y+1.6,t.z)}setupMultiplayerLobbyUI(){const e=document.getElementById("mp-lobby"),t=document.getElementById("mp-start-btn"),i=document.getElementById("mp-lobby-status");if(!e||!t||!i)return;e.classList.remove("hidden");const n=this.multiplayer&&this.multiplayer.roomCode?this.multiplayer.roomCode:"PUBLIC";i.innerText=`Waiting in lobby (Room: ${n})`,t.classList.toggle("hidden",!(this.multiplayer&&this.multiplayer.isHost)),t.onclick=()=>{this.multiplayer&&this.multiplayer.isHost&&(this.beginLobbyCountdown(10),this.multiplayer.sendStart())},this.lobbyCountdown=0,this.updateLobbyUI(this.multiplayer?this.multiplayer.isHost:!1)}updateLobbyUI(e){const t=document.getElementById("mp-start-btn");t&&t.classList.toggle("hidden",!e)}beginLobbyCountdown(e=10){this.matchPhase="countdown",this.lobbyCountdown=e;const t=document.getElementById("mp-lobby"),i=document.getElementById("mp-lobby-countdown");t&&t.classList.remove("hidden"),i&&(i.innerText=`Starting in ${Math.ceil(this.lobbyCountdown)}...`)}startMultiplayerMatch(){this.matchPhase="live",this.multiplayer&&(this.multiplayer.matchLive=!0),this.refreshMultiplayerTargets();const e=document.getElementById("mp-lobby");e&&e.classList.add("hidden"),this.lobbyCountdown=0}checkMultiplayerVictory(){if(!this.multiplayer)return;const e=this.multiplayer.deadPeers||new Set;let t=0;this.multiplayer.others&&this.multiplayer.others.size>0&&this.multiplayer.others.forEach((s,o)=>{e.has(o)||s&&s.userData&&s.userData.dead||(t+=1)});const i=this.player&&!this.player.isDead;(i?1:0)+t===1&&i&&(this.hud&&typeof this.hud.showVictory=="function"&&this.hud.showVictory(),this.multiplayer&&(this.multiplayer.matchLive=!1))}setupMenu(){const e=document.getElementById("main-menu"),t=document.getElementById("play-btn"),i=document.getElementById("setting-difficulty"),n=document.getElementById("setting-enemies"),s=document.getElementById("setting-storm"),o=document.getElementById("setting-storm-enabled"),a=document.getElementById("setting-map-size"),l=document.getElementById("map-size-val"),c=document.getElementById("setting-debug"),h=document.getElementById("setting-minimap"),u=document.getElementById("setting-music-volume"),d=document.getElementById("setting-music-volume-val"),p=document.getElementById("setting-camera"),g=document.getElementById("setting-touch-controls"),_=document.getElementById("setting-fullscreen"),m=document.getElementById("setting-game-mode"),f=document.getElementById("quit-btn"),x=document.getElementById("active-mode-label"),v=document.getElementById("active-mode-chip"),S=document.getElementById("float-btn"),C=document.getElementById("setting-openai-key"),T=document.getElementById("setting-groq-key"),A=document.getElementById("setting-nvidia-key"),I=document.getElementById("setting-mp-server"),M=document.getElementById("setting-mp-seed"),E=document.getElementById("setting-mp-room"),F=document.getElementById("mp-room-generate"),z=document.getElementById("setting-mp-nickname"),X=document.getElementById("setting-mp-color"),P=document.getElementById("setting-mp-zombies"),N=document.getElementById("setting-mp-fixed-spawn"),G=document.getElementById("setting-language"),j=document.getElementById("hotkey-hint"),q=document.getElementById("hotkey-modal"),K=document.getElementById("hotkey-modal-close"),Y=document.getElementById("setting-arena-time"),ne=document.getElementById("arena-time-val"),se=document.getElementById("setting-arena-respawn"),W=document.getElementById("setting-matrix-infinite-ammo"),Z=document.getElementById("setting-matrix-show-ui"),ae=document.getElementById("setting-matrix-ai-autospawn"),de=document.getElementById("setting-matrix-ai-hints"),fe=document.getElementById("setting-studio-flight"),Te=document.getElementById("setting-studio-show-grid"),ge=document.getElementById("enemy-count-val"),we=document.getElementById("storm-time-val"),ze=(y,D)=>{if(!y||!D)return;const J=()=>{D.innerText=y.value};y.addEventListener("input",J),y.addEventListener("change",J),J()},B=localStorage.getItem("voxel-firecraft-settings");if(B){const y=JSON.parse(B);if(i.value=y.difficulty,n.value=y.enemyCount,s.value=y.stormTime,ge.innerText=y.enemyCount,we.innerText=y.stormTime,o&&(o.checked=y.stormEnabled!==!1),a&&l){const D=y.mapSize||ms;a.value=D,l.innerText=D}if(y.debugMode&&(c.checked=!0),h&&(h.checked=y.showMinimap!==!1),_&&(_.checked=!!y.fullscreen),y.musicVolume!==void 0&&u&&d){const D=parseInt(y.musicVolume,10);u.value=D,d.innerText=D,this.bgMusicVolume=D/100}if(y.cameraMode&&(p.value=y.cameraMode),y.useTouchControls!==void 0&&g&&(g.checked=!!y.useTouchControls),y.gameMode&&m&&(m.value=y.gameMode),y.gameMode&&(this._selectedMode=y.gameMode),G&&y.language&&(G.value=y.language),C&&(C.value=y.openaiKey||""),T&&(T.value=y.groqKey||""),A&&(A.value=y.nvidiaKey||""),I&&(I.value=y.mpServer||""),M&&(M.value=y.mpSeed||""),E&&(E.value=y.mpRoom||""),z&&(z.value=y.mpNick||""),X&&(X.value=y.mpColor||"#29b6f6"),P&&(P.checked=y.mpZombies!==!1),N&&(N.checked=!!y.mpFixedSpawn),Y&&ne){const D=y.arenaTime||parseInt(Y.value,10)||180;Y.value=D,ne.innerText=D}se&&(se.checked=y.arenaRespawn!==!1),W&&(W.checked=y.matrixInfiniteAmmo!==!1),Z&&(Z.checked=y.matrixShowUI!==!1),ae&&(ae.checked=y.matrixAiAutospawn!==!1),de&&(de.checked=y.matrixAiHints!==!1),fe&&(fe.checked=y.studioFlight!==!1),Te&&(Te.checked=y.studioShowGrid!==!1)}ze(n,ge),ze(s,we),ze(a,l),ze(Y,ne),t.onclick=()=>{const y=this._selectedMode||"survival";if(y==="multiplayer"&&this.multiplayer&&!this.multiplayer.isHost&&!this.multiplayer.roomSettings){alert("Waiting for host settings. Please try again in a moment.");return}const D={difficulty:i.value,enemyCount:parseInt(n.value),stormTime:parseInt(s.value),stormEnabled:o?o.checked:!0,mapSize:a?parseInt(a.value):ms,debugMode:c.checked,showMinimap:h?h.checked:!0,musicVolume:u?parseInt(u.value):Math.round(this.bgMusicVolume*100),musicEnabled:document.getElementById("setting-music-enabled")?document.getElementById("setting-music-enabled").checked:!0,cameraMode:p.value,language:G?G.value:"en",useTouchControls:g?g.checked:!1,fullscreen:_?_.checked:!1,gameMode:y,openaiKey:C?C.value:"",groqKey:T?T.value:"",nvidiaKey:A?A.value:"",mpServer:I?I.value:"",mpSeed:M?M.value.trim():"",mpRoom:E?E.value:"",mpNick:z?z.value:"",mpColor:X?X.value:"#29b6f6",mpZombies:P?P.checked:!0,mpFixedSpawn:N?N.checked:!1,arenaTime:Y?parseInt(Y.value,10):180,arenaRespawn:se?se.checked:!0,matrixInfiniteAmmo:W?W.checked:!0,matrixShowUI:Z?Z.checked:!0,matrixAiAutospawn:ae?ae.checked:!0,matrixAiHints:de?de.checked:!0,studioFlight:fe?fe.checked:!0,studioShowGrid:Te?Te.checked:!0};this.lastPlaySettings=D,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(D)),this.updateDebugToggleVisibility(D.debugMode),e.style.display="none",D.musicEnabled!==!1?this.playBackgroundMusic():this.stopBackgroundMusic(),this.requestFullscreenIfNeeded(D.fullscreen);const J=this.player&&this.world&&this.enemyManager,$=J&&this.player&&this.player.gameMode===y;if(J&&!$&&this.resetGameState(),this.player&&this.world&&this.enemyManager&&$){if(this.isPaused=!1,this.clock.getDelta(),t.innerText="PLAY GAME",this.player)try{this.player.lockControls()}catch{}if(this.hud&&(this.hud.settings=D),this.world){this.world.stormEnabled=D.stormEnabled!==!1;const ee=this.world.stormEnabled&&this.world.gameMode!=="matrix"&&this.world.gameMode!=="studio"&&this.world.gameMode!=="matrix-ai";this.world.stormMesh?this.world.stormMesh.visible=ee:ee&&typeof this.world.createStormVisuals=="function"&&this.world.createStormVisuals()}this.setHotbarVisible(!0)}else t.innerText="PLAY GAME",this.startGame(D);if(j){const ee=D&&D.gameMode==="studio";j.classList.toggle("hidden",!ee)}},f&&(f.onclick=()=>{this.multiplayer&&typeof this.multiplayer.dispose=="function"&&this.multiplayer.dispose(),location.reload()}),S&&S.classList.add("hidden"),F&&E&&(F.onclick=()=>{const y=Math.random().toString(36).substr(2,5).toUpperCase();E.value=y;try{const D=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");D.mpRoom=y,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(D))}catch{}}),j&&(j.onclick=()=>this.toggleHotkeyModal(!0)),K&&(K.onclick=()=>this.toggleHotkeyModal(!1)),q&&q.addEventListener("click",y=>{y.target===q&&this.toggleHotkeyModal(!1)}),u&&(u.oninput=()=>{const y=parseInt(u.value,10);if(d&&(d.innerText=y),this.bgMusicVolume=y/100,this.bgAudio)try{this.bgAudio.volume=this.bgMusicVolume}catch{}});const lt=document.getElementById("setting-music-enabled");lt&&(lt.onchange=()=>{lt.checked?this.playBackgroundMusic():this.stopBackgroundMusic()}),g&&(g.onchange=()=>{try{const y=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");y.useTouchControls=g.checked,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(y))}catch{}}),this.setHotbarVisible(!1);const ye=Array.from(document.querySelectorAll(".tab-btn")),Le=document.querySelectorAll(".tab-panel"),_e=y=>{if(!y)return;const D=y.getAttribute("data-tab");ye.forEach($=>$.classList.toggle("active",$===y)),Le.forEach($=>{$.id===D?$.classList.remove("hidden"):$.classList.add("hidden")});const J=y.getAttribute("data-mode");J&&m&&(m.value=J,x&&(x.innerText=y.innerText),v&&(v.innerText=y.innerText)),J&&(this._selectedMode=J)};ye.forEach(y=>y.addEventListener("click",()=>_e(y)));const $e=this._selectedMode||(m?m.value:null),b=($e?ye.find(y=>y.getAttribute("data-mode")===$e):null)||ye.find(y=>y.classList.contains("active"))||ye[0];_e(b)}resetGameState(){if(this.multiplayer&&typeof this.multiplayer.resetMatchState=="function"&&this.multiplayer.resetMatchState(),this.multiplayer&&typeof this.multiplayer.dispose=="function")try{this.multiplayer.dispose()}catch(e){console.warn("Dispose multiplayer failed:",e)}this.multiplayer=null,this.multiplayerEnemyBaseCount=0,this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0,this.isPaused=!1,this.forceFixedMultiplayerSpawn=!1,this.matchSettings=null;try{this.scene.clear()}catch(e){console.warn("Scene clear failed:",e)}try{const e=new da(16777215,.6);this.scene.add(e);const t=new ua(16777215,.8);t.position.set(50,100,50),t.castShadow=!0,t.shadow.camera.left=-100,t.shadow.camera.right=100,t.shadow.camera.top=100,t.shadow.camera.bottom=-100,t.shadow.camera.near=.1,t.shadow.camera.far=160,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,this.scene.add(t)}catch(e){console.warn("Rebuild lights failed:",e)}this.player=null,this.world=null,this.enemyManager=null,this.itemManager=null,this.hud=null,this.matchSettings=null,this.lastPlaySettings=null,Math.random=this._defaultRandom,this._currentRandomSeed=null,this.multiplayer&&typeof this.multiplayer.resetMatchState=="function"&&this.multiplayer.resetMatchState()}startGame(e){this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0;const t={...e};if(this.forceFixedMultiplayerSpawn=t.gameMode==="multiplayer"?!!e.mpFixedSpawn:!1,t.gameMode==="multiplayer"){const l=this.multiplayer&&!this.multiplayer.isHost&&this.multiplayer.roomSettings?this.multiplayer.roomSettings:null;if(!this.multiplayer||this.multiplayer.isHost||!l){const c=e.mpSeed||Math.random().toString(36).slice(2);this.matchSettings={mapSize:e.mapSize,enemyCount:e.enemyCount,stormEnabled:!1,seed:c,fixedSpawn:!!e.mpFixedSpawn}}else this.matchSettings=l;this.matchSettings&&(t.mapSize=this.matchSettings.mapSize,t.enemyCount=this.matchSettings.enemyCount,t.stormEnabled=this.matchSettings.stormEnabled,this.forceFixedMultiplayerSpawn=!!this.matchSettings.fixedSpawn,this.applyDeterministicRandom(this.matchSettings.seed||"mp-seed"))}if((t.gameMode==="matrix"||t.gameMode==="studio")&&(t.enemyCount=0,t.skipLoot=!0),t.gameMode==="multiplayer"&&(t.skipLoot=!0,t.stormEnabled=!1,e.mpZombies===!1&&(t.enemyCount=0)),this.multiplayerEnemyBaseCount=t.enemyCount||0,this.player=new Zp(this.camera,this.scene,null,t),e&&e.mpColor){if(this.player.playerColor=e.mpColor,this.player.mesh)try{this.scene.remove(this.player.mesh)}catch{}this.player.createPlayerMesh()}t.gameMode==="multiplayer"?(this.matchPhase="lobby",this.multiplayer&&(this.multiplayer.matchLive=!1)):this.matchPhase="live",this.itemManager=new rm(this.scene,this.player,t),this.world=new Np(this.scene,this.itemManager,t),this.player.worldObjects=this.world.objects,this.player.world=this.world,this.itemManager&&typeof this.itemManager.setWorld=="function"&&this.itemManager.setWorld(this.world);const i=document.getElementById("mp-lobby"),n=document.getElementById("mp-start-btn");if(i&&i.classList.add("hidden"),n&&n.classList.add("hidden"),t.gameMode==="matrix"&&this.itemManager&&typeof this.itemManager.spawnMatrixLoadout=="function"&&this.itemManager.spawnMatrixLoadout(this.player.position.x,this.player.position.z),t.gameMode==="multiplayer"&&this.assignMultiplayerSpawn(),t.gameMode==="multiplayer"?(this.multiplayer=new am({player:this.player,scene:this.scene,url:e.mpServer,nick:e.mpNick||"Player",color:e.mpColor||"#29b6f6",roomCode:e.mpRoom||"PUBLIC",settings:this.matchSettings}),e.mpServer||alert("Multiplayer server URL not set. Please configure it in the Multiplayer tab."),this.player&&typeof this.player.setMultiplayerClient=="function"&&this.player.setMultiplayerClient(this.multiplayer),this.multiplayer&&(this.multiplayer.onPeersChanged=()=>this.refreshMultiplayerTargets(),this.multiplayer.roomCode=e.mpRoom||"PUBLIC",this.multiplayer.onHostChanged=l=>{this.updateLobbyUI(l),l&&this.matchSettings&&this.multiplayer.sendSettings(this.matchSettings)},this.multiplayer.onCountdown=l=>this.beginLobbyCountdown(l),this.multiplayer.onMatchStart=()=>this.startMultiplayerMatch(),this.multiplayer.onSettings=l=>{this.matchSettings=l;const c=this.multiplayer&&this.multiplayer.isHost,u=this.player&&this.player.gameMode==="multiplayer"&&l&&(this.world&&this.world.mapSize!==l.mapSize||this.multiplayerEnemyBaseCount!==l.enemyCount);if(!c&&l&&u&&this.lastPlaySettings){const d={...this.lastPlaySettings,mapSize:l.mapSize,enemyCount:l.enemyCount};this.resetGameState(),this.matchSettings=l,this.applyDeterministicRandom(l.seed||"mp-seed"),this.startGame(d)}},this.multiplayer.isHost&&this.matchSettings&&this.multiplayer.sendSettings(this.matchSettings),this.multiplayer.onPeerDeath=()=>{this.checkMultiplayerVictory()},this.updateLobbyUI(this.multiplayer.isHost),this.multiplayer.isHost&&this.matchSettings&&this.multiplayer.sendSettings(this.matchSettings))):this.multiplayer=null,t.gameMode==="matrix-ai"){t.enemyCount=0,t.skipLoot=!0;const l=document.getElementById("ai-panel");l&&l.classList.remove("hidden")}else{const l=document.getElementById("ai-panel");l&&l.classList.add("hidden")}this.hud=new em(this.player,this.world,e),this.player&&(this.player.hud=this.hud),this.hud&&typeof this.hud.setRenderer=="function"&&this.hud.setRenderer(this.renderer),this.hud&&typeof this.hud.setMultiplayer=="function"&&this.hud.setMultiplayer(this.multiplayer),this.enemyManager=new nm(this.scene,this.player,this.world,t),t.gameMode==="multiplayer"&&(this.multiplayerEnemyBaseCount=t.enemyCount||0,typeof this.enemyManager.setTargetCount=="function"&&this.enemyManager.setTargetCount(this.multiplayerEnemyBaseCount),this.multiplayer&&(this.multiplayer.onHit=l=>{if(!l||l.targetId!==this.multiplayer.id)return;const c=typeof l.amount=="number"?l.amount:0;c>0&&this.player&&typeof this.player.takeDamage=="function"&&this.player.takeDamage(c)})),this.player.setEnemyManager(this.enemyManager),t.gameMode==="multiplayer"&&(this.refreshMultiplayerTargets(),this.setupMultiplayerLobbyUI()),this.setupObjectInspector(),this.updateDebugToggleVisibility(!!e.debugMode),this.setHotbarVisible(!0);const s=document.getElementById("float-btn");s&&(t.gameMode==="studio"?(s.classList.remove("hidden"),s.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF",s.onclick=()=>{if(this.player.isFloating=!this.player.isFloating,!this.player.isFloating){const l=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=l,this.player.velocity.y=0}s.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF"}):s.classList.add("hidden"));const o=document.getElementById("storm-timer");if(o){const l=t.stormEnabled===!1||t.gameMode==="studio"||t.gameMode==="matrix"||t.gameMode==="matrix-ai"||t.gameMode==="multiplayer";o.classList.toggle("hidden",l)}window.addEventListener("resize",()=>this.onWindowResize(),!1),this.renderer.domElement.addEventListener("pointerdown",()=>{if(!en){try{const l=document.getElementById("main-menu")&&document.getElementById("main-menu").style.display!=="none",c=this.player&&this.player.gameMode==="studio";if(this.isPaused||l||c)return;this.player&&!this.player.isDead&&this.player.lockControls()}catch(l){console.warn("Pointer lock request skipped or failed:",l)}this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic()}}),this.setupPauseMenu();try{const l=typeof navigator<"u"&&/Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent),c=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;(!!e.useTouchControls||l||c)&&(this.touchControls=new om(this.player))}catch{}if(this.setupStudioPalette(t),this.refreshStudioPaletteVisibility(),this.setupAiPanel(),!en&&this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch(l){console.warn("Pointer lock on start skipped/failed:",l)}this._animationStarted||(this._animationStarted=!0,this.animate())}setupLongPressMenu(){if(!en)return;const e=document.getElementById("ui-layer")||document.body;if(!e)return;const t=n=>{try{if(n.touches&&n.touches.length>1)return;this._longPressTimer&&clearTimeout(this._longPressTimer),this._longPressTimer=setTimeout(()=>{this._longPressTimer=null,this.showPauseMenu()},800)}catch{}},i=()=>{this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)};e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchend",i),e.addEventListener("touchcancel",i),e.addEventListener("touchmove",i)}setupAiPanel(){const e=document.getElementById("ai-panel"),t=document.getElementById("ai-send"),i=document.getElementById("ai-prompt"),n=document.getElementById("ai-log");if(!e||!t||!i||!n)return;const s=(o,a="")=>{const l=document.createElement("div");l.textContent=o,a&&(l.className=a),n.appendChild(l),n.scrollTop=n.scrollHeight};t.onclick=()=>{const o=i.value.trim();o&&(s(`You: ${o}`,"ai-user"),s("AI: (stub) Interpreter not wired. Imagine this runs your Three.js code.","ai-bot"),i.value="")}}refreshStudioPaletteVisibility(){const e=document.getElementById("studio-palette");if(!e)return;const t=this.player&&this.player.gameMode==="studio"&&!this.isPaused;e.classList.toggle("hidden",!t)}refreshMultiplayerTargets(){if(!this.player||this.player.gameMode!=="multiplayer"||!this.enemyManager)return;const e=typeof this.multiplayerEnemyBaseCount=="number"?this.multiplayerEnemyBaseCount:this.enemyManager.enemies.length;this.matchPhase==="live"&&typeof this.enemyManager.setTargetCount=="function"?this.enemyManager.setTargetCount(e):this.matchPhase!=="live"&&typeof this.enemyManager.setTargetCount=="function"&&this.enemyManager.setTargetCount(0)}setupStudioPalette(e){const t=document.getElementById("studio-palette");if(!t)return;const i=e&&(e.gameMode==="studio"||e.gameMode==="matrix-ai");if(t.classList.toggle("hidden",!i),!i)return;this.initStudioPaletteDrag(t),t.querySelectorAll("button").forEach(s=>{if(s._boundStudio)return;s._boundStudio=!0;const o=l=>{if(l&&l.stopPropagation&&l.stopPropagation(),!this.player||!this.world)return;const c=s.getAttribute("data-action");if(c==="resume"){if(this.isPaused=!1,this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch{}const g=document.getElementById("main-menu");g&&(g.style.display="none"),this.setHotbarVisible(!0);try{t.classList.add("hidden")}catch{}if(this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0),this.player&&this.player.studioSelectionHelper){try{this.player.scene.remove(this.player.studioSelectionHelper)}catch{}this.player.studioSelectionHelper=null}this.refreshStudioPaletteVisibility(),this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic();return}else if(c==="float-toggle"){if(this.player&&this.player.gameMode==="studio"){this.player.isFloating=!this.player.isFloating;const g=this.player.isFloating?"FLOAT ON":"FLOAT OFF";if(s.innerText=g,!this.player.isFloating){const _=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=_,this.player.velocity.y=0}}return}else if(c==="spawn-npc"){this.enemyManager&&typeof this.enemyManager.spawnEnemy=="function"&&this.enemyManager.spawnEnemy(!0);return}else if(c==="drops"){this.spawnStudioDrops();return}else if(c==="menu"){this.showPauseMenu();return}else if(c==="quit"){try{localStorage.removeItem("voxel-firecraft-settings")}catch{}location.reload();return}const h=s.getAttribute("data-prefab"),u=s.getAttribute("data-vehicle-type"),d=s.getAttribute("data-tree-type"),p=s.getAttribute("data-submenu");if(p){const g=document.getElementById(p);g&&g.classList.toggle("hidden");return}if(this.studioSelectedPrefab=h,this.studioSelectedOptions=u?{variant:u}:d?{variant:d}:{},this.toggleTouchLookArea(!1),p){const g=document.getElementById(p);g&&g.classList.add("hidden")}},a=l=>{l&&l.preventDefault&&l.preventDefault(),o(l)};s.addEventListener("pointerdown",a),s.addEventListener("click",l=>{l&&l.preventDefault&&l.preventDefault(),o(l)})})}setupObjectInspector(){const e=this.renderer?this.renderer.domElement:null;if(e){if(this._objectClickHandler&&this._objectClickTarget)try{this._objectClickTarget.removeEventListener("click",this._objectClickHandler),this._objectClickTarget.removeEventListener("pointerdown",this._objectClickHandler)}catch{}this._objectClickTarget=e,this._objectClickHandler=t=>{if(!this.player||!this.hud)return;const i=this.player.gameMode||"survival";if(i==="matrix")return;if(i==="studio"&&this.studioSelectedPrefab){const d=e.getBoundingClientRect(),p=(t.clientX-d.left)/d.width*2-1,g=-((t.clientY-d.top)/d.height*2-1),_=new Kt;_.setFromCamera(new Se(p,g),this.camera);const m=_.intersectObjects(this.world.objects,!0);let f=null;for(const x of m)if(x.object&&x.object.userData&&x.object.userData.gameName==="Ground"){f=x;break}if(!f){const x=new Kt;x.setFromCamera(new Se(0,0),this.camera);const v=x.intersectObjects(this.world.objects,!0);for(const S of v)if(S.object&&S.object.userData&&S.object.userData.gameName==="Ground"){f=S;break}}if(f&&typeof this.world.spawnPrefab=="function"){const x=this.studioSelectedOptions||{};this.world.spawnPrefab(this.studioSelectedPrefab,f.point.x,f.point.z,x)}this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0);return}let n=0,s=0;if(this.player.controls&&this.player.controls.isLocked)n=0,s=0;else{const d=e.getBoundingClientRect();n=(t.clientX-d.left)/d.width*2-1,s=-((t.clientY-d.top)/d.height*2-1)}this._pickRaycaster.setFromCamera(new Se(n,s),this.camera);const o=[];if(this.world&&Array.isArray(this.world.objects)&&o.push(...this.world.objects),this.itemManager&&Array.isArray(this.itemManager.items)&&o.push(...this.itemManager.items),this.enemyManager&&Array.isArray(this.enemyManager.enemies)&&this.enemyManager.enemies.forEach(d=>{d&&d.mesh&&o.push(d.mesh)}),o.length===0)return;const a=this._pickRaycaster.intersectObjects(o,!0);if(!a.length)return;let l=a[0].object,c=null;for(;l;){if(l.userData&&(l.userData.gameId||l.userData.gameid)&&l.userData.gameName){c=l.userData;break}l=l.parent}if(!c)return;const h=c.gameName||"Object",u=c.gameId||c.gameid||"---";typeof this.hud.showSelectionInfo=="function"&&this.hud.showSelectionInfo(h,u)},e.addEventListener("click",this._objectClickHandler),e.addEventListener("pointerdown",this._objectClickHandler)}}initStudioPaletteDrag(e){if(!e||e._dragInit)return;e._dragInit=!0;const t=e.querySelector(".palette-title")||e;let i=!1,n=0,s=0,o=0,a=0,l=null;e.style.touchAction="none";const c=u=>{if(!i){const _=Math.abs(u.clientX-o),m=Math.abs(u.clientY-a);if(_<3&&m<3)return;i=!0,l&&(e.style.right="auto",e.style.bottom="auto",e.style.position="fixed",e.style.width=`${l.width}px`,e.style.minWidth=`${l.width}px`,e.style.maxWidth=`${l.width}px`,e.style.left=`${l.left}px`,e.style.top=`${l.top}px`)}const d=e.getBoundingClientRect(),p=Math.max(0,Math.min(window.innerWidth-d.width,u.clientX-n)),g=Math.max(0,Math.min(window.innerHeight-d.height,u.clientY-s));e.style.left=`${p}px`,e.style.top=`${g}px`},h=()=>{i=!1,t.releasePointerCapture&&t.releasePointerCapture(t._dragPointerId),document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",h)};t.addEventListener("pointerdown",u=>{try{u.preventDefault()}catch{}const d=e.getBoundingClientRect();l=d,n=u.clientX-d.left,s=u.clientY-d.top,o=u.clientX,a=u.clientY,i=!1,t._dragPointerId=u.pointerId;try{t.setPointerCapture(u.pointerId)}catch{}document.addEventListener("pointermove",c),document.addEventListener("pointerup",h)})}togglePause(){if(this.player){if(this.player.controls&&this.player.controls.isLocked){this.showPauseMenu();return}this.isPaused=!this.isPaused,this.isPaused?this.pauseBackgroundMusic():this.playBackgroundMusic()}}setupPauseMenu(){document.addEventListener("keydown",t=>{t.code==="Escape"&&this.player&&!this.player.isDead&&(t.preventDefault(),this.showPauseMenu())});const e=document.getElementById("pause-menu");e&&e.remove()}showPauseMenu(){this.isPaused=!0,this.player.controls&&this.player.controls.isLocked&&this.player.controls.unlock(),this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps(),this.pauseBackgroundMusic();const e=document.getElementById("main-menu");if(e){e.style.display="flex";const t=document.getElementById("play-btn");t&&this.player&&(t.innerText="RESUME GAME")}if(this.setHotbarVisible(!1),this.player&&this.player.gameMode==="studio"){const t=document.getElementById("studio-palette");t&&t.classList.remove("hidden")}}playBackgroundMusic(){try{this.bgAudio||(this.bgAudio=new Audio(Up),this.bgAudio.loop=!0,this.bgAudio.volume=this.bgMusicVolume,this.bgAudio.preload="auto");const e=this.bgAudio.play();e&&typeof e.then=="function"&&e.catch(()=>{})}catch(e){console.warn("Could not play background music:",e)}}pauseBackgroundMusic(){if(this.bgAudio&&!this.bgAudio.paused)try{this.bgAudio.pause()}catch{}}stopBackgroundMusic(){if(this.bgAudio)try{this.bgAudio.pause(),this.bgAudio.currentTime=0}catch{}}requestFullscreenIfNeeded(e){if(!e)return;const t=document;if(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)return;const n=document.documentElement||document.body,s=n.requestFullscreen||n.webkitRequestFullscreen||n.mozRequestFullScreen||n.msRequestFullscreen;s?s.call(n).catch(o=>{console.warn("Fullscreen request failed:",o),en&&alert("Fullscreen may not be supported on this mobile device.")}):en&&alert("Fullscreen is not available on this mobile device.")}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());try{const e=this.clock.getDelta(),t=Math.min(e,.1),i=!!(this.touchControls&&this.touchControls.enabled),n=!!(this.player&&this.player.controls&&this.player.controls.isLocked),s=!!(this.player&&this.player.gameMode==="studio");if(!this.isPaused&&this.player&&(n||i||s)){try{this.player.update(t)}catch(o){console.error("Error in player.update:",o)}try{const o=this.world.update(t,this.player.position);!(this.player&&this.player.gameMode==="studio")&&o&&o.inStorm?this.player.takeDamage(1*t):this.player&&typeof this.player.clearHurtQueue=="function"&&this.player.clearHurtQueue()}catch(o){console.error("Error in world.update:",o)}try{this.enemyManager.update(t)}catch(o){console.error("Error in enemyManager.update:",o)}try{this.itemManager.update(t)}catch(o){console.error("Error in itemManager.update:",o)}if(this.player&&this.player.gameMode==="multiplayer"){if(this.matchPhase==="live")this.multiplayerDropTimer+=t,this.multiplayerDropTimer>=60&&(this.multiplayerDropActive=!0),this.multiplayerDropActive&&this.itemManager&&(this.multiplayerDropCooldown-=t,this.multiplayerDropCooldown<=0&&(this.multiplayerDropCooldown=8,typeof this.itemManager.spawnMatrixDropNearPlayer=="function"&&this.itemManager.spawnMatrixDropNearPlayer()));else if(this.matchPhase==="countdown"){this.lobbyCountdown-=t;const o=document.getElementById("mp-lobby-countdown");this.lobbyCountdown<0&&(this.lobbyCountdown=0),o&&(o.innerText=`Starting in ${Math.ceil(this.lobbyCountdown)}...`),this.lobbyCountdown<=0&&this.startMultiplayerMatch()}}try{this.multiplayer&&typeof this.multiplayer.update=="function"&&this.multiplayer.update(t)}catch(o){console.error("Error in multiplayer.update:",o)}try{this.hud.update()}catch(o){console.error("Error in hud.update:",o)}try{this.touchControls&&typeof this.touchControls.update=="function"&&this.touchControls.update()}catch(o){console.error("Error in touchControls.update:",o)}try{if(!(this.player&&(this.player.gameMode==="matrix"||this.player.gameMode==="studio"||this.player.gameMode==="multiplayer"))&&this.enemyManager.enemies.length===0&&!this.player.isDead&&!this.victoryShown){this.victoryShown=!0;try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}this.hud.showVictory(),this.player.controls.unlock()}else this.player&&this.player.gameMode==="multiplayer"&&this.matchPhase==="live"&&!this.player.isDead&&!this.victoryShown&&(this.multiplayer?this.multiplayer.others.size:0)===0&&(this.victoryShown=!0,this.hud.showVictory(),this.player.controls&&this.player.controls.unlock&&this.player.controls.unlock())}catch(o){console.error("Error in victory check:",o)}}this.renderer.render(this.scene,this.camera)}catch(e){try{console.error("Unhandled error in Game.animate:",e,{playerExists:!!this.player,playerWeaponCount:this.player?this.player.weapons?this.player.weapons.length:"no-weapons":"no-player",currentWeaponIndex:this.player?this.player.currentWeaponIndex:"no-player",hudExists:!!this.hud,hudSettings:this.hud?this.hud.settings:null});try{this._logRenderMaterialDiagnostics(e)}catch(t){console.error("Error during render diagnostics:",t)}}catch(t){console.error("Error logging animate failure:",t)}return}}}Cr.prototype.playEndSequence=function(r,e={}){try{if(this._playingEndSequence)return;if(this._playingEndSequence=!0,this.bgAudio)try{this._prevBgVolume=this.bgAudio.volume,this.bgAudio.pause()}catch{this._prevBgVolume=this.bgMusicVolume}if(this._endSequenceAudio){try{this._endSequenceAudio.pause(),this._endSequenceAudio.currentTime=0}catch{}this._endSequenceAudio=null}const t=new Audio(r);t.loop=e.loop||!1,t.volume=e.volume!==void 0?e.volume:1,t.preload="auto",this._endSequenceAudio=t,t.load(),setTimeout(()=>{const i=t.play();i&&typeof i.then=="function"&&i.catch(n=>{console.log("Audio playback blocked, waiting for user interaction:",n);const s=()=>{t.readyState<2&&t.load(),t.play().catch(()=>{}),document.removeEventListener("touchstart",s),document.removeEventListener("click",s)};document.addEventListener("touchstart",s,{once:!0}),document.addEventListener("click",s,{once:!0})})},100),t.addEventListener("ended",()=>{try{this.bgAudio&&this._prevBgVolume!==null&&(this.bgAudio.volume=this._prevBgVolume)}catch{}this._endSequenceAudio=null,this._prevBgVolume=null,this._playingEndSequence=!1})}catch(t){console.warn("playEndSequence error:",t)}};Cr.prototype._logRenderMaterialDiagnostics=function(r){try{const e=[];let t=0;this.scene.traverse(i=>{if(i.isMesh){t++;const n=i.material;if(!n){e.push({uuid:i.uuid,name:i.name||i.userData&&i.userData.gameName||"mesh",issue:"no-material"});return}const s=o=>({type:o.type||o.constructor&&o.constructor.name||"Unknown",isShaderMaterial:!!o.isShaderMaterial,isStandardMaterial:!!o.isMeshStandardMaterial,hasEmissive:o.emissive!==void 0,uniformsKeys:o.uniforms?Object.keys(o.uniforms):null,userData:o.userData||null});Array.isArray(n)?e.push({uuid:i.uuid,name:i.name||i.userData&&i.userData.gameName||"mesh",materials:n.map(s)}):e.push({uuid:i.uuid,name:i.userData&&i.userData.gameName||i.name||"mesh",material:s(n)})}}),console.error("Render diagnostics:",{originalError:r&&r.toString(),totalMeshes:t,sampleProblems:e.slice(0,30),note:"Look for materials missing expected uniforms (shader/standard) or meshes without material."})}catch(e){console.error("Failed collecting render diagnostics:",e)}};window.game=new Cr;(function(){try{const e=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}"),t=e&&e.debugMode||localStorage.getItem("showDebugOverlay")==="true"||!!window.DEBUG_OVERLAY;window.debugOverlay=lm({autoShow:!!t}),window.addEventListener("keydown",i=>{if(i.key==="`"&&window.debugOverlay){const n=document.getElementById("debug-overlay");n&&n.classList.contains("hidden")?window.debugOverlay.show():window.debugOverlay&&window.debugOverlay.hide()}});try{let i=document.getElementById("debug-toggle-btn");i||(i=document.createElement("button"),i.id="debug-toggle-btn",i.title="Debug logs",i.innerText="DBG",document.body.appendChild(i));const n=!0;i.addEventListener("click",s=>{try{const o=document.getElementById("debug-overlay");o&&o.classList.contains("hidden")?(window.debugOverlay&&window.debugOverlay.show(),localStorage.setItem("showDebugOverlay","true")):(window.debugOverlay&&window.debugOverlay.hide(),localStorage.removeItem("showDebugOverlay"))}catch(o){console.warn("debug toggle error",o)}})}catch{}}catch(e){console.warn("debugOverlay init failed",e)}})();window.addEventListener("game-touch-look",r=>{try{const e=r.detail||{dx:0,dy:0},t=.003;if(window.game&&window.game.player)try{if(typeof window.game.player.rotateCamera=="function")window.game.player.rotateCamera(e.dx*t,e.dy*t);else{window.game.player._touchYaw=(window.game.player._touchYaw||0)-e.dx*.01,window.game.player._touchPitch=(window.game.player._touchPitch||0)-e.dy*.01;const n=Math.PI/2-.1;window.game.player._touchPitch=Math.max(-n,Math.min(n,window.game.player._touchPitch))}}catch{}}catch{}});
