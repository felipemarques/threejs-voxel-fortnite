(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mr="160",Qa=0,Nr=1,el=2,tl=0,ma=1,nl=2,nn=3,_n=0,Rt=1,kt=2,pn=0,ri=1,sr=2,Fr=3,Br=4,il=5,Cn=100,sl=101,rl=102,Or=103,kr=104,ol=200,al=201,ll=202,cl=203,rr=204,or=205,hl=206,ul=207,dl=208,fl=209,pl=210,ml=211,gl=212,_l=213,vl=214,yl=0,xl=1,Ml=2,as=3,Sl=4,wl=5,El=6,bl=7,gs=0,Tl=1,Al=2,mn=0,Cl=1,Rl=2,Pl=3,Ll=4,Dl=5,Il=6,ga=300,ci=301,hi=302,ar=303,lr=304,_s=306,ls=1e3,Xt=1001,cr=1002,Mt=1003,zr=1004,Ul=1004,Ts=1005,Ot=1006,Nl=1007,Ti=1008,gn=1009,Fl=1010,Bl=1011,gr=1012,_a=1013,dn=1014,fn=1015,Ai=1016,va=1017,ya=1018,Pn=1020,Ol=1021,qt=1023,kl=1024,zl=1025,Ln=1026,ui=1027,Hl=1028,xa=1029,Gl=1030,Ma=1031,Sa=1033,As=33776,Cs=33777,Rs=33778,Ps=33779,Hr=35840,Gr=35841,Vr=35842,Wr=35843,wa=36196,Xr=37492,qr=37496,jr=37808,Yr=37809,Kr=37810,$r=37811,Zr=37812,Jr=37813,Qr=37814,eo=37815,to=37816,no=37817,io=37818,so=37819,ro=37820,oo=37821,Ls=36492,ao=36494,lo=36495,Vl=36283,co=36284,ho=36285,uo=36286,Ea=3e3,Dn=3001,Wl=3200,Xl=3201,vs=0,ql=1,zt="",_t="srgb",rn="srgb-linear",_r="display-p3",ys="display-p3-linear",cs="linear",Qe="srgb",hs="rec709",us="p3",Fn=7680,fo=519,jl=512,Yl=513,Kl=514,ba=515,$l=516,Zl=517,Jl=518,Ql=519,po=35044,mo="300 es",hr=1035,sn=2e3,ds=2001;class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let go=1234567;const Si=Math.PI/180,Ci=180/Math.PI;function fi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Ct(r,e,t){return Math.max(e,Math.min(t,r))}function vr(r,e){return(r%e+e)%e}function ec(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function tc(r,e,t){return r!==e?(t-r)/(e-r):0}function wi(r,e,t){return(1-t)*r+t*e}function nc(r,e,t,n){return wi(r,e,1-Math.exp(-t*n))}function ic(r,e=1){return e-Math.abs(vr(r,e*2)-e)}function sc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function rc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function oc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ac(r,e){return r+Math.random()*(e-r)}function lc(r){return r*(.5-Math.random())}function cc(r){r!==void 0&&(go=r);let e=go+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hc(r){return r*Si}function uc(r){return r*Ci}function ur(r){return(r&r-1)===0&&r!==0}function dc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function fc(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gt={DEG2RAD:Si,RAD2DEG:Ci,generateUUID:fi,clamp:Ct,euclideanModulo:vr,mapLinear:ec,inverseLerp:tc,lerp:wi,damp:nc,pingpong:ic,smoothstep:sc,smootherstep:rc,randInt:oc,randFloat:ac,randFloatSpread:lc,seededRandom:cc,degToRad:hc,radToDeg:uc,isPowerOfTwo:ur,ceilPowerOfTwo:dc,floorPowerOfTwo:fs,setQuaternionFromProperEuler:fc,normalize:Tt,denormalize:ni};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],v=i[4],S=i[7],C=i[2],T=i[5],A=i[8];return s[0]=o*_+a*y+l*C,s[3]=o*m+a*v+l*T,s[6]=o*f+a*S+l*A,s[1]=c*_+h*y+u*C,s[4]=c*m+h*v+u*T,s[7]=c*f+h*S+u*A,s[2]=d*_+p*y+g*C,s[5]=d*m+p*v+g*T,s[8]=d*f+p*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Ge;function Ta(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ps(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pc(){const r=ps("canvas");return r.style.display="block",r}const _o={};function Ei(r){r in _o||(_o[r]=!0,console.warn(r))}const vo=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ui={[rn]:{transfer:cs,primaries:hs,toReference:r=>r,fromReference:r=>r},[_t]:{transfer:Qe,primaries:hs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ys]:{transfer:cs,primaries:us,toReference:r=>r.applyMatrix3(yo),fromReference:r=>r.applyMatrix3(vo)},[_r]:{transfer:Qe,primaries:us,toReference:r=>r.convertSRGBToLinear().applyMatrix3(yo),fromReference:r=>r.applyMatrix3(vo).convertLinearToSRGB()}},mc=new Set([rn,ys]),Ye={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!mc.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ui[e].toReference,i=Ui[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ui[r].primaries},getTransfer:function(r){return r===zt?cs:Ui[r].transfer}};function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bn;class Aa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=ps("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gc=0;class Ca{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Us(i[o].image)):s.push(Us(i[o]))}else s=Us(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Us(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Aa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _c=0;class Pt extends Nn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Xt,i=Xt,s=Ot,o=Ti,a=qt,l=gn,c=Pt.DEFAULT_ANISOTROPY,h=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=fi(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Dn?_t:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ga)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Dn:Ea}set encoding(e){Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dn?_t:zt}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=ga;Pt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(f+1)/2,T=(h+d)/4,A=(u+_)/4,I=(g+m)/4;return v>S&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=A/n):S>C?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=T/i,s=I/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vc extends Nn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ei("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dn?_t:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ca(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends vc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ra extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yc extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,f*y);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*y;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new R,xo=new Ri;class yn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ht):Ht.fromBufferAttribute(s,o),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ni.copy(n.boundingBox)),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),Fi.subVectors(this.max,_i),On.subVectors(e.a,_i),kn.subVectors(e.b,_i),zn.subVectors(e.c,_i),an.subVectors(kn,On),ln.subVectors(zn,kn),Sn.subVectors(On,zn);let t=[0,-an.z,an.y,0,-ln.z,ln.y,0,-Sn.z,Sn.y,an.z,0,-an.x,ln.z,0,-ln.x,Sn.z,0,-Sn.x,-an.y,an.x,0,-ln.y,ln.x,0,-Sn.y,Sn.x,0];return!Fs(t,On,kn,zn,Fi)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,On,kn,zn,Fi))?!1:(Bi.crossVectors(an,ln),t=[Bi.x,Bi.y,Bi.z],Fs(t,On,kn,zn,Fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new R,new R,new R,new R,new R,new R,new R,new R],Ht=new R,Ni=new yn,On=new R,kn=new R,zn=new R,an=new R,ln=new R,Sn=new R,_i=new R,Fi=new R,Bi=new R,wn=new R;function Fs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){wn.fromArray(r,s);const a=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),l=e.dot(wn),c=t.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const xc=new yn,vi=new R,Bs=new R;class Pi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);const t=vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Bs)),this.expandByPoint(vi.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new R,Os=new R,Oi=new R,cn=new R,ks=new R,ki=new R,zs=new R;class xs{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Os.copy(e).add(t).multiplyScalar(.5),Oi.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(Os);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Oi),a=cn.dot(this.direction),l=-cn.dot(Oi),c=cn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Os).addScaledVector(Oi,d),p}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),i=Jt.dot(Jt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,i,s){ks.subVectors(t,e),ki.subVectors(n,e),zs.crossVectors(ks,ki);let o=this.direction.dot(zs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cn.subVectors(this.origin,e);const l=a*this.direction.dot(ki.crossVectors(cn,ki));if(l<0)return null;const c=a*this.direction.dot(ks.cross(cn));if(c<0||l+c>o)return null;const h=-a*cn.dot(zs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,o,a,l,c,h,u,d,p,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,p,g,_,m)}set(e,t,n,i,s,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hn.setFromMatrixColumn(e,0).length(),s=1/Hn.setFromMatrixColumn(e,1).length(),o=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mc,e,Sc)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),hn.crossVectors(n,Dt),hn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),hn.crossVectors(n,Dt)),hn.normalize(),zi.crossVectors(Dt,hn),i[0]=hn.x,i[4]=zi.x,i[8]=Dt.x,i[1]=hn.y,i[5]=zi.y,i[9]=Dt.y,i[2]=hn.z,i[6]=zi.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],v=n[7],S=n[11],C=n[15],T=i[0],A=i[4],I=i[8],x=i[12],E=i[1],F=i[5],G=i[9],q=i[13],L=i[2],U=i[6],W=i[10],Y=i[14],j=i[3],K=i[7],Z=i[11],se=i[15];return s[0]=o*T+a*E+l*L+c*j,s[4]=o*A+a*F+l*U+c*K,s[8]=o*I+a*G+l*W+c*Z,s[12]=o*x+a*q+l*Y+c*se,s[1]=h*T+u*E+d*L+p*j,s[5]=h*A+u*F+d*U+p*K,s[9]=h*I+u*G+d*W+p*Z,s[13]=h*x+u*q+d*Y+p*se,s[2]=g*T+_*E+m*L+f*j,s[6]=g*A+_*F+m*U+f*K,s[10]=g*I+_*G+m*W+f*Z,s[14]=g*x+_*q+m*Y+f*se,s[3]=y*T+v*E+S*L+C*j,s[7]=y*A+v*F+S*U+C*K,s[11]=y*I+v*G+S*W+C*Z,s[15]=y*x+v*q+S*Y+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*p-n*l*p)+_*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+f*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,v=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,S=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=t*y+n*v+i*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(_*d*s-u*m*s-_*i*p+n*m*p+u*i*f-n*d*f)*A,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*f+n*l*f)*A,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*p-n*l*p)*A,e[4]=v*A,e[5]=(h*m*s-g*d*s+g*i*p-t*m*p-h*i*f+t*d*f)*A,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*f-t*l*f)*A,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*p+t*l*p)*A,e[8]=S*A,e[9]=(g*u*s-h*_*s-g*n*p+t*_*p+h*n*f-t*u*f)*A,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*f+t*a*f)*A,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*A,e[12]=C*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,_=o*h,m=o*u,f=a*u,y=l*c,v=l*h,S=l*u,C=n.x,T=n.y,A=n.z;return i[0]=(1-(_+f))*C,i[1]=(p+S)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(p-S)*T,i[5]=(1-(d+f))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+v)*A,i[9]=(m-y)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Hn.set(i[0],i[1],i[2]).length();const o=Hn.set(i[4],i[5],i[6]).length(),a=Hn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Gt.copy(this);const c=1/s,h=1/o,u=1/a;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=u,Gt.elements[9]*=u,Gt.elements[10]*=u,t.setFromRotationMatrix(Gt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=sn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===sn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ds)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=sn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,p=(n+i)*h;let g,_;if(a===sn)g=(o+s)*u,_=-2*u;else if(a===ds)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hn=new R,Gt=new rt,Mc=new R(0,0,0),Sc=new R(1,1,1),hn=new R,zi=new R,Dt=new R,Mo=new rt,So=new Ri;class pi{constructor(e=0,t=0,n=0,i=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class yr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wc=0;const wo=new R,Gn=new Ri,Qt=new rt,Hi=new R,yi=new R,Ec=new R,bc=new Ri,Eo=new R(1,0,0),bo=new R(0,1,0),To=new R(0,0,1),Tc={type:"added"},Ac={type:"removed"};class mt extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new R,t=new pi,n=new Ri,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ge}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(bo,e)}rotateZ(e){return this.rotateOnAxis(To,e)}translateOnAxis(e,t){return wo.copy(e).applyQuaternion(this.quaternion),this.position.add(wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(bo,e)}translateZ(e){return this.translateOnAxis(To,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(yi,Hi,this.up):Qt.lookAt(Hi,yi,this.up),this.quaternion.setFromRotationMatrix(Qt),i&&(Qt.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix(Qt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ac)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,Ec),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,bc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new R(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new R,en=new R,Hs=new R,tn=new R,Vn=new R,Wn=new R,Ao=new R,Gs=new R,Vs=new R,Ws=new R;let Gi=!1;class Wt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vt.subVectors(i,t),en.subVectors(n,t),Hs.subVectors(e,t);const o=Vt.dot(Vt),a=Vt.dot(en),l=Vt.dot(Hs),c=en.dot(en),h=en.dot(Hs),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(e,t,n,i,s,o,a,l){return Gi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gi=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),en.subVectors(e,t),Vt.cross(en).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Vt.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Gi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gi=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Vn.subVectors(i,n),Wn.subVectors(s,n),Gs.subVectors(e,n);const l=Vn.dot(Gs),c=Wn.dot(Gs);if(l<=0&&c<=0)return t.copy(n);Vs.subVectors(e,i);const h=Vn.dot(Vs),u=Wn.dot(Vs);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Vn,o);Ws.subVectors(e,s);const p=Vn.dot(Ws),g=Wn.dot(Ws);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Wn,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ao.subVectors(s,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Ao,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Vn,o).addScaledVector(Wn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Vi={h:0,s:0,l:0};function Xs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=vr(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xs(o,s,e+1/3),this.g=Xs(o,s,e),this.b=Xs(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Pa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ye.fromWorkingColorSpace(xt.copy(this),e),Math.round(Ct(xt.r*255,0,255))*65536+Math.round(Ct(xt.g*255,0,255))*256+Math.round(Ct(xt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,i=xt.g,s=xt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=_t){Ye.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,i=xt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Vi);const n=wi(un.h,Vi.h,t),i=wi(un.s,Vi.s,t),s=wi(un.l,Vi.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new be;be.NAMES=Pa;let Cc=0;class on extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=ri,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rr,this.blendDst=or,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rr&&(n.blendSrc=this.blendSrc),this.blendDst!==or&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vn extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new R,Wi=new Me;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),e}}class La extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Da extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rc=0;const Bt=new rt,qs=new mt,Xn=new R,It=new yn,xi=new yn,ft=new R;class ht extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ta(e)?Da:La)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xi.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(It.min,xi.min),It.expandByPoint(ft),ft.addVectors(It.max,xi.max),It.expandByPoint(ft)):(It.expandByPoint(xi.min),It.expandByPoint(xi.max))}It.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ft.fromBufferAttribute(a,c),l&&(Xn.fromBufferAttribute(e,c),ft.add(Xn)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new R,h[E]=new R;const u=new R,d=new R,p=new R,g=new Me,_=new Me,m=new Me,f=new R,y=new R;function v(E,F,G){u.fromArray(i,E*3),d.fromArray(i,F*3),p.fromArray(i,G*3),g.fromArray(o,E*2),_.fromArray(o,F*2),m.fromArray(o,G*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(q),y.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(q),c[E].add(f),c[F].add(f),c[G].add(f),h[E].add(y),h[F].add(y),h[G].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,F=S.length;E<F;++E){const G=S[E],q=G.start,L=G.count;for(let U=q,W=q+L;U<W;U+=3)v(n[U+0],n[U+1],n[U+2])}const C=new R,T=new R,A=new R,I=new R;function x(E){A.fromArray(s,E*3),I.copy(A);const F=c[E];C.copy(F),C.sub(A.multiplyScalar(A.dot(F))).normalize(),T.crossVectors(I,F);const q=T.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=q}for(let E=0,F=S.length;E<F;++E){const G=S[E],q=G.start,L=G.count;for(let U=q,W=q+L;U<W;U+=3)x(n[U+0]),x(n[U+1]),x(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new St(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Co=new rt,En=new xs,Xi=new Pi,Ro=new R,qn=new R,jn=new R,Yn=new R,js=new R,qi=new R,ji=new Me,Yi=new Me,Ki=new Me,Po=new R,Lo=new R,Do=new R,$i=new R,Zi=new R;class H extends mt{constructor(e=new ht,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){qi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(js.fromBufferAttribute(u,e),o?qi.addScaledVector(js,h):qi.addScaledVector(js.sub(t),h))}t.add(qi)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(s),En.copy(e.ray).recast(e.near),!(Xi.containsPoint(En.origin)===!1&&(En.intersectSphere(Xi,Ro)===null||En.origin.distanceToSquared(Ro)>(e.far-e.near)**2))&&(Co.copy(s).invert(),En.copy(e.ray).applyMatrix4(Co),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,En)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,C=v;S<C;S+=3){const T=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);i=Ji(this,f,e,n,c,h,u,T,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=Ji(this,o,e,n,c,h,u,y,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,C=v;S<C;S+=3){const T=S,A=S+1,I=S+2;i=Ji(this,f,e,n,c,h,u,T,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,v=m+1,S=m+2;i=Ji(this,o,e,n,c,h,u,y,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Pc(r,e,t,n,i,s,o,a){let l;if(e.side===Rt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===_n,a),l===null)return null;Zi.copy(a),Zi.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Zi);return c<t.near||c>t.far?null:{distance:c,point:Zi.clone(),object:r}}function Ji(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,qn),r.getVertexPosition(l,jn),r.getVertexPosition(c,Yn);const h=Pc(r,e,t,n,qn,jn,Yn,$i);if(h){i&&(ji.fromBufferAttribute(i,a),Yi.fromBufferAttribute(i,l),Ki.fromBufferAttribute(i,c),h.uv=Wt.getInterpolation($i,qn,jn,Yn,ji,Yi,Ki,new Me)),s&&(ji.fromBufferAttribute(s,a),Yi.fromBufferAttribute(s,l),Ki.fromBufferAttribute(s,c),h.uv1=Wt.getInterpolation($i,qn,jn,Yn,ji,Yi,Ki,new Me),h.uv2=h.uv1),o&&(Po.fromBufferAttribute(o,a),Lo.fromBufferAttribute(o,l),Do.fromBufferAttribute(o,c),h.normal=Wt.getInterpolation($i,qn,jn,Yn,Po,Lo,Do,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};Wt.getNormal(qn,jn,Yn,u.normal),h.face=u}return h}class ee extends ht{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(_,m,f,y,v,S,C,T,A,I,x){const E=S/A,F=C/I,G=S/2,q=C/2,L=T/2,U=A+1,W=I+1;let Y=0,j=0;const K=new R;for(let Z=0;Z<W;Z++){const se=Z*F-q;for(let B=0;B<U;B++){const N=B*E-G;K[_]=N*y,K[m]=se*v,K[f]=L,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(B/A),u.push(1-Z/I),Y+=1}}for(let Z=0;Z<I;Z++)for(let se=0;se<A;se++){const B=d+se+U*Z,N=d+se+U*(Z+1),$=d+(se+1)+U*(Z+1),ce=d+(se+1)+U*Z;l.push(B,N,ce),l.push(N,$,ce),j+=6}a.addGroup(p,j,x),p+=j,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ee(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(r){const e={};for(let t=0;t<r.length;t++){const n=di(r[t]);for(const i in n)e[i]=n[i]}return e}function Lc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ia(r){return r.getRenderTarget()===null?r.outputColorSpace:Ye.workingColorSpace}const Dc={clone:di,merge:At};var Ic=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ic,this.fragmentShader=Uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Lc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ua extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Ua{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ci*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Si*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ci*2*Math.atan(Math.tan(Si*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Si*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,$n=1;class Nc extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nt(Kn,$n,e,t);i.layers=this.layers,this.add(i);const s=new Nt(Kn,$n,e,t);s.layers=this.layers,this.add(s);const o=new Nt(Kn,$n,e,t);o.layers=this.layers,this.add(o);const a=new Nt(Kn,$n,e,t);a.layers=this.layers,this.add(a);const l=new Nt(Kn,$n,e,t);l.layers=this.layers,this.add(l);const c=new Nt(Kn,$n,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Na extends Pt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fc extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ei("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Dn?_t:zt),this.texture=new Na(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ee(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:pn});s.uniforms.tEquirect.value=t;const o=new H(i,s),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Ot),new Nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ys=new R,Bc=new R,Oc=new Ge;class Tn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ys.subVectors(n,t).cross(Bc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ys),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Oc.getNormalMatrix(e),i=this.coplanarPoint(Ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bn=new Pi,Qi=new R;class xr{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,s=new Tn,o=new Tn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,m-p,S-f).normalize(),n[1].setComponents(l+s,d+c,m+p,S+f).normalize(),n[2].setComponents(l+o,d+h,m+g,S+y).normalize(),n[3].setComponents(l-o,d-h,m-g,S-y).normalize(),n[4].setComponents(l-a,d-u,m-_,S-v).normalize(),t===sn)n[5].setComponents(l+a,d+u,m+_,S+v).normalize();else if(t===ds)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(e){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qi.x=i.normal.x>0?e.max.x:e.min.x,Qi.y=i.normal.y>0?e.max.y:e.min.y,Qi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fa(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),p.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Ut extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*d-o;for(let v=0;v<c;v++){const S=v*u-s;g.push(S,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const v=y+c*f,S=y+c*(f+1),C=y+1+c*(f+1),T=y+1+c*f;p.push(v,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.width,e.height,e.widthSegments,e.heightSegments)}}var zc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hc=`#ifdef USE_ALPHAHASH
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
#endif`,Gc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qc=`#ifdef USE_AOMAP
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
#endif`,jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yc=`#ifdef USE_BATCHING
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
#endif`,Kc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$c=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qc=`#ifdef USE_IRIDESCENCE
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
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ch=`#define PI 3.141592653589793
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
#endif`,yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_NORMALMAP
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
#endif`,cu=`#ifdef USE_CLEARCOAT
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
#endif`,yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xu=`#ifdef USE_ROUGHNESSMAP
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
}`,ld=`#define PHONG
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
}`,cd=`#define STANDARD
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
}`,Fe={alphahash_fragment:zc,alphahash_pars_fragment:Hc,alphamap_fragment:Gc,alphamap_pars_fragment:Vc,alphatest_fragment:Wc,alphatest_pars_fragment:Xc,aomap_fragment:qc,aomap_pars_fragment:jc,batching_pars_vertex:Yc,batching_vertex:Kc,begin_vertex:$c,beginnormal_vertex:Zc,bsdfs:Jc,iridescence_fragment:Qc,bumpmap_pars_fragment:eh,clipping_planes_fragment:th,clipping_planes_pars_fragment:nh,clipping_planes_pars_vertex:ih,clipping_planes_vertex:sh,color_fragment:rh,color_pars_fragment:oh,color_pars_vertex:ah,color_vertex:lh,common:ch,cube_uv_reflection_fragment:hh,defaultnormal_vertex:uh,displacementmap_pars_vertex:dh,displacementmap_vertex:fh,emissivemap_fragment:ph,emissivemap_pars_fragment:mh,colorspace_fragment:gh,colorspace_pars_fragment:_h,envmap_fragment:vh,envmap_common_pars_fragment:yh,envmap_pars_fragment:xh,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Ih,envmap_vertex:Sh,fog_vertex:wh,fog_pars_vertex:Eh,fog_fragment:bh,fog_pars_fragment:Th,gradientmap_pars_fragment:Ah,lightmap_fragment:Ch,lightmap_pars_fragment:Rh,lights_lambert_fragment:Ph,lights_lambert_pars_fragment:Lh,lights_pars_begin:Dh,lights_toon_fragment:Uh,lights_toon_pars_fragment:Nh,lights_phong_fragment:Fh,lights_phong_pars_fragment:Bh,lights_physical_fragment:Oh,lights_physical_pars_fragment:kh,lights_fragment_begin:zh,lights_fragment_maps:Hh,lights_fragment_end:Gh,logdepthbuf_fragment:Vh,logdepthbuf_pars_fragment:Wh,logdepthbuf_pars_vertex:Xh,logdepthbuf_vertex:qh,map_fragment:jh,map_pars_fragment:Yh,map_particle_fragment:Kh,map_particle_pars_fragment:$h,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Jh,morphcolor_vertex:Qh,morphnormal_vertex:eu,morphtarget_pars_vertex:tu,morphtarget_vertex:nu,normal_fragment_begin:iu,normal_fragment_maps:su,normal_pars_fragment:ru,normal_pars_vertex:ou,normal_vertex:au,normalmap_pars_fragment:lu,clearcoat_normal_fragment_begin:cu,clearcoat_normal_fragment_maps:hu,clearcoat_pars_fragment:uu,iridescence_pars_fragment:du,opaque_fragment:fu,packing:pu,premultiplied_alpha_fragment:mu,project_vertex:gu,dithering_fragment:_u,dithering_pars_fragment:vu,roughnessmap_fragment:yu,roughnessmap_pars_fragment:xu,shadowmap_pars_fragment:Mu,shadowmap_pars_vertex:Su,shadowmap_vertex:wu,shadowmask_pars_fragment:Eu,skinbase_vertex:bu,skinning_pars_vertex:Tu,skinning_vertex:Au,skinnormal_vertex:Cu,specularmap_fragment:Ru,specularmap_pars_fragment:Pu,tonemapping_fragment:Lu,tonemapping_pars_fragment:Du,transmission_fragment:Iu,transmission_pars_fragment:Uu,uv_pars_fragment:Nu,uv_pars_vertex:Fu,uv_vertex:Bu,worldpos_vertex:Ou,background_vert:ku,background_frag:zu,backgroundCube_vert:Hu,backgroundCube_frag:Gu,cube_vert:Vu,cube_frag:Wu,depth_vert:Xu,depth_frag:qu,distanceRGBA_vert:ju,distanceRGBA_frag:Yu,equirect_vert:Ku,equirect_frag:$u,linedashed_vert:Zu,linedashed_frag:Ju,meshbasic_vert:Qu,meshbasic_frag:ed,meshlambert_vert:td,meshlambert_frag:nd,meshmatcap_vert:id,meshmatcap_frag:sd,meshnormal_vert:rd,meshnormal_frag:od,meshphong_vert:ad,meshphong_frag:ld,meshphysical_vert:cd,meshphysical_frag:hd,meshtoon_vert:ud,meshtoon_frag:dd,points_vert:fd,points_frag:pd,shadow_vert:md,shadow_frag:gd,sprite_vert:_d,sprite_frag:vd},oe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yt={basic:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:At([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:At([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:At([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:At([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:At([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:At([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:At([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:At([oe.lights,oe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Yt.physical={uniforms:At([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const es={r:0,b:0,g:0};function yd(r,e,t,n,i,s,o){const a=new be(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_s)?(h===void 0&&(h=new H(new ee(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:di(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Qe,(u!==v||d!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new H(new Ut(2,2),new Un({name:"BackgroundMaterial",uniforms:di(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(es,Ia(r)),n.buffers.color.setClear(es.r,es.g,es.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function xd(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(L,U,W,Y,j){let K=!1;if(o){const Z=_(Y,W,U);c!==Z&&(c=Z,p(c.object)),K=f(L,Y,W,j),K&&y(L,Y,W,j)}else{const Z=U.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==Z)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=Z,K=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,I(L,U,W,Y),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,U,W){const Y=W.wireframe===!0;let j=a[L.id];j===void 0&&(j={},a[L.id]=j);let K=j[U.id];K===void 0&&(K={},j[U.id]=K);let Z=K[Y];return Z===void 0&&(Z=m(d()),K[Y]=Z),Z}function m(L){const U=[],W=[],Y=[];for(let j=0;j<i;j++)U[j]=0,W[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,U,W,Y){const j=c.attributes,K=U.attributes;let Z=0;const se=W.getAttributes();for(const B in se)if(se[B].location>=0){const $=j[B];let ce=K[B];if(ce===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),$===void 0||$.attribute!==ce||ce&&$.data!==ce.data)return!0;Z++}return c.attributesNum!==Z||c.index!==Y}function y(L,U,W,Y){const j={},K=U.attributes;let Z=0;const se=W.getAttributes();for(const B in se)if(se[B].location>=0){let $=K[B];$===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const ce={};ce.attribute=$,$&&$.data&&(ce.data=$.data),j[B]=ce,Z++}c.attributes=j,c.attributesNum=Z,c.index=Y}function v(){const L=c.newAttributes;for(let U=0,W=L.length;U<W;U++)L[U]=0}function S(L){C(L,0)}function C(L,U){const W=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;W[L]=1,Y[L]===0&&(r.enableVertexAttribArray(L),Y[L]=1),j[L]!==U&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),j[L]=U)}function T(){const L=c.newAttributes,U=c.enabledAttributes;for(let W=0,Y=U.length;W<Y;W++)U[W]!==L[W]&&(r.disableVertexAttribArray(W),U[W]=0)}function A(L,U,W,Y,j,K,Z){Z===!0?r.vertexAttribIPointer(L,U,W,j,K):r.vertexAttribPointer(L,U,W,Y,j,K)}function I(L,U,W,Y){if(n.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=Y.attributes,K=W.getAttributes(),Z=U.defaultAttributeValues;for(const se in K){const B=K[se];if(B.location>=0){let N=j[se];if(N===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(N=L.instanceColor)),N!==void 0){const $=N.normalized,ce=N.itemSize,_e=t.get(N);if(_e===void 0)continue;const me=_e.buffer,pe=_e.type,Ue=_e.bytesPerElement,Ae=n.isWebGL2===!0&&(pe===r.INT||pe===r.UNSIGNED_INT||N.gpuType===_a);if(N.isInterleavedBufferAttribute){const Xe=N.data,O=Xe.stride,wt=N.offset;if(Xe.isInstancedInterleavedBuffer){for(let Se=0;Se<B.locationSize;Se++)C(B.location+Se,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Se=0;Se<B.locationSize;Se++)S(B.location+Se);r.bindBuffer(r.ARRAY_BUFFER,me);for(let Se=0;Se<B.locationSize;Se++)A(B.location+Se,ce/B.locationSize,pe,$,O*Ue,(wt+ce/B.locationSize*Se)*Ue,Ae)}else{if(N.isInstancedBufferAttribute){for(let Xe=0;Xe<B.locationSize;Xe++)C(B.location+Xe,N.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Xe=0;Xe<B.locationSize;Xe++)S(B.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,me);for(let Xe=0;Xe<B.locationSize;Xe++)A(B.location+Xe,ce/B.locationSize,pe,$,ce*Ue,ce/B.locationSize*Xe*Ue,Ae)}}else if(Z!==void 0){const $=Z[se];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(B.location,$);break;case 3:r.vertexAttrib3fv(B.location,$);break;case 4:r.vertexAttrib4fv(B.location,$);break;default:r.vertexAttrib1fv(B.location,$)}}}}T()}function x(){G();for(const L in a){const U=a[L];for(const W in U){const Y=U[W];for(const j in Y)g(Y[j].object),delete Y[j];delete U[W]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const U=a[L.id];for(const W in U){const Y=U[W];for(const j in Y)g(Y[j].object),delete Y[j];delete U[W]}delete a[L.id]}function F(L){for(const U in a){const W=a[U];if(W[L.id]===void 0)continue;const Y=W[L.id];for(const j in Y)g(Y[j].object),delete Y[j];delete W[L.id]}}function G(){q(),h=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:q,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function Md(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,d){if(d===0)return;let p,g;if(i)p=r,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,h,u,d),t.update(u,s,d)}function c(h,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Sd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||e.has("OES_texture_float"),C=v&&S,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:T}}function wd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Tn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,v=y*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,p);for(let C=0;C!==v;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ed(r){let e=new WeakMap;function t(o,a){return a===ar?o.mapping=ci:a===lr&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ar||a===lr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ba extends Ua{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ii=4,Io=[.125,.215,.35,.446,.526,.582],Rn=20,Ks=new Ba,Uo=new be;let $s=null,Zs=0,Js=0;const An=(1+Math.sqrt(5))/2,Zn=1/An,No=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,An,Zn),new R(0,An,-Zn),new R(Zn,0,An),new R(-Zn,0,An),new R(An,Zn,0),new R(-An,Zn,0)];class Fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s,Zs,Js),e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Ai,format:qt,colorSpace:rn,depthBuffer:!1},i=Bo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bd(s)),this._blurMaterial=Td(s,e,t)}return i}_compileMaterial(e){const t=new H(this._lodPlanes[0],e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,n,i){const a=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uo),h.toneMapping=mn,h.autoClear=!1;const p=new vn({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new H(new ee,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Uo),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;ts(i,y*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ci||e.mapping===hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new H(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ks)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=No[(i-1)%No.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new H(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Rn;m>Rn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rn}`);const f=[];let y=0;for(let A=0;A<Rn;++A){const I=A/_,x=Math.exp(-I*I/2);f.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],C=3*S*(i>v-ii?i-v+ii:0),T=4*(this._cubeSize-S);ts(t,C,T,3*S,2*S),l.setRenderTarget(t),l.render(u,Ks)}}function bd(r){const e=[],t=[],n=[];let i=r;const s=r-ii+1+Io.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ii?l=Io[o-r+ii-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,I=T>2?0:-1,x=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(x,_*g*T),v.set(d,m*g*T);const E=[T,T,T,T,T,T];S.set(E,f*g*T)}const C=new ht;C.setAttribute("position",new St(y,_)),C.setAttribute("uv",new St(v,m)),C.setAttribute("faceIndex",new St(S,f)),e.push(C),i>ii&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bo(r,e,t){const n=new In(r,e,t);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Td(r,e,t){const n=new Float32Array(Rn),i=new R(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mr(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Oo(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mr(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ko(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mr(),fragmentShader:`

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
	`}function Ad(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ar||l===lr,h=l===ci||l===hi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Fo(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Fo(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cd(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rd(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,S=y.length;v<S;v+=3){const C=y[v+0],T=y[v+1],A=y[v+2];d.push(C,T,T,A,A,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const C=v+0,T=v+1,A=v+2;d.push(C,T,T,A,A,C)}}else return;const m=new(Ta(d)?Da:La)(d,1);m.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Pd(r,e,t,n){const i=n.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){r.drawElements(s,g,a,p*l),t.update(g,s,1)}function u(p,g,_){if(_===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*l,_),t.update(g,s,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ld(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dd(r,e){return r[0]-e[0]}function Id(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ud(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==_){let U=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",U)};var p=U;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),C===!0&&(x=3);let E=h.attributes.position.count*x,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const G=new Float32Array(E*F*4*_),q=new Ra(G,E,F,_);q.type=fn,q.needsUpdate=!0;const L=x*4;for(let W=0;W<_;W++){const Y=T[W],j=A[W],K=I[W],Z=E*F*4*W;for(let se=0;se<Y.count;se++){const B=se*L;v===!0&&(o.fromBufferAttribute(Y,se),G[Z+B+0]=o.x,G[Z+B+1]=o.y,G[Z+B+2]=o.z,G[Z+B+3]=0),S===!0&&(o.fromBufferAttribute(j,se),G[Z+B+4]=o.x,G[Z+B+5]=o.y,G[Z+B+6]=o.z,G[Z+B+7]=0),C===!0&&(o.fromBufferAttribute(K,se),G[Z+B+8]=o.x,G[Z+B+9]=o.y,G[Z+B+10]=o.z,G[Z+B+11]=K.itemSize===4?o.w:1)}}m={count:_,texture:q,size:new Me(E,F)},s.set(h,m),h.addEventListener("dispose",U)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const C=_[S];C[0]=S,C[1]=d[S]}_.sort(Id);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Dd);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const C=a[S],T=C[0],A=C[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+S)!==m[T]&&h.setAttribute("morphTarget"+S,m[T]),f&&h.getAttribute("morphNormal"+S)!==f[T]&&h.setAttribute("morphNormal"+S,f[T]),i[S]=A,y+=A):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Nd(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Oa extends Pt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Ln,h!==Ln&&h!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ln&&(n=dn),n===void 0&&h===ui&&(n=Pn),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ka=new Pt,za=new Oa(1,1);za.compareFunction=ba;const Ha=new Ra,Ga=new yc,Va=new Na,zo=[],Ho=[],Go=new Float32Array(16),Vo=new Float32Array(9),Wo=new Float32Array(4);function mi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=zo[i];if(s===void 0&&(s=new Float32Array(i),zo[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function lt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ms(r,e){let t=Ho[e];t===void 0&&(t=new Int32Array(e),Ho[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Fd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2fv(this.addr,e),ct(t,e)}}function Od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;r.uniform3fv(this.addr,e),ct(t,e)}}function kd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4fv(this.addr,e),ct(t,e)}}function zd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Wo.set(n),r.uniformMatrix2fv(this.addr,!1,Wo),ct(t,n)}}function Hd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Vo.set(n),r.uniformMatrix3fv(this.addr,!1,Vo),ct(t,n)}}function Gd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Go.set(n),r.uniformMatrix4fv(this.addr,!1,Go),ct(t,n)}}function Vd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2iv(this.addr,e),ct(t,e)}}function Xd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;r.uniform3iv(this.addr,e),ct(t,e)}}function qd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4iv(this.addr,e),ct(t,e)}}function jd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Yd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2uiv(this.addr,e),ct(t,e)}}function Kd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;r.uniform3uiv(this.addr,e),ct(t,e)}}function $d(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4uiv(this.addr,e),ct(t,e)}}function Zd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?za:ka;t.setTexture2D(e||s,i)}function Jd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ga,i)}function Qd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Va,i)}function ef(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ha,i)}function tf(r){switch(r){case 5126:return Fd;case 35664:return Bd;case 35665:return Od;case 35666:return kd;case 35674:return zd;case 35675:return Hd;case 35676:return Gd;case 5124:case 35670:return Vd;case 35667:case 35671:return Wd;case 35668:case 35672:return Xd;case 35669:case 35673:return qd;case 5125:return jd;case 36294:return Yd;case 36295:return Kd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return ef}}function nf(r,e){r.uniform1fv(this.addr,e)}function sf(r,e){const t=mi(e,this.size,2);r.uniform2fv(this.addr,t)}function rf(r,e){const t=mi(e,this.size,3);r.uniform3fv(this.addr,t)}function of(r,e){const t=mi(e,this.size,4);r.uniform4fv(this.addr,t)}function af(r,e){const t=mi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lf(r,e){const t=mi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cf(r,e){const t=mi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hf(r,e){r.uniform1iv(this.addr,e)}function uf(r,e){r.uniform2iv(this.addr,e)}function df(r,e){r.uniform3iv(this.addr,e)}function ff(r,e){r.uniform4iv(this.addr,e)}function pf(r,e){r.uniform1uiv(this.addr,e)}function mf(r,e){r.uniform2uiv(this.addr,e)}function gf(r,e){r.uniform3uiv(this.addr,e)}function _f(r,e){r.uniform4uiv(this.addr,e)}function vf(r,e,t){const n=this.cache,i=e.length,s=Ms(t,i);lt(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ka,s[o])}function yf(r,e,t){const n=this.cache,i=e.length,s=Ms(t,i);lt(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ga,s[o])}function xf(r,e,t){const n=this.cache,i=e.length,s=Ms(t,i);lt(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Va,s[o])}function Mf(r,e,t){const n=this.cache,i=e.length,s=Ms(t,i);lt(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ha,s[o])}function Sf(r){switch(r){case 5126:return nf;case 35664:return sf;case 35665:return rf;case 35666:return of;case 35674:return af;case 35675:return lf;case 35676:return cf;case 5124:case 35670:return hf;case 35667:case 35671:return uf;case 35668:case 35672:return df;case 35669:case 35673:return ff;case 5125:return pf;case 36294:return mf;case 36295:return gf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return Mf}}class wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tf(t.type)}}class Ef{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sf(t.type)}}class bf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function Xo(r,e){r.seq.push(e),r.map[e.id]=e}function Tf(r,e,t){const n=r.name,i=n.length;for(Qs.lastIndex=0;;){const s=Qs.exec(n),o=Qs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xo(t,c===void 0?new wf(a,r,e):new Ef(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new bf(a),Xo(t,u)),t=u}}}class os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Tf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function qo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Af=37297;let Cf=0;function Rf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Pf(r){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(r);let n;switch(e===t?n="":e===us&&t===hs?n="LinearDisplayP3ToLinearSRGB":e===hs&&t===us&&(n="LinearSRGBToLinearDisplayP3"),r){case rn:case ys:return[n,"LinearTransferOETF"];case _t:case _r:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function jo(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Rf(r.getShaderSource(e),o)}else return i}function Lf(r,e){const t=Pf(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Df(r,e){let t;switch(e){case Cl:t="Linear";break;case Rl:t="Reinhard";break;case Pl:t="OptimizedCineon";break;case Ll:t="ACESFilmic";break;case Il:t="AgX";break;case Dl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function If(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function Uf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(si).join(`
`)}function Nf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ff(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function si(r){return r!==""}function Yo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ko(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function dr(r){return r.replace(Bf,kf)}const Of=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kf(r,e){let t=Fe[e];if(t===void 0){const n=Of.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dr(t)}const zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(r){return r.replace(zf,Hf)}function Hf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ma?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ci:case hi:e="ENVMAP_TYPE_CUBE";break;case _s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gs:e="ENVMAP_BLENDING_MULTIPLY";break;case Tl:e="ENVMAP_BLENDING_MIX";break;case Al:e="ENVMAP_BLENDING_ADD";break}return e}function qf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Gf(t),c=Vf(t),h=Wf(t),u=Xf(t),d=qf(t),p=t.isWebGL2?"":If(t),g=Uf(t),_=Nf(s),m=i.createProgram();let f,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(si).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(si).join(`
`),y.length>0&&(y+=`
`)):(f=[Zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),y=[p,Zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==mn?Df("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Lf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),o=dr(o),o=Yo(o,t),o=Ko(o,t),a=dr(a),a=Yo(a,t),a=Ko(a,t),o=$o(o),a=$o(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+f+o,C=v+y+a,T=qo(i,i.VERTEX_SHADER,S),A=qo(i,i.FRAGMENT_SHADER,C);i.attachShader(m,T),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(G){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(T).trim(),U=i.getShaderInfoLog(A).trim();let W=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,A);else{const j=jo(i,T,"vertex"),K=jo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+j+`
`+K)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||U==="")&&(Y=!1);Y&&(G.diagnostics={runnable:W,programLog:q,vertexShader:{log:L,prefix:f},fragmentShader:{log:U,prefix:y}})}i.deleteShader(T),i.deleteShader(A),x=new os(i,m),E=Ff(i,m)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,Af)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cf++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let Yf=0;class Kf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $f(e),t.set(e,n)),n}}class $f{constructor(e){this.id=Yf++,this.code=e,this.usedTimes=0}}function Zf(r,e,t,n,i,s,o){const a=new yr,l=new Kf,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,E,F,G,q){const L=G.fog,U=q.geometry,W=x.isMeshStandardMaterial?G.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),j=Y&&Y.mapping===_s?Y.image.height:null,K=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,se=Z!==void 0?Z.length:0;let B=0;U.morphAttributes.position!==void 0&&(B=1),U.morphAttributes.normal!==void 0&&(B=2),U.morphAttributes.color!==void 0&&(B=3);let N,$,ce,_e;if(K){const Et=Yt[K];N=Et.vertexShader,$=Et.fragmentShader}else N=x.vertexShader,$=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const me=r.getRenderTarget(),pe=q.isInstancedMesh===!0,Ue=q.isBatchedMesh===!0,Ae=!!x.map,Xe=!!x.matcap,O=!!Y,wt=!!x.aoMap,Se=!!x.lightMap,Le=!!x.bumpMap,ge=!!x.normalMap,tt=!!x.displacementMap,Be=!!x.emissiveMap,b=!!x.metalnessMap,M=!!x.roughnessMap,z=x.anisotropy>0,ne=x.clearcoat>0,te=x.iridescence>0,ie=x.sheen>0,ve=x.transmission>0,he=z&&!!x.anisotropyMap,de=ne&&!!x.clearcoatMap,Te=ne&&!!x.clearcoatNormalMap,Oe=ne&&!!x.clearcoatRoughnessMap,Q=te&&!!x.iridescenceMap,je=te&&!!x.iridescenceThicknessMap,Ve=ie&&!!x.sheenColorMap,Pe=ie&&!!x.sheenRoughnessMap,xe=!!x.specularMap,fe=!!x.specularColorMap,Ne=!!x.specularIntensityMap,qe=ve&&!!x.transmissionMap,it=ve&&!!x.thicknessMap,ze=!!x.gradientMap,re=!!x.alphaMap,P=x.alphaTest>0,ae=!!x.alphaHash,le=!!x.extensions,Ce=!!U.attributes.uv1,we=!!U.attributes.uv2,$e=!!U.attributes.uv3;let Ze=mn;return x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ze=r.toneMapping),{isWebGL2:h,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:N,fragmentShader:$,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ue,instancing:pe,instancingColor:pe&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:rn,map:Ae,matcap:Xe,envMap:O,envMapMode:O&&Y.mapping,envMapCubeUVHeight:j,aoMap:wt,lightMap:Se,bumpMap:Le,normalMap:ge,displacementMap:d&&tt,emissiveMap:Be,normalMapObjectSpace:ge&&x.normalMapType===ql,normalMapTangentSpace:ge&&x.normalMapType===vs,metalnessMap:b,roughnessMap:M,anisotropy:z,anisotropyMap:he,clearcoat:ne,clearcoatMap:de,clearcoatNormalMap:Te,clearcoatRoughnessMap:Oe,iridescence:te,iridescenceMap:Q,iridescenceThicknessMap:je,sheen:ie,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:fe,specularIntensityMap:Ne,transmission:ve,transmissionMap:qe,thicknessMap:it,gradientMap:ze,opaque:x.transparent===!1&&x.blending===ri,alphaMap:re,alphaTest:P,alphaHash:ae,combine:x.combine,mapUv:Ae&&_(x.map.channel),aoMapUv:wt&&_(x.aoMap.channel),lightMapUv:Se&&_(x.lightMap.channel),bumpMapUv:Le&&_(x.bumpMap.channel),normalMapUv:ge&&_(x.normalMap.channel),displacementMapUv:tt&&_(x.displacementMap.channel),emissiveMapUv:Be&&_(x.emissiveMap.channel),metalnessMapUv:b&&_(x.metalnessMap.channel),roughnessMapUv:M&&_(x.roughnessMap.channel),anisotropyMapUv:he&&_(x.anisotropyMap.channel),clearcoatMapUv:de&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(x.sheenRoughnessMap.channel),specularMapUv:xe&&_(x.specularMap.channel),specularColorMapUv:fe&&_(x.specularColorMap.channel),specularIntensityMapUv:Ne&&_(x.specularIntensityMap.channel),transmissionMapUv:qe&&_(x.transmissionMap.channel),thicknessMapUv:it&&_(x.thicknessMap.channel),alphaMapUv:re&&_(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ge||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:we,vertexUv3s:$e,pointsUvs:q.isPoints===!0&&!!U.attributes.uv&&(Ae||re),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:B,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kt,flipSided:x.side===Rt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:le&&x.extensions.derivatives===!0,extensionFragDepth:le&&x.extensions.fragDepth===!0,extensionDrawBuffers:le&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)E.push(F),E.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(y(E,x),v(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function S(x){const E=g[x.type];let F;if(E){const G=Yt[E];F=Dc.clone(G.uniforms)}else F=x.uniforms;return F}function C(x,E){let F;for(let G=0,q=c.length;G<q;G++){const L=c[G];if(L.cacheKey===E){F=L,++F.usedTimes;break}}return F===void 0&&(F=new jf(r,E,x,s),c.push(F)),F}function T(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:I}}function Jf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Jo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qo(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Qf),n.length>1&&n.sort(d||Jo),i.length>1&&i.sort(d||Jo)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function ep(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Qo,r.set(n,[o])):i>=s.length?(o=new Qo,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function tp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new be};break;case"SpotLight":t={position:new R,direction:new R,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function np(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ip=0;function sp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rp(r,e){const t=new tp,n=np(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const s=new R,o=new rt,a=new rt;function l(h,u){let d=0,p=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,m=0,f=0,y=0,v=0,S=0,C=0,T=0,A=0,I=0,x=0;h.sort(sp);const E=u===!0?Math.PI:1;for(let G=0,q=h.length;G<q;G++){const L=h[G],U=L.color,W=L.intensity,Y=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*W*E,p+=U.g*W*E,g+=U.b*W*E;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],W);x++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const Z=L.shadow,se=n.get(L);se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,i.directionalShadow[_]=se,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=L.shadow.matrix,S++}i.directional[_]=K,_++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(U).multiplyScalar(W*E),K.distance=Y,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[f]=K;const Z=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,Z.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[f]=Z.matrix,L.castShadow){const se=n.get(L);se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,i.spotShadow[f]=se,i.spotShadowMap[f]=j,T++}f++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(U).multiplyScalar(W),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=K,y++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*E),K.distance=L.distance,K.decay=L.decay,L.castShadow){const Z=L.shadow,se=n.get(L);se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,se.shadowCameraNear=Z.camera.near,se.shadowCameraFar=Z.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=L.shadow.matrix,C++}i.point[m]=K,m++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(W*E),K.groundColor.copy(L.groundColor).multiplyScalar(W*E),i.hemi[v]=K,v++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==y||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==C||F.numSpotShadows!==T||F.numSpotMaps!==A||F.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=y,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=T+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=x,F.directionalLength=_,F.pointLength=m,F.spotLength=f,F.rectAreaLength=y,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=C,F.numSpotShadows=T,F.numSpotMaps=A,F.numLightProbes=x,i.version=ip++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const S=h[y];if(S.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),d++}else if(S.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function ea(r,e){const t=new rp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function op(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ea(r,e),t.set(s,[l])):o>=a.length?(l=new ea(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ap extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lp extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cp=`void main() {
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
}`;function up(r,e,t){let n=new xr;const i=new Me,s=new Me,o=new et,a=new ap({depthPacking:Xl}),l=new lp,c={},h=t.maxTextureSize,u={[_n]:Rt,[Rt]:_n,[kt]:kt},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:cp,fragmentShader:hp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ht;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new H(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let f=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=r.getRenderTarget(),E=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),G=r.state;G.setBlending(pn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=f!==nn&&this.type===nn,L=f===nn&&this.type!==nn;for(let U=0,W=T.length;U<W;U++){const Y=T[U],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const K=j.getFrameExtents();if(i.multiply(K),s.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,j.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,j.mapSize.y=s.y)),j.map===null||q===!0||L===!0){const se=this.type!==nn?{minFilter:Mt,magFilter:Mt}:{};j.map!==null&&j.map.dispose(),j.map=new In(i.x,i.y,se),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Z=j.getViewportCount();for(let se=0;se<Z;se++){const B=j.getViewport(se);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),G.viewport(o),j.updateMatrices(Y,se),n=j.getFrustum(),S(A,I,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===nn&&y(j,I),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(x,E,F)};function y(T,A){const I=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new In(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,I,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,I,p,_,null)}function v(T,A,I,x){let E=null;const F=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)E=F;else if(E=I.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=E.uuid,q=A.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let U=L[q];U===void 0&&(U=E.clone(),L[q]=U,A.addEventListener("dispose",C)),E=U}if(E.visible=A.visible,E.wireframe=A.wireframe,x===nn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=r.properties.get(E);G.light=I}return E}function S(T,A,I,x,E){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const q=e.update(T),L=T.material;if(Array.isArray(L)){const U=q.groups;for(let W=0,Y=U.length;W<Y;W++){const j=U[W],K=L[j.materialIndex];if(K&&K.visible){const Z=v(T,K,x,E);T.onBeforeShadow(r,T,A,I,q,Z,j),r.renderBufferDirect(I,null,q,Z,T,j),T.onAfterShadow(r,T,A,I,q,Z,j)}}}else if(L.visible){const U=v(T,L,x,E);T.onBeforeShadow(r,T,A,I,q,U,null),r.renderBufferDirect(I,null,q,U,T,null),T.onAfterShadow(r,T,A,I,q,U,null)}}const G=T.children;for(let q=0,L=G.length;q<L;q++)S(G[q],A,I,x,E)}function C(T){T.target.removeEventListener("dispose",C);for(const I in c){const x=c[I],E=T.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function dp(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new et;let le=null;const Ce=new et(0,0,0,0);return{setMask:function(we){le!==we&&!P&&(r.colorMask(we,we,we,we),le=we)},setLocked:function(we){P=we},setClear:function(we,$e,Ze,ut,Et){Et===!0&&(we*=ut,$e*=ut,Ze*=ut),ae.set(we,$e,Ze,ut),Ce.equals(ae)===!1&&(r.clearColor(we,$e,Ze,ut),Ce.copy(ae))},reset:function(){P=!1,le=null,Ce.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,le=null,Ce=null;return{setTest:function(we){we?Ue(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(we){ae!==we&&!P&&(r.depthMask(we),ae=we)},setFunc:function(we){if(le!==we){switch(we){case yl:r.depthFunc(r.NEVER);break;case xl:r.depthFunc(r.ALWAYS);break;case Ml:r.depthFunc(r.LESS);break;case as:r.depthFunc(r.LEQUAL);break;case Sl:r.depthFunc(r.EQUAL);break;case wl:r.depthFunc(r.GEQUAL);break;case El:r.depthFunc(r.GREATER);break;case bl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=we}},setLocked:function(we){P=we},setClear:function(we){Ce!==we&&(r.clearDepth(we),Ce=we)},reset:function(){P=!1,ae=null,le=null,Ce=null}}}function o(){let P=!1,ae=null,le=null,Ce=null,we=null,$e=null,Ze=null,ut=null,Et=null;return{setTest:function(Je){P||(Je?Ue(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Je){ae!==Je&&!P&&(r.stencilMask(Je),ae=Je)},setFunc:function(Je,bt,jt){(le!==Je||Ce!==bt||we!==jt)&&(r.stencilFunc(Je,bt,jt),le=Je,Ce=bt,we=jt)},setOp:function(Je,bt,jt){($e!==Je||Ze!==bt||ut!==jt)&&(r.stencilOp(Je,bt,jt),$e=Je,Ze=bt,ut=jt)},setLocked:function(Je){P=Je},setClear:function(Je){Et!==Je&&(r.clearStencil(Je),Et=Je)},reset:function(){P=!1,ae=null,le=null,Ce=null,we=null,$e=null,Ze=null,ut=null,Et=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,S=null,C=null,T=null,A=null,I=null,x=new be(0,0,0),E=0,F=!1,G=null,q=null,L=null,U=null,W=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=K>=2);let se=null,B={};const N=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),ce=new et().fromArray(N),_e=new et().fromArray($);function me(P,ae,le,Ce){const we=new Uint8Array(4),$e=r.createTexture();r.bindTexture(P,$e),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<le;Ze++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(ae+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return $e}const pe={};pe[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(r.DEPTH_TEST),l.setFunc(as),Be(!1),b(Nr),Ue(r.CULL_FACE),ge(pn);function Ue(P){d[P]!==!0&&(r.enable(P),d[P]=!0)}function Ae(P){d[P]!==!1&&(r.disable(P),d[P]=!1)}function Xe(P,ae){return p[P]!==ae?(r.bindFramebuffer(P,ae),p[P]=ae,n&&(P===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ae),P===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function O(P,ae){let le=_,Ce=!1;if(P)if(le=g.get(ae),le===void 0&&(le=[],g.set(ae,le)),P.isWebGLMultipleRenderTargets){const we=P.texture;if(le.length!==we.length||le[0]!==r.COLOR_ATTACHMENT0){for(let $e=0,Ze=we.length;$e<Ze;$e++)le[$e]=r.COLOR_ATTACHMENT0+$e;le.length=we.length,Ce=!0}}else le[0]!==r.COLOR_ATTACHMENT0&&(le[0]=r.COLOR_ATTACHMENT0,Ce=!0);else le[0]!==r.BACK&&(le[0]=r.BACK,Ce=!0);Ce&&(t.isWebGL2?r.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function wt(P){return m!==P?(r.useProgram(P),m=P,!0):!1}const Se={[Cn]:r.FUNC_ADD,[sl]:r.FUNC_SUBTRACT,[rl]:r.FUNC_REVERSE_SUBTRACT};if(n)Se[Or]=r.MIN,Se[kr]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Se[Or]=P.MIN_EXT,Se[kr]=P.MAX_EXT)}const Le={[ol]:r.ZERO,[al]:r.ONE,[ll]:r.SRC_COLOR,[rr]:r.SRC_ALPHA,[pl]:r.SRC_ALPHA_SATURATE,[dl]:r.DST_COLOR,[hl]:r.DST_ALPHA,[cl]:r.ONE_MINUS_SRC_COLOR,[or]:r.ONE_MINUS_SRC_ALPHA,[fl]:r.ONE_MINUS_DST_COLOR,[ul]:r.ONE_MINUS_DST_ALPHA,[ml]:r.CONSTANT_COLOR,[gl]:r.ONE_MINUS_CONSTANT_COLOR,[_l]:r.CONSTANT_ALPHA,[vl]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(P,ae,le,Ce,we,$e,Ze,ut,Et,Je){if(P===pn){f===!0&&(Ae(r.BLEND),f=!1);return}if(f===!1&&(Ue(r.BLEND),f=!0),P!==il){if(P!==y||Je!==F){if((v!==Cn||T!==Cn)&&(r.blendEquation(r.FUNC_ADD),v=Cn,T=Cn),Je)switch(P){case ri:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sr:r.blendFunc(r.ONE,r.ONE);break;case Fr:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Br:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ri:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fr:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Br:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,C=null,A=null,I=null,x.set(0,0,0),E=0,y=P,F=Je}return}we=we||ae,$e=$e||le,Ze=Ze||Ce,(ae!==v||we!==T)&&(r.blendEquationSeparate(Se[ae],Se[we]),v=ae,T=we),(le!==S||Ce!==C||$e!==A||Ze!==I)&&(r.blendFuncSeparate(Le[le],Le[Ce],Le[$e],Le[Ze]),S=le,C=Ce,A=$e,I=Ze),(ut.equals(x)===!1||Et!==E)&&(r.blendColor(ut.r,ut.g,ut.b,Et),x.copy(ut),E=Et),y=P,F=!1}function tt(P,ae){P.side===kt?Ae(r.CULL_FACE):Ue(r.CULL_FACE);let le=P.side===Rt;ae&&(le=!le),Be(le),P.blending===ri&&P.transparent===!1?ge(pn):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ce=P.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){G!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),G=P)}function b(P){P!==Qa?(Ue(r.CULL_FACE),P!==q&&(P===Nr?r.cullFace(r.BACK):P===el?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),q=P}function M(P){P!==L&&(j&&r.lineWidth(P),L=P)}function z(P,ae,le){P?(Ue(r.POLYGON_OFFSET_FILL),(U!==ae||W!==le)&&(r.polygonOffset(ae,le),U=ae,W=le)):Ae(r.POLYGON_OFFSET_FILL)}function ne(P){P?Ue(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function te(P){P===void 0&&(P=r.TEXTURE0+Y-1),se!==P&&(r.activeTexture(P),se=P)}function ie(P,ae,le){le===void 0&&(se===null?le=r.TEXTURE0+Y-1:le=se);let Ce=B[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},B[le]=Ce),(Ce.type!==P||Ce.texture!==ae)&&(se!==le&&(r.activeTexture(le),se=le),r.bindTexture(P,ae||pe[P]),Ce.type=P,Ce.texture=ae)}function ve(){const P=B[se];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(P){ce.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function qe(P){_e.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function it(P,ae){let le=u.get(ae);le===void 0&&(le=new WeakMap,u.set(ae,le));let Ce=le.get(P);Ce===void 0&&(Ce=r.getUniformBlockIndex(ae,P.name),le.set(P,Ce))}function ze(P,ae){const Ce=u.get(ae).get(P);h.get(ae)!==Ce&&(r.uniformBlockBinding(ae,Ce,P.__bindingPointIndex),h.set(ae,Ce))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},se=null,B={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,S=null,C=null,T=null,A=null,I=null,x=new be(0,0,0),E=0,F=!1,G=null,q=null,L=null,U=null,W=null,ce.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:Ae,bindFramebuffer:Xe,drawBuffers:O,useProgram:wt,setBlending:ge,setMaterial:tt,setFlipSided:Be,setCullFace:b,setLineWidth:M,setPolygonOffset:z,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:ve,compressedTexImage2D:he,compressedTexImage3D:de,texImage2D:xe,texImage3D:fe,updateUBOMapping:it,uniformBlockBinding:ze,texStorage2D:Ve,texStorage3D:Pe,texSubImage2D:Te,texSubImage3D:Oe,compressedTexSubImage2D:Q,compressedTexSubImage3D:je,scissor:Ne,viewport:qe,reset:re}}function fp(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):ps("canvas")}function _(b,M,z,ne){let te=1;if((b.width>ne||b.height>ne)&&(te=ne/Math.max(b.width,b.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=M?fs:Math.floor,ve=ie(te*b.width),he=ie(te*b.height);u===void 0&&(u=g(ve,he));const de=z?g(ve,he):u;return de.width=ve,de.height=he,de.getContext("2d").drawImage(b,0,0,ve,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+he+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ur(b.width)&&ur(b.height)}function f(b){return a?!1:b.wrapS!==Xt||b.wrapT!==Xt||b.minFilter!==Mt&&b.minFilter!==Ot}function y(b,M){return b.generateMipmaps&&M&&b.minFilter!==Mt&&b.minFilter!==Ot}function v(b){r.generateMipmap(b)}function S(b,M,z,ne,te=!1){if(a===!1)return M;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=M;if(M===r.RED&&(z===r.FLOAT&&(ie=r.R32F),z===r.HALF_FLOAT&&(ie=r.R16F),z===r.UNSIGNED_BYTE&&(ie=r.R8)),M===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(ie=r.R8UI),z===r.UNSIGNED_SHORT&&(ie=r.R16UI),z===r.UNSIGNED_INT&&(ie=r.R32UI),z===r.BYTE&&(ie=r.R8I),z===r.SHORT&&(ie=r.R16I),z===r.INT&&(ie=r.R32I)),M===r.RG&&(z===r.FLOAT&&(ie=r.RG32F),z===r.HALF_FLOAT&&(ie=r.RG16F),z===r.UNSIGNED_BYTE&&(ie=r.RG8)),M===r.RGBA){const ve=te?cs:Ye.getTransfer(ne);z===r.FLOAT&&(ie=r.RGBA32F),z===r.HALF_FLOAT&&(ie=r.RGBA16F),z===r.UNSIGNED_BYTE&&(ie=ve===Qe?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function C(b,M,z){return y(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==Mt&&b.minFilter!==Ot?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function T(b){return b===Mt||b===zr||b===Ts?r.NEAREST:r.LINEAR}function A(b){const M=b.target;M.removeEventListener("dispose",A),x(M),M.isVideoTexture&&h.delete(M)}function I(b){const M=b.target;M.removeEventListener("dispose",I),F(M)}function x(b){const M=n.get(b);if(M.__webglInit===void 0)return;const z=b.source,ne=d.get(z);if(ne){const te=ne[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(ne).length===0&&d.delete(z)}n.remove(b)}function E(b){const M=n.get(b);r.deleteTexture(M.__webglTexture);const z=b.source,ne=d.get(z);delete ne[M.__cacheKey],o.memory.textures--}function F(b){const M=b.texture,z=n.get(b),ne=n.get(M);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let ie=0;ie<z.__webglFramebuffer[te].length;ie++)r.deleteFramebuffer(z.__webglFramebuffer[te][ie]);else r.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)r.deleteFramebuffer(z.__webglFramebuffer[te]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,ie=M.length;te<ie;te++){const ve=n.get(M[te]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(M[te])}n.remove(M),n.remove(b)}let G=0;function q(){G=0}function L(){const b=G;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),G+=1,b}function U(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function W(b,M){const z=n.get(b);if(b.isVideoTexture&&tt(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,b,M);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+M)}function Y(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ce(z,b,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+M)}function j(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ce(z,b,M);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+M)}function K(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){_e(z,b,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+M)}const Z={[ls]:r.REPEAT,[Xt]:r.CLAMP_TO_EDGE,[cr]:r.MIRRORED_REPEAT},se={[Mt]:r.NEAREST,[zr]:r.NEAREST_MIPMAP_NEAREST,[Ts]:r.NEAREST_MIPMAP_LINEAR,[Ot]:r.LINEAR,[Nl]:r.LINEAR_MIPMAP_NEAREST,[Ti]:r.LINEAR_MIPMAP_LINEAR},B={[jl]:r.NEVER,[Ql]:r.ALWAYS,[Yl]:r.LESS,[ba]:r.LEQUAL,[Kl]:r.EQUAL,[Jl]:r.GEQUAL,[$l]:r.GREATER,[Zl]:r.NOTEQUAL};function N(b,M,z){if(z?(r.texParameteri(b,r.TEXTURE_WRAP_S,Z[M.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,Z[M.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,Z[M.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,se[M.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,se[M.minFilter])):(r.texParameteri(b,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(b,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==Xt||M.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,r.TEXTURE_MAG_FILTER,T(M.magFilter)),r.texParameteri(b,r.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Mt&&M.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,B[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Mt||M.minFilter!==Ts&&M.minFilter!==Ti||M.type===fn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ai&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function $(b,M){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));const ne=M.source;let te=d.get(ne);te===void 0&&(te={},d.set(ne,te));const ie=U(M);if(ie!==b.__cacheKey){te[ie]===void 0&&(te[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[ie].usedTimes++;const ve=te[b.__cacheKey];ve!==void 0&&(te[b.__cacheKey].usedTimes--,ve.usedTimes===0&&E(M)),b.__cacheKey=ie,b.__webglTexture=te[ie].texture}return z}function ce(b,M,z){let ne=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=r.TEXTURE_3D);const te=$(b,M),ie=M.source;t.bindTexture(ne,b.__webglTexture,r.TEXTURE0+z);const ve=n.get(ie);if(ie.version!==ve.__version||te===!0){t.activeTexture(r.TEXTURE0+z);const he=Ye.getPrimaries(Ye.workingColorSpace),de=M.colorSpace===zt?null:Ye.getPrimaries(M.colorSpace),Te=M.colorSpace===zt||he===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Oe=f(M)&&m(M.image)===!1;let Q=_(M.image,Oe,!1,i.maxTextureSize);Q=Be(M,Q);const je=m(Q)||a,Ve=s.convert(M.format,M.colorSpace);let Pe=s.convert(M.type),xe=S(M.internalFormat,Ve,Pe,M.colorSpace,M.isVideoTexture);N(ne,M,je);let fe;const Ne=M.mipmaps,qe=a&&M.isVideoTexture!==!0&&xe!==wa,it=ve.__version===void 0||te===!0,ze=C(M,Q,je);if(M.isDepthTexture)xe=r.DEPTH_COMPONENT,a?M.type===fn?xe=r.DEPTH_COMPONENT32F:M.type===dn?xe=r.DEPTH_COMPONENT24:M.type===Pn?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:M.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ln&&xe===r.DEPTH_COMPONENT&&M.type!==gr&&M.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=dn,Pe=s.convert(M.type)),M.format===ui&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,M.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Pn,Pe=s.convert(M.type))),it&&(qe?t.texStorage2D(r.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,Ve,Pe,null));else if(M.isDataTexture)if(Ne.length>0&&je){qe&&it&&t.texStorage2D(r.TEXTURE_2D,ze,xe,Ne[0].width,Ne[0].height);for(let re=0,P=Ne.length;re<P;re++)fe=Ne[re],qe?t.texSubImage2D(r.TEXTURE_2D,re,0,0,fe.width,fe.height,Ve,Pe,fe.data):t.texImage2D(r.TEXTURE_2D,re,xe,fe.width,fe.height,0,Ve,Pe,fe.data);M.generateMipmaps=!1}else qe?(it&&t.texStorage2D(r.TEXTURE_2D,ze,xe,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,Ve,Pe,Q.data)):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,Ve,Pe,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ze,xe,Ne[0].width,Ne[0].height,Q.depth);for(let re=0,P=Ne.length;re<P;re++)fe=Ne[re],M.format!==qt?Ve!==null?qe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,Q.depth,Ve,fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,xe,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,Q.depth,Ve,Pe,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,xe,fe.width,fe.height,Q.depth,0,Ve,Pe,fe.data)}else{qe&&it&&t.texStorage2D(r.TEXTURE_2D,ze,xe,Ne[0].width,Ne[0].height);for(let re=0,P=Ne.length;re<P;re++)fe=Ne[re],M.format!==qt?Ve!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,fe.width,fe.height,Ve,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,re,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(r.TEXTURE_2D,re,0,0,fe.width,fe.height,Ve,Pe,fe.data):t.texImage2D(r.TEXTURE_2D,re,xe,fe.width,fe.height,0,Ve,Pe,fe.data)}else if(M.isDataArrayTexture)qe?(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ze,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ve,Pe,Q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,Ve,Pe,Q.data);else if(M.isData3DTexture)qe?(it&&t.texStorage3D(r.TEXTURE_3D,ze,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ve,Pe,Q.data)):t.texImage3D(r.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,Ve,Pe,Q.data);else if(M.isFramebufferTexture){if(it)if(qe)t.texStorage2D(r.TEXTURE_2D,ze,xe,Q.width,Q.height);else{let re=Q.width,P=Q.height;for(let ae=0;ae<ze;ae++)t.texImage2D(r.TEXTURE_2D,ae,xe,re,P,0,Ve,Pe,null),re>>=1,P>>=1}}else if(Ne.length>0&&je){qe&&it&&t.texStorage2D(r.TEXTURE_2D,ze,xe,Ne[0].width,Ne[0].height);for(let re=0,P=Ne.length;re<P;re++)fe=Ne[re],qe?t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ve,Pe,fe):t.texImage2D(r.TEXTURE_2D,re,xe,Ve,Pe,fe);M.generateMipmaps=!1}else qe?(it&&t.texStorage2D(r.TEXTURE_2D,ze,xe,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ve,Pe,Q)):t.texImage2D(r.TEXTURE_2D,0,xe,Ve,Pe,Q);y(M,je)&&v(ne),ve.__version=ie.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function _e(b,M,z){if(M.image.length!==6)return;const ne=$(b,M),te=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+z);const ie=n.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(r.TEXTURE0+z);const ve=Ye.getPrimaries(Ye.workingColorSpace),he=M.colorSpace===zt?null:Ye.getPrimaries(M.colorSpace),de=M.colorSpace===zt||ve===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,Oe=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!Te&&!Oe?Q[re]=_(M.image[re],!1,!0,i.maxCubemapSize):Q[re]=Oe?M.image[re].image:M.image[re],Q[re]=Be(M,Q[re]);const je=Q[0],Ve=m(je)||a,Pe=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),fe=S(M.internalFormat,Pe,xe,M.colorSpace),Ne=a&&M.isVideoTexture!==!0,qe=ie.__version===void 0||ne===!0;let it=C(M,je,Ve);N(r.TEXTURE_CUBE_MAP,M,Ve);let ze;if(Te){Ne&&qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,it,fe,je.width,je.height);for(let re=0;re<6;re++){ze=Q[re].mipmaps;for(let P=0;P<ze.length;P++){const ae=ze[P];M.format!==qt?Pe!==null?Ne?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ae.width,ae.height,Pe,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ae.width,ae.height,Pe,xe,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,fe,ae.width,ae.height,0,Pe,xe,ae.data)}}}else{ze=M.mipmaps,Ne&&qe&&(ze.length>0&&it++,t.texStorage2D(r.TEXTURE_CUBE_MAP,it,fe,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(Oe){Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Q[re].width,Q[re].height,Pe,xe,Q[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,Q[re].width,Q[re].height,0,Pe,xe,Q[re].data);for(let P=0;P<ze.length;P++){const le=ze[P].image[re].image;Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,le.width,le.height,Pe,xe,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,fe,le.width,le.height,0,Pe,xe,le.data)}}else{Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,xe,Q[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,Pe,xe,Q[re]);for(let P=0;P<ze.length;P++){const ae=ze[P];Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,Pe,xe,ae.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,fe,Pe,xe,ae.image[re])}}}y(M,Ve)&&v(r.TEXTURE_CUBE_MAP),ie.__version=te.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function me(b,M,z,ne,te,ie){const ve=s.convert(z.format,z.colorSpace),he=s.convert(z.type),de=S(z.internalFormat,ve,he,z.colorSpace);if(!n.get(M).__hasExternalTextures){const Oe=Math.max(1,M.width>>ie),Q=Math.max(1,M.height>>ie);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,de,Oe,Q,M.depth,0,ve,he,null):t.texImage2D(te,ie,de,Oe,Q,0,ve,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),ge(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,te,n.get(z).__webglTexture,0,Le(M)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,te,n.get(z).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(b,M,z){if(r.bindRenderbuffer(r.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let ne=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||ge(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===fn?ne=r.DEPTH_COMPONENT32F:te.type===dn&&(ne=r.DEPTH_COMPONENT24));const ie=Le(M);ge(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,ne,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,ne,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const ne=Le(M);z&&ge(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,M.width,M.height):ge(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,b)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],ve=s.convert(ie.format,ie.colorSpace),he=s.convert(ie.type),de=S(ie.internalFormat,ve,he,ie.colorSpace),Te=Le(M);z&&ge(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,de,M.width,M.height):ge(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,de,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,de,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ne=n.get(M.depthTexture).__webglTexture,te=Le(M);if(M.depthTexture.format===Ln)ge(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(M.depthTexture.format===ui)ge(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(b){const M=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ue(M.__webglFramebuffer,b)}else if(z){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=r.createRenderbuffer(),pe(M.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),pe(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(b,M,z){const ne=n.get(b);M!==void 0&&me(ne.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ae(b)}function O(b){const M=b.texture,z=n.get(b),ne=n.get(M);b.addEventListener("dispose",I),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=M.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,ve=m(b)||a;if(te){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let de=0;de<M.mipmaps.length;de++)z.__webglFramebuffer[he][de]=r.createFramebuffer()}else z.__webglFramebuffer[he]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)z.__webglFramebuffer[he]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ie)if(i.drawBuffers){const he=b.texture;for(let de=0,Te=he.length;de<Te;de++){const Oe=n.get(he[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ge(b)===!1){const he=ie?M:[M];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const Te=he[de];z.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const Oe=s.convert(Te.format,Te.colorSpace),Q=s.convert(Te.type),je=S(Te.internalFormat,Oe,Q,Te.colorSpace,b.isXRRenderTarget===!0),Ve=Le(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,je,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,z.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),N(r.TEXTURE_CUBE_MAP,M,ve);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)me(z.__webglFramebuffer[he][de],b,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,de);else me(z.__webglFramebuffer[he],b,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(M,ve)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const he=b.texture;for(let de=0,Te=he.length;de<Te;de++){const Oe=he[de],Q=n.get(Oe);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),N(r.TEXTURE_2D,Oe,ve),me(z.__webglFramebuffer,b,Oe,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),y(Oe,ve)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),N(he,M,ve),a&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)me(z.__webglFramebuffer[de],b,M,r.COLOR_ATTACHMENT0,he,de);else me(z.__webglFramebuffer,b,M,r.COLOR_ATTACHMENT0,he,0);y(M,ve)&&v(he),t.unbindTexture()}b.depthBuffer&&Ae(b)}function wt(b){const M=m(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,te=z.length;ne<te;ne++){const ie=z[ne];if(y(ie,M)){const ve=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,he=n.get(ie).__webglTexture;t.bindTexture(ve,he),v(ve),t.unbindTexture()}}}function Se(b){if(a&&b.samples>0&&ge(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,ne=b.height;let te=r.COLOR_BUFFER_BIT;const ie=[],ve=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=n.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){ie.push(r.COLOR_ATTACHMENT0+Te),b.depthBuffer&&ie.push(ve);const Oe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Oe===!1&&(b.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[Te]),Oe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ve])),de){const Q=n.get(M[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,z,ne,0,0,z,ne,te,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,he.__webglColorRenderbuffer[Te]);const Oe=n.get(M[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,Oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Le(b){return Math.min(i.maxSamples,b.samples)}function ge(b){const M=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function tt(b){const M=o.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function Be(b,M){const z=b.colorSpace,ne=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===hr||z!==rn&&z!==zt&&(Ye.getTransfer(z)===Qe?a===!1?e.has("EXT_sRGB")===!0&&ne===qt?(b.format=hr,b.minFilter=Ot,b.generateMipmaps=!1):M=Aa.sRGBToLinear(M):(ne!==qt||te!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=Xe,this.setupRenderTarget=O,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function pp(r,e,t){const n=t.isWebGL2;function i(s,o=zt){let a;const l=Ye.getTransfer(o);if(s===gn)return r.UNSIGNED_BYTE;if(s===va)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ya)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Fl)return r.BYTE;if(s===Bl)return r.SHORT;if(s===gr)return r.UNSIGNED_SHORT;if(s===_a)return r.INT;if(s===dn)return r.UNSIGNED_INT;if(s===fn)return r.FLOAT;if(s===Ai)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ol)return r.ALPHA;if(s===qt)return r.RGBA;if(s===kl)return r.LUMINANCE;if(s===zl)return r.LUMINANCE_ALPHA;if(s===Ln)return r.DEPTH_COMPONENT;if(s===ui)return r.DEPTH_STENCIL;if(s===hr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Hl)return r.RED;if(s===xa)return r.RED_INTEGER;if(s===Gl)return r.RG;if(s===Ma)return r.RG_INTEGER;if(s===Sa)return r.RGBA_INTEGER;if(s===As||s===Cs||s===Rs||s===Ps)if(l===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hr||s===Gr||s===Vr||s===Wr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wa)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xr||s===qr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xr)return l===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qr)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jr||s===Yr||s===Kr||s===$r||s===Zr||s===Jr||s===Qr||s===eo||s===to||s===no||s===io||s===so||s===ro||s===oo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jr)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yr)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kr)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$r)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zr)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jr)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qr)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===eo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===to)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===no)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===io)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===so)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ro)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ls||s===ao||s===lo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ls)return l===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vl||s===co||s===ho||s===uo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ls)return a.COMPRESSED_RED_RGTC1_EXT;if(s===co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ho)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pn?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class mp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class We extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gp={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new We;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _p extends Nn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const y=[],v=[],S=new Me;let C=null;const T=new Nt;T.layers.enable(1),T.viewport=new et;const A=new Nt;A.layers.enable(2),A.viewport=new et;const I=[T,A],x=new mp;x.layers.enable(1),x.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let $=y[N];return $===void 0&&($=new er,y[N]=$),$.getTargetRaySpace()},this.getControllerGrip=function(N){let $=y[N];return $===void 0&&($=new er,y[N]=$),$.getGripSpace()},this.getHand=function(N){let $=y[N];return $===void 0&&($=new er,y[N]=$),$.getHandSpace()};function G(N){const $=v.indexOf(N.inputSource);if($===-1)return;const ce=y[$];ce!==void 0&&(ce.update(N.inputSource,N.frame,c||o),ce.dispatchEvent({type:N.type,data:N.inputSource}))}function q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",L);for(let N=0;N<y.length;N++){const $=v[N];$!==null&&(v[N]=null,y[N].disconnect($))}E=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,B.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",q),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new In(p.framebufferWidth,p.framebufferHeight,{format:qt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,ce=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?ui:Ln,ce=_.stencil?Pn:dn);const me={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new In(d.textureWidth,d.textureHeight,{format:qt,type:gn,depthTexture:new Oa(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const pe=e.properties.get(f);pe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),B.setContext(i),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(N){for(let $=0;$<N.removed.length;$++){const ce=N.removed[$],_e=v.indexOf(ce);_e>=0&&(v[_e]=null,y[_e].disconnect(ce))}for(let $=0;$<N.added.length;$++){const ce=N.added[$];let _e=v.indexOf(ce);if(_e===-1){for(let pe=0;pe<y.length;pe++)if(pe>=v.length){v.push(ce),_e=pe;break}else if(v[pe]===null){v[pe]=ce,_e=pe;break}if(_e===-1)break}const me=y[_e];me&&me.connect(ce)}}const U=new R,W=new R;function Y(N,$,ce){U.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const _e=U.distanceTo(W),me=$.projectionMatrix.elements,pe=ce.projectionMatrix.elements,Ue=me[14]/(me[10]-1),Ae=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],O=(me[9]-1)/me[5],wt=(me[8]-1)/me[0],Se=(pe[8]+1)/pe[0],Le=Ue*wt,ge=Ue*Se,tt=_e/(-wt+Se),Be=tt*-wt;$.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Be),N.translateZ(tt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const b=Ue+tt,M=Ae+tt,z=Le-Be,ne=ge+(_e-Be),te=Xe*Ae/M*b,ie=O*Ae/M*b;N.projectionMatrix.makePerspective(z,ne,te,ie,b,M),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function j(N,$){$===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices($.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;x.near=A.near=T.near=N.near,x.far=A.far=T.far=N.far,(E!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,F=x.far);const $=N.parent,ce=x.cameras;j(x,$);for(let _e=0;_e<ce.length;_e++)j(ce[_e],$);ce.length===2?Y(x,T,A):x.projectionMatrix.copy(T.projectionMatrix),K(N,x,$)};function K(N,$,ce){ce===null?N.matrix.copy($.matrixWorld):(N.matrix.copy(ce.matrixWorld),N.matrix.invert(),N.matrix.multiply($.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy($.projectionMatrix),N.projectionMatrixInverse.copy($.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Ci*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let Z=null;function se(N,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let _e=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,_e=!0);for(let me=0;me<ce.length;me++){const pe=ce[me];let Ue=null;if(p!==null)Ue=p.getViewport(pe);else{const Xe=u.getViewSubImage(d,pe);Ue=Xe.viewport,me===0&&(e.setRenderTargetTextures(f,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(f))}let Ae=I[me];Ae===void 0&&(Ae=new Nt,Ae.layers.enable(me),Ae.viewport=new et,I[me]=Ae),Ae.matrix.fromArray(pe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(pe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(x.matrix.copy(Ae.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_e===!0&&x.cameras.push(Ae)}}for(let ce=0;ce<y.length;ce++){const _e=v[ce],me=y[ce];_e!==null&&me!==void 0&&me.update(_e,$,c||o)}Z&&Z(N,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const B=new Fa;B.setAnimationLoop(se),this.setAnimationLoop=function(N){Z=N},this.dispose=function(){}}}function vp(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ia(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Rt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Rt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yp(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(y,C);const T=e.render.frame;s[y.id]!==T&&(d(y),s[y.id]=T)}function h(y){const v=u();y.__bindingPointIndex=v;const S=r.createBuffer(),C=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],S=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,E=I.length;x<E;x++){const F=I[x];if(p(F,T,x,C)===!0){const G=F.__offset,q=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let U=0;U<q.length;U++){const W=q[U],Y=_(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,G+L,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,v,S,C){const T=y.value,A=v+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const I=C[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){const v=y.uniforms;let S=0;const C=16;for(let A=0,I=v.length;A<I;A++){const x=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,F=x.length;E<F;E++){const G=x[E],q=Array.isArray(G.value)?G.value:[G.value];for(let L=0,U=q.length;L<U;L++){const W=q[L],Y=_(W),j=S%C;j!==0&&C-j<Y.boundary&&(S+=C-j),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=Y.storage}}}const T=S%C;return T>0&&(S+=C-T),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function f(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Wa{constructor(e={}){const{canvas:t=pc(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const v=this;let S=!1,C=0,T=0,A=null,I=-1,x=null;const E=new et,F=new et;let G=null;const q=new be(0);let L=0,U=t.width,W=t.height,Y=1,j=null,K=null;const Z=new et(0,0,U,W),se=new et(0,0,U,W);let B=!1;const N=new xr;let $=!1,ce=!1,_e=null;const me=new rt,pe=new Me,Ue=new R,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return A===null?Y:1}let O=n;function wt(w,D){for(let V=0;V<w.length;V++){const X=w[V],k=t.getContext(X,D);if(k!==null)return k}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mr}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),O===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),O=wt(D,w),O===null)throw wt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Se,Le,ge,tt,Be,b,M,z,ne,te,ie,ve,he,de,Te,Oe,Q,je,Ve,Pe,xe,fe,Ne,qe;function it(){Se=new Cd(O),Le=new Sd(O,Se,e),Se.init(Le),fe=new pp(O,Se,Le),ge=new dp(O,Se,Le),tt=new Ld(O),Be=new Jf,b=new fp(O,Se,ge,Be,Le,fe,tt),M=new Ed(v),z=new Ad(v),ne=new kc(O,Le),Ne=new xd(O,Se,ne,Le),te=new Rd(O,ne,tt,Ne),ie=new Nd(O,te,ne,tt),Ve=new Ud(O,Le,b),Oe=new wd(Be),ve=new Zf(v,M,z,Se,Le,Ne,Oe),he=new vp(v,Be),de=new ep,Te=new op(Se,Le),je=new yd(v,M,z,ge,ie,d,l),Q=new up(v,ie,Le),qe=new yp(O,tt,Le,ge),Pe=new Md(O,Se,tt,Le),xe=new Pd(O,Se,tt,Le),tt.programs=ve.programs,v.capabilities=Le,v.extensions=Se,v.properties=Be,v.renderLists=de,v.shadowMap=Q,v.state=ge,v.info=tt}it();const ze=new _p(v,O);this.xr=ze,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(U,W,!1))},this.getSize=function(w){return w.set(U,W)},this.setSize=function(w,D,V=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,W=D,t.width=Math.floor(w*Y),t.height=Math.floor(D*Y),V===!0&&(t.style.width=w+"px",t.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(U*Y,W*Y).floor()},this.setDrawingBufferSize=function(w,D,V){U=w,W=D,Y=V,t.width=Math.floor(w*V),t.height=Math.floor(D*V),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,D,V,X){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,D,V,X),ge.viewport(E.copy(Z).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,D,V,X){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,D,V,X),ge.scissor(F.copy(se).multiplyScalar(Y).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(w){ge.setScissorTest(B=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(w=!0,D=!0,V=!0){let X=0;if(w){let k=!1;if(A!==null){const ue=A.texture.format;k=ue===Sa||ue===Ma||ue===xa}if(k){const ue=A.texture.type,ye=ue===gn||ue===dn||ue===gr||ue===Pn||ue===va||ue===ya,Ee=je.getClearColor(),Re=je.getClearAlpha(),ke=Ee.r,De=Ee.g,Ie=Ee.b;ye?(p[0]=ke,p[1]=De,p[2]=Ie,p[3]=Re,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=ke,g[1]=De,g[2]=Ie,g[3]=Re,O.clearBufferiv(O.COLOR,0,g))}else X|=O.COLOR_BUFFER_BIT}D&&(X|=O.DEPTH_BUFFER_BIT),V&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),Te.dispose(),Be.dispose(),M.dispose(),z.dispose(),ie.dispose(),Ne.dispose(),qe.dispose(),ve.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Et),ze.removeEventListener("sessionend",Je),_e&&(_e.dispose(),_e=null),bt.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=tt.autoReset,D=Q.enabled,V=Q.autoUpdate,X=Q.needsUpdate,k=Q.type;it(),tt.autoReset=w,Q.enabled=D,Q.autoUpdate=V,Q.needsUpdate=X,Q.type=k}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const D=w.target;D.removeEventListener("dispose",le),Ce(D)}function Ce(w){we(w),Be.remove(w)}function we(w){const D=Be.get(w).programs;D!==void 0&&(D.forEach(function(V){ve.releaseProgram(V)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,V,X,k,ue){D===null&&(D=Ae);const ye=k.isMesh&&k.matrixWorld.determinant()<0,Ee=Ka(w,D,V,X,k);ge.setMaterial(X,ye);let Re=V.index,ke=1;if(X.wireframe===!0){if(Re=te.getWireframeAttribute(V),Re===void 0)return;ke=2}const De=V.drawRange,Ie=V.attributes.position;let ot=De.start*ke,Lt=(De.start+De.count)*ke;ue!==null&&(ot=Math.max(ot,ue.start*ke),Lt=Math.min(Lt,(ue.start+ue.count)*ke)),Re!==null?(ot=Math.max(ot,0),Lt=Math.min(Lt,Re.count)):Ie!=null&&(ot=Math.max(ot,0),Lt=Math.min(Lt,Ie.count));const dt=Lt-ot;if(dt<0||dt===1/0)return;Ne.setup(k,X,Ee,V,Re);let $t,nt=Pe;if(Re!==null&&($t=ne.get(Re),nt=xe,nt.setIndex($t)),k.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*Xe()),nt.setMode(O.LINES)):nt.setMode(O.TRIANGLES);else if(k.isLine){let He=X.linewidth;He===void 0&&(He=1),ge.setLineWidth(He*Xe()),k.isLineSegments?nt.setMode(O.LINES):k.isLineLoop?nt.setMode(O.LINE_LOOP):nt.setMode(O.LINE_STRIP)}else k.isPoints?nt.setMode(O.POINTS):k.isSprite&&nt.setMode(O.TRIANGLES);if(k.isBatchedMesh)nt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)nt.renderInstances(ot,dt,k.count);else if(V.isInstancedBufferGeometry){const He=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ss=Math.min(V.instanceCount,He);nt.renderInstances(ot,dt,Ss)}else nt.render(ot,dt)};function $e(w,D,V){w.transparent===!0&&w.side===kt&&w.forceSinglePass===!1?(w.side=Rt,w.needsUpdate=!0,Ii(w,D,V),w.side=_n,w.needsUpdate=!0,Ii(w,D,V),w.side=kt):Ii(w,D,V)}this.compile=function(w,D,V=null){V===null&&(V=w),m=Te.get(V),m.init(),y.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==V&&w.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(v._useLegacyLights);const X=new Set;return w.traverse(function(k){const ue=k.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){const Ee=ue[ye];$e(Ee,V,k),X.add(Ee)}else $e(ue,V,k),X.add(ue)}),y.pop(),m=null,X},this.compileAsync=function(w,D,V=null){const X=this.compile(w,D,V);return new Promise(k=>{function ue(){if(X.forEach(function(ye){Be.get(ye).currentProgram.isReady()&&X.delete(ye)}),X.size===0){k(w);return}setTimeout(ue,10)}Se.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ze=null;function ut(w){Ze&&Ze(w)}function Et(){bt.stop()}function Je(){bt.start()}const bt=new Fa;bt.setAnimationLoop(ut),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(w){Ze=w,ze.setAnimationLoop(w),w===null?bt.stop():bt.start()},ze.addEventListener("sessionstart",Et),ze.addEventListener("sessionend",Je),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(D),D=ze.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,A),m=Te.get(w,y.length),m.init(),y.push(m),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),N.setFromProjectionMatrix(me),ce=this.localClippingEnabled,$=Oe.init(this.clippingPlanes,ce),_=de.get(w,f.length),_.init(),f.push(_),jt(w,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,K),this.info.render.frame++,$===!0&&Oe.beginShadows();const V=m.state.shadowsArray;if(Q.render(V,w,D),$===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,w),m.setupLights(v._useLegacyLights),D.isArrayCamera){const X=D.cameras;for(let k=0,ue=X.length;k<ue;k++){const ye=X[k];Rr(_,w,ye,ye.viewport)}}else Rr(_,w,D);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,D),Ne.resetDefaultState(),I=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function jt(w,D,V,X){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||N.intersectsSprite(w)){X&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const ye=ie.update(w),Ee=w.material;Ee.visible&&_.push(w,ye,Ee,V,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||N.intersectsObject(w))){const ye=ie.update(w),Ee=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ue.copy(ye.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Ee)){const Re=ye.groups;for(let ke=0,De=Re.length;ke<De;ke++){const Ie=Re[ke],ot=Ee[Ie.materialIndex];ot&&ot.visible&&_.push(w,ye,ot,V,Ue.z,Ie)}}else Ee.visible&&_.push(w,ye,Ee,V,Ue.z,null)}}const ue=w.children;for(let ye=0,Ee=ue.length;ye<Ee;ye++)jt(ue[ye],D,V,X)}function Rr(w,D,V,X){const k=w.opaque,ue=w.transmissive,ye=w.transparent;m.setupLightsView(V),$===!0&&Oe.setGlobalState(v.clippingPlanes,V),ue.length>0&&Ya(k,ue,D,V),X&&ge.viewport(E.copy(X)),k.length>0&&Di(k,D,V),ue.length>0&&Di(ue,D,V),ye.length>0&&Di(ye,D,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ya(w,D,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ue=Le.isWebGL2;_e===null&&(_e=new In(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ai:gn,minFilter:Ti,samples:ue?4:0})),v.getDrawingBufferSize(pe),ue?_e.setSize(pe.x,pe.y):_e.setSize(fs(pe.x),fs(pe.y));const ye=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(q),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ee=v.toneMapping;v.toneMapping=mn,Di(w,V,X),b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e);let Re=!1;for(let ke=0,De=D.length;ke<De;ke++){const Ie=D[ke],ot=Ie.object,Lt=Ie.geometry,dt=Ie.material,$t=Ie.group;if(dt.side===kt&&ot.layers.test(X.layers)){const nt=dt.side;dt.side=Rt,dt.needsUpdate=!0,Pr(ot,V,X,Lt,dt,$t),dt.side=nt,dt.needsUpdate=!0,Re=!0}}Re===!0&&(b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e)),v.setRenderTarget(ye),v.setClearColor(q,L),v.toneMapping=Ee}function Di(w,D,V){const X=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ue=w.length;k<ue;k++){const ye=w[k],Ee=ye.object,Re=ye.geometry,ke=X===null?ye.material:X,De=ye.group;Ee.layers.test(V.layers)&&Pr(Ee,D,V,Re,ke,De)}}function Pr(w,D,V,X,k,ue){w.onBeforeRender(v,D,V,X,k,ue),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(v,D,V,X,w,ue),k.transparent===!0&&k.side===kt&&k.forceSinglePass===!1?(k.side=Rt,k.needsUpdate=!0,v.renderBufferDirect(V,D,X,k,w,ue),k.side=_n,k.needsUpdate=!0,v.renderBufferDirect(V,D,X,k,w,ue),k.side=kt):v.renderBufferDirect(V,D,X,k,w,ue),w.onAfterRender(v,D,V,X,k,ue)}function Ii(w,D,V){D.isScene!==!0&&(D=Ae);const X=Be.get(w),k=m.state.lights,ue=m.state.shadowsArray,ye=k.state.version,Ee=ve.getParameters(w,k.state,ue,D,V),Re=ve.getProgramCacheKey(Ee);let ke=X.programs;X.environment=w.isMeshStandardMaterial?D.environment:null,X.fog=D.fog,X.envMap=(w.isMeshStandardMaterial?z:M).get(w.envMap||X.environment),ke===void 0&&(w.addEventListener("dispose",le),ke=new Map,X.programs=ke);let De=ke.get(Re);if(De!==void 0){if(X.currentProgram===De&&X.lightsStateVersion===ye)return Dr(w,Ee),De}else Ee.uniforms=ve.getUniforms(w),w.onBuild(V,Ee,v),w.onBeforeCompile(Ee,v),De=ve.acquireProgram(Ee,Re),ke.set(Re,De),X.uniforms=Ee.uniforms;const Ie=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=Oe.uniform),Dr(w,Ee),X.needsLights=Za(w),X.lightsStateVersion=ye,X.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=De,X.uniformsList=null,De}function Lr(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=os.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Dr(w,D){const V=Be.get(w);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Ka(w,D,V,X,k){D.isScene!==!0&&(D=Ae),b.resetTextureUnits();const ue=D.fog,ye=X.isMeshStandardMaterial?D.environment:null,Ee=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rn,Re=(X.isMeshStandardMaterial?z:M).get(X.envMap||ye),ke=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,Lt=!!V.morphAttributes.color;let dt=mn;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(dt=v.toneMapping);const $t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nt=$t!==void 0?$t.length:0,He=Be.get(X),Ss=m.state.lights;if($===!0&&(ce===!0||w!==x)){const Ft=w===x&&X.id===I;Oe.setState(X,w,Ft)}let st=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ss.state.version||He.outputColorSpace!==Ee||k.isBatchedMesh&&He.batching===!1||!k.isBatchedMesh&&He.batching===!0||k.isInstancedMesh&&He.instancing===!1||!k.isInstancedMesh&&He.instancing===!0||k.isSkinnedMesh&&He.skinning===!1||!k.isSkinnedMesh&&He.skinning===!0||k.isInstancedMesh&&He.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&He.instancingColor===!1&&k.instanceColor!==null||He.envMap!==Re||X.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Oe.numPlanes||He.numIntersection!==Oe.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==De||He.morphTargets!==Ie||He.morphNormals!==ot||He.morphColors!==Lt||He.toneMapping!==dt||Le.isWebGL2===!0&&He.morphTargetsCount!==nt)&&(st=!0):(st=!0,He.__version=X.version);let xn=He.currentProgram;st===!0&&(xn=Ii(X,D,k));let Ir=!1,gi=!1,ws=!1;const vt=xn.getUniforms(),Mn=He.uniforms;if(ge.useProgram(xn.program)&&(Ir=!0,gi=!0,ws=!0),X.id!==I&&(I=X.id,gi=!0),Ir||x!==w){vt.setValue(O,"projectionMatrix",w.projectionMatrix),vt.setValue(O,"viewMatrix",w.matrixWorldInverse);const Ft=vt.map.cameraPosition;Ft!==void 0&&Ft.setValue(O,Ue.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&vt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,gi=!0,ws=!0)}if(k.isSkinnedMesh){vt.setOptional(O,k,"bindMatrix"),vt.setOptional(O,k,"bindMatrixInverse");const Ft=k.skeleton;Ft&&(Le.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),vt.setValue(O,"boneTexture",Ft.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(vt.setOptional(O,k,"batchingTexture"),vt.setValue(O,"batchingTexture",k._matricesTexture,b));const Es=V.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&Le.isWebGL2===!0)&&Ve.update(k,V,xn),(gi||He.receiveShadow!==k.receiveShadow)&&(He.receiveShadow=k.receiveShadow,vt.setValue(O,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Mn.envMap.value=Re,Mn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),gi&&(vt.setValue(O,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&$a(Mn,ws),ue&&X.fog===!0&&he.refreshFogUniforms(Mn,ue),he.refreshMaterialUniforms(Mn,X,Y,W,_e),os.upload(O,Lr(He),Mn,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(os.upload(O,Lr(He),Mn,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(O,"center",k.center),vt.setValue(O,"modelViewMatrix",k.modelViewMatrix),vt.setValue(O,"normalMatrix",k.normalMatrix),vt.setValue(O,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ft=X.uniformsGroups;for(let bs=0,Ja=Ft.length;bs<Ja;bs++)if(Le.isWebGL2){const Ur=Ft[bs];qe.update(Ur,xn),qe.bind(Ur,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function $a(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Za(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,D,V){Be.get(w.texture).__webglTexture=D,Be.get(w.depthTexture).__webglTexture=V;const X=Be.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){const V=Be.get(w);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,V=0){A=w,C=D,T=V;let X=!0,k=null,ue=!1,ye=!1;if(w){const Re=Be.get(w);Re.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(O.FRAMEBUFFER,null),X=!1):Re.__webglFramebuffer===void 0?b.setupRenderTarget(w):Re.__hasExternalTextures&&b.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const De=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[D])?k=De[D][V]:k=De[D],ue=!0):Le.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?k=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[V]:k=De,E.copy(w.viewport),F.copy(w.scissor),G=w.scissorTest}else E.copy(Z).multiplyScalar(Y).floor(),F.copy(se).multiplyScalar(Y).floor(),G=B;if(ge.bindFramebuffer(O.FRAMEBUFFER,k)&&Le.drawBuffers&&X&&ge.drawBuffers(w,k),ge.viewport(E),ge.scissor(F),ge.setScissorTest(G),ue){const Re=Be.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Re.__webglTexture,V)}else if(ye){const Re=Be.get(w.texture),ke=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,ke)}I=-1},this.readRenderTargetPixels=function(w,D,V,X,k,ue,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){ge.bindFramebuffer(O.FRAMEBUFFER,Ee);try{const Re=w.texture,ke=Re.format,De=Re.type;if(ke!==qt&&fe.convert(ke)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===Ai&&(Se.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Se.has("EXT_color_buffer_float"));if(De!==gn&&fe.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===fn&&(Le.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-X&&V>=0&&V<=w.height-k&&O.readPixels(D,V,X,k,fe.convert(ke),fe.convert(De),ue)}finally{const Re=A!==null?Be.get(A).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,D,V=0){const X=Math.pow(2,-V),k=Math.floor(D.image.width*X),ue=Math.floor(D.image.height*X);b.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,w.x,w.y,k,ue),ge.unbindTexture()},this.copyTextureToTexture=function(w,D,V,X=0){const k=D.image.width,ue=D.image.height,ye=fe.convert(V.format),Ee=fe.convert(V.type);b.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,w.x,w.y,k,ue,ye,Ee,D.image.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,ye,D.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,X,w.x,w.y,ye,Ee,D.image),X===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(w,D,V,X,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,Ee=w.max.z-w.min.z+1,Re=fe.convert(X.format),ke=fe.convert(X.type);let De;if(X.isData3DTexture)b.setTexture3D(X,0),De=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),De=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Ie=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Lt=O.getParameter(O.UNPACK_SKIP_PIXELS),dt=O.getParameter(O.UNPACK_SKIP_ROWS),$t=O.getParameter(O.UNPACK_SKIP_IMAGES),nt=V.isCompressedTexture?V.mipmaps[k]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(De,k,D.x,D.y,D.z,ue,ye,Ee,Re,ke,nt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(De,k,D.x,D.y,D.z,ue,ye,Ee,Re,nt.data)):O.texSubImage3D(De,k,D.x,D.y,D.z,ue,ye,Ee,Re,ke,nt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,dt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$t),k===0&&X.generateMipmaps&&O.generateMipmap(De),ge.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),ge.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_r?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===ys?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Dn:Ea}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dn?_t:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xp extends Wa{}xp.prototype.isWebGL1Renderer=!0;class Sr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new Sr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mp extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Li extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ta=new R,na=new R,ia=new rt,tr=new xs,ns=new Pi;class Xa extends mt{constructor(e=new ht,t=new Li){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ta.fromBufferAttribute(t,i-1),na.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ta.distanceTo(na);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(i),ns.radius+=s,e.ray.intersectsSphere(ns)===!1)return;ia.copy(i).invert(),tr.copy(e.ray).applyMatrix4(ia);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,u=new R,d=new R,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=f,S=y-1;v<S;v+=p){const C=g.getX(v),T=g.getX(v+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),tr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let v=f,S=y-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),tr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const sa=new R,ra=new R;class wr extends Xa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)sa.fromBufferAttribute(t,i),ra.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sa.distanceTo(ra);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qa extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oa=new rt,fr=new xs,is=new Pi,ss=new R;class Sp extends mt{constructor(e=new ht,t=new qa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(i),is.radius+=s,e.ray.intersectsSphere(is)===!1)return;oa.copy(i).invert(),fr.copy(e.ray).applyMatrix4(oa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);ss.fromBufferAttribute(u,m),aa(ss,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ss.fromBufferAttribute(u,g),aa(ss,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function aa(r,e,t,n,i,s,o){const a=fr.distanceSqToPoint(r);if(a<t){const l=new R;fr.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class wp extends Pt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi extends ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new R,h=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pt extends ht{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(p,2));function y(){const S=new R,C=new R;let T=0;const A=(t-e)/n;for(let I=0;I<=s;I++){const x=[],E=I/s,F=E*(t-e)+e;for(let G=0;G<=i;G++){const q=G/i,L=q*l+a,U=Math.sin(L),W=Math.cos(L);C.x=F*U,C.y=-E*n+m,C.z=F*W,u.push(C.x,C.y,C.z),S.set(U,A,W).normalize(),d.push(S.x,S.y,S.z),p.push(q,1-E),x.push(g++)}_.push(x)}for(let I=0;I<i;I++)for(let x=0;x<s;x++){const E=_[x][I],F=_[x+1][I],G=_[x+1][I+1],q=_[x][I+1];h.push(E,F,q),h.push(F,G,q),T+=6}c.addGroup(f,T,0),f+=T}function v(S){const C=g,T=new Me,A=new R;let I=0;const x=S===!0?e:t,E=S===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;const F=g;for(let G=0;G<=i;G++){const L=G/i*l+a,U=Math.cos(L),W=Math.sin(L);A.x=x*W,A.y=m*E,A.z=x*U,u.push(A.x,A.y,A.z),d.push(0,E,0),T.x=U*.5+.5,T.y=W*.5*E+.5,p.push(T.x,T.y),g++}for(let G=0;G<i;G++){const q=C+G,L=F+G;S===!0?h.push(L,L+1,q):h.push(L+1,L,q),I+=3}c.addGroup(f,I,S===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ai extends pt{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ai(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Er extends ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(s.slice(),3)),this.setAttribute("uv",new Ke(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new R,S=new R,C=new R;for(let T=0;T<t.length;T+=3)p(t[T+0],v),p(t[T+1],S),p(t[T+2],C),l(v,S,C,y)}function l(y,v,S,C){const T=C+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const x=y.clone().lerp(S,I/T),E=v.clone().lerp(S,I/T),F=T-I;for(let G=0;G<=F;G++)G===0&&I===T?A[I][G]=x:A[I][G]=x.clone().lerp(E,G/F)}for(let I=0;I<T;I++)for(let x=0;x<2*(T-I)-1;x++){const E=Math.floor(x/2);x%2===0?(d(A[I][E+1]),d(A[I+1][E]),d(A[I][E])):(d(A[I][E+1]),d(A[I+1][E+1]),d(A[I+1][E]))}}function c(y){const v=new R;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(y),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function h(){const y=new R;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const S=m(y)/2/Math.PI+.5,C=f(y)/Math.PI+.5;o.push(S,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const v=o[y+0],S=o[y+2],C=o[y+4],T=Math.max(v,S,C),A=Math.min(v,S,C);T>.9&&A<.1&&(v<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function p(y,v){const S=y*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const y=new R,v=new R,S=new R,C=new R,T=new Me,A=new Me,I=new Me;for(let x=0,E=0;x<s.length;x+=9,E+=6){y.set(s[x+0],s[x+1],s[x+2]),v.set(s[x+3],s[x+4],s[x+5]),S.set(s[x+6],s[x+7],s[x+8]),T.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),C.copy(y).add(v).add(S).divideScalar(3);const F=m(C);_(T,E+0,y,F),_(A,E+2,v,F),_(I,E+4,S,F)}}function _(y,v,S,C){C<0&&y.x===1&&(o[v]=y.x-1),S.x===0&&S.z===0&&(o[v]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.vertices,e.indices,e.radius,e.details)}}class br extends Er{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new br(e.radius,e.detail)}}class li extends ht{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let S=0;f===0&&o===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(i+T*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+T*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-v),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const v=h[f][y+1],S=h[f][y],C=h[f+1][y],T=h[f+1][y+1];(f!==0||o>0)&&p.push(v,S,T),(f!==n-1||l<Math.PI)&&p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tr extends ht{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class J extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jn extends on{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ep extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ar extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const nr=new rt,la=new R,ca=new R;class ja{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;la.setFromMatrixPosition(e.matrixWorld),t.position.copy(la),ca.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ca),t.updateMatrixWorld(),nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ha=new rt,Mi=new R,ir=new R;class bp extends ja{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Mi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mi),ir.copy(n.position),ir.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ir),n.updateMatrixWorld(),i.makeTranslation(-Mi.x,-Mi.y,-Mi.z),ha.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha)}}class Tp extends Ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ap extends ja{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cp extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Ap}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rp extends Ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ua(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ua();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ua(){return(typeof performance>"u"?Date:performance).now()}class Kt{constructor(e,t,n=0,i=1/0){this.ray=new xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return pr(e,this,n,t),n.sort(da),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)pr(e[i],this,n,t);return n.sort(da),n}}function da(r,e){return r.distance-e.distance}function pr(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)pr(i[s],e,t,!0)}}class Lp extends wr{constructor(e=10,t=10,n=4473924,i=8947848){n=new be(n),i=new be(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===s?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new ht;h.setAttribute("position",new Ke(l,3)),h.setAttribute("color",new Ke(c,3));const u=new Li({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const rs=new yn;class Dp extends wr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new ht;s.setIndex(new St(n,1)),s.setAttribute("position",new St(i,3)),super(s,new Li({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&rs.setFromObject(this.object),rs.isEmpty())return;const t=rs.min,n=rs.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ip extends wr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new ht;s.setIndex(new St(n,1)),s.setAttribute("position",new Ke(i,3)),super(s,new Li({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mr);const Up="/threejs-voxel-firecraft/dist/assets/background-music-by-suno-B4M28EgO.ogg",ms=400;class Np{constructor(e,t,n){this.scene=e,this.itemManager=t,this.objects=[],this.gameMode=n&&n.gameMode?n.gameMode:"survival",this.gameMode==="arena"?this.mapSize=150:this.mapSize=n&&n.mapSize?n.mapSize:ms,this.halfMapSize=this.mapSize/2,this.stormRadius=this.halfMapSize,this.initialStormRadius=this.stormRadius,this._heightFn=this._buildHeightFn(),this.stormEnabled=n&&n.stormEnabled!==!1;const i=n?n.stormTime:180;this.stormShrinkRate=this.stormRadius/i,this.safeZoneCenter=new R(0,0,0),this.init()}init(){this.gameMode==="arena"?this.createArenaEnvironment():this.gameMode==="matrix"?this.createMatrixEnvironment():this.gameMode==="matrix-ai"?this.createMatrixAIEnvironment():this.gameMode==="multiplayer"?this.createMultiplayerEnvironment():this.gameMode==="studio"?this.createStudioEnvironment():this.createEnvironment(),this.gameMode!=="matrix"&&this.gameMode!=="studio"&&this.stormEnabled&&this.createStormVisuals()}createEnvironment(){const e=(p=1)=>(Math.random()-.5)*(this.mapSize*p),t=(p=1)=>{const g=this.halfMapSize-5,_=e(p);return Math.max(-g,Math.min(g,_))},n=(p,g)=>this.getHeightAt?this.getHeightAt(p,g):0,i={trees:70,rocks:50,bushes:50,grass:180,houses:12,vehicles:12,plateaus:4,smallBuildings:5},s=new Ut(this.mapSize,this.mapSize,64,64),o=s.attributes.position;for(let p=0;p<o.count;p++)o.setZ(p,0);o.needsUpdate=!0;const a=s.attributes.position.count;s.setAttribute("color",new St(new Float32Array(a*3),3));const l=s.attributes.color,c=new be;for(let p=0;p<a;p++){const g=Math.random();g>.8?c.setHex(2600544):g>.4?c.setHex(3066993):c.setHex(5822093),l.setXYZ(p,c.r,c.g,c.b)}const h=new J({vertexColors:!0,roughness:.8}),u=new H(s,h);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,u.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(u),this.objects.push(u);for(let p=0;p<i.trees;p++){const g=t(.9),_=t(.9),m=n(g,_),f=Math.random()>.5?"Oak":"Pine",y=this.createTree(g,_,f);y.position.y=m,y.userData={gameId:this.generateID(),gameName:`Tree_${f}`,type:"tree"},this.scene.add(y),this.objects.push(y)}const d=[(p,g)=>this.createRock(p,g),(p,g,_)=>this.createRockPillar(p,g,_),(p,g,_)=>this.createFlatBoulder(p,g,_),(p,g,_)=>this.createCrystalShard(p,g,_),(p,g,_)=>this.createStackedRock(p,g,_),(p,g,_)=>this.createBasaltCluster(p,g,_)];for(let p=0;p<i.rocks;p++){const g=t(.9),_=t(.9),m=n(g,_),f=d[p%d.length],y=f(g,_,m);y.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(y),this.objects.push(y)}for(let p=0;p<i.bushes;p++){const g=t(.85),_=t(.85),m=n(g,_),f=this.createBush(g,_);f.position.y=m,f.userData={gameId:this.generateID(),gameName:"Bush"},this.scene.add(f),this.objects.push(f)}for(let p=0;p<i.grass;p++){const g=t(.95),_=t(.95),m=n(g,_),f=this.createGrassClump(g,_);f.position.y=m,this.scene.add(f)}for(let p=0;p<i.houses;p++){const g=t(.75),_=t(.75),m=n(g,_),f=Math.random(),y=f>.7,v=f<.25,S=y?1.55:v?.9:1,C=y?"Mansion":v?"Cabin":"House",T=y?"large":v?"small":"medium",A=this.createHouse(g,_,{scale:S});A.position.y=m,A.userData={gameId:this.generateID(),gameName:C,type:"house",size:T},this.scene.add(A),this.objects.push(A),this.itemManager.spawnLootInHouse(g,1,_)}for(let p=0;p<i.vehicles;p++){const g=t(.8),_=t(.8),m=n(g,_),f=Math.random()>.6?"truck":"car",y=this.createVehicle(g,_,f);y.position.y=m,y.userData={...y.userData||{},gameId:this.generateID(),gameName:`Vehicle_${f}`,type:"vehicle"},this.scene.add(y),this.objects.push(y)}for(let p=0;p<i.plateaus;p++){const g=t(.6),_=t(.6),m=6+Math.random()*6,f=8+Math.random()*6,y=n(g,_),v=this.createPlateau(g,_,f,m,y);v.userData={gameId:this.generateID(),gameName:"Plateau",type:"house"},this.scene.add(v),this.objects.push(v)}for(let p=0;p<i.smallBuildings;p++){const g=t(.7),_=t(.7),m=n(g,_),f=this.createSmallBuilding(g,_);f.position.y=m,f.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"},this.scene.add(f),this.objects.push(f)}}createArenaEnvironment(){const e=(o=1)=>(Math.random()-.5)*(this.mapSize*o),t=(o=1)=>{const a=this.halfMapSize-5,l=e(o);return Math.max(-a,Math.min(a,l))},n=new Ut(this.mapSize,this.mapSize,1,1),i=new Jn({color:3885915,flatShading:!0}),s=new H(n,i);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(s),this.objects.push(s);for(let o=0;o<30;o++){const a=t(.8),l=t(.8),c=1+Math.random()*3,h=1+Math.random()*2,u=1+Math.random()*2,d=new ee(h,c,u),p=new Jn({color:5596791,flatShading:!0}),g=new H(d,p);g.position.set(a,c/2,l),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=t(.7),l=t(.7),c=6+Math.random()*3,h=3+Math.random()*2,u=3,d=new ee(u,h,c),p=new Jn({color:4937059,flatShading:!0}),g=new H(d,p);g.position.set(a,h/2,l),g.rotation.x=-Math.atan(h/c),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Ramp",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=t(.6),l=t(.6),c=this.createArenaBunker(a,l);c.userData={gameId:this.generateID(),gameName:"Bunker",type:"house"},this.scene.add(c),this.objects.push(c)}for(let o=0;o<20;o++){const a=t(.8),l=t(.8),c=this.createFlatBoulder(a,l,0);c.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(c),this.objects.push(c)}this.itemManager.spawnLootInHouse(0,0,0)}createMatrixEnvironment(){const e=new Ut(this.mapSize,this.mapSize,128,128),t=e.attributes.position.count;e.setAttribute("color",new St(new Float32Array(t*3),3));const n=e.attributes.color,i=new be;for(let d=0;d<t;d++){const p=Math.random();p>.8?i.setHex(2600544):p>.4?i.setHex(3066993):i.setHex(5822093),n.setXYZ(d,i.r,i.g,i.b)}const s=new J({vertexColors:!0,roughness:.8}),o=new H(e,s);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(o),this.objects.push(o);const a=new ee(20,6,.5),l=new J({color:15987699,roughness:.9}),c=new H(a,l);c.position.set(0,3,-15),c.castShadow=!0,c.receiveShadow=!0,c.userData={gameId:this.generateID(),gameName:"Wall",type:"house"},this.scene.add(c),this.objects.push(c);const h=this.createTree(-12,-15,"Oak"),u=this.createTree(12,-15,"Pine");this.scene.add(h),this.scene.add(u),this.objects.push(h),this.objects.push(u)}createStudioEnvironment(){const e=new Ut(this.mapSize,this.mapSize,128,128),t=this.buildVoxelGroundMaterial(),n=new H(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(n),this.objects.push(n);const i=12;for(let s=0;s<i;s++){const o=(Math.random()-.5)*this.mapSize*.6,a=(Math.random()-.5)*this.mapSize*.6,l=this.createVoxelCloud(o,a);this.scene.add(l)}}createMatrixAIEnvironment(){const e=this.mapSize,t=80,n=new Lp(e,t,6737151,6737151);n.material.opacity=.2,n.material.transparent=!0,this.scene.add(n);const i=new Ut(e,e,1,1),s=new vn({visible:!1}),o=new H(i,s);o.rotation.x=-Math.PI/2,o.userData={gameId:this.generateID(),gameName:"Ground",type:"ground"},this.scene.add(o),this.objects.push(o)}createMultiplayerEnvironment(){const e=new Ut(this.mapSize,this.mapSize,128,128),t=this.buildVoxelGroundMaterial(),n=new H(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(n),this.objects.push(n),this.stormEnabled=!1}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}createTree(e,t,n){const i=new We;i.position.set(e,0,t);const s=.8+Math.random()*.4;i.scale.set(s,s,s);const o=3.5+Math.random()*1.5,a=new pt(.45,.6,o,8),l=new J({color:7028518,roughness:1}),c=new H(a,l);if(c.position.y=o/2,c.castShadow=!0,c.receiveShadow=!0,i.add(c),this.objects.push(c),Math.random()>.7){const u=new ee(.15,.15,.05),d=new J({color:5911328}),p=new H(u,d);p.position.set(.25,c.position.y+.6,.45),p.rotation.z=.4,i.add(p)}const h=new J({color:n==="Oak"?3050327:1728040,roughness:.9});if(n==="Oak"){const u=6+Math.floor(Math.random()*4);for(let d=0;d<u;d++){const p=1.2+Math.random()*1.6,g=new li(p,8,6),_=new H(g,h);_.position.y=c.position.y+.8+Math.random()*1.6,_.position.x=(Math.random()-.5)*1.5,_.position.z=(Math.random()-.5)*1.5,_.castShadow=!1,_.receiveShadow=!1,i.add(_)}}else{const u=3+Math.floor(Math.random()*3);for(let g=0;g<u;g++){const _=1.8-g*.4+Math.random()*.2,m=new ai(_,1.2+Math.random()*.6,8),f=new H(m,h);f.position.y=c.position.y+.6+g*.9,f.position.x=(Math.random()-.5)*.2,f.position.z=(Math.random()-.5)*.2,f.castShadow=!1,f.receiveShadow=!1,i.add(f)}const d=new li(.25,6,6),p=new H(d,h);p.position.y=c.position.y+u*.9+.3,p.castShadow=!1,p.receiveShadow=!1,i.add(p)}if(Math.random()>.3){const u=new Ut(.8,.8),d=new J({color:3066993,side:kt}),p=new H(u,d);p.rotation.x=-Math.PI/2,p.position.y=.01,p.position.x=(Math.random()-.5)*.5,p.position.z=(Math.random()-.5)*.5,p.receiveShadow=!1,i.add(p)}return i}createVoxelCloud(e,t){const n=new We,i=new ee(3,2,3),s=new Ep({color:15922943,transparent:!0,opacity:.9}),o=8+Math.floor(Math.random()*6);for(let a=0;a<o;a++){const l=(Math.random()-.5)*12,c=(Math.random()-.5)*12,h=(Math.random()-.5)*2,u=new H(i,s);u.position.set(l,h,c),u.castShadow=!1,u.receiveShadow=!1,n.add(u)}return n.position.set(e,30+Math.random()*8,t),n}buildVoxelGroundMaterial(){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i="#4caf50",s="#66bb6a",o="#8d6e63",a=8;for(let u=0;u<64;u+=a)for(let d=0;d<64;d+=a){const g=Math.random()>.85?o:(d/a+u/a)%2===0?i:s;n.fillStyle=g,n.fillRect(d,u,a,a)}const l=n.getImageData(0,0,64,64),c=l.data;for(let u=0;u<c.length;u+=4){const d=Math.random()*30-15;c[u]=Math.min(255,Math.max(0,c[u]+d)),c[u+1]=Math.min(255,Math.max(0,c[u+1]+d)),c[u+2]=Math.min(255,Math.max(0,c[u+2]+d))}n.putImageData(l,0,0);const h=new wp(t);return h.wrapS=h.wrapT=ls,h.repeat.set(this.mapSize/10,this.mapSize/10),h.magFilter=Mt,h.minFilter=Ul,new J({map:h,roughness:1,metalness:0})}createRock(e,t,n=0){const i=.6+Math.random()*1.4,s=new br(i,1),o=s.attributes.position;for(let c=0;c<o.count;c++){const h=o.getX(c),u=o.getY(c),d=o.getZ(c),p=(Math.random()-.5)*i*.15;o.setXYZ(c,h+p,u+p*.5,d+(Math.random()-.5)*i*.15)}s.computeVertexNormals();const a=new J({color:8359053,roughness:1}),l=new H(s,a);if(l.position.set(e,n+i/2,t),l.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),l.castShadow=!0,l.receiveShadow=!0,Math.random()>.6){const c=new H(new bi(i*.4,6),new J({color:3066993}));c.rotation.x=-Math.PI/2,c.position.y=.01,l.add(c)}return this._tagStaticCollider(l,"rock"),l}createRockPillar(e,t,n=0){const i=2.5+Math.random()*2.5,s=.4+Math.random()*.3,o=s+.5,a=new pt(s,o,i,8,1),l=new J({color:7171437,roughness:1}),c=new H(a,l);return c.position.set(e,n+i/2,t),c.castShadow=!0,c.receiveShadow=!0,this._tagStaticCollider(c,"rock"),c}createFlatBoulder(e,t,n=0){const i=2+Math.random()*2,s=.8+Math.random()*.6,o=1.5+Math.random()*1,a=new ee(i,s,o),l=new J({color:9145227,roughness:1}),c=new H(a,l);return c.position.set(e,n+s/2,t),c.rotation.y=Math.random()*Math.PI,c.castShadow=!0,c.receiveShadow=!0,this._tagStaticCollider(c,"rock"),c}createCrystalShard(e,t,n=0){const i=2+Math.random()*2,s=new ai(.6+Math.random()*.4,i,6),o=new J({color:10181046,roughness:.7,metalness:.2,emissive:4008804,emissiveIntensity:.25}),a=new H(s,o);return a.position.set(e,n+i/2,t),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,a}createStackedRock(e,t,n=0){const i=new We,s=this.createRock(0,0,0);i.add(s);const o=this.createRock(0,0);o.scale.set(.6,.6,.6),o.position.set(.3,o.position.y+.9,-.2),i.add(o);const a=this.createRock(0,0);return a.scale.set(.4,.4,.4),a.position.set(-.2,a.position.y+1.5,.3),i.add(a),i.position.set(e,n,t),i.traverse(l=>{l.castShadow=!0,l.receiveShadow=!0}),this._tagStaticCollider(i,"rock"),i}createBasaltCluster(e,t,n=0){const i=new We,s=3+Math.floor(Math.random()*4);for(let o=0;o<s;o++){const a=1+Math.random()*2,l=new pt(.35,.4,a,6),c=new J({color:4934475,roughness:.9}),h=new H(l,c);h.position.set((Math.random()-.5)*.9,a/2,(Math.random()-.5)*.9),h.castShadow=!0,h.receiveShadow=!0,i.add(h)}return i.position.set(e,n,t),this._tagStaticCollider(i,"rock"),i}createBush(e,t){const n=new We;n.position.set(e,0,t);const i=new J({color:2924588,roughness:1}),s=2+Math.floor(Math.random()*3);for(let o=0;o<s;o++){const a=1.2+Math.random()*1,l=new H(new li(a,6,6),i);l.position.set((Math.random()-.5)*1.2,a*.65,(Math.random()-.5)*1.2),l.castShadow=!0,n.add(l)}return n}createVehicle(e,t,n="car"){const i=new We;i.position.set(e,0,t),i.rotation.y=Math.random()*Math.PI*2;const s=n==="truck"?.45:.35,o=n==="truck"?.4:.3;if(i.userData=i.userData||{},i.userData={vehicleType:n,wheelRadius:s,wheelCenterY:o,groundClearance:s-o,wheels:[]},n==="car"){const a=[1668818,15921906,1118481,9116186,15022389,15844367],l=new J({color:a[Math.floor(Math.random()*a.length)],metalness:.45,roughness:.38}),c=new J({color:16119285,metalness:.2,roughness:.6}),h=new J({color:2042416,roughness:.8}),u=new H(new ee(2.2,.9,4.2),l);u.position.y=.85,u.castShadow=!0,i.add(u);const d=new H(new ee(2.25,.15,4.25),c);d.position.set(0,.9,0),i.add(d);const p=new H(new ee(1.8,.9,2.1),h);p.position.set(0,1.55,-.2),p.castShadow=!0,i.add(p);const g=new J({color:1710618,transparent:!0,opacity:.7,metalness:.2,roughness:.1}),_=new H(new ee(1.6,.6,.08),g);_.position.set(0,1.55,1),i.add(_);const m=new H(new ee(1.6,.6,.08),g);m.position.set(0,1.55,-1.5),i.add(m);const f=new H(new ee(2.1,.25,.35),h);f.position.set(0,.55,2.1),i.add(f);const y=f.clone();y.position.z=-2.1,i.add(y);const v=new J({color:855309,roughness:.9}),S=[14673130,789516,16777215];[[-.95,o,1.35],[.95,o,1.35],[-.95,o,-1.35],[.95,o,-1.35]].forEach(G=>{const q=new H(new pt(s,s,.35,14,1,!1),v);q.rotation.z=Math.PI/2,q.position.set(...G),q.castShadow=!0;const L=new H(new ee(.35,.12,.14),new J({color:273}));L.position.set(0,0,0),L.rotation.y=Math.PI/8,q.add(L);const U=new H(new pt(s*.55,s*.55,.18,12),new J({color:S[Math.floor(Math.random()*S.length)],roughness:.45,metalness:.65}));U.rotation.z=Math.PI/2,U.position.set(0,0,0),q.add(U);const W=new H(new ee(.05,s*1.2,.02),new J({color:16777215,emissive:8947848,emissiveIntensity:.6}));W.position.set(0,0,.18),q.add(W),i.add(q),i.userData.wheels.push(q)});const T=new J({color:16777130,emissive:16774557,emissiveIntensity:.8}),A=new J({color:16732754,emissive:16732754,emissiveIntensity:.6}),I=new H(new ee(.25,.2,.1),T);I.position.set(-.75,.8,2.15),i.add(I);const x=I.clone();x.position.x=.75,i.add(x);const E=new H(new ee(.25,.2,.1),A);E.position.set(-.75,.8,-2.15),i.add(E);const F=E.clone();F.position.x=.75,i.add(F)}else if(n==="truck"){const a=[1981023,15921906,1118481,9116186,15022389,15844367],l=new J({color:a[Math.floor(Math.random()*a.length)],metalness:.55,roughness:.42}),c=new J({color:16119285,roughness:.7}),h=new J({color:2042416,roughness:.8}),u=new H(new ee(2.6,1.1,5.2),l);u.position.y=1.05,u.castShadow=!0,i.add(u);const d=new H(new ee(2.65,.18,5.25),c);d.position.set(0,1.1,0),i.add(d);const p=new H(new ee(2.3,1.3,2.2),h);p.position.set(0,2.05,1.2),p.castShadow=!0,i.add(p);const g=new H(new ee(2.35,.85,2.6),new J({color:8359053}));g.position.set(0,1.55,-1.55),g.castShadow=!0,i.add(g);const _=new J({color:1710618,transparent:!0,opacity:.7}),m=new H(new ee(2,.7,.08),_);m.position.set(0,2.05,2.05),i.add(m);const f=new H(new ee(.08,.6,1.2),_);f.position.set(-1.15,2.05,1.2),i.add(f);const y=f.clone();y.position.x=1.15,i.add(y);const v=new J({color:855309}),S=[14673130,789516,16777215];[[-1.1,.4,1.8],[1.1,.4,1.8],[-1.1,.4,-1.5],[1.1,.4,-1.5],[-1.1,.4,-2.2],[1.1,.4,-2.2]].forEach(G=>{const q=new H(new pt(s,s,.45,14,1,!1),v);q.rotation.z=Math.PI/2,q.position.set(...G),q.castShadow=!0;const L=new H(new ee(.4,.14,.16),new J({color:273}));L.rotation.y=Math.PI/8,q.add(L);const U=new H(new pt(s*.55,s*.55,.2,12),new J({color:S[Math.floor(Math.random()*S.length)],roughness:.45,metalness:.65}));U.rotation.z=Math.PI/2,U.position.set(0,0,0),q.add(U);const W=new H(new ee(.06,s*1.3,.025),new J({color:16777215,emissive:8947848,emissiveIntensity:.6}));W.position.set(0,0,.2),q.add(W),i.add(q),i.userData.wheels.push(q)});const T=new J({color:16776960,emissive:16776960,emissiveIntensity:.6}),A=new J({color:16732754,emissive:16732754,emissiveIntensity:.5}),I=new H(new ee(.28,.22,.12),T);I.position.set(-.95,1.85,2.35),i.add(I);const x=I.clone();x.position.x=.95,i.add(x);const E=new H(new ee(.28,.22,.12),A);E.position.set(-.95,1.2,-2.55),i.add(E);const F=E.clone();F.position.x=.95,i.add(F)}return i}createGrassClump(e,t){const n=new We;n.position.set(e,0,t);const i=3+Math.floor(Math.random()*4);for(let s=0;s<i;s++){const o=.2+Math.random()*.6,a=new Ut(.05,o),l=new J({color:5620331,side:kt}),c=new H(a,l);c.position.y=o/2,c.rotation.y=Math.random()*Math.PI,c.rotation.z=(Math.random()-.5)*.6,c.receiveShadow=!0,n.add(c)}return n}createHouse(e,t,{scale:n=1}={}){const i=new We;i.position.set(e,0,t),i.rotation.y=Math.random()*Math.PI*2;const s=new J({color:9807270}),o=new J({color:12597547});[{w:6,h:4,d:.5,x:0,y:2,z:-3},{w:.5,h:4,d:6,x:-3,y:2,z:0},{w:.5,h:4,d:6,x:3,y:2,z:0},{w:2,h:4,d:.5,x:-2,y:2,z:3},{w:2,h:4,d:.5,x:2,y:2,z:3},{w:2,h:1,d:.5,x:0,y:3.5,z:3}].forEach(g=>{const _=new H(new ee(g.w,g.h,g.d),s);_.position.set(g.x,g.y,g.z),_.castShadow=!0,_.receiveShadow=!0,i.add(_),this.objects.push(_)});const l=new H(new ai(5,2,4),o);l.position.y=5,l.rotation.y=Math.PI/4,l.castShadow=!0,i.add(l);const c=new J({color:5057307}),h=new H(new ee(1,2.2,.1),c);h.position.set(0,1.1,3.26),i.add(h);const u=new J({color:8962303,metalness:.1,roughness:.2,transparent:!0,opacity:.8}),d=new H(new ee(1,1,.05),u);d.position.set(-2,2.2,-3.26);const p=d.clone();return p.position.set(2,2.2,-3.26),i.add(d),i.add(p),i.scale.setScalar(n),i}createPlateau(e,t,n=10,i=8,s=0){const o=new We,a=new J({color:8355711,roughness:1}),l=new H(new pt(n,n*1.05,i,16,1),a);l.position.set(0,i/2,0),l.castShadow=!0,l.receiveShadow=!0,o.add(l);const c=n*1.4,h=i,u=n*.8,d=new ee(u,h,c),p=new H(d,new J({color:9342606,roughness:1}));p.castShadow=!0,p.receiveShadow=!0;const g=Math.atan(h/c);p.rotation.x=-g,p.position.set(0,h/2,n),p.userData={type:"house"},o.add(p);const _=new ee(u,.2,c),m=new H(_,new J({color:7105644}));return m.position.set(0,h,n),m.rotation.x=p.rotation.x,m.castShadow=!0,o.add(m),o.position.set(e,s,t),o.userData={type:"house"},o}createSmallBuilding(e,t){const n=new We;n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI*2;const i=new J({color:8359053}),s=new J({color:12436423}),o=8,a=8,l=6,c=.35,h=2.2,u=o/2,d=a/2,p=new H(new ee(o,l,c),i);p.position.set(0,l/2,-d);const g=new H(new ee(c,l,a),i);g.position.set(-u,l/2,0);const _=g.clone();_.position.x=u;const m=new H(new ee((o-h)/2,l,c),i);m.position.set(-2.55,l/2,d);const f=m.clone();f.position.x=h/2+(o-h)/4,[p,g,_,m,f].forEach(x=>{x.castShadow=!0,x.receiveShadow=!0,n.add(x)});const y=new H(new ee(o-.4,.3,a-.4),s);y.position.y=.15,y.receiveShadow=!0,n.add(y);const v=new H(new ee(o-.4,.3,a-.4),s);v.position.y=3.4,v.receiveShadow=!0,n.add(v);const S=v.position.y,C=10,T=new ee(3,S,C),A=new H(T,s);A.position.set(0,S/2,d+C/2),A.rotation.x=-Math.atan(S/C),A.castShadow=!0,A.receiveShadow=!0,n.add(A);const I=new H(new ee(o+.4,.4,a+.4),new J({color:9807270}));return I.position.y=l+.2,I.castShadow=!0,n.add(I),n}spawnPrefab(e,t,n,i={}){const s=this.getHeightAt&&typeof this.getHeightAt=="function"?this.getHeightAt(t,n):0;let o=null;switch(e){case"house":{o=this.createHouse(t,n,{scale:1}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"House",type:"house"};break}case"mansion":{o=this.createHouse(t,n,{scale:1.6}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Mansion",type:"house",size:"large"};break}case"cabin":{o=this.createHouse(t,n,{scale:.85}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Cabin",type:"house",size:"small"};break}case"smallBuilding":{o=this.createSmallBuilding(t,n),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"};break}case"plateau":{const a=this.createPlateau(t,n,10+Math.random()*6,8+Math.random()*6,s);a.userData={gameId:this.generateID(),gameName:"Plateau",type:"house",size:"large"},o=a;break}case"rock":{o=this.createRock(t,n),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"};break}case"tree":{const a=i.variant||(Math.random()>.5?"Oak":"Pine");o=this.createTree(t,n,a),o.position.y=s,o.userData={gameId:this.generateID(),gameName:`Tree_${a}`,type:"tree"};break}case"vehicle":{const a=i.variant||(Math.random()>.6?"truck":"car");o=this.createVehicle(t,n,a),o.position.y=s,o.userData={gameId:this.generateID(),gameName:`Vehicle_${a}`,type:"vehicle"};break}case"crate":{const a=new H(new ee(2,2,2),new J({color:9342606,roughness:.9}));a.position.set(t,s+1,n),a.castShadow=!0,a.receiveShadow=!0,a.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},o=a;break}}return o&&(this.scene.add(o),this.objects.push(o)),o}createArenaBunker(e,t){const n=new We;n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI*2;const i=new Jn({color:4937059,flatShading:!0}),s=new Jn({color:6253691,flatShading:!0}),o=new H(new ee(6,2.5,6),i);o.position.y=1.25,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new H(new ee(6.2,.3,6.2),s);a.position.y=2.65,a.castShadow=!0,n.add(a);const l=new H(new ee(1.2,1.8,.2),new Jn({color:9280168,flatShading:!0,transparent:!0,opacity:.2}));l.position.set(0,.9,3.1),n.add(l);const c=new ee(2,1.2,4),h=new H(c,s);return h.position.set(-2.5,.6,-1),h.rotation.x=-Math.atan(1.2/4),h.castShadow=!0,h.receiveShadow=!0,h.userData={type:"house"},n.add(h),n}createStormVisuals(){if(this.gameMode==="matrix")return;const e=new pt(this.stormRadius,this.stormRadius,50,32,1,!0),t=new vn({color:9323693,transparent:!0,opacity:.3,side:kt});this.stormMesh=new H(e,t),this.stormMesh.position.y=25,this.scene.add(this.stormMesh)}createTarget(e,t){const n=new We;n.position.set(e,0,t);const i=new H(new pt(.05,.05,2,6),new J({color:8947848}));i.position.y=1,n.add(i);const s=new bi(.8,24),o=new J({color:16777215}),a=new H(s,o);a.position.set(0,2,0),a.rotation.y=Math.PI,n.add(a);const l=new J({color:16729156}),c=new J({color:15844367}),h=new J({color:3447003}),u=(p,g)=>{const _=new H(new Tr(p,.02,6,24),g);return _.rotation.x=Math.PI/2,_.position.y=2,_};n.add(u(.75,h)),n.add(u(.55,l)),n.add(u(.35,c));const d=new H(new bi(.1,12),new J({color:0}));return d.position.set(0,2.01,0),d.rotation.y=Math.PI,n.add(d),n.userData={gameId:this.generateID(),gameName:"Target",type:"house"},n}update(e,t){if(this.gameMode==="matrix"||this.gameMode==="studio"||this.gameMode==="matrix-ai")return{inStorm:!1};if(this.stormEnabled===!1)return{inStorm:!1};if(this.stormRadius>10){this.stormRadius-=this.stormShrinkRate*e;const i=this.initialStormRadius?this.stormRadius/this.initialStormRadius:1;this.stormMesh&&this.stormMesh.scale&&this.stormMesh.scale.set(i,1,i)}return{inStorm:Math.sqrt(t.x*t.x+t.z*t.z)>this.stormRadius}}_buildHeightFn(){return()=>0}_tagStaticCollider(e,t=null){if(!e)return;e.updateWorldMatrix(!0,!0);const n=new yn().setFromObject(e);e.userData=e.userData||{},t&&!e.userData.type&&(e.userData.type=t),e.userData.colliderBox=n,e.userData.colliderType="solid"}getHeightAt(e,t){return this._heightFn?this._heightFn(e,t):0}}const Fp="modulepreload",Bp=function(r){return"/threejs-voxel-firecraft/dist/"+r},fa={},Op=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Bp(l),l in fa)return;fa[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Fp,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Qn=new pi(0,0,0,"YXZ"),ei=new R,kp={type:"change"},zp={type:"lock"},Hp={type:"unlock"},pa=Math.PI/2;class Gp extends Nn{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Vp.bind(this),this._onPointerlockChange=Wp.bind(this),this._onPointerlockError=Xp.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;ei.setFromMatrixColumn(t.matrix,0),ei.crossVectors(t.up,ei),t.position.addScaledVector(ei,e)}moveRight(e){const t=this.camera;ei.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ei,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Vp(r){if(this.isLocked===!1)return;const e=r.movementX||r.mozMovementX||r.webkitMovementX||0,t=r.movementY||r.mozMovementY||r.webkitMovementY||0,n=this.camera;Qn.setFromQuaternion(n.quaternion),Qn.y-=e*.002*this.pointerSpeed,Qn.x-=t*.002*this.pointerSpeed,Qn.x=Math.max(pa-this.maxPolarAngle,Math.min(pa-this.minPolarAngle,Qn.x)),n.quaternion.setFromEuler(Qn),this.dispatchEvent(kp)}function Wp(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(zp),this.isLocked=!0):(this.dispatchEvent(Hp),this.isLocked=!1)}function Xp(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const qp="/threejs-voxel-firecraft/dist/assets/mixkit-game-gun-shot-D1lu3gfh.ogg",jp="/threejs-voxel-firecraft/dist/assets/smack-BAv2er9i.ogg",Yp="/threejs-voxel-firecraft/dist/assets/ugh-CPf3Qqe6.ogg",Kp="/threejs-voxel-firecraft/dist/assets/mixkit-footsteps-on-tall-grass-532-DkmduvPT.ogg",$p="/threejs-voxel-firecraft/dist/assets/mixkit-car-door-slam-xN3cwxzE.wav";class Zp{constructor(e,t,n,i={}){this.camera=e,this.scene=t,this.worldObjects=n,this.world=null,this.gameMode=i.gameMode||"survival",this.showTracers=i.showTracers===!0,this.backpack=null,this.backpackColor=null,this.placedBlocks=[],this.blockSize=1,this.minBlockSize=.5,this.maxBlockSize=2,this.previewBlock=null,this.isFloating=!1,this.selectedBlock=null,this.selectedBlockHelper=null,this.health=100,this.shield=100,this.isDead=!1,this.stamina=100,this.punchCount=0,this.isTired=!1,this.velocity=new R,this.direction=new R,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.canJump=!1,this.speed=42,this.jumpHeight=30,this.gravity=250,this.distanceTraveled=0,this.previousPosition=new R,this.allWeapons=[{name:"Pistol",ammo:12,maxAmmo:60,magazineSize:12,currentMag:12,damage:20,cooldown:.5,lastShot:0,reloadTime:1.5,range:50},{name:"Fist",ammo:1/0,maxAmmo:1/0,magazineSize:1/0,currentMag:1/0,damage:10,cooldown:.2,lastShot:0,reloadTime:0,range:3},{name:"Rifle",ammo:30,maxAmmo:120,magazineSize:30,currentMag:30,damage:25,cooldown:.15,lastShot:0,reloadTime:2,range:120,zoomFov:30},{name:"Sniper",ammo:5,maxAmmo:20,magazineSize:5,currentMag:5,damage:100,cooldown:2,lastShot:0,reloadTime:3,range:400,zoomFov:12},{name:"SMG",ammo:40,maxAmmo:200,magazineSize:40,currentMag:40,damage:15,cooldown:.08,lastShot:0,reloadTime:1.8,range:80},{name:"Shotgun",ammo:6,maxAmmo:24,magazineSize:6,currentMag:6,damage:60,cooldown:1,lastShot:0,reloadTime:2.5,range:25},{name:"DMR",ammo:12,maxAmmo:48,magazineSize:12,currentMag:12,damage:45,cooldown:.35,lastShot:0,reloadTime:2.2,range:200,zoomFov:18}],this.weapons=[this.allWeapons[1],this.allWeapons[0]],this.currentWeaponIndex=0,this.isReloading=!1,this.controls=new Gp(e,document.body),document.addEventListener("pointerlockerror",s=>{try{s.stopImmediatePropagation()}catch{}console.warn("Pointer lock request failed or unavailable in this environment.")},!0),this.allowTouchMovement=!1,this._touchYaw=0,this._touchPitch=0,document.addEventListener("fullscreenchange",()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}),this.createPlayerMesh(),this.cameraMode=i.cameraMode||"TPS",this.fpsCameraOffset=new R(0,1.6,0),this.tpsCameraOffset=new R(1,1.8,3.4),this.initControls(),this.sfxVolume=.7,this.sfxVolume=.7,this.gunshotBuffer=null,this.reloadBuffer=null,this.smackBuffer=null,this.ughBuffer=null,this.footstepsBuffer=null,this._footstepsSource=null,this._footstepsGain=null,this.vehicleDoorBuffer=null,this.vehicleDriveBuffer=null,this._vehicleDriveSource=null,this._vehicleDriveGain=null,this._lastVehicleDriveActive=!1,this.enableVehicleDriveSound=!1,this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer=null,this._lastFootstepsActive=!1,this.isCrouching=!1,this.crouchHeight=.8,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.vehicleBaseMaxSpeed=70,this.vehicleBoostMax=45,this.vehicleAccel=70,this.vehicleTurnSpeed=1.8,this.vehicleFriction=2.8,this.vehicleAccelHold=0,this.vehiclePromptEl=document.getElementById("interaction-prompt"),this.nearVehicle=null,this.vehicleFuel=0,this.vehicleFuelCapacity=0,this.vehicleDistance=0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=0,this.vehicleEfficiencyKmPerL=10,this.vehicleIdleLph=.4,this.vehicleThrottleLph=.8,this._vehicleStateCache=null,this.vehicleTurbo=!1,this.currentSpeed=0,this.vehicleHud={root:document.getElementById("vehicle-hud"),speed:document.getElementById("vehicle-speed"),fuelBar:document.getElementById("vehicle-fuel-bar"),fuelFill:document.getElementById("vehicle-fuel-fill"),fuelText:document.getElementById("vehicle-fuel-text"),distance:document.getElementById("vehicle-distance"),efficiency:document.getElementById("vehicle-efficiency"),range:document.getElementById("vehicle-range")},this.studioSelected=null,this._studioRaycaster=new Kt,this.studioSelectionHelper=null,this.selectionInfo=document.getElementById("selection-info"),this.controls.enabled=this.gameMode!=="studio";try{const s=window.AudioContext||window.webkitAudioContext;s&&(this.audioCtx=new s,fetch(qp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.gunshotBuffer=o}).catch(o=>console.warn("Error loading gunshot SFX:",o)),Op(()=>import("./mixkit-shotgun-recharge-CcrH8C2K.js"),[]).then(o=>fetch(o.default)).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.reloadBuffer=o}).catch(o=>console.warn("Error loading reload SFX:",o)),fetch(jp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.smackBuffer=o}).catch(o=>console.warn("Error loading smack SFX:",o)),fetch(Yp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.ughBuffer=o}).catch(o=>console.warn("Error loading hurt SFX:",o)),fetch(Kp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.footstepsBuffer=o}).catch(o=>console.warn("Error loading footsteps SFX:",o)),fetch($p).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.vehicleDoorBuffer=o}).catch(o=>console.warn("Error loading vehicle door SFX:",o)))}catch(s){console.warn("Web Audio API not supported:",s)}}placeBlock(){if(!this.world)return;const e=this.getBlockTarget(),t=e.size,n=new ee(t,t,t),i=new J({color:11887901,roughness:.9}),s=new H(n,i);s.position.copy(e.position),s.castShadow=!0,s.receiveShadow=!0,s.userData={type:"block",size:t,gameId:this.world.generateID?this.world.generateID():void 0,gameName:"Block"},this.scene.add(s),this.world.objects&&this.world.objects.push(s),this.placedBlocks.push(s)}createPlayerMesh(){this.mesh=new We,this.scene.add(this.mesh);const e=new J({color:3447003}),t=new J({color:16764074}),n=new J({color:2899536});this.head=new H(new ee(.5,.5,.5),t),this.head.position.y=1.75,this.mesh.add(this.head);const i=new J({color:15158332}),s=new H(new ee(.52,.1,.52),i);s.position.set(0,.3,0),this.head.add(s);const o=new H(new ee(.52,.02,.35),i);o.position.set(0,.22,.35),this.head.add(o);const a=new J({color:0}),l=new J({color:1710618,transparent:!0,opacity:.7,metalness:.8,roughness:.2}),c=new H(new ee(.18,.12,.02),l);c.position.set(-.12,.05,.26),this.head.add(c);const h=new H(new ee(.18,.12,.02),l);h.position.set(.12,.05,.26),this.head.add(h);const u=new H(new ee(.08,.02,.02),a);u.position.set(0,.05,.26),this.head.add(u);const d=new H(new ee(.02,.02,.3),a);d.position.set(-.21,.05,.1),this.head.add(d);const p=new H(new ee(.02,.02,.3),a);p.position.set(.21,.05,.1),this.head.add(p);const g=new H(new ee(.6,.8,.3),e);g.position.y=1.1,this.mesh.add(g);const _=new ee(.2,.8,.2);_.translate(0,-.3,0),this.leftArmPivot=new We,this.leftArmPivot.name="leftArmPivot",this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot);const m=new H(_,t);this.leftArmPivot.add(m),this.rightArmPivot=new We,this.rightArmPivot.name="rightArmPivot",this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot);const f=new H(_,t);this.rightArmPivot.add(f),this.weaponModels={};const y=new We,v=new H(new ee(.12,.12,.35),new J({color:1710618,metalness:.8,roughness:.3}));v.position.set(0,-.28,.2);const S=new H(new ee(.06,.06,.15),new J({color:657930,metalness:.9,roughness:.2}));S.position.set(0,-.28,.4);const C=new H(new ee(.1,.25,.12),new J({color:2894892}));C.position.set(0,-.42,.15);const T=new H(new ee(.03,.05,.03),new J({color:1710618}));T.position.set(0,-.35,.18),y.add(v,S,C,T),this.rightArmPivot.add(y),this.weaponModels.Pistol=y;const A=new We,I=new H(new ee(.08,.08,.9),new J({color:1710618,metalness:.8,roughness:.3}));I.position.set(0,-.28,.45);const x=new H(new ee(.12,.14,.4),new J({color:2894892}));x.position.set(0,-.3,.2);const E=new H(new ee(.1,.22,.12),new J({color:2894892}));E.position.set(0,-.44,.15);const F=new H(new ee(.1,.12,.25),new J({color:3815994}));F.position.set(0,-.28,-.1);const G=new H(new ee(.08,.25,.1),new J({color:1710618}));G.position.set(0,-.5,.2),A.add(I,x,E,F,G),this.rightArmPivot.add(A),this.weaponModels.Rifle=A;const q=new We,L=new H(new ee(.08,.08,1.3),new J({color:1727514,metalness:.6,roughness:.4}));L.position.set(0,-.28,.65);const U=new H(new ee(.14,.16,.5),new J({color:2969622}));U.position.set(0,-.3,.25);const W=new H(new pt(.06,.06,.35,8),new J({color:657930,metalness:.9,roughness:.1}));W.rotation.z=Math.PI/2,W.position.set(0,-.18,.4);const Y=new H(new pt(.05,.05,.02,8),new J({color:1723791,metalness:.9,roughness:.1,emissive:663616}));Y.rotation.z=Math.PI/2,Y.position.set(0,-.18,.58);const j=new H(new ee(.12,.14,.3),new J({color:3811866}));j.position.set(0,-.28,-.05);const K=new H(new ee(.02,.15,.02),new J({color:1710618}));K.position.set(0,-.42,.5),q.add(L,U,W,Y,j,K),this.rightArmPivot.add(q),this.weaponModels.Sniper=q,Object.values(this.weaponModels).forEach(pe=>pe.visible=!1);const Z=A.clone();Z.traverse(pe=>{pe.material&&pe.material.color&&pe.material.color.setHex(5598095)}),Z.scale.set(.8,.8,.8),this.rightArmPivot.add(Z),this.weaponModels.SMG=Z;const se=A.clone();se.traverse(pe=>{pe.material&&pe.material.color&&pe.material.color.setHex(9132587)}),se.scale.set(1.1,1,.8),this.rightArmPivot.add(se),this.weaponModels.Shotgun=se;const B=A.clone();B.traverse(pe=>{pe.material&&pe.material.color&&pe.material.color.setHex(3050327)}),B.scale.set(.95,.95,1),this.rightArmPivot.add(B),this.weaponModels.DMR=B;const N=new ee(this.blockSize,this.blockSize,this.blockSize),$=new J({color:3066993,transparent:!0,opacity:.35,wireframe:!0});this.previewBlock=new H(N,$),this.previewBlock.visible=this.gameMode==="studio",this.previewBlock.castShadow=!1,this.previewBlock.receiveShadow=!1,this.scene.add(this.previewBlock);const ce=new ee(.25,.8,.25);ce.translate(0,-.4,0),this.leftLegPivot=new We,this.leftLegPivot.name="leftLegPivot",this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot);const _e=new H(ce,n);this.leftLegPivot.add(_e),this.rightLegPivot=new We,this.rightLegPivot.name="rightLegPivot",this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot);const me=new H(ce,n);if(this.rightLegPivot.add(me),this.isAiming=!1,this.baseFov=75,this.aimFov=20,this.hitTimer=0,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.isPunching=!1,this.punchSide=0,this.isBlocking=!1,this.yaw=0,this.pitch=0,this.camera){const pe=new pi().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=pe.y,this.pitch=pe.x}}rotateCamera(e,t){if(!this.controls||!this.controls.isLocked){this.yaw-=e,this.pitch-=t;const n=Math.PI/2-.01;this.pitch=Math.max(-n,Math.min(n,this.pitch)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}initControls(){const e=s=>{if(this.gameMode==="studio"&&this.studioSelected)switch(s.code){case"ArrowUp":s.shiftKey?this.moveSelectedObject(0,0,1.5):this.moveSelectedObject(0,-2),s.preventDefault();return;case"ArrowDown":s.shiftKey?this.moveSelectedObject(0,0,-1.5):this.moveSelectedObject(0,2),s.preventDefault();return;case"ArrowLeft":this.moveSelectedObject(-2,0),s.preventDefault();return;case"ArrowRight":this.moveSelectedObject(2,0),s.preventDefault();return;case"KeyX":this.removeSelectedObject(),s.preventDefault();return}switch(s.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"Digit1":this.switchWeapon(0);break;case"Digit2":this.switchWeapon(1);break;case"Digit3":this.switchWeapon(2);break;case"Digit4":this.switchWeapon(3);break;case"Digit5":this.switchWeapon(4);break;case"Digit6":this.switchWeapon(5);break;case"Numpad1":this.switchWeapon(0);break;case"Numpad2":this.switchWeapon(1);break;case"Numpad3":this.switchWeapon(2);break;case"Numpad4":this.switchWeapon(3);break;case"Numpad5":this.switchWeapon(4);break;case"Numpad6":this.switchWeapon(5);break;case"KeyB":this.gameMode==="studio"&&this.placeBlock();break;case"KeyU":if(this.gameMode==="studio"&&(this.isFloating=!this.isFloating,!this.isFloating)){const o=this.getSurfaceHeight(this.position.x,this.position.z);this.mesh.position.y=o,this.velocity.y=0}break;case"Minus":this.gameMode==="studio"&&this.adjustBlockSize(-.1);break;case"Equal":this.gameMode==="studio"&&this.adjustBlockSize(.1);break;case"KeyM":this.gameMode==="studio"&&this.moveLastBlock();break;case"KeyX":this.gameMode==="studio"&&(this.studioSelected?this.removeSelectedObject():this.selectedBlock?this.removeBlock(this.selectedBlock):this.removeLastBlock());break;case"KeyR":this.reload();break;case"KeyC":this.isCrouching=!this.isCrouching,this.isCrouching&&(this.isSprinting=!1);break;case"ShiftLeft":case"ShiftRight":this.isCrouching||(this.isSprinting=!0);break;case"Space":!this.isInVehicle&&this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"KeyN":this.isInVehicle&&(this.vehicleTurbo=!0);break;case"KeyV":this.toggleCameraMode();break;case"KeyE":if(this.isInVehicle){this.exitVehicle();return}else{const o=this.findNearbyVehicle();if(o){this.enterVehicle(o);return}}break}},t=s=>{switch(s.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break;case"Space":break;case"KeyN":this.vehicleTurbo=!1;break}},n=s=>{this.gameMode==="studio"&&(this.selectStudioObject(s)||this.selectBlockUnderCrosshair())||this.controls.isLocked&&(s.button===0?this.shoot():s.button===2&&(this.isAiming=!0))},i=s=>{s.button===2&&(this.isAiming=!1)};document.addEventListener("keydown",e),document.addEventListener("keyup",t),document.addEventListener("mousedown",n),document.addEventListener("mouseup",i),document.addEventListener("contextmenu",s=>s.preventDefault())}lockControls(){if(!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)){console.warn("Pointer Lock API not available in this environment.");return}const t=document.getElementById("main-menu");if(!(t&&t.style.display!=="none")&&!this.isPaused)try{const n=this.controls.lock();n&&typeof n.catch=="function"&&n.catch(()=>{})}catch(n){console.warn("Unable to lock pointer:",n)}}toggleCameraMode(){this.cameraMode=this.cameraMode==="FPS"?"TPS":"FPS",this.mesh&&(this.mesh.visible=this.cameraMode==="TPS"),console.log(`Camera mode: ${this.cameraMode}`)}switchWeapon(e){if(e>=0&&e<this.weapons.length){if(this.isReloading)return;this.currentWeaponIndex=e;const t=this.weapons[e].name;Object.values(this.weaponModels).forEach(n=>n.visible=!1),this.weaponModels[t]&&(this.weaponModels[t].visible=!0)}}reload(){if(this.isReloading)return;const e=this.weapons[this.currentWeaponIndex];e.ammo!==1/0&&e.currentMag!==e.magazineSize&&(e.ammo<=0||(this.isReloading=!0,console.log("Reloading..."),this.playReloadSound(),setTimeout(()=>{this.finishReload()},e.reloadTime*1e3)))}playReloadSound(){try{if(this.audioCtx&&this.reloadBuffer){this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.createBufferSource();e.buffer=this.reloadBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume*.8,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}catch(e){console.warn("Error playing reload sound:",e)}}finishReload(){if(!this.isReloading)return;const e=this.weapons[this.currentWeaponIndex],t=e.magazineSize-e.currentMag,n=e.ammo,i=Math.min(t,n);e.currentMag+=i,e.ammo-=i,this.isReloading=!1,console.log("Reloaded!")}startBlocking(){this.weapons[this.currentWeaponIndex].name==="Fist"&&(this.isBlocking=!0)}stopBlocking(){this.isBlocking=!1}collectItem(e){if(e==="ShieldPotion"){this.shield=Math.min(100,this.shield+50);return}if(e&&e.startsWith("Backpack:")){const n=e.split(":")[1]||"2c3e50";return this.equipBackpack(parseInt(n,16))}const t=this.weapons.find(n=>n.name===e);if(t)t.ammo=Math.min(t.maxAmmo,t.ammo+t.magazineSize),console.log("Added ammo for "+e);else{const n=this.allWeapons.find(i=>i.name===e);n&&(this.weapons.push(n),console.log("Picked up "+e))}}setEnemyManager(e){this.enemyManager=e}setMultiplayerClient(e){this.multiplayerClient=e}shoot(){var l;if(!(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0)||this.isDead||this.isReloading||this.isBlocking)return;const t=this.weapons[this.currentWeaponIndex],n=performance.now()/1e3;if(n-t.lastShot<t.cooldown)return;if(t.currentMag<=0){this.reload();return}if(t.lastShot=n,t.ammo!==1/0&&t.currentMag--,t.name==="Fist"){this.punch();return}this.createMuzzleFlash();try{if(this.audioCtx&&this.gunshotBuffer&&this.audioCtx.state==="running"){const c=this.audioCtx.createBufferSource();c.buffer=this.gunshotBuffer,t.name==="Pistol"?c.playbackRate.value=1:t.name==="Rifle"?c.playbackRate.value=1.15:t.name==="Sniper"?c.playbackRate.value=.9:c.playbackRate.value=1;const h=this.audioCtx.createGain();h.gain.value=this.sfxVolume,c.connect(h),h.connect(this.audioCtx.destination),c.start(0)}else this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}catch{}const i=new Kt;i.setFromCamera(new Me(0,0),this.camera);const s=this.camera.position.clone();new R,i.ray.direction.clone().normalize();let o=s.clone().add(i.ray.direction.clone().multiplyScalar(1e3)),a=!1;if(this.worldObjects&&this.worldObjects.length>0){const c=i.intersectObjects(this.worldObjects,!0);c.length>0&&(o=c[0].point.clone(),a=!0)}if(this.enemyManager&&this.enemyManager.enemies){const c=i.intersectObjects(this.enemyManager.enemies.map(h=>h.mesh),!0);if(c.length>0){const h=c[0].point,u=s.distanceTo(h),d=s.distanceTo(o);if(u<d){const p=c[0].object;o=h.clone(),a=!0;let g=null;if(g=(m=>{let f=m;for(;f;){const y=this.enemyManager.enemies.find(v=>v.mesh===f);if(y)return y;f=f.parent}return null})(p),g){const m=s.distanceTo(g.position),f=t.range||1e3;m<=f?g.takeDamage(t.damage):a=!1}}}}if(this.multiplayerClient&&this.multiplayerClient.others&&this.multiplayerClient.others.size>0){const c=Array.from(this.multiplayerClient.others.values()),h=i.intersectObjects(c,!0);if(h.length>0){const u=h[0].point,d=s.distanceTo(u),p=s.distanceTo(o);if(d<p){o=u.clone(),a=!0;let g=h[0].object;for(;g&&!((l=g.userData)!=null&&l.gameId)&&g.parent;)g=g.parent;const _=g&&g.userData?g.userData.gameId:null;_&&this.multiplayerClient&&typeof this.multiplayerClient.sendHit=="function"&&this.multiplayerClient.sendHit(_,t.damage)}}}this.showTracers&&this.createBulletTracer(s,o,a),a&&t.name==="Sniper"&&this.createImpactSmoke(o)}createMuzzleFlash(){const e=new Tp(16776960,1,5),t=new R;this.camera.getWorldDirection(t),e.position.copy(this.mesh.position),e.position.y+=1.5,e.position.add(t.multiplyScalar(1)),this.scene.add(e),setTimeout(()=>this.scene.remove(e),100)}createBulletTracer(e,t,n){const i=[e,t],s=new ht().setFromPoints(i),o=n?16729156:16776960,a=new Li({color:o,linewidth:2,opacity:.8,transparent:!0}),l=new Xa(s,a);this.scene.add(l);let c=.8;const h=setInterval(()=>{c-=.1,a.opacity=c,c<=0&&(clearInterval(h),this.scene.remove(l),s.dispose(),a.dispose())},30)}createImpactSmoke(e){const t=new We;t.position.copy(e);const n=8;for(let a=0;a<n;a++){const l=.15+Math.random()*.2,c=new li(l,6,6),h=new vn({color:6710886,transparent:!0,opacity:.5}),u=new H(c,h);u.position.set((Math.random()-.5)*.4,(Math.random()-.5)*.2,(Math.random()-.5)*.4),t.add(u)}this.scene.add(t);const i=600,s=performance.now(),o=()=>{const a=performance.now()-s,l=Math.max(0,1-a/i);t.children.forEach(c=>{c.material&&(c.material.opacity=l*.5)}),a<i?requestAnimationFrame(o):(t.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),this.scene.remove(t))};o()}update(e){if(this.isDead)return;if(this.updateVehiclePrompt(),this.isInVehicle){this.updateVehicleDrive(e);return}if(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0){this.velocity.x-=this.velocity.x*10*e,this.velocity.z-=this.velocity.z*10*e,this.isFloating?this.velocity.y*=.9:this.velocity.y-=this.gravity*e,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*this.speed*e),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*this.speed*e);const n=new R;this.camera.getWorldDirection(n),n.y=0,n.normalize();const i=new R;i.crossVectors(n,new R(0,1,0));const s=new R;this.moveForward&&s.add(n),this.moveBackward&&s.sub(n),this.moveRight&&s.add(i),this.moveLeft&&s.sub(i),s.normalize();const o=s.length()>0;let a=1;this.isSprinting&&!this.isCrouching&&o&&this.stamina>0&&(a=2);const l=this.speed*e*.1*a,c=s.multiplyScalar(l);c.x!==0&&(this.checkCollision(new R(Math.sign(c.x),0,0),Math.abs(c.x))||(this.mesh.position.x+=c.x)),c.z!==0&&(this.checkCollision(new R(0,0,Math.sign(c.z)),Math.abs(c.z))||(this.mesh.position.z+=c.z));let h=0;if(this.isFloating){const f=new R;this.camera.getWorldDirection(f);const y=f.y;this.moveForward&&(h+=y*this.speed*e*.3),this.moveBackward&&(h-=y*this.speed*e*.3)}if(this.mesh.position.y+=this.velocity.y*e+h,s.length()>0){const f=Math.atan2(s.x,s.z);this.mesh.rotation.y=f}if(this.mesh.position.y+=this.velocity.y*e,!this.isFloating&&!this.isFloating){this.mesh.position.y<0&&(this.velocity.y=0,this.mesh.position.y=0,this.canJump=!0);const f=this.getSurfaceHeight(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<f&&(this.mesh.position.y=f,this.velocity.y=0,this.canJump=!0)}const u=!this.isFloating&&(this.canJump||this.mesh.position.y<=.01);if(this.handleFootsteps(o&&u&&!this.isDead),this.gameMode==="studio"?this.updateBlockPreview():this.previewBlock&&(this.previewBlock.visible=!1),this.world&&typeof this.world.halfMapSize=="number"){const f=this.world.halfMapSize-1;this.mesh.position.x=Math.max(-f,Math.min(f,this.mesh.position.x)),this.mesh.position.z=Math.max(-f,Math.min(f,this.mesh.position.z))}if(this.previousPosition.length()>0){const f=this.mesh.position.distanceTo(this.previousPosition);this.distanceTraveled+=f,e>0&&(this.currentSpeed=f/e)}if(this.previousPosition.copy(this.mesh.position),this.isSprinting&&!this.isCrouching&&o&&this.stamina>0){if(this.gameMode!=="studio"){const f=20*e;this.stamina=Math.max(0,this.stamina-f),this.stamina<=0&&(this.isSprinting=!1)}}else if(this.gameMode!=="studio"){const f=10*e;this.stamina=Math.min(100,this.stamina+f)}this.gameMode==="studio"&&(this.stamina=100),this.camera.position.copy(this.mesh.position);const d=this.isCrouching?1.6*this.crouchHeight:1.6;this.camera.position.y+=d;const p=this.isCrouching?this.crouchHeight:1;this.mesh.scale.y+=(p-this.mesh.scale.y)*10*e;let g=this.baseFov;const _=this.weapons[this.currentWeaponIndex];this.isAiming&&_&&_.zoomFov&&(g=_.zoomFov),Math.abs(this.camera.fov-g)>.1&&(this.camera.fov+=(g-this.camera.fov)*10*e,this.camera.updateProjectionMatrix());let m;this.cameraMode==="FPS"?m=this.fpsCameraOffset.clone():(m=this.tpsCameraOffset.clone(),m.applyQuaternion(this.camera.quaternion)),m.add(this.mesh.position),this.camera.position.copy(m),this.updateAnimations(e)}}findNearbyVehicle(){if(!this.worldObjects)return null;let e=null,t=4;return this.worldObjects.forEach(n=>{if(!n||!n.userData||n.userData.type!=="vehicle")return;const i=n.position.distanceTo(this.mesh.position);i<t&&(e=n,t=i)}),e}updateVehiclePrompt(){const e=this.vehiclePromptEl;if(!e)return;if(this.isInVehicle){e.innerText="Press E to exit vehicle",e.dataset.vehiclePrompt="1",e.classList.remove("hidden");return}const t=this.findNearbyVehicle();this.nearVehicle=t,t?(e.innerText="Press E to drive vehicle",e.dataset.vehiclePrompt="1",e.classList.remove("hidden")):e.dataset.vehiclePrompt==="1"&&(e.classList.add("hidden"),delete e.dataset.vehiclePrompt)}enterVehicle(e){if(!e||this.isInVehicle)return!1;e.userData||(e.userData={}),e.userData.hasFrontAligned||(e.rotation.y+=Math.PI,e.userData.hasFrontAligned=!0);const t=this.loadVehicleState(e);this.isInVehicle=!0,this.vehicleAccelHold=0,this.isSprinting=!1,this.vehicleTurbo=!1,this.currentVehicle=e,this.vehicleSpeed=0,this.currentSpeed=0;const n=e.userData&&e.userData.vehicleType||"car";return this.vehicleFuelCapacity=t?t.capacity:n==="truck"?60:40,this.vehicleFuel=t?t.fuel:this.vehicleFuelCapacity,this.vehicleDistance=t?t.distanceKm:0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=t?t.fuelUsed:0,this.vehicleEfficiencyKmPerL=n==="truck"?3.5:5.5,this.vehicleIdleLph=n==="truck"?1:.7,this.vehicleThrottleLph=n==="truck"?2.8:1.9,this._vehicleMaxSpeed=n==="truck"?80/3.6:null,this._vehicleTurboMaxSpeed=n==="truck"?100/3.6:null,this._vehicleStateCache=t||null,this.previousPosition.copy(e.position),this.stopFootsteps(),this.stopVehicleDriveSound(),this.playVehicleDoor(),this.mesh.visible=!1,this.velocity.set(0,0,0),this.mesh.position.copy(e.position),this.updateVehicleHUD(!0),!0}exitVehicle(){if(!this.currentVehicle){this.isInVehicle=!1;return}const e=this.currentVehicle;if(this.playVehicleDoor(),this.stopVehicleDriveSound(),this.stopFootsteps(),this.world&&typeof this.world.getHeightAt=="function"){const s=this.world.getHeightAt(e.position.x,e.position.z),o=this.getVehicleGroundClearance(e);e.position.y=s+o}const t=new R(-1.5,0,-2).applyEuler(e.rotation),n=e.position.clone().add(t);this.mesh.position.copy(n);const i=typeof this.getSurfaceHeight=="function"?this.getSurfaceHeight(n.x,n.z):this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(n.x,n.z):n.y;this.mesh.position.y=i,this.velocity.set(0,0,0),this.mesh.visible=!0,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.canJump=!0,this.previousPosition.copy(this.mesh.position),this.saveVehicleState(e),this.updateVehicleHUD(!1),this.vehiclePromptEl&&this.vehiclePromptEl.dataset.vehiclePrompt==="1"&&(this.vehiclePromptEl.classList.add("hidden"),delete this.vehiclePromptEl.dataset.vehiclePrompt)}getVehicleGroundClearance(e){if(!e)return .05;const t=e.userData||{};return typeof t.groundClearance=="number"?t.groundClearance:typeof t.wheelRadius=="number"&&typeof t.wheelCenterY=="number"?Math.max(0,t.wheelRadius-t.wheelCenterY):.05}updateVehicleDrive(e){const t=this.currentVehicle;if(!t){this.isInVehicle=!1;return}this.stopFootsteps();const n=t.position.clone();if(this.vehicleFuel<=0){this.vehicleSpeed=0,this.mesh.position.copy(t.position),this.previousPosition.copy(t.position),this.currentSpeed=0,this.updateVehicleHUD(!0);return}let i=0;this.moveForward&&(i+=1),this.moveBackward&&(i-=1),this.vehicleSpeed+=i*this.vehicleAccel*e,this.moveForward&&i>0?this.vehicleAccelHold=Math.min(1,this.vehicleAccelHold+e*.8):this.vehicleAccelHold=Math.max(0,this.vehicleAccelHold-e*.6);const s=this.vehicleTurbo&&i>0,o=s?vType==="truck"?1.25:1.6:1,a=s?vType==="truck"?1.15:1.35:1,l=(this.vehicleBaseMaxSpeed+this.vehicleBoostMax*this.vehicleAccelHold)*o,c=this.vehicleBaseMaxSpeed*.5;this.vehicleSpeed=Math.min(l,Math.max(-c,this.vehicleSpeed)),this.vehicleSpeed+=i*this.vehicleAccel*e*(a-1),this.vehicleSpeed*=Math.max(0,1-this.vehicleFriction*e),this._vehicleMaxSpeed&&!s?this.vehicleSpeed=Math.min(this._vehicleMaxSpeed,this.vehicleSpeed):this._vehicleTurboMaxSpeed&&s&&(this.vehicleSpeed=Math.min(this._vehicleTurboMaxSpeed,this.vehicleSpeed)),this.currentSpeed=Math.abs(this.vehicleSpeed);const h=i>0,u=this.vehicleSpeed>=0?1:-1;this.moveLeft&&(t.rotation.y+=this.vehicleTurnSpeed*e*u),this.moveRight&&(t.rotation.y-=this.vehicleTurnSpeed*e*u);const d=new R(0,0,1).applyEuler(t.rotation),p=t.position.clone().addScaledVector(d,this.vehicleSpeed*e);if(this.checkVehicleCollision(p,t)?this.vehicleSpeed*=.2:t.position.copy(p),this.world&&typeof this.world.getHeightAt=="function"){const S=this.world.getHeightAt(t.position.x,t.position.z),C=this.getVehicleGroundClearance(t);t.position.y=S+C}if(this.world&&typeof this.world.halfMapSize=="number"){const S=this.world.halfMapSize-1;t.position.x=Math.max(-S,Math.min(S,t.position.x)),t.position.z=Math.max(-S,Math.min(S,t.position.z))}if(this.previousPosition.length()>0){const S=t.position.distanceTo(this.previousPosition);this.distanceTraveled+=S}this.mesh.position.copy(t.position),this.previousPosition.copy(t.position);const g=t.position.distanceTo(n);this.rotateVehicleWheels(t,g,this.vehicleSpeed);let _=0;if(_+=this.vehicleIdleLph/3600*e,h&&(_+=this.vehicleThrottleLph/3600*e*(s?1.7:1)),g>0){const S=g/1e3;this.vehicleDistance+=S;const C=S/this.vehicleEfficiencyKmPerL,T=h?C*.35*(s?1.35:1):0;_+=C+T}if(this.vehicleFuelUsed+=_,this.vehicleFuel=Math.max(0,this.vehicleFuel-_),this.vehicleFuel<=0&&(this.vehicleSpeed=0),this.saveVehicleState(t),this.updateVehicleHUD(!0),this.enemyManager&&Array.isArray(this.enemyManager.enemies)){const S=performance.now();this.enemyManager.enemies.forEach(C=>{if(!C||!C.position)return;if(C.position.distanceTo(t.position)<2.4){C.userData||(C.userData={});const A=C.userData.lastRunOver||0;if(S-A>400){C.userData.lastRunOver=S;try{C.takeDamage(999)}catch{}}}})}const m=t.position.clone(),f=new R(0,2,6).applyQuaternion(this.camera.quaternion),y=m.clone().add(f);this.camera.position.lerp(y,.18);const v=Math.abs(this.vehicleSpeed)>.5;this.handleVehicleDriveSound(v)}rotateVehicleWheels(e,t,n){if(!e||!e.userData||!e.userData.wheels||!e.userData.wheels.length)return;const i=e.userData.wheelRadius||.35,s=t/i,o=n>=0?-1:1;e.userData.wheels.forEach(a=>{try{a.rotation.x+=o*s}catch{}})}updateVehicleHUD(e){if(!this.vehicleHud||!this.vehicleHud.root)return;const t=this.vehicleHud.root,n=document.getElementById("dashboard");if(n){const s=n.getBoundingClientRect();t.style.left=`${s.left}px`,t.style.top=`${s.top+s.height+8}px`,t.style.width=`${s.width}px`}if(!e){t.classList.add("hidden");return}t.classList.remove("hidden");const i=Math.abs(this.vehicleSpeed)*3.6;if(this.vehicleHud.speed&&(this.vehicleHud.speed.innerText=i.toFixed(0)),this.vehicleHud.fuelFill){const s=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/s*100));this.vehicleHud.fuelFill.style.width=`${o}%`,this.vehicleHud.fuelFill.style.background=o<20?"linear-gradient(90deg, #ff7043, #ff3d00)":"linear-gradient(90deg, #8bc34a, #cddc39)"}if(this.vehicleHud.fuelText){const s=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/s*100));this.vehicleHud.fuelText.innerText=`${this.vehicleFuel.toFixed(1)}L (${o.toFixed(1)}%)`}if(this.vehicleHud.distance&&(this.vehicleHud.distance.innerText=this.vehicleDistance.toFixed(2)),this.vehicleHud.efficiency){const s=this.vehicleFuelUsed>0&&this.vehicleDistance>0?this.vehicleDistance/this.vehicleFuelUsed:0;this.vehicleHud.efficiency.innerText=s.toFixed(2)}if(this.vehicleHud.range){const s=this.vehicleFuel*this.vehicleEfficiencyKmPerL;this.vehicleHud.range.innerText=s.toFixed(1)}}getVehicleStorageKey(e){return!e||!e.userData||!e.userData.gameId?null:`vehicle-state-${e.userData.gameId}`}loadVehicleState(e){try{if(e&&e.userData&&e.userData.vehicleState)return e.userData.vehicleState;const t=this.getVehicleStorageKey(e);if(!t||typeof localStorage>"u")return null;const n=localStorage.getItem(t);if(!n)return null;const i=JSON.parse(n);return e.userData.vehicleState=i,i}catch{return null}}saveVehicleState(e){if(!e)return;const t=this.getVehicleStorageKey(e);if(!t)return;const n={fuel:this.vehicleFuel,capacity:this.vehicleFuelCapacity,distanceKm:this.vehicleDistance,fuelUsed:this.vehicleFuelUsed,vehicleType:e.userData&&e.userData.vehicleType||"car"};e.userData.vehicleState=n;try{typeof localStorage<"u"&&localStorage.setItem(t,JSON.stringify(n))}catch{}}selectStudioObject(e){if(this.gameMode!=="studio"||!this.worldObjects||this.worldObjects.length===0)return null;const t=new Me;this.controls&&this.controls.isLocked?t.set(0,0):e&&e.clientX!==void 0?(t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1):t.set(0,0),this._studioRaycaster.setFromCamera(t,this.camera);const n=this.worldObjects.filter(o=>o&&o.userData&&o.userData.gameName!=="Ground"),i=this._studioRaycaster.intersectObjects(n,!0);if(!i.length)return this.clearStudioSelection(),null;let s=i[0].object;for(;s&&!this.worldObjects.includes(s);)s=s.parent;return s&&this.setStudioSelection(s),s}moveSelectedObject(e,t,n=0){if(!this.studioSelected)return;const i=this.studioSelected;i.position.x+=e,i.position.z+=t,i.position.y+=n,n===0&&this.world&&typeof this.world.getHeightAt=="function"&&(i.position.y=this.world.getHeightAt(i.position.x,i.position.z)),this.refreshStudioSelectionHelper()}clearStudioSelection(){if(this.studioSelected=null,this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}this.selectionInfo&&this.selectionInfo.classList.add("hidden")}removeSelectedObject(){if(!this.studioSelected)return;const e=this.studioSelected;this.clearStudioSelection();try{this.scene.remove(e)}catch{}if(this.worldObjects){const t=this.worldObjects.indexOf(e);t>=0&&this.worldObjects.splice(t,1)}}setStudioSelection(e){if(this.studioSelected=e,this.selectionInfo){const t=e.userData||{};this.selectionInfo.innerText=`${t.gameName||"Object"} (${t.gameId||"---"})`,this.selectionInfo.classList.remove("hidden")}this.refreshStudioSelectionHelper()}refreshStudioSelectionHelper(){if(this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}if(this.studioSelected)try{const e=this.buildStudioSelectionBox(this.studioSelected);this.studioSelectionHelper=new Ip(e,16766720),this.studioSelectionHelper.material.depthTest=!1,this.studioSelectionHelper.material.transparent=!0,this.studioSelectionHelper.material.opacity=.9,this.scene.add(this.studioSelectionHelper)}catch{this.studioSelectionHelper=null}}buildStudioSelectionBox(e){const t=new yn;return e.traverse(n=>{if(!n.isMesh||!n.geometry)return;const i=n.userData||{},s=n.material;if(!(s&&s.transparent||i.isShadow||i.shadow)){if(!n.geometry.boundingBox)try{n.geometry.computeBoundingBox()}catch{}if(n.geometry.boundingBox){const a=n.geometry.boundingBox.clone();n.updateWorldMatrix(!0,!1),a.applyMatrix4(n.matrixWorld),t.union(a)}}}),t.isEmpty()&&t.setFromCenterAndSize(e.position,new R(1,1,1)),t}checkVehicleCollision(e,t=null){if(!this.worldObjects)return!1;const n=2;for(let i=0;i<this.worldObjects.length;i++){const s=this.worldObjects[i];if(!s)continue;const o=s.userData||{};if(t&&s===t||o.gameName==="Ground"||o.type==="ground")continue;const a=s.position||(s.getWorldPosition?s.getWorldPosition(new R):null);if(!a)continue;const l=a.distanceTo(e);let c=1.5;if(s.geometry&&s.geometry.boundingSphere?c=s.geometry.boundingSphere.radius||c:o&&o.size==="large"?c=5:o.type==="vehicle"&&(c=2.5),l<n+c)return!0}return!1}updateAnimations(e){const t=this.moveForward||this.moveBackward||this.moveLeft||this.moveRight,n=10,i=this.isSprinting&&t?1.8:1;if(t){this.animTime+=e*n*i;const s=Math.sin(this.animTime)*(.5*i);this.leftLegPivot.rotation.x=s,this.rightLegPivot.rotation.x=-s}else this.leftLegPivot.rotation.x=gt.lerp(this.leftLegPivot.rotation.x,0,e*n),this.rightLegPivot.rotation.x=gt.lerp(this.rightLegPivot.rotation.x,0,e*n);if(this.isBlocking){const s=-Math.PI/2.5,o=.5;this.leftArmPivot.rotation.x=gt.lerp(this.leftArmPivot.rotation.x,s,e*15),this.rightArmPivot.rotation.x=gt.lerp(this.rightArmPivot.rotation.x,s,e*15),this.leftArmPivot.rotation.z=gt.lerp(this.leftArmPivot.rotation.z,-o,e*15),this.rightArmPivot.rotation.z=gt.lerp(this.rightArmPivot.rotation.z,o,e*15)}else if(this.isPunching){this.punchTime+=e*20;const s=-Math.PI/2+Math.sin(this.punchTime)*.8;this.punchSide===0?(this.rightArmPivot.rotation.x=s,this.leftArmPivot.rotation.x=gt.lerp(this.leftArmPivot.rotation.x,0,e*10)):(this.leftArmPivot.rotation.x=s,this.rightArmPivot.rotation.x=gt.lerp(this.rightArmPivot.rotation.x,0,e*10)),this.punchTime>Math.PI&&(this.isPunching=!1,this.rightArmPivot.rotation.x=0,this.leftArmPivot.rotation.x=0),this.leftArmPivot.rotation.z=gt.lerp(this.leftArmPivot.rotation.z,0,e*10),this.rightArmPivot.rotation.z=gt.lerp(this.rightArmPivot.rotation.z,0,e*10)}else{if(t){const s=Math.sin(this.animTime)*.5*i;this.leftArmPivot.rotation.x=-s,this.rightArmPivot.rotation.x=s}else this.leftArmPivot.rotation.x=gt.lerp(this.leftArmPivot.rotation.x,0,e*10),this.rightArmPivot.rotation.x=gt.lerp(this.rightArmPivot.rotation.x,0,e*10);this.leftArmPivot.rotation.z=gt.lerp(this.leftArmPivot.rotation.z,0,e*10),this.rightArmPivot.rotation.z=gt.lerp(this.rightArmPivot.rotation.z,0,e*10)}if(this.hitTimer>0){this.hitTimer-=e;const s=Math.max(0,this.hitTimer)/.6,o=gt.lerp(-Math.PI/2.2,0,1-s);this.leftArmPivot.rotation.x=gt.lerp(this.leftArmPivot.rotation.x,o,e*20),this.rightArmPivot.rotation.x=gt.lerp(this.rightArmPivot.rotation.x,o,e*20)}}punch(){if(!this.isTired&&!(this.isPunching||this.isBlocking)&&(this.isPunching=!0,this.punchTime=0,this.punchSide=this.punchSide===0?1:0,this.punchCount++,this.punchCount>=20&&(this.isTired=!0,this.stamina=Math.max(0,this.stamina-20),setTimeout(()=>{this.isTired=!1,this.punchCount=0},3e3)),this.enemyManager&&this.enemyManager.enemies)){const e=new R;this.mesh.getWorldDirection(e);let t=!1;this.enemyManager.enemies.forEach(n=>{if(this.mesh.position.distanceTo(n.position)<3){const s=new R().subVectors(n.position,this.mesh.position).normalize();if(e.angleTo(s)<Math.PI/3){n.takeDamage(10);const a=e.clone().multiplyScalar(2);n.position.add(a),t=!0}}}),t&&this.playSmack()}}playSmack(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playSmack());return}if(this.smackBuffer){const e=this.audioCtx.createBufferSource();e.buffer=this.smackBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}}catch(e){console.warn("playSmack error:",e)}}equipBackpack(e=2899536){const t=this.backpackColor;this.backpack&&this.backpack.parent&&this.backpack.parent.remove(this.backpack);const n=new We;n.position.set(0,1.25,-.32);const i=new H(new ee(.7,.9,.35),new J({color:e,metalness:.15,roughness:.8}));i.position.set(0,0,0),n.add(i);const s=new H(new ee(.6,.25,.16),new J({color:3426654,metalness:.1,roughness:.8}));s.position.set(0,-.55,.22),n.add(s);const o=new J({color:2042938,metalness:.1,roughness:.9}),a=new H(new ee(.1,.82,.07),o);a.position.set(-.28,-.03,.2);const l=a.clone();return l.position.x=.28,n.add(a,l),this.mesh.add(n),this.backpack=n,this.backpackColor=e,t}queueHurtBeat(){if(this._hurtAccumulator+=1,this._hurtAccumulator>=2){const e=Math.floor(this._hurtAccumulator/2);this._hurtQueue+=e,this._hurtAccumulator-=e*2}this._hurtQueue===0&&this._hurtAccumulator>0&&(this._hurtQueue=1,this._hurtAccumulator=0),this._hurtBeatTimer||this._playHurtBeatLoop()}_playHurtBeatLoop(){if(this._hurtQueue<=0){this._hurtBeatTimer=null;return}this.playHurt(),this._hurtQueue=Math.max(0,this._hurtQueue-1),this._hurtBeatTimer=setTimeout(()=>this._playHurtBeatLoop(),2e3)}clearHurtQueue(){this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer&&(clearTimeout(this._hurtBeatTimer),this._hurtBeatTimer=null)}playHurt(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playHurt());return}if(this.ughBuffer){const e=this.audioCtx.createBufferSource();e.buffer=this.ughBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}}catch(e){console.warn("playHurt error:",e)}}playVehicleDoor(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playVehicleDoor());return}if(this.vehicleDoorBuffer){const e=this.audioCtx.createBufferSource();e.buffer=this.vehicleDoorBuffer;const t=this.audioCtx.createGain();t.gain.value=this.sfxVolume,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}}}catch(e){console.warn("playVehicleDoor error:",e)}}handleVehicleDriveSound(e){try{if(!this.audioCtx||!this.enableVehicleDriveSound){this.stopVehicleDriveSound();return}if(!this.vehicleDriveBuffer){this.stopVehicleDriveSound();return}if(e===this._lastVehicleDriveActive&&(e&&this._vehicleDriveSource||!e&&!this._vehicleDriveSource))return;if(this._lastVehicleDriveActive=e,e){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._vehicleDriveSource)return;const t=this.audioCtx.createBufferSource();t.buffer=this.vehicleDriveBuffer,t.loop=!0;const n=this.audioCtx.createGain();n.gain.value=this.sfxVolume*.4,t.connect(n),n.connect(this.audioCtx.destination),t.start(0),this._vehicleDriveSource=t,this._vehicleDriveGain=n,t.onended=()=>{this._vehicleDriveSource=null,this._vehicleDriveGain=null}}else this.stopVehicleDriveSound()}catch(t){console.warn("handleVehicleDriveSound error:",t)}}stopVehicleDriveSound(){if(this._lastVehicleDriveActive=!1,this._vehicleDriveSource){try{this._vehicleDriveSource.stop()}catch{}try{this._vehicleDriveSource.disconnect()}catch{}}if(this._vehicleDriveGain)try{this._vehicleDriveGain.disconnect()}catch{}this._vehicleDriveSource=null,this._vehicleDriveGain=null}handleFootsteps(e){try{if(this.isInVehicle){this.stopFootsteps();return}if(!this.audioCtx||!this.footstepsBuffer){this.stopFootsteps();return}if(e===this._lastFootstepsActive&&(e&&this._footstepsSource||!e&&!this._footstepsSource)){if(e&&this._footstepsSource){const t=this.isSprinting?1.4:this.isCrouching?.8:1;this._footstepsSource.playbackRate.value=t}return}if(this._lastFootstepsActive=e,e){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._footstepsSource){try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}const t=this.audioCtx.createBufferSource();t.buffer=this.footstepsBuffer,t.loop=!0,t.playbackRate.value=this.isSprinting?1.4:this.isCrouching?.8:1;const n=this.audioCtx.createGain();n.gain.value=this.sfxVolume*.35,t.connect(n),n.connect(this.audioCtx.destination),t.start(0),this._footstepsSource=t,this._footstepsGain=n,t.onended=()=>{this._footstepsSource=null,this._footstepsGain=null}}else this.stopFootsteps()}catch(t){console.warn("handleFootsteps error:",t)}}stopFootsteps(){if(this._lastFootstepsActive=!1,this._footstepsSource){try{this._footstepsSource.onended=null}catch{}try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}get position(){return this.mesh.position}getSurfaceHeight(e,t){let n=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(e,t):0;return(this.world&&this.world.objects?this.world.objects:[]).forEach(s=>{if(!(!s||!s.userData)){if(s.userData.type==="block"){const o=s.userData.size||this.blockSize;if(Math.abs(s.position.x-e)<o*.6&&Math.abs(s.position.z-t)<o*.6){const a=s.position.y+o/2;a>n&&(n=a)}}if(s.userData.colliderBox){const o=s.userData.colliderBox;e>=o.min.x&&e<=o.max.x&&t>=o.min.z&&t<=o.max.z&&o.max.y>n&&(n=o.max.y)}}}),n}adjustBlockSize(e){const t=Math.max(this.minBlockSize,Math.min(this.maxBlockSize,this.blockSize+e));this.blockSize=t,console.log("Block size:",this.blockSize.toFixed(2))}moveLastBlock(){if(!this.placedBlocks.length)return;const e=this.placedBlocks[this.placedBlocks.length-1];if(!e)return;const t=this.getBlockTarget(e);e.position.set(t.position.x,t.position.y,t.position.z)}getBlockTarget(e=null){const t=e&&e.userData&&e.userData.size?e.userData.size:this.blockSize,n=new Kt;n.setFromCamera(new Me(0,0),this.camera);const i=u=>Math.round(u);let s=null;if(this.world&&Array.isArray(this.world.objects)){const u=this.world.objects.filter(p=>p&&p.userData&&(p.userData.type==="block"||p.userData.gameName==="Ground")),d=n.intersectObjects(u,!0);d.length>0&&(s=d[0].point.clone())}if(!s){const u=new R;this.camera.getWorldDirection(u),s=this.mesh.position.clone().add(u.multiplyScalar(1.2))}const o=new R(i(s.x),s.y,i(s.z));if(this.world&&typeof this.world.halfMapSize=="number"){const u=this.world.halfMapSize-1;o.x=Math.max(-u,Math.min(u,o.x)),o.z=Math.max(-u,Math.min(u,o.z))}let a=this.world.getHeightAt?this.world.getHeightAt(o.x,o.z):s.y;const c=(this.world.objects||[]).filter(u=>u.userData&&u.userData.type==="block"&&u!==e).filter(u=>Math.abs(u.position.x-o.x)<.1&&Math.abs(u.position.z-o.z)<.1);c.length>0&&(a=Math.max(...c.map(d=>d.position.y+(d.userData&&d.userData.size?d.userData.size/2:t/2))));const h=a+t/2;return{position:new R(o.x,h,o.z),size:t}}updateBlockPreview(){if(!this.previewBlock)return;const e=this.getBlockTarget();this.previewBlock.visible=!0,this.previewBlock.position.copy(e.position);const t=e.size/this.blockSize;this.previewBlock.scale.set(t,t,t)}removeLastBlock(){if(!this.placedBlocks.length)return;const e=this.placedBlocks.pop();e&&e.parent&&e.parent.remove(e),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(t=>t!==e)),e&&e.geometry&&e.geometry.dispose(),e&&e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),this.selectedBlock===e&&this.clearBlockSelection()}selectBlockUnderCrosshair(){if(!this.world||!this.world.objects)return!1;const e=new Kt;e.setFromCamera(new Me(0,0),this.camera);const t=e.intersectObjects(this.world.objects,!0);if(t.length===0)return this.clearBlockSelection(),!1;let n=null;for(const i of t){let s=i.object;for(;s&&s.parent;){if(s.userData&&s.userData.type==="block"){n=s;break}s=s.parent}if(n)break}return n?(this.setBlockSelection(n),!0):(this.clearBlockSelection(),!1)}setBlockSelection(e){this.clearBlockSelection(),this.selectedBlock=e;const t=new Dp(e,16776960);t.userData={ignoreSelect:!0},this.scene.add(t),this.selectedBlockHelper=t}clearBlockSelection(){this.selectedBlock=null,this.selectedBlockHelper&&(this.scene.remove(this.selectedBlockHelper),this.selectedBlockHelper.material&&this.selectedBlockHelper.material.dispose(),this.selectedBlockHelper.geometry&&this.selectedBlockHelper.geometry.dispose(),this.selectedBlockHelper=null)}removeBlock(e){e&&(this.placedBlocks=this.placedBlocks.filter(t=>t!==e),e.parent&&e.parent.remove(e),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(t=>t!==e)),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),this.selectedBlock===e&&this.clearBlockSelection())}takeDamage(e){this.gameMode==="matrix"||this.gameMode==="studio"||(this.isBlocking&&(e*=.2,console.log("Blocked! Reduced damage to "+e)),this.shield>0?(this.shield-=e,this.shield<0&&(this.health+=this.shield,this.shield=0)):this.health-=e,e>0&&this.queueHurtBeat(),this.health<=0&&(this.health=0,this.die()),this.hitTimer=.6)}die(){this.gameMode==="matrix"||this.gameMode==="studio"||(this.handleFootsteps(!1),this.isDead=!0,this.controls.unlock(),this.mesh.rotation.x=-Math.PI/2)}checkCollision(e,t){const n=new Kt,i=.5,s=[1.6,1,.35];let o=this.worldObjects||[];if(this.enemyManager&&this.enemyManager.enemies){const c=this.enemyManager.enemies.map(h=>h.mesh);o=o.concat(c)}const a=1.5,l=c=>{let h=c;for(;h;){if(h.userData&&h.userData.colliderBox)return h.userData.colliderBox;h=h.parent}return null};for(const c of s){const h=this.mesh.position.clone();if(h.y+=c,n.set(h,e),o.length>0){const u=n.intersectObjects(o,!0);if(u.length>0){const d=u[0];if(d.distance<t+i){const p=l(d.object);if(p){const g=p.max.y,_=g-this.mesh.position.y;if(_<=a&&_>-.5)return this.mesh.position.y=g,this.velocity.y=0,this.canJump=!0,!1}return!0}}}}return!1}}const Jp="/threejs-voxel-firecraft/dist/assets/mixkit-player-losing-or-failing-vCPqUTFf.ogg",Qp="/threejs-voxel-firecraft/dist/assets/game-level-completed-envato-mixkit.co-OEgWp6-U.ogg";class em{constructor(e,t,n){this.player=e,this.world=t,this.settings=n||{},this.healthBar=document.getElementById("health-bar"),this.healthText=document.getElementById("health-text"),this.shieldBar=document.getElementById("shield-bar"),this.shieldText=document.getElementById("shield-text"),this.staminaBar=document.getElementById("stamina-bar"),this.staminaText=document.getElementById("stamina-text"),this.weaponName=document.getElementById("weapon-name"),this.ammoCount=document.getElementById("ammo-count"),this.slots=document.querySelectorAll(".slot"),this.timerValue=document.getElementById("timer-value"),this.debugContainer=document.getElementById("debug-container"),this.gameOverScreen=document.getElementById("game-over-screen"),this.selectionInfo=document.getElementById("selection-info"),this.selectionInfoTimeout=null,this.fpsCounter=document.getElementById("fps-counter"),this.enemyCount=document.getElementById("enemy-count"),this.killCount=document.getElementById("kill-count"),this.dropCount=document.getElementById("drop-count"),this.distanceTraveled=document.getElementById("distance-traveled"),this.playerSpeed=document.getElementById("player-speed"),this.memoryUsage=document.getElementById("memory-usage"),this.targetInspect=document.getElementById("target-inspect"),this.perfFrame=document.getElementById("perf-frame"),this.perfCalls=document.getElementById("perf-calls"),this.perfTris=document.getElementById("perf-tris"),this.perfGeoms=document.getElementById("perf-geoms"),this.perfTextures=document.getElementById("perf-textures"),this.perfPrograms=document.getElementById("perf-programs"),this.perfObjects=document.getElementById("perf-objects"),this.perfMem=document.getElementById("perf-mem"),this.perfCpu=document.getElementById("perf-cpu"),this.perfGpu=document.getElementById("perf-gpu"),this._renderer=null,this.debugInfo=document.getElementById("debug-info"),this.debugName=document.getElementById("debug-target-name"),this.debugId=document.getElementById("debug-target-id"),this.settings.debugMode?this.debugInfo.style.display="block":this.debugInfo.style.display="none",this.timeRemaining=30,this.lastTime=performance.now(),this.frames=0,this.fps=0,this.lastFpsTime=performance.now(),this.lastFrameTime=performance.now(),this.raycaster=new Kt,this.mouse=new Me,this.hoveredEnemy=null,this.hoveredPlayer=null,this.currentOutlinedEnemy=null,this.hoverInfo=document.getElementById("hover-info"),this.scopeOverlay=document.getElementById("scope-overlay"),this.minimapContainer=document.getElementById("minimap"),this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas?this.minimapCanvas.getContext("2d"):null,this.minimapSize=this.minimapCanvas?this.minimapCanvas.width:180,this.mapSize=t&&t.mapSize?t.mapSize:200,this.multiplayer=null,window.addEventListener("mousemove",i=>{const s=i.clientX/window.innerWidth*2-1,o=-(i.clientY/window.innerHeight)*2+1;if(this.mouse.set(s,o),this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const a=[];this.player.enemyManager.enemies.forEach(c=>{c.mesh.traverse(h=>{h.isMesh&&a.push(h)})}),this.raycaster.setFromCamera(this.mouse,this.player.camera);const l=this.raycaster.intersectObjects(a,!0);if(l.length>0){const c=l[0].object;let h=c,u=null;for(;h&&(u=this.player.enemyManager.enemies.find(d=>h.parent===d.mesh||h===d.mesh||d.mesh.children.includes(h)),!u);)h=h.parent;this.hoveredEnemy=u||c||null}else this.hoveredEnemy=null}});try{this.slots.forEach((i,s)=>{const o=a=>{try{a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),this.player&&typeof this.player.switchWeapon=="function"&&this.player.switchWeapon(s)}catch{}};i.addEventListener("pointerdown",o),i.addEventListener("touchstart",o,{passive:!1}),i.addEventListener("click",o)})}catch{}}update(){var l,c;if(this.hoveredEnemy=null,this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0&&this.currentOutlinedEnemy!==this.hoveredEnemy){if(this.currentOutlinedEnemy&&this.currentOutlinedEnemy._outline){try{this.currentOutlinedEnemy.mesh.remove(this.currentOutlinedEnemy._outline)}catch{}this.currentOutlinedEnemy._outline=null}if(this.hoveredEnemy&&this.hoveredEnemy.mesh){const h=new We;this.hoveredEnemy.mesh.traverse(u=>{if(u.isMesh){const d=new H(u.geometry,new vn({color:16776960,side:Rt}));d.position.copy(u.position),d.quaternion.copy(u.quaternion),d.scale.copy(u.scale).multiplyScalar(1.06),d.renderOrder=999,d.material.depthTest=!0,h.add(d)}}),this.hoveredEnemy.mesh.add(h),this.hoveredEnemy._outline=h}this.currentOutlinedEnemy=this.hoveredEnemy}this.frames++;const e=performance.now();e-this.lastFpsTime>=1e3&&(this.fpsCounter.innerText=this.frames,this.frames=0,this.lastFpsTime=e,performance.memory&&this.memoryUsage&&(this.memoryUsage.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)));const t=e-this.lastFrameTime;if(this.lastFrameTime=e,this.player.enemyManager&&(this.enemyCount.innerText=this.player.enemyManager.enemies.length,this.killCount.innerText=this.player.enemyManager.killedCount||0),this.dropCount){const h=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;if(h&&Array.isArray(h.items)){const u=h.items.filter(d=>!(d.userData&&d.userData.isOpened)).length;this.dropCount.innerText=u}else this.dropCount.innerText="0"}const n=(this.player.distanceTraveled/1e3).toFixed(2);if(this.distanceTraveled&&(this.distanceTraveled.innerText=n),this.playerSpeed){let h=0;this.player.isInVehicle&&typeof this.player.currentSpeed=="number"?h=this.player.currentSpeed*3.6:typeof this.player.currentSpeed=="number"&&(h=this.player.currentSpeed*3.6),this.playerSpeed.innerText=h.toFixed(1)}if(this._renderer){const h=this._renderer.info;this.perfFrame&&(this.perfFrame.innerText=t.toFixed(1)),this.perfCalls&&(this.perfCalls.innerText=h.render.calls),this.perfTris&&(this.perfTris.innerText=h.render.triangles),this.perfGeoms&&(this.perfGeoms.innerText=h.memory.geometries),this.perfTextures&&(this.perfTextures.innerText=h.memory.textures),this.perfPrograms&&(this.perfPrograms.innerText=h.programs?h.programs.length:"0");let u=0;this.world&&Array.isArray(this.world.objects)&&(u+=this.world.objects.length);const d=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;d&&Array.isArray(d.items)&&(u+=d.items.length),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&(u+=this.player.enemyManager.enemies.length),this.perfObjects&&(this.perfObjects.innerText=u),this.perfMem&&performance.memory&&(this.perfMem.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)),this.perfCpu&&(this.perfCpu.innerText="N/A"),this.perfGpu&&(this.perfGpu.innerText="N/A")}this.healthBar.style.width=`${this.player.health}%`,this.healthText.innerText=Math.ceil(this.player.health),this.shieldBar.style.width=`${this.player.shield}%`,this.shieldText.innerText=Math.ceil(this.player.shield),this.staminaBar.style.width=`${this.player.stamina}%`,this.staminaText.innerText=Math.ceil(this.player.stamina);const i=this.player.weapons[this.player.currentWeaponIndex];if(this.weaponName.innerText=i.name,this.player.isReloading?this.ammoCount.innerText="RELOADING...":this.ammoCount.innerText=i.ammo===1/0?"∞":`${i.currentMag} / ${i.ammo}`,this.debugContainer&&(this.debugContainer.innerHTML=""),this.debugInfo)if(this.settings.debugMode)if(this.debugInfo.style.display="block",this.hoveredEnemy){const h=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,u=h&&h.userData&&h.userData.gameName?h.userData.gameName:"Enemy",d=h&&h.userData&&(h.userData.gameId||h.userData.gameid)?h.userData.gameId||h.userData.gameid:"---",p=this.hoveredEnemy.position?this.hoveredEnemy.position:h?h.position:null,g=p?this.player.position.distanceTo(p).toFixed(2):"---";this.debugName.innerText=u,this.debugId.innerText=`${d} (${g}m)`}else this.debugName.innerText="None",this.debugId.innerText="---";else this.debugInfo.style.display="none";let s=null;if(this.hoveredPlayer=null,!this.hoveredEnemy&&this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const h=[];if(this.player.enemyManager.enemies.forEach(u=>{u.mesh.traverse(d=>{d.isMesh&&h.push(d)})}),h.length>0){this.raycaster.setFromCamera(new Me(0,0),this.player.camera);const u=this.raycaster.intersectObjects(h,!0);if(u.length>0){let p=u[0].object,g=null;for(;p&&(g=this.player.enemyManager.enemies.find(_=>p.parent===_.mesh||p===_.mesh||_.mesh.children.includes(p)),!g);)p=p.parent;g?this.hoveredEnemy=g:this.hoveredEnemy=null}else this.hoveredEnemy=null}}if(!this.hoveredEnemy&&this.multiplayer&&this.multiplayer.others&&this.multiplayer.others.size>0){const h=[];if(this.multiplayer.others.forEach(u=>{u&&(u.isMesh?h.push(u):u.traverse&&u.traverse(d=>{d.isMesh&&h.push(d)}))}),h.length>0){this.raycaster.setFromCamera(new Me(0,0),this.player.camera);const u=this.raycaster.intersectObjects(h,!0);if(u.length>0){let d=u[0].object;for(;d.parent&&!((l=d.userData)!=null&&l.nick)&&!this.multiplayer.others.has((c=d.userData)==null?void 0:c.gameId);)d=d.parent;this.hoveredPlayer=d}}}if(this.hoverInfo)if(this.hoveredEnemy){const h=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,u=h&&h.userData&&(h.userData.gameId||h.userData.gameid)?h.userData.gameId||h.userData.gameid:"---",d=this.hoveredEnemy.position?this.hoveredEnemy.position:h?h.position:null;s=d?this.player.position.distanceTo(d):null;const p=s?s.toFixed(2):"---";this.hoverInfo.innerText=`${u} • ${p}m`}else if(this.hoveredPlayer){const h=this.hoveredPlayer.userData&&this.hoveredPlayer.userData.nick?this.hoveredPlayer.userData.nick:"Player";let u=null;this.hoveredPlayer.getWorldPosition?(u=new R,this.hoveredPlayer.getWorldPosition(u)):u=this.hoveredPlayer.position||null,s=u?this.player.position.distanceTo(u):null;const d=s?s.toFixed(2):"---";this.hoverInfo.innerText=`${h} • ${d}m`}else this.hoverInfo.innerText="";if(this.scopeOverlay){const h=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],u=this.player.isAiming&&h&&h.name==="Sniper";this.scopeOverlay.classList.toggle("hidden",!u);const d=document.getElementById("crosshair");d&&d.classList.toggle("hidden",u)}const o=document.getElementById("crosshair");if(o){o.classList.remove("target-red","target-yellow");const h=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],u=h&&h.range?h.range:1e3;this.hoveredEnemy&&s!==null&&(s<=u?o.classList.add("target-red"):o.classList.add("target-yellow"))}this.updateMinimap(),this.slots.forEach(h=>h.style.display="none"),this.player.weapons.forEach((h,u)=>{let d=this.slots[u];d&&(d.style.display="flex",d.innerText=u+1,u===this.player.currentWeaponIndex?d.classList.add("active"):d.classList.remove("active"))});const a=performance.now();if(a-this.lastTime>1e3){this.timeRemaining--,this.timeRemaining<0&&(this.timeRemaining=0);const h=Math.floor(this.timeRemaining/60).toString().padStart(2,"0"),u=(this.timeRemaining%60).toString().padStart(2,"0");this.timerValue.innerText=`${h}:${u}`,this.lastTime=a}this.player.isDead&&this.player.gameMode!=="matrix"&&this.showGameOver("YOU DIED"),this.updateTargetInspect()}showSelectionInfo(e,t){if(!this.selectionInfo)return;const n=e||"Object",i=t||"---";this.selectionInfo.innerText=`${n} (${i})`,this.selectionInfo.classList.remove("hidden"),this.selectionInfoTimeout&&clearTimeout(this.selectionInfoTimeout),this.selectionInfoTimeout=setTimeout(()=>{try{this.selectionInfo.classList.add("hidden")}catch{}},2500)}updateTargetInspect(){if(!this.targetInspect||!this.player||!this.player.camera)return;const e=this.raycaster,t=new Me(0,0);e.setFromCamera(t,this.player.camera);const n=[];if(this.world&&Array.isArray(this.world.objects)&&n.push(...this.world.objects),this.world&&this.world.itemManager&&Array.isArray(this.world.itemManager.items)&&n.push(...this.world.itemManager.items),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&this.player.enemyManager.enemies.forEach(h=>{h&&h.mesh&&n.push(h.mesh)}),n.length===0){this.targetInspect.innerText="Target: ---";return}const i=Array.from(new Set(n)),s=e.intersectObjects(i,!0);if(!s.length){this.targetInspect.innerText="Target: ---";return}let o=null;for(let h=0;h<s.length;h++){let u=s[h].object;for(;u;){if(u.userData&&(u.userData.gameName||u.userData.type||u.userData.gameId||u.userData.gameid)){o=u.userData;break}u=u.parent}if(o)break}if(!o){this.targetInspect.innerText="Target: ---";return}const a=o.gameName||"Object",l=o.gameId||o.gameid||"---",c=o.type||"---";this.targetInspect.innerText=`Target: ${a} (ID: ${l}) [${c}]`}showGameOver(e){if(this.player&&this.player.gameMode==="matrix"||this.gameOverShown)return;this.gameOverShown=!0,this.gameOverScreen.classList.remove("hidden"),document.getElementById("game-over-title").innerText=e;try{const n=document.getElementById("touch-controls");n&&(n.style.display="none")}catch{}const t=document.getElementById("restart-btn");t.onclick=()=>{location.reload()},t.style.pointerEvents="auto",t.style.cursor="pointer";try{typeof window<"u"&&window.game&&e&&e.toUpperCase().includes("DIED")&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(Jp)}catch{}}showVictory(){if(!(this.player&&this.player.gameMode==="matrix")){this.gameOverShown=!1,this.showGameOver("VICTORY ROYALE!"),document.getElementById("game-over-title").style.color="#f1c40f";try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}try{const e=document.getElementById("touch-controls");e&&(e.style.display="none")}catch{}try{typeof window<"u"&&window.game&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(Qp)}catch{}}}updateMinimap(){if(!this.minimapContainer)return;const e=this.settings.showMinimap!==!1;if(this.minimapContainer.classList.toggle("hidden",!e),!e||!this.minimapCtx||!this.player)return;const t=this.minimapCtx,n=this.minimapSize;t.clearRect(0,0,n,n),t.fillStyle="rgba(10, 12, 20, 0.75)",t.fillRect(0,0,n,n),t.strokeStyle="rgba(255, 255, 255, 0.25)",t.lineWidth=2,t.strokeRect(1,1,n-2,n-2);const i=Math.max(1,this.world&&this.world.halfMapSize?this.world.halfMapSize:this.mapSize/2),s=n*.45,o=n/2,a=n/2;if(this.world&&typeof this.world.stormRadius=="number"&&this.world.stormRadius>0){const d=Math.max(0,Math.min(1.2,this.world.stormRadius/i)),p=s*d;t.beginPath(),t.strokeStyle="rgba(157, 77, 187, 0.85)",t.lineWidth=3,t.arc(o,a,p,0,Math.PI*2),t.stroke()}const l=this.player&&this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)?this.player.enemyManager.enemies:[];l.length&&(t.fillStyle="#ff3b30",t.strokeStyle="#660000",t.lineWidth=1.5,l.forEach(d=>{if(!d)return;const p=d.position||d.mesh&&d.mesh.position;if(!p)return;const g=Math.max(o-s,Math.min(o+s,o+p.x/i*s)),_=Math.max(a-s,Math.min(a+s,a-p.z/i*s));t.beginPath(),t.arc(g,_,4,0,Math.PI*2),t.fill(),t.stroke()}));const c=this.world&&Array.isArray(this.world.objects)?this.world.objects.filter(d=>d&&d.userData&&d.userData.type==="house"):[];c.length&&(t.fillStyle="#ffd166",t.strokeStyle="#8c5a00",t.lineWidth=1,c.forEach(d=>{const p=d.position;if(!p)return;const g=Math.max(o-s,Math.min(o+s,o+p.x/i*s)),_=Math.max(a-s,Math.min(a+s,a-p.z/i*s));t.beginPath(),t.arc(g,_,3,0,Math.PI*2),t.fill(),t.stroke()}));const h=Math.max(o-s,Math.min(o+s,o+this.player.position.x/i*s)),u=Math.max(a-s,Math.min(a+s,a-this.player.position.z/i*s));t.beginPath(),t.fillStyle="#00d8ff",t.strokeStyle="#ffffff",t.lineWidth=2,t.arc(h,u,6,0,Math.PI*2),t.fill(),t.stroke(),this.multiplayer&&this.multiplayer.others&&this.multiplayer.others.size>0&&this.multiplayer.others.forEach(d=>{if(!d||!d.position)return;const p=Math.max(o-s,Math.min(o+s,o+d.position.x/i*s)),g=Math.max(a-s,Math.min(a+s,a-d.position.z/i*s)),_=d.userData&&d.userData.color?d.userData.color:"#ffaa00";t.beginPath(),t.fillStyle=_,t.strokeStyle="#111",t.lineWidth=2,t.arc(p,g,5,0,Math.PI*2),t.fill(),t.stroke()});try{const d=new R;if(this.player&&this.player.camera&&this.player.camera.getWorldDirection&&this.player.camera.getWorldDirection(d),d.y=0,d.lengthSq()<1e-4&&this.player.mesh&&(d.set(0,0,-1).applyEuler(this.player.mesh.rotation),d.y=0),d.lengthSq()>1e-4){d.normalize();const p=d.x,g=-d.z,_=Math.atan2(g,p)+Math.PI/2;t.save(),t.translate(h,u),t.rotate(_),t.beginPath(),t.moveTo(0,-10),t.lineTo(6,8),t.lineTo(-6,8),t.closePath(),t.fillStyle="#00d8ff",t.strokeStyle="#003f4f",t.lineWidth=2,t.fill(),t.stroke(),t.restore()}}catch{}}setRenderer(e){this._renderer=e}setMultiplayer(e){this.multiplayer=e}}const tm="/threejs-voxel-firecraft/dist/assets/mixkit-kill-blood-zombie-By90BKfb.ogg",nm="/threejs-voxel-firecraft/dist/assets/zombie-B8PCKsyJ.ogg";class im{constructor(e,t,n,i){this.scene=e,this.player=t,this.world=n,this.enemies=[],this.spawnInterval=5e3,this.lastSpawn=0,this.killedCount=0,this.groanBuffer=null;const s=i&&(i.gameMode==="matrix"||i.gameMode==="studio")?0:i&&i.gameMode==="matrix-ai"?5:i?i.enemyCount:15;this.targetCount=s,this.difficulty=i?i.difficulty:"medium",this.gameMode=i&&i.gameMode?i.gameMode:"survival",this.studioAiEnabled=!1;for(let o=0;o<s;o++)this.spawnEnemy();this.deathBuffer=null;try{const o=window.AudioContext||window.webkitAudioContext;o&&(this.audioCtx=new o,fetch(tm).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.deathBuffer=a,this.enemies.forEach(l=>{l.audioCtx=this.audioCtx,l.deathBuffer=a})}).catch(a=>{}),fetch(nm).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.groanBuffer=a,this.enemies.forEach(l=>{l.audioCtx=this.audioCtx,l.groanBuffer=a})}).catch(a=>{}))}catch{}}spawnEnemy(e=!1){if(!e&&(this.gameMode==="matrix"||this.gameMode==="studio"))return;const t=this.world&&this.world.halfMapSize?this.world.halfMapSize:100;let n=(Math.random()-.5)*t,i=(Math.random()-.5)*t;if(this.gameMode==="matrix-ai"&&this.player){const l=(this.world&&this.world.halfMapSize?this.world.halfMapSize:100)*.6;let c=0;for(;c<10;){const h=this.player.position.x,u=this.player.position.z,d=n-h,p=i-u;if(Math.sqrt(d*d+p*p)>=l)break;n=(Math.random()-.5)*t,i=(Math.random()-.5)*t,c++}}const s=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(n,i):0,o=this.world&&this.world.halfMapSize?this.world.halfMapSize:100,a=new sm(this.scene,n,s,i,this.difficulty,o,this.player);a.audioCtx=this.audioCtx,a.deathBuffer=this.deathBuffer,a.groanBuffer=this.groanBuffer,a.world=this.world,this.enemies.push(a),e&&this.gameMode==="studio"&&(this.studioAiEnabled=!0)}setTargetCount(e){typeof e=="number"&&e>=0&&(this.targetCount=e)}update(e){if(this.gameMode!=="matrix"&&!(this.gameMode==="studio"&&!this.studioAiEnabled)&&(this.enemies.forEach(t=>{if(t.update(e,this.player),Math.sqrt(t.position.x*t.position.x+t.position.z*t.position.z)>this.world.stormRadius&&t.takeDamage(5*e),this.world&&typeof this.world.halfMapSize=="number"){const i=this.world.halfMapSize-1;t.position.x=Math.max(-i,Math.min(i,t.position.x)),t.position.z=Math.max(-i,Math.min(i,t.position.z))}}),this.enemies=this.enemies.filter(t=>t.readyToDespawn?(this.killedCount++,!1):!0),this.gameMode!=="multiplayer"&&this.targetCount!==void 0&&this.targetCount>0)){const t=this.targetCount-this.enemies.length;if(t>0)for(let n=0;n<t;n++)this.spawnEnemy()}}}class sm{constructor(e,t,n,i,s,o=100,a=null){this.scene=e,this.position=new R(t,n,i),this.mapHalfSize=o,this.world=null,this.player=a,this.deathTimer=0,this.deathDuration=0,this.deathFallProgress=0,this.readyToDespawn=!1,this.groanBuffer=null,this.groanCooldown=0,this.groanRange=15,this._groanSource=null,this._groanGain=null,s==="easy"?(this.health=50,this.damage=2,this.speed=3):s==="hard"?(this.health=150,this.damage=10,this.speed=6):(this.health=100,this.damage=5,this.speed=4.5),this.state="wander",this.isDead=!1,this.attackRange=2,this.detectionRange=25,this.attackCooldown=1.5,this.lastAttack=0,this.wanderTarget=null,this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4,this.createMesh()}createMesh(){this.mesh=new We,this.mesh.position.copy(this.position),this.mesh.userData={gameId:Math.random().toString(36).substr(2,9).toUpperCase(),gameName:"Zombie"},this.scene.add(this.mesh);const e=new J({color:9323693}),t=new J({color:2899536}),n=new H(new ee(.5,.5,.5),e);n.position.y=1.75,this.mesh.add(n);const i=new J({color:16717636,emissive:16717636,emissiveIntensity:.8,roughness:.2}),s=new ee(.12,.08,.02),o=new H(s,i);o.position.set(-.12,.05,.26);const a=o.clone();a.position.x=.12,n.add(o),n.add(a);const l=new J({color:855309,emissive:3342336,emissiveIntensity:.4}),c=new H(new ee(.24,.08,.04),l);c.position.set(0,-.14,.25),n.add(c);const h=new J({color:15921906,roughness:.3}),u=new ee(.05,.06,.02);for(let _=-1;_<=1;_+=2){const m=new H(u,h);m.position.set(_*.06,-.05,.04),c.add(m)}const d=new H(new ee(.6,.8,.3),t);d.position.y=1.1,this.mesh.add(d);const p=new ee(.2,.8,.2);p.translate(0,-.3,0),this.leftArmPivot=new We,this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot),this.leftArmPivot.add(new H(p,e)),this.rightArmPivot=new We,this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot),this.rightArmPivot.add(new H(p,e));const g=new ee(.25,.8,.25);g.translate(0,-.4,0),this.leftLegPivot=new We,this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot),this.leftLegPivot.add(new H(g,t)),this.rightLegPivot=new We,this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot),this.rightLegPivot.add(new H(g,t)),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.attackAnimTime=0,this.attackAnimDuration=.5,this.createHealthBar()}createHealthBar(){const e=new Ut(1,.1),t=new vn({color:0});this.healthBarBg=new H(e,t),this.healthBarBg.position.y=2.3,this.mesh.add(this.healthBarBg);const n=new Ut(1,.1),i=new vn({color:16711680});this.healthBarFg=new H(n,i),this.healthBarFg.position.y=2.3,this.healthBarFg.position.z=.01,this.mesh.add(this.healthBarFg)}update(e,t){if(this.isDead){this.updateDeath(e);return}this.groanCooldown=Math.max(0,this.groanCooldown-e),this.groanBuffer&&this.audioCtx&&t&&this.groanCooldown<=0&&this.position.distanceTo(t.position)<=this.groanRange&&(this.playGroan(),this.groanCooldown=2+Math.random()*2.5);const n=t.position;this.healthBarBg.lookAt(n),this.healthBarFg.lookAt(n);const i=this.position.distanceTo(n);i<this.detectionRange?this.state="chase":this.state="wander";let s=!1;if(this.state==="chase"){const o=this.hasLineOfSight(t,n);if(i<this.detectionRange&&o){const a=new R().subVectors(n,this.position).normalize();if(a.y=0,i>2){const c=a.clone(),h=Math.sin(performance.now()/500+this.position.x)*.5,u=new R(a.z,0,-a.x).multiplyScalar(h);c.add(u).normalize();const d=this.position.clone().add(c.multiplyScalar(this.speed*e));this.checkCollision(d)||this.position.copy(d),this.mesh.lookAt(n),s=!0}else{const c=a.clone().multiplyScalar(-1),h=this.position.clone().add(c.multiplyScalar(this.speed*e*.5));this.checkCollision(h)||this.position.copy(h),this.mesh.lookAt(n)}if(i<this.attackRange){const c=performance.now()/1e3;c-this.lastAttack>this.attackCooldown&&(t.takeDamage(this.damage),this.lastAttack=c,this.attackAnimTime=this.attackAnimDuration)}}else this.state="wander"}else{if(this.wanderTimer+=e,!this.wanderTarget||this.wanderTimer>this.wanderChangeInterval){const o=10+Math.random()*30,a=Math.random()*Math.PI*2,l=this.position.x+Math.cos(a)*o,c=this.position.z+Math.sin(a)*o,h=(g,_,m)=>Math.max(_,Math.min(m,g)),u=this.mapHalfSize*.9,d=h(l,-u,u),p=h(c,-u,u);this.wanderTarget=new R(d,0,p),this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4}if(this.wanderTarget){const o=new R().subVectors(this.wanderTarget,this.position);o.y=0,o.length()>.5?(o.normalize(),this.position.add(o.multiplyScalar(this.speed*e*.5)),this.mesh.lookAt(this.wanderTarget.x,this.position.y,this.wanderTarget.z),s=!0):(this.wanderTimer+=e,this.wanderTimer>this.wanderChangeInterval&&(this.wanderTarget=null,this.wanderTimer=0))}}if(this.mesh.position.copy(this.position),this.world&&typeof this.world.getHeightAt=="function"){const o=this.world.getHeightAt(this.position.x,this.position.z);this.mesh.position.y=Math.max(this.mesh.position.y,o),this.position.y=this.mesh.position.y}if(s){this.animTime+=e*5;const o=Math.sin(this.animTime)*.5;this.leftLegPivot.rotation.x=o,this.rightLegPivot.rotation.x=-o,this.leftArmPivot.rotation.x=-Math.PI/3+o*.2,this.rightArmPivot.rotation.x=-Math.PI/3-o*.2}else this.state!=="attack"&&(this.leftLegPivot.rotation.x=0,this.rightLegPivot.rotation.x=0,this.leftArmPivot.rotation.x=-Math.PI/3,this.rightArmPivot.rotation.x=-Math.PI/3);if(this.attackAnimTime>0){this.attackAnimTime=Math.max(0,this.attackAnimTime-e);const o=1-this.attackAnimTime/this.attackAnimDuration,a=Math.sin(o*Math.PI)*1.5;if(this.leftArmPivot.rotation.x=-Math.PI/2+a*.2,this.rightArmPivot.rotation.x=-Math.PI/2-a*.2,o>.3&&o<.7){const l=new R;this.mesh.getWorldDirection(l),l.y=0,l.normalize(),this.position.add(l.multiplyScalar(.02))}}}takeDamage(e){this.health-=e;const t=Math.max(0,this.health/100);this.healthBarFg.scale.x=t,this.mesh.traverse(n=>{if(n.isMesh&&n!==this.healthBarBg&&n!==this.healthBarFg){const i=n.material;if(!n.userData.originalColor&&i&&i.color)try{n.userData.originalColor=i.color.clone()}catch{n.userData.originalColor=null}if(i&&(i.isMeshStandardMaterial||i.isMeshPhongMaterial||i.isMeshLambertMaterial))i.emissive=new be(16711680);else if(i&&i.color)try{i.color=i.color.clone().lerp(new be(16711680),.6)}catch{}}}),setTimeout(()=>{this.isDead||this.mesh.traverse(n=>{if(n.isMesh&&n!==this.healthBarBg&&n!==this.healthBarFg){const i=n.material;if(i&&(i.isMeshStandardMaterial||i.isMeshPhongMaterial||i.isMeshLambertMaterial))i.emissive=new be(0);else if(i&&i.color&&n.userData&&n.userData.originalColor)try{i.color.copy(n.userData.originalColor)}catch{}}})},100),this.health<=0&&!this.isDead&&this.startDeath()}playDeathSound(){try{const e=this.audioCtx.createBufferSource();e.buffer=this.deathBuffer;const t=this.audioCtx.createGain();t.gain.value=.7,e.connect(t),t.connect(this.audioCtx.destination),e.start(0)}catch(e){console.warn("playDeathSound error:",e)}}checkCollision(e){if(!this.scene)return!1;const t=.5;for(let n of this.scene.children)if(n.userData&&(n.userData.type==="house"||n.userData.type==="tree")){const i=n.position,s=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2)),o=n.userData.type==="house"?5:2;if(s<t+o)return!0}return!1}hasLineOfSight(e,t){if(!this.scene)return!0;const n=new R().subVectors(t,this.position).normalize(),i=this.position.distanceTo(t),o=new Kt(this.position.clone().add(new R(0,1,0)),n,0,i).intersectObjects(this.scene.children,!0);for(let a of o){if(a.object===this.mesh||a.object.parent===this.mesh||a.object===e.mesh||a.object.parent===e.mesh)continue;let l=a.object;for(;l.parent&&l.parent!==this.scene;)l=l.parent;if(l.userData&&(l.userData.type==="house"||l.userData.type==="tree"))return!1}return!0}startDeath(){this.isDead=!0,this.deathTimer=0,this.deathFallProgress=0,this.deathDuration=3+Math.random()*2,this.stopGroan(),this.healthBarBg&&(this.healthBarBg.visible=!1),this.healthBarFg&&(this.healthBarFg.visible=!1);const e=25,t=this.player&&this.player.position;if(t?this.position.distanceTo(t)<=e:!0)try{this.audioCtx&&this.deathBuffer&&(this.audioCtx.state==="suspended"?this.audioCtx.resume().then(()=>{this.playDeathSound()}):this.audioCtx.state==="running"&&this.playDeathSound())}catch(i){console.warn("Error playing death sound:",i)}}updateDeath(e){this.deathFallProgress=Math.min(1,this.deathFallProgress+e*2.5);const t=-Math.PI/2*this.deathFallProgress;this.mesh&&(this.mesh.rotation.x=t,this.mesh.position.y=Math.max(0,this.mesh.position.y-e*.6)),this.deathTimer+=e,this.deathTimer>=(this.deathDuration||3)&&(this.mesh&&this.mesh.parent&&this.scene.remove(this.mesh),this.readyToDespawn=!0)}playGroan(){try{if(!this.audioCtx||!this.groanBuffer)return;if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playGroan());return}const e=this.audioCtx.createBufferSource();e.buffer=this.groanBuffer;const t=this.audioCtx.createGain();t.gain.value=.45,e.connect(t),t.connect(this.audioCtx.destination),e.onended=()=>{this._groanSource=null,this._groanGain=null},e.start(0),this._groanSource=e,this._groanGain=t}catch(e){console.warn("playGroan error:",e)}}stopGroan(){if(this._groanSource){try{this._groanSource.stop()}catch{}try{this._groanSource.disconnect()}catch{}this._groanSource=null}if(this._groanGain){try{this._groanGain.disconnect()}catch{}this._groanGain=null}}}class rm{constructor(e,t,n){this.scene=e,this.player=t,this.items=[],this.interactionPrompt=document.getElementById("interaction-prompt"),this.mapSize=n&&n.mapSize?n.mapSize:ms,this.spawnSpan=this.mapSize*.75,this.glowRadius=7,this.world=null,this.settings=n||{},this.matrixDropInterval=5,this._matrixDropTimer=0,this.matrixDropBatchSize=10,this.matrixDropRadiusLimit=10,this.initLoot(),document.addEventListener("keydown",i=>{i.code==="KeyE"&&this.tryInteract()})}setWorld(e){this.world=e,this.realignItemsToGround()}getClampedCoord(e,t){if(this.world&&typeof this.world.halfMapSize=="number"){const n=this.world.halfMapSize-1;return{x:Math.max(-n,Math.min(n,e)),z:Math.max(-n,Math.min(n,t))}}return{x:e,z:t}}initLoot(){if(this.settings.gameMode==="matrix"||this.settings.gameMode==="studio"||this.settings.skipLoot)return;for(let t=0;t<24;t++){let n=(Math.random()-.5)*this.spawnSpan,i=(Math.random()-.5)*this.spawnSpan;({x:n,z:i}=this.getClampedCoord(n,i)),this.createChest(n,.5,i)}for(let t=0;t<36;t++){let n=(Math.random()-.5)*this.spawnSpan,i=(Math.random()-.5)*this.spawnSpan;({x:n,z:i}=this.getClampedCoord(n,i)),this.spawnJuiceBottle(n,i)}const e=[2899536,15105570,1752220,15158332,10181046];for(let t=0;t<8;t++){let n=(Math.random()-.5)*this.spawnSpan,i=(Math.random()-.5)*this.spawnSpan;({x:n,z:i}=this.getClampedCoord(n,i));const s=e[t%e.length];this.spawnBackpack(n,i,s)}}createChest(e,t,n){this.spawnChest(e,n)}spawnChest(e,t){const n=new We;({x:e,z:t}=this.getClampedCoord(e,t));let i=.5;this.world&&typeof this.world.getHeightAt=="function"&&(i=this.world.getHeightAt(e,t)+.5),n.position.set(e,i,t);const s=new ee(1,.8,.6),o=new J({color:15844367,roughness:.3,metalness:.5}),a=new H(s,o);n.add(a);const l=new ee(1,.2,.6),c=new H(l,o);c.position.y=.5,n.add(c);const h=new H(new ee(.2,.3,.1),new J({color:9807270}));h.position.set(0,.3,.3),n.add(h),n.castShadow=!0,n.receiveShadow=!0;const u=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR"],d=u[Math.floor(Math.random()*u.length)];n.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:d};const p=this.createGlowEffect();return p.position.y=1,n.add(p),n.userData.glow=p,this.scene.add(n),this.items.push(n),n}spawnChestWithLoot(e,t,n){const i=new We;({x:e,z:t}=this.getClampedCoord(e,t));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(e,t)+.5),i.position.set(e,s,t);const o=new ee(1,.8,.6),a=new J({color:15844367,roughness:.3,metalness:.5}),l=new H(o,a);i.add(l);const c=new ee(1,.2,.6),h=new H(c,a);h.position.y=.5,i.add(h);const u=new H(new ee(.2,.3,.1),new J({color:9807270}));u.position.set(0,.3,.3),i.add(u),i.castShadow=!0,i.receiveShadow=!0,i.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:n};const d=this.createGlowEffect();return d.position.y=1,i.add(d),i.userData.glow=d,this.scene.add(i),this.items.push(i),i}spawnJuiceBottle(e,t){const n=new We;({x:e,z:t}=this.getClampedCoord(e,t));let i=.5;this.world&&typeof this.world.getHeightAt=="function"&&(i=this.world.getHeightAt(e,t)+.5),n.position.set(e,i,t);const s=new H(new pt(.2,.2,.6,8),new J({color:2600544}));s.position.y=.5,n.add(s);const o=new H(new pt(.12,.12,.15,8),new J({color:12597547}));o.position.y=.9,n.add(o),n.castShadow=!0,n.receiveShadow=!0,n.userData={type:"stamina",gameId:this.generateID(),gameName:"JuiceBottle",amount:50};const a=this.createGlowEffect();return a.position.y=.9,n.add(a),n.userData.glow=a,this.scene.add(n),this.items.push(n),n}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}spawnLootInHouse(e,t,n){this.spawnChest(e,n)}spawnBackpack(e,t,n){const i=new We;({x:e,z:t}=this.getClampedCoord(e,t));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(e,t)+.5),i.position.set(e,s,t);const o=new H(new ee(.7,.9,.35),new J({color:n,metalness:.15,roughness:.8}));i.add(o);const a=new H(new ee(.6,.25,.16),new J({color:3426654,metalness:.1,roughness:.8}));a.position.set(0,-.55,.18),i.add(a),i.castShadow=!0,i.receiveShadow=!0;const l=this.createGlowEffect();return l.position.y=1,i.add(l),i.userData={type:"backpack",color:n,gameId:this.generateID(),gameName:"Backpack",isOpened:!1,glow:l},this.scene.add(i),this.items.push(i),i}spawnMatrixLoadout(e=0,t=0){[{dx:2,dz:0,loot:"Pistol"},{dx:-2,dz:0,loot:"Rifle"},{dx:0,dz:2,loot:"Sniper"},{dx:0,dz:-2,loot:"ShieldPotion"},{dx:2,dz:2,loot:"SMG"},{dx:-2,dz:-2,loot:"Shotgun"},{dx:-2,dz:2,loot:"DMR"}].forEach(s=>{this.spawnChestWithLoot(e+s.dx,t+s.dz,s.loot)}),this.spawnJuiceBottle(e+3,t+3),this.spawnJuiceBottle(e-3,t-3),[2899536,15105570,1752220].forEach((s,o)=>{this.spawnBackpack(e+(o-1)*2,t+4,s)})}countNearbyChests(e=10){if(!this.player)return 0;const t=this.player.position;let n=0;return this.items.forEach(i=>{const s=i.userData||{};if(s.type!=="chest"||s.isOpened)return;const o=i.position.x-t.x,a=i.position.z-t.z;Math.sqrt(o*o+a*a)<=e&&n++}),n}createUmbrella(){const e=new We,t=new H(new pt(.08,.08,1.6,6),new J({color:4863016,roughness:.8}));t.position.y=-.2,e.add(t),[16726832,15844367,3447003].forEach((s,o)=>{const a=new H(new ee(1.8-o*.3,.15,1.8-o*.3),new J({color:s,roughness:.4,metalness:.2}));a.position.y=.7+o*.12,e.add(a)});const i=new H(new ai(.2,.25,6),new J({color:2899536}));return i.position.y=1.1,e.add(i),e.castShadow=!0,e.receiveShadow=!0,e}spawnMatrixDropNearPlayer(){if(!this.player)return;const e=Math.random()*Math.PI*2,t=4+Math.random()*8;let n=this.player.position.x+Math.cos(e)*t,i=this.player.position.z+Math.sin(e)*t;({x:n,z:i}=this.getClampedCoord(n,i));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(n,i)+.5);const o=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR"],a=o[Math.floor(Math.random()*o.length)],l=this.spawnChestWithLoot(n,i,a);if(l){l.position.y=s+18,l.userData.isDropping=!0,l.userData.dropTargetY=s,l.userData.dropVelocity=0;const c=this.createUmbrella();c.position.y=1.2,l.add(c),l.userData.umbrella=c}}spawnMatrixDropsBatch(){if(this.countNearbyChests(this.matrixDropRadiusLimit)>=this.matrixDropBatchSize)return;const e=this.matrixDropBatchSize-this.countNearbyChests(this.matrixDropRadiusLimit),t=Math.max(0,Math.min(this.matrixDropBatchSize,e));for(let n=0;n<t;n++)this.spawnMatrixDropNearPlayer()}update(e=.016){const t=Math.max(0,e||0);this.settings.gameMode==="matrix"&&this.player&&(this._matrixDropTimer+=t,this._matrixDropTimer>=this.matrixDropInterval&&(this._matrixDropTimer=0,this.spawnMatrixDropsBatch())),this.items.forEach(s=>{const o=s.userData||{};if(o.isDropping&&(o.dropVelocity=(o.dropVelocity||0)+5*t,s.position.y-=o.dropVelocity*t,s.position.y<=o.dropTargetY&&(s.position.y=o.dropTargetY,o.isDropping=!1,o.dropVelocity=0,o.umbrella))){try{s.remove(o.umbrella)}catch{}o.umbrella=null}});let n=null;const i=this.player.position;for(const s of this.items){if(s.userData&&s.userData.isOpened)continue;const o=i.distanceTo(s.position);if(this.updateGlow(s,o),o<3){n=s;break}}if(!(this.interactionPrompt&&this.interactionPrompt.dataset.vehiclePrompt==="1"))if(n){this.interactionPrompt.classList.remove("hidden");const s=n.userData||{};if(s.type==="chest")this.interactionPrompt.innerText=`Press E to open (Contains: ${s.loot})`;else if(s.type==="stamina")this.interactionPrompt.innerText=`Press E to collect ${s.gameName} (+${s.amount} Stamina)`;else if(s.type==="backpack"){const o=s.color?"#"+s.color.toString(16).padStart(6,"0"):"";this.interactionPrompt.innerText=`Press E to equip Backpack ${o}`}else this.interactionPrompt.innerText="Press E to interact";this.currentItem=n}else this.interactionPrompt.classList.add("hidden"),this.currentItem=null}tryInteract(){if(this.currentItem){const e=this.currentItem.userData;if(!e)return;if(e.type==="chest"&&!e.isOpened)e.isOpened=!0,this.scene.remove(this.currentItem),this.player.collectItem(e.loot),console.log(`Looted ${e.loot}!`);else if(e.type==="stamina"){const t=e.amount||50;this.player&&(this.player.stamina=Math.min(100,this.player.stamina+t)),this.scene.remove(this.currentItem),e.isOpened=!0,console.log(`Picked up stamina item: +${t}`)}else if(e.type==="backpack"){const t=e.color||2899536;if(this.player&&typeof this.player.collectItem=="function"){const n=this.player.collectItem(`Backpack:${t.toString(16)}`);if(n!=null){const i=this.player.position.clone();this.spawnBackpack(i.x+.5,i.z+.5,n)}}this.scene.remove(this.currentItem),e.isOpened=!0,console.log(`Equipped backpack ${t.toString(16)}`)}}}realignItemsToGround(){!this.world||typeof this.world.getHeightAt!="function"||this.items.forEach(e=>{const t=e.position,n=this.world.getHeightAt(t.x,t.z),i=(e.userData&&e.userData.type==="chest",.5);e.position.y=n+i})}updateGlow(e,t){if(!e||!e.userData||!e.userData.glow)return;const n=e.userData.glow,i=!e.userData.isOpened&&t<this.glowRadius;n.visible=i,i&&(n.rotation.y+=.02,n.position.y=(e.userData.type==="chest"?1:.9)+Math.sin(performance.now()/500)*.1)}createGlowEffect(){const t=new Float32Array(120),n=.6;for(let a=0;a<40;a++){const l=n*Math.random(),c=Math.random()*Math.PI*2,h=Math.random()*n*.6;t[a*3]=Math.cos(c)*l,t[a*3+1]=h,t[a*3+2]=Math.sin(c)*l}const i=new ht;i.setAttribute("position",new St(t,3));const s=new qa({color:16765286,size:.15,transparent:!0,opacity:.9,depthWrite:!1,blending:sr,sizeAttenuation:!0}),o=new Sp(i,s);return o.visible=!1,o}}class om{constructor(e,t={}){this.player=e,this.container=document.getElementById("touch-controls"),this.enabled=!0,this.joystick=document.createElement("div"),this.joystick.className="tc-joystick",this.joystick.style.zIndex="210",this.stick=document.createElement("div"),this.stick.className="tc-stick",this.joystick.appendChild(this.stick),this.buttons=document.createElement("div"),this.buttons.className="tc-buttons",this.buttons.style.zIndex="210",this.fireBtn=document.createElement("button"),this.fireBtn.className="tc-btn",this.fireBtn.innerText="FIRE",this.jumpBtn=document.createElement("button"),this.jumpBtn.className="tc-btn",this.jumpBtn.innerText="JUMP",this.sprintBtn=document.createElement("button"),this.sprintBtn.className="tc-btn",this.sprintBtn.innerText="SPRINT",this.interactBtn=document.createElement("button"),this.interactBtn.className="tc-btn tc-interact-btn",this.interactBtn.innerText="E",this.interactBtn.style.display="none",this.crouchBtn=document.createElement("button"),this.crouchBtn.className="tc-btn",this.crouchBtn.innerText="CROUCH",this.crouchBtn.style.fontSize="16px",this.buttons.appendChild(this.fireBtn),this.buttons.appendChild(this.jumpBtn),this.buttons.appendChild(this.sprintBtn),this.buttons.appendChild(this.crouchBtn),this.buttons.appendChild(this.interactBtn),this.container.appendChild(this.joystick),this.container.appendChild(this.buttons),this.container.classList.remove("hidden"),this.active=!1,this.startPos=null,this.currentPos={x:0,y:0},this.lookActive=!1,this.lookStartPos=null,this._bindJoystick(),this._bindButtons(),this._bindLookArea(),this.deadZone=10,this.maxRadius=50,document.body.style.touchAction="none";try{this.player&&(this.player.allowTouchMovement=!0)}catch{}}_dispatchTouchLook(e,t){try{window.dispatchEvent(new CustomEvent("game-touch-look",{detail:{dx:e,dy:t}}))}catch{}}destroy(){try{this.container.classList.add("hidden"),this.container.removeChild(this.joystick),this.container.removeChild(this.buttons),document.body.style.touchAction="",this.player&&(this.player.allowTouchMovement=!1)}catch{}}_bindJoystick(){this.joystick.addEventListener("touchstart",t=>{t.preventDefault();const n=t.changedTouches[0];this.joystick.getBoundingClientRect(),this.startPos={x:n.clientX,y:n.clientY},this.active=!0}),this.joystick.addEventListener("touchmove",t=>{if(!this.active)return;t.preventDefault();const n=t.changedTouches[0],i=n.clientX-this.startPos.x,s=n.clientY-this.startPos.y,o=Math.sqrt(i*i+s*s),a=Math.atan2(s,i),l=Math.min(this.maxRadius,o),c=Math.cos(a)*l,h=Math.sin(a)*l;this.stick.style.transform=`translate(${c}px, ${h}px)`;const u=i/this.maxRadius,d=s/this.maxRadius;this.player.moveForward=d<-.3,this.player.moveBackward=d>.3,this.player.moveLeft=u<-.3,this.player.moveRight=u>.3});const e=t=>{this.active&&(t.preventDefault(),this.active=!1,this.startPos=null,this.stick.style.transform="translate(0,0)",this.player.moveForward=!1,this.player.moveBackward=!1,this.player.moveLeft=!1,this.player.moveRight=!1)};this.joystick.addEventListener("touchend",e),this.joystick.addEventListener("touchcancel",e)}_bindButtons(){let e=null;this.fireBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&typeof this.player.shoot=="function"&&(this.player.shoot(),e=setInterval(()=>{this.player&&typeof this.player.shoot=="function"&&this.player.shoot()},150))}),this.fireBtn.addEventListener("touchend",t=>{t.preventDefault(),e&&(clearInterval(e),e=null)}),this.jumpBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&this.player.canJump===!0&&(this.player.velocity.y+=this.player.jumpHeight,this.player.canJump=!1)}),this.sprintBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&(this.player.isSprinting=!0)}),this.sprintBtn.addEventListener("touchend",t=>{t.preventDefault(),this.player&&(this.player.isSprinting=!1)}),this.interactBtn.addEventListener("touchstart",t=>{t.preventDefault(),window.game&&window.game.itemManager&&window.game.itemManager.tryInteract()}),this.crouchBtn.addEventListener("touchstart",t=>{t.preventDefault(),this.player&&(this.player.isCrouching=!this.player.isCrouching,this.crouchBtn.style.background=this.player.isCrouching?"rgba(52, 152, 219, 0.9)":"rgba(241, 196, 15, 0.9)")})}update(){window.game&&window.game.itemManager&&window.game.itemManager.currentItem?this.interactBtn.style.display="block":this.interactBtn.style.display="none"}destroyLookArea(){try{this.lookArea&&this.container&&this.lookArea.parentElement===this.container&&this.container.removeChild(this.lookArea)}catch{}this.lookArea=null}rebuildLookArea(){this.destroyLookArea(),this._bindLookArea()}_bindLookArea(){try{if(this.lookArea)try{this.container.removeChild(this.lookArea)}catch{}this.lookArea=document.createElement("div"),this.lookArea.className="tc-look-area",this.lookArea.style.position="absolute",this.lookArea.style.top="0",this.lookArea.style.bottom="0",this.lookArea.style.right="0",this.lookArea.style.left="0",this.lookArea.style.width="100%",this.lookArea.style.zIndex="190",this.lookArea.style.background="transparent",this.lookArea.style.touchAction="none",this.lookArea.style.pointerEvents="auto",this.container.appendChild(this.lookArea);let e=null,t=0,n=0;this.lookArea.addEventListener("touchstart",s=>{if(e!==null)return;const o=s.changedTouches[0];e=o.identifier,t=o.clientX,n=o.clientY,s.cancelable&&s.preventDefault()},{passive:!1}),this.lookArea.addEventListener("touchmove",s=>{if(e!==null){s.cancelable&&s.preventDefault();for(let o=0;o<s.changedTouches.length;o++)if(s.changedTouches[o].identifier===e){const a=s.changedTouches[o],l=a.clientX-t,c=a.clientY-n;t=a.clientX,n=a.clientY,this._dispatchTouchLook(l,c);break}}},{passive:!1});const i=s=>{if(e!==null){for(let o=0;o<s.changedTouches.length;o++)if(s.changedTouches[o].identifier===e){e=null;break}}};this.lookArea.addEventListener("touchend",i),this.lookArea.addEventListener("touchcancel",i)}catch{}}}class am{constructor({player:e,scene:t,url:n,nick:i="Player",color:s="#29b6f6",roomCode:o="PUBLIC"}){this.player=e,this.scene=t,this.url=n,this.nick=i,this.color=s,this.roomCode=o||"PUBLIC",this.socket=null,this.id=null,this.others=new Map,this.lastSend=0,this.sendInterval=.1,this.lastSentPos=null,this.lastAnimSig=null,this.heartbeatTimer=0,this.isHost=!1,this.connect()}connect(){if(!this.url){console.warn("Multiplayer URL not configured.");const e=document.getElementById("ai-log");if(e){const t=document.createElement("div");t.textContent="Multiplayer URL not set in settings.",t.style.color="#ff9b9b",e.appendChild(t)}return}try{this.socket=new WebSocket(this.url),this.socket.onopen=()=>{this.sendJoin()},this.socket.onmessage=e=>this.handleMessage(e),this.socket.onclose=()=>{setTimeout(()=>this.connect(),1500)},this.socket.onerror=()=>{}}catch(e){console.warn("Multiplayer connect failed:",e)}}handleMessage(e){try{const t=JSON.parse(e.data);if(t.type!=="hello")if(t.type==="welcome")this.id=t.id,this.isHost=!!t.isHost,this.onPeersChanged&&this.onPeersChanged(this.getPeerCount()),this.onHostChanged&&this.onHostChanged(this.isHost);else if(t.type==="player-join")this.ensureRemote(t.id),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount());else if(t.type==="player-leave")this.removeRemote(t.id),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount());else if(t.type==="state"&&t.id!==this.id){const n=this.ensureRemote(t.id,t.color);n&&t.pos&&(n.position.set(t.pos.x,t.pos.y,t.pos.z),this.applyRemoteAnimation(n,t.anim),this.updateLabel(n,t.nick))}else if(t.type==="hit"){if(t.targetId&&t.targetId===this.id&&this.player){const n=typeof t.amount=="number"?t.amount:0;n>0&&typeof this.player.takeDamage=="function"&&this.player.takeDamage(n)}}else t.type==="host-changed"?(this.isHost=t.hostId===this.id,this.onHostChanged&&this.onHostChanged(this.isHost)):t.type==="start-countdown"?this.onCountdown&&this.onCountdown(t.duration||10):t.type==="match-start"&&this.onMatchStart&&this.onMatchStart()}catch(t){console.warn("Multiplayer parse error:",t)}}ensureRemote(e,t=null){if(!e||e===this.id)return null;if(this.others.has(e))return this.others.get(e);const n=this.clonePlayerAvatar(t);if(n)return n.userData={...n.userData||{},gameId:e,gameName:"Player",color:t||this.color},this.scene.add(n),this.others.set(e,n),n;const i=new ee(.8,1.8,.8),s=new J({color:t||this.color,emissive:0,roughness:.7}),o=new H(i,s);return o.position.y=1,o.userData={gameId:e,gameName:"Player"},this.scene.add(o),this.others.set(e,o),o}removeRemote(e){const t=this.others.get(e);if(t){if(t.userData&&t.userData.label&&t.userData.label.parentNode)try{t.userData.label.parentNode.removeChild(t.userData.label)}catch{}try{this.scene.remove(t)}catch{}this.others.delete(e)}}clonePlayerAvatar(e=null){if(!this.player||!this.player.mesh)return null;try{const t=this.player.mesh.clone(!0),n={leftArm:null,rightArm:null,leftLeg:null,rightLeg:null};return t.traverse(i=>{if(i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.material&&i.material.clone&&(i.material=i.material.clone()),i.geometry&&i.geometry.clone&&(i.geometry=i.geometry.clone()),e&&i.material&&!Array.isArray(i.material))){const s=i.userData&&i.userData.gameName?i.userData.gameName.toLowerCase():"";(s.includes("body")||s.includes("torso")||s.includes("shirt")||s.includes("clothes"))&&(i.material=i.material.clone(),i.material.color=new be(e))}i.userData&&(i.userData={...i.userData}),i.name==="leftArmPivot"?n.leftArm=i:i.name==="rightArmPivot"?n.rightArm=i:i.name==="leftLegPivot"?n.leftLeg=i:i.name==="rightLegPivot"&&(n.rightLeg=i)}),t.userData={...t.userData||{},pivots:n},t}catch(t){return console.warn("Failed to clone player avatar:",t),null}}applyRemoteAnimation(e,t){var i,s,o,a;if(!t||!e||!e.userData)return;const n=e.userData.pivots||{};try{n.leftArm&&typeof((i=t==null?void 0:t.arms)==null?void 0:i.leftX)=="number"&&(n.leftArm.rotation.x=t.arms.leftX),n.rightArm&&typeof((s=t==null?void 0:t.arms)==null?void 0:s.rightX)=="number"&&(n.rightArm.rotation.x=t.arms.rightX),n.leftLeg&&typeof((o=t==null?void 0:t.legs)==null?void 0:o.leftX)=="number"&&(n.leftLeg.rotation.x=t.legs.leftX),n.rightLeg&&typeof((a=t==null?void 0:t.legs)==null?void 0:a.rightX)=="number"&&(n.rightLeg.rotation.x=t.legs.rightX)}catch{}}update(e){var c,h,u;if(!this.socket||this.socket.readyState!==WebSocket.OPEN||(this.lastSend+=e,this.heartbeatTimer+=e,this.lastSend<this.sendInterval)||(this.lastSend=0,!this.player||!this.player.mesh))return;const t=this.player.mesh.position,n={arms:{leftX:this.player.leftArmPivot?this.player.leftArmPivot.rotation.x:0,rightX:this.player.rightArmPivot?this.player.rightArmPivot.rotation.x:0},legs:{leftX:this.player.leftLegPivot?this.player.leftLegPivot.rotation.x:0,rightX:this.player.rightLegPivot?this.player.rightLegPivot.rotation.x:0}},i={type:"state",pos:{x:t.x,y:t.y,z:t.z},nick:this.nick,color:this.color,anim:n};let s=!1;this.lastSentPos?t.distanceTo?s=t.distanceTo(new R(this.lastSentPos.x,this.lastSentPos.y,this.lastSentPos.z))>.015:s=Math.abs(t.x-(((c=this.lastSentPos)==null?void 0:c.x)||0))>.015||Math.abs(t.y-(((h=this.lastSentPos)==null?void 0:h.y)||0))>.015||Math.abs(t.z-(((u=this.lastSentPos)==null?void 0:u.z)||0))>.015:s=!0;const o=`${n.arms.leftX.toFixed(3)},${n.arms.rightX.toFixed(3)},${n.legs.leftX.toFixed(3)},${n.legs.rightX.toFixed(3)}`,a=this.lastAnimSig!==o,l=this.heartbeatTimer>=5;if(s||a||l){try{this.socket.send(JSON.stringify(i))}catch{}this.lastSentPos={x:t.x,y:t.y,z:t.z},this.lastAnimSig=o,l&&(this.heartbeatTimer=0)}}dispose(){if(this.socket)try{this.socket.close()}catch{}this.others.forEach(e=>{try{this.scene.remove(e)}catch{}}),this.others.clear()}updateLabel(e,t){if(e.userData&&e.userData.label)try{e.userData.label.style.display="none"}catch{}e.userData&&(e.userData.nick=t||"Player")}sendHit(e,t){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!e||typeof t!="number")return;const n={type:"hit",targetId:e,amount:t};try{this.socket.send(JSON.stringify(n))}catch{}}getPeerCount(){return 1+this.others.size}sendJoin(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN))try{this.socket.send(JSON.stringify({type:"join",room:this.roomCode,nick:this.nick,color:this.color}))}catch{}}sendStart(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN))try{this.socket.send(JSON.stringify({type:"start"}))}catch{}}}function lm({maxLines:r=400,autoShow:e=!1}={}){const t=[],n={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)},i=document.createElement("div");i.id="debug-overlay",i.className="debug-overlay hidden";const s=document.createElement("div");s.className="debug-overlay-header",s.innerHTML="<strong>DEBUG</strong>";const o=document.createElement("div");o.className="debug-overlay-actions";const a=document.createElement("button");a.textContent="Clear";const l=document.createElement("button");l.textContent="Close",o.appendChild(a),o.appendChild(l),s.appendChild(o);const c=document.createElement("div");c.className="debug-overlay-list",i.appendChild(s),i.appendChild(c),document.body.appendChild(i),s.style.cursor="move";let h=!1,u=0,d=0;function p(C){if(!h)return;const T=Math.max(0,Math.min(window.innerWidth-i.offsetWidth,C.clientX-u)),A=Math.max(0,Math.min(window.innerHeight-i.offsetHeight,C.clientY-d));i.style.left=T+"px",i.style.top=A+"px",i.style.right="auto"}function g(C){h=!1,window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g);try{C&&C.pointerId&&i.releasePointerCapture&&i.releasePointerCapture(C.pointerId)}catch{}}s.addEventListener("pointerdown",C=>{try{const T=i.getBoundingClientRect();i.style.left=T.left+"px",i.style.top=T.top+"px",i.style.position="fixed",i.style.transform="none",i.style.right="auto",u=C.clientX-T.left,d=C.clientY-T.top,h=!0,window.addEventListener("pointermove",p),window.addEventListener("pointerup",g);try{i.setPointerCapture&&i.setPointerCapture(C.pointerId)}catch{}}catch{}},{passive:!1});function _(){c.innerHTML="";const C=Math.max(0,t.length-r);for(let T=C;T<t.length;T++){const A=document.createElement("div");A.className="debug-line debug-"+t[T].level;const I=new Date(t[T].ts).toLocaleTimeString();A.textContent=`[${I}] ${t[T].level.toUpperCase()}: ${t[T].msg}`,c.appendChild(A)}c.scrollTop=c.scrollHeight}function m(C,T){try{const A=T.map(I=>{try{return typeof I=="string"?I:JSON.stringify(I)}catch{return String(I)}}).join(" ");t.push({level:C,msg:A,ts:Date.now()}),t.length>r*2&&t.splice(0,t.length-r*2),_()}catch{}}console.log=function(...C){n.log(...C),m("log",C)},console.info=function(...C){n.info(...C),m("info",C)},console.warn=function(...C){n.warn(...C),m("warn",C)},console.error=function(...C){n.error(...C),m("error",C)};function f(C,T,A,I,x){typeof C=="string"?m("error",[C+" "+(T||"")+":"+(A||"?")]):C&&C.message&&m("error",[C.message,C.error||x])}function y(C){try{m("error",["UnhandledRejection",C&&C.reason?C.reason:C])}catch{}}window.addEventListener("error",f),window.addEventListener("unhandledrejection",y),a.addEventListener("click",()=>{t.length=0,_()}),l.addEventListener("click",()=>S());function v(){i.classList.remove("hidden")}function S(){i.classList.add("hidden")}return e&&v(),{show:v,hide:S,destroy(){console.log=n.log,console.info=n.info,console.warn=n.warn,console.error=n.error,window.removeEventListener("error",f),window.removeEventListener("unhandledrejection",y);try{i.remove()}catch{}},logs:t}}const ti=(()=>{try{return typeof navigator>"u"?!1:/Mobi|Android|iPhone|iPad|Tablet|Mobile/i.test(navigator.userAgent)||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}catch{return!1}})();window.addEventListener("unhandledrejection",r=>{try{const e=r.reason,t=e&&e.message?e.message:String(e);if(t&&t.includes("If you see this error we have a bug")){console.warn("Suppressed Chromium UnknownError:",t),r.preventDefault&&r.preventDefault();return}}catch{}});class Cr{constructor(){this.scene=new Mp,this.scene.background=new be(8900331),this.scene.fog=new Sr(8900331,20,100),this.renderer=new Wa({antialias:!0});const e=ti?1:1.5;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tl,document.getElementById("game-container").appendChild(this.renderer.domElement),this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0;const t=new Rp(16777215,.6);this.scene.add(t);const n=new Cp(16777215,.8);n.position.set(50,100,50),n.castShadow=!0,n.shadow.camera.left=-100,n.shadow.camera.right=100,n.shadow.camera.top=100,n.shadow.camera.bottom=-100,n.shadow.camera.near=.1,n.shadow.camera.far=160,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,this.scene.add(n),this.camera=new Nt(75,window.innerWidth/window.innerHeight,.1,1e3),this.clock=new Pp,this._pickRaycaster=new Kt,this._objectClickHandler=null,this._objectClickTarget=null,this._longPressTimer=null,this.hotkeyModalVisible=!1,this.isPaused=!1,this.pauseMenu=document.getElementById("pause-menu"),this.bgAudio=null,this.bgMusicVolume=.5,this._endSequenceAudio=null,this._prevBgVolume=null,document.addEventListener("keydown",i=>{if(i.code==="Escape"&&this.togglePause(),this.player&&this.player.gameMode==="studio")if(i.code==="KeyL")try{this.spawnStudioDrops()}catch(s){console.warn("Studio drop failed:",s)}else i.code==="KeyH"&&this.toggleHotkeyModal(!this.hotkeyModalVisible)}),this.setupMenu(),this.setupLongPressMenu(),document.addEventListener("pointerlockerror",i=>{i.preventDefault&&i.preventDefault(),console.warn("Pointer lock request failed or was cancelled.")})}spawnStudioDrops(){if(!(!this.itemManager||!this.player||this.player.gameMode!=="studio"))try{for(let e=0;e<3;e++)this.itemManager.spawnMatrixDropNearPlayer()}catch(e){console.warn("spawnStudioDrops error:",e)}}toggleHotkeyModal(e){const t=document.getElementById("hotkey-modal");t&&(t.classList.toggle("hidden",!e),t.setAttribute("aria-hidden",e?"false":"true"),this.hotkeyModalVisible=e)}toggleTouchLookArea(e){try{if(!this.touchControls)return;e?this.touchControls.lookArea?this.touchControls.lookArea.style.display="":this.touchControls.rebuildLookArea&&this.touchControls.rebuildLookArea():this.touchControls.destroyLookArea?this.touchControls.destroyLookArea():this.touchControls.lookArea&&(this.touchControls.lookArea.style.display="none")}catch{}}setHotbarVisible(e){const t=document.getElementById("hotbar");t&&(t.style.display=e?"flex":"none")}updateDebugToggleVisibility(e){const t=document.getElementById("debug-toggle-btn");if(t&&(t.classList.toggle("hidden",!e),!e&&window.debugOverlay&&typeof window.debugOverlay.hide=="function")){try{window.debugOverlay.hide()}catch{}try{localStorage.removeItem("showDebugOverlay")}catch{}}}assignMultiplayerSpawn(){if(!this.player||!this.world)return;const e=this.world&&typeof this.world.halfMapSize=="number"?this.world.halfMapSize-5:100;let t=null;for(let n=0;n<12;n++){const i=(Math.random()*2-1)*e,s=(Math.random()*2-1)*e;let o=0;if(this.world&&typeof this.world.getHeightAt=="function"&&(o=this.world.getHeightAt(i,s)),!this.multiplayer||this.multiplayer.others.size===0||Array.from(this.multiplayer.others.values()).every(l=>{if(!l||!l.position)return!0;const c=l.position.x-i,h=l.position.z-s;return Math.sqrt(c*c+h*h)>15})){t={x:i,y:o,z:s};break}}t||(t={x:0,y:0,z:0}),this.player.mesh.position.set(t.x,t.y,t.z),this.player.controls&&this.player.controls.getObject&&this.player.controls.getObject().position.set(t.x,t.y+1.6,t.z),this.player.camera&&this.player.camera.position.set(t.x,t.y+1.6,t.z)}setupMultiplayerLobbyUI(){const e=document.getElementById("mp-lobby"),t=document.getElementById("mp-start-btn"),n=document.getElementById("mp-lobby-status");if(!e||!t||!n)return;e.classList.remove("hidden");const i=this.multiplayer&&this.multiplayer.roomCode?this.multiplayer.roomCode:"PUBLIC";n.innerText=`Waiting in lobby (Room: ${i})`,t.classList.toggle("hidden",!(this.multiplayer&&this.multiplayer.isHost)),t.onclick=()=>{this.multiplayer&&this.multiplayer.isHost&&(this.beginLobbyCountdown(10),this.multiplayer.sendStart())},this.lobbyCountdown=0,this.updateLobbyUI(this.multiplayer?this.multiplayer.isHost:!1)}updateLobbyUI(e){const t=document.getElementById("mp-start-btn");t&&t.classList.toggle("hidden",!e)}beginLobbyCountdown(e=10){this.matchPhase="countdown",this.lobbyCountdown=e;const t=document.getElementById("mp-lobby"),n=document.getElementById("mp-lobby-countdown");t&&t.classList.remove("hidden"),n&&(n.innerText=`Starting in ${Math.ceil(this.lobbyCountdown)}...`)}startMultiplayerMatch(){this.matchPhase="live",this.refreshMultiplayerTargets();const e=document.getElementById("mp-lobby");e&&e.classList.add("hidden"),this.lobbyCountdown=0}setupMenu(){const e=document.getElementById("main-menu"),t=document.getElementById("play-btn"),n=document.getElementById("setting-difficulty"),i=document.getElementById("setting-enemies"),s=document.getElementById("setting-storm"),o=document.getElementById("setting-storm-enabled"),a=document.getElementById("setting-map-size"),l=document.getElementById("map-size-val"),c=document.getElementById("setting-debug"),h=document.getElementById("setting-minimap"),u=document.getElementById("setting-music-volume"),d=document.getElementById("setting-music-volume-val"),p=document.getElementById("setting-camera"),g=document.getElementById("setting-touch-controls"),_=document.getElementById("setting-fullscreen"),m=document.getElementById("setting-game-mode"),f=document.getElementById("quit-btn"),y=document.getElementById("float-btn"),v=document.getElementById("setting-openai-key"),S=document.getElementById("setting-groq-key"),C=document.getElementById("setting-nvidia-key"),T=document.getElementById("setting-mp-server"),A=document.getElementById("setting-mp-room"),I=document.getElementById("mp-room-generate"),x=document.getElementById("setting-mp-nickname"),E=document.getElementById("setting-mp-color"),F=document.getElementById("setting-mp-zombies"),G=document.getElementById("hotkey-hint"),q=document.getElementById("hotkey-modal"),L=document.getElementById("hotkey-modal-close"),U=document.getElementById("enemy-count-val"),W=document.getElementById("storm-time-val"),Y=(B,N)=>{if(!B||!N)return;const $=()=>{N.innerText=B.value};B.addEventListener("input",$),B.addEventListener("change",$),$()},j=localStorage.getItem("voxel-firecraft-settings");if(j){const B=JSON.parse(j);if(n.value=B.difficulty,i.value=B.enemyCount,s.value=B.stormTime,U.innerText=B.enemyCount,W.innerText=B.stormTime,o&&(o.checked=B.stormEnabled!==!1),a&&l){const N=B.mapSize||ms;a.value=N,l.innerText=N}if(B.debugMode&&(c.checked=!0),h&&(h.checked=B.showMinimap!==!1),_&&(_.checked=!!B.fullscreen),B.musicVolume!==void 0&&u&&d){const N=parseInt(B.musicVolume,10);u.value=N,d.innerText=N,this.bgMusicVolume=N/100}B.cameraMode&&(p.value=B.cameraMode),B.useTouchControls!==void 0&&g&&(g.checked=!!B.useTouchControls),B.gameMode&&m&&(m.value=B.gameMode),v&&(v.value=B.openaiKey||""),S&&(S.value=B.groqKey||""),C&&(C.value=B.nvidiaKey||""),T&&(T.value=B.mpServer||""),A&&(A.value=B.mpRoom||""),x&&(x.value=B.mpNick||""),E&&(E.value=B.mpColor||"#29b6f6"),F&&(F.checked=B.mpZombies!==!1)}Y(i,U),Y(s,W),Y(a,l),t.onclick=()=>{const B={difficulty:n.value,enemyCount:parseInt(i.value),stormTime:parseInt(s.value),stormEnabled:o?o.checked:!0,mapSize:a?parseInt(a.value):ms,debugMode:c.checked,showMinimap:h?h.checked:!0,musicVolume:u?parseInt(u.value):Math.round(this.bgMusicVolume*100),musicEnabled:document.getElementById("setting-music-enabled")?document.getElementById("setting-music-enabled").checked:!0,cameraMode:p.value,useTouchControls:g?g.checked:!1,fullscreen:_?_.checked:!1,gameMode:m?m.value:"survival",openaiKey:v?v.value:"",groqKey:S?S.value:"",nvidiaKey:C?C.value:"",mpServer:T?T.value:"",mpRoom:A?A.value:"",mpNick:x?x.value:"",mpColor:E?E.value:"#29b6f6",mpZombies:F?F.checked:!0};if(localStorage.setItem("voxel-firecraft-settings",JSON.stringify(B)),this.updateDebugToggleVisibility(B.debugMode),e.style.display="none",B.musicEnabled!==!1?this.playBackgroundMusic():this.stopBackgroundMusic(),this.requestFullscreenIfNeeded(B.fullscreen),this.player&&this.world&&this.enemyManager){if(this.isPaused=!1,this.clock.getDelta(),t.innerText="PLAY GAME",this.player)try{this.player.lockControls()}catch{}if(this.hud&&(this.hud.settings=B),this.world){this.world.stormEnabled=B.stormEnabled!==!1;const N=this.world.stormEnabled&&this.world.gameMode!=="matrix"&&this.world.gameMode!=="studio"&&this.world.gameMode!=="matrix-ai";this.world.stormMesh?this.world.stormMesh.visible=N:N&&typeof this.world.createStormVisuals=="function"&&this.world.createStormVisuals()}this.setHotbarVisible(!0)}else t.innerText="PLAY GAME",this.startGame(B);if(G){const N=B&&B.gameMode==="studio";G.classList.toggle("hidden",!N)}},f&&(f.onclick=()=>{try{localStorage.removeItem("voxel-firecraft-settings")}catch{}this.multiplayer&&typeof this.multiplayer.dispose=="function"&&this.multiplayer.dispose(),location.reload()}),y&&y.classList.add("hidden"),I&&A&&(I.onclick=()=>{const B=Math.random().toString(36).substr(2,5).toUpperCase();A.value=B;try{const N=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");N.mpRoom=B,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(N))}catch{}}),G&&(G.onclick=()=>this.toggleHotkeyModal(!0)),L&&(L.onclick=()=>this.toggleHotkeyModal(!1)),q&&q.addEventListener("click",B=>{B.target===q&&this.toggleHotkeyModal(!1)}),u&&(u.oninput=()=>{const B=parseInt(u.value,10);if(d&&(d.innerText=B),this.bgMusicVolume=B/100,this.bgAudio)try{this.bgAudio.volume=this.bgMusicVolume}catch{}});const K=document.getElementById("setting-music-enabled");K&&(K.onchange=()=>{K.checked?this.playBackgroundMusic():this.stopBackgroundMusic()}),g&&(g.onchange=()=>{try{const B=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");B.useTouchControls=g.checked,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(B))}catch{}}),this.setHotbarVisible(!1);const Z=document.querySelectorAll(".tab-btn"),se=document.querySelectorAll(".tab-panel");Z.forEach(B=>{B.addEventListener("click",()=>{const N=B.getAttribute("data-tab");Z.forEach($=>$.classList.remove("active")),B.classList.add("active"),se.forEach($=>{$.id===N?$.classList.remove("hidden"):$.classList.add("hidden")})})})}startGame(e){this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0;const t={...e};this.multiplayerEnemyBaseCount=t.enemyCount||0,(t.gameMode==="matrix"||t.gameMode==="studio")&&(t.enemyCount=0,t.skipLoot=!0),t.gameMode==="multiplayer"&&(t.skipLoot=!0,t.stormEnabled=!1,e.mpZombies===!1&&(t.enemyCount=0)),this.player=new Zp(this.camera,this.scene,null,t),t.gameMode==="multiplayer"?this.matchPhase="lobby":this.matchPhase="live",this.itemManager=new rm(this.scene,this.player,t),this.world=new Np(this.scene,this.itemManager,t),this.player.worldObjects=this.world.objects,this.player.world=this.world,this.itemManager&&typeof this.itemManager.setWorld=="function"&&this.itemManager.setWorld(this.world);const n=document.getElementById("mp-lobby"),i=document.getElementById("mp-start-btn");if(n&&n.classList.add("hidden"),i&&i.classList.add("hidden"),t.gameMode==="matrix"&&this.itemManager&&typeof this.itemManager.spawnMatrixLoadout=="function"&&this.itemManager.spawnMatrixLoadout(this.player.position.x,this.player.position.z),t.gameMode==="multiplayer"&&this.assignMultiplayerSpawn(),t.gameMode==="multiplayer"?(this.multiplayer=new am({player:this.player,scene:this.scene,url:e.mpServer,nick:e.mpNick||"Player",color:e.mpColor||"#29b6f6",roomCode:e.mpRoom||"PUBLIC"}),e.mpServer||alert("Multiplayer server URL not set. Please configure it in the Multiplayer tab."),this.player&&typeof this.player.setMultiplayerClient=="function"&&this.player.setMultiplayerClient(this.multiplayer),this.multiplayer&&(this.multiplayer.onPeersChanged=()=>this.refreshMultiplayerTargets(),this.multiplayer.roomCode=e.mpRoom||"PUBLIC",this.multiplayer.onHostChanged=l=>this.updateLobbyUI(l),this.multiplayer.onCountdown=l=>this.beginLobbyCountdown(l),this.multiplayer.onMatchStart=()=>this.startMultiplayerMatch(),this.updateLobbyUI(this.multiplayer.isHost))):this.multiplayer=null,t.gameMode==="matrix-ai"){t.enemyCount=0,t.skipLoot=!0;const l=document.getElementById("ai-panel");l&&l.classList.remove("hidden")}else{const l=document.getElementById("ai-panel");l&&l.classList.add("hidden")}this.hud=new em(this.player,this.world,e),this.hud&&typeof this.hud.setRenderer=="function"&&this.hud.setRenderer(this.renderer),this.hud&&typeof this.hud.setMultiplayer=="function"&&this.hud.setMultiplayer(this.multiplayer),this.enemyManager=new im(this.scene,this.player,this.world,t),t.gameMode==="multiplayer"&&(this.multiplayerEnemyBaseCount=t.enemyCount||0,typeof this.enemyManager.setTargetCount=="function"&&this.enemyManager.setTargetCount(this.multiplayerEnemyBaseCount)),this.player.setEnemyManager(this.enemyManager),t.gameMode==="multiplayer"&&(this.refreshMultiplayerTargets(),this.setupMultiplayerLobbyUI()),this.setupObjectInspector(),this.updateDebugToggleVisibility(!!e.debugMode),this.setHotbarVisible(!0);const s=document.getElementById("float-btn");s&&(t.gameMode==="studio"?(s.classList.remove("hidden"),s.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF",s.onclick=()=>{if(this.player.isFloating=!this.player.isFloating,!this.player.isFloating){const l=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=l,this.player.velocity.y=0}s.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF"}):s.classList.add("hidden"));const o=document.getElementById("storm-timer");if(o){const l=t.stormEnabled===!1||t.gameMode==="studio"||t.gameMode==="matrix"||t.gameMode==="matrix-ai"||t.gameMode==="multiplayer";o.classList.toggle("hidden",l)}window.addEventListener("resize",()=>this.onWindowResize(),!1),this.renderer.domElement.addEventListener("pointerdown",()=>{if(!ti){try{const l=document.getElementById("main-menu")&&document.getElementById("main-menu").style.display!=="none",c=this.player&&this.player.gameMode==="studio";if(this.isPaused||l||c)return;this.player&&!this.player.isDead&&this.player.lockControls()}catch(l){console.warn("Pointer lock request skipped or failed:",l)}this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic()}}),this.setupPauseMenu();try{const l=typeof navigator<"u"&&/Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent),c=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;(!!e.useTouchControls||l||c)&&(this.touchControls=new om(this.player))}catch{}if(this.setupStudioPalette(t),this.refreshStudioPaletteVisibility(),this.setupAiPanel(),!ti&&this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch(l){console.warn("Pointer lock on start skipped/failed:",l)}this.animate()}setupLongPressMenu(){if(!ti)return;const e=document.getElementById("ui-layer")||document.body;if(!e)return;const t=i=>{try{if(i.touches&&i.touches.length>1)return;this._longPressTimer&&clearTimeout(this._longPressTimer),this._longPressTimer=setTimeout(()=>{this._longPressTimer=null,this.showPauseMenu()},800)}catch{}},n=()=>{this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)};e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n),e.addEventListener("touchmove",n)}setupAiPanel(){const e=document.getElementById("ai-panel"),t=document.getElementById("ai-send"),n=document.getElementById("ai-prompt"),i=document.getElementById("ai-log");if(!e||!t||!n||!i)return;const s=(o,a="")=>{const l=document.createElement("div");l.textContent=o,a&&(l.className=a),i.appendChild(l),i.scrollTop=i.scrollHeight};t.onclick=()=>{const o=n.value.trim();o&&(s(`You: ${o}`,"ai-user"),s("AI: (stub) Interpreter not wired. Imagine this runs your Three.js code.","ai-bot"),n.value="")}}refreshStudioPaletteVisibility(){const e=document.getElementById("studio-palette");if(!e)return;const t=this.player&&this.player.gameMode==="studio"&&!this.isPaused;e.classList.toggle("hidden",!t)}refreshMultiplayerTargets(){if(!this.player||this.player.gameMode!=="multiplayer"||!this.enemyManager)return;const e=typeof this.multiplayerEnemyBaseCount=="number"?this.multiplayerEnemyBaseCount:this.enemyManager.enemies.length;this.matchPhase==="live"&&typeof this.enemyManager.setTargetCount=="function"?this.enemyManager.setTargetCount(e):this.matchPhase!=="live"&&typeof this.enemyManager.setTargetCount=="function"&&this.enemyManager.setTargetCount(0)}setupStudioPalette(e){const t=document.getElementById("studio-palette");if(!t)return;const n=e&&(e.gameMode==="studio"||e.gameMode==="matrix-ai");if(t.classList.toggle("hidden",!n),!n)return;this.initStudioPaletteDrag(t),t.querySelectorAll("button").forEach(s=>{if(s._boundStudio)return;s._boundStudio=!0;const o=l=>{if(l&&l.stopPropagation&&l.stopPropagation(),!this.player||!this.world)return;const c=s.getAttribute("data-action");if(c==="resume"){if(this.isPaused=!1,this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch{}const g=document.getElementById("main-menu");g&&(g.style.display="none"),this.setHotbarVisible(!0);try{t.classList.add("hidden")}catch{}if(this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0),this.player&&this.player.studioSelectionHelper){try{this.player.scene.remove(this.player.studioSelectionHelper)}catch{}this.player.studioSelectionHelper=null}this.refreshStudioPaletteVisibility(),this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic();return}else if(c==="float-toggle"){if(this.player&&this.player.gameMode==="studio"){this.player.isFloating=!this.player.isFloating;const g=this.player.isFloating?"FLOAT ON":"FLOAT OFF";if(s.innerText=g,!this.player.isFloating){const _=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=_,this.player.velocity.y=0}}return}else if(c==="spawn-npc"){this.enemyManager&&typeof this.enemyManager.spawnEnemy=="function"&&this.enemyManager.spawnEnemy(!0);return}else if(c==="drops"){this.spawnStudioDrops();return}else if(c==="menu"){this.showPauseMenu();return}else if(c==="quit"){try{localStorage.removeItem("voxel-firecraft-settings")}catch{}location.reload();return}const h=s.getAttribute("data-prefab"),u=s.getAttribute("data-vehicle-type"),d=s.getAttribute("data-tree-type"),p=s.getAttribute("data-submenu");if(p){const g=document.getElementById(p);g&&g.classList.toggle("hidden");return}if(this.studioSelectedPrefab=h,this.studioSelectedOptions=u?{variant:u}:d?{variant:d}:{},this.toggleTouchLookArea(!1),p){const g=document.getElementById(p);g&&g.classList.add("hidden")}},a=l=>{l&&l.preventDefault&&l.preventDefault(),o(l)};s.addEventListener("pointerdown",a),s.addEventListener("click",l=>{l&&l.preventDefault&&l.preventDefault(),o(l)})})}setupObjectInspector(){const e=this.renderer?this.renderer.domElement:null;if(e){if(this._objectClickHandler&&this._objectClickTarget)try{this._objectClickTarget.removeEventListener("click",this._objectClickHandler),this._objectClickTarget.removeEventListener("pointerdown",this._objectClickHandler)}catch{}this._objectClickTarget=e,this._objectClickHandler=t=>{if(!this.player||!this.hud)return;const n=this.player.gameMode||"survival";if(n==="matrix")return;if(n==="studio"&&this.studioSelectedPrefab){const d=e.getBoundingClientRect(),p=(t.clientX-d.left)/d.width*2-1,g=-((t.clientY-d.top)/d.height*2-1),_=new Kt;_.setFromCamera(new Me(p,g),this.camera);const m=_.intersectObjects(this.world.objects,!0);let f=null;for(const y of m)if(y.object&&y.object.userData&&y.object.userData.gameName==="Ground"){f=y;break}if(!f){const y=new Kt;y.setFromCamera(new Me(0,0),this.camera);const v=y.intersectObjects(this.world.objects,!0);for(const S of v)if(S.object&&S.object.userData&&S.object.userData.gameName==="Ground"){f=S;break}}if(f&&typeof this.world.spawnPrefab=="function"){const y=this.studioSelectedOptions||{};this.world.spawnPrefab(this.studioSelectedPrefab,f.point.x,f.point.z,y)}this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0);return}let i=0,s=0;if(this.player.controls&&this.player.controls.isLocked)i=0,s=0;else{const d=e.getBoundingClientRect();i=(t.clientX-d.left)/d.width*2-1,s=-((t.clientY-d.top)/d.height*2-1)}this._pickRaycaster.setFromCamera(new Me(i,s),this.camera);const o=[];if(this.world&&Array.isArray(this.world.objects)&&o.push(...this.world.objects),this.itemManager&&Array.isArray(this.itemManager.items)&&o.push(...this.itemManager.items),this.enemyManager&&Array.isArray(this.enemyManager.enemies)&&this.enemyManager.enemies.forEach(d=>{d&&d.mesh&&o.push(d.mesh)}),o.length===0)return;const a=this._pickRaycaster.intersectObjects(o,!0);if(!a.length)return;let l=a[0].object,c=null;for(;l;){if(l.userData&&(l.userData.gameId||l.userData.gameid)&&l.userData.gameName){c=l.userData;break}l=l.parent}if(!c)return;const h=c.gameName||"Object",u=c.gameId||c.gameid||"---";typeof this.hud.showSelectionInfo=="function"&&this.hud.showSelectionInfo(h,u)},e.addEventListener("click",this._objectClickHandler),e.addEventListener("pointerdown",this._objectClickHandler)}}initStudioPaletteDrag(e){if(!e||e._dragInit)return;e._dragInit=!0;const t=e.querySelector(".palette-title")||e;let n=!1,i=0,s=0,o=0,a=0,l=null;e.style.touchAction="none";const c=u=>{if(!n){const _=Math.abs(u.clientX-o),m=Math.abs(u.clientY-a);if(_<3&&m<3)return;n=!0,l&&(e.style.right="auto",e.style.bottom="auto",e.style.position="fixed",e.style.width=`${l.width}px`,e.style.minWidth=`${l.width}px`,e.style.maxWidth=`${l.width}px`,e.style.left=`${l.left}px`,e.style.top=`${l.top}px`)}const d=e.getBoundingClientRect(),p=Math.max(0,Math.min(window.innerWidth-d.width,u.clientX-i)),g=Math.max(0,Math.min(window.innerHeight-d.height,u.clientY-s));e.style.left=`${p}px`,e.style.top=`${g}px`},h=()=>{n=!1,t.releasePointerCapture&&t.releasePointerCapture(t._dragPointerId),document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",h)};t.addEventListener("pointerdown",u=>{try{u.preventDefault()}catch{}const d=e.getBoundingClientRect();l=d,i=u.clientX-d.left,s=u.clientY-d.top,o=u.clientX,a=u.clientY,n=!1,t._dragPointerId=u.pointerId;try{t.setPointerCapture(u.pointerId)}catch{}document.addEventListener("pointermove",c),document.addEventListener("pointerup",h)})}togglePause(){if(this.player){if(this.player.controls&&this.player.controls.isLocked){this.showPauseMenu();return}this.isPaused=!this.isPaused,this.isPaused?this.pauseBackgroundMusic():this.playBackgroundMusic()}}setupPauseMenu(){document.addEventListener("keydown",t=>{t.code==="Escape"&&this.player&&!this.player.isDead&&(t.preventDefault(),this.showPauseMenu())});const e=document.getElementById("pause-menu");e&&e.remove()}showPauseMenu(){this.isPaused=!0,this.player.controls&&this.player.controls.isLocked&&this.player.controls.unlock(),this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps(),this.pauseBackgroundMusic();const e=document.getElementById("main-menu");if(e){e.style.display="flex";const t=document.getElementById("play-btn");t&&this.player&&(t.innerText="RESUME GAME")}if(this.setHotbarVisible(!1),this.player&&this.player.gameMode==="studio"){const t=document.getElementById("studio-palette");t&&t.classList.remove("hidden")}}playBackgroundMusic(){try{this.bgAudio||(this.bgAudio=new Audio(Up),this.bgAudio.loop=!0,this.bgAudio.volume=this.bgMusicVolume,this.bgAudio.preload="auto");const e=this.bgAudio.play();e&&typeof e.then=="function"&&e.catch(()=>{})}catch(e){console.warn("Could not play background music:",e)}}pauseBackgroundMusic(){if(this.bgAudio&&!this.bgAudio.paused)try{this.bgAudio.pause()}catch{}}stopBackgroundMusic(){if(this.bgAudio)try{this.bgAudio.pause(),this.bgAudio.currentTime=0}catch{}}requestFullscreenIfNeeded(e){if(!e)return;const t=document;if(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)return;const i=document.documentElement||document.body,s=i.requestFullscreen||i.webkitRequestFullscreen||i.mozRequestFullScreen||i.msRequestFullscreen;s?s.call(i).catch(o=>{console.warn("Fullscreen request failed:",o),ti&&alert("Fullscreen may not be supported on this mobile device.")}):ti&&alert("Fullscreen is not available on this mobile device.")}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());try{const e=this.clock.getDelta(),t=Math.min(e,.1),n=!!(this.touchControls&&this.touchControls.enabled),i=!!(this.player&&this.player.controls&&this.player.controls.isLocked),s=!!(this.player&&this.player.gameMode==="studio");if(!this.isPaused&&this.player&&(i||n||s)){try{this.player.update(t)}catch(o){console.error("Error in player.update:",o)}try{const o=this.world.update(t,this.player.position);!(this.player&&this.player.gameMode==="studio")&&o&&o.inStorm?this.player.takeDamage(1*t):this.player&&typeof this.player.clearHurtQueue=="function"&&this.player.clearHurtQueue()}catch(o){console.error("Error in world.update:",o)}try{this.enemyManager.update(t)}catch(o){console.error("Error in enemyManager.update:",o)}try{this.itemManager.update(t)}catch(o){console.error("Error in itemManager.update:",o)}if(this.player&&this.player.gameMode==="multiplayer"){if(this.matchPhase==="live")this.multiplayerDropTimer+=t,this.multiplayerDropTimer>=60&&(this.multiplayerDropActive=!0),this.multiplayerDropActive&&this.itemManager&&(this.multiplayerDropCooldown-=t,this.multiplayerDropCooldown<=0&&(this.multiplayerDropCooldown=8,typeof this.itemManager.spawnMatrixDropNearPlayer=="function"&&this.itemManager.spawnMatrixDropNearPlayer()));else if(this.matchPhase==="countdown"){this.lobbyCountdown-=t;const o=document.getElementById("mp-lobby-countdown");this.lobbyCountdown<0&&(this.lobbyCountdown=0),o&&(o.innerText=`Starting in ${Math.ceil(this.lobbyCountdown)}...`),this.lobbyCountdown<=0&&this.startMultiplayerMatch()}}try{this.multiplayer&&typeof this.multiplayer.update=="function"&&this.multiplayer.update(t)}catch(o){console.error("Error in multiplayer.update:",o)}try{this.hud.update()}catch(o){console.error("Error in hud.update:",o)}try{this.touchControls&&typeof this.touchControls.update=="function"&&this.touchControls.update()}catch(o){console.error("Error in touchControls.update:",o)}try{if(!(this.player&&(this.player.gameMode==="matrix"||this.player.gameMode==="studio"||this.player.gameMode==="multiplayer"))&&this.enemyManager.enemies.length===0&&!this.player.isDead&&!this.victoryShown){this.victoryShown=!0;try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}this.hud.showVictory(),this.player.controls.unlock()}else this.player&&this.player.gameMode==="multiplayer"&&this.matchPhase==="live"&&!this.player.isDead&&!this.victoryShown&&(this.multiplayer?this.multiplayer.others.size:0)===0&&(this.victoryShown=!0,this.hud.showVictory(),this.player.controls&&this.player.controls.unlock&&this.player.controls.unlock())}catch(o){console.error("Error in victory check:",o)}}this.renderer.render(this.scene,this.camera)}catch(e){try{console.error("Unhandled error in Game.animate:",e,{playerExists:!!this.player,playerWeaponCount:this.player?this.player.weapons?this.player.weapons.length:"no-weapons":"no-player",currentWeaponIndex:this.player?this.player.currentWeaponIndex:"no-player",hudExists:!!this.hud,hudSettings:this.hud?this.hud.settings:null});try{this._logRenderMaterialDiagnostics(e)}catch(t){console.error("Error during render diagnostics:",t)}}catch(t){console.error("Error logging animate failure:",t)}return}}}Cr.prototype.playEndSequence=function(r,e={}){try{if(this._playingEndSequence)return;if(this._playingEndSequence=!0,this.bgAudio)try{this._prevBgVolume=this.bgAudio.volume,this.bgAudio.pause()}catch{this._prevBgVolume=this.bgMusicVolume}if(this._endSequenceAudio){try{this._endSequenceAudio.pause(),this._endSequenceAudio.currentTime=0}catch{}this._endSequenceAudio=null}const t=new Audio(r);t.loop=e.loop||!1,t.volume=e.volume!==void 0?e.volume:1,t.preload="auto",this._endSequenceAudio=t,t.load(),setTimeout(()=>{const n=t.play();n&&typeof n.then=="function"&&n.catch(i=>{console.log("Audio playback blocked, waiting for user interaction:",i);const s=()=>{t.readyState<2&&t.load(),t.play().catch(()=>{}),document.removeEventListener("touchstart",s),document.removeEventListener("click",s)};document.addEventListener("touchstart",s,{once:!0}),document.addEventListener("click",s,{once:!0})})},100),t.addEventListener("ended",()=>{try{this.bgAudio&&this._prevBgVolume!==null&&(this.bgAudio.volume=this._prevBgVolume)}catch{}this._endSequenceAudio=null,this._prevBgVolume=null,this._playingEndSequence=!1})}catch(t){console.warn("playEndSequence error:",t)}};Cr.prototype._logRenderMaterialDiagnostics=function(r){try{const e=[];let t=0;this.scene.traverse(n=>{if(n.isMesh){t++;const i=n.material;if(!i){e.push({uuid:n.uuid,name:n.name||n.userData&&n.userData.gameName||"mesh",issue:"no-material"});return}const s=o=>({type:o.type||o.constructor&&o.constructor.name||"Unknown",isShaderMaterial:!!o.isShaderMaterial,isStandardMaterial:!!o.isMeshStandardMaterial,hasEmissive:o.emissive!==void 0,uniformsKeys:o.uniforms?Object.keys(o.uniforms):null,userData:o.userData||null});Array.isArray(i)?e.push({uuid:n.uuid,name:n.name||n.userData&&n.userData.gameName||"mesh",materials:i.map(s)}):e.push({uuid:n.uuid,name:n.userData&&n.userData.gameName||n.name||"mesh",material:s(i)})}}),console.error("Render diagnostics:",{originalError:r&&r.toString(),totalMeshes:t,sampleProblems:e.slice(0,30),note:"Look for materials missing expected uniforms (shader/standard) or meshes without material."})}catch(e){console.error("Failed collecting render diagnostics:",e)}};window.game=new Cr;(function(){try{const e=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}"),t=e&&e.debugMode||localStorage.getItem("showDebugOverlay")==="true"||!!window.DEBUG_OVERLAY;window.debugOverlay=lm({autoShow:!!t}),window.addEventListener("keydown",n=>{if(n.key==="`"&&window.debugOverlay){const i=document.getElementById("debug-overlay");i&&i.classList.contains("hidden")?window.debugOverlay.show():window.debugOverlay&&window.debugOverlay.hide()}});try{let n=document.getElementById("debug-toggle-btn");n||(n=document.createElement("button"),n.id="debug-toggle-btn",n.title="Debug logs",n.innerText="DBG",document.body.appendChild(n));const i=!0;n.addEventListener("click",s=>{try{const o=document.getElementById("debug-overlay");o&&o.classList.contains("hidden")?(window.debugOverlay&&window.debugOverlay.show(),localStorage.setItem("showDebugOverlay","true")):(window.debugOverlay&&window.debugOverlay.hide(),localStorage.removeItem("showDebugOverlay"))}catch(o){console.warn("debug toggle error",o)}})}catch{}}catch(e){console.warn("debugOverlay init failed",e)}})();window.addEventListener("game-touch-look",r=>{try{const e=r.detail||{dx:0,dy:0},t=.003;if(window.game&&window.game.player)try{if(typeof window.game.player.rotateCamera=="function")window.game.player.rotateCamera(e.dx*t,e.dy*t);else{window.game.player._touchYaw=(window.game.player._touchYaw||0)-e.dx*.01,window.game.player._touchPitch=(window.game.player._touchPitch||0)-e.dy*.01;const i=Math.PI/2-.1;window.game.player._touchPitch=Math.max(-i,Math.min(i,window.game.player._touchPitch))}}catch{}}catch{}});
