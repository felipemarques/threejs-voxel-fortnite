(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mr="160",el=0,Nr=1,il=2,nl=0,_a=1,sl=2,ii=3,gi=0,Re=1,ke=2,fi=0,rn=1,sr=2,Br=3,Fr=4,rl=5,Ai=100,ol=101,al=102,Or=103,kr=104,ll=200,cl=201,hl=202,ul=203,rr=204,or=205,dl=206,fl=207,pl=208,ml=209,gl=210,_l=211,yl=212,vl=213,xl=214,Ml=0,Sl=1,wl=2,as=3,El=4,bl=5,Tl=6,Al=7,gs=0,Cl=1,Rl=2,pi=0,Pl=1,Ll=2,Dl=3,Il=4,Ul=5,Nl=6,ya=300,cn=301,hn=302,ar=303,lr=304,_s=306,ls=1e3,Xe=1001,cr=1002,Se=1003,zr=1004,Bl=1004,Ts=1005,Oe=1006,Fl=1007,Tn=1008,mi=1009,Ol=1010,kl=1011,gr=1012,va=1013,ui=1014,di=1015,An=1016,xa=1017,Ma=1018,Ri=1020,zl=1021,qe=1023,Hl=1024,Gl=1025,Pi=1026,un=1027,Vl=1028,Sa=1029,Wl=1030,wa=1031,Ea=1033,As=33776,Cs=33777,Rs=33778,Ps=33779,Hr=35840,Gr=35841,Vr=35842,Wr=35843,ba=36196,Xr=37492,qr=37496,jr=37808,Yr=37809,Kr=37810,$r=37811,Zr=37812,Jr=37813,Qr=37814,to=37815,eo=37816,io=37817,no=37818,so=37819,ro=37820,oo=37821,Ls=36492,ao=36494,lo=36495,Xl=36283,co=36284,ho=36285,uo=36286,Ta=3e3,Li=3001,ql=3200,jl=3201,ys=0,Yl=1,ze="",ye="srgb",si="srgb-linear",_r="display-p3",vs="display-p3-linear",cs="linear",te="srgb",hs="rec709",us="p3",Ni=7680,fo=519,Kl=512,$l=513,Zl=514,Aa=515,Jl=516,Ql=517,tc=518,ec=519,po=35044,mo="300 es",hr=1035,ni=2e3,ds=2001;class Ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let go=1234567;const Sn=Math.PI/180,Cn=180/Math.PI;function fn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xe[r&255]+xe[r>>8&255]+xe[r>>16&255]+xe[r>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]).toLowerCase()}function Ce(r,t,e){return Math.max(t,Math.min(e,r))}function yr(r,t){return(r%t+t)%t}function ic(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function nc(r,t,e){return r!==t?(e-r)/(t-r):0}function wn(r,t,e){return(1-e)*r+e*t}function sc(r,t,e,i){return wn(r,t,1-Math.exp(-e*i))}function rc(r,t=1){return t-Math.abs(yr(r,t*2)-t)}function oc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function ac(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function lc(r,t){return r+Math.floor(Math.random()*(t-r+1))}function cc(r,t){return r+Math.random()*(t-r)}function hc(r){return r*(.5-Math.random())}function uc(r){r!==void 0&&(go=r);let t=go+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dc(r){return r*Sn}function fc(r){return r*Cn}function ur(r){return(r&r-1)===0&&r!==0}function pc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mc(r,t,e,i,n){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(n){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function en(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _e={DEG2RAD:Sn,RAD2DEG:Cn,generateUUID:fn,clamp:Ce,euclideanModulo:yr,mapLinear:ic,inverseLerp:nc,lerp:wn,damp:sc,pingpong:rc,smoothstep:oc,smootherstep:ac,randInt:lc,randFloat:cc,randFloatSpread:hc,seededRandom:uc,degToRad:dc,radToDeg:fc,isPowerOfTwo:ur,ceilPowerOfTwo:pc,floorPowerOfTwo:fs,setQuaternionFromProperEuler:mc,normalize:Te,denormalize:en};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,n,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],x=n[1],v=n[4],S=n[7],C=n[2],T=n[5],A=n[8];return s[0]=o*_+a*x+l*C,s[3]=o*m+a*v+l*T,s[6]=o*f+a*S+l*A,s[1]=c*_+h*x+u*C,s[4]=c*m+h*v+u*T,s[7]=c*f+h*S+u*A,s[2]=d*_+p*x+g*C,s[5]=d*m+p*v+g*T,s[8]=d*f+p*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=e*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(n*c-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=d*_,t[4]=(h*e-n*l)*_,t[5]=(n*s-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ds.makeScale(t,e)),this}rotate(t){return this.premultiply(Ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Vt;function Ca(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ps(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gc(){const r=ps("canvas");return r.style.display="block",r}const _o={};function En(r){r in _o||(_o[r]=!0,console.warn(r))}const yo=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vo=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Un={[si]:{transfer:cs,primaries:hs,toReference:r=>r,fromReference:r=>r},[ye]:{transfer:te,primaries:hs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[vs]:{transfer:cs,primaries:us,toReference:r=>r.applyMatrix3(vo),fromReference:r=>r.applyMatrix3(yo)},[_r]:{transfer:te,primaries:us,toReference:r=>r.convertSRGBToLinear().applyMatrix3(vo),fromReference:r=>r.applyMatrix3(yo).convertLinearToSRGB()}},_c=new Set([si,vs]),Yt={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!_c.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const i=Un[t].toReference,n=Un[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Un[r].primaries},getTransfer:function(r){return r===ze?cs:Un[r].transfer}};function on(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bi;class Ra{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=ps("canvas")),Bi.width=t.width,Bi.height=t.height;const i=Bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=on(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(on(e[i]/255)*255):e[i]=on(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yc=0;class Pa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=fn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Us(n[o].image)):s.push(Us(n[o]))}else s=Us(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Us(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ra.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vc=0;class Pe extends Ui{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,i=Xe,n=Xe,s=Oe,o=Tn,a=qe,l=mi,c=Pe.DEFAULT_ANISOTROPY,h=ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=fn(),this.name="",this.source=new Pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Li?ye:ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ya)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case Xe:t.x=t.x<0?0:1;break;case cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case Xe:t.y=t.y<0?0:1;break;case cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?Li:Ta}set encoding(t){En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?ye:ze}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=ya;Pe.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,i=0,n=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(f+1)/2,T=(h+d)/4,A=(u+_)/4,I=(g+m)/4;return v>S&&v>C?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=T/i,s=A/i):S>C?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=T/n,s=I/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=A/s,n=I/s),this.set(i,n,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xc extends Ui{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(En("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Li?ye:ze),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Pa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends xc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class La extends Pe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends Pe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,f*x);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*x;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),p=l(n/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-n)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new R,xo=new Rn;class yi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,He):He.fromBufferAttribute(s,o),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nn.copy(i.boundingBox)),Nn.applyMatrix4(t.matrixWorld),this.union(Nn)}const n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_n),Bn.subVectors(this.max,_n),Fi.subVectors(t.a,_n),Oi.subVectors(t.b,_n),ki.subVectors(t.c,_n),oi.subVectors(Oi,Fi),ai.subVectors(ki,Oi),Mi.subVectors(Fi,ki);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Mi.z,Mi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Mi.z,0,-Mi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Mi.y,Mi.x,0];return!Bs(e,Fi,Oi,ki,Bn)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,Fi,Oi,ki,Bn))?!1:(Fn.crossVectors(oi,ai),e=[Fn.x,Fn.y,Fn.z],Bs(e,Fi,Oi,ki,Bn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new R,new R,new R,new R,new R,new R,new R,new R],He=new R,Nn=new yi,Fi=new R,Oi=new R,ki=new R,oi=new R,ai=new R,Mi=new R,_n=new R,Bn=new R,Fn=new R,Si=new R;function Bs(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Si.fromArray(r,s);const a=n.x*Math.abs(Si.x)+n.y*Math.abs(Si.y)+n.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=i.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Sc=new yi,yn=new R,Fs=new R;class Pn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Sc.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yn.subVectors(t,this.center);const e=yn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(yn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yn.copy(t.center).add(Fs)),this.expandByPoint(yn.copy(t.center).sub(Fs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new R,Os=new R,On=new R,li=new R,ks=new R,kn=new R,zs=new R;class xs{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Os.copy(t).add(e).multiplyScalar(.5),On.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Os);const s=t.distanceTo(e)*.5,o=-this.direction.dot(On),a=li.dot(this.direction),l=-li.dot(On),c=li.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Os).addScaledVector(On,d),p}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const i=Je.dot(this.direction),n=Je.dot(Je)-i*i,s=t.radius*t.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,i,n,s){ks.subVectors(e,t),kn.subVectors(i,t),zs.crossVectors(ks,kn);let o=this.direction.dot(zs),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);const l=a*this.direction.dot(kn.crossVectors(li,kn));if(l<0)return null;const c=a*this.direction.dot(ks.cross(li));if(c<0||l+c>o)return null;const h=-a*li.dot(zs);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,n,s,o,a,l,c,h,u,d,p,g,_,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,i,n,s,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wc,t,Ec)}lookAt(t,e,i){const n=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),ci.crossVectors(i,De),ci.lengthSq()===0&&(Math.abs(i.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),ci.crossVectors(i,De)),ci.normalize(),zn.crossVectors(De,ci),n[0]=ci.x,n[4]=zn.x,n[8]=De.x,n[1]=ci.y,n[5]=zn.y,n[9]=De.y,n[2]=ci.z,n[6]=zn.z,n[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],x=i[3],v=i[7],S=i[11],C=i[15],T=n[0],A=n[4],I=n[8],M=n[12],w=n[1],B=n[5],O=n[9],q=n[13],P=n[2],N=n[6],H=n[10],K=n[14],Y=n[3],X=n[7],j=n[11],nt=n[15];return s[0]=o*T+a*w+l*P+c*Y,s[4]=o*A+a*B+l*N+c*X,s[8]=o*I+a*O+l*H+c*j,s[12]=o*M+a*q+l*K+c*nt,s[1]=h*T+u*w+d*P+p*Y,s[5]=h*A+u*B+d*N+p*X,s[9]=h*I+u*O+d*H+p*j,s[13]=h*M+u*q+d*K+p*nt,s[2]=g*T+_*w+m*P+f*Y,s[6]=g*A+_*B+m*N+f*X,s[10]=g*I+_*O+m*H+f*j,s[14]=g*M+_*q+m*K+f*nt,s[3]=x*T+v*w+S*P+C*Y,s[7]=x*A+v*B+S*N+C*X,s[11]=x*I+v*O+S*H+C*j,s[15]=x*M+v*q+S*K+C*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*p-i*l*p)+_*(+e*l*p-e*c*d+s*o*d-n*o*p+n*c*h-s*l*h)+m*(+e*c*u-e*a*p-s*o*u+i*o*p+s*a*h-i*c*h)+f*(-n*a*h-e*l*u+e*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,v=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,S=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*x+i*v+n*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=x*A,t[1]=(_*d*s-u*m*s-_*n*p+i*m*p+u*n*f-i*d*f)*A,t[2]=(a*m*s-_*l*s+_*n*c-i*m*c-a*n*f+i*l*f)*A,t[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*p-i*l*p)*A,t[4]=v*A,t[5]=(h*m*s-g*d*s+g*n*p-e*m*p-h*n*f+e*d*f)*A,t[6]=(g*l*s-o*m*s-g*n*c+e*m*c+o*n*f-e*l*f)*A,t[7]=(o*d*s-h*l*s+h*n*c-e*d*c-o*n*p+e*l*p)*A,t[8]=S*A,t[9]=(g*u*s-h*_*s-g*i*p+e*_*p+h*i*f-e*u*f)*A,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*f+e*a*f)*A,t[11]=(h*a*s-o*u*s-h*i*c+e*u*c+o*i*p-e*a*p)*A,t[12]=C*A,t[13]=(h*_*n-g*u*n+g*i*d-e*_*d-h*i*m+e*u*m)*A,t[14]=(g*a*n-o*_*n-g*i*l+e*_*l+o*i*m-e*a*m)*A,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*d+e*a*d)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,_=o*h,m=o*u,f=a*u,x=l*c,v=l*h,S=l*u,C=i.x,T=i.y,A=i.z;return n[0]=(1-(_+f))*C,n[1]=(p+S)*C,n[2]=(g-v)*C,n[3]=0,n[4]=(p-S)*T,n[5]=(1-(d+f))*T,n[6]=(m+x)*T,n[7]=0,n[8]=(g+v)*A,n[9]=(m-x)*A,n[10]=(1-(d+_))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=zi.set(n[0],n[1],n[2]).length();const o=zi.set(n[4],n[5],n[6]).length(),a=zi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ge.copy(this);const c=1/s,h=1/o,u=1/a;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,e.setFromRotationMatrix(Ge),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,n,s,o,a=ni){const l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let p,g;if(a===ni)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ds)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=ni){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-s),d=(e+t)*c,p=(i+n)*h;let g,_;if(a===ni)g=(o+s)*u,_=-2*u;else if(a===ds)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zi=new R,Ge=new re,wc=new R(0,0,0),Ec=new R(1,1,1),ci=new R,zn=new R,De=new R,Mo=new re,So=new Rn;class pn{constructor(t=0,e=0,i=0,n=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return So.setFromEuler(this),this.setFromQuaternion(So,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class vr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bc=0;const wo=new R,Hi=new Rn,Qe=new re,Hn=new R,vn=new R,Tc=new R,Ac=new Rn,Eo=new R(1,0,0),bo=new R(0,1,0),To=new R(0,0,1),Cc={type:"added"},Rc={type:"removed"};class ge extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new R,e=new pn,i=new Rn,n=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new re},normalMatrix:{value:new Vt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Eo,t)}rotateY(t){return this.rotateOnAxis(bo,t)}rotateZ(t){return this.rotateOnAxis(To,t)}translateOnAxis(t,e){return wo.copy(t).applyQuaternion(this.quaternion),this.position.add(wo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eo,t)}translateY(t){return this.translateOnAxis(bo,t)}translateZ(t){return this.translateOnAxis(To,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hn.copy(t):Hn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(vn,Hn,this.up):Qe.lookAt(Hn,vn,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Hi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Cc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,t,Tc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,Ac,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ge.DEFAULT_UP=new R(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new R,ti=new R,Hs=new R,ei=new R,Gi=new R,Vi=new R,Ao=new R,Gs=new R,Vs=new R,Ws=new R;let Gn=!1;class We{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ve.subVectors(t,e),n.cross(Ve);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ve.subVectors(n,e),ti.subVectors(i,e),Hs.subVectors(t,e);const o=Ve.dot(Ve),a=Ve.dot(ti),l=Ve.dot(Hs),c=ti.dot(ti),h=ti.dot(Hs),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,n,s,o,a,l){return Gn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gn=!0),this.getInterpolation(t,e,i,n,s,o,a,l)}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(t,e,i,n){return Ve.subVectors(i,e),ti.subVectors(t,e),Ve.cross(ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Ve.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return Gn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gn=!0),We.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return We.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let o,a;Gi.subVectors(n,i),Vi.subVectors(s,i),Gs.subVectors(t,i);const l=Gi.dot(Gs),c=Vi.dot(Gs);if(l<=0&&c<=0)return e.copy(i);Vs.subVectors(t,n);const h=Gi.dot(Vs),u=Vi.dot(Vs);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Gi,o);Ws.subVectors(t,s);const p=Gi.dot(Ws),g=Vi.dot(Ws);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Vi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ao.subVectors(s,n),a=(u-h)/(u-h+(p-g)),e.copy(n).addScaledVector(Ao,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(Gi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Da={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function Xs(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=yr(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Xs(o,s,t+1/3),this.g=Xs(o,s,t),this.b=Xs(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,n),this}setStyle(t,e=ye){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const i=Da[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=on(t.r),this.g=on(t.g),this.b=on(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Yt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Ce(Me.r*255,0,255))*65536+Math.round(Ce(Me.g*255,0,255))*256+Math.round(Ce(Me.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Me.copy(this),e);const i=Me.r,n=Me.g,s=Me.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=ye){Yt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,i=Me.g,n=Me.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Vn);const i=wn(hi.h,Vn.h,e),n=wn(hi.s,Vn.s,e),s=wn(hi.l,Vn.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new bt;bt.NAMES=Da;let Pc=0;class ri extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=rn,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rr,this.blendDst=or,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rn&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rr&&(i.blendSrc=this.blendSrc),this.blendDst!==or&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _i extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new R,Wn=new St;class we{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wn.fromBufferAttribute(this,e),Wn.applyMatrix3(t),this.setXY(e,Wn.x,Wn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=en(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==po&&(t.usage=this.usage),t}}class Ia extends we{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ua extends we{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Kt extends we{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Lc=0;const Fe=new re,qs=new ge,Wi=new R,Ie=new yi,xn=new yi,pe=new R;class ue extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ca(t)?Ua:Ia)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Vt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,i){return Fe.makeTranslation(t,e,i),this.applyMatrix4(Fe),this}scale(t,e,i){return Fe.makeScale(t,e,i),this.applyMatrix4(Fe),this}lookAt(t){return qs.lookAt(t),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];Ie.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xn.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(Ie.min,xn.min),Ie.expandByPoint(pe),pe.addVectors(Ie.max,xn.max),Ie.expandByPoint(pe)):(Ie.expandByPoint(xn.min),Ie.expandByPoint(xn.max))}Ie.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)pe.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(pe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pe.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(t,c),pe.add(Wi)),n=Math.max(n,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new R,h[w]=new R;const u=new R,d=new R,p=new R,g=new St,_=new St,m=new St,f=new R,x=new R;function v(w,B,O){u.fromArray(n,w*3),d.fromArray(n,B*3),p.fromArray(n,O*3),g.fromArray(o,w*2),_.fromArray(o,B*2),m.fromArray(o,O*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(q),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(q),c[w].add(f),c[B].add(f),c[O].add(f),h[w].add(x),h[B].add(x),h[O].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,B=S.length;w<B;++w){const O=S[w],q=O.start,P=O.count;for(let N=q,H=q+P;N<H;N+=3)v(i[N+0],i[N+1],i[N+2])}const C=new R,T=new R,A=new R,I=new R;function M(w){A.fromArray(s,w*3),I.copy(A);const B=c[w];C.copy(B),C.sub(A.multiplyScalar(A.dot(B))).normalize(),T.crossVectors(I,B);const q=T.dot(h[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=q}for(let w=0,B=S.length;w<B;++w){const O=S[w],q=O.start,P=O.count;for(let N=q,H=q+P;N<H;N+=3)M(i[N+0]),M(i[N+1]),M(i[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new we(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Co=new re,wi=new xs,Xn=new Pn,Ro=new R,Xi=new R,qi=new R,ji=new R,js=new R,qn=new R,jn=new St,Yn=new St,Kn=new St,Po=new R,Lo=new R,Do=new R,$n=new R,Zn=new R;class z extends ge{constructor(t=new ue,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(s&&a){qn.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(js.fromBufferAttribute(u,t),o?qn.addScaledVector(js,h):qn.addScaledVector(js.sub(e),h))}e.add(qn)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xn.copy(i.boundingSphere),Xn.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Xn.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Xn,Ro)===null||wi.origin.distanceToSquared(Ro)>(t.far-t.near)**2))&&(Co.copy(s).invert(),wi.copy(t.ray).applyMatrix4(Co),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const T=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);n=Jn(this,f,t,i,c,h,u,T,A,I),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);n=Jn(this,o,t,i,c,h,u,x,v,S),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const T=S,A=S+1,I=S+2;n=Jn(this,f,t,i,c,h,u,T,A,I),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,S=m+2;n=Jn(this,o,t,i,c,h,u,x,v,S),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Dc(r,t,e,i,n,s,o,a){let l;if(t.side===Re?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===gi,a),l===null)return null;Zn.copy(a),Zn.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Zn);return c<e.near||c>e.far?null:{distance:c,point:Zn.clone(),object:r}}function Jn(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,Xi),r.getVertexPosition(l,qi),r.getVertexPosition(c,ji);const h=Dc(r,t,e,i,Xi,qi,ji,$n);if(h){n&&(jn.fromBufferAttribute(n,a),Yn.fromBufferAttribute(n,l),Kn.fromBufferAttribute(n,c),h.uv=We.getInterpolation($n,Xi,qi,ji,jn,Yn,Kn,new St)),s&&(jn.fromBufferAttribute(s,a),Yn.fromBufferAttribute(s,l),Kn.fromBufferAttribute(s,c),h.uv1=We.getInterpolation($n,Xi,qi,ji,jn,Yn,Kn,new St),h.uv2=h.uv1),o&&(Po.fromBufferAttribute(o,a),Lo.fromBufferAttribute(o,l),Do.fromBufferAttribute(o,c),h.normal=We.getInterpolation($n,Xi,qi,ji,Po,Lo,Do,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};We.getNormal(Xi,qi,ji,u.normal),h.face=u}return h}class it extends ue{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(_,m,f,x,v,S,C,T,A,I,M){const w=S/A,B=C/I,O=S/2,q=C/2,P=T/2,N=A+1,H=I+1;let K=0,Y=0;const X=new R;for(let j=0;j<H;j++){const nt=j*B-q;for(let st=0;st<N;st++){const V=st*w-O;X[_]=V*x,X[m]=nt*v,X[f]=P,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[f]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(st/A),u.push(1-j/I),K+=1}}for(let j=0;j<I;j++)for(let nt=0;nt<A;nt++){const st=d+nt+N*j,V=d+nt+N*(j+1),$=d+(nt+1)+N*(j+1),at=d+(nt+1)+N*j;l.push(st,V,at),l.push(V,$,at),Y+=6}a.addGroup(p,Y,M),p+=Y,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function dn(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ae(r){const t={};for(let e=0;e<r.length;e++){const i=dn(r[e]);for(const n in i)t[n]=i[n]}return t}function Ic(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Na(r){return r.getRenderTarget()===null?r.outputColorSpace:Yt.workingColorSpace}const Uc={clone:dn,merge:Ae};var Nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nc,this.fragmentShader=Bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dn(t.uniforms),this.uniformsGroups=Ic(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ba extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ne extends Ba{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cn*2*Math.atan(Math.tan(Sn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,Ki=1;class Fc extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ne(Yi,Ki,t,e);n.layers=this.layers,this.add(n);const s=new Ne(Yi,Ki,t,e);s.layers=this.layers,this.add(s);const o=new Ne(Yi,Ki,t,e);o.layers=this.layers,this.add(o);const a=new Ne(Yi,Ki,t,e);a.layers=this.layers,this.add(a);const l=new Ne(Yi,Ki,t,e);l.layers=this.layers,this.add(l);const c=new Ne(Yi,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fa extends Pe{constructor(t,e,i,n,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cn,super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Oc extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(En("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?ye:ze),this.texture=new Fa(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new it(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:dn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:fi});s.uniforms.tEquirect.value=e;const o=new z(n,s),a=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Oe),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}}const Ys=new R,kc=new R,zc=new Vt;class bi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ys.subVectors(i,e).cross(kc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ys),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||zc.getNormalMatrix(t),n=this.coplanarPoint(Ys).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Pn,Qn=new R;class xr{constructor(t=new bi,e=new bi,i=new bi,n=new bi,s=new bi,o=new bi){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni){const i=this.planes,n=t.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],x=n[13],v=n[14],S=n[15];if(i[0].setComponents(l-s,d-c,m-p,S-f).normalize(),i[1].setComponents(l+s,d+c,m+p,S+f).normalize(),i[2].setComponents(l+o,d+h,m+g,S+x).normalize(),i[3].setComponents(l-o,d-h,m-g,S-x).normalize(),i[4].setComponents(l-a,d-u,m-_,S-v).normalize(),e===ni)i[5].setComponents(l+a,d+u,m+_,S+v).normalize();else if(e===ds)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Qn.x=n.normal.x>0?t.max.x:t.min.x,Qn.y=n.normal.y>0?t.max.y:t.min.y,Qn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Qn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oa(){let r=null,t=!1,e=null,i=null;function n(s,o){e(s,o),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Hc(r,t){const e=t.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),p.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Ue extends ue{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let v=0;v<c;v++){const S=v*u-s;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,S=x+c*(f+1),C=x+1+c*(f+1),T=x+1+c*f;p.push(v,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gc=`#ifdef USE_ALPHAHASH
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
#endif`,th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eh=`#ifdef USE_IRIDESCENCE
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
#endif`,tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
}`,td=`uniform vec3 diffuse;
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
}`,ed=`#include <common>
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
}`,Ft={alphahash_fragment:Gc,alphahash_pars_fragment:Vc,alphamap_fragment:Wc,alphamap_pars_fragment:Xc,alphatest_fragment:qc,alphatest_pars_fragment:jc,aomap_fragment:Yc,aomap_pars_fragment:Kc,batching_pars_vertex:$c,batching_vertex:Zc,begin_vertex:Jc,beginnormal_vertex:Qc,bsdfs:th,iridescence_fragment:eh,bumpmap_pars_fragment:ih,clipping_planes_fragment:nh,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:rh,clipping_planes_vertex:oh,color_fragment:ah,color_pars_fragment:lh,color_pars_vertex:ch,color_vertex:hh,common:uh,cube_uv_reflection_fragment:dh,defaultnormal_vertex:fh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:gh,emissivemap_pars_fragment:_h,colorspace_fragment:yh,colorspace_pars_fragment:vh,envmap_fragment:xh,envmap_common_pars_fragment:Mh,envmap_pars_fragment:Sh,envmap_pars_vertex:wh,envmap_physical_pars_fragment:Nh,envmap_vertex:Eh,fog_vertex:bh,fog_pars_vertex:Th,fog_fragment:Ah,fog_pars_fragment:Ch,gradientmap_pars_fragment:Rh,lightmap_fragment:Ph,lightmap_pars_fragment:Lh,lights_lambert_fragment:Dh,lights_lambert_pars_fragment:Ih,lights_pars_begin:Uh,lights_toon_fragment:Bh,lights_toon_pars_fragment:Fh,lights_phong_fragment:Oh,lights_phong_pars_fragment:kh,lights_physical_fragment:zh,lights_physical_pars_fragment:Hh,lights_fragment_begin:Gh,lights_fragment_maps:Vh,lights_fragment_end:Wh,logdepthbuf_fragment:Xh,logdepthbuf_pars_fragment:qh,logdepthbuf_pars_vertex:jh,logdepthbuf_vertex:Yh,map_fragment:Kh,map_pars_fragment:$h,map_particle_fragment:Zh,map_particle_pars_fragment:Jh,metalnessmap_fragment:Qh,metalnessmap_pars_fragment:tu,morphcolor_vertex:eu,morphnormal_vertex:iu,morphtarget_pars_vertex:nu,morphtarget_vertex:su,normal_fragment_begin:ru,normal_fragment_maps:ou,normal_pars_fragment:au,normal_pars_vertex:lu,normal_vertex:cu,normalmap_pars_fragment:hu,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:du,clearcoat_pars_fragment:fu,iridescence_pars_fragment:pu,opaque_fragment:mu,packing:gu,premultiplied_alpha_fragment:_u,project_vertex:yu,dithering_fragment:vu,dithering_pars_fragment:xu,roughnessmap_fragment:Mu,roughnessmap_pars_fragment:Su,shadowmap_pars_fragment:wu,shadowmap_pars_vertex:Eu,shadowmap_vertex:bu,shadowmask_pars_fragment:Tu,skinbase_vertex:Au,skinning_pars_vertex:Cu,skinning_vertex:Ru,skinnormal_vertex:Pu,specularmap_fragment:Lu,specularmap_pars_fragment:Du,tonemapping_fragment:Iu,tonemapping_pars_fragment:Uu,transmission_fragment:Nu,transmission_pars_fragment:Bu,uv_pars_fragment:Fu,uv_pars_vertex:Ou,uv_vertex:ku,worldpos_vertex:zu,background_vert:Hu,background_frag:Gu,backgroundCube_vert:Vu,backgroundCube_frag:Wu,cube_vert:Xu,cube_frag:qu,depth_vert:ju,depth_frag:Yu,distanceRGBA_vert:Ku,distanceRGBA_frag:$u,equirect_vert:Zu,equirect_frag:Ju,linedashed_vert:Qu,linedashed_frag:td,meshbasic_vert:ed,meshbasic_frag:id,meshlambert_vert:nd,meshlambert_frag:sd,meshmatcap_vert:rd,meshmatcap_frag:od,meshnormal_vert:ad,meshnormal_frag:ld,meshphong_vert:cd,meshphong_frag:hd,meshphysical_vert:ud,meshphysical_frag:dd,meshtoon_vert:fd,meshtoon_frag:pd,points_vert:md,points_frag:gd,shadow_vert:_d,shadow_frag:yd,sprite_vert:vd,sprite_frag:xd},ot={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Ye={basic:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new bt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ae([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ae([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new bt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ae([ot.points,ot.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ae([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ae([ot.common,ot.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ae([ot.sprite,ot.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ae([ot.common,ot.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ae([ot.lights,ot.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ye.physical={uniforms:Ae([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const ts={r:0,b:0,g:0};function Md(r,t,e,i,n,s,o){const a=new bt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_s)?(h===void 0&&(h=new z(new it(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:dn(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(v.colorSpace)!==te,(u!==v||d!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new z(new Ue(2,2),new Ii({name:"BackgroundMaterial",uniforms:dn(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(ts,Na(r)),i.buffers.color.setClear(ts.r,ts.g,ts.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Sd(r,t,e,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(P,N,H,K,Y){let X=!1;if(o){const j=_(K,H,N);c!==j&&(c=j,p(c.object)),X=f(P,K,H,Y),X&&x(P,K,H,Y)}else{const j=N.wireframe===!0;(c.geometry!==K.id||c.program!==H.id||c.wireframe!==j)&&(c.geometry=K.id,c.program=H.id,c.wireframe=j,X=!0)}Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,I(P,N,H,K),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,N,H){const K=H.wireframe===!0;let Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let X=Y[N.id];X===void 0&&(X={},Y[N.id]=X);let j=X[K];return j===void 0&&(j=m(d()),X[K]=j),j}function m(P){const N=[],H=[],K=[];for(let Y=0;Y<n;Y++)N[Y]=0,H[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:K,object:P,attributes:{},index:null}}function f(P,N,H,K){const Y=c.attributes,X=N.attributes;let j=0;const nt=H.getAttributes();for(const st in nt)if(nt[st].location>=0){const $=Y[st];let at=X[st];if(at===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),$===void 0||$.attribute!==at||at&&$.data!==at.data)return!0;j++}return c.attributesNum!==j||c.index!==K}function x(P,N,H,K){const Y={},X=N.attributes;let j=0;const nt=H.getAttributes();for(const st in nt)if(nt[st].location>=0){let $=X[st];$===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const at={};at.attribute=$,$&&$.data&&(at.data=$.data),Y[st]=at,j++}c.attributes=Y,c.attributesNum=j,c.index=K}function v(){const P=c.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function S(P){C(P,0)}function C(P,N){const H=c.newAttributes,K=c.enabledAttributes,Y=c.attributeDivisors;H[P]=1,K[P]===0&&(r.enableVertexAttribArray(P),K[P]=1),Y[P]!==N&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),Y[P]=N)}function T(){const P=c.newAttributes,N=c.enabledAttributes;for(let H=0,K=N.length;H<K;H++)N[H]!==P[H]&&(r.disableVertexAttribArray(H),N[H]=0)}function A(P,N,H,K,Y,X,j){j===!0?r.vertexAttribIPointer(P,N,H,Y,X):r.vertexAttribPointer(P,N,H,K,Y,X)}function I(P,N,H,K){if(i.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=K.attributes,X=H.getAttributes(),j=N.defaultAttributeValues;for(const nt in X){const st=X[nt];if(st.location>=0){let V=Y[nt];if(V===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const $=V.normalized,at=V.itemSize,dt=e.get(V);if(dt===void 0)continue;const ft=dt.buffer,Tt=dt.type,gt=dt.bytesPerElement,wt=i.isWebGL2===!0&&(Tt===r.INT||Tt===r.UNSIGNED_INT||V.gpuType===va);if(V.isInterleavedBufferAttribute){const zt=V.data,F=zt.stride,le=V.offset;if(zt.isInstancedInterleavedBuffer){for(let yt=0;yt<st.locationSize;yt++)C(st.location+yt,zt.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let yt=0;yt<st.locationSize;yt++)S(st.location+yt);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let yt=0;yt<st.locationSize;yt++)A(st.location+yt,at/st.locationSize,Tt,$,F*gt,(le+at/st.locationSize*yt)*gt,wt)}else{if(V.isInstancedBufferAttribute){for(let zt=0;zt<st.locationSize;zt++)C(st.location+zt,V.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let zt=0;zt<st.locationSize;zt++)S(st.location+zt);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let zt=0;zt<st.locationSize;zt++)A(st.location+zt,at/st.locationSize,Tt,$,at*gt,at/st.locationSize*zt*gt,wt)}}else if(j!==void 0){const $=j[nt];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(st.location,$);break;case 3:r.vertexAttrib3fv(st.location,$);break;case 4:r.vertexAttrib4fv(st.location,$);break;default:r.vertexAttrib1fv(st.location,$)}}}}T()}function M(){O();for(const P in a){const N=a[P];for(const H in N){const K=N[H];for(const Y in K)g(K[Y].object),delete K[Y];delete N[H]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;const N=a[P.id];for(const H in N){const K=N[H];for(const Y in K)g(K[Y].object),delete K[Y];delete N[H]}delete a[P.id]}function B(P){for(const N in a){const H=a[N];if(H[P.id]===void 0)continue;const K=H[P.id];for(const Y in K)g(K[Y].object),delete K[Y];delete H[P.id]}}function O(){q(),h=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:O,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function wd(r,t,e,i){const n=i.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,d){if(d===0)return;let p,g;if(n)p=r,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,h,u,d),e.update(u,s,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ed(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||t.has("OES_texture_float"),C=v&&S,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:T}}function bd(r){const t=this;let e=null,i=0,n=!1,s=!1;const o=new bi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:i,v=x*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,p);for(let C=0;C!==v;++C)S[C]=e[C];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Td(r){let t=new WeakMap;function e(o,a){return a===ar?o.mapping=cn:a===lr&&(o.mapping=hn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ar||a===lr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Oc(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class ka extends Ba{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nn=4,Io=[.125,.215,.35,.446,.526,.582],Ci=20,Ks=new ka,Uo=new bt;let $s=null,Zs=0,Js=0;const Ti=(1+Math.sqrt(5))/2,$i=1/Ti,No=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Ti,$i),new R(0,Ti,-$i),new R($i,0,Ti),new R(-$i,0,Ti),new R(Ti,$i,0),new R(-Ti,$i,0)];class Bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($s,Zs,Js),t.scissorTest=!1,es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cn||t.mapping===hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:An,format:qe,colorSpace:si,depthBuffer:!1},n=Fo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ad(s)),this._blurMaterial=Cd(s,t,e)}return n}_compileMaterial(t){const e=new z(this._lodPlanes[0],t);this._renderer.compile(e,Ks)}_sceneToCubeUV(t,e,i,n){const a=new Ne(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uo),h.toneMapping=pi,h.autoClear=!1;const p=new _i({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new z(new it,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Uo),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;es(n,x*v,f>2?v:0,v,v),h.setRenderTarget(n),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cn||t.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oo());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;es(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ks)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=No[(n-1)%No.length];this._blur(t,n-1,n,s,o)}e.autoClear=i}_blur(t,e,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",s),this._halfBlur(o,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new z(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ci-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const f=[];let x=0;for(let A=0;A<Ci;++A){const I=A/_,M=Math.exp(-I*I/2);f.push(M),A===0?x+=M:A<m&&(x+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[n],C=3*S*(n>v-nn?n-v+nn:0),T=4*(this._cubeSize-S);es(e,C,T,3*S,2*S),l.setRenderTarget(e),l.render(u,Ks)}}function Ad(r){const t=[],e=[],i=[];let n=r;const s=r-nn+1+Io.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>r-nn?l=Io[o-r+nn-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,I=T>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(M,_*g*T),v.set(d,m*g*T);const w=[T,T,T,T,T,T];S.set(w,f*g*T)}const C=new ue;C.setAttribute("position",new we(x,_)),C.setAttribute("uv",new we(v,m)),C.setAttribute("faceIndex",new we(S,f)),t.push(C),n>nn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fo(r,t,e){const i=new Di(r,t,e);return i.texture.mapping=_s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Cd(r,t,e){const i=new Float32Array(Ci),n=new R(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Mr(),fragmentShader:`

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
	`}function Rd(r){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ar||l===lr,h=l===cn||l===hn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Bo(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new Bo(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Pd(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ld(r,t,e,i){const n={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete n[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],T=x[v+1],A=x[v+2];d.push(C,T,T,A,A,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,T=v+1,A=v+2;d.push(C,T,T,A,A,C)}}else return;const m=new(Ca(d)?Ua:Ia)(d,1);m.version=_;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dd(r,t,e,i){const n=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){r.drawElements(s,g,a,p*l),e.update(g,s,1)}function u(p,g,_){if(_===0)return;let m,f;if(n)m=r,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*l,_),e.update(g,s,_)}function d(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];e.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Id(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Ud(r,t){return r[0]-t[0]}function Nd(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Bd(r,t,e){const i={},n=new Float32Array(8),s=new WeakMap,o=new ee,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==_){let N=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),C===!0&&(M=3);let w=h.attributes.position.count*M,B=1;w>t.maxTextureSize&&(B=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const O=new Float32Array(w*B*4*_),q=new La(O,w,B,_);q.type=di,q.needsUpdate=!0;const P=M*4;for(let H=0;H<_;H++){const K=T[H],Y=A[H],X=I[H],j=w*B*4*H;for(let nt=0;nt<K.count;nt++){const st=nt*P;v===!0&&(o.fromBufferAttribute(K,nt),O[j+st+0]=o.x,O[j+st+1]=o.y,O[j+st+2]=o.z,O[j+st+3]=0),S===!0&&(o.fromBufferAttribute(Y,nt),O[j+st+4]=o.x,O[j+st+5]=o.y,O[j+st+6]=o.z,O[j+st+7]=0),C===!0&&(o.fromBufferAttribute(X,nt),O[j+st+8]=o.x,O[j+st+9]=o.y,O[j+st+10]=o.z,O[j+st+11]=X.itemSize===4?o.w:1)}}m={count:_,texture:q,size:new St(w,B)},s.set(h,m),h.addEventListener("dispose",N)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];i[h.id]=_}for(let S=0;S<g;S++){const C=_[S];C[0]=S,C[1]=d[S]}_.sort(Nd);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Ud);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const C=a[S],T=C[0],A=C[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+S)!==m[T]&&h.setAttribute("morphTarget"+S,m[T]),f&&h.getAttribute("morphNormal"+S)!==f[T]&&h.setAttribute("morphNormal"+S,f[T]),n[S]=A,x+=A):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),n[S]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function Fd(r,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class za extends Pe{constructor(t,e,i,n,s,o,a,l,c,h){if(h=h!==void 0?h:Pi,h!==Pi&&h!==un)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Pi&&(i=ui),i===void 0&&h===un&&(i=Ri),super(null,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ha=new Pe,Ga=new za(1,1);Ga.compareFunction=Aa;const Va=new La,Wa=new Mc,Xa=new Fa,zo=[],Ho=[],Go=new Float32Array(16),Vo=new Float32Array(9),Wo=new Float32Array(4);function mn(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=zo[n];if(s===void 0&&(s=new Float32Array(n),zo[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ce(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function he(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Ms(r,t){let e=Ho[t];e===void 0&&(e=new Int32Array(t),Ho[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Od(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function kd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2fv(this.addr,t),he(e,t)}}function zd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;r.uniform3fv(this.addr,t),he(e,t)}}function Hd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4fv(this.addr,t),he(e,t)}}function Gd(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,i))return;Wo.set(i),r.uniformMatrix2fv(this.addr,!1,Wo),he(e,i)}}function Vd(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,i))return;Vo.set(i),r.uniformMatrix3fv(this.addr,!1,Vo),he(e,i)}}function Wd(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,i))return;Go.set(i),r.uniformMatrix4fv(this.addr,!1,Go),he(e,i)}}function Xd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function qd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2iv(this.addr,t),he(e,t)}}function jd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3iv(this.addr,t),he(e,t)}}function Yd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4iv(this.addr,t),he(e,t)}}function Kd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function $d(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2uiv(this.addr,t),he(e,t)}}function Zd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3uiv(this.addr,t),he(e,t)}}function Jd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4uiv(this.addr,t),he(e,t)}}function Qd(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const s=this.type===r.SAMPLER_2D_SHADOW?Ga:Ha;e.setTexture2D(t||s,n)}function tf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Wa,n)}function ef(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Xa,n)}function nf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Va,n)}function sf(r){switch(r){case 5126:return Od;case 35664:return kd;case 35665:return zd;case 35666:return Hd;case 35674:return Gd;case 35675:return Vd;case 35676:return Wd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return jd;case 35669:case 35673:return Yd;case 5125:return Kd;case 36294:return $d;case 36295:return Zd;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Qd;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return ef;case 36289:case 36303:case 36311:case 36292:return nf}}function rf(r,t){r.uniform1fv(this.addr,t)}function of(r,t){const e=mn(t,this.size,2);r.uniform2fv(this.addr,e)}function af(r,t){const e=mn(t,this.size,3);r.uniform3fv(this.addr,e)}function lf(r,t){const e=mn(t,this.size,4);r.uniform4fv(this.addr,e)}function cf(r,t){const e=mn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function hf(r,t){const e=mn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function uf(r,t){const e=mn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function df(r,t){r.uniform1iv(this.addr,t)}function ff(r,t){r.uniform2iv(this.addr,t)}function pf(r,t){r.uniform3iv(this.addr,t)}function mf(r,t){r.uniform4iv(this.addr,t)}function gf(r,t){r.uniform1uiv(this.addr,t)}function _f(r,t){r.uniform2uiv(this.addr,t)}function yf(r,t){r.uniform3uiv(this.addr,t)}function vf(r,t){r.uniform4uiv(this.addr,t)}function xf(r,t,e){const i=this.cache,n=t.length,s=Ms(e,n);ce(i,s)||(r.uniform1iv(this.addr,s),he(i,s));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Ha,s[o])}function Mf(r,t,e){const i=this.cache,n=t.length,s=Ms(e,n);ce(i,s)||(r.uniform1iv(this.addr,s),he(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Wa,s[o])}function Sf(r,t,e){const i=this.cache,n=t.length,s=Ms(e,n);ce(i,s)||(r.uniform1iv(this.addr,s),he(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Xa,s[o])}function wf(r,t,e){const i=this.cache,n=t.length,s=Ms(e,n);ce(i,s)||(r.uniform1iv(this.addr,s),he(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Va,s[o])}function Ef(r){switch(r){case 5126:return rf;case 35664:return of;case 35665:return af;case 35666:return lf;case 35674:return cf;case 35675:return hf;case 35676:return uf;case 5124:case 35670:return df;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return _f;case 36295:return yf;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return wf}}class bf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=sf(e.type)}}class Tf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ef(e.type)}}class Af{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(t,e[a.id],i)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function Xo(r,t){r.seq.push(t),r.map[t.id]=t}function Cf(r,t,e){const i=r.name,n=i.length;for(Qs.lastIndex=0;;){const s=Qs.exec(i),o=Qs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Xo(e,c===void 0?new bf(a,r,t):new Tf(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Af(a),Xo(e,u)),e=u}}}class os{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),o=t.getUniformLocation(e,s.name);Cf(s,o,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function qo(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const Rf=37297;let Pf=0;function Lf(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Df(r){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(r);let i;switch(t===e?i="":t===us&&e===hs?i="LinearDisplayP3ToLinearSRGB":t===hs&&e===us&&(i="LinearSRGBToLinearDisplayP3"),r){case si:case vs:return[i,"LinearTransferOETF"];case ye:case _r:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function jo(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Lf(r.getShaderSource(t),o)}else return n}function If(r,t){const e=Df(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Uf(r,t){let e;switch(t){case Pl:e="Linear";break;case Ll:e="Reinhard";break;case Dl:e="OptimizedCineon";break;case Il:e="ACESFilmic";break;case Nl:e="AgX";break;case Ul:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Nf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sn).join(`
`)}function Bf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sn).join(`
`)}function Ff(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Of(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function sn(r){return r!==""}function Yo(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ko(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function dr(r){return r.replace(kf,Hf)}const zf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hf(r,t){let e=Ft[t];if(e===void 0){const i=zf.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return dr(e)}const Gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(r){return r.replace(Gf,Vf)}function Vf(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Zo(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wf(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_a?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function Xf(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case cn:case hn:t="ENVMAP_TYPE_CUBE";break;case _s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qf(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case hn:t="ENVMAP_MODE_REFRACTION";break}return t}function jf(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gs:t="ENVMAP_BLENDING_MULTIPLY";break;case Cl:t="ENVMAP_BLENDING_MIX";break;case Rl:t="ENVMAP_BLENDING_ADD";break}return t}function Yf(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Kf(r,t,e,i){const n=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Wf(e),c=Xf(e),h=qf(e),u=jf(e),d=Yf(e),p=e.isWebGL2?"":Nf(e),g=Bf(e),_=Ff(s),m=n.createProgram();let f,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sn).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sn).join(`
`),x.length>0&&(x+=`
`)):(f=[Zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),x=[p,Zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==pi?Uf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,If("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sn).join(`
`)),o=dr(o),o=Yo(o,e),o=Ko(o,e),a=dr(a),a=Yo(a,e),a=Ko(a,e),o=$o(o),a=$o(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+f+o,C=v+x+a,T=qo(n,n.VERTEX_SHADER,S),A=qo(n,n.FRAGMENT_SHADER,C);n.attachShader(m,T),n.attachShader(m,A),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function I(O){if(r.debug.checkShaderErrors){const q=n.getProgramInfoLog(m).trim(),P=n.getShaderInfoLog(T).trim(),N=n.getShaderInfoLog(A).trim();let H=!0,K=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,T,A);else{const Y=jo(n,T,"vertex"),X=jo(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Y+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||N==="")&&(K=!1);K&&(O.diagnostics={runnable:H,programLog:q,vertexShader:{log:P,prefix:f},fragmentShader:{log:N,prefix:x}})}n.deleteShader(T),n.deleteShader(A),M=new os(n,m),w=Of(n,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=n.getProgramParameter(m,Rf)),B},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let $f=0;class Zf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jf(t),e.set(t,i)),i}}class Jf{constructor(t){this.id=$f++,this.code=t,this.usedTimes=0}}function Qf(r,t,e,i,n,s,o){const a=new vr,l=new Zf,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,B,O,q){const P=O.fog,N=q.geometry,H=M.isMeshStandardMaterial?O.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),Y=K&&K.mapping===_s?K.image.height:null,X=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,nt=j!==void 0?j.length:0;let st=0;N.morphAttributes.position!==void 0&&(st=1),N.morphAttributes.normal!==void 0&&(st=2),N.morphAttributes.color!==void 0&&(st=3);let V,$,at,dt;if(X){const Ee=Ye[X];V=Ee.vertexShader,$=Ee.fragmentShader}else V=M.vertexShader,$=M.fragmentShader,l.update(M),at=l.getVertexShaderID(M),dt=l.getFragmentShaderID(M);const ft=r.getRenderTarget(),Tt=q.isInstancedMesh===!0,gt=q.isBatchedMesh===!0,wt=!!M.map,zt=!!M.matcap,F=!!K,le=!!M.aoMap,yt=!!M.lightMap,Lt=!!M.bumpMap,_t=!!M.normalMap,$t=!!M.displacementMap,Nt=!!M.emissiveMap,b=!!M.metalnessMap,y=!!M.roughnessMap,D=M.anisotropy>0,J=M.clearcoat>0,Z=M.iridescence>0,tt=M.sheen>0,vt=M.transmission>0,ht=D&&!!M.anisotropyMap,pt=J&&!!M.clearcoatMap,Ct=J&&!!M.clearcoatNormalMap,Ot=J&&!!M.clearcoatRoughnessMap,et=Z&&!!M.iridescenceMap,jt=Z&&!!M.iridescenceThicknessMap,Wt=tt&&!!M.sheenColorMap,Dt=tt&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,mt=!!M.specularColorMap,Bt=!!M.specularIntensityMap,qt=vt&&!!M.transmissionMap,ne=vt&&!!M.thicknessMap,Ht=!!M.gradientMap,rt=!!M.alphaMap,L=M.alphaTest>0,lt=!!M.alphaHash,ct=!!M.extensions,Rt=!!N.attributes.uv1,Et=!!N.attributes.uv2,Zt=!!N.attributes.uv3;let Jt=pi;return M.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Jt=r.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:$,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:gt,instancing:Tt,instancingColor:Tt&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:si,map:wt,matcap:zt,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:Y,aoMap:le,lightMap:yt,bumpMap:Lt,normalMap:_t,displacementMap:d&&$t,emissiveMap:Nt,normalMapObjectSpace:_t&&M.normalMapType===Yl,normalMapTangentSpace:_t&&M.normalMapType===ys,metalnessMap:b,roughnessMap:y,anisotropy:D,anisotropyMap:ht,clearcoat:J,clearcoatMap:pt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Ot,iridescence:Z,iridescenceMap:et,iridescenceThicknessMap:jt,sheen:tt,sheenColorMap:Wt,sheenRoughnessMap:Dt,specularMap:Mt,specularColorMap:mt,specularIntensityMap:Bt,transmission:vt,transmissionMap:qt,thicknessMap:ne,gradientMap:Ht,opaque:M.transparent===!1&&M.blending===rn,alphaMap:rt,alphaTest:L,alphaHash:lt,combine:M.combine,mapUv:wt&&_(M.map.channel),aoMapUv:le&&_(M.aoMap.channel),lightMapUv:yt&&_(M.lightMap.channel),bumpMapUv:Lt&&_(M.bumpMap.channel),normalMapUv:_t&&_(M.normalMap.channel),displacementMapUv:$t&&_(M.displacementMap.channel),emissiveMapUv:Nt&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:ht&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(M.sheenRoughnessMap.channel),specularMapUv:Mt&&_(M.specularMap.channel),specularColorMapUv:mt&&_(M.specularColorMap.channel),specularIntensityMapUv:Bt&&_(M.specularIntensityMap.channel),transmissionMapUv:qt&&_(M.transmissionMap.channel),thicknessMapUv:ne&&_(M.thicknessMap.channel),alphaMapUv:rt&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_t||D),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:Et,vertexUv3s:Zt,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(wt||rt),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:st,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Jt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:wt&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ke,flipSided:M.side===Re,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ct&&M.extensions.derivatives===!0,extensionFragDepth:ct&&M.extensions.fragDepth===!0,extensionDrawBuffers:ct&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)w.push(B),w.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(x(w,M),v(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const w=g[M.type];let B;if(w){const O=Ye[w];B=Uc.clone(O.uniforms)}else B=M.uniforms;return B}function C(M,w){let B;for(let O=0,q=c.length;O<q;O++){const P=c[O];if(P.cacheKey===w){B=P,++B.usedTimes;break}}return B===void 0&&(B=new Kf(r,w,M,s),c.push(B)),B}function T(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:I}}function tp(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function ep(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Jo(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Qo(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,p,g,_,m){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||ep),i.length>1&&i.sort(d||Jo),n.length>1&&n.sort(d||Jo)}function h(){for(let u=t,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function ip(){let r=new WeakMap;function t(i,n){const s=r.get(i);let o;return s===void 0?(o=new Qo,r.set(i,[o])):n>=s.length?(o=new Qo,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function np(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new bt};break;case"SpotLight":e={position:new R,direction:new R,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function sp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let rp=0;function op(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ap(r,t){const e=new np,i=sp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);const s=new R,o=new re,a=new re;function l(h,u){let d=0,p=0,g=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,S=0,C=0,T=0,A=0,I=0,M=0;h.sort(op);const w=u===!0?Math.PI:1;for(let O=0,q=h.length;O<q;O++){const P=h[O],N=P.color,H=P.intensity,K=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*H*w,p+=N.g*H*w,g+=N.b*H*w;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],H);M++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const j=P.shadow,nt=i.get(P);nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.directionalShadow[_]=nt,n.directionalShadowMap[_]=Y,n.directionalShadowMatrix[_]=P.shadow.matrix,S++}n.directional[_]=X,_++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(N).multiplyScalar(H*w),X.distance=K,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[f]=X;const j=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,j.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[f]=j.matrix,P.castShadow){const nt=i.get(P);nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.spotShadow[f]=nt,n.spotShadowMap[f]=Y,T++}f++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(N).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=X,x++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*w),X.distance=P.distance,X.decay=P.decay,P.castShadow){const j=P.shadow,nt=i.get(P);nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=P.shadow.matrix,C++}n.point[m]=X,m++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(H*w),X.groundColor.copy(P.groundColor).multiplyScalar(H*w),n.hemi[v]=X,v++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const B=n.hash;(B.directionalLength!==_||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==x||B.hemiLength!==v||B.numDirectionalShadows!==S||B.numPointShadows!==C||B.numSpotShadows!==T||B.numSpotMaps!==A||B.numLightProbes!==M)&&(n.directional.length=_,n.spot.length=f,n.rectArea.length=x,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+A-I,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=M,B.directionalLength=_,B.pointLength=m,B.spotLength=f,B.rectAreaLength=x,B.hemiLength=v,B.numDirectionalShadows=S,B.numPointShadows=C,B.numSpotShadows=T,B.numSpotMaps=A,B.numLightProbes=M,n.version=rp++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const S=h[x];if(S.isDirectionalLight){const C=n.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),d++}else if(S.isSpotLight){const C=n.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const C=n.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const C=n.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:n}}function ta(r,t){const e=new ap(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lp(r,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new ta(r,t),e.set(s,[l])):o>=a.length?(l=new ta(r,t),a.push(l)):l=a[o],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class cp extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hp extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const up=`void main() {
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
}`;function fp(r,t,e){let i=new xr;const n=new St,s=new St,o=new ee,a=new cp({depthPacking:jl}),l=new hp,c={},h=e.maxTextureSize,u={[gi]:Re,[Re]:gi,[ke]:ke},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:up,fragmentShader:dp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ue;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new z(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let f=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=r.getRenderTarget(),w=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),O=r.state;O.setBlending(fi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const q=f!==ii&&this.type===ii,P=f===ii&&this.type!==ii;for(let N=0,H=T.length;N<H;N++){const K=T[N],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const X=Y.getFrameExtents();if(n.multiply(X),s.copy(Y.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/X.x),n.x=s.x*X.x,Y.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/X.y),n.y=s.y*X.y,Y.mapSize.y=s.y)),Y.map===null||q===!0||P===!0){const nt=this.type!==ii?{minFilter:Se,magFilter:Se}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Di(n.x,n.y,nt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const j=Y.getViewportCount();for(let nt=0;nt<j;nt++){const st=Y.getViewport(nt);o.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),O.viewport(o),Y.updateMatrices(K,nt),i=Y.getFrustum(),S(A,I,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ii&&x(Y,I),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(M,w,B)};function x(T,A){const I=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Di(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,I,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,I,p,_,null)}function v(T,A,I,M){let w=null;const B=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)w=B;else if(w=I.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=w.uuid,q=A.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let N=P[q];N===void 0&&(N=w.clone(),P[q]=N,A.addEventListener("dispose",C)),w=N}if(w.visible=A.visible,w.wireframe=A.wireframe,M===ii?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=r.properties.get(w);O.light=I}return w}function S(T,A,I,M,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===ii)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const q=t.update(T),P=T.material;if(Array.isArray(P)){const N=q.groups;for(let H=0,K=N.length;H<K;H++){const Y=N[H],X=P[Y.materialIndex];if(X&&X.visible){const j=v(T,X,M,w);T.onBeforeShadow(r,T,A,I,q,j,Y),r.renderBufferDirect(I,null,q,j,T,Y),T.onAfterShadow(r,T,A,I,q,j,Y)}}}else if(P.visible){const N=v(T,P,M,w);T.onBeforeShadow(r,T,A,I,q,N,null),r.renderBufferDirect(I,null,q,N,T,null),T.onAfterShadow(r,T,A,I,q,N,null)}}const O=T.children;for(let q=0,P=O.length;q<P;q++)S(O[q],A,I,M,w)}function C(T){T.target.removeEventListener("dispose",C);for(const I in c){const M=c[I],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function pp(r,t,e){const i=e.isWebGL2;function n(){let L=!1;const lt=new ee;let ct=null;const Rt=new ee(0,0,0,0);return{setMask:function(Et){ct!==Et&&!L&&(r.colorMask(Et,Et,Et,Et),ct=Et)},setLocked:function(Et){L=Et},setClear:function(Et,Zt,Jt,de,Ee){Ee===!0&&(Et*=de,Zt*=de,Jt*=de),lt.set(Et,Zt,Jt,de),Rt.equals(lt)===!1&&(r.clearColor(Et,Zt,Jt,de),Rt.copy(lt))},reset:function(){L=!1,ct=null,Rt.set(-1,0,0,0)}}}function s(){let L=!1,lt=null,ct=null,Rt=null;return{setTest:function(Et){Et?gt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(Et){lt!==Et&&!L&&(r.depthMask(Et),lt=Et)},setFunc:function(Et){if(ct!==Et){switch(Et){case Ml:r.depthFunc(r.NEVER);break;case Sl:r.depthFunc(r.ALWAYS);break;case wl:r.depthFunc(r.LESS);break;case as:r.depthFunc(r.LEQUAL);break;case El:r.depthFunc(r.EQUAL);break;case bl:r.depthFunc(r.GEQUAL);break;case Tl:r.depthFunc(r.GREATER);break;case Al:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ct=Et}},setLocked:function(Et){L=Et},setClear:function(Et){Rt!==Et&&(r.clearDepth(Et),Rt=Et)},reset:function(){L=!1,lt=null,ct=null,Rt=null}}}function o(){let L=!1,lt=null,ct=null,Rt=null,Et=null,Zt=null,Jt=null,de=null,Ee=null;return{setTest:function(Qt){L||(Qt?gt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!L&&(r.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,be,je){(ct!==Qt||Rt!==be||Et!==je)&&(r.stencilFunc(Qt,be,je),ct=Qt,Rt=be,Et=je)},setOp:function(Qt,be,je){(Zt!==Qt||Jt!==be||de!==je)&&(r.stencilOp(Qt,be,je),Zt=Qt,Jt=be,de=je)},setLocked:function(Qt){L=Qt},setClear:function(Qt){Ee!==Qt&&(r.clearStencil(Qt),Ee=Qt)},reset:function(){L=!1,lt=null,ct=null,Rt=null,Et=null,Zt=null,Jt=null,de=null,Ee=null}}}const a=new n,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,C=null,T=null,A=null,I=null,M=new bt(0,0,0),w=0,B=!1,O=null,q=null,P=null,N=null,H=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=X>=2);let nt=null,st={};const V=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),at=new ee().fromArray(V),dt=new ee().fromArray($);function ft(L,lt,ct,Rt){const Et=new Uint8Array(4),Zt=r.createTexture();r.bindTexture(L,Zt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Jt=0;Jt<ct;Jt++)i&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(lt,0,r.RGBA,1,1,Rt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(lt+Jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return Zt}const Tt={};Tt[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),Tt[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Tt[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Tt[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(r.DEPTH_TEST),l.setFunc(as),Nt(!1),b(Nr),gt(r.CULL_FACE),_t(fi);function gt(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function wt(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function zt(L,lt){return p[L]!==lt?(r.bindFramebuffer(L,lt),p[L]=lt,i&&(L===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=lt),L===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=lt)),!0):!1}function F(L,lt){let ct=_,Rt=!1;if(L)if(ct=g.get(lt),ct===void 0&&(ct=[],g.set(lt,ct)),L.isWebGLMultipleRenderTargets){const Et=L.texture;if(ct.length!==Et.length||ct[0]!==r.COLOR_ATTACHMENT0){for(let Zt=0,Jt=Et.length;Zt<Jt;Zt++)ct[Zt]=r.COLOR_ATTACHMENT0+Zt;ct.length=Et.length,Rt=!0}}else ct[0]!==r.COLOR_ATTACHMENT0&&(ct[0]=r.COLOR_ATTACHMENT0,Rt=!0);else ct[0]!==r.BACK&&(ct[0]=r.BACK,Rt=!0);Rt&&(e.isWebGL2?r.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function le(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const yt={[Ai]:r.FUNC_ADD,[ol]:r.FUNC_SUBTRACT,[al]:r.FUNC_REVERSE_SUBTRACT};if(i)yt[Or]=r.MIN,yt[kr]=r.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(yt[Or]=L.MIN_EXT,yt[kr]=L.MAX_EXT)}const Lt={[ll]:r.ZERO,[cl]:r.ONE,[hl]:r.SRC_COLOR,[rr]:r.SRC_ALPHA,[gl]:r.SRC_ALPHA_SATURATE,[pl]:r.DST_COLOR,[dl]:r.DST_ALPHA,[ul]:r.ONE_MINUS_SRC_COLOR,[or]:r.ONE_MINUS_SRC_ALPHA,[ml]:r.ONE_MINUS_DST_COLOR,[fl]:r.ONE_MINUS_DST_ALPHA,[_l]:r.CONSTANT_COLOR,[yl]:r.ONE_MINUS_CONSTANT_COLOR,[vl]:r.CONSTANT_ALPHA,[xl]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(L,lt,ct,Rt,Et,Zt,Jt,de,Ee,Qt){if(L===fi){f===!0&&(wt(r.BLEND),f=!1);return}if(f===!1&&(gt(r.BLEND),f=!0),L!==rl){if(L!==x||Qt!==B){if((v!==Ai||T!==Ai)&&(r.blendEquation(r.FUNC_ADD),v=Ai,T=Ai),Qt)switch(L){case rn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sr:r.blendFunc(r.ONE,r.ONE);break;case Br:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fr:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Br:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fr:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,C=null,A=null,I=null,M.set(0,0,0),w=0,x=L,B=Qt}return}Et=Et||lt,Zt=Zt||ct,Jt=Jt||Rt,(lt!==v||Et!==T)&&(r.blendEquationSeparate(yt[lt],yt[Et]),v=lt,T=Et),(ct!==S||Rt!==C||Zt!==A||Jt!==I)&&(r.blendFuncSeparate(Lt[ct],Lt[Rt],Lt[Zt],Lt[Jt]),S=ct,C=Rt,A=Zt,I=Jt),(de.equals(M)===!1||Ee!==w)&&(r.blendColor(de.r,de.g,de.b,Ee),M.copy(de),w=Ee),x=L,B=!1}function $t(L,lt){L.side===ke?wt(r.CULL_FACE):gt(r.CULL_FACE);let ct=L.side===Re;lt&&(ct=!ct),Nt(ct),L.blending===rn&&L.transparent===!1?_t(fi):_t(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Rt=L.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(L){O!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),O=L)}function b(L){L!==el?(gt(r.CULL_FACE),L!==q&&(L===Nr?r.cullFace(r.BACK):L===il?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),q=L}function y(L){L!==P&&(Y&&r.lineWidth(L),P=L)}function D(L,lt,ct){L?(gt(r.POLYGON_OFFSET_FILL),(N!==lt||H!==ct)&&(r.polygonOffset(lt,ct),N=lt,H=ct)):wt(r.POLYGON_OFFSET_FILL)}function J(L){L?gt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Z(L){L===void 0&&(L=r.TEXTURE0+K-1),nt!==L&&(r.activeTexture(L),nt=L)}function tt(L,lt,ct){ct===void 0&&(nt===null?ct=r.TEXTURE0+K-1:ct=nt);let Rt=st[ct];Rt===void 0&&(Rt={type:void 0,texture:void 0},st[ct]=Rt),(Rt.type!==L||Rt.texture!==lt)&&(nt!==ct&&(r.activeTexture(ct),nt=ct),r.bindTexture(L,lt||Tt[L]),Rt.type=L,Rt.texture=lt)}function vt(){const L=st[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(L){at.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),at.copy(L))}function qt(L){dt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),dt.copy(L))}function ne(L,lt){let ct=u.get(lt);ct===void 0&&(ct=new WeakMap,u.set(lt,ct));let Rt=ct.get(L);Rt===void 0&&(Rt=r.getUniformBlockIndex(lt,L.name),ct.set(L,Rt))}function Ht(L,lt){const Rt=u.get(lt).get(L);h.get(lt)!==Rt&&(r.uniformBlockBinding(lt,Rt,L.__bindingPointIndex),h.set(lt,Rt))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},nt=null,st={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,C=null,T=null,A=null,I=null,M=new bt(0,0,0),w=0,B=!1,O=null,q=null,P=null,N=null,H=null,at.set(0,0,r.canvas.width,r.canvas.height),dt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:gt,disable:wt,bindFramebuffer:zt,drawBuffers:F,useProgram:le,setBlending:_t,setMaterial:$t,setFlipSided:Nt,setCullFace:b,setLineWidth:y,setPolygonOffset:D,setScissorTest:J,activeTexture:Z,bindTexture:tt,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:pt,texImage2D:Mt,texImage3D:mt,updateUBOMapping:ne,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:Dt,texSubImage2D:Ct,texSubImage3D:Ot,compressedTexSubImage2D:et,compressedTexSubImage3D:jt,scissor:Bt,viewport:qt,reset:rt}}function mp(r,t,e,i,n,s,o){const a=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):ps("canvas")}function _(b,y,D,J){let Z=1;if((b.width>J||b.height>J)&&(Z=J/Math.max(b.width,b.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const tt=y?fs:Math.floor,vt=tt(Z*b.width),ht=tt(Z*b.height);u===void 0&&(u=g(vt,ht));const pt=D?g(vt,ht):u;return pt.width=vt,pt.height=ht,pt.getContext("2d").drawImage(b,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+vt+"x"+ht+")."),pt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ur(b.width)&&ur(b.height)}function f(b){return a?!1:b.wrapS!==Xe||b.wrapT!==Xe||b.minFilter!==Se&&b.minFilter!==Oe}function x(b,y){return b.generateMipmaps&&y&&b.minFilter!==Se&&b.minFilter!==Oe}function v(b){r.generateMipmap(b)}function S(b,y,D,J,Z=!1){if(a===!1)return y;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=y;if(y===r.RED&&(D===r.FLOAT&&(tt=r.R32F),D===r.HALF_FLOAT&&(tt=r.R16F),D===r.UNSIGNED_BYTE&&(tt=r.R8)),y===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(tt=r.R8UI),D===r.UNSIGNED_SHORT&&(tt=r.R16UI),D===r.UNSIGNED_INT&&(tt=r.R32UI),D===r.BYTE&&(tt=r.R8I),D===r.SHORT&&(tt=r.R16I),D===r.INT&&(tt=r.R32I)),y===r.RG&&(D===r.FLOAT&&(tt=r.RG32F),D===r.HALF_FLOAT&&(tt=r.RG16F),D===r.UNSIGNED_BYTE&&(tt=r.RG8)),y===r.RGBA){const vt=Z?cs:Yt.getTransfer(J);D===r.FLOAT&&(tt=r.RGBA32F),D===r.HALF_FLOAT&&(tt=r.RGBA16F),D===r.UNSIGNED_BYTE&&(tt=vt===te?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function C(b,y,D){return x(b,D)===!0||b.isFramebufferTexture&&b.minFilter!==Se&&b.minFilter!==Oe?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function T(b){return b===Se||b===zr||b===Ts?r.NEAREST:r.LINEAR}function A(b){const y=b.target;y.removeEventListener("dispose",A),M(y),y.isVideoTexture&&h.delete(y)}function I(b){const y=b.target;y.removeEventListener("dispose",I),B(y)}function M(b){const y=i.get(b);if(y.__webglInit===void 0)return;const D=b.source,J=d.get(D);if(J){const Z=J[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(b),Object.keys(J).length===0&&d.delete(D)}i.remove(b)}function w(b){const y=i.get(b);r.deleteTexture(y.__webglTexture);const D=b.source,J=d.get(D);delete J[y.__cacheKey],o.memory.textures--}function B(b){const y=b.texture,D=i.get(b),J=i.get(y);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(D.__webglFramebuffer[Z]))for(let tt=0;tt<D.__webglFramebuffer[Z].length;tt++)r.deleteFramebuffer(D.__webglFramebuffer[Z][tt]);else r.deleteFramebuffer(D.__webglFramebuffer[Z]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[Z])}else{if(Array.isArray(D.__webglFramebuffer))for(let Z=0;Z<D.__webglFramebuffer.length;Z++)r.deleteFramebuffer(D.__webglFramebuffer[Z]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Z=0;Z<D.__webglColorRenderbuffer.length;Z++)D.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[Z]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,tt=y.length;Z<tt;Z++){const vt=i.get(y[Z]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),o.memory.textures--),i.remove(y[Z])}i.remove(y),i.remove(b)}let O=0;function q(){O=0}function P(){const b=O;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),O+=1,b}function N(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function H(b,y){const D=i.get(b);if(b.isVideoTexture&&$t(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(D,b,y);return}}e.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+y)}function K(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){at(D,b,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+y)}function Y(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){at(D,b,y);return}e.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+y)}function X(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){dt(D,b,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+y)}const j={[ls]:r.REPEAT,[Xe]:r.CLAMP_TO_EDGE,[cr]:r.MIRRORED_REPEAT},nt={[Se]:r.NEAREST,[zr]:r.NEAREST_MIPMAP_NEAREST,[Ts]:r.NEAREST_MIPMAP_LINEAR,[Oe]:r.LINEAR,[Fl]:r.LINEAR_MIPMAP_NEAREST,[Tn]:r.LINEAR_MIPMAP_LINEAR},st={[Kl]:r.NEVER,[ec]:r.ALWAYS,[$l]:r.LESS,[Aa]:r.LEQUAL,[Zl]:r.EQUAL,[tc]:r.GEQUAL,[Jl]:r.GREATER,[Ql]:r.NOTEQUAL};function V(b,y,D){if(D?(r.texParameteri(b,r.TEXTURE_WRAP_S,j[y.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,j[y.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,j[y.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,nt[y.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,nt[y.minFilter])):(r.texParameteri(b,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(b,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==Xe||y.wrapT!==Xe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,r.TEXTURE_MAG_FILTER,T(y.magFilter)),r.texParameteri(b,r.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Se&&y.minFilter!==Oe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,st[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Se||y.minFilter!==Ts&&y.minFilter!==Tn||y.type===di&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===An&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(r.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function $(b,y){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));const J=y.source;let Z=d.get(J);Z===void 0&&(Z={},d.set(J,Z));const tt=N(y);if(tt!==b.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Z[tt].usedTimes++;const vt=Z[b.__cacheKey];vt!==void 0&&(Z[b.__cacheKey].usedTimes--,vt.usedTimes===0&&w(y)),b.__cacheKey=tt,b.__webglTexture=Z[tt].texture}return D}function at(b,y,D){let J=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=r.TEXTURE_3D);const Z=$(b,y),tt=y.source;e.bindTexture(J,b.__webglTexture,r.TEXTURE0+D);const vt=i.get(tt);if(tt.version!==vt.__version||Z===!0){e.activeTexture(r.TEXTURE0+D);const ht=Yt.getPrimaries(Yt.workingColorSpace),pt=y.colorSpace===ze?null:Yt.getPrimaries(y.colorSpace),Ct=y.colorSpace===ze||ht===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Ot=f(y)&&m(y.image)===!1;let et=_(y.image,Ot,!1,n.maxTextureSize);et=Nt(y,et);const jt=m(et)||a,Wt=s.convert(y.format,y.colorSpace);let Dt=s.convert(y.type),Mt=S(y.internalFormat,Wt,Dt,y.colorSpace,y.isVideoTexture);V(J,y,jt);let mt;const Bt=y.mipmaps,qt=a&&y.isVideoTexture!==!0&&Mt!==ba,ne=vt.__version===void 0||Z===!0,Ht=C(y,et,jt);if(y.isDepthTexture)Mt=r.DEPTH_COMPONENT,a?y.type===di?Mt=r.DEPTH_COMPONENT32F:y.type===ui?Mt=r.DEPTH_COMPONENT24:y.type===Ri?Mt=r.DEPTH24_STENCIL8:Mt=r.DEPTH_COMPONENT16:y.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Pi&&Mt===r.DEPTH_COMPONENT&&y.type!==gr&&y.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ui,Dt=s.convert(y.type)),y.format===un&&Mt===r.DEPTH_COMPONENT&&(Mt=r.DEPTH_STENCIL,y.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ri,Dt=s.convert(y.type))),ne&&(qt?e.texStorage2D(r.TEXTURE_2D,1,Mt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Mt,et.width,et.height,0,Wt,Dt,null));else if(y.isDataTexture)if(Bt.length>0&&jt){qt&&ne&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,Bt[0].width,Bt[0].height);for(let rt=0,L=Bt.length;rt<L;rt++)mt=Bt[rt],qt?e.texSubImage2D(r.TEXTURE_2D,rt,0,0,mt.width,mt.height,Wt,Dt,mt.data):e.texImage2D(r.TEXTURE_2D,rt,Mt,mt.width,mt.height,0,Wt,Dt,mt.data);y.generateMipmaps=!1}else qt?(ne&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,Wt,Dt,et.data)):e.texImage2D(r.TEXTURE_2D,0,Mt,et.width,et.height,0,Wt,Dt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Mt,Bt[0].width,Bt[0].height,et.depth);for(let rt=0,L=Bt.length;rt<L;rt++)mt=Bt[rt],y.format!==qe?Wt!==null?qt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,et.depth,Wt,mt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,Mt,mt.width,mt.height,et.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,et.depth,Wt,Dt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,Mt,mt.width,mt.height,et.depth,0,Wt,Dt,mt.data)}else{qt&&ne&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,Bt[0].width,Bt[0].height);for(let rt=0,L=Bt.length;rt<L;rt++)mt=Bt[rt],y.format!==qe?Wt!==null?qt?e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,mt.width,mt.height,Wt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,Mt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(r.TEXTURE_2D,rt,0,0,mt.width,mt.height,Wt,Dt,mt.data):e.texImage2D(r.TEXTURE_2D,rt,Mt,mt.width,mt.height,0,Wt,Dt,mt.data)}else if(y.isDataArrayTexture)qt?(ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Mt,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Wt,Dt,et.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Mt,et.width,et.height,et.depth,0,Wt,Dt,et.data);else if(y.isData3DTexture)qt?(ne&&e.texStorage3D(r.TEXTURE_3D,Ht,Mt,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Wt,Dt,et.data)):e.texImage3D(r.TEXTURE_3D,0,Mt,et.width,et.height,et.depth,0,Wt,Dt,et.data);else if(y.isFramebufferTexture){if(ne)if(qt)e.texStorage2D(r.TEXTURE_2D,Ht,Mt,et.width,et.height);else{let rt=et.width,L=et.height;for(let lt=0;lt<Ht;lt++)e.texImage2D(r.TEXTURE_2D,lt,Mt,rt,L,0,Wt,Dt,null),rt>>=1,L>>=1}}else if(Bt.length>0&&jt){qt&&ne&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,Bt[0].width,Bt[0].height);for(let rt=0,L=Bt.length;rt<L;rt++)mt=Bt[rt],qt?e.texSubImage2D(r.TEXTURE_2D,rt,0,0,Wt,Dt,mt):e.texImage2D(r.TEXTURE_2D,rt,Mt,Wt,Dt,mt);y.generateMipmaps=!1}else qt?(ne&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Wt,Dt,et)):e.texImage2D(r.TEXTURE_2D,0,Mt,Wt,Dt,et);x(y,jt)&&v(J),vt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function dt(b,y,D){if(y.image.length!==6)return;const J=$(b,y),Z=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+D);const tt=i.get(Z);if(Z.version!==tt.__version||J===!0){e.activeTexture(r.TEXTURE0+D);const vt=Yt.getPrimaries(Yt.workingColorSpace),ht=y.colorSpace===ze?null:Yt.getPrimaries(y.colorSpace),pt=y.colorSpace===ze||vt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Ct=y.isCompressedTexture||y.image[0].isCompressedTexture,Ot=y.image[0]&&y.image[0].isDataTexture,et=[];for(let rt=0;rt<6;rt++)!Ct&&!Ot?et[rt]=_(y.image[rt],!1,!0,n.maxCubemapSize):et[rt]=Ot?y.image[rt].image:y.image[rt],et[rt]=Nt(y,et[rt]);const jt=et[0],Wt=m(jt)||a,Dt=s.convert(y.format,y.colorSpace),Mt=s.convert(y.type),mt=S(y.internalFormat,Dt,Mt,y.colorSpace),Bt=a&&y.isVideoTexture!==!0,qt=tt.__version===void 0||J===!0;let ne=C(y,jt,Wt);V(r.TEXTURE_CUBE_MAP,y,Wt);let Ht;if(Ct){Bt&&qt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ne,mt,jt.width,jt.height);for(let rt=0;rt<6;rt++){Ht=et[rt].mipmaps;for(let L=0;L<Ht.length;L++){const lt=Ht[L];y.format!==qe?Dt!==null?Bt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,L,0,0,lt.width,lt.height,Dt,lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,L,mt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,L,0,0,lt.width,lt.height,Dt,Mt,lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,L,mt,lt.width,lt.height,0,Dt,Mt,lt.data)}}}else{Ht=y.mipmaps,Bt&&qt&&(Ht.length>0&&ne++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ne,mt,et[0].width,et[0].height));for(let rt=0;rt<6;rt++)if(Ot){Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,et[rt].width,et[rt].height,Dt,Mt,et[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,mt,et[rt].width,et[rt].height,0,Dt,Mt,et[rt].data);for(let L=0;L<Ht.length;L++){const ct=Ht[L].image[rt].image;Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,L+1,0,0,ct.width,ct.height,Dt,Mt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,L+1,mt,ct.width,ct.height,0,Dt,Mt,ct.data)}}else{Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Dt,Mt,et[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,mt,Dt,Mt,et[rt]);for(let L=0;L<Ht.length;L++){const lt=Ht[L];Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,L+1,0,0,Dt,Mt,lt.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,L+1,mt,Dt,Mt,lt.image[rt])}}}x(y,Wt)&&v(r.TEXTURE_CUBE_MAP),tt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ft(b,y,D,J,Z,tt){const vt=s.convert(D.format,D.colorSpace),ht=s.convert(D.type),pt=S(D.internalFormat,vt,ht,D.colorSpace);if(!i.get(y).__hasExternalTextures){const Ot=Math.max(1,y.width>>tt),et=Math.max(1,y.height>>tt);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,pt,Ot,et,y.depth,0,vt,ht,null):e.texImage2D(Z,tt,pt,Ot,et,0,vt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,b),_t(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Z,i.get(D).__webglTexture,0,Lt(y)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Z,i.get(D).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(b,y,D){if(r.bindRenderbuffer(r.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let J=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(D||_t(y)){const Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===di?J=r.DEPTH_COMPONENT32F:Z.type===ui&&(J=r.DEPTH_COMPONENT24));const tt=Lt(y);_t(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,J,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,J,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const J=Lt(y);D&&_t(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,y.width,y.height):_t(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,b)}else{const J=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<J.length;Z++){const tt=J[Z],vt=s.convert(tt.format,tt.colorSpace),ht=s.convert(tt.type),pt=S(tt.internalFormat,vt,ht,tt.colorSpace),Ct=Lt(y);D&&_t(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,pt,y.width,y.height):_t(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,pt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,pt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function gt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const J=i.get(y.depthTexture).__webglTexture,Z=Lt(y);if(y.depthTexture.format===Pi)_t(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(y.depthTexture.format===un)_t(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function wt(b){const y=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");gt(y.__webglFramebuffer,b)}else if(D){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]=r.createRenderbuffer(),Tt(y.__webglDepthbuffer[J],b,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Tt(y.__webglDepthbuffer,b,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(b,y,D){const J=i.get(b);y!==void 0&&ft(J.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&wt(b)}function F(b){const y=b.texture,D=i.get(b),J=i.get(y);b.addEventListener("dispose",I),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=y.version,o.memory.textures++);const Z=b.isWebGLCubeRenderTarget===!0,tt=b.isWebGLMultipleRenderTargets===!0,vt=m(b)||a;if(Z){D.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[ht]=[];for(let pt=0;pt<y.mipmaps.length;pt++)D.__webglFramebuffer[ht][pt]=r.createFramebuffer()}else D.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)D.__webglFramebuffer[ht]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(tt)if(n.drawBuffers){const ht=b.texture;for(let pt=0,Ct=ht.length;pt<Ct;pt++){const Ot=i.get(ht[pt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&_t(b)===!1){const ht=tt?y:[y];D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let pt=0;pt<ht.length;pt++){const Ct=ht[pt];D.__webglColorRenderbuffer[pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[pt]);const Ot=s.convert(Ct.format,Ct.colorSpace),et=s.convert(Ct.type),jt=S(Ct.internalFormat,Ot,et,Ct.colorSpace,b.isXRRenderTarget===!0),Wt=Lt(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,jt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,D.__webglColorRenderbuffer[pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),Tt(D.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),V(r.TEXTURE_CUBE_MAP,y,vt);for(let ht=0;ht<6;ht++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)ft(D.__webglFramebuffer[ht][pt],b,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else ft(D.__webglFramebuffer[ht],b,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(y,vt)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const ht=b.texture;for(let pt=0,Ct=ht.length;pt<Ct;pt++){const Ot=ht[pt],et=i.get(Ot);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),V(r.TEXTURE_2D,Ot,vt),ft(D.__webglFramebuffer,b,Ot,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,0),x(Ot,vt)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ht=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,J.__webglTexture),V(ht,y,vt),a&&y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)ft(D.__webglFramebuffer[pt],b,y,r.COLOR_ATTACHMENT0,ht,pt);else ft(D.__webglFramebuffer,b,y,r.COLOR_ATTACHMENT0,ht,0);x(y,vt)&&v(ht),e.unbindTexture()}b.depthBuffer&&wt(b)}function le(b){const y=m(b)||a,D=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,Z=D.length;J<Z;J++){const tt=D[J];if(x(tt,y)){const vt=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ht=i.get(tt).__webglTexture;e.bindTexture(vt,ht),v(vt),e.unbindTexture()}}}function yt(b){if(a&&b.samples>0&&_t(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],D=b.width,J=b.height;let Z=r.COLOR_BUFFER_BIT;const tt=[],vt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=i.get(b),pt=b.isWebGLMultipleRenderTargets===!0;if(pt)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){tt.push(r.COLOR_ATTACHMENT0+Ct),b.depthBuffer&&tt.push(vt);const Ot=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Ot===!1&&(b.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),pt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Ct]),Ot===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[vt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[vt])),pt){const et=i.get(y[Ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,D,J,0,0,D,J,Z,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pt)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Ct]);const Ot=i.get(y[Ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,Ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function Lt(b){return Math.min(n.maxSamples,b.samples)}function _t(b){const y=i.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $t(b){const y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Nt(b,y){const D=b.colorSpace,J=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===hr||D!==si&&D!==ze&&(Yt.getTransfer(D)===te?a===!1?t.has("EXT_sRGB")===!0&&J===qe?(b.format=hr,b.minFilter=Oe,b.generateMipmaps=!1):y=Ra.sRGBToLinear(y):(J!==qe||Z!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=H,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=zt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=_t}function gp(r,t,e){const i=e.isWebGL2;function n(s,o=ze){let a;const l=Yt.getTransfer(o);if(s===mi)return r.UNSIGNED_BYTE;if(s===xa)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ma)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ol)return r.BYTE;if(s===kl)return r.SHORT;if(s===gr)return r.UNSIGNED_SHORT;if(s===va)return r.INT;if(s===ui)return r.UNSIGNED_INT;if(s===di)return r.FLOAT;if(s===An)return i?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zl)return r.ALPHA;if(s===qe)return r.RGBA;if(s===Hl)return r.LUMINANCE;if(s===Gl)return r.LUMINANCE_ALPHA;if(s===Pi)return r.DEPTH_COMPONENT;if(s===un)return r.DEPTH_STENCIL;if(s===hr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Vl)return r.RED;if(s===Sa)return r.RED_INTEGER;if(s===Wl)return r.RG;if(s===wa)return r.RG_INTEGER;if(s===Ea)return r.RGBA_INTEGER;if(s===As||s===Cs||s===Rs||s===Ps)if(l===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hr||s===Gr||s===Vr||s===Wr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ba)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xr||s===qr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xr)return l===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jr||s===Yr||s===Kr||s===$r||s===Zr||s===Jr||s===Qr||s===to||s===eo||s===io||s===no||s===so||s===ro||s===oo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$r)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qr)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===to)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===eo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===io)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===no)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===so)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ro)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ls||s===ao||s===lo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ls)return l===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xl||s===co||s===ho||s===uo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ls)return a.COMPRESSED_RED_RGTC1_EXT;if(s===co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ho)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ri?i?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class _p extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class vp extends Ui{constructor(t,e){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const x=[],v=[],S=new St;let C=null;const T=new Ne;T.layers.enable(1),T.viewport=new ee;const A=new Ne;A.layers.enable(2),A.viewport=new ee;const I=[T,A],M=new _p;M.layers.enable(1),M.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=x[V];return $===void 0&&($=new tr,x[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=x[V];return $===void 0&&($=new tr,x[V]=$),$.getGripSpace()},this.getHand=function(V){let $=x[V];return $===void 0&&($=new tr,x[V]=$),$.getHandSpace()};function O(V){const $=v.indexOf(V.inputSource);if($===-1)return;const at=x[$];at!==void 0&&(at.update(V.inputSource,V.frame,c||o),at.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",P);for(let V=0;V<x.length;V++){const $=v[V];$!==null&&(v[V]=null,x[V].disconnect($))}w=null,B=null,t.setRenderTarget(m),p=null,d=null,u=null,n=null,f=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",q),n.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,e,$),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Di(p.framebufferWidth,p.framebufferHeight,{format:qe,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,at=null,dt=null;_.depth&&(dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?un:Pi,at=_.stencil?Ri:ui);const ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(ft),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Di(d.textureWidth,d.textureHeight,{format:qe,type:mi,depthTexture:new za(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Tt=t.properties.get(f);Tt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),st.setContext(n),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function P(V){for(let $=0;$<V.removed.length;$++){const at=V.removed[$],dt=v.indexOf(at);dt>=0&&(v[dt]=null,x[dt].disconnect(at))}for(let $=0;$<V.added.length;$++){const at=V.added[$];let dt=v.indexOf(at);if(dt===-1){for(let Tt=0;Tt<x.length;Tt++)if(Tt>=v.length){v.push(at),dt=Tt;break}else if(v[Tt]===null){v[Tt]=at,dt=Tt;break}if(dt===-1)break}const ft=x[dt];ft&&ft.connect(at)}}const N=new R,H=new R;function K(V,$,at){N.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(at.matrixWorld);const dt=N.distanceTo(H),ft=$.projectionMatrix.elements,Tt=at.projectionMatrix.elements,gt=ft[14]/(ft[10]-1),wt=ft[14]/(ft[10]+1),zt=(ft[9]+1)/ft[5],F=(ft[9]-1)/ft[5],le=(ft[8]-1)/ft[0],yt=(Tt[8]+1)/Tt[0],Lt=gt*le,_t=gt*yt,$t=dt/(-le+yt),Nt=$t*-le;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Nt),V.translateZ($t),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const b=gt+$t,y=wt+$t,D=Lt-Nt,J=_t+(dt-Nt),Z=zt*wt/y*b,tt=F*wt/y*b;V.projectionMatrix.makePerspective(D,J,Z,tt,b,y),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Y(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;M.near=A.near=T.near=V.near,M.far=A.far=T.far=V.far,(w!==M.near||B!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,B=M.far);const $=V.parent,at=M.cameras;Y(M,$);for(let dt=0;dt<at.length;dt++)Y(at[dt],$);at.length===2?K(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),X(V,M,$)};function X(V,$,at){at===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(at.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Cn*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let j=null;function nt(V,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const at=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let dt=!1;at.length!==M.cameras.length&&(M.cameras.length=0,dt=!0);for(let ft=0;ft<at.length;ft++){const Tt=at[ft];let gt=null;if(p!==null)gt=p.getViewport(Tt);else{const zt=u.getViewSubImage(d,Tt);gt=zt.viewport,ft===0&&(t.setRenderTargetTextures(f,zt.colorTexture,d.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(f))}let wt=I[ft];wt===void 0&&(wt=new Ne,wt.layers.enable(ft),wt.viewport=new ee,I[ft]=wt),wt.matrix.fromArray(Tt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Tt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(gt.x,gt.y,gt.width,gt.height),ft===0&&(M.matrix.copy(wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),dt===!0&&M.cameras.push(wt)}}for(let at=0;at<x.length;at++){const dt=v[at],ft=x[at];dt!==null&&ft!==void 0&&ft.update(dt,$,c||o)}j&&j(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const st=new Oa;st.setAnimationLoop(nt),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}}function xp(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Na(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Mp(r,t,e,i){let n={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=n[x.id];S===void 0&&(g(x),S=h(x),n[x.id]=S,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const T=t.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function h(x){const v=u();x.__bindingPointIndex=v;const S=r.createBuffer(),C=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=n[x.id],S=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,w=I.length;M<w;M++){const B=I[M];if(p(B,T,M,C)===!0){const O=B.__offset,q=Array.isArray(B.value)?B.value:[B.value];let P=0;for(let N=0;N<q.length;N++){const H=q[N],K=_(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,O+P,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,P),P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(x,v,S,C){const T=x.value,A=v+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const I=C[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(x){const v=x.uniforms;let S=0;const C=16;for(let A=0,I=v.length;A<I;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,B=M.length;w<B;w++){const O=M[w],q=Array.isArray(O.value)?O.value:[O.value];for(let P=0,N=q.length;P<N;P++){const H=q[P],K=_(H),Y=S%C;Y!==0&&C-Y<K.boundary&&(S+=C-Y),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=K.storage}}}const T=S%C;return T>0&&(S+=C-T),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function f(){for(const x in n)r.deleteBuffer(n[x]);o=[],n={},s={}}return{bind:l,update:c,dispose:f}}class qa{constructor(t={}){const{canvas:e=gc(),context:i=null,depth:n=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const v=this;let S=!1,C=0,T=0,A=null,I=-1,M=null;const w=new ee,B=new ee;let O=null;const q=new bt(0);let P=0,N=e.width,H=e.height,K=1,Y=null,X=null;const j=new ee(0,0,N,H),nt=new ee(0,0,N,H);let st=!1;const V=new xr;let $=!1,at=!1,dt=null;const ft=new re,Tt=new St,gt=new R,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function zt(){return A===null?K:1}let F=i;function le(E,U){for(let G=0;G<E.length;G++){const W=E[G],k=e.getContext(W,U);if(k!==null)return k}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mr}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",lt,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),F=le(U,E),F===null)throw le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let yt,Lt,_t,$t,Nt,b,y,D,J,Z,tt,vt,ht,pt,Ct,Ot,et,jt,Wt,Dt,Mt,mt,Bt,qt;function ne(){yt=new Pd(F),Lt=new Ed(F,yt,t),yt.init(Lt),mt=new gp(F,yt,Lt),_t=new pp(F,yt,Lt),$t=new Id(F),Nt=new tp,b=new mp(F,yt,_t,Nt,Lt,mt,$t),y=new Td(v),D=new Rd(v),J=new Hc(F,Lt),Bt=new Sd(F,yt,J,Lt),Z=new Ld(F,J,$t,Bt),tt=new Fd(F,Z,J,$t),Wt=new Bd(F,Lt,b),Ot=new bd(Nt),vt=new Qf(v,y,D,yt,Lt,Bt,Ot),ht=new xp(v,Nt),pt=new ip,Ct=new lp(yt,Lt),jt=new Md(v,y,D,_t,tt,d,l),et=new fp(v,tt,Lt),qt=new Mp(F,$t,Lt,_t),Dt=new wd(F,yt,$t,Lt),Mt=new Dd(F,yt,$t,Lt),$t.programs=vt.programs,v.capabilities=Lt,v.extensions=yt,v.properties=Nt,v.renderLists=pt,v.shadowMap=et,v.state=_t,v.info=$t}ne();const Ht=new vp(v,F);this.xr=Ht,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(N,H,!1))},this.getSize=function(E){return E.set(N,H)},this.setSize=function(E,U,G=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,H=U,e.width=Math.floor(E*K),e.height=Math.floor(U*K),G===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(N*K,H*K).floor()},this.setDrawingBufferSize=function(E,U,G){N=E,H=U,K=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,U,G,W){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,U,G,W),_t.viewport(w.copy(j).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(nt)},this.setScissor=function(E,U,G,W){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,U,G,W),_t.scissor(B.copy(nt).multiplyScalar(K).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(E){_t.setScissorTest(st=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(E=!0,U=!0,G=!0){let W=0;if(E){let k=!1;if(A!==null){const ut=A.texture.format;k=ut===Ea||ut===wa||ut===Sa}if(k){const ut=A.texture.type,xt=ut===mi||ut===ui||ut===gr||ut===Ri||ut===xa||ut===Ma,At=jt.getClearColor(),Pt=jt.getClearAlpha(),kt=At.r,It=At.g,Ut=At.b;xt?(p[0]=kt,p[1]=It,p[2]=Ut,p[3]=Pt,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=kt,g[1]=It,g[2]=Ut,g[3]=Pt,F.clearBufferiv(F.COLOR,0,g))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT),G&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),pt.dispose(),Ct.dispose(),Nt.dispose(),y.dispose(),D.dispose(),tt.dispose(),Bt.dispose(),qt.dispose(),vt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Ee),Ht.removeEventListener("sessionend",Qt),dt&&(dt.dispose(),dt=null),be.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=$t.autoReset,U=et.enabled,G=et.autoUpdate,W=et.needsUpdate,k=et.type;ne(),$t.autoReset=E,et.enabled=U,et.autoUpdate=G,et.needsUpdate=W,et.type=k}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ct(E){const U=E.target;U.removeEventListener("dispose",ct),Rt(U)}function Rt(E){Et(E),Nt.remove(E)}function Et(E){const U=Nt.get(E).programs;U!==void 0&&(U.forEach(function(G){vt.releaseProgram(G)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,W,k,ut){U===null&&(U=wt);const xt=k.isMesh&&k.matrixWorld.determinant()<0,At=Za(E,U,G,W,k);_t.setMaterial(W,xt);let Pt=G.index,kt=1;if(W.wireframe===!0){if(Pt=Z.getWireframeAttribute(G),Pt===void 0)return;kt=2}const It=G.drawRange,Ut=G.attributes.position;let oe=It.start*kt,Le=(It.start+It.count)*kt;ut!==null&&(oe=Math.max(oe,ut.start*kt),Le=Math.min(Le,(ut.start+ut.count)*kt)),Pt!==null?(oe=Math.max(oe,0),Le=Math.min(Le,Pt.count)):Ut!=null&&(oe=Math.max(oe,0),Le=Math.min(Le,Ut.count));const fe=Le-oe;if(fe<0||fe===1/0)return;Bt.setup(k,W,At,G,Pt);let $e,ie=Dt;if(Pt!==null&&($e=J.get(Pt),ie=Mt,ie.setIndex($e)),k.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*zt()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(k.isLine){let Gt=W.linewidth;Gt===void 0&&(Gt=1),_t.setLineWidth(Gt*zt()),k.isLineSegments?ie.setMode(F.LINES):k.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else k.isPoints?ie.setMode(F.POINTS):k.isSprite&&ie.setMode(F.TRIANGLES);if(k.isBatchedMesh)ie.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ie.renderInstances(oe,fe,k.count);else if(G.isInstancedBufferGeometry){const Gt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ss=Math.min(G.instanceCount,Gt);ie.renderInstances(oe,fe,Ss)}else ie.render(oe,fe)};function Zt(E,U,G){E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,In(E,U,G),E.side=gi,E.needsUpdate=!0,In(E,U,G),E.side=ke):In(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),m=Ct.get(G),m.init(),x.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==G&&E.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(v._useLegacyLights);const W=new Set;return E.traverse(function(k){const ut=k.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const At=ut[xt];Zt(At,G,k),W.add(At)}else Zt(ut,G,k),W.add(ut)}),x.pop(),m=null,W},this.compileAsync=function(E,U,G=null){const W=this.compile(E,U,G);return new Promise(k=>{function ut(){if(W.forEach(function(xt){Nt.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){k(E);return}setTimeout(ut,10)}yt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Jt=null;function de(E){Jt&&Jt(E)}function Ee(){be.stop()}function Qt(){be.start()}const be=new Oa;be.setAnimationLoop(de),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(E){Jt=E,Ht.setAnimationLoop(E),E===null?be.stop():be.start()},Ht.addEventListener("sessionstart",Ee),Ht.addEventListener("sessionend",Qt),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(U),U=Ht.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,A),m=Ct.get(E,x.length),m.init(),x.push(m),ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(ft),at=this.localClippingEnabled,$=Ot.init(this.clippingPlanes,at),_=pt.get(E,f.length),_.init(),f.push(_),je(E,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,X),this.info.render.frame++,$===!0&&Ot.beginShadows();const G=m.state.shadowsArray;if(et.render(G,E,U),$===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(_,E),m.setupLights(v._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let k=0,ut=W.length;k<ut;k++){const xt=W[k];Rr(_,E,xt,xt.viewport)}}else Rr(_,E,U);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,U),Bt.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function je(E,U,G,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){W&&gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ft);const xt=tt.update(E),At=E.material;At.visible&&_.push(E,xt,At,G,gt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const xt=tt.update(E),At=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),gt.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),gt.copy(xt.boundingSphere.center)),gt.applyMatrix4(E.matrixWorld).applyMatrix4(ft)),Array.isArray(At)){const Pt=xt.groups;for(let kt=0,It=Pt.length;kt<It;kt++){const Ut=Pt[kt],oe=At[Ut.materialIndex];oe&&oe.visible&&_.push(E,xt,oe,G,gt.z,Ut)}}else At.visible&&_.push(E,xt,At,G,gt.z,null)}}const ut=E.children;for(let xt=0,At=ut.length;xt<At;xt++)je(ut[xt],U,G,W)}function Rr(E,U,G,W){const k=E.opaque,ut=E.transmissive,xt=E.transparent;m.setupLightsView(G),$===!0&&Ot.setGlobalState(v.clippingPlanes,G),ut.length>0&&$a(k,ut,U,G),W&&_t.viewport(w.copy(W)),k.length>0&&Dn(k,U,G),ut.length>0&&Dn(ut,U,G),xt.length>0&&Dn(xt,U,G),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function $a(E,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const ut=Lt.isWebGL2;dt===null&&(dt=new Di(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?An:mi,minFilter:Tn,samples:ut?4:0})),v.getDrawingBufferSize(Tt),ut?dt.setSize(Tt.x,Tt.y):dt.setSize(fs(Tt.x),fs(Tt.y));const xt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const At=v.toneMapping;v.toneMapping=pi,Dn(E,G,W),b.updateMultisampleRenderTarget(dt),b.updateRenderTargetMipmap(dt);let Pt=!1;for(let kt=0,It=U.length;kt<It;kt++){const Ut=U[kt],oe=Ut.object,Le=Ut.geometry,fe=Ut.material,$e=Ut.group;if(fe.side===ke&&oe.layers.test(W.layers)){const ie=fe.side;fe.side=Re,fe.needsUpdate=!0,Pr(oe,G,W,Le,fe,$e),fe.side=ie,fe.needsUpdate=!0,Pt=!0}}Pt===!0&&(b.updateMultisampleRenderTarget(dt),b.updateRenderTargetMipmap(dt)),v.setRenderTarget(xt),v.setClearColor(q,P),v.toneMapping=At}function Dn(E,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ut=E.length;k<ut;k++){const xt=E[k],At=xt.object,Pt=xt.geometry,kt=W===null?xt.material:W,It=xt.group;At.layers.test(G.layers)&&Pr(At,U,G,Pt,kt,It)}}function Pr(E,U,G,W,k,ut){E.onBeforeRender(v,U,G,W,k,ut),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,U,G,W,E,ut),k.transparent===!0&&k.side===ke&&k.forceSinglePass===!1?(k.side=Re,k.needsUpdate=!0,v.renderBufferDirect(G,U,W,k,E,ut),k.side=gi,k.needsUpdate=!0,v.renderBufferDirect(G,U,W,k,E,ut),k.side=ke):v.renderBufferDirect(G,U,W,k,E,ut),E.onAfterRender(v,U,G,W,k,ut)}function In(E,U,G){U.isScene!==!0&&(U=wt);const W=Nt.get(E),k=m.state.lights,ut=m.state.shadowsArray,xt=k.state.version,At=vt.getParameters(E,k.state,ut,U,G),Pt=vt.getProgramCacheKey(At);let kt=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?D:y).get(E.envMap||W.environment),kt===void 0&&(E.addEventListener("dispose",ct),kt=new Map,W.programs=kt);let It=kt.get(Pt);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===xt)return Dr(E,At),It}else At.uniforms=vt.getUniforms(E),E.onBuild(G,At,v),E.onBeforeCompile(At,v),It=vt.acquireProgram(At,Pt),kt.set(Pt,It),W.uniforms=At.uniforms;const Ut=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=Ot.uniform),Dr(E,At),W.needsLights=Qa(E),W.lightsStateVersion=xt,W.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.directionalShadowMap.value=k.state.directionalShadowMap,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotShadowMap.value=k.state.spotShadowMap,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMap.value=k.state.pointShadowMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=It,W.uniformsList=null,It}function Lr(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=os.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Dr(E,U){const G=Nt.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Za(E,U,G,W,k){U.isScene!==!0&&(U=wt),b.resetTextureUnits();const ut=U.fog,xt=W.isMeshStandardMaterial?U.environment:null,At=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:si,Pt=(W.isMeshStandardMaterial?D:y).get(W.envMap||xt),kt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,It=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!G.morphAttributes.position,oe=!!G.morphAttributes.normal,Le=!!G.morphAttributes.color;let fe=pi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(fe=v.toneMapping);const $e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=$e!==void 0?$e.length:0,Gt=Nt.get(W),Ss=m.state.lights;if($===!0&&(at===!0||E!==M)){const Be=E===M&&W.id===I;Ot.setState(W,E,Be)}let se=!1;W.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ss.state.version||Gt.outputColorSpace!==At||k.isBatchedMesh&&Gt.batching===!1||!k.isBatchedMesh&&Gt.batching===!0||k.isInstancedMesh&&Gt.instancing===!1||!k.isInstancedMesh&&Gt.instancing===!0||k.isSkinnedMesh&&Gt.skinning===!1||!k.isSkinnedMesh&&Gt.skinning===!0||k.isInstancedMesh&&Gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Gt.instancingColor===!1&&k.instanceColor!==null||Gt.envMap!==Pt||W.fog===!0&&Gt.fog!==ut||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ot.numPlanes||Gt.numIntersection!==Ot.numIntersection)||Gt.vertexAlphas!==kt||Gt.vertexTangents!==It||Gt.morphTargets!==Ut||Gt.morphNormals!==oe||Gt.morphColors!==Le||Gt.toneMapping!==fe||Lt.isWebGL2===!0&&Gt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Gt.__version=W.version);let vi=Gt.currentProgram;se===!0&&(vi=In(W,U,k));let Ir=!1,gn=!1,ws=!1;const ve=vi.getUniforms(),xi=Gt.uniforms;if(_t.useProgram(vi.program)&&(Ir=!0,gn=!0,ws=!0),W.id!==I&&(I=W.id,gn=!0),Ir||M!==E){ve.setValue(F,"projectionMatrix",E.projectionMatrix),ve.setValue(F,"viewMatrix",E.matrixWorldInverse);const Be=ve.map.cameraPosition;Be!==void 0&&Be.setValue(F,gt.setFromMatrixPosition(E.matrixWorld)),Lt.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,gn=!0,ws=!0)}if(k.isSkinnedMesh){ve.setOptional(F,k,"bindMatrix"),ve.setOptional(F,k,"bindMatrixInverse");const Be=k.skeleton;Be&&(Lt.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),ve.setValue(F,"boneTexture",Be.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(ve.setOptional(F,k,"batchingTexture"),ve.setValue(F,"batchingTexture",k._matricesTexture,b));const Es=G.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&Lt.isWebGL2===!0)&&Wt.update(k,G,vi),(gn||Gt.receiveShadow!==k.receiveShadow)&&(Gt.receiveShadow=k.receiveShadow,ve.setValue(F,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xi.envMap.value=Pt,xi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),gn&&(ve.setValue(F,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&Ja(xi,ws),ut&&W.fog===!0&&ht.refreshFogUniforms(xi,ut),ht.refreshMaterialUniforms(xi,W,K,H,dt),os.upload(F,Lr(Gt),xi,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(os.upload(F,Lr(Gt),xi,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(F,"center",k.center),ve.setValue(F,"modelViewMatrix",k.modelViewMatrix),ve.setValue(F,"normalMatrix",k.normalMatrix),ve.setValue(F,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Be=W.uniformsGroups;for(let bs=0,tl=Be.length;bs<tl;bs++)if(Lt.isWebGL2){const Ur=Be[bs];qt.update(Ur,vi),qt.bind(Ur,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function Ja(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Qa(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,G){Nt.get(E.texture).__webglTexture=U,Nt.get(E.depthTexture).__webglTexture=G;const W=Nt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const G=Nt.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){A=E,C=U,T=G;let W=!0,k=null,ut=!1,xt=!1;if(E){const Pt=Nt.get(E);Pt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Pt.__webglFramebuffer===void 0?b.setupRenderTarget(E):Pt.__hasExternalTextures&&b.rebindTextures(E,Nt.get(E.texture).__webglTexture,Nt.get(E.depthTexture).__webglTexture);const kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(xt=!0);const It=Nt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[U])?k=It[U][G]:k=It[U],ut=!0):Lt.isWebGL2&&E.samples>0&&b.useMultisampledRTT(E)===!1?k=Nt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?k=It[G]:k=It,w.copy(E.viewport),B.copy(E.scissor),O=E.scissorTest}else w.copy(j).multiplyScalar(K).floor(),B.copy(nt).multiplyScalar(K).floor(),O=st;if(_t.bindFramebuffer(F.FRAMEBUFFER,k)&&Lt.drawBuffers&&W&&_t.drawBuffers(E,k),_t.viewport(w),_t.scissor(B),_t.setScissorTest(O),ut){const Pt=Nt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,G)}else if(xt){const Pt=Nt.get(E.texture),kt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.__webglTexture,G||0,kt)}I=-1},this.readRenderTargetPixels=function(E,U,G,W,k,ut,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){_t.bindFramebuffer(F.FRAMEBUFFER,At);try{const Pt=E.texture,kt=Pt.format,It=Pt.type;if(kt!==qe&&mt.convert(kt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=It===An&&(yt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(It!==mi&&mt.convert(It)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===di&&(Lt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&G>=0&&G<=E.height-k&&F.readPixels(U,G,W,k,mt.convert(kt),mt.convert(It),ut)}finally{const Pt=A!==null?Nt.get(A).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(E,U,G=0){const W=Math.pow(2,-G),k=Math.floor(U.image.width*W),ut=Math.floor(U.image.height*W);b.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,E.x,E.y,k,ut),_t.unbindTexture()},this.copyTextureToTexture=function(E,U,G,W=0){const k=U.image.width,ut=U.image.height,xt=mt.convert(G.format),At=mt.convert(G.type);b.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,k,ut,xt,At,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,xt,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,xt,At,U.image),W===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G,W,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=E.max.x-E.min.x+1,xt=E.max.y-E.min.y+1,At=E.max.z-E.min.z+1,Pt=mt.convert(W.format),kt=mt.convert(W.type);let It;if(W.isData3DTexture)b.setTexture3D(W,0),It=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),It=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Ut=F.getParameter(F.UNPACK_ROW_LENGTH),oe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Le=F.getParameter(F.UNPACK_SKIP_PIXELS),fe=F.getParameter(F.UNPACK_SKIP_ROWS),$e=F.getParameter(F.UNPACK_SKIP_IMAGES),ie=G.isCompressedTexture?G.mipmaps[k]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(It,k,U.x,U.y,U.z,ut,xt,At,Pt,kt,ie.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(It,k,U.x,U.y,U.z,ut,xt,At,Pt,ie.data)):F.texSubImage3D(It,k,U.x,U.y,U.z,ut,xt,At,Pt,kt,ie),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),F.pixelStorei(F.UNPACK_SKIP_ROWS,fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e),k===0&&W.generateMipmaps&&F.generateMipmap(It),_t.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,_t.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_r?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===vs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?Li:Ta}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?ye:si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Sp extends qa{}Sp.prototype.isWebGL1Renderer=!0;class Sr{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=i}clone(){return new Sr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wp extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ln extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ea=new R,ia=new R,na=new re,er=new xs,is=new Pn;class ja extends ge{constructor(t=new ue,e=new Ln){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)ea.fromBufferAttribute(e,n-1),ia.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ea.distanceTo(ia);t.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(n),is.radius+=s,t.ray.intersectsSphere(is)===!1)return;na.copy(n).invert(),er.copy(t.ray).applyMatrix4(na);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,u=new R,d=new R,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){const C=g.getX(v),T=g.getX(v+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),er.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),er.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const sa=new R,ra=new R;class wr extends ja{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)sa.fromBufferAttribute(e,n),ra.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+sa.distanceTo(ra);t.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ya extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oa=new re,fr=new xs,ns=new Pn,ss=new R;class Ep extends ge{constructor(t=new ue,e=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(n),ns.radius+=s,t.ray.intersectsSphere(ns)===!1)return;oa.copy(n).invert(),fr.copy(t.ray).applyMatrix4(oa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);ss.fromBufferAttribute(u,m),aa(ss,m,l,n,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ss.fromBufferAttribute(u,g),aa(ss,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function aa(r,t,e,i,n,s,o){const a=fr.distanceSqToPoint(r);if(a<e){const l=new R;fr.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class bp extends Pe{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bn extends ue{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new R,h=new St;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*n;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class me extends ue{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function x(){const S=new R,C=new R;let T=0;const A=(e-t)/i;for(let I=0;I<=s;I++){const M=[],w=I/s,B=w*(e-t)+t;for(let O=0;O<=n;O++){const q=O/n,P=q*l+a,N=Math.sin(P),H=Math.cos(P);C.x=B*N,C.y=-w*i+m,C.z=B*H,u.push(C.x,C.y,C.z),S.set(N,A,H).normalize(),d.push(S.x,S.y,S.z),p.push(q,1-w),M.push(g++)}_.push(M)}for(let I=0;I<n;I++)for(let M=0;M<s;M++){const w=_[M][I],B=_[M+1][I],O=_[M+1][I+1],q=_[M][I+1];h.push(w,B,q),h.push(B,O,q),T+=6}c.addGroup(f,T,0),f+=T}function v(S){const C=g,T=new St,A=new R;let I=0;const M=S===!0?t:e,w=S===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),g++;const B=g;for(let O=0;O<=n;O++){const P=O/n*l+a,N=Math.cos(P),H=Math.sin(P);A.x=M*H,A.y=m*w,A.z=M*N,u.push(A.x,A.y,A.z),d.push(0,w,0),T.x=N*.5+.5,T.y=H*.5*w+.5,p.push(T.x,T.y),g++}for(let O=0;O<n;O++){const q=C+O,P=B+O;S===!0?h.push(P,P+1,q):h.push(P+1,P,q),I+=3}c.addGroup(f,I,S===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class an extends me{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new an(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Er extends ue{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(s.slice(),3)),this.setAttribute("uv",new Kt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new R,S=new R,C=new R;for(let T=0;T<e.length;T+=3)p(e[T+0],v),p(e[T+1],S),p(e[T+2],C),l(v,S,C,x)}function l(x,v,S,C){const T=C+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const M=x.clone().lerp(S,I/T),w=v.clone().lerp(S,I/T),B=T-I;for(let O=0;O<=B;O++)O===0&&I===T?A[I][O]=M:A[I][O]=M.clone().lerp(w,O/B)}for(let I=0;I<T;I++)for(let M=0;M<2*(T-I)-1;M++){const w=Math.floor(M/2);M%2===0?(d(A[I][w+1]),d(A[I+1][w]),d(A[I][w])):(d(A[I][w+1]),d(A[I+1][w+1]),d(A[I+1][w]))}}function c(x){const v=new R;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function h(){const x=new R;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=m(x)/2/Math.PI+.5,C=f(x)/Math.PI+.5;o.push(S,1-C)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],C=o[x+4],T=Math.max(v,S,C),A=Math.min(v,S,C);T>.9&&A<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function p(x,v){const S=x*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const x=new R,v=new R,S=new R,C=new R,T=new St,A=new St,I=new St;for(let M=0,w=0;M<s.length;M+=9,w+=6){x.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),T.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),C.copy(x).add(v).add(S).divideScalar(3);const B=m(C);_(T,w+0,x,B),_(A,w+2,v,B),_(I,w+4,S,B)}}function _(x,v,S,C){C<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.vertices,t.indices,t.radius,t.details)}}class br extends Er{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new br(t.radius,t.detail)}}class ln extends ue{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const x=[],v=f/i;let S=0;f===0&&o===0?S=.5/e:f===i&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(n+T*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(n+T*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-v),x.push(c++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<e;x++){const v=h[f][x+1],S=h[f][x],C=h[f+1][x],T=h[f+1][x+1];(f!==0||o>0)&&p.push(v,S,T),(f!==i-1||l<Math.PI)&&p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tr extends ue{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){const _=g/n*s,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){const _=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,f=(n+1)*(p-1)+g,x=(n+1)*p+g;o.push(_,m,x),o.push(m,f,x)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Q extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zi extends ri{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tp extends ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ar extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ir=new re,la=new R,ca=new R;class Ka{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;la.setFromMatrixPosition(t.matrixWorld),e.position.copy(la),ca.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ca),e.updateMatrixWorld(),ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ha=new re,Mn=new R,nr=new R;class Ap extends Ka{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Mn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Mn),nr.copy(i.position),nr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(nr),i.updateMatrixWorld(),n.makeTranslation(-Mn.x,-Mn.y,-Mn.z),ha.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha)}}class Cp extends Ar{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rp extends Ka{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ua extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class da extends Ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fa(){return(typeof performance>"u"?Date:performance).now()}class Ke{constructor(t,e,i=0,n=1/0){this.ray=new xs(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return pr(t,this,i,e),i.sort(pa),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)pr(t[n],this,i,e);return i.sort(pa),i}}function pa(r,t){return r.distance-t.distance}function pr(r,t,e,i){if(r.layers.test(t.layers)&&r.raycast(t,e),i===!0){const n=r.children;for(let s=0,o=n.length;s<o;s++)pr(n[s],t,e,!0)}}class Lp extends wr{constructor(t=10,e=10,i=4473924,n=8947848){i=new bt(i),n=new bt(n);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===s?i:n;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new ue;h.setAttribute("position",new Kt(l,3)),h.setAttribute("color",new Kt(c,3));const u=new Ln({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const rs=new yi;class Dp extends wr{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(8*3),s=new ue;s.setIndex(new we(i,1)),s.setAttribute("position",new we(n,3)),super(s,new Ln({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&rs.setFromObject(this.object),rs.isEmpty())return;const e=rs.min,i=rs.max,n=this.geometry.attributes.position,s=n.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=e.x,s[4]=i.y,s[5]=i.z,s[6]=e.x,s[7]=e.y,s[8]=i.z,s[9]=i.x,s[10]=e.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=e.z,s[15]=e.x,s[16]=i.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=i.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ip extends wr{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new ue;s.setIndex(new we(i,1)),s.setAttribute("position",new Kt(n,3)),super(s,new Ln({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mr);const Up="/threejs-voxel-firecraft/dist/assets/background-music-by-suno-B4M28EgO.ogg",ms=400;class Np{constructor(t,e,i){this.scene=t,this.itemManager=e,this.objects=[],this.gameMode=i&&i.gameMode?i.gameMode:"survival",this.gameMode==="arena"?this.mapSize=150:this.mapSize=i&&i.mapSize?i.mapSize:ms,this.halfMapSize=this.mapSize/2,this.stormRadius=this.halfMapSize,this.initialStormRadius=this.stormRadius,this._heightFn=this._buildHeightFn(),this.stormEnabled=i&&i.stormEnabled!==!1;const n=i?i.stormTime:180;this.stormShrinkRate=this.stormRadius/n,this.safeZoneCenter=new R(0,0,0),this.init()}init(){this.gameMode==="arena"?this.createArenaEnvironment():this.gameMode==="matrix"?this.createMatrixEnvironment():this.gameMode==="matrix-ai"?this.createMatrixAIEnvironment():this.gameMode==="multiplayer"?this.createMultiplayerEnvironment():this.gameMode==="studio"?this.createStudioEnvironment():this.createEnvironment(),this.gameMode!=="matrix"&&this.gameMode!=="studio"&&this.stormEnabled&&this.createStormVisuals()}createEnvironment(){const t=(p=1)=>(Math.random()-.5)*(this.mapSize*p),e=(p=1)=>{const g=this.halfMapSize-5,_=t(p);return Math.max(-g,Math.min(g,_))},i=(p,g)=>this.getHeightAt?this.getHeightAt(p,g):0,n={trees:70,rocks:50,bushes:50,grass:180,houses:12,vehicles:12,plateaus:4,smallBuildings:5},s=new Ue(this.mapSize,this.mapSize,64,64),o=s.attributes.position;for(let p=0;p<o.count;p++)o.setZ(p,0);o.needsUpdate=!0;const a=s.attributes.position.count;s.setAttribute("color",new we(new Float32Array(a*3),3));const l=s.attributes.color,c=new bt;for(let p=0;p<a;p++){const g=Math.random();g>.8?c.setHex(2600544):g>.4?c.setHex(3066993):c.setHex(5822093),l.setXYZ(p,c.r,c.g,c.b)}const h=new Q({vertexColors:!0,roughness:.8}),u=new z(s,h);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,u.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(u),this.objects.push(u);for(let p=0;p<n.trees;p++){const g=e(.9),_=e(.9),m=i(g,_),f=Math.random()>.5?"Oak":"Pine",x=this.createTree(g,_,f);x.position.y=m,x.userData={gameId:this.generateID(),gameName:`Tree_${f}`,type:"tree"},this.scene.add(x),this.objects.push(x)}const d=[(p,g)=>this.createRock(p,g),(p,g,_)=>this.createRockPillar(p,g,_),(p,g,_)=>this.createFlatBoulder(p,g,_),(p,g,_)=>this.createCrystalShard(p,g,_),(p,g,_)=>this.createStackedRock(p,g,_),(p,g,_)=>this.createBasaltCluster(p,g,_)];for(let p=0;p<n.rocks;p++){const g=e(.9),_=e(.9),m=i(g,_),f=d[p%d.length],x=f(g,_,m);x.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(x),this.objects.push(x)}for(let p=0;p<n.bushes;p++){const g=e(.85),_=e(.85),m=i(g,_),f=this.createBush(g,_);f.position.y=m,f.userData={gameId:this.generateID(),gameName:"Bush"},this.scene.add(f),this.objects.push(f)}for(let p=0;p<n.grass;p++){const g=e(.95),_=e(.95),m=i(g,_),f=this.createGrassClump(g,_);f.position.y=m,this.scene.add(f)}for(let p=0;p<n.houses;p++){const g=e(.75),_=e(.75),m=i(g,_),f=Math.random(),x=f>.7,v=f<.25,S=x?1.55:v?.9:1,C=x?"Mansion":v?"Cabin":"House",T=x?"large":v?"small":"medium",A=this.createHouse(g,_,{scale:S});A.position.y=m,A.userData={gameId:this.generateID(),gameName:C,type:"house",size:T},this.scene.add(A),this.objects.push(A),this.itemManager.spawnLootInHouse(g,1,_)}for(let p=0;p<n.vehicles;p++){const g=e(.8),_=e(.8),m=i(g,_),f=Math.random()>.6?"truck":"car",x=this.createVehicle(g,_,f);x.position.y=m,x.userData={...x.userData||{},gameId:this.generateID(),gameName:`Vehicle_${f}`,type:"vehicle"},this.scene.add(x),this.objects.push(x)}for(let p=0;p<n.plateaus;p++){const g=e(.6),_=e(.6),m=6+Math.random()*6,f=8+Math.random()*6,x=i(g,_),v=this.createPlateau(g,_,f,m,x);v.userData={gameId:this.generateID(),gameName:"Plateau",type:"house"},this.scene.add(v),this.objects.push(v)}for(let p=0;p<n.smallBuildings;p++){const g=e(.7),_=e(.7),m=i(g,_),f=this.createSmallBuilding(g,_);f.position.y=m,f.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"},this.scene.add(f),this.objects.push(f)}}createArenaEnvironment(){const t=(o=1)=>(Math.random()-.5)*(this.mapSize*o),e=(o=1)=>{const a=this.halfMapSize-5,l=t(o);return Math.max(-a,Math.min(a,l))},i=new Ue(this.mapSize,this.mapSize,1,1),n=new Zi({color:3885915,flatShading:!0}),s=new z(i,n);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(s),this.objects.push(s);for(let o=0;o<30;o++){const a=e(.8),l=e(.8),c=1+Math.random()*3,h=1+Math.random()*2,u=1+Math.random()*2,d=new it(h,c,u),p=new Zi({color:5596791,flatShading:!0}),g=new z(d,p);g.position.set(a,c/2,l),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=e(.7),l=e(.7),c=6+Math.random()*3,h=3+Math.random()*2,u=3,d=new it(u,h,c),p=new Zi({color:4937059,flatShading:!0}),g=new z(d,p);g.position.set(a,h/2,l),g.rotation.x=-Math.atan(h/c),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Ramp",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=e(.6),l=e(.6),c=this.createArenaBunker(a,l);c.userData={gameId:this.generateID(),gameName:"Bunker",type:"house"},this.scene.add(c),this.objects.push(c)}for(let o=0;o<20;o++){const a=e(.8),l=e(.8),c=this.createFlatBoulder(a,l,0);c.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(c),this.objects.push(c)}this.itemManager.spawnLootInHouse(0,0,0)}createMatrixEnvironment(){const t=new Ue(this.mapSize,this.mapSize,128,128),e=t.attributes.position.count;t.setAttribute("color",new we(new Float32Array(e*3),3));const i=t.attributes.color,n=new bt;for(let d=0;d<e;d++){const p=Math.random();p>.8?n.setHex(2600544):p>.4?n.setHex(3066993):n.setHex(5822093),i.setXYZ(d,n.r,n.g,n.b)}const s=new Q({vertexColors:!0,roughness:.8}),o=new z(t,s);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(o),this.objects.push(o);const a=new it(20,6,.5),l=new Q({color:15987699,roughness:.9}),c=new z(a,l);c.position.set(0,3,-15),c.castShadow=!0,c.receiveShadow=!0,c.userData={gameId:this.generateID(),gameName:"Wall",type:"house"},this.scene.add(c),this.objects.push(c);const h=this.createTree(-12,-15,"Oak"),u=this.createTree(12,-15,"Pine");this.scene.add(h),this.scene.add(u),this.objects.push(h),this.objects.push(u)}createStudioEnvironment(){const t=new Ue(this.mapSize,this.mapSize,128,128),e=this.buildVoxelGroundMaterial(),i=new z(t,e);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(i),this.objects.push(i);const n=12;for(let s=0;s<n;s++){const o=(Math.random()-.5)*this.mapSize*.6,a=(Math.random()-.5)*this.mapSize*.6,l=this.createVoxelCloud(o,a);this.scene.add(l)}}createMatrixAIEnvironment(){const t=this.mapSize,e=80,i=new Lp(t,e,6737151,6737151);i.material.opacity=.2,i.material.transparent=!0,this.scene.add(i);const n=new Ue(t,t,1,1),s=new _i({visible:!1}),o=new z(n,s);o.rotation.x=-Math.PI/2,o.userData={gameId:this.generateID(),gameName:"Ground",type:"ground"},this.scene.add(o),this.objects.push(o)}createMultiplayerEnvironment(){const t=new Ue(this.mapSize,this.mapSize,128,128),e=this.buildVoxelGroundMaterial(),i=new z(t,e);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(i),this.objects.push(i),this.stormEnabled=!1}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}createTree(t,e,i){const n=new Xt;n.position.set(t,0,e);const s=.8+Math.random()*.4;n.scale.set(s,s,s);const o=3.5+Math.random()*1.5,a=new me(.45,.6,o,8),l=new Q({color:7028518,roughness:1}),c=new z(a,l);if(c.position.y=o/2,c.castShadow=!0,c.receiveShadow=!0,n.add(c),this.objects.push(c),Math.random()>.7){const u=new it(.15,.15,.05),d=new Q({color:5911328}),p=new z(u,d);p.position.set(.25,c.position.y+.6,.45),p.rotation.z=.4,n.add(p)}const h=new Q({color:i==="Oak"?3050327:1728040,roughness:.9});if(i==="Oak"){const u=6+Math.floor(Math.random()*4);for(let d=0;d<u;d++){const p=1.2+Math.random()*1.6,g=new ln(p,8,6),_=new z(g,h);_.position.y=c.position.y+.8+Math.random()*1.6,_.position.x=(Math.random()-.5)*1.5,_.position.z=(Math.random()-.5)*1.5,_.castShadow=!1,_.receiveShadow=!1,n.add(_)}}else{const u=3+Math.floor(Math.random()*3);for(let g=0;g<u;g++){const _=1.8-g*.4+Math.random()*.2,m=new an(_,1.2+Math.random()*.6,8),f=new z(m,h);f.position.y=c.position.y+.6+g*.9,f.position.x=(Math.random()-.5)*.2,f.position.z=(Math.random()-.5)*.2,f.castShadow=!1,f.receiveShadow=!1,n.add(f)}const d=new ln(.25,6,6),p=new z(d,h);p.position.y=c.position.y+u*.9+.3,p.castShadow=!1,p.receiveShadow=!1,n.add(p)}if(Math.random()>.3){const u=new Ue(.8,.8),d=new Q({color:3066993,side:ke}),p=new z(u,d);p.rotation.x=-Math.PI/2,p.position.y=.01,p.position.x=(Math.random()-.5)*.5,p.position.z=(Math.random()-.5)*.5,p.receiveShadow=!1,n.add(p)}return n}createVoxelCloud(t,e){const i=new Xt,n=new it(3,2,3),s=new Tp({color:15922943,transparent:!0,opacity:.9}),o=8+Math.floor(Math.random()*6);for(let a=0;a<o;a++){const l=(Math.random()-.5)*12,c=(Math.random()-.5)*12,h=(Math.random()-.5)*2,u=new z(n,s);u.position.set(l,h,c),u.castShadow=!1,u.receiveShadow=!1,i.add(u)}return i.position.set(t,30+Math.random()*8,e),i}buildVoxelGroundMaterial(){const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d"),n="#4caf50",s="#66bb6a",o="#8d6e63",a=8;for(let u=0;u<64;u+=a)for(let d=0;d<64;d+=a){const g=Math.random()>.85?o:(d/a+u/a)%2===0?n:s;i.fillStyle=g,i.fillRect(d,u,a,a)}const l=i.getImageData(0,0,64,64),c=l.data;for(let u=0;u<c.length;u+=4){const d=Math.random()*30-15;c[u]=Math.min(255,Math.max(0,c[u]+d)),c[u+1]=Math.min(255,Math.max(0,c[u+1]+d)),c[u+2]=Math.min(255,Math.max(0,c[u+2]+d))}i.putImageData(l,0,0);const h=new bp(e);return h.wrapS=h.wrapT=ls,h.repeat.set(this.mapSize/10,this.mapSize/10),h.magFilter=Se,h.minFilter=Bl,new Q({map:h,roughness:1,metalness:0})}createRock(t,e,i=0){const n=.6+Math.random()*1.4,s=new br(n,1),o=s.attributes.position;for(let c=0;c<o.count;c++){const h=o.getX(c),u=o.getY(c),d=o.getZ(c),p=(Math.random()-.5)*n*.15;o.setXYZ(c,h+p,u+p*.5,d+(Math.random()-.5)*n*.15)}s.computeVertexNormals();const a=new Q({color:8359053,roughness:1}),l=new z(s,a);if(l.position.set(t,i+n/2,e),l.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),l.castShadow=!0,l.receiveShadow=!0,Math.random()>.6){const c=new z(new bn(n*.4,6),new Q({color:3066993}));c.rotation.x=-Math.PI/2,c.position.y=.01,l.add(c)}return this._tagStaticCollider(l,"rock"),l}createRockPillar(t,e,i=0){const n=2.5+Math.random()*2.5,s=.4+Math.random()*.3,o=s+.5,a=new me(s,o,n,8,1),l=new Q({color:7171437,roughness:1}),c=new z(a,l);return c.position.set(t,i+n/2,e),c.castShadow=!0,c.receiveShadow=!0,this._tagStaticCollider(c,"rock"),c}createFlatBoulder(t,e,i=0){const n=2+Math.random()*2,s=.8+Math.random()*.6,o=1.5+Math.random()*1,a=new it(n,s,o),l=new Q({color:9145227,roughness:1}),c=new z(a,l);return c.position.set(t,i+s/2,e),c.rotation.y=Math.random()*Math.PI,c.castShadow=!0,c.receiveShadow=!0,this._tagStaticCollider(c,"rock"),c}createCrystalShard(t,e,i=0){const n=2+Math.random()*2,s=new an(.6+Math.random()*.4,n,6),o=new Q({color:10181046,roughness:.7,metalness:.2,emissive:4008804,emissiveIntensity:.25}),a=new z(s,o);return a.position.set(t,i+n/2,e),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,a}createStackedRock(t,e,i=0){const n=new Xt,s=this.createRock(0,0,0);n.add(s);const o=this.createRock(0,0);o.scale.set(.6,.6,.6),o.position.set(.3,o.position.y+.9,-.2),n.add(o);const a=this.createRock(0,0);return a.scale.set(.4,.4,.4),a.position.set(-.2,a.position.y+1.5,.3),n.add(a),n.position.set(t,i,e),n.traverse(l=>{l.castShadow=!0,l.receiveShadow=!0}),this._tagStaticCollider(n,"rock"),n}createBasaltCluster(t,e,i=0){const n=new Xt,s=3+Math.floor(Math.random()*4);for(let o=0;o<s;o++){const a=1+Math.random()*2,l=new me(.35,.4,a,6),c=new Q({color:4934475,roughness:.9}),h=new z(l,c);h.position.set((Math.random()-.5)*.9,a/2,(Math.random()-.5)*.9),h.castShadow=!0,h.receiveShadow=!0,n.add(h)}return n.position.set(t,i,e),this._tagStaticCollider(n,"rock"),n}createBush(t,e){const i=new Xt;i.position.set(t,0,e);const n=new Q({color:2924588,roughness:1}),s=2+Math.floor(Math.random()*3);for(let o=0;o<s;o++){const a=1.2+Math.random()*1,l=new z(new ln(a,6,6),n);l.position.set((Math.random()-.5)*1.2,a*.65,(Math.random()-.5)*1.2),l.castShadow=!0,i.add(l)}return i}createVehicle(t,e,i="car"){const n=new Xt;n.position.set(t,0,e),n.rotation.y=Math.random()*Math.PI*2;const s=i==="truck"?.45:.35,o=i==="truck"?.4:.3;if(n.userData=n.userData||{},n.userData={vehicleType:i,wheelRadius:s,wheelCenterY:o,groundClearance:s-o,wheels:[]},i==="car"){const a=[1668818,15921906,1118481,9116186,15022389,15844367],l=new Q({color:a[Math.floor(Math.random()*a.length)],metalness:.45,roughness:.38}),c=new Q({color:16119285,metalness:.2,roughness:.6}),h=new Q({color:2042416,roughness:.8}),u=new z(new it(2.2,.9,4.2),l);u.position.y=.85,u.castShadow=!0,n.add(u);const d=new z(new it(2.25,.15,4.25),c);d.position.set(0,.9,0),n.add(d);const p=new z(new it(1.8,.9,2.1),h);p.position.set(0,1.55,-.2),p.castShadow=!0,n.add(p);const g=new Q({color:1710618,transparent:!0,opacity:.7,metalness:.2,roughness:.1}),_=new z(new it(1.6,.6,.08),g);_.position.set(0,1.55,1),n.add(_);const m=new z(new it(1.6,.6,.08),g);m.position.set(0,1.55,-1.5),n.add(m);const f=new z(new it(2.1,.25,.35),h);f.position.set(0,.55,2.1),n.add(f);const x=f.clone();x.position.z=-2.1,n.add(x);const v=new Q({color:855309,roughness:.9}),S=[14673130,789516,16777215];[[-.95,o,1.35],[.95,o,1.35],[-.95,o,-1.35],[.95,o,-1.35]].forEach(O=>{const q=new z(new me(s,s,.35,14,1,!1),v);q.rotation.z=Math.PI/2,q.position.set(...O),q.castShadow=!0;const P=new z(new it(.35,.12,.14),new Q({color:273}));P.position.set(0,0,0),P.rotation.y=Math.PI/8,q.add(P);const N=new z(new me(s*.55,s*.55,.18,12),new Q({color:S[Math.floor(Math.random()*S.length)],roughness:.45,metalness:.65}));N.rotation.z=Math.PI/2,N.position.set(0,0,0),q.add(N);const H=new z(new it(.05,s*1.2,.02),new Q({color:16777215,emissive:8947848,emissiveIntensity:.6}));H.position.set(0,0,.18),q.add(H),n.add(q),n.userData.wheels.push(q)});const T=new Q({color:16777130,emissive:16774557,emissiveIntensity:.8}),A=new Q({color:16732754,emissive:16732754,emissiveIntensity:.6}),I=new z(new it(.25,.2,.1),T);I.position.set(-.75,.8,2.15),n.add(I);const M=I.clone();M.position.x=.75,n.add(M);const w=new z(new it(.25,.2,.1),A);w.position.set(-.75,.8,-2.15),n.add(w);const B=w.clone();B.position.x=.75,n.add(B)}else if(i==="truck"){const a=[1981023,15921906,1118481,9116186,15022389,15844367],l=new Q({color:a[Math.floor(Math.random()*a.length)],metalness:.55,roughness:.42}),c=new Q({color:16119285,roughness:.7}),h=new Q({color:2042416,roughness:.8}),u=new z(new it(2.6,1.1,5.2),l);u.position.y=1.05,u.castShadow=!0,n.add(u);const d=new z(new it(2.65,.18,5.25),c);d.position.set(0,1.1,0),n.add(d);const p=new z(new it(2.3,1.3,2.2),h);p.position.set(0,2.05,1.2),p.castShadow=!0,n.add(p);const g=new z(new it(2.35,.85,2.6),new Q({color:8359053}));g.position.set(0,1.55,-1.55),g.castShadow=!0,n.add(g);const _=new Q({color:1710618,transparent:!0,opacity:.7}),m=new z(new it(2,.7,.08),_);m.position.set(0,2.05,2.05),n.add(m);const f=new z(new it(.08,.6,1.2),_);f.position.set(-1.15,2.05,1.2),n.add(f);const x=f.clone();x.position.x=1.15,n.add(x);const v=new Q({color:855309}),S=[14673130,789516,16777215];[[-1.1,.4,1.8],[1.1,.4,1.8],[-1.1,.4,-1.5],[1.1,.4,-1.5],[-1.1,.4,-2.2],[1.1,.4,-2.2]].forEach(O=>{const q=new z(new me(s,s,.45,14,1,!1),v);q.rotation.z=Math.PI/2,q.position.set(...O),q.castShadow=!0;const P=new z(new it(.4,.14,.16),new Q({color:273}));P.rotation.y=Math.PI/8,q.add(P);const N=new z(new me(s*.55,s*.55,.2,12),new Q({color:S[Math.floor(Math.random()*S.length)],roughness:.45,metalness:.65}));N.rotation.z=Math.PI/2,N.position.set(0,0,0),q.add(N);const H=new z(new it(.06,s*1.3,.025),new Q({color:16777215,emissive:8947848,emissiveIntensity:.6}));H.position.set(0,0,.2),q.add(H),n.add(q),n.userData.wheels.push(q)});const T=new Q({color:16776960,emissive:16776960,emissiveIntensity:.6}),A=new Q({color:16732754,emissive:16732754,emissiveIntensity:.5}),I=new z(new it(.28,.22,.12),T);I.position.set(-.95,1.85,2.35),n.add(I);const M=I.clone();M.position.x=.95,n.add(M);const w=new z(new it(.28,.22,.12),A);w.position.set(-.95,1.2,-2.55),n.add(w);const B=w.clone();B.position.x=.95,n.add(B)}return n}createGrassClump(t,e){const i=new Xt;i.position.set(t,0,e);const n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const o=.2+Math.random()*.6,a=new Ue(.05,o),l=new Q({color:5620331,side:ke}),c=new z(a,l);c.position.y=o/2,c.rotation.y=Math.random()*Math.PI,c.rotation.z=(Math.random()-.5)*.6,c.receiveShadow=!0,i.add(c)}return i}createHouse(t,e,{scale:i=1}={}){const n=new Xt;n.position.set(t,0,e),n.rotation.y=Math.random()*Math.PI*2;const s=new Q({color:9807270}),o=new Q({color:12597547});[{w:6,h:4,d:.5,x:0,y:2,z:-3},{w:.5,h:4,d:6,x:-3,y:2,z:0},{w:.5,h:4,d:6,x:3,y:2,z:0},{w:2,h:4,d:.5,x:-2,y:2,z:3},{w:2,h:4,d:.5,x:2,y:2,z:3},{w:2,h:1,d:.5,x:0,y:3.5,z:3}].forEach(g=>{const _=new z(new it(g.w,g.h,g.d),s);_.position.set(g.x,g.y,g.z),_.castShadow=!0,_.receiveShadow=!0,n.add(_),this.objects.push(_)});const l=new z(new an(5,2,4),o);l.position.y=5,l.rotation.y=Math.PI/4,l.castShadow=!0,n.add(l);const c=new Q({color:5057307}),h=new z(new it(1,2.2,.1),c);h.position.set(0,1.1,3.26),n.add(h);const u=new Q({color:8962303,metalness:.1,roughness:.2,transparent:!0,opacity:.8}),d=new z(new it(1,1,.05),u);d.position.set(-2,2.2,-3.26);const p=d.clone();return p.position.set(2,2.2,-3.26),n.add(d),n.add(p),n.scale.setScalar(i),n}createPlateau(t,e,i=10,n=8,s=0){const o=new Xt,a=new Q({color:8355711,roughness:1}),l=new z(new me(i,i*1.05,n,16,1),a);l.position.set(0,n/2,0),l.castShadow=!0,l.receiveShadow=!0,o.add(l);const c=i*1.4,h=n,u=i*.8,d=new it(u,h,c),p=new z(d,new Q({color:9342606,roughness:1}));p.castShadow=!0,p.receiveShadow=!0;const g=Math.atan(h/c);p.rotation.x=-g,p.position.set(0,h/2,i),p.userData={type:"house"},o.add(p);const _=new it(u,.2,c),m=new z(_,new Q({color:7105644}));return m.position.set(0,h,i),m.rotation.x=p.rotation.x,m.castShadow=!0,o.add(m),o.position.set(t,s,e),o.userData={type:"house"},o}createSmallBuilding(t,e){const i=new Xt;i.position.set(t,0,e),i.rotation.y=Math.random()*Math.PI*2;const n=new Q({color:8359053}),s=new Q({color:12436423}),o=8,a=8,l=6,c=.35,h=2.2,u=o/2,d=a/2,p=new z(new it(o,l,c),n);p.position.set(0,l/2,-d);const g=new z(new it(c,l,a),n);g.position.set(-u,l/2,0);const _=g.clone();_.position.x=u;const m=new z(new it((o-h)/2,l,c),n);m.position.set(-2.55,l/2,d);const f=m.clone();f.position.x=h/2+(o-h)/4,[p,g,_,m,f].forEach(M=>{M.castShadow=!0,M.receiveShadow=!0,i.add(M)});const x=new z(new it(o-.4,.3,a-.4),s);x.position.y=.15,x.receiveShadow=!0,i.add(x);const v=new z(new it(o-.4,.3,a-.4),s);v.position.y=3.4,v.receiveShadow=!0,i.add(v);const S=v.position.y,C=10,T=new it(3,S,C),A=new z(T,s);A.position.set(0,S/2,d+C/2),A.rotation.x=-Math.atan(S/C),A.castShadow=!0,A.receiveShadow=!0,i.add(A);const I=new z(new it(o+.4,.4,a+.4),new Q({color:9807270}));return I.position.y=l+.2,I.castShadow=!0,i.add(I),i}spawnPrefab(t,e,i,n={}){const s=this.getHeightAt&&typeof this.getHeightAt=="function"?this.getHeightAt(e,i):0;let o=null;switch(t){case"house":{o=this.createHouse(e,i,{scale:1}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"House",type:"house"};break}case"mansion":{o=this.createHouse(e,i,{scale:1.6}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Mansion",type:"house",size:"large"};break}case"cabin":{o=this.createHouse(e,i,{scale:.85}),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Cabin",type:"house",size:"small"};break}case"smallBuilding":{o=this.createSmallBuilding(e,i),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"};break}case"plateau":{const a=this.createPlateau(e,i,10+Math.random()*6,8+Math.random()*6,s);a.userData={gameId:this.generateID(),gameName:"Plateau",type:"house",size:"large"},o=a;break}case"rock":{o=this.createRock(e,i),o.position.y=s,o.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"};break}case"tree":{const a=n.variant||(Math.random()>.5?"Oak":"Pine");o=this.createTree(e,i,a),o.position.y=s,o.userData={gameId:this.generateID(),gameName:`Tree_${a}`,type:"tree"};break}case"vehicle":{const a=n.variant||(Math.random()>.6?"truck":"car");o=this.createVehicle(e,i,a),o.position.y=s,o.userData={gameId:this.generateID(),gameName:`Vehicle_${a}`,type:"vehicle"};break}case"crate":{const a=new z(new it(2,2,2),new Q({color:9342606,roughness:.9}));a.position.set(e,s+1,i),a.castShadow=!0,a.receiveShadow=!0,a.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},o=a;break}}return o&&(this.scene.add(o),this.objects.push(o)),o}createArenaBunker(t,e){const i=new Xt;i.position.set(t,0,e),i.rotation.y=Math.random()*Math.PI*2;const n=new Zi({color:4937059,flatShading:!0}),s=new Zi({color:6253691,flatShading:!0}),o=new z(new it(6,2.5,6),n);o.position.y=1.25,o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=new z(new it(6.2,.3,6.2),s);a.position.y=2.65,a.castShadow=!0,i.add(a);const l=new z(new it(1.2,1.8,.2),new Zi({color:9280168,flatShading:!0,transparent:!0,opacity:.2}));l.position.set(0,.9,3.1),i.add(l);const c=new it(2,1.2,4),h=new z(c,s);return h.position.set(-2.5,.6,-1),h.rotation.x=-Math.atan(1.2/4),h.castShadow=!0,h.receiveShadow=!0,h.userData={type:"house"},i.add(h),i}createStormVisuals(){if(this.gameMode==="matrix")return;const t=new me(this.stormRadius,this.stormRadius,50,32,1,!0),e=new _i({color:9323693,transparent:!0,opacity:.3,side:ke});this.stormMesh=new z(t,e),this.stormMesh.position.y=25,this.scene.add(this.stormMesh)}createTarget(t,e){const i=new Xt;i.position.set(t,0,e);const n=new z(new me(.05,.05,2,6),new Q({color:8947848}));n.position.y=1,i.add(n);const s=new bn(.8,24),o=new Q({color:16777215}),a=new z(s,o);a.position.set(0,2,0),a.rotation.y=Math.PI,i.add(a);const l=new Q({color:16729156}),c=new Q({color:15844367}),h=new Q({color:3447003}),u=(p,g)=>{const _=new z(new Tr(p,.02,6,24),g);return _.rotation.x=Math.PI/2,_.position.y=2,_};i.add(u(.75,h)),i.add(u(.55,l)),i.add(u(.35,c));const d=new z(new bn(.1,12),new Q({color:0}));return d.position.set(0,2.01,0),d.rotation.y=Math.PI,i.add(d),i.userData={gameId:this.generateID(),gameName:"Target",type:"house"},i}update(t,e){if(this.gameMode==="matrix"||this.gameMode==="studio"||this.gameMode==="matrix-ai")return{inStorm:!1};if(this.stormEnabled===!1)return{inStorm:!1};if(this.stormRadius>10){this.stormRadius-=this.stormShrinkRate*t;const n=this.initialStormRadius?this.stormRadius/this.initialStormRadius:1;this.stormMesh&&this.stormMesh.scale&&this.stormMesh.scale.set(n,1,n)}return{inStorm:Math.sqrt(e.x*e.x+e.z*e.z)>this.stormRadius}}_buildHeightFn(){return()=>0}_tagStaticCollider(t,e=null){if(!t)return;t.updateWorldMatrix(!0,!0);const i=new yi().setFromObject(t);t.userData=t.userData||{},e&&!t.userData.type&&(t.userData.type=e),t.userData.colliderBox=i,t.userData.colliderType="solid"}getHeightAt(t,e){return this._heightFn?this._heightFn(t,e):0}}const Bp="modulepreload",Fp=function(r){return"/threejs-voxel-firecraft/dist/"+r},ma={},Op=function(t,e,i){let n=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(e.map(l=>{if(l=Fp(l),l in ma)return;ma[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Bp,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},Ji=new pn(0,0,0,"YXZ"),Qi=new R,kp={type:"change"},zp={type:"lock"},Hp={type:"unlock"},ga=Math.PI/2;class Gp extends Ui{constructor(t,e){super(),this.camera=t,this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Vp.bind(this),this._onPointerlockChange=Wp.bind(this),this._onPointerlockError=Xp.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(t){const e=this.camera;Qi.setFromMatrixColumn(e.matrix,0),Qi.crossVectors(e.up,Qi),e.position.addScaledVector(Qi,t)}moveRight(t){const e=this.camera;Qi.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Qi,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Vp(r){if(this.isLocked===!1)return;const t=r.movementX||r.mozMovementX||r.webkitMovementX||0,e=r.movementY||r.mozMovementY||r.webkitMovementY||0,i=this.camera;Ji.setFromQuaternion(i.quaternion),Ji.y-=t*.002*this.pointerSpeed,Ji.x-=e*.002*this.pointerSpeed,Ji.x=Math.max(ga-this.maxPolarAngle,Math.min(ga-this.minPolarAngle,Ji.x)),i.quaternion.setFromEuler(Ji),this.dispatchEvent(kp)}function Wp(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(zp),this.isLocked=!0):(this.dispatchEvent(Hp),this.isLocked=!1)}function Xp(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const qp="/threejs-voxel-firecraft/dist/assets/mixkit-game-gun-shot-D1lu3gfh.ogg",jp="/threejs-voxel-firecraft/dist/assets/smack-BAv2er9i.ogg",Yp="/threejs-voxel-firecraft/dist/assets/ugh-CPf3Qqe6.ogg",Kp="/threejs-voxel-firecraft/dist/assets/mixkit-footsteps-on-tall-grass-532-DkmduvPT.ogg",$p="/threejs-voxel-firecraft/dist/assets/mixkit-car-door-slam-xN3cwxzE.wav";class Zp{constructor(t,e,i,n={}){this.camera=t,this.scene=e,this.worldObjects=i,this.world=null,this.hud=null,this.gameMode=n.gameMode||"survival",this.showTracers=n.showTracers===!0,this.backpack=null,this.backpackColor=null,this.placedBlocks=[],this.blockSize=1,this.minBlockSize=.5,this.maxBlockSize=2,this.previewBlock=null,this.isFloating=!1,this.selectedBlock=null,this.selectedBlockHelper=null,this.health=100,this.shield=100,this.isDead=!1,this.stamina=100,this.punchCount=0,this.isTired=!1,this.velocity=new R,this.direction=new R,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.canJump=!1,this.speed=42,this.jumpHeight=30,this.gravity=250,this.distanceTraveled=0,this.previousPosition=new R,this.allWeapons=[{name:"Pistol",ammo:12,maxAmmo:60,magazineSize:12,currentMag:12,damage:20,cooldown:.5,lastShot:0,reloadTime:1.5,range:50},{name:"Fist",ammo:1/0,maxAmmo:1/0,magazineSize:1/0,currentMag:1/0,damage:10,cooldown:.2,lastShot:0,reloadTime:0,range:3},{name:"Rifle",ammo:30,maxAmmo:120,magazineSize:30,currentMag:30,damage:25,cooldown:.15,lastShot:0,reloadTime:2,range:120,zoomFov:30},{name:"Sniper",ammo:5,maxAmmo:20,magazineSize:5,currentMag:5,damage:100,cooldown:2,lastShot:0,reloadTime:3,range:400,zoomFov:12},{name:"SMG",ammo:40,maxAmmo:200,magazineSize:40,currentMag:40,damage:15,cooldown:.08,lastShot:0,reloadTime:1.8,range:80},{name:"Shotgun",ammo:6,maxAmmo:24,magazineSize:6,currentMag:6,damage:60,cooldown:1,lastShot:0,reloadTime:2.5,range:25},{name:"DMR",ammo:12,maxAmmo:48,magazineSize:12,currentMag:12,damage:45,cooldown:.35,lastShot:0,reloadTime:2.2,range:200,zoomFov:18}],this.weapons=[this.allWeapons[1],this.allWeapons[0]],this.currentWeaponIndex=0,this.isReloading=!1,this.controls=new Gp(t,document.body),document.addEventListener("pointerlockerror",s=>{try{s.stopImmediatePropagation()}catch{}console.warn("Pointer lock request failed or unavailable in this environment.")},!0),this.allowTouchMovement=!1,this._touchYaw=0,this._touchPitch=0,document.addEventListener("fullscreenchange",()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}),this.createPlayerMesh(),this.cameraMode=n.cameraMode||"TPS",this.fpsCameraOffset=new R(0,1.6,0),this.tpsCameraOffset=new R(1,1.8,3.4),this.initControls(),this.sfxVolume=.7,this.sfxVolume=.7,this.gunshotBuffer=null,this.reloadBuffer=null,this.smackBuffer=null,this.ughBuffer=null,this.footstepsBuffer=null,this._footstepsSource=null,this._footstepsGain=null,this.vehicleDoorBuffer=null,this.vehicleDriveBuffer=null,this._vehicleDriveSource=null,this._vehicleDriveGain=null,this._lastVehicleDriveActive=!1,this.enableVehicleDriveSound=!1,this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer=null,this._lastFootstepsActive=!1,this.isCrouching=!1,this.crouchHeight=.8,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.vehicleBaseMaxSpeed=70,this.vehicleBoostMax=45,this.vehicleAccel=70,this.vehicleTurnSpeed=1.8,this.vehicleFriction=2.8,this.vehicleAccelHold=0,this.vehiclePromptEl=document.getElementById("interaction-prompt"),this.nearVehicle=null,this.vehicleFuel=0,this.vehicleFuelCapacity=0,this.vehicleDistance=0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=0,this.vehicleEfficiencyKmPerL=10,this.vehicleIdleLph=.4,this.vehicleThrottleLph=.8,this._vehicleStateCache=null,this.vehicleTurbo=!1,this.currentSpeed=0,this.vehicleHud={root:document.getElementById("vehicle-hud"),speed:document.getElementById("vehicle-speed"),fuelBar:document.getElementById("vehicle-fuel-bar"),fuelFill:document.getElementById("vehicle-fuel-fill"),fuelText:document.getElementById("vehicle-fuel-text"),distance:document.getElementById("vehicle-distance"),efficiency:document.getElementById("vehicle-efficiency"),range:document.getElementById("vehicle-range")},this.studioSelected=null,this._studioRaycaster=new Ke,this.studioSelectionHelper=null,this.selectionInfo=document.getElementById("selection-info"),this.controls.enabled=this.gameMode!=="studio";try{const s=window.AudioContext||window.webkitAudioContext;s&&(this.audioCtx=new s,fetch(qp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.gunshotBuffer=o}).catch(o=>console.warn("Error loading gunshot SFX:",o)),Op(()=>import("./mixkit-shotgun-recharge-CcrH8C2K.js"),[]).then(o=>fetch(o.default)).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.reloadBuffer=o}).catch(o=>console.warn("Error loading reload SFX:",o)),fetch(jp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.smackBuffer=o}).catch(o=>console.warn("Error loading smack SFX:",o)),fetch(Yp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.ughBuffer=o}).catch(o=>console.warn("Error loading hurt SFX:",o)),fetch(Kp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.footstepsBuffer=o}).catch(o=>console.warn("Error loading footsteps SFX:",o)),fetch($p).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.vehicleDoorBuffer=o}).catch(o=>console.warn("Error loading vehicle door SFX:",o)))}catch(s){console.warn("Web Audio API not supported:",s)}}separateFromRemotePlayers(){if(!this.multiplayerClient||!this.multiplayerClient.others||this.multiplayerClient.others.size===0)return;const e=.6*2,i=this.mesh.position;this.multiplayerClient.others.forEach(n=>{if(!n||!n.position||n.userData&&n.userData.dead)return;const s=i.x-n.position.x,o=i.z-n.position.z,a=s*s+o*o;if(a<e*e&&a>1e-4){const l=Math.sqrt(a),c=(e-l)*.5,h=s/l,u=o/l;i.x+=h*c,i.z+=u*c}})}placeBlock(){if(!this.world)return;const t=this.getBlockTarget(),e=t.size,i=new it(e,e,e),n=new Q({color:11887901,roughness:.9}),s=new z(i,n);s.position.copy(t.position),s.castShadow=!0,s.receiveShadow=!0,s.userData={type:"block",size:e,gameId:this.world.generateID?this.world.generateID():void 0,gameName:"Block"},this.scene.add(s),this.world.objects&&this.world.objects.push(s),this.placedBlocks.push(s)}createPlayerMesh(){this.mesh=new Xt,this.scene.add(this.mesh);const t=this.playerColor||3447003,e=new Q({color:t}),i=new Q({color:16764074}),n=new Q({color:2899536});this.head=new z(new it(.5,.5,.5),i),this.head.position.y=1.75,this.mesh.add(this.head);const s=new Q({color:15158332}),o=new z(new it(.52,.1,.52),s);o.position.set(0,.3,0),this.head.add(o);const a=new z(new it(.52,.02,.35),s);a.position.set(0,.22,.35),this.head.add(a);const l=new Q({color:0}),c=new Q({color:1710618,transparent:!0,opacity:.7,metalness:.8,roughness:.2}),h=new z(new it(.18,.12,.02),c);h.position.set(-.12,.05,.26),this.head.add(h);const u=new z(new it(.18,.12,.02),c);u.position.set(.12,.05,.26),this.head.add(u);const d=new z(new it(.08,.02,.02),l);d.position.set(0,.05,.26),this.head.add(d);const p=new z(new it(.02,.02,.3),l);p.position.set(-.21,.05,.1),this.head.add(p);const g=new z(new it(.02,.02,.3),l);g.position.set(.21,.05,.1),this.head.add(g);const _=new z(new it(.6,.8,.3),e);_.position.y=1.1,this.mesh.add(_);const m=new it(.2,.8,.2);m.translate(0,-.3,0),this.leftArmPivot=new Xt,this.leftArmPivot.name="leftArmPivot",this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot);const f=new z(m,i);this.leftArmPivot.add(f),this.rightArmPivot=new Xt,this.rightArmPivot.name="rightArmPivot",this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot);const x=new z(m,i);this.rightArmPivot.add(x),this.weaponModels={};const v=new Xt,S=new z(new it(.12,.12,.35),new Q({color:1710618,metalness:.8,roughness:.3}));S.position.set(0,-.28,.2);const C=new z(new it(.06,.06,.15),new Q({color:657930,metalness:.9,roughness:.2}));C.position.set(0,-.28,.4);const T=new z(new it(.1,.25,.12),new Q({color:2894892}));T.position.set(0,-.42,.15);const A=new z(new it(.03,.05,.03),new Q({color:1710618}));A.position.set(0,-.35,.18),v.add(S,C,T,A),this.rightArmPivot.add(v),this.weaponModels.Pistol=v;const I=new Xt,M=new z(new it(.08,.08,.9),new Q({color:1710618,metalness:.8,roughness:.3}));M.position.set(0,-.28,.45);const w=new z(new it(.12,.14,.4),new Q({color:2894892}));w.position.set(0,-.3,.2);const B=new z(new it(.1,.22,.12),new Q({color:2894892}));B.position.set(0,-.44,.15);const O=new z(new it(.1,.12,.25),new Q({color:3815994}));O.position.set(0,-.28,-.1);const q=new z(new it(.08,.25,.1),new Q({color:1710618}));q.position.set(0,-.5,.2),I.add(M,w,B,O,q),this.rightArmPivot.add(I),this.weaponModels.Rifle=I;const P=new Xt,N=new z(new it(.08,.08,1.3),new Q({color:1727514,metalness:.6,roughness:.4}));N.position.set(0,-.28,.65);const H=new z(new it(.14,.16,.5),new Q({color:2969622}));H.position.set(0,-.3,.25);const K=new z(new me(.06,.06,.35,8),new Q({color:657930,metalness:.9,roughness:.1}));K.rotation.z=Math.PI/2,K.position.set(0,-.18,.4);const Y=new z(new me(.05,.05,.02,8),new Q({color:1723791,metalness:.9,roughness:.1,emissive:663616}));Y.rotation.z=Math.PI/2,Y.position.set(0,-.18,.58);const X=new z(new it(.12,.14,.3),new Q({color:3811866}));X.position.set(0,-.28,-.05);const j=new z(new it(.02,.15,.02),new Q({color:1710618}));j.position.set(0,-.42,.5),P.add(N,H,K,Y,X,j),this.rightArmPivot.add(P),this.weaponModels.Sniper=P,Object.values(this.weaponModels).forEach(gt=>gt.visible=!1);const nt=I.clone();nt.traverse(gt=>{gt.material&&gt.material.color&&gt.material.color.setHex(5598095)}),nt.scale.set(.8,.8,.8),this.rightArmPivot.add(nt),this.weaponModels.SMG=nt;const st=I.clone();st.traverse(gt=>{gt.material&&gt.material.color&&gt.material.color.setHex(9132587)}),st.scale.set(1.1,1,.8),this.rightArmPivot.add(st),this.weaponModels.Shotgun=st;const V=I.clone();V.traverse(gt=>{gt.material&&gt.material.color&&gt.material.color.setHex(3050327)}),V.scale.set(.95,.95,1),this.rightArmPivot.add(V),this.weaponModels.DMR=V;const $=new it(this.blockSize,this.blockSize,this.blockSize),at=new Q({color:3066993,transparent:!0,opacity:.35,wireframe:!0});this.previewBlock=new z($,at),this.previewBlock.visible=this.gameMode==="studio",this.previewBlock.castShadow=!1,this.previewBlock.receiveShadow=!1,this.scene.add(this.previewBlock);const dt=new it(.25,.8,.25);dt.translate(0,-.4,0),this.leftLegPivot=new Xt,this.leftLegPivot.name="leftLegPivot",this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot);const ft=new z(dt,n);this.leftLegPivot.add(ft),this.rightLegPivot=new Xt,this.rightLegPivot.name="rightLegPivot",this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot);const Tt=new z(dt,n);if(this.rightLegPivot.add(Tt),this.isAiming=!1,this.baseFov=75,this.aimFov=20,this.hitTimer=0,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.isPunching=!1,this.punchSide=0,this.isBlocking=!1,this.yaw=0,this.pitch=0,this.camera){const gt=new pn().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=gt.y,this.pitch=gt.x}}rotateCamera(t,e){if(!this.controls||!this.controls.isLocked){this.yaw-=t,this.pitch-=e;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}initControls(){const t=s=>{if(this.gameMode==="studio"&&this.studioSelected)switch(s.code){case"ArrowUp":s.shiftKey?this.moveSelectedObject(0,0,1.5):this.moveSelectedObject(0,-2),s.preventDefault();return;case"ArrowDown":s.shiftKey?this.moveSelectedObject(0,0,-1.5):this.moveSelectedObject(0,2),s.preventDefault();return;case"ArrowLeft":this.moveSelectedObject(-2,0),s.preventDefault();return;case"ArrowRight":this.moveSelectedObject(2,0),s.preventDefault();return;case"KeyX":this.removeSelectedObject(),s.preventDefault();return}switch(s.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"Digit1":this.switchWeapon(0);break;case"Digit2":this.switchWeapon(1);break;case"Digit3":this.switchWeapon(2);break;case"Digit4":this.switchWeapon(3);break;case"Digit5":this.switchWeapon(4);break;case"Digit6":this.switchWeapon(5);break;case"Numpad1":this.switchWeapon(0);break;case"Numpad2":this.switchWeapon(1);break;case"Numpad3":this.switchWeapon(2);break;case"Numpad4":this.switchWeapon(3);break;case"Numpad5":this.switchWeapon(4);break;case"Numpad6":this.switchWeapon(5);break;case"KeyB":this.gameMode==="studio"&&this.placeBlock();break;case"KeyU":if(this.gameMode==="studio"&&(this.isFloating=!this.isFloating,!this.isFloating)){const o=this.getSurfaceHeight(this.position.x,this.position.z);this.mesh.position.y=o,this.velocity.y=0}break;case"Minus":this.gameMode==="studio"&&this.adjustBlockSize(-.1);break;case"Equal":this.gameMode==="studio"&&this.adjustBlockSize(.1);break;case"KeyM":this.gameMode==="studio"&&this.moveLastBlock();break;case"KeyX":this.gameMode==="studio"&&(this.studioSelected?this.removeSelectedObject():this.selectedBlock?this.removeBlock(this.selectedBlock):this.removeLastBlock());break;case"KeyR":this.reload();break;case"KeyC":this.isCrouching=!this.isCrouching,this.isCrouching&&(this.isSprinting=!1);break;case"ShiftLeft":case"ShiftRight":this.isCrouching||(this.isSprinting=!0);break;case"Space":!this.isInVehicle&&this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"KeyN":this.isInVehicle&&(this.vehicleTurbo=!0);break;case"KeyV":this.toggleCameraMode();break;case"KeyE":if(this.isInVehicle){this.exitVehicle();return}else{const o=this.findNearbyVehicle();if(o){this.enterVehicle(o);return}}break}},e=s=>{switch(s.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break;case"Space":break;case"KeyN":this.vehicleTurbo=!1;break}},i=s=>{this.gameMode==="studio"&&(this.selectStudioObject(s)||this.selectBlockUnderCrosshair())||this.controls.isLocked&&(s.button===0?this.shoot():s.button===2&&(this.isAiming=!0))},n=s=>{s.button===2&&(this.isAiming=!1)};document.addEventListener("keydown",t),document.addEventListener("keyup",e),document.addEventListener("mousedown",i),document.addEventListener("mouseup",n),document.addEventListener("contextmenu",s=>s.preventDefault())}lockControls(){if(!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)){console.warn("Pointer Lock API not available in this environment.");return}const e=document.getElementById("main-menu");if(!(e&&e.style.display!=="none")&&!this.isPaused)try{const i=this.controls.lock();i&&typeof i.catch=="function"&&i.catch(()=>{})}catch(i){console.warn("Unable to lock pointer:",i)}}toggleCameraMode(){this.cameraMode=this.cameraMode==="FPS"?"TPS":"FPS",this.mesh&&(this.mesh.visible=this.cameraMode==="TPS"),console.log(`Camera mode: ${this.cameraMode}`)}switchWeapon(t){if(t>=0&&t<this.weapons.length){if(this.isReloading)return;this.currentWeaponIndex=t;const e=this.weapons[t].name;Object.values(this.weaponModels).forEach(i=>i.visible=!1),this.weaponModels[e]&&(this.weaponModels[e].visible=!0)}}reload(){if(this.isReloading)return;const t=this.weapons[this.currentWeaponIndex];t.ammo!==1/0&&t.currentMag!==t.magazineSize&&(t.ammo<=0||(this.isReloading=!0,console.log("Reloading..."),this.playReloadSound(),setTimeout(()=>{this.finishReload()},t.reloadTime*1e3)))}playReloadSound(){try{if(this.audioCtx&&this.reloadBuffer){this.audioCtx.state==="suspended"&&this.audioCtx.resume();const t=this.audioCtx.createBufferSource();t.buffer=this.reloadBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume*.8,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}catch(t){console.warn("Error playing reload sound:",t)}}finishReload(){if(!this.isReloading)return;const t=this.weapons[this.currentWeaponIndex],e=t.magazineSize-t.currentMag,i=t.ammo,n=Math.min(e,i);t.currentMag+=n,t.ammo-=n,this.isReloading=!1,console.log("Reloaded!")}startBlocking(){this.weapons[this.currentWeaponIndex].name==="Fist"&&(this.isBlocking=!0)}stopBlocking(){this.isBlocking=!1}collectItem(t){if(t==="ShieldPotion"){this.shield=Math.min(100,this.shield+50);return}if(t&&t.startsWith("Backpack:")){const i=t.split(":")[1]||"2c3e50";return this.equipBackpack(parseInt(i,16))}const e=this.weapons.find(i=>i.name===t);if(e)e.ammo=Math.min(e.maxAmmo,e.ammo+e.magazineSize),console.log("Added ammo for "+t);else{const i=this.allWeapons.find(n=>n.name===t);i&&(this.weapons.push(i),console.log("Picked up "+t))}}setEnemyManager(t){this.enemyManager=t}setMultiplayerClient(t){this.multiplayerClient=t}shoot(){var l;if(!(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0)||this.isDead||this.isReloading||this.isBlocking)return;const e=this.weapons[this.currentWeaponIndex],i=performance.now()/1e3;if(i-e.lastShot<e.cooldown)return;if(e.currentMag<=0){this.reload();return}if(e.lastShot=i,e.ammo!==1/0&&e.currentMag--,e.name==="Fist"){this.punch();return}this.createMuzzleFlash();try{if(this.audioCtx&&this.gunshotBuffer&&this.audioCtx.state==="running"){const c=this.audioCtx.createBufferSource();c.buffer=this.gunshotBuffer,e.name==="Pistol"?c.playbackRate.value=1:e.name==="Rifle"?c.playbackRate.value=1.15:e.name==="Sniper"?c.playbackRate.value=.9:c.playbackRate.value=1;const h=this.audioCtx.createGain();h.gain.value=this.sfxVolume,c.connect(h),h.connect(this.audioCtx.destination),c.start(0)}else this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}catch{}const n=new Ke;n.setFromCamera(new St(0,0),this.camera);const s=this.camera.position.clone();new R,n.ray.direction.clone().normalize();let o=s.clone().add(n.ray.direction.clone().multiplyScalar(1e3)),a=!1;if(this.worldObjects&&this.worldObjects.length>0){const c=n.intersectObjects(this.worldObjects,!0);c.length>0&&(o=c[0].point.clone(),a=!0)}if(this.enemyManager&&this.enemyManager.enemies){const c=n.intersectObjects(this.enemyManager.enemies.map(h=>h.mesh),!0);if(c.length>0){const h=c[0].point,u=s.distanceTo(h),d=s.distanceTo(o);if(u<d){const p=c[0].object;o=h.clone(),a=!0;let g=null;if(g=(m=>{let f=m;for(;f;){const x=this.enemyManager.enemies.find(v=>v.mesh===f);if(x)return x;f=f.parent}return null})(p),g){const m=s.distanceTo(g.position),f=e.range||1e3;m<=f?g.takeDamage(e.damage):a=!1}}}}if(this.multiplayerClient&&this.multiplayerClient.others&&this.multiplayerClient.others.size>0){const c=Array.from(this.multiplayerClient.others.values()),h=n.intersectObjects(c,!0);if(h.length>0){const u=h[0].point,d=s.distanceTo(u),p=s.distanceTo(o);if(d<p){o=u.clone(),a=!0;let g=h[0].object;for(;g&&!((l=g.userData)!=null&&l.gameId)&&g.parent;)g=g.parent;const _=g&&g.userData?g.userData.gameId:null;_&&this.multiplayerClient&&typeof this.multiplayerClient.sendHit=="function"&&this.multiplayerClient.sendHit(_,e.damage)}}}this.showTracers&&this.createBulletTracer(s,o,a),a&&e.name==="Sniper"&&this.createImpactSmoke(o)}createMuzzleFlash(){const t=new Cp(16776960,1,5),e=new R;this.camera.getWorldDirection(e),t.position.copy(this.mesh.position),t.position.y+=1.5,t.position.add(e.multiplyScalar(1)),this.scene.add(t),setTimeout(()=>this.scene.remove(t),100)}createBulletTracer(t,e,i){const n=[t,e],s=new ue().setFromPoints(n),o=i?16729156:16776960,a=new Ln({color:o,linewidth:2,opacity:.8,transparent:!0}),l=new ja(s,a);this.scene.add(l);let c=.8;const h=setInterval(()=>{c-=.1,a.opacity=c,c<=0&&(clearInterval(h),this.scene.remove(l),s.dispose(),a.dispose())},30)}createImpactSmoke(t){const e=new Xt;e.position.copy(t);const i=8;for(let a=0;a<i;a++){const l=.15+Math.random()*.2,c=new ln(l,6,6),h=new _i({color:6710886,transparent:!0,opacity:.5}),u=new z(c,h);u.position.set((Math.random()-.5)*.4,(Math.random()-.5)*.2,(Math.random()-.5)*.4),e.add(u)}this.scene.add(e);const n=600,s=performance.now(),o=()=>{const a=performance.now()-s,l=Math.max(0,1-a/n);e.children.forEach(c=>{c.material&&(c.material.opacity=l*.5)}),a<n?requestAnimationFrame(o):(e.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),this.scene.remove(e))};o()}update(t){if(this.isDead)return;if(this.updateVehiclePrompt(),this.isInVehicle){this.updateVehicleDrive(t);return}if(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0){this.velocity.x-=this.velocity.x*10*t,this.velocity.z-=this.velocity.z*10*t,this.isFloating?this.velocity.y*=.9:this.velocity.y-=this.gravity*t,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*this.speed*t),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*this.speed*t);const i=new R;this.camera.getWorldDirection(i),i.y=0,i.normalize();const n=new R;n.crossVectors(i,new R(0,1,0));const s=new R;this.moveForward&&s.add(i),this.moveBackward&&s.sub(i),this.moveRight&&s.add(n),this.moveLeft&&s.sub(n),s.normalize();const o=s.length()>0;let a=1;this.isSprinting&&!this.isCrouching&&o&&this.stamina>0&&(a=2);const l=this.speed*t*.1*a,c=s.multiplyScalar(l);c.x!==0&&(this.checkCollision(new R(Math.sign(c.x),0,0),Math.abs(c.x))||(this.mesh.position.x+=c.x)),c.z!==0&&(this.checkCollision(new R(0,0,Math.sign(c.z)),Math.abs(c.z))||(this.mesh.position.z+=c.z));let h=0;if(this.isFloating){const f=new R;this.camera.getWorldDirection(f);const x=f.y;this.moveForward&&(h+=x*this.speed*t*.3),this.moveBackward&&(h-=x*this.speed*t*.3)}if(this.mesh.position.y+=this.velocity.y*t+h,s.length()>0){const f=Math.atan2(s.x,s.z);this.mesh.rotation.y=f}if(this.mesh.position.y+=this.velocity.y*t,!this.isFloating&&!this.isFloating){this.mesh.position.y<0&&(this.velocity.y=0,this.mesh.position.y=0,this.canJump=!0);const f=this.getSurfaceHeight(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<f&&(this.mesh.position.y=f,this.velocity.y=0,this.canJump=!0)}const u=!this.isFloating&&(this.canJump||this.mesh.position.y<=.01);if(this.handleFootsteps(o&&u&&!this.isDead),this.gameMode==="studio"?this.updateBlockPreview():this.previewBlock&&(this.previewBlock.visible=!1),this.world&&typeof this.world.halfMapSize=="number"){const f=this.world.halfMapSize-1;this.mesh.position.x=Math.max(-f,Math.min(f,this.mesh.position.x)),this.mesh.position.z=Math.max(-f,Math.min(f,this.mesh.position.z))}if(this.separateFromRemotePlayers(),this.previousPosition.length()>0){const f=this.mesh.position.distanceTo(this.previousPosition);this.distanceTraveled+=f,t>0&&(this.currentSpeed=f/t)}if(this.previousPosition.copy(this.mesh.position),this.isSprinting&&!this.isCrouching&&o&&this.stamina>0){if(this.gameMode!=="studio"){const f=20*t;this.stamina=Math.max(0,this.stamina-f),this.stamina<=0&&(this.isSprinting=!1)}}else if(this.gameMode!=="studio"){const f=10*t;this.stamina=Math.min(100,this.stamina+f)}this.gameMode==="studio"&&(this.stamina=100),this.camera.position.copy(this.mesh.position);const d=this.isCrouching?1.6*this.crouchHeight:1.6;this.camera.position.y+=d;const p=this.isCrouching?this.crouchHeight:1;this.mesh.scale.y+=(p-this.mesh.scale.y)*10*t;let g=this.baseFov;const _=this.weapons[this.currentWeaponIndex];this.isAiming&&_&&_.zoomFov&&(g=_.zoomFov),Math.abs(this.camera.fov-g)>.1&&(this.camera.fov+=(g-this.camera.fov)*10*t,this.camera.updateProjectionMatrix());let m;this.cameraMode==="FPS"?m=this.fpsCameraOffset.clone():(m=this.tpsCameraOffset.clone(),m.applyQuaternion(this.camera.quaternion)),m.add(this.mesh.position),this.camera.position.copy(m),this.updateAnimations(t)}}findNearbyVehicle(){if(!this.worldObjects)return null;let t=null,e=4;return this.worldObjects.forEach(i=>{if(!i||!i.userData||i.userData.type!=="vehicle")return;const n=i.position.distanceTo(this.mesh.position);n<e&&(t=i,e=n)}),t}updateVehiclePrompt(){const t=this.vehiclePromptEl;if(!t)return;if(this.isInVehicle){t.innerText="Press E to exit vehicle",t.dataset.vehiclePrompt="1",t.classList.remove("hidden");return}const e=this.findNearbyVehicle();this.nearVehicle=e,e?(t.innerText="Press E to drive vehicle",t.dataset.vehiclePrompt="1",t.classList.remove("hidden")):t.dataset.vehiclePrompt==="1"&&(t.classList.add("hidden"),delete t.dataset.vehiclePrompt)}enterVehicle(t){if(!t||this.isInVehicle)return!1;t.userData||(t.userData={}),t.userData.hasFrontAligned||(t.rotation.y+=Math.PI,t.userData.hasFrontAligned=!0);const e=this.loadVehicleState(t);this.isInVehicle=!0,this.vehicleAccelHold=0,this.isSprinting=!1,this.vehicleTurbo=!1,this.currentVehicle=t,this.vehicleSpeed=0,this.currentSpeed=0;const i=t.userData&&t.userData.vehicleType||"car";return this.vehicleFuelCapacity=e?e.capacity:i==="truck"?60:40,this.vehicleFuel=e?e.fuel:this.vehicleFuelCapacity,this.vehicleDistance=e?e.distanceKm:0,this._vehicleFuelDistAccum=0,this.vehicleFuelUsed=e?e.fuelUsed:0,this.vehicleEfficiencyKmPerL=i==="truck"?3.5:5.5,this.vehicleIdleLph=i==="truck"?1:.7,this.vehicleThrottleLph=i==="truck"?2.8:1.9,this._vehicleMaxSpeed=i==="truck"?80/3.6:null,this._vehicleTurboMaxSpeed=i==="truck"?100/3.6:null,this._vehicleStateCache=e||null,this.previousPosition.copy(t.position),this.stopFootsteps(),this.stopVehicleDriveSound(),this.playVehicleDoor(),this.mesh.visible=!1,this.velocity.set(0,0,0),this.mesh.position.copy(t.position),this.updateVehicleHUD(!0),!0}exitVehicle(){if(!this.currentVehicle){this.isInVehicle=!1;return}const t=this.currentVehicle;if(this.playVehicleDoor(),this.stopVehicleDriveSound(),this.stopFootsteps(),this.world&&typeof this.world.getHeightAt=="function"){const s=this.world.getHeightAt(t.position.x,t.position.z),o=this.getVehicleGroundClearance(t);t.position.y=s+o}const e=new R(-1.5,0,-2).applyEuler(t.rotation),i=t.position.clone().add(e);this.mesh.position.copy(i);const n=typeof this.getSurfaceHeight=="function"?this.getSurfaceHeight(i.x,i.z):this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(i.x,i.z):i.y;this.mesh.position.y=n,this.velocity.set(0,0,0),this.mesh.visible=!0,this.isInVehicle=!1,this.currentVehicle=null,this.vehicleSpeed=0,this.canJump=!0,this.previousPosition.copy(this.mesh.position),this.saveVehicleState(t),this.updateVehicleHUD(!1),this.vehiclePromptEl&&this.vehiclePromptEl.dataset.vehiclePrompt==="1"&&(this.vehiclePromptEl.classList.add("hidden"),delete this.vehiclePromptEl.dataset.vehiclePrompt)}getVehicleGroundClearance(t){if(!t)return .05;const e=t.userData||{};return typeof e.groundClearance=="number"?e.groundClearance:typeof e.wheelRadius=="number"&&typeof e.wheelCenterY=="number"?Math.max(0,e.wheelRadius-e.wheelCenterY):.05}updateVehicleDrive(t){const e=this.currentVehicle;if(!e){this.isInVehicle=!1;return}this.stopFootsteps();const i=e.position.clone();if(this.vehicleFuel<=0){this.vehicleSpeed=0,this.mesh.position.copy(e.position),this.previousPosition.copy(e.position),this.currentSpeed=0,this.updateVehicleHUD(!0);return}let n=0;this.moveForward&&(n+=1),this.moveBackward&&(n-=1),this.vehicleSpeed+=n*this.vehicleAccel*t,this.moveForward&&n>0?this.vehicleAccelHold=Math.min(1,this.vehicleAccelHold+t*.8):this.vehicleAccelHold=Math.max(0,this.vehicleAccelHold-t*.6);const s=this.vehicleTurbo&&n>0,o=s?vType==="truck"?1.25:1.6:1,a=s?vType==="truck"?1.15:1.35:1,l=(this.vehicleBaseMaxSpeed+this.vehicleBoostMax*this.vehicleAccelHold)*o,c=this.vehicleBaseMaxSpeed*.5;this.vehicleSpeed=Math.min(l,Math.max(-c,this.vehicleSpeed)),this.vehicleSpeed+=n*this.vehicleAccel*t*(a-1),this.vehicleSpeed*=Math.max(0,1-this.vehicleFriction*t),this._vehicleMaxSpeed&&!s?this.vehicleSpeed=Math.min(this._vehicleMaxSpeed,this.vehicleSpeed):this._vehicleTurboMaxSpeed&&s&&(this.vehicleSpeed=Math.min(this._vehicleTurboMaxSpeed,this.vehicleSpeed)),this.currentSpeed=Math.abs(this.vehicleSpeed);const h=n>0,u=this.vehicleSpeed>=0?1:-1;this.moveLeft&&(e.rotation.y+=this.vehicleTurnSpeed*t*u),this.moveRight&&(e.rotation.y-=this.vehicleTurnSpeed*t*u);const d=new R(0,0,1).applyEuler(e.rotation),p=e.position.clone().addScaledVector(d,this.vehicleSpeed*t);if(this.checkVehicleCollision(p,e)?this.vehicleSpeed*=.2:e.position.copy(p),this.world&&typeof this.world.getHeightAt=="function"){const S=this.world.getHeightAt(e.position.x,e.position.z),C=this.getVehicleGroundClearance(e);e.position.y=S+C}if(this.world&&typeof this.world.halfMapSize=="number"){const S=this.world.halfMapSize-1;e.position.x=Math.max(-S,Math.min(S,e.position.x)),e.position.z=Math.max(-S,Math.min(S,e.position.z))}if(this.previousPosition.length()>0){const S=e.position.distanceTo(this.previousPosition);this.distanceTraveled+=S}this.mesh.position.copy(e.position),this.previousPosition.copy(e.position);const g=e.position.distanceTo(i);this.rotateVehicleWheels(e,g,this.vehicleSpeed);let _=0;if(_+=this.vehicleIdleLph/3600*t,h&&(_+=this.vehicleThrottleLph/3600*t*(s?1.7:1)),g>0){const S=g/1e3;this.vehicleDistance+=S;const C=S/this.vehicleEfficiencyKmPerL,T=h?C*.35*(s?1.35:1):0;_+=C+T}if(this.vehicleFuelUsed+=_,this.vehicleFuel=Math.max(0,this.vehicleFuel-_),this.vehicleFuel<=0&&(this.vehicleSpeed=0),this.saveVehicleState(e),this.updateVehicleHUD(!0),this.enemyManager&&Array.isArray(this.enemyManager.enemies)){const S=performance.now();this.enemyManager.enemies.forEach(C=>{if(!C||!C.position)return;if(C.position.distanceTo(e.position)<2.4){C.userData||(C.userData={});const A=C.userData.lastRunOver||0;if(S-A>400){C.userData.lastRunOver=S;try{C.takeDamage(999)}catch{}}}})}const m=e.position.clone(),f=new R(0,2,6).applyQuaternion(this.camera.quaternion),x=m.clone().add(f);this.camera.position.lerp(x,.18);const v=Math.abs(this.vehicleSpeed)>.5;this.handleVehicleDriveSound(v)}rotateVehicleWheels(t,e,i){if(!t||!t.userData||!t.userData.wheels||!t.userData.wheels.length)return;const n=t.userData.wheelRadius||.35,s=e/n,o=i>=0?-1:1;t.userData.wheels.forEach(a=>{try{a.rotation.x+=o*s}catch{}})}updateVehicleHUD(t){if(!this.vehicleHud||!this.vehicleHud.root)return;const e=this.vehicleHud.root,i=document.getElementById("dashboard");if(i){const s=i.getBoundingClientRect();e.style.left=`${s.left}px`,e.style.top=`${s.top+s.height+8}px`,e.style.width=`${s.width}px`}if(!t){e.classList.add("hidden");return}e.classList.remove("hidden");const n=Math.abs(this.vehicleSpeed)*3.6;if(this.vehicleHud.speed&&(this.vehicleHud.speed.innerText=n.toFixed(0)),this.vehicleHud.fuelFill){const s=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/s*100));this.vehicleHud.fuelFill.style.width=`${o}%`,this.vehicleHud.fuelFill.style.background=o<20?"linear-gradient(90deg, #ff7043, #ff3d00)":"linear-gradient(90deg, #8bc34a, #cddc39)"}if(this.vehicleHud.fuelText){const s=this.vehicleFuelCapacity||1,o=Math.max(0,Math.min(100,this.vehicleFuel/s*100));this.vehicleHud.fuelText.innerText=`${this.vehicleFuel.toFixed(1)}L (${o.toFixed(1)}%)`}if(this.vehicleHud.distance&&(this.vehicleHud.distance.innerText=this.vehicleDistance.toFixed(2)),this.vehicleHud.efficiency){const s=this.vehicleFuelUsed>0&&this.vehicleDistance>0?this.vehicleDistance/this.vehicleFuelUsed:0;this.vehicleHud.efficiency.innerText=s.toFixed(2)}if(this.vehicleHud.range){const s=this.vehicleFuel*this.vehicleEfficiencyKmPerL;this.vehicleHud.range.innerText=s.toFixed(1)}}getVehicleStorageKey(t){return!t||!t.userData||!t.userData.gameId?null:`vehicle-state-${t.userData.gameId}`}loadVehicleState(t){try{if(t&&t.userData&&t.userData.vehicleState)return t.userData.vehicleState;const e=this.getVehicleStorageKey(t);if(!e||typeof localStorage>"u")return null;const i=localStorage.getItem(e);if(!i)return null;const n=JSON.parse(i);return t.userData.vehicleState=n,n}catch{return null}}saveVehicleState(t){if(!t)return;const e=this.getVehicleStorageKey(t);if(!e)return;const i={fuel:this.vehicleFuel,capacity:this.vehicleFuelCapacity,distanceKm:this.vehicleDistance,fuelUsed:this.vehicleFuelUsed,vehicleType:t.userData&&t.userData.vehicleType||"car"};t.userData.vehicleState=i;try{typeof localStorage<"u"&&localStorage.setItem(e,JSON.stringify(i))}catch{}}selectStudioObject(t){if(this.gameMode!=="studio"||!this.worldObjects||this.worldObjects.length===0)return null;const e=new St;this.controls&&this.controls.isLocked?e.set(0,0):t&&t.clientX!==void 0?(e.x=t.clientX/window.innerWidth*2-1,e.y=-(t.clientY/window.innerHeight)*2+1):e.set(0,0),this._studioRaycaster.setFromCamera(e,this.camera);const i=this.worldObjects.filter(o=>o&&o.userData&&o.userData.gameName!=="Ground"),n=this._studioRaycaster.intersectObjects(i,!0);if(!n.length)return this.clearStudioSelection(),null;let s=n[0].object;for(;s&&!this.worldObjects.includes(s);)s=s.parent;return s&&this.setStudioSelection(s),s}moveSelectedObject(t,e,i=0){if(!this.studioSelected)return;const n=this.studioSelected;n.position.x+=t,n.position.z+=e,n.position.y+=i,i===0&&this.world&&typeof this.world.getHeightAt=="function"&&(n.position.y=this.world.getHeightAt(n.position.x,n.position.z)),this.refreshStudioSelectionHelper()}clearStudioSelection(){if(this.studioSelected=null,this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}this.selectionInfo&&this.selectionInfo.classList.add("hidden")}removeSelectedObject(){if(!this.studioSelected)return;const t=this.studioSelected;this.clearStudioSelection();try{this.scene.remove(t)}catch{}if(this.worldObjects){const e=this.worldObjects.indexOf(t);e>=0&&this.worldObjects.splice(e,1)}}setStudioSelection(t){if(this.studioSelected=t,this.selectionInfo){const e=t.userData||{};this.selectionInfo.innerText=`${e.gameName||"Object"} (${e.gameId||"---"})`,this.selectionInfo.classList.remove("hidden")}this.refreshStudioSelectionHelper()}refreshStudioSelectionHelper(){if(this.studioSelectionHelper){try{this.scene.remove(this.studioSelectionHelper)}catch{}this.studioSelectionHelper=null}if(this.studioSelected)try{const t=this.buildStudioSelectionBox(this.studioSelected);this.studioSelectionHelper=new Ip(t,16766720),this.studioSelectionHelper.material.depthTest=!1,this.studioSelectionHelper.material.transparent=!0,this.studioSelectionHelper.material.opacity=.9,this.scene.add(this.studioSelectionHelper)}catch{this.studioSelectionHelper=null}}buildStudioSelectionBox(t){const e=new yi;return t.traverse(i=>{if(!i.isMesh||!i.geometry)return;const n=i.userData||{},s=i.material;if(!(s&&s.transparent||n.isShadow||n.shadow)){if(!i.geometry.boundingBox)try{i.geometry.computeBoundingBox()}catch{}if(i.geometry.boundingBox){const a=i.geometry.boundingBox.clone();i.updateWorldMatrix(!0,!1),a.applyMatrix4(i.matrixWorld),e.union(a)}}}),e.isEmpty()&&e.setFromCenterAndSize(t.position,new R(1,1,1)),e}checkVehicleCollision(t,e=null){if(!this.worldObjects)return!1;const i=2;for(let n=0;n<this.worldObjects.length;n++){const s=this.worldObjects[n];if(!s)continue;const o=s.userData||{};if(e&&s===e||o.gameName==="Ground"||o.type==="ground")continue;const a=s.position||(s.getWorldPosition?s.getWorldPosition(new R):null);if(!a)continue;const l=a.distanceTo(t);let c=1.5;if(s.geometry&&s.geometry.boundingSphere?c=s.geometry.boundingSphere.radius||c:o&&o.size==="large"?c=5:o.type==="vehicle"&&(c=2.5),l<i+c)return!0}return!1}updateAnimations(t){const e=this.moveForward||this.moveBackward||this.moveLeft||this.moveRight,i=10,n=this.isSprinting&&e?1.8:1;if(e){this.animTime+=t*i*n;const s=Math.sin(this.animTime)*(.5*n);this.leftLegPivot.rotation.x=s,this.rightLegPivot.rotation.x=-s}else this.leftLegPivot.rotation.x=_e.lerp(this.leftLegPivot.rotation.x,0,t*i),this.rightLegPivot.rotation.x=_e.lerp(this.rightLegPivot.rotation.x,0,t*i);if(this.isBlocking){const s=-Math.PI/2.5,o=.5;this.leftArmPivot.rotation.x=_e.lerp(this.leftArmPivot.rotation.x,s,t*15),this.rightArmPivot.rotation.x=_e.lerp(this.rightArmPivot.rotation.x,s,t*15),this.leftArmPivot.rotation.z=_e.lerp(this.leftArmPivot.rotation.z,-o,t*15),this.rightArmPivot.rotation.z=_e.lerp(this.rightArmPivot.rotation.z,o,t*15)}else if(this.isPunching){this.punchTime+=t*20;const s=-Math.PI/2+Math.sin(this.punchTime)*.8;this.punchSide===0?(this.rightArmPivot.rotation.x=s,this.leftArmPivot.rotation.x=_e.lerp(this.leftArmPivot.rotation.x,0,t*10)):(this.leftArmPivot.rotation.x=s,this.rightArmPivot.rotation.x=_e.lerp(this.rightArmPivot.rotation.x,0,t*10)),this.punchTime>Math.PI&&(this.isPunching=!1,this.rightArmPivot.rotation.x=0,this.leftArmPivot.rotation.x=0),this.leftArmPivot.rotation.z=_e.lerp(this.leftArmPivot.rotation.z,0,t*10),this.rightArmPivot.rotation.z=_e.lerp(this.rightArmPivot.rotation.z,0,t*10)}else{if(e){const s=Math.sin(this.animTime)*.5*n;this.leftArmPivot.rotation.x=-s,this.rightArmPivot.rotation.x=s}else this.leftArmPivot.rotation.x=_e.lerp(this.leftArmPivot.rotation.x,0,t*10),this.rightArmPivot.rotation.x=_e.lerp(this.rightArmPivot.rotation.x,0,t*10);this.leftArmPivot.rotation.z=_e.lerp(this.leftArmPivot.rotation.z,0,t*10),this.rightArmPivot.rotation.z=_e.lerp(this.rightArmPivot.rotation.z,0,t*10)}if(this.hitTimer>0){this.hitTimer-=t;const s=Math.max(0,this.hitTimer)/.6,o=_e.lerp(-Math.PI/2.2,0,1-s);this.leftArmPivot.rotation.x=_e.lerp(this.leftArmPivot.rotation.x,o,t*20),this.rightArmPivot.rotation.x=_e.lerp(this.rightArmPivot.rotation.x,o,t*20)}}punch(){if(!this.isTired&&!(this.isPunching||this.isBlocking)&&(this.isPunching=!0,this.punchTime=0,this.punchSide=this.punchSide===0?1:0,this.punchCount++,this.punchCount>=20&&(this.isTired=!0,this.stamina=Math.max(0,this.stamina-20),setTimeout(()=>{this.isTired=!1,this.punchCount=0},3e3)),this.enemyManager&&this.enemyManager.enemies)){const t=new R;this.mesh.getWorldDirection(t);let e=!1;if(this.enemyManager.enemies.forEach(i=>{if(this.mesh.position.distanceTo(i.position)<3){const s=new R().subVectors(i.position,this.mesh.position).normalize();if(t.angleTo(s)<Math.PI/3){i.takeDamage(10);const a=t.clone().multiplyScalar(2);i.position.add(a),e=!0}}}),this.gameMode==="multiplayer"&&this.multiplayerClient&&this.multiplayerClient.others&&this.multiplayerClient.others.size>0){const i=Math.PI/3,n=3;this.multiplayerClient.others.forEach((s,o)=>{if(!s||!s.position||s.userData&&s.userData.dead||this.mesh.position.distanceTo(s.position)>n)return;const l=new R().subVectors(s.position,this.mesh.position).normalize();t.angleTo(l)<i&&(typeof this.multiplayerClient.sendHit=="function"&&this.multiplayerClient.sendHit(o,10),e=!0)})}e&&this.playSmack()}}playSmack(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playSmack());return}if(this.smackBuffer){const t=this.audioCtx.createBufferSource();t.buffer=this.smackBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}}catch(t){console.warn("playSmack error:",t)}}equipBackpack(t=2899536){const e=this.backpackColor;this.backpack&&this.backpack.parent&&this.backpack.parent.remove(this.backpack);const i=new Xt;i.position.set(0,1.25,-.32);const n=new z(new it(.7,.9,.35),new Q({color:t,metalness:.15,roughness:.8}));n.position.set(0,0,0),i.add(n);const s=new z(new it(.6,.25,.16),new Q({color:3426654,metalness:.1,roughness:.8}));s.position.set(0,-.55,.22),i.add(s);const o=new Q({color:2042938,metalness:.1,roughness:.9}),a=new z(new it(.1,.82,.07),o);a.position.set(-.28,-.03,.2);const l=a.clone();return l.position.x=.28,i.add(a,l),this.mesh.add(i),this.backpack=i,this.backpackColor=t,e}queueHurtBeat(){if(this._hurtAccumulator+=1,this._hurtAccumulator>=2){const t=Math.floor(this._hurtAccumulator/2);this._hurtQueue+=t,this._hurtAccumulator-=t*2}this._hurtQueue===0&&this._hurtAccumulator>0&&(this._hurtQueue=1,this._hurtAccumulator=0),this._hurtBeatTimer||this._playHurtBeatLoop()}_playHurtBeatLoop(){if(this._hurtQueue<=0){this._hurtBeatTimer=null;return}this.playHurt(),this._hurtQueue=Math.max(0,this._hurtQueue-1),this._hurtBeatTimer=setTimeout(()=>this._playHurtBeatLoop(),2e3)}clearHurtQueue(){this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer&&(clearTimeout(this._hurtBeatTimer),this._hurtBeatTimer=null)}playHurt(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playHurt());return}if(this.ughBuffer){const t=this.audioCtx.createBufferSource();t.buffer=this.ughBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}}catch(t){console.warn("playHurt error:",t)}}playVehicleDoor(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playVehicleDoor());return}if(this.vehicleDoorBuffer){const t=this.audioCtx.createBufferSource();t.buffer=this.vehicleDoorBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}}catch(t){console.warn("playVehicleDoor error:",t)}}handleVehicleDriveSound(t){try{if(!this.audioCtx||!this.enableVehicleDriveSound){this.stopVehicleDriveSound();return}if(!this.vehicleDriveBuffer){this.stopVehicleDriveSound();return}if(t===this._lastVehicleDriveActive&&(t&&this._vehicleDriveSource||!t&&!this._vehicleDriveSource))return;if(this._lastVehicleDriveActive=t,t){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._vehicleDriveSource)return;const e=this.audioCtx.createBufferSource();e.buffer=this.vehicleDriveBuffer,e.loop=!0;const i=this.audioCtx.createGain();i.gain.value=this.sfxVolume*.4,e.connect(i),i.connect(this.audioCtx.destination),e.start(0),this._vehicleDriveSource=e,this._vehicleDriveGain=i,e.onended=()=>{this._vehicleDriveSource=null,this._vehicleDriveGain=null}}else this.stopVehicleDriveSound()}catch(e){console.warn("handleVehicleDriveSound error:",e)}}stopVehicleDriveSound(){if(this._lastVehicleDriveActive=!1,this._vehicleDriveSource){try{this._vehicleDriveSource.stop()}catch{}try{this._vehicleDriveSource.disconnect()}catch{}}if(this._vehicleDriveGain)try{this._vehicleDriveGain.disconnect()}catch{}this._vehicleDriveSource=null,this._vehicleDriveGain=null}handleFootsteps(t){try{if(this.isInVehicle){this.stopFootsteps();return}if(!this.audioCtx||!this.footstepsBuffer){this.stopFootsteps();return}if(t===this._lastFootstepsActive&&(t&&this._footstepsSource||!t&&!this._footstepsSource)){if(t&&this._footstepsSource){const e=this.isSprinting?1.4:this.isCrouching?.8:1;this._footstepsSource.playbackRate.value=e}return}if(this._lastFootstepsActive=t,t){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._footstepsSource){try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}const e=this.audioCtx.createBufferSource();e.buffer=this.footstepsBuffer,e.loop=!0,e.playbackRate.value=this.isSprinting?1.4:this.isCrouching?.8:1;const i=this.audioCtx.createGain();i.gain.value=this.sfxVolume*.35,e.connect(i),i.connect(this.audioCtx.destination),e.start(0),this._footstepsSource=e,this._footstepsGain=i,e.onended=()=>{this._footstepsSource=null,this._footstepsGain=null}}else this.stopFootsteps()}catch(e){console.warn("handleFootsteps error:",e)}}stopFootsteps(){if(this._lastFootstepsActive=!1,this._footstepsSource){try{this._footstepsSource.onended=null}catch{}try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}get position(){return this.mesh.position}getSurfaceHeight(t,e){let i=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(t,e):0;return(this.world&&this.world.objects?this.world.objects:[]).forEach(s=>{if(!(!s||!s.userData)){if(s.userData.type==="block"){const o=s.userData.size||this.blockSize;if(Math.abs(s.position.x-t)<o*.6&&Math.abs(s.position.z-e)<o*.6){const a=s.position.y+o/2;a>i&&(i=a)}}if(s.userData.colliderBox){const o=s.userData.colliderBox;t>=o.min.x&&t<=o.max.x&&e>=o.min.z&&e<=o.max.z&&o.max.y>i&&(i=o.max.y)}}}),i}adjustBlockSize(t){const e=Math.max(this.minBlockSize,Math.min(this.maxBlockSize,this.blockSize+t));this.blockSize=e,console.log("Block size:",this.blockSize.toFixed(2))}moveLastBlock(){if(!this.placedBlocks.length)return;const t=this.placedBlocks[this.placedBlocks.length-1];if(!t)return;const e=this.getBlockTarget(t);t.position.set(e.position.x,e.position.y,e.position.z)}getBlockTarget(t=null){const e=t&&t.userData&&t.userData.size?t.userData.size:this.blockSize,i=new Ke;i.setFromCamera(new St(0,0),this.camera);const n=u=>Math.round(u);let s=null;if(this.world&&Array.isArray(this.world.objects)){const u=this.world.objects.filter(p=>p&&p.userData&&(p.userData.type==="block"||p.userData.gameName==="Ground")),d=i.intersectObjects(u,!0);d.length>0&&(s=d[0].point.clone())}if(!s){const u=new R;this.camera.getWorldDirection(u),s=this.mesh.position.clone().add(u.multiplyScalar(1.2))}const o=new R(n(s.x),s.y,n(s.z));if(this.world&&typeof this.world.halfMapSize=="number"){const u=this.world.halfMapSize-1;o.x=Math.max(-u,Math.min(u,o.x)),o.z=Math.max(-u,Math.min(u,o.z))}let a=this.world.getHeightAt?this.world.getHeightAt(o.x,o.z):s.y;const c=(this.world.objects||[]).filter(u=>u.userData&&u.userData.type==="block"&&u!==t).filter(u=>Math.abs(u.position.x-o.x)<.1&&Math.abs(u.position.z-o.z)<.1);c.length>0&&(a=Math.max(...c.map(d=>d.position.y+(d.userData&&d.userData.size?d.userData.size/2:e/2))));const h=a+e/2;return{position:new R(o.x,h,o.z),size:e}}updateBlockPreview(){if(!this.previewBlock)return;const t=this.getBlockTarget();this.previewBlock.visible=!0,this.previewBlock.position.copy(t.position);const e=t.size/this.blockSize;this.previewBlock.scale.set(e,e,e)}removeLastBlock(){if(!this.placedBlocks.length)return;const t=this.placedBlocks.pop();t&&t.parent&&t.parent.remove(t),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(e=>e!==t)),t&&t.geometry&&t.geometry.dispose(),t&&t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()),this.selectedBlock===t&&this.clearBlockSelection()}selectBlockUnderCrosshair(){if(!this.world||!this.world.objects)return!1;const t=new Ke;t.setFromCamera(new St(0,0),this.camera);const e=t.intersectObjects(this.world.objects,!0);if(e.length===0)return this.clearBlockSelection(),!1;let i=null;for(const n of e){let s=n.object;for(;s&&s.parent;){if(s.userData&&s.userData.type==="block"){i=s;break}s=s.parent}if(i)break}return i?(this.setBlockSelection(i),!0):(this.clearBlockSelection(),!1)}setBlockSelection(t){this.clearBlockSelection(),this.selectedBlock=t;const e=new Dp(t,16776960);e.userData={ignoreSelect:!0},this.scene.add(e),this.selectedBlockHelper=e}clearBlockSelection(){this.selectedBlock=null,this.selectedBlockHelper&&(this.scene.remove(this.selectedBlockHelper),this.selectedBlockHelper.material&&this.selectedBlockHelper.material.dispose(),this.selectedBlockHelper.geometry&&this.selectedBlockHelper.geometry.dispose(),this.selectedBlockHelper=null)}removeBlock(t){t&&(this.placedBlocks=this.placedBlocks.filter(e=>e!==t),t.parent&&t.parent.remove(t),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(e=>e!==t)),t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()),this.selectedBlock===t&&this.clearBlockSelection())}takeDamage(t){this.gameMode==="matrix"||this.gameMode==="studio"||this.multiplayerClient&&!this.multiplayerClient.isMatchLive()||(this.isBlocking&&(t*=.2,console.log("Blocked! Reduced damage to "+t)),this.shield>0?(this.shield-=t,this.shield<0&&(this.health+=this.shield,this.shield=0)):this.health-=t,t>0&&this.queueHurtBeat(),this.health<=0&&(this.health=0,this.die()),this.hitTimer=.6)}die(){this.gameMode==="matrix"||this.gameMode==="studio"||(this.handleFootsteps(!1),this.isDead=!0,this.controls.unlock(),this.mesh.rotation.x=-Math.PI/2,this.multiplayerClient&&typeof this.multiplayerClient.sendDeath=="function"&&this.multiplayerClient.sendDeath(),this.moveForward=this.moveBackward=this.moveLeft=this.moveRight=!1,this.velocity.set(0,0,0),this.hud&&typeof this.hud.showGameOver=="function"&&this.hud.showGameOver("YOU DIED"))}checkCollision(t,e){const i=new Ke,n=.5,s=[1.6,1,.35];let o=this.worldObjects||[];if(this.enemyManager&&this.enemyManager.enemies){const c=this.enemyManager.enemies.map(h=>h.mesh);o=o.concat(c)}const a=1.5,l=c=>{let h=c;for(;h;){if(h.userData&&h.userData.colliderBox)return h.userData.colliderBox;h=h.parent}return null};for(const c of s){const h=this.mesh.position.clone();if(h.y+=c,i.set(h,t),o.length>0){const u=i.intersectObjects(o,!0);if(u.length>0){const d=u[0];if(d.distance<e+n){const p=l(d.object);if(p){const g=p.max.y,_=g-this.mesh.position.y;if(_<=a&&_>-.5)return this.mesh.position.y=g,this.velocity.y=0,this.canJump=!0,!1}return!0}}}}return!1}}const Jp="/threejs-voxel-firecraft/dist/assets/mixkit-player-losing-or-failing-vCPqUTFf.ogg",Qp="/threejs-voxel-firecraft/dist/assets/game-level-completed-envato-mixkit.co-OEgWp6-U.ogg";class tm{constructor(t,e,i){this.player=t,this.world=e,this.settings=i||{},this.healthBar=document.getElementById("health-bar"),this.healthText=document.getElementById("health-text"),this.shieldBar=document.getElementById("shield-bar"),this.shieldText=document.getElementById("shield-text"),this.staminaBar=document.getElementById("stamina-bar"),this.staminaText=document.getElementById("stamina-text"),this.weaponName=document.getElementById("weapon-name"),this.ammoCount=document.getElementById("ammo-count"),this.slots=document.querySelectorAll(".slot"),this.timerValue=document.getElementById("timer-value"),this.debugContainer=document.getElementById("debug-container"),this.gameOverScreen=document.getElementById("game-over-screen"),this.selectionInfo=document.getElementById("selection-info"),this.selectionInfoTimeout=null,this.fpsCounter=document.getElementById("fps-counter"),this.enemyCount=document.getElementById("enemy-count"),this.killCount=document.getElementById("kill-count"),this.dropCount=document.getElementById("drop-count"),this.distanceTraveled=document.getElementById("distance-traveled"),this.playerSpeed=document.getElementById("player-speed"),this.mapSizeText=document.getElementById("map-size-readout"),this.memoryUsage=document.getElementById("memory-usage"),this.targetInspect=document.getElementById("target-inspect"),this.perfFrame=document.getElementById("perf-frame"),this.perfCalls=document.getElementById("perf-calls"),this.perfTris=document.getElementById("perf-tris"),this.perfGeoms=document.getElementById("perf-geoms"),this.perfTextures=document.getElementById("perf-textures"),this.perfPrograms=document.getElementById("perf-programs"),this.perfObjects=document.getElementById("perf-objects"),this.perfMem=document.getElementById("perf-mem"),this.perfCpu=document.getElementById("perf-cpu"),this.perfGpu=document.getElementById("perf-gpu"),this.netStatsText=document.getElementById("net-stats"),this.netChart=document.getElementById("net-chart"),this.netChartCtx=this.netChart?this.netChart.getContext("2d"):null,this._renderer=null,this.frameTimeAvg=0,this.gpuInfo=null,this.debugInfo=document.getElementById("debug-info"),this.debugName=document.getElementById("debug-target-name"),this.debugId=document.getElementById("debug-target-id"),this.settings.debugMode?this.debugInfo.style.display="block":this.debugInfo.style.display="none",this.timeRemaining=30,this.lastTime=performance.now(),this.frames=0,this.fps=0,this.lastFpsTime=performance.now(),this.lastFrameTime=performance.now(),this.raycaster=new Ke,this.mouse=new St,this.hoveredEnemy=null,this.hoveredPlayer=null,this.currentOutlinedEnemy=null,this.hoverInfo=document.getElementById("hover-info"),this.scopeOverlay=document.getElementById("scope-overlay"),this.minimapContainer=document.getElementById("minimap"),this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas?this.minimapCanvas.getContext("2d"):null,this.minimapSize=this.minimapCanvas?this.minimapCanvas.width:180,this.mapSize=e&&e.mapSize?e.mapSize:200,this.multiplayer=null,window.addEventListener("mousemove",n=>{const s=n.clientX/window.innerWidth*2-1,o=-(n.clientY/window.innerHeight)*2+1;if(this.mouse.set(s,o),this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const a=[];this.player.enemyManager.enemies.forEach(c=>{c.mesh.traverse(h=>{h.isMesh&&a.push(h)})}),this.raycaster.setFromCamera(this.mouse,this.player.camera);const l=this.raycaster.intersectObjects(a,!0);if(l.length>0){const c=l[0].object;let h=c,u=null;for(;h&&(u=this.player.enemyManager.enemies.find(d=>h.parent===d.mesh||h===d.mesh||d.mesh.children.includes(h)),!u);)h=h.parent;this.hoveredEnemy=u||c||null}else this.hoveredEnemy=null}});try{this.slots.forEach((n,s)=>{const o=a=>{try{a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),this.player&&typeof this.player.switchWeapon=="function"&&this.player.switchWeapon(s)}catch{}};n.addEventListener("pointerdown",o),n.addEventListener("touchstart",o,{passive:!1}),n.addEventListener("click",o)})}catch{}}update(){var l,c;if(this.hoveredEnemy=null,this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0&&this.currentOutlinedEnemy!==this.hoveredEnemy){if(this.currentOutlinedEnemy&&this.currentOutlinedEnemy._outline){try{this.currentOutlinedEnemy.mesh.remove(this.currentOutlinedEnemy._outline)}catch{}this.currentOutlinedEnemy._outline=null}if(this.hoveredEnemy&&this.hoveredEnemy.mesh){const h=new Xt;this.hoveredEnemy.mesh.traverse(u=>{if(u.isMesh){const d=new z(u.geometry,new _i({color:16776960,side:Re}));d.position.copy(u.position),d.quaternion.copy(u.quaternion),d.scale.copy(u.scale).multiplyScalar(1.06),d.renderOrder=999,d.material.depthTest=!0,h.add(d)}}),this.hoveredEnemy.mesh.add(h),this.hoveredEnemy._outline=h}this.currentOutlinedEnemy=this.hoveredEnemy}this.frames++;const t=performance.now();t-this.lastFpsTime>=1e3&&(this.fpsCounter.innerText=this.frames,this.frames=0,this.lastFpsTime=t,performance.memory&&this.memoryUsage&&(this.memoryUsage.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)));const e=t-this.lastFrameTime;if(this.lastFrameTime=t,this.frameTimeAvg=this.frameTimeAvg===0?e:this.frameTimeAvg*.9+e*.1,this.player.enemyManager&&(this.enemyCount.innerText=this.player.enemyManager.enemies.length,this.killCount.innerText=this.player.enemyManager.killedCount||0),this.dropCount){const h=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;if(h&&Array.isArray(h.items)){const u=h.items.filter(d=>!(d.userData&&d.userData.isOpened)).length;this.dropCount.innerText=u}else this.dropCount.innerText="0"}const i=(this.player.distanceTraveled/1e3).toFixed(2);if(this.distanceTraveled&&(this.distanceTraveled.innerText=i),this.playerSpeed){let h=0;this.player.isInVehicle&&typeof this.player.currentSpeed=="number"?h=this.player.currentSpeed*3.6:typeof this.player.currentSpeed=="number"&&(h=this.player.currentSpeed*3.6),this.playerSpeed.innerText=h.toFixed(1)}if(this.mapSizeText){const h=this.world&&this.world.mapSize?this.world.mapSize:this.mapSize;this.mapSizeText.innerText=Math.round(h)}if(this._renderer){const h=this._renderer.info;this.perfFrame&&(this.perfFrame.innerText=e.toFixed(1)),this.perfCalls&&(this.perfCalls.innerText=h.render.calls),this.perfTris&&(this.perfTris.innerText=h.render.triangles),this.perfGeoms&&(this.perfGeoms.innerText=h.memory.geometries),this.perfTextures&&(this.perfTextures.innerText=h.memory.textures),this.perfPrograms&&(this.perfPrograms.innerText=h.programs?h.programs.length:"0");let u=0;this.world&&Array.isArray(this.world.objects)&&(u+=this.world.objects.length);const d=typeof window<"u"&&window.game&&window.game.itemManager?window.game.itemManager:null;d&&Array.isArray(d.items)&&(u+=d.items.length),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&(u+=this.player.enemyManager.enemies.length),this.perfObjects&&(this.perfObjects.innerText=u),this.perfMem&&performance.memory&&(this.perfMem.innerText=Math.round(performance.memory.usedJSHeapSize/1048576)),this.perfCpu&&(this.perfCpu.innerText=`${this.frameTimeAvg.toFixed(1)} ms`),this.perfGpu&&(this.perfGpu.innerText=this.gpuInfo||"Unsupported")}this.updateNetPanel(),this.healthBar.style.width=`${this.player.health}%`,this.healthText.innerText=Math.ceil(this.player.health),this.shieldBar.style.width=`${this.player.shield}%`,this.shieldText.innerText=Math.ceil(this.player.shield),this.staminaBar.style.width=`${this.player.stamina}%`,this.staminaText.innerText=Math.ceil(this.player.stamina);const n=this.player.weapons[this.player.currentWeaponIndex];if(this.weaponName.innerText=n.name,this.player.isReloading?this.ammoCount.innerText="RELOADING...":this.ammoCount.innerText=n.ammo===1/0?"∞":`${n.currentMag} / ${n.ammo}`,this.debugContainer&&(this.debugContainer.innerHTML=""),this.debugInfo)if(this.settings.debugMode)if(this.debugInfo.style.display="block",this.hoveredEnemy){const h=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,u=h&&h.userData&&h.userData.gameName?h.userData.gameName:"Enemy",d=h&&h.userData&&(h.userData.gameId||h.userData.gameid)?h.userData.gameId||h.userData.gameid:"---",p=this.hoveredEnemy.position?this.hoveredEnemy.position:h?h.position:null,g=p?this.player.position.distanceTo(p).toFixed(2):"---";this.debugName.innerText=u,this.debugId.innerText=`${d} (${g}m)`}else this.debugName.innerText="None",this.debugId.innerText="---";else this.debugInfo.style.display="none";let s=null;if(this.hoveredPlayer=null,!this.hoveredEnemy&&this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const h=[];if(this.player.enemyManager.enemies.forEach(u=>{u.mesh.traverse(d=>{d.isMesh&&h.push(d)})}),h.length>0){this.raycaster.setFromCamera(new St(0,0),this.player.camera);const u=this.raycaster.intersectObjects(h,!0);if(u.length>0){let p=u[0].object,g=null;for(;p&&(g=this.player.enemyManager.enemies.find(_=>p.parent===_.mesh||p===_.mesh||_.mesh.children.includes(p)),!g);)p=p.parent;g?this.hoveredEnemy=g:this.hoveredEnemy=null}else this.hoveredEnemy=null}}if(!this.hoveredEnemy&&this.multiplayer&&this.multiplayer.others&&this.multiplayer.others.size>0){const h=[];if(this.multiplayer.others.forEach(u=>{u&&(u.isMesh?h.push(u):u.traverse&&u.traverse(d=>{d.isMesh&&h.push(d)}))}),h.length>0){this.raycaster.setFromCamera(new St(0,0),this.player.camera);const u=this.raycaster.intersectObjects(h,!0);if(u.length>0){let d=u[0].object;for(;d.parent&&!((l=d.userData)!=null&&l.nick)&&!this.multiplayer.others.has((c=d.userData)==null?void 0:c.gameId);)d=d.parent;this.hoveredPlayer=d}}}if(this.hoverInfo)if(this.hoveredEnemy){const h=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,u=h&&h.userData&&(h.userData.gameId||h.userData.gameid)?h.userData.gameId||h.userData.gameid:"---",d=this.hoveredEnemy.position?this.hoveredEnemy.position:h?h.position:null;s=d?this.player.position.distanceTo(d):null;const p=s?s.toFixed(2):"---";this.hoverInfo.innerText=`${u} • ${p}m`}else if(this.hoveredPlayer){const h=this.hoveredPlayer.userData&&this.hoveredPlayer.userData.nick?this.hoveredPlayer.userData.nick:"Player";let u=null;this.hoveredPlayer.getWorldPosition?(u=new R,this.hoveredPlayer.getWorldPosition(u)):u=this.hoveredPlayer.position||null,s=u?this.player.position.distanceTo(u):null;const d=s?s.toFixed(2):"---";this.hoverInfo.innerText=`${h} • ${d}m`}else this.hoverInfo.innerText="";if(this.scopeOverlay){const h=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],u=this.player.isAiming&&h&&h.name==="Sniper";this.scopeOverlay.classList.toggle("hidden",!u);const d=document.getElementById("crosshair");d&&d.classList.toggle("hidden",u)}const o=document.getElementById("crosshair");if(o){o.classList.remove("target-red","target-yellow");const h=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],u=h&&h.range?h.range:1e3;this.hoveredEnemy&&s!==null&&(s<=u?o.classList.add("target-red"):o.classList.add("target-yellow"))}this.updateMinimap(),this.slots.forEach(h=>h.style.display="none"),this.player.weapons.forEach((h,u)=>{let d=this.slots[u];d&&(d.style.display="flex",d.innerText=u+1,u===this.player.currentWeaponIndex?d.classList.add("active"):d.classList.remove("active"))});const a=performance.now();if(a-this.lastTime>1e3){this.timeRemaining--,this.timeRemaining<0&&(this.timeRemaining=0);const h=Math.floor(this.timeRemaining/60).toString().padStart(2,"0"),u=(this.timeRemaining%60).toString().padStart(2,"0");this.timerValue.innerText=`${h}:${u}`,this.lastTime=a}this.player.isDead&&this.player.gameMode!=="matrix"&&this.showGameOver("YOU DIED"),this.updateTargetInspect()}showSelectionInfo(t,e){if(!this.selectionInfo)return;const i=t||"Object",n=e||"---";this.selectionInfo.innerText=`${i} (${n})`,this.selectionInfo.classList.remove("hidden"),this.selectionInfoTimeout&&clearTimeout(this.selectionInfoTimeout),this.selectionInfoTimeout=setTimeout(()=>{try{this.selectionInfo.classList.add("hidden")}catch{}},2500)}updateTargetInspect(){if(!this.targetInspect||!this.player||!this.player.camera)return;const t=this.raycaster,e=new St(0,0);t.setFromCamera(e,this.player.camera);const i=[];if(this.world&&Array.isArray(this.world.objects)&&i.push(...this.world.objects),this.world&&this.world.itemManager&&Array.isArray(this.world.itemManager.items)&&i.push(...this.world.itemManager.items),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&this.player.enemyManager.enemies.forEach(h=>{h&&h.mesh&&i.push(h.mesh)}),i.length===0){this.targetInspect.innerText="Target: ---";return}const n=Array.from(new Set(i)),s=t.intersectObjects(n,!0);if(!s.length){this.targetInspect.innerText="Target: ---";return}let o=null;for(let h=0;h<s.length;h++){let u=s[h].object;for(;u;){if(u.userData&&(u.userData.gameName||u.userData.type||u.userData.gameId||u.userData.gameid)){o=u.userData;break}u=u.parent}if(o)break}if(!o){this.targetInspect.innerText="Target: ---";return}const a=o.gameName||"Object",l=o.gameId||o.gameid||"---",c=o.type||"---";this.targetInspect.innerText=`Target: ${a} (ID: ${l}) [${c}]`}showGameOver(t){if(this.player&&this.player.gameMode==="matrix"||this.gameOverShown)return;this.gameOverShown=!0,this.gameOverScreen.classList.remove("hidden"),document.getElementById("game-over-title").innerText=t;try{const i=document.getElementById("touch-controls");i&&(i.style.display="none")}catch{}const e=document.getElementById("restart-btn");e.onclick=()=>{location.reload()},e.style.pointerEvents="auto",e.style.cursor="pointer";try{typeof window<"u"&&window.game&&t&&t.toUpperCase().includes("DIED")&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(Jp)}catch{}}showVictory(){if(!(this.player&&this.player.gameMode==="matrix")){this.gameOverShown=!1,this.showGameOver("VICTORY ROYALE!"),document.getElementById("game-over-title").style.color="#f1c40f";try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}try{const t=document.getElementById("touch-controls");t&&(t.style.display="none")}catch{}try{typeof window<"u"&&window.game&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(Qp)}catch{}}}updateMinimap(){if(!this.minimapContainer)return;const t=this.settings.showMinimap!==!1;if(this.minimapContainer.classList.toggle("hidden",!t),!t||!this.minimapCtx||!this.player)return;const e=this.minimapCtx,i=this.minimapSize;e.clearRect(0,0,i,i),e.fillStyle="rgba(10, 12, 20, 0.75)",e.fillRect(0,0,i,i),e.strokeStyle="rgba(255, 255, 255, 0.25)",e.lineWidth=2,e.strokeRect(1,1,i-2,i-2);const n=Math.max(1,this.world&&this.world.halfMapSize?this.world.halfMapSize:this.mapSize/2),s=i*.45,o=i/2,a=i/2;if(this.world&&typeof this.world.stormRadius=="number"&&this.world.stormRadius>0){const d=Math.max(0,Math.min(1.2,this.world.stormRadius/n)),p=s*d;e.beginPath(),e.strokeStyle="rgba(157, 77, 187, 0.85)",e.lineWidth=3,e.arc(o,a,p,0,Math.PI*2),e.stroke()}const l=this.player&&this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)?this.player.enemyManager.enemies:[];l.length&&(e.fillStyle="#ff3b30",e.strokeStyle="#660000",e.lineWidth=1.5,l.forEach(d=>{if(!d)return;const p=d.position||d.mesh&&d.mesh.position;if(!p)return;const g=Math.max(o-s,Math.min(o+s,o+p.x/n*s)),_=Math.max(a-s,Math.min(a+s,a-p.z/n*s));e.beginPath(),e.arc(g,_,4,0,Math.PI*2),e.fill(),e.stroke()}));const c=this.world&&Array.isArray(this.world.objects)?this.world.objects.filter(d=>d&&d.userData&&d.userData.type==="house"):[];c.length&&(e.fillStyle="#ffd166",e.strokeStyle="#8c5a00",e.lineWidth=1,c.forEach(d=>{const p=d.position;if(!p)return;const g=Math.max(o-s,Math.min(o+s,o+p.x/n*s)),_=Math.max(a-s,Math.min(a+s,a-p.z/n*s));e.beginPath(),e.arc(g,_,3,0,Math.PI*2),e.fill(),e.stroke()}));const h=Math.max(o-s,Math.min(o+s,o+this.player.position.x/n*s)),u=Math.max(a-s,Math.min(a+s,a-this.player.position.z/n*s));e.beginPath(),e.fillStyle="#00d8ff",e.strokeStyle="#ffffff",e.lineWidth=2,e.arc(h,u,6,0,Math.PI*2),e.fill(),e.stroke(),this.multiplayer&&this.multiplayer.others&&this.multiplayer.others.size>0&&this.multiplayer.others.forEach(d=>{if(!d||!d.position)return;const p=Math.max(o-s,Math.min(o+s,o+d.position.x/n*s)),g=Math.max(a-s,Math.min(a+s,a-d.position.z/n*s)),_=d.userData&&d.userData.color?d.userData.color:"#ffaa00";e.beginPath(),e.fillStyle=_,e.strokeStyle="#111",e.lineWidth=2,e.arc(p,g,5,0,Math.PI*2),e.fill(),e.stroke()});try{const d=new R;if(this.player&&this.player.camera&&this.player.camera.getWorldDirection&&this.player.camera.getWorldDirection(d),d.y=0,d.lengthSq()<1e-4&&this.player.mesh&&(d.set(0,0,-1).applyEuler(this.player.mesh.rotation),d.y=0),d.lengthSq()>1e-4){d.normalize();const p=d.x,g=-d.z,_=Math.atan2(g,p)+Math.PI/2;e.save(),e.translate(h,u),e.rotate(_),e.beginPath(),e.moveTo(0,-10),e.lineTo(6,8),e.lineTo(-6,8),e.closePath(),e.fillStyle="#00d8ff",e.strokeStyle="#003f4f",e.lineWidth=2,e.fill(),e.stroke(),e.restore()}}catch{}}updateNetPanel(){if(!this.netStatsText&&!this.netChartCtx)return;const t=this.multiplayer&&typeof this.multiplayer.getNetStats=="function"?this.multiplayer.getNetStats():null;if(!t){this.netStatsText&&(this.netStatsText.innerText="offline"),this.netChartCtx&&this.netChartCtx.clearRect(0,0,this.netChart.width,this.netChart.height);return}const e=(t.txPerSec||0)/1024,i=(t.rxPerSec||0)/1024,n=typeof t.lastPing=="number"?`${Math.max(0,t.lastPing).toFixed(0)} ms`:"--";if(this.netStatsText&&(this.netStatsText.innerText=`↑ ${e.toFixed(1)} kbps ↓ ${i.toFixed(1)} kbps • ping ${n}`),!this.netChartCtx||!this.netChart)return;const s=this.netChartCtx,o=this.netChart.width,a=this.netChart.height,l=Array.isArray(t.history)?t.history:[];if(s.clearRect(0,0,o,a),!l.length)return;const c=l.reduce((_,m)=>Math.max(_,Math.max(m.tx||0,m.rx||0)/1024),1),h=2,u=l.length,d=_=>u<=1?h:h+_/(u-1)*(o-h*2),p=_=>{const m=Math.max(0,Math.min(1,_/1024/c));return a-h-m*(a-h*2)};s.strokeStyle="rgba(255,255,255,0.12)",s.beginPath(),s.moveTo(h,a-h),s.lineTo(o-h,a-h),s.stroke();const g=(_,m)=>{s.strokeStyle=_,s.beginPath(),l.forEach((f,x)=>{const v=d(x),S=p(m(f)||0);x===0?s.moveTo(v,S):s.lineTo(v,S)}),s.stroke()};g("rgba(0, 210, 255, 0.85)",_=>_.rx||0),g("rgba(255, 150, 50, 0.85)",_=>_.tx||0)}initGpuInfo(){if(!(!this._renderer||this.gpuInfo))try{const t=this._renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);this.gpuInfo=i||"Unknown GPU"}catch{this.gpuInfo="Unknown GPU"}}setRenderer(t){this._renderer=t,this.initGpuInfo()}setMultiplayer(t){this.multiplayer=t}}const em="/threejs-voxel-firecraft/dist/assets/mixkit-kill-blood-zombie-By90BKfb.ogg",im="/threejs-voxel-firecraft/dist/assets/zombie-B8PCKsyJ.ogg";class nm{constructor(t,e,i,n){this.scene=t,this.player=e,this.world=i,this.enemies=[],this.spawnInterval=5e3,this.lastSpawn=0,this.killedCount=0,this.groanBuffer=null;const s=n&&(n.gameMode==="matrix"||n.gameMode==="studio")?0:n&&n.gameMode==="matrix-ai"?5:n?n.enemyCount:15;this.targetCount=s,this.difficulty=n?n.difficulty:"medium",this.gameMode=n&&n.gameMode?n.gameMode:"survival",this.studioAiEnabled=!1;for(let o=0;o<s;o++)this.spawnEnemy();this.deathBuffer=null;try{const o=window.AudioContext||window.webkitAudioContext;o&&(this.audioCtx=new o,fetch(em).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.deathBuffer=a,this.enemies.forEach(l=>{l.audioCtx=this.audioCtx,l.deathBuffer=a})}).catch(a=>{}),fetch(im).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.groanBuffer=a,this.enemies.forEach(l=>{l.audioCtx=this.audioCtx,l.groanBuffer=a})}).catch(a=>{}))}catch{}}spawnEnemy(t=!1){if(!t&&(this.gameMode==="matrix"||this.gameMode==="studio"))return;const e=this.world&&this.world.halfMapSize?this.world.halfMapSize:100;let i=(Math.random()-.5)*e,n=(Math.random()-.5)*e;if(this.gameMode==="matrix-ai"&&this.player){const l=(this.world&&this.world.halfMapSize?this.world.halfMapSize:100)*.6;let c=0;for(;c<10;){const h=this.player.position.x,u=this.player.position.z,d=i-h,p=n-u;if(Math.sqrt(d*d+p*p)>=l)break;i=(Math.random()-.5)*e,n=(Math.random()-.5)*e,c++}}const s=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(i,n):0,o=this.world&&this.world.halfMapSize?this.world.halfMapSize:100,a=new sm(this.scene,i,s,n,this.difficulty,o,this.player);a.audioCtx=this.audioCtx,a.deathBuffer=this.deathBuffer,a.groanBuffer=this.groanBuffer,a.world=this.world,this.enemies.push(a),t&&this.gameMode==="studio"&&(this.studioAiEnabled=!0)}setTargetCount(t){typeof t=="number"&&t>=0&&(this.targetCount=t)}update(t){if(this.gameMode!=="matrix"&&!(this.gameMode==="studio"&&!this.studioAiEnabled)&&(this.enemies.forEach(e=>{if(e.update(t,this.player),Math.sqrt(e.position.x*e.position.x+e.position.z*e.position.z)>this.world.stormRadius&&e.takeDamage(5*t),this.world&&typeof this.world.halfMapSize=="number"){const n=this.world.halfMapSize-1;e.position.x=Math.max(-n,Math.min(n,e.position.x)),e.position.z=Math.max(-n,Math.min(n,e.position.z))}}),this.enemies=this.enemies.filter(e=>e.readyToDespawn?(this.killedCount++,!1):!0),this.gameMode!=="multiplayer"&&this.targetCount!==void 0&&this.targetCount>0)){const e=this.targetCount-this.enemies.length;if(e>0)for(let i=0;i<e;i++)this.spawnEnemy()}}}class sm{constructor(t,e,i,n,s,o=100,a=null){this.scene=t,this.position=new R(e,i,n),this.mapHalfSize=o,this.world=null,this.player=a,this.deathTimer=0,this.deathDuration=0,this.deathFallProgress=0,this.readyToDespawn=!1,this.groanBuffer=null,this.groanCooldown=0,this.groanRange=15,this._groanSource=null,this._groanGain=null,s==="easy"?(this.health=50,this.damage=2,this.speed=3):s==="hard"?(this.health=150,this.damage=10,this.speed=6):(this.health=100,this.damage=5,this.speed=4.5),this.state="wander",this.isDead=!1,this.attackRange=2,this.detectionRange=25,this.attackCooldown=1.5,this.lastAttack=0,this.wanderTarget=null,this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4,this.createMesh()}createMesh(){this.mesh=new Xt,this.mesh.position.copy(this.position),this.mesh.userData={gameId:Math.random().toString(36).substr(2,9).toUpperCase(),gameName:"Zombie"},this.scene.add(this.mesh);const t=new Q({color:9323693}),e=new Q({color:2899536}),i=new z(new it(.5,.5,.5),t);i.position.y=1.75,this.mesh.add(i);const n=new Q({color:16717636,emissive:16717636,emissiveIntensity:.8,roughness:.2}),s=new it(.12,.08,.02),o=new z(s,n);o.position.set(-.12,.05,.26);const a=o.clone();a.position.x=.12,i.add(o),i.add(a);const l=new Q({color:855309,emissive:3342336,emissiveIntensity:.4}),c=new z(new it(.24,.08,.04),l);c.position.set(0,-.14,.25),i.add(c);const h=new Q({color:15921906,roughness:.3}),u=new it(.05,.06,.02);for(let _=-1;_<=1;_+=2){const m=new z(u,h);m.position.set(_*.06,-.05,.04),c.add(m)}const d=new z(new it(.6,.8,.3),e);d.position.y=1.1,this.mesh.add(d);const p=new it(.2,.8,.2);p.translate(0,-.3,0),this.leftArmPivot=new Xt,this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot),this.leftArmPivot.add(new z(p,t)),this.rightArmPivot=new Xt,this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot),this.rightArmPivot.add(new z(p,t));const g=new it(.25,.8,.25);g.translate(0,-.4,0),this.leftLegPivot=new Xt,this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot),this.leftLegPivot.add(new z(g,e)),this.rightLegPivot=new Xt,this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot),this.rightLegPivot.add(new z(g,e)),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.attackAnimTime=0,this.attackAnimDuration=.5,this.createHealthBar()}createHealthBar(){const t=new Ue(1,.1),e=new _i({color:0});this.healthBarBg=new z(t,e),this.healthBarBg.position.y=2.3,this.mesh.add(this.healthBarBg);const i=new Ue(1,.1),n=new _i({color:16711680});this.healthBarFg=new z(i,n),this.healthBarFg.position.y=2.3,this.healthBarFg.position.z=.01,this.mesh.add(this.healthBarFg)}update(t,e){if(this.isDead){this.updateDeath(t);return}this.groanCooldown=Math.max(0,this.groanCooldown-t),this.groanBuffer&&this.audioCtx&&e&&this.groanCooldown<=0&&this.position.distanceTo(e.position)<=this.groanRange&&(this.playGroan(),this.groanCooldown=2+Math.random()*2.5);const i=e.position;this.healthBarBg.lookAt(i),this.healthBarFg.lookAt(i);const n=this.position.distanceTo(i);n<this.detectionRange?this.state="chase":this.state="wander";let s=!1;if(this.state==="chase"){const o=this.hasLineOfSight(e,i);if(n<this.detectionRange&&o){const a=new R().subVectors(i,this.position).normalize();if(a.y=0,n>2){const c=a.clone(),h=Math.sin(performance.now()/500+this.position.x)*.5,u=new R(a.z,0,-a.x).multiplyScalar(h);c.add(u).normalize();const d=this.position.clone().add(c.multiplyScalar(this.speed*t));this.checkCollision(d)||this.position.copy(d),this.mesh.lookAt(i),s=!0}else{const c=a.clone().multiplyScalar(-1),h=this.position.clone().add(c.multiplyScalar(this.speed*t*.5));this.checkCollision(h)||this.position.copy(h),this.mesh.lookAt(i)}if(n<this.attackRange){const c=performance.now()/1e3;c-this.lastAttack>this.attackCooldown&&(e.takeDamage(this.damage),this.lastAttack=c,this.attackAnimTime=this.attackAnimDuration)}}else this.state="wander"}else{if(this.wanderTimer+=t,!this.wanderTarget||this.wanderTimer>this.wanderChangeInterval){const o=10+Math.random()*30,a=Math.random()*Math.PI*2,l=this.position.x+Math.cos(a)*o,c=this.position.z+Math.sin(a)*o,h=(g,_,m)=>Math.max(_,Math.min(m,g)),u=this.mapHalfSize*.9,d=h(l,-u,u),p=h(c,-u,u);this.wanderTarget=new R(d,0,p),this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4}if(this.wanderTarget){const o=new R().subVectors(this.wanderTarget,this.position);o.y=0,o.length()>.5?(o.normalize(),this.position.add(o.multiplyScalar(this.speed*t*.5)),this.mesh.lookAt(this.wanderTarget.x,this.position.y,this.wanderTarget.z),s=!0):(this.wanderTimer+=t,this.wanderTimer>this.wanderChangeInterval&&(this.wanderTarget=null,this.wanderTimer=0))}}if(this.mesh.position.copy(this.position),this.world&&typeof this.world.getHeightAt=="function"){const o=this.world.getHeightAt(this.position.x,this.position.z);this.mesh.position.y=Math.max(this.mesh.position.y,o),this.position.y=this.mesh.position.y}if(s){this.animTime+=t*5;const o=Math.sin(this.animTime)*.5;this.leftLegPivot.rotation.x=o,this.rightLegPivot.rotation.x=-o,this.leftArmPivot.rotation.x=-Math.PI/3+o*.2,this.rightArmPivot.rotation.x=-Math.PI/3-o*.2}else this.state!=="attack"&&(this.leftLegPivot.rotation.x=0,this.rightLegPivot.rotation.x=0,this.leftArmPivot.rotation.x=-Math.PI/3,this.rightArmPivot.rotation.x=-Math.PI/3);if(this.attackAnimTime>0){this.attackAnimTime=Math.max(0,this.attackAnimTime-t);const o=1-this.attackAnimTime/this.attackAnimDuration,a=Math.sin(o*Math.PI)*1.5;if(this.leftArmPivot.rotation.x=-Math.PI/2+a*.2,this.rightArmPivot.rotation.x=-Math.PI/2-a*.2,o>.3&&o<.7){const l=new R;this.mesh.getWorldDirection(l),l.y=0,l.normalize(),this.position.add(l.multiplyScalar(.02))}}}takeDamage(t){this.health-=t;const e=Math.max(0,this.health/100);this.healthBarFg.scale.x=e,this.mesh.traverse(i=>{if(i.isMesh&&i!==this.healthBarBg&&i!==this.healthBarFg){const n=i.material;if(!i.userData.originalColor&&n&&n.color)try{i.userData.originalColor=n.color.clone()}catch{i.userData.originalColor=null}if(n&&(n.isMeshStandardMaterial||n.isMeshPhongMaterial||n.isMeshLambertMaterial))n.emissive=new bt(16711680);else if(n&&n.color)try{n.color=n.color.clone().lerp(new bt(16711680),.6)}catch{}}}),setTimeout(()=>{this.isDead||this.mesh.traverse(i=>{if(i.isMesh&&i!==this.healthBarBg&&i!==this.healthBarFg){const n=i.material;if(n&&(n.isMeshStandardMaterial||n.isMeshPhongMaterial||n.isMeshLambertMaterial))n.emissive=new bt(0);else if(n&&n.color&&i.userData&&i.userData.originalColor)try{n.color.copy(i.userData.originalColor)}catch{}}})},100),this.health<=0&&!this.isDead&&this.startDeath()}playDeathSound(){try{const t=this.audioCtx.createBufferSource();t.buffer=this.deathBuffer;const e=this.audioCtx.createGain();e.gain.value=.7,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}catch(t){console.warn("playDeathSound error:",t)}}checkCollision(t){if(!this.scene)return!1;const e=.5;for(let i of this.scene.children)if(i.userData&&(i.userData.type==="house"||i.userData.type==="tree")){const n=i.position,s=Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.z-n.z,2)),o=i.userData.type==="house"?5:2;if(s<e+o)return!0}return!1}hasLineOfSight(t,e){if(!this.scene)return!0;const i=new R().subVectors(e,this.position).normalize(),n=this.position.distanceTo(e),o=new Ke(this.position.clone().add(new R(0,1,0)),i,0,n).intersectObjects(this.scene.children,!0);for(let a of o){if(a.object===this.mesh||a.object.parent===this.mesh||a.object===t.mesh||a.object.parent===t.mesh)continue;let l=a.object;for(;l.parent&&l.parent!==this.scene;)l=l.parent;if(l.userData&&(l.userData.type==="house"||l.userData.type==="tree"))return!1}return!0}startDeath(){this.isDead=!0,this.deathTimer=0,this.deathFallProgress=0,this.deathDuration=3+Math.random()*2,this.stopGroan(),this.healthBarBg&&(this.healthBarBg.visible=!1),this.healthBarFg&&(this.healthBarFg.visible=!1);const t=25,e=this.player&&this.player.position;if(e?this.position.distanceTo(e)<=t:!0)try{this.audioCtx&&this.deathBuffer&&(this.audioCtx.state==="suspended"?this.audioCtx.resume().then(()=>{this.playDeathSound()}):this.audioCtx.state==="running"&&this.playDeathSound())}catch(n){console.warn("Error playing death sound:",n)}}updateDeath(t){this.deathFallProgress=Math.min(1,this.deathFallProgress+t*2.5);const e=-Math.PI/2*this.deathFallProgress;this.mesh&&(this.mesh.rotation.x=e,this.mesh.position.y=Math.max(0,this.mesh.position.y-t*.6)),this.deathTimer+=t,this.deathTimer>=(this.deathDuration||3)&&(this.mesh&&this.mesh.parent&&this.scene.remove(this.mesh),this.readyToDespawn=!0)}playGroan(){try{if(!this.audioCtx||!this.groanBuffer)return;if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playGroan());return}const t=this.audioCtx.createBufferSource();t.buffer=this.groanBuffer;const e=this.audioCtx.createGain();e.gain.value=.45,t.connect(e),e.connect(this.audioCtx.destination),t.onended=()=>{this._groanSource=null,this._groanGain=null},t.start(0),this._groanSource=t,this._groanGain=e}catch(t){console.warn("playGroan error:",t)}}stopGroan(){if(this._groanSource){try{this._groanSource.stop()}catch{}try{this._groanSource.disconnect()}catch{}this._groanSource=null}if(this._groanGain){try{this._groanGain.disconnect()}catch{}this._groanGain=null}}}class rm{constructor(t,e,i){this.scene=t,this.player=e,this.items=[],this.interactionPrompt=document.getElementById("interaction-prompt"),this.mapSize=i&&i.mapSize?i.mapSize:ms,this.spawnSpan=this.mapSize*.75,this.glowRadius=7,this.world=null,this.settings=i||{},this.matrixDropInterval=5,this._matrixDropTimer=0,this.matrixDropBatchSize=10,this.matrixDropRadiusLimit=10,this.initLoot(),document.addEventListener("keydown",n=>{n.code==="KeyE"&&this.tryInteract()})}setWorld(t){this.world=t,this.realignItemsToGround()}getClampedCoord(t,e){if(this.world&&typeof this.world.halfMapSize=="number"){const i=this.world.halfMapSize-1;return{x:Math.max(-i,Math.min(i,t)),z:Math.max(-i,Math.min(i,e))}}return{x:t,z:e}}initLoot(){if(this.settings.gameMode==="matrix"||this.settings.gameMode==="studio"||this.settings.skipLoot)return;for(let e=0;e<24;e++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n)),this.createChest(i,.5,n)}for(let e=0;e<36;e++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n)),this.spawnJuiceBottle(i,n)}const t=[2899536,15105570,1752220,15158332,10181046];for(let e=0;e<8;e++){let i=(Math.random()-.5)*this.spawnSpan,n=(Math.random()-.5)*this.spawnSpan;({x:i,z:n}=this.getClampedCoord(i,n));const s=t[e%t.length];this.spawnBackpack(i,n,s)}}createChest(t,e,i){this.spawnChest(t,i)}spawnChest(t,e){const i=new Xt;({x:t,z:e}=this.getClampedCoord(t,e));let n=.5;this.world&&typeof this.world.getHeightAt=="function"&&(n=this.world.getHeightAt(t,e)+.5),i.position.set(t,n,e);const s=new it(1,.8,.6),o=new Q({color:15844367,roughness:.3,metalness:.5}),a=new z(s,o);i.add(a);const l=new it(1,.2,.6),c=new z(l,o);c.position.y=.5,i.add(c);const h=new z(new it(.2,.3,.1),new Q({color:9807270}));h.position.set(0,.3,.3),i.add(h),i.castShadow=!0,i.receiveShadow=!0;const u=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR"],d=u[Math.floor(Math.random()*u.length)];i.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:d};const p=this.createGlowEffect();return p.position.y=1,i.add(p),i.userData.glow=p,this.scene.add(i),this.items.push(i),i}spawnChestWithLoot(t,e,i){const n=new Xt;({x:t,z:e}=this.getClampedCoord(t,e));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(t,e)+.5),n.position.set(t,s,e);const o=new it(1,.8,.6),a=new Q({color:15844367,roughness:.3,metalness:.5}),l=new z(o,a);n.add(l);const c=new it(1,.2,.6),h=new z(c,a);h.position.y=.5,n.add(h);const u=new z(new it(.2,.3,.1),new Q({color:9807270}));u.position.set(0,.3,.3),n.add(u),n.castShadow=!0,n.receiveShadow=!0,n.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:i};const d=this.createGlowEffect();return d.position.y=1,n.add(d),n.userData.glow=d,this.scene.add(n),this.items.push(n),n}spawnJuiceBottle(t,e){const i=new Xt;({x:t,z:e}=this.getClampedCoord(t,e));let n=.5;this.world&&typeof this.world.getHeightAt=="function"&&(n=this.world.getHeightAt(t,e)+.5),i.position.set(t,n,e);const s=new z(new me(.2,.2,.6,8),new Q({color:2600544}));s.position.y=.5,i.add(s);const o=new z(new me(.12,.12,.15,8),new Q({color:12597547}));o.position.y=.9,i.add(o),i.castShadow=!0,i.receiveShadow=!0,i.userData={type:"stamina",gameId:this.generateID(),gameName:"JuiceBottle",amount:50};const a=this.createGlowEffect();return a.position.y=.9,i.add(a),i.userData.glow=a,this.scene.add(i),this.items.push(i),i}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}spawnLootInHouse(t,e,i){this.spawnChest(t,i)}spawnBackpack(t,e,i){const n=new Xt;({x:t,z:e}=this.getClampedCoord(t,e));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(t,e)+.5),n.position.set(t,s,e);const o=new z(new it(.7,.9,.35),new Q({color:i,metalness:.15,roughness:.8}));n.add(o);const a=new z(new it(.6,.25,.16),new Q({color:3426654,metalness:.1,roughness:.8}));a.position.set(0,-.55,.18),n.add(a),n.castShadow=!0,n.receiveShadow=!0;const l=this.createGlowEffect();return l.position.y=1,n.add(l),n.userData={type:"backpack",color:i,gameId:this.generateID(),gameName:"Backpack",isOpened:!1,glow:l},this.scene.add(n),this.items.push(n),n}spawnMatrixLoadout(t=0,e=0){[{dx:2,dz:0,loot:"Pistol"},{dx:-2,dz:0,loot:"Rifle"},{dx:0,dz:2,loot:"Sniper"},{dx:0,dz:-2,loot:"ShieldPotion"},{dx:2,dz:2,loot:"SMG"},{dx:-2,dz:-2,loot:"Shotgun"},{dx:-2,dz:2,loot:"DMR"}].forEach(s=>{this.spawnChestWithLoot(t+s.dx,e+s.dz,s.loot)}),this.spawnJuiceBottle(t+3,e+3),this.spawnJuiceBottle(t-3,e-3),[2899536,15105570,1752220].forEach((s,o)=>{this.spawnBackpack(t+(o-1)*2,e+4,s)})}countNearbyChests(t=10){if(!this.player)return 0;const e=this.player.position;let i=0;return this.items.forEach(n=>{const s=n.userData||{};if(s.type!=="chest"||s.isOpened)return;const o=n.position.x-e.x,a=n.position.z-e.z;Math.sqrt(o*o+a*a)<=t&&i++}),i}createUmbrella(){const t=new Xt,e=new z(new me(.08,.08,1.6,6),new Q({color:4863016,roughness:.8}));e.position.y=-.2,t.add(e),[16726832,15844367,3447003].forEach((s,o)=>{const a=new z(new it(1.8-o*.3,.15,1.8-o*.3),new Q({color:s,roughness:.4,metalness:.2}));a.position.y=.7+o*.12,t.add(a)});const n=new z(new an(.2,.25,6),new Q({color:2899536}));return n.position.y=1.1,t.add(n),t.castShadow=!0,t.receiveShadow=!0,t}spawnMatrixDropNearPlayer(){if(!this.player)return;const t=Math.random()*Math.PI*2,e=4+Math.random()*8;let i=this.player.position.x+Math.cos(t)*e,n=this.player.position.z+Math.sin(t)*e;({x:i,z:n}=this.getClampedCoord(i,n));let s=.5;this.world&&typeof this.world.getHeightAt=="function"&&(s=this.world.getHeightAt(i,n)+.5);const o=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR"],a=o[Math.floor(Math.random()*o.length)],l=this.spawnChestWithLoot(i,n,a);if(l){l.position.y=s+18,l.userData.isDropping=!0,l.userData.dropTargetY=s,l.userData.dropVelocity=0;const c=this.createUmbrella();c.position.y=1.2,l.add(c),l.userData.umbrella=c}}spawnMatrixDropsBatch(){if(this.countNearbyChests(this.matrixDropRadiusLimit)>=this.matrixDropBatchSize)return;const t=this.matrixDropBatchSize-this.countNearbyChests(this.matrixDropRadiusLimit),e=Math.max(0,Math.min(this.matrixDropBatchSize,t));for(let i=0;i<e;i++)this.spawnMatrixDropNearPlayer()}update(t=.016){const e=Math.max(0,t||0);this.settings.gameMode==="matrix"&&this.player&&(this._matrixDropTimer+=e,this._matrixDropTimer>=this.matrixDropInterval&&(this._matrixDropTimer=0,this.spawnMatrixDropsBatch())),this.items.forEach(s=>{const o=s.userData||{};if(o.isDropping&&(o.dropVelocity=(o.dropVelocity||0)+5*e,s.position.y-=o.dropVelocity*e,s.position.y<=o.dropTargetY&&(s.position.y=o.dropTargetY,o.isDropping=!1,o.dropVelocity=0,o.umbrella))){try{s.remove(o.umbrella)}catch{}o.umbrella=null}});let i=null;const n=this.player.position;for(const s of this.items){if(s.userData&&s.userData.isOpened)continue;const o=n.distanceTo(s.position);if(this.updateGlow(s,o),o<3){i=s;break}}if(!(this.interactionPrompt&&this.interactionPrompt.dataset.vehiclePrompt==="1"))if(i){this.interactionPrompt.classList.remove("hidden");const s=i.userData||{};if(s.type==="chest")this.interactionPrompt.innerText=`Press E to open (Contains: ${s.loot})`;else if(s.type==="stamina")this.interactionPrompt.innerText=`Press E to collect ${s.gameName} (+${s.amount} Stamina)`;else if(s.type==="backpack"){const o=s.color?"#"+s.color.toString(16).padStart(6,"0"):"";this.interactionPrompt.innerText=`Press E to equip Backpack ${o}`}else this.interactionPrompt.innerText="Press E to interact";this.currentItem=i}else this.interactionPrompt.classList.add("hidden"),this.currentItem=null}tryInteract(){if(this.currentItem){const t=this.currentItem.userData;if(!t)return;if(t.type==="chest"&&!t.isOpened)t.isOpened=!0,this.scene.remove(this.currentItem),this.player.collectItem(t.loot),console.log(`Looted ${t.loot}!`);else if(t.type==="stamina"){const e=t.amount||50;this.player&&(this.player.stamina=Math.min(100,this.player.stamina+e)),this.scene.remove(this.currentItem),t.isOpened=!0,console.log(`Picked up stamina item: +${e}`)}else if(t.type==="backpack"){const e=t.color||2899536;if(this.player&&typeof this.player.collectItem=="function"){const i=this.player.collectItem(`Backpack:${e.toString(16)}`);if(i!=null){const n=this.player.position.clone();this.spawnBackpack(n.x+.5,n.z+.5,i)}}this.scene.remove(this.currentItem),t.isOpened=!0,console.log(`Equipped backpack ${e.toString(16)}`)}}}realignItemsToGround(){!this.world||typeof this.world.getHeightAt!="function"||this.items.forEach(t=>{const e=t.position,i=this.world.getHeightAt(e.x,e.z),n=(t.userData&&t.userData.type==="chest",.5);t.position.y=i+n})}updateGlow(t,e){if(!t||!t.userData||!t.userData.glow)return;const i=t.userData.glow,n=!t.userData.isOpened&&e<this.glowRadius;i.visible=n,n&&(i.rotation.y+=.02,i.position.y=(t.userData.type==="chest"?1:.9)+Math.sin(performance.now()/500)*.1)}createGlowEffect(){const e=new Float32Array(120),i=.6;for(let a=0;a<40;a++){const l=i*Math.random(),c=Math.random()*Math.PI*2,h=Math.random()*i*.6;e[a*3]=Math.cos(c)*l,e[a*3+1]=h,e[a*3+2]=Math.sin(c)*l}const n=new ue;n.setAttribute("position",new we(e,3));const s=new Ya({color:16765286,size:.15,transparent:!0,opacity:.9,depthWrite:!1,blending:sr,sizeAttenuation:!0}),o=new Ep(n,s);return o.visible=!1,o}}class om{constructor(t,e={}){this.player=t,this.container=document.getElementById("touch-controls"),this.enabled=!0,this.layout=e&&e.layout?e.layout:{},this._cleanupExistingControls(),this.isEditing=!1,this.buttonHelpers=new Map,this._suppressDragUntil=0,this.joystick=document.createElement("div"),this.joystick.className="tc-joystick",this.joystick.style.zIndex="210",this.stick=document.createElement("div"),this.stick.className="tc-stick",this.joystick.appendChild(this.stick),this.buttons=document.createElement("div"),this.buttons.className="tc-buttons",this.buttons.style.zIndex="210",this.fireBtn=document.createElement("button"),this.fireBtn.className="tc-btn tc-btn-fire",this.fireBtn.innerText="FIRE",this.jumpBtn=document.createElement("button"),this.jumpBtn.className="tc-btn",this.jumpBtn.innerText="JUMP",this.sprintBtn=document.createElement("button"),this.sprintBtn.className="tc-btn",this.sprintBtn.innerText="SPRINT",this.interactBtn=document.createElement("button"),this.interactBtn.className="tc-btn tc-interact-btn",this.interactBtn.innerText="E",this.interactBtn.style.display="none",this.crouchBtn=document.createElement("button"),this.crouchBtn.className="tc-btn",this.crouchBtn.innerText="CROUCH",this.crouchBtn.style.fontSize="16px",this.buttons.appendChild(this.fireBtn),this.buttons.appendChild(this.jumpBtn),this.buttons.appendChild(this.sprintBtn),this.buttons.appendChild(this.crouchBtn),this.buttons.appendChild(this.interactBtn),this.container.appendChild(this.joystick),this.container.appendChild(this.buttons),this.container.classList.remove("hidden"),this.applyLayout(),this._initDragHandles(),this.active=!1,this.startPos=null,this.currentPos={x:0,y:0},this.lookActive=!1,this.lookStartPos=null,this._bindJoystick(),this._bindButtons(),this._bindLookArea(),this._setupEditToggleGesture(),this.deadZone=10,this.maxRadius=50,document.body.style.touchAction="none";try{this.player&&(this.player.allowTouchMovement=!0)}catch{}}_dispatchTouchLook(t,e){try{window.dispatchEvent(new CustomEvent("game-touch-look",{detail:{dx:t,dy:e}}))}catch{}}destroy(){try{this.container.classList.add("hidden"),this.destroyLookArea(),this.container.removeChild(this.joystick),this.container.removeChild(this.buttons),document.body.style.touchAction="",this.player&&(this.player.allowTouchMovement=!1)}catch{}}applyLayout(){const t=this.layout.joystickLeft!==void 0?this.layout.joystickLeft:10,e=this.layout.joystickBottom!==void 0?this.layout.joystickBottom:12,i=this.layout.buttonsRight!==void 0?this.layout.buttonsRight:8,n=this.layout.buttonsBottom!==void 0?this.layout.buttonsBottom:12,s=this.layout.buttonGapVh!==void 0?this.layout.buttonGapVh:14/window.innerHeight*100;this.layout.buttonPositions||(this.layout.buttonPositions={});const o=(l,c)=>{this.layout.buttonPositions[l]||(this.layout.buttonPositions[l]={right:i,bottom:n+s*c})};o("fire",0),o("jump",1),o("sprint",2),o("crouch",3),o("interact",4),this.joystick.style.left=`${t}vw`,this.joystick.style.bottom=`${e}vh`,this.buttons.style.position="absolute",this.buttons.style.top="0",this.buttons.style.left="0",this.buttons.style.right="0",this.buttons.style.bottom="0",this.buttons.style.display="block",this.buttons.style.pointerEvents="none";const a=(l,c)=>{const h=this.layout.buttonPositions[c];h&&(l.style.position="absolute",l.style.right=`${h.right}vw`,l.style.bottom=`${h.bottom}vh`,l.style.pointerEvents="auto")};a(this.fireBtn,"fire"),a(this.jumpBtn,"jump"),a(this.sprintBtn,"sprint"),a(this.crouchBtn,"crouch"),a(this.interactBtn,"interact")}_cleanupExistingControls(){if(!this.container)return;this.container.querySelectorAll(".tc-joystick, .tc-buttons, .tc-look-area").forEach(e=>{try{e.parentNode.removeChild(e)}catch{}})}_initDragHandles(){const t=()=>{try{const s=localStorage.getItem("touch-layout");if(s){const o=JSON.parse(s);this.layout={...this.layout,...o}}}catch{}},e=()=>{try{localStorage.setItem("touch-layout",JSON.stringify(this.layout))}catch{}};t(),this.applyLayout(),((s,o)=>{let a=!1,l=0,c=0;const h=10,u=g=>{const _=g.touches?g.touches[0]:g;if(!a){const m=_.clientX-l,f=_.clientY-c;if(Math.sqrt(m*m+f*f)<h)return;a=!0}{const m=_.clientX/window.innerWidth*100;this.layout.joystickLeft=Math.max(0,Math.min(80,m));const f=(window.innerHeight-_.clientY)/window.innerHeight*100;this.layout.joystickBottom=Math.max(0,Math.min(80,f))}this.applyLayout(),g.preventDefault&&g.preventDefault()},d=()=>{a&&(a=!1,e()),document.removeEventListener("touchmove",u,{passive:!1}),document.removeEventListener("touchend",d),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",d)},p=g=>{if(!this.isEditing||this._shouldSuppressDrag()||g.touches&&g.touches.length>1)return;const _=g.touches?g.touches[0]:g;l=_.clientX,c=_.clientY,a=!1,document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),document.addEventListener("pointermove",u),document.addEventListener("pointerup",d)};s.addEventListener("touchstart",p,{passive:!0}),s.addEventListener("pointerdown",p)})(this.joystick);const n=(s,o)=>{let a=!1,l=0,c=0;const h=10,u=g=>{if(!a)return;const _=g.touches?g.touches[0]:g,m=(window.innerWidth-_.clientX)/window.innerWidth*100,f=(window.innerHeight-_.clientY)/window.innerHeight*100;this.layout.buttonPositions||(this.layout.buttonPositions={}),this.layout.buttonPositions[o]={right:Math.max(0,Math.min(90,m)),bottom:Math.max(0,Math.min(90,f))},this.applyLayout(),g.preventDefault&&g.preventDefault()},d=()=>{a&&(a=!1,e()),document.removeEventListener("touchmove",u,{passive:!1}),document.removeEventListener("touchend",d),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",d)},p=g=>{if(!this.isEditing||this._shouldSuppressDrag()||g.touches&&g.touches.length>1)return;const _=g.touches?g.touches[0]:g;l=_.clientX,c=_.clientY,a=!1,document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),document.addEventListener("pointermove",u),document.addEventListener("pointerup",d)};s.addEventListener("touchstart",p,{passive:!0}),s.addEventListener("pointerdown",p),s.addEventListener("touchmove",g=>{if(!this.isEditing||this._shouldSuppressDrag()||a)return;const _=g.touches?g.touches[0]:g,m=_.clientX-l,f=_.clientY-c;Math.sqrt(m*m+f*f)>h&&(a=!0)},{passive:!0}),s.addEventListener("pointermove",g=>{if(g.pointerType!=="touch"||!this.isEditing||this._shouldSuppressDrag()||a)return;const _=g.clientX-l,m=g.clientY-c;Math.sqrt(_*_+m*m)>h&&(a=!0)})};n(this.fireBtn,"fire"),n(this.jumpBtn,"jump"),n(this.sprintBtn,"sprint"),n(this.crouchBtn,"crouch"),n(this.interactBtn,"interact")}_bindJoystick(){this.joystick.addEventListener("touchstart",e=>{e.preventDefault();const i=e.changedTouches[0];this.joystick.getBoundingClientRect(),this.startPos={x:i.clientX,y:i.clientY},this.active=!0}),this.joystick.addEventListener("touchmove",e=>{if(!this.active)return;e.preventDefault();const i=e.changedTouches[0],n=i.clientX-this.startPos.x,s=i.clientY-this.startPos.y,o=Math.sqrt(n*n+s*s),a=Math.atan2(s,n),l=Math.min(this.maxRadius,o),c=Math.cos(a)*l,h=Math.sin(a)*l;this.stick.style.transform=`translate(${c}px, ${h}px)`;const u=n/this.maxRadius,d=s/this.maxRadius;this.player.moveForward=d<-.3,this.player.moveBackward=d>.3,this.player.moveLeft=u<-.3,this.player.moveRight=u>.3});const t=e=>{this.active&&(e.preventDefault(),this.active=!1,this.startPos=null,this.stick.style.transform="translate(0,0)",this.player.moveForward=!1,this.player.moveBackward=!1,this.player.moveLeft=!1,this.player.moveRight=!1)};this.joystick.addEventListener("touchend",t),this.joystick.addEventListener("touchcancel",t)}_bindButtons(){let t=null,e=null;const i=()=>{t&&(clearInterval(t),t=null)};this._stopFireInterval=i,this.fireBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&(i(),e&&(clearTimeout(e),e=null),this.player&&typeof this.player.shoot=="function"&&(this.player.shoot(),e=setTimeout(()=>{t=setInterval(()=>{this.player&&typeof this.player.shoot=="function"&&this.player.shoot()},150)},220)))});const n=s=>{s&&s.preventDefault&&s.preventDefault(),!this.isEditing&&(e&&(clearTimeout(e),e=null),i())};this.fireBtn.addEventListener("touchend",n),this.fireBtn.addEventListener("touchcancel",n),this.fireBtn.addEventListener("pointerup",s=>{s.pointerType==="touch"&&n(s)}),this.fireBtn.addEventListener("pointercancel",s=>{s.pointerType==="touch"&&n(s)}),this.fireBtn.addEventListener("mouseup",n),this.fireBtn.addEventListener("mouseleave",n),this.jumpBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&this.player&&this.player.canJump===!0&&(this.player.velocity.y+=this.player.jumpHeight,this.player.canJump=!1)}),this.sprintBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&this.player&&(this.player.stamina<=0?this.player.isSprinting=!1:this.player.isSprinting=!this.player.isSprinting,this._updateSprintButton())}),this.interactBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&window.game&&window.game.itemManager&&window.game.itemManager.tryInteract()}),this.crouchBtn.addEventListener("touchstart",s=>{s.preventDefault(),!this.isEditing&&this.player&&(this.player.isCrouching=!this.player.isCrouching,this.crouchBtn.style.background=this.player.isCrouching?"rgba(52, 152, 219, 0.9)":"rgba(241, 196, 15, 0.9)")})}update(){window.game&&window.game.itemManager&&window.game.itemManager.currentItem?this.interactBtn.style.display="block":this.interactBtn.style.display="none";try{this.player&&this.player.stamina!==void 0&&(this.player.isSprinting&&this.player.stamina<=0&&(this.player.isSprinting=!1),this._updateSprintButton())}catch{}}destroyLookArea(){try{this.lookArea&&this.container&&this.lookArea.parentElement===this.container&&this.container.removeChild(this.lookArea)}catch{}this.lookArea=null}rebuildLookArea(){this.destroyLookArea(),this._bindLookArea()}_bindLookArea(){try{if(this.lookArea)try{this.container.removeChild(this.lookArea)}catch{}this.lookArea=document.createElement("div"),this.lookArea.className="tc-look-area",this.lookArea.style.position="absolute",this.lookArea.style.top="0",this.lookArea.style.bottom="0",this.lookArea.style.right="0",this.lookArea.style.left="0",this.lookArea.style.width="100%",this.lookArea.style.zIndex="190",this.lookArea.style.background="transparent",this.lookArea.style.touchAction="none",this.lookArea.style.pointerEvents="auto",this.container.appendChild(this.lookArea);let t=null,e=0,i=0;this.lookArea.addEventListener("touchstart",s=>{if(t!==null)return;const o=s.changedTouches[0];t=o.identifier,e=o.clientX,i=o.clientY,s.cancelable&&s.preventDefault()},{passive:!1}),this.lookArea.addEventListener("touchmove",s=>{if(t!==null){s.cancelable&&s.preventDefault();for(let o=0;o<s.changedTouches.length;o++)if(s.changedTouches[o].identifier===t){const a=s.changedTouches[o],l=a.clientX-e,c=a.clientY-i;e=a.clientX,i=a.clientY,this._dispatchTouchLook(l,c);break}}},{passive:!1});const n=s=>{if(t!==null){for(let o=0;o<s.changedTouches.length;o++)if(s.changedTouches[o].identifier===t){t=null;break}}};this.lookArea.addEventListener("touchend",n),this.lookArea.addEventListener("touchcancel",n)}catch{}}_getButtons(){return[this.fireBtn,this.jumpBtn,this.sprintBtn,this.crouchBtn,this.interactBtn]}_getEditToggleTargets(){return[this.jumpBtn,this.sprintBtn,this.crouchBtn,this.interactBtn]}_setupEditToggleGesture(){let t=0,e=0;const i=700,n=o=>{o.touches&&o.touches.length>=2&&(o.preventDefault(),o.stopPropagation(),t=0,this._suppressDrag(),this._toggleEditMode())},s=o=>{const a=performance.now();a-e<i?t+=1:t=1,e=a,t>=3&&(o.preventDefault(),o.stopPropagation(),t=0,this._suppressDrag(),this._toggleEditMode())};this._getEditToggleTargets().forEach(o=>{o.addEventListener("touchstart",n,{passive:!1}),o.addEventListener("touchend",s,{passive:!1}),o.addEventListener("touchcancel",()=>{t=0},{passive:!0}),o.addEventListener("pointerdown",a=>{a.pointerType})})}_updateSprintButton(){if(!this.player)return;const t=!!this.player.isSprinting;this.sprintBtn.style.background=t?"rgba(46, 204, 113, 0.9)":"rgba(241, 196, 15, 0.9)"}_toggleEditMode(){this.isEditing?this._exitEditMode():this._enterEditMode()}_enterEditMode(){this.isEditing=!0,typeof this._stopFireInterval=="function"&&this._stopFireInterval(),this._showButtonHelpers(),this._suppressDrag()}_exitEditMode(){this.isEditing=!1,this._hideButtonHelpers()}_showButtonHelpers(){this._getButtons().forEach(t=>{t.classList.add("tc-btn-editing");let e=this.buttonHelpers.get(t);e||(e=document.createElement("div"),e.className="tc-btn-helper",e.style.position="absolute",e.style.inset="-8px",e.style.border="2px dashed rgba(255, 255, 255, 0.75)",e.style.borderRadius="22px",e.style.pointerEvents="none",e.style.boxShadow="0 0 12px rgba(255, 255, 255, 0.5)",e.style.animation="tc-btn-helper-pulse 1.6s ease-in-out infinite",e.style.opacity="0.9",this.buttonHelpers.set(t,e)),t.contains(e)||(e.setAttribute("aria-hidden","true"),t.appendChild(e))})}_hideButtonHelpers(){this._getButtons().forEach(t=>{t.classList.remove("tc-btn-editing");const e=this.buttonHelpers.get(t);e&&e.parentNode===t&&t.removeChild(e)})}_suppressDrag(t=450){this._suppressDragUntil=performance.now()+t}_shouldSuppressDrag(){return performance.now()<this._suppressDragUntil}}class am{constructor({player:t,scene:e,url:i,nick:n="Player",color:s="#29b6f6",roomCode:o="PUBLIC",settings:a=null}){this.player=t,this.scene=e,this.url=i,this.nick=n,this.color=s,this.roomCode=o||"PUBLIC",this.socket=null,this.id=null,this.others=new Map,this.lastSend=0,this.sendInterval=.05,this.lastSentPos=null,this.lastAnimSig=null,this.heartbeatTimer=0,this.isHost=!1,this.roomSettings=a,this._manualClose=!1,this.deadPeers=new Set,this.matchLive=!1,this.remoteStates=new Map,this.interpDelayMs=100,this.maxBufferMs=1e3,this.maxExtrapMs=80,this._now=typeof performance<"u"&&performance.now.bind(performance)||Date.now,this._tmpVec=new R,this.netStats={txBytes:0,rxBytes:0,txPerSec:0,rxPerSec:0,lastSample:this._now(),history:[]},this.lastPingSent=0,this.pingInterval=5,this.connect()}applyColorToTorso(t,e){if(!t||!e)return;let i=!1;const n=new bt(e);return t.traverse(s=>{if(!s.isMesh||!s.material||Array.isArray(s.material))return;const o=s.userData&&s.userData.gameName?s.userData.gameName.toLowerCase():"";(o.includes("body")||o.includes("torso")||o.includes("shirt")||o.includes("clothes")||s.geometry&&s.geometry.parameters&&Math.abs(s.geometry.parameters.width-.6)<.05)&&(s.material=s.material.clone(),s.material.color=n,i=!0)}),t.userData&&(t.userData.color=e),i}connect(){if(!this.url){console.warn("Multiplayer URL not configured.");const t=document.getElementById("ai-log");if(t){const e=document.createElement("div");e.textContent="Multiplayer URL not set in settings.",e.style.color="#ff9b9b",t.appendChild(e)}return}try{this.socket=new WebSocket(this.url),this.socket.onopen=()=>{this.sendJoin()},this.socket.onmessage=t=>this.handleMessage(t),this.socket.onclose=()=>{this.others.forEach(t=>{try{this.scene.remove(t)}catch{}}),this.others.clear(),this.deadPeers.clear(),this.matchLive=!1,this._manualClose||setTimeout(()=>this.connect(),1500)},this.socket.onerror=()=>{}}catch(t){console.warn("Multiplayer connect failed:",t)}}handleMessage(t){var e;try{const i=typeof t.data=="string"?t.data.length:0,n=JSON.parse(t.data);if(i>0&&this.trackRx(i),n.type!=="hello"){if(n.type==="welcome")this.id=n.id,this.isHost=!!n.isHost,n.settings&&(this.roomSettings=n.settings),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount()),this.onHostChanged&&this.onHostChanged(this.isHost),n.settings&&this.onSettings&&this.onSettings(n.settings);else if(n.type==="player-join")n.id&&n.id!==this.id&&this.ensureRemote(n.id),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount());else if(n.type==="player-leave")this.removeRemote(n.id),this.onPeersChanged&&this.onPeersChanged(this.getPeerCount());else if(n.type==="state"&&n.id!==this.id){if(this.deadPeers.has(n.id))return;const s=this.ensureRemote(n.id,n.color),o=typeof n.ts=="number"?n.ts:this._now();this.bufferRemoteState(n.id,{t:o,pos:n.pos,anim:n.anim,nick:n.nick,color:n.color}),s&&n.color&&((e=s.userData)==null?void 0:e.color)!==n.color&&this.applyColorToTorso(s,n.color)}else if(n.type==="hit")this.onHit&&this.onHit(n);else if(n.type==="host-changed")this.isHost=n.hostId===this.id,this.onHostChanged&&this.onHostChanged(this.isHost);else if(n.type==="start-countdown")this.onCountdown&&this.onCountdown(n.duration||10);else if(n.type==="match-start")this.onMatchStart&&this.onMatchStart(),this.matchLive=!0;else if(n.type==="settings")this.roomSettings=n.settings,this.onSettings&&this.onSettings(n.settings);else if(n.type==="player-dead")n.id&&(this.deadPeers.add(n.id),this.killRemote(n.id),this.onPeerDeath&&this.onPeerDeath(n.id));else if(n.type==="pong"&&typeof n.ts=="number"){const s=this._now()-n.ts;this.netStats.lastPing=s}}}catch(i){console.warn("Multiplayer parse error:",i)}}ensureRemote(t,e=null){if(!t||t===this.id||this.deadPeers&&this.deadPeers.has(t))return null;if(this.others.has(t))return this.others.get(t);const i=this.clonePlayerAvatar(e);if(i)return i.userData={...i.userData||{},gameId:t,gameName:"Player",color:e||this.color},this.applyColorToTorso(i,e||this.color),i.traverse(a=>{a.isMesh&&(a.castShadow=!1,a.receiveShadow=!0)}),this.scene.add(i),this.others.set(t,i),i;const n=new it(.8,1.8,.8),s=new Q({color:e||this.color,emissive:0,roughness:.7}),o=new z(n,s);return o.position.y=1,o.userData={gameId:t,gameName:"Player"},this.scene.add(o),this.others.set(t,o),o}removeRemote(t){const e=this.others.get(t);if(e){if(e.userData&&e.userData.label&&e.userData.label.parentNode)try{e.userData.label.parentNode.removeChild(e.userData.label)}catch{}try{this.scene.remove(e)}catch{}this.others.delete(t)}this.remoteStates.delete(t)}killRemote(t){const e=this.others.get(t);if(e){try{e.rotation.x=-Math.PI/2,e.userData.dead=!0}catch{}setTimeout(()=>{this.removeRemote(t)},3500)}}clonePlayerAvatar(t=null){if(!this.player||!this.player.mesh)return null;try{const e=this.player.mesh.clone(!0),i={leftArm:null,rightArm:null,leftLeg:null,rightLeg:null};return e.traverse(n=>{if(n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material&&n.material.clone&&(n.material=n.material.clone()),n.geometry&&n.geometry.clone&&(n.geometry=n.geometry.clone()),t&&n.material&&!Array.isArray(n.material))){const s=n.userData&&n.userData.gameName?n.userData.gameName.toLowerCase():"";(s.includes("body")||s.includes("torso")||s.includes("shirt")||s.includes("clothes")||n.geometry&&n.geometry.parameters&&Math.abs(n.geometry.parameters.width-.6)<.05)&&(n.material=n.material.clone(),n.material.color=new bt(t))}n.userData&&(n.userData={...n.userData}),n.name==="leftArmPivot"?i.leftArm=n:n.name==="rightArmPivot"?i.rightArm=n:n.name==="leftLegPivot"?i.leftLeg=n:n.name==="rightLegPivot"&&(i.rightLeg=n)}),e.userData={...e.userData||{},pivots:i},e}catch(e){return console.warn("Failed to clone player avatar:",e),null}}applyRemoteAnimation(t,e){var n,s,o,a;if(!e||!t||!t.userData)return;const i=t.userData.pivots||{};try{i.leftArm&&typeof((n=e==null?void 0:e.arms)==null?void 0:n.leftX)=="number"&&(i.leftArm.rotation.x=e.arms.leftX),i.rightArm&&typeof((s=e==null?void 0:e.arms)==null?void 0:s.rightX)=="number"&&(i.rightArm.rotation.x=e.arms.rightX),i.leftLeg&&typeof((o=e==null?void 0:e.legs)==null?void 0:o.leftX)=="number"&&(i.leftLeg.rotation.x=e.legs.leftX),i.rightLeg&&typeof((a=e==null?void 0:e.legs)==null?void 0:a.rightX)=="number"&&(i.rightLeg.rotation.x=e.legs.rightX)}catch{}}update(t){var c,h,u;if(this.updateRemoteInterpolation(),this.sampleNetRates(),!this.socket||this.socket.readyState!==WebSocket.OPEN||(this.lastSend+=t,this.heartbeatTimer+=t,this.player&&!this.player.isDead&&(this.lastPingSent+=t,this.lastPingSent>=this.pingInterval&&(this.sendPing(),this.lastPingSent=0)),this.lastSend<this.sendInterval)||(this.lastSend=0,!this.player||!this.player.mesh)||this.player.isDead)return;const e=this.player.mesh.position,i={arms:{leftX:this.player.leftArmPivot?this.player.leftArmPivot.rotation.x:0,rightX:this.player.rightArmPivot?this.player.rightArmPivot.rotation.x:0},legs:{leftX:this.player.leftLegPivot?this.player.leftLegPivot.rotation.x:0,rightX:this.player.rightLegPivot?this.player.rightLegPivot.rotation.x:0}},n={type:"state",pos:{x:e.x,y:e.y,z:e.z},nick:this.nick,color:this.color,anim:i,ts:this._now()};let s=!1;this.lastSentPos?e.distanceTo?s=e.distanceTo(new R(this.lastSentPos.x,this.lastSentPos.y,this.lastSentPos.z))>.015:s=Math.abs(e.x-(((c=this.lastSentPos)==null?void 0:c.x)||0))>.015||Math.abs(e.y-(((h=this.lastSentPos)==null?void 0:h.y)||0))>.015||Math.abs(e.z-(((u=this.lastSentPos)==null?void 0:u.z)||0))>.015:s=!0;const o=`${i.arms.leftX.toFixed(3)},${i.arms.rightX.toFixed(3)},${i.legs.leftX.toFixed(3)},${i.legs.rightX.toFixed(3)}`,a=this.lastAnimSig!==o,l=this.heartbeatTimer>=5;if(s||a||l){const d=JSON.stringify(n);try{this.socket.send(d)}catch{}this.trackTx(d.length),this.lastSentPos={x:e.x,y:e.y,z:e.z},this.lastAnimSig=o,l&&(this.heartbeatTimer=0)}}dispose(){if(this._manualClose=!0,this.socket)try{this.socket.close()}catch{}this.others.forEach(t=>{try{this.scene.remove(t)}catch{}}),this.others.clear()}updateLabel(t,e){if(t.userData&&t.userData.label)try{t.userData.label.style.display="none"}catch{}t.userData&&(t.userData.nick=e||"Player")}sendHit(t,e){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!t||typeof e!="number")return;const n=JSON.stringify({type:"hit",targetId:t,amount:e});try{this.socket.send(n)}catch{}this.trackTx(n.length)}getPeerCount(){return 1+this.others.size}sendJoin(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN))try{const t=JSON.stringify({type:"join",room:this.roomCode,nick:this.nick,color:this.color});this.socket.send(t),this.trackTx(t.length)}catch{}}sendStart(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN))try{const t=JSON.stringify({type:"start"});this.socket.send(t),this.trackTx(t.length)}catch{}}sendSettings(t){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN)&&!(!this.isHost||!t))try{const e=JSON.stringify({type:"settings",settings:t});this.socket.send(e),this.trackTx(e.length)}catch{}}sendDeath(){if(!(!this.socket||this.socket.readyState!==WebSocket.OPEN)&&this.id)try{const t=JSON.stringify({type:"player-dead",id:this.id});this.socket.send(t),this.trackTx(t.length)}catch{}}isMatchLive(){return this.matchLive===!0}resetMatchState(){this.deadPeers.clear(),this.matchLive=!1}bufferRemoteState(t,e){if(!t||!e)return;const i=this.remoteStates.get(t)||[];for(i.push(e);i.length>24;)i.shift();this.remoteStates.set(t,i)}updateRemoteInterpolation(){if(!this.remoteStates||this.remoteStates.size===0)return;const e=this._now()-this.interpDelayMs;this.remoteStates.forEach((i,n)=>{var C,T,A,I,M,w,B,O,q,P,N,H,K,Y;if(!i||i.length===0)return;const s=this.others.get(n);if(!s)return;for(;i.length>2&&e-i[0].t>this.maxBufferMs;)i.shift();const o=i[i.length-1];let a=i[0],l=o;for(let X=1;X<i.length;X++)if(i[X].t>=e){a=i[X-1]||i[X],l=i[X];break}const c=l.t-a.t;let h=c>0?(e-a.t)/c:1;if(e>o.t&&e-o.t<=this.maxExtrapMs&&i.length>=2){const X=i[i.length-2],j=Math.max(1,o.t-X.t),nt=(o.pos.x-X.pos.x)/j,st=(o.pos.y-X.pos.y)/j,V=(o.pos.z-X.pos.z)/j,$=e-o.t;this._tmpVec.set(o.pos.x+nt*$,o.pos.y+st*$,o.pos.z+V*$),s.position.copy(this._tmpVec),this.applyRemoteAnimation(s,o.anim),this.updateLabel(s,o.nick);return}h=Math.min(1,Math.max(0,h));const u=((C=a.pos)==null?void 0:C.x)??0,d=((T=a.pos)==null?void 0:T.y)??0,p=((A=a.pos)==null?void 0:A.z)??0,g=((I=l.pos)==null?void 0:I.x)??u,_=((M=l.pos)==null?void 0:M.y)??d,m=((w=l.pos)==null?void 0:w.z)??p;this._tmpVec.set(u+(g-u)*h,d+(_-d)*h,p+(m-p)*h),s.position.copy(this._tmpVec);const f=(X,j)=>(typeof X!="number"&&(X=0),typeof j!="number"&&(j=X),X+(j-X)*h),x=a.anim||{},v=l.anim||{},S={arms:{leftX:f((B=x==null?void 0:x.arms)==null?void 0:B.leftX,(O=v==null?void 0:v.arms)==null?void 0:O.leftX),rightX:f((q=x==null?void 0:x.arms)==null?void 0:q.rightX,(P=v==null?void 0:v.arms)==null?void 0:P.rightX)},legs:{leftX:f((N=x==null?void 0:x.legs)==null?void 0:N.leftX,(H=v==null?void 0:v.legs)==null?void 0:H.leftX),rightX:f((K=x==null?void 0:x.legs)==null?void 0:K.rightX,(Y=v==null?void 0:v.legs)==null?void 0:Y.rightX)}};this.applyRemoteAnimation(s,S),this.updateLabel(s,l.nick||a.nick)})}sendPing(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN)return;const t={type:"ping",ts:this._now()},e=JSON.stringify(t);try{this.socket.send(e)}catch{}this.trackTx(e.length)}trackTx(t){!t||t<=0||(this.netStats.txBytes+=t)}trackRx(t){!t||t<=0||(this.netStats.rxBytes+=t)}sampleNetRates(){const t=this._now(),e=t-this.netStats.lastSample;if(e<1e3)return;const i=e/1e3,n=this.netStats.txBytes/i,s=this.netStats.rxBytes/i;for(this.netStats.txPerSec=n,this.netStats.rxPerSec=s,this.netStats.history.push({t,tx:n,rx:s,ping:this.netStats.lastPing||null});this.netStats.history.length>60;)this.netStats.history.shift();this.netStats.txBytes=0,this.netStats.rxBytes=0,this.netStats.lastSample=t}getNetStats(){return this.netStats}}function lm({maxLines:r=400,autoShow:t=!1}={}){const e=[],i={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)},n=document.createElement("div");n.id="debug-overlay",n.className="debug-overlay hidden";const s=document.createElement("div");s.className="debug-overlay-header",s.innerHTML="<strong>DEBUG</strong>";const o=document.createElement("div");o.className="debug-overlay-actions";const a=document.createElement("button");a.textContent="Clear";const l=document.createElement("button");l.textContent="Close",o.appendChild(a),o.appendChild(l),s.appendChild(o);const c=document.createElement("div");c.className="debug-overlay-list",n.appendChild(s),n.appendChild(c),document.body.appendChild(n),s.style.cursor="move";let h=!1,u=0,d=0;function p(C){if(!h)return;const T=Math.max(0,Math.min(window.innerWidth-n.offsetWidth,C.clientX-u)),A=Math.max(0,Math.min(window.innerHeight-n.offsetHeight,C.clientY-d));n.style.left=T+"px",n.style.top=A+"px",n.style.right="auto"}function g(C){h=!1,window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g);try{C&&C.pointerId&&n.releasePointerCapture&&n.releasePointerCapture(C.pointerId)}catch{}}s.addEventListener("pointerdown",C=>{try{const T=n.getBoundingClientRect();n.style.left=T.left+"px",n.style.top=T.top+"px",n.style.position="fixed",n.style.transform="none",n.style.right="auto",u=C.clientX-T.left,d=C.clientY-T.top,h=!0,window.addEventListener("pointermove",p),window.addEventListener("pointerup",g);try{n.setPointerCapture&&n.setPointerCapture(C.pointerId)}catch{}}catch{}},{passive:!1});function _(){c.innerHTML="";const C=Math.max(0,e.length-r);for(let T=C;T<e.length;T++){const A=document.createElement("div");A.className="debug-line debug-"+e[T].level;const I=new Date(e[T].ts).toLocaleTimeString();A.textContent=`[${I}] ${e[T].level.toUpperCase()}: ${e[T].msg}`,c.appendChild(A)}c.scrollTop=c.scrollHeight}function m(C,T){try{const A=T.map(I=>{try{return typeof I=="string"?I:JSON.stringify(I)}catch{return String(I)}}).join(" ");e.push({level:C,msg:A,ts:Date.now()}),e.length>r*2&&e.splice(0,e.length-r*2),_()}catch{}}console.log=function(...C){i.log(...C),m("log",C)},console.info=function(...C){i.info(...C),m("info",C)},console.warn=function(...C){i.warn(...C),m("warn",C)},console.error=function(...C){i.error(...C),m("error",C)};function f(C,T,A,I,M){typeof C=="string"?m("error",[C+" "+(T||"")+":"+(A||"?")]):C&&C.message&&m("error",[C.message,C.error||M])}function x(C){try{m("error",["UnhandledRejection",C&&C.reason?C.reason:C])}catch{}}window.addEventListener("error",f),window.addEventListener("unhandledrejection",x),a.addEventListener("click",()=>{e.length=0,_()}),l.addEventListener("click",()=>S());function v(){n.classList.remove("hidden")}function S(){n.classList.add("hidden")}return t&&v(),{show:v,hide:S,destroy(){console.log=i.log,console.info=i.info,console.warn=i.warn,console.error=i.error,window.removeEventListener("error",f),window.removeEventListener("unhandledrejection",x);try{n.remove()}catch{}},logs:e}}const tn=(()=>{try{return typeof navigator>"u"?!1:/Mobi|Android|iPhone|iPad|Tablet|Mobile/i.test(navigator.userAgent)||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}catch{return!1}})();window.addEventListener("unhandledrejection",r=>{try{const t=r.reason,e=t&&t.message?t.message:String(t);if(e&&e.includes("If you see this error we have a bug")){console.warn("Suppressed Chromium UnknownError:",e),r.preventDefault&&r.preventDefault();return}}catch{}});class Cr{constructor(){this.scene=new wp,this.scene.background=new bt(8900331),this.scene.fog=new Sr(8900331,20,100),this._animationStarted=!1,this._selectedMode="survival",this._defaultRandom=Math.random,this._currentRandomSeed=null,this.matchSettings=null,this.lastPlaySettings=null,this.renderer=new qa({antialias:!0});const t=tn?1:1.5;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nl,document.getElementById("game-container").appendChild(this.renderer.domElement),this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0,this.forceFixedMultiplayerSpawn=!1;const e=new da(16777215,.6);this.scene.add(e);const i=new ua(16777215,.8);i.position.set(50,100,50),i.castShadow=!0,i.shadow.camera.left=-100,i.shadow.camera.right=100,i.shadow.camera.top=100,i.shadow.camera.bottom=-100,i.shadow.camera.near=.1,i.shadow.camera.far=160,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,this.scene.add(i),this.camera=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),this.clock=new Pp,this._pickRaycaster=new Ke,this._objectClickHandler=null,this._objectClickTarget=null,this._longPressTimer=null,this.hotkeyModalVisible=!1,this.isPaused=!1,this.pauseMenu=document.getElementById("pause-menu"),this.bgAudio=null,this.bgMusicVolume=.5,this._endSequenceAudio=null,this._prevBgVolume=null,document.addEventListener("keydown",n=>{if(n.code==="Escape"&&this.togglePause(),this.player&&this.player.gameMode==="studio")if(n.code==="KeyL")try{this.spawnStudioDrops()}catch(s){console.warn("Studio drop failed:",s)}else n.code==="KeyH"&&this.toggleHotkeyModal(!this.hotkeyModalVisible)}),this.setupMenu(),this.setupLongPressMenu(),document.addEventListener("pointerlockerror",n=>{n.preventDefault&&n.preventDefault(),console.warn("Pointer lock request failed or was cancelled.")})}applyDeterministicRandom(t){if(!t)return;this._currentRandomSeed=t;const e=String(t);let i=1779033703^e.length;for(let o=0;o<e.length;o++)i=Math.imul(i^e.charCodeAt(o),3432918353),i=i<<13|i>>>19;i=Math.imul(i^i>>>16,2246822507),i=(i^i>>>13)>>>0;let n=i;Math.random=()=>{n=n+1831565813|0;let o=Math.imul(n^n>>>15,1|n);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}spawnStudioDrops(){if(!(!this.itemManager||!this.player||this.player.gameMode!=="studio"))try{for(let t=0;t<3;t++)this.itemManager.spawnMatrixDropNearPlayer()}catch(t){console.warn("spawnStudioDrops error:",t)}}toggleHotkeyModal(t){const e=document.getElementById("hotkey-modal");e&&(e.classList.toggle("hidden",!t),e.setAttribute("aria-hidden",t?"false":"true"),this.hotkeyModalVisible=t)}toggleTouchLookArea(t){try{if(!this.touchControls)return;t?this.touchControls.lookArea?this.touchControls.lookArea.style.display="":this.touchControls.rebuildLookArea&&this.touchControls.rebuildLookArea():this.touchControls.destroyLookArea?this.touchControls.destroyLookArea():this.touchControls.lookArea&&(this.touchControls.lookArea.style.display="none")}catch{}}setHotbarVisible(t){const e=document.getElementById("hotbar");e&&(e.style.display=t?"flex":"none")}setMenuOpenState(t){document.body.classList.toggle("menu-open",!!t)}updateDebugToggleVisibility(t){const e=document.getElementById("debug-toggle-btn");if(e&&(e.classList.toggle("hidden",!t),!t&&window.debugOverlay&&typeof window.debugOverlay.hide=="function")){try{window.debugOverlay.hide()}catch{}try{localStorage.removeItem("showDebugOverlay")}catch{}}}assignMultiplayerSpawn(){if(!this.player||!this.world)return;const t=this.world&&typeof this.world.halfMapSize=="number"?this.world.halfMapSize-5:100;let e=null;const i=this._defaultRandom||Math.random;if(this.forceFixedMultiplayerSpawn)e={x:0,y:this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(0,0):0,z:0};else for(let n=0;n<12;n++){const s=(i()*2-1)*t,o=(i()*2-1)*t;let a=0;if(this.world&&typeof this.world.getHeightAt=="function"&&(a=this.world.getHeightAt(s,o)),!this.multiplayer||this.multiplayer.others.size===0||Array.from(this.multiplayer.others.values()).every(c=>{if(!c||!c.position)return!0;const h=c.position.x-s,u=c.position.z-o;return Math.sqrt(h*h+u*u)>15})){e={x:s,y:a,z:o};break}}e||(e={x:0,y:0,z:0}),this.player.mesh.position.set(e.x,e.y,e.z),this.player.controls&&this.player.controls.getObject&&this.player.controls.getObject().position.set(e.x,e.y+1.6,e.z),this.player.camera&&this.player.camera.position.set(e.x,e.y+1.6,e.z)}setupMultiplayerLobbyUI(){const t=document.getElementById("mp-lobby"),e=document.getElementById("mp-start-btn"),i=document.getElementById("mp-lobby-status");if(!t||!e||!i)return;t.classList.remove("hidden");const n=this.multiplayer&&this.multiplayer.roomCode?this.multiplayer.roomCode:"PUBLIC";i.innerText=`Waiting in lobby (Room: ${n})`,e.classList.toggle("hidden",!(this.multiplayer&&this.multiplayer.isHost)),e.onclick=()=>{this.multiplayer&&this.multiplayer.isHost&&(this.beginLobbyCountdown(10),this.multiplayer.sendStart())},this.lobbyCountdown=0,this.updateLobbyUI(this.multiplayer?this.multiplayer.isHost:!1)}updateLobbyUI(t){const e=document.getElementById("mp-start-btn");e&&e.classList.toggle("hidden",!t)}beginLobbyCountdown(t=10){this.matchPhase="countdown",this.lobbyCountdown=t;const e=document.getElementById("mp-lobby"),i=document.getElementById("mp-lobby-countdown");e&&e.classList.remove("hidden"),i&&(i.innerText=`Starting in ${Math.ceil(this.lobbyCountdown)}...`)}startMultiplayerMatch(){this.matchPhase="live",this.multiplayer&&(this.multiplayer.matchLive=!0),this.refreshMultiplayerTargets();const t=document.getElementById("mp-lobby");t&&t.classList.add("hidden"),this.lobbyCountdown=0}checkMultiplayerVictory(){if(!this.multiplayer)return;const t=this.multiplayer.deadPeers||new Set;let e=0;this.multiplayer.others&&this.multiplayer.others.size>0&&this.multiplayer.others.forEach((s,o)=>{t.has(o)||s&&s.userData&&s.userData.dead||(e+=1)});const i=this.player&&!this.player.isDead;(i?1:0)+e===1&&i&&(this.hud&&typeof this.hud.showVictory=="function"&&this.hud.showVictory(),this.multiplayer&&(this.multiplayer.matchLive=!1))}setupMenu(){const t=document.getElementById("main-menu"),e=document.getElementById("play-btn"),i=document.getElementById("setting-difficulty"),n=document.getElementById("setting-enemies"),s=document.getElementById("setting-storm"),o=document.getElementById("setting-storm-enabled"),a=document.getElementById("setting-map-size"),l=document.getElementById("map-size-val"),c=document.getElementById("setting-debug"),h=document.getElementById("setting-minimap"),u=document.getElementById("setting-music-volume"),d=document.getElementById("setting-music-volume-val"),p=document.getElementById("setting-camera"),g=document.getElementById("setting-touch-controls"),_=document.getElementById("setting-fullscreen"),m=document.getElementById("setting-game-mode"),f=document.getElementById("quit-btn"),x=document.getElementById("active-mode-label"),v=document.getElementById("active-mode-chip"),S=document.getElementById("float-btn"),C=document.getElementById("setting-openai-key"),T=document.getElementById("setting-groq-key"),A=document.getElementById("setting-nvidia-key"),I=document.getElementById("setting-mp-server"),M=document.getElementById("setting-mp-seed"),w=document.getElementById("setting-mp-room"),B=document.getElementById("mp-room-generate"),O=document.getElementById("setting-mp-nickname"),q=document.getElementById("setting-mp-color"),P=document.getElementById("setting-mp-zombies"),N=document.getElementById("setting-mp-fixed-spawn"),H=document.getElementById("setting-language"),K=document.getElementById("hotkey-hint"),Y=document.getElementById("hotkey-modal"),X=document.getElementById("hotkey-modal-close"),j=document.getElementById("setting-arena-time"),nt=document.getElementById("arena-time-val"),st=document.getElementById("setting-arena-respawn"),V=document.getElementById("setting-matrix-infinite-ammo"),$=document.getElementById("setting-matrix-show-ui"),at=document.getElementById("setting-matrix-ai-autospawn"),dt=document.getElementById("setting-matrix-ai-hints"),ft=document.getElementById("setting-studio-flight"),Tt=document.getElementById("setting-studio-show-grid"),gt=document.getElementById("enemy-count-val"),wt=document.getElementById("storm-time-val"),zt=(y,D)=>{if(!y||!D)return;const J=()=>{D.innerText=y.value};y.addEventListener("input",J),y.addEventListener("change",J),J()},F=localStorage.getItem("voxel-firecraft-settings");if(F){const y=JSON.parse(F);if(i.value=y.difficulty,n.value=y.enemyCount,s.value=y.stormTime,gt.innerText=y.enemyCount,wt.innerText=y.stormTime,o&&(o.checked=y.stormEnabled!==!1),a&&l){const D=y.mapSize||ms;a.value=D,l.innerText=D}if(y.debugMode&&(c.checked=!0),h&&(h.checked=y.showMinimap!==!1),_&&(_.checked=!!y.fullscreen),y.musicVolume!==void 0&&u&&d){const D=parseInt(y.musicVolume,10);u.value=D,d.innerText=D,this.bgMusicVolume=D/100}if(y.cameraMode&&(p.value=y.cameraMode),y.useTouchControls!==void 0&&g&&(g.checked=!!y.useTouchControls),y.gameMode&&m&&(m.value=y.gameMode),y.gameMode&&(this._selectedMode=y.gameMode),H&&y.language&&(H.value=y.language),C&&(C.value=y.openaiKey||""),T&&(T.value=y.groqKey||""),A&&(A.value=y.nvidiaKey||""),I&&(I.value=y.mpServer||""),M&&(M.value=y.mpSeed||""),w&&(w.value=y.mpRoom||""),O&&(O.value=y.mpNick||""),q&&(q.value=y.mpColor||"#29b6f6"),P&&(P.checked=y.mpZombies!==!1),N&&(N.checked=!!y.mpFixedSpawn),j&&nt){const D=y.arenaTime||parseInt(j.value,10)||180;j.value=D,nt.innerText=D}st&&(st.checked=y.arenaRespawn!==!1),V&&(V.checked=y.matrixInfiniteAmmo!==!1),$&&($.checked=y.matrixShowUI!==!1),at&&(at.checked=y.matrixAiAutospawn!==!1),dt&&(dt.checked=y.matrixAiHints!==!1),ft&&(ft.checked=y.studioFlight!==!1),Tt&&(Tt.checked=y.studioShowGrid!==!1)}zt(n,gt),zt(s,wt),zt(a,l),zt(j,nt),e.onclick=()=>{const y=this._selectedMode||"survival";if(y==="multiplayer"&&this.multiplayer&&!this.multiplayer.isHost&&!this.multiplayer.roomSettings){alert("Waiting for host settings. Please try again in a moment.");return}const D={difficulty:i.value,enemyCount:parseInt(n.value),stormTime:parseInt(s.value),stormEnabled:o?o.checked:!0,mapSize:a?parseInt(a.value):ms,debugMode:c.checked,showMinimap:h?h.checked:!0,musicVolume:u?parseInt(u.value):Math.round(this.bgMusicVolume*100),musicEnabled:document.getElementById("setting-music-enabled")?document.getElementById("setting-music-enabled").checked:!0,cameraMode:p.value,language:H?H.value:"en",useTouchControls:g?g.checked:!1,fullscreen:_?_.checked:!1,gameMode:y,openaiKey:C?C.value:"",groqKey:T?T.value:"",nvidiaKey:A?A.value:"",mpServer:I?I.value:"",mpSeed:M?M.value.trim():"",mpRoom:w?w.value:"",mpNick:O?O.value:"",mpColor:q?q.value:"#29b6f6",mpZombies:P?P.checked:!0,mpFixedSpawn:N?N.checked:!1,arenaTime:j?parseInt(j.value,10):180,arenaRespawn:st?st.checked:!0,matrixInfiniteAmmo:V?V.checked:!0,matrixShowUI:$?$.checked:!0,matrixAiAutospawn:at?at.checked:!0,matrixAiHints:dt?dt.checked:!0,studioFlight:ft?ft.checked:!0,studioShowGrid:Tt?Tt.checked:!0};this.lastPlaySettings=D,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(D)),this.updateDebugToggleVisibility(D.debugMode),t.style.display="none",this.setMenuOpenState(!1),D.musicEnabled!==!1?this.playBackgroundMusic():this.stopBackgroundMusic(),this.requestFullscreenIfNeeded(D.fullscreen);const J=this.player&&this.world&&this.enemyManager,Z=J&&this.player&&this.player.gameMode===y;if(J&&!Z&&this.resetGameState(),this.player&&this.world&&this.enemyManager&&Z){if(this.isPaused=!1,this.clock.getDelta(),e.innerText="PLAY GAME",this.player)try{this.player.lockControls()}catch{}if(this.hud&&(this.hud.settings=D),this.world){this.world.stormEnabled=D.stormEnabled!==!1;const tt=this.world.stormEnabled&&this.world.gameMode!=="matrix"&&this.world.gameMode!=="studio"&&this.world.gameMode!=="matrix-ai";this.world.stormMesh?this.world.stormMesh.visible=tt:tt&&typeof this.world.createStormVisuals=="function"&&this.world.createStormVisuals()}this.setHotbarVisible(!0)}else e.innerText="PLAY GAME",this.startGame(D);if(K){const tt=D&&D.gameMode==="studio";K.classList.toggle("hidden",!tt)}},f&&(f.onclick=()=>{this.multiplayer&&typeof this.multiplayer.dispose=="function"&&this.multiplayer.dispose(),location.reload()}),S&&S.classList.add("hidden"),B&&w&&(B.onclick=()=>{const y=Math.random().toString(36).substr(2,5).toUpperCase();w.value=y;try{const D=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");D.mpRoom=y,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(D))}catch{}}),K&&(K.onclick=()=>this.toggleHotkeyModal(!0)),X&&(X.onclick=()=>this.toggleHotkeyModal(!1)),Y&&Y.addEventListener("click",y=>{y.target===Y&&this.toggleHotkeyModal(!1)}),u&&(u.oninput=()=>{const y=parseInt(u.value,10);if(d&&(d.innerText=y),this.bgMusicVolume=y/100,this.bgAudio)try{this.bgAudio.volume=this.bgMusicVolume}catch{}});const le=document.getElementById("setting-music-enabled");le&&(le.onchange=()=>{le.checked?this.playBackgroundMusic():this.stopBackgroundMusic()}),g&&(g.onchange=()=>{try{const y=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");y.useTouchControls=g.checked,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(y))}catch{}}),this.setHotbarVisible(!1),this.setMenuOpenState(!0);const yt=Array.from(document.querySelectorAll(".tab-btn")),Lt=document.querySelectorAll(".tab-panel"),_t=y=>{if(!y)return;const D=y.getAttribute("data-tab");yt.forEach(Z=>Z.classList.toggle("active",Z===y)),Lt.forEach(Z=>{Z.id===D?Z.classList.remove("hidden"):Z.classList.add("hidden")});const J=y.getAttribute("data-mode");J&&m&&(m.value=J,x&&(x.innerText=y.innerText),v&&(v.innerText=y.innerText)),J&&(this._selectedMode=J)};yt.forEach(y=>y.addEventListener("click",()=>_t(y)));const $t=this._selectedMode||(m?m.value:null),b=($t?yt.find(y=>y.getAttribute("data-mode")===$t):null)||yt.find(y=>y.classList.contains("active"))||yt[0];_t(b)}resetGameState(){if(this.multiplayer&&typeof this.multiplayer.resetMatchState=="function"&&this.multiplayer.resetMatchState(),this.multiplayer&&typeof this.multiplayer.dispose=="function")try{this.multiplayer.dispose()}catch(t){console.warn("Dispose multiplayer failed:",t)}this.multiplayer=null,this.multiplayerEnemyBaseCount=0,this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0,this.isPaused=!1,this.forceFixedMultiplayerSpawn=!1,this.matchSettings=null;try{this.scene.clear()}catch(t){console.warn("Scene clear failed:",t)}try{const t=new da(16777215,.6);this.scene.add(t);const e=new ua(16777215,.8);e.position.set(50,100,50),e.castShadow=!0,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,e.shadow.camera.near=.1,e.shadow.camera.far=160,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,this.scene.add(e)}catch(t){console.warn("Rebuild lights failed:",t)}this.player=null,this.world=null,this.enemyManager=null,this.itemManager=null,this.hud=null,this.matchSettings=null,this.lastPlaySettings=null,Math.random=this._defaultRandom,this._currentRandomSeed=null,this.multiplayer&&typeof this.multiplayer.resetMatchState=="function"&&this.multiplayer.resetMatchState()}startGame(t){this.multiplayerDropTimer=0,this.multiplayerDropCooldown=0,this.multiplayerDropActive=!1,this.matchPhase="live",this.lobbyCountdown=0;const e={...t};if(this.forceFixedMultiplayerSpawn=e.gameMode==="multiplayer"?!!t.mpFixedSpawn:!1,e.gameMode==="multiplayer"){const l=this.multiplayer&&!this.multiplayer.isHost&&this.multiplayer.roomSettings?this.multiplayer.roomSettings:null;if(!this.multiplayer||this.multiplayer.isHost||!l){const c=t.mpSeed||Math.random().toString(36).slice(2);this.matchSettings={mapSize:t.mapSize,enemyCount:t.enemyCount,stormEnabled:!1,seed:c,fixedSpawn:!!t.mpFixedSpawn}}else this.matchSettings=l;this.matchSettings&&(e.mapSize=this.matchSettings.mapSize,e.enemyCount=this.matchSettings.enemyCount,e.stormEnabled=this.matchSettings.stormEnabled,this.forceFixedMultiplayerSpawn=!!this.matchSettings.fixedSpawn,this.applyDeterministicRandom(this.matchSettings.seed||"mp-seed"))}if((e.gameMode==="matrix"||e.gameMode==="studio")&&(e.enemyCount=0,e.skipLoot=!0),e.gameMode==="multiplayer"&&(e.skipLoot=!0,e.stormEnabled=!1,t.mpZombies===!1&&(e.enemyCount=0)),this.multiplayerEnemyBaseCount=e.enemyCount||0,this.player=new Zp(this.camera,this.scene,null,e),t&&t.mpColor){if(this.player.playerColor=t.mpColor,this.player.mesh)try{this.scene.remove(this.player.mesh)}catch{}this.player.createPlayerMesh()}e.gameMode==="multiplayer"?(this.matchPhase="lobby",this.multiplayer&&(this.multiplayer.matchLive=!1)):this.matchPhase="live",this.itemManager=new rm(this.scene,this.player,e),this.world=new Np(this.scene,this.itemManager,e),this.player.worldObjects=this.world.objects,this.player.world=this.world,this.itemManager&&typeof this.itemManager.setWorld=="function"&&this.itemManager.setWorld(this.world);const i=document.getElementById("mp-lobby"),n=document.getElementById("mp-start-btn");if(i&&i.classList.add("hidden"),n&&n.classList.add("hidden"),e.gameMode==="matrix"&&this.itemManager&&typeof this.itemManager.spawnMatrixLoadout=="function"&&this.itemManager.spawnMatrixLoadout(this.player.position.x,this.player.position.z),e.gameMode==="multiplayer"&&this.assignMultiplayerSpawn(),e.gameMode==="multiplayer"?(this.multiplayer=new am({player:this.player,scene:this.scene,url:t.mpServer,nick:t.mpNick||"Player",color:t.mpColor||"#29b6f6",roomCode:t.mpRoom||"PUBLIC",settings:this.matchSettings}),t.mpServer||alert("Multiplayer server URL not set. Please configure it in the Multiplayer tab."),this.player&&typeof this.player.setMultiplayerClient=="function"&&this.player.setMultiplayerClient(this.multiplayer),this.multiplayer&&(this.multiplayer.onPeersChanged=()=>this.refreshMultiplayerTargets(),this.multiplayer.roomCode=t.mpRoom||"PUBLIC",this.multiplayer.onHostChanged=l=>{this.updateLobbyUI(l),l&&this.matchSettings&&this.multiplayer.sendSettings(this.matchSettings)},this.multiplayer.onCountdown=l=>this.beginLobbyCountdown(l),this.multiplayer.onMatchStart=()=>this.startMultiplayerMatch(),this.multiplayer.onSettings=l=>{this.matchSettings=l;const c=this.multiplayer&&this.multiplayer.isHost,u=this.player&&this.player.gameMode==="multiplayer"&&l&&(this.world&&this.world.mapSize!==l.mapSize||this.multiplayerEnemyBaseCount!==l.enemyCount);if(!c&&l&&u&&this.lastPlaySettings){const d={...this.lastPlaySettings,mapSize:l.mapSize,enemyCount:l.enemyCount};this.resetGameState(),this.matchSettings=l,this.applyDeterministicRandom(l.seed||"mp-seed"),this.startGame(d)}},this.multiplayer.isHost&&this.matchSettings&&this.multiplayer.sendSettings(this.matchSettings),this.multiplayer.onPeerDeath=()=>{this.checkMultiplayerVictory()},this.updateLobbyUI(this.multiplayer.isHost),this.multiplayer.isHost&&this.matchSettings&&this.multiplayer.sendSettings(this.matchSettings))):this.multiplayer=null,e.gameMode==="matrix-ai"){e.enemyCount=0,e.skipLoot=!0;const l=document.getElementById("ai-panel");l&&l.classList.remove("hidden")}else{const l=document.getElementById("ai-panel");l&&l.classList.add("hidden")}this.hud=new tm(this.player,this.world,t),this.player&&(this.player.hud=this.hud),this.hud&&typeof this.hud.setRenderer=="function"&&this.hud.setRenderer(this.renderer),this.hud&&typeof this.hud.setMultiplayer=="function"&&this.hud.setMultiplayer(this.multiplayer),this.enemyManager=new nm(this.scene,this.player,this.world,e),e.gameMode==="multiplayer"&&(this.multiplayerEnemyBaseCount=e.enemyCount||0,typeof this.enemyManager.setTargetCount=="function"&&this.enemyManager.setTargetCount(this.multiplayerEnemyBaseCount),this.multiplayer&&(this.multiplayer.onHit=l=>{if(!l||l.targetId!==this.multiplayer.id)return;const c=typeof l.amount=="number"?l.amount:0;c>0&&this.player&&typeof this.player.takeDamage=="function"&&this.player.takeDamage(c)})),this.player.setEnemyManager(this.enemyManager),e.gameMode==="multiplayer"&&(this.refreshMultiplayerTargets(),this.setupMultiplayerLobbyUI()),this.setupObjectInspector(),this.updateDebugToggleVisibility(!!t.debugMode),this.setHotbarVisible(!0);const s=document.getElementById("float-btn");s&&(e.gameMode==="studio"?(s.classList.remove("hidden"),s.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF",s.onclick=()=>{if(this.player.isFloating=!this.player.isFloating,!this.player.isFloating){const l=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=l,this.player.velocity.y=0}s.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF"}):s.classList.add("hidden"));const o=document.getElementById("storm-timer");if(o){const l=e.stormEnabled===!1||e.gameMode==="studio"||e.gameMode==="matrix"||e.gameMode==="matrix-ai"||e.gameMode==="multiplayer";o.classList.toggle("hidden",l)}window.addEventListener("resize",()=>this.onWindowResize(),!1),this.renderer.domElement.addEventListener("pointerdown",()=>{if(!tn){try{const l=document.getElementById("main-menu")&&document.getElementById("main-menu").style.display!=="none",c=this.player&&this.player.gameMode==="studio";if(this.isPaused||l||c)return;this.player&&!this.player.isDead&&this.player.lockControls()}catch(l){console.warn("Pointer lock request skipped or failed:",l)}this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic()}}),this.setupPauseMenu();try{const l=typeof navigator<"u"&&/Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent),c=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;(!!t.useTouchControls||l||c)&&(this.touchControls=new om(this.player))}catch{}if(this.setupStudioPalette(e),this.refreshStudioPaletteVisibility(),this.setupAiPanel(),!tn&&this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch(l){console.warn("Pointer lock on start skipped/failed:",l)}this._animationStarted||(this._animationStarted=!0,this.animate())}setupLongPressMenu(){if(!tn)return;const t=document.getElementById("ui-layer")||document.body;if(!t)return;const e=n=>{try{if(n.touches&&n.touches.length>1)return;this._longPressTimer&&clearTimeout(this._longPressTimer),this._longPressTimer=setTimeout(()=>{this._longPressTimer=null,this.showPauseMenu()},800)}catch{}},i=()=>{this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)};t.addEventListener("touchstart",e,{passive:!0}),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i),t.addEventListener("touchmove",i)}setupAiPanel(){const t=document.getElementById("ai-panel"),e=document.getElementById("ai-send"),i=document.getElementById("ai-prompt"),n=document.getElementById("ai-log");if(!t||!e||!i||!n)return;const s=(o,a="")=>{const l=document.createElement("div");l.textContent=o,a&&(l.className=a),n.appendChild(l),n.scrollTop=n.scrollHeight};e.onclick=()=>{const o=i.value.trim();o&&(s(`You: ${o}`,"ai-user"),s("AI: (stub) Interpreter not wired. Imagine this runs your Three.js code.","ai-bot"),i.value="")}}refreshStudioPaletteVisibility(){const t=document.getElementById("studio-palette");if(!t)return;const e=this.player&&this.player.gameMode==="studio"&&!this.isPaused;t.classList.toggle("hidden",!e)}refreshMultiplayerTargets(){if(!this.player||this.player.gameMode!=="multiplayer"||!this.enemyManager)return;const t=typeof this.multiplayerEnemyBaseCount=="number"?this.multiplayerEnemyBaseCount:this.enemyManager.enemies.length;this.matchPhase==="live"&&typeof this.enemyManager.setTargetCount=="function"?this.enemyManager.setTargetCount(t):this.matchPhase!=="live"&&typeof this.enemyManager.setTargetCount=="function"&&this.enemyManager.setTargetCount(0)}setupStudioPalette(t){const e=document.getElementById("studio-palette");if(!e)return;const i=t&&(t.gameMode==="studio"||t.gameMode==="matrix-ai");if(e.classList.toggle("hidden",!i),!i)return;this.initStudioPaletteDrag(e),e.querySelectorAll("button").forEach(s=>{if(s._boundStudio)return;s._boundStudio=!0;const o=l=>{if(l&&l.stopPropagation&&l.stopPropagation(),!this.player||!this.world)return;const c=s.getAttribute("data-action");if(c==="resume"){if(this.isPaused=!1,this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch{}const g=document.getElementById("main-menu");g&&(g.style.display="none"),this.setMenuOpenState(!1),this.setHotbarVisible(!0);try{e.classList.add("hidden")}catch{}if(this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0),this.player&&this.player.studioSelectionHelper){try{this.player.scene.remove(this.player.studioSelectionHelper)}catch{}this.player.studioSelectionHelper=null}this.refreshStudioPaletteVisibility(),this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic();return}else if(c==="float-toggle"){if(this.player&&this.player.gameMode==="studio"){this.player.isFloating=!this.player.isFloating;const g=this.player.isFloating?"FLOAT ON":"FLOAT OFF";if(s.innerText=g,!this.player.isFloating){const _=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=_,this.player.velocity.y=0}}return}else if(c==="spawn-npc"){this.enemyManager&&typeof this.enemyManager.spawnEnemy=="function"&&this.enemyManager.spawnEnemy(!0);return}else if(c==="drops"){this.spawnStudioDrops();return}else if(c==="menu"){this.showPauseMenu();return}else if(c==="quit"){try{localStorage.removeItem("voxel-firecraft-settings")}catch{}location.reload();return}const h=s.getAttribute("data-prefab"),u=s.getAttribute("data-vehicle-type"),d=s.getAttribute("data-tree-type"),p=s.getAttribute("data-submenu");if(p){const g=document.getElementById(p);g&&g.classList.toggle("hidden");return}if(this.studioSelectedPrefab=h,this.studioSelectedOptions=u?{variant:u}:d?{variant:d}:{},this.toggleTouchLookArea(!1),p){const g=document.getElementById(p);g&&g.classList.add("hidden")}},a=l=>{l&&l.preventDefault&&l.preventDefault(),o(l)};s.addEventListener("pointerdown",a),s.addEventListener("click",l=>{l&&l.preventDefault&&l.preventDefault(),o(l)})})}setupObjectInspector(){const t=this.renderer?this.renderer.domElement:null;if(t){if(this._objectClickHandler&&this._objectClickTarget)try{this._objectClickTarget.removeEventListener("click",this._objectClickHandler),this._objectClickTarget.removeEventListener("pointerdown",this._objectClickHandler)}catch{}this._objectClickTarget=t,this._objectClickHandler=e=>{if(!this.player||!this.hud)return;const i=this.player.gameMode||"survival";if(i==="matrix")return;if(i==="studio"&&this.studioSelectedPrefab){const d=t.getBoundingClientRect(),p=(e.clientX-d.left)/d.width*2-1,g=-((e.clientY-d.top)/d.height*2-1),_=new Ke;_.setFromCamera(new St(p,g),this.camera);const m=_.intersectObjects(this.world.objects,!0);let f=null;for(const x of m)if(x.object&&x.object.userData&&x.object.userData.gameName==="Ground"){f=x;break}if(!f){const x=new Ke;x.setFromCamera(new St(0,0),this.camera);const v=x.intersectObjects(this.world.objects,!0);for(const S of v)if(S.object&&S.object.userData&&S.object.userData.gameName==="Ground"){f=S;break}}if(f&&typeof this.world.spawnPrefab=="function"){const x=this.studioSelectedOptions||{};this.world.spawnPrefab(this.studioSelectedPrefab,f.point.x,f.point.z,x)}this.studioSelectedPrefab=null,this.studioSelectedOptions=null,this.toggleTouchLookArea(!0);return}let n=0,s=0;if(this.player.controls&&this.player.controls.isLocked)n=0,s=0;else{const d=t.getBoundingClientRect();n=(e.clientX-d.left)/d.width*2-1,s=-((e.clientY-d.top)/d.height*2-1)}this._pickRaycaster.setFromCamera(new St(n,s),this.camera);const o=[];if(this.world&&Array.isArray(this.world.objects)&&o.push(...this.world.objects),this.itemManager&&Array.isArray(this.itemManager.items)&&o.push(...this.itemManager.items),this.enemyManager&&Array.isArray(this.enemyManager.enemies)&&this.enemyManager.enemies.forEach(d=>{d&&d.mesh&&o.push(d.mesh)}),o.length===0)return;const a=this._pickRaycaster.intersectObjects(o,!0);if(!a.length)return;let l=a[0].object,c=null;for(;l;){if(l.userData&&(l.userData.gameId||l.userData.gameid)&&l.userData.gameName){c=l.userData;break}l=l.parent}if(!c)return;const h=c.gameName||"Object",u=c.gameId||c.gameid||"---";typeof this.hud.showSelectionInfo=="function"&&this.hud.showSelectionInfo(h,u)},t.addEventListener("click",this._objectClickHandler),t.addEventListener("pointerdown",this._objectClickHandler)}}initStudioPaletteDrag(t){if(!t||t._dragInit)return;t._dragInit=!0;const e=t.querySelector(".palette-title")||t;let i=!1,n=0,s=0,o=0,a=0,l=null;t.style.touchAction="none";const c=u=>{if(!i){const _=Math.abs(u.clientX-o),m=Math.abs(u.clientY-a);if(_<3&&m<3)return;i=!0,l&&(t.style.right="auto",t.style.bottom="auto",t.style.position="fixed",t.style.width=`${l.width}px`,t.style.minWidth=`${l.width}px`,t.style.maxWidth=`${l.width}px`,t.style.left=`${l.left}px`,t.style.top=`${l.top}px`)}const d=t.getBoundingClientRect(),p=Math.max(0,Math.min(window.innerWidth-d.width,u.clientX-n)),g=Math.max(0,Math.min(window.innerHeight-d.height,u.clientY-s));t.style.left=`${p}px`,t.style.top=`${g}px`},h=()=>{i=!1,e.releasePointerCapture&&e.releasePointerCapture(e._dragPointerId),document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",h)};e.addEventListener("pointerdown",u=>{try{u.preventDefault()}catch{}const d=t.getBoundingClientRect();l=d,n=u.clientX-d.left,s=u.clientY-d.top,o=u.clientX,a=u.clientY,i=!1,e._dragPointerId=u.pointerId;try{e.setPointerCapture(u.pointerId)}catch{}document.addEventListener("pointermove",c),document.addEventListener("pointerup",h)})}togglePause(){if(this.player){if(this.player.controls&&this.player.controls.isLocked){this.showPauseMenu();return}this.isPaused=!this.isPaused,this.isPaused?this.pauseBackgroundMusic():this.playBackgroundMusic()}}setupPauseMenu(){document.addEventListener("keydown",e=>{e.code==="Escape"&&this.player&&!this.player.isDead&&(e.preventDefault(),this.showPauseMenu())});const t=document.getElementById("pause-menu");t&&t.remove()}showPauseMenu(){this.isPaused=!0,this.player.controls&&this.player.controls.isLocked&&this.player.controls.unlock(),this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps(),this.pauseBackgroundMusic();const t=document.getElementById("main-menu");if(t){t.style.display="flex",this.setMenuOpenState(!0);const e=document.getElementById("play-btn");e&&this.player&&(e.innerText="RESUME GAME")}if(this.setHotbarVisible(!1),this.player&&this.player.gameMode==="studio"){const e=document.getElementById("studio-palette");e&&e.classList.remove("hidden")}}playBackgroundMusic(){try{this.bgAudio||(this.bgAudio=new Audio(Up),this.bgAudio.loop=!0,this.bgAudio.volume=this.bgMusicVolume,this.bgAudio.preload="auto");const t=this.bgAudio.play();t&&typeof t.then=="function"&&t.catch(()=>{})}catch(t){console.warn("Could not play background music:",t)}}pauseBackgroundMusic(){if(this.bgAudio&&!this.bgAudio.paused)try{this.bgAudio.pause()}catch{}}stopBackgroundMusic(){if(this.bgAudio)try{this.bgAudio.pause(),this.bgAudio.currentTime=0}catch{}}requestFullscreenIfNeeded(t){if(!t)return;const e=document;if(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)return;const n=document.documentElement||document.body,s=n.requestFullscreen||n.webkitRequestFullscreen||n.mozRequestFullScreen||n.msRequestFullscreen;s?s.call(n).catch(o=>{console.warn("Fullscreen request failed:",o),tn&&alert("Fullscreen may not be supported on this mobile device.")}):tn&&alert("Fullscreen is not available on this mobile device.")}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());try{const t=this.clock.getDelta(),e=Math.min(t,.1),i=!!(this.touchControls&&this.touchControls.enabled),n=!!(this.player&&this.player.controls&&this.player.controls.isLocked),s=!!(this.player&&this.player.gameMode==="studio");if(!this.isPaused&&this.player&&(n||i||s)){try{this.player.update(e)}catch(o){console.error("Error in player.update:",o)}try{const o=this.world.update(e,this.player.position);!(this.player&&this.player.gameMode==="studio")&&o&&o.inStorm?this.player.takeDamage(1*e):this.player&&typeof this.player.clearHurtQueue=="function"&&this.player.clearHurtQueue()}catch(o){console.error("Error in world.update:",o)}try{this.enemyManager.update(e)}catch(o){console.error("Error in enemyManager.update:",o)}try{this.itemManager.update(e)}catch(o){console.error("Error in itemManager.update:",o)}if(this.player&&this.player.gameMode==="multiplayer"){if(this.matchPhase==="live")this.multiplayerDropTimer+=e,this.multiplayerDropTimer>=60&&(this.multiplayerDropActive=!0),this.multiplayerDropActive&&this.itemManager&&(this.multiplayerDropCooldown-=e,this.multiplayerDropCooldown<=0&&(this.multiplayerDropCooldown=8,typeof this.itemManager.spawnMatrixDropNearPlayer=="function"&&this.itemManager.spawnMatrixDropNearPlayer()));else if(this.matchPhase==="countdown"){this.lobbyCountdown-=e;const o=document.getElementById("mp-lobby-countdown");this.lobbyCountdown<0&&(this.lobbyCountdown=0),o&&(o.innerText=`Starting in ${Math.ceil(this.lobbyCountdown)}...`),this.lobbyCountdown<=0&&this.startMultiplayerMatch()}}try{this.multiplayer&&typeof this.multiplayer.update=="function"&&this.multiplayer.update(e)}catch(o){console.error("Error in multiplayer.update:",o)}try{this.hud.update()}catch(o){console.error("Error in hud.update:",o)}try{this.touchControls&&typeof this.touchControls.update=="function"&&this.touchControls.update()}catch(o){console.error("Error in touchControls.update:",o)}try{if(!(this.player&&(this.player.gameMode==="matrix"||this.player.gameMode==="studio"||this.player.gameMode==="multiplayer"))&&this.enemyManager.enemies.length===0&&!this.player.isDead&&!this.victoryShown){this.victoryShown=!0;try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}this.hud.showVictory(),this.player.controls.unlock()}else this.player&&this.player.gameMode==="multiplayer"&&this.matchPhase==="live"&&!this.player.isDead&&!this.victoryShown&&(this.multiplayer?this.multiplayer.others.size:0)===0&&(this.victoryShown=!0,this.hud.showVictory(),this.player.controls&&this.player.controls.unlock&&this.player.controls.unlock())}catch(o){console.error("Error in victory check:",o)}}this.renderer.render(this.scene,this.camera)}catch(t){try{console.error("Unhandled error in Game.animate:",t,{playerExists:!!this.player,playerWeaponCount:this.player?this.player.weapons?this.player.weapons.length:"no-weapons":"no-player",currentWeaponIndex:this.player?this.player.currentWeaponIndex:"no-player",hudExists:!!this.hud,hudSettings:this.hud?this.hud.settings:null});try{this._logRenderMaterialDiagnostics(t)}catch(e){console.error("Error during render diagnostics:",e)}}catch(e){console.error("Error logging animate failure:",e)}return}}}Cr.prototype.playEndSequence=function(r,t={}){try{if(this._playingEndSequence)return;if(this._playingEndSequence=!0,this.bgAudio)try{this._prevBgVolume=this.bgAudio.volume,this.bgAudio.pause()}catch{this._prevBgVolume=this.bgMusicVolume}if(this._endSequenceAudio){try{this._endSequenceAudio.pause(),this._endSequenceAudio.currentTime=0}catch{}this._endSequenceAudio=null}const e=new Audio(r);e.loop=t.loop||!1,e.volume=t.volume!==void 0?t.volume:1,e.preload="auto",this._endSequenceAudio=e,e.load(),setTimeout(()=>{const i=e.play();i&&typeof i.then=="function"&&i.catch(n=>{console.log("Audio playback blocked, waiting for user interaction:",n);const s=()=>{e.readyState<2&&e.load(),e.play().catch(()=>{}),document.removeEventListener("touchstart",s),document.removeEventListener("click",s)};document.addEventListener("touchstart",s,{once:!0}),document.addEventListener("click",s,{once:!0})})},100),e.addEventListener("ended",()=>{try{this.bgAudio&&this._prevBgVolume!==null&&(this.bgAudio.volume=this._prevBgVolume)}catch{}this._endSequenceAudio=null,this._prevBgVolume=null,this._playingEndSequence=!1})}catch(e){console.warn("playEndSequence error:",e)}};Cr.prototype._logRenderMaterialDiagnostics=function(r){try{const t=[];let e=0;this.scene.traverse(i=>{if(i.isMesh){e++;const n=i.material;if(!n){t.push({uuid:i.uuid,name:i.name||i.userData&&i.userData.gameName||"mesh",issue:"no-material"});return}const s=o=>({type:o.type||o.constructor&&o.constructor.name||"Unknown",isShaderMaterial:!!o.isShaderMaterial,isStandardMaterial:!!o.isMeshStandardMaterial,hasEmissive:o.emissive!==void 0,uniformsKeys:o.uniforms?Object.keys(o.uniforms):null,userData:o.userData||null});Array.isArray(n)?t.push({uuid:i.uuid,name:i.name||i.userData&&i.userData.gameName||"mesh",materials:n.map(s)}):t.push({uuid:i.uuid,name:i.userData&&i.userData.gameName||i.name||"mesh",material:s(n)})}}),console.error("Render diagnostics:",{originalError:r&&r.toString(),totalMeshes:e,sampleProblems:t.slice(0,30),note:"Look for materials missing expected uniforms (shader/standard) or meshes without material."})}catch(t){console.error("Failed collecting render diagnostics:",t)}};window.game=new Cr;(function(){try{const t=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}"),e=t&&t.debugMode||localStorage.getItem("showDebugOverlay")==="true"||!!window.DEBUG_OVERLAY;window.debugOverlay=lm({autoShow:!!e}),window.addEventListener("keydown",i=>{if(i.key==="`"&&window.debugOverlay){const n=document.getElementById("debug-overlay");n&&n.classList.contains("hidden")?window.debugOverlay.show():window.debugOverlay&&window.debugOverlay.hide()}});try{let i=document.getElementById("debug-toggle-btn");i||(i=document.createElement("button"),i.id="debug-toggle-btn",i.title="Debug logs",i.innerText="DBG",document.body.appendChild(i));const n=!0;i.addEventListener("click",s=>{try{const o=document.getElementById("debug-overlay");o&&o.classList.contains("hidden")?(window.debugOverlay&&window.debugOverlay.show(),localStorage.setItem("showDebugOverlay","true")):(window.debugOverlay&&window.debugOverlay.hide(),localStorage.removeItem("showDebugOverlay"))}catch(o){console.warn("debug toggle error",o)}})}catch{}}catch(t){console.warn("debugOverlay init failed",t)}})();window.addEventListener("game-touch-look",r=>{try{const t=r.detail||{dx:0,dy:0},e=.003;if(window.game&&window.game.player)try{if(typeof window.game.player.rotateCamera=="function")window.game.player.rotateCamera(t.dx*e,t.dy*e);else{window.game.player._touchYaw=(window.game.player._touchYaw||0)-t.dx*.01,window.game.player._touchPitch=(window.game.player._touchPitch||0)-t.dy*.01;const n=Math.PI/2-.1;window.game.player._touchPitch=Math.max(-n,Math.min(n,window.game.player._touchPitch))}}catch{}}catch{}});
