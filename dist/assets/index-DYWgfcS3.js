(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ur="160",Ja=0,Ir=1,Qa=2,tc=0,fa=1,ec=2,en=3,mn=0,Re=1,Oe=2,dn=0,ni=1,Qs=2,Ur=3,Nr=4,nc=5,Tn=100,ic=101,sc=102,Fr=103,Br=104,rc=200,oc=201,ac=202,cc=203,tr=204,er=205,lc=206,hc=207,uc=208,dc=209,fc=210,pc=211,mc=212,gc=213,_c=214,vc=0,xc=1,Mc=2,rs=3,yc=4,Sc=5,Ec=6,wc=7,dr=0,Tc=1,bc=2,fn=0,Ac=1,Rc=2,Cc=3,Pc=4,Lc=5,Dc=6,pa=300,oi=301,ai=302,nr=303,ir=304,ds=306,sr=1e3,Xe=1001,rr=1002,be=1003,Or=1004,Ms=1005,Be=1006,Ic=1007,Ti=1008,pn=1009,Uc=1010,Nc=1011,fr=1012,ma=1013,hn=1014,un=1015,bi=1016,ga=1017,_a=1018,An=1020,Fc=1021,qe=1023,Bc=1024,Oc=1025,Rn=1026,ci=1027,kc=1028,va=1029,zc=1030,xa=1031,Ma=1033,ys=33776,Ss=33777,Es=33778,ws=33779,kr=35840,zr=35841,Gr=35842,Hr=35843,ya=36196,Vr=37492,Wr=37496,Xr=37808,qr=37809,Yr=37810,jr=37811,Kr=37812,$r=37813,Zr=37814,Jr=37815,Qr=37816,to=37817,eo=37818,no=37819,io=37820,so=37821,Ts=36492,ro=36494,oo=36495,Gc=36283,ao=36284,co=36285,lo=36286,Sa=3e3,Cn=3001,Hc=3200,Vc=3201,pr=0,Wc=1,ke="",me="srgb",sn="srgb-linear",mr="display-p3",fs="display-p3-linear",os="linear",Jt="srgb",as="rec709",cs="p3",Un=7680,ho=519,Xc=512,qc=513,Yc=514,Ea=515,jc=516,Kc=517,$c=518,Zc=519,uo=35044,fo="300 es",or=1035,nn=2e3,ls=2001;class In{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let po=1234567;const Mi=Math.PI/180,Ai=180/Math.PI;function hi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[s&255]+ve[s>>8&255]+ve[s>>16&255]+ve[s>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function gr(s,t){return(s%t+t)%t}function Jc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Qc(s,t,e){return s!==t?(e-s)/(t-s):0}function yi(s,t,e){return(1-e)*s+e*t}function tl(s,t,e,n){return yi(s,t,1-Math.exp(-e*n))}function el(s,t=1){return t-Math.abs(gr(s,t*2)-t)}function nl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function il(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function sl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function rl(s,t){return s+Math.random()*(t-s)}function ol(s){return s*(.5-Math.random())}function al(s){s!==void 0&&(po=s);let t=po+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cl(s){return s*Mi}function ll(s){return s*Ai}function ar(s){return(s&s-1)===0&&s!==0}function hl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ul(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const pe={DEG2RAD:Mi,RAD2DEG:Ai,generateUUID:hi,clamp:Ae,euclideanModulo:gr,mapLinear:Jc,inverseLerp:Qc,lerp:yi,damp:tl,pingpong:el,smoothstep:nl,smootherstep:il,randInt:sl,randFloat:rl,randFloatSpread:ol,seededRandom:al,degToRad:cl,radToDeg:ll,isPowerOfTwo:ar,ceilPowerOfTwo:hl,floorPowerOfTwo:hs,setQuaternionFromProperEuler:ul,normalize:Ee,denormalize:Qn};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,r,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],M=i[1],v=i[4],S=i[7],R=i[2],b=i[5],A=i[8];return r[0]=o*_+a*M+c*R,r[3]=o*m+a*v+c*b,r[6]=o*d+a*S+c*A,r[1]=l*_+h*M+u*R,r[4]=l*m+h*v+u*b,r[7]=l*d+h*S+u*A,r[2]=f*_+p*M+g*R,r[5]=f*m+p*v+g*b,r[8]=f*d+p*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bs.makeScale(t,e)),this}rotate(t){return this.premultiply(bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bs=new Ht;function wa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dl(){const s=us("canvas");return s.style.display="block",s}const mo={};function Si(s){s in mo||(mo[s]=!0,console.warn(s))}const go=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_o=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Di={[sn]:{transfer:os,primaries:as,toReference:s=>s,fromReference:s=>s},[me]:{transfer:Jt,primaries:as,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fs]:{transfer:os,primaries:cs,toReference:s=>s.applyMatrix3(_o),fromReference:s=>s.applyMatrix3(go)},[mr]:{transfer:Jt,primaries:cs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(_o),fromReference:s=>s.applyMatrix3(go).convertLinearToSRGB()}},fl=new Set([sn,fs]),jt={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!fl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Di[t].toReference,i=Di[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Di[s].primaries},getTransfer:function(s){return s===ke?os:Di[s].transfer}};function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Nn;class Ta{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Nn===void 0&&(Nn=us("canvas")),Nn.width=t.width,Nn.height=t.height;const n=Nn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Nn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pl=0;class ba{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=hi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Rs(i[o].image)):r.push(Rs(i[o]))}else r=Rs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ta.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ml=0;class Ue extends In{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Xe,i=Xe,r=Be,o=Ti,a=qe,c=pn,l=Ue.DEFAULT_ANISOTROPY,h=ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ml++}),this.uuid=hi(),this.name="",this.source=new ba(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Cn?me:ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case Xe:t.x=t.x<0?0:1;break;case rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case Xe:t.y=t.y<0?0:1;break;case rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===me?Cn:Sa}set encoding(t){Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Cn?me:ke}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=pa;Ue.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,i=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(p+1)/2,R=(d+1)/2,b=(h+f)/4,A=(u+_)/4,I=(g+m)/4;return v>S&&v>R?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=A/n):S>R?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=b/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=I/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gl extends In{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Si("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cn?me:ke),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ba(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Aa extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*_,M=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,d*M);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}const S=a*M;if(c=c*m+f*S,l=l*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cs.copy(this).projectOnVector(t),this.sub(Cs)}reflect(t){return this.sub(Cs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new C,vo=new Ri;class ui{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ze):ze.fromBufferAttribute(r,o),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ii.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ii.copy(n.boundingBox)),Ii.applyMatrix4(t.matrixWorld),this.union(Ii)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mi),Ui.subVectors(this.max,mi),Fn.subVectors(t.a,mi),Bn.subVectors(t.b,mi),On.subVectors(t.c,mi),rn.subVectors(Bn,Fn),on.subVectors(On,Bn),xn.subVectors(Fn,On);let e=[0,-rn.z,rn.y,0,-on.z,on.y,0,-xn.z,xn.y,rn.z,0,-rn.x,on.z,0,-on.x,xn.z,0,-xn.x,-rn.y,rn.x,0,-on.y,on.x,0,-xn.y,xn.x,0];return!Ps(e,Fn,Bn,On,Ui)||(e=[1,0,0,0,1,0,0,0,1],!Ps(e,Fn,Bn,On,Ui))?!1:(Ni.crossVectors(rn,on),e=[Ni.x,Ni.y,Ni.z],Ps(e,Fn,Bn,On,Ui))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($e),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $e=[new C,new C,new C,new C,new C,new C,new C,new C],ze=new C,Ii=new ui,Fn=new C,Bn=new C,On=new C,rn=new C,on=new C,xn=new C,mi=new C,Ui=new C,Ni=new C,Mn=new C;function Ps(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Mn.fromArray(s,r);const a=i.x*Math.abs(Mn.x)+i.y*Math.abs(Mn.y)+i.z*Math.abs(Mn.z),c=t.dot(Mn),l=e.dot(Mn),h=n.dot(Mn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const vl=new ui,gi=new C,Ls=new C;class Ci{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gi.subVectors(t,this.center);const e=gi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ls.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gi.copy(t.center).add(Ls)),this.expandByPoint(gi.copy(t.center).sub(Ls))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new C,Ds=new C,Fi=new C,an=new C,Is=new C,Bi=new C,Us=new C;class ps{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ds.copy(t).add(e).multiplyScalar(.5),Fi.copy(e).sub(t).normalize(),an.copy(this.origin).sub(Ds);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Fi),a=an.dot(this.direction),c=-an.dot(Fi),l=an.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ds).addScaledVector(Fi,f),p}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),i=Ze.dot(Ze)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,i,r){Is.subVectors(e,t),Bi.subVectors(n,t),Us.crossVectors(Is,Bi);let o=this.direction.dot(Us),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,t);const c=a*this.direction.dot(Bi.crossVectors(an,Bi));if(c<0)return null;const l=a*this.direction.dot(Is.cross(an));if(l<0||c+l>o)return null;const h=-a*an.dot(Us);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,i,r,o,a,c,l,h,u,f,p,g,_,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,p,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/kn.setFromMatrixColumn(t,0).length(),r=1/kn.setFromMatrixColumn(t,1).length(),o=1/kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xl,t,Ml)}lookAt(t,e,n){const i=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),cn.crossVectors(n,Le),cn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),cn.crossVectors(n,Le)),cn.normalize(),Oi.crossVectors(Le,cn),i[0]=cn.x,i[4]=Oi.x,i[8]=Le.x,i[1]=cn.y,i[5]=Oi.y,i[9]=Le.y,i[2]=cn.z,i[6]=Oi.z,i[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],v=n[7],S=n[11],R=n[15],b=i[0],A=i[4],I=i[8],y=i[12],w=i[1],z=i[5],G=i[9],J=i[13],L=i[2],U=i[6],H=i[10],q=i[14],X=i[3],Y=i[7],j=i[11],et=i[15];return r[0]=o*b+a*w+c*L+l*X,r[4]=o*A+a*z+c*U+l*Y,r[8]=o*I+a*G+c*H+l*j,r[12]=o*y+a*J+c*q+l*et,r[1]=h*b+u*w+f*L+p*X,r[5]=h*A+u*z+f*U+p*Y,r[9]=h*I+u*G+f*H+p*j,r[13]=h*y+u*J+f*q+p*et,r[2]=g*b+_*w+m*L+d*X,r[6]=g*A+_*z+m*U+d*Y,r[10]=g*I+_*G+m*H+d*j,r[14]=g*y+_*J+m*q+d*et,r[3]=M*b+v*w+S*L+R*X,r[7]=M*A+v*z+S*U+R*Y,r[11]=M*I+v*G+S*H+R*j,r[15]=M*y+v*J+S*q+R*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*p-n*c*p)+_*(+e*c*p-e*l*f+r*o*f-i*o*p+i*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,v=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,S=h*_*l-g*u*l+g*a*p-o*_*p-h*a*d+o*u*d,R=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,b=e*M+n*v+i*S+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=M*A,t[1]=(_*f*r-u*m*r-_*i*p+n*m*p+u*i*d-n*f*d)*A,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*d+n*c*d)*A,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*p-n*c*p)*A,t[4]=v*A,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*A,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*d-e*c*d)*A,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*p+e*c*p)*A,t[8]=S*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*A,t[12]=R*A,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*A,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,M=c*l,v=c*h,S=c*u,R=n.x,b=n.y,A=n.z;return i[0]=(1-(_+d))*R,i[1]=(p+S)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(p-S)*b,i[5]=(1-(f+d))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(g+v)*A,i[9]=(m-M)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=kn.set(i[0],i[1],i[2]).length();const o=kn.set(i[4],i[5],i[6]).length(),a=kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ge.copy(this);const l=1/r,h=1/o,u=1/a;return Ge.elements[0]*=l,Ge.elements[1]*=l,Ge.elements[2]*=l,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,e.setFromRotationMatrix(Ge),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=nn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===nn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ls)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=nn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,p=(n+i)*h;let g,_;if(a===nn)g=(o+r)*u,_=-2*u;else if(a===ls)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const kn=new C,Ge=new re,xl=new C(0,0,0),Ml=new C(1,1,1),cn=new C,Oi=new C,Le=new C,xo=new re,Mo=new Ri;class di{constructor(t=0,e=0,n=0,i=di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class _r{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yl=0;const yo=new C,zn=new Ri,Je=new re,ki=new C,_i=new C,Sl=new C,El=new Ri,So=new C(1,0,0),Eo=new C(0,1,0),wo=new C(0,0,1),wl={type:"added"},Tl={type:"removed"};class fe extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new C,e=new di,n=new Ri,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Ht}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.multiply(zn),this}rotateOnWorldAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.premultiply(zn),this}rotateX(t){return this.rotateOnAxis(So,t)}rotateY(t){return this.rotateOnAxis(Eo,t)}rotateZ(t){return this.rotateOnAxis(wo,t)}translateOnAxis(t,e){return yo.copy(t).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(So,t)}translateY(t){return this.translateOnAxis(Eo,t)}translateZ(t){return this.translateOnAxis(wo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ki.copy(t):ki.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(_i,ki,this.up):Je.lookAt(ki,_i,this.up),this.quaternion.setFromRotationMatrix(Je),i&&(Je.extractRotation(i.matrixWorld),zn.setFromRotationMatrix(Je),this.quaternion.premultiply(zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(wl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,t,Sl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,El,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new C(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new C,Qe=new C,Ns=new C,tn=new C,Gn=new C,Hn=new C,To=new C,Fs=new C,Bs=new C,Os=new C;let zi=!1;class Ve{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),He.subVectors(t,e),i.cross(He);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){He.subVectors(i,e),Qe.subVectors(n,e),Ns.subVectors(t,e);const o=He.dot(He),a=He.dot(Qe),c=He.dot(Ns),l=Qe.dot(Qe),h=Qe.dot(Ns),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(t,e,n,i,r,o,a,c){return zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zi=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,tn.x),c.addScaledVector(o,tn.y),c.addScaledVector(a,tn.z),c)}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),Qe.subVectors(t,e),He.cross(Qe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),He.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zi=!0),Ve.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Gn.subVectors(i,n),Hn.subVectors(r,n),Fs.subVectors(t,n);const c=Gn.dot(Fs),l=Hn.dot(Fs);if(c<=0&&l<=0)return e.copy(n);Bs.subVectors(t,i);const h=Gn.dot(Bs),u=Hn.dot(Bs);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gn,o);Os.subVectors(t,r);const p=Gn.dot(Os),g=Hn.dot(Os);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Hn,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return To.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(To,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Gn,o).addScaledVector(Hn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ra={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function ks(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=gr(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ks(o,r,t+1/3),this.g=ks(o,r,t),this.b=ks(o,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const n=Ra[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return jt.fromWorkingColorSpace(xe.copy(this),t),Math.round(Ae(xe.r*255,0,255))*65536+Math.round(Ae(xe.g*255,0,255))*256+Math.round(Ae(xe.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,i=xe.g,r=xe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=me){jt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,i=xe.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ln),this.setHSL(ln.h+t,ln.s+e,ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(Gi);const n=yi(ln.h,Gi.h,e),i=yi(ln.s,Gi.s,e),r=yi(ln.l,Gi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Pt;Pt.NAMES=Ra;let bl=0;class gn extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=ni,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tr,this.blendDst=er,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Un,this.stencilZFail=Un,this.stencilZPass=Un,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tr&&(n.blendSrc=this.blendSrc),this.blendDst!==er&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Un&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Un&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Un&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ln extends gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new C,Hi=new Rt;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hi.fromBufferAttribute(this,e),Hi.applyMatrix3(t),this.setXY(e,Hi.x,Hi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uo&&(t.usage=this.usage),t}}class Ca extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pa extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Al=0;const Fe=new re,zs=new fe,Vn=new C,De=new ui,vi=new ui,de=new C;class ge extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wa(t)?Pa:Ca)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return zs.lookAt(t),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(De.min,vi.min),De.expandByPoint(de),de.addVectors(De.max,vi.max),De.expandByPoint(de)):(De.expandByPoint(vi.min),De.expandByPoint(vi.max))}De.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)de.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(de));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)de.fromBufferAttribute(a,l),c&&(Vn.fromBufferAttribute(t,l),de.add(Vn)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new C,h[w]=new C;const u=new C,f=new C,p=new C,g=new Rt,_=new Rt,m=new Rt,d=new C,M=new C;function v(w,z,G){u.fromArray(i,w*3),f.fromArray(i,z*3),p.fromArray(i,G*3),g.fromArray(o,w*2),_.fromArray(o,z*2),m.fromArray(o,G*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);const J=1/(_.x*m.y-m.x*_.y);isFinite(J)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(J),M.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(J),l[w].add(d),l[z].add(d),l[G].add(d),h[w].add(M),h[z].add(M),h[G].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,z=S.length;w<z;++w){const G=S[w],J=G.start,L=G.count;for(let U=J,H=J+L;U<H;U+=3)v(n[U+0],n[U+1],n[U+2])}const R=new C,b=new C,A=new C,I=new C;function y(w){A.fromArray(r,w*3),I.copy(A);const z=l[w];R.copy(z),R.sub(A.multiplyScalar(A.dot(z))).normalize(),b.crossVectors(I,z);const J=b.dot(h[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=J}for(let w=0,z=S.length;w<z;++w){const G=S[w],J=G.start,L=G.count;for(let U=J,H=J+L;U<H;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Ce(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bo=new re,yn=new ps,Vi=new Ci,Ao=new C,Wn=new C,Xn=new C,qn=new C,Gs=new C,Wi=new C,Xi=new Rt,qi=new Rt,Yi=new Rt,Ro=new C,Co=new C,Po=new C,ji=new C,Ki=new C;class W extends fe{constructor(t=new ge,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Wi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Gs.fromBufferAttribute(u,t),o?Wi.addScaledVector(Gs,h):Wi.addScaledVector(Gs.sub(e),h))}e.add(Wi)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),yn.copy(t.ray).recast(t.near),!(Vi.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Vi,Ao)===null||yn.origin.distanceToSquared(Ao)>(t.far-t.near)**2))&&(bo.copy(r).invert(),yn.copy(t.ray).applyMatrix4(bo),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,R=v;S<R;S+=3){const b=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);i=$i(this,d,t,n,l,h,u,b,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=$i(this,o,t,n,l,h,u,M,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,R=v;S<R;S+=3){const b=S,A=S+1,I=S+2;i=$i(this,d,t,n,l,h,u,b,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,v=m+1,S=m+2;i=$i(this,o,t,n,l,h,u,M,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Rl(s,t,e,n,i,r,o,a){let c;if(t.side===Re?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===mn,a),c===null)return null;Ki.copy(a),Ki.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ki);return l<e.near||l>e.far?null:{distance:l,point:Ki.clone(),object:s}}function $i(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Wn),s.getVertexPosition(c,Xn),s.getVertexPosition(l,qn);const h=Rl(s,t,e,n,Wn,Xn,qn,ji);if(h){i&&(Xi.fromBufferAttribute(i,a),qi.fromBufferAttribute(i,c),Yi.fromBufferAttribute(i,l),h.uv=Ve.getInterpolation(ji,Wn,Xn,qn,Xi,qi,Yi,new Rt)),r&&(Xi.fromBufferAttribute(r,a),qi.fromBufferAttribute(r,c),Yi.fromBufferAttribute(r,l),h.uv1=Ve.getInterpolation(ji,Wn,Xn,qn,Xi,qi,Yi,new Rt),h.uv2=h.uv1),o&&(Ro.fromBufferAttribute(o,a),Co.fromBufferAttribute(o,c),Po.fromBufferAttribute(o,l),h.normal=Ve.getInterpolation(ji,Wn,Xn,qn,Ro,Co,Po,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new C,materialIndex:0};Ve.getNormal(Wn,Xn,qn,u.normal),h.face=u}return h}class rt extends ge{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,d,M,v,S,R,b,A,I,y){const w=S/A,z=R/I,G=S/2,J=R/2,L=b/2,U=A+1,H=I+1;let q=0,X=0;const Y=new C;for(let j=0;j<H;j++){const et=j*z-J;for(let nt=0;nt<U;nt++){const V=nt*w-G;Y[_]=V*M,Y[m]=et*v,Y[d]=L,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(nt/A),u.push(1-j/I),q+=1}}for(let j=0;j<I;j++)for(let et=0;et<A;et++){const nt=f+et+U*j,V=f+et+U*(j+1),K=f+(et+1)+U*(j+1),lt=f+(et+1)+U*j;c.push(nt,V,lt),c.push(V,K,lt),X+=6}a.addGroup(p,X,y),p+=X,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function li(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(s){const t={};for(let e=0;e<s.length;e++){const n=li(s[e]);for(const i in n)t[i]=n[i]}return t}function Cl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function La(s){return s.getRenderTarget()===null?s.outputColorSpace:jt.workingColorSpace}const Pl={clone:li,merge:we};var Ll=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ll,this.fragmentShader=Dl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=li(t.uniforms),this.uniformsGroups=Cl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Da extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ie extends Da{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ai*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yn=-90,jn=1;class Il extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ie(Yn,jn,t,e);i.layers=this.layers,this.add(i);const r=new Ie(Yn,jn,t,e);r.layers=this.layers,this.add(r);const o=new Ie(Yn,jn,t,e);o.layers=this.layers,this.add(o);const a=new Ie(Yn,jn,t,e);a.layers=this.layers,this.add(a);const c=new Ie(Yn,jn,t,e);c.layers=this.layers,this.add(c);const l=new Ie(Yn,jn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ia extends Ue{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:oi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ul extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Si("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Cn?me:ke),this.texture=new Ia(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rt(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:dn});r.uniforms.tEquirect.value=e;const o=new W(i,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Be),new Il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Hs=new C,Nl=new C,Fl=new Ht;class En{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Hs.subVectors(n,e).cross(Nl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fl.getNormalMatrix(t),i=this.coplanarPoint(Hs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new Ci,Zi=new C;class vr{constructor(t=new En,e=new En,n=new En,i=new En,r=new En,o=new En){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-r,f-l,m-p,S-d).normalize(),n[1].setComponents(c+r,f+l,m+p,S+d).normalize(),n[2].setComponents(c+o,f+h,m+g,S+M).normalize(),n[3].setComponents(c-o,f-h,m-g,S-M).normalize(),n[4].setComponents(c-a,f-u,m-_,S-v).normalize(),e===nn)n[5].setComponents(c+a,f+u,m+_,S+v).normalize();else if(e===ls)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(t){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zi.x=i.normal.x>0?t.max.x:t.min.x,Zi.y=i.normal.y>0?t.max.y:t.min.y,Zi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ua(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Bl(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){const f=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),p.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class We extends ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const M=d*f-o;for(let v=0;v<l;v++){const S=v*u-r;g.push(S,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){const v=M+l*d,S=M+l*(d+1),R=M+1+l*(d+1),b=M+1+l*d;p.push(v,S,b),p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ol=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kl=`#ifdef USE_ALPHAHASH
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
#endif`,zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wl=`#ifdef USE_AOMAP
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
#endif`,Xl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ql=`#ifdef USE_BATCHING
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
#endif`,Yl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$l=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zl=`#ifdef USE_IRIDESCENCE
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
#endif`,Jl=`#ifdef USE_BUMPMAP
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
#endif`,Ql=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ah=`#define PI 3.141592653589793
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
} // validated`,ch=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lh=`vec3 transformedNormal = objectNormal;
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
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",mh=`
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
}`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
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
#endif`,yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Th=`#ifdef USE_GRADIENTMAP
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
}`,bh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
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
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fh=`PhysicalMaterial material;
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
#endif`,Bh=`struct PhysicalMaterial {
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
}`,Oh=`
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
#endif`,kh=`#if defined( RE_IndirectDiffuse )
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jh=`#if defined( USE_POINTS_UV )
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
#endif`,Kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
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
#endif`,Qh=`#ifdef USE_MORPHTARGETS
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
#endif`,tu=`#ifdef USE_MORPHTARGETS
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
#endif`,eu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ou=`#ifdef USE_NORMALMAP
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
#endif`,au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,du=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Su=`float getShadowMask() {
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
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wu=`#ifdef USE_SKINNING
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
#endif`,Tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
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
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lu=`#ifdef USE_TRANSMISSION
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
#endif`,Du=`#ifdef USE_TRANSMISSION
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
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ou=`uniform sampler2D t2D;
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
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`#include <common>
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
}`,Wu=`#if DEPTH_PACKING == 3200
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
}`,Xu=`#define DISTANCE
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
}`,qu=`#define DISTANCE
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
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ku=`uniform float scale;
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
}`,$u=`uniform vec3 diffuse;
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
}`,Zu=`#include <common>
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
}`,Ju=`uniform vec3 diffuse;
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
}`,Qu=`#define LAMBERT
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
}`,td=`#define LAMBERT
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
}`,ed=`#define MATCAP
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
}`,nd=`#define MATCAP
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
}`,id=`#define NORMAL
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
}`,sd=`#define NORMAL
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
}`,rd=`#define PHONG
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
}`,od=`#define PHONG
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
}`,ad=`#define STANDARD
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
}`,cd=`#define STANDARD
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
}`,ld=`#define TOON
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
}`,hd=`#define TOON
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
}`,ud=`uniform float size;
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
}`,dd=`uniform vec3 diffuse;
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
}`,fd=`#include <common>
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
}`,pd=`uniform vec3 color;
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
}`,md=`uniform float rotation;
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
}`,gd=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Ol,alphahash_pars_fragment:kl,alphamap_fragment:zl,alphamap_pars_fragment:Gl,alphatest_fragment:Hl,alphatest_pars_fragment:Vl,aomap_fragment:Wl,aomap_pars_fragment:Xl,batching_pars_vertex:ql,batching_vertex:Yl,begin_vertex:jl,beginnormal_vertex:Kl,bsdfs:$l,iridescence_fragment:Zl,bumpmap_pars_fragment:Jl,clipping_planes_fragment:Ql,clipping_planes_pars_fragment:th,clipping_planes_pars_vertex:eh,clipping_planes_vertex:nh,color_fragment:ih,color_pars_fragment:sh,color_pars_vertex:rh,color_vertex:oh,common:ah,cube_uv_reflection_fragment:ch,defaultnormal_vertex:lh,displacementmap_pars_vertex:hh,displacementmap_vertex:uh,emissivemap_fragment:dh,emissivemap_pars_fragment:fh,colorspace_fragment:ph,colorspace_pars_fragment:mh,envmap_fragment:gh,envmap_common_pars_fragment:_h,envmap_pars_fragment:vh,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Lh,envmap_vertex:Mh,fog_vertex:yh,fog_pars_vertex:Sh,fog_fragment:Eh,fog_pars_fragment:wh,gradientmap_pars_fragment:Th,lightmap_fragment:bh,lightmap_pars_fragment:Ah,lights_lambert_fragment:Rh,lights_lambert_pars_fragment:Ch,lights_pars_begin:Ph,lights_toon_fragment:Dh,lights_toon_pars_fragment:Ih,lights_phong_fragment:Uh,lights_phong_pars_fragment:Nh,lights_physical_fragment:Fh,lights_physical_pars_fragment:Bh,lights_fragment_begin:Oh,lights_fragment_maps:kh,lights_fragment_end:zh,logdepthbuf_fragment:Gh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Wh,map_fragment:Xh,map_pars_fragment:qh,map_particle_fragment:Yh,map_particle_pars_fragment:jh,metalnessmap_fragment:Kh,metalnessmap_pars_fragment:$h,morphcolor_vertex:Zh,morphnormal_vertex:Jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:tu,normal_fragment_begin:eu,normal_fragment_maps:nu,normal_pars_fragment:iu,normal_pars_vertex:su,normal_vertex:ru,normalmap_pars_fragment:ou,clearcoat_normal_fragment_begin:au,clearcoat_normal_fragment_maps:cu,clearcoat_pars_fragment:lu,iridescence_pars_fragment:hu,opaque_fragment:uu,packing:du,premultiplied_alpha_fragment:fu,project_vertex:pu,dithering_fragment:mu,dithering_pars_fragment:gu,roughnessmap_fragment:_u,roughnessmap_pars_fragment:vu,shadowmap_pars_fragment:xu,shadowmap_pars_vertex:Mu,shadowmap_vertex:yu,shadowmask_pars_fragment:Su,skinbase_vertex:Eu,skinning_pars_vertex:wu,skinning_vertex:Tu,skinnormal_vertex:bu,specularmap_fragment:Au,specularmap_pars_fragment:Ru,tonemapping_fragment:Cu,tonemapping_pars_fragment:Pu,transmission_fragment:Lu,transmission_pars_fragment:Du,uv_pars_fragment:Iu,uv_pars_vertex:Uu,uv_vertex:Nu,worldpos_vertex:Fu,background_vert:Bu,background_frag:Ou,backgroundCube_vert:ku,backgroundCube_frag:zu,cube_vert:Gu,cube_frag:Hu,depth_vert:Vu,depth_frag:Wu,distanceRGBA_vert:Xu,distanceRGBA_frag:qu,equirect_vert:Yu,equirect_frag:ju,linedashed_vert:Ku,linedashed_frag:$u,meshbasic_vert:Zu,meshbasic_frag:Ju,meshlambert_vert:Qu,meshlambert_frag:td,meshmatcap_vert:ed,meshmatcap_frag:nd,meshnormal_vert:id,meshnormal_frag:sd,meshphong_vert:rd,meshphong_frag:od,meshphysical_vert:ad,meshphysical_frag:cd,meshtoon_vert:ld,meshtoon_frag:hd,points_vert:ud,points_frag:dd,shadow_vert:fd,shadow_frag:pd,sprite_vert:md,sprite_frag:gd},st={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},je={basic:{uniforms:we([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:we([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:we([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:we([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:we([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:we([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:we([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:we([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:we([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:we([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:we([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:we([st.common,st.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:we([st.lights,st.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};je.physical={uniforms:we([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ji={r:0,b:0,g:0};function _d(s,t,e,n,i,r,o){const a=new Pt(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(m,d){let M=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),M=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ds)?(h===void 0&&(h=new W(new rt(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:li(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=jt.getTransfer(v.colorSpace)!==Jt,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new W(new We(2,2),new Dn({name:"BackgroundMaterial",uniforms:li(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=jt.getTransfer(v.colorSpace)!==Jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Ji,La(s)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function vd(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(L,U,H,q,X){let Y=!1;if(o){const j=_(q,H,U);l!==j&&(l=j,p(l.object)),Y=d(L,q,H,X),Y&&M(L,q,H,X)}else{const j=U.wireframe===!0;(l.geometry!==q.id||l.program!==H.id||l.wireframe!==j)&&(l.geometry=q.id,l.program=H.id,l.wireframe=j,Y=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,I(L,U,H,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,U,H){const q=H.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let Y=X[U.id];Y===void 0&&(Y={},X[U.id]=Y);let j=Y[q];return j===void 0&&(j=m(f()),Y[q]=j),j}function m(L){const U=[],H=[],q=[];for(let X=0;X<i;X++)U[X]=0,H[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,U,H,q){const X=l.attributes,Y=U.attributes;let j=0;const et=H.getAttributes();for(const nt in et)if(et[nt].location>=0){const K=X[nt];let lt=Y[nt];if(lt===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),K===void 0||K.attribute!==lt||lt&&K.data!==lt.data)return!0;j++}return l.attributesNum!==j||l.index!==q}function M(L,U,H,q){const X={},Y=U.attributes;let j=0;const et=H.getAttributes();for(const nt in et)if(et[nt].location>=0){let K=Y[nt];K===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const lt={};lt.attribute=K,K&&K.data&&(lt.data=K.data),X[nt]=lt,j++}l.attributes=X,l.attributesNum=j,l.index=q}function v(){const L=l.newAttributes;for(let U=0,H=L.length;U<H;U++)L[U]=0}function S(L){R(L,0)}function R(L,U){const H=l.newAttributes,q=l.enabledAttributes,X=l.attributeDivisors;H[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),X[L]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),X[L]=U)}function b(){const L=l.newAttributes,U=l.enabledAttributes;for(let H=0,q=U.length;H<q;H++)U[H]!==L[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function A(L,U,H,q,X,Y,j){j===!0?s.vertexAttribIPointer(L,U,H,X,Y):s.vertexAttribPointer(L,U,H,q,X,Y)}function I(L,U,H,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const X=q.attributes,Y=H.getAttributes(),j=U.defaultAttributeValues;for(const et in Y){const nt=Y[et];if(nt.location>=0){let V=X[et];if(V===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const K=V.normalized,lt=V.itemSize,_t=e.get(V);if(_t===void 0)continue;const mt=_t.buffer,pt=_t.type,Ut=_t.bytesPerElement,Tt=n.isWebGL2===!0&&(pt===s.INT||pt===s.UNSIGNED_INT||V.gpuType===ma);if(V.isInterleavedBufferAttribute){const Xt=V.data,N=Xt.stride,Me=V.offset;if(Xt.isInstancedInterleavedBuffer){for(let yt=0;yt<nt.locationSize;yt++)R(nt.location+yt,Xt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let yt=0;yt<nt.locationSize;yt++)S(nt.location+yt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let yt=0;yt<nt.locationSize;yt++)A(nt.location+yt,lt/nt.locationSize,pt,K,N*Ut,(Me+lt/nt.locationSize*yt)*Ut,Tt)}else{if(V.isInstancedBufferAttribute){for(let Xt=0;Xt<nt.locationSize;Xt++)R(nt.location+Xt,V.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Xt=0;Xt<nt.locationSize;Xt++)S(nt.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Xt=0;Xt<nt.locationSize;Xt++)A(nt.location+Xt,lt/nt.locationSize,pt,K,lt*Ut,lt/nt.locationSize*Xt*Ut,Tt)}}else if(j!==void 0){const K=j[et];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(nt.location,K);break;case 3:s.vertexAttrib3fv(nt.location,K);break;case 4:s.vertexAttrib4fv(nt.location,K);break;default:s.vertexAttrib1fv(nt.location,K)}}}}b()}function y(){G();for(const L in a){const U=a[L];for(const H in U){const q=U[H];for(const X in q)g(q[X].object),delete q[X];delete U[H]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const U=a[L.id];for(const H in U){const q=U[H];for(const X in q)g(q[X].object),delete q[X];delete U[H]}delete a[L.id]}function z(L){for(const U in a){const H=a[U];if(H[L.id]===void 0)continue;const q=H[L.id];for(const X in q)g(q[X].object),delete q[X];delete H[L.id]}}function G(){J(),h=!0,l!==c&&(l=c,p(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:J,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function xd(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Md(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||t.has("OES_texture_float"),R=v&&S,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:b}}function yd(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new En,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,v=M*4;let S=d.clippingState||null;c.value=S,S=h(g,f,v,p);for(let R=0;R!==v;++R)S[R]=e[R];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Sd(s){let t=new WeakMap;function e(o,a){return a===nr?o.mapping=oi:a===ir&&(o.mapping=ai),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===nr||a===ir)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ul(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Na extends Da{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ti=4,Lo=[.125,.215,.35,.446,.526,.582],bn=20,Vs=new Na,Do=new Pt;let Ws=null,Xs=0,qs=0;const wn=(1+Math.sqrt(5))/2,Kn=1/wn,Io=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,wn,Kn),new C(0,wn,-Kn),new C(Kn,0,wn),new C(-Kn,0,wn),new C(wn,Kn,0),new C(-wn,Kn,0)];class Uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ws,Xs,qs),t.scissorTest=!1,Qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:bi,format:qe,colorSpace:sn,depthBuffer:!1},i=No(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ed(r)),this._blurMaterial=wd(r,t,e)}return i}_compileMaterial(t){const e=new W(this._lodPlanes[0],t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,n,i){const a=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Do),h.toneMapping=fn,h.autoClear=!1;const p=new Ln({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new W(new rt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Do),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):M===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const v=this._cubeSize;Qi(i,M*v,d>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===oi||t.mapping===ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Qi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Io[(i-1)%Io.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new W(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):bn;m>bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bn}`);const d=[];let M=0;for(let A=0;A<bn;++A){const I=A/_,y=Math.exp(-I*I/2);d.push(y),A===0?M+=y:A<m&&(M+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const S=this._sizeLods[i],R=3*S*(i>v-ti?i-v+ti:0),b=4*(this._cubeSize-S);Qi(e,R,b,3*S,2*S),c.setRenderTarget(e),c.render(u,Vs)}}function Ed(s){const t=[],e=[],n=[];let i=s;const r=s-ti+1+Lo.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ti?c=Lo[o-s+ti-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,I=b>2?0:-1,y=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];M.set(y,_*g*b),v.set(f,m*g*b);const w=[b,b,b,b,b,b];S.set(w,d*g*b)}const R=new ge;R.setAttribute("position",new Ce(M,_)),R.setAttribute("uv",new Ce(v,m)),R.setAttribute("faceIndex",new Ce(S,d)),t.push(R),i>ti&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function No(s,t,e){const n=new Pn(s,t,e);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function wd(s,t,e){const n=new Float32Array(bn),i=new C(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xr(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Fo(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xr(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Bo(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function xr(){return`

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
	`}function Td(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===nr||c===ir,h=c===oi||c===ai;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Uo(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Uo(s));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ad(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let v=0,S=M.length;v<S;v+=3){const R=M[v+0],b=M[v+1],A=M[v+2];f.push(R,b,b,A,A,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const R=v+0,b=v+1,A=v+2;f.push(R,b,b,A,A,R)}}else return;const m=new(wa(f)?Pa:Ca)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Rd(s,t,e,n){const i=n.isWebGL2;let r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){s.drawElements(r,g,a,p*c),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,_),e.update(g,r,_)}function f(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let M=0;M<_;M++)d+=g[M];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Cd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Pd(s,t){return s[0]-t[0]}function Ld(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Dd(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new Qt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let U=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var p=U;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),S===!0&&(y=2),R===!0&&(y=3);let w=h.attributes.position.count*y,z=1;w>t.maxTextureSize&&(z=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const G=new Float32Array(w*z*4*_),J=new Aa(G,w,z,_);J.type=un,J.needsUpdate=!0;const L=y*4;for(let H=0;H<_;H++){const q=b[H],X=A[H],Y=I[H],j=w*z*4*H;for(let et=0;et<q.count;et++){const nt=et*L;v===!0&&(o.fromBufferAttribute(q,et),G[j+nt+0]=o.x,G[j+nt+1]=o.y,G[j+nt+2]=o.z,G[j+nt+3]=0),S===!0&&(o.fromBufferAttribute(X,et),G[j+nt+4]=o.x,G[j+nt+5]=o.y,G[j+nt+6]=o.z,G[j+nt+7]=0),R===!0&&(o.fromBufferAttribute(Y,et),G[j+nt+8]=o.x,G[j+nt+9]=o.y,G[j+nt+10]=o.z,G[j+nt+11]=Y.itemSize===4?o.w:1)}}m={count:_,texture:J,size:new Rt(w,z)},r.set(h,m),h.addEventListener("dispose",U)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const R=_[S];R[0]=S,R[1]=f[S]}_.sort(Ld);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Pd);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const R=a[S],b=R[0],A=R[1];b!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+S)!==m[b]&&h.setAttribute("morphTarget"+S,m[b]),d&&h.getAttribute("morphNormal"+S)!==d[b]&&h.setAttribute("morphNormal"+S,d[b]),i[S]=A,M+=A):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),d&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const v=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Id(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Fa extends Ue{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Rn,h!==Rn&&h!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rn&&(n=hn),n===void 0&&h===ci&&(n=An),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=c!==void 0?c:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ba=new Ue,Oa=new Fa(1,1);Oa.compareFunction=Ea;const ka=new Aa,za=new _l,Ga=new Ia,Oo=[],ko=[],zo=new Float32Array(16),Go=new Float32Array(9),Ho=new Float32Array(4);function fi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Oo[i];if(r===void 0&&(r=new Float32Array(i),Oo[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function le(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ms(s,t){let e=ko[t];e===void 0&&(e=new Int32Array(t),ko[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ud(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Nd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2fv(this.addr,t),le(e,t)}}function Fd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;s.uniform3fv(this.addr,t),le(e,t)}}function Bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4fv(this.addr,t),le(e,t)}}function Od(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Ho.set(n),s.uniformMatrix2fv(this.addr,!1,Ho),le(e,n)}}function kd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Go.set(n),s.uniformMatrix3fv(this.addr,!1,Go),le(e,n)}}function zd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;zo.set(n),s.uniformMatrix4fv(this.addr,!1,zo),le(e,n)}}function Gd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2iv(this.addr,t),le(e,t)}}function Vd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;s.uniform3iv(this.addr,t),le(e,t)}}function Wd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4iv(this.addr,t),le(e,t)}}function Xd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function qd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2uiv(this.addr,t),le(e,t)}}function Yd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;s.uniform3uiv(this.addr,t),le(e,t)}}function jd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4uiv(this.addr,t),le(e,t)}}function Kd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Oa:Ba;e.setTexture2D(t||r,i)}function $d(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||za,i)}function Zd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ga,i)}function Jd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ka,i)}function Qd(s){switch(s){case 5126:return Ud;case 35664:return Nd;case 35665:return Fd;case 35666:return Bd;case 35674:return Od;case 35675:return kd;case 35676:return zd;case 5124:case 35670:return Gd;case 35667:case 35671:return Hd;case 35668:case 35672:return Vd;case 35669:case 35673:return Wd;case 5125:return Xd;case 36294:return qd;case 36295:return Yd;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Kd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Jd}}function tf(s,t){s.uniform1fv(this.addr,t)}function ef(s,t){const e=fi(t,this.size,2);s.uniform2fv(this.addr,e)}function nf(s,t){const e=fi(t,this.size,3);s.uniform3fv(this.addr,e)}function sf(s,t){const e=fi(t,this.size,4);s.uniform4fv(this.addr,e)}function rf(s,t){const e=fi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function of(s,t){const e=fi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function af(s,t){const e=fi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function cf(s,t){s.uniform1iv(this.addr,t)}function lf(s,t){s.uniform2iv(this.addr,t)}function hf(s,t){s.uniform3iv(this.addr,t)}function uf(s,t){s.uniform4iv(this.addr,t)}function df(s,t){s.uniform1uiv(this.addr,t)}function ff(s,t){s.uniform2uiv(this.addr,t)}function pf(s,t){s.uniform3uiv(this.addr,t)}function mf(s,t){s.uniform4uiv(this.addr,t)}function gf(s,t,e){const n=this.cache,i=t.length,r=ms(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ba,r[o])}function _f(s,t,e){const n=this.cache,i=t.length,r=ms(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||za,r[o])}function vf(s,t,e){const n=this.cache,i=t.length,r=ms(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ga,r[o])}function xf(s,t,e){const n=this.cache,i=t.length,r=ms(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ka,r[o])}function Mf(s){switch(s){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return sf;case 35674:return rf;case 35675:return of;case 35676:return af;case 5124:case 35670:return cf;case 35667:case 35671:return lf;case 35668:case 35672:return hf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}class yf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qd(e.type)}}class Sf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mf(e.type)}}class Ef{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function Vo(s,t){s.seq.push(t),s.map[t.id]=t}function wf(s,t,e){const n=s.name,i=n.length;for(Ys.lastIndex=0;;){const r=Ys.exec(n),o=Ys.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Vo(e,l===void 0?new yf(a,s,t):new Sf(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ef(a),Vo(e,u)),e=u}}}class ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);wf(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Wo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Tf=37297;let bf=0;function Af(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Rf(s){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(s);let n;switch(t===e?n="":t===cs&&e===as?n="LinearDisplayP3ToLinearSRGB":t===as&&e===cs&&(n="LinearSRGBToLinearDisplayP3"),s){case sn:case fs:return[n,"LinearTransferOETF"];case me:case mr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Xo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Af(s.getShaderSource(t),o)}else return i}function Cf(s,t){const e=Rf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Pf(s,t){let e;switch(t){case Ac:e="Linear";break;case Rc:e="Reinhard";break;case Cc:e="OptimizedCineon";break;case Pc:e="ACESFilmic";break;case Dc:e="AgX";break;case Lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Lf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ei).join(`
`)}function Df(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ei).join(`
`)}function If(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Uf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ei(s){return s!==""}function qo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nf=/^[ \t]*#include +<([\w\d./]+)>/gm;function cr(s){return s.replace(Nf,Bf)}const Ff=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bf(s,t){let e=Ft[t];if(e===void 0){const n=Ff.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cr(e)}const Of=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(s){return s.replace(Of,kf)}function kf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ko(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fa?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function Gf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case oi:case ai:t="ENVMAP_TYPE_CUBE";break;case ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ai:t="ENVMAP_MODE_REFRACTION";break}return t}function Vf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dr:t="ENVMAP_BLENDING_MULTIPLY";break;case Tc:t="ENVMAP_BLENDING_MIX";break;case bc:t="ENVMAP_BLENDING_ADD";break}return t}function Wf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xf(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=zf(e),l=Gf(e),h=Hf(e),u=Vf(e),f=Wf(e),p=e.isWebGL2?"":Lf(e),g=Df(e),_=If(r),m=i.createProgram();let d,M,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ei).join(`
`),d.length>0&&(d+=`
`),M=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ei).join(`
`),M.length>0&&(M+=`
`)):(d=[Ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ei).join(`
`),M=[p,Ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==fn?Pf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Cf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ei).join(`
`)),o=cr(o),o=qo(o,e),o=Yo(o,e),a=cr(a),a=qo(a,e),a=Yo(a,e),o=jo(o),a=jo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=v+d+o,R=v+M+a,b=Wo(i,i.VERTEX_SHADER,S),A=Wo(i,i.FRAGMENT_SHADER,R);i.attachShader(m,b),i.attachShader(m,A),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(G){if(s.debug.checkShaderErrors){const J=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(A).trim();let H=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,A);else{const X=Xo(i,b,"vertex"),Y=Xo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+X+`
`+Y)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||U==="")&&(q=!1);q&&(G.diagnostics={runnable:H,programLog:J,vertexShader:{log:L,prefix:d},fragmentShader:{log:U,prefix:M}})}i.deleteShader(b),i.deleteShader(A),y=new ss(i,m),w=Uf(i,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(m,Tf)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=A,this}let qf=0;class Yf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jf(t),e.set(t,n)),n}}class jf{constructor(t){this.id=qf++,this.code=t,this.usedTimes=0}}function Kf(s,t,e,n,i,r,o){const a=new _r,c=new Yf,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,w,z,G,J){const L=G.fog,U=J.geometry,H=y.isMeshStandardMaterial?G.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),X=q&&q.mapping===ds?q.image.height:null,Y=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=j!==void 0?j.length:0;let nt=0;U.morphAttributes.position!==void 0&&(nt=1),U.morphAttributes.normal!==void 0&&(nt=2),U.morphAttributes.color!==void 0&&(nt=3);let V,K,lt,_t;if(Y){const ye=je[Y];V=ye.vertexShader,K=ye.fragmentShader}else V=y.vertexShader,K=y.fragmentShader,c.update(y),lt=c.getVertexShaderID(y),_t=c.getFragmentShaderID(y);const mt=s.getRenderTarget(),pt=J.isInstancedMesh===!0,Ut=J.isBatchedMesh===!0,Tt=!!y.map,Xt=!!y.matcap,N=!!q,Me=!!y.aoMap,yt=!!y.lightMap,Lt=!!y.bumpMap,gt=!!y.normalMap,ee=!!y.displacementMap,Bt=!!y.emissiveMap,T=!!y.metalnessMap,x=!!y.roughnessMap,B=y.anisotropy>0,Q=y.clearcoat>0,Z=y.iridescence>0,tt=y.sheen>0,vt=y.transmission>0,ht=B&&!!y.anisotropyMap,dt=Q&&!!y.clearcoatMap,wt=Q&&!!y.clearcoatNormalMap,Ot=Q&&!!y.clearcoatRoughnessMap,$=Z&&!!y.iridescenceMap,Yt=Z&&!!y.iridescenceThicknessMap,Vt=tt&&!!y.sheenColorMap,Ct=tt&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,ft=!!y.specularColorMap,Nt=!!y.specularIntensityMap,qt=vt&&!!y.transmissionMap,ie=vt&&!!y.thicknessMap,zt=!!y.gradientMap,it=!!y.alphaMap,P=y.alphaTest>0,at=!!y.alphaHash,ct=!!y.extensions,bt=!!U.attributes.uv1,St=!!U.attributes.uv2,Kt=!!U.attributes.uv3;let $t=fn;return y.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&($t=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:K,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ut,instancing:pt,instancingColor:pt&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:sn,map:Tt,matcap:Xt,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:X,aoMap:Me,lightMap:yt,bumpMap:Lt,normalMap:gt,displacementMap:f&&ee,emissiveMap:Bt,normalMapObjectSpace:gt&&y.normalMapType===Wc,normalMapTangentSpace:gt&&y.normalMapType===pr,metalnessMap:T,roughnessMap:x,anisotropy:B,anisotropyMap:ht,clearcoat:Q,clearcoatMap:dt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Ot,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:Yt,sheen:tt,sheenColorMap:Vt,sheenRoughnessMap:Ct,specularMap:Mt,specularColorMap:ft,specularIntensityMap:Nt,transmission:vt,transmissionMap:qt,thicknessMap:ie,gradientMap:zt,opaque:y.transparent===!1&&y.blending===ni,alphaMap:it,alphaTest:P,alphaHash:at,combine:y.combine,mapUv:Tt&&_(y.map.channel),aoMapUv:Me&&_(y.aoMap.channel),lightMapUv:yt&&_(y.lightMap.channel),bumpMapUv:Lt&&_(y.bumpMap.channel),normalMapUv:gt&&_(y.normalMap.channel),displacementMapUv:ee&&_(y.displacementMap.channel),emissiveMapUv:Bt&&_(y.emissiveMap.channel),metalnessMapUv:T&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:dt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(y.sheenRoughnessMap.channel),specularMapUv:Mt&&_(y.specularMap.channel),specularColorMapUv:ft&&_(y.specularColorMap.channel),specularIntensityMapUv:Nt&&_(y.specularIntensityMap.channel),transmissionMapUv:qt&&_(y.transmissionMap.channel),thicknessMapUv:ie&&_(y.thicknessMap.channel),alphaMapUv:it&&_(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:bt,vertexUv2s:St,vertexUv3s:Kt,pointsUvs:J.isPoints===!0&&!!U.attributes.uv&&(Tt||it),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:$t,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&jt.getTransfer(y.map.colorSpace)===Jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oe,flipSided:y.side===Re,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ct&&y.extensions.derivatives===!0,extensionFragDepth:ct&&y.extensions.fragDepth===!0,extensionDrawBuffers:ct&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)w.push(z),w.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(M(w,y),v(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function M(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const w=g[y.type];let z;if(w){const G=je[w];z=Pl.clone(G.uniforms)}else z=y.uniforms;return z}function R(y,w){let z;for(let G=0,J=l.length;G<J;G++){const L=l[G];if(L.cacheKey===w){z=L,++z.usedTimes;break}}return z===void 0&&(z=new Xf(s,w,y,r),l.push(z)),z}function b(y){if(--y.usedTimes===0){const w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),y.destroy()}}function A(y){c.remove(y)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:I}}function $f(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Zf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $o(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Zo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,g,_,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Zf),n.length>1&&n.sort(f||$o),i.length>1&&i.sort(f||$o)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Jf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Zo,s.set(n,[o])):i>=r.length?(o=new Zo,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Qf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Pt};break;case"SpotLight":e={position:new C,direction:new C,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function tp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let ep=0;function np(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ip(s,t){const e=new Qf,n=tp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,o=new re,a=new re;function c(h,u){let f=0,p=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,m=0,d=0,M=0,v=0,S=0,R=0,b=0,A=0,I=0,y=0;h.sort(np);const w=u===!0?Math.PI:1;for(let G=0,J=h.length;G<J;G++){const L=h[G],U=L.color,H=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=U.r*H*w,p+=U.g*H*w,g+=U.b*H*w;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],H);y++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const j=L.shadow,et=n.get(L);et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.directionalShadow[_]=et,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=L.shadow.matrix,S++}i.directional[_]=Y,_++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(U).multiplyScalar(H*w),Y.distance=q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[d]=Y;const j=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[d]=j.matrix,L.castShadow){const et=n.get(L);et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.spotShadow[d]=et,i.spotShadowMap[d]=X,b++}d++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(U).multiplyScalar(H),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=Y,M++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*w),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,et=n.get(L);et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,i.pointShadow[m]=et,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(H*w),Y.groundColor.copy(L.groundColor).multiplyScalar(H*w),i.hemi[v]=Y,v++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==d||z.rectAreaLength!==M||z.hemiLength!==v||z.numDirectionalShadows!==S||z.numPointShadows!==R||z.numSpotShadows!==b||z.numSpotMaps!==A||z.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=b+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=y,z.directionalLength=_,z.pointLength=m,z.spotLength=d,z.rectAreaLength=M,z.hemiLength=v,z.numDirectionalShadows=S,z.numPointShadows=R,z.numSpotShadows=b,z.numSpotMaps=A,z.numLightProbes=y,i.version=ep++)}function l(h,u){let f=0,p=0,g=0,_=0,m=0;const d=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const S=h[M];if(S.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),f++}else if(S.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function Jo(s,t){const e=new ip(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function sp(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new Jo(s,t),e.set(r,[c])):o>=a.length?(c=new Jo(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class rp extends gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class op extends gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ap=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cp=`uniform sampler2D shadow_pass;
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
}`;function lp(s,t,e){let n=new vr;const i=new Rt,r=new Rt,o=new Qt,a=new rp({depthPacking:Vc}),c=new op,l={},h=e.maxTextureSize,u={[mn]:Re,[Re]:mn,[Oe]:Oe},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:ap,fragmentShader:cp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new W(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let d=this.type;this.render=function(b,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=s.getRenderTarget(),w=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),G=s.state;G.setBlending(dn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=d!==en&&this.type===en,L=d===en&&this.type!==en;for(let U=0,H=b.length;U<H;U++){const q=b[U],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const Y=X.getFrameExtents();if(i.multiply(Y),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,X.mapSize.y=r.y)),X.map===null||J===!0||L===!0){const et=this.type!==en?{minFilter:be,magFilter:be}:{};X.map!==null&&X.map.dispose(),X.map=new Pn(i.x,i.y,et),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const j=X.getViewportCount();for(let et=0;et<j;et++){const nt=X.getViewport(et);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),G.viewport(o),X.updateMatrices(q,et),n=X.getFrustum(),S(A,I,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===en&&M(X,I),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(y,w,z)};function M(b,A){const I=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,I,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,I,p,_,null)}function v(b,A,I,y){let w=null;const z=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)w=z;else if(w=I.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=w.uuid,J=A.uuid;let L=l[G];L===void 0&&(L={},l[G]=L);let U=L[J];U===void 0&&(U=w.clone(),L[J]=U,A.addEventListener("dispose",R)),w=U}if(w.visible=A.visible,w.wireframe=A.wireframe,y===en?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=s.properties.get(w);G.light=I}return w}function S(b,A,I,y,w){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===en)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const J=t.update(b),L=b.material;if(Array.isArray(L)){const U=J.groups;for(let H=0,q=U.length;H<q;H++){const X=U[H],Y=L[X.materialIndex];if(Y&&Y.visible){const j=v(b,Y,y,w);b.onBeforeShadow(s,b,A,I,J,j,X),s.renderBufferDirect(I,null,J,j,b,X),b.onAfterShadow(s,b,A,I,J,j,X)}}}else if(L.visible){const U=v(b,L,y,w);b.onBeforeShadow(s,b,A,I,J,U,null),s.renderBufferDirect(I,null,J,U,b,null),b.onAfterShadow(s,b,A,I,J,U,null)}}const G=b.children;for(let J=0,L=G.length;J<L;J++)S(G[J],A,I,y,w)}function R(b){b.target.removeEventListener("dispose",R);for(const I in l){const y=l[I],w=b.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function hp(s,t,e){const n=e.isWebGL2;function i(){let P=!1;const at=new Qt;let ct=null;const bt=new Qt(0,0,0,0);return{setMask:function(St){ct!==St&&!P&&(s.colorMask(St,St,St,St),ct=St)},setLocked:function(St){P=St},setClear:function(St,Kt,$t,he,ye){ye===!0&&(St*=he,Kt*=he,$t*=he),at.set(St,Kt,$t,he),bt.equals(at)===!1&&(s.clearColor(St,Kt,$t,he),bt.copy(at))},reset:function(){P=!1,ct=null,bt.set(-1,0,0,0)}}}function r(){let P=!1,at=null,ct=null,bt=null;return{setTest:function(St){St?Ut(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(St){at!==St&&!P&&(s.depthMask(St),at=St)},setFunc:function(St){if(ct!==St){switch(St){case vc:s.depthFunc(s.NEVER);break;case xc:s.depthFunc(s.ALWAYS);break;case Mc:s.depthFunc(s.LESS);break;case rs:s.depthFunc(s.LEQUAL);break;case yc:s.depthFunc(s.EQUAL);break;case Sc:s.depthFunc(s.GEQUAL);break;case Ec:s.depthFunc(s.GREATER);break;case wc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=St}},setLocked:function(St){P=St},setClear:function(St){bt!==St&&(s.clearDepth(St),bt=St)},reset:function(){P=!1,at=null,ct=null,bt=null}}}function o(){let P=!1,at=null,ct=null,bt=null,St=null,Kt=null,$t=null,he=null,ye=null;return{setTest:function(Zt){P||(Zt?Ut(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Zt){at!==Zt&&!P&&(s.stencilMask(Zt),at=Zt)},setFunc:function(Zt,Se,Ye){(ct!==Zt||bt!==Se||St!==Ye)&&(s.stencilFunc(Zt,Se,Ye),ct=Zt,bt=Se,St=Ye)},setOp:function(Zt,Se,Ye){(Kt!==Zt||$t!==Se||he!==Ye)&&(s.stencilOp(Zt,Se,Ye),Kt=Zt,$t=Se,he=Ye)},setLocked:function(Zt){P=Zt},setClear:function(Zt){ye!==Zt&&(s.clearStencil(Zt),ye=Zt)},reset:function(){P=!1,at=null,ct=null,bt=null,St=null,Kt=null,$t=null,he=null,ye=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,v=null,S=null,R=null,b=null,A=null,I=null,y=new Pt(0,0,0),w=0,z=!1,G=null,J=null,L=null,U=null,H=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=Y>=2);let et=null,nt={};const V=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),lt=new Qt().fromArray(V),_t=new Qt().fromArray(K);function mt(P,at,ct,bt){const St=new Uint8Array(4),Kt=s.createTexture();s.bindTexture(P,Kt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $t=0;$t<ct;$t++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(at,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(at+$t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return Kt}const pt={};pt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),pt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ut(s.DEPTH_TEST),c.setFunc(rs),Bt(!1),T(Ir),Ut(s.CULL_FACE),gt(dn);function Ut(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function Tt(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Xt(P,at){return p[P]!==at?(s.bindFramebuffer(P,at),p[P]=at,n&&(P===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=at),P===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=at)),!0):!1}function N(P,at){let ct=_,bt=!1;if(P)if(ct=g.get(at),ct===void 0&&(ct=[],g.set(at,ct)),P.isWebGLMultipleRenderTargets){const St=P.texture;if(ct.length!==St.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let Kt=0,$t=St.length;Kt<$t;Kt++)ct[Kt]=s.COLOR_ATTACHMENT0+Kt;ct.length=St.length,bt=!0}}else ct[0]!==s.COLOR_ATTACHMENT0&&(ct[0]=s.COLOR_ATTACHMENT0,bt=!0);else ct[0]!==s.BACK&&(ct[0]=s.BACK,bt=!0);bt&&(e.isWebGL2?s.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function Me(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const yt={[Tn]:s.FUNC_ADD,[ic]:s.FUNC_SUBTRACT,[sc]:s.FUNC_REVERSE_SUBTRACT};if(n)yt[Fr]=s.MIN,yt[Br]=s.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(yt[Fr]=P.MIN_EXT,yt[Br]=P.MAX_EXT)}const Lt={[rc]:s.ZERO,[oc]:s.ONE,[ac]:s.SRC_COLOR,[tr]:s.SRC_ALPHA,[fc]:s.SRC_ALPHA_SATURATE,[uc]:s.DST_COLOR,[lc]:s.DST_ALPHA,[cc]:s.ONE_MINUS_SRC_COLOR,[er]:s.ONE_MINUS_SRC_ALPHA,[dc]:s.ONE_MINUS_DST_COLOR,[hc]:s.ONE_MINUS_DST_ALPHA,[pc]:s.CONSTANT_COLOR,[mc]:s.ONE_MINUS_CONSTANT_COLOR,[gc]:s.CONSTANT_ALPHA,[_c]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(P,at,ct,bt,St,Kt,$t,he,ye,Zt){if(P===dn){d===!0&&(Tt(s.BLEND),d=!1);return}if(d===!1&&(Ut(s.BLEND),d=!0),P!==nc){if(P!==M||Zt!==z){if((v!==Tn||b!==Tn)&&(s.blendEquation(s.FUNC_ADD),v=Tn,b=Tn),Zt)switch(P){case ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qs:s.blendFunc(s.ONE,s.ONE);break;case Ur:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ur:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,A=null,I=null,y.set(0,0,0),w=0,M=P,z=Zt}return}St=St||at,Kt=Kt||ct,$t=$t||bt,(at!==v||St!==b)&&(s.blendEquationSeparate(yt[at],yt[St]),v=at,b=St),(ct!==S||bt!==R||Kt!==A||$t!==I)&&(s.blendFuncSeparate(Lt[ct],Lt[bt],Lt[Kt],Lt[$t]),S=ct,R=bt,A=Kt,I=$t),(he.equals(y)===!1||ye!==w)&&(s.blendColor(he.r,he.g,he.b,ye),y.copy(he),w=ye),M=P,z=!1}function ee(P,at){P.side===Oe?Tt(s.CULL_FACE):Ut(s.CULL_FACE);let ct=P.side===Re;at&&(ct=!ct),Bt(ct),P.blending===ni&&P.transparent===!1?gt(dn):gt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const bt=P.stencilWrite;l.setTest(bt),bt&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ut(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(P){G!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),G=P)}function T(P){P!==Ja?(Ut(s.CULL_FACE),P!==J&&(P===Ir?s.cullFace(s.BACK):P===Qa?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),J=P}function x(P){P!==L&&(X&&s.lineWidth(P),L=P)}function B(P,at,ct){P?(Ut(s.POLYGON_OFFSET_FILL),(U!==at||H!==ct)&&(s.polygonOffset(at,ct),U=at,H=ct)):Tt(s.POLYGON_OFFSET_FILL)}function Q(P){P?Ut(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function Z(P){P===void 0&&(P=s.TEXTURE0+q-1),et!==P&&(s.activeTexture(P),et=P)}function tt(P,at,ct){ct===void 0&&(et===null?ct=s.TEXTURE0+q-1:ct=et);let bt=nt[ct];bt===void 0&&(bt={type:void 0,texture:void 0},nt[ct]=bt),(bt.type!==P||bt.texture!==at)&&(et!==ct&&(s.activeTexture(ct),et=ct),s.bindTexture(P,at||pt[P]),bt.type=P,bt.texture=at)}function vt(){const P=nt[et];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Nt(P){lt.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),lt.copy(P))}function qt(P){_t.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),_t.copy(P))}function ie(P,at){let ct=u.get(at);ct===void 0&&(ct=new WeakMap,u.set(at,ct));let bt=ct.get(P);bt===void 0&&(bt=s.getUniformBlockIndex(at,P.name),ct.set(P,bt))}function zt(P,at){const bt=u.get(at).get(P);h.get(at)!==bt&&(s.uniformBlockBinding(at,bt,P.__bindingPointIndex),h.set(at,bt))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},et=null,nt={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,v=null,S=null,R=null,b=null,A=null,I=null,y=new Pt(0,0,0),w=0,z=!1,G=null,J=null,L=null,U=null,H=null,lt.set(0,0,s.canvas.width,s.canvas.height),_t.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ut,disable:Tt,bindFramebuffer:Xt,drawBuffers:N,useProgram:Me,setBlending:gt,setMaterial:ee,setFlipSided:Bt,setCullFace:T,setLineWidth:x,setPolygonOffset:B,setScissorTest:Q,activeTexture:Z,bindTexture:tt,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:dt,texImage2D:Mt,texImage3D:ft,updateUBOMapping:ie,uniformBlockBinding:zt,texStorage2D:Vt,texStorage3D:Ct,texSubImage2D:wt,texSubImage3D:Ot,compressedTexSubImage2D:$,compressedTexSubImage3D:Yt,scissor:Nt,viewport:qt,reset:it}}function up(s,t,e,n,i,r,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):us("canvas")}function _(T,x,B,Q){let Z=1;if((T.width>Q||T.height>Q)&&(Z=Q/Math.max(T.width,T.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const tt=x?hs:Math.floor,vt=tt(Z*T.width),ht=tt(Z*T.height);u===void 0&&(u=g(vt,ht));const dt=B?g(vt,ht):u;return dt.width=vt,dt.height=ht,dt.getContext("2d").drawImage(T,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+vt+"x"+ht+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return ar(T.width)&&ar(T.height)}function d(T){return a?!1:T.wrapS!==Xe||T.wrapT!==Xe||T.minFilter!==be&&T.minFilter!==Be}function M(T,x){return T.generateMipmaps&&x&&T.minFilter!==be&&T.minFilter!==Be}function v(T){s.generateMipmap(T)}function S(T,x,B,Q,Z=!1){if(a===!1)return x;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let tt=x;if(x===s.RED&&(B===s.FLOAT&&(tt=s.R32F),B===s.HALF_FLOAT&&(tt=s.R16F),B===s.UNSIGNED_BYTE&&(tt=s.R8)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(tt=s.R8UI),B===s.UNSIGNED_SHORT&&(tt=s.R16UI),B===s.UNSIGNED_INT&&(tt=s.R32UI),B===s.BYTE&&(tt=s.R8I),B===s.SHORT&&(tt=s.R16I),B===s.INT&&(tt=s.R32I)),x===s.RG&&(B===s.FLOAT&&(tt=s.RG32F),B===s.HALF_FLOAT&&(tt=s.RG16F),B===s.UNSIGNED_BYTE&&(tt=s.RG8)),x===s.RGBA){const vt=Z?os:jt.getTransfer(Q);B===s.FLOAT&&(tt=s.RGBA32F),B===s.HALF_FLOAT&&(tt=s.RGBA16F),B===s.UNSIGNED_BYTE&&(tt=vt===Jt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function R(T,x,B){return M(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==be&&T.minFilter!==Be?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){return T===be||T===Or||T===Ms?s.NEAREST:s.LINEAR}function A(T){const x=T.target;x.removeEventListener("dispose",A),y(x),x.isVideoTexture&&h.delete(x)}function I(T){const x=T.target;x.removeEventListener("dispose",I),z(x)}function y(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,Q=f.get(B);if(Q){const Z=Q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(Q).length===0&&f.delete(B)}n.remove(T)}function w(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const B=T.source,Q=f.get(B);delete Q[x.__cacheKey],o.memory.textures--}function z(T){const x=T.texture,B=n.get(T),Q=n.get(x);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(B.__webglFramebuffer[Z]))for(let tt=0;tt<B.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(B.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(B.__webglFramebuffer[Z]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[Z])}else{if(Array.isArray(B.__webglFramebuffer))for(let Z=0;Z<B.__webglFramebuffer.length;Z++)s.deleteFramebuffer(B.__webglFramebuffer[Z]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Z=0;Z<B.__webglColorRenderbuffer.length;Z++)B.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[Z]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Z=0,tt=x.length;Z<tt;Z++){const vt=n.get(x[Z]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(x[Z])}n.remove(x),n.remove(T)}let G=0;function J(){G=0}function L(){const T=G;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),G+=1,T}function U(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function H(T,x){const B=n.get(T);if(T.isVideoTexture&&ee(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(B,T,x);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function q(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){lt(B,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function X(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){lt(B,T,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function Y(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){_t(B,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}const j={[sr]:s.REPEAT,[Xe]:s.CLAMP_TO_EDGE,[rr]:s.MIRRORED_REPEAT},et={[be]:s.NEAREST,[Or]:s.NEAREST_MIPMAP_NEAREST,[Ms]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[Ic]:s.LINEAR_MIPMAP_NEAREST,[Ti]:s.LINEAR_MIPMAP_LINEAR},nt={[Xc]:s.NEVER,[Zc]:s.ALWAYS,[qc]:s.LESS,[Ea]:s.LEQUAL,[Yc]:s.EQUAL,[$c]:s.GEQUAL,[jc]:s.GREATER,[Kc]:s.NOTEQUAL};function V(T,x,B){if(B?(s.texParameteri(T,s.TEXTURE_WRAP_S,j[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,j[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,j[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,et[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,et[x.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==Xe||x.wrapT!==Xe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,b(x.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==be&&x.minFilter!==Be&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,nt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===be||x.minFilter!==Ms&&x.minFilter!==Ti||x.type===un&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===bi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function K(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const Q=x.source;let Z=f.get(Q);Z===void 0&&(Z={},f.set(Q,Z));const tt=U(x);if(tt!==T.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[tt].usedTimes++;const vt=Z[T.__cacheKey];vt!==void 0&&(Z[T.__cacheKey].usedTimes--,vt.usedTimes===0&&w(x)),T.__cacheKey=tt,T.__webglTexture=Z[tt].texture}return B}function lt(T,x,B){let Q=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=s.TEXTURE_3D);const Z=K(T,x),tt=x.source;e.bindTexture(Q,T.__webglTexture,s.TEXTURE0+B);const vt=n.get(tt);if(tt.version!==vt.__version||Z===!0){e.activeTexture(s.TEXTURE0+B);const ht=jt.getPrimaries(jt.workingColorSpace),dt=x.colorSpace===ke?null:jt.getPrimaries(x.colorSpace),wt=x.colorSpace===ke||ht===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ot=d(x)&&m(x.image)===!1;let $=_(x.image,Ot,!1,i.maxTextureSize);$=Bt(x,$);const Yt=m($)||a,Vt=r.convert(x.format,x.colorSpace);let Ct=r.convert(x.type),Mt=S(x.internalFormat,Vt,Ct,x.colorSpace,x.isVideoTexture);V(Q,x,Yt);let ft;const Nt=x.mipmaps,qt=a&&x.isVideoTexture!==!0&&Mt!==ya,ie=vt.__version===void 0||Z===!0,zt=R(x,$,Yt);if(x.isDepthTexture)Mt=s.DEPTH_COMPONENT,a?x.type===un?Mt=s.DEPTH_COMPONENT32F:x.type===hn?Mt=s.DEPTH_COMPONENT24:x.type===An?Mt=s.DEPTH24_STENCIL8:Mt=s.DEPTH_COMPONENT16:x.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Rn&&Mt===s.DEPTH_COMPONENT&&x.type!==fr&&x.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=hn,Ct=r.convert(x.type)),x.format===ci&&Mt===s.DEPTH_COMPONENT&&(Mt=s.DEPTH_STENCIL,x.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=An,Ct=r.convert(x.type))),ie&&(qt?e.texStorage2D(s.TEXTURE_2D,1,Mt,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,Mt,$.width,$.height,0,Vt,Ct,null));else if(x.isDataTexture)if(Nt.length>0&&Yt){qt&&ie&&e.texStorage2D(s.TEXTURE_2D,zt,Mt,Nt[0].width,Nt[0].height);for(let it=0,P=Nt.length;it<P;it++)ft=Nt[it],qt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,Vt,Ct,ft.data):e.texImage2D(s.TEXTURE_2D,it,Mt,ft.width,ft.height,0,Vt,Ct,ft.data);x.generateMipmaps=!1}else qt?(ie&&e.texStorage2D(s.TEXTURE_2D,zt,Mt,$.width,$.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,Vt,Ct,$.data)):e.texImage2D(s.TEXTURE_2D,0,Mt,$.width,$.height,0,Vt,Ct,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Mt,Nt[0].width,Nt[0].height,$.depth);for(let it=0,P=Nt.length;it<P;it++)ft=Nt[it],x.format!==qe?Vt!==null?qt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,$.depth,Vt,ft.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,Mt,ft.width,ft.height,$.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,$.depth,Vt,Ct,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,Mt,ft.width,ft.height,$.depth,0,Vt,Ct,ft.data)}else{qt&&ie&&e.texStorage2D(s.TEXTURE_2D,zt,Mt,Nt[0].width,Nt[0].height);for(let it=0,P=Nt.length;it<P;it++)ft=Nt[it],x.format!==qe?Vt!==null?qt?e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,Vt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,it,Mt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,Vt,Ct,ft.data):e.texImage2D(s.TEXTURE_2D,it,Mt,ft.width,ft.height,0,Vt,Ct,ft.data)}else if(x.isDataArrayTexture)qt?(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Mt,$.width,$.height,$.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Vt,Ct,$.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,$.width,$.height,$.depth,0,Vt,Ct,$.data);else if(x.isData3DTexture)qt?(ie&&e.texStorage3D(s.TEXTURE_3D,zt,Mt,$.width,$.height,$.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Vt,Ct,$.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,$.width,$.height,$.depth,0,Vt,Ct,$.data);else if(x.isFramebufferTexture){if(ie)if(qt)e.texStorage2D(s.TEXTURE_2D,zt,Mt,$.width,$.height);else{let it=$.width,P=$.height;for(let at=0;at<zt;at++)e.texImage2D(s.TEXTURE_2D,at,Mt,it,P,0,Vt,Ct,null),it>>=1,P>>=1}}else if(Nt.length>0&&Yt){qt&&ie&&e.texStorage2D(s.TEXTURE_2D,zt,Mt,Nt[0].width,Nt[0].height);for(let it=0,P=Nt.length;it<P;it++)ft=Nt[it],qt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,Vt,Ct,ft):e.texImage2D(s.TEXTURE_2D,it,Mt,Vt,Ct,ft);x.generateMipmaps=!1}else qt?(ie&&e.texStorage2D(s.TEXTURE_2D,zt,Mt,$.width,$.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,Ct,$)):e.texImage2D(s.TEXTURE_2D,0,Mt,Vt,Ct,$);M(x,Yt)&&v(Q),vt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _t(T,x,B){if(x.image.length!==6)return;const Q=K(T,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+B);const tt=n.get(Z);if(Z.version!==tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+B);const vt=jt.getPrimaries(jt.workingColorSpace),ht=x.colorSpace===ke?null:jt.getPrimaries(x.colorSpace),dt=x.colorSpace===ke||vt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const wt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,$=[];for(let it=0;it<6;it++)!wt&&!Ot?$[it]=_(x.image[it],!1,!0,i.maxCubemapSize):$[it]=Ot?x.image[it].image:x.image[it],$[it]=Bt(x,$[it]);const Yt=$[0],Vt=m(Yt)||a,Ct=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),ft=S(x.internalFormat,Ct,Mt,x.colorSpace),Nt=a&&x.isVideoTexture!==!0,qt=tt.__version===void 0||Q===!0;let ie=R(x,Yt,Vt);V(s.TEXTURE_CUBE_MAP,x,Vt);let zt;if(wt){Nt&&qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ie,ft,Yt.width,Yt.height);for(let it=0;it<6;it++){zt=$[it].mipmaps;for(let P=0;P<zt.length;P++){const at=zt[P];x.format!==qe?Ct!==null?Nt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,0,0,at.width,at.height,Ct,at.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,ft,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,0,0,at.width,at.height,Ct,Mt,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,ft,at.width,at.height,0,Ct,Mt,at.data)}}}else{zt=x.mipmaps,Nt&&qt&&(zt.length>0&&ie++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ie,ft,$[0].width,$[0].height));for(let it=0;it<6;it++)if(Ot){Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,$[it].width,$[it].height,Ct,Mt,$[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ft,$[it].width,$[it].height,0,Ct,Mt,$[it].data);for(let P=0;P<zt.length;P++){const ct=zt[P].image[it].image;Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,0,0,ct.width,ct.height,Ct,Mt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,ft,ct.width,ct.height,0,Ct,Mt,ct.data)}}else{Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ct,Mt,$[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ft,Ct,Mt,$[it]);for(let P=0;P<zt.length;P++){const at=zt[P];Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,0,0,Ct,Mt,at.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,ft,Ct,Mt,at.image[it])}}}M(x,Vt)&&v(s.TEXTURE_CUBE_MAP),tt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function mt(T,x,B,Q,Z,tt){const vt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),dt=S(B.internalFormat,vt,ht,B.colorSpace);if(!n.get(x).__hasExternalTextures){const Ot=Math.max(1,x.width>>tt),$=Math.max(1,x.height>>tt);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,dt,Ot,$,x.depth,0,vt,ht,null):e.texImage2D(Z,tt,dt,Ot,$,0,vt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),gt(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,Z,n.get(B).__webglTexture,0,Lt(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,Z,n.get(B).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(T,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let Q=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||gt(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===un?Q=s.DEPTH_COMPONENT32F:Z.type===hn&&(Q=s.DEPTH_COMPONENT24));const tt=Lt(x);gt(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,Q,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Q,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const Q=Lt(x);B&&gt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,x.width,x.height):gt(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<Q.length;Z++){const tt=Q[Z],vt=r.convert(tt.format,tt.colorSpace),ht=r.convert(tt.type),dt=S(tt.internalFormat,vt,ht,tt.colorSpace),wt=Lt(x);B&&gt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,dt,x.width,x.height):gt(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,dt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,dt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const Q=n.get(x.depthTexture).__webglTexture,Z=Lt(x);if(x.depthTexture.format===Rn)gt(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(x.depthTexture.format===ci)gt(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Tt(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=s.createRenderbuffer(),pt(x.__webglDepthbuffer[Q],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),pt(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(T,x,B){const Q=n.get(T);x!==void 0&&mt(Q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Tt(T)}function N(T){const x=T.texture,B=n.get(T),Q=n.get(x);T.addEventListener("dispose",I),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=x.version,o.memory.textures++);const Z=T.isWebGLCubeRenderTarget===!0,tt=T.isWebGLMultipleRenderTargets===!0,vt=m(T)||a;if(Z){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let dt=0;dt<x.mipmaps.length;dt++)B.__webglFramebuffer[ht][dt]=s.createFramebuffer()}else B.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)B.__webglFramebuffer[ht]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(tt)if(i.drawBuffers){const ht=T.texture;for(let dt=0,wt=ht.length;dt<wt;dt++){const Ot=n.get(ht[dt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&gt(T)===!1){const ht=tt?x:[x];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<ht.length;dt++){const wt=ht[dt];B.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const Ot=r.convert(wt.format,wt.colorSpace),$=r.convert(wt.type),Yt=S(wt.internalFormat,Ot,$,wt.colorSpace,T.isXRRenderTarget===!0),Vt=Lt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Yt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),V(s.TEXTURE_CUBE_MAP,x,vt);for(let ht=0;ht<6;ht++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)mt(B.__webglFramebuffer[ht][dt],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else mt(B.__webglFramebuffer[ht],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);M(x,vt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const ht=T.texture;for(let dt=0,wt=ht.length;dt<wt;dt++){const Ot=ht[dt],$=n.get(Ot);e.bindTexture(s.TEXTURE_2D,$.__webglTexture),V(s.TEXTURE_2D,Ot,vt),mt(B.__webglFramebuffer,T,Ot,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),M(Ot,vt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ht=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,Q.__webglTexture),V(ht,x,vt),a&&x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)mt(B.__webglFramebuffer[dt],T,x,s.COLOR_ATTACHMENT0,ht,dt);else mt(B.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ht,0);M(x,vt)&&v(ht),e.unbindTexture()}T.depthBuffer&&Tt(T)}function Me(T){const x=m(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,Z=B.length;Q<Z;Q++){const tt=B[Q];if(M(tt,x)){const vt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ht=n.get(tt).__webglTexture;e.bindTexture(vt,ht),v(vt),e.unbindTexture()}}}function yt(T){if(a&&T.samples>0&&gt(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,Q=T.height;let Z=s.COLOR_BUFFER_BIT;const tt=[],vt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(T),dt=T.isWebGLMultipleRenderTargets===!0;if(dt)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){tt.push(s.COLOR_ATTACHMENT0+wt),T.depthBuffer&&tt.push(vt);const Ot=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Ot===!1&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),dt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[wt]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[vt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[vt])),dt){const $=n.get(x[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,B,Q,0,0,B,Q,Z,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,ht.__webglColorRenderbuffer[wt]);const Ot=n.get(x[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function Lt(T){return Math.min(i.maxSamples,T.samples)}function gt(T){const x=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ee(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Bt(T,x){const B=T.colorSpace,Q=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===or||B!==sn&&B!==ke&&(jt.getTransfer(B)===Jt?a===!1?t.has("EXT_sRGB")===!0&&Q===qe?(T.format=or,T.minFilter=Be,T.generateMipmaps=!1):x=Ta.sRGBToLinear(x):(Q!==qe||Z!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}this.allocateTextureUnit=L,this.resetTextureUnits=J,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=gt}function dp(s,t,e){const n=e.isWebGL2;function i(r,o=ke){let a;const c=jt.getTransfer(o);if(r===pn)return s.UNSIGNED_BYTE;if(r===ga)return s.UNSIGNED_SHORT_4_4_4_4;if(r===_a)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Uc)return s.BYTE;if(r===Nc)return s.SHORT;if(r===fr)return s.UNSIGNED_SHORT;if(r===ma)return s.INT;if(r===hn)return s.UNSIGNED_INT;if(r===un)return s.FLOAT;if(r===bi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Fc)return s.ALPHA;if(r===qe)return s.RGBA;if(r===Bc)return s.LUMINANCE;if(r===Oc)return s.LUMINANCE_ALPHA;if(r===Rn)return s.DEPTH_COMPONENT;if(r===ci)return s.DEPTH_STENCIL;if(r===or)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===kc)return s.RED;if(r===va)return s.RED_INTEGER;if(r===zc)return s.RG;if(r===xa)return s.RG_INTEGER;if(r===Ma)return s.RGBA_INTEGER;if(r===ys||r===Ss||r===Es||r===ws)if(c===Jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ys)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ys)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ss)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Es)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kr||r===zr||r===Gr||r===Hr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===kr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ya)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vr||r===Wr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vr)return c===Jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Wr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xr||r===qr||r===Yr||r===jr||r===Kr||r===$r||r===Zr||r===Jr||r===Qr||r===to||r===eo||r===no||r===io||r===so)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$r)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===to)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eo)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===no)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===io)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===so)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ts||r===ro||r===oo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ts)return c===Jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ro)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gc||r===ao||r===co||r===lo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ts)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ao)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===co)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===An?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class fp extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pp={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class mp extends In{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const M=[],v=[],S=new Rt;let R=null;const b=new Ie;b.layers.enable(1),b.viewport=new Qt;const A=new Ie;A.layers.enable(2),A.viewport=new Qt;const I=[b,A],y=new fp;y.layers.enable(1),y.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=M[V];return K===void 0&&(K=new js,M[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=M[V];return K===void 0&&(K=new js,M[V]=K),K.getGripSpace()},this.getHand=function(V){let K=M[V];return K===void 0&&(K=new js,M[V]=K),K.getHandSpace()};function G(V){const K=v.indexOf(V.inputSource);if(K===-1)return;const lt=M[K];lt!==void 0&&(lt.update(V.inputSource,V.frame,l||o),lt.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",L);for(let V=0;V<M.length;V++){const K=v[V];K!==null&&(v[V]=null,M[V].disconnect(K))}w=null,z=null,t.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",J),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Pn(p.framebufferWidth,p.framebufferHeight,{format:qe,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,lt=null,_t=null;_.depth&&(_t=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?ci:Rn,lt=_.stencil?An:hn);const mt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(mt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Pn(f.textureWidth,f.textureHeight,{format:qe,type:pn,depthTexture:new Fa(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const pt=t.properties.get(d);pt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(V){for(let K=0;K<V.removed.length;K++){const lt=V.removed[K],_t=v.indexOf(lt);_t>=0&&(v[_t]=null,M[_t].disconnect(lt))}for(let K=0;K<V.added.length;K++){const lt=V.added[K];let _t=v.indexOf(lt);if(_t===-1){for(let pt=0;pt<M.length;pt++)if(pt>=v.length){v.push(lt),_t=pt;break}else if(v[pt]===null){v[pt]=lt,_t=pt;break}if(_t===-1)break}const mt=M[_t];mt&&mt.connect(lt)}}const U=new C,H=new C;function q(V,K,lt){U.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(lt.matrixWorld);const _t=U.distanceTo(H),mt=K.projectionMatrix.elements,pt=lt.projectionMatrix.elements,Ut=mt[14]/(mt[10]-1),Tt=mt[14]/(mt[10]+1),Xt=(mt[9]+1)/mt[5],N=(mt[9]-1)/mt[5],Me=(mt[8]-1)/mt[0],yt=(pt[8]+1)/pt[0],Lt=Ut*Me,gt=Ut*yt,ee=_t/(-Me+yt),Bt=ee*-Me;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Bt),V.translateZ(ee),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const T=Ut+ee,x=Tt+ee,B=Lt-Bt,Q=gt+(_t-Bt),Z=Xt*Tt/x*T,tt=N*Tt/x*T;V.projectionMatrix.makePerspective(B,Q,Z,tt,T,x),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;y.near=A.near=b.near=V.near,y.far=A.far=b.far=V.far,(w!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,z=y.far);const K=V.parent,lt=y.cameras;X(y,K);for(let _t=0;_t<lt.length;_t++)X(lt[_t],K);lt.length===2?q(y,b,A):y.projectionMatrix.copy(b.projectionMatrix),Y(V,y,K)};function Y(V,K,lt){lt===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(lt.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ai*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let j=null;function et(V,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let _t=!1;lt.length!==y.cameras.length&&(y.cameras.length=0,_t=!0);for(let mt=0;mt<lt.length;mt++){const pt=lt[mt];let Ut=null;if(p!==null)Ut=p.getViewport(pt);else{const Xt=u.getViewSubImage(f,pt);Ut=Xt.viewport,mt===0&&(t.setRenderTargetTextures(d,Xt.colorTexture,f.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(d))}let Tt=I[mt];Tt===void 0&&(Tt=new Ie,Tt.layers.enable(mt),Tt.viewport=new Qt,I[mt]=Tt),Tt.matrix.fromArray(pt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(pt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),mt===0&&(y.matrix.copy(Tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_t===!0&&y.cameras.push(Tt)}}for(let lt=0;lt<M.length;lt++){const _t=v[lt],mt=M[lt];_t!==null&&mt!==void 0&&mt.update(_t,K,l||o)}j&&j(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const nt=new Ua;nt.setAnimationLoop(et),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}}function gp(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,La(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,M,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Re&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Re&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Re&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _p(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function l(M,v){let S=i[M.id];S===void 0&&(g(M),S=h(M),i[M.id]=S,M.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(M,R);const b=t.render.frame;r[M.id]!==b&&(f(M),r[M.id]=b)}function h(M){const v=u();M.__bindingPointIndex=v;const S=s.createBuffer(),R=M.__size,b=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,R,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],S=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,A=S.length;b<A;b++){const I=Array.isArray(S[b])?S[b]:[S[b]];for(let y=0,w=I.length;y<w;y++){const z=I[y];if(p(z,b,y,R)===!0){const G=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let U=0;U<J.length;U++){const H=J[U],q=_(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+L,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,v,S,R){const b=M.value,A=v+"_"+S;if(R[A]===void 0)return typeof b=="number"||typeof b=="boolean"?R[A]=b:R[A]=b.clone(),!0;{const I=R[A];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return R[A]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(M){const v=M.uniforms;let S=0;const R=16;for(let A=0,I=v.length;A<I;A++){const y=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,z=y.length;w<z;w++){const G=y[w],J=Array.isArray(G.value)?G.value:[G.value];for(let L=0,U=J.length;L<U;L++){const H=J[L],q=_(H),X=S%R;X!==0&&R-X<q.boundary&&(S+=R-X),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=q.storage}}}const b=S%R;return b>0&&(S+=R-b),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function d(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}class Ha{constructor(t={}){const{canvas:e=dl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this._useLegacyLights=!1,this.toneMapping=fn,this.toneMappingExposure=1;const v=this;let S=!1,R=0,b=0,A=null,I=-1,y=null;const w=new Qt,z=new Qt;let G=null;const J=new Pt(0);let L=0,U=e.width,H=e.height,q=1,X=null,Y=null;const j=new Qt(0,0,U,H),et=new Qt(0,0,U,H);let nt=!1;const V=new vr;let K=!1,lt=!1,_t=null;const mt=new re,pt=new Rt,Ut=new C,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xt(){return A===null?q:1}let N=n;function Me(E,D){for(let O=0;O<E.length;O++){const k=E[O],F=e.getContext(k,D);if(F!==null)return F}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ur}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",at,!1),N===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),N=Me(D,E),N===null)throw Me(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let yt,Lt,gt,ee,Bt,T,x,B,Q,Z,tt,vt,ht,dt,wt,Ot,$,Yt,Vt,Ct,Mt,ft,Nt,qt;function ie(){yt=new bd(N),Lt=new Md(N,yt,t),yt.init(Lt),ft=new dp(N,yt,Lt),gt=new hp(N,yt,Lt),ee=new Cd(N),Bt=new $f,T=new up(N,yt,gt,Bt,Lt,ft,ee),x=new Sd(v),B=new Td(v),Q=new Bl(N,Lt),Nt=new vd(N,yt,Q,Lt),Z=new Ad(N,Q,ee,Nt),tt=new Id(N,Z,Q,ee),Vt=new Dd(N,Lt,T),Ot=new yd(Bt),vt=new Kf(v,x,B,yt,Lt,Nt,Ot),ht=new gp(v,Bt),dt=new Jf,wt=new sp(yt,Lt),Yt=new _d(v,x,B,gt,tt,f,c),$=new lp(v,tt,Lt),qt=new _p(N,ee,Lt,gt),Ct=new xd(N,yt,ee,Lt),Mt=new Rd(N,yt,ee,Lt),ee.programs=vt.programs,v.capabilities=Lt,v.extensions=yt,v.properties=Bt,v.renderLists=dt,v.shadowMap=$,v.state=gt,v.info=ee}ie();const zt=new mp(v,N);this.xr=zt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(U,H,!1))},this.getSize=function(E){return E.set(U,H)},this.setSize=function(E,D,O=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,H=D,e.width=Math.floor(E*q),e.height=Math.floor(D*q),O===!0&&(e.style.width=E+"px",e.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(U*q,H*q).floor()},this.setDrawingBufferSize=function(E,D,O){U=E,H=D,q=O,e.width=Math.floor(E*O),e.height=Math.floor(D*O),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,D,O,k){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,D,O,k),gt.viewport(w.copy(j).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(et)},this.setScissor=function(E,D,O,k){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,D,O,k),gt.scissor(z.copy(et).multiplyScalar(q).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){gt.setScissorTest(nt=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(E=!0,D=!0,O=!0){let k=0;if(E){let F=!1;if(A!==null){const ut=A.texture.format;F=ut===Ma||ut===xa||ut===va}if(F){const ut=A.texture.type,xt=ut===pn||ut===hn||ut===fr||ut===An||ut===ga||ut===_a,Et=Yt.getClearColor(),At=Yt.getClearAlpha(),kt=Et.r,Dt=Et.g,It=Et.b;xt?(p[0]=kt,p[1]=Dt,p[2]=It,p[3]=At,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=kt,g[1]=Dt,g[2]=It,g[3]=At,N.clearBufferiv(N.COLOR,0,g))}else k|=N.COLOR_BUFFER_BIT}D&&(k|=N.DEPTH_BUFFER_BIT),O&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",at,!1),dt.dispose(),wt.dispose(),Bt.dispose(),x.dispose(),B.dispose(),tt.dispose(),Nt.dispose(),qt.dispose(),vt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",ye),zt.removeEventListener("sessionend",Zt),_t&&(_t.dispose(),_t=null),Se.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=ee.autoReset,D=$.enabled,O=$.autoUpdate,k=$.needsUpdate,F=$.type;ie(),ee.autoReset=E,$.enabled=D,$.autoUpdate=O,$.needsUpdate=k,$.type=F}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ct(E){const D=E.target;D.removeEventListener("dispose",ct),bt(D)}function bt(E){St(E),Bt.remove(E)}function St(E){const D=Bt.get(E).programs;D!==void 0&&(D.forEach(function(O){vt.releaseProgram(O)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,O,k,F,ut){D===null&&(D=Tt);const xt=F.isMesh&&F.matrixWorld.determinant()<0,Et=ja(E,D,O,k,F);gt.setMaterial(k,xt);let At=O.index,kt=1;if(k.wireframe===!0){if(At=Z.getWireframeAttribute(O),At===void 0)return;kt=2}const Dt=O.drawRange,It=O.attributes.position;let oe=Dt.start*kt,Pe=(Dt.start+Dt.count)*kt;ut!==null&&(oe=Math.max(oe,ut.start*kt),Pe=Math.min(Pe,(ut.start+ut.count)*kt)),At!==null?(oe=Math.max(oe,0),Pe=Math.min(Pe,At.count)):It!=null&&(oe=Math.max(oe,0),Pe=Math.min(Pe,It.count));const ue=Pe-oe;if(ue<0||ue===1/0)return;Nt.setup(F,k,Et,O,At);let Ke,ne=Ct;if(At!==null&&(Ke=Q.get(At),ne=Mt,ne.setIndex(Ke)),F.isMesh)k.wireframe===!0?(gt.setLineWidth(k.wireframeLinewidth*Xt()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(F.isLine){let Gt=k.linewidth;Gt===void 0&&(Gt=1),gt.setLineWidth(Gt*Xt()),F.isLineSegments?ne.setMode(N.LINES):F.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else F.isPoints?ne.setMode(N.POINTS):F.isSprite&&ne.setMode(N.TRIANGLES);if(F.isBatchedMesh)ne.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ne.renderInstances(oe,ue,F.count);else if(O.isInstancedBufferGeometry){const Gt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,gs=Math.min(O.instanceCount,Gt);ne.renderInstances(oe,ue,gs)}else ne.render(oe,ue)};function Kt(E,D,O){E.transparent===!0&&E.side===Oe&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,Li(E,D,O),E.side=mn,E.needsUpdate=!0,Li(E,D,O),E.side=Oe):Li(E,D,O)}this.compile=function(E,D,O=null){O===null&&(O=E),m=wt.get(O),m.init(),M.push(m),O.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),E!==O&&E.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v._useLegacyLights);const k=new Set;return E.traverse(function(F){const ut=F.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Et=ut[xt];Kt(Et,O,F),k.add(Et)}else Kt(ut,O,F),k.add(ut)}),M.pop(),m=null,k},this.compileAsync=function(E,D,O=null){const k=this.compile(E,D,O);return new Promise(F=>{function ut(){if(k.forEach(function(xt){Bt.get(xt).currentProgram.isReady()&&k.delete(xt)}),k.size===0){F(E);return}setTimeout(ut,10)}yt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let $t=null;function he(E){$t&&$t(E)}function ye(){Se.stop()}function Zt(){Se.start()}const Se=new Ua;Se.setAnimationLoop(he),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(E){$t=E,zt.setAnimationLoop(E),E===null?Se.stop():Se.start()},zt.addEventListener("sessionstart",ye),zt.addEventListener("sessionend",Zt),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(D),D=zt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,D,A),m=wt.get(E,M.length),m.init(),M.push(m),mt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(mt),lt=this.localClippingEnabled,K=Ot.init(this.clippingPlanes,lt),_=dt.get(E,d.length),_.init(),d.push(_),Ye(E,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,Y),this.info.render.frame++,K===!0&&Ot.beginShadows();const O=m.state.shadowsArray;if($.render(O,E,D),K===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(_,E),m.setupLights(v._useLegacyLights),D.isArrayCamera){const k=D.cameras;for(let F=0,ut=k.length;F<ut;F++){const xt=k[F];Ar(_,E,xt,xt.viewport)}}else Ar(_,E,D);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,D),Nt.resetDefaultState(),I=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ye(E,D,O,k){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){k&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);const xt=tt.update(E),Et=E.material;Et.visible&&_.push(E,xt,Et,O,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const xt=tt.update(E),Et=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ut.copy(xt.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(Et)){const At=xt.groups;for(let kt=0,Dt=At.length;kt<Dt;kt++){const It=At[kt],oe=Et[It.materialIndex];oe&&oe.visible&&_.push(E,xt,oe,O,Ut.z,It)}}else Et.visible&&_.push(E,xt,Et,O,Ut.z,null)}}const ut=E.children;for(let xt=0,Et=ut.length;xt<Et;xt++)Ye(ut[xt],D,O,k)}function Ar(E,D,O,k){const F=E.opaque,ut=E.transmissive,xt=E.transparent;m.setupLightsView(O),K===!0&&Ot.setGlobalState(v.clippingPlanes,O),ut.length>0&&Ya(F,ut,D,O),k&&gt.viewport(w.copy(k)),F.length>0&&Pi(F,D,O),ut.length>0&&Pi(ut,D,O),xt.length>0&&Pi(xt,D,O),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Ya(E,D,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const ut=Lt.isWebGL2;_t===null&&(_t=new Pn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?bi:pn,minFilter:Ti,samples:ut?4:0})),v.getDrawingBufferSize(pt),ut?_t.setSize(pt.x,pt.y):_t.setSize(hs(pt.x),hs(pt.y));const xt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(J),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Et=v.toneMapping;v.toneMapping=fn,Pi(E,O,k),T.updateMultisampleRenderTarget(_t),T.updateRenderTargetMipmap(_t);let At=!1;for(let kt=0,Dt=D.length;kt<Dt;kt++){const It=D[kt],oe=It.object,Pe=It.geometry,ue=It.material,Ke=It.group;if(ue.side===Oe&&oe.layers.test(k.layers)){const ne=ue.side;ue.side=Re,ue.needsUpdate=!0,Rr(oe,O,k,Pe,ue,Ke),ue.side=ne,ue.needsUpdate=!0,At=!0}}At===!0&&(T.updateMultisampleRenderTarget(_t),T.updateRenderTargetMipmap(_t)),v.setRenderTarget(xt),v.setClearColor(J,L),v.toneMapping=Et}function Pi(E,D,O){const k=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ut=E.length;F<ut;F++){const xt=E[F],Et=xt.object,At=xt.geometry,kt=k===null?xt.material:k,Dt=xt.group;Et.layers.test(O.layers)&&Rr(Et,D,O,At,kt,Dt)}}function Rr(E,D,O,k,F,ut){E.onBeforeRender(v,D,O,k,F,ut),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,D,O,k,E,ut),F.transparent===!0&&F.side===Oe&&F.forceSinglePass===!1?(F.side=Re,F.needsUpdate=!0,v.renderBufferDirect(O,D,k,F,E,ut),F.side=mn,F.needsUpdate=!0,v.renderBufferDirect(O,D,k,F,E,ut),F.side=Oe):v.renderBufferDirect(O,D,k,F,E,ut),E.onAfterRender(v,D,O,k,F,ut)}function Li(E,D,O){D.isScene!==!0&&(D=Tt);const k=Bt.get(E),F=m.state.lights,ut=m.state.shadowsArray,xt=F.state.version,Et=vt.getParameters(E,F.state,ut,D,O),At=vt.getProgramCacheKey(Et);let kt=k.programs;k.environment=E.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(E.isMeshStandardMaterial?B:x).get(E.envMap||k.environment),kt===void 0&&(E.addEventListener("dispose",ct),kt=new Map,k.programs=kt);let Dt=kt.get(At);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===xt)return Pr(E,Et),Dt}else Et.uniforms=vt.getUniforms(E),E.onBuild(O,Et,v),E.onBeforeCompile(Et,v),Dt=vt.acquireProgram(Et,At),kt.set(At,Dt),k.uniforms=Et.uniforms;const It=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=Ot.uniform),Pr(E,Et),k.needsLights=$a(E),k.lightsStateVersion=xt,k.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function Cr(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=ss.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Pr(E,D){const O=Bt.get(E);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function ja(E,D,O,k,F){D.isScene!==!0&&(D=Tt),T.resetTextureUnits();const ut=D.fog,xt=k.isMeshStandardMaterial?D.environment:null,Et=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:sn,At=(k.isMeshStandardMaterial?B:x).get(k.envMap||xt),kt=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Dt=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),It=!!O.morphAttributes.position,oe=!!O.morphAttributes.normal,Pe=!!O.morphAttributes.color;let ue=fn;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ue=v.toneMapping);const Ke=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=Ke!==void 0?Ke.length:0,Gt=Bt.get(k),gs=m.state.lights;if(K===!0&&(lt===!0||E!==y)){const Ne=E===y&&k.id===I;Ot.setState(k,E,Ne)}let se=!1;k.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==gs.state.version||Gt.outputColorSpace!==Et||F.isBatchedMesh&&Gt.batching===!1||!F.isBatchedMesh&&Gt.batching===!0||F.isInstancedMesh&&Gt.instancing===!1||!F.isInstancedMesh&&Gt.instancing===!0||F.isSkinnedMesh&&Gt.skinning===!1||!F.isSkinnedMesh&&Gt.skinning===!0||F.isInstancedMesh&&Gt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Gt.instancingColor===!1&&F.instanceColor!==null||Gt.envMap!==At||k.fog===!0&&Gt.fog!==ut||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ot.numPlanes||Gt.numIntersection!==Ot.numIntersection)||Gt.vertexAlphas!==kt||Gt.vertexTangents!==Dt||Gt.morphTargets!==It||Gt.morphNormals!==oe||Gt.morphColors!==Pe||Gt.toneMapping!==ue||Lt.isWebGL2===!0&&Gt.morphTargetsCount!==ne)&&(se=!0):(se=!0,Gt.__version=k.version);let _n=Gt.currentProgram;se===!0&&(_n=Li(k,D,F));let Lr=!1,pi=!1,_s=!1;const _e=_n.getUniforms(),vn=Gt.uniforms;if(gt.useProgram(_n.program)&&(Lr=!0,pi=!0,_s=!0),k.id!==I&&(I=k.id,pi=!0),Lr||y!==E){_e.setValue(N,"projectionMatrix",E.projectionMatrix),_e.setValue(N,"viewMatrix",E.matrixWorldInverse);const Ne=_e.map.cameraPosition;Ne!==void 0&&Ne.setValue(N,Ut.setFromMatrixPosition(E.matrixWorld)),Lt.logarithmicDepthBuffer&&_e.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_e.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,pi=!0,_s=!0)}if(F.isSkinnedMesh){_e.setOptional(N,F,"bindMatrix"),_e.setOptional(N,F,"bindMatrixInverse");const Ne=F.skeleton;Ne&&(Lt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),_e.setValue(N,"boneTexture",Ne.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(_e.setOptional(N,F,"batchingTexture"),_e.setValue(N,"batchingTexture",F._matricesTexture,T));const vs=O.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0&&Lt.isWebGL2===!0)&&Vt.update(F,O,_n),(pi||Gt.receiveShadow!==F.receiveShadow)&&(Gt.receiveShadow=F.receiveShadow,_e.setValue(N,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(vn.envMap.value=At,vn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),pi&&(_e.setValue(N,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&Ka(vn,_s),ut&&k.fog===!0&&ht.refreshFogUniforms(vn,ut),ht.refreshMaterialUniforms(vn,k,q,H,_t),ss.upload(N,Cr(Gt),vn,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ss.upload(N,Cr(Gt),vn,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_e.setValue(N,"center",F.center),_e.setValue(N,"modelViewMatrix",F.modelViewMatrix),_e.setValue(N,"normalMatrix",F.normalMatrix),_e.setValue(N,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ne=k.uniformsGroups;for(let xs=0,Za=Ne.length;xs<Za;xs++)if(Lt.isWebGL2){const Dr=Ne[xs];qt.update(Dr,_n),qt.bind(Dr,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function Ka(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function $a(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,D,O){Bt.get(E.texture).__webglTexture=D,Bt.get(E.depthTexture).__webglTexture=O;const k=Bt.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const O=Bt.get(E);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,O=0){A=E,R=D,b=O;let k=!0,F=null,ut=!1,xt=!1;if(E){const At=Bt.get(E);At.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(N.FRAMEBUFFER,null),k=!1):At.__webglFramebuffer===void 0?T.setupRenderTarget(E):At.__hasExternalTextures&&T.rebindTextures(E,Bt.get(E.texture).__webglTexture,Bt.get(E.depthTexture).__webglTexture);const kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(xt=!0);const Dt=Bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?F=Dt[D][O]:F=Dt[D],ut=!0):Lt.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?F=Bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?F=Dt[O]:F=Dt,w.copy(E.viewport),z.copy(E.scissor),G=E.scissorTest}else w.copy(j).multiplyScalar(q).floor(),z.copy(et).multiplyScalar(q).floor(),G=nt;if(gt.bindFramebuffer(N.FRAMEBUFFER,F)&&Lt.drawBuffers&&k&&gt.drawBuffers(E,F),gt.viewport(w),gt.scissor(z),gt.setScissorTest(G),ut){const At=Bt.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,At.__webglTexture,O)}else if(xt){const At=Bt.get(E.texture),kt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.__webglTexture,O||0,kt)}I=-1},this.readRenderTargetPixels=function(E,D,O,k,F,ut,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){gt.bindFramebuffer(N.FRAMEBUFFER,Et);try{const At=E.texture,kt=At.format,Dt=At.type;if(kt!==qe&&ft.convert(kt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Dt===bi&&(yt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Dt!==pn&&ft.convert(Dt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===un&&(Lt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-k&&O>=0&&O<=E.height-F&&N.readPixels(D,O,k,F,ft.convert(kt),ft.convert(Dt),ut)}finally{const At=A!==null?Bt.get(A).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(E,D,O=0){const k=Math.pow(2,-O),F=Math.floor(D.image.width*k),ut=Math.floor(D.image.height*k);T.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,E.x,E.y,F,ut),gt.unbindTexture()},this.copyTextureToTexture=function(E,D,O,k=0){const F=D.image.width,ut=D.image.height,xt=ft.convert(O.format),Et=ft.convert(O.type);T.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,E.x,E.y,F,ut,xt,Et,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,xt,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,k,E.x,E.y,xt,Et,D.image),k===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(E,D,O,k,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=E.max.x-E.min.x+1,xt=E.max.y-E.min.y+1,Et=E.max.z-E.min.z+1,At=ft.convert(k.format),kt=ft.convert(k.type);let Dt;if(k.isData3DTexture)T.setTexture3D(k,0),Dt=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)T.setTexture2DArray(k,0),Dt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const It=N.getParameter(N.UNPACK_ROW_LENGTH),oe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Pe=N.getParameter(N.UNPACK_SKIP_PIXELS),ue=N.getParameter(N.UNPACK_SKIP_ROWS),Ke=N.getParameter(N.UNPACK_SKIP_IMAGES),ne=O.isCompressedTexture?O.mipmaps[F]:O.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ne.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(Dt,F,D.x,D.y,D.z,ut,xt,Et,At,kt,ne.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Dt,F,D.x,D.y,D.z,ut,xt,Et,At,ne.data)):N.texSubImage3D(Dt,F,D.x,D.y,D.z,ut,xt,Et,At,kt,ne),N.pixelStorei(N.UNPACK_ROW_LENGTH,It),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke),F===0&&k.generateMipmaps&&N.generateMipmap(Dt),gt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),gt.unbindTexture()},this.resetState=function(){R=0,b=0,A=null,gt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===mr?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===fs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===me?Cn:Sa}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Cn?me:sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class vp extends Ha{}vp.prototype.isWebGL1Renderer=!0;class Mr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new Mr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xp extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class yr extends gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qo=new C,ta=new C,ea=new re,Ks=new ps,ts=new Ci;class Va extends fe{constructor(t=new ge,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Qo.fromBufferAttribute(e,i-1),ta.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Qo.distanceTo(ta);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(i),ts.radius+=r,t.ray.intersectsSphere(ts)===!1)return;ea.copy(i).invert(),Ks.copy(t.ray).applyMatrix4(ea);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,h=new C,u=new C,f=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=d,S=M-1;v<S;v+=p){const R=g.getX(v),b=g.getX(v+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,b),Ks.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(f);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let v=d,S=M-1;v<S;v+=p){if(l.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Ks.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const na=new C,ia=new C;class Mp extends Va{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)na.fromBufferAttribute(e,i),ia.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+na.distanceTo(ia);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wa extends gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sa=new re,lr=new ps,es=new Ci,ns=new C;class yp extends fe{constructor(t=new ge,e=new Wa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(i),es.radius+=r,t.ray.intersectsSphere(es)===!1)return;sa.copy(i).invert(),lr.copy(t.ray).applyMatrix4(sa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);ns.fromBufferAttribute(u,m),ra(ns,m,c,i,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)ns.fromBufferAttribute(u,g),ra(ns,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ra(s,t,e,n,i,r,o){const a=lr.distanceSqToPoint(s);if(a<e){const c=new C;lr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Ei extends ge{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new C,h=new Rt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Te extends ge{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(p,2));function M(){const S=new C,R=new C;let b=0;const A=(e-t)/n;for(let I=0;I<=r;I++){const y=[],w=I/r,z=w*(e-t)+t;for(let G=0;G<=i;G++){const J=G/i,L=J*c+a,U=Math.sin(L),H=Math.cos(L);R.x=z*U,R.y=-w*n+m,R.z=z*H,u.push(R.x,R.y,R.z),S.set(U,A,H).normalize(),f.push(S.x,S.y,S.z),p.push(J,1-w),y.push(g++)}_.push(y)}for(let I=0;I<i;I++)for(let y=0;y<r;y++){const w=_[y][I],z=_[y+1][I],G=_[y+1][I+1],J=_[y][I+1];h.push(w,z,J),h.push(z,G,J),b+=6}l.addGroup(d,b,0),d+=b}function v(S){const R=g,b=new Rt,A=new C;let I=0;const y=S===!0?t:e,w=S===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),g++;const z=g;for(let G=0;G<=i;G++){const L=G/i*c+a,U=Math.cos(L),H=Math.sin(L);A.x=y*H,A.y=m*w,A.z=y*U,u.push(A.x,A.y,A.z),f.push(0,w,0),b.x=U*.5+.5,b.y=H*.5*w+.5,p.push(b.x,b.y),g++}for(let G=0;G<i;G++){const J=R+G,L=z+G;S===!0?h.push(L,L+1,J):h.push(L+1,L,J),I+=3}l.addGroup(d,I,S===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wi extends Te{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new wi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sr extends ge{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new C,S=new C,R=new C;for(let b=0;b<e.length;b+=3)p(e[b+0],v),p(e[b+1],S),p(e[b+2],R),c(v,S,R,M)}function c(M,v,S,R){const b=R+1,A=[];for(let I=0;I<=b;I++){A[I]=[];const y=M.clone().lerp(S,I/b),w=v.clone().lerp(S,I/b),z=b-I;for(let G=0;G<=z;G++)G===0&&I===b?A[I][G]=y:A[I][G]=y.clone().lerp(w,G/z)}for(let I=0;I<b;I++)for(let y=0;y<2*(b-I)-1;y++){const w=Math.floor(y/2);y%2===0?(f(A[I][w+1]),f(A[I+1][w]),f(A[I][w])):(f(A[I][w+1]),f(A[I+1][w+1]),f(A[I+1][w]))}}function l(M){const v=new C;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(M),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const M=new C;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const S=m(M)/2/Math.PI+.5,R=d(M)/Math.PI+.5;o.push(S,1-R)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const v=o[M+0],S=o[M+2],R=o[M+4],b=Math.max(v,S,R),A=Math.min(v,S,R);b>.9&&A<.1&&(v<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,v){const S=M*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const M=new C,v=new C,S=new C,R=new C,b=new Rt,A=new Rt,I=new Rt;for(let y=0,w=0;y<r.length;y+=9,w+=6){M.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),b.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),R.copy(M).add(v).add(S).divideScalar(3);const z=m(R);_(b,w+0,M,z),_(A,w+2,v,z),_(I,w+4,S,z)}}function _(M,v,S,R){R<0&&M.x===1&&(o[v]=M.x-1),S.x===0&&S.z===0&&(o[v]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.vertices,t.indices,t.radius,t.details)}}class Er extends Sr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Er(t.radius,t.detail)}}class si extends ge{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new C,f=new C,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const M=[],v=d/n;let S=0;d===0&&o===0?S=.5/e:d===n&&c===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const b=R/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(b+S,1-v),M.push(l++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const v=h[d][M+1],S=h[d][M],R=h[d+1][M],b=h[d+1][M+1];(d!==0||o>0)&&p.push(v,S,b),(d!==n-1||c<Math.PI)&&p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wr extends ge{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new C,u=new C,f=new C;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,M=(i+1)*p+g;o.push(_,m,M),o.push(m,d,M)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ot extends gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $n extends gn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tr extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const $s=new re,oa=new C,aa=new C;class Xa{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;oa.setFromMatrixPosition(t.matrixWorld),e.position.copy(oa),aa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(aa),e.updateMatrixWorld(),$s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($s)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ca=new re,xi=new C,Zs=new C;class Sp extends Xa{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xi.setFromMatrixPosition(t.matrixWorld),n.position.copy(xi),Zs.copy(n.position),Zs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zs),n.updateMatrixWorld(),i.makeTranslation(-xi.x,-xi.y,-xi.z),ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca)}}class Ep extends Tr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wp extends Xa{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tp extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new wp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bp extends Tr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ap{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=la(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=la();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function la(){return(typeof performance>"u"?Date:performance).now()}class ri{constructor(t,e,n=0,i=1/0){this.ray=new ps(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return hr(t,this,n,e),n.sort(ha),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)hr(t[i],this,n,e);return n.sort(ha),n}}function ha(s,t){return s.distance-t.distance}function hr(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)hr(i[r],t,e,!0)}}const is=new ui;class Rp extends Mp{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new ge;r.setIndex(new Ce(n,1)),r.setAttribute("position",new Ce(i,3)),super(r,new yr({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&is.setFromObject(this.object),is.isEmpty())return;const e=is.min,n=is.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ur);const Cp="/threejs-voxel-firecraft/dist/assets/background-music-by-suno-B4M28EgO.ogg",qa=400;class Pp{constructor(t,e,n){this.scene=t,this.itemManager=e,this.objects=[],this.gameMode=n&&n.gameMode?n.gameMode:"survival",this.gameMode==="arena"?this.mapSize=150:this.mapSize=n&&n.mapSize?n.mapSize:qa,this.halfMapSize=this.mapSize/2,this.stormRadius=this.halfMapSize,this.initialStormRadius=this.stormRadius,this._heightFn=this._buildHeightFn();const i=n?n.stormTime:180;this.stormShrinkRate=this.stormRadius/i,this.safeZoneCenter=new C(0,0,0),this.init()}init(){this.gameMode==="arena"?this.createArenaEnvironment():this.gameMode==="matrix"?this.createMatrixEnvironment():this.gameMode==="studio"?this.createStudioEnvironment():this.createEnvironment(),this.gameMode!=="matrix"&&this.gameMode!=="studio"&&this.createStormVisuals()}createEnvironment(){const t=(p=1)=>(Math.random()-.5)*(this.mapSize*p),e=(p=1)=>{const g=this.halfMapSize-5,_=t(p);return Math.max(-g,Math.min(g,_))},n=(p,g)=>this.getHeightAt?this.getHeightAt(p,g):0,i={trees:70,rocks:50,bushes:50,grass:180,houses:12,vehicles:12,plateaus:4,smallBuildings:5},r=new We(this.mapSize,this.mapSize,64,64),o=r.attributes.position;for(let p=0;p<o.count;p++)o.setZ(p,0);o.needsUpdate=!0;const a=r.attributes.position.count;r.setAttribute("color",new Ce(new Float32Array(a*3),3));const c=r.attributes.color,l=new Pt;for(let p=0;p<a;p++){const g=Math.random();g>.8?l.setHex(2600544):g>.4?l.setHex(3066993):l.setHex(5822093),c.setXYZ(p,l.r,l.g,l.b)}const h=new ot({vertexColors:!0,roughness:.8}),u=new W(r,h);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,u.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(u),this.objects.push(u);for(let p=0;p<i.trees;p++){const g=e(.9),_=e(.9),m=n(g,_),d=Math.random()>.5?"Oak":"Pine",M=this.createTree(g,_,d);M.position.y=m,M.userData={gameId:this.generateID(),gameName:`Tree_${d}`,type:"tree"},this.scene.add(M),this.objects.push(M)}const f=[(p,g)=>this.createRock(p,g),(p,g,_)=>this.createRockPillar(p,g,_),(p,g,_)=>this.createFlatBoulder(p,g,_),(p,g,_)=>this.createCrystalShard(p,g,_),(p,g,_)=>this.createStackedRock(p,g,_),(p,g,_)=>this.createBasaltCluster(p,g,_)];for(let p=0;p<i.rocks;p++){const g=e(.9),_=e(.9),m=n(g,_),d=f[p%f.length],M=d(g,_,m);M.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(M),this.objects.push(M)}for(let p=0;p<i.bushes;p++){const g=e(.85),_=e(.85),m=n(g,_),d=this.createBush(g,_);d.position.y=m,d.userData={gameId:this.generateID(),gameName:"Bush"},this.scene.add(d),this.objects.push(d)}for(let p=0;p<i.grass;p++){const g=e(.95),_=e(.95),m=n(g,_),d=this.createGrassClump(g,_);d.position.y=m,this.scene.add(d)}for(let p=0;p<i.houses;p++){const g=e(.75),_=e(.75),m=n(g,_),d=Math.random(),M=d>.7,v=d<.25,S=M?1.55:v?.9:1,R=M?"Mansion":v?"Cabin":"House",b=M?"large":v?"small":"medium",A=this.createHouse(g,_,{scale:S});A.position.y=m,A.userData={gameId:this.generateID(),gameName:R,type:"house",size:b},this.scene.add(A),this.objects.push(A),this.itemManager.spawnLootInHouse(g,1,_)}for(let p=0;p<i.vehicles;p++){const g=e(.8),_=e(.8),m=n(g,_),d=Math.random()>.6?"truck":"car",M=this.createVehicle(g,_,d);M.position.y=m,M.userData={gameId:this.generateID(),gameName:`Vehicle_${d}`,type:"vehicle"},this.scene.add(M),this.objects.push(M)}for(let p=0;p<i.plateaus;p++){const g=e(.6),_=e(.6),m=6+Math.random()*6,d=8+Math.random()*6,M=n(g,_),v=this.createPlateau(g,_,d,m,M);v.userData={gameId:this.generateID(),gameName:"Plateau",type:"house"},this.scene.add(v),this.objects.push(v)}for(let p=0;p<i.smallBuildings;p++){const g=e(.7),_=e(.7),m=n(g,_),d=this.createSmallBuilding(g,_);d.position.y=m,d.userData={gameId:this.generateID(),gameName:"SmallBuilding",type:"house"},this.scene.add(d),this.objects.push(d)}}createArenaEnvironment(){const t=(o=1)=>(Math.random()-.5)*(this.mapSize*o),e=(o=1)=>{const a=this.halfMapSize-5,c=t(o);return Math.max(-a,Math.min(a,c))},n=new We(this.mapSize,this.mapSize,1,1),i=new $n({color:3885915,flatShading:!0}),r=new W(n,i);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,r.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(r),this.objects.push(r);for(let o=0;o<30;o++){const a=e(.8),c=e(.8),l=1+Math.random()*3,h=1+Math.random()*2,u=1+Math.random()*2,f=new rt(h,l,u),p=new $n({color:5596791,flatShading:!0}),g=new W(f,p);g.position.set(a,l/2,c),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Crate",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=e(.7),c=e(.7),l=6+Math.random()*3,h=3+Math.random()*2,u=3,f=new rt(u,h,l),p=new $n({color:4937059,flatShading:!0}),g=new W(f,p);g.position.set(a,h/2,c),g.rotation.x=-Math.atan(h/l),g.castShadow=!0,g.receiveShadow=!0,g.userData={gameId:this.generateID(),gameName:"Ramp",type:"house"},this.scene.add(g),this.objects.push(g)}for(let o=0;o<6;o++){const a=e(.6),c=e(.6),l=this.createArenaBunker(a,c);l.userData={gameId:this.generateID(),gameName:"Bunker",type:"house"},this.scene.add(l),this.objects.push(l)}for(let o=0;o<20;o++){const a=e(.8),c=e(.8),l=this.createFlatBoulder(a,c,0);l.userData={gameId:this.generateID(),gameName:"Rock",type:"rock"},this.scene.add(l),this.objects.push(l)}this.itemManager.spawnLootInHouse(0,0,0)}createMatrixEnvironment(){const t=new We(this.mapSize,this.mapSize,128,128),e=t.attributes.position.count;t.setAttribute("color",new Ce(new Float32Array(e*3),3));const n=t.attributes.color,i=new Pt;for(let f=0;f<e;f++){const p=Math.random();p>.8?i.setHex(2600544):p>.4?i.setHex(3066993):i.setHex(5822093),n.setXYZ(f,i.r,i.g,i.b)}const r=new ot({vertexColors:!0,roughness:.8}),o=new W(t,r);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(o),this.objects.push(o);const a=new rt(20,6,.5),c=new ot({color:15987699,roughness:.9}),l=new W(a,c);l.position.set(0,3,-15),l.castShadow=!0,l.receiveShadow=!0,l.userData={gameId:this.generateID(),gameName:"Wall",type:"house"},this.scene.add(l),this.objects.push(l);const h=this.createTree(-12,-15,"Oak"),u=this.createTree(12,-15,"Pine");this.scene.add(h),this.scene.add(u),this.objects.push(h),this.objects.push(u)}createStudioEnvironment(){const t=new We(this.mapSize,this.mapSize,128,128),e=new ot({color:10269308,roughness:.9}),n=new W(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.userData={gameId:this.generateID(),gameName:"Ground"},this.scene.add(n),this.objects.push(n)}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}createTree(t,e,n){const i=new Wt;i.position.set(t,0,e);const r=.8+Math.random()*.4;i.scale.set(r,r,r);const o=3.5+Math.random()*1.5,a=new Te(.45,.6,o,8),c=new ot({color:7028518,roughness:1}),l=new W(a,c);if(l.position.y=o/2,l.castShadow=!0,l.receiveShadow=!0,i.add(l),this.objects.push(l),Math.random()>.7){const u=new rt(.15,.15,.05),f=new ot({color:5911328}),p=new W(u,f);p.position.set(.25,l.position.y+.6,.45),p.rotation.z=.4,i.add(p)}const h=new ot({color:n==="Oak"?3050327:1728040,roughness:.9});if(n==="Oak"){const u=6+Math.floor(Math.random()*4);for(let f=0;f<u;f++){const p=1.2+Math.random()*1.6,g=new si(p,8,6),_=new W(g,h);_.position.y=l.position.y+.8+Math.random()*1.6,_.position.x=(Math.random()-.5)*1.5,_.position.z=(Math.random()-.5)*1.5,_.castShadow=!1,_.receiveShadow=!1,i.add(_)}}else{const u=3+Math.floor(Math.random()*3);for(let g=0;g<u;g++){const _=1.8-g*.4+Math.random()*.2,m=new wi(_,1.2+Math.random()*.6,8),d=new W(m,h);d.position.y=l.position.y+.6+g*.9,d.position.x=(Math.random()-.5)*.2,d.position.z=(Math.random()-.5)*.2,d.castShadow=!1,d.receiveShadow=!1,i.add(d)}const f=new si(.25,6,6),p=new W(f,h);p.position.y=l.position.y+u*.9+.3,p.castShadow=!1,p.receiveShadow=!1,i.add(p)}if(Math.random()>.3){const u=new We(.8,.8),f=new ot({color:3066993,side:Oe}),p=new W(u,f);p.rotation.x=-Math.PI/2,p.position.y=.01,p.position.x=(Math.random()-.5)*.5,p.position.z=(Math.random()-.5)*.5,p.receiveShadow=!1,i.add(p)}return i}createRock(t,e,n=0){const i=.6+Math.random()*1.4,r=new Er(i,1),o=r.attributes.position;for(let l=0;l<o.count;l++){const h=o.getX(l),u=o.getY(l),f=o.getZ(l),p=(Math.random()-.5)*i*.15;o.setXYZ(l,h+p,u+p*.5,f+(Math.random()-.5)*i*.15)}r.computeVertexNormals();const a=new ot({color:8359053,roughness:1}),c=new W(r,a);if(c.position.set(t,n+i/2,e),c.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),c.castShadow=!0,c.receiveShadow=!0,Math.random()>.6){const l=new W(new Ei(i*.4,6),new ot({color:3066993}));l.rotation.x=-Math.PI/2,l.position.y=.01,c.add(l)}return c}createRockPillar(t,e,n=0){const i=2.5+Math.random()*2.5,r=.4+Math.random()*.3,o=r+.5,a=new Te(r,o,i,8,1),c=new ot({color:7171437,roughness:1}),l=new W(a,c);return l.position.set(t,n+i/2,e),l.castShadow=!0,l.receiveShadow=!0,l}createFlatBoulder(t,e,n=0){const i=2+Math.random()*2,r=.8+Math.random()*.6,o=1.5+Math.random()*1,a=new rt(i,r,o),c=new ot({color:9145227,roughness:1}),l=new W(a,c);return l.position.set(t,n+r/2,e),l.rotation.y=Math.random()*Math.PI,l.castShadow=!0,l.receiveShadow=!0,l}createCrystalShard(t,e,n=0){const i=2+Math.random()*2,r=new wi(.6+Math.random()*.4,i,6),o=new ot({color:10181046,roughness:.7,metalness:.2,emissive:4008804,emissiveIntensity:.25}),a=new W(r,o);return a.position.set(t,n+i/2,e),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,a}createStackedRock(t,e,n=0){const i=new Wt,r=this.createRock(0,0,0);i.add(r);const o=this.createRock(0,0);o.scale.set(.6,.6,.6),o.position.set(.3,o.position.y+.9,-.2),i.add(o);const a=this.createRock(0,0);return a.scale.set(.4,.4,.4),a.position.set(-.2,a.position.y+1.5,.3),i.add(a),i.position.set(t,n,e),i.traverse(c=>{c.castShadow=!0,c.receiveShadow=!0}),i}createBasaltCluster(t,e,n=0){const i=new Wt,r=3+Math.floor(Math.random()*4);for(let o=0;o<r;o++){const a=1+Math.random()*2,c=new Te(.35,.4,a,6),l=new ot({color:4934475,roughness:.9}),h=new W(c,l);h.position.set((Math.random()-.5)*.9,a/2,(Math.random()-.5)*.9),h.castShadow=!0,h.receiveShadow=!0,i.add(h)}return i.position.set(t,n,e),i}createBush(t,e){const n=new Wt;n.position.set(t,0,e);const i=new ot({color:2924588,roughness:1}),r=2+Math.floor(Math.random()*3);for(let o=0;o<r;o++){const a=.6+Math.random()*.6,c=new W(new si(a,6,6),i);c.position.set((Math.random()-.5)*.5,a*.6,(Math.random()-.5)*.5),c.castShadow=!0,n.add(c)}return n}createVehicle(t,e,n="car"){const i=new Wt;if(i.position.set(t,0,e),i.rotation.y=Math.random()*Math.PI*2,n==="car"){const r=new ot({color:[15158332,3447003,15844367,3066993,10181046][Math.floor(Math.random()*5)],metalness:.7,roughness:.3}),o=new W(new rt(2,.8,4),r);o.position.y=.8,o.castShadow=!0,i.add(o);const a=new W(new rt(1.8,.7,2),r);a.position.set(0,1.5,-.3),a.castShadow=!0,i.add(a);const c=new ot({color:1710618,transparent:!0,opacity:.6,metalness:.9,roughness:.1}),l=new W(new rt(1.7,.6,.05),c);l.position.set(0,1.5,.7),i.add(l);const h=new W(new rt(1.7,.6,.05),c);h.position.set(0,1.5,-1.3),i.add(h);const u=new ot({color:1710618});[[-.9,.3,1.3],[.9,.3,1.3],[-.9,.3,-1.3],[.9,.3,-1.3]].forEach(m=>{const d=new W(new Te(.35,.35,.3,8),u);d.rotation.z=Math.PI/2,d.position.set(...m),d.castShadow=!0,i.add(d)});const p=new ot({color:16776960,emissive:16776960,emissiveIntensity:.5}),g=new W(new rt(.2,.15,.1),p);g.position.set(-.7,.7,2.05),i.add(g);const _=new W(new rt(.2,.15,.1),p);_.position.set(.7,.7,2.05),i.add(_)}else if(n==="truck"){const r=new ot({color:[15105570,3426654,12597547][Math.floor(Math.random()*3)],metalness:.6,roughness:.4}),o=new W(new rt(2.5,1,5),r);o.position.y=1,o.castShadow=!0,i.add(o);const a=new W(new rt(2.3,1.2,2),r);a.position.set(0,2,1.2),a.castShadow=!0,i.add(a);const c=new W(new rt(2.3,.8,2.5),new ot({color:8359053}));c.position.set(0,1.5,-1.5),c.castShadow=!0,i.add(c);const l=new ot({color:1710618});[[-1.1,.4,1.8],[1.1,.4,1.8],[-1.1,.4,-1.5],[1.1,.4,-1.5],[-1.1,.4,-2.2],[1.1,.4,-2.2]].forEach(g=>{const _=new W(new Te(.45,.45,.4,8),l);_.rotation.z=Math.PI/2,_.position.set(...g),_.castShadow=!0,i.add(_)});const u=new ot({color:16776960,emissive:16776960,emissiveIntensity:.5}),f=new W(new rt(.25,.2,.1),u);f.position.set(-.9,1.8,2.25),i.add(f);const p=new W(new rt(.25,.2,.1),u);p.position.set(.9,1.8,2.25),i.add(p)}return i}createGrassClump(t,e){const n=new Wt;n.position.set(t,0,e);const i=3+Math.floor(Math.random()*4);for(let r=0;r<i;r++){const o=.2+Math.random()*.6,a=new We(.05,o),c=new ot({color:5620331,side:Oe}),l=new W(a,c);l.position.y=o/2,l.rotation.y=Math.random()*Math.PI,l.rotation.z=(Math.random()-.5)*.6,l.receiveShadow=!0,n.add(l)}return n}createHouse(t,e,{scale:n=1}={}){const i=new Wt;i.position.set(t,0,e),i.rotation.y=Math.random()*Math.PI*2;const r=new ot({color:9807270}),o=new ot({color:12597547});[{w:6,h:4,d:.5,x:0,y:2,z:-3},{w:.5,h:4,d:6,x:-3,y:2,z:0},{w:.5,h:4,d:6,x:3,y:2,z:0},{w:2,h:4,d:.5,x:-2,y:2,z:3},{w:2,h:4,d:.5,x:2,y:2,z:3},{w:2,h:1,d:.5,x:0,y:3.5,z:3}].forEach(g=>{const _=new W(new rt(g.w,g.h,g.d),r);_.position.set(g.x,g.y,g.z),_.castShadow=!0,_.receiveShadow=!0,i.add(_),this.objects.push(_)});const c=new W(new wi(5,2,4),o);c.position.y=5,c.rotation.y=Math.PI/4,c.castShadow=!0,i.add(c);const l=new ot({color:5057307}),h=new W(new rt(1,2.2,.1),l);h.position.set(0,1.1,3.26),i.add(h);const u=new ot({color:8962303,metalness:.1,roughness:.2,transparent:!0,opacity:.8}),f=new W(new rt(1,1,.05),u);f.position.set(-2,2.2,-3.26);const p=f.clone();return p.position.set(2,2.2,-3.26),i.add(f),i.add(p),i.scale.setScalar(n),i}createPlateau(t,e,n=10,i=8,r=0){const o=new Wt,a=new ot({color:8355711,roughness:1}),c=new W(new Te(n,n*1.05,i,16,1),a);c.position.set(0,i/2,0),c.castShadow=!0,c.receiveShadow=!0,o.add(c);const l=n*1.4,h=i,u=n*.8,f=new rt(u,h,l),p=new W(f,new ot({color:9342606,roughness:1}));p.castShadow=!0,p.receiveShadow=!0;const g=Math.atan(h/l);p.rotation.x=-g,p.position.set(0,h/2,n),p.userData={type:"house"},o.add(p);const _=new rt(u,.2,l),m=new W(_,new ot({color:7105644}));return m.position.set(0,h,n),m.rotation.x=p.rotation.x,m.castShadow=!0,o.add(m),o.position.set(t,r,e),o.userData={type:"house"},o}createSmallBuilding(t,e){const n=new Wt;n.position.set(t,0,e),n.rotation.y=Math.random()*Math.PI*2;const i=new ot({color:8359053}),r=new ot({color:12436423}),o=8,a=8,c=6,l=.35,h=2.2,u=o/2,f=a/2,p=new W(new rt(o,c,l),i);p.position.set(0,c/2,-f);const g=new W(new rt(l,c,a),i);g.position.set(-u,c/2,0);const _=g.clone();_.position.x=u;const m=new W(new rt((o-h)/2,c,l),i);m.position.set(-2.55,c/2,f);const d=m.clone();d.position.x=h/2+(o-h)/4,[p,g,_,m,d].forEach(y=>{y.castShadow=!0,y.receiveShadow=!0,n.add(y)});const M=new W(new rt(o-.4,.3,a-.4),r);M.position.y=.15,M.receiveShadow=!0,n.add(M);const v=new W(new rt(o-.4,.3,a-.4),r);v.position.y=3.4,v.receiveShadow=!0,n.add(v);const S=v.position.y,R=10,b=new rt(3,S,R),A=new W(b,r);A.position.set(0,S/2,f+R/2),A.rotation.x=-Math.atan(S/R),A.castShadow=!0,A.receiveShadow=!0,n.add(A);const I=new W(new rt(o+.4,.4,a+.4),new ot({color:9807270}));return I.position.y=c+.2,I.castShadow=!0,n.add(I),n}createArenaBunker(t,e){const n=new Wt;n.position.set(t,0,e),n.rotation.y=Math.random()*Math.PI*2;const i=new $n({color:4937059,flatShading:!0}),r=new $n({color:6253691,flatShading:!0}),o=new W(new rt(6,2.5,6),i);o.position.y=1.25,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new W(new rt(6.2,.3,6.2),r);a.position.y=2.65,a.castShadow=!0,n.add(a);const c=new W(new rt(1.2,1.8,.2),new $n({color:9280168,flatShading:!0,transparent:!0,opacity:.2}));c.position.set(0,.9,3.1),n.add(c);const l=new rt(2,1.2,4),h=new W(l,r);return h.position.set(-2.5,.6,-1),h.rotation.x=-Math.atan(1.2/4),h.castShadow=!0,h.receiveShadow=!0,h.userData={type:"house"},n.add(h),n}createStormVisuals(){if(this.gameMode==="matrix")return;const t=new Te(this.stormRadius,this.stormRadius,50,32,1,!0),e=new Ln({color:9323693,transparent:!0,opacity:.3,side:Oe});this.stormMesh=new W(t,e),this.stormMesh.position.y=25,this.scene.add(this.stormMesh)}createTarget(t,e){const n=new Wt;n.position.set(t,0,e);const i=new W(new Te(.05,.05,2,6),new ot({color:8947848}));i.position.y=1,n.add(i);const r=new Ei(.8,24),o=new ot({color:16777215}),a=new W(r,o);a.position.set(0,2,0),a.rotation.y=Math.PI,n.add(a);const c=new ot({color:16729156}),l=new ot({color:15844367}),h=new ot({color:3447003}),u=(p,g)=>{const _=new W(new wr(p,.02,6,24),g);return _.rotation.x=Math.PI/2,_.position.y=2,_};n.add(u(.75,h)),n.add(u(.55,c)),n.add(u(.35,l));const f=new W(new Ei(.1,12),new ot({color:0}));return f.position.set(0,2.01,0),f.rotation.y=Math.PI,n.add(f),n.userData={gameId:this.generateID(),gameName:"Target",type:"house"},n}update(t,e){if(this.gameMode==="matrix"||this.gameMode==="studio")return{inStorm:!1};if(this.stormRadius>10){this.stormRadius-=this.stormShrinkRate*t;const i=this.initialStormRadius?this.stormRadius/this.initialStormRadius:1;this.stormMesh.scale.set(i,1,i)}return{inStorm:Math.sqrt(e.x*e.x+e.z*e.z)>this.stormRadius}}_buildHeightFn(){return()=>0}getHeightAt(t,e){return this._heightFn?this._heightFn(t,e):0}}const Lp="modulepreload",Dp=function(s){return"/threejs-voxel-firecraft/dist/"+s},ua={},Ip=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=Dp(c),c in ua)return;ua[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Lp,l||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Zn=new di(0,0,0,"YXZ"),Jn=new C,Up={type:"change"},Np={type:"lock"},Fp={type:"unlock"},da=Math.PI/2;class Bp extends In{constructor(t,e){super(),this.camera=t,this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Op.bind(this),this._onPointerlockChange=kp.bind(this),this._onPointerlockError=zp.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(t){const e=this.camera;Jn.setFromMatrixColumn(e.matrix,0),Jn.crossVectors(e.up,Jn),e.position.addScaledVector(Jn,t)}moveRight(t){const e=this.camera;Jn.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Jn,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Op(s){if(this.isLocked===!1)return;const t=s.movementX||s.mozMovementX||s.webkitMovementX||0,e=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.camera;Zn.setFromQuaternion(n.quaternion),Zn.y-=t*.002*this.pointerSpeed,Zn.x-=e*.002*this.pointerSpeed,Zn.x=Math.max(da-this.maxPolarAngle,Math.min(da-this.minPolarAngle,Zn.x)),n.quaternion.setFromEuler(Zn),this.dispatchEvent(Up)}function kp(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Np),this.isLocked=!0):(this.dispatchEvent(Fp),this.isLocked=!1)}function zp(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Gp="/threejs-voxel-firecraft/dist/assets/mixkit-game-gun-shot-D1lu3gfh.ogg",Hp="/threejs-voxel-firecraft/dist/assets/smack-BAv2er9i.ogg",Vp="/threejs-voxel-firecraft/dist/assets/ugh-CPf3Qqe6.ogg",Wp="/threejs-voxel-firecraft/dist/assets/mixkit-footsteps-on-tall-grass-532-DkmduvPT.ogg";class Xp{constructor(t,e,n,i={}){this.camera=t,this.scene=e,this.worldObjects=n,this.world=null,this.gameMode=i.gameMode||"survival",this.showTracers=i.showTracers===!0,this.backpack=null,this.backpackColor=null,this.placedBlocks=[],this.blockSize=1,this.minBlockSize=.5,this.maxBlockSize=2,this.previewBlock=null,this.isFloating=!1,this.selectedBlock=null,this.selectedBlockHelper=null,this.health=100,this.shield=100,this.isDead=!1,this.stamina=100,this.punchCount=0,this.isTired=!1,this.velocity=new C,this.direction=new C,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.canJump=!1,this.speed=100,this.jumpHeight=30,this.gravity=250,this.distanceTraveled=0,this.previousPosition=new C,this.allWeapons=[{name:"Pistol",ammo:12,maxAmmo:60,magazineSize:12,currentMag:12,damage:20,cooldown:.5,lastShot:0,reloadTime:1.5,range:50},{name:"Fist",ammo:1/0,maxAmmo:1/0,magazineSize:1/0,currentMag:1/0,damage:10,cooldown:.2,lastShot:0,reloadTime:0,range:3},{name:"Rifle",ammo:30,maxAmmo:120,magazineSize:30,currentMag:30,damage:25,cooldown:.15,lastShot:0,reloadTime:2,range:120,zoomFov:30},{name:"Sniper",ammo:5,maxAmmo:20,magazineSize:5,currentMag:5,damage:100,cooldown:2,lastShot:0,reloadTime:3,range:400,zoomFov:12},{name:"SMG",ammo:40,maxAmmo:200,magazineSize:40,currentMag:40,damage:15,cooldown:.08,lastShot:0,reloadTime:1.8,range:80},{name:"Shotgun",ammo:6,maxAmmo:24,magazineSize:6,currentMag:6,damage:60,cooldown:1,lastShot:0,reloadTime:2.5,range:25},{name:"DMR",ammo:12,maxAmmo:48,magazineSize:12,currentMag:12,damage:45,cooldown:.35,lastShot:0,reloadTime:2.2,range:200,zoomFov:18}],this.weapons=[this.allWeapons[1],this.allWeapons[0]],this.currentWeaponIndex=0,this.isReloading=!1,this.controls=new Bp(t,document.body),this.allowTouchMovement=!1,this._touchYaw=0,this._touchPitch=0,document.addEventListener("fullscreenchange",()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}),this.createPlayerMesh(),this.cameraMode=i.cameraMode||"TPS",this.fpsCameraOffset=new C(0,1.6,0),this.tpsCameraOffset=new C(1,1.8,3.4),this.initControls(),this.sfxVolume=.7,this.sfxVolume=.7,this.gunshotBuffer=null,this.reloadBuffer=null,this.smackBuffer=null,this.ughBuffer=null,this.footstepsBuffer=null,this._footstepsSource=null,this._footstepsGain=null,this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer=null,this._lastFootstepsActive=!1,this.isCrouching=!1,this.crouchHeight=.8;try{const r=window.AudioContext||window.webkitAudioContext;r&&(this.audioCtx=new r,fetch(Gp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.gunshotBuffer=o}).catch(o=>console.warn("Error loading gunshot SFX:",o)),Ip(()=>import("./mixkit-shotgun-recharge-CcrH8C2K.js"),[]).then(o=>fetch(o.default)).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.reloadBuffer=o}).catch(o=>console.warn("Error loading reload SFX:",o)),fetch(Hp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.smackBuffer=o}).catch(o=>console.warn("Error loading smack SFX:",o)),fetch(Vp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.ughBuffer=o}).catch(o=>console.warn("Error loading hurt SFX:",o)),fetch(Wp).then(o=>o.arrayBuffer()).then(o=>this.audioCtx.decodeAudioData(o)).then(o=>{this.footstepsBuffer=o}).catch(o=>console.warn("Error loading footsteps SFX:",o)))}catch(r){console.warn("Web Audio API not supported:",r)}}placeBlock(){if(!this.world)return;const t=this.getBlockTarget(),e=t.size,n=new rt(e,e,e),i=new ot({color:11887901,roughness:.9}),r=new W(n,i);r.position.copy(t.position),r.castShadow=!0,r.receiveShadow=!0,r.userData={type:"block",size:e,gameId:this.world.generateID?this.world.generateID():void 0,gameName:"Block"},this.scene.add(r),this.world.objects&&this.world.objects.push(r),this.placedBlocks.push(r)}createPlayerMesh(){this.mesh=new Wt,this.scene.add(this.mesh);const t=new ot({color:3447003}),e=new ot({color:16764074}),n=new ot({color:2899536});this.head=new W(new rt(.5,.5,.5),e),this.head.position.y=1.75,this.mesh.add(this.head);const i=new ot({color:15158332}),r=new W(new rt(.52,.1,.52),i);r.position.set(0,.3,0),this.head.add(r);const o=new W(new rt(.52,.02,.35),i);o.position.set(0,.22,.35),this.head.add(o);const a=new ot({color:0}),c=new ot({color:1710618,transparent:!0,opacity:.7,metalness:.8,roughness:.2}),l=new W(new rt(.18,.12,.02),c);l.position.set(-.12,.05,.26),this.head.add(l);const h=new W(new rt(.18,.12,.02),c);h.position.set(.12,.05,.26),this.head.add(h);const u=new W(new rt(.08,.02,.02),a);u.position.set(0,.05,.26),this.head.add(u);const f=new W(new rt(.02,.02,.3),a);f.position.set(-.21,.05,.1),this.head.add(f);const p=new W(new rt(.02,.02,.3),a);p.position.set(.21,.05,.1),this.head.add(p);const g=new W(new rt(.6,.8,.3),t);g.position.y=1.1,this.mesh.add(g);const _=new rt(.2,.8,.2);_.translate(0,-.3,0),this.leftArmPivot=new Wt,this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot);const m=new W(_,e);this.leftArmPivot.add(m),this.rightArmPivot=new Wt,this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot);const d=new W(_,e);this.rightArmPivot.add(d),this.weaponModels={};const M=new Wt,v=new W(new rt(.12,.12,.35),new ot({color:1710618,metalness:.8,roughness:.3}));v.position.set(0,-.28,.2);const S=new W(new rt(.06,.06,.15),new ot({color:657930,metalness:.9,roughness:.2}));S.position.set(0,-.28,.4);const R=new W(new rt(.1,.25,.12),new ot({color:2894892}));R.position.set(0,-.42,.15);const b=new W(new rt(.03,.05,.03),new ot({color:1710618}));b.position.set(0,-.35,.18),M.add(v,S,R,b),this.rightArmPivot.add(M),this.weaponModels.Pistol=M;const A=new Wt,I=new W(new rt(.08,.08,.9),new ot({color:1710618,metalness:.8,roughness:.3}));I.position.set(0,-.28,.45);const y=new W(new rt(.12,.14,.4),new ot({color:2894892}));y.position.set(0,-.3,.2);const w=new W(new rt(.1,.22,.12),new ot({color:2894892}));w.position.set(0,-.44,.15);const z=new W(new rt(.1,.12,.25),new ot({color:3815994}));z.position.set(0,-.28,-.1);const G=new W(new rt(.08,.25,.1),new ot({color:1710618}));G.position.set(0,-.5,.2),A.add(I,y,w,z,G),this.rightArmPivot.add(A),this.weaponModels.Rifle=A;const J=new Wt,L=new W(new rt(.08,.08,1.3),new ot({color:1727514,metalness:.6,roughness:.4}));L.position.set(0,-.28,.65);const U=new W(new rt(.14,.16,.5),new ot({color:2969622}));U.position.set(0,-.3,.25);const H=new W(new Te(.06,.06,.35,8),new ot({color:657930,metalness:.9,roughness:.1}));H.rotation.z=Math.PI/2,H.position.set(0,-.18,.4);const q=new W(new Te(.05,.05,.02,8),new ot({color:1723791,metalness:.9,roughness:.1,emissive:663616}));q.rotation.z=Math.PI/2,q.position.set(0,-.18,.58);const X=new W(new rt(.12,.14,.3),new ot({color:3811866}));X.position.set(0,-.28,-.05);const Y=new W(new rt(.02,.15,.02),new ot({color:1710618}));Y.position.set(0,-.42,.5),J.add(L,U,H,q,X,Y),this.rightArmPivot.add(J),this.weaponModels.Sniper=J,Object.values(this.weaponModels).forEach(pt=>pt.visible=!1);const j=A.clone();j.traverse(pt=>{pt.material&&pt.material.color&&pt.material.color.setHex(5598095)}),j.scale.set(.8,.8,.8),this.rightArmPivot.add(j),this.weaponModels.SMG=j;const et=A.clone();et.traverse(pt=>{pt.material&&pt.material.color&&pt.material.color.setHex(9132587)}),et.scale.set(1.1,1,.8),this.rightArmPivot.add(et),this.weaponModels.Shotgun=et;const nt=A.clone();nt.traverse(pt=>{pt.material&&pt.material.color&&pt.material.color.setHex(3050327)}),nt.scale.set(.95,.95,1),this.rightArmPivot.add(nt),this.weaponModels.DMR=nt;const V=new rt(this.blockSize,this.blockSize,this.blockSize),K=new ot({color:3066993,transparent:!0,opacity:.35,wireframe:!0});this.previewBlock=new W(V,K),this.previewBlock.visible=this.gameMode==="studio",this.previewBlock.castShadow=!1,this.previewBlock.receiveShadow=!1,this.scene.add(this.previewBlock);const lt=new rt(.25,.8,.25);lt.translate(0,-.4,0),this.leftLegPivot=new Wt,this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot);const _t=new W(lt,n);this.leftLegPivot.add(_t),this.rightLegPivot=new Wt,this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot);const mt=new W(lt,n);if(this.rightLegPivot.add(mt),this.isAiming=!1,this.baseFov=75,this.aimFov=20,this.hitTimer=0,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.isPunching=!1,this.punchSide=0,this.isBlocking=!1,this.yaw=0,this.pitch=0,this.camera){const pt=new di().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=pt.y,this.pitch=pt.x}}rotateCamera(t,e){if(!this.controls||!this.controls.isLocked){this.yaw-=t,this.pitch-=e;const n=Math.PI/2-.01;this.pitch=Math.max(-n,Math.min(n,this.pitch)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}initControls(){const t=r=>{switch(r.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.canJump===!0&&(this.velocity.y+=this.jumpHeight,this.canJump=!1);break;case"Digit1":this.switchWeapon(0);break;case"Digit2":this.switchWeapon(1);break;case"Digit3":this.switchWeapon(2);break;case"Digit4":this.switchWeapon(3);break;case"Digit5":this.switchWeapon(4);break;case"Digit6":this.switchWeapon(5);break;case"Numpad1":this.switchWeapon(0);break;case"Numpad2":this.switchWeapon(1);break;case"Numpad3":this.switchWeapon(2);break;case"Numpad4":this.switchWeapon(3);break;case"Numpad5":this.switchWeapon(4);break;case"Numpad6":this.switchWeapon(5);break;case"KeyB":this.gameMode==="studio"&&this.placeBlock();break;case"KeyU":if(this.gameMode==="studio"&&(this.isFloating=!this.isFloating,!this.isFloating)){const o=this.getSurfaceHeight(this.position.x,this.position.z);this.mesh.position.y=o,this.velocity.y=0}break;case"Minus":this.gameMode==="studio"&&this.adjustBlockSize(-.1);break;case"Equal":this.gameMode==="studio"&&this.adjustBlockSize(.1);break;case"KeyM":this.gameMode==="studio"&&this.moveLastBlock();break;case"KeyX":this.gameMode==="studio"&&(this.selectedBlock?this.removeBlock(this.selectedBlock):this.removeLastBlock());break;case"KeyR":this.reload();break;case"KeyC":this.isCrouching=!this.isCrouching,this.isCrouching&&(this.isSprinting=!1);break;case"ShiftLeft":case"ShiftRight":this.isCrouching||(this.isSprinting=!0);break;case"KeyV":this.toggleCameraMode();break}},e=r=>{switch(r.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break}},n=r=>{if(this.controls.isLocked){if(this.gameMode==="studio"&&this.selectBlockUnderCrosshair())return;r.button===0?this.shoot():r.button===2&&(this.isAiming=!0)}},i=r=>{r.button===2&&(this.isAiming=!1)};document.addEventListener("keydown",t),document.addEventListener("keyup",e),document.addEventListener("mousedown",n),document.addEventListener("mouseup",i),document.addEventListener("contextmenu",r=>r.preventDefault())}lockControls(){if(!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)){console.warn("Pointer Lock API not available in this environment.");return}try{this.controls.lock()}catch(e){console.warn("Unable to lock pointer:",e)}}toggleCameraMode(){this.cameraMode=this.cameraMode==="FPS"?"TPS":"FPS",this.mesh&&(this.mesh.visible=this.cameraMode==="TPS"),console.log(`Camera mode: ${this.cameraMode}`)}switchWeapon(t){if(t>=0&&t<this.weapons.length){if(this.isReloading)return;this.currentWeaponIndex=t;const e=this.weapons[t].name;Object.values(this.weaponModels).forEach(n=>n.visible=!1),this.weaponModels[e]&&(this.weaponModels[e].visible=!0)}}reload(){if(this.isReloading)return;const t=this.weapons[this.currentWeaponIndex];t.ammo!==1/0&&t.currentMag!==t.magazineSize&&(t.ammo<=0||(this.isReloading=!0,console.log("Reloading..."),this.playReloadSound(),setTimeout(()=>{this.finishReload()},t.reloadTime*1e3)))}playReloadSound(){try{if(this.audioCtx&&this.reloadBuffer){this.audioCtx.state==="suspended"&&this.audioCtx.resume();const t=this.audioCtx.createBufferSource();t.buffer=this.reloadBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume*.8,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}catch(t){console.warn("Error playing reload sound:",t)}}finishReload(){if(!this.isReloading)return;const t=this.weapons[this.currentWeaponIndex],e=t.magazineSize-t.currentMag,n=t.ammo,i=Math.min(e,n);t.currentMag+=i,t.ammo-=i,this.isReloading=!1,console.log("Reloaded!")}startBlocking(){this.weapons[this.currentWeaponIndex].name==="Fist"&&(this.isBlocking=!0)}stopBlocking(){this.isBlocking=!1}collectItem(t){if(t==="ShieldPotion"){this.shield=Math.min(100,this.shield+50);return}if(t&&t.startsWith("Backpack:")){const n=t.split(":")[1]||"2c3e50";return this.equipBackpack(parseInt(n,16))}const e=this.weapons.find(n=>n.name===t);if(e)e.ammo=Math.min(e.maxAmmo,e.ammo+e.magazineSize),console.log("Added ammo for "+t);else{const n=this.allWeapons.find(i=>i.name===t);n&&(this.weapons.push(n),console.log("Picked up "+t))}}setEnemyManager(t){this.enemyManager=t}shoot(){if(!(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0)||this.isDead||this.isReloading||this.isBlocking)return;const e=this.weapons[this.currentWeaponIndex],n=performance.now()/1e3;if(n-e.lastShot<e.cooldown)return;if(e.currentMag<=0){this.reload();return}if(e.lastShot=n,e.ammo!==1/0&&e.currentMag--,e.name==="Fist"){this.punch();return}this.createMuzzleFlash();try{if(this.audioCtx&&this.gunshotBuffer&&this.audioCtx.state==="running"){const c=this.audioCtx.createBufferSource();c.buffer=this.gunshotBuffer,e.name==="Pistol"?c.playbackRate.value=1:e.name==="Rifle"?c.playbackRate.value=1.15:e.name==="Sniper"?c.playbackRate.value=.9:c.playbackRate.value=1;const l=this.audioCtx.createGain();l.gain.value=this.sfxVolume,c.connect(l),l.connect(this.audioCtx.destination),c.start(0)}else this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}catch{}const i=new ri;i.setFromCamera(new Rt(0,0),this.camera);const r=this.camera.position.clone();new C,i.ray.direction.clone().normalize();let o=r.clone().add(i.ray.direction.clone().multiplyScalar(1e3)),a=!1;if(this.worldObjects&&this.worldObjects.length>0){const c=i.intersectObjects(this.worldObjects,!0);c.length>0&&(o=c[0].point.clone(),a=!0)}if(this.enemyManager&&this.enemyManager.enemies){const c=i.intersectObjects(this.enemyManager.enemies.map(l=>l.mesh),!0);if(c.length>0){const l=c[0].point,h=r.distanceTo(l),u=r.distanceTo(o);if(h<u){const f=c[0].object;o=l.clone(),a=!0;let p=null;if(p=(_=>{let m=_;for(;m;){const d=this.enemyManager.enemies.find(M=>M.mesh===m);if(d)return d;m=m.parent}return null})(f),p){const _=r.distanceTo(p.position),m=e.range||1e3;_<=m?p.takeDamage(e.damage):a=!1}}}}this.showTracers&&this.createBulletTracer(r,o,a),a&&e.name==="Sniper"&&this.createImpactSmoke(o)}createMuzzleFlash(){const t=new Ep(16776960,1,5),e=new C;this.camera.getWorldDirection(e),t.position.copy(this.mesh.position),t.position.y+=1.5,t.position.add(e.multiplyScalar(1)),this.scene.add(t),setTimeout(()=>this.scene.remove(t),100)}createBulletTracer(t,e,n){const i=[t,e],r=new ge().setFromPoints(i),o=n?16729156:16776960,a=new yr({color:o,linewidth:2,opacity:.8,transparent:!0}),c=new Va(r,a);this.scene.add(c);let l=.8;const h=setInterval(()=>{l-=.1,a.opacity=l,l<=0&&(clearInterval(h),this.scene.remove(c),r.dispose(),a.dispose())},30)}createImpactSmoke(t){const e=new Wt;e.position.copy(t);const n=8;for(let a=0;a<n;a++){const c=.15+Math.random()*.2,l=new si(c,6,6),h=new Ln({color:6710886,transparent:!0,opacity:.5}),u=new W(l,h);u.position.set((Math.random()-.5)*.4,(Math.random()-.5)*.2,(Math.random()-.5)*.4),e.add(u)}this.scene.add(e);const i=600,r=performance.now(),o=()=>{const a=performance.now()-r,c=Math.max(0,1-a/i);e.children.forEach(l=>{l.material&&(l.material.opacity=c*.5)}),a<i?requestAnimationFrame(o):(e.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),this.scene.remove(e))};o()}update(t){if(this.isDead)return;if(this.controls&&this.controls.isLocked===!0||this.allowTouchMovement===!0){this.velocity.x-=this.velocity.x*10*t,this.velocity.z-=this.velocity.z*10*t,this.isFloating?this.velocity.y*=.9:this.velocity.y-=this.gravity*t,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*this.speed*t),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*this.speed*t);const n=new C;this.camera.getWorldDirection(n),n.y=0,n.normalize();const i=new C;i.crossVectors(n,new C(0,1,0));const r=new C;this.moveForward&&r.add(n),this.moveBackward&&r.sub(n),this.moveRight&&r.add(i),this.moveLeft&&r.sub(i),r.normalize();const o=r.length()>0;let a=1;this.isSprinting&&!this.isCrouching&&o&&this.stamina>0&&(a=1.9);const c=this.speed*t*.1*a,l=r.multiplyScalar(c);l.x!==0&&(this.checkCollision(new C(Math.sign(l.x),0,0),Math.abs(l.x))||(this.mesh.position.x+=l.x)),l.z!==0&&(this.checkCollision(new C(0,0,Math.sign(l.z)),Math.abs(l.z))||(this.mesh.position.z+=l.z));let h=0;if(this.isFloating){const d=new C;this.camera.getWorldDirection(d);const M=d.y;this.moveForward&&(h+=M*this.speed*t*.3),this.moveBackward&&(h-=M*this.speed*t*.3)}if(this.mesh.position.y+=this.velocity.y*t+h,r.length()>0){const d=Math.atan2(r.x,r.z);this.mesh.rotation.y=d}if(this.mesh.position.y+=this.velocity.y*t,!this.isFloating&&!this.isFloating){this.mesh.position.y<0&&(this.velocity.y=0,this.mesh.position.y=0,this.canJump=!0);const d=this.getSurfaceHeight(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<d&&(this.mesh.position.y=d,this.velocity.y=0,this.canJump=!0)}const u=!this.isFloating&&(this.canJump||this.mesh.position.y<=.01);if(this.handleFootsteps(o&&u&&!this.isDead),this.gameMode==="studio"?this.updateBlockPreview():this.previewBlock&&(this.previewBlock.visible=!1),this.world&&typeof this.world.halfMapSize=="number"){const d=this.world.halfMapSize-1;this.mesh.position.x=Math.max(-d,Math.min(d,this.mesh.position.x)),this.mesh.position.z=Math.max(-d,Math.min(d,this.mesh.position.z))}if(this.previousPosition.length()>0){const d=this.mesh.position.distanceTo(this.previousPosition);this.distanceTraveled+=d}if(this.previousPosition.copy(this.mesh.position),this.isSprinting&&!this.isCrouching&&o&&this.stamina>0){if(this.gameMode!=="studio"){const d=20*t;this.stamina=Math.max(0,this.stamina-d),this.stamina<=0&&(this.isSprinting=!1)}}else if(this.gameMode!=="studio"){const d=10*t;this.stamina=Math.min(100,this.stamina+d)}this.gameMode==="studio"&&(this.stamina=100),this.camera.position.copy(this.mesh.position);const f=this.isCrouching?1.6*this.crouchHeight:1.6;this.camera.position.y+=f;const p=this.isCrouching?this.crouchHeight:1;this.mesh.scale.y+=(p-this.mesh.scale.y)*10*t;let g=this.baseFov;const _=this.weapons[this.currentWeaponIndex];this.isAiming&&_&&_.zoomFov&&(g=_.zoomFov),Math.abs(this.camera.fov-g)>.1&&(this.camera.fov+=(g-this.camera.fov)*10*t,this.camera.updateProjectionMatrix());let m;this.cameraMode==="FPS"?m=this.fpsCameraOffset.clone():(m=this.tpsCameraOffset.clone(),m.applyQuaternion(this.camera.quaternion)),m.add(this.mesh.position),this.camera.position.copy(m),this.updateAnimations(t)}}updateAnimations(t){const e=this.moveForward||this.moveBackward||this.moveLeft||this.moveRight,n=10,i=this.isSprinting&&e?1.8:1;if(e){this.animTime+=t*n*i;const r=Math.sin(this.animTime)*(.5*i);this.leftLegPivot.rotation.x=r,this.rightLegPivot.rotation.x=-r}else this.leftLegPivot.rotation.x=pe.lerp(this.leftLegPivot.rotation.x,0,t*n),this.rightLegPivot.rotation.x=pe.lerp(this.rightLegPivot.rotation.x,0,t*n);if(this.isBlocking){const r=-Math.PI/2.5,o=.5;this.leftArmPivot.rotation.x=pe.lerp(this.leftArmPivot.rotation.x,r,t*15),this.rightArmPivot.rotation.x=pe.lerp(this.rightArmPivot.rotation.x,r,t*15),this.leftArmPivot.rotation.z=pe.lerp(this.leftArmPivot.rotation.z,-o,t*15),this.rightArmPivot.rotation.z=pe.lerp(this.rightArmPivot.rotation.z,o,t*15)}else if(this.isPunching){this.punchTime+=t*20;const r=-Math.PI/2+Math.sin(this.punchTime)*.8;this.punchSide===0?(this.rightArmPivot.rotation.x=r,this.leftArmPivot.rotation.x=pe.lerp(this.leftArmPivot.rotation.x,0,t*10)):(this.leftArmPivot.rotation.x=r,this.rightArmPivot.rotation.x=pe.lerp(this.rightArmPivot.rotation.x,0,t*10)),this.punchTime>Math.PI&&(this.isPunching=!1,this.rightArmPivot.rotation.x=0,this.leftArmPivot.rotation.x=0),this.leftArmPivot.rotation.z=pe.lerp(this.leftArmPivot.rotation.z,0,t*10),this.rightArmPivot.rotation.z=pe.lerp(this.rightArmPivot.rotation.z,0,t*10)}else{if(e){const r=Math.sin(this.animTime)*.5*i;this.leftArmPivot.rotation.x=-r,this.rightArmPivot.rotation.x=r}else this.leftArmPivot.rotation.x=pe.lerp(this.leftArmPivot.rotation.x,0,t*10),this.rightArmPivot.rotation.x=pe.lerp(this.rightArmPivot.rotation.x,0,t*10);this.leftArmPivot.rotation.z=pe.lerp(this.leftArmPivot.rotation.z,0,t*10),this.rightArmPivot.rotation.z=pe.lerp(this.rightArmPivot.rotation.z,0,t*10)}if(this.hitTimer>0){this.hitTimer-=t;const r=Math.max(0,this.hitTimer)/.6,o=pe.lerp(-Math.PI/2.2,0,1-r);this.leftArmPivot.rotation.x=pe.lerp(this.leftArmPivot.rotation.x,o,t*20),this.rightArmPivot.rotation.x=pe.lerp(this.rightArmPivot.rotation.x,o,t*20)}}punch(){if(!this.isTired&&!(this.isPunching||this.isBlocking)&&(this.isPunching=!0,this.punchTime=0,this.punchSide=this.punchSide===0?1:0,this.punchCount++,this.punchCount>=20&&(this.isTired=!0,this.stamina=Math.max(0,this.stamina-20),setTimeout(()=>{this.isTired=!1,this.punchCount=0},3e3)),this.enemyManager&&this.enemyManager.enemies)){const t=new C;this.mesh.getWorldDirection(t);let e=!1;this.enemyManager.enemies.forEach(n=>{if(this.mesh.position.distanceTo(n.position)<3){const r=new C().subVectors(n.position,this.mesh.position).normalize();if(t.angleTo(r)<Math.PI/3){n.takeDamage(10);const a=t.clone().multiplyScalar(2);n.position.add(a),e=!0}}}),e&&this.playSmack()}}playSmack(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playSmack());return}if(this.smackBuffer){const t=this.audioCtx.createBufferSource();t.buffer=this.smackBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}}catch(t){console.warn("playSmack error:",t)}}equipBackpack(t=2899536){const e=this.backpackColor;this.backpack&&this.backpack.parent&&this.backpack.parent.remove(this.backpack);const n=new Wt;n.position.set(0,1.25,-.32);const i=new W(new rt(.7,.9,.35),new ot({color:t,metalness:.15,roughness:.8}));i.position.set(0,0,0),n.add(i);const r=new W(new rt(.6,.25,.16),new ot({color:3426654,metalness:.1,roughness:.8}));r.position.set(0,-.55,.22),n.add(r);const o=new ot({color:2042938,metalness:.1,roughness:.9}),a=new W(new rt(.1,.82,.07),o);a.position.set(-.28,-.03,.2);const c=a.clone();return c.position.x=.28,n.add(a,c),this.mesh.add(n),this.backpack=n,this.backpackColor=t,e}queueHurtBeat(){if(this._hurtAccumulator+=1,this._hurtAccumulator>=2){const t=Math.floor(this._hurtAccumulator/2);this._hurtQueue+=t,this._hurtAccumulator-=t*2}this._hurtQueue===0&&this._hurtAccumulator>0&&(this._hurtQueue=1,this._hurtAccumulator=0),this._hurtBeatTimer||this._playHurtBeatLoop()}_playHurtBeatLoop(){if(this._hurtQueue<=0){this._hurtBeatTimer=null;return}this.playHurt(),this._hurtQueue=Math.max(0,this._hurtQueue-1),this._hurtBeatTimer=setTimeout(()=>this._playHurtBeatLoop(),2e3)}clearHurtQueue(){this._hurtAccumulator=0,this._hurtQueue=0,this._hurtBeatTimer&&(clearTimeout(this._hurtBeatTimer),this._hurtBeatTimer=null)}playHurt(){try{if(this.audioCtx){if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playHurt());return}if(this.ughBuffer){const t=this.audioCtx.createBufferSource();t.buffer=this.ughBuffer;const e=this.audioCtx.createGain();e.gain.value=this.sfxVolume,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}}}catch(t){console.warn("playHurt error:",t)}}handleFootsteps(t){try{if(!this.audioCtx||!this.footstepsBuffer){this.stopFootsteps();return}if(t===this._lastFootstepsActive&&(t&&this._footstepsSource||!t&&!this._footstepsSource)){if(t&&this._footstepsSource){const e=this.isSprinting?1.4:this.isCrouching?.8:1;this._footstepsSource.playbackRate.value=e}return}if(this._lastFootstepsActive=t,t){if(this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this._footstepsSource){const i=this.isSprinting?1.4:this.isCrouching?.8:1;this._footstepsSource.playbackRate.value=i;return}const e=this.audioCtx.createBufferSource();e.buffer=this.footstepsBuffer,e.loop=!0,e.playbackRate.value=this.isSprinting?1.4:this.isCrouching?.8:1;const n=this.audioCtx.createGain();n.gain.value=this.sfxVolume*.35,e.connect(n),n.connect(this.audioCtx.destination),e.start(0),this._footstepsSource=e,this._footstepsGain=n,e.onended=()=>{this._footstepsSource=null,this._footstepsGain=null}}else this.stopFootsteps()}catch(e){console.warn("handleFootsteps error:",e)}}stopFootsteps(){if(this._lastFootstepsActive=!1,this._footstepsSource){try{this._footstepsSource.stop()}catch{}try{this._footstepsSource.disconnect()}catch{}}if(this._footstepsGain)try{this._footstepsGain.disconnect()}catch{}this._footstepsSource=null,this._footstepsGain=null}get position(){return this.mesh.position}getSurfaceHeight(t,e){let n=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(t,e):0;return this.world&&this.world.objects&&this.world.objects.length>0&&this.world.objects.forEach(i=>{if(i.userData&&i.userData.type==="block"){const r=i.userData.size||this.blockSize;if(Math.abs(i.position.x-t)<r*.6&&Math.abs(i.position.z-e)<r*.6){const o=i.position.y+r/2;o>n&&(n=o)}}}),n}adjustBlockSize(t){const e=Math.max(this.minBlockSize,Math.min(this.maxBlockSize,this.blockSize+t));this.blockSize=e,console.log("Block size:",this.blockSize.toFixed(2))}moveLastBlock(){if(!this.placedBlocks.length)return;const t=this.placedBlocks[this.placedBlocks.length-1];if(!t)return;const e=this.getBlockTarget(t);t.position.set(e.position.x,e.position.y,e.position.z)}getBlockTarget(t=null){const e=new C;this.camera.getWorldDirection(e),e.y=0,e.normalize();const n=t&&t.userData&&t.userData.size?t.userData.size:this.blockSize,i=this.mesh.position.clone().add(e.multiplyScalar(2));if(i.x=Math.round(i.x),i.z=Math.round(i.z),this.world&&typeof this.world.halfMapSize=="number"){const l=this.world.halfMapSize-1;i.x=Math.max(-l,Math.min(l,i.x)),i.z=Math.max(-l,Math.min(l,i.z))}let r=this.world.getHeightAt?this.world.getHeightAt(i.x,i.z):0;const a=(this.world.objects||[]).filter(l=>l.userData&&l.userData.type==="block"&&l!==t).filter(l=>Math.abs(l.position.x-i.x)<.1&&Math.abs(l.position.z-i.z)<.1);a.length>0&&(r=Math.max(...a.map(h=>h.position.y+(h.userData&&h.userData.size?h.userData.size/2:n/2))));const c=r+n/2;return{position:new C(i.x,c,i.z),size:n}}updateBlockPreview(){if(!this.previewBlock)return;const t=this.getBlockTarget();this.previewBlock.visible=!0,this.previewBlock.position.copy(t.position);const e=t.size/this.blockSize;this.previewBlock.scale.set(e,e,e)}removeLastBlock(){if(!this.placedBlocks.length)return;const t=this.placedBlocks.pop();t&&t.parent&&t.parent.remove(t),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(e=>e!==t)),t&&t.geometry&&t.geometry.dispose(),t&&t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()),this.selectedBlock===t&&this.clearBlockSelection()}selectBlockUnderCrosshair(){if(!this.world||!this.world.objects)return!1;const t=new ri;t.setFromCamera(new Rt(0,0),this.camera);const e=t.intersectObjects(this.world.objects,!0);if(e.length===0)return this.clearBlockSelection(),!1;let n=null;for(const i of e){let r=i.object;for(;r&&r.parent;){if(r.userData&&r.userData.type==="block"){n=r;break}r=r.parent}if(n)break}return n?(this.setBlockSelection(n),!0):(this.clearBlockSelection(),!1)}setBlockSelection(t){this.clearBlockSelection(),this.selectedBlock=t;const e=new Rp(t,16776960);e.userData={ignoreSelect:!0},this.scene.add(e),this.selectedBlockHelper=e}clearBlockSelection(){this.selectedBlock=null,this.selectedBlockHelper&&(this.scene.remove(this.selectedBlockHelper),this.selectedBlockHelper.material&&this.selectedBlockHelper.material.dispose(),this.selectedBlockHelper.geometry&&this.selectedBlockHelper.geometry.dispose(),this.selectedBlockHelper=null)}removeBlock(t){t&&(this.placedBlocks=this.placedBlocks.filter(e=>e!==t),t.parent&&t.parent.remove(t),this.world&&this.world.objects&&(this.world.objects=this.world.objects.filter(e=>e!==t)),t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()),this.selectedBlock===t&&this.clearBlockSelection())}takeDamage(t){this.gameMode==="matrix"||this.gameMode==="studio"||(this.isBlocking&&(t*=.2,console.log("Blocked! Reduced damage to "+t)),this.shield>0?(this.shield-=t,this.shield<0&&(this.health+=this.shield,this.shield=0)):this.health-=t,t>0&&this.queueHurtBeat(),this.health<=0&&(this.health=0,this.die()),this.hitTimer=.6)}die(){this.gameMode==="matrix"||this.gameMode==="studio"||(this.handleFootsteps(!1),this.isDead=!0,this.controls.unlock(),this.mesh.rotation.x=-Math.PI/2)}checkCollision(t,e){const n=new ri,i=this.mesh.position.clone();i.y+=1,n.set(i,t);const r=.5;let o=this.worldObjects||[];if(this.enemyManager&&this.enemyManager.enemies){const a=this.enemyManager.enemies.map(c=>c.mesh);o=o.concat(a)}if(o.length>0){const a=n.intersectObjects(o,!0);if(a.length>0&&a[0].distance<e+r)return!0}return!1}}const qp="/threejs-voxel-firecraft/dist/assets/mixkit-player-losing-or-failing-vCPqUTFf.ogg",Yp="/threejs-voxel-firecraft/dist/assets/game-level-completed-envato-mixkit.co-OEgWp6-U.ogg";class jp{constructor(t,e,n){this.player=t,this.world=e,this.settings=n||{},this.healthBar=document.getElementById("health-bar"),this.healthText=document.getElementById("health-text"),this.shieldBar=document.getElementById("shield-bar"),this.shieldText=document.getElementById("shield-text"),this.staminaBar=document.getElementById("stamina-bar"),this.staminaText=document.getElementById("stamina-text"),this.weaponName=document.getElementById("weapon-name"),this.ammoCount=document.getElementById("ammo-count"),this.slots=document.querySelectorAll(".slot"),this.timerValue=document.getElementById("timer-value"),this.debugContainer=document.getElementById("debug-container"),this.gameOverScreen=document.getElementById("game-over-screen"),this.selectionInfo=document.getElementById("selection-info"),this.selectionInfoTimeout=null,this.fpsCounter=document.getElementById("fps-counter"),this.enemyCount=document.getElementById("enemy-count"),this.killCount=document.getElementById("kill-count"),this.distanceTraveled=document.getElementById("distance-traveled"),this.memoryUsage=document.getElementById("memory-usage"),this.targetInspect=document.getElementById("target-inspect"),this.debugInfo=document.getElementById("debug-info"),this.debugName=document.getElementById("debug-target-name"),this.debugId=document.getElementById("debug-target-id"),this.settings.debugMode?this.debugInfo.style.display="block":this.debugInfo.style.display="none",this.timeRemaining=30,this.lastTime=performance.now(),this.frames=0,this.fps=0,this.lastFpsTime=performance.now(),this.raycaster=new ri,this.mouse=new Rt,this.hoveredEnemy=null,this.currentOutlinedEnemy=null,this.hoverInfo=document.getElementById("hover-info"),this.scopeOverlay=document.getElementById("scope-overlay"),this.minimapContainer=document.getElementById("minimap"),this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas?this.minimapCanvas.getContext("2d"):null,this.minimapSize=this.minimapCanvas?this.minimapCanvas.width:180,this.mapSize=e&&e.mapSize?e.mapSize:200,window.addEventListener("mousemove",i=>{const r=i.clientX/window.innerWidth*2-1,o=-(i.clientY/window.innerHeight)*2+1;if(this.mouse.set(r,o),this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const a=[];this.player.enemyManager.enemies.forEach(l=>{l.mesh.traverse(h=>{h.isMesh&&a.push(h)})}),this.raycaster.setFromCamera(this.mouse,this.player.camera);const c=this.raycaster.intersectObjects(a,!0);if(c.length>0){const l=c[0].object;let h=l,u=null;for(;h&&(u=this.player.enemyManager.enemies.find(f=>h.parent===f.mesh||h===f.mesh||f.mesh.children.includes(h)),!u);)h=h.parent;this.hoveredEnemy=u||l||null}else this.hoveredEnemy=null}});try{this.slots.forEach((i,r)=>{const o=a=>{try{a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),this.player&&typeof this.player.switchWeapon=="function"&&this.player.switchWeapon(r)}catch{}};i.addEventListener("pointerdown",o),i.addEventListener("touchstart",o,{passive:!1})})}catch{}}update(){if(this.hoveredEnemy=null,this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0&&this.currentOutlinedEnemy!==this.hoveredEnemy){if(this.currentOutlinedEnemy&&this.currentOutlinedEnemy._outline){try{this.currentOutlinedEnemy.mesh.remove(this.currentOutlinedEnemy._outline)}catch{}this.currentOutlinedEnemy._outline=null}if(this.hoveredEnemy&&this.hoveredEnemy.mesh){const c=new Wt;this.hoveredEnemy.mesh.traverse(l=>{if(l.isMesh){const h=new W(l.geometry,new Ln({color:16776960,side:Re}));h.position.copy(l.position),h.quaternion.copy(l.quaternion),h.scale.copy(l.scale).multiplyScalar(1.06),h.renderOrder=999,h.material.depthTest=!0,c.add(h)}}),this.hoveredEnemy.mesh.add(c),this.hoveredEnemy._outline=c}this.currentOutlinedEnemy=this.hoveredEnemy}this.frames++;const t=performance.now();t-this.lastFpsTime>=1e3&&(this.fpsCounter.innerText=this.frames,this.frames=0,this.lastFpsTime=t,performance.memory&&(this.memoryUsage.innerText=Math.round(performance.memory.usedJSHeapSize/1048576))),this.player.enemyManager&&(this.enemyCount.innerText=this.player.enemyManager.enemies.length,this.killCount.innerText=this.player.enemyManager.killedCount||0);const e=(this.player.distanceTraveled/1e3).toFixed(2);this.distanceTraveled&&(this.distanceTraveled.innerText=e),this.healthBar.style.width=`${this.player.health}%`,this.healthText.innerText=Math.ceil(this.player.health),this.shieldBar.style.width=`${this.player.shield}%`,this.shieldText.innerText=Math.ceil(this.player.shield),this.staminaBar.style.width=`${this.player.stamina}%`,this.staminaText.innerText=Math.ceil(this.player.stamina);const n=this.player.weapons[this.player.currentWeaponIndex];if(this.weaponName.innerText=n.name,this.player.isReloading?this.ammoCount.innerText="RELOADING...":this.ammoCount.innerText=n.ammo===1/0?"∞":`${n.currentMag} / ${n.ammo}`,!!this.settings.showRenderedIds&&this.debugContainer?(this.debugContainer.innerHTML="",(this.player.worldObjects||[]).forEach(l=>{if(!l.userData)return;const h=l.position.clone();h.project(this.player.camera);const u=(h.x+1)/2*window.innerWidth,f=(-h.y+1)/2*window.innerHeight,p=document.createElement("div");p.className="debug-label",p.style.position="absolute",p.style.left=`${u}px`,p.style.top=`${f}px`,p.innerText=`${l.userData.gameName}: ${l.userData.gameId}`,this.debugContainer.appendChild(p)})):this.debugContainer&&(this.debugContainer.innerHTML=""),this.debugInfo)if(this.settings.debugMode)if(this.debugInfo.style.display="block",this.hoveredEnemy){const c=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,l=c&&c.userData&&c.userData.gameName?c.userData.gameName:"Enemy",h=c&&c.userData&&(c.userData.gameId||c.userData.gameid)?c.userData.gameId||c.userData.gameid:"---",u=this.hoveredEnemy.position?this.hoveredEnemy.position:c?c.position:null,f=u?this.player.position.distanceTo(u).toFixed(2):"---";this.debugName.innerText=l,this.debugId.innerText=`${h} (${f}m)`}else this.debugName.innerText="None",this.debugId.innerText="---";else this.debugInfo.style.display="none";let r=null;if(!this.hoveredEnemy&&this.player&&this.player.enemyManager&&this.player.enemyManager.enemies.length>0){const c=[];if(this.player.enemyManager.enemies.forEach(l=>{l.mesh.traverse(h=>{h.isMesh&&c.push(h)})}),c.length>0){this.raycaster.setFromCamera(new Rt(0,0),this.player.camera);const l=this.raycaster.intersectObjects(c,!0);if(l.length>0){let u=l[0].object,f=null;for(;u&&(f=this.player.enemyManager.enemies.find(p=>u.parent===p.mesh||u===p.mesh||p.mesh.children.includes(u)),!f);)u=u.parent;f?this.hoveredEnemy=f:this.hoveredEnemy=null}else this.hoveredEnemy=null}}if(this.hoverInfo)if(this.hoveredEnemy){const c=this.hoveredEnemy.mesh?this.hoveredEnemy.mesh:(this.hoveredEnemy.isMesh?this.hoveredEnemy:null)||this.hoveredEnemy,l=c&&c.userData&&(c.userData.gameId||c.userData.gameid)?c.userData.gameId||c.userData.gameid:"---",h=this.hoveredEnemy.position?this.hoveredEnemy.position:c?c.position:null;r=h?this.player.position.distanceTo(h):null;const u=r?r.toFixed(2):"---";this.hoverInfo.innerText=`${l} • ${u}m`}else this.hoverInfo.innerText="";if(this.scopeOverlay){const c=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],l=this.player.isAiming&&c&&c.name==="Sniper";this.scopeOverlay.classList.toggle("hidden",!l);const h=document.getElementById("crosshair");h&&h.classList.toggle("hidden",l)}const o=document.getElementById("crosshair");if(o){o.classList.remove("target-red","target-yellow");const c=this.player.weapons&&this.player.weapons[this.player.currentWeaponIndex],l=c&&c.range?c.range:1e3;this.hoveredEnemy&&r!==null&&(r<=l?o.classList.add("target-red"):o.classList.add("target-yellow"))}this.updateMinimap(),this.slots.forEach(c=>c.style.display="none"),this.player.weapons.forEach((c,l)=>{let h=this.slots[l];h&&(h.style.display="flex",h.innerText=l+1,l===this.player.currentWeaponIndex?h.classList.add("active"):h.classList.remove("active"))});const a=performance.now();if(a-this.lastTime>1e3){this.timeRemaining--,this.timeRemaining<0&&(this.timeRemaining=0);const c=Math.floor(this.timeRemaining/60).toString().padStart(2,"0"),l=(this.timeRemaining%60).toString().padStart(2,"0");this.timerValue.innerText=`${c}:${l}`,this.lastTime=a}this.player.isDead&&this.player.gameMode!=="matrix"&&this.showGameOver("YOU DIED"),this.updateTargetInspect()}showSelectionInfo(t,e){if(!this.selectionInfo)return;const n=t||"Object",i=e||"---";this.selectionInfo.innerText=`${n} (${i})`,this.selectionInfo.classList.remove("hidden"),this.selectionInfoTimeout&&clearTimeout(this.selectionInfoTimeout),this.selectionInfoTimeout=setTimeout(()=>{try{this.selectionInfo.classList.add("hidden")}catch{}},2500)}updateTargetInspect(){if(!this.targetInspect||!this.player||!this.player.camera)return;const t=this.raycaster,e=new Rt(0,0);t.setFromCamera(e,this.player.camera);const n=[];if(this.world&&Array.isArray(this.world.objects)&&n.push(...this.world.objects),this.world&&this.world.itemManager&&Array.isArray(this.world.itemManager.items)&&n.push(...this.world.itemManager.items),this.player.enemyManager&&Array.isArray(this.player.enemyManager.enemies)&&this.player.enemyManager.enemies.forEach(h=>{h&&h.mesh&&n.push(h.mesh)}),n.length===0){this.targetInspect.innerText="Target: ---";return}const i=Array.from(new Set(n)),r=t.intersectObjects(i,!0);if(!r.length){this.targetInspect.innerText="Target: ---";return}let o=null;for(let h=0;h<r.length;h++){let u=r[h].object;for(;u;){if(u.userData&&(u.userData.gameName||u.userData.type||u.userData.gameId||u.userData.gameid)){o=u.userData;break}u=u.parent}if(o)break}if(!o){this.targetInspect.innerText="Target: ---";return}const a=o.gameName||"Object",c=o.gameId||o.gameid||"---",l=o.type||"---";this.targetInspect.innerText=`Target: ${a} (ID: ${c}) [${l}]`}showGameOver(t){if(this.player&&this.player.gameMode==="matrix"||this.gameOverShown)return;this.gameOverShown=!0,this.gameOverScreen.classList.remove("hidden"),document.getElementById("game-over-title").innerText=t;try{const n=document.getElementById("touch-controls");n&&(n.style.display="none")}catch{}const e=document.getElementById("restart-btn");e.onclick=()=>{location.reload()},e.style.pointerEvents="auto",e.style.cursor="pointer";try{typeof window<"u"&&window.game&&t&&t.toUpperCase().includes("DIED")&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(qp)}catch{}}showVictory(){if(!(this.player&&this.player.gameMode==="matrix")){this.gameOverShown=!1,this.showGameOver("VICTORY ROYALE!"),document.getElementById("game-over-title").style.color="#f1c40f";try{this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps()}catch{}try{const t=document.getElementById("touch-controls");t&&(t.style.display="none")}catch{}try{typeof window<"u"&&window.game&&typeof window.game.playEndSequence=="function"&&window.game.playEndSequence(Yp)}catch{}}}updateMinimap(){if(!this.minimapContainer)return;const t=this.settings.showMinimap!==!1;if(this.minimapContainer.classList.toggle("hidden",!t),!t||!this.minimapCtx||!this.player)return;const e=this.minimapCtx,n=this.minimapSize;e.clearRect(0,0,n,n),e.fillStyle="rgba(10, 12, 20, 0.75)",e.fillRect(0,0,n,n),e.strokeStyle="rgba(255, 255, 255, 0.25)",e.lineWidth=2,e.strokeRect(1,1,n-2,n-2);const i=Math.max(1,this.world&&this.world.halfMapSize?this.world.halfMapSize:this.mapSize/2),r=n*.45,o=n/2,a=n/2;if(this.world&&typeof this.world.stormRadius=="number"&&this.world.stormRadius>0){const h=Math.max(0,Math.min(1.2,this.world.stormRadius/i)),u=r*h;e.beginPath(),e.strokeStyle="rgba(157, 77, 187, 0.85)",e.lineWidth=3,e.arc(o,a,u,0,Math.PI*2),e.stroke()}const c=Math.max(o-r,Math.min(o+r,o+this.player.position.x/i*r)),l=Math.max(a-r,Math.min(a+r,a-this.player.position.z/i*r));e.beginPath(),e.fillStyle="#00d8ff",e.strokeStyle="#ffffff",e.lineWidth=2,e.arc(c,l,6,0,Math.PI*2),e.fill(),e.stroke()}}const Kp="/threejs-voxel-firecraft/dist/assets/mixkit-kill-blood-zombie-By90BKfb.ogg",$p="/threejs-voxel-firecraft/dist/assets/zombie-B8PCKsyJ.ogg";class Zp{constructor(t,e,n,i){this.scene=t,this.player=e,this.world=n,this.enemies=[],this.spawnInterval=5e3,this.lastSpawn=0,this.killedCount=0,this.groanBuffer=null;const r=i&&(i.gameMode==="matrix"||i.gameMode==="studio")?0:i?i.enemyCount:15;this.difficulty=i?i.difficulty:"medium",this.gameMode=i&&i.gameMode?i.gameMode:"survival";for(let o=0;o<r;o++)this.spawnEnemy();this.deathBuffer=null;try{const o=window.AudioContext||window.webkitAudioContext;o&&(this.audioCtx=new o,fetch(Kp).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.deathBuffer=a,this.enemies.forEach(c=>{c.audioCtx=this.audioCtx,c.deathBuffer=a})}).catch(a=>{}),fetch($p).then(a=>a.arrayBuffer()).then(a=>this.audioCtx.decodeAudioData(a)).then(a=>{this.groanBuffer=a,this.enemies.forEach(c=>{c.audioCtx=this.audioCtx,c.groanBuffer=a})}).catch(a=>{}))}catch{}}spawnEnemy(){if(this.gameMode==="matrix"||this.gameMode==="studio")return;const t=this.world&&this.world.halfMapSize?this.world.halfMapSize:100,e=(Math.random()-.5)*t,n=(Math.random()-.5)*t,i=this.world&&typeof this.world.getHeightAt=="function"?this.world.getHeightAt(e,n):0,r=this.world&&this.world.halfMapSize?this.world.halfMapSize:100,o=new Jp(this.scene,e,i,n,this.difficulty,r,this.player);o.audioCtx=this.audioCtx,o.deathBuffer=this.deathBuffer,o.groanBuffer=this.groanBuffer,o.world=this.world,this.enemies.push(o)}update(t){this.gameMode==="matrix"||this.gameMode==="studio"||(this.enemies.forEach(e=>{if(e.update(t,this.player),Math.sqrt(e.position.x*e.position.x+e.position.z*e.position.z)>this.world.stormRadius&&e.takeDamage(5*t),this.world&&typeof this.world.halfMapSize=="number"){const i=this.world.halfMapSize-1;e.position.x=Math.max(-i,Math.min(i,e.position.x)),e.position.z=Math.max(-i,Math.min(i,e.position.z))}}),this.enemies=this.enemies.filter(e=>e.readyToDespawn?(this.killedCount++,!1):!0))}}class Jp{constructor(t,e,n,i,r,o=100,a=null){this.scene=t,this.position=new C(e,n,i),this.mapHalfSize=o,this.world=null,this.player=a,this.deathTimer=0,this.deathDuration=0,this.deathFallProgress=0,this.readyToDespawn=!1,this.groanBuffer=null,this.groanCooldown=0,this.groanRange=15,this._groanSource=null,this._groanGain=null,r==="easy"?(this.health=50,this.damage=2,this.speed=3):r==="hard"?(this.health=150,this.damage=10,this.speed=6):(this.health=100,this.damage=5,this.speed=4.5),this.state="wander",this.isDead=!1,this.attackRange=2,this.detectionRange=25,this.attackCooldown=1.5,this.lastAttack=0,this.wanderTarget=null,this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4,this.createMesh()}createMesh(){this.mesh=new Wt,this.mesh.position.copy(this.position),this.mesh.userData={gameId:Math.random().toString(36).substr(2,9).toUpperCase(),gameName:"Zombie"},this.scene.add(this.mesh);const t=new ot({color:9323693}),e=new ot({color:2899536}),n=new W(new rt(.5,.5,.5),t);n.position.y=1.75,this.mesh.add(n);const i=new W(new rt(.6,.8,.3),e);i.position.y=1.1,this.mesh.add(i);const r=new rt(.2,.8,.2);r.translate(0,-.3,0),this.leftArmPivot=new Wt,this.leftArmPivot.position.set(-.45,1.4,0),this.mesh.add(this.leftArmPivot),this.leftArmPivot.add(new W(r,t)),this.rightArmPivot=new Wt,this.rightArmPivot.position.set(.45,1.4,0),this.mesh.add(this.rightArmPivot),this.rightArmPivot.add(new W(r,t));const o=new rt(.25,.8,.25);o.translate(0,-.4,0),this.leftLegPivot=new Wt,this.leftLegPivot.position.set(-.15,.7,0),this.mesh.add(this.leftLegPivot),this.leftLegPivot.add(new W(o,e)),this.rightLegPivot=new Wt,this.rightLegPivot.position.set(.15,.7,0),this.mesh.add(this.rightLegPivot),this.rightLegPivot.add(new W(o,e)),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.animTime=0,this.attackAnimTime=0,this.attackAnimDuration=.5,this.createHealthBar()}createHealthBar(){const t=new We(1,.1),e=new Ln({color:0});this.healthBarBg=new W(t,e),this.healthBarBg.position.y=2.3,this.mesh.add(this.healthBarBg);const n=new We(1,.1),i=new Ln({color:16711680});this.healthBarFg=new W(n,i),this.healthBarFg.position.y=2.3,this.healthBarFg.position.z=.01,this.mesh.add(this.healthBarFg)}update(t,e){if(this.isDead){this.updateDeath(t);return}this.groanCooldown=Math.max(0,this.groanCooldown-t),this.groanBuffer&&this.audioCtx&&e&&this.groanCooldown<=0&&this.position.distanceTo(e.position)<=this.groanRange&&(this.playGroan(),this.groanCooldown=2+Math.random()*2.5);const n=e.position;this.healthBarBg.lookAt(n),this.healthBarFg.lookAt(n);const i=this.position.distanceTo(n);i<this.detectionRange?this.state="chase":this.state="wander";let r=!1;if(this.state==="chase"){const o=this.hasLineOfSight(e,n);if(i<this.detectionRange&&o){const a=new C().subVectors(n,this.position).normalize();if(a.y=0,i>2){const l=a.clone(),h=Math.sin(performance.now()/500+this.position.x)*.5,u=new C(a.z,0,-a.x).multiplyScalar(h);l.add(u).normalize();const f=this.position.clone().add(l.multiplyScalar(this.speed*t));this.checkCollision(f)||this.position.copy(f),this.mesh.lookAt(n),r=!0}else{const l=a.clone().multiplyScalar(-1),h=this.position.clone().add(l.multiplyScalar(this.speed*t*.5));this.checkCollision(h)||this.position.copy(h),this.mesh.lookAt(n)}if(i<this.attackRange){const l=performance.now()/1e3;l-this.lastAttack>this.attackCooldown&&(e.takeDamage(this.damage),this.lastAttack=l,this.attackAnimTime=this.attackAnimDuration)}}else this.state="wander"}else{if(this.wanderTimer+=t,!this.wanderTarget||this.wanderTimer>this.wanderChangeInterval){const o=10+Math.random()*30,a=Math.random()*Math.PI*2,c=this.position.x+Math.cos(a)*o,l=this.position.z+Math.sin(a)*o,h=(g,_,m)=>Math.max(_,Math.min(m,g)),u=this.mapHalfSize*.9,f=h(c,-u,u),p=h(l,-u,u);this.wanderTarget=new C(f,0,p),this.wanderTimer=0,this.wanderChangeInterval=2+Math.random()*4}if(this.wanderTarget){const o=new C().subVectors(this.wanderTarget,this.position);o.y=0,o.length()>.5?(o.normalize(),this.position.add(o.multiplyScalar(this.speed*t*.5)),this.mesh.lookAt(this.wanderTarget.x,this.position.y,this.wanderTarget.z),r=!0):(this.wanderTimer+=t,this.wanderTimer>this.wanderChangeInterval&&(this.wanderTarget=null,this.wanderTimer=0))}}if(this.mesh.position.copy(this.position),this.world&&typeof this.world.getHeightAt=="function"){const o=this.world.getHeightAt(this.position.x,this.position.z);this.mesh.position.y=Math.max(this.mesh.position.y,o),this.position.y=this.mesh.position.y}if(r){this.animTime+=t*5;const o=Math.sin(this.animTime)*.5;this.leftLegPivot.rotation.x=o,this.rightLegPivot.rotation.x=-o,this.leftArmPivot.rotation.x=-Math.PI/3+o*.2,this.rightArmPivot.rotation.x=-Math.PI/3-o*.2}else this.state!=="attack"&&(this.leftLegPivot.rotation.x=0,this.rightLegPivot.rotation.x=0,this.leftArmPivot.rotation.x=-Math.PI/3,this.rightArmPivot.rotation.x=-Math.PI/3);if(this.attackAnimTime>0){this.attackAnimTime=Math.max(0,this.attackAnimTime-t);const o=1-this.attackAnimTime/this.attackAnimDuration,a=Math.sin(o*Math.PI)*1.5;if(this.leftArmPivot.rotation.x=-Math.PI/2+a*.2,this.rightArmPivot.rotation.x=-Math.PI/2-a*.2,o>.3&&o<.7){const c=new C;this.mesh.getWorldDirection(c),c.y=0,c.normalize(),this.position.add(c.multiplyScalar(.02))}}}takeDamage(t){this.health-=t;const e=Math.max(0,this.health/100);this.healthBarFg.scale.x=e,this.mesh.traverse(n=>{if(n.isMesh&&n!==this.healthBarBg&&n!==this.healthBarFg){const i=n.material;if(!n.userData.originalColor&&i&&i.color)try{n.userData.originalColor=i.color.clone()}catch{n.userData.originalColor=null}if(i&&(i.isMeshStandardMaterial||i.isMeshPhongMaterial||i.isMeshLambertMaterial))i.emissive=new Pt(16711680);else if(i&&i.color)try{i.color=i.color.clone().lerp(new Pt(16711680),.6)}catch{}}}),setTimeout(()=>{this.isDead||this.mesh.traverse(n=>{if(n.isMesh&&n!==this.healthBarBg&&n!==this.healthBarFg){const i=n.material;if(i&&(i.isMeshStandardMaterial||i.isMeshPhongMaterial||i.isMeshLambertMaterial))i.emissive=new Pt(0);else if(i&&i.color&&n.userData&&n.userData.originalColor)try{i.color.copy(n.userData.originalColor)}catch{}}})},100),this.health<=0&&!this.isDead&&this.startDeath()}playDeathSound(){try{const t=this.audioCtx.createBufferSource();t.buffer=this.deathBuffer;const e=this.audioCtx.createGain();e.gain.value=.7,t.connect(e),e.connect(this.audioCtx.destination),t.start(0)}catch(t){console.warn("playDeathSound error:",t)}}checkCollision(t){if(!this.scene)return!1;const e=.5;for(let n of this.scene.children)if(n.userData&&(n.userData.type==="house"||n.userData.type==="tree")){const i=n.position,r=Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.z-i.z,2)),o=n.userData.type==="house"?5:2;if(r<e+o)return!0}return!1}hasLineOfSight(t,e){if(!this.scene)return!0;const n=new C().subVectors(e,this.position).normalize(),i=this.position.distanceTo(e),o=new ri(this.position.clone().add(new C(0,1,0)),n,0,i).intersectObjects(this.scene.children,!0);for(let a of o){if(a.object===this.mesh||a.object.parent===this.mesh||a.object===t.mesh||a.object.parent===t.mesh)continue;let c=a.object;for(;c.parent&&c.parent!==this.scene;)c=c.parent;if(c.userData&&(c.userData.type==="house"||c.userData.type==="tree"))return!1}return!0}startDeath(){this.isDead=!0,this.deathTimer=0,this.deathFallProgress=0,this.deathDuration=3+Math.random()*2,this.stopGroan(),this.healthBarBg&&(this.healthBarBg.visible=!1),this.healthBarFg&&(this.healthBarFg.visible=!1);const t=25,e=this.player&&this.player.position;if(e?this.position.distanceTo(e)<=t:!0)try{this.audioCtx&&this.deathBuffer&&(this.audioCtx.state==="suspended"?this.audioCtx.resume().then(()=>{this.playDeathSound()}):this.audioCtx.state==="running"&&this.playDeathSound())}catch(i){console.warn("Error playing death sound:",i)}}updateDeath(t){this.deathFallProgress=Math.min(1,this.deathFallProgress+t*2.5);const e=-Math.PI/2*this.deathFallProgress;this.mesh&&(this.mesh.rotation.x=e,this.mesh.position.y=Math.max(0,this.mesh.position.y-t*.6)),this.deathTimer+=t,this.deathTimer>=(this.deathDuration||3)&&(this.mesh&&this.mesh.parent&&this.scene.remove(this.mesh),this.readyToDespawn=!0)}playGroan(){try{if(!this.audioCtx||!this.groanBuffer)return;if(this.audioCtx.state==="suspended"){this.audioCtx.resume().then(()=>this.playGroan());return}const t=this.audioCtx.createBufferSource();t.buffer=this.groanBuffer;const e=this.audioCtx.createGain();e.gain.value=.45,t.connect(e),e.connect(this.audioCtx.destination),t.onended=()=>{this._groanSource=null,this._groanGain=null},t.start(0),this._groanSource=t,this._groanGain=e}catch(t){console.warn("playGroan error:",t)}}stopGroan(){if(this._groanSource){try{this._groanSource.stop()}catch{}try{this._groanSource.disconnect()}catch{}this._groanSource=null}if(this._groanGain){try{this._groanGain.disconnect()}catch{}this._groanGain=null}}}class Qp{constructor(t,e,n){this.scene=t,this.player=e,this.items=[],this.interactionPrompt=document.getElementById("interaction-prompt"),this.mapSize=n&&n.mapSize?n.mapSize:qa,this.spawnSpan=this.mapSize*.75,this.glowRadius=7,this.world=null,this.settings=n||{},this.initLoot(),document.addEventListener("keydown",i=>{i.code==="KeyE"&&this.tryInteract()})}setWorld(t){this.world=t,this.realignItemsToGround()}getClampedCoord(t,e){if(this.world&&typeof this.world.halfMapSize=="number"){const n=this.world.halfMapSize-1;return{x:Math.max(-n,Math.min(n,t)),z:Math.max(-n,Math.min(n,e))}}return{x:t,z:e}}initLoot(){if(this.settings.gameMode==="matrix"||this.settings.gameMode==="studio"||this.settings.skipLoot)return;for(let e=0;e<24;e++){let n=(Math.random()-.5)*this.spawnSpan,i=(Math.random()-.5)*this.spawnSpan;({x:n,z:i}=this.getClampedCoord(n,i)),this.createChest(n,.5,i)}for(let e=0;e<36;e++){let n=(Math.random()-.5)*this.spawnSpan,i=(Math.random()-.5)*this.spawnSpan;({x:n,z:i}=this.getClampedCoord(n,i)),this.spawnJuiceBottle(n,i)}const t=[2899536,15105570,1752220,15158332,10181046];for(let e=0;e<8;e++){let n=(Math.random()-.5)*this.spawnSpan,i=(Math.random()-.5)*this.spawnSpan;({x:n,z:i}=this.getClampedCoord(n,i));const r=t[e%t.length];this.spawnBackpack(n,i,r)}}createChest(t,e,n){this.spawnChest(t,n)}spawnChest(t,e){const n=new Wt;({x:t,z:e}=this.getClampedCoord(t,e));let i=.5;this.world&&typeof this.world.getHeightAt=="function"&&(i=this.world.getHeightAt(t,e)+.5),n.position.set(t,i,e);const r=new rt(1,.8,.6),o=new ot({color:15844367,roughness:.3,metalness:.5}),a=new W(r,o);n.add(a);const c=new rt(1,.2,.6),l=new W(c,o);l.position.y=.5,n.add(l);const h=new W(new rt(.2,.3,.1),new ot({color:9807270}));h.position.set(0,.3,.3),n.add(h),n.castShadow=!0,n.receiveShadow=!0;const u=["Rifle","Sniper","Pistol","ShieldPotion","SMG","Shotgun","DMR"],f=u[Math.floor(Math.random()*u.length)];n.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:f};const p=this.createGlowEffect();p.position.y=1,n.add(p),n.userData.glow=p,this.scene.add(n),this.items.push(n)}spawnChestWithLoot(t,e,n){const i=new Wt;({x:t,z:e}=this.getClampedCoord(t,e));let r=.5;this.world&&typeof this.world.getHeightAt=="function"&&(r=this.world.getHeightAt(t,e)+.5),i.position.set(t,r,e);const o=new rt(1,.8,.6),a=new ot({color:15844367,roughness:.3,metalness:.5}),c=new W(o,a);i.add(c);const l=new rt(1,.2,.6),h=new W(l,a);h.position.y=.5,i.add(h);const u=new W(new rt(.2,.3,.1),new ot({color:9807270}));u.position.set(0,.3,.3),i.add(u),i.castShadow=!0,i.receiveShadow=!0,i.userData={type:"chest",isOpened:!1,gameId:this.generateID(),gameName:"Chest",loot:n};const f=this.createGlowEffect();f.position.y=1,i.add(f),i.userData.glow=f,this.scene.add(i),this.items.push(i)}spawnJuiceBottle(t,e){const n=new Wt;({x:t,z:e}=this.getClampedCoord(t,e));let i=.5;this.world&&typeof this.world.getHeightAt=="function"&&(i=this.world.getHeightAt(t,e)+.5),n.position.set(t,i,e);const r=new W(new Te(.2,.2,.6,8),new ot({color:2600544}));r.position.y=.5,n.add(r);const o=new W(new Te(.12,.12,.15,8),new ot({color:12597547}));o.position.y=.9,n.add(o),n.castShadow=!0,n.receiveShadow=!0,n.userData={type:"stamina",gameId:this.generateID(),gameName:"JuiceBottle",amount:50};const a=this.createGlowEffect();a.position.y=.9,n.add(a),n.userData.glow=a,this.scene.add(n),this.items.push(n)}generateID(){return Math.random().toString(36).substr(2,9).toUpperCase()}spawnLootInHouse(t,e,n){this.spawnChest(t,n)}spawnBackpack(t,e,n){const i=new Wt;({x:t,z:e}=this.getClampedCoord(t,e));let r=.5;this.world&&typeof this.world.getHeightAt=="function"&&(r=this.world.getHeightAt(t,e)+.5),i.position.set(t,r,e);const o=new W(new rt(.7,.9,.35),new ot({color:n,metalness:.15,roughness:.8}));i.add(o);const a=new W(new rt(.6,.25,.16),new ot({color:3426654,metalness:.1,roughness:.8}));a.position.set(0,-.55,.18),i.add(a),i.castShadow=!0,i.receiveShadow=!0;const c=this.createGlowEffect();c.position.y=1,i.add(c),i.userData={type:"backpack",color:n,gameId:this.generateID(),gameName:"Backpack",isOpened:!1,glow:c},this.scene.add(i),this.items.push(i)}spawnMatrixLoadout(t=0,e=0){[{dx:2,dz:0,loot:"Pistol"},{dx:-2,dz:0,loot:"Rifle"},{dx:0,dz:2,loot:"Sniper"},{dx:0,dz:-2,loot:"ShieldPotion"},{dx:2,dz:2,loot:"SMG"},{dx:-2,dz:-2,loot:"Shotgun"},{dx:-2,dz:2,loot:"DMR"}].forEach(r=>{this.spawnChestWithLoot(t+r.dx,e+r.dz,r.loot)}),this.spawnJuiceBottle(t+3,e+3),this.spawnJuiceBottle(t-3,e-3),[2899536,15105570,1752220].forEach((r,o)=>{this.spawnBackpack(t+(o-1)*2,e+4,r)})}update(){let t=null;const e=this.player.position;for(const n of this.items){if(n.userData&&n.userData.isOpened)continue;const i=e.distanceTo(n.position);if(this.updateGlow(n,i),i<3){t=n;break}}if(t){this.interactionPrompt.classList.remove("hidden");const n=t.userData||{};if(n.type==="chest")this.interactionPrompt.innerText=`Press E to open (Contains: ${n.loot})`;else if(n.type==="stamina")this.interactionPrompt.innerText=`Press E to collect ${n.gameName} (+${n.amount} Stamina)`;else if(n.type==="backpack"){const i=n.color?"#"+n.color.toString(16).padStart(6,"0"):"";this.interactionPrompt.innerText=`Press E to equip Backpack ${i}`}else this.interactionPrompt.innerText="Press E to interact";this.currentItem=t}else this.interactionPrompt.classList.add("hidden"),this.currentItem=null}tryInteract(){if(this.currentItem){const t=this.currentItem.userData;if(!t)return;if(t.type==="chest"&&!t.isOpened)t.isOpened=!0,this.scene.remove(this.currentItem),this.player.collectItem(t.loot),console.log(`Looted ${t.loot}!`);else if(t.type==="stamina"){const e=t.amount||50;this.player&&(this.player.stamina=Math.min(100,this.player.stamina+e)),this.scene.remove(this.currentItem),t.isOpened=!0,console.log(`Picked up stamina item: +${e}`)}else if(t.type==="backpack"){const e=t.color||2899536;if(this.player&&typeof this.player.collectItem=="function"){const n=this.player.collectItem(`Backpack:${e.toString(16)}`);if(n!=null){const i=this.player.position.clone();this.spawnBackpack(i.x+.5,i.z+.5,n)}}this.scene.remove(this.currentItem),t.isOpened=!0,console.log(`Equipped backpack ${e.toString(16)}`)}}}realignItemsToGround(){!this.world||typeof this.world.getHeightAt!="function"||this.items.forEach(t=>{const e=t.position,n=this.world.getHeightAt(e.x,e.z),i=(t.userData&&t.userData.type==="chest",.5);t.position.y=n+i})}updateGlow(t,e){if(!t||!t.userData||!t.userData.glow)return;const n=t.userData.glow,i=!t.userData.isOpened&&e<this.glowRadius;n.visible=i,i&&(n.rotation.y+=.02,n.position.y=(t.userData.type==="chest"?1:.9)+Math.sin(performance.now()/500)*.1)}createGlowEffect(){const e=new Float32Array(120),n=.6;for(let a=0;a<40;a++){const c=n*Math.random(),l=Math.random()*Math.PI*2,h=Math.random()*n*.6;e[a*3]=Math.cos(l)*c,e[a*3+1]=h,e[a*3+2]=Math.sin(l)*c}const i=new ge;i.setAttribute("position",new Ce(e,3));const r=new Wa({color:16765286,size:.15,transparent:!0,opacity:.9,depthWrite:!1,blending:Qs,sizeAttenuation:!0}),o=new yp(i,r);return o.visible=!1,o}}class tm{constructor(t,e={}){this.player=t,this.container=document.getElementById("touch-controls"),this.enabled=!0,this.joystick=document.createElement("div"),this.joystick.className="tc-joystick",this.joystick.style.zIndex="210",this.stick=document.createElement("div"),this.stick.className="tc-stick",this.joystick.appendChild(this.stick),this.buttons=document.createElement("div"),this.buttons.className="tc-buttons",this.buttons.style.zIndex="210",this.fireBtn=document.createElement("button"),this.fireBtn.className="tc-btn",this.fireBtn.innerText="FIRE",this.jumpBtn=document.createElement("button"),this.jumpBtn.className="tc-btn",this.jumpBtn.innerText="JUMP",this.sprintBtn=document.createElement("button"),this.sprintBtn.className="tc-btn",this.sprintBtn.innerText="SPRINT",this.interactBtn=document.createElement("button"),this.interactBtn.className="tc-btn tc-interact-btn",this.interactBtn.innerText="E",this.interactBtn.style.display="none",this.crouchBtn=document.createElement("button"),this.crouchBtn.className="tc-btn",this.crouchBtn.innerText="CROUCH",this.crouchBtn.style.fontSize="16px",this.buttons.appendChild(this.fireBtn),this.buttons.appendChild(this.jumpBtn),this.buttons.appendChild(this.sprintBtn),this.buttons.appendChild(this.crouchBtn),this.buttons.appendChild(this.interactBtn),this.container.appendChild(this.joystick),this.container.appendChild(this.buttons),this.container.classList.remove("hidden"),this.active=!1,this.startPos=null,this.currentPos={x:0,y:0},this.lookActive=!1,this.lookStartPos=null,this._bindJoystick(),this._bindButtons(),this._bindLookArea(),this.deadZone=10,this.maxRadius=50,document.body.style.touchAction="none";try{this.player&&(this.player.allowTouchMovement=!0)}catch{}}_dispatchTouchLook(t,e){try{window.dispatchEvent(new CustomEvent("game-touch-look",{detail:{dx:t,dy:e}}))}catch{}}destroy(){try{this.container.classList.add("hidden"),this.container.removeChild(this.joystick),this.container.removeChild(this.buttons),document.body.style.touchAction="",this.player&&(this.player.allowTouchMovement=!1)}catch{}}_bindJoystick(){this.joystick.addEventListener("touchstart",e=>{e.preventDefault();const n=e.changedTouches[0];this.joystick.getBoundingClientRect(),this.startPos={x:n.clientX,y:n.clientY},this.active=!0}),this.joystick.addEventListener("touchmove",e=>{if(!this.active)return;e.preventDefault();const n=e.changedTouches[0],i=n.clientX-this.startPos.x,r=n.clientY-this.startPos.y,o=Math.sqrt(i*i+r*r),a=Math.atan2(r,i),c=Math.min(this.maxRadius,o),l=Math.cos(a)*c,h=Math.sin(a)*c;this.stick.style.transform=`translate(${l}px, ${h}px)`;const u=i/this.maxRadius,f=r/this.maxRadius;this.player.moveForward=f<-.3,this.player.moveBackward=f>.3,this.player.moveLeft=u<-.3,this.player.moveRight=u>.3});const t=e=>{this.active&&(e.preventDefault(),this.active=!1,this.startPos=null,this.stick.style.transform="translate(0,0)",this.player.moveForward=!1,this.player.moveBackward=!1,this.player.moveLeft=!1,this.player.moveRight=!1)};this.joystick.addEventListener("touchend",t),this.joystick.addEventListener("touchcancel",t)}_bindButtons(){let t=null;this.fireBtn.addEventListener("touchstart",e=>{e.preventDefault(),this.player&&typeof this.player.shoot=="function"&&(this.player.shoot(),t=setInterval(()=>{this.player&&typeof this.player.shoot=="function"&&this.player.shoot()},150))}),this.fireBtn.addEventListener("touchend",e=>{e.preventDefault(),t&&(clearInterval(t),t=null)}),this.jumpBtn.addEventListener("touchstart",e=>{e.preventDefault(),this.player&&this.player.canJump===!0&&(this.player.velocity.y+=this.player.jumpHeight,this.player.canJump=!1)}),this.sprintBtn.addEventListener("touchstart",e=>{e.preventDefault(),this.player&&(this.player.isSprinting=!0)}),this.sprintBtn.addEventListener("touchend",e=>{e.preventDefault(),this.player&&(this.player.isSprinting=!1)}),this.interactBtn.addEventListener("touchstart",e=>{e.preventDefault(),window.game&&window.game.itemManager&&window.game.itemManager.tryInteract()}),this.crouchBtn.addEventListener("touchstart",e=>{e.preventDefault(),this.player&&(this.player.isCrouching=!this.player.isCrouching,this.crouchBtn.style.background=this.player.isCrouching?"rgba(52, 152, 219, 0.9)":"rgba(241, 196, 15, 0.9)")})}update(){window.game&&window.game.itemManager&&window.game.itemManager.currentItem?this.interactBtn.style.display="block":this.interactBtn.style.display="none"}_bindLookArea(){try{this.lookArea=document.createElement("div"),this.lookArea.className="tc-look-area",this.lookArea.style.position="absolute",this.lookArea.style.top="0",this.lookArea.style.bottom="0",this.lookArea.style.right="0",this.lookArea.style.left="0",this.lookArea.style.width="100%",this.lookArea.style.zIndex="190",this.lookArea.style.background="transparent",this.lookArea.style.touchAction="none",this.lookArea.style.pointerEvents="auto",this.container.appendChild(this.lookArea);let t=null,e=0,n=0;this.lookArea.addEventListener("touchstart",r=>{if(t!==null)return;const o=r.changedTouches[0];t=o.identifier,e=o.clientX,n=o.clientY,r.cancelable&&r.preventDefault()},{passive:!1}),this.lookArea.addEventListener("touchmove",r=>{if(t!==null){r.cancelable&&r.preventDefault();for(let o=0;o<r.changedTouches.length;o++)if(r.changedTouches[o].identifier===t){const a=r.changedTouches[o],c=a.clientX-e,l=a.clientY-n;e=a.clientX,n=a.clientY,this._dispatchTouchLook(c,l);break}}},{passive:!1});const i=r=>{if(t!==null){for(let o=0;o<r.changedTouches.length;o++)if(r.changedTouches[o].identifier===t){t=null;break}}};this.lookArea.addEventListener("touchend",i),this.lookArea.addEventListener("touchcancel",i)}catch{}}}function em({maxLines:s=400,autoShow:t=!1}={}){const e=[],n={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)},i=document.createElement("div");i.id="debug-overlay",i.className="debug-overlay hidden";const r=document.createElement("div");r.className="debug-overlay-header",r.innerHTML="<strong>DEBUG</strong>";const o=document.createElement("div");o.className="debug-overlay-actions";const a=document.createElement("button");a.textContent="Clear";const c=document.createElement("button");c.textContent="Close",o.appendChild(a),o.appendChild(c),r.appendChild(o);const l=document.createElement("div");l.className="debug-overlay-list",i.appendChild(r),i.appendChild(l),document.body.appendChild(i),r.style.cursor="move";let h=!1,u=0,f=0;function p(R){if(!h)return;const b=Math.max(0,Math.min(window.innerWidth-i.offsetWidth,R.clientX-u)),A=Math.max(0,Math.min(window.innerHeight-i.offsetHeight,R.clientY-f));i.style.left=b+"px",i.style.top=A+"px",i.style.right="auto"}function g(R){h=!1,window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g);try{R&&R.pointerId&&i.releasePointerCapture&&i.releasePointerCapture(R.pointerId)}catch{}}r.addEventListener("pointerdown",R=>{try{const b=i.getBoundingClientRect();i.style.left=b.left+"px",i.style.top=b.top+"px",i.style.position="fixed",i.style.transform="none",i.style.right="auto",u=R.clientX-b.left,f=R.clientY-b.top,h=!0,window.addEventListener("pointermove",p),window.addEventListener("pointerup",g);try{i.setPointerCapture&&i.setPointerCapture(R.pointerId)}catch{}}catch{}},{passive:!1});function _(){l.innerHTML="";const R=Math.max(0,e.length-s);for(let b=R;b<e.length;b++){const A=document.createElement("div");A.className="debug-line debug-"+e[b].level;const I=new Date(e[b].ts).toLocaleTimeString();A.textContent=`[${I}] ${e[b].level.toUpperCase()}: ${e[b].msg}`,l.appendChild(A)}l.scrollTop=l.scrollHeight}function m(R,b){try{const A=b.map(I=>{try{return typeof I=="string"?I:JSON.stringify(I)}catch{return String(I)}}).join(" ");e.push({level:R,msg:A,ts:Date.now()}),e.length>s*2&&e.splice(0,e.length-s*2),_()}catch{}}console.log=function(...R){n.log(...R),m("log",R)},console.info=function(...R){n.info(...R),m("info",R)},console.warn=function(...R){n.warn(...R),m("warn",R)},console.error=function(...R){n.error(...R),m("error",R)};function d(R,b,A,I,y){typeof R=="string"?m("error",[R+" "+(b||"")+":"+(A||"?")]):R&&R.message&&m("error",[R.message,R.error||y])}function M(R){try{m("error",["UnhandledRejection",R&&R.reason?R.reason:R])}catch{}}window.addEventListener("error",d),window.addEventListener("unhandledrejection",M),a.addEventListener("click",()=>{e.length=0,_()}),c.addEventListener("click",()=>S());function v(){i.classList.remove("hidden")}function S(){i.classList.add("hidden")}return t&&v(),{show:v,hide:S,destroy(){console.log=n.log,console.info=n.info,console.warn=n.warn,console.error=n.error,window.removeEventListener("error",d),window.removeEventListener("unhandledrejection",M);try{i.remove()}catch{}},logs:e}}const Js=(()=>{try{return typeof navigator>"u"?!1:/Mobi|Android|iPhone|iPad|Tablet|Mobile/i.test(navigator.userAgent)||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}catch{return!1}})();window.addEventListener("unhandledrejection",s=>{try{const t=s.reason,e=t&&t.message?t.message:String(t);if(e&&e.includes("If you see this error we have a bug")){console.warn("Suppressed Chromium UnknownError:",e),s.preventDefault&&s.preventDefault();return}}catch{}});class br{constructor(){this.scene=new xp,this.scene.background=new Pt(8900331),this.scene.fog=new Mr(8900331,20,100),this.renderer=new Ha({antialias:!0});const t=Js?1:1.5;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tc,document.getElementById("game-container").appendChild(this.renderer.domElement);const e=new bp(16777215,.6);this.scene.add(e);const n=new Tp(16777215,.8);n.position.set(50,100,50),n.castShadow=!0,n.shadow.camera.left=-100,n.shadow.camera.right=100,n.shadow.camera.top=100,n.shadow.camera.bottom=-100,n.shadow.camera.near=.1,n.shadow.camera.far=160,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,this.scene.add(n),this.camera=new Ie(75,window.innerWidth/window.innerHeight,.1,1e3),this.clock=new Ap,this._pickRaycaster=new ri,this._objectClickHandler=null,this._objectClickTarget=null,this.isPaused=!1,this.pauseMenu=document.getElementById("pause-menu"),this.bgAudio=null,this.bgMusicVolume=.5,this._endSequenceAudio=null,this._prevBgVolume=null,document.addEventListener("keydown",i=>{i.code==="Escape"&&this.togglePause()}),this.setupMenu()}setupMenu(){const t=document.getElementById("main-menu"),e=document.getElementById("play-btn"),n=document.getElementById("setting-difficulty"),i=document.getElementById("setting-enemies"),r=document.getElementById("setting-storm"),o=document.getElementById("setting-debug"),a=document.getElementById("setting-show-ids"),c=document.getElementById("setting-minimap"),l=document.getElementById("setting-music-volume"),h=document.getElementById("setting-music-volume-val"),u=document.getElementById("setting-camera"),f=document.getElementById("setting-touch-controls"),p=document.getElementById("setting-game-mode"),g=document.getElementById("quit-btn"),_=document.getElementById("float-btn"),m=document.getElementById("enemy-count-val"),d=document.getElementById("storm-time-val"),M=localStorage.getItem("voxel-firecraft-settings");if(M){const S=JSON.parse(M);if(n.value=S.difficulty,i.value=S.enemyCount,r.value=S.stormTime,m.innerText=S.enemyCount,d.innerText=S.stormTime,S.debugMode&&(o.checked=!0),S.showRenderedIds&&a&&(a.checked=!0),c&&(c.checked=S.showMinimap!==!1),S.musicVolume!==void 0&&l&&h){const R=parseInt(S.musicVolume,10);l.value=R,h.innerText=R,this.bgMusicVolume=R/100}S.cameraMode&&(u.value=S.cameraMode),S.useTouchControls!==void 0&&f&&(f.checked=!!S.useTouchControls),S.gameMode&&p&&(p.value=S.gameMode)}i.oninput=()=>m.innerText=i.value,r.oninput=()=>d.innerText=r.value,e.onclick=()=>{const S={difficulty:n.value,enemyCount:parseInt(i.value),stormTime:parseInt(r.value),debugMode:o.checked,showRenderedIds:a?a.checked:!1,showMinimap:c?c.checked:!0,musicVolume:l?parseInt(l.value):Math.round(this.bgMusicVolume*100),musicEnabled:document.getElementById("setting-music-enabled")?document.getElementById("setting-music-enabled").checked:!0,cameraMode:u.value,useTouchControls:f?f.checked:!1,gameMode:p?p.value:"survival"};if(localStorage.setItem("voxel-firecraft-settings",JSON.stringify(S)),t.style.display="none",S.musicEnabled!==!1?this.playBackgroundMusic():this.stopBackgroundMusic(),this.player&&this.world&&this.enemyManager){if(this.isPaused=!1,this.clock.getDelta(),e.innerText="PLAY GAME",this.player.controls)try{this.player.controls.lock()}catch{}this.hud&&(this.hud.settings=S)}else e.innerText="PLAY GAME",this.startGame(S)},g&&(g.onclick=()=>{try{localStorage.removeItem("voxel-firecraft-settings")}catch{}location.reload()}),_&&_.classList.add("hidden"),l&&(l.oninput=()=>{const S=parseInt(l.value,10);if(h&&(h.innerText=S),this.bgMusicVolume=S/100,this.bgAudio)try{this.bgAudio.volume=this.bgMusicVolume}catch{}});const v=document.getElementById("setting-music-enabled");v&&(v.onchange=()=>{v.checked?this.playBackgroundMusic():this.stopBackgroundMusic()}),f&&(f.onchange=()=>{try{const S=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}");S.useTouchControls=f.checked,localStorage.setItem("voxel-firecraft-settings",JSON.stringify(S))}catch{}})}startGame(t){const e={...t};(e.gameMode==="matrix"||e.gameMode==="studio")&&(e.enemyCount=0,e.skipLoot=!0),this.player=new Xp(this.camera,this.scene,null,e),this.itemManager=new Qp(this.scene,this.player,e),this.world=new Pp(this.scene,this.itemManager,e),this.player.worldObjects=this.world.objects,this.player.world=this.world,this.itemManager&&typeof this.itemManager.setWorld=="function"&&this.itemManager.setWorld(this.world),e.gameMode==="matrix"&&this.itemManager&&typeof this.itemManager.spawnMatrixLoadout=="function"&&this.itemManager.spawnMatrixLoadout(this.player.position.x,this.player.position.z),this.hud=new jp(this.player,this.world,t),this.enemyManager=new Zp(this.scene,this.player,this.world,e),this.player.setEnemyManager(this.enemyManager),this.setupObjectInspector();const n=document.getElementById("float-btn");n&&(e.gameMode==="studio"?(n.classList.remove("hidden"),n.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF",n.onclick=()=>{if(this.player.isFloating=!this.player.isFloating,!this.player.isFloating){const o=this.player.getSurfaceHeight(this.player.position.x,this.player.position.z);this.player.mesh.position.y=o,this.player.velocity.y=0}n.innerText=this.player.isFloating?"FLOAT ON":"FLOAT OFF"}):n.classList.add("hidden"));const i=document.getElementById("storm-timer");if(i){const o=e.gameMode==="studio";i.classList.toggle("hidden",o)}window.addEventListener("resize",()=>this.onWindowResize(),!1),this.renderer.domElement.addEventListener("pointerdown",()=>{if(!Js){try{this.player&&this.player.controls&&!this.player.controls.isLocked&&!this.player.isDead&&this.player.lockControls()}catch(o){console.warn("Pointer lock request skipped or failed:",o)}this.bgAudio&&this.bgAudio.paused&&this.playBackgroundMusic()}}),this.setupPauseMenu();try{const o=typeof navigator<"u"&&/Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent),a=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;(!!t.useTouchControls||o||a)&&(this.touchControls=new tm(this.player))}catch{}if(!Js&&this.player&&this.player.controls&&!this.player.controls.isLocked)try{this.player.lockControls()}catch(o){console.warn("Pointer lock on start skipped/failed:",o)}this.animate()}setupObjectInspector(){const t=this.renderer?this.renderer.domElement:null;if(t){if(this._objectClickHandler&&this._objectClickTarget)try{this._objectClickTarget.removeEventListener("click",this._objectClickHandler)}catch{}this._objectClickTarget=t,this._objectClickHandler=e=>{if(!this.player||!this.hud)return;const n=this.player.gameMode||"survival";if(n==="matrix"||n==="studio")return;let i=0,r=0;if(this.player.controls&&this.player.controls.isLocked)i=0,r=0;else{const f=t.getBoundingClientRect();i=(e.clientX-f.left)/f.width*2-1,r=-((e.clientY-f.top)/f.height*2-1)}this._pickRaycaster.setFromCamera(new Rt(i,r),this.camera);const o=[];if(this.world&&Array.isArray(this.world.objects)&&o.push(...this.world.objects),this.itemManager&&Array.isArray(this.itemManager.items)&&o.push(...this.itemManager.items),this.enemyManager&&Array.isArray(this.enemyManager.enemies)&&this.enemyManager.enemies.forEach(f=>{f&&f.mesh&&o.push(f.mesh)}),o.length===0)return;const a=this._pickRaycaster.intersectObjects(o,!0);if(!a.length)return;let c=a[0].object,l=null;for(;c;){if(c.userData&&(c.userData.gameId||c.userData.gameid)&&c.userData.gameName){l=c.userData;break}c=c.parent}if(!l)return;const h=l.gameName||"Object",u=l.gameId||l.gameid||"---";typeof this.hud.showSelectionInfo=="function"&&this.hud.showSelectionInfo(h,u)},t.addEventListener("click",this._objectClickHandler)}}togglePause(){if(this.player){if(this.player.controls&&this.player.controls.isLocked){this.showPauseMenu();return}this.isPaused=!this.isPaused,this.isPaused?this.pauseBackgroundMusic():this.playBackgroundMusic()}}setupPauseMenu(){document.addEventListener("keydown",e=>{e.code==="Escape"&&this.player&&!this.player.isDead&&(e.preventDefault(),this.showPauseMenu())});const t=document.getElementById("pause-menu");t&&t.remove()}showPauseMenu(){this.isPaused=!0,this.player.controls&&this.player.controls.isLocked&&this.player.controls.unlock(),this.player&&typeof this.player.stopFootsteps=="function"&&this.player.stopFootsteps(),this.pauseBackgroundMusic();const t=document.getElementById("main-menu");if(t){t.style.display="flex";const e=document.getElementById("play-btn");e&&this.player&&(e.innerText="RESUME GAME")}}playBackgroundMusic(){try{this.bgAudio||(this.bgAudio=new Audio(Cp),this.bgAudio.loop=!0,this.bgAudio.volume=this.bgMusicVolume,this.bgAudio.preload="auto");const t=this.bgAudio.play();t&&typeof t.then=="function"&&t.catch(()=>{})}catch(t){console.warn("Could not play background music:",t)}}pauseBackgroundMusic(){if(this.bgAudio&&!this.bgAudio.paused)try{this.bgAudio.pause()}catch{}}stopBackgroundMusic(){if(this.bgAudio)try{this.bgAudio.pause(),this.bgAudio.currentTime=0}catch{}}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());try{const t=this.clock.getDelta(),e=Math.min(t,.1),n=!!(this.touchControls&&this.touchControls.enabled),i=!!(this.player&&this.player.controls&&this.player.controls.isLocked);if(!this.isPaused&&this.player&&(i||n)){try{this.player.update(e)}catch(r){console.error("Error in player.update:",r)}try{const r=this.world.update(e,this.player.position);!(this.player&&this.player.gameMode==="studio")&&r&&r.inStorm?this.player.takeDamage(1*e):this.player&&typeof this.player.clearHurtQueue=="function"&&this.player.clearHurtQueue()}catch(r){console.error("Error in world.update:",r)}try{this.enemyManager.update(e)}catch(r){console.error("Error in enemyManager.update:",r)}try{this.itemManager.update()}catch(r){console.error("Error in itemManager.update:",r)}try{this.hud.update()}catch(r){console.error("Error in hud.update:",r)}try{this.touchControls&&typeof this.touchControls.update=="function"&&this.touchControls.update()}catch(r){console.error("Error in touchControls.update:",r)}try{!(this.player&&(this.player.gameMode==="matrix"||this.player.gameMode==="studio"))&&this.enemyManager.enemies.length===0&&!this.player.isDead&&!this.victoryShown&&(this.victoryShown=!0,this.hud.showVictory(),this.player.controls.unlock())}catch(r){console.error("Error in victory check:",r)}}this.renderer.render(this.scene,this.camera)}catch(t){try{console.error("Unhandled error in Game.animate:",t,{playerExists:!!this.player,playerWeaponCount:this.player?this.player.weapons?this.player.weapons.length:"no-weapons":"no-player",currentWeaponIndex:this.player?this.player.currentWeaponIndex:"no-player",hudExists:!!this.hud,hudSettings:this.hud?this.hud.settings:null});try{this._logRenderMaterialDiagnostics(t)}catch(e){console.error("Error during render diagnostics:",e)}}catch(e){console.error("Error logging animate failure:",e)}return}}}br.prototype.playEndSequence=function(s,t={}){try{if(this._playingEndSequence)return;if(this._playingEndSequence=!0,this.bgAudio)try{this._prevBgVolume=this.bgAudio.volume,this.bgAudio.pause()}catch{this._prevBgVolume=this.bgMusicVolume}if(this._endSequenceAudio){try{this._endSequenceAudio.pause(),this._endSequenceAudio.currentTime=0}catch{}this._endSequenceAudio=null}const e=new Audio(s);e.loop=t.loop||!1,e.volume=t.volume!==void 0?t.volume:1,e.preload="auto",this._endSequenceAudio=e,e.load(),setTimeout(()=>{const n=e.play();n&&typeof n.then=="function"&&n.catch(i=>{console.log("Audio playback blocked, waiting for user interaction:",i);const r=()=>{e.readyState<2&&e.load(),e.play().catch(()=>{}),document.removeEventListener("touchstart",r),document.removeEventListener("click",r)};document.addEventListener("touchstart",r,{once:!0}),document.addEventListener("click",r,{once:!0})})},100),e.addEventListener("ended",()=>{try{this.bgAudio&&this._prevBgVolume!==null&&(this.bgAudio.volume=this._prevBgVolume)}catch{}this._endSequenceAudio=null,this._prevBgVolume=null,this._playingEndSequence=!1})}catch(e){console.warn("playEndSequence error:",e)}};br.prototype._logRenderMaterialDiagnostics=function(s){try{const t=[];let e=0;this.scene.traverse(n=>{if(n.isMesh){e++;const i=n.material;if(!i){t.push({uuid:n.uuid,name:n.name||n.userData&&n.userData.gameName||"mesh",issue:"no-material"});return}const r=o=>({type:o.type||o.constructor&&o.constructor.name||"Unknown",isShaderMaterial:!!o.isShaderMaterial,isStandardMaterial:!!o.isMeshStandardMaterial,hasEmissive:o.emissive!==void 0,uniformsKeys:o.uniforms?Object.keys(o.uniforms):null,userData:o.userData||null});Array.isArray(i)?t.push({uuid:n.uuid,name:n.name||n.userData&&n.userData.gameName||"mesh",materials:i.map(r)}):t.push({uuid:n.uuid,name:n.userData&&n.userData.gameName||n.name||"mesh",material:r(i)})}}),console.error("Render diagnostics:",{originalError:s&&s.toString(),totalMeshes:e,sampleProblems:t.slice(0,30),note:"Look for materials missing expected uniforms (shader/standard) or meshes without material."})}catch(t){console.error("Failed collecting render diagnostics:",t)}};window.game=new br;(function(){try{const t=JSON.parse(localStorage.getItem("voxel-firecraft-settings")||"{}"),e=t&&t.debugMode||localStorage.getItem("showDebugOverlay")==="true"||!!window.DEBUG_OVERLAY;window.debugOverlay=em({autoShow:!!e}),window.addEventListener("keydown",n=>{if(n.key==="`"&&window.debugOverlay){const i=document.getElementById("debug-overlay");i&&i.classList.contains("hidden")?window.debugOverlay.show():window.debugOverlay&&window.debugOverlay.hide()}});try{let n=document.getElementById("debug-toggle-btn");n||(n=document.createElement("button"),n.id="debug-toggle-btn",n.title="Debug logs",n.innerText="DBG",document.body.appendChild(n));const i=!0;n.addEventListener("click",r=>{try{const o=document.getElementById("debug-overlay");o&&o.classList.contains("hidden")?(window.debugOverlay&&window.debugOverlay.show(),localStorage.setItem("showDebugOverlay","true")):(window.debugOverlay&&window.debugOverlay.hide(),localStorage.removeItem("showDebugOverlay"))}catch(o){console.warn("debug toggle error",o)}})}catch{}}catch(t){console.warn("debugOverlay init failed",t)}})();window.addEventListener("game-touch-look",s=>{try{const t=s.detail||{dx:0,dy:0},e=.003;if(window.game&&window.game.player)try{if(typeof window.game.player.rotateCamera=="function")window.game.player.rotateCamera(t.dx*e,t.dy*e);else{window.game.player._touchYaw=(window.game.player._touchYaw||0)-t.dx*.01,window.game.player._touchPitch=(window.game.player._touchPitch||0)-t.dy*.01;const i=Math.PI/2-.1;window.game.player._touchPitch=Math.max(-i,Math.min(i,window.game.player._touchPitch))}}catch{}}catch{}});
