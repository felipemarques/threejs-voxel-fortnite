(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gr="160",il=0,Fr=1,nl=2,sl=0,_a=1,rl=2,ii=3,gi=0,Re=1,Ne=2,fi=0,on=1,rr=2,Or=3,kr=4,ol=5,Pi=100,al=101,ll=102,zr=103,Hr=104,cl=200,hl=201,ul=202,dl=203,or=204,ar=205,fl=206,pl=207,ml=208,gl=209,yl=210,_l=211,vl=212,xl=213,Ml=214,Sl=0,wl=1,El=2,as=3,bl=4,Tl=5,Al=6,Cl=7,gs=0,Pl=1,Rl=2,pi=0,Ll=1,Dl=2,Il=3,Ul=4,Bl=5,Nl=6,va=300,ln=301,cn=302,lr=303,cr=304,ys=306,ls=1e3,je=1001,hr=1002,Ee=1003,Gr=1004,Fl=1004,Ts=1005,ke=1006,Ol=1007,bn=1008,mi=1009,kl=1010,zl=1011,yr=1012,xa=1013,ui=1014,di=1015,Tn=1016,Ma=1017,Sa=1018,Li=1020,Hl=1021,qe=1023,Gl=1024,Vl=1025,Di=1026,hn=1027,Wl=1028,wa=1029,Xl=1030,Ea=1031,ba=1033,As=33776,Cs=33777,Ps=33778,Rs=33779,Vr=35840,Wr=35841,Xr=35842,jr=35843,Ta=36196,qr=37492,Yr=37496,Kr=37808,$r=37809,Zr=37810,Jr=37811,Qr=37812,to=37813,eo=37814,io=37815,no=37816,so=37817,ro=37818,oo=37819,ao=37820,lo=37821,Ls=36492,co=36494,ho=36495,jl=36283,uo=36284,fo=36285,po=36286,Aa=3e3,Ii=3001,ql=3200,Yl=3201,_s=0,Kl=1,ze="",_e="srgb",si="srgb-linear",_r="display-p3",vs="display-p3-linear",cs="linear",te="srgb",hs="rec709",us="p3",Fi=7680,mo=519,$l=512,Zl=513,Jl=514,Ca=515,Ql=516,tc=517,ec=518,ic=519,go=35044,yo="300 es",ur=1035,ni=2e3,ds=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _o=1234567;const Sn=Math.PI/180,An=180/Math.PI;function dn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[r&255]+Me[r>>8&255]+Me[r>>16&255]+Me[r>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function Pe(r,t,e){return Math.max(t,Math.min(e,r))}function vr(r,t){return(r%t+t)%t}function nc(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function sc(r,t,e){return r!==t?(e-r)/(t-r):0}function wn(r,t,e){return(1-e)*r+e*t}function rc(r,t,e,i){return wn(r,t,1-Math.exp(-e*i))}function oc(r,t=1){return t-Math.abs(vr(r,t*2)-t)}function ac(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function lc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function cc(r,t){return r+Math.floor(Math.random()*(t-r+1))}function hc(r,t){return r+Math.random()*(t-r)}function uc(r){return r*(.5-Math.random())}function dc(r){r!==void 0&&(_o=r);let t=_o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fc(r){return r*Sn}function pc(r){return r*An}function dr(r){return(r&r-1)===0&&r!==0}function mc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gc(r,t,e,i,n){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),g=s((i-t)/2),f=o((i-t)/2);switch(n){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*f,l*g,a*c);break;case"YXY":r.set(l*g,a*h,l*f,a*c);break;case"ZYZ":r.set(l*f,l*g,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function nn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ae(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ye={DEG2RAD:Sn,RAD2DEG:An,generateUUID:dn,clamp:Pe,euclideanModulo:vr,mapLinear:nc,inverseLerp:sc,lerp:wn,damp:rc,pingpong:oc,smoothstep:ac,smootherstep:lc,randInt:cc,randFloat:hc,randFloatSpread:uc,seededRandom:dc,degToRad:fc,radToDeg:pc,isPowerOfTwo:dr,ceilPowerOfTwo:mc,floorPowerOfTwo:fs,setQuaternionFromProperEuler:gc,normalize:Ae,denormalize:nn};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,n,s,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],g=i[5],f=i[8],y=n[0],p=n[3],m=n[6],_=n[1],v=n[4],x=n[7],T=n[2],b=n[5],C=n[8];return s[0]=o*y+a*_+l*T,s[3]=o*p+a*v+l*b,s[6]=o*m+a*x+l*C,s[1]=c*y+h*_+u*T,s[4]=c*p+h*v+u*b,s[7]=c*m+h*x+u*C,s[2]=d*y+g*_+f*T,s[5]=d*p+g*v+f*b,s[8]=d*m+g*x+f*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,g=c*s-o*l,f=e*u+i*d+n*g;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/f;return t[0]=u*y,t[1]=(n*c-h*i)*y,t[2]=(a*i-n*o)*y,t[3]=d*y,t[4]=(h*e-n*l)*y,t[5]=(n*s-a*e)*y,t[6]=g*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ds.makeScale(t,e)),this}rotate(t){return this.premultiply(Ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Xt;function Pa(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ps(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yc(){const r=ps("canvas");return r.style.display="block",r}const vo={};function En(r){r in vo||(vo[r]=!0,console.warn(r))}const xo=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mo=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Un={[si]:{transfer:cs,primaries:hs,toReference:r=>r,fromReference:r=>r},[_e]:{transfer:te,primaries:hs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[vs]:{transfer:cs,primaries:us,toReference:r=>r.applyMatrix3(Mo),fromReference:r=>r.applyMatrix3(xo)},[_r]:{transfer:te,primaries:us,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Mo),fromReference:r=>r.applyMatrix3(xo).convertLinearToSRGB()}},_c=new Set([si,vs]),Yt={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!_c.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const i=Un[t].toReference,n=Un[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Un[r].primaries},getTransfer:function(r){return r===ze?cs:Un[r].transfer}};function an(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Oi;class Ra{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=ps("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=an(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(an(e[i]/255)*255):e[i]=an(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vc=0;class La{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=dn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Us(n[o].image)):s.push(Us(n[o]))}else s=Us(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Us(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ra.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xc=0;class Le extends Ni{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=je,n=je,s=ke,o=bn,a=qe,l=mi,c=Le.DEFAULT_ANISOTROPY,h=ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=dn(),this.name="",this.source=new La(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ii?_e:ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==va)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case je:t.x=t.x<0?0:1;break;case hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case je:t.y=t.y<0?0:1;break;case hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?Ii:Aa}set encoding(t){En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ii?_e:ze}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=va;Le.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,i=0,n=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],g=l[5],f=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(f-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(f+p)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(g+1)/2,T=(m+1)/2,b=(h+d)/4,C=(u+y)/4,D=(f+p)/4;return v>x&&v>T?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=b/i,s=C/i):x>T?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=b/n,s=D/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=C/s,n=D/s),this.set(i,n,s,e),this}let _=Math.sqrt((p-f)*(p-f)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-f)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+g+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mc extends Ni{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(En("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ii?_e:ze),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Le(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new La(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Mc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Da extends Le{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sc extends Le{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[o+0],g=s[o+1],f=s[o+2],y=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=g,t[e+2]=f,t[e+3]=y;return}if(u!==y||l!==d||c!==g||h!==f){let p=1-a;const m=l*d+c*g+h*f+u*y,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,m*_);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T}const x=a*_;if(l=l*p+d*x,c=c*p+g*x,h=h*p+f*x,u=u*p+y*x,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],g=s[o+2],f=s[o+3];return t[e]=a*f+h*u+l*g-c*d,t[e+1]=l*f+h*d+c*u-a*g,t[e+2]=c*f+h*g+a*d-l*u,t[e+3]=h*f-a*u-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),g=l(n/2),f=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*g*f,this._y=c*g*u-d*h*f,this._z=c*h*f+d*g*u,this._w=c*h*u-d*g*f;break;case"YXZ":this._x=d*h*u+c*g*f,this._y=c*g*u-d*h*f,this._z=c*h*f-d*g*u,this._w=c*h*u+d*g*f;break;case"ZXY":this._x=d*h*u-c*g*f,this._y=c*g*u+d*h*f,this._z=c*h*f+d*g*u,this._w=c*h*u-d*g*f;break;case"ZYX":this._x=d*h*u-c*g*f,this._y=c*g*u+d*h*f,this._z=c*h*f-d*g*u,this._w=c*h*u+d*g*f;break;case"YZX":this._x=d*h*u+c*g*f,this._y=c*g*u+d*h*f,this._z=c*h*f-d*g*u,this._w=c*h*u-d*g*f;break;case"XZY":this._x=d*h*u-c*g*f,this._y=c*g*u-d*h*f,this._z=c*h*f+d*g*u,this._w=c*h*u+d*g*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-n)*g}else if(i>a&&i>u){const g=2*Math.sqrt(1+i-a-u);this._w=(h-l)/g,this._x=.25*g,this._y=(n+o)/g,this._z=(s+c)/g}else if(a>u){const g=2*Math.sqrt(1+a-i-u);this._w=(s-c)/g,this._x=(n+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+u-i-a);this._w=(o-n)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*n+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new P,So=new Pn;class _i{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,He):He.fromBufferAttribute(s,o),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bn.copy(i.boundingBox)),Bn.applyMatrix4(t.matrixWorld),this.union(Bn)}const n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yn),Nn.subVectors(this.max,yn),ki.subVectors(t.a,yn),zi.subVectors(t.b,yn),Hi.subVectors(t.c,yn),oi.subVectors(zi,ki),ai.subVectors(Hi,zi),Si.subVectors(ki,Hi);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Si.z,Si.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Si.z,0,-Si.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Si.y,Si.x,0];return!Ns(e,ki,zi,Hi,Nn)||(e=[1,0,0,0,1,0,0,0,1],!Ns(e,ki,zi,Hi,Nn))?!1:(Fn.crossVectors(oi,ai),e=[Fn.x,Fn.y,Fn.z],Ns(e,ki,zi,Hi,Nn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new P,new P,new P,new P,new P,new P,new P,new P],He=new P,Bn=new _i,ki=new P,zi=new P,Hi=new P,oi=new P,ai=new P,Si=new P,yn=new P,Nn=new P,Fn=new P,wi=new P;function Ns(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){wi.fromArray(r,s);const a=n.x*Math.abs(wi.x)+n.y*Math.abs(wi.y)+n.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wc=new _i,_n=new P,Fs=new P;class Rn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):wc.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_n.subVectors(t,this.center);const e=_n.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(_n,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_n.copy(t.center).add(Fs)),this.expandByPoint(_n.copy(t.center).sub(Fs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new P,Os=new P,On=new P,li=new P,ks=new P,kn=new P,zs=new P;class xs{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Os.copy(t).add(e).multiplyScalar(.5),On.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Os);const s=t.distanceTo(e)*.5,o=-this.direction.dot(On),a=li.dot(this.direction),l=-li.dot(On),c=li.lengthSq(),h=Math.abs(1-o*o);let u,d,g,f;if(h>0)if(u=o*l-a,d=o*a-l,f=s*h,u>=0)if(d>=-f)if(d<=f){const y=1/h;u*=y,d*=y,g=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),g=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),g=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),g=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),g=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),g=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Os).addScaledVector(On,d),g}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const i=Je.dot(this.direction),n=Je.dot(Je)-i*i,s=t.radius*t.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,i,n,s){ks.subVectors(e,t),kn.subVectors(i,t),zs.crossVectors(ks,kn);let o=this.direction.dot(zs),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);const l=a*this.direction.dot(kn.crossVectors(li,kn));if(l<0)return null;const c=a*this.direction.dot(ks.cross(li));if(c<0||l+c>o)return null;const h=-a*li.dot(zs);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,n,s,o,a,l,c,h,u,d,g,f,y,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,u,d,g,f,y,p)}set(t,e,i,n,s,o,a,l,c,h,u,d,g,f,y,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=g,m[7]=f,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,g=o*u,f=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+f*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=f+g*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,g=l*u,f=c*h,y=c*u;e[0]=d+y*a,e[4]=f*a-g,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=g*a-f,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,g=l*u,f=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=f+g*a,e[1]=g+f*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,g=o*u,f=a*h,y=a*u;e[0]=l*h,e[4]=f*c-g,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=g*c-f,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,g=o*c,f=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=f*u+g,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=g*u+f,e[10]=d-y*u}else if(t.order==="XZY"){const d=o*l,g=o*c,f=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=g*u-f,e[2]=f*u-g,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ec,t,bc)}lookAt(t,e,i){const n=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),ci.crossVectors(i,Ie),ci.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),ci.crossVectors(i,Ie)),ci.normalize(),zn.crossVectors(Ie,ci),n[0]=ci.x,n[4]=zn.x,n[8]=Ie.x,n[1]=ci.y,n[5]=zn.y,n[9]=Ie.y,n[2]=ci.z,n[6]=zn.z,n[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],g=i[13],f=i[2],y=i[6],p=i[10],m=i[14],_=i[3],v=i[7],x=i[11],T=i[15],b=n[0],C=n[4],D=n[8],M=n[12],w=n[1],F=n[5],O=n[9],J=n[13],L=n[2],N=n[6],W=n[10],K=n[14],Y=n[3],$=n[7],Z=n[11],tt=n[15];return s[0]=o*b+a*w+l*L+c*Y,s[4]=o*C+a*F+l*N+c*$,s[8]=o*D+a*O+l*W+c*Z,s[12]=o*M+a*J+l*K+c*tt,s[1]=h*b+u*w+d*L+g*Y,s[5]=h*C+u*F+d*N+g*$,s[9]=h*D+u*O+d*W+g*Z,s[13]=h*M+u*J+d*K+g*tt,s[2]=f*b+y*w+p*L+m*Y,s[6]=f*C+y*F+p*N+m*$,s[10]=f*D+y*O+p*W+m*Z,s[14]=f*M+y*J+p*K+m*tt,s[3]=_*b+v*w+x*L+T*Y,s[7]=_*C+v*F+x*N+T*$,s[11]=_*D+v*O+x*W+T*Z,s[15]=_*M+v*J+x*K+T*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],g=t[14],f=t[3],y=t[7],p=t[11],m=t[15];return f*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*g-i*l*g)+y*(+e*l*g-e*c*d+s*o*d-n*o*g+n*c*h-s*l*h)+p*(+e*c*u-e*a*g-s*o*u+i*o*g+s*a*h-i*c*h)+m*(-n*a*h-e*l*u+e*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],g=t[11],f=t[12],y=t[13],p=t[14],m=t[15],_=u*p*c-y*d*c+y*l*g-a*p*g-u*l*m+a*d*m,v=f*d*c-h*p*c-f*l*g+o*p*g+h*l*m-o*d*m,x=h*y*c-f*u*c+f*a*g-o*y*g-h*a*m+o*u*m,T=f*u*l-h*y*l-f*a*d+o*y*d+h*a*p-o*u*p,b=e*_+i*v+n*x+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=_*C,t[1]=(y*d*s-u*p*s-y*n*g+i*p*g+u*n*m-i*d*m)*C,t[2]=(a*p*s-y*l*s+y*n*c-i*p*c-a*n*m+i*l*m)*C,t[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*g-i*l*g)*C,t[4]=v*C,t[5]=(h*p*s-f*d*s+f*n*g-e*p*g-h*n*m+e*d*m)*C,t[6]=(f*l*s-o*p*s-f*n*c+e*p*c+o*n*m-e*l*m)*C,t[7]=(o*d*s-h*l*s+h*n*c-e*d*c-o*n*g+e*l*g)*C,t[8]=x*C,t[9]=(f*u*s-h*y*s-f*i*g+e*y*g+h*i*m-e*u*m)*C,t[10]=(o*y*s-f*a*s+f*i*c-e*y*c-o*i*m+e*a*m)*C,t[11]=(h*a*s-o*u*s-h*i*c+e*u*c+o*i*g-e*a*g)*C,t[12]=T*C,t[13]=(h*y*n-f*u*n+f*i*d-e*y*d-h*i*p+e*u*p)*C,t[14]=(f*a*n-o*y*n-f*i*l+e*y*l+o*i*p-e*a*p)*C,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*d+e*a*d)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,g=s*h,f=s*u,y=o*h,p=o*u,m=a*u,_=l*c,v=l*h,x=l*u,T=i.x,b=i.y,C=i.z;return n[0]=(1-(y+m))*T,n[1]=(g+x)*T,n[2]=(f-v)*T,n[3]=0,n[4]=(g-x)*b,n[5]=(1-(d+m))*b,n[6]=(p+_)*b,n[7]=0,n[8]=(f+v)*C,n[9]=(p-_)*C,n[10]=(1-(d+y))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=Gi.set(n[0],n[1],n[2]).length();const o=Gi.set(n[4],n[5],n[6]).length(),a=Gi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ge.copy(this);const c=1/s,h=1/o,u=1/a;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,e.setFromRotationMatrix(Ge),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,n,s,o,a=ni){const l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let g,f;if(a===ni)g=-(o+s)/(o-s),f=-2*o*s/(o-s);else if(a===ds)g=-o/(o-s),f=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=ni){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-s),d=(e+t)*c,g=(i+n)*h;let f,y;if(a===ni)f=(o+s)*u,y=-2*u;else if(a===ds)f=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Gi=new P,Ge=new ae,Ec=new P(0,0,0),bc=new P(1,1,1),ci=new P,zn=new P,Ie=new P,wo=new ae,Eo=new Pn;class fn{constructor(t=0,e=0,i=0,n=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],g=n[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class xr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tc=0;const bo=new P,Vi=new Pn,Qe=new ae,Hn=new P,vn=new P,Ac=new P,Cc=new Pn,To=new P(1,0,0),Ao=new P(0,1,0),Co=new P(0,0,1),Pc={type:"added"},Rc={type:"removed"};class ge extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new P,e=new fn,i=new Pn,n=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ae},normalMatrix:{value:new Xt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(To,t)}rotateY(t){return this.rotateOnAxis(Ao,t)}rotateZ(t){return this.rotateOnAxis(Co,t)}translateOnAxis(t,e){return bo.copy(t).applyQuaternion(this.quaternion),this.position.add(bo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(To,t)}translateY(t){return this.translateOnAxis(Ao,t)}translateZ(t){return this.translateOnAxis(Co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hn.copy(t):Hn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(vn,Hn,this.up):Qe.lookAt(Hn,vn,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Vi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,t,Ac),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,Cc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),g=o(t.animations),f=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),f.length>0&&(i.nodes=f)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ge.DEFAULT_UP=new P(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new P,ti=new P,Hs=new P,ei=new P,Wi=new P,Xi=new P,Po=new P,Gs=new P,Vs=new P,Ws=new P;let Gn=!1;class We{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ve.subVectors(t,e),n.cross(Ve);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ve.subVectors(n,e),ti.subVectors(i,e),Hs.subVectors(t,e);const o=Ve.dot(Ve),a=Ve.dot(ti),l=Ve.dot(Hs),c=ti.dot(ti),h=ti.dot(Hs),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,g=(c*l-a*h)*d,f=(o*h-a*l)*d;return s.set(1-g-f,f,g)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,n,s,o,a,l){return Gn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gn=!0),this.getInterpolation(t,e,i,n,s,o,a,l)}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(t,e,i,n){return Ve.subVectors(i,e),ti.subVectors(t,e),Ve.cross(ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Ve.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return Gn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gn=!0),We.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return We.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let o,a;Wi.subVectors(n,i),Xi.subVectors(s,i),Gs.subVectors(t,i);const l=Wi.dot(Gs),c=Xi.dot(Gs);if(l<=0&&c<=0)return e.copy(i);Vs.subVectors(t,n);const h=Wi.dot(Vs),u=Xi.dot(Vs);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Wi,o);Ws.subVectors(t,s);const g=Wi.dot(Ws),f=Xi.dot(Ws);if(f>=0&&g<=f)return e.copy(s);const y=g*c-l*f;if(y<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(i).addScaledVector(Xi,a);const p=h*f-g*u;if(p<=0&&u-h>=0&&g-f>=0)return Po.subVectors(s,n),a=(u-h)/(u-h+(g-f)),e.copy(n).addScaledVector(Po,a);const m=1/(p+y+d);return o=y*m,a=d*m,e.copy(i).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ia={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function Xs(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=vr(t,1),e=Pe(e,0,1),i=Pe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Xs(o,s,t+1/3),this.g=Xs(o,s,t),this.b=Xs(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,n),this}setStyle(t,e=_e){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){const i=Ia[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=an(t.r),this.g=an(t.g),this.b=an(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return Yt.fromWorkingColorSpace(Se.copy(this),t),Math.round(Pe(Se.r*255,0,255))*65536+Math.round(Pe(Se.g*255,0,255))*256+Math.round(Pe(Se.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Se.copy(this),e);const i=Se.r,n=Se.g,s=Se.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=_e){Yt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,i=Se.g,n=Se.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Vn);const i=wn(hi.h,Vn.h,e),n=wn(hi.s,Vn.s,e),s=wn(hi.l,Vn.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Ct;Ct.NAMES=Ia;let Lc=0;class ri extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=on,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=or,this.blendDst=ar,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==or&&(i.blendSrc=this.blendSrc),this.blendDst!==ar&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class yi extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new P,Wn=new Pt;class ve{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wn.fromBufferAttribute(this,e),Wn.applyMatrix3(t),this.setXY(e,Wn.x,Wn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==go&&(t.usage=this.usage),t}}class Ua extends ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ba extends ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Kt extends ve{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Dc=0;const Oe=new ae,js=new ge,ji=new P,Ue=new _i,xn=new _i,me=new P;class de extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pa(t)?Ba:Ua)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,i){return Oe.makeTranslation(t,e,i),this.applyMatrix4(Oe),this}scale(t,e,i){return Oe.makeScale(t,e,i),this.applyMatrix4(Oe),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xn.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(Ue.min,xn.min),Ue.expandByPoint(me),me.addVectors(Ue.max,xn.max),Ue.expandByPoint(me)):(Ue.expandByPoint(xn.min),Ue.expandByPoint(xn.max))}Ue.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)me.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)me.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),me.add(ji)),n=Math.max(n,i.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new P,h[w]=new P;const u=new P,d=new P,g=new P,f=new Pt,y=new Pt,p=new Pt,m=new P,_=new P;function v(w,F,O){u.fromArray(n,w*3),d.fromArray(n,F*3),g.fromArray(n,O*3),f.fromArray(o,w*2),y.fromArray(o,F*2),p.fromArray(o,O*2),d.sub(u),g.sub(u),y.sub(f),p.sub(f);const J=1/(y.x*p.y-p.x*y.y);isFinite(J)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(g,-y.y).multiplyScalar(J),_.copy(g).multiplyScalar(y.x).addScaledVector(d,-p.x).multiplyScalar(J),c[w].add(m),c[F].add(m),c[O].add(m),h[w].add(_),h[F].add(_),h[O].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,F=x.length;w<F;++w){const O=x[w],J=O.start,L=O.count;for(let N=J,W=J+L;N<W;N+=3)v(i[N+0],i[N+1],i[N+2])}const T=new P,b=new P,C=new P,D=new P;function M(w){C.fromArray(s,w*3),D.copy(C);const F=c[w];T.copy(F),T.sub(C.multiplyScalar(C.dot(F))).normalize(),b.crossVectors(D,F);const J=b.dot(h[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=J}for(let w=0,F=x.length;w<F;++w){const O=x[w],J=O.start,L=O.count;for(let N=J,W=J+L;N<W;N+=3)M(i[N+0]),M(i[N+1]),M(i[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const n=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,g=t.count;d<g;d+=3){const f=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,f),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let g=0,f=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*h;for(let m=0;m<h;m++)d[f++]=c[g++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],g=t(d,i);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,g=u.length;d<g;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ro=new ae,Ei=new xs,Xn=new Rn,Lo=new P,qi=new P,Yi=new P,Ki=new P,qs=new P,jn=new P,qn=new Pt,Yn=new Pt,Kn=new Pt,Do=new P,Io=new P,Uo=new P,$n=new P,Zn=new P;class I extends ge{constructor(t=new de,e=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(s&&a){jn.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(qs.fromBufferAttribute(u,t),o?jn.addScaledVector(qs,h):jn.addScaledVector(qs.sub(e),h))}e.add(jn)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xn.copy(i.boundingSphere),Xn.applyMatrix4(s),Ei.copy(t.ray).recast(t.near),!(Xn.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Xn,Lo)===null||Ei.origin.distanceToSquared(Lo)>(t.far-t.near)**2))&&(Ro.copy(s).invert(),Ei.copy(t.ray).applyMatrix4(Ro),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,y=d.length;f<y;f++){const p=d[f],m=o[p.materialIndex],_=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let x=_,T=v;x<T;x+=3){const b=a.getX(x),C=a.getX(x+1),D=a.getX(x+2);n=Jn(this,m,t,i,c,h,u,b,C,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const f=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let p=f,m=y;p<m;p+=3){const _=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);n=Jn(this,o,t,i,c,h,u,_,v,x),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,y=d.length;f<y;f++){const p=d[f],m=o[p.materialIndex],_=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let x=_,T=v;x<T;x+=3){const b=x,C=x+1,D=x+2;n=Jn(this,m,t,i,c,h,u,b,C,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const f=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=f,m=y;p<m;p+=3){const _=p,v=p+1,x=p+2;n=Jn(this,o,t,i,c,h,u,_,v,x),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function Ic(r,t,e,i,n,s,o,a){let l;if(t.side===Re?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===gi,a),l===null)return null;Zn.copy(a),Zn.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Zn);return c<e.near||c>e.far?null:{distance:c,point:Zn.clone(),object:r}}function Jn(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,qi),r.getVertexPosition(l,Yi),r.getVertexPosition(c,Ki);const h=Ic(r,t,e,i,qi,Yi,Ki,$n);if(h){n&&(qn.fromBufferAttribute(n,a),Yn.fromBufferAttribute(n,l),Kn.fromBufferAttribute(n,c),h.uv=We.getInterpolation($n,qi,Yi,Ki,qn,Yn,Kn,new Pt)),s&&(qn.fromBufferAttribute(s,a),Yn.fromBufferAttribute(s,l),Kn.fromBufferAttribute(s,c),h.uv1=We.getInterpolation($n,qi,Yi,Ki,qn,Yn,Kn,new Pt),h.uv2=h.uv1),o&&(Do.fromBufferAttribute(o,a),Io.fromBufferAttribute(o,l),Uo.fromBufferAttribute(o,c),h.normal=We.getInterpolation($n,qi,Yi,Ki,Do,Io,Uo,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};We.getNormal(qi,Yi,Ki,u.normal),h.face=u}return h}class j extends de{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,g=0;f("z","y","x",-1,-1,i,e,t,o,s,0),f("z","y","x",1,-1,i,e,-t,o,s,1),f("x","z","y",1,1,t,i,e,n,o,2),f("x","z","y",1,-1,t,i,-e,n,o,3),f("x","y","z",1,-1,t,e,i,n,s,4),f("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function f(y,p,m,_,v,x,T,b,C,D,M){const w=x/C,F=T/D,O=x/2,J=T/2,L=b/2,N=C+1,W=D+1;let K=0,Y=0;const $=new P;for(let Z=0;Z<W;Z++){const tt=Z*F-J;for(let et=0;et<N;et++){const H=et*w-O;$[y]=H*_,$[p]=tt*v,$[m]=L,c.push($.x,$.y,$.z),$[y]=0,$[p]=0,$[m]=b>0?1:-1,h.push($.x,$.y,$.z),u.push(et/C),u.push(1-Z/D),K+=1}}for(let Z=0;Z<D;Z++)for(let tt=0;tt<C;tt++){const et=d+tt+N*Z,H=d+tt+N*(Z+1),Q=d+(tt+1)+N*(Z+1),at=d+(tt+1)+N*Z;l.push(et,H,at),l.push(H,Q,at),Y+=6}a.addGroup(g,Y,M),g+=Y,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new j(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ce(r){const t={};for(let e=0;e<r.length;e++){const i=un(r[e]);for(const n in i)t[n]=i[n]}return t}function Uc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Na(r){return r.getRenderTarget()===null?r.outputColorSpace:Yt.workingColorSpace}const Bc={clone:un,merge:Ce};var Nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nc,this.fragmentShader=Fc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=Uc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Fa extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends Fa{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=An*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return An*2*Math.atan(Math.tan(Sn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,Zi=1;class Oc extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Be($i,Zi,t,e);n.layers=this.layers,this.add(n);const s=new Be($i,Zi,t,e);s.layers=this.layers,this.add(s);const o=new Be($i,Zi,t,e);o.layers=this.layers,this.add(o);const a=new Be($i,Zi,t,e);a.layers=this.layers,this.add(a);const l=new Be($i,Zi,t,e);l.layers=this.layers,this.add(l);const c=new Be($i,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,g),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Oa extends Le{constructor(t,e,i,n,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ln,super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kc extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(En("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ii?_e:ze),this.texture=new Oa(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new j(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:fi});s.uniforms.tEquirect.value=e;const o=new I(n,s),a=e.minFilter;return e.minFilter===bn&&(e.minFilter=ke),new Oc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}}const Ys=new P,zc=new P,Hc=new Xt;class Ai{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ys.subVectors(i,e).cross(zc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ys),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hc.getNormalMatrix(t),n=this.coplanarPoint(Ys).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Rn,Qn=new P;class Mr{constructor(t=new Ai,e=new Ai,i=new Ai,n=new Ai,s=new Ai,o=new Ai){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni){const i=this.planes,n=t.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],g=n[8],f=n[9],y=n[10],p=n[11],m=n[12],_=n[13],v=n[14],x=n[15];if(i[0].setComponents(l-s,d-c,p-g,x-m).normalize(),i[1].setComponents(l+s,d+c,p+g,x+m).normalize(),i[2].setComponents(l+o,d+h,p+f,x+_).normalize(),i[3].setComponents(l-o,d-h,p-f,x-_).normalize(),i[4].setComponents(l-a,d-u,p-y,x-v).normalize(),e===ni)i[5].setComponents(l+a,d+u,p+y,x+v).normalize();else if(e===ds)i[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Qn.x=n.normal.x>0?t.max.x:t.min.x,Qn.y=n.normal.y>0?t.max.y:t.min.y,Qn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Qn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ka(){let r=null,t=!1,e=null,i=null;function n(s,o){e(s,o),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Gc(r,t){const e=t.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,g=u.byteLength,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let y;if(u instanceof Float32Array)y=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=r.SHORT;else if(u instanceof Uint32Array)y=r.UNSIGNED_INT;else if(u instanceof Int32Array)y=r.INT;else if(u instanceof Int8Array)y=r.BYTE;else if(u instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,h,u){const d=h.array,g=h._updateRange,f=h.updateRanges;if(r.bindBuffer(u,c),g.count===-1&&f.length===0&&r.bufferSubData(u,0,d),f.length!==0){for(let y=0,p=f.length;y<p;y++){const m=f[y];e?r.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}g.count!==-1&&(e?r.bufferSubData(u,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):r.bufferSubData(u,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class we extends de{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,g=[],f=[],y=[],p=[];for(let m=0;m<h;m++){const _=m*d-o;for(let v=0;v<c;v++){const x=v*u-s;f.push(x,-_,0),y.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const v=_+c*m,x=_+c*(m+1),T=_+1+c*(m+1),b=_+1+c*m;g.push(v,x,b),g.push(x,T,b)}this.setIndex(g),this.setAttribute("position",new Kt(f,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wc=`#ifdef USE_ALPHAHASH
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
#endif`,Xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kc=`#ifdef USE_AOMAP
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
#endif`,$c=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zc=`#ifdef USE_BATCHING
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
#endif`,Jc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,th=`vec3 objectNormal = vec3( normal );
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
} // validated`,ih=`#ifdef USE_IRIDESCENCE
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
#endif`,nh=`#ifdef USE_BUMPMAP
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
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dh=`#define PI 3.141592653589793
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
} // validated`,fh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ph=`vec3 transformedNormal = objectNormal;
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
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",xh=`
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
}`,Mh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wh=`#ifdef USE_ENVMAP
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
#endif`,Eh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ph=`#ifdef USE_FOG
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
}`,Lh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bh=`uniform bool receiveShadow;
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
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hh=`PhysicalMaterial material;
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
#endif`,Gh=`struct PhysicalMaterial {
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
}`,Vh=`
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
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$h=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qh=`#if defined( USE_POINTS_UV )
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
#endif`,tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nu=`#ifdef USE_MORPHNORMALS
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
#endif`,su=`#ifdef USE_MORPHTARGETS
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
#endif`,ru=`#ifdef USE_MORPHTARGETS
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
#endif`,ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,au=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uu=`#ifdef USE_NORMALMAP
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
#endif`,du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Au=`float getShadowMask() {
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
}`,Cu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pu=`#ifdef USE_SKINNING
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
#endif`,Lu=`#ifdef USE_SKINNING
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
#endif`,Du=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bu=`#ifndef saturate
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
#endif`,Fu=`#ifdef USE_TRANSMISSION
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
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vu=`uniform sampler2D t2D;
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
}`,Wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ju=`varying vec3 vWorldDirection;
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
}`,Yu=`#include <common>
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
}`,Ku=`#if DEPTH_PACKING == 3200
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
}`,$u=`#define DISTANCE
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
}`,Zu=`#define DISTANCE
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
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`uniform float scale;
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
}`,id=`#include <common>
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
}`,nd=`uniform vec3 diffuse;
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
}`,sd=`#define LAMBERT
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
}`,rd=`#define LAMBERT
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
}`,od=`#define MATCAP
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
}`,ad=`#define MATCAP
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
}`,ld=`#define NORMAL
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
}`,cd=`#define NORMAL
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
}`,hd=`#define PHONG
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
}`,ud=`#define PHONG
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
}`,dd=`#define STANDARD
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
}`,fd=`#define STANDARD
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
}`,pd=`#define TOON
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
}`,md=`#define TOON
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
}`,gd=`uniform float size;
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
}`,yd=`uniform vec3 diffuse;
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
}`,vd=`uniform vec3 color;
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
}`,xd=`uniform float rotation;
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
}`,Md=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Vc,alphahash_pars_fragment:Wc,alphamap_fragment:Xc,alphamap_pars_fragment:jc,alphatest_fragment:qc,alphatest_pars_fragment:Yc,aomap_fragment:Kc,aomap_pars_fragment:$c,batching_pars_vertex:Zc,batching_vertex:Jc,begin_vertex:Qc,beginnormal_vertex:th,bsdfs:eh,iridescence_fragment:ih,bumpmap_pars_fragment:nh,clipping_planes_fragment:sh,clipping_planes_pars_fragment:rh,clipping_planes_pars_vertex:oh,clipping_planes_vertex:ah,color_fragment:lh,color_pars_fragment:ch,color_pars_vertex:hh,color_vertex:uh,common:dh,cube_uv_reflection_fragment:fh,defaultnormal_vertex:ph,displacementmap_pars_vertex:mh,displacementmap_vertex:gh,emissivemap_fragment:yh,emissivemap_pars_fragment:_h,colorspace_fragment:vh,colorspace_pars_fragment:xh,envmap_fragment:Mh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:wh,envmap_pars_vertex:Eh,envmap_physical_pars_fragment:Nh,envmap_vertex:bh,fog_vertex:Th,fog_pars_vertex:Ah,fog_fragment:Ch,fog_pars_fragment:Ph,gradientmap_pars_fragment:Rh,lightmap_fragment:Lh,lightmap_pars_fragment:Dh,lights_lambert_fragment:Ih,lights_lambert_pars_fragment:Uh,lights_pars_begin:Bh,lights_toon_fragment:Fh,lights_toon_pars_fragment:Oh,lights_phong_fragment:kh,lights_phong_pars_fragment:zh,lights_physical_fragment:Hh,lights_physical_pars_fragment:Gh,lights_fragment_begin:Vh,lights_fragment_maps:Wh,lights_fragment_end:Xh,logdepthbuf_fragment:jh,logdepthbuf_pars_fragment:qh,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:Kh,map_fragment:$h,map_pars_fragment:Zh,map_particle_fragment:Jh,map_particle_pars_fragment:Qh,metalnessmap_fragment:tu,metalnessmap_pars_fragment:eu,morphcolor_vertex:iu,morphnormal_vertex:nu,morphtarget_pars_vertex:su,morphtarget_vertex:ru,normal_fragment_begin:ou,normal_fragment_maps:au,normal_pars_fragment:lu,normal_pars_vertex:cu,normal_vertex:hu,normalmap_pars_fragment:uu,clearcoat_normal_fragment_begin:du,clearcoat_normal_fragment_maps:fu,clearcoat_pars_fragment:pu,iridescence_pars_fragment:mu,opaque_fragment:gu,packing:yu,premultiplied_alpha_fragment:_u,project_vertex:vu,dithering_fragment:xu,dithering_pars_fragment:Mu,roughnessmap_fragment:Su,roughnessmap_pars_fragment:wu,shadowmap_pars_fragment:Eu,shadowmap_pars_vertex:bu,shadowmap_vertex:Tu,shadowmask_pars_fragment:Au,skinbase_vertex:Cu,skinning_pars_vertex:Pu,skinning_vertex:Ru,skinnormal_vertex:Lu,specularmap_fragment:Du,specularmap_pars_fragment:Iu,tonemapping_fragment:Uu,tonemapping_pars_fragment:Bu,transmission_fragment:Nu,transmission_pars_fragment:Fu,uv_pars_fragment:Ou,uv_pars_vertex:ku,uv_vertex:zu,worldpos_vertex:Hu,background_vert:Gu,background_frag:Vu,backgroundCube_vert:Wu,backgroundCube_frag:Xu,cube_vert:ju,cube_frag:qu,depth_vert:Yu,depth_frag:Ku,distanceRGBA_vert:$u,distanceRGBA_frag:Zu,equirect_vert:Ju,equirect_frag:Qu,linedashed_vert:td,linedashed_frag:ed,meshbasic_vert:id,meshbasic_frag:nd,meshlambert_vert:sd,meshlambert_frag:rd,meshmatcap_vert:od,meshmatcap_frag:ad,meshnormal_vert:ld,meshnormal_frag:cd,meshphong_vert:hd,meshphong_frag:ud,meshphysical_vert:dd,meshphysical_frag:fd,meshtoon_vert:pd,meshtoon_frag:md,points_vert:gd,points_frag:yd,shadow_vert:_d,shadow_frag:vd,sprite_vert:xd,sprite_frag:Md},ht={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ke={basic:{uniforms:Ce([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ce([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ce([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ce([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ce([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ce([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ce([ht.points,ht.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ce([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ce([ht.common,ht.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ce([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ce([ht.sprite,ht.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ce([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ce([ht.lights,ht.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ke.physical={uniforms:Ce([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const ts={r:0,b:0,g:0};function Sd(r,t,e,i,n,s,o){const a=new Ct(0);let l=s===!0?0:1,c,h,u=null,d=0,g=null;function f(p,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),_=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ys)?(h===void 0&&(h=new I(new j(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:un(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(v.colorSpace)!==te,(u!==v||d!==v.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,g=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new I(new we(2,2),new Bi({name:"BackgroundMaterial",uniforms:un(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||g!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,g=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,m){p.getRGB(ts,Na(r)),i.buffers.color.setClear(ts.r,ts.g,ts.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:f}}function wd(r,t,e,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(L,N,W,K,Y){let $=!1;if(o){const Z=y(K,W,N);c!==Z&&(c=Z,g(c.object)),$=m(L,K,W,Y),$&&_(L,K,W,Y)}else{const Z=N.wireframe===!0;(c.geometry!==K.id||c.program!==W.id||c.wireframe!==Z)&&(c.geometry=K.id,c.program=W.id,c.wireframe=Z,$=!0)}Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,D(L,N,W,K),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function f(L){return i.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,N,W){const K=W.wireframe===!0;let Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let $=Y[N.id];$===void 0&&($={},Y[N.id]=$);let Z=$[K];return Z===void 0&&(Z=p(d()),$[K]=Z),Z}function p(L){const N=[],W=[],K=[];for(let Y=0;Y<n;Y++)N[Y]=0,W[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:K,object:L,attributes:{},index:null}}function m(L,N,W,K){const Y=c.attributes,$=N.attributes;let Z=0;const tt=W.getAttributes();for(const et in tt)if(tt[et].location>=0){const Q=Y[et];let at=$[et];if(at===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),Q===void 0||Q.attribute!==at||at&&Q.data!==at.data)return!0;Z++}return c.attributesNum!==Z||c.index!==K}function _(L,N,W,K){const Y={},$=N.attributes;let Z=0;const tt=W.getAttributes();for(const et in tt)if(tt[et].location>=0){let Q=$[et];Q===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const at={};at.attribute=Q,Q&&Q.data&&(at.data=Q.data),Y[et]=at,Z++}c.attributes=Y,c.attributesNum=Z,c.index=K}function v(){const L=c.newAttributes;for(let N=0,W=L.length;N<W;N++)L[N]=0}function x(L){T(L,0)}function T(L,N){const W=c.newAttributes,K=c.enabledAttributes,Y=c.attributeDivisors;W[L]=1,K[L]===0&&(r.enableVertexAttribArray(L),K[L]=1),Y[L]!==N&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),Y[L]=N)}function b(){const L=c.newAttributes,N=c.enabledAttributes;for(let W=0,K=N.length;W<K;W++)N[W]!==L[W]&&(r.disableVertexAttribArray(W),N[W]=0)}function C(L,N,W,K,Y,$,Z){Z===!0?r.vertexAttribIPointer(L,N,W,Y,$):r.vertexAttribPointer(L,N,W,K,Y,$)}function D(L,N,W,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=K.attributes,$=W.getAttributes(),Z=N.defaultAttributeValues;for(const tt in $){const et=$[tt];if(et.location>=0){let H=Y[tt];if(H===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const Q=H.normalized,at=H.itemSize,yt=e.get(H);if(yt===void 0)continue;const xt=yt.buffer,At=yt.type,_t=yt.bytesPerElement,Tt=i.isWebGL2===!0&&(At===r.INT||At===r.UNSIGNED_INT||H.gpuType===xa);if(H.isInterleavedBufferAttribute){const Mt=H.data,B=Mt.stride,ne=H.offset;if(Mt.isInstancedInterleavedBuffer){for(let wt=0;wt<et.locationSize;wt++)T(et.location+wt,Mt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let wt=0;wt<et.locationSize;wt++)x(et.location+wt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let wt=0;wt<et.locationSize;wt++)C(et.location+wt,at/et.locationSize,At,Q,B*_t,(ne+at/et.locationSize*wt)*_t,Tt)}else{if(H.isInstancedBufferAttribute){for(let Mt=0;Mt<et.locationSize;Mt++)T(et.location+Mt,H.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Mt=0;Mt<et.locationSize;Mt++)x(et.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let Mt=0;Mt<et.locationSize;Mt++)C(et.location+Mt,at/et.locationSize,At,Q,at*_t,at/et.locationSize*Mt*_t,Tt)}}else if(Z!==void 0){const Q=Z[tt];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(et.location,Q);break;case 3:r.vertexAttrib3fv(et.location,Q);break;case 4:r.vertexAttrib4fv(et.location,Q);break;default:r.vertexAttrib1fv(et.location,Q)}}}}b()}function M(){O();for(const L in a){const N=a[L];for(const W in N){const K=N[W];for(const Y in K)f(K[Y].object),delete K[Y];delete N[W]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const W in N){const K=N[W];for(const Y in K)f(K[Y].object),delete K[Y];delete N[W]}delete a[L.id]}function F(L){for(const N in a){const W=a[N];if(W[L.id]===void 0)continue;const K=W[L.id];for(const Y in K)f(K[Y].object),delete K[Y];delete W[L.id]}}function O(){J(),h=!0,c!==l&&(c=l,g(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:O,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:x,disableUnusedAttributes:b}}function Ed(r,t,e,i){const n=i.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,d){if(d===0)return;let g,f;if(n)g=r,f="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](s,h,u,d),e.update(u,s,d)}function c(h,u,d){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d;f++)this.render(h[f],u[f]);else{g.multiDrawArraysWEBGL(s,h,0,u,0,d);let f=0;for(let y=0;y<d;y++)f+=u[y];e.update(f,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function bd(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,x=o||t.has("OES_texture_float"),T=v&&x,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:f,maxAttributes:y,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:b}}function Td(r){const t=this;let e=null,i=0,n=!1,s=!1;const o=new Ai,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const g=u.length!==0||d||i!==0||n;return n=d,i=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,g){const f=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!n||f===null||f.length===0||s&&!p)s?h(null):c();else{const _=s?0:i,v=_*4;let x=m.clippingState||null;l.value=x,x=h(f,d,v,g);for(let T=0;T!==v;++T)x[T]=e[T];m.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,g,f){const y=u!==null?u.length:0;let p=null;if(y!==0){if(p=l.value,f!==!0||p===null){const m=g+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=g;v!==y;++v,x+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function Ad(r){let t=new WeakMap;function e(o,a){return a===lr?o.mapping=ln:a===cr&&(o.mapping=cn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lr||a===cr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kc(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class za extends Fa{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const sn=4,Bo=[.125,.215,.35,.446,.526,.582],Ri=20,Ks=new za,No=new Ct;let $s=null,Zs=0,Js=0;const Ci=(1+Math.sqrt(5))/2,Ji=1/Ci,Fo=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ci,Ji),new P(0,Ci,-Ji),new P(Ji,0,Ci),new P(-Ji,0,Ci),new P(Ci,Ji,0),new P(-Ci,Ji,0)];class Oo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($s,Zs,Js),t.scissorTest=!1,es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ln||t.mapping===cn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Tn,format:qe,colorSpace:si,depthBuffer:!1},n=ko(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ko(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cd(s)),this._blurMaterial=Pd(s,t,e)}return n}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,Ks)}_sceneToCubeUV(t,e,i,n){const a=new Be(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(No),h.toneMapping=pi,h.autoClear=!1;const g=new yi({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),f=new I(new j,g);let y=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,y=!0):(g.color.copy(No),y=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;es(n,_*v,m>2?v:0,v,v),h.setRenderTarget(n),y&&h.render(f,a),h.render(t,a)}f.geometry.dispose(),f.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===ln||t.mapping===cn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new I(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;es(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ks)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Fo[(n-1)%Fo.length];this._blur(t,n-1,n,s,o)}e.autoClear=i}_blur(t,e,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",s),this._halfBlur(o,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[n],c),d=c.uniforms,g=this._sizeLods[i]-1,f=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ri-1),y=s/f,p=isFinite(s)?1+Math.floor(h*y):Ri;p>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const m=[];let _=0;for(let C=0;C<Ri;++C){const D=C/y,M=Math.exp(-D*D/2);m.push(M),C===0?_+=M:C<p&&(_+=2*M)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=f,d.mipInt.value=v-i;const x=this._sizeLods[n],T=3*x*(n>v-sn?n-v+sn:0),b=4*(this._cubeSize-x);es(e,T,b,3*x,2*x),l.setRenderTarget(e),l.render(u,Ks)}}function Cd(r){const t=[],e=[],i=[];let n=r;const s=r-sn+1+Bo.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>r-sn?l=Bo[o-r+sn-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,f=6,y=3,p=2,m=1,_=new Float32Array(y*f*g),v=new Float32Array(p*f*g),x=new Float32Array(m*f*g);for(let b=0;b<g;b++){const C=b%3*2/3-1,D=b>2?0:-1,M=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];_.set(M,y*f*b),v.set(d,p*f*b);const w=[b,b,b,b,b,b];x.set(w,m*f*b)}const T=new de;T.setAttribute("position",new ve(_,y)),T.setAttribute("uv",new ve(v,p)),T.setAttribute("faceIndex",new ve(x,m)),t.push(T),n>sn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ko(r,t,e){const i=new Ui(r,t,e);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Pd(r,t,e){const i=new Float32Array(Ri),n=new P(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function zo(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ho(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Sr(){return`

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
	`}function Rd(r){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lr||l===cr,h=l===ln||l===cn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Oo(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new Oo(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ld(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Dd(r,t,e,i){const n={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const f in d.attributes)t.remove(d.attributes[f]);for(const f in d.morphAttributes){const y=d.morphAttributes[f];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}d.removeEventListener("dispose",o),delete n[d.id];const g=s.get(d);g&&(t.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER);const g=u.morphAttributes;for(const f in g){const y=g[f];for(let p=0,m=y.length;p<m;p++)t.update(y[p],r.ARRAY_BUFFER)}}function c(u){const d=[],g=u.index,f=u.attributes.position;let y=0;if(g!==null){const _=g.array;y=g.version;for(let v=0,x=_.length;v<x;v+=3){const T=_[v+0],b=_[v+1],C=_[v+2];d.push(T,b,b,C,C,T)}}else if(f!==void 0){const _=f.array;y=f.version;for(let v=0,x=_.length/3-1;v<x;v+=3){const T=v+0,b=v+1,C=v+2;d.push(T,b,b,C,C,T)}}else return;const p=new(Pa(d)?Ba:Ua)(d,1);p.version=y;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const g=u.index;g!==null&&d.version<g.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Id(r,t,e,i){const n=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,f){r.drawElements(s,f,a,g*l),e.update(f,s,1)}function u(g,f,y){if(y===0)return;let p,m;if(n)p=r,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,f,a,g*l,y),e.update(f,s,y)}function d(g,f,y){if(y===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<y;m++)this.render(g[m]/l,f[m]);else{p.multiDrawElementsWEBGL(s,f,0,a,g,0,y);let m=0;for(let _=0;_<y;_++)m+=f[_];e.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ud(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Bd(r,t){return r[0]-t[0]}function Nd(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Fd(r,t,e){const i={},n=new Float32Array(8),s=new WeakMap,o=new ee,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=f!==void 0?f.length:0;let p=s.get(h);if(p===void 0||p.count!==y){let N=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var g=N;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),T===!0&&(M=3);let w=h.attributes.position.count*M,F=1;w>t.maxTextureSize&&(F=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const O=new Float32Array(w*F*4*y),J=new Da(O,w,F,y);J.type=di,J.needsUpdate=!0;const L=M*4;for(let W=0;W<y;W++){const K=b[W],Y=C[W],$=D[W],Z=w*F*4*W;for(let tt=0;tt<K.count;tt++){const et=tt*L;v===!0&&(o.fromBufferAttribute(K,tt),O[Z+et+0]=o.x,O[Z+et+1]=o.y,O[Z+et+2]=o.z,O[Z+et+3]=0),x===!0&&(o.fromBufferAttribute(Y,tt),O[Z+et+4]=o.x,O[Z+et+5]=o.y,O[Z+et+6]=o.z,O[Z+et+7]=0),T===!0&&(o.fromBufferAttribute($,tt),O[Z+et+8]=o.x,O[Z+et+9]=o.y,O[Z+et+10]=o.z,O[Z+et+11]=$.itemSize===4?o.w:1)}}p={count:y,texture:J,size:new Pt(w,F)},s.set(h,p),h.addEventListener("dispose",N)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const f=d===void 0?0:d.length;let y=i[h.id];if(y===void 0||y.length!==f){y=[];for(let x=0;x<f;x++)y[x]=[x,0];i[h.id]=y}for(let x=0;x<f;x++){const T=y[x];T[0]=x,T[1]=d[x]}y.sort(Nd);for(let x=0;x<8;x++)x<f&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Bd);const p=h.morphAttributes.position,m=h.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const T=a[x],b=T[0],C=T[1];b!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+x)!==p[b]&&h.setAttribute("morphTarget"+x,p[b]),m&&h.getAttribute("morphNormal"+x)!==m[b]&&h.setAttribute("morphNormal"+x,m[b]),n[x]=C,_+=C):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),n[x]=0)}const v=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function Od(r,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Ha extends Le{constructor(t,e,i,n,s,o,a,l,c,h){if(h=h!==void 0?h:Di,h!==Di&&h!==hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Di&&(i=ui),i===void 0&&h===hn&&(i=Li),super(null,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ga=new Le,Va=new Ha(1,1);Va.compareFunction=Ca;const Wa=new Da,Xa=new Sc,ja=new Oa,Go=[],Vo=[],Wo=new Float32Array(16),Xo=new Float32Array(9),jo=new Float32Array(4);function pn(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=Go[n];if(s===void 0&&(s=new Float32Array(n),Go[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function he(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ue(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Ms(r,t){let e=Vo[t];e===void 0&&(e=new Int32Array(t),Vo[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function kd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function zd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;r.uniform2fv(this.addr,t),ue(e,t)}}function Hd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;r.uniform3fv(this.addr,t),ue(e,t)}}function Gd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;r.uniform4fv(this.addr,t),ue(e,t)}}function Vd(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,i))return;jo.set(i),r.uniformMatrix2fv(this.addr,!1,jo),ue(e,i)}}function Wd(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,i))return;Xo.set(i),r.uniformMatrix3fv(this.addr,!1,Xo),ue(e,i)}}function Xd(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,i))return;Wo.set(i),r.uniformMatrix4fv(this.addr,!1,Wo),ue(e,i)}}function jd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function qd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;r.uniform2iv(this.addr,t),ue(e,t)}}function Yd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;r.uniform3iv(this.addr,t),ue(e,t)}}function Kd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;r.uniform4iv(this.addr,t),ue(e,t)}}function $d(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Zd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;r.uniform2uiv(this.addr,t),ue(e,t)}}function Jd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;r.uniform3uiv(this.addr,t),ue(e,t)}}function Qd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;r.uniform4uiv(this.addr,t),ue(e,t)}}function tf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const s=this.type===r.SAMPLER_2D_SHADOW?Va:Ga;e.setTexture2D(t||s,n)}function ef(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Xa,n)}function nf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ja,n)}function sf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Wa,n)}function rf(r){switch(r){case 5126:return kd;case 35664:return zd;case 35665:return Hd;case 35666:return Gd;case 35674:return Vd;case 35675:return Wd;case 35676:return Xd;case 5124:case 35670:return jd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Kd;case 5125:return $d;case 36294:return Zd;case 36295:return Jd;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return sf}}function of(r,t){r.uniform1fv(this.addr,t)}function af(r,t){const e=pn(t,this.size,2);r.uniform2fv(this.addr,e)}function lf(r,t){const e=pn(t,this.size,3);r.uniform3fv(this.addr,e)}function cf(r,t){const e=pn(t,this.size,4);r.uniform4fv(this.addr,e)}function hf(r,t){const e=pn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function uf(r,t){const e=pn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function df(r,t){const e=pn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ff(r,t){r.uniform1iv(this.addr,t)}function pf(r,t){r.uniform2iv(this.addr,t)}function mf(r,t){r.uniform3iv(this.addr,t)}function gf(r,t){r.uniform4iv(this.addr,t)}function yf(r,t){r.uniform1uiv(this.addr,t)}function _f(r,t){r.uniform2uiv(this.addr,t)}function vf(r,t){r.uniform3uiv(this.addr,t)}function xf(r,t){r.uniform4uiv(this.addr,t)}function Mf(r,t,e){const i=this.cache,n=t.length,s=Ms(e,n);he(i,s)||(r.uniform1iv(this.addr,s),ue(i,s));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Ga,s[o])}function Sf(r,t,e){const i=this.cache,n=t.length,s=Ms(e,n);he(i,s)||(r.uniform1iv(this.addr,s),ue(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Xa,s[o])}function wf(r,t,e){const i=this.cache,n=t.length,s=Ms(e,n);he(i,s)||(r.uniform1iv(this.addr,s),ue(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||ja,s[o])}function Ef(r,t,e){const i=this.cache,n=t.length,s=Ms(e,n);he(i,s)||(r.uniform1iv(this.addr,s),ue(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Wa,s[o])}function bf(r){switch(r){case 5126:return of;case 35664:return af;case 35665:return lf;case 35666:return cf;case 35674:return hf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return ff;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return yf;case 36294:return _f;case 36295:return vf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Ef}}class Tf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rf(e.type)}}class Af{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bf(e.type)}}class Cf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(t,e[a.id],i)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function qo(r,t){r.seq.push(t),r.map[t.id]=t}function Pf(r,t,e){const i=r.name,n=i.length;for(Qs.lastIndex=0;;){const s=Qs.exec(i),o=Qs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){qo(e,c===void 0?new Tf(a,r,t):new Af(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Cf(a),qo(e,u)),e=u}}}class os{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),o=t.getUniformLocation(e,s.name);Pf(s,o,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Yo(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const Rf=37297;let Lf=0;function Df(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function If(r){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(r);let i;switch(t===e?i="":t===us&&e===hs?i="LinearDisplayP3ToLinearSRGB":t===hs&&e===us&&(i="LinearSRGBToLinearDisplayP3"),r){case si:case vs:return[i,"LinearTransferOETF"];case _e:case _r:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Ko(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Df(r.getShaderSource(t),o)}else return n}function Uf(r,t){const e=If(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Bf(r,t){let e;switch(t){case Ll:e="Linear";break;case Dl:e="Reinhard";break;case Il:e="OptimizedCineon";break;case Ul:e="ACESFilmic";break;case Nl:e="AgX";break;case Bl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Nf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rn).join(`
`)}function Ff(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rn).join(`
`)}function Of(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kf(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function rn(r){return r!==""}function $o(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zo(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zf=/^[ \t]*#include +<([\w\d./]+)>/gm;function fr(r){return r.replace(zf,Gf)}const Hf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gf(r,t){let e=Ht[t];if(e===void 0){const i=Hf.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return fr(e)}const Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(r){return r.replace(Vf,Wf)}function Wf(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Qo(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xf(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_a?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function jf(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ln:case cn:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qf(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case cn:t="ENVMAP_MODE_REFRACTION";break}return t}function Yf(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gs:t="ENVMAP_BLENDING_MULTIPLY";break;case Pl:t="ENVMAP_BLENDING_MIX";break;case Rl:t="ENVMAP_BLENDING_ADD";break}return t}function Kf(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function $f(r,t,e,i){const n=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Xf(e),c=jf(e),h=qf(e),u=Yf(e),d=Kf(e),g=e.isWebGL2?"":Nf(e),f=Ff(e),y=Of(s),p=n.createProgram();let m,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(rn).join(`
`),m.length>0&&(m+=`
`),_=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(rn).join(`
`),_.length>0&&(_+=`
`)):(m=[Qo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rn).join(`
`),_=[g,Qo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==pi?Bf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Uf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rn).join(`
`)),o=fr(o),o=$o(o,e),o=Zo(o,e),a=fr(a),a=$o(a,e),a=Zo(a,e),o=Jo(o),a=Jo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=v+m+o,T=v+_+a,b=Yo(n,n.VERTEX_SHADER,x),C=Yo(n,n.FRAGMENT_SHADER,T);n.attachShader(p,b),n.attachShader(p,C),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function D(O){if(r.debug.checkShaderErrors){const J=n.getProgramInfoLog(p).trim(),L=n.getShaderInfoLog(b).trim(),N=n.getShaderInfoLog(C).trim();let W=!0,K=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,b,C);else{const Y=Ko(n,b,"vertex"),$=Ko(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+Y+`
`+$)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||N==="")&&(K=!1);K&&(O.diagnostics={runnable:W,programLog:J,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:_}})}n.deleteShader(b),n.deleteShader(C),M=new os(n,p),w=kf(n,p)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(p,Rf)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=C,this}let Zf=0;class Jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Qf(t),e.set(t,i)),i}}class Qf{constructor(t){this.id=Zf++,this.code=t,this.usedTimes=0}}function tp(r,t,e,i,n,s,o){const a=new xr,l=new Jf,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let g=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function p(M,w,F,O,J){const L=O.fog,N=J.geometry,W=M.isMeshStandardMaterial?O.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),Y=K&&K.mapping===ys?K.image.height:null,$=f[M.type];M.precision!==null&&(g=n.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,tt=Z!==void 0?Z.length:0;let et=0;N.morphAttributes.position!==void 0&&(et=1),N.morphAttributes.normal!==void 0&&(et=2),N.morphAttributes.color!==void 0&&(et=3);let H,Q,at,yt;if($){const be=Ke[$];H=be.vertexShader,Q=be.fragmentShader}else H=M.vertexShader,Q=M.fragmentShader,l.update(M),at=l.getVertexShaderID(M),yt=l.getFragmentShaderID(M);const xt=r.getRenderTarget(),At=J.isInstancedMesh===!0,_t=J.isBatchedMesh===!0,Tt=!!M.map,Mt=!!M.matcap,B=!!K,ne=!!M.aoMap,wt=!!M.lightMap,Lt=!!M.bumpMap,gt=!!M.normalMap,Qt=!!M.displacementMap,kt=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,k=M.anisotropy>0,nt=M.clearcoat>0,it=M.iridescence>0,rt=M.sheen>0,St=M.transmission>0,ut=k&&!!M.anisotropyMap,vt=nt&&!!M.clearcoatMap,Rt=nt&&!!M.clearcoatNormalMap,Ft=nt&&!!M.clearcoatRoughnessMap,st=it&&!!M.iridescenceMap,qt=it&&!!M.iridescenceThicknessMap,z=rt&&!!M.sheenColorMap,ot=rt&&!!M.sheenRoughnessMap,dt=!!M.specularMap,lt=!!M.specularColorMap,Dt=!!M.specularIntensityMap,jt=St&&!!M.transmissionMap,se=St&&!!M.thicknessMap,Vt=!!M.gradientMap,ct=!!M.alphaMap,R=M.alphaTest>0,ft=!!M.alphaHash,pt=!!M.extensions,Bt=!!N.attributes.uv1,It=!!N.attributes.uv2,$t=!!N.attributes.uv3;let Zt=pi;return M.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Zt=r.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:Q,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:_t,instancing:At,instancingColor:At&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xt===null?r.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:si,map:Tt,matcap:Mt,envMap:B,envMapMode:B&&K.mapping,envMapCubeUVHeight:Y,aoMap:ne,lightMap:wt,bumpMap:Lt,normalMap:gt,displacementMap:d&&Qt,emissiveMap:kt,normalMapObjectSpace:gt&&M.normalMapType===Kl,normalMapTangentSpace:gt&&M.normalMapType===_s,metalnessMap:A,roughnessMap:S,anisotropy:k,anisotropyMap:ut,clearcoat:nt,clearcoatMap:vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Ft,iridescence:it,iridescenceMap:st,iridescenceThicknessMap:qt,sheen:rt,sheenColorMap:z,sheenRoughnessMap:ot,specularMap:dt,specularColorMap:lt,specularIntensityMap:Dt,transmission:St,transmissionMap:jt,thicknessMap:se,gradientMap:Vt,opaque:M.transparent===!1&&M.blending===on,alphaMap:ct,alphaTest:R,alphaHash:ft,combine:M.combine,mapUv:Tt&&y(M.map.channel),aoMapUv:ne&&y(M.aoMap.channel),lightMapUv:wt&&y(M.lightMap.channel),bumpMapUv:Lt&&y(M.bumpMap.channel),normalMapUv:gt&&y(M.normalMap.channel),displacementMapUv:Qt&&y(M.displacementMap.channel),emissiveMapUv:kt&&y(M.emissiveMap.channel),metalnessMapUv:A&&y(M.metalnessMap.channel),roughnessMapUv:S&&y(M.roughnessMap.channel),anisotropyMapUv:ut&&y(M.anisotropyMap.channel),clearcoatMapUv:vt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:z&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:ot&&y(M.sheenRoughnessMap.channel),specularMapUv:dt&&y(M.specularMap.channel),specularColorMapUv:lt&&y(M.specularColorMap.channel),specularIntensityMapUv:Dt&&y(M.specularIntensityMap.channel),transmissionMapUv:jt&&y(M.transmissionMap.channel),thicknessMapUv:se&&y(M.thicknessMap.channel),alphaMapUv:ct&&y(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(gt||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Bt,vertexUv2s:It,vertexUv3s:$t,pointsUvs:J.isPoints===!0&&!!N.attributes.uv&&(Tt||ct),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Zt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ne,flipSided:M.side===Re,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pt&&M.extensions.derivatives===!0,extensionFragDepth:pt&&M.extensions.fragDepth===!0,extensionDrawBuffers:pt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)w.push(F),w.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(_(w,M),v(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){const w=f[M.type];let F;if(w){const O=Ke[w];F=Bc.clone(O.uniforms)}else F=M.uniforms;return F}function T(M,w){let F;for(let O=0,J=c.length;O<J;O++){const L=c[O];if(L.cacheKey===w){F=L,++F.usedTimes;break}}return F===void 0&&(F=new $f(r,w,M,s),c.push(F)),F}function b(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:D}}function ep(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function ip(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ta(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ea(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,g,f,y,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:g,groupOrder:f,renderOrder:u.renderOrder,z:y,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=g,m.groupOrder=f,m.renderOrder=u.renderOrder,m.z=y,m.group=p),t++,m}function a(u,d,g,f,y,p){const m=o(u,d,g,f,y,p);g.transmission>0?i.push(m):g.transparent===!0?n.push(m):e.push(m)}function l(u,d,g,f,y,p){const m=o(u,d,g,f,y,p);g.transmission>0?i.unshift(m):g.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||ip),i.length>1&&i.sort(d||ta),n.length>1&&n.sort(d||ta)}function h(){for(let u=t,d=r.length;u<d;u++){const g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function np(){let r=new WeakMap;function t(i,n){const s=r.get(i);let o;return s===void 0?(o=new ea,r.set(i,[o])):n>=s.length?(o=new ea,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function sp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ct};break;case"SpotLight":e={position:new P,direction:new P,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function rp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let op=0;function ap(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function lp(r,t){const e=new sp,i=rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new P);const s=new P,o=new ae,a=new ae;function l(h,u){let d=0,g=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let y=0,p=0,m=0,_=0,v=0,x=0,T=0,b=0,C=0,D=0,M=0;h.sort(ap);const w=u===!0?Math.PI:1;for(let O=0,J=h.length;O<J;O++){const L=h[O],N=L.color,W=L.intensity,K=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*W*w,g+=N.g*W*w,f+=N.b*W*w;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],W);M++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const Z=L.shadow,tt=i.get(L);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,n.directionalShadow[y]=tt,n.directionalShadowMap[y]=Y,n.directionalShadowMatrix[y]=L.shadow.matrix,x++}n.directional[y]=$,y++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(N).multiplyScalar(W*w),$.distance=K,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[m]=$;const Z=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,Z.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[m]=Z.matrix,L.castShadow){const tt=i.get(L);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,n.spotShadow[m]=tt,n.spotShadowMap[m]=Y,b++}m++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(N).multiplyScalar(W),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=$,_++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*w),$.distance=L.distance,$.decay=L.decay,L.castShadow){const Z=L.shadow,tt=i.get(L);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,tt.shadowCameraNear=Z.camera.near,tt.shadowCameraFar=Z.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=L.shadow.matrix,T++}n.point[p]=$,p++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(W*w),$.groundColor.copy(L.groundColor).multiplyScalar(W*w),n.hemi[v]=$,v++}}_>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=g,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==y||F.pointLength!==p||F.spotLength!==m||F.rectAreaLength!==_||F.hemiLength!==v||F.numDirectionalShadows!==x||F.numPointShadows!==T||F.numSpotShadows!==b||F.numSpotMaps!==C||F.numLightProbes!==M)&&(n.directional.length=y,n.spot.length=m,n.rectArea.length=_,n.point.length=p,n.hemi.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+C-D,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=M,F.directionalLength=y,F.pointLength=p,F.spotLength=m,F.rectAreaLength=_,F.hemiLength=v,F.numDirectionalShadows=x,F.numPointShadows=T,F.numSpotShadows=b,F.numSpotMaps=C,F.numLightProbes=M,n.version=op++)}function c(h,u){let d=0,g=0,f=0,y=0,p=0;const m=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){const x=h[_];if(x.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(x.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const T=n.rectArea[y];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),g++}else if(x.isHemisphereLight){const T=n.hemi[p];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:n}}function ia(r,t){const e=new lp(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cp(r,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new ia(r,t),e.set(s,[l])):o>=a.length?(l=new ia(r,t),a.push(l)):l=a[o],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class hp extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class up extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fp=`uniform sampler2D shadow_pass;
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
}`;function pp(r,t,e){let i=new Mr;const n=new Pt,s=new Pt,o=new ee,a=new hp({depthPacking:Yl}),l=new up,c={},h=e.maxTextureSize,u={[gi]:Re,[Re]:gi,[Ne]:Ne},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:dp,fragmentShader:fp}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const f=new de;f.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new I(f,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let m=this.type;this.render=function(b,C,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const M=r.getRenderTarget(),w=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),O=r.state;O.setBlending(fi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const J=m!==ii&&this.type===ii,L=m===ii&&this.type!==ii;for(let N=0,W=b.length;N<W;N++){const K=b[N],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const $=Y.getFrameExtents();if(n.multiply($),s.copy(Y.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/$.x),n.x=s.x*$.x,Y.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/$.y),n.y=s.y*$.y,Y.mapSize.y=s.y)),Y.map===null||J===!0||L===!0){const tt=this.type!==ii?{minFilter:Ee,magFilter:Ee}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ui(n.x,n.y,tt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const Z=Y.getViewportCount();for(let tt=0;tt<Z;tt++){const et=Y.getViewport(tt);o.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),O.viewport(o),Y.updateMatrices(K,tt),i=Y.getFrustum(),x(C,D,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ii&&_(Y,D),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,w,F)};function _(b,C){const D=t.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ui(n.x,n.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(C,null,D,d,y,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(C,null,D,g,y,null)}function v(b,C,D,M){let w=null;const F=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)w=F;else if(w=D.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=w.uuid,J=C.uuid;let L=c[O];L===void 0&&(L={},c[O]=L);let N=L[J];N===void 0&&(N=w.clone(),L[J]=N,C.addEventListener("dispose",T)),w=N}if(w.visible=C.visible,w.wireframe=C.wireframe,M===ii?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:u[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=r.properties.get(w);O.light=D}return w}function x(b,C,D,M,w){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===ii)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const J=t.update(b),L=b.material;if(Array.isArray(L)){const N=J.groups;for(let W=0,K=N.length;W<K;W++){const Y=N[W],$=L[Y.materialIndex];if($&&$.visible){const Z=v(b,$,M,w);b.onBeforeShadow(r,b,C,D,J,Z,Y),r.renderBufferDirect(D,null,J,Z,b,Y),b.onAfterShadow(r,b,C,D,J,Z,Y)}}}else if(L.visible){const N=v(b,L,M,w);b.onBeforeShadow(r,b,C,D,J,N,null),r.renderBufferDirect(D,null,J,N,b,null),b.onAfterShadow(r,b,C,D,J,N,null)}}const O=b.children;for(let J=0,L=O.length;J<L;J++)x(O[J],C,D,M,w)}function T(b){b.target.removeEventListener("dispose",T);for(const D in c){const M=c[D],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function mp(r,t,e){const i=e.isWebGL2;function n(){let R=!1;const ft=new ee;let pt=null;const Bt=new ee(0,0,0,0);return{setMask:function(It){pt!==It&&!R&&(r.colorMask(It,It,It,It),pt=It)},setLocked:function(It){R=It},setClear:function(It,$t,Zt,fe,be){be===!0&&(It*=fe,$t*=fe,Zt*=fe),ft.set(It,$t,Zt,fe),Bt.equals(ft)===!1&&(r.clearColor(It,$t,Zt,fe),Bt.copy(ft))},reset:function(){R=!1,pt=null,Bt.set(-1,0,0,0)}}}function s(){let R=!1,ft=null,pt=null,Bt=null;return{setTest:function(It){It?_t(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(It){ft!==It&&!R&&(r.depthMask(It),ft=It)},setFunc:function(It){if(pt!==It){switch(It){case Sl:r.depthFunc(r.NEVER);break;case wl:r.depthFunc(r.ALWAYS);break;case El:r.depthFunc(r.LESS);break;case as:r.depthFunc(r.LEQUAL);break;case bl:r.depthFunc(r.EQUAL);break;case Tl:r.depthFunc(r.GEQUAL);break;case Al:r.depthFunc(r.GREATER);break;case Cl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=It}},setLocked:function(It){R=It},setClear:function(It){Bt!==It&&(r.clearDepth(It),Bt=It)},reset:function(){R=!1,ft=null,pt=null,Bt=null}}}function o(){let R=!1,ft=null,pt=null,Bt=null,It=null,$t=null,Zt=null,fe=null,be=null;return{setTest:function(Jt){R||(Jt?_t(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Jt){ft!==Jt&&!R&&(r.stencilMask(Jt),ft=Jt)},setFunc:function(Jt,Te,Ye){(pt!==Jt||Bt!==Te||It!==Ye)&&(r.stencilFunc(Jt,Te,Ye),pt=Jt,Bt=Te,It=Ye)},setOp:function(Jt,Te,Ye){($t!==Jt||Zt!==Te||fe!==Ye)&&(r.stencilOp(Jt,Te,Ye),$t=Jt,Zt=Te,fe=Ye)},setLocked:function(Jt){R=Jt},setClear:function(Jt){be!==Jt&&(r.clearStencil(Jt),be=Jt)},reset:function(){R=!1,ft=null,pt=null,Bt=null,It=null,$t=null,Zt=null,fe=null,be=null}}}const a=new n,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},g={},f=new WeakMap,y=[],p=null,m=!1,_=null,v=null,x=null,T=null,b=null,C=null,D=null,M=new Ct(0,0,0),w=0,F=!1,O=null,J=null,L=null,N=null,W=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=$>=2);let tt=null,et={};const H=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),at=new ee().fromArray(H),yt=new ee().fromArray(Q);function xt(R,ft,pt,Bt){const It=new Uint8Array(4),$t=r.createTexture();r.bindTexture(R,$t),r.texParameteri(R,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(R,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Zt=0;Zt<pt;Zt++)i&&(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)?r.texImage3D(ft,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,It):r.texImage2D(ft+Zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,It);return $t}const At={};At[r.TEXTURE_2D]=xt(r.TEXTURE_2D,r.TEXTURE_2D,1),At[r.TEXTURE_CUBE_MAP]=xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(At[r.TEXTURE_2D_ARRAY]=xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),At[r.TEXTURE_3D]=xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(r.DEPTH_TEST),l.setFunc(as),kt(!1),A(Fr),_t(r.CULL_FACE),gt(fi);function _t(R){d[R]!==!0&&(r.enable(R),d[R]=!0)}function Tt(R){d[R]!==!1&&(r.disable(R),d[R]=!1)}function Mt(R,ft){return g[R]!==ft?(r.bindFramebuffer(R,ft),g[R]=ft,i&&(R===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=ft),R===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=ft)),!0):!1}function B(R,ft){let pt=y,Bt=!1;if(R)if(pt=f.get(ft),pt===void 0&&(pt=[],f.set(ft,pt)),R.isWebGLMultipleRenderTargets){const It=R.texture;if(pt.length!==It.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let $t=0,Zt=It.length;$t<Zt;$t++)pt[$t]=r.COLOR_ATTACHMENT0+$t;pt.length=It.length,Bt=!0}}else pt[0]!==r.COLOR_ATTACHMENT0&&(pt[0]=r.COLOR_ATTACHMENT0,Bt=!0);else pt[0]!==r.BACK&&(pt[0]=r.BACK,Bt=!0);Bt&&(e.isWebGL2?r.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function ne(R){return p!==R?(r.useProgram(R),p=R,!0):!1}const wt={[Pi]:r.FUNC_ADD,[al]:r.FUNC_SUBTRACT,[ll]:r.FUNC_REVERSE_SUBTRACT};if(i)wt[zr]=r.MIN,wt[Hr]=r.MAX;else{const R=t.get("EXT_blend_minmax");R!==null&&(wt[zr]=R.MIN_EXT,wt[Hr]=R.MAX_EXT)}const Lt={[cl]:r.ZERO,[hl]:r.ONE,[ul]:r.SRC_COLOR,[or]:r.SRC_ALPHA,[yl]:r.SRC_ALPHA_SATURATE,[ml]:r.DST_COLOR,[fl]:r.DST_ALPHA,[dl]:r.ONE_MINUS_SRC_COLOR,[ar]:r.ONE_MINUS_SRC_ALPHA,[gl]:r.ONE_MINUS_DST_COLOR,[pl]:r.ONE_MINUS_DST_ALPHA,[_l]:r.CONSTANT_COLOR,[vl]:r.ONE_MINUS_CONSTANT_COLOR,[xl]:r.CONSTANT_ALPHA,[Ml]:r.ONE_MINUS_CONSTANT_ALPHA};function gt(R,ft,pt,Bt,It,$t,Zt,fe,be,Jt){if(R===fi){m===!0&&(Tt(r.BLEND),m=!1);return}if(m===!1&&(_t(r.BLEND),m=!0),R!==ol){if(R!==_||Jt!==F){if((v!==Pi||b!==Pi)&&(r.blendEquation(r.FUNC_ADD),v=Pi,b=Pi),Jt)switch(R){case on:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rr:r.blendFunc(r.ONE,r.ONE);break;case Or:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kr:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case on:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Or:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kr:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,T=null,C=null,D=null,M.set(0,0,0),w=0,_=R,F=Jt}return}It=It||ft,$t=$t||pt,Zt=Zt||Bt,(ft!==v||It!==b)&&(r.blendEquationSeparate(wt[ft],wt[It]),v=ft,b=It),(pt!==x||Bt!==T||$t!==C||Zt!==D)&&(r.blendFuncSeparate(Lt[pt],Lt[Bt],Lt[$t],Lt[Zt]),x=pt,T=Bt,C=$t,D=Zt),(fe.equals(M)===!1||be!==w)&&(r.blendColor(fe.r,fe.g,fe.b,be),M.copy(fe),w=be),_=R,F=!1}function Qt(R,ft){R.side===Ne?Tt(r.CULL_FACE):_t(r.CULL_FACE);let pt=R.side===Re;ft&&(pt=!pt),kt(pt),R.blending===on&&R.transparent===!1?gt(fi):gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Bt=R.stencilWrite;c.setTest(Bt),Bt&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),k(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(R){O!==R&&(R?r.frontFace(r.CW):r.frontFace(r.CCW),O=R)}function A(R){R!==il?(_t(r.CULL_FACE),R!==J&&(R===Fr?r.cullFace(r.BACK):R===nl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),J=R}function S(R){R!==L&&(Y&&r.lineWidth(R),L=R)}function k(R,ft,pt){R?(_t(r.POLYGON_OFFSET_FILL),(N!==ft||W!==pt)&&(r.polygonOffset(ft,pt),N=ft,W=pt)):Tt(r.POLYGON_OFFSET_FILL)}function nt(R){R?_t(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function it(R){R===void 0&&(R=r.TEXTURE0+K-1),tt!==R&&(r.activeTexture(R),tt=R)}function rt(R,ft,pt){pt===void 0&&(tt===null?pt=r.TEXTURE0+K-1:pt=tt);let Bt=et[pt];Bt===void 0&&(Bt={type:void 0,texture:void 0},et[pt]=Bt),(Bt.type!==R||Bt.texture!==ft)&&(tt!==pt&&(r.activeTexture(pt),tt=pt),r.bindTexture(R,ft||At[R]),Bt.type=R,Bt.texture=ft)}function St(){const R=et[tt];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ut(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Rt(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ft(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function z(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function lt(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Dt(R){at.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),at.copy(R))}function jt(R){yt.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),yt.copy(R))}function se(R,ft){let pt=u.get(ft);pt===void 0&&(pt=new WeakMap,u.set(ft,pt));let Bt=pt.get(R);Bt===void 0&&(Bt=r.getUniformBlockIndex(ft,R.name),pt.set(R,Bt))}function Vt(R,ft){const Bt=u.get(ft).get(R);h.get(ft)!==Bt&&(r.uniformBlockBinding(ft,Bt,R.__bindingPointIndex),h.set(ft,Bt))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},tt=null,et={},g={},f=new WeakMap,y=[],p=null,m=!1,_=null,v=null,x=null,T=null,b=null,C=null,D=null,M=new Ct(0,0,0),w=0,F=!1,O=null,J=null,L=null,N=null,W=null,at.set(0,0,r.canvas.width,r.canvas.height),yt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_t,disable:Tt,bindFramebuffer:Mt,drawBuffers:B,useProgram:ne,setBlending:gt,setMaterial:Qt,setFlipSided:kt,setCullFace:A,setLineWidth:S,setPolygonOffset:k,setScissorTest:nt,activeTexture:it,bindTexture:rt,unbindTexture:St,compressedTexImage2D:ut,compressedTexImage3D:vt,texImage2D:dt,texImage3D:lt,updateUBOMapping:se,uniformBlockBinding:Vt,texStorage2D:z,texStorage3D:ot,texSubImage2D:Rt,texSubImage3D:Ft,compressedTexSubImage2D:st,compressedTexSubImage3D:qt,scissor:Dt,viewport:jt,reset:ct}}function gp(r,t,e,i,n,s,o){const a=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,S){return g?new OffscreenCanvas(A,S):ps("canvas")}function y(A,S,k,nt){let it=1;if((A.width>nt||A.height>nt)&&(it=nt/Math.max(A.width,A.height)),it<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const rt=S?fs:Math.floor,St=rt(it*A.width),ut=rt(it*A.height);u===void 0&&(u=f(St,ut));const vt=k?f(St,ut):u;return vt.width=St,vt.height=ut,vt.getContext("2d").drawImage(A,0,0,St,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+St+"x"+ut+")."),vt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return dr(A.width)&&dr(A.height)}function m(A){return a?!1:A.wrapS!==je||A.wrapT!==je||A.minFilter!==Ee&&A.minFilter!==ke}function _(A,S){return A.generateMipmaps&&S&&A.minFilter!==Ee&&A.minFilter!==ke}function v(A){r.generateMipmap(A)}function x(A,S,k,nt,it=!1){if(a===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=S;if(S===r.RED&&(k===r.FLOAT&&(rt=r.R32F),k===r.HALF_FLOAT&&(rt=r.R16F),k===r.UNSIGNED_BYTE&&(rt=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(rt=r.R8UI),k===r.UNSIGNED_SHORT&&(rt=r.R16UI),k===r.UNSIGNED_INT&&(rt=r.R32UI),k===r.BYTE&&(rt=r.R8I),k===r.SHORT&&(rt=r.R16I),k===r.INT&&(rt=r.R32I)),S===r.RG&&(k===r.FLOAT&&(rt=r.RG32F),k===r.HALF_FLOAT&&(rt=r.RG16F),k===r.UNSIGNED_BYTE&&(rt=r.RG8)),S===r.RGBA){const St=it?cs:Yt.getTransfer(nt);k===r.FLOAT&&(rt=r.RGBA32F),k===r.HALF_FLOAT&&(rt=r.RGBA16F),k===r.UNSIGNED_BYTE&&(rt=St===te?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(rt=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(rt=r.RGB5_A1)}return(rt===r.R16F||rt===r.R32F||rt===r.RG16F||rt===r.RG32F||rt===r.RGBA16F||rt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function T(A,S,k){return _(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==Ee&&A.minFilter!==ke?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){return A===Ee||A===Gr||A===Ts?r.NEAREST:r.LINEAR}function C(A){const S=A.target;S.removeEventListener("dispose",C),M(S),S.isVideoTexture&&h.delete(S)}function D(A){const S=A.target;S.removeEventListener("dispose",D),F(S)}function M(A){const S=i.get(A);if(S.__webglInit===void 0)return;const k=A.source,nt=d.get(k);if(nt){const it=nt[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(A),Object.keys(nt).length===0&&d.delete(k)}i.remove(A)}function w(A){const S=i.get(A);r.deleteTexture(S.__webglTexture);const k=A.source,nt=d.get(k);delete nt[S.__cacheKey],o.memory.textures--}function F(A){const S=A.texture,k=i.get(A),nt=i.get(S);if(nt.__webglTexture!==void 0&&(r.deleteTexture(nt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(k.__webglFramebuffer[it]))for(let rt=0;rt<k.__webglFramebuffer[it].length;rt++)r.deleteFramebuffer(k.__webglFramebuffer[it][rt]);else r.deleteFramebuffer(k.__webglFramebuffer[it]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[it])}else{if(Array.isArray(k.__webglFramebuffer))for(let it=0;it<k.__webglFramebuffer.length;it++)r.deleteFramebuffer(k.__webglFramebuffer[it]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let it=0;it<k.__webglColorRenderbuffer.length;it++)k.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[it]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let it=0,rt=S.length;it<rt;it++){const St=i.get(S[it]);St.__webglTexture&&(r.deleteTexture(St.__webglTexture),o.memory.textures--),i.remove(S[it])}i.remove(S),i.remove(A)}let O=0;function J(){O=0}function L(){const A=O;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),O+=1,A}function N(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function W(A,S){const k=i.get(A);if(A.isVideoTexture&&Qt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(k,A,S);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function K(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){at(k,A,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function Y(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){at(k,A,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function $(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){yt(k,A,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const Z={[ls]:r.REPEAT,[je]:r.CLAMP_TO_EDGE,[hr]:r.MIRRORED_REPEAT},tt={[Ee]:r.NEAREST,[Gr]:r.NEAREST_MIPMAP_NEAREST,[Ts]:r.NEAREST_MIPMAP_LINEAR,[ke]:r.LINEAR,[Ol]:r.LINEAR_MIPMAP_NEAREST,[bn]:r.LINEAR_MIPMAP_LINEAR},et={[$l]:r.NEVER,[ic]:r.ALWAYS,[Zl]:r.LESS,[Ca]:r.LEQUAL,[Jl]:r.EQUAL,[ec]:r.GEQUAL,[Ql]:r.GREATER,[tc]:r.NOTEQUAL};function H(A,S,k){if(k?(r.texParameteri(A,r.TEXTURE_WRAP_S,Z[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Z[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Z[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,tt[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,tt[S.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==je||S.wrapT!==je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,b(S.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==Ee&&S.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ee||S.minFilter!==Ts&&S.minFilter!==bn||S.type===di&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===Tn&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(r.texParameterf(A,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Q(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const nt=S.source;let it=d.get(nt);it===void 0&&(it={},d.set(nt,it));const rt=N(S);if(rt!==A.__cacheKey){it[rt]===void 0&&(it[rt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[rt].usedTimes++;const St=it[A.__cacheKey];St!==void 0&&(it[A.__cacheKey].usedTimes--,St.usedTimes===0&&w(S)),A.__cacheKey=rt,A.__webglTexture=it[rt].texture}return k}function at(A,S,k){let nt=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=r.TEXTURE_3D);const it=Q(A,S),rt=S.source;e.bindTexture(nt,A.__webglTexture,r.TEXTURE0+k);const St=i.get(rt);if(rt.version!==St.__version||it===!0){e.activeTexture(r.TEXTURE0+k);const ut=Yt.getPrimaries(Yt.workingColorSpace),vt=S.colorSpace===ze?null:Yt.getPrimaries(S.colorSpace),Rt=S.colorSpace===ze||ut===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ft=m(S)&&p(S.image)===!1;let st=y(S.image,Ft,!1,n.maxTextureSize);st=kt(S,st);const qt=p(st)||a,z=s.convert(S.format,S.colorSpace);let ot=s.convert(S.type),dt=x(S.internalFormat,z,ot,S.colorSpace,S.isVideoTexture);H(nt,S,qt);let lt;const Dt=S.mipmaps,jt=a&&S.isVideoTexture!==!0&&dt!==Ta,se=St.__version===void 0||it===!0,Vt=T(S,st,qt);if(S.isDepthTexture)dt=r.DEPTH_COMPONENT,a?S.type===di?dt=r.DEPTH_COMPONENT32F:S.type===ui?dt=r.DEPTH_COMPONENT24:S.type===Li?dt=r.DEPTH24_STENCIL8:dt=r.DEPTH_COMPONENT16:S.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Di&&dt===r.DEPTH_COMPONENT&&S.type!==yr&&S.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ui,ot=s.convert(S.type)),S.format===hn&&dt===r.DEPTH_COMPONENT&&(dt=r.DEPTH_STENCIL,S.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Li,ot=s.convert(S.type))),se&&(jt?e.texStorage2D(r.TEXTURE_2D,1,dt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,dt,st.width,st.height,0,z,ot,null));else if(S.isDataTexture)if(Dt.length>0&&qt){jt&&se&&e.texStorage2D(r.TEXTURE_2D,Vt,dt,Dt[0].width,Dt[0].height);for(let ct=0,R=Dt.length;ct<R;ct++)lt=Dt[ct],jt?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,lt.width,lt.height,z,ot,lt.data):e.texImage2D(r.TEXTURE_2D,ct,dt,lt.width,lt.height,0,z,ot,lt.data);S.generateMipmaps=!1}else jt?(se&&e.texStorage2D(r.TEXTURE_2D,Vt,dt,st.width,st.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,z,ot,st.data)):e.texImage2D(r.TEXTURE_2D,0,dt,st.width,st.height,0,z,ot,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){jt&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,dt,Dt[0].width,Dt[0].height,st.depth);for(let ct=0,R=Dt.length;ct<R;ct++)lt=Dt[ct],S.format!==qe?z!==null?jt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,lt.width,lt.height,st.depth,z,lt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,dt,lt.width,lt.height,st.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,lt.width,lt.height,st.depth,z,ot,lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,dt,lt.width,lt.height,st.depth,0,z,ot,lt.data)}else{jt&&se&&e.texStorage2D(r.TEXTURE_2D,Vt,dt,Dt[0].width,Dt[0].height);for(let ct=0,R=Dt.length;ct<R;ct++)lt=Dt[ct],S.format!==qe?z!==null?jt?e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,lt.width,lt.height,z,lt.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,dt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,lt.width,lt.height,z,ot,lt.data):e.texImage2D(r.TEXTURE_2D,ct,dt,lt.width,lt.height,0,z,ot,lt.data)}else if(S.isDataArrayTexture)jt?(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,dt,st.width,st.height,st.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,z,ot,st.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,dt,st.width,st.height,st.depth,0,z,ot,st.data);else if(S.isData3DTexture)jt?(se&&e.texStorage3D(r.TEXTURE_3D,Vt,dt,st.width,st.height,st.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,z,ot,st.data)):e.texImage3D(r.TEXTURE_3D,0,dt,st.width,st.height,st.depth,0,z,ot,st.data);else if(S.isFramebufferTexture){if(se)if(jt)e.texStorage2D(r.TEXTURE_2D,Vt,dt,st.width,st.height);else{let ct=st.width,R=st.height;for(let ft=0;ft<Vt;ft++)e.texImage2D(r.TEXTURE_2D,ft,dt,ct,R,0,z,ot,null),ct>>=1,R>>=1}}else if(Dt.length>0&&qt){jt&&se&&e.texStorage2D(r.TEXTURE_2D,Vt,dt,Dt[0].width,Dt[0].height);for(let ct=0,R=Dt.length;ct<R;ct++)lt=Dt[ct],jt?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,z,ot,lt):e.texImage2D(r.TEXTURE_2D,ct,dt,z,ot,lt);S.generateMipmaps=!1}else jt?(se&&e.texStorage2D(r.TEXTURE_2D,Vt,dt,st.width,st.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,z,ot,st)):e.texImage2D(r.TEXTURE_2D,0,dt,z,ot,st);_(S,qt)&&v(nt),St.__version=rt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function yt(A,S,k){if(S.image.length!==6)return;const nt=Q(A,S),it=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const rt=i.get(it);if(it.version!==rt.__version||nt===!0){e.activeTexture(r.TEXTURE0+k);const St=Yt.getPrimaries(Yt.workingColorSpace),ut=S.colorSpace===ze?null:Yt.getPrimaries(S.colorSpace),vt=S.colorSpace===ze||St===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,Ft=S.image[0]&&S.image[0].isDataTexture,st=[];for(let ct=0;ct<6;ct++)!Rt&&!Ft?st[ct]=y(S.image[ct],!1,!0,n.maxCubemapSize):st[ct]=Ft?S.image[ct].image:S.image[ct],st[ct]=kt(S,st[ct]);const qt=st[0],z=p(qt)||a,ot=s.convert(S.format,S.colorSpace),dt=s.convert(S.type),lt=x(S.internalFormat,ot,dt,S.colorSpace),Dt=a&&S.isVideoTexture!==!0,jt=rt.__version===void 0||nt===!0;let se=T(S,qt,z);H(r.TEXTURE_CUBE_MAP,S,z);let Vt;if(Rt){Dt&&jt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,se,lt,qt.width,qt.height);for(let ct=0;ct<6;ct++){Vt=st[ct].mipmaps;for(let R=0;R<Vt.length;R++){const ft=Vt[R];S.format!==qe?ot!==null?Dt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,R,0,0,ft.width,ft.height,ot,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,R,lt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,R,0,0,ft.width,ft.height,ot,dt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,R,lt,ft.width,ft.height,0,ot,dt,ft.data)}}}else{Vt=S.mipmaps,Dt&&jt&&(Vt.length>0&&se++,e.texStorage2D(r.TEXTURE_CUBE_MAP,se,lt,st[0].width,st[0].height));for(let ct=0;ct<6;ct++)if(Ft){Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,st[ct].width,st[ct].height,ot,dt,st[ct].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,lt,st[ct].width,st[ct].height,0,ot,dt,st[ct].data);for(let R=0;R<Vt.length;R++){const pt=Vt[R].image[ct].image;Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,R+1,0,0,pt.width,pt.height,ot,dt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,R+1,lt,pt.width,pt.height,0,ot,dt,pt.data)}}else{Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,ot,dt,st[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,lt,ot,dt,st[ct]);for(let R=0;R<Vt.length;R++){const ft=Vt[R];Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,R+1,0,0,ot,dt,ft.image[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,R+1,lt,ot,dt,ft.image[ct])}}}_(S,z)&&v(r.TEXTURE_CUBE_MAP),rt.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xt(A,S,k,nt,it,rt){const St=s.convert(k.format,k.colorSpace),ut=s.convert(k.type),vt=x(k.internalFormat,St,ut,k.colorSpace);if(!i.get(S).__hasExternalTextures){const Ft=Math.max(1,S.width>>rt),st=Math.max(1,S.height>>rt);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,rt,vt,Ft,st,S.depth,0,St,ut,null):e.texImage2D(it,rt,vt,Ft,st,0,St,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),gt(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,it,i.get(k).__webglTexture,0,Lt(S)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,it,i.get(k).__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function At(A,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let nt=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||gt(S)){const it=S.depthTexture;it&&it.isDepthTexture&&(it.type===di?nt=r.DEPTH_COMPONENT32F:it.type===ui&&(nt=r.DEPTH_COMPONENT24));const rt=Lt(S);gt(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,nt,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,nt,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,nt,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const nt=Lt(S);k&&gt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,r.DEPTH24_STENCIL8,S.width,S.height):gt(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const nt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<nt.length;it++){const rt=nt[it],St=s.convert(rt.format,rt.colorSpace),ut=s.convert(rt.type),vt=x(rt.internalFormat,St,ut,rt.colorSpace),Rt=Lt(S);k&&gt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,vt,S.width,S.height):gt(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,vt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,vt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const nt=i.get(S.depthTexture).__webglTexture,it=Lt(S);if(S.depthTexture.format===Di)gt(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(S.depthTexture.format===hn)gt(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Tt(A){const S=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");_t(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]=r.createRenderbuffer(),At(S.__webglDepthbuffer[nt],A,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),At(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(A,S,k){const nt=i.get(A);S!==void 0&&xt(nt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Tt(A)}function B(A){const S=A.texture,k=i.get(A),nt=i.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=S.version,o.memory.textures++);const it=A.isWebGLCubeRenderTarget===!0,rt=A.isWebGLMultipleRenderTargets===!0,St=p(A)||a;if(it){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let vt=0;vt<S.mipmaps.length;vt++)k.__webglFramebuffer[ut][vt]=r.createFramebuffer()}else k.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)k.__webglFramebuffer[ut]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(rt)if(n.drawBuffers){const ut=A.texture;for(let vt=0,Rt=ut.length;vt<Rt;vt++){const Ft=i.get(ut[vt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&gt(A)===!1){const ut=rt?S:[S];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let vt=0;vt<ut.length;vt++){const Rt=ut[vt];k.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[vt]);const Ft=s.convert(Rt.format,Rt.colorSpace),st=s.convert(Rt.type),qt=x(Rt.internalFormat,Ft,st,Rt.colorSpace,A.isXRRenderTarget===!0),z=Lt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,z,qt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,k.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),At(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(it){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),H(r.TEXTURE_CUBE_MAP,S,St);for(let ut=0;ut<6;ut++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)xt(k.__webglFramebuffer[ut][vt],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else xt(k.__webglFramebuffer[ut],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);_(S,St)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const ut=A.texture;for(let vt=0,Rt=ut.length;vt<Rt;vt++){const Ft=ut[vt],st=i.get(Ft);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),H(r.TEXTURE_2D,Ft,St),xt(k.__webglFramebuffer,A,Ft,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),_(Ft,St)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ut=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,nt.__webglTexture),H(ut,S,St),a&&S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)xt(k.__webglFramebuffer[vt],A,S,r.COLOR_ATTACHMENT0,ut,vt);else xt(k.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,ut,0);_(S,St)&&v(ut),e.unbindTexture()}A.depthBuffer&&Tt(A)}function ne(A){const S=p(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let nt=0,it=k.length;nt<it;nt++){const rt=k[nt];if(_(rt,S)){const St=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ut=i.get(rt).__webglTexture;e.bindTexture(St,ut),v(St),e.unbindTexture()}}}function wt(A){if(a&&A.samples>0&&gt(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,nt=A.height;let it=r.COLOR_BUFFER_BIT;const rt=[],St=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=i.get(A),vt=A.isWebGLMultipleRenderTargets===!0;if(vt)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){rt.push(r.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&rt.push(St);const Ft=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Ft===!1&&(A.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),vt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Rt]),Ft===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[St]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[St])),vt){const st=i.get(S[Rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0)}r.blitFramebuffer(0,0,k,nt,0,0,k,nt,it,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Rt]);const Ft=i.get(S[Rt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,Ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Lt(A){return Math.min(n.maxSamples,A.samples)}function gt(A){const S=i.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Qt(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function kt(A,S){const k=A.colorSpace,nt=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ur||k!==si&&k!==ze&&(Yt.getTransfer(k)===te?a===!1?t.has("EXT_sRGB")===!0&&nt===qe?(A.format=ur,A.minFilter=ke,A.generateMipmaps=!1):S=Ra.sRGBToLinear(S):(nt!==qe||it!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=L,this.resetTextureUnits=J,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Mt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=gt}function yp(r,t,e){const i=e.isWebGL2;function n(s,o=ze){let a;const l=Yt.getTransfer(o);if(s===mi)return r.UNSIGNED_BYTE;if(s===Ma)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Sa)return r.UNSIGNED_SHORT_5_5_5_1;if(s===kl)return r.BYTE;if(s===zl)return r.SHORT;if(s===yr)return r.UNSIGNED_SHORT;if(s===xa)return r.INT;if(s===ui)return r.UNSIGNED_INT;if(s===di)return r.FLOAT;if(s===Tn)return i?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hl)return r.ALPHA;if(s===qe)return r.RGBA;if(s===Gl)return r.LUMINANCE;if(s===Vl)return r.LUMINANCE_ALPHA;if(s===Di)return r.DEPTH_COMPONENT;if(s===hn)return r.DEPTH_STENCIL;if(s===ur)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Wl)return r.RED;if(s===wa)return r.RED_INTEGER;if(s===Xl)return r.RG;if(s===Ea)return r.RG_INTEGER;if(s===ba)return r.RGBA_INTEGER;if(s===As||s===Cs||s===Ps||s===Rs)if(l===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vr||s===Wr||s===Xr||s===jr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ta)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qr||s===Yr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qr)return l===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kr||s===$r||s===Zr||s===Jr||s===Qr||s===to||s===eo||s===io||s===no||s===so||s===ro||s===oo||s===ao||s===lo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Kr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$r)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===to)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===io)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===no)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===so)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ro)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===oo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ao)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ls||s===co||s===ho)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ls)return l===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===co)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ho)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jl||s===uo||s===fo||s===po)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ls)return a.COMPRESSED_RED_RGTC1_EXT;if(s===uo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===po)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Li?i?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class _p extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Et extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vp={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const y of t.hand.values()){const p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),g=.02,f=.005;c.inputState.pinching&&d>g+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class xp extends Ni{constructor(t,e){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,g=null,f=null;const y=e.getContextAttributes();let p=null,m=null;const _=[],v=[],x=new Pt;let T=null;const b=new Be;b.layers.enable(1),b.viewport=new ee;const C=new Be;C.layers.enable(2),C.viewport=new ee;const D=[b,C],M=new _p;M.layers.enable(1),M.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=_[H];return Q===void 0&&(Q=new tr,_[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=_[H];return Q===void 0&&(Q=new tr,_[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=_[H];return Q===void 0&&(Q=new tr,_[H]=Q),Q.getHandSpace()};function O(H){const Q=v.indexOf(H.inputSource);if(Q===-1)return;const at=_[Q];at!==void 0&&(at.update(H.inputSource,H.frame,c||o),at.dispatchEvent({type:H.type,data:H.inputSource}))}function J(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",J),n.removeEventListener("inputsourceschange",L);for(let H=0;H<_.length;H++){const Q=v[H];Q!==null&&(v[H]=null,_[H].disconnect(Q))}w=null,F=null,t.setRenderTarget(p),g=null,d=null,u=null,n=null,m=null,et.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",J),n.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(x),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:n.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(n,e,Q),n.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new Ui(g.framebufferWidth,g.framebufferHeight,{format:qe,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,at=null,yt=null;y.depth&&(yt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=y.stencil?hn:Di,at=y.stencil?Li:ui);const xt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(xt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),m=new Ui(d.textureWidth,d.textureHeight,{format:qe,type:mi,depthTexture:new Ha(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const At=t.properties.get(m);At.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),et.setContext(n),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(H){for(let Q=0;Q<H.removed.length;Q++){const at=H.removed[Q],yt=v.indexOf(at);yt>=0&&(v[yt]=null,_[yt].disconnect(at))}for(let Q=0;Q<H.added.length;Q++){const at=H.added[Q];let yt=v.indexOf(at);if(yt===-1){for(let At=0;At<_.length;At++)if(At>=v.length){v.push(at),yt=At;break}else if(v[At]===null){v[At]=at,yt=At;break}if(yt===-1)break}const xt=_[yt];xt&&xt.connect(at)}}const N=new P,W=new P;function K(H,Q,at){N.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(at.matrixWorld);const yt=N.distanceTo(W),xt=Q.projectionMatrix.elements,At=at.projectionMatrix.elements,_t=xt[14]/(xt[10]-1),Tt=xt[14]/(xt[10]+1),Mt=(xt[9]+1)/xt[5],B=(xt[9]-1)/xt[5],ne=(xt[8]-1)/xt[0],wt=(At[8]+1)/At[0],Lt=_t*ne,gt=_t*wt,Qt=yt/(-ne+wt),kt=Qt*-ne;Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(kt),H.translateZ(Qt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const A=_t+Qt,S=Tt+Qt,k=Lt-kt,nt=gt+(yt-kt),it=Mt*Tt/S*A,rt=B*Tt/S*A;H.projectionMatrix.makePerspective(k,nt,it,rt,A,S),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function Y(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;M.near=C.near=b.near=H.near,M.far=C.far=b.far=H.far,(w!==M.near||F!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far);const Q=H.parent,at=M.cameras;Y(M,Q);for(let yt=0;yt<at.length;yt++)Y(at[yt],Q);at.length===2?K(M,b,C):M.projectionMatrix.copy(b.projectionMatrix),$(H,M,Q)};function $(H,Q,at){at===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(at.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=An*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)};let Z=null;function tt(H,Q){if(h=Q.getViewerPose(c||o),f=Q,h!==null){const at=h.views;g!==null&&(t.setRenderTargetFramebuffer(m,g.framebuffer),t.setRenderTarget(m));let yt=!1;at.length!==M.cameras.length&&(M.cameras.length=0,yt=!0);for(let xt=0;xt<at.length;xt++){const At=at[xt];let _t=null;if(g!==null)_t=g.getViewport(At);else{const Mt=u.getViewSubImage(d,At);_t=Mt.viewport,xt===0&&(t.setRenderTargetTextures(m,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(m))}let Tt=D[xt];Tt===void 0&&(Tt=new Be,Tt.layers.enable(xt),Tt.viewport=new ee,D[xt]=Tt),Tt.matrix.fromArray(At.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(At.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(_t.x,_t.y,_t.width,_t.height),xt===0&&(M.matrix.copy(Tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),yt===!0&&M.cameras.push(Tt)}}for(let at=0;at<_.length;at++){const yt=v[at],xt=_[at];yt!==null&&xt!==void 0&&xt.update(yt,Q,c||o)}Z&&Z(H,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),f=null}const et=new ka;et.setAnimationLoop(tt),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}}function Mp(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Na(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&g(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),f(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),y(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Re&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Re&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=t.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function g(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Re&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){const _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Sp(r,t,e,i){let n={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const x=v.program;i.uniformBlockBinding(_,x)}function c(_,v){let x=n[_.id];x===void 0&&(f(_),x=h(_),n[_.id]=x,_.addEventListener("dispose",p));const T=v.program;i.updateUBOMapping(_,T);const b=t.render.frame;s[_.id]!==b&&(d(_),s[_.id]=b)}function h(_){const v=u();_.__bindingPointIndex=v;const x=r.createBuffer(),T=_.__size,b=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=n[_.id],x=_.uniforms,T=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,C=x.length;b<C;b++){const D=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,w=D.length;M<w;M++){const F=D[M];if(g(F,b,M,T)===!0){const O=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let N=0;N<J.length;N++){const W=J[N],K=y(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,O+L,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(_,v,x,T){const b=_.value,C=v+"_"+x;if(T[C]===void 0)return typeof b=="number"||typeof b=="boolean"?T[C]=b:T[C]=b.clone(),!0;{const D=T[C];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return T[C]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function f(_){const v=_.uniforms;let x=0;const T=16;for(let C=0,D=v.length;C<D;C++){const M=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,F=M.length;w<F;w++){const O=M[w],J=Array.isArray(O.value)?O.value:[O.value];for(let L=0,N=J.length;L<N;L++){const W=J[L],K=y(W),Y=x%T;Y!==0&&T-Y<K.boundary&&(x+=T-Y),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=K.storage}}}const b=x%T;return b>0&&(x+=T-b),_.__size=x,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function m(){for(const _ in n)r.deleteBuffer(n[_]);o=[],n={},s={}}return{bind:l,update:c,dispose:m}}class qa{constructor(t={}){const{canvas:e=yc(),context:i=null,depth:n=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),f=new Int32Array(4);let y=null,p=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const v=this;let x=!1,T=0,b=0,C=null,D=-1,M=null;const w=new ee,F=new ee;let O=null;const J=new Ct(0);let L=0,N=e.width,W=e.height,K=1,Y=null,$=null;const Z=new ee(0,0,N,W),tt=new ee(0,0,N,W);let et=!1;const H=new Mr;let Q=!1,at=!1,yt=null;const xt=new ae,At=new Pt,_t=new P,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return C===null?K:1}let B=i;function ne(E,U){for(let V=0;V<E.length;V++){const X=E[V],G=e.getContext(X,U);if(G!==null)return G}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gr}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",ft,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),B=ne(U,E),B===null)throw ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let wt,Lt,gt,Qt,kt,A,S,k,nt,it,rt,St,ut,vt,Rt,Ft,st,qt,z,ot,dt,lt,Dt,jt;function se(){wt=new Ld(B),Lt=new bd(B,wt,t),wt.init(Lt),lt=new yp(B,wt,Lt),gt=new mp(B,wt,Lt),Qt=new Ud(B),kt=new ep,A=new gp(B,wt,gt,kt,Lt,lt,Qt),S=new Ad(v),k=new Rd(v),nt=new Gc(B,Lt),Dt=new wd(B,wt,nt,Lt),it=new Dd(B,nt,Qt,Dt),rt=new Od(B,it,nt,Qt),z=new Fd(B,Lt,A),Ft=new Td(kt),St=new tp(v,S,k,wt,Lt,Dt,Ft),ut=new Mp(v,kt),vt=new np,Rt=new cp(wt,Lt),qt=new Sd(v,S,k,gt,rt,d,l),st=new pp(v,rt,Lt),jt=new Sp(B,Qt,Lt,gt),ot=new Ed(B,wt,Qt,Lt),dt=new Id(B,wt,Qt,Lt),Qt.programs=St.programs,v.capabilities=Lt,v.extensions=wt,v.properties=kt,v.renderLists=vt,v.shadowMap=st,v.state=gt,v.info=Qt}se();const Vt=new xp(v,B);this.xr=Vt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(N,W,!1))},this.getSize=function(E){return E.set(N,W)},this.setSize=function(E,U,V=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,W=U,e.width=Math.floor(E*K),e.height=Math.floor(U*K),V===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(N*K,W*K).floor()},this.setDrawingBufferSize=function(E,U,V){N=E,W=U,K=V,e.width=Math.floor(E*V),e.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,U,V,X){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,V,X),gt.viewport(w.copy(Z).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,U,V,X){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,U,V,X),gt.scissor(F.copy(tt).multiplyScalar(K).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){gt.setScissorTest(et=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(E=!0,U=!0,V=!0){let X=0;if(E){let G=!1;if(C!==null){const mt=C.texture.format;G=mt===ba||mt===Ea||mt===wa}if(G){const mt=C.texture.type,bt=mt===mi||mt===ui||mt===yr||mt===Li||mt===Ma||mt===Sa,Ut=qt.getClearColor(),Nt=qt.getClearAlpha(),Gt=Ut.r,Ot=Ut.g,zt=Ut.b;bt?(g[0]=Gt,g[1]=Ot,g[2]=zt,g[3]=Nt,B.clearBufferuiv(B.COLOR,0,g)):(f[0]=Gt,f[1]=Ot,f[2]=zt,f[3]=Nt,B.clearBufferiv(B.COLOR,0,f))}else X|=B.COLOR_BUFFER_BIT}U&&(X|=B.DEPTH_BUFFER_BIT),V&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),Rt.dispose(),kt.dispose(),S.dispose(),k.dispose(),rt.dispose(),Dt.dispose(),jt.dispose(),St.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",be),Vt.removeEventListener("sessionend",Jt),yt&&(yt.dispose(),yt=null),Te.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=Qt.autoReset,U=st.enabled,V=st.autoUpdate,X=st.needsUpdate,G=st.type;se(),Qt.autoReset=E,st.enabled=U,st.autoUpdate=V,st.needsUpdate=X,st.type=G}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){const U=E.target;U.removeEventListener("dispose",pt),Bt(U)}function Bt(E){It(E),kt.remove(E)}function It(E){const U=kt.get(E).programs;U!==void 0&&(U.forEach(function(V){St.releaseProgram(V)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,X,G,mt){U===null&&(U=Tt);const bt=G.isMesh&&G.matrixWorld.determinant()<0,Ut=Ja(E,U,V,X,G);gt.setMaterial(X,bt);let Nt=V.index,Gt=1;if(X.wireframe===!0){if(Nt=it.getWireframeAttribute(V),Nt===void 0)return;Gt=2}const Ot=V.drawRange,zt=V.attributes.position;let le=Ot.start*Gt,De=(Ot.start+Ot.count)*Gt;mt!==null&&(le=Math.max(le,mt.start*Gt),De=Math.min(De,(mt.start+mt.count)*Gt)),Nt!==null?(le=Math.max(le,0),De=Math.min(De,Nt.count)):zt!=null&&(le=Math.max(le,0),De=Math.min(De,zt.count));const pe=De-le;if(pe<0||pe===1/0)return;Dt.setup(G,X,Ut,V,Nt);let $e,ie=ot;if(Nt!==null&&($e=nt.get(Nt),ie=dt,ie.setIndex($e)),G.isMesh)X.wireframe===!0?(gt.setLineWidth(X.wireframeLinewidth*Mt()),ie.setMode(B.LINES)):ie.setMode(B.TRIANGLES);else if(G.isLine){let Wt=X.linewidth;Wt===void 0&&(Wt=1),gt.setLineWidth(Wt*Mt()),G.isLineSegments?ie.setMode(B.LINES):G.isLineLoop?ie.setMode(B.LINE_LOOP):ie.setMode(B.LINE_STRIP)}else G.isPoints?ie.setMode(B.POINTS):G.isSprite&&ie.setMode(B.TRIANGLES);if(G.isBatchedMesh)ie.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ie.renderInstances(le,pe,G.count);else if(V.isInstancedBufferGeometry){const Wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ss=Math.min(V.instanceCount,Wt);ie.renderInstances(le,pe,Ss)}else ie.render(le,pe)};function $t(E,U,V){E.transparent===!0&&E.side===Ne&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,In(E,U,V),E.side=gi,E.needsUpdate=!0,In(E,U,V),E.side=Ne):In(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),p=Rt.get(V),p.init(),_.push(p),V.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),E!==V&&E.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);const X=new Set;return E.traverse(function(G){const mt=G.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const Ut=mt[bt];$t(Ut,V,G),X.add(Ut)}else $t(mt,V,G),X.add(mt)}),_.pop(),p=null,X},this.compileAsync=function(E,U,V=null){const X=this.compile(E,U,V);return new Promise(G=>{function mt(){if(X.forEach(function(bt){kt.get(bt).currentProgram.isReady()&&X.delete(bt)}),X.size===0){G(E);return}setTimeout(mt,10)}wt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Zt=null;function fe(E){Zt&&Zt(E)}function be(){Te.stop()}function Jt(){Te.start()}const Te=new ka;Te.setAnimationLoop(fe),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(E){Zt=E,Vt.setAnimationLoop(E),E===null?Te.stop():Te.start()},Vt.addEventListener("sessionstart",be),Vt.addEventListener("sessionend",Jt),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(U),U=Vt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,C),p=Rt.get(E,_.length),p.init(),_.push(p),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(xt),at=this.localClippingEnabled,Q=Ft.init(this.clippingPlanes,at),y=vt.get(E,m.length),y.init(),m.push(y),Ye(E,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(Y,$),this.info.render.frame++,Q===!0&&Ft.beginShadows();const V=p.state.shadowsArray;if(st.render(V,E,U),Q===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(y,E),p.setupLights(v._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let G=0,mt=X.length;G<mt;G++){const bt=X[G];Lr(y,E,bt,bt.viewport)}}else Lr(y,E,U);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,U),Dt.resetDefaultState(),D=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Ye(E,U,V,X){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){X&&_t.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);const bt=rt.update(E),Ut=E.material;Ut.visible&&y.push(E,bt,Ut,V,_t.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||H.intersectsObject(E))){const bt=rt.update(E),Ut=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),_t.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),_t.copy(bt.boundingSphere.center)),_t.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(Ut)){const Nt=bt.groups;for(let Gt=0,Ot=Nt.length;Gt<Ot;Gt++){const zt=Nt[Gt],le=Ut[zt.materialIndex];le&&le.visible&&y.push(E,bt,le,V,_t.z,zt)}}else Ut.visible&&y.push(E,bt,Ut,V,_t.z,null)}}const mt=E.children;for(let bt=0,Ut=mt.length;bt<Ut;bt++)Ye(mt[bt],U,V,X)}function Lr(E,U,V,X){const G=E.opaque,mt=E.transmissive,bt=E.transparent;p.setupLightsView(V),Q===!0&&Ft.setGlobalState(v.clippingPlanes,V),mt.length>0&&Za(G,mt,U,V),X&&gt.viewport(w.copy(X)),G.length>0&&Dn(G,U,V),mt.length>0&&Dn(mt,U,V),bt.length>0&&Dn(bt,U,V),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Za(E,U,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const mt=Lt.isWebGL2;yt===null&&(yt=new Ui(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?Tn:mi,minFilter:bn,samples:mt?4:0})),v.getDrawingBufferSize(At),mt?yt.setSize(At.x,At.y):yt.setSize(fs(At.x),fs(At.y));const bt=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(J),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ut=v.toneMapping;v.toneMapping=pi,Dn(E,V,X),A.updateMultisampleRenderTarget(yt),A.updateRenderTargetMipmap(yt);let Nt=!1;for(let Gt=0,Ot=U.length;Gt<Ot;Gt++){const zt=U[Gt],le=zt.object,De=zt.geometry,pe=zt.material,$e=zt.group;if(pe.side===Ne&&le.layers.test(X.layers)){const ie=pe.side;pe.side=Re,pe.needsUpdate=!0,Dr(le,V,X,De,pe,$e),pe.side=ie,pe.needsUpdate=!0,Nt=!0}}Nt===!0&&(A.updateMultisampleRenderTarget(yt),A.updateRenderTargetMipmap(yt)),v.setRenderTarget(bt),v.setClearColor(J,L),v.toneMapping=Ut}function Dn(E,U,V){const X=U.isScene===!0?U.overrideMaterial:null;for(let G=0,mt=E.length;G<mt;G++){const bt=E[G],Ut=bt.object,Nt=bt.geometry,Gt=X===null?bt.material:X,Ot=bt.group;Ut.layers.test(V.layers)&&Dr(Ut,U,V,Nt,Gt,Ot)}}function Dr(E,U,V,X,G,mt){E.onBeforeRender(v,U,V,X,G,mt),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(v,U,V,X,E,mt),G.transparent===!0&&G.side===Ne&&G.forceSinglePass===!1?(G.side=Re,G.needsUpdate=!0,v.renderBufferDirect(V,U,X,G,E,mt),G.side=gi,G.needsUpdate=!0,v.renderBufferDirect(V,U,X,G,E,mt),G.side=Ne):v.renderBufferDirect(V,U,X,G,E,mt),E.onAfterRender(v,U,V,X,G,mt)}function In(E,U,V){U.isScene!==!0&&(U=Tt);const X=kt.get(E),G=p.state.lights,mt=p.state.shadowsArray,bt=G.state.version,Ut=St.getParameters(E,G.state,mt,U,V),Nt=St.getProgramCacheKey(Ut);let Gt=X.programs;X.environment=E.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(E.isMeshStandardMaterial?k:S).get(E.envMap||X.environment),Gt===void 0&&(E.addEventListener("dispose",pt),Gt=new Map,X.programs=Gt);let Ot=Gt.get(Nt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===bt)return Ur(E,Ut),Ot}else Ut.uniforms=St.getUniforms(E),E.onBuild(V,Ut,v),E.onBeforeCompile(Ut,v),Ot=St.acquireProgram(Ut,Nt),Gt.set(Nt,Ot),X.uniforms=Ut.uniforms;const zt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=Ft.uniform),Ur(E,Ut),X.needsLights=tl(E),X.lightsStateVersion=bt,X.needsLights&&(zt.ambientLightColor.value=G.state.ambient,zt.lightProbe.value=G.state.probe,zt.directionalLights.value=G.state.directional,zt.directionalLightShadows.value=G.state.directionalShadow,zt.spotLights.value=G.state.spot,zt.spotLightShadows.value=G.state.spotShadow,zt.rectAreaLights.value=G.state.rectArea,zt.ltc_1.value=G.state.rectAreaLTC1,zt.ltc_2.value=G.state.rectAreaLTC2,zt.pointLights.value=G.state.point,zt.pointLightShadows.value=G.state.pointShadow,zt.hemisphereLights.value=G.state.hemi,zt.directionalShadowMap.value=G.state.directionalShadowMap,zt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,zt.spotShadowMap.value=G.state.spotShadowMap,zt.spotLightMatrix.value=G.state.spotLightMatrix,zt.spotLightMap.value=G.state.spotLightMap,zt.pointShadowMap.value=G.state.pointShadowMap,zt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function Ir(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=os.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ur(E,U){const V=kt.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Ja(E,U,V,X,G){U.isScene!==!0&&(U=Tt),A.resetTextureUnits();const mt=U.fog,bt=X.isMeshStandardMaterial?U.environment:null,Ut=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:si,Nt=(X.isMeshStandardMaterial?k:S).get(X.envMap||bt),Gt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ot=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),zt=!!V.morphAttributes.position,le=!!V.morphAttributes.normal,De=!!V.morphAttributes.color;let pe=pi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=v.toneMapping);const $e=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=$e!==void 0?$e.length:0,Wt=kt.get(X),Ss=p.state.lights;if(Q===!0&&(at===!0||E!==M)){const Fe=E===M&&X.id===D;Ft.setState(X,E,Fe)}let re=!1;X.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ss.state.version||Wt.outputColorSpace!==Ut||G.isBatchedMesh&&Wt.batching===!1||!G.isBatchedMesh&&Wt.batching===!0||G.isInstancedMesh&&Wt.instancing===!1||!G.isInstancedMesh&&Wt.instancing===!0||G.isSkinnedMesh&&Wt.skinning===!1||!G.isSkinnedMesh&&Wt.skinning===!0||G.isInstancedMesh&&Wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Wt.instancingColor===!1&&G.instanceColor!==null||Wt.envMap!==Nt||X.fog===!0&&Wt.fog!==mt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Ft.numPlanes||Wt.numIntersection!==Ft.numIntersection)||Wt.vertexAlphas!==Gt||Wt.vertexTangents!==Ot||Wt.morphTargets!==zt||Wt.morphNormals!==le||Wt.morphColors!==De||Wt.toneMapping!==pe||Lt.isWebGL2===!0&&Wt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Wt.__version=X.version);let xi=Wt.currentProgram;re===!0&&(xi=In(X,U,G));let Br=!1,gn=!1,ws=!1;const xe=xi.getUniforms(),Mi=Wt.uniforms;if(gt.useProgram(xi.program)&&(Br=!0,gn=!0,ws=!0),X.id!==D&&(D=X.id,gn=!0),Br||M!==E){xe.setValue(B,"projectionMatrix",E.projectionMatrix),xe.setValue(B,"viewMatrix",E.matrixWorldInverse);const Fe=xe.map.cameraPosition;Fe!==void 0&&Fe.setValue(B,_t.setFromMatrixPosition(E.matrixWorld)),Lt.logarithmicDepthBuffer&&xe.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,gn=!0,ws=!0)}if(G.isSkinnedMesh){xe.setOptional(B,G,"bindMatrix"),xe.setOptional(B,G,"bindMatrixInverse");const Fe=G.skeleton;Fe&&(Lt.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),xe.setValue(B,"boneTexture",Fe.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(xe.setOptional(B,G,"batchingTexture"),xe.setValue(B,"batchingTexture",G._matricesTexture,A));const Es=V.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&Lt.isWebGL2===!0)&&z.update(G,V,xi),(gn||Wt.receiveShadow!==G.receiveShadow)&&(Wt.receiveShadow=G.receiveShadow,xe.setValue(B,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Mi.envMap.value=Nt,Mi.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),gn&&(xe.setValue(B,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&Qa(Mi,ws),mt&&X.fog===!0&&ut.refreshFogUniforms(Mi,mt),ut.refreshMaterialUniforms(Mi,X,K,W,yt),os.upload(B,Ir(Wt),Mi,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(os.upload(B,Ir(Wt),Mi,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(B,"center",G.center),xe.setValue(B,"modelViewMatrix",G.modelViewMatrix),xe.setValue(B,"normalMatrix",G.normalMatrix),xe.setValue(B,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Fe=X.uniformsGroups;for(let bs=0,el=Fe.length;bs<el;bs++)if(Lt.isWebGL2){const Nr=Fe[bs];jt.update(Nr,xi),jt.bind(Nr,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Qa(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function tl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,V){kt.get(E.texture).__webglTexture=U,kt.get(E.depthTexture).__webglTexture=V;const X=kt.get(E);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const V=kt.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,V=0){C=E,T=U,b=V;let X=!0,G=null,mt=!1,bt=!1;if(E){const Nt=kt.get(E);Nt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):Nt.__webglFramebuffer===void 0?A.setupRenderTarget(E):Nt.__hasExternalTextures&&A.rebindTextures(E,kt.get(E.texture).__webglTexture,kt.get(E.depthTexture).__webglTexture);const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(bt=!0);const Ot=kt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?G=Ot[U][V]:G=Ot[U],mt=!0):Lt.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?G=kt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?G=Ot[V]:G=Ot,w.copy(E.viewport),F.copy(E.scissor),O=E.scissorTest}else w.copy(Z).multiplyScalar(K).floor(),F.copy(tt).multiplyScalar(K).floor(),O=et;if(gt.bindFramebuffer(B.FRAMEBUFFER,G)&&Lt.drawBuffers&&X&&gt.drawBuffers(E,G),gt.viewport(w),gt.scissor(F),gt.setScissorTest(O),mt){const Nt=kt.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Nt.__webglTexture,V)}else if(bt){const Nt=kt.get(E.texture),Gt=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.__webglTexture,V||0,Gt)}D=-1},this.readRenderTargetPixels=function(E,U,V,X,G,mt,bt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(Ut=Ut[bt]),Ut){gt.bindFramebuffer(B.FRAMEBUFFER,Ut);try{const Nt=E.texture,Gt=Nt.format,Ot=Nt.type;if(Gt!==qe&&lt.convert(Gt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Ot===Tn&&(wt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Ot!==mi&&lt.convert(Ot)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===di&&(Lt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-X&&V>=0&&V<=E.height-G&&B.readPixels(U,V,X,G,lt.convert(Gt),lt.convert(Ot),mt)}finally{const Nt=C!==null?kt.get(C).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(E,U,V=0){const X=Math.pow(2,-V),G=Math.floor(U.image.width*X),mt=Math.floor(U.image.height*X);A.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,E.x,E.y,G,mt),gt.unbindTexture()},this.copyTextureToTexture=function(E,U,V,X=0){const G=U.image.width,mt=U.image.height,bt=lt.convert(V.format),Ut=lt.convert(V.type);A.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,E.x,E.y,G,mt,bt,Ut,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,bt,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,E.x,E.y,bt,Ut,U.image),X===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,V,X,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=E.max.x-E.min.x+1,bt=E.max.y-E.min.y+1,Ut=E.max.z-E.min.z+1,Nt=lt.convert(X.format),Gt=lt.convert(X.type);let Ot;if(X.isData3DTexture)A.setTexture3D(X,0),Ot=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),Ot=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const zt=B.getParameter(B.UNPACK_ROW_LENGTH),le=B.getParameter(B.UNPACK_IMAGE_HEIGHT),De=B.getParameter(B.UNPACK_SKIP_PIXELS),pe=B.getParameter(B.UNPACK_SKIP_ROWS),$e=B.getParameter(B.UNPACK_SKIP_IMAGES),ie=V.isCompressedTexture?V.mipmaps[G]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ie.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ie.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,E.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,E.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Ot,G,U.x,U.y,U.z,mt,bt,Ut,Nt,Gt,ie.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ot,G,U.x,U.y,U.z,mt,bt,Ut,Nt,ie.data)):B.texSubImage3D(Ot,G,U.x,U.y,U.z,mt,bt,Ut,Nt,Gt,ie),B.pixelStorei(B.UNPACK_ROW_LENGTH,zt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,le),B.pixelStorei(B.UNPACK_SKIP_PIXELS,De),B.pixelStorei(B.UNPACK_SKIP_ROWS,pe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$e),G===0&&X.generateMipmaps&&B.generateMipmap(Ot),gt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),gt.unbindTexture()},this.resetState=function(){T=0,b=0,C=null,gt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_r?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===vs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?Ii:Aa}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ii?_e:si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class wp extends qa{}wp.prototype.isWebGL1Renderer=!0;class wr{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=i}clone(){return new wr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ep extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ln extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const na=new P,sa=new P,ra=new ae,er=new xs,is=new Rn;class Ya extends ge{constructor(t=new de,e=new Ln){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)na.fromBufferAttribute(e,n-1),sa.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=na.distanceTo(sa);t.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(n),is.radius+=s,t.ray.intersectsSphere(is)===!1)return;ra.copy(n).invert(),er.copy(t.ray).applyMatrix4(ra);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,u=new P,d=new P,g=this.isLineSegments?2:1,f=i.index,p=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=m,x=_-1;v<x;v+=g){const T=f.getX(v),b=f.getX(v+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,b),er.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=m,x=_-1;v<x;v+=g){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),er.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(d);b<t.near||b>t.far||e.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const oa=new P,aa=new P;class Er extends Ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)oa.fromBufferAttribute(e,n),aa.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+oa.distanceTo(aa);t.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ka extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const la=new ae,pr=new xs,ns=new Rn,ss=new P;class bp extends ge{constructor(t=new de,e=new Ka){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(n),ns.radius+=s,t.ray.intersectsSphere(ns)===!1)return;la.copy(n).invert(),pr.copy(t.ray).applyMatrix4(la);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let f=d,y=g;f<y;f++){const p=c.getX(f);ss.fromBufferAttribute(u,p),ca(ss,p,l,n,t,e,this)}}else{const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let f=d,y=g;f<y;f++)ss.fromBufferAttribute(u,f),ca(ss,f,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ca(r,t,e,i,n,s,o){const a=pr.distanceSqToPoint(r);if(a<e){const l=new P;pr.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Tp extends Le{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn extends de{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new P,h=new Pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const g=i+u/e*n;c.x=t*Math.cos(g),c.y=t*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends de{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],g=[];let f=0;const y=[],p=i/2;let m=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(g,2));function _(){const x=new P,T=new P;let b=0;const C=(e-t)/i;for(let D=0;D<=s;D++){const M=[],w=D/s,F=w*(e-t)+t;for(let O=0;O<=n;O++){const J=O/n,L=J*l+a,N=Math.sin(L),W=Math.cos(L);T.x=F*N,T.y=-w*i+p,T.z=F*W,u.push(T.x,T.y,T.z),x.set(N,C,W).normalize(),d.push(x.x,x.y,x.z),g.push(J,1-w),M.push(f++)}y.push(M)}for(let D=0;D<n;D++)for(let M=0;M<s;M++){const w=y[M][D],F=y[M+1][D],O=y[M+1][D+1],J=y[M][D+1];h.push(w,F,J),h.push(F,O,J),b+=6}c.addGroup(m,b,0),m+=b}function v(x){const T=f,b=new Pt,C=new P;let D=0;const M=x===!0?t:e,w=x===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,p*w,0),d.push(0,w,0),g.push(.5,.5),f++;const F=f;for(let O=0;O<=n;O++){const L=O/n*l+a,N=Math.cos(L),W=Math.sin(L);C.x=M*W,C.y=p*w,C.z=M*N,u.push(C.x,C.y,C.z),d.push(0,w,0),b.x=N*.5+.5,b.y=W*.5*w+.5,g.push(b.x,b.y),f++}for(let O=0;O<n;O++){const J=T+O,L=F+O;x===!0?h.push(L,L+1,J):h.push(L+1,L,J),D+=3}c.addGroup(m,D,x===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mn extends oe{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new mn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class br extends de{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(s.slice(),3)),this.setAttribute("uv",new Kt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new P,x=new P,T=new P;for(let b=0;b<e.length;b+=3)g(e[b+0],v),g(e[b+1],x),g(e[b+2],T),l(v,x,T,_)}function l(_,v,x,T){const b=T+1,C=[];for(let D=0;D<=b;D++){C[D]=[];const M=_.clone().lerp(x,D/b),w=v.clone().lerp(x,D/b),F=b-D;for(let O=0;O<=F;O++)O===0&&D===b?C[D][O]=M:C[D][O]=M.clone().lerp(w,O/F)}for(let D=0;D<b;D++)for(let M=0;M<2*(b-D)-1;M++){const w=Math.floor(M/2);M%2===0?(d(C[D][w+1]),d(C[D+1][w]),d(C[D][w])):(d(C[D][w+1]),d(C[D+1][w+1]),d(C[D+1][w]))}}function c(_){const v=new P;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(_),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function h(){const _=new P;for(let v=0;v<s.length;v+=3){_.x=s[v+0],_.y=s[v+1],_.z=s[v+2];const x=p(_)/2/Math.PI+.5,T=m(_)/Math.PI+.5;o.push(x,1-T)}f(),u()}function u(){for(let _=0;_<o.length;_+=6){const v=o[_+0],x=o[_+2],T=o[_+4],b=Math.max(v,x,T),C=Math.min(v,x,T);b>.9&&C<.1&&(v<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function g(_,v){const x=_*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function f(){const _=new P,v=new P,x=new P,T=new P,b=new Pt,C=new Pt,D=new Pt;for(let M=0,w=0;M<s.length;M+=9,w+=6){_.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),b.set(o[w+0],o[w+1]),C.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),T.copy(_).add(v).add(x).divideScalar(3);const F=p(T);y(b,w+0,_,F),y(C,w+2,v,F),y(D,w+4,x,F)}}function y(_,v,x,T){T<0&&_.x===1&&(o[v]=_.x-1),x.x===0&&x.z===0&&(o[v]=T/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.vertices,t.indices,t.radius,t.details)}}class Tr extends br{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Tr(t.radius,t.detail)}}class vi extends de{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,g=[],f=[],y=[],p=[];for(let m=0;m<=i;m++){const _=[],v=m/i;let x=0;m===0&&o===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const b=T/e;u.x=-t*Math.cos(n+b*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(n+b*s)*Math.sin(o+v*a),f.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(b+x,1-v),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){const v=h[m][_+1],x=h[m][_],T=h[m+1][_],b=h[m+1][_+1];(m!==0||o>0)&&g.push(v,x,b),(m!==i-1||l<Math.PI)&&g.push(x,T,b)}this.setIndex(g),this.setAttribute("position",new Kt(f,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ar extends de{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let g=0;g<=i;g++)for(let f=0;f<=n;f++){const y=f/n*s,p=g/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(y),u.y=(t+e*Math.cos(p))*Math.sin(y),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/n),c.push(g/i)}for(let g=1;g<=i;g++)for(let f=1;f<=n;f++){const y=(n+1)*g+f-1,p=(n+1)*(g-1)+f-1,m=(n+1)*(g-1)+f,_=(n+1)*g+f;o.push(y,p,_),o.push(p,m,_)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class q extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_s,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qi extends ri{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_s,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ap extends ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_s,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cr extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ir=new ae,ha=new P,ua=new P;class $a{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ha.setFromMatrixPosition(t.matrixWorld),e.position.copy(ha),ua.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ua),e.updateMatrixWorld(),ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const da=new ae,Mn=new P,nr=new P;class Cp extends $a{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Mn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Mn),nr.copy(i.position),nr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(nr),i.updateMatrixWorld(),n.makeTranslation(-Mn.x,-Mn.y,-Mn.z),da.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da)}}class Pp extends Cr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Cp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rp extends $a{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sr extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fa extends Cr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pa(){return(typeof performance>"u"?Date:performance).now()}class Xe{constructor(t,e,i=0,n=1/0){this.ray=new xs(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return mr(t,this,i,e),i.sort(ma),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)mr(t[n],this,i,e);return i.sort(ma),i}}function ma(r,t){return r.distance-t.distance}function mr(r,t,e,i){if(r.layers.test(t.layers)&&r.raycast(t,e),i===!0){const n=r.children;for(let s=0,o=n.length;s<o;s++)mr(n[s],t,e,!0)}}class Dp extends Er{constructor(t=10,e=10,i=4473924,n=8947848){i=new Ct(i),n=new Ct(n);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,g=0,f=-a;d<=e;d++,f+=o){l.push(-a,0,f,a,0,f),l.push(f,0,-a,f,0,a);const y=d===s?i:n;y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3}const h=new de;h.setAttribute("position",new Kt(l,3)),h.setAttribute("color",new Kt(c,3));const u=new Ln({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const rs=new _i;class Ip extends Er{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(8*3),s=new de;s.setIndex(new ve(i,1)),s.setAttribute("position",new ve(n,3)),super(s,new Ln({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&rs.setFromObject(this.object),rs.isEmpty())return;const e=rs.min,i=rs.max,n=this.geometry.attributes.position,s=n.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=e.x,s[4]=i.y,s[5]=i.z,s[6]=e.x,s[7]=e.y,s[8]=i.z,s[9]=i.x,s[10]=e.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=e.z,s[15]=e.x,s[16]=i.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=i.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Up extends Er{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new de;s.setIndex(new ve(i,1)),s.setAttribute("position",new Kt(n,3)),super(s,new Ln({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gr);const Bp="/threejs-voxel-firecraft/dist/assets/background-music-by-suno-B4M28EgO.ogg";function Np(){const r=new Et,t=.8+Math.random()*.4;r.scale.set(t,t,t);const e=3.5+Math.random()*1.5,i=new oe(.45,.6,e,8),n=new q({color:7028518,roughness:1}),s=new I(i,n);if(s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,r.add(s),Math.random()>.7){const l=new j(.15,.15,.05),c=new q({color:5911328}),h=new I(l,c);h.position.set(.25,s.position.y+.6,.45),h.rotation.z=.4,r.add(h)}const o=new q({color:3050327,roughness:.9}),a=6+Math.floor(Math.random()*4);for(let l=0;l<a;l++){const c=1.2+Math.random()*1.6,h=new vi(c,8,6),u=new I(h,o);u.position.y=s.position.y+.8+Math.random()*1.6,u.position.x=(Math.random()-.5)*1.5,u.position.z=(Math.random()-.5)*1.5,u.castShadow=!1,u.receiveShadow=!1,r.add(u)}if(Math.random()>.3){const l=new we(.8,.8),c=new q({color:3066993,side:Ne}),h=new I(l,c);h.rotation.x=-Math.PI/2,h.position.y=.01,h.position.x=(Math.random()-.5)*.5,h.position.z=(Math.random()-.5)*.5,h.receiveShadow=!1,r.add(h)}return r}function Fp(){const r=new Et,t=.8+Math.random()*.4;r.scale.set(t,t,t);const e=3.5+Math.random()*1.5,i=new oe(.45,.6,e,8),n=new q({color:7028518,roughness:1}),s=new I(i,n);s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,r.add(s);const o=new q({color:1728040,roughness:.9}),a=3+Math.floor(Math.random()*3);for(let h=0;h<a;h++){const u=1.8-h*.4+Math.random()*.2,d=new mn(u,1.2+Math.random()*.6,8),g=new I(d,o);g.position.y=s.position.y+.6+h*.9,g.position.x=(Math.random()-.5)*.2,g.position.z=(Math.random()-.5)*.2,g.castShadow=!1,g.receiveShadow=!1,r.add(g)}const l=new vi(.25,6,6),c=new I(l,o);if(c.position.y=s.position.y+a*.9+.3,r.add(c),Math.random()>.3){const h=new we(.8,.8),u=new q({color:3066993,side:Ne}),d=new I(h,u);d.rotation.x=-Math.PI/2,d.position.y=.01,d.position.x=(Math.random()-.5)*.5,d.position.z=(Math.random()-.5)*.5,d.receiveShadow=!1,r.add(d)}return r}function Op(r,t,e=0){const i=.6+Math.random()*1.4,n=new Tr(i,1),s=n.attributes.position;for(let l=0;l<s.count;l++){const c=s.getX(l),h=s.getY(l),u=s.getZ(l),d=(Math.random()-.5)*i*.15;s.setXYZ(l,c+d,h+d*.5,u+(Math.random()-.5)*i*.15)}n.computeVertexNormals();const o=new q({color:8359053,roughness:1}),a=new I(n,o);if(a.position.set(r,e+i/2,t),a.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),a.castShadow=!0,a.receiveShadow=!0,Math.random()>.6){const l=new I(new Cn(i*.4,6),new q({color:3066993}));l.rotation.x=-Math.PI/2,l.position.y=.01,a.add(l)}return a}function kp(r,t,e=0){const i=2.5+Math.random()*2.5,n=.4+Math.random()*.3,s=n+.5,o=new oe(n,s,i,8,1),a=new q({color:7171437,roughness:1}),l=new I(o,a);return l.position.set(r,e+i/2,t),l.castShadow=!0,l.receiveShadow=!0,l}function zp(r,t,e=0){const i=2+Math.random()*2,n=.8+Math.random()*.6,s=1.5+Math.random()*1,o=new j(i,n,s),a=new q({color:9145227,roughness:1}),l=new I(o,a);return l.position.set(r,e+n/2,t),l.rotation.y=Math.random()*Math.PI,l.castShadow=!0,l.receiveShadow=!0,l}function Hp(r,t,e=0){const i=2+Math.random()*2,n=new mn(.6+Math.random()*.4,i,6),s=new q({color:10181046,roughness:.7,metalness:.2,emissive:4008804,emissiveIntensity:.25}),o=new I(n,s);return o.position.set(r,e+i/2,t),o.rotation.y=Math.random()*Math.PI,o.castShadow=!0,o.receiveShadow=!0,o}function Gp(r,t,e=0){const i=new Et,n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const o=1+Math.random()*2,a=new oe(.4,.4,o,6),l=new q({color:5592405,roughness:1}),c=new I(a,l);c.position.set((Math.random()-.5)*2,e+o/2,(Math.random()-.5)*2),c.castShadow=!0,c.receiveShadow=!0,i.add(c)}return i.position.set(r,0,t),i}function Vp(r="car"){const t=new Et;t.rotation.y=Math.random()*Math.PI*2;const e=r==="truck"?.45:.35,i=r==="truck"?.4:.3;if(t.userData=t.userData||{},t.userData={vehicleType:r,wheelRadius:e,wheelCenterY:i,groundClearance:e-i,wheels:[]},r==="car"){const n=[1668818,15921906,1118481,9116186,15022389,15844367],s=new q({color:n[Math.floor(Math.random()*n.length)],metalness:.45,roughness:.38}),o=new q({color:16119285,metalness:.2,roughness:.6}),a=new q({color:2042416,roughness:.8}),l=new I(new j(2.2,.9,4.2),s);l.position.y=.85,l.castShadow=!0,t.add(l);const c=new I(new j(2.25,.15,4.25),o);c.position.set(0,.9,0),t.add(c);const h=new I(new j(1.8,.9,2.1),a);h.position.set(0,1.55,-.2),h.castShadow=!0,t.add(h);const u=new q({color:1710618,transparent:!0,opacity:.7,metalness:.2,roughness:.1}),d=new I(new j(1.6,.6,.08),u);d.position.set(0,1.55,1),t.add(d);const g=new I(new j(1.6,.6,.08),u);g.position.set(0,1.55,-1.5),t.add(g);const f=new I(new j(2.1,.25,.35),a);f.position.set(0,.55,2.1),t.add(f);const y=f.clone();y.position.z=-2.1,t.add(y);const p=new q({color:855309,roughness:.9}),m=[14673130,789516,16777215];[[-.95,i,1.35],[.95,i,1.35],[-.95,i,-1.35],[.95,i,-1.35]].forEach(M=>{const w=new I(new oe(e,e,.35,14,1,!1),p);w.rotation.z=Math.PI/2,w.position.set(...M),w.castShadow=!0;const F=new I(new j(.35,.12,.14),new q({color:273}));F.position.set(0,0,0),F.rotation.y=Math.PI/8,w.add(F);const O=new I(new oe(e*.55,e*.55,.18,12),new q({color:m[Math.floor(Math.random()*m.length)],roughness:.45,metalness:.65}));O.rotation.z=Math.PI/2,O.position.set(0,0,0),w.add(O);const J=new I(new j(.05,e*1.2,.02),new q({color:16777215,emissive:8947848,emissiveIntensity:.6}));J.position.set(0,0,.18),w.add(J),t.add(w),t.userData.wheels.push(w)});const v=new q({color:16777130,emissive:16774557,emissiveIntensity:.8}),x=new q({color:16732754,emissive:16732754,emissiveIntensity:.6}),T=new I(new j(.25,.2,.1),v);T.position.set(-.75,.8,2.15),t.add(T);const b=T.clone();b.position.x=.75,t.add(b);const C=new I(new j(.25,.2,.1),x);C.position.set(-.75,.8,-2.15),t.add(C);const D=C.clone();D.position.x=.75,t.add(D)}else if(r==="truck"){const n=[1981023,15921906,1118481,9116186,15022389,15844367],s=new q({color:n[Math.floor(Math.random()*n.length)],metalness:.55,roughness:.42}),o=new q({color:16119285,roughness:.7}),a=new q({color:2042416,roughness:.8}),l=new I(new j(2.6,1.1,5.2),s);l.position.y=1.05,l.castShadow=!0,t.add(l);const c=new I(new j(2.65,.18,5.25),o);c.position.set(0,1.1,0),t.add(c);const h=new I(new j(2.3,1.3,2.2),a);h.position.set(0,2.05,1.2),h.castShadow=!0,t.add(h);const u=new I(new j(2.35,.85,2.6),new q({color:8359053}));u.position.set(0,1.55,-1.55),u.castShadow=!0,t.add(u);const d=new q({color:1710618,transparent:!0,opacity:.7}),g=new I(new j(2,.7,.08),d);g.position.set(0,2.05,2.05),t.add(g);const f=new I(new j(.08,.6,1.2),d);f.position.set(-1.15,2.05,1.2),t.add(f);const y=f.clone();y.position.x=1.15,t.add(y);const p=new q({color:855309}),m=[14673130,789516,16777215];[[-1.1,.4,1.8],[1.1,.4,1.8],[-1.1,.4,-1.5],[1.1,.4,-1.5],[-1.1,.4,-2.2],[1.1,.4,-2.2]].forEach(M=>{const w=new I(new oe(e,e,.45,14,1,!1),p);w.rotation.z=Math.PI/2,w.position.set(...M),w.castShadow=!0;const F=new I(new j(.4,.14,.16),new q({color:273}));F.rotation.y=Math.PI/8,w.add(F);const O=new I(new oe(e*.55,e*.55,.2,12),new q({color:m[Math.floor(Math.random()*m.length)],roughness:.45,metalness:.65}));O.rotation.z=Math.PI/2,O.position.set(0,0,0),w.add(O);const J=new I(new j(.06,e*1.3,.025),new q({color:16777215,emissive:8947848,emissiveIntensity:.6}));J.position.set(0,0,.2),w.add(J),t.add(w),t.userData.wheels.push(w)});const v=new q({color:16776960,emissive:16776960,emissiveIntensity:.6}),x=new q({color:16732754,emissive:16732754,emissiveIntensity:.5}),T=new I(new j(.28,.22,.12),v);T.position.set(-.95,1.85,2.35),t.add(T);const b=T.clone();b.position.x=.95,t.add(b);const C=new I(new j(.28,.22,.12),x);C.position.set(-.95,1.2,-2.55),t.add(C);const D=C.clone();D.position.x=.95,t.add(D)}return t}const ms=400;class Wp{constructor(t,e,i){this.scene=t,this.itemManager=e,this.objects=[],this.gameMode=i&&i.gameMode?i.gameMode:"arcade",this.gameMode==="arena"?this.mapSize=150:this.mapSize=i&&i.mapSize?i.mapSize:ms,this.halfMapSize=this.mapSize/2,this.stormRadius=this.halfMapSize,this.initialStormRadius=this.stormRadius,this._heightFn=this._buildHeightFn(),this.stormEnabled=i&&i.stormEnabled!==!1;const n=i?i.stormTime:180;this.stormShrinkRate=this.stormRadius/n,this.safeZoneCenter=new P(0,0,0),this.init()}init(){this.gameMode==="arena"?this.createArenaEnvironment():this.gameMode==="matrix"?this.createMatrixEnvironment():this.gameMode==="matrix-ai"?this.createMatrixAIEnvironment():this.gameMode==="multiplayer"?this.createMultiplayerEnvironment():this.gameMode==="studio"?this.createStudioEnvironment():this.gameMode==="survival"?this.createSurvivalEnvironment():this.createEnvironment(),this.gameMode!=="matrix"&&this.gameMode!=="studio"&&this.stormEnabled&&this.createStormVisuals()}createEnvironment(){const t=(f=1)=>(Math.random()-.5)*(this.mapSize*f),e=(f=1)=>{const y=this.halfMapSize-5,p=t(f);return Math.max(-y,Math.min(y,p))},i=(f=1,y=12)=>{let p,m,_=0;do p=e(f),m=e(f),_++;while(p*p+m*m<y*y&&_<20);return{x:p,z:m}},n=(f,y)=>this.getHeightAt?this.getHeightAt(f,y):0,s={trees:70,rocks:50,bushes:50,grass:180,houses:12,vehicles:12,plateaus:4,smallBuildings:5},o=new we(this.mapSize,this.mapSize,64,64),a=o.attributes.position;for(let f=0;f<a.count;f++)a.setZ(f,0);a.needsUpdate=!0;const l=o.attributes.position.count;o.setAttribute("color",new ve(new Float32Array(l*3),3));const c=o.attributes.color,h=new Ct;for(let f=0;f<l;f++){const y=Math.random();y>.8?h.setHex(2600544):y>.4?h.setHex(3066993):h.setHex(5822093),c.setXYZ(f,h.r,h.g,h.b)}const u=new q({vertexColors:!0,roughness:.8}),d=new I(o,u);d.rotation.x=-Math.PI/2,d.receiveShadow=!0,d.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(d),this.objects.push(d);for(let f=0;f<s.trees;f++){const{x:y,z:p}=i(.9),m=n(y,p),_=Math.random()>.5?"Oak":"Pine",v=this.createTree(y,p,_);v.position.y=m,v.userData={gameId:this.generateID(),gameName:`Tree_${_}`,type:"tree"},this.scene.add(v),this.objects.push(v)}const g=[(f,y)=>this.createRock(f,y),(f,y,p)=>this.createRockPillar(f,y,p),(f,y,p)=>this.createFlatBoulder(f,y,p),(f,y,p)=>this.createCrystalShard(f,y,p),(f,y,p)=>this.createStackedRock(f,y,p),(f,y,p)=>this.createBasaltCluster(f,y,p)];for(let f=0;f<s.rocks;f++){const{x:y,z:p}=i(.9),m=n(y,p),_=g[f%g.length],v=_(y,p,m);v.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(v),this.objects.push(v)}for(let f=0;f<s.bushes;f++){const{x:y,z:p}=i(.85),m=n(y,p),_=this.createBush(y,p);_.position.y=m,_.userData={gameId:this.generateID(),gameName:"Bush"},this.scene.add(_),this.objects.push(_)}for(let f=0;f<s.grass;f++){const{x:y,z:p}=i(.95),m=n(y,p),_=this.createGrassClump(y,p);_.position.y=m,this.scene.add(_)}for(let f=0;f<s.houses;f++){const{x:y,z:p}=i(.75,20),m=n(y,p),_=Math.random(),v=_>.7,x=_<.25,T=v?1.55:x?.9:1,b=v?"Mansion":x?"Cabin":"House",C=v?"large":x?"small":"medium",D=this.createHouse(y,p,{scale:T});D.position.y=m,D.userData={gameId:this.generateID(),gameName:b,type:"house",size:C},this.scene.add(D),this.objects.push(D),this.itemManager.spawnLootInHouse(y,1,p)}for(let f=0;f<s.vehicles;f++){const{x:y,z:p}=i(.8),m=n(y,p),_=Math.random()>.6?"truck":"car",v=this.createVehicle(y,p,_);v.position.y=m,v.userData={...v.userData||{},gameId:this.generateID(),gameName:`Vehicle_${_}`,type:"vehicle"},this.scene.add(v),this.objects.push(v)}for(let f=0;f<s.plateaus;f++){const{x:y,z:p}=i(.6,25),m=6+Math.random()*6,_=8+Math.random()*6,v=n(y,p),x=this.createPlateau(y,p,_,m,v);x.userData={gameId:this.generateID(),gameName:"Plateau",type:"house"},this.scene.add(x),this.objects.push(x)}for(let f=0;f<s.smallBuildings;f++){const{x:y,z:p}=i(.7,18),m=n(y,p),_=this.createSmallBuilding(y,p);_.position.y=m,_.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"},this.scene.add(_),this.objects.push(_)}}createSurvivalEnvironment(){const t=(f=1)=>(Math.random()-.5)*(this.mapSize*f),e=(f=1)=>{const y=this.halfMapSize-5,p=t(f);return Math.max(-y,Math.min(y,p))},i=(f=1,y=12)=>{let p,m,_=0;do p=e(f),m=e(f),_++;while(p*p+m*m<y*y&&_<20);return{x:p,z:m}},n=(f,y)=>this.getHeightAt?this.getHeightAt(f,y):0,s={trees:90,rocks:60,bushes:80,grass:250},o=new we(this.mapSize,this.mapSize,64,64),a=o.attributes.position;for(let f=0;f<a.count;f++)a.setZ(f,0);a.needsUpdate=!0;const l=o.attributes.position.count;o.setAttribute("color",new ve(new Float32Array(l*3),3));const c=o.attributes.color,h=new Ct;for(let f=0;f<l;f++){const y=Math.random();y>.8?h.setHex(2600544):y>.4?h.setHex(3066993):h.setHex(5822093),c.setXYZ(f,h.r,h.g,h.b)}const u=new q({vertexColors:!0,roughness:.8}),d=new I(o,u);d.rotation.x=-Math.PI/2,d.receiveShadow=!0,d.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(d),this.objects.push(d);for(let f=0;f<s.trees;f++){const{x:y,z:p}=i(.9),m=n(y,p),_=Math.random()>.5?"Oak":"Pine",v=this.createTree(y,p,_);v.position.y=m,v.userData={gameId:this.generateID(),gameName:`Tree_${_}`,type:"tree"},this.scene.add(v),this.objects.push(v)}const g=[(f,y)=>this.createRock(f,y),(f,y,p)=>this.createRockPillar(f,y,p),(f,y,p)=>this.createFlatBoulder(f,y,p),(f,y,p)=>this.createCrystalShard(f,y,p),(f,y,p)=>this.createStackedRock(f,y,p),(f,y,p)=>this.createBasaltCluster(f,y,p)];for(let f=0;f<s.rocks;f++){const{x:y,z:p}=i(.9),m=n(y,p),_=g[f%g.length],v=_(y,p,m);v.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(v),this.objects.push(v)}for(let f=0;f<s.bushes;f++){const{x:y,z:p}=i(.85),m=n(y,p),_=this.createBush(y,p);_.position.y=m,_.userData={gameId:this.generateID(),gameName:"Bush"},this.scene.add(_),this.objects.push(_)}for(let f=0;f<s.grass;f++){const{x:y,z:p}=i(.95),m=n(y,p),_=this.createGrassClump(y,p);_.position.y=m,this.scene.add(_)}}createArenaEnvironment(){const t=(o=1)=>(Math.random()-.5)*(this.mapSize*o),e=(o=1)=>{const a=this.halfMapSize-5,l=t(o);return Math.max(-a,Math.min(a,l))},i=new we(this.mapSize,this.mapSize,1,1),n=new Qi({color:3885915,flatShading:!0}),s=new I(i,n);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(s),this.objects.push(s);for(let o=0;o<30;o++){const a=e(.8),l=e(.8),c=1+Math.random()*3,h=1+Math.random()*2,u=1+Math.random()*2,d=new j(h,c,u),g=new Qi({color:5596791,flatShading:!0}),f=new I(d,g);f.position.set(a,c/2,l),f.castShadow=!0,f.receiveShadow=!0,f.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},this.scene.add(f),this.objects.push(f)}for(let o=0;o<6;o++){const a=e(.7),l=e(.7),c=6+Math.random()*3,h=3+Math.random()*2,u=3,d=new j(u,h,c),g=new Qi({color:4937059,flatShading:!0}),f=new I(d,g);f.position.set(a,h/2,l),f.rotation.x=-Math.atan(h/c),f.castShadow=!0,f.receiveShadow=!0,f.userData={gameId:this.generateID(),gameName:"Ramp",type:"house"},this.scene.add(f),this.objects.push(f)}for(let o=0;o<6;o++){const a=e(.6),l=e(.6),c=this.createArenaBunker(a,l);c.userData={gameId:this.generateID(),gameName:"Bunker",type:"house"},this.scene.add(c),this.objects.push(c)}for(let o=0;o<20;o++){const a=e(.8),l=e(.8),c=this.createFlatBoulder(a,l,0);c.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(c),this.objects.push(c)}this.itemManager.spawnLootInHouse(0,0,0)}createMatrixEnvironment(){const t=new we(this.mapSize,this.mapSize,128,128),e=t.attributes.position.count;t.setAttribute("color",new ve(new Float32Array(e*3),3));const i=t.attributes.color,n=new Ct;for(let d=0;d<e;d++){const g=Math.random();g>.8?n.setHex(2600544):g>.4?n.setHex(3066993):n.setHex(5822093),i.setXYZ(d,n.r,n.g,n.b)}const s=new q({vertexColors:!0,roughness:.8}),o=new I(t,s);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(o),this.objects.push(o);const a=new j(20,6,.5),l=new q({color:15987699,roughness:.9}),c=new I(a,l);c.position.set(0,3,-15),c.castShadow=!0,c.receiveShadow=!0,c.userData={gameId:this.generateID(),gameName:"Wall",type:"house"},this.scene.add(c),this.objects.push(c);const h=this.createTree(-12,-15,"Oak"),u=this.createTree(12,-15,"Pine");this.scene.add(h),this.scene.add(u),this.objects.push(h),this.objects.push(u)}createStudioEnvironment(){const t=new we(this.mapSize,this.mapSize,128,128),e=this.buildVoxelGroundMaterial(),i=new I(t,e);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(i),this.objects.push(i);const n=12;for(let s=0;s<n;s++){const o=(Math.random()-.5)*this.mapSize*.6,a=(Math.random()-.5)*this.mapSize*.6,l=this.createVoxelCloud(o,a);this.scene.add(l)}}createMatrixAIEnvironment(){const t=this.mapSize,e=80,i=new Dp(t,e,16777215,16777215);(Array.isArray(i.material)?i.material:[i.material]).forEach(l=>{l.opacity=.3,l.transparent=!0,l.depthWrite=!1}),i.position.y=.02,this.scene.add(i);const s=new we(t,t,1,1),o=new yi({visible:!1}),a=new I(s,o);a.rotation.x=-Math.PI/2,a.userData={gameId:this.generateID(),gameName:"Ground",type:"ground"},this.scene.add(a),this.objects.push(a)}createMultiplayerEnvironment(){const t=new we(this.mapSize,this.mapSize,128,128),e=this.buildVoxelGroundMaterial(),i=new I(t,e);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(i),this.objects.push(i),this.stormEnabled=!1}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}createTree(t,e,i){const n=i==="Oak"?Np():Fp();return n.position.set(t,0,e),n}createVoxelCloud(t,e){const i=new Et,n=new j(3,2,3),s=new Ap({color:15922943,transparent:!0,opacity:.9}),o=8+Math.floor(Math.random()*6);for(let a=0;a<o;a++){const l=(Math.random()-.5)*12,c=(Math.random()-.5)*12,h=(Math.random()-.5)*2,u=new I(n,s);u.position.set(l,h,c),u.castShadow=!1,u.receiveShadow=!1,i.add(u)}return i.position.set(t,30+Math.random()*8,e),i}buildVoxelGroundMaterial(){const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d"),n="#4caf50",s="#66bb6a",o="#8d6e63",a=8;for(let u=0;u<64;u+=a)for(let d=0;d<64;d+=a){const f=Math.random()>.85?o:(d/a+u/a)%2===0?n:s;i.fillStyle=f,i.fillRect(d,u,a,a)}const l=i.getImageData(0,0,64,64),c=l.data;for(let u=0;u<c.length;u+=4){const d=Math.random()*30-15;c[u]=Math.min(255,Math.max(0,c[u]+d)),c[u+1]=Math.min(255,Math.max(0,c[u+1]+d)),c[u+2]=Math.min(255,Math.max(0,c[u+2]+d))}i.putImageData(l,0,0);const h=new Tp(e);return h.wrapS=h.wrapT=ls,h.repeat.set(this.mapSize/10,this.mapSize/10),h.magFilter=Ee,h.minFilter=Fl,new q({map:h,roughness:1,metalness:0})}createRock(t,e,i=0){const n=Op(t,e,i);return this._tagStaticCollider(n,"rock"),n}createRockPillar(t,e,i=0){const n=kp(t,e,i);return this._tagStaticCollider(n,"rock"),n}createFlatBoulder(t,e,i=0){const n=zp(t,e,i);return this._tagStaticCollider(n,"rock"),n}createCrystalShard(t,e,i=0){return Hp(t,e,i)}createStackedRock(t,e,i=0){const n=new Et,s=this.createRock(0,0,0);n.add(s);const o=this.createRock(0,0);o.scale.set(.6,.6,.6),o.position.set(.3,o.position.y+.9,-.2),n.add(o);const a=this.createRock(0,0);return a.scale.set(.4,.4,.4),a.position.set(-.2,a.position.y+1.5,.3),n.add(a),n.position.set(t,i,e),n.traverse(l=>{l.castShadow=!0,l.receiveShadow=!0}),this._tagStaticCollider(n,"rock"),n}createBasaltCluster(t,e,i=0){const n=Gp(t,e,i);return this._tagStaticCollider(n,"rock"),n}createVehicle(t,e,i="car"){const n=Vp(i);return n.position.set(t,0,e),n}createBush(t,e){const i=new Et;i.position.set(t,0,e);const n=new q({color:2924588,roughness:1}),s=2+Math.floor(Math.random()*3);for(let o=0;o<s;o++){const a=1.2+Math.random()*1,l=new I(new vi(a,6,6),n);l.position.set((Math.random()-.5)*1.2,a*.65,(Math.random()-.5)*1.2),l.castShadow=!0,i.add(l)}return i}createGrassClump(t,e){const i=new Et;i.position.set(t,0,e);const n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const o=.2+Math.random()*.6,a=new we(.05,o),l=new q({color:5620331,side:Ne}),c=new I(a,l);c.position.y=o/2,c.rotation.y=Math.random()*Math.PI,c.rotation.z=(Math.random()-.5)*.6,c.receiveShadow=!0,i.add(c)}return i}createHouse(t,e,{scale:i=1}={}){const n=new Et;n.position.set(t,0,e),n.rotation.y=Math.random()*Math.PI*2;const s=new q({color:9807270}),o=new q({color:12597547});[{w:6,h:4,d:.5,x:0,y:2,z:-3},{w:.5,h:4,d:6,x:-3,y:2,z:0},{w:.5,h:4,d:6,x:3,y:2,z:0},{w:2,h:4,d:.5,x:-2,y:2,z:3},{w:2,h:4,d:.5,x:2,y:2,z:3},{w:2,h:1,d:.5,x:0,y:3.5,z:3}].forEach(f=>{const y=new I(new j(f.w,f.h,f.d),s);y.position.set(f.x,f.y,f.z),y.castShadow=!0,y.receiveShadow=!0,n.add(y),this.objects.push(y)});const l=new I(new mn(5,2,4),o);l.position.y=5,l.rotation.y=Math.PI/4,l.castShadow=!0,n.add(l);const c=new q({color:5057307}),h=new I(new j(1,2.2,.1),c);h.position.set(0,1.1,3.26),n.add(h);const u=new q({color:8962303,metalness:.1,roughness:.2,transparent:!0,opacity:.8}),d=new I(new j(1,1,.05),u);d.position.set(-2,2.2,-3.26);const g=d.clone();return g.position.set(2,2.2,-3.26),n.add(d),n.add(g),n.scale.setScalar(i),n}createPlateau(t,e,i=10,n=8,s=0){const o=new Et,a=new q({color:8355711,roughness:1}),l=new I(new oe(i,i*1.05,n,16,1),a);l.position.set(0,n/2,0),l.castShadow=!0,l.receiveShadow=!0,o.add(l);const c=i*1.4,h=n,u=i*.8,d=new j(u,h,c),g=new I(d,new q({color:9342606,roughness:1}));g.castShadow=!0,g.receiveShadow=!0;const f=Math.atan(h/c);g.rotation.x=-f,g.position.set(0,h/2,i),g.userData={type:"house"},o.add(g);const y=new j(u,.2,c),p=new I(y,new q({color:7105644}));return p.position.set(0,h,i),p.rotation.x=g.rotation.x,p.castShadow=!0,o.add(p),o.position.set(t,s,e),o.userData={type:"house"},o}createSmallBuilding(t,e){const i=new Et;i.position.set(t,0,e),i.rotation.y=Math.random()*Math.PI*2;const n=new q({color:8359053}),s=new q({color:12436423}),o=8,a=8,l=6,c=.35,h=2.2,u=o/2,d=a/2,g=new I(new j(o,l,c),n);g.position.set(0,l/2,-d);const f=new I(new j(c,l,a),n);f.position.set(-u,l/2,0);const y=f.clone();y.position.x=u;const p=new I(new j((o-h)/2,l,c),n);p.position.set(-2.55,l/2,d);const m=p.clone();m.position.x=h/2+(o-h)/4,[g,f,y,p,m].forEach(M=>{M.castShadow=!0,M.receiveShadow=!0,i.add(M)});const _=new I(new j(o-.4,.3,a-.4),s);_.position.y=.15,_.receiveShadow=!0,i.add(_);const v=new I(new j(o-.4,.3,a-.4),s);v.position.y=3.4,v.receiveShadow=!0,i.add(v);const x=v.position.y,T=10,b=new j(3,x,T),C=new I(b,s);C.position.set(0,x/2,d+T/2),C.rotation.x=-Math.atan(x/T),C.castShadow=!0,C.receiveShadow=!0,i.add(C);const D=new I(new j(o+.4,.4,a+.4),new q({color:9807270}));return D.position.y=l+.2,D.castShadow=!0,i.add(D),i}spawnPrefab(t,e,i,n={}){const s=this.getHeightAt&&typeof this.getHeightAt=="function"?this.getHeightAt(e,i):0;let o=null;switch(t){case"house":{o=this.createHouse(e,i,{scale:1}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"House",type:"house"};break}case"mansion":{o=this.createHouse(e,i,{scale:1.6}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Mansion",type:"house",size:"large"};break}case"cabin":{o=this.createHouse(e,i,{scale:.85}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Cabin",type:"house",size:"small"};break}case"smallBuilding":{o=this.createSmallBuilding(e,i),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"};break}case"plateau":{const a=this.createPlateau(e,i,10+Math.random()*6,8+Math.random()*6,s);a.userData={gameId:this.generateID(),gameName:"Plateau",type:"house",size:"large"},o=a;break}case"rock":{o=this.createRock(e,i),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"};break}case"tree":{const a=n.variant||(Math.random()>.5?"Oak":"Pine");o=this.createTree(e,i,a),o.position.y=s,o.userData={gameId:this.generateID(),gameName:`Tree_${a}`,type:"tree"};break}case"vehicle":{const a=n.variant||(Math.random()>.6?"truck":"car");o=this.createVehicle(e,i,a),o.position.y=s,o.userData={gameId:this.generateID(),gameName:`Vehicle_${a}`,type:"vehicle"};break}case"crate":{const a=new I(new j(2,2,2),new q({color:9342606,roughness:.9}));a.position.set(e,s+1,i),a.castShadow=!0,a.receiveShadow=!0,a.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},o=a;break}}return o&&(this.scene.add(o),this.objects.push(o)),o}createArenaBunker(t,e){const i=new Et;i.position.set(t,0,e),i.rotation.y=Math.random()*Math.PI*2;const n=new Qi({color:4937059,flatShading:!0}),s=new Qi({color:6253691,flatShading:!0}),o=new I(new j(6,2.5,6),n);o.position.y=1.25,o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=new I(new j(6.2,.3,6.2),s);a.position.y=2.65,a.castShadow=!0,i.add(a);const l=new I(new j(1.2,1.8,.2),new Qi({color:9280168,flatShading:!0,transparent:!0,opacity:.2}));l.position.set(0,.9,3.1),i.add(l);const c=new j(2,1.2,4),h=new I(c,s);return h.position.set(-2.5,.6,-1),h.rotation.x=-Math.atan(1.2/4),h.castShadow=!0,h.receiveShadow=!0,h.userData={type:"house"},i.add(h),i}createStormVisuals(){if(this.gameMode==="matrix")return;const t=new oe(this.stormRadius,this.stormRadius,50,32,1,!0),e=new yi({color:9323693,transparent:!0,opacity:.3,side:Ne});this.stormMesh=new I(t,e),this.stormMesh.position.y=25,this.scene.add(this.stormMesh)}createTarget(t,e){const i=new Et;i.position.set(t,0,e);const n=new I(new oe(.05,.05,2,6),new q({color:8947848}));n.position.y=1,i.add(n);const s=new Cn(.8,24),o=new q({color:16777215}),a=new I(s,o);a.position.set(0,2,0),a.rotation.y=Math.PI,i.add(a);const l=new q({color:16729156}),c=new q({color:15844367}),h=new q({color:3447003}),u=(g,f)=>{const y=new I(new Ar(g,.02,6,24),f);return y.rotation.x=Math.PI/2,y.position.y=2,y};i.add(u(.75,h)),i.add(u(.55,l)),i.add(u(.35,c));const d=new I(new Cn(.1,12),new q({color:0}));return d.position.set(0,2.01,0),d.rotation.y=Math.PI,i.add(d),i.userData={gameId:this.generateID(),gameName:"Target",type:"house"},i}update(t,e){if(this.gameMode==="matrix"||this.gameMode==="studio"||this.gameMode==="matrix-ai")return{inStorm:!1};if(this.stormEnabled===!1)return{inStorm:!1};if(this.stormRadius>10){this.stormRadius-=this.stormShrinkRate*t;const n=this.initialStormRadius?this.stormRadius/this.initialStormRadius:1;this.stormMesh&&this.stormMesh.scale&&this.stormMesh.scale.set(n,1,n)}return{inStorm:Math.sqrt(e.x*e.x+e.z*e.z)>this.stormRadius}}_buildHeightFn(){return()=>0}_tagStaticCollider(t,e=null){if(!t)return;t.updateWorldMatrix(!0,!0);const i=new _i().setFromObject(t);t.userData=t.userData||{},e&&!t.userData.type&&(t.userData.type=e),t.userData.colliderBox=i,t.userData.colliderType="solid"}getHeightAt(t,e){return this._heightFn?this._heightFn(t,e):0}}const Xp="modulepreload",jp=function(r){return"/threejs-voxel-firecraft/dist/"+r},ga={},qp=function(t,e,i){let n=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(e.map(l=>{if(l=jp(l),l in ga)return;ga[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Xp,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,g)=>{u.addEventListener("load",d),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},tn=new fn(0,0,0,"YXZ"),en=new P,Yp={type:"change"},Kp={type:"lock"},$p={type:"unlock"},ya=Math.PI/2;class Zp extends Ni{constructor(t,e){super(),this.camera=t,this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Jp.bind(this),this._onPointerlockChange=Qp.bind(this),this._onPointerlockError=tm.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(t){const e=this.camera;en.setFromMatrixColumn(e.matrix,0),en.crossVectors(e.up,en),e.position.addScaledVector(en,t)}moveRight(t){const e=this.camera;en.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(en,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Jp(r){if(this.isLocked===!1)return;const t=r.movementX||r.mozMovementX||r.webkitMovementX||0,e=r.movementY||r.mozMovementY||r.webkitMovementY||0,i=this.camera;tn.setFromQuaternion(i.quaternion),tn.y-=t*.002*this.pointerSpeed,tn.x-=e*.002*this.pointerSpeed,tn.x=Math.max(ya-this.maxPolarAngle,Math.min(ya-this.minPolarAngle,tn.x)),i.quaternion.setFromEuler(tn),this.dispatchEvent(Yp)}function Qp(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Kp),this.isLocked=!0):(this.dispatchEvent($p),this.isLocked=!1)}function tm(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const em="/threejs-voxel-firecraft/dist/assets/mixkit-game-gun-shot-D1lu3gfh.ogg",im="/threejs-voxel-firecraft/dist/assets/smack-BAv2er9i.ogg",nm="/threejs-voxel-firecraft/dist/assets/ugh-CPf3Qqe6.ogg",sm="/threejs-voxel-firecraft/dist/assets/mixkit-footsteps-on-tall-grass-532-DkmduvPT.ogg",rm="/threejs-voxel-firecraft/dist/assets/mixkit-car-door-slam-xN3cwxzE.wav";class Pr{constructor(t,e,i,n={}){this.camera=t,this.scene=e,this.worldObjects=i,this.world=null,this.hud=null,this.gameMode=n.gameMode||"arcade",this.showTracers=n.showTracers===!0,this.backpack=null,this.backpackColor=null,this.placedBlocks=[],this.blockSize=1,this.minBlockSize=.5,this.maxBlockSize=2,this.previewBlock=null,this.isFloating=!1,this.selectedBlock=null,this.selectedBlockHelper=null,this.health=100,this.shield=100,this.isDead=!1,this.stamina=100,this.punchCount=0,this.isTired=!1,this.velocity=new P,this.direction=new P,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.canJump=!1,this.speed=42,this.jumpHeight=16,this.gravity=65,this.mouthStyle=n&&n.mouthStyle?n.mouthStyle:"serious",this.mouthMesh=null,this.mouthStyles=["serious","smile","angry","surprised","none"],this.showHat=n&&typeof n.showHat<"u"?n.showHat:!0,this.hatMeshes=[],this.distanceTraveled=0,this.previousPosition=new P,this.allWeapons=[{name:"Pistol",ammo:12,maxAmmo:60,magazineSize:12,currentMag:12,damage:20,cooldown:.5,lastShot:0,reloadTime:1.5,range:50},{name:"Fist",ammo:1/0,maxAmmo:1/0,magazineSize:1/0,currentMag:1/0,damage:10,cooldown:.2,lastShot:0,reloadTime:0,range:3},{name:"Rifle",ammo:30,maxAmmo:120,magazineSize:30,currentMag:30,damage:25,cooldown:.15,lastShot:0,reloadTime:2,range:120,zoomFov:30},{name:"Sniper",ammo:5,maxAmmo:20,magazineSize:5,currentMag:5,damage:100,cooldown:2,lastShot:0,reloadTime:3,range:400,zoomFov:12},{name:"SMG",ammo:40,maxAmmo:200,magazineSize:40,currentMag:40,damage:15,cooldown:.08,lastShot:0,reloadTime:1.8,range:80},{name:"Shotgun",ammo:6,maxAmmo:24,magazineSize:6,currentMag:6,damage:60,cooldown:1,lastShot:0,reloadTime:2.5,range:25},{name:"DMR",ammo:12,maxAmmo:48,magazineSize:12,currentMag:12,damage:45,cooldown:.35,lastShot:0,reloadTime:2.2,range:200,zoomFov:18}],this.gameMode==="matrix-ai"?this.weapons=[this.allWeapons[1]]:this.weapons=[this.allWeapons[1],this.allWeapons[0]],this.currentWeaponIndex=0,this.isReloading=!1,this.controls=new Zp(t,document.body),document.addEventListener("pointerlockerror",s=>{try{s.stopImmediatePropagation()}catch{}console.warn("Pointer lock request failed or unavailable in this environment.")},!0),this.allowTouchMovement=!1,this._touchYaw=0,this._touchPitch=0,document.addEventListener("fullscreenchange",()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}),this.createPlayerMesh(),this.cameraMode=n.cameraMode||"TPS",this.fpsCameraOffset=new P(0,1.6,0),this.tpsCameraOffset=new P(1,1.8,3.4),this.initControls(),this.sfxVolume=.7,this.sfxVolume=.7,this.gunshotBuffer=null,this.reloadBuffer=null,this.smackBuffer=null,this.ughBuffer=null,this.footstepsBuffer=null,this._footstepsSource=null,this._footstepsGain=null,this.vehicleDoorBuffer=null,this.vehicleDriveBuffer=null,this._vehicleDriveSource=null,this._vehicleDriveGain=null,this._lastVehicleDriveActive=!1,this.enableVehicleDriveSound=!1,this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer=null,this._lastFootstepsActive=!1,this.isCrouching=!1,this.crouchHeight=.8,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.vehicleBaseMaxSpeed=70,this.vehicleBoostMax=45,this.vehicleAccel=70,this.vehicleTurnSpeed=1.8,this.vehicleFriction=2.8,this.vehicleAccelHold=0,this.vehiclePromptEl=document.getElementById("interaction-prompt"),this.nearVehicle=null,this.vehicleFuel=0,this.vehicleFuelCapacity=0,this.vehicleDistance=0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=0,this.vehicleEfficiencyKmPerL=10,this.vehicleIdleLph=.4,this.vehicleThrottleLph=.8,this._vehicleStateCache=null,this.vehicleTurbo=!1,this.currentSpeed=0,this.vehicleHud={root:document.getElementById("vehicle-hud"),speed:document.getElementById("vehicle-speed"),fuelBar:document.getElementById("vehicle-fuel-bar"),fuelFill:document.getElementById("vehicle-fuel-fill"),fuelText:document.getElementById("vehicle-fuel-text"),distance:document.getElementById("vehicle-distance"),efficiency:document.getElementById("vehicle-efficiency"),range:document.getElementById("vehicle-range")},this.studioSelected=null,this._studioRaycaster=new Xe,this.studioSelectionHelper=null,this.selectionInfo=document.getElementById("selection-info"),this.controls.enabled=this.gameMode!=="studio";try{const s=window.AudioContext||window.webkitAudioContext;s&&(this.audioCtx=new s,fetch(em).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.gunshotBuffer=o}).catch(o=>console.warn("Error loading gunshot SFX:",o)),qp(()=>import("./mixkit-shotgun-recharge-CcrH8C2K.js"),[]).then(o=>fetch(o.default)).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.reloadBuffer=o}).catch(o=>console.warn("Error loading reload SFX:",o)),fetch(im).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.smackBuffer=o}).catch(o=>console.warn("Error loading smack SFX:",o)),fetch(nm).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.ughBuffer=o}).catch(o=>console.warn("Error loading hurt SFX:",o)),fetch(sm).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.footstepsBuffer=o}).catch(o=>console.warn("Error loading footsteps SFX:",o)),fetch(rm).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.vehicleDoorBuffer=o}).catch(o=>console.warn("Error loading vehicle door SFX:",o)))}catch(s){console.warn("Web Audio API not supported:",s)}}separateFromRemotePlayers(){if(!this.multiplayerClient||!this.multiplayerClient.others||this.multiplayerClient.others.size===0)return;const e=.6*2,i=this.mesh.position;this.multiplayerClient.others.forEach(n=>{if(!n||!n.position||n.userData&&n.userData.dead)return;const s=i.x-n.position.x,o=i.z-n.position.z,a=s*s+o*o;if(a<e*e&&a>1e-4){const l=Math.sqrt(a),c=(e-l)*.5,h=s/l,u=o/l;i.x+=h*c,i.z+=u*c}})}placeBlock(){if(!this.world)return;const t=this.getBlockTarget(),e=t.size,i=new j(e,e,e),n=new q({color:11887901,roughness:.9}),s=new I(i,n);s.position.copy(t.position),s.castShadow=!0,s.receiveShadow=!0,s.userData={type:"block",size:e,gameId:this.world.generateID?this.world.generateID():void 0,gameName:"Block"},this.scene.add(s),this.world.objects&&this.world.objects.push(s),this.placedBlocks.push(s)}createPlayerMesh(){this.mesh=new Et,this.scene.add(this.mesh);const t=this.playerColor||3447003,e=new q({color:t}),i=new q({color:16764074}),n=new q({color:2899536});this.head=new I(new j(.5,.5,.5),i),this.head.position.y=1.75,this.head.name="playerHead",this.head.userData={role:"playerHead"},this.mesh.add(this.head);const s=new q({color:15158332}),o=new I(new j(.52,.1,.52),s);o.position.set(0,.3,0),o.userData={role:"playerHat"},o.name="playerHatCap",this.head.add(o);const a=new I(new j(.52,.02,.35),s);a.position.set(0,.22,.35),a.userData={role:"playerHat"},a.name="playerHatBrim",this.head.add(a),this.hatMeshes=[o,a],this.setHatVisible(this.showHat);const l=new q({color:0}),c=new q({color:1710618,transparent:!0,opacity:.7,metalness:.8,roughness:.2}),h=new I(new j(.18,.12,.02),c);h.position.set(-.12,.05,.26),this.head.add(h);const u=new I(new j(.18,.12,.02),c);u.position.set(.12,.05,.26),this.head.add(u);const d=new I(new j(.08,.02,.02),l);d.position.set(0,.05,.26),this.head.add(d);const g=new I(new j(.02,.02,.3),l);g.position.set(-.21,.05,.1),this.head.add(g);const f=new I(new j(.02,.02,.3),l);f.position.set(.21,.05,.1),this.head.add(f),this.createMouth(this.mouthStyle);const y=new I(new j(.6,.8,.3),e);y.position.y=1.1,this.mesh.add(y);const p=new j(.2,.8,.2);p.translate(0,-.3,0),this.leftArmPivot=new Et,this.leftArmPivot.name="leftArmPivot",this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot);const m=new I(p,i);this.leftArmPivot.add(m),this.rightArmPivot=new Et,this.rightArmPivot.name="rightArmPivot",this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot);const _=new I(p,i);this.rightArmPivot.add(_),this.weaponModels={};const v=new Et,x=new I(new j(.12,.12,.35),new q({color:1710618,metalness:.8,roughness:.3}));x.position.set(0,-.28,.2);const T=new I(new j(.06,.06,.15),new q({color:657930,metalness:.9,roughness:.2}));T.position.set(0,-.28,.4);const b=new I(new j(.1,.25,.12),new q({color:2894892}));b.position.set(0,-.42,.15);const C=new I(new j(.03,.05,.03),new q({color:1710618}));C.position.set(0,-.35,.18),v.add(x,T,b,C),this.rightArmPivot.add(v),this.weaponModels.Pistol=v;const D=new Et,M=new I(new j(.08,.08,.9),new q({color:1710618,metalness:.8,roughness:.3}));M.position.set(0,-.28,.45);const w=new I(new j(.12,.14,.4),new q({color:2894892}));w.position.set(0,-.3,.2);const F=new I(new j(.1,.22,.12),new q({color:2894892}));F.position.set(0,-.44,.15);const O=new I(new j(.1,.12,.25),new q({color:3815994}));O.position.set(0,-.28,-.1);const J=new I(new j(.08,.25,.1),new q({color:1710618}));J.position.set(0,-.5,.2),D.add(M,w,F,O,J),this.rightArmPivot.add(D),this.weaponModels.Rifle=D;const L=new Et,N=new I(new j(.08,.08,1.3),new q({color:1727514,metalness:.6,roughness:.4}));N.position.set(0,-.28,.65);const W=new I(new j(.14,.16,.5),new q({color:2969622}));W.position.set(0,-.3,.25);const K=new I(new oe(.06,.06,.35,8),new q({color:657930,metalness:.9,roughness:.1}));K.rotation.z=Math.PI/2,K.position.set(0,-.18,.4);const Y=new I(new oe(.05,.05,.02,8),new q({color:1723791,metalness:.9,roughness:.1,emissive:663616}));Y.rotation.z=Math.PI/2,Y.position.set(0,-.18,.58);const $=new I(new j(.12,.14,.3),new q({color:3811866}));$.position.set(0,-.28,-.05);const Z=new I(new j(.02,.15,.02),new q({color:1710618}));Z.position.set(0,-.42,.5),L.add(N,W,K,Y,$,Z),this.rightArmPivot.add(L),this.weaponModels.Sniper=L,Object.values(this.weaponModels).forEach(_t=>_t.visible=!1);const tt=D.clone();tt.traverse(_t=>{_t.material&&_t.material.color&&_t.material.color.setHex(5598095)}),tt.scale.set(.8,.8,.8),this.rightArmPivot.add(tt),this.weaponModels.SMG=tt;const et=D.clone();et.traverse(_t=>{_t.material&&_t.material.color&&_t.material.color.setHex(9132587)}),et.scale.set(1.1,1,.8),this.rightArmPivot.add(et),this.weaponModels.Shotgun=et;const H=D.clone();H.traverse(_t=>{_t.material&&_t.material.color&&_t.material.color.setHex(3050327)}),H.scale.set(.95,.95,1),this.rightArmPivot.add(H),this.weaponModels.DMR=H;const Q=new j(this.blockSize,this.blockSize,this.blockSize),at=new q({color:3066993,transparent:!0,opacity:.35,wireframe:!0});this.previewBlock=new I(Q,at),this.previewBlock.visible=this.gameMode==="studio",this.previewBlock.castShadow=!1,this.previewBlock.receiveShadow=!1,this.scene.add(this.previewBlock);const yt=new j(.25,.8,.25);yt.translate(0,-.4,0),this.leftLegPivot=new Et,this.leftLegPivot.name="leftLegPivot",this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot);const xt=new I(yt,n);this.leftLegPivot.add(xt),this.rightLegPivot=new Et,this.rightLegPivot.name="rightLegPivot",this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot);const At=new I(yt,n);if(this.rightLegPivot.add(At),this.isAiming=!1,this.baseFov=75,this.aimFov=20,this.hitTimer=0,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.isPunching=!1,this.punchSide=0,this.isBlocking=!1,this.yaw=0,this.pitch=0,this.camera){const _t=new fn().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=_t.y,this.pitch=_t.x}}rotateCamera(t,e){if(!this.controls||!this.controls.isLocked){this.yaw-=t,this.pitch-=e;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}initControls(){const t=s=>{if(this.gameMode==="studio"&&this.studioSelected)switch(s.code){case"ArrowUp":s.shiftKey?this.moveSelectedObject(0,0,1.5):this.moveSelectedObject(0,-2),s.preventDefault();return;case"ArrowDown":s.shiftKey?this.moveSelectedObject(0,0,-1.5):this.moveSelectedObject(0,2),s.preventDefault();return;case"ArrowLeft":this.moveSelectedObject(-2,0),s.preventDefault();return;case"ArrowRight":this.moveSelectedObject(2,0),s.preventDefault();return;case"KeyX":this.removeSelectedObject(),s.preventDefault();return}switch(s.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"Digit1":this.switchWeapon(0);break;case"Digit2":this.switchWeapon(1);break;case"Digit3":this.switchWeapon(2);break;case"Digit4":this.switchWeapon(3);break;case"Digit5":this.switchWeapon(4);break;case"Digit6":this.switchWeapon(5);break;case"Numpad1":this.switchWeapon(0);break;case"Numpad2":this.switchWeapon(1);break;case"Numpad3":this.switchWeapon(2);break;case"Numpad4":this.switchWeapon(3);break;case"Numpad5":this.switchWeapon(4);break;case"Numpad6":this.switchWeapon(5);break;case"KeyB":this.gameMode==="studio"&&this.placeBlock();break;case"KeyU":if(this.gameMode==="studio"&&(this.isFloating=!this.isFloating,!this.isFloating)){const o=this.getSurfaceHeight(this.position.x,this.position.z);this.mesh.position.y=o,this.velocity.y=0}break;case"Minus":this.gameMode==="studio"&&this.adjustBlockSize(-.1);break;case"Equal":this.gameMode==="studio"&&this.adjustBlockSize(.1);break;case"KeyM":this.gameMode==="studio"&&this.moveLastBlock();break;case"KeyX":this.gameMode==="studio"&&(this.studioSelected?this.removeSelectedObject():this.selectedBlock?this.removeBlock(this.selectedBlock):this.removeLastBlock());break;case"KeyR":this.reload();break;case"KeyC":this.isCrouching=!this.isCrouching,this.isCrouching&&(this.isSprinting=!1);break;case"ShiftLeft":case"ShiftRight":this.isCrouching||(this.isSprinting=!0);break;case"Space":!this.isInVehicle&&this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"KeyN":this.isInVehicle&&(this.vehicleTurbo=!0);break;case"KeyV":this.toggleCameraMode();break;case"KeyE":if(this.isInVehicle){this.exitVehicle();return}else{const o=this.findNearbyVehicle();if(o){this.enterVehicle(o);return}}break}},e=s=>{switch(s.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break;case"Space":break;case"KeyN":this.vehicleTurbo=!1;break}},i=s=>{this.gameMode==="studio"&&(this.selectStudioObject(s)||this.selectBlockUnderCrosshair())||this.controls.isLocked&&(s.button===0?this.shoot():s.button===2&&(this.isAiming=!0))},n=s=>{s.button===2&&(this.isAiming=!1)};document.addEventListener("keydown",t),document.addEventListener("keyup",e),document.addEventListener("mousedown",i),document.addEventListener("mouseup",n),document.addEventListener("contextmenu",s=>s.preventDefault()),this._mouthRaycaster=new Xe,document.addEventListener("pointerdown",s=>{try{if(this.controls&&this.controls.isLocked||!this.head||!this.camera)return;const o=s.clientX/window.innerWidth*2-1,a=-(s.clientY/window.innerHeight)*2+1;this._mouthRaycaster.setFromCamera(new Pt(o,a),this.camera);const l=this._mouthRaycaster.intersectObject(this.head,!0);l&&l.length>0&&(s.preventDefault(),s.stopPropagation(),this.cycleMouthStyle())}catch{}})}lockControls(){if(!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)){console.warn("Pointer Lock API not available in this environment.");return}const e=document.getElementById("main-menu");if(!(e&&e.style.display!=="none")&&!this.isPaused)try{const i=this.controls.lock();i&&typeof i.catch=="function"&&i.catch(()=>{})}catch(i){console.warn("Unable to lock pointer:",i)}}toggleCameraMode(){this.cameraMode=this.cameraMode==="FPS"?"TPS":"FPS",this.mesh&&(this.mesh.visible=this.cameraMode==="TPS"),console.log(`Camera mode: ${this.cameraMode}`)}switchWeapon(t){if(t>=0&&t<this.weapons.length){if(this.isReloading)return;this.currentWeaponIndex=t;const e=this.weapons[t].name;Object.values(this.weaponModels).forEach(i=>i.visible=!1),this.weaponModels[e]&&(this.weaponModels[e].visible=!0)}}reload(){if(this.isReloading)return;const t=this.weapons[this.currentWeaponIndex];t.ammo!==1/0&&t.currentMag!==t.magazineSize&&(t.ammo<=0||(this.isReloading=!0,console.log("Reloading..."),this.playReloadSound(),setTimeout(()=>{this.finishReload()},t.reloadTime*1e3)))}playReloadSound(){try{if(this.audioCtx&&this.reloadBuffer){this.audioCtx.state==="suspended"&&this.audioCtx.resume();const t=this.audioCtx.createBufferSource();t.buffer=this.reloadBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume*.8,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}catch(t){console.warn("Error playing reload sound:",t)}}finishReload(){if(!this.isReloading)return;const t=this.weapons[this.currentWeaponIndex],e=t.magazineSize-t.currentMag,i=t.ammo,n=Math.min(e,i);t.currentMag+=n,t.ammo-=n,this.isReloading=!1,console.log("Reloaded!")}startBlocking(){this.weapons[this.currentWeaponIndex].name==="Fist"&&(this.isBlocking=!0)}stopBlocking(){this.isBlocking=!1}collectItem(t){if(t==="ShieldPotion"){this.shield=Math.min(100,this.shield+50);return}if(t==="MedKit"){this.health=Math.min(100,this.health+25),console.log("Used MedKit from chest: +25 HP");return}if(t&&t.startsWith("Backpack:")){const i=t.split(":")[1]||"2c3e50";return this.equipBackpack(parseInt(i,16))}const e=this.weapons.find(i=>i.name===t);if(e)e.ammo=Math.min(e.maxAmmo,e.ammo+e.magazineSize),console.log("Added ammo for "+t);else{const i=this.allWeapons.find(n=>n.name===t);i&&(this.weapons.push(i),console.log("Picked up "+t))}}setEnemyManager(t){this.enemyManager=t}setMultiplayerClient(t){this.multiplayerClient=t}shoot(){var l;if(!(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0)||this.isDead||this.isReloading||this.isBlocking)return;const e=this.weapons[this.currentWeaponIndex],i=performance.now()/1e3;if(i-e.lastShot<e.cooldown)return;if(e.currentMag<=0){this.reload();return}if(e.lastShot=i,e.ammo!==1/0&&e.currentMag--,e.name==="Fist"){this.punch();return}this.createMuzzleFlash();try{if(this.audioCtx&&this.gunshotBuffer&&this.audioCtx.state==="running"){const c=this.audioCtx.createBufferSource();c.buffer=this.gunshotBuffer,e.name==="Pistol"?c.playbackRate.value=1:e.name==="Rifle"?c.playbackRate.value=1.15:e.name==="Sniper"?c.playbackRate.value=.9:c.playbackRate.value=1;const h=this.audioCtx.createGain();h.gain.value=this.sfxVolume,c.connect(h),h.connect(this.audioCtx.destination),c.start(0)}else this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}catch{}const n=new Xe;n.setFromCamera(new Pt(0,0),this.camera);const s=this.camera.position.clone();new P,n.ray.direction.clone().normalize();let o=s.clone().add(n.ray.direction.clone().multiplyScalar(1e3)),a=!1;if(this.worldObjects&&this.worldObjects.length>0){const c=n.intersectObjects(this.worldObjects,!0);c.length>0&&(o=c[0].point.clone(),a=!0)}if(this.enemyManager&&this.enemyManager.enemies){const c=n.intersectObjects(this.enemyManager.enemies.map(h=>h.mesh),!0);if(c.length>0){const h=c[0].point,u=s.distanceTo(h),d=s.distanceTo(o);if(u<d){const g=c[0].object;o=h.clone(),a=!0;let f=null;if(f=(p=>{let m=p;for(;m;){const _=this.enemyManager.enemies.find(v=>v.mesh===m);if(_)return _;m=m.parent}return null})(g),f){const p=s.distanceTo(f.position),m=e.range||1e3;if(p<=m){const _=e.damage;if(this.multiplayerClient&&this.player&&this.player.gameMode==="multiplayer"){const v=this.multiplayerClient.isHost,x=f.mesh&&f.mesh.userData?f.mesh.userData.gameId:null;x&&(v?(f.takeDamage(_),typeof this.multiplayerClient.sendZombieState=="function"&&this.multiplayerClient.sendZombieState(x,f.health)):typeof this.multiplayerClient.sendZombieHit=="function"&&this.multiplayerClient.sendZombieHit(x,_))}else f.takeDamage(e.damage)}else a=!1}}}}if(this.multiplayerClient&&this.multiplayerClient.others&&this.multiplayerClient.others.size>0){const c=Array.from(this.multiplayerClient.others.values()),h=n.intersectObjects(c,!0);if(h.length>0){const u=h[0].point,d=s.distanceTo(u),g=s.distanceTo(o);if(d<g){o=u.clone(),a=!0;let f=h[0].object;for(;f&&!((l=f.userData)!=null&&l.gameId)&&f.parent;)f=f.parent;const y=f&&f.userData?f.userData.gameId:null;y&&this.multiplayerClient&&typeof this.multiplayerClient.sendHit=="function"&&this.multiplayerClient.sendHit(y,e.damage)}}}this.showTracers&&this.createBulletTracer(s,o,a),a&&e.name==="Sniper"&&this.createImpactSmoke(o)}static buildMouthMesh(t){const e=(t||"serious").toLowerCase(),i=new q({color:2824976,roughness:.6,metalness:0});let n=null;if(e==="smile"){const s=new Et;s.userData={role:"playerMouth"},s.name="playerMouth";const o=i.clone(),a=new I(new j(.08,.04,.02),o),l=a.clone(),c=a.clone();a.position.set(-.1,-.15,.26),a.rotation.z=-.2,l.position.set(0,-.16,.26),c.position.set(.1,-.15,.26),c.rotation.z=.2,[a,l,c].forEach(h=>{h.userData={role:"playerMouth"},h.name="playerMouthSeg"}),s.add(a,l,c),n=s}else if(e==="angry"){const s=new q({color:5901324,roughness:.4});n=new I(new j(.26,.05,.02),s),n.position.set(0,-.16,.26),n.rotation.z=-.18,n.userData={role:"playerMouth"}}else if(e==="surprised")n=new I(new oe(.06,.06,.02,20),i),n.position.set(0,-.14,.26),n.rotation.x=Math.PI/2,n.userData={role:"playerMouth"};else{if(e==="none")return null;n=new I(new j(.22,.06,.02),i),n.position.set(0,-.16,.26),n.userData={role:"playerMouth"}}return n.castShadow=!1,n.receiveShadow=!1,n.name="playerMouth",n}createMouth(t){if(!this.head)return;if(this.mouthMesh){try{this.head.remove(this.mouthMesh)}catch{}this.mouthMesh=null}const e=Pr.buildMouthMesh(t);e&&(this.head.add(e),this.mouthMesh=e)}setHatVisible(t){this.showHat=t,Array.isArray(this.hatMeshes)&&this.hatMeshes.forEach(e=>{e&&(e.visible=t)})}cycleMouthStyle(){const t=this.mouthStyle||"serious",e=this.mouthStyles.indexOf(t),i=this.mouthStyles[(e+1)%this.mouthStyles.length];this.mouthStyle=i,this.createMouth(i),this.persistSetting("mouthStyle",i);const n=document.getElementById("setting-mouth-style");n&&(n.value=i)}persistSetting(t,e){if(!(typeof window>"u"||!window.localStorage))try{const i=window.localStorage.getItem("voxel-firecraft-settings"),n=i?JSON.parse(i):{};n[t]=e,window.localStorage.setItem("voxel-firecraft-settings",JSON.stringify(n))}catch{}}createMuzzleFlash(){const t=new Pp(16776960,1,5),e=new P;this.camera.getWorldDirection(e),t.position.copy(this.mesh.position),t.position.y+=1.5,t.position.add(e.multiplyScalar(1)),this.scene.add(t),setTimeout(()=>this.scene.remove(t),100)}createBulletTracer(t,e,i){const n=[t,e],s=new de().setFromPoints(n),o=i?16729156:16776960,a=new Ln({color:o,linewidth:2,opacity:.8,transparent:!0}),l=new Ya(s,a);this.scene.add(l);let c=.8;const h=setInterval(()=>{c-=.1,a.opacity=c,c<=0&&(clearInterval(h),this.scene.remove(l),s.dispose(),a.dispose())},30)}createImpactSmoke(t){const e=new Et;e.position.copy(t);const i=8;for(let a=0;a<i;a++){const l=.15+Math.random()*.2,c=new vi(l,6,6),h=new yi({color:6710886,transparent:!0,opacity:.5}),u=new I(c,h);u.position.set((Math.random()-.5)*.4,(Math.random()-.5)*.2,(Math.random()-.5)*.4),e.add(u)}this.scene.add(e);const n=600,s=performance.now(),o=()=>{const a=performance.now()-s,l=Math.max(0,1-a/n);e.children.forEach(c=>{c.material&&(c.material.opacity=l*.5)}),a<n?requestAnimationFrame(o):(e.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),this.scene.remove(e))};o()}update(t){if(this.isDead)return;if(this.updateVehiclePrompt(),this.isInVehicle){this.updateVehicleDrive(t);return}if(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0){this.velocity.x-=this.velocity.x*10*t,this.velocity.z-=this.velocity.z*10*t,this.isFloating?this.velocity.y*=.9:this.velocity.y-=this.gravity*t,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*this.speed*t),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*this.speed*t);const i=new P;this.camera.getWorldDirection(i),i.y=0,i.normalize();const n=new P;n.crossVectors(i,new P(0,1,0));const s=new P;this.moveForward&&s.add(i),this.moveBackward&&s.sub(i),this.moveRight&&s.add(n),this.moveLeft&&s.sub(n),s.normalize();const o=s.length()>0;let a=1;this.isSprinting&&!this.isCrouching&&o&&this.stamina>0&&(a=2);const l=this.speed*t*.1*a,c=s.multiplyScalar(l);c.x!==0&&(this.checkCollision(new P(Math.sign(c.x),0,0),Math.abs(c.x))||(this.mesh.position.x+=c.x)),c.z!==0&&(this.checkCollision(new P(0,0,Math.sign(c.z)),Math.abs(c.z))||(this.mesh.position.z+=c.z));let h=0;if(this.isFloating){const _=new P;this.camera.getWorldDirection(_);const v=_.y;this.moveForward&&(h+=v*this.speed*t*.3),this.moveBackward&&(h-=v*this.speed*t*.3)}if(this.mesh.position.y+=this.velocity.y*t+h,s.length()>0){const _=Math.atan2(s.x,s.z);this.mesh.rotation.y=_}if(this.mesh.position.y+=this.velocity.y*t,!this.isFloating&&!this.isFloating){this.mesh.position.y<0&&(this.velocity.y=0,this.mesh.position.y=0,this.canJump=!0);const _=this.getSurfaceHeight(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<_&&(this.mesh.position.y=_,this.velocity.y=0,this.canJump=!0)}const u=!this.isFloating&&(this.canJump||this.mesh.position.y<=.01);if(this.handleFootsteps(o&&u&&!this.isDead),this.gameMode==="studio"?this.updateBlockPreview():this.previewBlock&&(this.previewBlock.visible=!1),this.world&&typeof this.world.halfMapSize=="number"){const _=this.world.halfMapSize-1;this.mesh.position.x=Math.max(-_,Math.min(_,this.mesh.position.x)),this.mesh.position.z=Math.max(-_,Math.min(_,this.mesh.position.z))}if(this.separateFromRemotePlayers(),this.previousPosition.length()>0){const _=this.mesh.position.distanceTo(this.previousPosition);this.distanceTraveled+=_,t>0&&(this.currentSpeed=_/t)}if(this.previousPosition.copy(this.mesh.position),this.gameMode==="studio"||this.gameMode==="matrix-ai")this.stamina=100;else if(this.isSprinting&&!this.isCrouching&&o&&this.stamina>0){const _=20*t;this.stamina=Math.max(0,this.stamina-_),this.stamina<=0&&(this.isSprinting=!1)}else{const _=10*t;this.stamina=Math.min(100,this.stamina+_)}this.camera.position.copy(this.mesh.position);const g=this.isCrouching?1.6*this.crouchHeight:1.6;this.camera.position.y+=g;const f=this.isCrouching?this.crouchHeight:1;this.mesh.scale.y+=(f-this.mesh.scale.y)*10*t;let y=this.baseFov;const p=this.weapons[this.currentWeaponIndex];this.isAiming&&p&&p.zoomFov&&(y=p.zoomFov),Math.abs(this.camera.fov-y)>.1&&(this.camera.fov+=(y-this.camera.fov)*10*t,this.camera.updateProjectionMatrix());let m;this.cameraMode==="FPS"?m=this.fpsCameraOffset.clone():(m=this.tpsCameraOffset.clone(),m.applyQuaternion(this.camera.quaternion)),m.add(this.mesh.position),this.camera.position.copy(m),this.updateAnimations(t)}}findNearbyVehicle(){if(!this.worldObjects)return null;let t=null,e=4;return this.worldObjects.forEach(i=>{if(!i||!i.userData||i.userData.type!=="vehicle")return;const n=i.position.distanceTo(this.mesh.position);n<e&&(t=i,e=n)}),t}updateVehiclePrompt(){const t=this.vehiclePromptEl;if(!t)return;if(this.isInVehicle){t.innerText="Press E to exit vehicle",t.dataset.vehiclePrompt="1",t.classList.remove("hidden");return}const e=this.findNearbyVehicle();this.nearVehicle=e,e?(t.innerText="Press E to drive vehicle",t.dataset.vehiclePrompt="1",t.classList.remove("hidden")):t.dataset.vehiclePrompt==="1"&&(t.classList.add("hidden"),delete t.dataset.vehiclePrompt)}enterVehicle(t){if(!t||this.isInVehicle)return!1;t.userData||(t.userData={}),t.userData.hasFrontAligned||(t.rotation.y+=Math.PI,t.userData.hasFrontAligned=!0);const e=this.loadVehicleState(t);this.isInVehicle=!0,this.vehicleAccelHold=0,this.isSprinting=!1,this.vehicleTurbo=!1,this.currentVehicle=t,this.vehicleSpeed=0,this.currentSpeed=0;const i=t.userData&&t.userData.vehicleType||"car";return this.vehicleFuelCapacity=e?e.capacity:i==="truck"?60:40,this.vehicleFuel=e?e.fuel:this.vehicleFuelCapacity,this.vehicleDistance=e?e.distanceKm:0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=e?e.fuelUsed:0,this.vehicleEfficiencyKmPerL=i==="truck"?3.5:5.5,this.vehicleIdleLph=i==="truck"?1:.7,this.vehicleThrottleLph=i==="truck"?2.8:1.9,this._vehicleMaxSpeed=i==="truck"?80/3.6:null,this._vehicleTurboMaxSpeed=i==="truck"?100/3.6:null,this._vehicleStateCache=e||null,this.previousPosition.copy(t.position),this.stopFootsteps(),this.stopVehicleDriveSound(),this.playVehicleDoor(),this.mesh.visible=!1,this.velocity.set(0,0,0),this.mesh.position.copy(t.position),this.updateVehicleHUD(!0),!0}exitVehicle(){if(!this.currentVehicle){this.isInVehicle=!1;return}const t=this.currentVehicle;if(this.playVehicleDoor(),this.stopVehicleDriveSound(),this.stopFootsteps(),this.world&&typeof this.world.getHeightAt=="function"){const s=this.world.getHeightAt(t.position.x,t.position.z),o=this.getVehicleGroundClearance(t);t.position.y=s+o}const e=new P(-1.5,0,-2).applyEuler(t.rotation),i=t.position.clone().add(e);this.mesh.position.copy(i);const n=typeof this.getSurfaceHeight=="function"?this.getSurfaceHeight(i.x,i.z):this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(i.x,i.z):i.y;this.mesh.position.y=n,this.velocity.set(0,0,0),this.mesh.visible=!0,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.canJump=!0,this.previousPosition.copy(this.mesh.position),this.saveVehicleState(t),this.updateVehicleHUD(!1),this.vehiclePromptEl&&this.vehiclePromptEl.dataset.vehiclePrompt==="1"&&(this.vehiclePromptEl.classList.add("hidden"),delete this.vehiclePromptEl.dataset.vehiclePrompt)}getVehicleGroundClearance(t){if(!t)return .05;const e=t.userData||{};return typeof e.groundClearance=="number"?e.groundClearance:typeof e.wheelRadius=="number"&&typeof e.wheelCenterY=="number"?Math.max(0,e.wheelRadius-e.wheelCenterY):.05}updateVehicleDrive(t){const e=this.currentVehicle;if(!e){this.isInVehicle=!1;return}this.stopFootsteps();const i=e.position.clone();if(this.vehicleFuel<=0){this.vehicleSpeed=0,this.mesh.position.copy(e.position),this.previousPosition.copy(e.position),this.currentSpeed=0,this.updateVehicleHUD(!0);return}let n=0;this.moveForward&&(n+=1),this.moveBackward&&(n-=1),this.vehicleSpeed+=n*this.vehicleAccel*t,this.moveForward&&n>0?this.vehicleAccelHold=Math.min(1,this.vehicleAccelHold+t*.8):this.vehicleAccelHold=Math.max(0,this.vehicleAccelHold-t*.6);const s=this.vehicleTurbo&&n>0,o=s?vType==="truck"?1.25:1.6:1,a=s?vType==="truck"?1.15:1.35:1,l=(this.vehicleBaseMaxSpeed+this.vehicleBoostMax*this.vehicleAccelHold)*o,c=this.vehicleBaseMaxSpeed*.5;this.vehicleSpeed=Math.min(l,Math.max(-c,this.vehicleSpeed)),this.vehicleSpeed+=n*this.vehicleAccel*t*(a-1),this.vehicleSpeed*=Math.max(0,1-this.vehicleFriction*t),this._vehicleMaxSpeed&&!s?this.vehicleSpeed=Math.min(this._vehicleMaxSpeed,this.vehicleSpeed):this._vehicleTurboMaxSpeed&&s&&(this.vehicleSpeed=Math.min(this._vehicleTurboMaxSpeed,this.vehicleSpeed)),this.currentSpeed=Math.abs(this.vehicleSpeed);const h=n>0,u=this.vehicleSpeed>=0?1:-1;this.moveLeft&&(e.rotation.y+=this.vehicleTurnSpeed*t*u),this.moveRight&&(e.rotation.y-=this.vehicleTurnSpeed*t*u);const d=new P(0,0,1).applyEuler(e.rotation),g=e.position.clone().addScaledVector(d,this.vehicleSpeed*t);if(this.checkVehicleCollision(g,e)?this.vehicleSpeed*=.2:e.position.copy(g),this.world&&typeof this.world.getHeightAt=="function"){const x=this.world.getHeightAt(e.position.x,e.position.z),T=this.getVehicleGroundClearance(e);e.position.y=x+T}if(this.world&&typeof this.world.halfMapSize=="number"){const x=this.world.halfMapSize-1;e.position.x=Math.max(-x,Math.min(x,e.position.x)),e.position.z=Math.max(-x,Math.min(x,e.position.z))}if(this.previousPosition.length()>0){const x=e.position.distanceTo(this.previousPosition);this.distanceTraveled+=x}this.mesh.position.copy(e.position),this.previousPosition.copy(e.position);const f=e.position.distanceTo(i);this.rotateVehicleWheels(e,f,this.vehicleSpeed);let y=0;if(y+=this.vehicleIdleLph/3600*t,h&&(y+=this.vehicleThrottleLph/3600*t*(s?1.7:1)),f>0){const x=f/1e3;this.vehicleDistance+=x;const T=x/this.vehicleEfficiencyKmPerL,b=h?T*.35*(s?1.35:1):0;y+=T+b}if(this.vehicleFuelUsed+=y,this.vehicleFuel=Math.max(0,this.vehicleFuel-y),this.vehicleFuel<=0&&(this.vehicleSpeed=0),this.saveVehicleState(e),this.updateVehicleHUD(!0),this.enemyManager&&Array.isArray(this.enemyManager.enemies)){const x=performance.now();this.enemyManager.enemies.forEach(T=>{if(!T||!T.position)return;if(T.position.distanceTo(e.position)<2.4){T.userData||(T.userData={});const C=T.userData.lastRunOver||0;if(x-C>400){T.userData.lastRunOver=x;try{T.takeDamage(999)}catch{}}}})}const p=e.position.clone(),m=new P(0,2,6).applyQuaternion(this.camera.quaternion),_=p.clone().add(m);this.camera.position.lerp(_,.18);const v=Math.abs(this.vehicleSpeed)>.5;this.handleVehicleDriveSound(v)}rotateVehicleWheels(t,e,i){if(!t||!t.userData||!t.userData.wheels||!t.userData.wheels.length)return;const n=t.userData.wheelRadius||.35,s=e/n,o=i>=0?-1:1;t.userData.wheels.forEach(a=>{try{a.rotation.x+=o*s}catch{}})}updateVehicleHUD(t){if(!this.vehicleHud||!this.vehicleHud.root)return;const e=this.vehicleHud.root,i=document.getElementById("dashboard");if(i){const s=i.getBoundingClientRect();e.style.left=`${s.left}px`,e.style.top=`${s.top+s.height+8}px`,e.style.width=`${s.width}px`}if(!t){e.classList.add("hidden");return}e.classList.remove("hidden");const n=Math.abs(this.vehicleSpeed)*3.6;if(this.vehicleHud.speed&&(this.vehicleHud.speed.innerText=n.toFixed(0)),this.vehicleHud.fuelFill){const s=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/s*100));this.vehicleHud.fuelFill.style.width=`${o}%`,this.vehicleHud.fuelFill.style.background=o<20?"linear-gradient(90deg, #ff7043, #ff3d00)":"linear-gradient(90deg, #8bc34a, #cddc39)"}if(this.vehicleHud.fuelText){const s=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/s*100));this.vehicleHud.fuelText.innerText=`${this.vehicleFuel.toFixed(1)}L (${o.toFixed(1)}%)`}if(this.vehicleHud.distance&&(this.vehicleHud.distance.innerText=this.vehicleDistance.toFixed(2)),this.vehicleHud.efficiency){const s=this.vehicleFuelUsed>0&&this.vehicleDistance>0?this.vehicleDistance/this.vehicleFuelUsed:0;this.vehicleHud.efficiency.innerText=s.toFixed(2)}if(this.vehicleHud.range){const s=this.vehicleFuel*this.vehicleEfficiencyKmPerL;this.vehicleHud.range.innerText=s.toFixed(1)}}getVehicleStorageKey(t){return!t||!t.userData||!t.userData.gameId?null:`vehicle-state-${t.userData.gameId}`}loadVehicleState(t){try{if(t&&t.userData&&t.userData.vehicleState)return t.userData.vehicleState;const e=this.getVehicleStorageKey(t);if(!e||typeof localStorage>"u")return null;const i=localStorage.getItem(e);if(!i)return null;const n=JSON.parse(i);return t.userData.vehicleState=n,n}catch{return null}}saveVehicleState(t){if(!t)return;const e=this.getVehicleStorageKey(t);if(!e)return;const i={fuel:this.vehicleFuel,capacity:this.vehicleFuelCapacity,distanceKm:this.vehicleDistance,fuelUsed:this.vehicleFuelUsed,vehicleType:t.userData&&t.userData.vehicleType||"car"};t.userData.vehicleState=i;try{typeof localStorage<"u"&&localStorage.setItem(e,JSON.stringify(i))}catch{}}selectStudioObject(t){if(this.gameMode!=="studio"||!this.worldObjects||this.worldObjects.length===0)return null;const e=new Pt;this.controls&&this.controls.isLocked?e.set(0,0):t&&t.clientX!==void 0?(e.x=t.clientX/window.innerWidth*2-1,e.y=-(t.clientY/window.innerHeight)*2+1):e.set(0,0),this._studioRaycaster.setFromCamera(e,this.camera);const i=this.worldObjects.filter(o=>o&&o.userData&&o.userData.gameName!=="Ground"),n=this._studioRaycaster.intersectObjects(i,!0);if(!n.length)return this.clearStudioSelection(),null;let s=n[0].object;for(;s&&!this.worldObjects.includes(s);)s=s.parent;return s&&this.setStudioSelection(s),s}moveSelectedObject(t,e,i=0){if(!this.studioSelected)return;const n=this.studioSelected;n.position.x+=t,n.position.z+=e,n.position.y+=i,i===0&&this.world&&typeof this.world.getHeightAt=="function"&&(n.position.y=this.world.getHeightAt(n.position.x,n.position.z)),this.refreshStudioSelectionHelper()}clearStudioSelection(){if(this.studioSelected=null,this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}this.selectionInfo&&this.selectionInfo.classList.add("hidden")}removeSelectedObject(){if(!this.studioSelected)return;const t=this.studioSelected;this.clearStudioSelection();try{this.scene.remove(t)}catch{}if(this.worldObjects){const e=this.worldObjects.indexOf(t);e>=0&&this.worldObjects.splice(e,1)}}setStudioSelection(t){if(this.studioSelected=t,this.selectionInfo){const e=t.userData||{};this.selectionInfo.innerText=`${e.gameName||"Object"} (${e.gameId||"---"})`,this.selectionInfo.classList.remove("hidden")}this.refreshStudioSelectionHelper()}refreshStudioSelectionHelper(){if(this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}if(this.studioSelected)try{const t=this.buildStudioSelectionBox(this.studioSelected);this.studioSelectionHelper=new Up(t,16766720),this.studioSelectionHelper.material.depthTest=!1,this.studioSelectionHelper.material.transparent=!0,this.studioSelectionHelper.material.opacity=.9,this.scene.add(this.studioSelectionHelper)}catch{this.studioSelectionHelper=null}}buildStudioSelectionBox(t){const e=new _i;return t.traverse(i=>{if(!i.isMesh||!i.geometry)return;const n=i.userData||{},s=i.material;if(!(s&&s.transparent||n.isShadow||n.shadow)){if(!i.geometry.boundingBox)try{i.geometry.computeBoundingBox()}catch{}if(i.geometry.boundingBox){const a=i.geometry.boundingBox.clone();i.updateWorldMatrix(!0,!1),a.applyMatrix4(i.matrixWorld),e.union(a)}}}),e.isEmpty()&&e.setFromCenterAndSize(t.position,new P(1,1,1)),e}checkVehicleCollision(t,e=null){if(!this.worldObjects)return!1;const i=2;for(let n=0;n<this.worldObjects.length;n++){const s=this.worldObjects[n];if(!s)continue;const o=s.userData||{};if(e&&s===e||o.gameName==="Ground"||o.type==="ground")continue;const a=s.position||(s.getWorldPosition?s.getWorldPosition(new P):null);if(!a)continue;const l=a.distanceTo(t);let c=1.5;if(s.geometry&&s.geometry.boundingSphere?c=s.geometry.boundingSphere.radius||c:o&&o.size==="large"?c=5:o.type==="vehicle"&&(c=2.5),l<i+c)return!0}return!1}updateAnimations(t){const e=this.moveForward||this.moveBackward||this.moveLeft||this.moveRight,i=10,n=this.isSprinting&&e?1.8:1;if(e){this.animTime+=t*i*n;const s=Math.sin(this.animTime)*(.5*n);this.leftLegPivot.rotation.x=s,this.rightLegPivot.rotation.x=-s}else this.leftLegPivot.rotation.x=ye.lerp(this.leftLegPivot.rotation.x,0,t*i),this.rightLegPivot.rotation.x=ye.lerp(this.rightLegPivot.rotation.x,0,t*i);if(this.isBlocking){const s=-Math.PI/2.5,o=.5;this.leftArmPivot.rotation.x=ye.lerp(this.leftArmPivot.rotation.x,s,t*15),this.rightArmPivot.rotation.x=ye.lerp(this.rightArmPivot.rotation.x,s,t*15),this.leftArmPivot.rotation.z=ye.lerp(this.leftArmPivot.rotation.z,-o,t*15),this.rightArmPivot.rotation.z=ye.lerp(this.rightArmPivot.rotation.z,o,t*15)}else if(this.isPunching){this.punchTime+=t*20;const s=-Math.PI/2+Math.sin(this.punchTime)*.8;this.punchSide===0?(this.rightArmPivot.rotation.x=s,this.leftArmPivot.rotation.x=ye.lerp(this.leftArmPivot.rotation.x,0,t*10)):(this.leftArmPivot.rotation.x=s,this.rightArmPivot.rotation.x=ye.lerp(this.rightArmPivot.rotation.x,0,t*10)),this.punchTime>Math.PI&&(this.isPunching=!1,this.rightArmPivot.rotation.x=0,this.leftArmPivot.rotation.x=0),this.leftArmPivot.rotation.z=ye.lerp(this.leftArmPivot.rotation.z,0,t*10),this.rightArmPivot.rotation.z=ye.lerp(this.rightArmPivot.rotation.z,0,t*10)}else{if(e){const s=Math.sin(this.animTime)*.5*n;this.leftArmPivot.rotation.x=-s,this.rightArmPivot.rotation.x=s}else this.leftArmPivot.rotation.x=ye.lerp(this.leftArmPivot.rotation.x,0,t*10),this.rightArmPivot.rotation.x=ye.lerp(this.rightArmPivot.rotation.x,0,t*10);this.leftArmPivot.rotation.z=ye.lerp(this.leftArmPivot.rotation.z,0,t*10),this.rightArmPivot.rotation.z=ye.lerp(this.rightArmPivot.rotation.z,0,t*10)}if(this.hitTimer>0){this.hitTimer-=t;const s=Math.max(0,this.hitTimer)/.6,o=ye.lerp(-Math.PI/2.2,0,1-s);this.leftArmPivot.rotation.x=ye.lerp(this.leftArmPivot.rotation.x,o,t*20),this.rightArmPivot.rotation.x=ye.lerp(this.rightArmPivot.rotation.x,o,t*20)}}punch(){if(!this.isTired&&!(this.isPunching||this.isBlocking)&&(this.isPunching=!0,this.punchTime=0,this.punchSide=this.punchSide===0?1:0,this.punchCount++,this.punchCount>=20&&(this.isTired=!0,this.stamina=Math.max(0,this.stamina-20),setTimeout(()=>{this.isTired=!1,this.punchCount=0},3e3)),this.enemyManager&&this.enemyManager.enemies)){const t=new P;this.mesh.getWorldDirection(t);let e=!1;if(this.enemyManager.enemies.forEach(i=>{if(this.mesh.position.distanceTo(i.position)<3){const s=new P().subVectors(i.position,this.mesh.position).normalize();if(t.angleTo(s)<Math.PI/3){i.takeDamage(10);const a=t.clone().multiplyScalar(2);i.position.add(a),e=!0}}}),this.gameMode==="multiplayer"&&this.multiplayerClient&&this.multiplayerClient.others&&this.multiplayerClient.others.size>0){const i=Math.PI/3,n=3;this.multiplayerClient.others.forEach((s,o)=>{if(!s||!s.position||s.userData&&s.userData.dead||this.mesh.position.distanceTo(s.position)>n)return;const l=new P().subVectors(s.position,this.mesh.position).normalize();t.angleTo(l)<i&&(typeof this.multiplayerClient.sendHit=="function"&&this.multiplayerClient.sendHit(o,10),e=!0)})}e&&this.playSmack()}}playSmack(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playSmack());return}if(this.smackBuffer){const t=this.audioCtx.createBufferSource();t.buffer=this.smackBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}}catch(t){console.warn("playSmack error:",t)}}equipBackpack(t=2899536){const e=this.backpackColor;this.backpack&&this.backpack.parent&&this.backpack.parent.remove(this.backpack);const i=new Et;i.position.set(0,1.25,-.32);const n=new I(new j(.7,.9,.35),new q({color:t,metalness:.15,roughness:.8}));n.position.set(0,0,0),i.add(n);const s=new I(new j(.6,.25,.16),new q({color:3426654,metalness:.1,roughness:.8}));s.position.set(0,-.55,.22),i.add(s);const o=new q({color:2042938,metalness:.1,roughness:.9}),a=new I(new j(.1,.82,.07),o);a.position.set(-.28,-.03,.2);const l=a.clone();return l.position.x=.28,i.add(a,l),this.mesh.add(i),this.backpack=i,this.backpackColor=t,e}queueHurtBeat(){if(this._hurtAccumulator+=1,this._hurtAccumulator>=2){const t=Math.floor(this._hurtAccumulator/2);this._hurtQueue+=t,this._hurtAccumulator-=t*2}this._hurtQueue===0&&this._hurtAccumulator>0&&(this._hurtQueue=1,this._hurtAccumulator=0),this._hurtBeatTimer||this._playHurtBeatLoop()}_playHurtBeatLoop(){if(this._hurtQueue<=0){this._hurtBeatTimer=null;return}this.playHurt(),this._hurtQueue=Math.max(0,this._hurtQueue-1),this._hurtBeatTimer=setTimeout(()=>this._playHurtBeatLoop(),2e3)}clearHurtQueue(){this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer&&(clearTimeout(this._hurtBeatTimer),this._hurtBeatTimer=null)}playHurt(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playHurt());return}if(this.ughBuffer){const t=this.audioCtx.createBufferSource();t.buffer=this.ughBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}}catch(t){console.warn("playHurt error:",t)}}playVehicleDoor(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playVehicleDoor());return}if(this.vehicleDoorBuffer){const t=this.audioCtx.createBufferSource();t.buffer=this.vehicleDoorBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}}catch(t){console.warn("playVehicleDoor error:",t)}}handleVehicleDriveSound(t){try{if(!this.audioCtx||!this.enableVehicleDriveSound){this.stopVehicleDriveSound();return}if(!this.vehicleDriveBuffer){this.stopVehicleDriveSound();return}if(t===this._lastVehicleDriveActive&&(t&&this._vehicleDriveSource||!t&&!this._vehicleDriveSource))return;if(this._lastVehicleDriveActive=t,t){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._vehicleDriveSource)return;const e=this.audioCtx.createBufferSource();e.buffer=this.vehicleDriveBuffer,e.loop=!0;const i=this.audioCtx.createGain();i.gain.value=this.sfxVolume*.4,e.connect(i),i.connect(this.audioCtx.destination),e.start(0),this._vehicleDriveSource=e,this._vehicleDriveGain=i,e.onended=()=>{this._vehicleDriveSource=null,this._vehicleDriveGain=null}}else this.stopVehicleDriveSound()}catch(e){console.warn("handleVehicleDriveSound error:",e)}}stopVehicleDriveSound(){if(this._lastVehicleDriveActive=!1,this._vehicleDriveSource){try{this._vehicleDriveSource.stop()}catch{}try{this._vehicleDriveSource.disconnect()}catch{}}if(this._vehicleDriveGain)try{this._vehicleDriveGain.disconnect()}catch{}this._vehicleDriveSource=null,this._vehicleDriveGain=null}handleFootsteps(t){try{if(this.isInVehicle){this.stopFootsteps();return}if(!this.audioCtx||!this.footstepsBuffer){this.stopFootsteps();return}if(t===this._lastFootstepsActive&&(t&&this._footstepsSource||!t&&!this._footstepsSource)){if(t&&this._footstepsSource){const e=this.isSprinting?1.4:this.isCrouching?.8:1;this._footstepsSource.playbackRate.value=e}return}if(this._lastFootstepsActive=t,t){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._footstepsSource){try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}const e=this.audioCtx.createBufferSource();e.buffer=this.footstepsBuffer,e.loop=!0,e.playbackRate.value=this.isSprinting?1.4:this.isCrouching?.8:1;const i=this.audioCtx.createGain();i.gain.value=this.sfxVolume*.35,e.connect(i),i.connect(this.audioCtx.destination),e.start(0),this._footstepsSource=e,this._footstepsGain=i,e.onended=()=>{this._footstepsSource=null,this._footstepsGain=null}}else this.stopFootsteps()}catch(e){console.warn("handleFootsteps error:",e)}}stopFootsteps(){if(this._lastFootstepsActive=!1,this._footstepsSource){try{this._footstepsSource.onended=null}catch{}try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}get position(){return this.mesh.position}getSurfaceHeight(t,e){let i=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(t,e):0;return(this.world&&this.world.objects?this.world.objects:[]).forEach(s=>{if(!(!s||!s.userData)){if(s.userData.type==="block"){const o=s.userData.size||this.blockSize;if(Math.abs(s.position.x-t)<o*.6&&Math.abs(s.position.z-e)<o*.6){const a=s.position.y+o/2;a>i&&(i=a)}}if(s.userData.colliderBox){const o=s.userData.colliderBox;t>=o.min.x&&t<=o.max.x&&e>=o.min.z&&e<=o.max.z&&o.max.y>i&&(i=o.max.y)}}}),i}adjustBlockSize(t){const e=Math.max(this.minBlockSize,Math.min(this.maxBlockSize,this.blockSize+t));this.blockSize=e,console.log("Block size:",this.blockSize.toFixed(2))}moveLastBlock(){if(!this.placedBlocks.length)return;const t=this.placedBlocks[this.placedBlocks.length-1];if(!t)return;const e=this.getBlockTarget(t);t.position.set(e.position.x,e.position.y,e.position.z)}getBlockTarget(t=null){const e=t&&t.userData&&t.userData.size?t.userData.size:this.blockSize,i=new Xe;i.setFromCamera(new Pt(0,0),this.camera);const n=u=>Math.round(u);let s=null;if(this.world&&Array.isArray(this.world.objects)){const u=this.world.objects.filter(g=>g&&g.userData&&(g.userData.type==="block"||g.userData.gameName==="Ground")),d=i.intersectObjects(u,!0);d.length>0&&(s=d[0].point.clone())}if(!s){const u=new P;this.camera.getWorldDirection(u),s=this.mesh.position.clone().add(u.multiplyScalar(1.2))}const o=new P(n(s.x),s.y,n(s.z));if(this.world&&typeof this.world.halfMapSize=="number"){const u=this.world.halfMapSize-1;o.x=Math.max(-u,Math.min(u,o.x)),o.z=Math.max(-u,Math.min(u,o.z))}let a=this.world.getHeightAt?this.world.getHeightAt(o.x,o.z):s.y;const c=(this.world.objects||[]).filter(u=>u.userData&&u.userData.type==="block"&&u!==t).filter(u=>Math.abs(u.position.x-o.x)<.1&&Math.abs(u.position.z-o.z)<.1);c.length>0&&(a=Math.max(...c.map(d=>d.position.y+(d.userData&&d.userData.size?d.userData.size/2:e/2))));const h=a+e/2;return{position:new P(o.x,h,o.z),size:e}}updateBlockPreview(){if(!this.previewBlock)return;const t=this.getBlockTarget();this.previewBlock.visible=!0,this.previewBlock.position.copy(t.position);const e=t.size/this.blockSize;this.previewBlock.scale.set(e,e,e)}removeLastBlock(){if(!this.placedBlocks.length)return;const t=this.placedBlocks.pop();t&&t.parent&&t.parent.remove(t),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(e=>e!==t)),t&&t.geometry&&t.geometry.dispose(),t&&t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()),this.selectedBlock===t&&this.clearBlockSelection()}selectBlockUnderCrosshair(){if(!this.world||!this.world.objects)return!1;const t=new Xe;t.setFromCamera(new Pt(0,0),this.camera);const e=t.intersectObjects(this.world.objects,!0);if(e.length===0)return this.clearBlockSelection(),!1;let i=null;for(const n of e){let s=n.object;for(;s&&s.parent;){if(s.userData&&s.userData.type==="block"){i=s;break}s=s.parent}if(i)break}return i?(this.setBlockSelection(i),!0):(this.clearBlockSelection(),!1)}setBlockSelection(t){this.clearBlockSelection(),this.selectedBlock=t;const e=new Ip(t,16776960);e.userData={ignoreSelect:!0},this.scene.add(e),this.selectedBlockHelper=e}clearBlockSelection(){this.selectedBlock=null,this.selectedBlockHelper&&(this.scene.remove(this.selectedBlockHelper),this.selectedBlockHelper.material&&this.selectedBlockHelper.material.dispose(),this.selectedBlockHelper.geometry&&this.selectedBlockHelper.geometry.dispose(),this.selectedBlockHelper=null)}removeBlock(t){t&&(this.placedBlocks=this.placedBlocks.filter(e=>e!==t),t.parent&&t.parent.remove(t),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(e=>e!==t)),t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()),this.selectedBlock===t&&this.clearBlockSelection())}takeDamage(t){this.gameMode==="matrix"||this.gameMode==="studio"||this.multiplayerClient&&!this.multiplayerClient.isMatchLive()||(this.isBlocking&&(t*=.2,console.log("Blocked! Reduced damage to "+t)),this.shield>0?(this.shield-=t,this.shield<0&&(this.health+=this.shield,this.shield=0)):this.health-=t,t>0&&this.queueHurtBeat(),this.health<=0&&(this.health=0,this.die()),this.hitTimer=.6)}die(){this.gameMode==="matrix"||this.gameMode==="studio"||(this.handleFootsteps(!1),this.isDead=!0,this.controls.unlock(),this.mesh.rotation.x=-Math.PI/2,this.multiplayerClient&&typeof this.multiplayerClient.sendDeath=="function"&&this.multiplayerClient.sendDeath(),this.moveForward=this.moveBackward=this.moveLeft=this.moveRight=!1,this.velocity.set(0,0,0),this.hud&&typeof this.hud.showGameOver=="function"&&this.hud.showGameOver("YOU DIED"))}checkCollision(t,e){const i=new Xe,n=.5,s=[1.6,1,.35];let o=this.worldObjects||[];if(this.enemyManager&&this.enemyManager.enemies){const c=this.enemyManager.enemies.map(h=>h.mesh);o=o.concat(c)}const a=1.5,l=c=>{let h=c;for(;h;){if(h.userData&&h.userData.colliderBox)return h.userData.colliderBox;h=h.parent}return null};for(const c of s){const h=this.mesh.position.clone();if(h.y+=c,i.set(h,t),o.length>0){const u=i.intersectObjects(o,!0);if(u.length>0){const d=u[0];if(d.distance<e+n){const g=l(d.object);if(g){const f=g.max.y,y=f-this.mesh.position.y;if(y<=a&&y>-.5)return this.mesh.position.y=f,this.velocity.y=0,this.canJump=!0,!1}return!0}}}}return!1}}const om="/threejs-voxel-firecraft/dist/assets/mixkit-player-losing-or-failing-vCPqUTFf.ogg",am="/threejs-voxel-firecraft/dist/assets/game-level-completed-envato-mixkit.co-OEgWp6-U.ogg";class lm{constructor(t,e,i){this.player=t,this.world=e,this.settings=i||{},this.healthBar=document.getElementById("health-bar"),this.healthText=document.getElementById("health-text"),this.shieldBar=document.getElementById("shield-bar"),this.shieldText=document.getElementById("shield-text"),this.staminaBar=document.getElementById("stamina-bar"),this.staminaText=document.getElementById("stamina-text"),this.weaponName=document.getElementById("weapon-name"),this.ammoCount=document.getElementById("ammo-count"),this.slots=document.querySelectorAll(".slot"),this.timerValue=document.getElementById("timer-value"),this.debugContainer=document.getElementById("debug-container"),this.gameOverScreen=document.getElementById("game-over-screen"),this.selectionInfo=document.getElementById("selection-info"),this.selectionInfoTimeout=null,this.hotbar=document.getElementById("hotbar"),this.fpsCounter=document.getElementById("fps-counter"),this.enemyCount=document.getElementById("enemy-count"),this.killCount=document.getElementById("kill-count"),this.dropCount=document.getElementById("drop-count"),this.distanceTraveled=document.getElementById("distance-traveled"),this.playerSpeed=document.getElementById("player-speed"),this.mapSizeText=document.getElementById("map-size-readout"),this.memoryUsage=document.getElementById("memory-usage"),this.targetInspect=document.getElementById("target-inspect"),this.perfFrame=document.getElementById("perf-frame"),this.perfCalls=document.getElementById("perf-calls"),this.perfTris=document.getElementById("perf-tris"),this.perfGeoms=document.getElementById("perf-geoms"),this.perfTextures=document.getElementById("perf-textures"),this.perfPrograms=document.getElementById("perf-programs"),this.perfObjects=document.getElementById("perf-objects"),this.perfMem=document.getElementById("perf-mem"),this.perfCpu=document.getElementById("perf-cpu"),this.perfGpu=document.getElementById("perf-gpu"),this.perfGpuMem=document.getElementById("perf-gpu-mem"),this.dashboardEl=document.getElementById("dashboard"),this.perfEl=document.getElementById("perf-dashboard"),this.netStatsText=document.getElementById("net-stats"),this.netChart=document.getElementById("net-chart"),this.netChartCtx=this.netChart?this.netChart.getContext("2d"):null,this._renderer=null,this.frameTimeAvg=0,this.gpuInfo=null,this.gpuMemInfo=null,this._gl=null,this.debugInfo=document.getElementById("debug-info"),this.debugName=document.getElementById("debug-target-name"),this.debugId=document.getElementById("debug-target-id"),this.settings.debugMode?this.debugInfo.style.display="block":this.debugInfo.style.display="none",this.timeRemaining=30,this.lastTime=performance.now(),this.frames=0,this.fps=0,this.lastFpsTime=performance.now(),this.lastFrameTime=performance.now(),this.raycaster=new Xe,this.mouse=new Pt,this.hoveredEnemy=null,this.hoveredPlayer=null,this.currentOutlinedEnemy=null,this.hoverInfo=document.getElementById("hover-info"),this.scopeOverlay=document.getElementById("scope-overlay"),this.minimapContainer=document.getElementById("minimap"),this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas?this.minimapCanvas.getContext("2d"):null,this.minimapSize=this.minimapCanvas?this.minimapCanvas.width:180,this.mapSize=e&&e.mapSize?e.mapSize:200,this.multiplayer=null,window.addEventListener("mousemove",n=>{const s=n.clientX/window.innerWidth*2-1,o=-(n.clientY/window.innerHeight)*2+1;if(this.mouse.set(s,o),this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const a=[];this.player.enemyManager.enemies.forEach(c=>{c.mesh.traverse(h=>{h.isMesh&&a.push(h)})}),this.raycaster.setFromCamera(this.mouse,this.player.camera);const l=this.raycaster.intersectObjects(a,!0);if(l.length>0){const c=l[0].object;let h=c,u=null;for(;h&&(u=this.player.enemyManager.enemies.find(d=>h.parent===d.mesh||h===d.mesh||d.mesh.children.includes(h)),!u);)h=h.parent;this.hoveredEnemy=u||c||null}else this.hoveredEnemy=null}});try{this.slots.forEach((n,s)=>{const o=a=>{try{a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),this.player&&typeof this.player.switchWeapon=="function"&&this.player.switchWeapon(s)}catch{}};n.addEventListener("pointerdown",o),n.addEventListener("touchstart",o,{passive:!1}),n.addEventListener("click",o)})}catch{}}update(){var l,c;if(this.hoveredEnemy=null,this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0&&this.currentOutlinedEnemy!==this.hoveredEnemy){if(this.currentOutlinedEnemy&&this.currentOutlinedEnemy._outline){try{this.currentOutlinedEnemy.mesh.remove(this.currentOutlinedEnemy._outline)}catch{}this.currentOutlinedEnemy._outline=null}if(this.hoveredEnemy&&this.hoveredEnemy.mesh){const h=new Et;this.hoveredEnemy.mesh.traverse(u=>{if(u.isMesh){const d=new I(u.geometry,new yi({color:16776960,side:Re}));d.position.copy(u.position),d.quaternion.copy(u.quaternion),d.scale.copy(u.scale).multiplyScalar(1.06),d.renderOrder=999,d.material.depthTest=!0,h.add(d)}}),this.hoveredEnemy.mesh.add(h),this.hoveredEnemy._outline=h}this.currentOutlinedEnemy=this.hoveredEnemy}this.frames++;const t=performance.now();t-this.lastFpsTime>=1e3&&(this.fpsCounter.innerText=this.frames,this.frames=0,this.lastFpsTime=t,performance.memory&&this.memoryUsage&&(this.memoryUsage.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)));const e=t-this.lastFrameTime;if(this.lastFrameTime=t,this.frameTimeAvg=this.frameTimeAvg===0?e:this.frameTimeAvg*.9+e*.1,this.player.enemyManager&&(this.enemyCount.innerText=this.player.enemyManager.enemies.length,this.killCount.innerText=this.player.enemyManager.killedCount||0),this.dropCount){const h=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;if(h&&Array.isArray(h.items)){const u=h.items.filter(d=>!(d.userData&&d.userData.isOpened)).length;this.dropCount.innerText=u}else this.dropCount.innerText="0"}const i=(this.player.distanceTraveled/1e3).toFixed(2);if(this.distanceTraveled&&(this.distanceTraveled.innerText=i),this.playerSpeed){let h=0;this.player.isInVehicle&&typeof this.player.currentSpeed=="number"?h=this.player.currentSpeed*3.6:typeof this.player.currentSpeed=="number"&&(h=this.player.currentSpeed*3.6),this.playerSpeed.innerText=h.toFixed(1)}if(this.mapSizeText){const h=this.world&&this.world.mapSize?this.world.mapSize:this.mapSize;this.mapSizeText.innerText=Math.round(h)}if(this._renderer){if(this.isPerfCollapsed())return;const h=this._renderer.info;this.perfFrame&&(this.perfFrame.innerText=e.toFixed(1)),this.perfCalls&&(this.perfCalls.innerText=h.render.calls),this.perfTris&&(this.perfTris.innerText=h.render.triangles),this.perfGeoms&&(this.perfGeoms.innerText=h.memory.geometries),this.perfTextures&&(this.perfTextures.innerText=h.memory.textures),this.perfPrograms&&(this.perfPrograms.innerText=h.programs?h.programs.length:"0");let u=0;this.world&&Array.isArray(this.world.objects)&&(u+=this.world.objects.length);const d=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;d&&Array.isArray(d.items)&&(u+=d.items.length),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&(u+=this.player.enemyManager.enemies.length),this.perfObjects&&(this.perfObjects.innerText=u),this.perfMem&&performance.memory&&(this.perfMem.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)),this.perfCpu&&(this.perfCpu.innerText=`${this.frameTimeAvg.toFixed(1)} ms`),this.perfGpu&&(this.perfGpu.innerText=this.gpuInfo||"Unsupported"),this.updateGpuMemory()}this.updateNetPanel(),this.healthBar.style.width=`${this.player.health}%`,this.healthText.innerText=Math.ceil(this.player.health),this.shieldBar.style.width=`${this.player.shield}%`,this.shieldText.innerText=Math.ceil(this.player.shield),this.staminaBar.style.width=`${this.player.stamina}%`,this.staminaText.innerText=Math.ceil(this.player.stamina);const n=this.player.weapons[this.player.currentWeaponIndex];if(this.weaponName.innerText=n.name,this.player.isReloading?this.ammoCount.innerText="RELOADING...":this.ammoCount.innerText=n.ammo===1/0?"∞":`${n.currentMag} / ${n.ammo}`,this.debugContainer&&(this.debugContainer.innerHTML=""),this.debugInfo)if(this.settings.debugMode)if(this.debugInfo.style.display="block",this.hoveredEnemy){const h=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,u=h&&h.userData&&h.userData.gameName?h.userData.gameName:"Enemy",d=h&&h.userData&&(h.userData.gameId||h.userData.gameid)?h.userData.gameId||h.userData.gameid:"---",g=this.hoveredEnemy.position?this.hoveredEnemy.position:h?h.position:null,f=g?this.player.position.distanceTo(g).toFixed(2):"---";this.debugName.innerText=u,this.debugId.innerText=`${d} (${f}m)`}else this.debugName.innerText="None",this.debugId.innerText="---";else this.debugInfo.style.display="none";let s=null;if(this.hoveredPlayer=null,!this.hoveredEnemy&&this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const h=[];if(this.player.enemyManager.enemies.forEach(u=>{u.mesh.traverse(d=>{d.isMesh&&h.push(d)})}),h.length>0){this.raycaster.setFromCamera(new Pt(0,0),this.player.camera);const u=this.raycaster.intersectObjects(h,!0);if(u.length>0){let g=u[0].object,f=null;for(;g&&(f=this.player.enemyManager.enemies.find(y=>g.parent===y.mesh||g===y.mesh||y.mesh.children.includes(g)),!f);)g=g.parent;f?this.hoveredEnemy=f:this.hoveredEnemy=null}else this.hoveredEnemy=null}}if(!this.hoveredEnemy&&this.multiplayer&&this.multiplayer.others&&this.multiplayer.others.size>0){const h=[];if(this.multiplayer.others.forEach(u=>{u&&(u.isMesh?h.push(u):u.traverse&&u.traverse(d=>{d.isMesh&&h.push(d)}))}),h.length>0){this.raycaster.setFromCamera(new Pt(0,0),this.player.camera);const u=this.raycaster.intersectObjects(h,!0);if(u.length>0){let d=u[0].object;for(;d.parent&&!((l=d.userData)!=null&&l.nick)&&!this.multiplayer.others.has((c=d.userData)==null?void 0:c.gameId);)d=d.parent;this.hoveredPlayer=d}}}if(this.hoverInfo)if(this.hoveredEnemy){const h=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,u=h&&h.userData&&(h.userData.gameId||h.userData.gameid)?h.userData.gameId||h.userData.gameid:"---",d=this.hoveredEnemy.position?this.hoveredEnemy.position:h?h.position:null;s=d?this.player.position.distanceTo(d):null;const g=s?s.toFixed(2):"---";this.hoverInfo.innerText=`${u} • ${g}m`}else if(this.hoveredPlayer){const h=this.hoveredPlayer.userData&&this.hoveredPlayer.userData.nick?this.hoveredPlayer.userData.nick:"Player";let u=null;this.hoveredPlayer.getWorldPosition?(u=new P,this.hoveredPlayer.getWorldPosition(u)):u=this.hoveredPlayer.position||null,s=u?this.player.position.distanceTo(u):null;const d=s?s.toFixed(2):"---";this.hoverInfo.innerText=`${h} • ${d}m`}else this.hoverInfo.innerText="";if(this.scopeOverlay){const h=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],u=this.player.isAiming&&h&&h.name==="Sniper";this.scopeOverlay.classList.toggle("hidden",!u);const d=document.getElementById("crosshair");d&&d.classList.toggle("hidden",u)}const o=document.getElementById("crosshair");if(o){o.classList.remove("target-red","target-yellow");const h=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],u=h&&h.range?h.range:1e3;this.hoveredEnemy&&s!==null&&(s<=u?o.classList.add("target-red"):o.classList.add("target-yellow"))}this.updateMinimap(),this.slots.forEach(h=>h.style.display="none"),this.player.weapons.forEach((h,u)=>{let d=this.slots[u];d&&(d.style.display="flex",d.innerText=u+1,u===this.player.currentWeaponIndex?d.classList.add("active"):d.classList.remove("active"))});const a=performance.now();if(a-this.lastTime>1e3){this.timeRemaining--,this.timeRemaining<0&&(this.timeRemaining=0);const h=Math.floor(this.timeRemaining/60).toString().padStart(2,"0"),u=(this.timeRemaining%60).toString().padStart(2,"0");this.timerValue.innerText=`${h}:${u}`,this.lastTime=a}this.player.isDead&&this.player.gameMode!=="matrix"&&this.showGameOver("YOU DIED"),this.updateTargetInspect()}showSelectionInfo(t,e){if(!this.selectionInfo)return;const i=t||"Object",n=e||"---";this.selectionInfo.innerText=`${i} (${n})`,this.selectionInfo.classList.remove("hidden"),this.selectionInfoTimeout&&clearTimeout(this.selectionInfoTimeout),this.selectionInfoTimeout=setTimeout(()=>{try{this.selectionInfo.classList.add("hidden")}catch{}},2500)}updateTargetInspect(){if(!this.targetInspect||!this.player||!this.player.camera)return;const t=this.raycaster,e=new Pt(0,0);t.setFromCamera(e,this.player.camera);const i=[];if(this.world&&Array.isArray(this.world.objects)&&i.push(...this.world.objects),this.world&&this.world.itemManager&&Array.isArray(this.world.itemManager.items)&&i.push(...this.world.itemManager.items),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&this.player.enemyManager.enemies.forEach(h=>{h&&h.mesh&&i.push(h.mesh)}),i.length===0){this.targetInspect.innerText="Target: ---";return}const n=Array.from(new Set(i)),s=t.intersectObjects(n,!0);if(!s.length){this.targetInspect.innerText="Target: ---";return}let o=null;for(let h=0;h<s.length;h++){let u=s[h].object;for(;u;){if(u.userData&&(u.userData.gameName||u.userData.type||u.userData.gameId||u.userData.gameid)){o=u.userData;break}u=u.parent}if(o)break}if(!o){this.targetInspect.innerText="Target: ---";return}const a=o.gameName||"Object",l=o.gameId||o.gameid||"---",c=o.type||"---";this.targetInspect.innerText=`Target: ${a} (ID: ${l}) [${c}]`}showGameOver(t){if(this.player&&this.player.gameMode==="matrix"||this.gameOverShown)return;this.gameOverShown=!0,this.gameOverScreen.classList.remove("hidden"),document.getElementById("game-over-title").innerText=t;try{const i=document.getElementById("touch-controls");i&&(i.style.display="none")}catch{}this.hotbar&&(this.hotbar.style.display="none");const e=document.getElementById("restart-btn");e.onclick=()=>{location.reload()},e.style.pointerEvents="auto",e.style.cursor="pointer";try{typeof window<"u"&&window.game&&t&&t.toUpperCase().includes("DIED")&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(om)}catch{}}showVictory(){if(!(this.player&&this.player.gameMode==="matrix")){this.gameOverShown=!1,this.showGameOver("VICTORY ROYALE!"),document.getElementById("game-over-title").style.color="#f1c40f";try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}try{const t=document.getElementById("touch-controls");t&&(t.style.display="none")}catch{}try{this.player&&typeof this.player.clearHurtQueue=="function"&&this.player.clearHurtQueue()}catch{}try{typeof window<"u"&&window.game&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(am)}catch{}}}updateMinimap(){if(!this.minimapContainer)return;const t=this.settings.showMinimap!==!1;if(this.minimapContainer.classList.toggle("hidden",!t),!t||!this.minimapCtx||!this.player)return;const e=this.minimapCtx,i=this.minimapSize;e.clearRect(0,0,i,i),e.fillStyle="rgba(10, 12, 20, 0.75)",e.fillRect(0,0,i,i),e.strokeStyle="rgba(255, 255, 255, 0.25)",e.lineWidth=2,e.strokeRect(1,1,i-2,i-2);const n=Math.max(1,this.world&&this.world.halfMapSize?this.world.halfMapSize:this.mapSize/2),s=i*.45,o=i/2,a=i/2;if(this.world&&typeof this.world.stormRadius=="number"&&this.world.stormRadius>0){const d=Math.max(0,Math.min(1.2,this.world.stormRadius/n)),g=s*d;e.beginPath(),e.strokeStyle="rgba(157, 77, 187, 0.85)",e.lineWidth=3,e.arc(o,a,g,0,Math.PI*2),e.stroke()}const l=this.player&&this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)?this.player.enemyManager.enemies:[];l.length&&(e.fillStyle="#ff3b30",e.strokeStyle="#660000",e.lineWidth=1.5,l.forEach(d=>{if(!d)return;const g=d.position||d.mesh&&d.mesh.position;if(!g)return;const f=Math.max(o-s,Math.min(o+s,o+g.x/n*s)),y=Math.max(a-s,Math.min(a+s,a-g.z/n*s));e.beginPath(),e.arc(f,y,4,0,Math.PI*2),e.fill(),e.stroke()}));const c=this.world&&Array.isArray(this.world.objects)?this.world.objects.filter(d=>d&&d.userData&&d.userData.type==="house"):[];c.length&&(e.fillStyle="#ffd166",e.strokeStyle="#8c5a00",e.lineWidth=1,c.forEach(d=>{const g=d.position;if(!g)return;const f=Math.max(o-s,Math.min(o+s,o+g.x/n*s)),y=Math.max(a-s,Math.min(a+s,a-g.z/n*s));e.beginPath(),e.arc(f,y,3,0,Math.PI*2),e.fill(),e.stroke()}));const h=Math.max(o-s,Math.min(o+s,o+this.player.position.x/n*s)),u=Math.max(a-s,Math.min(a+s,a-this.player.position.z/n*s));e.beginPath(),e.fillStyle="#00d8ff",e.strokeStyle="#ffffff",e.lineWidth=2,e.arc(h,u,6,0,Math.PI*2),e.fill(),e.stroke(),this.multiplayer&&this.multiplayer.others&&this.multiplayer.others.size>0&&this.multiplayer.others.forEach(d=>{if(!d||!d.position)return;const g=Math.max(o-s,Math.min(o+s,o+d.position.x/n*s)),f=Math.max(a-s,Math.min(a+s,a-d.position.z/n*s)),y=d.userData&&d.userData.color?d.userData.color:"#ffaa00";e.beginPath(),e.fillStyle=y,e.strokeStyle="#111",e.lineWidth=2,e.arc(g,f,5,0,Math.PI*2),e.fill(),e.stroke()});try{const d=new P;if(this.player&&this.player.camera&&this.player.camera.getWorldDirection&&this.player.camera.getWorldDirection(d),d.y=0,d.lengthSq()<1e-4&&this.player.mesh&&(d.set(0,0,-1).applyEuler(this.player.mesh.rotation),d.y=0),d.lengthSq()>1e-4){d.normalize();const g=d.x,f=-d.z,y=Math.atan2(f,g)+Math.PI/2;e.save(),e.translate(h,u),e.rotate(y),e.beginPath(),e.moveTo(0,-10),e.lineTo(6,8),e.lineTo(-6,8),e.closePath(),e.fillStyle="#00d8ff",e.strokeStyle="#003f4f",e.lineWidth=2,e.fill(),e.stroke(),e.restore()}}catch{}}updateNetPanel(){if(this.isPerfCollapsed()||!this.netStatsText&&!this.netChartCtx)return;const t=this.multiplayer&&typeof this.multiplayer.getNetStats=="function"?this.multiplayer.getNetStats():null;if(!t){this.netStatsText&&(this.netStatsText.innerText="offline"),this.netChartCtx&&this.netChartCtx.clearRect(0,0,this.netChart.width,this.netChart.height);return}const e=(t.txPerSec||0)/1024,i=(t.rxPerSec||0)/1024,n=typeof t.lastPing=="number"?`${Math.max(0,t.lastPing).toFixed(0)} ms`:"--";if(this.netStatsText&&(this.netStatsText.innerText=`↑ ${e.toFixed(1)} kbps ↓ ${i.toFixed(1)} kbps • ping ${n}`),!this.netChartCtx||!this.netChart)return;const s=this.netChartCtx,o=this.netChart.width,a=this.netChart.height,l=Array.isArray(t.history)?t.history:[];if(s.clearRect(0,0,o,a),!l.length)return;const c=l.reduce((y,p)=>Math.max(y,Math.max(p.tx||0,p.rx||0)/1024),1),h=2,u=l.length,d=y=>u<=1?h:h+y/(u-1)*(o-h*2),g=y=>{const p=Math.max(0,Math.min(1,y/1024/c));return a-h-p*(a-h*2)};s.strokeStyle="rgba(255,255,255,0.12)",s.beginPath(),s.moveTo(h,a-h),s.lineTo(o-h,a-h),s.stroke();const f=(y,p)=>{s.strokeStyle=y,s.beginPath(),l.forEach((m,_)=>{const v=d(_),x=g(p(m)||0);_===0?s.moveTo(v,x):s.lineTo(v,x)}),s.stroke()};f("rgba(0, 210, 255, 0.85)",y=>y.rx||0),f("rgba(255, 150, 50, 0.85)",y=>y.tx||0)}updateGpuMemory(){if(!this.perfGpuMem)return;if(!this.gpuMemInfo||!this._gl){if(performance.memory){const n=(performance.memory.usedJSHeapSize/1048576).toFixed(1),s=(performance.memory.jsHeapSizeLimit/1048576).toFixed(0);this.perfGpuMem.innerText=`${n} / ${s} MB (heap)`}else this.perfGpuMem.innerText="Unsupported";return}const t=performance.now();if(!this.gpuMemInfo.lastUpdate||t-this.gpuMemInfo.lastUpdate>1e3)try{const n=this._gl.getParameter(this.gpuMemInfo.ext.GPU_MEMORY_INFO_CURRENT_AVAILABLE_VIDMEM_NVX);this.gpuMemInfo.lastAvailKb=n||this.gpuMemInfo.lastAvailKb,this.gpuMemInfo.lastUpdate=t}catch{}const e=this.gpuMemInfo.totalKb?this.gpuMemInfo.totalKb/1024:null,i=this.gpuMemInfo.lastAvailKb?this.gpuMemInfo.lastAvailKb/1024:null;if(e&&i){const n=Math.max(0,e-i);this.perfGpuMem.innerText=`${n.toFixed(1)} / ${e.toFixed(1)} MB`}else i?this.perfGpuMem.innerText=`${i.toFixed(1)} MB free`:this.perfGpuMem.innerText="Unknown"}initGpuInfo(){if(!(!this._renderer||this.gpuInfo))try{const t=this._renderer.getContext();this._gl=t;const e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);this.gpuInfo=i||"Unknown GPU";const n=t.getExtension("WEBGL_gpu_memory_info");if(n){const s=t.getParameter(n.GPU_MEMORY_INFO_TOTAL_AVAILABLE_MEMORY_KB)||t.getParameter(n.GPU_MEMORY_INFO_DEDICATED_VIDMEM_NVX)||null,o=t.getParameter(n.GPU_MEMORY_INFO_CURRENT_AVAILABLE_VIDMEM_NVX)||null;this.gpuMemInfo={ext:n,totalKb:s,lastAvailKb:o,lastUpdate:0}}}catch{this.gpuInfo="Unknown GPU"}}setRenderer(t){this._renderer=t,this.initGpuInfo()}setMultiplayer(t){this.multiplayer=t}isPerfCollapsed(){return this.perfEl&&this.perfEl.classList.contains("collapsed")}}const cm="/threejs-voxel-firecraft/dist/assets/mixkit-kill-blood-zombie-By90BKfb.ogg",hm="/threejs-voxel-firecraft/dist/assets/zombie-B8PCKsyJ.ogg";function um(r,t=0,e=0,i=0){const n=new Et;n.position.set(t,e,i);const s=new q({color:9323693}),o=new q({color:2899536}),a=new I(new j(.5,.45,.5),s);a.position.y=1.75,n.add(a);const l=new q({color:16717636,emissive:16717636,emissiveIntensity:.8,roughness:.2}),c=new j(.12,.08,.02),h=new I(c,l);h.position.set(-.12,.05,.26);const u=h.clone();u.position.x=.12,a.add(h),a.add(u);const d=new q({color:855309,emissive:3342336,emissiveIntensity:.4}),g=new I(new j(.24,.08,.04),d);g.position.set(0,-.14,.25),a.add(g);const f=new q({color:15921906,roughness:.3}),y=new j(.05,.06,.02);for(let C=-1;C<=1;C+=2){const D=new I(y,f);D.position.set(C*.06,-.05,.04),g.add(D)}const p=new I(new j(.6,.8,.3),o);p.position.y=1.1,n.add(p);const m=new j(.2,.8,.2);m.translate(0,-.3,0);const _=new Et;_.position.set(-.45,1.4,0),n.add(_),_.add(new I(m,s));const v=new Et;v.position.set(.45,1.4,0),n.add(v),v.add(new I(m,s));const x=new j(.25,.8,.25);x.translate(0,-.4,0);const T=new Et;T.position.set(-.15,.7,0),n.add(T),T.add(new I(x,o));const b=new Et;return b.position.set(.15,.7,0),n.add(b),b.add(new I(x,o)),n.castShadow=!0,n.receiveShadow=!0,r.add(n),{mesh:n,leftArmPivot:_,rightArmPivot:v,leftLegPivot:T,rightLegPivot:b}}function dm(r,t=0,e=0,i=0){const n=new Et;n.position.set(t,e,i);const s=new q({color:4881497}),o=new q({color:2899536}),a=1.3,l=1.6,c=1.4,h=1.3,u=1.4,d=.5*a,g=new I(new j(d,d*.9,d),s);g.position.y=1.75,n.add(g);const f=new q({color:16717636,emissive:16717636,emissiveIntensity:.8,roughness:.2}),y=1.2,p=new j(.12*y,.08*y,.02),m=new I(p,f);m.position.set(-.12*a,.05,.26*a);const _=m.clone();_.position.x=.12*a,g.add(m),g.add(_);const v=new q({color:855309,emissive:3342336,emissiveIntensity:.4}),x=1.3,T=new I(new j(.24*x,.08*x,.04),v);T.position.set(0,-.14*a,.25*a),g.add(T);const b=new q({color:15921906,roughness:.3}),C=new j(.05*x,.06*x,.02);for(let Q=-1;Q<=1;Q+=2){const at=new I(C,b);at.position.set(Q*.06*x,-.05,.04),T.add(at)}const D=.6*l,M=.3*c,w=.9,F=new I(new j(D,w,M),o);F.position.y=1.05,n.add(F);const O=new vi(.45,8,8),J=new I(O,o);J.position.y=.9,J.position.z=.25,J.scale.set(1.1,1,.9),n.add(J);const L=.2*h,N=.2*h,W=new j(L,.8,N);W.translate(0,-.3,0);const K=new Et;K.position.set(-.55,1.4,0),n.add(K),K.add(new I(W,s));const Y=new Et;Y.position.set(.55,1.4,0),n.add(Y),Y.add(new I(W,s));const $=.25*u,Z=.25*u,tt=new j($,.8,Z);tt.translate(0,-.4,0);const et=new Et;et.position.set(-.2,.7,0),n.add(et),et.add(new I(tt,o));const H=new Et;return H.position.set(.2,.7,0),n.add(H),H.add(new I(tt,o)),n.castShadow=!0,n.receiveShadow=!0,r.add(n),{mesh:n,leftArmPivot:K,rightArmPivot:Y,leftLegPivot:et,rightLegPivot:H}}function fm(r,t=0,e=0,i=0){const n=new Et;n.position.set(t,e,i),n.scale.set(2,2,2);const s=new q({color:9323693}),o=new q({color:2899536}),a=new I(new j(.5,.45,.5),s);a.position.y=1.75,n.add(a);const l=new q({color:16717636,emissive:16717636,emissiveIntensity:.8,roughness:.2}),c=new j(.12,.08,.02),h=new I(c,l);h.position.set(-.12,.05,.26);const u=h.clone();u.position.x=.12,a.add(h),a.add(u);const d=new q({color:855309,emissive:3342336,emissiveIntensity:.4}),g=new I(new j(.24,.08,.04),d);g.position.set(0,-.14,.25),a.add(g);const f=new q({color:15921906,roughness:.3}),y=new j(.05,.06,.02);for(let C=-1;C<=1;C+=2){const D=new I(y,f);D.position.set(C*.06,-.05,.04),g.add(D)}const p=new I(new j(.6,.8,.3),o);p.position.y=1.1,n.add(p);const m=new j(.2,.8,.2);m.translate(0,-.3,0);const _=new Et;_.position.set(-.45,1.4,0),n.add(_),_.add(new I(m,s));const v=new Et;v.position.set(.45,1.4,0),n.add(v),v.add(new I(m,s));const x=new j(.25,.8,.25);x.translate(0,-.4,0);const T=new Et;T.position.set(-.15,.7,0),n.add(T),T.add(new I(x,o));const b=new Et;return b.position.set(.15,.7,0),n.add(b),b.add(new I(x,o)),n.castShadow=!0,n.receiveShadow=!0,r.add(n),{mesh:n,leftArmPivot:_,rightArmPivot:v,leftLegPivot:T,rightLegPivot:b}}function pm(r,t=0,e=0,i=0){const n=new Et;n.position.set(t,e,i);const s=new q({color:657930,roughness:.8,metalness:.1}),o=new q({color:16119260,roughness:.3}),a=new q({color:13369344,roughness:.6}),l=new I(new j(.4,.5,.4),o);l.position.y=2.4,n.add(l);const c=new I(new j(.5,1.4,.25),s);c.position.y=1.5,n.add(c);const h=new I(new j(.15,.8,.05),a);h.position.set(0,1.5,.14),n.add(h);const u=new j(.12,1.2,.12);u.translate(0,-.5,0);const d=new Et;d.position.set(-.35,2,0),n.add(d),d.add(new I(u,s));const g=new Et;g.position.set(.35,2,0),n.add(g),g.add(new I(u,s));const f=new j(.18,1,.18);f.translate(0,-.5,0);const y=new Et;y.position.set(-.12,.9,0),n.add(y),y.add(new I(f,s));const p=new Et;return p.position.set(.12,.9,0),n.add(p),p.add(new I(f,s)),n.castShadow=!0,n.receiveShadow=!0,r.add(n),{mesh:n,leftArmPivot:d,rightArmPivot:g,leftLegPivot:y,rightLegPivot:p}}class mm{constructor(t,e,i,n){this.scene=t,this.player=e,this.world=i,this.enemies=[],this.spawnInterval=5e3,this.lastSpawn=0,this.killedCount=0,this.groanBuffer=null;const s=n&&(n.gameMode==="matrix"||n.gameMode==="studio"||n.gameMode==="matrix-ai")?0:n?n.enemyCount:15;this.targetCount=s,this.difficulty=n?n.difficulty:"medium",this.gameMode=n&&n.gameMode?n.gameMode:"arcade",this.studioAiEnabled=!1;for(let o=0;o<s;o++)this.spawnEnemy();this.deathBuffer=null;try{const o=window.AudioContext||window.webkitAudioContext;o&&(this.audioCtx=new o,fetch(cm).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.deathBuffer=a,this.enemies.forEach(l=>{l.audioCtx=this.audioCtx,l.deathBuffer=a})}).catch(a=>{}),fetch(hm).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.groanBuffer=a,this.enemies.forEach(l=>{l.audioCtx=this.audioCtx,l.groanBuffer=a})}).catch(a=>{}))}catch{}}spawnEnemy(t=!1){if(!t&&(this.gameMode==="matrix"||this.gameMode==="studio"))return;const e=this.world&&this.world.halfMapSize?this.world.halfMapSize:100;let i=(Math.random()-.5)*e,n=(Math.random()-.5)*e;if(this.gameMode==="matrix-ai"&&this.player){const h=(this.world&&this.world.halfMapSize?this.world.halfMapSize:100)*.6;let u=0;for(;u<10;){const d=this.player.position.x,g=this.player.position.z,f=i-d,y=n-g;if(Math.sqrt(f*f+y*y)>=h)break;i=(Math.random()-.5)*e,n=(Math.random()-.5)*e,u++}}const s=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(i,n):0,o=this.world&&this.world.halfMapSize?this.world.halfMapSize:100;let a=!1,l="normal";if(this.gameMode==="survival"){const h=this.enemies.filter(f=>f.isBig).length,u=this.enemies.filter(f=>f.zombieType==="slender").length,d=Math.floor(this.targetCount/5),g=Math.floor(this.targetCount/10);if(h<d)a=!0,l="big";else if(u<g)l="slender";else{const f=this.enemies.filter(p=>!p.isBig&&p.zombieType==="normal").length;l=this.enemies.filter(p=>!p.isBig&&p.zombieType==="fat").length<f?"fat":"normal"}}else if(this.gameMode==="arcade"){const h=this.enemies.filter(d=>d.zombieType==="slender").length,u=Math.floor(this.targetCount/10);if(h<u)l="slender";else{const d=this.enemies.filter(f=>f.zombieType==="normal").length;l=this.enemies.filter(f=>f.zombieType==="fat").length<d?"fat":"normal"}}const c=new gm(this.scene,i,s,n,this.difficulty,o,this.player,a,l);c.audioCtx=this.audioCtx,c.deathBuffer=this.deathBuffer,c.groanBuffer=this.groanBuffer,c.world=this.world,this.enemies.push(c),t&&this.gameMode==="studio"&&(this.studioAiEnabled=!0)}setTargetCount(t){typeof t=="number"&&t>=0&&(this.targetCount=t)}update(t){if(this.gameMode!=="matrix"&&!(this.gameMode==="studio"&&!this.studioAiEnabled)&&(this.enemies.forEach(e=>{if(e.update(t,this.player),Math.sqrt(e.position.x*e.position.x+e.position.z*e.position.z)>this.world.stormRadius&&e.takeDamage(5*t),this.world&&typeof this.world.halfMapSize=="number"){const n=this.world.halfMapSize-1;e.position.x=Math.max(-n,Math.min(n,e.position.x)),e.position.z=Math.max(-n,Math.min(n,e.position.z))}}),this.enemies=this.enemies.filter(e=>e.readyToDespawn?(this.killedCount++,!1):!0),this.gameMode==="survival"&&this.targetCount!==void 0&&this.targetCount>0)){const e=this.targetCount-this.enemies.length;if(e>0)for(let i=0;i<e;i++)this.spawnEnemy()}}getEnemyById(t){return t&&this.enemies.find(e=>e&&e.mesh&&e.mesh.userData&&e.mesh.userData.gameId===t)||null}applyRemoteZombieHit(t,e){const i=this.getEnemyById(t);return!i||i.isDead?null:(i.takeDamage(e),i.health)}syncZombieState(t,e){const i=this.getEnemyById(t);if(!i)return;i.health=e;const n=i.maxHealth||100,s=Math.max(0,i.health/n);i.healthBarFg&&(i.healthBarFg.scale.x=s),e<=0&&!i.isDead&&i.startDeath()}}class gm{constructor(t,e,i,n,s,o=100,a=null,l=!1,c="normal"){this.scene=t,this.position=new P(e,i,n),this.mapHalfSize=o,this.world=null,this.player=a,this.isBig=l,this.zombieType=c,this.deathTimer=0,this.deathDuration=0,this.deathFallProgress=0,this.readyToDespawn=!1,this.groanBuffer=null,this.groanCooldown=0,this.groanRange=15,this._groanSource=null,this._groanGain=null,s==="easy"?(this.health=50,this.damage=2,this.speed=3):s==="hard"?(this.health=150,this.damage=10,this.speed=6):(this.health=100,this.damage=5,this.speed=4.5),this.isBig&&(this.health*=5,this.damage*=2,this.speed*=.75),this.zombieType==="fat"&&(this.health*=1.5,this.speed*=.5),this.zombieType==="slender"&&(this.health*=.8,this.speed*=1.5,this.damage*=1.5,this.attackRange=3),this.maxHealth=this.health,this.state="wander",this.isDead=!1,this.attackRange=this.isBig?3.5:2,this.detectionRange=25,this.attackCooldown=1.5,this.lastAttack=0,this.wanderTarget=null,this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4,this.createMesh()}createMesh(){let t="Zombie";this.isBig?t="Big Zombie":this.zombieType==="fat"?t="Fat Zombie":this.zombieType==="slender"&&(t="Slenderman");let e;const i=this.position.x,n=this.position.y,s=this.position.z;this.zombieType==="slender"?e=pm(this.scene,i,n,s):this.isBig?e=fm(this.scene,i,n,s):this.zombieType==="fat"?e=dm(this.scene,i,n,s):e=um(this.scene,i,n,s),this.mesh=e.mesh,this.leftArmPivot=e.leftArmPivot,this.rightArmPivot=e.rightArmPivot,this.leftLegPivot=e.leftLegPivot,this.rightLegPivot=e.rightLegPivot,this.mesh.userData={gameId:Math.random().toString(36).substr(2,9).toUpperCase(),gameName:t},this.animTime=0,this.attackAnimTime=0,this.attackAnimDuration=.5,this.createHealthBar()}createHealthBar(){const t=new we(1,.1),e=new yi({color:0});this.healthBarBg=new I(t,e);const i=this.zombieType==="slender"?3:2.3;this.healthBarBg.position.y=i,this.mesh.add(this.healthBarBg);const n=new we(1,.1),s=new yi({color:16711680});this.healthBarFg=new I(n,s),this.healthBarFg.position.y=i,this.healthBarFg.position.z=.01,this.mesh.add(this.healthBarFg)}update(t,e){if(this.isDead){this.updateDeath(t);return}this.groanCooldown=Math.max(0,this.groanCooldown-t),this.groanBuffer&&this.audioCtx&&e&&this.groanCooldown<=0&&this.position.distanceTo(e.position)<=this.groanRange&&(this.playGroan(),this.groanCooldown=2+Math.random()*2.5);const i=e.position;this.healthBarBg.lookAt(i),this.healthBarFg.lookAt(i);const n=this.position.distanceTo(i);n<this.detectionRange?this.state="chase":this.state="wander";let s=!1;if(this.state==="chase"){const o=this.hasLineOfSight(e,i);if(n<this.detectionRange&&o){const a=new P().subVectors(i,this.position).normalize();if(a.y=0,n>2){const c=a.clone(),h=Math.sin(performance.now()/500+this.position.x)*.5,u=new P(a.z,0,-a.x).multiplyScalar(h);c.add(u).normalize();const d=this.position.clone().add(c.multiplyScalar(this.speed*t));this.checkCollision(d)||this.position.copy(d),this.mesh.lookAt(i),s=!0}else{const c=a.clone().multiplyScalar(-1),h=this.position.clone().add(c.multiplyScalar(this.speed*t*.5));this.checkCollision(h)||this.position.copy(h),this.mesh.lookAt(i)}if(n<this.attackRange){const c=performance.now()/1e3;c-this.lastAttack>this.attackCooldown&&(e.takeDamage(this.damage),this.lastAttack=c,this.attackAnimTime=this.attackAnimDuration)}}else this.state="wander"}else{if(this.wanderTimer+=t,!this.wanderTarget||this.wanderTimer>this.wanderChangeInterval){const o=10+Math.random()*30,a=Math.random()*Math.PI*2,l=this.position.x+Math.cos(a)*o,c=this.position.z+Math.sin(a)*o,h=(f,y,p)=>Math.max(y,Math.min(p,f)),u=this.mapHalfSize*.9,d=h(l,-u,u),g=h(c,-u,u);this.wanderTarget=new P(d,0,g),this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4}if(this.wanderTarget){const o=new P().subVectors(this.wanderTarget,this.position);o.y=0,o.length()>.5?(o.normalize(),this.position.add(o.multiplyScalar(this.speed*t*.5)),this.mesh.lookAt(this.wanderTarget.x,this.position.y,this.wanderTarget.z),s=!0):(this.wanderTimer+=t,this.wanderTimer>this.wanderChangeInterval&&(this.wanderTarget=null,this.wanderTimer=0))}}if(this.mesh.position.copy(this.position),this.world&&typeof this.world.getHeightAt=="function"){const o=this.world.getHeightAt(this.position.x,this.position.z);this.mesh.position.y=Math.max(this.mesh.position.y,o),this.position.y=this.mesh.position.y}if(s){this.animTime+=t*5;const o=Math.sin(this.animTime)*.5;this.leftLegPivot.rotation.x=o,this.rightLegPivot.rotation.x=-o,this.leftArmPivot.rotation.x=-Math.PI/3+o*.2,this.rightArmPivot.rotation.x=-Math.PI/3-o*.2}else this.state!=="attack"&&(this.leftLegPivot.rotation.x=0,this.rightLegPivot.rotation.x=0,this.leftArmPivot.rotation.x=-Math.PI/3,this.rightArmPivot.rotation.x=-Math.PI/3);if(this.attackAnimTime>0){this.attackAnimTime=Math.max(0,this.attackAnimTime-t);const o=1-this.attackAnimTime/this.attackAnimDuration,a=Math.sin(o*Math.PI)*1.5;if(this.leftArmPivot.rotation.x=-Math.PI/2+a*.2,this.rightArmPivot.rotation.x=-Math.PI/2-a*.2,o>.3&&o<.7){const l=new P;this.mesh.getWorldDirection(l),l.y=0,l.normalize(),this.position.add(l.multiplyScalar(.02))}}}takeDamage(t){this.health-=t;const e=this.maxHealth||100,i=Math.max(0,this.health/e);this.healthBarFg.scale.x=i,this.mesh.traverse(n=>{if(n.isMesh&&n!==this.healthBarBg&&n!==this.healthBarFg){const s=n.material;if(!n.userData.originalColor&&s&&s.color)try{n.userData.originalColor=s.color.clone()}catch{n.userData.originalColor=null}if(s&&(s.isMeshStandardMaterial||s.isMeshPhongMaterial||s.isMeshLambertMaterial))s.emissive=new Ct(16711680);else if(s&&s.color)try{s.color=s.color.clone().lerp(new Ct(16711680),.6)}catch{}}}),setTimeout(()=>{this.isDead||this.mesh.traverse(n=>{if(n.isMesh&&n!==this.healthBarBg&&n!==this.healthBarFg){const s=n.material;if(s&&(s.isMeshStandardMaterial||s.isMeshPhongMaterial||s.isMeshLambertMaterial))s.emissive=new Ct(0);else if(s&&s.color&&n.userData&&n.userData.originalColor)try{s.color.copy(n.userData.originalColor)}catch{}}})},100),this.health<=0&&!this.isDead&&this.startDeath()}playDeathSound(){try{const t=this.audioCtx.createBufferSource();t.buffer=this.deathBuffer;const e=this.audioCtx.createGain();e.gain.value=.7,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}catch(t){console.warn("playDeathSound error:",t)}}checkCollision(t){if(!this.scene)return!1;const e=.5;for(let i of this.scene.children)if(i.userData&&(i.userData.type==="house"||i.userData.type==="tree")){const n=i.position,s=Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.z-n.z,2)),o=i.userData.type==="house"?5:2;if(s<e+o)return!0}return!1}hasLineOfSight(t,e){if(!this.scene)return!0;const i=new P().subVectors(e,this.position).normalize(),n=this.position.distanceTo(e),o=new Xe(this.position.clone().add(new P(0,1,0)),i,0,n).intersectObjects(this.scene.children,!0);for(let a of o){if(a.object===this.mesh||a.object.parent===this.mesh||a.object===t.mesh||a.object.parent===t.mesh)continue;let l=a.object;for(;l.parent&&l.parent!==this.scene;)l=l.parent;if(l.userData&&(l.userData.type==="house"||l.userData.type==="tree"))return!1}return!0}startDeath(){this.isDead=!0,this.deathTimer=0,this.deathFallProgress=0,this.deathDuration=3+Math.random()*2,this.stopGroan(),this.healthBarBg&&(this.healthBarBg.visible=!1),this.healthBarFg&&(this.healthBarFg.visible=!1);const t=25,e=this.player&&this.player.position;if(e?this.position.distanceTo(e)<=t:!0)try{this.audioCtx&&this.deathBuffer&&(this.audioCtx.state==="suspended"?this.audioCtx.resume().then(()=>{this.playDeathSound()}):this.audioCtx.state==="running"&&this.playDeathSound())}catch(n){console.warn("Error playing death sound:",n)}}updateDeath(t){this.deathFallProgress=Math.min(1,this.deathFallProgress+t*2.5);const e=-Math.PI/2*this.deathFallProgress;this.mesh&&(this.mesh.rotation.x=e,this.mesh.position.y=Math.max(0,this.mesh.position.y-t*.6)),this.deathTimer+=t,this.deathTimer>=(this.deathDuration||3)&&(this.mesh&&this.mesh.parent&&this.scene.remove(this.mesh),this.readyToDespawn=!0)}playGroan(){try{if(!this.audioCtx||!this.groanBuffer)return;if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playGroan());return}const t=this.audioCtx.createBufferSource();t.buffer=this.groanBuffer;const e=this.audioCtx.createGain();e.gain.value=.45,t.connect(e),e.connect(this.audioCtx.destination),t.onended=()=>{this._groanSource=null,this._groanGain=null},t.start(0),this._groanSource=t,this._groanGain=e}catch(t){console.warn("playGroan error:",t)}}stopGroan(){if(this._groanSource){try{this._groanSource.stop()}catch{}try{this._groanSource.disconnect()}catch{}this._groanSource=null}if(this._groanGain){try{this._groanGain.disconnect()}catch{}this._groanGain=null}}}class ym{constructor(t,e,i){this.scene=t,this.player=e,this.items=[],this.interactionPrompt=document.getElementById("interaction-prompt"),this.mapSize=i&&i.mapSize?i.mapSize:ms,this.spawnSpan=this.mapSize*.75,this.glowRadius=7,this.world=null,this.settings=i||{},this.matrixDropInterval=5,this._matrixDropTimer=0,this.matrixDropBatchSize=10,this.matrixDropRadiusLimit=10,this.initLoot(),document.addEventListener("keydown",n=>{n.code==="KeyE"&&this.tryInteract()})}setWorld(t){this.world=t,this.realignItemsToGround()}getClampedCoord(t,e){if(this.world&&typeof this.world.halfMapSize=="number"){const i=this.world.halfMapSize-1;return{x:Math.max(-i,Math.min(i,t)),z:Math.max(-i,Math.min(i,e))}}return{x:t,z:e}}initLoot(){if(this.settings.gameMode==="matrix"||this.settings.gameMode==="studio"||this.settings.gameMode==="matrix-ai"||this.settings.skipLoot)return;for(let e=0;e<24;e++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n)),this.createChest(i,.5,n)}for(let e=0;e<36;e++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n)),this.spawnJuiceBottle(i,n)}const t=[2899536,15105570,1752220,15158332,10181046];for(let e=0;e<8;e++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n));const s=t[e%t.length];this.spawnBackpack(i,n,s)}for(let e=0;e<12;e++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n)),this.spawnMedKit(i,n)}}createChest(t,e,i){this.spawnChest(t,i)}spawnChest(t,e){const i=new Et;({x:t,z:e}=this.getClampedCoord(t,e));let n=.5;this.world&&typeof this.world.getHeightAt=="function"&&(n=this.world.getHeightAt(t,e)+.5),i.position.set(t,n,e);const s=new j(1,.8,.6),o=new q({color:15844367,roughness:.3,metalness:.5}),a=new I(s,o);i.add(a);const l=new j(1,.2,.6),c=new I(l,o);c.position.y=.5,i.add(c);const h=new I(new j(.2,.3,.1),new q({color:9807270}));h.position.set(0,.3,.3),i.add(h),i.castShadow=!0,i.receiveShadow=!0;const u=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR","MedKit"],d=u[Math.floor(Math.random()*u.length)];i.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:d};const g=this.createGlowEffect();return g.position.y=1,i.add(g),i.userData.glow=g,this.scene.add(i),this.items.push(i),i}spawnChestWithLoot(t,e,i){const n=new Et;({x:t,z:e}=this.getClampedCoord(t,e));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(t,e)+.5),n.position.set(t,s,e);const o=new j(1,.8,.6),a=new q({color:15844367,roughness:.3,metalness:.5}),l=new I(o,a);n.add(l);const c=new j(1,.2,.6),h=new I(c,a);h.position.y=.5,n.add(h);const u=new I(new j(.2,.3,.1),new q({color:9807270}));u.position.set(0,.3,.3),n.add(u),n.castShadow=!0,n.receiveShadow=!0,n.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:i};const d=this.createGlowEffect();return d.position.y=1,n.add(d),n.userData.glow=d,this.scene.add(n),this.items.push(n),n}spawnJuiceBottle(t,e){const i=new Et;({x:t,z:e}=this.getClampedCoord(t,e));let n=.5;this.world&&typeof this.world.getHeightAt=="function"&&(n=this.world.getHeightAt(t,e)+.5),i.position.set(t,n,e);const s=new I(new oe(.2,.2,.6,8),new q({color:2600544}));s.position.y=.5,i.add(s);const o=new I(new oe(.12,.12,.15,8),new q({color:12597547}));o.position.y=.9,i.add(o),i.castShadow=!0,i.receiveShadow=!0,i.userData={type:"stamina",gameId:this.generateID(),gameName:"JuiceBottle",amount:50};const a=this.createGlowEffect();return a.position.y=.9,i.add(a),i.userData.glow=a,this.scene.add(i),this.items.push(i),i}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}spawnLootInHouse(t,e,i){this.spawnChest(t,i)}spawnBackpack(t,e,i){const n=new Et;({x:t,z:e}=this.getClampedCoord(t,e));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(t,e)+.5),n.position.set(t,s,e);const o=new I(new j(.7,.9,.35),new q({color:i,metalness:.15,roughness:.8}));n.add(o);const a=new I(new j(.6,.25,.16),new q({color:3426654,metalness:.1,roughness:.8}));a.position.set(0,-.55,.18),n.add(a),n.castShadow=!0,n.receiveShadow=!0;const l=this.createGlowEffect();return l.position.y=1,n.add(l),n.userData={type:"backpack",color:i,gameId:this.generateID(),gameName:"Backpack",isOpened:!1,glow:l},this.scene.add(n),this.items.push(n),n}spawnMedKit(t,e){const i=new Et;({x:t,z:e}=this.getClampedCoord(t,e));let n=.5;this.world&&typeof this.world.getHeightAt=="function"&&(n=this.world.getHeightAt(t,e)+.3),i.position.set(t,n,e);const s=new I(new j(.8,.5,.6),new q({color:15790320,metalness:.2,roughness:.6}));i.add(s);const o=new I(new j(.5,.05,.15),new q({color:15158332,metalness:.1,roughness:.4}));o.position.y=.28,i.add(o);const a=new I(new j(.15,.05,.5),new q({color:15158332,metalness:.1,roughness:.4}));a.position.y=.28,i.add(a);const l=new I(new j(.6,.1,.08),new q({color:9807270,metalness:.4,roughness:.5}));l.position.y=.35,i.add(l);const c=new I(new j(.15,.08,.08),new q({color:8359053,metalness:.5,roughness:.4}));c.position.set(0,0,.32),i.add(c),i.castShadow=!0,i.receiveShadow=!0;const h=this.createGlowEffect();return h.position.y=.6,i.add(h),i.userData={type:"medkit",gameId:this.generateID(),gameName:"MedKit",healAmount:25,isOpened:!1,glow:h},this.scene.add(i),this.items.push(i),i}spawnMatrixLoadout(t=0,e=0){[{dx:2,dz:0,loot:"Pistol"},{dx:-2,dz:0,loot:"Rifle"},{dx:0,dz:2,loot:"Sniper"},{dx:0,dz:-2,loot:"ShieldPotion"},{dx:2,dz:2,loot:"SMG"},{dx:-2,dz:-2,loot:"Shotgun"},{dx:-2,dz:2,loot:"DMR"}].forEach(s=>{this.spawnChestWithLoot(t+s.dx,e+s.dz,s.loot)}),this.spawnJuiceBottle(t+3,e+3),this.spawnJuiceBottle(t-3,e-3),[2899536,15105570,1752220].forEach((s,o)=>{this.spawnBackpack(t+(o-1)*2,e+4,s)})}countNearbyChests(t=10){if(!this.player)return 0;const e=this.player.position;let i=0;return this.items.forEach(n=>{const s=n.userData||{};if(s.type!=="chest"||s.isOpened)return;const o=n.position.x-e.x,a=n.position.z-e.z;Math.sqrt(o*o+a*a)<=t&&i++}),i}createUmbrella(){const t=new Et,e=new I(new oe(.08,.08,1.6,6),new q({color:4863016,roughness:.8}));e.position.y=-.2,t.add(e),[16726832,15844367,3447003].forEach((s,o)=>{const a=new I(new j(1.8-o*.3,.15,1.8-o*.3),new q({color:s,roughness:.4,metalness:.2}));a.position.y=.7+o*.12,t.add(a)});const n=new I(new mn(.2,.25,6),new q({color:2899536}));return n.position.y=1.1,t.add(n),t.castShadow=!0,t.receiveShadow=!0,t}spawnMatrixDropNearPlayer(){if(!this.player)return;const t=Math.random()*Math.PI*2,e=4+Math.random()*8;let i=this.player.position.x+Math.cos(t)*e,n=this.player.position.z+Math.sin(t)*e;({x:i,z:n}=this.getClampedCoord(i,n));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(i,n)+.5);const o=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR","MedKit"],a=o[Math.floor(Math.random()*o.length)],l=this.spawnChestWithLoot(i,n,a);if(l){l.position.y=s+18,l.userData.isDropping=!0,l.userData.dropTargetY=s,l.userData.dropVelocity=0;const c=this.createUmbrella();c.position.y=1.2,l.add(c),l.userData.umbrella=c}}spawnMatrixDropsBatch(){if(this.countNearbyChests(this.matrixDropRadiusLimit)>=this.matrixDropBatchSize)return;const t=this.matrixDropBatchSize-this.countNearbyChests(this.matrixDropRadiusLimit),e=Math.max(0,Math.min(this.matrixDropBatchSize,t));for(let i=0;i<e;i++)this.spawnMatrixDropNearPlayer()}update(t=.016){const e=Math.max(0,t||0);this.settings.gameMode==="matrix"&&this.player&&(this._matrixDropTimer+=e,this._matrixDropTimer>=this.matrixDropInterval&&(this._matrixDropTimer=0,this.spawnMatrixDropsBatch())),this.items.forEach(s=>{const o=s.userData||{};if(o.isDropping&&(o.dropVelocity=(o.dropVelocity||0)+5*e,s.position.y-=o.dropVelocity*e,s.position.y<=o.dropTargetY&&(s.position.y=o.dropTargetY,o.isDropping=!1,o.dropVelocity=0,o.umbrella))){try{s.remove(o.umbrella)}catch{}o.umbrella=null}});let i=null;const n=this.player.position;for(const s of this.items){if(s.userData&&s.userData.isOpened)continue;const o=n.distanceTo(s.position);if(this.updateGlow(s,o),o<3){i=s;break}}if(!(this.interactionPrompt&&this.interactionPrompt.dataset.vehiclePrompt==="1"))if(i){this.interactionPrompt.classList.remove("hidden");const s=i.userData||{};if(s.type==="chest")this.interactionPrompt.innerText=`Press E to open (Contains: ${s.loot})`;else if(s.type==="stamina")this.interactionPrompt.innerText=`Press E to collect ${s.gameName} (+${s.amount} Stamina)`;else if(s.type==="medkit")this.interactionPrompt.innerText=`Press E to use ${s.gameName} (+${s.healAmount}% Health)`;else if(s.type==="backpack"){const o=s.color?"#"+s.color.toString(16).padStart(6,"0"):"";this.interactionPrompt.innerText=`Press E to equip Backpack ${o}`}else this.interactionPrompt.innerText="Press E to interact";this.currentItem=i}else this.interactionPrompt.classList.add("hidden"),this.currentItem=null}tryInteract(){if(this.currentItem){const t=this.currentItem.userData;if(!t)return;if(t.type==="chest"&&!t.isOpened)t.isOpened=!0,this.scene.remove(this.currentItem),this.player.collectItem(t.loot),console.log(`Looted ${t.loot}!`);else if(t.type==="stamina"){const e=t.amount||50;this.player&&(this.player.stamina=Math.min(100,this.player.stamina+e)),this.scene.remove(this.currentItem),t.isOpened=!0,console.log(`Picked up stamina item: +${e}`)}else if(t.type==="medkit"){const e=t.healAmount||25;if(this.player){const n=100*e/100;this.player.health=Math.min(100,this.player.health+n),console.log(`Used MedKit: +${n} HP (${e}%)`)}this.scene.remove(this.currentItem),t.isOpened=!0}else if(t.type==="backpack"){const e=t.color||2899536;if(this.player&&typeof this.player.collectItem=="function"){const i=this.player.collectItem(`Backpack:${e.toString(16)}`);if(i!=null){const n=this.player.position.clone();this.spawnBackpack(n.x+.5,n.z+.5,i)}}this.scene.remove(this.currentItem),t.isOpened=!0,console.log(`Equipped backpack ${e.toString(16)}`)}}}realignItemsToGround(){!this.world||typeof this.world.getHeightAt!="function"||this.items.forEach(t=>{const e=t.position,i=this.world.getHeightAt(e.x,e.z),n=(t.userData&&t.userData.type==="chest",.5);t.position.y=i+n})}updateGlow(t,e){if(!t||!t.userData||!t.userData.glow)return;const i=t.userData.glow,n=!t.userData.isOpened&&e<this.glowRadius;i.visible=n,n&&(i.rotation.y+=.02,i.position.y=(t.userData.type==="chest"?1:.9)+Math.sin(performance.now()/500)*.1)}createGlowEffect(){const e=new Float32Array(120),i=.6;for(let a=0;a<40;a++){const l=i*Math.random(),c=Math.random()*Math.PI*2,h=Math.random()*i*.6;e[a*3]=Math.cos(c)*l,e[a*3+1]=h,e[a*3+2]=Math.sin(c)*l}const n=new de;n.setAttribute("position",new ve(e,3));const s=new Ka({color:16765286,size:.15,transparent:!0,opacity:.9,depthWrite:!1,blending:rr,sizeAttenuation:!0}),o=new bp(n,s);return o.visible=!1,o}}class _m{constructor(t,e={}){this.player=t,this.container=document.getElementById("touch-controls"),this.enabled=!0,this.layout=e&&e.layout?e.layout:{},this._cleanupExistingControls(),this.isEditing=!1,this.buttonHelpers=new Map,this._suppressDragUntil=0,this.joystick=document.createElement("div"),this.joystick.className="tc-joystick",this.joystick.style.zIndex="210",this.stick=document.createElement("div"),this.stick.className="tc-stick",this.joystick.appendChild(this.stick),this.buttons=document.createElement("div"),this.buttons.className="tc-buttons",this.buttons.style.zIndex="210",this.fireBtn=document.createElement("button"),this.fireBtn.className="tc-btn tc-btn-fire",this.fireBtn.innerText="FIRE",this.jumpBtn=document.createElement("button"),this.jumpBtn.className="tc-btn",this.jumpBtn.innerText="JUMP",this.sprintBtn=document.createElement("button"),this.sprintBtn.className="tc-btn",this.sprintBtn.innerText="SPRINT",this.interactBtn=document.createElement("button"),this.interactBtn.className="tc-btn tc-interact-btn",this.interactBtn.innerText="E",this.interactBtn.style.display="none",this.crouchBtn=document.createElement("button"),this.crouchBtn.className="tc-btn",this.crouchBtn.innerText="CROUCH",this.crouchBtn.style.fontSize="16px",this.buttons.appendChild(this.fireBtn),this.buttons.appendChild(this.jumpBtn),this.buttons.appendChild(this.sprintBtn),this.buttons.appendChild(this.crouchBtn),this.buttons.appendChild(this.interactBtn),this.container.appendChild(this.joystick),this.container.appendChild(this.buttons),this.container.classList.remove("hidden"),this.applyLayout(),this._initDragHandles(),this.active=!1,this.startPos=null,this.currentPos={x:0,y:0},this.lookActive=!1,this.lookStartPos=null,this._bindJoystick(),this._bindButtons(),this._bindLookArea(),this._setupEditToggleGesture(),this.deadZone=10,this.maxRadius=50,document.body.style.touchAction="none";try{this.player&&(this.player.allowTouchMovement=!0)}catch{}}_dispatchTouchLook(t,e){try{window.dispatchEvent(new CustomEvent("game-touch-look",{detail:{dx:t,dy:e}}))}catch{}}destroy(){try{this.container.classList.add("hidden"),this.destroyLookArea(),this.container.removeChild(this.joystick),this.container.removeChild(this.buttons),document.body.style.touchAction="",this.player&&(this.player.allowTouchMovement=!1)}catch{}}applyLayout(){const t=this.layout.joystickLeft!==void 0?this.layout.joystickLeft:10,e=this.layout.joystickBottom!==void 0?this.layout.joystickBottom:12,i=this.layout.buttonsRight!==void 0?this.layout.buttonsRight:8,n=this.layout.buttonsBottom!==void 0?this.layout.buttonsBottom:12,s=this.layout.buttonGapVh!==void 0?this.layout.buttonGapVh:14/window.innerHeight*100;this.layout.buttonPositions||(this.layout.buttonPositions={});const o=(l,c)=>{this.layout.buttonPositions[l]||(this.layout.buttonPositions[l]={right:i,bottom:n+s*c})};o("fire",0),o("jump",1),o("sprint",2),o("crouch",3),o("interact",4),this.joystick.style.left=`${t}vw`,this.joystick.style.bottom=`${e}vh`,this.buttons.style.position="absolute",this.buttons.style.top="0",this.buttons.style.left="0",this.buttons.style.right="0",this.buttons.style.bottom="0",this.buttons.style.display="block",this.buttons.style.pointerEvents="none";const a=(l,c)=>{const h=this.layout.buttonPositions[c];h&&(l.style.position="absolute",l.style.right=`${h.right}vw`,l.style.bottom=`${h.bottom}vh`,l.style.pointerEvents="auto")};a(this.fireBtn,"fire"),a(this.jumpBtn,"jump"),a(this.sprintBtn,"sprint"),a(this.crouchBtn,"crouch"),a(this.interactBtn,"interact")}_cleanupExistingControls(){if(!this.container)return;this.container.querySelectorAll(".tc-joystick, .tc-buttons, .tc-look-area").forEach(e=>{try{e.parentNode.removeChild(e)}catch{}})}_initDragHandles(){const t=()=>{try{const s=localStorage.getItem("touch-layout");if(s){const o=JSON.parse(s);this.layout={...this.layout,...o}}}catch{}},e=()=>{try{localStorage.setItem("touch-layout",JSON.stringify(this.layout))}catch{}};t(),this.applyLayout(),((s,o)=>{let a=!1,l=0,c=0;const h=10,u=f=>{const y=f.touches?f.touches[0]:f;if(!a){const p=y.clientX-l,m=y.clientY-c;if(Math.sqrt(p*p+m*m)<h)return;a=!0}{const p=y.clientX/window.innerWidth*100;this.layout.joystickLeft=Math.max(0,Math.min(80,p));const m=(window.innerHeight-y.clientY)/window.innerHeight*100;this.layout.joystickBottom=Math.max(0,Math.min(80,m))}this.applyLayout(),f.preventDefault&&f.preventDefault()},d=()=>{a&&(a=!1,e()),document.removeEventListener("touchmove",u,{passive:!1}),document.removeEventListener("touchend",d),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",d)},g=f=>{if(!this.isEditing||this._shouldSuppressDrag()||f.touches&&f.touches.length>1)return;const y=f.touches?f.touches[0]:f;l=y.clientX,c=y.clientY,a=!1,document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),document.addEventListener("pointermove",u),document.addEventListener("pointerup",d)};s.addEventListener("touchstart",g,{passive:!0}),s.addEventListener("pointerdown",g)})(this.joystick);const n=(s,o)=>{let a=!1,l=0,c=0;const h=10,u=f=>{if(!a)return;const y=f.touches?f.touches[0]:f,p=(window.innerWidth-y.clientX)/window.innerWidth*100,m=(window.innerHeight-y.clientY)/window.innerHeight*100;this.layout.buttonPositions||(this.layout.buttonPositions={}),this.layout.buttonPositions[o]={right:Math.max(0,Math.min(90,p)),bottom:Math.max(0,Math.min(90,m))},this.applyLayout(),f.preventDefault&&f.preventDefault()},d=()=>{a&&(a=!1,e()),document.removeEventListener("touchmove",u,{passive:!1}),document.removeEventListener("touchend",d),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",d)},g=f=>{if(!this.isEditing||this._shouldSuppressDrag()||f.touches&&f.touches.length>1)return;const y=f.touches?f.touches[0]:f;l=y.clientX,c=y.clientY,a=!1,document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),document.addEventListener("pointermove",u),document.addEventListener("pointerup",d)};s.addEventListener("touchstart",g,{passive:!0}),s.addEventListener("pointerdown",g),s.addEventListener("touchmove",f=>{if(!this.isEditing||this._shouldSuppressDrag()||a)return;const y=f.touches?f.touches[0]:f,p=y.clientX-l,m=y.clientY-c;Math.sqrt(p*p+m*m)>h&&(a=!0)},{passive:!0}),s.addEventListener("pointermove",f=>{if(f.pointerType!=="touch"||!this.isEditing||this._shouldSuppressDrag()||a)return;const y=f.clientX-l,p=f.clientY-c;Math.sqrt(y*y+p*p)>h&&(a=!0)})};n(this.fireBtn,"fire"),n(this.jumpBtn,"jump"),n(this.sprintBtn,"sprint"),n(this.crouchBtn,"crouch"),n(this.interactBtn,"interact")}_bindJoystick(){this.joystick.addEventListener("touchstart",e=>{e.preventDefault();const i=e.changedTouches[0];this.joystick.getBoundingClientRect(),this.startPos={x:i.clientX,y:i.clientY},this.active=!0}),this.joystick.addEventListener("touchmove",e=>{if(!this.active)return;e.preventDefault();const i=e.changedTouches[0],n=i.clientX-this.startPos.x,s=i.clientY-this.startPos.y,o=Math.sqrt(n*n+s*s),a=Math.atan2(s,n),l=Math.min(this.maxRadius,o),c=Math.cos(a)*l,h=Math.sin(a)*l;this.stick.style.transform=`translate(${c}px, ${h}px)`;const u=n/this.maxRadius,d=s/this.maxRadius;this.player.moveForward=d<-.3,this.player.moveBackward=d>.3,this.player.moveLeft=u<-.3,this.player.moveRight=u>.3});const t=e=>{this.active&&(e.preventDefault(),this.active=!1,this.startPos=null,this.stick.style.transform="translate(0,0)",this.player.moveForward=!1,this.player.moveBackward=!1,this.player.moveLeft=!1,this.player.moveRight=!1)};this.joystick.addEventListener("touchend",t),this.joystick.addEventListener("touchcancel",t)}_bindButtons(){let t=null,e=null;const i=()=>{t&&(clearInterval(t),t=null)};this._stopFireInterval=i,this.fireBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&(i(),e&&(clearTimeout(e),e=null),this.player&&typeof this.player.shoot=="function"&&(this.player.shoot(),e=setTimeout(()=>{t=setInterval(()=>{this.player&&typeof this.player.shoot=="function"&&this.player.shoot()},150)},220)))});const n=s=>{s&&s.preventDefault&&s.preventDefault(),!this.isEditing&&(e&&(clearTimeout(e),e=null),i())};this.fireBtn.addEventListener("touchend",n),this.fireBtn.addEventListener("touchcancel",n),this.fireBtn.addEventListener("pointerup",s=>{s.pointerType==="touch"&&n(s)}),this.fireBtn.addEventListener("pointercancel",s=>{s.pointerType==="touch"&&n(s)}),this.fireBtn.addEventListener("mouseup",n),this.fireBtn.addEventListener("mouseleave",n),this.jumpBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&this.player&&this.player.canJump===!0&&(this.player.velocity.y+=this.player.jumpHeight,this.player.canJump=!1)}),this.sprintBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&this.player&&(this.player.stamina<=0?this.player.isSprinting=!1:this.player.isSprinting=!this.player.isSprinting,this._updateSprintButton())}),this.interactBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&window.game&&window.game.itemManager&&window.game.itemManager.tryInteract()}),this.crouchBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&this.player&&(this.player.isCrouching=!this.player.isCrouching,this.crouchBtn.style.background=this.player.isCrouching?"rgba(52, 152, 219, 0.9)":"rgba(241, 196, 15, 0.9)")})}update(){window.game&&window.game.itemManager&&window.game.itemManager.currentItem?this.interactBtn.style.display="block":this.interactBtn.style.display="none";try{this.player&&this.player.stamina!==void 0&&(this.player.isSprinting&&this.player.stamina<=0&&(this.player.isSprinting=!1),this._updateSprintButton())}catch{}}destroyLookArea(){try{this.lookArea&&this.container&&this.lookArea.parentElement===this.container&&this.container.removeChild(this.lookArea)}catch{}this.lookArea=null}rebuildLookArea(){this.destroyLookArea(),this._bindLookArea()}_bindLookArea(){try{if(this.lookArea)try{this.container.removeChild(this.lookArea)}catch{}this.lookArea=document.createElement("div"),this.lookArea.className="tc-look-area",this.lookArea.style.position="absolute",this.lookArea.style.top="0",this.lookArea.style.bottom="0",this.lookArea.style.right="0",this.lookArea.style.left="0",this.lookArea.style.width="100%",this.lookArea.style.zIndex="190",this.lookArea.style.background="transparent",this.lookArea.style.touchAction="none",this.lookArea.style.pointerEvents="auto",this.container.appendChild(this.lookArea);let t=null,e=0,i=0;this.lookArea.addEventListener("touchstart",s=>{if(t!==null)return;const o=s.changedTouches[0];t=o.identifier,e=o.clientX,i=o.clientY,s.cancelable&&s.preventDefault()},{passive:!1}),this.lookArea.addEventListener("touchmove",s=>{if(t!==null){s.cancelable&&s.preventDefault();for(let o=0;o<s.changedTouches.length;o++)if(s.changedTouches[o].identifier===t){const a=s.changedTouches[o],l=a.clientX-e,c=a.clientY-i;e=a.clientX,i=a.clientY,this._dispatchTouchLook(l,c);break}}},{passive:!1});const n=s=>{if(t!==null){for(let o=0;o<s.changedTouches.length;o++)if(s.changedTouches[o].identifier===t){t=null;break}}};this.lookArea.addEventListener("touchend",n),this.lookArea.addEventListener("touchcancel",n)}catch{}}_getButtons(){return[this.fireBtn,this.jumpBtn,this.sprintBtn,this.crouchBtn,this.interactBtn]}_getEditToggleTargets(){return[this.jumpBtn,this.sprintBtn,this.crouchBtn,this.interactBtn]}_setupEditToggleGesture(){let t=0,e=0;const i=700,n=o=>{o.touches&&o.touches.length>=2&&(o.preventDefault(),o.stopPropagation(),t=0,this._suppressDrag(),this._toggleEditMode())},s=o=>{const a=performance.now();a-e<i?t+=1:t=1,e=a,t>=3&&(o.preventDefault(),o.stopPropagation(),t=0,this._suppressDrag(),this._toggleEditMode())};this._getEditToggleTargets().forEach(o=>{o.addEventListener("touchstart",n,{passive:!1}),o.addEventListener("touchend",s,{passive:!1}),o.addEventListener("touchcancel",()=>{t=0},{passive:!0}),o.addEventListener("pointerdown",a=>{a.pointerType})})}_updateSprintButton(){if(!this.player)return;const t=!!this.player.isSprinting;this.sprintBtn.style.background=t?"rgba(46, 204, 113, 0.9)":"rgba(241, 196, 15, 0.9)"}_toggleEditMode(){this.isEditing?this._exitEditMode():this._enterEditMode()}_enterEditMode(){this.isEditing=!0,typeof this._stopFireInterval=="function"&&this._stopFireInterval(),this._showButtonHelpers(),this._suppressDrag()}_exitEditMode(){this.isEditing=!1,this._hideButtonHelpers()}_showButtonHelpers(){this._getButtons().forEach(t=>{t.classList.add("tc-btn-editing");let e=this.buttonHelpers.get(t);e||(e=document.createElement("div"),e.className="tc-btn-helper",e.style.position="absolute",e.style.inset="-8px",e.style.border="2px dashed rgba(255, 255, 255, 0.75)",e.style.borderRadius="22px",e.style.pointerEvents="none",e.style.boxShadow="0 0 12px rgba(255, 255, 255, 0.5)",e.style.animation="tc-btn-helper-pulse 1.6s ease-in-out infinite",e.style.opacity="0.9",this.buttonHelpers.set(t,e)),t.contains(e)||(e.setAttribute("aria-hidden","true"),t.appendChild(e))})}_hideButtonHelpers(){this._getButtons().forEach(t=>{t.classList.remove("tc-btn-editing");const e=this.buttonHelpers.get(t);e&&e.parentNode===t&&t.removeChild(e)})}_suppressDrag(t=450){this._suppressDragUntil=performance.now()+t}_shouldSuppressDrag(){return performance.now()<this._suppressDragUntil}}class vm{constructor({player:t,scene:e,url:i,nick:n="Player",color:s="#29b6f6",roomCode:o="PUBLIC",settings:a=null}){this.player=t,this.scene=e,this.url=i,this.nick=n,this.color=s,this.roomCode=o||"PUBLIC",this.socket=null,this.id=null,this.others=new Map,this.lastSend=0,this.sendInterval=.05,this.lastSentPos=null,this.lastSentRot=null,this.lastAnimSig=null,this.heartbeatTimer=0,this.isHost=!1,this.roomSettings=a,this._manualClose=!1,this.deadPeers=new Set,this.matchLive=!1,this.remoteStates=new Map,this.remoteLastYaw=new Map,this.interpDelayMs=100,this.maxBufferMs=1e3,this.maxExtrapMs=80,this.remoteFaceOffset=0,this._now=typeof performance<"u"&&performance.now.bind(performance)||Date.now,this._tmpVec=new P,this.enemyManager=null,this.netStats={txBytes:0,rxBytes:0,txPerSec:0,rxPerSec:0,lastSample:this._now(),history:[]},this.lastPingSent=0,this.pingInterval=5,this.connect()}applyColorToTorso(t,e){if(!t||!e)return;let i=!1;const n=new Ct(e);return t.traverse(s=>{if(!s.isMesh||!s.material||Array.isArray(s.material))return;const o=s.userData&&s.userData.gameName?s.userData.gameName.toLowerCase():"";(o.includes("body")||o.includes("torso")||o.includes("shirt")||o.includes("clothes")||s.geometry&&s.geometry.parameters&&Math.abs(s.geometry.parameters.width-.6)<.05)&&(s.material=s.material.clone(),s.material.color=n,i=!0)}),t.userData&&(t.userData.color=e),i}connect(){if(!this.url){console.warn("Multiplayer URL not configured.");const t=document.getElementById("ai-log");if(t){const e=document.createElement("div");e.textContent="Multiplayer URL not set in settings.",e.style.color="#ff9b9b",t.appendChild(e)}return}try{this.socket=new WebSocket(this.url),this.socket.onopen=()=>{this.sendJoin()},this.socket.onmessage=t=>this.handleMessage(t),this.socket.onclose=()=>{this.others.forEach(t=>{try{this.scene.remove(t)}catch{}}),this.others.clear(),this.deadPeers.clear(),this.matchLive=!1,this._manualClose||setTimeout(()=>this.connect(),1500)},this.socket.onerror=()=>{}}catch(t){console.warn("Multiplayer connect failed:",t)}}handleMessage(t){var e;try{const i=typeof t.data=="string"?t.data.length:0,n=JSON.parse(t.data);if(i>0&&this.trackRx(i),n.type!=="hello"){if(n.type==="welcome")this.id=n.id,this.isHost=!!n.isHost,n.settings&&(this.roomSettings=n.settings),n.custom&&(this.localCustom=n.custom),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount()),this.onHostChanged&&this.onHostChanged(this.isHost),n.settings&&this.onSettings&&this.onSettings(n.settings);else if(n.type==="player-join")n.id&&n.id!==this.id&&this.ensureRemote(n.id,null,n.custom),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount());else if(n.type==="player-leave")this.removeRemote(n.id),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount());else if(n.type==="state"&&n.id!==this.id){if(this.deadPeers.has(n.id))return;const s=this.ensureRemote(n.id,n.color,n.custom),o=typeof n.ts=="number"?n.ts:this._now();this.bufferRemoteState(n.id,{t:o,pos:n.pos,rot:n.rot,fwd:n.fwd,anim:n.anim,nick:n.nick,color:n.color,custom:n.custom?{...n.custom}:null}),s&&n.color&&((e=s.userData)==null?void 0:e.color)!==n.color&&this.applyColorToTorso(s,n.color),this.applyRemoteCustomization(s,n.custom),s&&s.userData&&(s.userData.custom=n.custom?{...n.custom}:null)}else if(n.type==="hit")this.onHit&&this.onHit(n);else if(n.type==="host-changed")this.isHost=n.hostId===this.id,this.onHostChanged&&this.onHostChanged(this.isHost);else if(n.type==="start-countdown")this.onCountdown&&this.onCountdown(n.duration||10);else if(n.type==="match-start")this.onMatchStart&&this.onMatchStart(),this.matchLive=!0;else if(n.type==="settings")this.roomSettings=n.settings,this.onSettings&&this.onSettings(n.settings);else if(n.type==="zombie-hit"){if(this.isHost&&this.enemyManager&&n.id&&typeof n.amount=="number"){const s=this.enemyManager.applyRemoteZombieHit(n.id,n.amount);typeof s=="number"&&this.sendZombieState(n.id,s)}}else if(n.type==="zombie-state")this.enemyManager&&n.id&&typeof n.health=="number"&&this.enemyManager.syncZombieState(n.id,n.health);else if(n.type==="player-dead")n.id&&(this.deadPeers.add(n.id),this.killRemote(n.id),this.onPeerDeath&&this.onPeerDeath(n.id));else if(n.type==="pong"&&typeof n.ts=="number"){const s=this._now()-n.ts;this.netStats.lastPing=s}}}catch(i){console.warn("Multiplayer parse error:",i)}}ensureRemote(t,e=null,i=null){if(!t||t===this.id||this.deadPeers&&this.deadPeers.has(t))return null;if(this.others.has(t))return this.others.get(t);const n=this.clonePlayerAvatar(e);if(n)return n.userData={...n.userData||{},gameId:t,gameName:"Player",color:e||this.color},this.applyColorToTorso(n,e||this.color),n.traverse(l=>{l.isMesh&&(l.castShadow=!1,l.receiveShadow=!0)}),this.scene.add(n),this.others.set(t,n),n.userData&&(n.userData.custom=i?{...i}:null),this.applyRemoteCustomization(n,i),n;const s=new j(.8,1.8,.8),o=new q({color:e||this.color,emissive:0,roughness:.7}),a=new I(s,o);return a.position.y=1,a.userData={gameId:t,gameName:"Player"},this.scene.add(a),this.others.set(t,a),a.userData&&(a.userData.custom=i?{...i}:null),this.applyRemoteCustomization(a,i),a}removeRemote(t){const e=this.others.get(t);if(e){if(e.userData&&e.userData.label&&e.userData.label.parentNode)try{e.userData.label.parentNode.removeChild(e.userData.label)}catch{}try{this.scene.remove(e)}catch{}this.others.delete(t)}this.remoteStates.delete(t)}killRemote(t){const e=this.others.get(t);if(e){try{e.rotation.x=-Math.PI/2,e.userData.dead=!0}catch{}setTimeout(()=>{this.removeRemote(t)},3500)}}clonePlayerAvatar(t=null){if(!this.player||!this.player.mesh)return null;try{const e=this.player.mesh.clone(!0),i={leftArm:null,rightArm:null,leftLeg:null,rightLeg:null};return e.traverse(n=>{if(n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material&&n.material.clone&&(n.material=n.material.clone()),n.geometry&&n.geometry.clone&&(n.geometry=n.geometry.clone()),t&&n.material&&!Array.isArray(n.material))){const s=n.userData&&n.userData.gameName?n.userData.gameName.toLowerCase():"";(s.includes("body")||s.includes("torso")||s.includes("shirt")||s.includes("clothes")||n.geometry&&n.geometry.parameters&&Math.abs(n.geometry.parameters.width-.6)<.05)&&(n.material=n.material.clone(),n.material.color=new Ct(t))}n.userData&&(n.userData={...n.userData}),n.name==="leftArmPivot"?i.leftArm=n:n.name==="rightArmPivot"?i.rightArm=n:n.name==="leftLegPivot"?i.leftLeg=n:n.name==="rightLegPivot"&&(i.rightLeg=n)}),e.userData={...e.userData||{},pivots:i},e}catch(e){return console.warn("Failed to clone player avatar:",e),null}}applyRemoteAnimation(t,e){var n,s,o,a;if(!e||!t||!t.userData)return;const i=t.userData.pivots||{};try{i.leftArm&&typeof((n=e==null?void 0:e.arms)==null?void 0:n.leftX)=="number"&&(i.leftArm.rotation.x=e.arms.leftX),i.rightArm&&typeof((s=e==null?void 0:e.arms)==null?void 0:s.rightX)=="number"&&(i.rightArm.rotation.x=e.arms.rightX),i.leftLeg&&typeof((o=e==null?void 0:e.legs)==null?void 0:o.leftX)=="number"&&(i.leftLeg.rotation.x=e.legs.leftX),i.rightLeg&&typeof((a=e==null?void 0:e.legs)==null?void 0:a.rightX)=="number"&&(i.rightLeg.rotation.x=e.legs.rightX)}catch{}}update(t){var d,g,f;if(this.updateRemoteInterpolation(),this.sampleNetRates(),!this.socket||this.socket.readyState!==WebSocket.OPEN||(this.lastSend+=t,this.heartbeatTimer+=t,this.player&&!this.player.isDead&&(this.lastPingSent+=t,this.lastPingSent>=this.pingInterval&&(this.sendPing(),this.lastPingSent=0)),this.lastSend<this.sendInterval)||(this.lastSend=0,!this.player||!this.player.mesh)||this.player.isDead)return;const e=this.player.mesh.position,i={arms:{leftX:this.player.leftArmPivot?this.player.leftArmPivot.rotation.x:0,rightX:this.player.rightArmPivot?this.player.rightArmPivot.rotation.x:0},legs:{leftX:this.player.leftLegPivot?this.player.leftLegPivot.rotation.x:0,rightX:this.player.rightLegPivot?this.player.rightLegPivot.rotation.x:0}};let n=0,s={x:0,z:1};if(this.player&&this.player.camera&&this.player.camera.getWorldDirection){const y=new P;this.player.camera.getWorldDirection(y),y.y=0,y.lengthSq()<1e-6&&this.player.mesh&&this.player.mesh.rotation?(n=this.player.mesh.rotation.y,s={x:Math.sin(n),z:Math.cos(n)}):(y.normalize(),n=Math.atan2(y.x,y.z),s={x:y.x,z:y.z})}else{const y=typeof this.player.yaw=="number"?this.player.yaw:this.player.mesh&&this.player.mesh.rotation?this.player.mesh.rotation.y:0;n=this._wrapAngle(y),s={x:Math.sin(n),z:Math.cos(n)}}n=this._wrapAngle(n+Math.PI),s={x:Math.sin(n),z:Math.cos(n)};const o={type:"state",pos:{x:e.x,y:e.y,z:e.z},rot:n,fwd:s,nick:this.nick,color:this.color,anim:i,ts:this._now(),custom:{...this.getCustomization()}};let a=!1;this.lastSentPos?e.distanceTo?a=e.distanceTo(new P(this.lastSentPos.x,this.lastSentPos.y,this.lastSentPos.z))>.015:a=Math.abs(e.x-(((d=this.lastSentPos)==null?void 0:d.x)||0))>.015||Math.abs(e.y-(((g=this.lastSentPos)==null?void 0:g.y)||0))>.015||Math.abs(e.z-(((f=this.lastSentPos)==null?void 0:f.z)||0))>.015:a=!0;const l=`${i.arms.leftX.toFixed(3)},${i.arms.rightX.toFixed(3)},${i.legs.leftX.toFixed(3)},${i.legs.rightX.toFixed(3)}`,c=this.lastAnimSig!==l,h=Math.abs(this._angleDiff(this.lastSentRot??n,n))>.02,u=this.heartbeatTimer>=5;if(a||c||h||u){const y=JSON.stringify(o);try{this.socket.send(y)}catch{}this.trackTx(y.length),this.lastSentPos={x:e.x,y:e.y,z:e.z},this.lastAnimSig=l,this.lastSentRot=n,u&&(this.heartbeatTimer=0)}}dispose(){if(this._manualClose=!0,this.socket)try{this.socket.close()}catch{}this.others.forEach(t=>{try{this.scene.remove(t)}catch{}}),this.others.clear()}updateLabel(t,e){if(t.userData&&t.userData.label)try{t.userData.label.style.display="none"}catch{}t.userData&&(t.userData.nick=e||"Player")}sendHit(t,e){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!t||typeof e!="number")return;const n=JSON.stringify({type:"hit",targetId:t,amount:e});try{this.socket.send(n)}catch{}this.trackTx(n.length)}getPeerCount(){return 1+this.others.size}sendJoin(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN))try{const t=JSON.stringify({type:"join",room:this.roomCode,nick:this.nick,color:this.color,custom:this.getCustomization()});this.socket.send(t),this.trackTx(t.length)}catch{}}sendStart(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN))try{const t=JSON.stringify({type:"start"});this.socket.send(t),this.trackTx(t.length)}catch{}}sendSettings(t){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN)&&!(!this.isHost||!t))try{const e=JSON.stringify({type:"settings",settings:t});this.socket.send(e),this.trackTx(e.length)}catch{}}sendDeath(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN)&&this.id)try{const t=JSON.stringify({type:"player-dead",id:this.id});this.socket.send(t),this.trackTx(t.length)}catch{}}isMatchLive(){return this.matchLive===!0}resetMatchState(){this.deadPeers.clear(),this.matchLive=!1}bufferRemoteState(t,e){if(!t||!e)return;const i=this.remoteStates.get(t)||[];if(typeof e.rot=="number"){const n=this.remoteLastYaw.get(t),s=this._unwrapAngle(e.rot,n);e.rot=s,this.remoteLastYaw.set(t,s)}for(i.push(e);i.length>24;)i.shift();this.remoteStates.set(t,i)}applyRemoteCustomization(t,e){if(!t||!e)return;const i=t.getObjectByName("playerHead");if(!i)return;this.removeNodesByRole(i,"playerMouth");const n=this._buildMouthMesh(e.mouthStyle||"serious");n&&i.add(n),this.setHatVisibility(i,e.showHat!==!1)}removeNodesByRole(t,e){if(!t)return;const i=[];t.traverse(n=>{n.userData&&n.userData.role===e&&i.push(n)}),i.forEach(n=>{n.parent&&n.parent.remove(n)})}setHatVisibility(t,e){t&&t.traverse(i=>{i.userData&&i.userData.role==="playerHat"&&(i.visible=e)})}_buildMouthMesh(t){const e=(t||"serious").toLowerCase(),i=new q({color:2824976,roughness:.6,metalness:0});let n=null;if(e==="smile"){const s=new Et;s.userData={role:"playerMouth"},s.name="playerMouth";const o=i.clone(),a=new I(new j(.08,.04,.02),o),l=a.clone(),c=a.clone();a.position.set(-.1,-.15,.26),a.rotation.z=-.2,l.position.set(0,-.16,.26),c.position.set(.1,-.15,.26),c.rotation.z=.2,[a,l,c].forEach(h=>{h.userData={role:"playerMouth"},h.name="playerMouthSeg"}),s.add(a,l,c),n=s}else if(e==="angry"){const s=new q({color:5901324,roughness:.4});n=new I(new j(.26,.05,.02),s),n.position.set(0,-.16,.26),n.rotation.z=-.18}else if(e==="surprised")n=new I(new oe(.06,.06,.02,20),i),n.position.set(0,-.14,.26),n.rotation.x=Math.PI/2;else{if(e==="none")return null;n=new I(new j(.22,.06,.02),i),n.position.set(0,-.16,.26)}return n.castShadow=!1,n.receiveShadow=!1,n.userData||(n.userData={}),n.userData.role="playerMouth",n.name=n.name||"playerMouth",n}updateRemoteInterpolation(){if(!this.remoteStates||this.remoteStates.size===0)return;const e=this._now()-this.interpDelayMs;this.remoteStates.forEach((i,n)=>{var J,L,N,W,K,Y,$,Z,tt,et,H,Q,at,yt,xt,At,_t,Tt;if(!i||i.length===0)return;const s=this.others.get(n);if(!s)return;for(;i.length>2&&e-i[0].t>this.maxBufferMs;)i.shift();const o=i[i.length-1];let a=i[0],l=o;for(let Mt=1;Mt<i.length;Mt++)if(i[Mt].t>=e){a=i[Mt-1]||i[Mt],l=i[Mt];break}const c=l.t-a.t;let h=c>0?(e-a.t)/c:1;if(e>o.t&&e-o.t<=this.maxExtrapMs&&i.length>=2){const Mt=i[i.length-2],B=Math.max(1,o.t-Mt.t),ne=(o.pos.x-Mt.pos.x)/B,wt=(o.pos.y-Mt.pos.y)/B,Lt=(o.pos.z-Mt.pos.z)/B,gt=e-o.t;this._tmpVec.set(o.pos.x+ne*gt,o.pos.y+wt*gt,o.pos.z+Lt*gt),s.position.copy(this._tmpVec),s.rotation&&(typeof o.rot=="number"?s.rotation.y=this._wrapAngle(o.rot+this.remoteFaceOffset):o.fwd&&typeof o.fwd.x=="number"&&typeof o.fwd.z=="number"&&(s.rotation.y=this._wrapAngle(Math.atan2(o.fwd.x,o.fwd.z)+this.remoteFaceOffset))),this.applyRemoteAnimation(s,o.anim),this.updateLabel(s,o.nick);return}h=Math.min(1,Math.max(0,h));const u=((J=a.pos)==null?void 0:J.x)??0,d=((L=a.pos)==null?void 0:L.y)??0,g=((N=a.pos)==null?void 0:N.z)??0,f=((W=l.pos)==null?void 0:W.x)??u,y=((K=l.pos)==null?void 0:K.y)??d,p=((Y=l.pos)==null?void 0:Y.z)??g;this._tmpVec.set(u+(f-u)*h,d+(y-d)*h,g+(p-g)*h),s.position.copy(this._tmpVec);const m=typeof a.rot=="number"?a.rot:typeof(($=a.fwd)==null?void 0:$.x)=="number"&&typeof((Z=a.fwd)==null?void 0:Z.z)=="number"?Math.atan2(a.fwd.x,a.fwd.z):s.rotation.y||0,_=typeof l.rot=="number"?l.rot:typeof((tt=l.fwd)==null?void 0:tt.x)=="number"&&typeof((et=l.fwd)==null?void 0:et.z)=="number"?Math.atan2(l.fwd.x,l.fwd.z):m,v=m+this.remoteFaceOffset,x=_+this.remoteFaceOffset,T=Mt=>{for(;Mt>Math.PI;)Mt-=Math.PI*2;for(;Mt<-Math.PI;)Mt+=Math.PI*2;return Mt},b=x-v,C=v+b*h;s.rotation&&(s.rotation.y=T(C+this.remoteFaceOffset));const D=(Mt,B)=>(typeof Mt!="number"&&(Mt=0),typeof B!="number"&&(B=Mt),Mt+(B-Mt)*h),M=a.anim||{},w=l.anim||{},F={arms:{leftX:D((H=M==null?void 0:M.arms)==null?void 0:H.leftX,(Q=w==null?void 0:w.arms)==null?void 0:Q.leftX),rightX:D((at=M==null?void 0:M.arms)==null?void 0:at.rightX,(yt=w==null?void 0:w.arms)==null?void 0:yt.rightX)},legs:{leftX:D((xt=M==null?void 0:M.legs)==null?void 0:xt.leftX,(At=w==null?void 0:w.legs)==null?void 0:At.leftX),rightX:D((_t=M==null?void 0:M.legs)==null?void 0:_t.rightX,(Tt=w==null?void 0:w.legs)==null?void 0:Tt.rightX)}};this.applyRemoteAnimation(s,F);const O=l.custom||a.custom||(s.userData?s.userData.custom:null);this.applyRemoteCustomization(s,O),s.userData&&(s.userData.custom=O?{...O}:null),this.updateLabel(s,l.nick||a.nick)})}sendPing(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN)return;const t={type:"ping",ts:this._now()},e=JSON.stringify(t);try{this.socket.send(e)}catch{}this.trackTx(e.length)}trackTx(t){!t||t<=0||(this.netStats.txBytes+=t)}sendZombieHit(t,e){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!t||typeof e!="number")return;const i=JSON.stringify({type:"zombie-hit",id:t,amount:e});try{this.socket.send(i)}catch{}this.trackTx(i.length)}sendZombieState(t,e){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!t||typeof e!="number")return;const i=JSON.stringify({type:"zombie-state",id:t,health:e});try{this.socket.send(i)}catch{}this.trackTx(i.length)}trackRx(t){!t||t<=0||(this.netStats.rxBytes+=t)}sampleNetRates(){const t=this._now(),e=t-this.netStats.lastSample;if(e<1e3)return;const i=e/1e3,n=this.netStats.txBytes/i,s=this.netStats.rxBytes/i;for(this.netStats.txPerSec=n,this.netStats.rxPerSec=s,this.netStats.history.push({t,tx:n,rx:s,ping:this.netStats.lastPing||null});this.netStats.history.length>60;)this.netStats.history.shift();this.netStats.txBytes=0,this.netStats.rxBytes=0,this.netStats.lastSample=t}getNetStats(){return this.netStats}getCustomization(){return this.player?{mouthStyle:this.player.mouthStyle||"serious",showHat:this.player.showHat!==!1}:{mouthStyle:"serious",showHat:!0}}setEnemyManager(t){this.enemyManager=t}_wrapAngle(t){let e=t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}_angleDiff(t,e){return this._wrapAngle(t-e)}_unwrapAngle(t,e){if(typeof e!="number")return t;let i=t,n=i-e;for(;n>Math.PI;)i-=Math.PI*2,n=i-e;for(;n<-Math.PI;)i+=Math.PI*2,n=i-e;return i}}function xm({maxLines:r=400,autoShow:t=!1}={}){const e=[],i={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)},n=document.createElement("div");n.id="debug-overlay",n.className="debug-overlay hidden";const s=document.createElement("div");s.className="debug-overlay-header",s.innerHTML="<strong>DEBUG</strong>";const o=document.createElement("div");o.className="debug-overlay-actions";const a=document.createElement("button");a.textContent="Clear";const l=document.createElement("button");l.textContent="Close",o.appendChild(a),o.appendChild(l),s.appendChild(o);const c=document.createElement("div");c.className="debug-overlay-list",n.appendChild(s),n.appendChild(c),document.body.appendChild(n),s.style.cursor="move";let h=!1,u=0,d=0;function g(T){if(!h)return;const b=Math.max(0,Math.min(window.innerWidth-n.offsetWidth,T.clientX-u)),C=Math.max(0,Math.min(window.innerHeight-n.offsetHeight,T.clientY-d));n.style.left=b+"px",n.style.top=C+"px",n.style.right="auto"}function f(T){h=!1,window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",f);try{T&&T.pointerId&&n.releasePointerCapture&&n.releasePointerCapture(T.pointerId)}catch{}}s.addEventListener("pointerdown",T=>{try{const b=n.getBoundingClientRect();n.style.left=b.left+"px",n.style.top=b.top+"px",n.style.position="fixed",n.style.transform="none",n.style.right="auto",u=T.clientX-b.left,d=T.clientY-b.top,h=!0,window.addEventListener("pointermove",g),window.addEventListener("pointerup",f);try{n.setPointerCapture&&n.setPointerCapture(T.pointerId)}catch{}}catch{}},{passive:!1});function y(){c.innerHTML="";const T=Math.max(0,e.length-r);for(let b=T;b<e.length;b++){const C=document.createElement("div");C.className="debug-line debug-"+e[b].level;const D=new Date(e[b].ts).toLocaleTimeString();C.textContent=`[${D}] ${e[b].level.toUpperCase()}: ${e[b].msg}`,c.appendChild(C)}c.scrollTop=c.scrollHeight}function p(T,b){try{const C=b.map(D=>{try{return typeof D=="string"?D:JSON.stringify(D)}catch{return String(D)}}).join(" ");e.push({level:T,msg:C,ts:Date.now()}),e.length>r*2&&e.splice(0,e.length-r*2),y()}catch{}}console.log=function(...T){i.log(...T),p("log",T)},console.info=function(...T){i.info(...T),p("info",T)},console.warn=function(...T){i.warn(...T),p("warn",T)},console.error=function(...T){i.error(...T),p("error",T)};function m(T,b,C,D,M){typeof T=="string"?p("error",[T+" "+(b||"")+":"+(C||"?")]):T&&T.message&&p("error",[T.message,T.error||M])}function _(T){try{p("error",["UnhandledRejection",T&&T.reason?T.reason:T])}catch{}}window.addEventListener("error",m),window.addEventListener("unhandledrejection",_),a.addEventListener("click",()=>{e.length=0,y()}),l.addEventListener("click",()=>x());function v(){n.classList.remove("hidden")}function x(){n.classList.add("hidden")}return t&&v(),{show:v,hide:x,destroy(){console.log=i.log,console.info=i.info,console.warn=i.warn,console.error=i.error,window.removeEventListener("error",m),window.removeEventListener("unhandledrejection",_);try{n.remove()}catch{}},logs:e}}const Ti=(()=>{try{return typeof navigator>"u"?!1:/Mobi|Android|iPhone|iPad|Tablet|Mobile/i.test(navigator.userAgent)||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}catch{return!1}})();window.addEventListener("unhandledrejection",r=>{try{const t=r.reason,e=t&&t.message?t.message:String(t);if(e&&e.includes("If you see this error we have a bug")){console.warn("Suppressed Chromium UnknownError:",e),r.preventDefault&&r.preventDefault();return}}catch{}});class Rr{constructor(){this.scene=new Ep,this.scene.background=new Ct(8900331),this.scene.fog=new wr(8900331,20,100),this._animationStarted=!1,this._selectedMode="arcade",this._defaultRandom=Math.random,this._currentRandomSeed=null,this.matchSettings=null,this.lastPlaySettings=null,this.aiObjects=[],this.aiMaxAiObjects=200,this.renderer=new qa({antialias:!0});const t=Ti?1:1.5;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=sl,document.getElementById("game-container").appendChild(this.renderer.domElement),this._renderScaleApplied=this.renderer.getPixelRatio(),this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0,this.forceFixedMultiplayerSpawn=!1;const e=new fa(16777215,.6);this.scene.add(e);const i=new sr(16777215,.8);i.position.set(50,100,50),i.castShadow=!0,i.shadow.camera.left=-100,i.shadow.camera.right=100,i.shadow.camera.top=100,i.shadow.camera.bottom=-100,i.shadow.camera.near=.1,i.shadow.camera.far=160,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,this.scene.add(i),this.dirLight=i,this.camera=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),this.clock=new Lp,this._pickRaycaster=new Xe,this._objectClickHandler=null,this._objectClickTarget=null,this._longPressTimer=null,this.hotkeyModalVisible=!1,this.isPaused=!1,this.pauseMenu=document.getElementById("pause-menu"),this.bgAudio=null,this.bgMusicVolume=.5,this._endSequenceAudio=null,this._prevBgVolume=null,this.autoPerfEnabled=!1,this._autoPerfTimer=0,this._renderScaleApplied=1,this.sfxVolume=.7,document.addEventListener("keydown",n=>{if(n.code==="Escape"&&this.togglePause(),this.player&&this.player.gameMode==="studio")if(n.code==="KeyL")try{this.spawnStudioDrops()}catch(s){console.warn("Studio drop failed:",s)}else n.code==="KeyH"&&this.toggleHotkeyModal(!this.hotkeyModalVisible)}),this.setupMenu(),this.setupLongPressMenu(),this.setMenuOpenState(!0),document.addEventListener("pointerlockerror",n=>{n.preventDefault&&n.preventDefault(),console.warn("Pointer lock request failed or was cancelled.")})}applyGraphicsSettings(t={}){if(!this.renderer)return;const e=!!t.performanceMode,i=Math.max(.5,Math.min(1,(t.renderScale||100)/100)),n=Ti?1:e?1.25:1.5,s=Math.min((window.devicePixelRatio||1)*i,n);this.renderer.setPixelRatio(s),this.renderer.setSize(window.innerWidth,window.innerHeight);const o=!e;if(this.renderer.shadowMap.enabled=o,this.dirLight&&this.dirLight.shadow){this.dirLight.castShadow=o;const a=e?512:1024;this.dirLight.shadow.mapSize.width=a,this.dirLight.shadow.mapSize.height=a}}applyDeterministicRandom(t){if(!t)return;this._currentRandomSeed=t;const e=String(t);let i=1779033703^e.length;for(let o=0;o<e.length;o++)i=Math.imul(i^e.charCodeAt(o),3432918353),i=i<<13|i>>>19;i=Math.imul(i^i>>>16,2246822507),i=(i^i>>>13)>>>0;let n=i;Math.random=()=>{n=n+1831565813|0;let o=Math.imul(n^n>>>15,1|n);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}spawnStudioDrops(){if(!(!this.itemManager||!this.player||this.player.gameMode!=="studio"))try{for(let t=0;t<3;t++)this.itemManager.spawnMatrixDropNearPlayer()}catch(t){console.warn("spawnStudioDrops error:",t)}}toggleHotkeyModal(t){const e=document.getElementById("hotkey-modal");e&&(e.classList.toggle("hidden",!t),e.setAttribute("aria-hidden",t?"false":"true"),this.hotkeyModalVisible=t)}toggleTouchLookArea(t){try{if(!this.touchControls)return;t?this.touchControls.lookArea?this.touchControls.lookArea.style.display="":this.touchControls.rebuildLookArea&&this.touchControls.rebuildLookArea():this.touchControls.destroyLookArea?this.touchControls.destroyLookArea():this.touchControls.lookArea&&(this.touchControls.lookArea.style.display="none")}catch{}}setHotbarVisible(t){const e=document.getElementById("hotbar");e&&(e.style.display=t?"flex":"none")}setMenuOpenState(t){document.body.classList.toggle("menu-open",!!t)}updateDebugToggleVisibility(t){const e=document.getElementById("debug-toggle-btn");if(e&&(e.classList.toggle("hidden",!t),!t&&window.debugOverlay&&typeof window.debugOverlay.hide=="function")){try{window.debugOverlay.hide()}catch{}try{localStorage.removeItem("showDebugOverlay")}catch{}}}assignMultiplayerSpawn(){if(!this.player||!this.world)return;const t=this.world&&typeof this.world.halfMapSize=="number"?this.world.halfMapSize-5:100;let e=null;const i=this._defaultRandom||Math.random;if(this.forceFixedMultiplayerSpawn)e={x:0,y:this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(0,0):0,z:0};else for(let n=0;n<12;n++){const s=(i()*2-1)*t,o=(i()*2-1)*t;let a=0;if(this.world&&typeof this.world.getHeightAt=="function"&&(a=this.world.getHeightAt(s,o)),!this.multiplayer||this.multiplayer.others.size===0||Array.from(this.multiplayer.others.values()).every(c=>{if(!c||!c.position)return!0;const h=c.position.x-s,u=c.position.z-o;return Math.sqrt(h*h+u*u)>15})){e={x:s,y:a,z:o};break}}e||(e={x:0,y:0,z:0}),this.player.mesh.position.set(e.x,e.y,e.z),this.player.controls&&this.player.controls.getObject&&this.player.controls.getObject().position.set(e.x,e.y+1.6,e.z),this.player.camera&&this.player.camera.position.set(e.x,e.y+1.6,e.z)}setupMultiplayerLobbyUI(){const t=document.getElementById("mp-lobby"),e=document.getElementById("mp-start-btn"),i=document.getElementById("mp-lobby-status");if(!t||!e||!i)return;t.classList.remove("hidden");const n=this.multiplayer&&this.multiplayer.roomCode?this.multiplayer.roomCode:"PUBLIC";i.innerText=`Waiting in lobby (Room: ${n})`,e.classList.toggle("hidden",!(this.multiplayer&&this.multiplayer.isHost)),e.onclick=()=>{if(!this.multiplayer||!this.multiplayer.isHost)return;const s=typeof this.multiplayer.getPeerCount=="function"?Math.max(0,this.multiplayer.getPeerCount()-1):0,o=this.enemyManager?typeof this.enemyManager.targetCount=="number"?this.enemyManager.targetCount:this.enemyManager.enemies?this.enemyManager.enemies.length:0:0;if(s<=0&&o<=0){alert("Need at least 1 remote player or 1 NPC zombie before starting the match.");return}this.beginLobbyCountdown(10),this.multiplayer.sendStart()},this.lobbyCountdown=0,this.updateLobbyUI(this.multiplayer?this.multiplayer.isHost:!1)}updateLobbyUI(t){const e=document.getElementById("mp-start-btn");e&&e.classList.toggle("hidden",!t)}beginLobbyCountdown(t=10){this.matchPhase="countdown",this.lobbyCountdown=t;const e=document.getElementById("mp-lobby"),i=document.getElementById("mp-lobby-countdown");e&&e.classList.remove("hidden"),i&&(i.innerText=`Starting in ${Math.ceil(this.lobbyCountdown)}...`)}startMultiplayerMatch(){this.matchPhase="live",this.multiplayer&&(this.multiplayer.matchLive=!0),this.refreshMultiplayerTargets();const t=document.getElementById("mp-lobby");t&&t.classList.add("hidden"),this.lobbyCountdown=0}checkMultiplayerVictory(){if(!this.multiplayer)return;const t=this.multiplayer.deadPeers||new Set;let e=0;this.multiplayer.others&&this.multiplayer.others.size>0&&this.multiplayer.others.forEach((s,o)=>{t.has(o)||s&&s.userData&&s.userData.dead||(e+=1)});const i=this.player&&!this.player.isDead;(i?1:0)+e===1&&i&&(this.hud&&typeof this.hud.showVictory=="function"&&this.hud.showVictory(),this.multiplayer&&(this.multiplayer.matchLive=!1))}setupMenu(){const t=document.getElementById("main-menu"),e=document.getElementById("play-btn"),i=document.getElementById("setting-difficulty"),n=document.getElementById("setting-enemies"),s=document.getElementById("setting-storm"),o=document.getElementById("setting-storm-enabled"),a=document.getElementById("setting-map-size"),l=document.getElementById("map-size-val"),c=document.getElementById("setting-debug"),h=document.getElementById("setting-minimap"),u=document.getElementById("setting-music-volume"),d=document.getElementById("setting-music-volume-val"),g=document.getElementById("setting-sfx-volume"),f=document.getElementById("setting-sfx-volume-val"),y=document.getElementById("setting-camera"),p=document.getElementById("setting-mouth-style"),m=document.getElementById("setting-show-hat"),_=document.getElementById("setting-performance-mode"),v=document.getElementById("setting-auto-performance"),x=document.getElementById("setting-render-scale"),T=document.getElementById("render-scale-val"),b=document.getElementById("setting-touch-controls"),C=document.getElementById("setting-fullscreen"),D=document.getElementById("setting-game-mode"),M=document.getElementById("quit-btn"),w=document.getElementById("active-mode-label"),F=document.getElementById("active-mode-chip"),O=document.getElementById("float-btn"),J=document.getElementById("setting-openai-key"),L=document.getElementById("setting-groq-key"),N=document.getElementById("setting-nvidia-key"),W=document.getElementById("setting-mp-server"),K=document.getElementById("setting-mp-seed"),Y=document.getElementById("setting-mp-room"),$=document.getElementById("mp-room-generate"),Z=document.getElementById("setting-mp-nickname"),tt=document.getElementById("setting-mp-color"),et=document.getElementById("setting-mp-zombies"),H=document.getElementById("setting-mp-fixed-spawn"),Q=document.getElementById("setting-language"),at=document.getElementById("hotkey-hint"),yt=document.getElementById("hotkey-modal"),xt=document.getElementById("hotkey-modal-close"),At=document.getElementById("setting-arena-time"),_t=document.getElementById("arena-time-val"),Tt=document.getElementById("setting-arena-respawn"),Mt=document.getElementById("setting-matrix-infinite-ammo"),B=document.getElementById("setting-matrix-show-ui"),ne=document.getElementById("setting-matrix-ai-autospawn"),wt=document.getElementById("setting-matrix-ai-hints"),Lt=document.getElementById("setting-studio-flight"),gt=document.getElementById("setting-studio-show-grid"),Qt=document.getElementById("dash-toggle"),kt=document.getElementById("perf-toggle"),A=document.getElementById("enemy-count-val"),S=document.getElementById("storm-time-val"),k=(z,ot)=>{if(!z||!ot)return;const dt=()=>{ot.innerText=z.value};z.addEventListener("input",dt),z.addEventListener("change",dt),dt()},nt=(z,ot)=>{if(!(typeof window>"u"||!window.localStorage))try{const dt=window.localStorage.getItem("voxel-firecraft-settings"),lt=dt?JSON.parse(dt):{};lt[z]=ot,window.localStorage.setItem("voxel-firecraft-settings",JSON.stringify(lt))}catch{}},it=(z,ot)=>{z&&(z.addEventListener("pointerdown",dt=>{try{dt.preventDefault(),dt.stopPropagation()}catch{}}),z.addEventListener("click",dt=>{try{dt.preventDefault(),dt.stopPropagation()}catch{}const lt=document.getElementById(ot);if(!lt)return;const Dt=lt.classList.toggle("collapsed");Array.from(lt.children).forEach(jt=>{jt!==z&&(jt.style.display=Dt?"none":"")}),z.innerText=Dt?"+":"–"}))};it(Qt,"dashboard"),it(kt,"perf-dashboard");const rt=localStorage.getItem("voxel-firecraft-settings");if(rt){const z=JSON.parse(rt);if(z.gameMode==="survival"&&(z.gameMode="arcade"),i.value=z.difficulty,n.value=z.enemyCount,s.value=z.stormTime,A.innerText=z.enemyCount,S.innerText=z.stormTime,o&&(o.checked=z.stormEnabled!==!1),a&&l){const ot=z.mapSize||ms;a.value=ot,l.innerText=ot}if(z.debugMode&&(c.checked=!0),h&&(h.checked=z.showMinimap!==!1),C&&(C.checked=!!z.fullscreen),z.musicVolume!==void 0&&u&&d){const ot=parseInt(z.musicVolume,10);u.value=ot,d.innerText=ot,this.bgMusicVolume=ot/100}if(g&&f&&z.sfxVolume!==void 0){const ot=parseInt(z.sfxVolume,10);g.value=ot,f.innerText=ot,this.sfxVolume=ot/100}if(z.cameraMode&&(y.value=z.cameraMode),p&&z.mouthStyle&&(p.value=z.mouthStyle),m&&(m.checked=z.showHat!==!1),_&&(_.checked=!!z.performanceMode),v&&(v.checked=!!z.autoPerformance),x&&T){const ot=z.renderScale||100;x.value=ot,T.innerText=ot}if(z.useTouchControls!==void 0&&b&&(b.checked=!!z.useTouchControls),z.gameMode&&D&&(D.value=z.gameMode),z.gameMode&&(this._selectedMode=z.gameMode),Q&&z.language&&(Q.value=z.language),J&&(J.value=z.openaiKey||""),L&&(L.value=z.groqKey||""),N&&(N.value=z.nvidiaKey||""),W&&(W.value=z.mpServer||""),K&&(K.value=z.mpSeed||""),Y&&(Y.value=z.mpRoom||""),Z&&(Z.value=z.mpNick||""),tt&&(tt.value=z.mpColor||"#29b6f6"),et&&(et.checked=z.mpZombies!==!1),H&&(H.checked=!!z.mpFixedSpawn),At&&_t){const ot=z.arenaTime||parseInt(At.value,10)||180;At.value=ot,_t.innerText=ot}Tt&&(Tt.checked=z.arenaRespawn!==!1),Mt&&(Mt.checked=z.matrixInfiniteAmmo!==!1),B&&(B.checked=z.matrixShowUI!==!1),ne&&(ne.checked=z.matrixAiAutospawn!==!1),wt&&(wt.checked=z.matrixAiHints!==!1),Lt&&(Lt.checked=z.studioFlight!==!1),gt&&(gt.checked=z.studioShowGrid!==!1)}k(n,A),k(s,S),k(a,l),k(At,_t),k(x,T),k(g,f),v&&v.addEventListener("change",()=>{const z=this.lastPlaySettings||{};z.autoPerformance=v.checked,this.autoPerfEnabled=z.autoPerformance,nt("autoPerformance",z.autoPerformance)}),_&&_.addEventListener("change",()=>{const z=this.lastPlaySettings||{};z.performanceMode=_.checked,this.applyGraphicsSettings(z),nt("performanceMode",_.checked)}),x&&x.addEventListener("change",()=>{const z=this.lastPlaySettings||{};z.renderScale=parseInt(x.value,10),this.applyGraphicsSettings(z),nt("renderScale",z.renderScale)}),m&&m.addEventListener("change",()=>{this.player&&typeof this.player.setHatVisible=="function"&&this.player.setHatVisible(m.checked),nt("showHat",m.checked)}),e.onclick=()=>{const z=this._selectedMode||"arcade";if(z==="multiplayer"&&this.multiplayer&&!this.multiplayer.isHost&&!this.multiplayer.roomSettings){alert("Waiting for host settings. Please try again in a moment.");return}const ot={difficulty:z==="survival"?document.getElementById("setting-survival-difficulty")?document.getElementById("setting-survival-difficulty").value:"medium":i.value,enemyCount:parseInt(n.value),stormTime:parseInt(s.value),stormEnabled:o?o.checked:!0,mapSize:a?parseInt(a.value):ms,debugMode:c.checked,showMinimap:h?h.checked:!0,musicVolume:u?parseInt(u.value):Math.round(this.bgMusicVolume*100),musicEnabled:document.getElementById("setting-music-enabled")?document.getElementById("setting-music-enabled").checked:!0,cameraMode:y.value,mouthStyle:p?p.value:"serious",showHat:m?m.checked:!0,performanceMode:_?_.checked:!1,autoPerformance:v?v.checked:!1,renderScale:x?parseInt(x.value,10):100,sfxVolume:g?parseInt(g.value,10):70,language:Q?Q.value:"en",useTouchControls:b?b.checked:!1,fullscreen:C?C.checked:!1,gameMode:z,openaiKey:J?J.value:"",groqKey:L?L.value:"",nvidiaKey:N?N.value:"",mpServer:W?W.value:"",mpSeed:K?K.value.trim():"",mpRoom:Y?Y.value:"",mpNick:Z?Z.value:"",mpColor:tt?tt.value:"#29b6f6",mpZombies:et?et.checked:!0,mpFixedSpawn:H?H.checked:!1,arenaTime:At?parseInt(At.value,10):180,arenaRespawn:Tt?Tt.checked:!0,matrixInfiniteAmmo:Mt?Mt.checked:!0,matrixShowUI:B?B.checked:!0,matrixAiAutospawn:ne?ne.checked:!0,matrixAiHints:wt?wt.checked:!0,studioFlight:Lt?Lt.checked:!0,studioShowGrid:gt?gt.checked:!0};this.lastPlaySettings=ot,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(ot)),this.updateDebugToggleVisibility(ot.debugMode),this.applyGraphicsSettings(ot),t.style.display="none",this.setMenuOpenState(!1),ot.musicEnabled!==!1?this.playBackgroundMusic():this.stopBackgroundMusic(),this.requestFullscreenIfNeeded(ot.fullscreen);const dt=this.player&&this.world&&this.enemyManager,lt=dt&&this.player&&this.player.gameMode===z;if(dt&&!lt&&this.resetGameState(),this.player&&this.world&&this.enemyManager&&lt){if(this.isPaused=!1,this.clock.getDelta(),e.innerText="PLAY GAME",this.player)try{this.player.lockControls()}catch{}if(this.hud&&(this.hud.settings=ot),this.world){this.world.stormEnabled=ot.stormEnabled!==!1;const Dt=this.world.stormEnabled&&this.world.gameMode!=="matrix"&&this.world.gameMode!=="studio"&&this.world.gameMode!=="matrix-ai";this.world.stormMesh?this.world.stormMesh.visible=Dt:Dt&&typeof this.world.createStormVisuals=="function"&&this.world.createStormVisuals()}this.player&&(this.player.mouthStyle=ot.mouthStyle||"serious",typeof this.player.createMouth=="function"&&this.player.createMouth(this.player.mouthStyle)),this.setHotbarVisible(!0)}else e.innerText="PLAY GAME",this.startGame(ot);if(at){const Dt=ot&&ot.gameMode==="studio";at.classList.toggle("hidden",!Dt)}},M&&(M.onclick=()=>{this.multiplayer&&typeof this.multiplayer.dispose=="function"&&this.multiplayer.dispose(),location.reload()}),O&&O.classList.add("hidden"),$&&Y&&($.onclick=()=>{const z=Math.random().toString(36).substr(2,5).toUpperCase();Y.value=z;try{const ot=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");ot.mpRoom=z,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(ot))}catch{}}),at&&(at.onclick=()=>this.toggleHotkeyModal(!0)),xt&&(xt.onclick=()=>this.toggleHotkeyModal(!1)),yt&&yt.addEventListener("click",z=>{z.target===yt&&this.toggleHotkeyModal(!1)}),u&&(u.oninput=()=>{const z=parseInt(u.value,10);if(d&&(d.innerText=z),this.bgMusicVolume=z/100,this.bgAudio)try{this.bgAudio.volume=this.bgMusicVolume}catch{}});const St=document.getElementById("setting-music-enabled");St&&(St.onchange=()=>{St.checked?this.playBackgroundMusic():this.stopBackgroundMusic()}),b&&(b.onchange=()=>{try{const z=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");z.useTouchControls=b.checked,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(z))}catch{}}),this.setHotbarVisible(!1),this.setMenuOpenState(!0);const ut=Array.from(document.querySelectorAll(".tab-btn")),vt=document.querySelectorAll(".tab-panel"),Rt=z=>{if(!z)return;const ot=z.getAttribute("data-tab");ut.forEach(lt=>lt.classList.toggle("active",lt===z)),vt.forEach(lt=>{lt.id===ot?lt.classList.remove("hidden"):lt.classList.add("hidden")});const dt=z.getAttribute("data-mode");dt&&D&&(D.value=dt,w&&(w.innerText=z.innerText),F&&(F.innerText=z.innerText)),dt&&(this._selectedMode=dt)};ut.forEach(z=>z.addEventListener("click",()=>Rt(z)));const Ft=this._selectedMode||(D?D.value:null),qt=(Ft?ut.find(z=>z.getAttribute("data-mode")===Ft):null)||ut.find(z=>z.classList.contains("active"))||ut[0];Rt(qt)}resetGameState(){if(this.multiplayer&&typeof this.multiplayer.resetMatchState=="function"&&this.multiplayer.resetMatchState(),this.multiplayer&&typeof this.multiplayer.dispose=="function")try{this.multiplayer.dispose()}catch(t){console.warn("Dispose multiplayer failed:",t)}this.multiplayer=null,this.multiplayerEnemyBaseCount=0,this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0,this.isPaused=!1,this.forceFixedMultiplayerSpawn=!1,this.matchSettings=null;try{this.scene.clear()}catch(t){console.warn("Scene clear failed:",t)}try{const t=new fa(16777215,.6);this.scene.add(t);const e=new sr(16777215,.8);e.position.set(50,100,50),e.castShadow=!0,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,e.shadow.camera.near=.1,e.shadow.camera.far=160,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,this.scene.add(e)}catch(t){console.warn("Rebuild lights failed:",t)}this.player=null,this.world=null,this.enemyManager=null,this.itemManager=null,this.hud=null,this.matchSettings=null,this.lastPlaySettings=null,Math.random=this._defaultRandom,this._currentRandomSeed=null,this.multiplayer&&typeof this.multiplayer.resetMatchState=="function"&&this.multiplayer.resetMatchState()}startGame(t){this.clearAiObjects(),this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0,this.victoryShown=!1;const e={...t};if(this.forceFixedMultiplayerSpawn=e.gameMode==="multiplayer"?!!t.mpFixedSpawn:!1,e.gameMode==="multiplayer"){const c=this.multiplayer&&!this.multiplayer.isHost&&this.multiplayer.roomSettings?this.multiplayer.roomSettings:null;if(!this.multiplayer||this.multiplayer.isHost||!c){const h=t.mpSeed||Math.random().toString(36).slice(2);this.matchSettings={mapSize:t.mapSize,enemyCount:t.enemyCount,stormEnabled:!1,seed:h,fixedSpawn:!!t.mpFixedSpawn}}else this.matchSettings=c;this.matchSettings&&(e.mapSize=this.matchSettings.mapSize,e.enemyCount=this.matchSettings.enemyCount,e.stormEnabled=this.matchSettings.stormEnabled,this.forceFixedMultiplayerSpawn=!!this.matchSettings.fixedSpawn,this.applyDeterministicRandom(this.matchSettings.seed||"mp-seed"))}if((e.gameMode==="matrix"||e.gameMode==="studio")&&(e.enemyCount=0,e.skipLoot=!0),e.gameMode==="multiplayer"&&(e.skipLoot=!0,e.stormEnabled=!1,t.mpZombies===!1&&(e.enemyCount=0)),e.gameMode==="survival"&&(e.stormEnabled=!1,e.mapSize=Math.max(100,e.mapSize)),this.survivalStartTime=performance.now(),this.survivalTime=0,this.lootDropEligible=!1,this.lootDropCooldown=0,this.multiplayerEnemyBaseCount=e.enemyCount||0,this.player=new Pr(this.camera,this.scene,null,e),typeof t.sfxVolume<"u"&&(this.player.sfxVolume=Math.max(0,Math.min(1,t.sfxVolume/100))),t&&t.mpColor){if(this.player.playerColor=t.mpColor,this.player.mesh)try{this.scene.remove(this.player.mesh)}catch{}this.player.createPlayerMesh()}this.player&&(this.player.setHatVisible(t.showHat!==!1),this.player.mouthStyle=t.mouthStyle||"serious",this.player.createMouth(this.player.mouthStyle)),e.gameMode==="multiplayer"?(this.matchPhase="lobby",this.multiplayer&&(this.multiplayer.matchLive=!1)):this.matchPhase="live",this.itemManager=new ym(this.scene,this.player,e),this.world=new Wp(this.scene,this.itemManager,e),this.player.worldObjects=this.world.objects,this.player.world=this.world,this.itemManager&&typeof this.itemManager.setWorld=="function"&&this.itemManager.setWorld(this.world);const i=document.getElementById("mp-lobby"),n=document.getElementById("mp-start-btn");if(i&&i.classList.add("hidden"),n&&n.classList.add("hidden"),e.gameMode==="matrix"&&this.itemManager&&typeof this.itemManager.spawnMatrixLoadout=="function"&&this.itemManager.spawnMatrixLoadout(this.player.position.x,this.player.position.z),e.gameMode==="multiplayer"&&this.assignMultiplayerSpawn(),e.gameMode==="multiplayer"?(this.multiplayer=new vm({player:this.player,scene:this.scene,url:t.mpServer,nick:t.mpNick||"Player",color:t.mpColor||"#29b6f6",roomCode:t.mpRoom||"PUBLIC",settings:this.matchSettings}),t.mpServer||alert("Multiplayer server URL not set. Please configure it in the Multiplayer tab."),this.player&&typeof this.player.setMultiplayerClient=="function"&&this.player.setMultiplayerClient(this.multiplayer),this.multiplayer&&(this.multiplayer.onPeersChanged=()=>this.refreshMultiplayerTargets(),this.multiplayer.roomCode=t.mpRoom||"PUBLIC",this.multiplayer.onHostChanged=c=>{this.updateLobbyUI(c),c&&this.matchSettings&&this.multiplayer.sendSettings(this.matchSettings)},this.multiplayer.onCountdown=c=>this.beginLobbyCountdown(c),this.multiplayer.onMatchStart=()=>this.startMultiplayerMatch(),this.multiplayer.onSettings=c=>{this.matchSettings=c;const h=this.multiplayer&&this.multiplayer.isHost,d=this.player&&this.player.gameMode==="multiplayer"&&c&&(this.world&&this.world.mapSize!==c.mapSize||this.multiplayerEnemyBaseCount!==c.enemyCount);if(!h&&c&&d&&this.lastPlaySettings){const g={...this.lastPlaySettings,mapSize:c.mapSize,enemyCount:c.enemyCount};this.resetGameState(),this.matchSettings=c,this.applyDeterministicRandom(c.seed||"mp-seed"),this.startGame(g)}},this.multiplayer.isHost&&this.matchSettings&&this.multiplayer.sendSettings(this.matchSettings),this.multiplayer.onPeerDeath=()=>{this.checkMultiplayerVictory()},this.updateLobbyUI(this.multiplayer.isHost),this.multiplayer.isHost&&this.matchSettings&&this.multiplayer.sendSettings(this.matchSettings))):this.multiplayer=null,e.gameMode==="matrix-ai"){e.enemyCount=0,e.skipLoot=!0;const c=document.getElementById("ai-panel");c&&c.classList.remove("hidden")}else{const c=document.getElementById("ai-panel");c&&c.classList.add("hidden")}this.hud=new lm(this.player,this.world,t),this.player&&(this.player.hud=this.hud),this.hud&&typeof this.hud.setRenderer=="function"&&this.hud.setRenderer(this.renderer),this.hud&&typeof this.hud.setMultiplayer=="function"&&this.hud.setMultiplayer(this.multiplayer),this.enemyManager=new mm(this.scene,this.player,this.world,e),this.multiplayer&&typeof this.multiplayer.setEnemyManager=="function"&&this.multiplayer.setEnemyManager(this.enemyManager),e.gameMode==="multiplayer"&&(this.multiplayerEnemyBaseCount=e.enemyCount||0,typeof this.enemyManager.setTargetCount=="function"&&this.enemyManager.setTargetCount(this.multiplayerEnemyBaseCount),this.multiplayer&&(this.multiplayer.onHit=c=>{if(!c||c.targetId!==this.multiplayer.id)return;const h=typeof c.amount=="number"?c.amount:0;h>0&&this.player&&typeof this.player.takeDamage=="function"&&this.player.takeDamage(h)})),this.player.setEnemyManager(this.enemyManager),e.gameMode==="multiplayer"&&(this.refreshMultiplayerTargets(),this.setupMultiplayerLobbyUI()),this.setupObjectInspector(),this.updateDebugToggleVisibility(!!t.debugMode),this.setHotbarVisible(!0);const s=document.getElementById("float-btn");s&&(e.gameMode==="studio"?(s.classList.remove("hidden"),s.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF",s.onclick=()=>{if(this.player.isFloating=!this.player.isFloating,!this.player.isFloating){const c=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=c,this.player.velocity.y=0}s.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF"}):s.classList.add("hidden"));const o=document.getElementById("storm-timer");if(o){const c=e.stormEnabled===!1||e.gameMode==="studio"||e.gameMode==="matrix"||e.gameMode==="matrix-ai"||e.gameMode==="multiplayer"||e.gameMode==="survival";o.classList.toggle("hidden",c)}const a=document.getElementById("survival-timer");if(a){const c=e.gameMode==="arcade"||e.gameMode==="survival";a.classList.toggle("hidden",!c)}window.addEventListener("resize",()=>this.onWindowResize(),!1),this.renderer.domElement.addEventListener("pointerdown",()=>{if(!Ti){try{const c=document.getElementById("main-menu")&&document.getElementById("main-menu").style.display!=="none",h=this.player&&this.player.gameMode==="studio";if(this.isPaused||c||h)return;this.player&&!this.player.isDead&&this.player.lockControls()}catch(c){console.warn("Pointer lock request skipped or failed:",c)}this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic()}}),this.setupPauseMenu();try{const c=typeof navigator<"u"&&/Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent),h=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;(!!t.useTouchControls||c||h)&&(this.touchControls=new _m(this.player))}catch{}if(this.setupStudioPalette(e),this.refreshStudioPaletteVisibility(),this.setupAiPanel(),!Ti&&this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch(c){console.warn("Pointer lock on start skipped/failed:",c)}this._animationStarted||(this._animationStarted=!0,this.animate())}setupLongPressMenu(){if(!Ti)return;const t=document.getElementById("ui-layer")||document.body;if(!t)return;const e=n=>{try{if(n.touches&&n.touches.length>1)return;this._longPressTimer&&clearTimeout(this._longPressTimer),this._longPressTimer=setTimeout(()=>{this._longPressTimer=null,this.showPauseMenu()},800)}catch{}},i=()=>{this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)};t.addEventListener("touchstart",e,{passive:!0}),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i),t.addEventListener("touchmove",i)}setupAiPanel(){const t=document.getElementById("ai-panel"),e=document.getElementById("ai-send"),i=document.getElementById("ai-prompt"),n=document.getElementById("ai-log"),s=document.getElementById("ai-provider");if(!t||!e||!i||!n)return;const o=(c,h="")=>{const u=document.createElement("div");u.textContent=c,h&&(u.className=h),n.appendChild(u),n.scrollTop=n.scrollHeight};e.onclick=()=>{const c=i.value.trim();c&&(o(`You: ${c}`,"ai-user"),o("AI: (stub) Interpreter not wired. Imagine this runs your Three.js code.","ai-bot"),i.value="")};const a=`You are a level-building assistant for a Three.js sandbox. Respond ONLY with a JSON object:
{
  "actions": [
    {
      "action": "add",
      "type": "box" | "sphere" | "cylinder" | "plane",
      "pos": [x,y,z],
      "size": [sx,sy,sz],
      "color": "#rrggbb"
    }
  ]
}
Constraints: numbers are in meters, keep |x|,|z| <= 150, size in [0.2, 40]. No functions, no code, no prose, no markdown.`,l=async c=>{const h=document.getElementById("setting-openai-key"),u=h&&h.value?h.value.trim():"";if(!u)return o("Erro: configure a chave OpenAI em Settings.","ai-error"),"";const d={model:"gpt-4o-mini",messages:[{role:"system",content:a},{role:"user",content:c}],temperature:.2,max_tokens:2e3,response_format:{type:"json_object"}},g=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify(d)});if(!g.ok){const p=await g.text();return o(`Erro OpenAI: ${g.status} ${p}`,"ai-error"),""}const f=await g.json(),y=f&&f.choices&&f.choices[0]&&f.choices[0].message?f.choices[0].message.content:"";return o(`AI: ${y||"(vazio)"}`,"ai-bot"),y||""};e.onclick=async()=>{const c=i.value.trim();if(!c)return;o(`You: ${c}`,"ai-user"),i.value="";const h=s?s.value:"openai";e.disabled=!0,e.innerText="Enviando...";try{if(h==="openai"){const u=await l(c);if(u){const d=this.parseAiActions(u,o);if(d&&d.length){const g=this.applyAiActions(d,o);o(`Aplicado: ${g} objeto(s)`,"ai-info")}}}else o(`Provider ${h} não suportado.`,"ai-error")}catch(u){o(`Erro na requisição: ${u.message||u}`,"ai-error")}finally{e.disabled=!1,e.innerText="Send to AI"}}}parseAiActions(t,e){const i=e||(()=>{});let n=null;try{n=JSON.parse(t)}catch{return i("Falha ao parsear JSON da AI.","ai-error"),[]}if(n&&n.actions&&Array.isArray(n.actions)&&(n=n.actions),!Array.isArray(n))return i("Resposta não é uma lista de ações.","ai-error"),[];const s=(h,u,d)=>Math.min(d,Math.max(u,h)),o=new Set(["box","sphere","cylinder","plane"]),a=/^#([0-9a-fA-F]{6})$/,l=this.aiMaxAiObjects||200,c=[];for(const h of n){if(!h||h.action!=="add"||!o.has(h.type))continue;const u=Array.isArray(h.pos)?h.pos.slice(0,3):[0,0,0],d=Array.isArray(h.size)?h.size.slice(0,3):[1,1,1],g=[s(Number(u[0]??0),-150,150),s(Number(u[1]??0),-10,200),s(Number(u[2]??0),-150,150)],f=[s(Math.abs(Number(d[0]??1)),.2,40),s(Math.abs(Number(d[1]??1)),.2,40),s(Math.abs(Number(d[2]??1)),.2,40)],y=typeof h.color=="string"&&a.test(h.color)?h.color:"#cccccc";if(c.push({type:h.type,pos:g,size:f,color:y}),c.length>=l)break}return c.length||i("Nenhuma ação válida na resposta.","ai-error"),c}clearAiObjects(){this.aiObjects||(this.aiObjects=[]),this.aiObjects.forEach(t=>{try{t.parent&&t.parent.remove(t),t.geometry&&t.geometry.dispose&&t.geometry.dispose(),t.material&&t.material.dispose&&t.material.dispose()}catch{}}),this.aiObjects=[]}applyAiActions(t,e){const i=e||(()=>{});if(!t||!t.length)return 0;if(!this.scene||!this.player||this.player.gameMode!=="matrix-ai")return i("Ações ignoradas: não está no modo Matrix AI Builder.","ai-error"),0;this.clearAiObjects();const n=this.aiMaxAiObjects||200,s=[],o=new sr(16777215,.2);return o.position.set(0,10,0),this.scene.add(o),s.push(o),t.slice(0,n).forEach(a=>{try{let l=null;const c=new q({color:new Ct(a.color),metalness:.05,roughness:.85});if(a.type==="box")l=new j(a.size[0],a.size[1],a.size[2]);else if(a.type==="sphere"){const u=a.size[0]/2;l=new vi(u,20,16)}else if(a.type==="cylinder"){const u=a.size[0]/2;l=new oe(u,u,a.size[1],16)}else a.type==="plane"&&(l=new we(a.size[0],a.size[2]));if(!l)return;const h=new I(l,c);h.position.set(a.pos[0],a.pos[1],a.pos[2]),a.type==="plane"&&(h.rotation.x=-Math.PI/2),this.scene.add(h),s.push(h)}catch(l){i("Falha ao criar objeto: "+l.message,"ai-error")}}),this.aiObjects=s,s.length}refreshStudioPaletteVisibility(){const t=document.getElementById("studio-palette");if(!t)return;const e=this.player&&this.player.gameMode==="studio"&&!this.isPaused;t.classList.toggle("hidden",!e)}refreshMultiplayerTargets(){if(!this.player||this.player.gameMode!=="multiplayer"||!this.enemyManager)return;const t=typeof this.multiplayerEnemyBaseCount=="number"?this.multiplayerEnemyBaseCount:this.enemyManager.enemies.length;this.matchPhase==="live"&&typeof this.enemyManager.setTargetCount=="function"?this.enemyManager.setTargetCount(t):this.matchPhase!=="live"&&typeof this.enemyManager.setTargetCount=="function"&&this.enemyManager.setTargetCount(0)}setupStudioPalette(t){const e=document.getElementById("studio-palette");if(!e)return;const i=t&&(t.gameMode==="studio"||t.gameMode==="matrix-ai");if(e.classList.toggle("hidden",!i),!i)return;this.initStudioPaletteDrag(e),e.querySelectorAll("button").forEach(s=>{if(s._boundStudio)return;s._boundStudio=!0;const o=l=>{if(l&&l.stopPropagation&&l.stopPropagation(),!this.player||!this.world)return;const c=s.getAttribute("data-action");if(c==="resume"){if(this.isPaused=!1,this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch{}const f=document.getElementById("main-menu");f&&(f.style.display="none"),this.setMenuOpenState(!1),this.setHotbarVisible(!0);try{e.classList.add("hidden")}catch{}if(this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0),this.player&&this.player.studioSelectionHelper){try{this.player.scene.remove(this.player.studioSelectionHelper)}catch{}this.player.studioSelectionHelper=null}this.refreshStudioPaletteVisibility(),this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic();return}else if(c==="float-toggle"){if(this.player&&this.player.gameMode==="studio"){this.player.isFloating=!this.player.isFloating;const f=this.player.isFloating?"FLOAT ON":"FLOAT OFF";if(s.innerText=f,!this.player.isFloating){const y=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=y,this.player.velocity.y=0}}return}else if(c==="spawn-npc"){this.enemyManager&&typeof this.enemyManager.spawnEnemy=="function"&&this.enemyManager.spawnEnemy(!0);return}else if(c==="drops"){this.spawnStudioDrops();return}else if(c==="menu"){this.showPauseMenu();return}else if(c==="quit"){try{localStorage.removeItem("voxel-firecraft-settings")}catch{}location.reload();return}const h=s.getAttribute("data-prefab"),u=s.getAttribute("data-vehicle-type"),d=s.getAttribute("data-tree-type"),g=s.getAttribute("data-submenu");if(g){const f=document.getElementById(g);f&&f.classList.toggle("hidden");return}if(this.studioSelectedPrefab=h,this.studioSelectedOptions=u?{variant:u}:d?{variant:d}:{},this.toggleTouchLookArea(!1),g){const f=document.getElementById(g);f&&f.classList.add("hidden")}},a=l=>{l&&l.preventDefault&&l.preventDefault(),o(l)};s.addEventListener("pointerdown",a),s.addEventListener("click",l=>{l&&l.preventDefault&&l.preventDefault(),o(l)})})}setupObjectInspector(){const t=this.renderer?this.renderer.domElement:null;if(t){if(this._objectClickHandler&&this._objectClickTarget)try{this._objectClickTarget.removeEventListener("click",this._objectClickHandler),this._objectClickTarget.removeEventListener("pointerdown",this._objectClickHandler)}catch{}this._objectClickTarget=t,this._objectClickHandler=e=>{if(!this.player||!this.hud)return;const i=this.player.gameMode||"arcade";if(i==="matrix")return;if(i==="studio"&&this.studioSelectedPrefab){const d=t.getBoundingClientRect(),g=(e.clientX-d.left)/d.width*2-1,f=-((e.clientY-d.top)/d.height*2-1),y=new Xe;y.setFromCamera(new Pt(g,f),this.camera);const p=y.intersectObjects(this.world.objects,!0);let m=null;for(const _ of p)if(_.object&&_.object.userData&&_.object.userData.gameName==="Ground"){m=_;break}if(!m){const _=new Xe;_.setFromCamera(new Pt(0,0),this.camera);const v=_.intersectObjects(this.world.objects,!0);for(const x of v)if(x.object&&x.object.userData&&x.object.userData.gameName==="Ground"){m=x;break}}if(m&&typeof this.world.spawnPrefab=="function"){const _=this.studioSelectedOptions||{};this.world.spawnPrefab(this.studioSelectedPrefab,m.point.x,m.point.z,_)}this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0);return}let n=0,s=0;if(this.player.controls&&this.player.controls.isLocked)n=0,s=0;else{const d=t.getBoundingClientRect();n=(e.clientX-d.left)/d.width*2-1,s=-((e.clientY-d.top)/d.height*2-1)}this._pickRaycaster.setFromCamera(new Pt(n,s),this.camera);const o=[];if(this.world&&Array.isArray(this.world.objects)&&o.push(...this.world.objects),this.itemManager&&Array.isArray(this.itemManager.items)&&o.push(...this.itemManager.items),this.enemyManager&&Array.isArray(this.enemyManager.enemies)&&this.enemyManager.enemies.forEach(d=>{d&&d.mesh&&o.push(d.mesh)}),o.length===0)return;const a=this._pickRaycaster.intersectObjects(o,!0);if(!a.length)return;let l=a[0].object,c=null;for(;l;){if(l.userData&&(l.userData.gameId||l.userData.gameid)&&l.userData.gameName){c=l.userData;break}l=l.parent}if(!c)return;const h=c.gameName||"Object",u=c.gameId||c.gameid||"---";typeof this.hud.showSelectionInfo=="function"&&this.hud.showSelectionInfo(h,u)},t.addEventListener("click",this._objectClickHandler),t.addEventListener("pointerdown",this._objectClickHandler)}}initStudioPaletteDrag(t){if(!t||t._dragInit)return;t._dragInit=!0;const e=t.querySelector(".palette-title")||t;let i=!1,n=0,s=0,o=0,a=0,l=null;t.style.touchAction="none";const c=u=>{if(!i){const y=Math.abs(u.clientX-o),p=Math.abs(u.clientY-a);if(y<3&&p<3)return;i=!0,l&&(t.style.right="auto",t.style.bottom="auto",t.style.position="fixed",t.style.width=`${l.width}px`,t.style.minWidth=`${l.width}px`,t.style.maxWidth=`${l.width}px`,t.style.left=`${l.left}px`,t.style.top=`${l.top}px`)}const d=t.getBoundingClientRect(),g=Math.max(0,Math.min(window.innerWidth-d.width,u.clientX-n)),f=Math.max(0,Math.min(window.innerHeight-d.height,u.clientY-s));t.style.left=`${g}px`,t.style.top=`${f}px`},h=()=>{i=!1,e.releasePointerCapture&&e.releasePointerCapture(e._dragPointerId),document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",h)};e.addEventListener("pointerdown",u=>{try{u.preventDefault()}catch{}const d=t.getBoundingClientRect();l=d,n=u.clientX-d.left,s=u.clientY-d.top,o=u.clientX,a=u.clientY,i=!1,e._dragPointerId=u.pointerId;try{e.setPointerCapture(u.pointerId)}catch{}document.addEventListener("pointermove",c),document.addEventListener("pointerup",h)})}togglePause(){if(this.player){if(this.player.controls&&this.player.controls.isLocked){this.showPauseMenu();return}this.isPaused=!this.isPaused,this.isPaused?this.pauseBackgroundMusic():this.playBackgroundMusic()}}setupPauseMenu(){document.addEventListener("keydown",e=>{e.code==="Escape"&&this.player&&!this.player.isDead&&(e.preventDefault(),this.showPauseMenu())});const t=document.getElementById("pause-menu");t&&t.remove()}showPauseMenu(){this.isPaused=!0,this.player.controls&&this.player.controls.isLocked&&this.player.controls.unlock(),this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps(),this.pauseBackgroundMusic();const t=document.getElementById("main-menu");if(t){t.style.display="flex",this.setMenuOpenState(!0);const e=document.getElementById("play-btn");e&&this.player&&(e.innerText="RESUME GAME")}if(this.setHotbarVisible(!1),this.player&&this.player.gameMode==="studio"){const e=document.getElementById("studio-palette");e&&e.classList.remove("hidden")}}playBackgroundMusic(){try{this.bgAudio||(this.bgAudio=new Audio(Bp),this.bgAudio.loop=!0,this.bgAudio.volume=this.bgMusicVolume,this.bgAudio.preload="auto");const t=this.bgAudio.play();t&&typeof t.then=="function"&&t.catch(()=>{})}catch(t){console.warn("Could not play background music:",t)}}pauseBackgroundMusic(){if(this.bgAudio&&!this.bgAudio.paused)try{this.bgAudio.pause()}catch{}}stopBackgroundMusic(){if(this.bgAudio)try{this.bgAudio.pause(),this.bgAudio.currentTime=0}catch{}}requestFullscreenIfNeeded(t){if(!t)return;const e=document;if(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)return;const n=document.documentElement||document.body,s=n.requestFullscreen||n.webkitRequestFullscreen||n.mozRequestFullScreen||n.msRequestFullscreen;s?s.call(n).catch(o=>{console.warn("Fullscreen request failed:",o),Ti&&alert("Fullscreen may not be supported on this mobile device.")}):Ti&&alert("Fullscreen is not available on this mobile device.")}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());try{const t=this.clock.getDelta(),e=Math.min(t,.1),i=!!(this.touchControls&&this.touchControls.enabled),n=!!(this.player&&this.player.controls&&this.player.controls.isLocked),s=!!(this.player&&this.player.gameMode==="studio");if(!this.isPaused&&this.player&&(n||i||s)){try{this.player.update(e)}catch(o){console.error("Error in player.update:",o)}try{const o=this.world.update(e,this.player.position);!(this.player&&this.player.gameMode==="studio")&&o&&o.inStorm?this.player.takeDamage(1*e):this.player&&typeof this.player.clearHurtQueue=="function"&&this.player.clearHurtQueue()}catch(o){console.error("Error in world.update:",o)}try{this.enemyManager.update(e)}catch(o){console.error("Error in enemyManager.update:",o)}try{this.itemManager.update(e)}catch(o){console.error("Error in itemManager.update:",o)}if(this.player&&this.player.gameMode==="multiplayer"){if(this.matchPhase==="live")this.multiplayerDropTimer+=e,this.multiplayerDropTimer>=30&&(this.multiplayerDropActive=!0),this.multiplayerDropActive&&this.itemManager&&(this.multiplayerDropCooldown-=e,this.multiplayerDropCooldown<=0&&(this.multiplayerDropCooldown=60,typeof this.itemManager.spawnMatrixDropNearPlayer=="function"&&this.itemManager.spawnMatrixDropNearPlayer()));else if(this.matchPhase==="countdown"){this.lobbyCountdown-=e;const o=document.getElementById("mp-lobby-countdown");this.lobbyCountdown<0&&(this.lobbyCountdown=0),o&&(o.innerText=`Starting in ${Math.ceil(this.lobbyCountdown)}...`),this.lobbyCountdown<=0&&this.startMultiplayerMatch()}}try{this.multiplayer&&typeof this.multiplayer.update=="function"&&this.multiplayer.update(e)}catch(o){console.error("Error in multiplayer.update:",o)}if(this.player&&(this.player.gameMode==="arcade"||this.player.gameMode==="survival")){this.survivalTime=(performance.now()-this.survivalStartTime)/1e3;const o=document.getElementById("survival-time-value");if(o){const a=Math.floor(this.survivalTime/60),l=Math.floor(this.survivalTime%60);o.innerText=`${a.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}`}if(this.itemManager&&this.enemyManager){const a=this.itemManager.items?this.itemManager.items.filter(c=>!(c.userData&&c.userData.isOpened)).length:0,l=this.enemyManager.targetCount>0?this.enemyManager.killedCount/this.enemyManager.targetCount:0;if(a===0&&l>=.3&&!this.lootDropEligible&&(this.lootDropEligible=!0,this.lootDropCooldown=0,console.log("Loot drops from sky enabled! Player killed 30%+ zombies.")),this.lootDropEligible&&(this.lootDropCooldown-=e,this.lootDropCooldown<=0&&(this.lootDropCooldown=45,typeof this.itemManager.spawnMatrixDropNearPlayer=="function"))){const c=2+Math.floor(Math.random()*2);for(let h=0;h<c;h++)this.itemManager.spawnMatrixDropNearPlayer();console.log(`Dropped ${c} items from sky!`)}}}try{this.hud.update()}catch(o){console.error("Error in hud.update:",o)}try{this.touchControls&&typeof this.touchControls.update=="function"&&this.touchControls.update()}catch(o){console.error("Error in touchControls.update:",o)}try{if(!(this.player&&(this.player.gameMode==="matrix"||this.player.gameMode==="studio"||this.player.gameMode==="multiplayer"||this.player.gameMode==="matrix-ai"))&&this.enemyManager.enemies.length===0&&!this.player.isDead&&!this.victoryShown){this.victoryShown=!0;try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}this.hud.showVictory(),this.player.controls.unlock()}else this.player&&this.player.gameMode==="multiplayer"&&this.matchPhase==="live"&&!this.player.isDead&&!this.victoryShown&&(this.multiplayer?this.multiplayer.others.size:0)===0&&(this.victoryShown=!0,this.hud.showVictory(),this.player.controls&&this.player.controls.unlock&&this.player.controls.unlock())}catch(o){console.error("Error in victory check:",o)}}this.renderer.render(this.scene,this.camera)}catch(t){try{console.error("Unhandled error in Game.animate:",t,{playerExists:!!this.player,playerWeaponCount:this.player?this.player.weapons?this.player.weapons.length:"no-weapons":"no-player",currentWeaponIndex:this.player?this.player.currentWeaponIndex:"no-player",hudExists:!!this.hud,hudSettings:this.hud?this.hud.settings:null});try{this._logRenderMaterialDiagnostics(t)}catch(e){console.error("Error during render diagnostics:",e)}}catch(e){console.error("Error logging animate failure:",e)}return}}}Rr.prototype.playEndSequence=function(r,t={}){try{if(this._playingEndSequence)return;if(this._playingEndSequence=!0,this.bgAudio)try{this._prevBgVolume=this.bgAudio.volume,this.bgAudio.pause()}catch{this._prevBgVolume=this.bgMusicVolume}if(this._endSequenceAudio){try{this._endSequenceAudio.pause(),this._endSequenceAudio.currentTime=0}catch{}this._endSequenceAudio=null}const e=new Audio(r);e.loop=t.loop||!1,e.volume=t.volume!==void 0?t.volume:1,e.preload="auto",this._endSequenceAudio=e,e.load(),setTimeout(()=>{const i=e.play();i&&typeof i.then=="function"&&i.catch(n=>{console.log("Audio playback blocked, waiting for user interaction:",n);const s=()=>{e.readyState<2&&e.load(),e.play().catch(()=>{}),document.removeEventListener("touchstart",s),document.removeEventListener("click",s)};document.addEventListener("touchstart",s,{once:!0}),document.addEventListener("click",s,{once:!0})})},100),e.addEventListener("ended",()=>{try{this.bgAudio&&this._prevBgVolume!==null&&(this.bgAudio.volume=this._prevBgVolume)}catch{}this._endSequenceAudio=null,this._prevBgVolume=null,this._playingEndSequence=!1})}catch(e){console.warn("playEndSequence error:",e)}};Rr.prototype._logRenderMaterialDiagnostics=function(r){try{const t=[];let e=0;this.scene.traverse(i=>{if(i.isMesh){e++;const n=i.material;if(!n){t.push({uuid:i.uuid,name:i.name||i.userData&&i.userData.gameName||"mesh",issue:"no-material"});return}const s=o=>({type:o.type||o.constructor&&o.constructor.name||"Unknown",isShaderMaterial:!!o.isShaderMaterial,isStandardMaterial:!!o.isMeshStandardMaterial,hasEmissive:o.emissive!==void 0,uniformsKeys:o.uniforms?Object.keys(o.uniforms):null,userData:o.userData||null});Array.isArray(n)?t.push({uuid:i.uuid,name:i.name||i.userData&&i.userData.gameName||"mesh",materials:n.map(s)}):t.push({uuid:i.uuid,name:i.userData&&i.userData.gameName||i.name||"mesh",material:s(n)})}}),console.error("Render diagnostics:",{originalError:r&&r.toString(),totalMeshes:e,sampleProblems:t.slice(0,30),note:"Look for materials missing expected uniforms (shader/standard) or meshes without material."})}catch(t){console.error("Failed collecting render diagnostics:",t)}};window.game=new Rr;(function(){try{const t=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}"),e=t&&t.debugMode||localStorage.getItem("showDebugOverlay")==="true"||!!window.DEBUG_OVERLAY;window.debugOverlay=xm({autoShow:!!e}),window.addEventListener("keydown",i=>{if(i.key==="`"&&window.debugOverlay){const n=document.getElementById("debug-overlay");n&&n.classList.contains("hidden")?window.debugOverlay.show():window.debugOverlay&&window.debugOverlay.hide()}});try{let i=document.getElementById("debug-toggle-btn");i||(i=document.createElement("button"),i.id="debug-toggle-btn",i.title="Debug logs",i.innerText="DBG",document.body.appendChild(i));const n=!0;i.addEventListener("click",s=>{try{const o=document.getElementById("debug-overlay");o&&o.classList.contains("hidden")?(window.debugOverlay&&window.debugOverlay.show(),localStorage.setItem("showDebugOverlay","true")):(window.debugOverlay&&window.debugOverlay.hide(),localStorage.removeItem("showDebugOverlay"))}catch(o){console.warn("debug toggle error",o)}})}catch{}}catch(t){console.warn("debugOverlay init failed",t)}})();window.addEventListener("game-touch-look",r=>{try{const t=r.detail||{dx:0,dy:0},e=.003;if(window.game&&window.game.player)try{if(typeof window.game.player.rotateCamera=="function")window.game.player.rotateCamera(t.dx*e,t.dy*e);else{window.game.player._touchYaw=(window.game.player._touchYaw||0)-t.dx*.01,window.game.player._touchPitch=(window.game.player._touchPitch||0)-t.dy*.01;const n=Math.PI/2-.1;window.game.player._touchPitch=Math.max(-n,Math.min(n,window.game.player._touchPitch))}}catch{}}catch{}});
