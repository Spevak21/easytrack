(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function sc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lc={exports:{}},Zo={},ac={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),R1=Symbol.for("react.portal"),A1=Symbol.for("react.fragment"),F1=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),V1=Symbol.for("react.provider"),B1=Symbol.for("react.context"),U1=Symbol.for("react.forward_ref"),W1=Symbol.for("react.suspense"),G1=Symbol.for("react.memo"),Z1=Symbol.for("react.lazy"),T0=Symbol.iterator;function Q1(e){return e===null||typeof e!="object"?null:(e=T0&&e[T0]||e["@@iterator"],typeof e=="function"?e:null)}var uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cc=Object.assign,dc={};function wr(e,t,n){this.props=e,this.context=t,this.refs=dc,this.updater=n||uc}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fc(){}fc.prototype=wr.prototype;function pa(e,t,n){this.props=e,this.context=t,this.refs=dc,this.updater=n||uc}var ha=pa.prototype=new fc;ha.constructor=pa;cc(ha,wr.prototype);ha.isPureReactComponent=!0;var E0=Array.isArray,pc=Object.prototype.hasOwnProperty,ma={current:null},hc={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)pc.call(t,r)&&!hc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xi,type:e,key:o,ref:s,props:i,_owner:ma.current}}function Y1(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function K1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var b0=/\/+/g;function xs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K1(""+e.key):t.toString(36)}function Yi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case xi:case R1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+xs(s,0):r,E0(i)?(n="",e!=null&&(n=e.replace(b0,"$&/")+"/"),Yi(i,t,n,"",function(c){return c})):i!=null&&(ga(i)&&(i=Y1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(b0,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",E0(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+xs(o,l);s+=Yi(o,t,n,a,i)}else if(a=Q1(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+xs(o,l++),s+=Yi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function bi(e,t,n){if(e==null)return e;var r=[],i=0;return Yi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function X1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Ki={transition:null},J1={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:ma};function gc(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:bi,forEach:function(e,t,n){bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bi(e,function(){t++}),t},toArray:function(e){return bi(e,function(t){return t})||[]},only:function(e){if(!ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=wr;V.Fragment=A1;V.Profiler=H1;V.PureComponent=pa;V.StrictMode=F1;V.Suspense=W1;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;V.act=gc;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ma.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)pc.call(t,a)&&!hc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:xi,type:e.type,key:i,ref:o,props:r,_owner:s}};V.createContext=function(e){return e={$$typeof:B1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:V1,_context:e},e.Consumer=e};V.createElement=mc;V.createFactory=function(e){var t=mc.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:U1,render:e}};V.isValidElement=ga;V.lazy=function(e){return{$$typeof:Z1,_payload:{_status:-1,_result:e},_init:X1}};V.memo=function(e,t){return{$$typeof:G1,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Ki.transition;Ki.transition={};try{e()}finally{Ki.transition=t}};V.unstable_act=gc;V.useCallback=function(e,t){return Me.current.useCallback(e,t)};V.useContext=function(e){return Me.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};V.useEffect=function(e,t){return Me.current.useEffect(e,t)};V.useId=function(){return Me.current.useId()};V.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Me.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};V.useRef=function(e){return Me.current.useRef(e)};V.useState=function(e){return Me.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Me.current.useTransition()};V.version="18.3.1";ac.exports=V;var N=ac.exports;const _t=sc(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q1=N,ef=Symbol.for("react.element"),tf=Symbol.for("react.fragment"),nf=Object.prototype.hasOwnProperty,rf=q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,of={key:!0,ref:!0,__self:!0,__source:!0};function vc(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)nf.call(t,r)&&!of.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ef,type:e,key:o,ref:s,props:i,_owner:rf.current}}Zo.Fragment=tf;Zo.jsx=vc;Zo.jsxs=vc;lc.exports=Zo;var u=lc.exports,yc={exports:{}},Je={},wc={exports:{}},xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,R){var A=L.length;L.push(R);e:for(;0<A;){var X=A-1>>>1,J=L[X];if(0<i(J,R))L[X]=R,L[A]=J,A=X;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var R=L[0],A=L.pop();if(A!==R){L[0]=A;e:for(var X=0,J=L.length,mn=J>>>1;X<mn;){var lt=2*(X+1)-1,Bt=L[lt],Ue=lt+1,Tt=L[Ue];if(0>i(Bt,A))Ue<J&&0>i(Tt,Bt)?(L[X]=Tt,L[Ue]=A,X=Ue):(L[X]=Bt,L[lt]=A,X=lt);else if(Ue<J&&0>i(Tt,A))L[X]=Tt,L[Ue]=A,X=Ue;else break e}}return R}function i(L,R){var A=L.sortIndex-R.sortIndex;return A!==0?A:L.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],d=1,f=null,g=3,y=!1,x=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=L)r(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function j(L){if(w=!1,v(L),!x)if(n(a)!==null)x=!0,ze(k);else{var R=n(c);R!==null&&Be(j,R.startTime-L)}}function k(L,R){x=!1,w&&(w=!1,h(T),T=-1),y=!0;var A=g;try{for(v(R),f=n(a);f!==null&&(!(f.expirationTime>R)||L&&!z());){var X=f.callback;if(typeof X=="function"){f.callback=null,g=f.priorityLevel;var J=X(f.expirationTime<=R);R=e.unstable_now(),typeof J=="function"?f.callback=J:f===n(a)&&r(a),v(R)}else r(a);f=n(a)}if(f!==null)var mn=!0;else{var lt=n(c);lt!==null&&Be(j,lt.startTime-R),mn=!1}return mn}finally{f=null,g=A,y=!1}}var $=!1,C=null,T=-1,M=5,_=-1;function z(){return!(e.unstable_now()-_<M)}function de(){if(C!==null){var L=e.unstable_now();_=L;var R=!0;try{R=C(!0,L)}finally{R?je():($=!1,C=null)}}else $=!1}var je;if(typeof p=="function")je=function(){p(de)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,$t=Ve.port2;Ve.port1.onmessage=de,je=function(){$t.postMessage(null)}}else je=function(){E(de,0)};function ze(L){C=L,$||($=!0,je())}function Be(L,R){T=E(function(){L(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,ze(k))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var A=g;g=R;try{return L()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var A=g;g=L;try{return R()}finally{g=A}},e.unstable_scheduleCallback=function(L,R,A){var X=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?X+A:X):A=X,L){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=A+J,L={id:d++,callback:R,priorityLevel:L,startTime:A,expirationTime:J,sortIndex:-1},A>X?(L.sortIndex=A,t(c,L),n(a)===null&&L===n(c)&&(w?(h(T),T=-1):w=!0,Be(j,A-X))):(L.sortIndex=J,t(a,L),x||y||(x=!0,ze(k))),L},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(L){var R=g;return function(){var A=g;g=R;try{return L.apply(this,arguments)}finally{g=A}}}})(xc);wc.exports=xc;var sf=wc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=N,Ye=sf;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cc=new Set,Xr={};function zn(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Xr[e]=t,e=0;e<t.length;e++)Cc.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,af=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N0={},_0={};function uf(e){return ol.call(_0,e)?!0:ol.call(N0,e)?!1:af.test(e)?_0[e]=!0:(N0[e]=!0,!1)}function cf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function df(e,t,n,r){if(t===null||typeof t>"u"||cf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var va=/[\-:]([a-z])/g;function ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(va,ya);Se[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(va,ya);Se[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(va,ya);Se[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function wa(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(df(t,n,i,r)&&(n=null),r||i===null?uf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ni=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),xa=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),Ca=Symbol.for("react.forward_ref"),ll=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),ka=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),jc=Symbol.for("react.offscreen"),P0=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=P0&&e[P0]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Cs;function Dr(e){if(Cs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cs=t&&t[1]||""}return`
`+Cs+e}var ks=!1;function Ss(e,t){if(!e||ks)return"";ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{ks=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function ff(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Ss(e.type,!1),e;case 11:return e=Ss(e.type.render,!1),e;case 1:return e=Ss(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Fn:return"Portal";case sl:return"Profiler";case xa:return"StrictMode";case ll:return"Suspense";case al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sc:return(e.displayName||"Context")+".Consumer";case kc:return(e._context.displayName||"Context")+".Provider";case Ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ka:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function pf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hf(e){var t=$c(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=hf(e))}function Tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$c(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function D0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ec(e,t){t=t.checked,t!=null&&wa(e,"checked",t,!1)}function dl(e,t){Ec(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function M0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function L0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Mr(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function bc(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function I0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,_c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mf=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){mf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function Pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function Dc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gf=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(gf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function Sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,tr=null,nr=null;function z0(e){if(e=Si(e)){if(typeof yl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Jo(t),yl(e.stateNode,e.type,t))}}function Mc(e){tr?nr?nr.push(e):nr=[e]:tr=e}function Lc(){if(tr){var e=tr,t=nr;if(nr=tr=null,z0(e),t)for(e=0;e<t.length;e++)z0(t[e])}}function Ic(e,t){return e(t)}function zc(){}var js=!1;function Oc(e,t,n){if(js)return e(t,n);js=!0;try{return Ic(e,t,n)}finally{js=!1,(tr!==null||nr!==null)&&(zc(),Lc())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var wl=!1;if(It)try{var $r={};Object.defineProperty($r,"passive",{get:function(){wl=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{wl=!1}function vf(e,t,n,r,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Hr=!1,ho=null,mo=!1,xl=null,yf={onError:function(e){Hr=!0,ho=e}};function wf(e,t,n,r,i,o,s,l,a){Hr=!1,ho=null,vf.apply(yf,arguments)}function xf(e,t,n,r,i,o,s,l,a){if(wf.apply(this,arguments),Hr){if(Hr){var c=ho;Hr=!1,ho=null}else throw Error(b(198));mo||(mo=!0,xl=c)}}function On(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O0(e){if(On(e)!==e)throw Error(b(188))}function Cf(e){var t=e.alternate;if(!t){if(t=On(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return O0(i),e;if(o===r)return O0(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Ac(e){return e=Cf(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var Hc=Ye.unstable_scheduleCallback,R0=Ye.unstable_cancelCallback,kf=Ye.unstable_shouldYield,Sf=Ye.unstable_requestPaint,ae=Ye.unstable_now,jf=Ye.unstable_getCurrentPriorityLevel,ja=Ye.unstable_ImmediatePriority,Vc=Ye.unstable_UserBlockingPriority,go=Ye.unstable_NormalPriority,$f=Ye.unstable_LowPriority,Bc=Ye.unstable_IdlePriority,Qo=null,St=null;function Tf(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Nf,Ef=Math.log,bf=Math.LN2;function Nf(e){return e>>>=0,e===0?32:31-(Ef(e)/bf|0)|0}var Di=64,Mi=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Lr(l):(o&=s,o!==0&&(r=Lr(o)))}else s=n&~i,s!==0?r=Lr(s):o!==0&&(r=Lr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function _f(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-pt(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=_f(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uc(){var e=Di;return Di<<=1,!(Di&4194240)&&(Di=64),e}function $s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function Df(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function $a(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function Wc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gc,Ta,Zc,Qc,Yc,kl=!1,Li=[],qt=null,en=null,tn=null,ei=new Map,ti=new Map,Yt=[],Mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function A0(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(t.pointerId)}}function Tr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Si(t),t!==null&&Ta(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lf(e,t,n,r,i){switch(t){case"focusin":return qt=Tr(qt,e,t,n,r,i),!0;case"dragenter":return en=Tr(en,e,t,n,r,i),!0;case"mouseover":return tn=Tr(tn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ei.set(o,Tr(ei.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ti.set(o,Tr(ti.get(o)||null,e,t,n,r,i)),!0}return!1}function Kc(e){var t=xn(e.target);if(t!==null){var n=On(t);if(n!==null){if(t=n.tag,t===13){if(t=Rc(n),t!==null){e.blockedOn=t,Yc(e.priority,function(){Zc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=Si(n),t!==null&&Ta(t),e.blockedOn=n,!1;t.shift()}return!0}function F0(e,t,n){Xi(e)&&n.delete(t)}function If(){kl=!1,qt!==null&&Xi(qt)&&(qt=null),en!==null&&Xi(en)&&(en=null),tn!==null&&Xi(tn)&&(tn=null),ei.forEach(F0),ti.forEach(F0)}function Er(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,If)))}function ni(e){function t(i){return Er(i,e)}if(0<Li.length){Er(Li[0],e);for(var n=1;n<Li.length;n++){var r=Li[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Er(qt,e),en!==null&&Er(en,e),tn!==null&&Er(tn,e),ei.forEach(t),ti.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Kc(n),n.blockedOn===null&&Yt.shift()}var rr=Ft.ReactCurrentBatchConfig,yo=!0;function zf(e,t,n,r){var i=K,o=rr.transition;rr.transition=null;try{K=1,Ea(e,t,n,r)}finally{K=i,rr.transition=o}}function Of(e,t,n,r){var i=K,o=rr.transition;rr.transition=null;try{K=4,Ea(e,t,n,r)}finally{K=i,rr.transition=o}}function Ea(e,t,n,r){if(yo){var i=Sl(e,t,n,r);if(i===null)Is(e,t,r,wo,n),A0(e,r);else if(Lf(i,e,t,n,r))r.stopPropagation();else if(A0(e,r),t&4&&-1<Mf.indexOf(e)){for(;i!==null;){var o=Si(i);if(o!==null&&Gc(o),o=Sl(e,t,n,r),o===null&&Is(e,t,r,wo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Is(e,t,r,null,n)}}var wo=null;function Sl(e,t,n,r){if(wo=null,e=Sa(r),e=xn(e),e!==null)if(t=On(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function Xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jf()){case ja:return 1;case Vc:return 4;case go:case $f:return 16;case Bc:return 536870912;default:return 16}default:return 16}}var Xt=null,ba=null,Ji=null;function Jc(){if(Ji)return Ji;var e,t=ba,n=t.length,r,i="value"in Xt?Xt.value:Xt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ji=i.slice(e,1<r?1-r:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function H0(){return!1}function qe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ii:H0,this.isPropagationStopped=H0,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=qe(xr),ki=se({},xr,{view:0,detail:0}),Rf=qe(ki),Ts,Es,br,Yo=se({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Ts=e.screenX-br.screenX,Es=e.screenY-br.screenY):Es=Ts=0,br=e),Ts)},movementY:function(e){return"movementY"in e?e.movementY:Es}}),V0=qe(Yo),Af=se({},Yo,{dataTransfer:0}),Ff=qe(Af),Hf=se({},ki,{relatedTarget:0}),bs=qe(Hf),Vf=se({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bf=qe(Vf),Uf=se({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wf=qe(Uf),Gf=se({},xr,{data:0}),B0=qe(Gf),Zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yf[e])?!!t[e]:!1}function _a(){return Kf}var Xf=se({},ki,{key:function(e){if(e.key){var t=Zf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jf=qe(Xf),qf=se({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U0=qe(qf),ep=se({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),tp=qe(ep),np=se({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rp=qe(np),ip=se({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),op=qe(ip),sp=[9,13,27,32],Pa=It&&"CompositionEvent"in window,Vr=null;It&&"documentMode"in document&&(Vr=document.documentMode);var lp=It&&"TextEvent"in window&&!Vr,qc=It&&(!Pa||Vr&&8<Vr&&11>=Vr),W0=" ",G0=!1;function e2(e,t){switch(e){case"keyup":return sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function ap(e,t){switch(e){case"compositionend":return t2(t);case"keypress":return t.which!==32?null:(G0=!0,W0);case"textInput":return e=t.data,e===W0&&G0?null:e;default:return null}}function up(e,t){if(Vn)return e==="compositionend"||!Pa&&e2(e,t)?(e=Jc(),Ji=ba=Xt=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qc&&t.locale!=="ko"?null:t.data;default:return null}}var cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Z0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cp[e.type]:t==="textarea"}function n2(e,t,n,r){Mc(r),t=xo(t,"onChange"),0<t.length&&(n=new Na("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,ri=null;function dp(e){p2(e,0)}function Ko(e){var t=Wn(e);if(Tc(t))return e}function fp(e,t){if(e==="change")return t}var r2=!1;if(It){var Ns;if(It){var _s="oninput"in document;if(!_s){var Q0=document.createElement("div");Q0.setAttribute("oninput","return;"),_s=typeof Q0.oninput=="function"}Ns=_s}else Ns=!1;r2=Ns&&(!document.documentMode||9<document.documentMode)}function Y0(){Br&&(Br.detachEvent("onpropertychange",i2),ri=Br=null)}function i2(e){if(e.propertyName==="value"&&Ko(ri)){var t=[];n2(t,ri,e,Sa(e)),Oc(dp,t)}}function pp(e,t,n){e==="focusin"?(Y0(),Br=t,ri=n,Br.attachEvent("onpropertychange",i2)):e==="focusout"&&Y0()}function hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(ri)}function mp(e,t){if(e==="click")return Ko(t)}function gp(e,t){if(e==="input"||e==="change")return Ko(t)}function vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:vp;function ii(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function K0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function X0(e,t){var n=K0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=K0(n)}}function o2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?o2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function s2(){for(var e=window,t=po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=po(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yp(e){var t=s2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&o2(n.ownerDocument.documentElement,n)){if(r!==null&&Da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=X0(n,o);var s=X0(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wp=It&&"documentMode"in document&&11>=document.documentMode,Bn=null,jl=null,Ur=null,$l=!1;function J0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$l||Bn==null||Bn!==po(r)||(r=Bn,"selectionStart"in r&&Da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&ii(Ur,r)||(Ur=r,r=xo(jl,"onSelect"),0<r.length&&(t=new Na("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function zi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},Ps={},l2={};It&&(l2=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Xo(e){if(Ps[e])return Ps[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in l2)return Ps[e]=t[n];return e}var a2=Xo("animationend"),u2=Xo("animationiteration"),c2=Xo("animationstart"),d2=Xo("transitionend"),f2=new Map,q0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){f2.set(e,t),zn(t,[e])}for(var Ds=0;Ds<q0.length;Ds++){var Ms=q0[Ds],xp=Ms.toLowerCase(),Cp=Ms[0].toUpperCase()+Ms.slice(1);fn(xp,"on"+Cp)}fn(a2,"onAnimationEnd");fn(u2,"onAnimationIteration");fn(c2,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(d2,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xf(r,t,void 0,e),e.currentTarget=null}function p2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;eu(i,l,c),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;eu(i,l,c),o=a}}}if(mo)throw e=xl,mo=!1,xl=null,e}function ee(e,t){var n=t[_l];n===void 0&&(n=t[_l]=new Set);var r=e+"__bubble";n.has(r)||(h2(t,e,2,!1),n.add(r))}function Ls(e,t,n){var r=0;t&&(r|=4),h2(n,e,r,t)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function oi(e){if(!e[Oi]){e[Oi]=!0,Cc.forEach(function(n){n!=="selectionchange"&&(kp.has(n)||Ls(n,!1,e),Ls(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oi]||(t[Oi]=!0,Ls("selectionchange",!1,t))}}function h2(e,t,n,r){switch(Xc(t)){case 1:var i=zf;break;case 4:i=Of;break;default:i=Ea}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Is(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=xn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Oc(function(){var c=o,d=Sa(n),f=[];e:{var g=f2.get(e);if(g!==void 0){var y=Na,x=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":y=Jf;break;case"focusin":x="focus",y=bs;break;case"focusout":x="blur",y=bs;break;case"beforeblur":case"afterblur":y=bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=V0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=tp;break;case a2:case u2:case c2:y=Bf;break;case d2:y=rp;break;case"scroll":y=Rf;break;case"wheel":y=op;break;case"copy":case"cut":case"paste":y=Wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=U0}var w=(t&4)!==0,E=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var p=c,v;p!==null;){v=p;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,h!==null&&(j=qr(p,h),j!=null&&w.push(si(p,j,v)))),E)break;p=p.return}0<w.length&&(g=new y(g,x,null,n,d),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==vl&&(x=n.relatedTarget||n.fromElement)&&(xn(x)||x[zt]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?xn(x):null,x!==null&&(E=On(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=V0,j="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=U0,j="onPointerLeave",h="onPointerEnter",p="pointer"),E=y==null?g:Wn(y),v=x==null?g:Wn(x),g=new w(j,p+"leave",y,n,d),g.target=E,g.relatedTarget=v,j=null,xn(d)===c&&(w=new w(h,p+"enter",x,n,d),w.target=v,w.relatedTarget=E,j=w),E=j,y&&x)t:{for(w=y,h=x,p=0,v=w;v;v=Rn(v))p++;for(v=0,j=h;j;j=Rn(j))v++;for(;0<p-v;)w=Rn(w),p--;for(;0<v-p;)h=Rn(h),v--;for(;p--;){if(w===h||h!==null&&w===h.alternate)break t;w=Rn(w),h=Rn(h)}w=null}else w=null;y!==null&&tu(f,g,y,w,!1),x!==null&&E!==null&&tu(f,E,x,w,!0)}}e:{if(g=c?Wn(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=fp;else if(Z0(g))if(r2)k=gp;else{k=hp;var $=pp}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=mp);if(k&&(k=k(e,c))){n2(f,k,n,d);break e}$&&$(e,g,c),e==="focusout"&&($=g._wrapperState)&&$.controlled&&g.type==="number"&&fl(g,"number",g.value)}switch($=c?Wn(c):window,e){case"focusin":(Z0($)||$.contentEditable==="true")&&(Bn=$,jl=c,Ur=null);break;case"focusout":Ur=jl=Bn=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,J0(f,n,d);break;case"selectionchange":if(wp)break;case"keydown":case"keyup":J0(f,n,d)}var C;if(Pa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Vn?e2(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(qc&&n.locale!=="ko"&&(Vn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Vn&&(C=Jc()):(Xt=d,ba="value"in Xt?Xt.value:Xt.textContent,Vn=!0)),$=xo(c,T),0<$.length&&(T=new B0(T,e,null,n,d),f.push({event:T,listeners:$}),C?T.data=C:(C=t2(n),C!==null&&(T.data=C)))),(C=lp?ap(e,n):up(e,n))&&(c=xo(c,"onBeforeInput"),0<c.length&&(d=new B0("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}p2(f,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qr(e,n),o!=null&&r.unshift(si(e,o,i)),o=qr(e,t),o!=null&&r.push(si(e,o,i))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=qr(n,o),a!=null&&s.unshift(si(n,a,l))):i||(a=qr(n,o),a!=null&&s.push(si(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Sp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(Sp,`
`).replace(jp,"")}function Ri(e,t,n){if(t=nu(t),nu(e)!==t&&n)throw Error(b(425))}function Co(){}var Tl=null,El=null;function bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,$p=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,Tp=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(Ep)}:Nl;function Ep(e){setTimeout(function(){throw e})}function zs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ni(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Cr,li="__reactProps$"+Cr,zt="__reactContainer$"+Cr,_l="__reactEvents$"+Cr,bp="__reactListeners$"+Cr,Np="__reactHandles$"+Cr;function xn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=iu(e);e!==null;){if(n=e[Ct])return n;e=iu(e)}return t}e=n,n=e.parentNode}return null}function Si(e){return e=e[Ct]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Jo(e){return e[li]||null}var Pl=[],Gn=-1;function pn(e){return{current:e}}function ne(e){0>Gn||(e.current=Pl[Gn],Pl[Gn]=null,Gn--)}function q(e,t){Gn++,Pl[Gn]=e.current,e.current=t}var cn={},Ne=pn(cn),Ae=pn(!1),bn=cn;function lr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function ko(){ne(Ae),ne(Ne)}function ou(e,t,n){if(Ne.current!==cn)throw Error(b(168));q(Ne,t),q(Ae,n)}function m2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,pf(e)||"Unknown",i));return se({},n,r)}function So(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,bn=Ne.current,q(Ne,e),q(Ae,Ae.current),!0}function su(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=m2(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,ne(Ae),ne(Ne),q(Ne,e)):ne(Ae),q(Ae,n)}var Nt=null,qo=!1,Os=!1;function g2(e){Nt===null?Nt=[e]:Nt.push(e)}function _p(e){qo=!0,g2(e)}function hn(){if(!Os&&Nt!==null){Os=!0;var e=0,t=K;try{var n=Nt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,qo=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),Hc(ja,hn),i}finally{K=t,Os=!1}}return null}var Zn=[],Qn=0,jo=null,$o=0,et=[],tt=0,Nn=null,Pt=1,Dt="";function vn(e,t){Zn[Qn++]=$o,Zn[Qn++]=jo,jo=e,$o=t}function v2(e,t,n){et[tt++]=Pt,et[tt++]=Dt,et[tt++]=Nn,Nn=e;var r=Pt;e=Dt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Pt=1<<32-pt(t)+i|n<<i|r,Dt=o+e}else Pt=1<<o|n<<i|r,Dt=e}function Ma(e){e.return!==null&&(vn(e,1),v2(e,1,0))}function La(e){for(;e===jo;)jo=Zn[--Qn],Zn[Qn]=null,$o=Zn[--Qn],Zn[Qn]=null;for(;e===Nn;)Nn=et[--tt],et[tt]=null,Dt=et[--tt],et[tt]=null,Pt=et[--tt],et[tt]=null}var Qe=null,Ze=null,re=!1,dt=null;function y2(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ze=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Pt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ze=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(re){var t=Ze;if(t){var n=t;if(!lu(e,t)){if(Dl(e))throw Error(b(418));t=nn(n.nextSibling);var r=Qe;t&&lu(e,t)?y2(r,n):(e.flags=e.flags&-4097|2,re=!1,Qe=e)}}else{if(Dl(e))throw Error(b(418));e.flags=e.flags&-4097|2,re=!1,Qe=e}}}function au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Ai(e){if(e!==Qe)return!1;if(!re)return au(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bl(e.type,e.memoizedProps)),t&&(t=Ze)){if(Dl(e))throw w2(),Error(b(418));for(;t;)y2(e,t),t=nn(t.nextSibling)}if(au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Qe?nn(e.stateNode.nextSibling):null;return!0}function w2(){for(var e=Ze;e;)e=nn(e.nextSibling)}function ar(){Ze=Qe=null,re=!1}function Ia(e){dt===null?dt=[e]:dt.push(e)}var Pp=Ft.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Fi(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uu(e){var t=e._init;return t(e._payload)}function x2(e){function t(h,p){if(e){var v=h.deletions;v===null?(h.deletions=[p],h.flags|=16):v.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=ln(h,p),h.index=0,h.sibling=null,h}function o(h,p,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<p?(h.flags|=2,p):v):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,v,j){return p===null||p.tag!==6?(p=Us(v,h.mode,j),p.return=h,p):(p=i(p,v),p.return=h,p)}function a(h,p,v,j){var k=v.type;return k===Hn?d(h,p,v.props.children,j,v.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Zt&&uu(k)===p.type)?(j=i(p,v.props),j.ref=Nr(h,p,v),j.return=h,j):(j=so(v.type,v.key,v.props,null,h.mode,j),j.ref=Nr(h,p,v),j.return=h,j)}function c(h,p,v,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ws(v,h.mode,j),p.return=h,p):(p=i(p,v.children||[]),p.return=h,p)}function d(h,p,v,j,k){return p===null||p.tag!==7?(p=$n(v,h.mode,j,k),p.return=h,p):(p=i(p,v),p.return=h,p)}function f(h,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Us(""+p,h.mode,v),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ni:return v=so(p.type,p.key,p.props,null,h.mode,v),v.ref=Nr(h,null,p),v.return=h,v;case Fn:return p=Ws(p,h.mode,v),p.return=h,p;case Zt:var j=p._init;return f(h,j(p._payload),v)}if(Mr(p)||jr(p))return p=$n(p,h.mode,v,null),p.return=h,p;Fi(h,p)}return null}function g(h,p,v,j){var k=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:l(h,p,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ni:return v.key===k?a(h,p,v,j):null;case Fn:return v.key===k?c(h,p,v,j):null;case Zt:return k=v._init,g(h,p,k(v._payload),j)}if(Mr(v)||jr(v))return k!==null?null:d(h,p,v,j,null);Fi(h,v)}return null}function y(h,p,v,j,k){if(typeof j=="string"&&j!==""||typeof j=="number")return h=h.get(v)||null,l(p,h,""+j,k);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ni:return h=h.get(j.key===null?v:j.key)||null,a(p,h,j,k);case Fn:return h=h.get(j.key===null?v:j.key)||null,c(p,h,j,k);case Zt:var $=j._init;return y(h,p,v,$(j._payload),k)}if(Mr(j)||jr(j))return h=h.get(v)||null,d(p,h,j,k,null);Fi(p,j)}return null}function x(h,p,v,j){for(var k=null,$=null,C=p,T=p=0,M=null;C!==null&&T<v.length;T++){C.index>T?(M=C,C=null):M=C.sibling;var _=g(h,C,v[T],j);if(_===null){C===null&&(C=M);break}e&&C&&_.alternate===null&&t(h,C),p=o(_,p,T),$===null?k=_:$.sibling=_,$=_,C=M}if(T===v.length)return n(h,C),re&&vn(h,T),k;if(C===null){for(;T<v.length;T++)C=f(h,v[T],j),C!==null&&(p=o(C,p,T),$===null?k=C:$.sibling=C,$=C);return re&&vn(h,T),k}for(C=r(h,C);T<v.length;T++)M=y(C,h,T,v[T],j),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?T:M.key),p=o(M,p,T),$===null?k=M:$.sibling=M,$=M);return e&&C.forEach(function(z){return t(h,z)}),re&&vn(h,T),k}function w(h,p,v,j){var k=jr(v);if(typeof k!="function")throw Error(b(150));if(v=k.call(v),v==null)throw Error(b(151));for(var $=k=null,C=p,T=p=0,M=null,_=v.next();C!==null&&!_.done;T++,_=v.next()){C.index>T?(M=C,C=null):M=C.sibling;var z=g(h,C,_.value,j);if(z===null){C===null&&(C=M);break}e&&C&&z.alternate===null&&t(h,C),p=o(z,p,T),$===null?k=z:$.sibling=z,$=z,C=M}if(_.done)return n(h,C),re&&vn(h,T),k;if(C===null){for(;!_.done;T++,_=v.next())_=f(h,_.value,j),_!==null&&(p=o(_,p,T),$===null?k=_:$.sibling=_,$=_);return re&&vn(h,T),k}for(C=r(h,C);!_.done;T++,_=v.next())_=y(C,h,T,_.value,j),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?T:_.key),p=o(_,p,T),$===null?k=_:$.sibling=_,$=_);return e&&C.forEach(function(de){return t(h,de)}),re&&vn(h,T),k}function E(h,p,v,j){if(typeof v=="object"&&v!==null&&v.type===Hn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ni:e:{for(var k=v.key,$=p;$!==null;){if($.key===k){if(k=v.type,k===Hn){if($.tag===7){n(h,$.sibling),p=i($,v.props.children),p.return=h,h=p;break e}}else if($.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Zt&&uu(k)===$.type){n(h,$.sibling),p=i($,v.props),p.ref=Nr(h,$,v),p.return=h,h=p;break e}n(h,$);break}else t(h,$);$=$.sibling}v.type===Hn?(p=$n(v.props.children,h.mode,j,v.key),p.return=h,h=p):(j=so(v.type,v.key,v.props,null,h.mode,j),j.ref=Nr(h,p,v),j.return=h,h=j)}return s(h);case Fn:e:{for($=v.key;p!==null;){if(p.key===$)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(h,p.sibling),p=i(p,v.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Ws(v,h.mode,j),p.return=h,h=p}return s(h);case Zt:return $=v._init,E(h,p,$(v._payload),j)}if(Mr(v))return x(h,p,v,j);if(jr(v))return w(h,p,v,j);Fi(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,v),p.return=h,h=p):(n(h,p),p=Us(v,h.mode,j),p.return=h,h=p),s(h)):n(h,p)}return E}var ur=x2(!0),C2=x2(!1),To=pn(null),Eo=null,Yn=null,za=null;function Oa(){za=Yn=Eo=null}function Ra(e){var t=To.current;ne(To),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Eo=e,za=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Eo===null)throw Error(b(308));Yn=e,Eo.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var Cn=null;function Aa(e){Cn===null?Cn=[e]:Cn.push(e)}function k2(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Aa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,Aa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$a(e,n)}}function cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var i=e.updateQueue;Qt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(o!==null){var f=i.baseState;s=0,d=c=a=null,l=o;do{var g=l.lane,y=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(g=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(y,f,g);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(y,f,g):x,g==null)break e;f=se({},f,g);break e;case 2:Qt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=y,a=f):d=d.next=y,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Pn|=s,e.lanes=s,e.memoizedState=f}}function du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var ji={},jt=pn(ji),ai=pn(ji),ui=pn(ji);function kn(e){if(e===ji)throw Error(b(174));return e}function Ha(e,t){switch(q(ui,t),q(ai,e),q(jt,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}ne(jt),q(jt,t)}function cr(){ne(jt),ne(ai),ne(ui)}function j2(e){kn(ui.current);var t=kn(jt.current),n=hl(t,e.type);t!==n&&(q(ai,e),q(jt,n))}function Va(e){ai.current===e&&(ne(jt),ne(ai))}var ie=pn(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rs=[];function Ba(){for(var e=0;e<Rs.length;e++)Rs[e]._workInProgressVersionPrimary=null;Rs.length=0}var to=Ft.ReactCurrentDispatcher,As=Ft.ReactCurrentBatchConfig,_n=0,oe=null,fe=null,me=null,_o=!1,Wr=!1,ci=0,Dp=0;function $e(){throw Error(b(321))}function Ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Wa(e,t,n,r,i,o){if(_n=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?zp:Op,e=n(r,i),Wr){o=0;do{if(Wr=!1,ci=0,25<=o)throw Error(b(301));o+=1,me=fe=null,t.updateQueue=null,to.current=Rp,e=n(r,i)}while(Wr)}if(to.current=Po,t=fe!==null&&fe.next!==null,_n=0,me=fe=oe=null,_o=!1,t)throw Error(b(300));return e}function Ga(){var e=ci!==0;return ci=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function ot(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,fe=e;else{if(e===null)throw Error(b(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function di(e,t){return typeof t=="function"?t(e):t}function Fs(e){var t=ot(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,c=o;do{var d=c.lane;if((_n&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=f,s=r):a=a.next=f,oe.lanes|=d,Pn|=d}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=l,gt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,Pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hs(e){var t=ot(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);gt(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function $2(){}function T2(e,t){var n=oe,r=ot(),i=t(),o=!gt(r.memoizedState,i);if(o&&(r.memoizedState=i,Re=!0),r=r.queue,Za(N2.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,fi(9,b2.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(b(349));_n&30||E2(n,t,i)}return i}function E2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function b2(e,t,n,r){t.value=n,t.getSnapshot=r,_2(t)&&P2(e)}function N2(e,t,n){return n(function(){_2(t)&&P2(e)})}function _2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function P2(e){var t=Ot(e,1);t!==null&&ht(t,e,1,-1)}function fu(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:e},t.queue=e,e=e.dispatch=Ip.bind(null,oe,e),[t.memoizedState,e]}function fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function D2(){return ot().memoizedState}function no(e,t,n,r){var i=wt();oe.flags|=e,i.memoizedState=fi(1|t,n,void 0,r===void 0?null:r)}function es(e,t,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(fe!==null){var s=fe.memoizedState;if(o=s.destroy,r!==null&&Ua(r,s.deps)){i.memoizedState=fi(t,n,o,r);return}}oe.flags|=e,i.memoizedState=fi(1|t,n,o,r)}function pu(e,t){return no(8390656,8,e,t)}function Za(e,t){return es(2048,8,e,t)}function M2(e,t){return es(4,2,e,t)}function L2(e,t){return es(4,4,e,t)}function I2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function z2(e,t,n){return n=n!=null?n.concat([e]):null,es(4,4,I2.bind(null,t,e),n)}function Qa(){}function O2(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function R2(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function A2(e,t,n){return _n&21?(gt(n,t)||(n=Uc(),oe.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Mp(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=As.transition;As.transition={};try{e(!1),t()}finally{K=n,As.transition=r}}function F2(){return ot().memoizedState}function Lp(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},H2(e))V2(t,n);else if(n=k2(e,t,n,r),n!==null){var i=De();ht(n,e,r,i),B2(n,t,r)}}function Ip(e,t,n){var r=sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(H2(e))V2(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,gt(l,s)){var a=t.interleaved;a===null?(i.next=i,Aa(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=k2(e,t,i,r),n!==null&&(i=De(),ht(n,e,r,i),B2(n,t,r))}}function H2(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function V2(e,t){Wr=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function B2(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$a(e,n)}}var Po={readContext:it,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},zp={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:pu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,I2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lp.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:fu,useDebugValue:Qa,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=fu(!1),t=e[0];return e=Mp.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=wt();if(re){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ye===null)throw Error(b(349));_n&30||E2(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,pu(N2.bind(null,r,o,e),[e]),r.flags|=2048,fi(9,b2.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=ye.identifierPrefix;if(re){var n=Dt,r=Pt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Op={readContext:it,useCallback:O2,useContext:it,useEffect:Za,useImperativeHandle:z2,useInsertionEffect:M2,useLayoutEffect:L2,useMemo:R2,useReducer:Fs,useRef:D2,useState:function(){return Fs(di)},useDebugValue:Qa,useDeferredValue:function(e){var t=ot();return A2(t,fe.memoizedState,e)},useTransition:function(){var e=Fs(di)[0],t=ot().memoizedState;return[e,t]},useMutableSource:$2,useSyncExternalStore:T2,useId:F2,unstable_isNewReconciler:!1},Rp={readContext:it,useCallback:O2,useContext:it,useEffect:Za,useImperativeHandle:z2,useInsertionEffect:M2,useLayoutEffect:L2,useMemo:R2,useReducer:Hs,useRef:D2,useState:function(){return Hs(di)},useDebugValue:Qa,useDeferredValue:function(e){var t=ot();return fe===null?t.memoizedState=e:A2(t,fe.memoizedState,e)},useTransition:function(){var e=Hs(di)[0],t=ot().memoizedState;return[e,t]},useMutableSource:$2,useSyncExternalStore:T2,useId:F2,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Il(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ts={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=sn(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(ht(t,e,i,r),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=sn(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(ht(t,e,i,r),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=sn(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(ht(t,e,r,n),eo(t,e,r))}};function hu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ii(n,r)||!ii(i,o):!0}function U2(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=Fe(t)?bn:Ne.current,r=t.contextTypes,o=(r=r!=null)?lr(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ts.enqueueReplaceState(t,t.state,null)}function zl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=Fe(t)?bn:Ne.current,i.context=lr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Il(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ts.enqueueReplaceState(i,i.state,null),bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t){try{var n="",r=t;do n+=ff(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ap=typeof WeakMap=="function"?WeakMap:Map;function W2(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,Zl=r),Ol(e,t)},n}function G2(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ol(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ap;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=qp.bind(null,e,t,n),t.then(e,e))}function vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var Fp=Ft.ReactCurrentOwner,Re=!1;function Pe(e,t,n,r){t.child=e===null?C2(t,null,n,r):ur(t,e.child,n,r)}function wu(e,t,n,r,i){n=n.render;var o=t.ref;return ir(t,i),r=Wa(e,t,n,r,o,i),n=Ga(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(re&&n&&Ma(t),t.flags|=1,Pe(e,t,r,i),t.child)}function xu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!n0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Z2(e,t,o,r,i)):(e=so(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(s,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function Z2(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ii(o,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return Rl(e,t,n,r,i)}function Q2(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Xn,Ge),Ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Xn,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(Xn,Ge),Ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(Xn,Ge),Ge|=r;return Pe(e,t,i,n),t.child}function Y2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rl(e,t,n,r,i){var o=Fe(n)?bn:Ne.current;return o=lr(t,o),ir(t,i),n=Wa(e,t,n,r,o,i),r=Ga(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(re&&r&&Ma(t),t.flags|=1,Pe(e,t,n,i),t.child)}function Cu(e,t,n,r,i){if(Fe(n)){var o=!0;So(t)}else o=!1;if(ir(t,i),t.stateNode===null)ro(e,t),U2(t,n,r),zl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=it(c):(c=Fe(n)?bn:Ne.current,c=lr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&mu(t,s,r,c),Qt=!1;var g=t.memoizedState;s.state=g,bo(t,r,s,i),a=t.memoizedState,l!==r||g!==a||Ae.current||Qt?(typeof d=="function"&&(Il(t,n,d,r),a=t.memoizedState),(l=Qt||hu(t,n,l,r,g,a,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,S2(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:ut(t.type,l),s.props=c,f=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=it(a):(a=Fe(n)?bn:Ne.current,a=lr(t,a));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||g!==a)&&mu(t,s,r,a),Qt=!1,g=t.memoizedState,s.state=g,bo(t,r,s,i);var x=t.memoizedState;l!==f||g!==x||Ae.current||Qt?(typeof y=="function"&&(Il(t,n,y,r),x=t.memoizedState),(c=Qt||hu(t,n,c,r,g,x,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Al(e,t,n,r,o,i)}function Al(e,t,n,r,i,o){Y2(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&su(t,n,!1),Rt(e,t,o);r=t.stateNode,Fp.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ur(t,e.child,null,o),t.child=ur(t,null,l,o)):Pe(e,t,l,o),t.memoizedState=r.state,i&&su(t,n,!0),t.child}function K2(e){var t=e.stateNode;t.pendingContext?ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ou(e,t.context,!1),Ha(e,t.containerInfo)}function ku(e,t,n,r,i){return ar(),Ia(i),t.flags|=256,Pe(e,t,n,r),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function X2(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(ie,i&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=is(s,r,0,null),e=$n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Hl(n),t.memoizedState=Fl,e):Ya(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Hp(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ln(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=ln(l,o):(o=$n(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Hl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Fl,r}return o=e.child,e=o.sibling,r=ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ya(e,t){return t=is({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hi(e,t,n,r){return r!==null&&Ia(r),ur(t,e.child,null,n),e=Ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hp(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Vs(Error(b(422))),Hi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=is({mode:"visible",children:r.children},i,0,null),o=$n(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ur(t,e.child,null,s),t.child.memoizedState=Hl(s),t.memoizedState=Fl,o);if(!(t.mode&1))return Hi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(b(419)),r=Vs(o,r,void 0),Hi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Re||l){if(r=ye,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ot(e,i),ht(r,e,i,-1))}return t0(),r=Vs(Error(b(421))),Hi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=eh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ze=nn(i.nextSibling),Qe=t,re=!0,dt=null,e!==null&&(et[tt++]=Pt,et[tt++]=Dt,et[tt++]=Nn,Pt=e.id,Dt=e.overflow,Nn=t),t=Ya(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Bs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function J2(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&No(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,o);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vp(e,t,n){switch(t.tag){case 3:K2(t),ar();break;case 5:j2(t);break;case 1:Fe(t.type)&&So(t);break;case 4:Ha(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(To,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?X2(e,t,n):(q(ie,ie.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);q(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return J2(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Q2(e,t,n)}return Rt(e,t,n)}var q2,Vl,ed,td;q2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vl=function(){};ed=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(jt.current);var o=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=pl(e,i),r=pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}ml(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&ee("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};td=function(e,t,n,r){n!==r&&(t.flags|=4)};function _r(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bp(e,t,n){var r=t.pendingProps;switch(La(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Fe(t.type)&&ko(),Te(t),null;case 3:return r=t.stateNode,cr(),ne(Ae),ne(Ne),Ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ai(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Kl(dt),dt=null))),Vl(e,t),Te(t),null;case 5:Va(t);var i=kn(ui.current);if(n=t.type,e!==null&&t.stateNode!=null)ed(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return Te(t),null}if(e=kn(jt.current),Ai(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ct]=t,r[li]=o,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Ir.length;i++)ee(Ir[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":D0(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":L0(r,o),ee("invalid",r)}ml(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ri(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ri(r.textContent,l,e),i=["children",""+l]):Xr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ee("scroll",r)}switch(n){case"input":_i(r),M0(r,o,!0);break;case"textarea":_i(r),I0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Co)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ct]=t,e[li]=r,q2(e,t,!1,!1),t.stateNode=e;e:{switch(s=gl(n,r),n){case"dialog":ee("cancel",e),ee("close",e),i=r;break;case"iframe":case"object":case"embed":ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ir.length;i++)ee(Ir[i],e);i=r;break;case"source":ee("error",e),i=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),i=r;break;case"details":ee("toggle",e),i=r;break;case"input":D0(e,r),i=cl(e,r),ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),ee("invalid",e);break;case"textarea":L0(e,r),i=pl(e,r),ee("invalid",e);break;default:i=r}ml(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Dc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&_c(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Jr(e,a):typeof a=="number"&&Jr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&ee("scroll",e):a!=null&&wa(e,o,a,s))}switch(n){case"input":_i(e),M0(e,r,!1);break;case"textarea":_i(e),I0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?er(e,!!r.multiple,o,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=kn(ui.current),kn(jt.current),Ai(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:Ri(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ri(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ze!==null&&t.mode&1&&!(t.flags&128))w2(),ar(),t.flags|=98560,o=!1;else if(o=Ai(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[Ct]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else dt!==null&&(Kl(dt),dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?pe===0&&(pe=3):t0())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return cr(),Vl(e,t),e===null&&oi(t.stateNode.containerInfo),Te(t),null;case 10:return Ra(t.type._context),Te(t),null;case 17:return Fe(t.type)&&ko(),Te(t),null;case 19:if(ne(ie),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)_r(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=No(e),s!==null){for(t.flags|=128,_r(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>fr&&(t.flags|=128,r=!0,_r(o,!1),t.lanes=4194304)}else{if(!r)if(e=No(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!re)return Te(t),null}else 2*ae()-o.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,r=!0,_r(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=ie.current,q(ie,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return e0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Up(e,t){switch(La(t),t.tag){case 1:return Fe(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),ne(Ae),ne(Ne),Ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Va(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return cr(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return e0(),null;case 24:return null;default:return null}}var Vi=!1,Ee=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,I=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){le(e,t,r)}}var ju=!1;function Gp(e,t){if(Tl=yo,e=s2(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,d=0,f=e,g=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==o||r!==0&&f.nodeType!==3||(a=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===n&&++c===i&&(l=s),g===o&&++d===r&&(a=s),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(El={focusedElem:e,selectionRange:n},yo=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,E=x.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:ut(t.type,w),E);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(j){le(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return x=ju,ju=!1,x}function Gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bl(t,n,o)}i=i.next}while(i!==r)}}function ns(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nd(e){var t=e.alternate;t!==null&&(e.alternate=null,nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[li],delete t[_l],delete t[bp],delete t[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var Ce=null,ct=!1;function Wt(e,t,n){for(n=n.child;n!==null;)id(e,t,n),n=n.sibling}function id(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:Ee||Kn(n,t);case 6:var r=Ce,i=ct;Ce=null,Wt(e,t,n),Ce=r,ct=i,Ce!==null&&(ct?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(ct?(e=Ce,n=n.stateNode,e.nodeType===8?zs(e.parentNode,n):e.nodeType===1&&zs(e,n),ni(e)):zs(Ce,n.stateNode));break;case 4:r=Ce,i=ct,Ce=n.stateNode.containerInfo,ct=!0,Wt(e,t,n),Ce=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Bl(n,t,s),i=i.next}while(i!==r)}Wt(e,t,n);break;case 1:if(!Ee&&(Kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,t,l)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Wt(e,t,n),Ee=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function Tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wp),t.forEach(function(r){var i=th.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,ct=!1;break e;case 3:Ce=l.stateNode.containerInfo,ct=!0;break e;case 4:Ce=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(Ce===null)throw Error(b(160));id(o,s,i),Ce=null,ct=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){le(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)od(t,e),t=t.sibling}function od(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),yt(e),r&4){try{Gr(3,e,e.return),ns(3,e)}catch(w){le(e,e.return,w)}try{Gr(5,e,e.return)}catch(w){le(e,e.return,w)}}break;case 1:at(t,e),yt(e),r&512&&n!==null&&Kn(n,n.return);break;case 5:if(at(t,e),yt(e),r&512&&n!==null&&Kn(n,n.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(w){le(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ec(i,o),gl(l,s);var c=gl(l,o);for(s=0;s<a.length;s+=2){var d=a[s],f=a[s+1];d==="style"?Dc(i,f):d==="dangerouslySetInnerHTML"?_c(i,f):d==="children"?Jr(i,f):wa(i,d,f,c)}switch(l){case"input":dl(i,o);break;case"textarea":bc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?er(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?er(i,!!o.multiple,o.defaultValue,!0):er(i,!!o.multiple,o.multiple?[]:"",!1))}i[li]=o}catch(w){le(e,e.return,w)}}break;case 6:if(at(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){le(e,e.return,w)}}break;case 3:if(at(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(w){le(e,e.return,w)}break;case 4:at(t,e),yt(e);break;case 13:at(t,e),yt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ja=ae())),r&4&&Tu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(c=Ee)||d,at(t,e),Ee=c):at(t,e),yt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(f=I=d;I!==null;){switch(g=I,y=g.child,g.tag){case 0:case 11:case 14:case 15:Gr(4,g,g.return);break;case 1:Kn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){le(r,n,w)}}break;case 5:Kn(g,g.return);break;case 22:if(g.memoizedState!==null){bu(f);continue}}y!==null?(y.return=g,I=y):bu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Pc("display",s))}catch(w){le(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){le(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:at(t,e),yt(e),r&4&&Tu(e);break;case 21:break;default:at(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rd(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jr(i,""),r.flags&=-33);var o=$u(e);Gl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=$u(e);Wl(e,l,s);break;default:throw Error(b(161))}}catch(a){le(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zp(e,t,n){I=e,sd(e)}function sd(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Vi;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=Vi;var c=Ee;if(Vi=s,(Ee=a)&&!c)for(I=i;I!==null;)s=I,a=s.child,s.tag===22&&s.memoizedState!==null?Nu(i):a!==null?(a.return=s,I=a):Nu(i);for(;o!==null;)I=o,sd(o),o=o.sibling;I=i,Vi=l,Ee=c}Eu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):Eu(e)}}function Eu(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||ns(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&du(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}du(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ni(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ee||t.flags&512&&Ul(t)}catch(g){le(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function bu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Nu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ns(4,t)}catch(a){le(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){le(t,i,a)}}var o=t.return;try{Ul(t)}catch(a){le(t,o,a)}break;case 5:var s=t.return;try{Ul(t)}catch(a){le(t,s,a)}}}catch(a){le(t,t.return,a)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Qp=Math.ceil,Do=Ft.ReactCurrentDispatcher,Ka=Ft.ReactCurrentOwner,rt=Ft.ReactCurrentBatchConfig,Z=0,ye=null,ce=null,ke=0,Ge=0,Xn=pn(0),pe=0,pi=null,Pn=0,rs=0,Xa=0,Zr=null,Oe=null,Ja=0,fr=1/0,Et=null,Mo=!1,Zl=null,on=null,Bi=!1,Jt=null,Lo=0,Qr=0,Ql=null,io=-1,oo=0;function De(){return Z&6?ae():io!==-1?io:io=ae()}function sn(e){return e.mode&1?Z&2&&ke!==0?ke&-ke:Pp.transition!==null?(oo===0&&(oo=Uc()),oo):(e=K,e!==0||(e=window.event,e=e===void 0?16:Xc(e.type)),e):1}function ht(e,t,n,r){if(50<Qr)throw Qr=0,Ql=null,Error(b(185));Ci(e,n,r),(!(Z&2)||e!==ye)&&(e===ye&&(!(Z&2)&&(rs|=n),pe===4&&Kt(e,ke)),He(e,r),n===1&&Z===0&&!(t.mode&1)&&(fr=ae()+500,qo&&hn()))}function He(e,t){var n=e.callbackNode;Pf(e,t);var r=vo(e,e===ye?ke:0);if(r===0)n!==null&&R0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&R0(n),t===1)e.tag===0?_p(_u.bind(null,e)):g2(_u.bind(null,e)),Tp(function(){!(Z&6)&&hn()}),n=null;else{switch(Wc(r)){case 1:n=ja;break;case 4:n=Vc;break;case 16:n=go;break;case 536870912:n=Bc;break;default:n=go}n=hd(n,ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ld(e,t){if(io=-1,oo=0,Z&6)throw Error(b(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=vo(e,e===ye?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var i=Z;Z|=2;var o=ud();(ye!==e||ke!==t)&&(Et=null,fr=ae()+500,jn(e,t));do try{Xp();break}catch(l){ad(e,l)}while(!0);Oa(),Do.current=o,Z=i,ce!==null?t=0:(ye=null,ke=0,t=pe)}if(t!==0){if(t===2&&(i=Cl(e),i!==0&&(r=i,t=Yl(e,i))),t===1)throw n=pi,jn(e,0),Kt(e,r),He(e,ae()),n;if(t===6)Kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yp(i)&&(t=Io(e,r),t===2&&(o=Cl(e),o!==0&&(r=o,t=Yl(e,o))),t===1))throw n=pi,jn(e,0),Kt(e,r),He(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:yn(e,Oe,Et);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=Ja+500-ae(),10<t)){if(vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl(yn.bind(null,e,Oe,Et),t);break}yn(e,Oe,Et);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-pt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qp(r/1960))-r,10<r){e.timeoutHandle=Nl(yn.bind(null,e,Oe,Et),r);break}yn(e,Oe,Et);break;case 5:yn(e,Oe,Et);break;default:throw Error(b(329))}}}return He(e,ae()),e.callbackNode===n?ld.bind(null,e):null}function Yl(e,t){var n=Zr;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Kl(t)),e}function Kl(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Yp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~Xa,t&=~rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function _u(e){if(Z&6)throw Error(b(327));or();var t=vo(e,0);if(!(t&1))return He(e,ae()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=Yl(e,r))}if(n===1)throw n=pi,jn(e,0),Kt(e,t),He(e,ae()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Oe,Et),He(e,ae()),null}function qa(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(fr=ae()+500,qo&&hn())}}function Dn(e){Jt!==null&&Jt.tag===0&&!(Z&6)&&or();var t=Z;Z|=1;var n=rt.transition,r=K;try{if(rt.transition=null,K=1,e)return e()}finally{K=r,rt.transition=n,Z=t,!(Z&6)&&hn()}}function e0(){Ge=Xn.current,ne(Xn)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$p(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(La(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:cr(),ne(Ae),ne(Ne),Ba();break;case 5:Va(r);break;case 4:cr();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:Ra(r.type._context);break;case 22:case 23:e0()}n=n.return}if(ye=e,ce=e=ln(e.current,null),ke=Ge=t,pe=0,pi=null,Xa=rs=Pn=0,Oe=Zr=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Cn=null}return e}function ad(e,t){do{var n=ce;try{if(Oa(),to.current=Po,_o){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_o=!1}if(_n=0,me=fe=oe=null,Wr=!1,ci=0,Ka.current=null,n===null||n.return===null){pe=1,pi=t,ce=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=ke,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=vu(s);if(y!==null){y.flags&=-257,yu(y,s,l,o,t),y.mode&1&&gu(o,c,t),t=y,a=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(a),t.updateQueue=w}else x.add(a);break e}else{if(!(t&1)){gu(o,c,t),t0();break e}a=Error(b(426))}}else if(re&&l.mode&1){var E=vu(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),yu(E,s,l,o,t),Ia(dr(a,l));break e}}o=a=dr(a,l),pe!==4&&(pe=2),Zr===null?Zr=[o]:Zr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=W2(o,a,t);cu(o,h);break e;case 1:l=a;var p=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(on===null||!on.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=G2(o,l,t);cu(o,j);break e}}o=o.return}while(o!==null)}dd(n)}catch(k){t=k,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function ud(){var e=Do.current;return Do.current=Po,e===null?Po:e}function t0(){(pe===0||pe===3||pe===2)&&(pe=4),ye===null||!(Pn&268435455)&&!(rs&268435455)||Kt(ye,ke)}function Io(e,t){var n=Z;Z|=2;var r=ud();(ye!==e||ke!==t)&&(Et=null,jn(e,t));do try{Kp();break}catch(i){ad(e,i)}while(!0);if(Oa(),Z=n,Do.current=r,ce!==null)throw Error(b(261));return ye=null,ke=0,pe}function Kp(){for(;ce!==null;)cd(ce)}function Xp(){for(;ce!==null&&!kf();)cd(ce)}function cd(e){var t=pd(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?dd(e):ce=t,Ka.current=null}function dd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Up(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(n=Bp(n,t,Ge),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function yn(e,t,n){var r=K,i=rt.transition;try{rt.transition=null,K=1,Jp(e,t,n,r)}finally{rt.transition=i,K=r}return null}function Jp(e,t,n,r){do or();while(Jt!==null);if(Z&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Df(e,o),e===ye&&(ce=ye=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bi||(Bi=!0,hd(go,function(){return or(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rt.transition,rt.transition=null;var s=K;K=1;var l=Z;Z|=4,Ka.current=null,Gp(e,n),od(n,e),yp(El),yo=!!Tl,El=Tl=null,e.current=n,Zp(n),Sf(),Z=l,K=s,rt.transition=o}else e.current=n;if(Bi&&(Bi=!1,Jt=e,Lo=i),o=e.pendingLanes,o===0&&(on=null),Tf(n.stateNode),He(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mo)throw Mo=!1,e=Zl,Zl=null,e;return Lo&1&&e.tag!==0&&or(),o=e.pendingLanes,o&1?e===Ql?Qr++:(Qr=0,Ql=e):Qr=0,hn(),null}function or(){if(Jt!==null){var e=Wc(Lo),t=rt.transition,n=K;try{if(rt.transition=null,K=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Lo=0,Z&6)throw Error(b(331));var i=Z;for(Z|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(I=c;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Gr(8,d,o)}var f=d.child;if(f!==null)f.return=d,I=f;else for(;I!==null;){d=I;var g=d.sibling,y=d.return;if(nd(d),d===c){I=null;break}if(g!==null){g.return=y,I=g;break}I=y}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Gr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,I=h;break e}I=o.return}}var p=e.current;for(I=p;I!==null;){s=I;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,I=v;else e:for(s=p;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ns(9,l)}}catch(k){le(l,l.return,k)}if(l===s){I=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,I=j;break e}I=l.return}}if(Z=i,hn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Qo,e)}catch{}r=!0}return r}finally{K=n,rt.transition=t}}return!1}function Pu(e,t,n){t=dr(n,t),t=W2(e,t,1),e=rn(e,t,1),t=De(),e!==null&&(Ci(e,1,t),He(e,t))}function le(e,t,n){if(e.tag===3)Pu(e,e,n);else for(;t!==null;){if(t.tag===3){Pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=dr(n,e),e=G2(t,e,1),t=rn(t,e,1),e=De(),t!==null&&(Ci(t,1,e),He(t,e));break}}t=t.return}}function qp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>ae()-Ja?jn(e,0):Xa|=n),He(e,t)}function fd(e,t){t===0&&(e.mode&1?(t=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):t=1);var n=De();e=Ot(e,t),e!==null&&(Ci(e,t,n),He(e,n))}function eh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fd(e,n)}function th(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),fd(e,n)}var pd;pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Vp(e,t,n);Re=!!(e.flags&131072)}else Re=!1,re&&t.flags&1048576&&v2(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var i=lr(t,Ne.current);ir(t,n),i=Wa(null,t,r,e,i,n);var o=Ga();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,So(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fa(t),i.updater=ts,t.stateNode=i,i._reactInternals=t,zl(t,r,e,n),t=Al(null,t,r,!0,o,n)):(t.tag=0,re&&o&&Ma(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rh(r),e=ut(r,e),i){case 0:t=Rl(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=wu(null,t,r,e,n);break e;case 14:t=xu(null,t,r,ut(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Rl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Cu(e,t,r,i,n);case 3:e:{if(K2(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,S2(e,t),bo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dr(Error(b(423)),t),t=ku(e,t,r,n,i);break e}else if(r!==i){i=dr(Error(b(424)),t),t=ku(e,t,r,n,i);break e}else for(Ze=nn(t.stateNode.containerInfo.firstChild),Qe=t,re=!0,dt=null,n=C2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=Rt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return j2(t),e===null&&Ml(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,bl(r,i)?s=null:o!==null&&bl(r,o)&&(t.flags|=32),Y2(e,t),Pe(e,t,s,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return X2(e,t,n);case 4:return Ha(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ur(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),wu(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,q(To,r._currentValue),r._currentValue=s,o!==null)if(gt(o.value,s)){if(o.children===i.children&&!Ae.current){t=Rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Mt(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ll(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(b(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ll(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ir(t,n),i=it(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),xu(e,t,r,i,n);case 15:return Z2(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),ro(e,t),t.tag=1,Fe(r)?(e=!0,So(t)):e=!1,ir(t,n),U2(t,r,i),zl(t,r,i,n),Al(null,t,r,!0,e,n);case 19:return J2(e,t,n);case 22:return Q2(e,t,n)}throw Error(b(156,t.tag))};function hd(e,t){return Hc(e,t)}function nh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new nh(e,t,n,r)}function n0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rh(e){if(typeof e=="function")return n0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ca)return 11;if(e===ka)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function so(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")n0(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Hn:return $n(n.children,i,o,t);case xa:s=8,i|=8;break;case sl:return e=nt(12,n,t,i|2),e.elementType=sl,e.lanes=o,e;case ll:return e=nt(13,n,t,i),e.elementType=ll,e.lanes=o,e;case al:return e=nt(19,n,t,i),e.elementType=al,e.lanes=o,e;case jc:return is(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kc:s=10;break e;case Sc:s=9;break e;case Ca:s=11;break e;case ka:s=14;break e;case Zt:s=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=nt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function $n(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function is(e,t,n,r){return e=nt(22,e,r,t),e.elementType=jc,e.lanes=n,e.stateNode={isHidden:!1},e}function Us(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Ws(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ih(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function r0(e,t,n,r,i,o,s,l,a){return e=new ih(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(o),e}function oh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function md(e){if(!e)return cn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Fe(n))return m2(e,n,t)}return t}function gd(e,t,n,r,i,o,s,l,a){return e=r0(n,r,!0,e,i,o,s,l,a),e.context=md(null),n=e.current,r=De(),i=sn(n),o=Mt(r,i),o.callback=t??null,rn(n,o,i),e.current.lanes=i,Ci(e,i,r),He(e,r),e}function os(e,t,n,r){var i=t.current,o=De(),s=sn(i);return n=md(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,s),e!==null&&(ht(e,i,s,o),eo(e,i,s)),s}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function i0(e,t){Du(e,t),(e=e.alternate)&&Du(e,t)}function sh(){return null}var vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function o0(e){this._internalRoot=e}ss.prototype.render=o0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));os(e,t,null,null)};ss.prototype.unmount=o0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){os(null,e,null,null)}),t[zt]=null}};function ss(e){this._internalRoot=e}ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Kc(e)}};function s0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function lh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=zo(s);o.call(c)}}var s=gd(t,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=s,e[zt]=s.current,oi(e.nodeType===8?e.parentNode:e),Dn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=zo(a);l.call(c)}}var a=r0(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=a,e[zt]=a.current,oi(e.nodeType===8?e.parentNode:e),Dn(function(){os(t,a,n,r)}),a}function as(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=zo(s);l.call(a)}}os(t,s,e,i)}else s=lh(n,t,e,i,r);return zo(s)}Gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&($a(t,n|1),He(t,ae()),!(Z&6)&&(fr=ae()+500,hn()))}break;case 13:Dn(function(){var r=Ot(e,1);if(r!==null){var i=De();ht(r,e,1,i)}}),i0(e,1)}};Ta=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=De();ht(t,e,134217728,n)}i0(e,134217728)}};Zc=function(e){if(e.tag===13){var t=sn(e),n=Ot(e,t);if(n!==null){var r=De();ht(n,e,t,r)}i0(e,t)}};Qc=function(){return K};Yc=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};yl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Jo(r);if(!i)throw Error(b(90));Tc(r),dl(r,i)}}}break;case"textarea":bc(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};Ic=qa;zc=Dn;var ah={usingClientEntryPoint:!1,Events:[Si,Wn,Jo,Mc,Lc,qa]},Pr={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uh={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ac(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||sh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{Qo=Ui.inject(uh),St=Ui}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ah;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!s0(t))throw Error(b(200));return oh(e,t,null,n)};Je.createRoot=function(e,t){if(!s0(e))throw Error(b(299));var n=!1,r="",i=vd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=r0(e,1,!1,null,null,n,!1,r,i),e[zt]=t.current,oi(e.nodeType===8?e.parentNode:e),new o0(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Ac(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Dn(e)};Je.hydrate=function(e,t,n){if(!ls(t))throw Error(b(200));return as(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!s0(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=vd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=gd(t,null,e,1,n??null,i,!1,o,s),e[zt]=t.current,oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ss(t)};Je.render=function(e,t,n){if(!ls(t))throw Error(b(200));return as(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!ls(e))throw Error(b(40));return e._reactRootContainer?(Dn(function(){as(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Je.unstable_batchedUpdates=qa;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ls(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return as(e,t,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd)}catch(e){console.error(e)}}yd(),yc.exports=Je;var l0=yc.exports,wd,Lu=l0;wd=Lu.createRoot,Lu.hydrateRoot;var xd={exports:{}},Cd={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=N;function ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dh=typeof Object.is=="function"?Object.is:ch,fh=$i.useSyncExternalStore,ph=$i.useRef,hh=$i.useEffect,mh=$i.useMemo,gh=$i.useDebugValue;Cd.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=ph(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=mh(function(){function a(y){if(!c){if(c=!0,d=y,y=r(y),i!==void 0&&s.hasValue){var x=s.value;if(i(x,y))return f=x}return f=y}if(x=f,dh(d,y))return x;var w=r(y);return i!==void 0&&i(x,w)?(d=y,x):(d=y,f=w)}var c=!1,d,f,g=n===void 0?null:n;return[function(){return a(t())},g===null?void 0:function(){return a(g())}]},[t,n,r,i]);var l=fh(e,o[0],o[1]);return hh(function(){s.hasValue=!0,s.value=l},[l]),gh(l),l};xd.exports=Cd;var vh=xd.exports;function yh(e){e()}function wh(){let e=null,t=null;return{clear(){e=null,t=null},notify(){yh(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Iu={notify(){},get:()=>[]};function xh(e,t){let n,r=Iu,i=0,o=!1;function s(w){d();const E=r.subscribe(w);let h=!1;return()=>{h||(h=!0,E(),f())}}function l(){r.notify()}function a(){x.onStateChange&&x.onStateChange()}function c(){return o}function d(){i++,n||(n=e.subscribe(a),r=wh())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Iu)}function g(){o||(o=!0,d())}function y(){o&&(o=!1,f())}const x={addNestedSub:s,notifyNestedSubs:l,handleChangeWrapper:a,isSubscribed:c,trySubscribe:g,tryUnsubscribe:y,getListeners:()=>r};return x}var Ch=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kh=Ch(),Sh=()=>typeof navigator<"u"&&navigator.product==="ReactNative",jh=Sh(),$h=()=>kh||jh?N.useLayoutEffect:N.useEffect,Th=$h(),Gs=Symbol.for("react-redux-context"),Zs=typeof globalThis<"u"?globalThis:{};function Eh(){if(!N.createContext)return{};const e=Zs[Gs]??(Zs[Gs]=new Map);let t=e.get(N.createContext);return t||(t=N.createContext(null),e.set(N.createContext,t)),t}var dn=Eh();function bh(e){const{children:t,context:n,serverState:r,store:i}=e,o=N.useMemo(()=>{const a=xh(i);return{store:i,subscription:a,getServerState:r?()=>r:void 0}},[i,r]),s=N.useMemo(()=>i.getState(),[i]);Th(()=>{const{subscription:a}=o;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==i.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[o,s]);const l=n||dn;return N.createElement(l.Provider,{value:o},t)}var Nh=bh;function a0(e=dn){return function(){return N.useContext(e)}}var kd=a0();function Sd(e=dn){const t=e===dn?kd:a0(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var _h=Sd();function Ph(e=dn){const t=e===dn?_h:Sd(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var he=Ph(),Dh=(e,t)=>e===t;function Mh(e=dn){const t=e===dn?kd:a0(e),n=(r,i={})=>{const{equalityFn:o=Dh}=typeof i=="function"?{equalityFn:i}:i,s=t(),{store:l,subscription:a,getServerState:c}=s;N.useRef(!0);const d=N.useCallback({[r.name](g){return r(g)}}[r.name],[r]),f=vh.useSyncExternalStoreWithSelector(a.addNestedSub,l.getState,c||l.getState,d,o);return N.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var W=Mh(),we=[];for(var Qs=0;Qs<256;++Qs)we.push((Qs+256).toString(16).slice(1));function Lh(e,t=0){return(we[e[t+0]]+we[e[t+1]]+we[e[t+2]]+we[e[t+3]]+"-"+we[e[t+4]]+we[e[t+5]]+"-"+we[e[t+6]]+we[e[t+7]]+"-"+we[e[t+8]]+we[e[t+9]]+"-"+we[e[t+10]]+we[e[t+11]]+we[e[t+12]]+we[e[t+13]]+we[e[t+14]]+we[e[t+15]]).toLowerCase()}var Wi,Ih=new Uint8Array(16);function zh(){if(!Wi&&(Wi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Wi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Wi(Ih)}var Oh=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const zu={randomUUID:Oh};function Rh(e,t,n){if(zu.randomUUID&&!t&&!e)return zu.randomUUID();e=e||{};var r=e.random||(e.rng||zh)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Lh(r)}const Tn=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},zr=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):(console.warn(`Warning: Could not find the item (${e}) in localStorage.`),null)},_e=e=>{if(e===null||typeof e!="object")return e;if(Array.isArray(e))return e.map(_e);const t={};for(const n in e)Object.hasOwn(e,n)&&(t[n]=_e(e[n]));return t},Q=function(){return Rh()},G=function(){return U(new Date,"ms")},Oo=e=>{if(!e&&e!==0)return;if(e===0)return"0s";let t=e/1e3,n=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),o=Math.floor(t%60);return`${n!==0?n+"d ":""}${r!==0?r+"h ":""}${i!==0?i+"m ":""}${o!==0?o+"s":""}`},U=(e,t)=>{if(!e&&e!==0)return;if(e===0)return"0s";const n=new Date(e),r=String(n.getDate()).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0"),o=n.getFullYear(),s=String(n.getHours()).padStart(2,"0"),l=String(n.getMinutes()).padStart(2,"0"),a=String(n.getSeconds()).padStart(2,"0");if(t==="dd.mm.yyyy.(hh:mm:ss)")return`${r}.${i}.${o}. (${s}:${l}:${a})`;if(t==="yyyy-mm-ddThh:mm:ss")return`${o}-${i}-${r}T${s}:${l}:${a}`;if(t==="dd.mm.yyyy.")return`${r}.${i}.${o}.`;if(t==="hh:mm:ss")return`${s}:${l}:${a}`;if(t==="ms")return new Date(n).getTime();if(t==="yyyy-mm-dd")return`${o}-${i}-${r}`;console.log("invalid format in formatDate function")},Jn=(e,t)=>{const n=new Date(e);if(t==="day"){const r=new Date(n.setHours(0,0,0,0)),i=new Date(n.setHours(23,59,59,999));return{start:r.getTime(),end:i.getTime()}}if(t==="week"){const r=n.getDay(),i=(r===0?-6:1)-r,o=i+6,s=new Date(n);s.setDate(n.getDate()+i),s.setHours(0,0,0,0);const l=new Date(n);return l.setDate(n.getDate()+o),l.setHours(23,59,59,999),{start:s.getTime(),end:l.getTime()}}if(t==="month"){const r=new Date(n.getFullYear(),n.getMonth(),1);r.setHours(0,0,0,0);const i=new Date(n.getFullYear(),n.getMonth()+1,0);return i.setHours(23,59,59,999),{start:r.getTime(),end:i.getTime()}}if(t==="year"){const r=n.getFullYear(),i=new Date(r,0,1);i.setHours(0,0,0,0);const o=new Date(r,11,31);return o.setHours(23,59,59,999),{start:i.getTime(),end:o.getTime()}}},Ht=(e,t,n)=>{const r=e.currentTarget.getBoundingClientRect(),i=(e.clientX-r.left)/r.width*100,o=(e.clientY-r.top)/r.height*100;e.currentTarget.style.setProperty("--x",`${i}%`),e.currentTarget.style.setProperty("--y",`${o}%`),e.currentTarget.style.setProperty("--inner-color",t),e.currentTarget.style.setProperty("--outer-color",n)},Vt=(e,t)=>{e.currentTarget.style.setProperty("--x","50%"),e.currentTarget.style.setProperty("--y","50%"),e.currentTarget.style.setProperty("--inner-color",t),e.currentTarget.style.setProperty("--outer-color",t)},Yr=(e,t=1)=>e-Math.floor(e)!==0?+e.toFixed(t):e,Ah=e=>{const t=new Map,n=new Set;for(let a=0;a<e.length;a++){const c=e[a].log;for(let d=a+1;d<e.length;d++){const f=e[d].log;c.start<f.end&&f.start<c.end&&(t.has(a)||t.set(a,[]),t.has(d)||t.set(d,[]),t.get(a).push(d),t.get(d).push(a))}}let r=0;const i={},o=[];function s(a,c,d){n.add(a),i[a]=c,d.push(a);const f=t.get(a)||[];for(const g of f)n.has(g)||s(g,c,d)}for(let a=0;a<e.length;a++)if(!n.has(a)){const c=`G${++r}`,d=[];s(a,c,d),o.push(d)}return o.map(a=>{const c=a.length;return a.map(d=>{const f=e[d],g=c>1;return{...f,overlaps:g,overlapGroup:g?i[d]:null,groupSize:c}})})},jd=e=>{const t={high:0,medium:1,low:2};return e.sort((n,r)=>t[n.priority]-t[r.priority])};function xe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Fh=typeof Symbol=="function"&&Symbol.observable||"@@observable",Ou=Fh,Ys=()=>Math.random().toString(36).substring(7).split("").join("."),Hh={INIT:`@@redux/INIT${Ys()}`,REPLACE:`@@redux/REPLACE${Ys()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ys()}`},Ro=Hh;function u0(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function $d(e,t,n){if(typeof e!="function")throw new Error(xe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(xe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(xe(1));return n($d)(e,t)}let r=e,i=t,o=new Map,s=o,l=0,a=!1;function c(){s===o&&(s=new Map,o.forEach((E,h)=>{s.set(h,E)}))}function d(){if(a)throw new Error(xe(3));return i}function f(E){if(typeof E!="function")throw new Error(xe(4));if(a)throw new Error(xe(5));let h=!0;c();const p=l++;return s.set(p,E),function(){if(h){if(a)throw new Error(xe(6));h=!1,c(),s.delete(p),o=null}}}function g(E){if(!u0(E))throw new Error(xe(7));if(typeof E.type>"u")throw new Error(xe(8));if(typeof E.type!="string")throw new Error(xe(17));if(a)throw new Error(xe(9));try{a=!0,i=r(i,E)}finally{a=!1}return(o=s).forEach(p=>{p()}),E}function y(E){if(typeof E!="function")throw new Error(xe(10));r=E,g({type:Ro.REPLACE})}function x(){const E=f;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(xe(11));function p(){const j=h;j.next&&j.next(d())}return p(),{unsubscribe:E(p)}},[Ou](){return this}}}return g({type:Ro.INIT}),{dispatch:g,subscribe:f,getState:d,replaceReducer:y,[Ou]:x}}function Vh(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Ro.INIT})>"u")throw new Error(xe(12));if(typeof n(void 0,{type:Ro.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(xe(13))})}function Bh(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let i;try{Vh(n)}catch(o){i=o}return function(s={},l){if(i)throw i;let a=!1;const c={};for(let d=0;d<r.length;d++){const f=r[d],g=n[f],y=s[f],x=g(y,l);if(typeof x>"u")throw l&&l.type,new Error(xe(14));c[f]=x,a=a||x!==y}return a=a||r.length!==Object.keys(s).length,a?c:s}}function Ao(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function Uh(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(xe(15))};const s={getState:i.getState,dispatch:(a,...c)=>o(a,...c)},l=e.map(a=>a(s));return o=Ao(...l)(i.dispatch),{...i,dispatch:o}}}function Wh(e){return u0(e)&&"type"in e&&typeof e.type=="string"}var Td=Symbol.for("immer-nothing"),Ru=Symbol.for("immer-draftable"),Ke=Symbol.for("immer-state");function ft(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var pr=Object.getPrototypeOf;function Mn(e){return!!e&&!!e[Ke]}function At(e){var t;return e?Ed(e)||Array.isArray(e)||!!e[Ru]||!!((t=e.constructor)!=null&&t[Ru])||cs(e)||ds(e):!1}var Gh=Object.prototype.constructor.toString();function Ed(e){if(!e||typeof e!="object")return!1;const t=pr(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===Gh}function Fo(e,t){us(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function us(e){const t=e[Ke];return t?t.type_:Array.isArray(e)?1:cs(e)?2:ds(e)?3:0}function Xl(e,t){return us(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function bd(e,t,n){const r=us(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Zh(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function cs(e){return e instanceof Map}function ds(e){return e instanceof Set}function wn(e){return e.copy_||e.base_}function Jl(e,t){if(cs(e))return new Map(e);if(ds(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Ed(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[Ke];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const s=i[o],l=r[s];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(r[s]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[s]})}return Object.create(pr(e),r)}else{const r=pr(e);if(r!==null&&n)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function c0(e,t=!1){return fs(e)||Mn(e)||!At(e)||(us(e)>1&&(e.set=e.add=e.clear=e.delete=Qh),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>c0(r,!0))),e}function Qh(){ft(2)}function fs(e){return Object.isFrozen(e)}var Yh={};function Ln(e){const t=Yh[e];return t||ft(0,e),t}var hi;function Nd(){return hi}function Kh(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Au(e,t){t&&(Ln("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ql(e){ea(e),e.drafts_.forEach(Xh),e.drafts_=null}function ea(e){e===hi&&(hi=e.parent_)}function Fu(e){return hi=Kh(hi,e)}function Xh(e){const t=e[Ke];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Hu(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Ke].modified_&&(ql(t),ft(4)),At(e)&&(e=Ho(t,e),t.parent_||Vo(t,e)),t.patches_&&Ln("Patches").generateReplacementPatches_(n[Ke].base_,e,t.patches_,t.inversePatches_)):e=Ho(t,n,[]),ql(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Td?e:void 0}function Ho(e,t,n){if(fs(t))return t;const r=t[Ke];if(!r)return Fo(t,(i,o)=>Vu(e,r,t,i,o,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Vo(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,s=!1;r.type_===3&&(o=new Set(i),i.clear(),s=!0),Fo(o,(l,a)=>Vu(e,r,i,l,a,n,s)),Vo(e,i,!1),n&&e.patches_&&Ln("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Vu(e,t,n,r,i,o,s){if(Mn(i)){const l=o&&t&&t.type_!==3&&!Xl(t.assigned_,r)?o.concat(r):void 0,a=Ho(e,i,l);if(bd(n,r,a),Mn(a))e.canAutoFreeze_=!1;else return}else s&&n.add(i);if(At(i)&&!fs(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ho(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Vo(e,i)}}function Vo(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&c0(t,n)}function Jh(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Nd(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=d0;n&&(i=[r],o=mi);const{revoke:s,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=s,l}var d0={get(e,t){if(t===Ke)return e;const n=wn(e);if(!Xl(n,t))return qh(e,n,t);const r=n[t];return e.finalized_||!At(r)?r:r===Ks(e.base_,t)?(Xs(e),e.copy_[t]=na(r,e)):r},has(e,t){return t in wn(e)},ownKeys(e){return Reflect.ownKeys(wn(e))},set(e,t,n){const r=_d(wn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Ks(wn(e),t),o=i==null?void 0:i[Ke];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(Zh(n,i)&&(n!==void 0||Xl(e.base_,t)))return!0;Xs(e),ta(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Ks(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Xs(e),ta(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=wn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){ft(11)},getPrototypeOf(e){return pr(e.base_)},setPrototypeOf(){ft(12)}},mi={};Fo(d0,(e,t)=>{mi[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});mi.deleteProperty=function(e,t){return mi.set.call(this,e,t,void 0)};mi.set=function(e,t,n){return d0.set.call(this,e[0],t,n,e[0])};function Ks(e,t){const n=e[Ke];return(n?wn(n):e)[t]}function qh(e,t,n){var i;const r=_d(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function _d(e,t){if(!(t in e))return;let n=pr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=pr(n)}}function ta(e){e.modified_||(e.modified_=!0,e.parent_&&ta(e.parent_))}function Xs(e){e.copy_||(e.copy_=Jl(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var e5=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const s=this;return function(a=o,...c){return s.produce(a,d=>n.call(this,d,...c))}}typeof n!="function"&&ft(6),r!==void 0&&typeof r!="function"&&ft(7);let i;if(At(t)){const o=Fu(this),s=na(t,void 0);let l=!0;try{i=n(s),l=!1}finally{l?ql(o):ea(o)}return Au(o,r),Hu(i,o)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===Td&&(i=void 0),this.autoFreeze_&&c0(i,!0),r){const o=[],s=[];Ln("Patches").generateReplacementPatches_(t,i,o,s),r(o,s)}return i}else ft(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...l)=>this.produceWithPatches(s,a=>t(a,...l));let r,i;return[this.produce(t,n,(s,l)=>{r=s,i=l}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){At(e)||ft(8),Mn(e)&&(e=t5(e));const t=Fu(this),n=na(e,void 0);return n[Ke].isManual_=!0,ea(t),n}finishDraft(e,t){const n=e&&e[Ke];(!n||!n.isManual_)&&ft(9);const{scope_:r}=n;return Au(r,t),Hu(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Ln("Patches").applyPatches_;return Mn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function na(e,t){const n=cs(e)?Ln("MapSet").proxyMap_(e,t):ds(e)?Ln("MapSet").proxySet_(e,t):Jh(e,t);return(t?t.scope_:Nd()).drafts_.push(n),n}function t5(e){return Mn(e)||ft(10,e),Pd(e)}function Pd(e){if(!At(e)||fs(e))return e;const t=e[Ke];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Jl(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Jl(e,!0);return Fo(n,(r,i)=>{bd(n,r,Pd(i))}),t&&(t.finalized_=!1),n}var Xe=new e5,Dd=Xe.produce;Xe.produceWithPatches.bind(Xe);Xe.setAutoFreeze.bind(Xe);Xe.setUseStrictShallowCopy.bind(Xe);Xe.applyPatches.bind(Xe);Xe.createDraft.bind(Xe);Xe.finishDraft.bind(Xe);function Md(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var n5=Md(),r5=Md,i5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ao:Ao.apply(null,arguments)};function Bu(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Lt(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>Wh(r)&&r.type===e,n}var Ld=class Or extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Or.prototype)}static get[Symbol.species](){return Or}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Or(...t[0].concat(this)):new Or(...t.concat(this))}};function Uu(e){return At(e)?Dd(e,()=>{}):e}function Wu(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function o5(e){return typeof e=="boolean"}var s5=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new Ld;return n&&(o5(n)?s.push(n5):s.push(r5(n.extraArgument))),s},l5="RTK_autoBatch",Gu=e=>t=>{setTimeout(t,e)},a5=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,s=!1;const l=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Gu(10):e.type==="callback"?e.queueNotification:Gu(e.timeout),c=()=>{s=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const f=()=>i&&d(),g=r.subscribe(f);return l.add(d),()=>{g(),l.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[l5]),o=!i,o&&(s||(s=!0,a(c))),r.dispatch(d)}finally{i=!0}}})},u5=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new Ld(e);return r&&i.push(a5(typeof r=="object"?r:void 0)),i};function c5(e){const t=s5(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let l;if(typeof n=="function")l=n;else if(u0(n))l=Bh(n);else throw new Error(Lt(1));let a;typeof r=="function"?a=r(t):a=t();let c=Ao;i&&(c=i5({trace:!1,...typeof i=="object"&&i}));const d=Uh(...a),f=u5(d);let g=typeof s=="function"?s(f):f();const y=c(...g);return $d(l,o,y)}function Id(e){const t={},n=[];let r;const i={addCase(o,s){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Lt(28));if(l in t)throw new Error(Lt(29));return t[l]=s,i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function d5(e){return typeof e=="function"}function f5(e,t){let[n,r,i]=Id(t),o;if(d5(e))o=()=>Uu(e());else{const l=Uu(e);o=()=>l}function s(l=o(),a){let c=[n[a.type],...r.filter(({matcher:d})=>d(a)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,f)=>{if(f)if(Mn(d)){const y=f(d,a);return y===void 0?d:y}else{if(At(d))return Dd(d,g=>f(g,a));{const g=f(d,a);if(g===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return d},l)}return s.getInitialState=o,s}var p5=Symbol.for("rtk-slice-createasyncthunk");function h5(e,t){return`${e}/${t}`}function m5({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[p5];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(Lt(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(v5()):i.reducers)||{},a=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(v,j){const k=typeof v=="string"?v:v.type;if(!k)throw new Error(Lt(12));if(k in c.sliceCaseReducersByType)throw new Error(Lt(13));return c.sliceCaseReducersByType[k]=j,d},addMatcher(v,j){return c.sliceMatchers.push({matcher:v,reducer:j}),d},exposeAction(v,j){return c.actionCreators[v]=j,d},exposeCaseReducer(v,j){return c.sliceCaseReducersByName[v]=j,d}};a.forEach(v=>{const j=l[v],k={reducerName:v,type:h5(o,v),createNotation:typeof i.reducers=="function"};w5(j)?C5(k,j,d,t):y5(k,j,d)});function f(){const[v={},j=[],k=void 0]=typeof i.extraReducers=="function"?Id(i.extraReducers):[i.extraReducers],$={...v,...c.sliceCaseReducersByType};return f5(i.initialState,C=>{for(let T in $)C.addCase(T,$[T]);for(let T of c.sliceMatchers)C.addMatcher(T.matcher,T.reducer);for(let T of j)C.addMatcher(T.matcher,T.reducer);k&&C.addDefaultCase(k)})}const g=v=>v,y=new Map;let x;function w(v,j){return x||(x=f()),x(v,j)}function E(){return x||(x=f()),x.getInitialState()}function h(v,j=!1){function k(C){let T=C[v];return typeof T>"u"&&j&&(T=E()),T}function $(C=g){const T=Wu(y,j,()=>new WeakMap);return Wu(T,C,()=>{const M={};for(const[_,z]of Object.entries(i.selectors??{}))M[_]=g5(z,C,E,j);return M})}return{reducerPath:v,getSelectors:$,get selectors(){return $(k)},selectSlice:k}}const p={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:E,...h(s),injectInto(v,{reducerPath:j,...k}={}){const $=j??s;return v.inject({reducerPath:$,reducer:w},k),{...p,...h($,!0)}}};return p}}function g5(e,t,n,r){function i(o,...s){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...s)}return i.unwrapped=e,i}var f0=m5();function v5(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function y5({type:e,reducerName:t,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!x5(r))throw new Error(Lt(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?Bu(e,s):Bu(e))}function w5(e){return e._reducerDefinitionType==="asyncThunk"}function x5(e){return e._reducerDefinitionType==="reducerWithPrepare"}function C5({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Lt(18));const{payloadCreator:o,fulfilled:s,pending:l,rejected:a,settled:c,options:d}=n,f=i(e,o,d);r.exposeAction(t,f),s&&r.addCase(f.fulfilled,s),l&&r.addCase(f.pending,l),a&&r.addCase(f.rejected,a),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(t,{fulfilled:s||Gi,pending:l||Gi,rejected:a||Gi,settled:c||Gi})}function Gi(){}function Lt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const k5={tempData:null,notifications:[],trackers:[]},zd=f0({name:"data",initialState:k5,reducers:{setTempData(e,t){e.tempData=_e(t.payload)},addNotification(e,t){e.notifications.push(t.payload)},removeNotification(e,t){e.notifications=e.notifications.filter(n=>n.id!==t.payload)},addTracker(e,t){e.trackers.push(t.payload)},removeTracker(e,t){e.trackers=e.trackers.filter(n=>n.taskId!==t.payload)},replaceTracker(e,t){e.trackers=e.trackers.map(n=>n.taskId===t.payload.taskId?t.payload:n)}}}),F=zd.actions,S5=zd.reducer,Od=f0({name:"projects",initialState:[],reducers:{setProjects(e,t){return t.payload},addProject(e,t){return[t.payload,...e]},replaceProject(e,t){return e.map(n=>n.id===t.payload.id?t.payload:n)},removeProject(e,t){return e.filter(n=>n.id!==t.payload)},addTask(e,t){return e.map(n=>n.id===t.payload.projectId?{...n,tasks:[t.payload,...n.tasks]}:n)},replaceTask(e,t){return e.map(n=>n.id===t.payload.projectId?{...n,tasks:n.tasks.map(r=>r.id===t.payload.id?t.payload:r)}:n)},removeTask(e,t){return e.map(n=>n.id===t.payload.projectId?{...n,tasks:n.tasks.filter(r=>r.id!==t.payload.id)}:n)}}}),Ie=Od.actions,j5=Od.reducer,$5={showWelcome:null,minimizedHeader:null,timeline:null,page:null,formType:null,confirmationType:null,actionOrigin:null},Rd=f0({name:"ui",initialState:$5,reducers:{setShowWelcome(e,t){e.showWelcome=t.payload},setMinimized(e,t){e.minimizedHeader=t.payload},changePage(e,t){e.page=t.payload},setTimeline(e,t){e.timeline=t.payload},setFormType(e,t){e.formType=t.payload},setConfirmationType(e,t){e.confirmationType=t.payload},setActionOrigin(e,t){e.actionOrigin=t.payload}}}),D=Rd.actions,T5=Rd.reducer,E5=()=>e=>{const t=zr("trackerData");if(t!==null){e(Ie.setProjects(t));const n=t.filter(o=>o.status==="active"&&(o.deadline-G()<2592e5||o.deadline<G())),r=t.reduce((o,s)=>(s.status==="active"&&s.tasks.forEach(l=>{l.deadline!==void 0&&l.status==="active"&&(s.deadline-G()<2592e5||s.deadline<G())&&o.push(l)}),o),[]),i=[...n,...r];i.sort((o,s)=>o.deadline-s.deadline),i.forEach((o,s)=>{const l=Object.hasOwn(o,"projectId")?"task":"project";setTimeout(()=>{o.deadline<G()?e(F.addNotification({id:Q(),title:`${l==="task"?"Task":"Project"} deadline exceeded!`,message:`Deadline for the "${o.name}" ${l} exceeded.
${U(o.deadline,"dd.mm.yyyy.(hh:mm:ss)")}`,duration:1e4,state:"failed"})):o.deadline-G()<2592e5&&e(F.addNotification({id:Q(),title:`${l==="task"?"Task":"Project"} deadline is coming up!`,message:`Deadline for the "${o.name}" ${l} is closing in.
${Oo(o.deadline-G())}`,duration:1e4,state:"warning"}))},s*200)})}},b5=e=>()=>{Tn("trackerData",e)},N5=()=>e=>{const t=document.createElement("input");t.type="file",t.accept="application/json",t.onchange=async()=>{const n=t.files[0];if(n)try{const r=await n.text(),i=JSON.parse(r);localStorage.setItem("trackerData",JSON.stringify(i)),e(Ie.setProjects(i)),e(D.changePage("projects")),e(F.addNotification({id:Q(),title:"Tracking data imported",message:"EasyTrack data imported successfully"}))}catch(r){alert("Invalid JSON file"),console.error(r)}},t.click()},_5=()=>e=>{const t=localStorage.getItem("trackerData");if(!t){alert("No trackerData found in localStorage");return}let n;try{n=JSON.parse(t)}catch{alert("trackerData is not valid JSON");return}const r=JSON.stringify(n,null,2),i=new Blob([r],{type:"application/json"}),o=URL.createObjectURL(i),s=document.createElement("a");s.href=o,s.download="EasyTrackData.json",s.click(),URL.revokeObjectURL(o),e(F.addNotification({id:Q(),title:"Tracking data exported",message:"Use this JSON file to import data in any other browser."}))},P5=e=>t=>{e.id=Q(),e.dateCreated=G(),e.status="active",e.tasks=[],t(Ie.addProject(e)),t(F.addNotification({id:Q(),title:"Project created!",message:`"${e.name}" (project) is created.`}))},D5=e=>t=>{const n=_e(e);n.dateModified=G(),t(Ie.replaceProject(n)),t(F.addNotification({id:Q(),title:"Project updated!",message:`"${n.name}" (project) is updated.`}))},M5=e=>t=>{const n=_e(e);n.status="finished",n.dateFinished=G(),n.tasks.forEach(r=>{r.status==="active"&&(r.status="finished",r.dateFinished=G())}),t(Ie.replaceProject(n)),t(F.addNotification({id:Q(),title:"Project finished!",message:`"${n.name}" (project) is completed.`,state:"success"}))},L5=e=>t=>{const n=_e(e);n.status="discarded",n.dateDiscarded=G(),n.tasks.forEach(r=>{r.status==="active"&&(r.status="discarded",r.dateDiscarded=G())}),t(Ie.replaceProject(n)),t(F.addNotification({id:Q(),title:"Project discarded!",message:`"${n.name}" (project) is discarded. 
 You can still find this project in the Archives.`}))},I5=e=>t=>{t(Ie.removeProject(e.id)),t(F.addNotification({id:Q(),title:"Project deleted!",message:`"${e.name}" (project) is permanently deleted.`}))},z5=e=>t=>{const n=_e(e);n.status="active",delete n.dateDiscarded,t(Ie.replaceProject(n)),t(F.addNotification({id:Q(),title:"Project restored!",message:`"${n.name}" (project) is restored. 
 You can find this project in the active projects.`}))},O5=e=>(t,n)=>{const r=_e(e);r.id=Q(),r.dateCreated=G(),r.time=0,r.status="active",r.trackLogs=[],t(Ie.addTask(r));const o=n().projects.find(s=>s.id===e.projectId);t(F.addNotification({id:Q(),title:"New task created!",message:`"${r.name}" (task) in "${o.name}" (project) is created.`}))},R5=e=>(t,n)=>{const r=_e(e);r.dateModified=G(),t(Ie.replaceTask(r)),t(F.setTempData(r));const o=n().projects.find(s=>s.id===e.projectId);t(F.addNotification({id:Q(),title:"Task updated!",message:`"${r.name}" (task) in "${o.name}" (project) is updated.`}))},A5=e=>(t,n)=>{const r=_e(e);r.status="finished",r.dateFinished=G(),t(Ie.replaceTask(r));const o=n().projects.find(s=>s.id===e.projectId);t(F.addNotification({id:Q(),title:"Task finished!",message:`"${r.name}" (task) from "${o.name}" (project) is completed.`,state:"success"}))},F5=e=>(t,n)=>{const r=_e(e);r.status="discarded",r.dateDiscarded=G(),t(Ie.replaceTask(r));const o=n().projects.find(s=>s.id===e.projectId);t(F.addNotification({id:Q(),title:"Task discarded!",message:`"${r.name}" (task) in "${o.name}" (project) is discarded.`}))},H5=e=>(t,n)=>{t(Ie.removeTask(e));const i=n().projects.find(o=>o.id===e.projectId);t(F.addNotification({id:Q(),title:"Task deleted!",message:`"${e.name}" (task) in "${i.name}" (project) is permanently deleted.`}))},V5=e=>(t,n)=>{const r=_e(e);r.status="active",delete r.dateDiscarded,t(Ie.replaceTask(r));const o=n().projects.find(s=>s.id===e.projectId);t(F.addNotification({id:Q(),title:"Task restored!",message:`"${r.name}" (task) from "${o.name}" (project) is restored.`}))},Ad=e=>(t,n)=>{const i=n().projects.find(l=>l.id===e.projectId),o=i.tasks.find(l=>l.id===e.taskId),s=_e(o);s.time=s.time+e.trackedTime,s.trackLogs.push({start:e.startedAt,end:e.endedAt,time:e.trackedTime}),t(Ie.replaceTask(s)),t(F.addNotification({id:Q(),title:"Task tracking finished!",message:`Time (${Oo(e.trackedTime)}) added to "${o.name}" (task) from "${i.name}" (project)`}))},B5=()=>e=>{const t=zr("showWelcome"),n=zr("minimizedHeader"),r=zr("timeline"),i=zr("trackerData");t===null?(e(D.setShowWelcome(!0)),e(D.changePage("welcome")),Tn("showWelcome",!0)):(e(D.setShowWelcome(t)),t?e(D.changePage("welcome")):i!=null&&i.length?e(D.changePage("dashboard")):e(D.changePage("projects"))),n===null?(e(D.setMinimized(!1)),Tn("minimizedHeader",!1)):e(D.setMinimized(n)),r===null?(e(D.setTimeline({clockType:"24h",startAt:8,endAt:20,rowLabel:"dates-short"})),Tn("timeline",{clockType:"24h",startAt:8,endAt:20,rowLabel:"dates-short"})):e(D.setTimeline(r))};var be=function(){return be=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},be.apply(this,arguments)};function gi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var te="-ms-",Kr="-moz-",Y="-webkit-",Fd="comm",ps="rule",p0="decl",U5="@import",Hd="@keyframes",W5="@layer",Vd=Math.abs,h0=String.fromCharCode,ra=Object.assign;function G5(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Bd(e){return e.trim()}function bt(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function lo(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function hr(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Ud(e){return e.length}function Rr(e,t){return t.push(e),e}function Z5(e,t){return e.map(t).join("")}function Zu(e,t){return e.filter(function(n){return!bt(n,t)})}var hs=1,mr=1,Wd=0,st=0,ue=0,kr="";function ms(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:hs,column:mr,length:s,return:"",siblings:l}}function Gt(e,t){return ra(ms("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function An(e){for(;e.root;)e=Gt(e.root,{children:[e]});Rr(e,e.siblings)}function Q5(){return ue}function Y5(){return ue=st>0?ge(kr,--st):0,mr--,ue===10&&(mr=1,hs--),ue}function mt(){return ue=st<Wd?ge(kr,st++):0,mr++,ue===10&&(mr=1,hs++),ue}function En(){return ge(kr,st)}function ao(){return st}function gs(e,t){return hr(kr,e,t)}function ia(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function K5(e){return hs=mr=1,Wd=xt(kr=e),st=0,[]}function X5(e){return kr="",e}function Js(e){return Bd(gs(st-1,oa(e===91?e+2:e===40?e+1:e)))}function J5(e){for(;(ue=En())&&ue<33;)mt();return ia(e)>2||ia(ue)>3?"":" "}function q5(e,t){for(;--t&&mt()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return gs(e,ao()+(t<6&&En()==32&&mt()==32))}function oa(e){for(;mt();)switch(ue){case e:return st;case 34:case 39:e!==34&&e!==39&&oa(ue);break;case 40:e===41&&oa(e);break;case 92:mt();break}return st}function em(e,t){for(;mt()&&e+ue!==57;)if(e+ue===84&&En()===47)break;return"/*"+gs(t,st-1)+"*"+h0(e===47?e:mt())}function tm(e){for(;!ia(En());)mt();return gs(e,st)}function nm(e){return X5(uo("",null,null,null,[""],e=K5(e),0,[0],e))}function uo(e,t,n,r,i,o,s,l,a){for(var c=0,d=0,f=s,g=0,y=0,x=0,w=1,E=1,h=1,p=0,v="",j=i,k=o,$=r,C=v;E;)switch(x=p,p=mt()){case 40:if(x!=108&&ge(C,f-1)==58){lo(C+=H(Js(p),"&","&\f"),"&\f",Vd(c?l[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:C+=Js(p);break;case 9:case 10:case 13:case 32:C+=J5(x);break;case 92:C+=q5(ao()-1,7);continue;case 47:switch(En()){case 42:case 47:Rr(rm(em(mt(),ao()),t,n,a),a);break;default:C+="/"}break;case 123*w:l[c++]=xt(C)*h;case 125*w:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+d:h==-1&&(C=H(C,/\f/g,"")),y>0&&xt(C)-f&&Rr(y>32?Yu(C+";",r,n,f-1,a):Yu(H(C," ","")+";",r,n,f-2,a),a);break;case 59:C+=";";default:if(Rr($=Qu(C,t,n,c,d,i,l,v,j=[],k=[],f,o),o),p===123)if(d===0)uo(C,t,$,$,j,o,f,l,k);else switch(g===99&&ge(C,3)===110?100:g){case 100:case 108:case 109:case 115:uo(e,$,$,r&&Rr(Qu(e,$,$,0,0,i,l,v,i,j=[],f,k),k),i,k,f,l,r?j:k);break;default:uo(C,$,$,$,[""],k,0,l,k)}}c=d=y=0,w=h=1,v=C="",f=s;break;case 58:f=1+xt(C),y=x;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&Y5()==125)continue}switch(C+=h0(p),p*w){case 38:h=d>0?1:(C+="\f",-1);break;case 44:l[c++]=(xt(C)-1)*h,h=1;break;case 64:En()===45&&(C+=Js(mt())),g=En(),d=f=xt(v=C+=tm(ao())),p++;break;case 45:x===45&&xt(C)==2&&(w=0)}}return o}function Qu(e,t,n,r,i,o,s,l,a,c,d,f){for(var g=i-1,y=i===0?o:[""],x=Ud(y),w=0,E=0,h=0;w<r;++w)for(var p=0,v=hr(e,g+1,g=Vd(E=s[w])),j=e;p<x;++p)(j=Bd(E>0?y[p]+" "+v:H(v,/&\f/g,y[p])))&&(a[h++]=j);return ms(e,t,n,i===0?ps:l,a,c,d,f)}function rm(e,t,n,r){return ms(e,t,n,Fd,h0(Q5()),hr(e,2,-2),0,r)}function Yu(e,t,n,r,i){return ms(e,t,n,p0,hr(e,0,r),hr(e,r+1,-1),r,i)}function Gd(e,t,n){switch(G5(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 4789:return Kr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+Kr+e+te+e+e;case 5936:switch(ge(e,t+11)){case 114:return Y+e+te+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+te+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+te+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Y+e+te+e+e;case 6165:return Y+e+te+"flex-"+e+e;case 5187:return Y+e+H(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return Y+e+te+"flex-item-"+H(e,/flex-|-self/g,"")+(bt(e,/flex-|baseline/)?"":te+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return Y+e+te+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return Y+e+te+H(e,"shrink","negative")+e;case 5292:return Y+e+te+H(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+H(e,"-grow","")+Y+e+te+H(e,"grow","positive")+e;case 4554:return Y+H(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4200:if(!bt(e,/flex-|baseline/))return te+"grid-column-align"+hr(e,t)+e;break;case 2592:case 3360:return te+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,bt(r.props,/grid-\w+-end/)})?~lo(e+(n=n[t].value),"span",0)?e:te+H(e,"-start","")+e+te+"grid-row-span:"+(~lo(n,"span",0)?bt(n,/\d+/):+bt(n,/\d+/)-+bt(e,/\d+/))+";":te+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return bt(r.props,/grid-\w+-start/)})?e:te+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+Kr+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~lo(e,"stretch",0)?Gd(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,a,c){return te+i+":"+o+c+(s?te+i+"-span:"+(l?a:+a-+o)+c:"")+e});case 4949:if(ge(e,t+6)===121)return H(e,":",":"+Y)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Y+(ge(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+te+"$2box$3")+e;case 100:return H(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function Bo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function im(e,t,n,r){switch(e.type){case W5:if(e.children.length)break;case U5:case p0:return e.return=e.return||e.value;case Fd:return"";case Hd:return e.return=e.value+"{"+Bo(e.children,r)+"}";case ps:if(!xt(e.value=e.props.join(",")))return""}return xt(n=Bo(e.children,r))?e.return=e.value+"{"+n+"}":""}function om(e){var t=Ud(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function sm(e){return function(t){t.root||(t=t.return)&&e(t)}}function lm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case p0:e.return=Gd(e.value,e.length,n);return;case Hd:return Bo([Gt(e,{value:H(e.value,"@","@"+Y)})],r);case ps:if(e.length)return Z5(n=e.props,function(i){switch(bt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":An(Gt(e,{props:[H(i,/:(read-\w+)/,":"+Kr+"$1")]})),An(Gt(e,{props:[i]})),ra(e,{props:Zu(n,r)});break;case"::placeholder":An(Gt(e,{props:[H(i,/:(plac\w+)/,":"+Y+"input-$1")]})),An(Gt(e,{props:[H(i,/:(plac\w+)/,":"+Kr+"$1")]})),An(Gt(e,{props:[H(i,/:(plac\w+)/,te+"input-$1")]})),An(Gt(e,{props:[i]})),ra(e,{props:Zu(n,r)});break}return""})}}var am={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},We={},gr=typeof process<"u"&&We!==void 0&&(We.REACT_APP_SC_ATTR||We.SC_ATTR)||"data-styled",Zd="active",Qd="data-styled-version",vs="6.1.13",m0=`/*!sc*/
`,Uo=typeof window<"u"&&"HTMLElement"in window,um=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==""?We.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&We.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.SC_DISABLE_SPEEDY!==void 0&&We.SC_DISABLE_SPEEDY!==""&&We.SC_DISABLE_SPEEDY!=="false"&&We.SC_DISABLE_SPEEDY),cm={},ys=Object.freeze([]),vr=Object.freeze({});function Yd(e,t,n){return n===void 0&&(n=vr),e.theme!==n.theme&&e.theme||t||n.theme}var Kd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),dm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fm=/(^-|-$)/g;function Ku(e){return e.replace(dm,"-").replace(fm,"")}var pm=/(a)(d)/gi,Zi=52,Xu=function(e){return String.fromCharCode(e+(e>25?39:97))};function sa(e){var t,n="";for(t=Math.abs(e);t>Zi;t=t/Zi|0)n=Xu(t%Zi)+n;return(Xu(t%Zi)+n).replace(pm,"$1-$2")}var qs,Xd=5381,qn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jd=function(e){return qn(Xd,e)};function qd(e){return sa(Jd(e)>>>0)}function hm(e){return e.displayName||e.name||"Component"}function el(e){return typeof e=="string"&&!0}var e1=typeof Symbol=="function"&&Symbol.for,t1=e1?Symbol.for("react.memo"):60115,mm=e1?Symbol.for("react.forward_ref"):60112,gm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ym=((qs={})[mm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qs[t1]=n1,qs);function Ju(e){return("type"in(t=e)&&t.type.$$typeof)===t1?n1:"$$typeof"in e?ym[e.$$typeof]:gm;var t}var wm=Object.defineProperty,xm=Object.getOwnPropertyNames,qu=Object.getOwnPropertySymbols,Cm=Object.getOwnPropertyDescriptor,km=Object.getPrototypeOf,ec=Object.prototype;function r1(e,t,n){if(typeof t!="string"){if(ec){var r=km(t);r&&r!==ec&&r1(e,r,n)}var i=xm(t);qu&&(i=i.concat(qu(t)));for(var o=Ju(e),s=Ju(t),l=0;l<i.length;++l){var a=i[l];if(!(a in vm||n&&n[a]||s&&a in s||o&&a in o)){var c=Cm(t,a);try{wm(e,a,c)}catch{}}}}return e}function yr(e){return typeof e=="function"}function g0(e){return typeof e=="object"&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function la(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function vi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function aa(e,t,n){if(n===void 0&&(n=!1),!n&&!vi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=aa(e[r],t[r]);else if(vi(t))for(var r in t)e[r]=aa(e[r],t[r]);return e}function v0(e,t){Object.defineProperty(e,"toString",{value:t})}function Ti(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Sm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ti(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(m0);return n},e}(),co=new Map,Wo=new Map,fo=1,Qi=function(e){if(co.has(e))return co.get(e);for(;Wo.has(fo);)fo++;var t=fo++;return co.set(e,t),Wo.set(t,e),t},jm=function(e,t){fo=t+1,co.set(e,t),Wo.set(t,e)},$m="style[".concat(gr,"][").concat(Qd,'="').concat(vs,'"]'),Tm=new RegExp("^".concat(gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Em=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},bm=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(m0),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var a=l.match(Tm);if(a){var c=0|parseInt(a[1],10),d=a[2];c!==0&&(jm(d,c),Em(e,d,a[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},tc=function(e){for(var t=document.querySelectorAll($m),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(gr)!==Zd&&(bm(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Nm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var i1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var a=Array.from(l.querySelectorAll("style[".concat(gr,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gr,Zd),r.setAttribute(Qd,vs);var s=Nm();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},_m=function(){function e(t){this.element=i1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Ti(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Pm=function(){function e(t){this.element=i1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Dm=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),nc=Uo,Mm={isServer:!Uo,useCSSOMInjection:!um},Go=function(){function e(t,n,r){t===void 0&&(t=vr),n===void 0&&(n={});var i=this;this.options=be(be({},Mm),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Uo&&nc&&(nc=!1,tc(this)),v0(this,function(){return function(o){for(var s=o.getTag(),l=s.length,a="",c=function(f){var g=function(h){return Wo.get(h)}(f);if(g===void 0)return"continue";var y=o.names.get(g),x=s.getGroup(f);if(y===void 0||!y.size||x.length===0)return"continue";var w="".concat(gr,".g").concat(f,'[id="').concat(g,'"]'),E="";y!==void 0&&y.forEach(function(h){h.length>0&&(E+="".concat(h,","))}),a+="".concat(x).concat(w,'{content:"').concat(E,'"}').concat(m0)},d=0;d<l;d++)c(d);return a}(i)})}return e.registerId=function(t){return Qi(t)},e.prototype.rehydrate=function(){!this.server&&Uo&&tc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(be(be({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Dm(i):r?new _m(i):new Pm(i)}(this.options),new Sm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Qi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Qi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lm=/&/g,Im=/^\s*\/\/.*$/gm;function o1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=o1(n.children,t)),n})}function zm(e){var t,n,r,i=vr,o=i.options,s=o===void 0?vr:o,l=i.plugins,a=l===void 0?ys:l,c=function(g,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},d=a.slice();d.push(function(g){g.type===ps&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Lm,n).replace(r,c))}),s.prefix&&d.push(lm),d.push(im);var f=function(g,y,x,w){y===void 0&&(y=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var E=g.replace(Im,""),h=nm(x||y?"".concat(x," ").concat(y," { ").concat(E," }"):E);s.namespace&&(h=o1(h,s.namespace));var p=[];return Bo(h,om(d.concat(sm(function(v){return p.push(v)})))),p};return f.hash=a.length?a.reduce(function(g,y){return y.name||Ti(15),qn(g,y.name)},Xd).toString():"",f}var Om=new Go,ua=zm(),s1=_t.createContext({shouldForwardProp:void 0,styleSheet:Om,stylis:ua});s1.Consumer;_t.createContext(void 0);function ca(){return N.useContext(s1)}var Rm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ua);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,v0(this,function(){throw Ti(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ua),this.name+t.hash},e}(),Am=function(e){return e>="A"&&e<="Z"};function rc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Am(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var l1=function(e){return e==null||e===!1||e===""},a1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!l1(o)&&(Array.isArray(o)&&o.isCss||yr(o)?r.push("".concat(rc(i),":"),o,";"):vi(o)?r.push.apply(r,gi(gi(["".concat(i," {")],a1(o),!1),["}"],!1)):r.push("".concat(rc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in am||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function an(e,t,n,r){if(l1(e))return[];if(g0(e))return[".".concat(e.styledComponentId)];if(yr(e)){if(!yr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return an(i,t,n,r)}var o;return e instanceof Rm?n?(e.inject(n,r),[e.getName(r)]):[e]:vi(e)?a1(e):Array.isArray(e)?Array.prototype.concat.apply(ys,e.map(function(s){return an(s,t,n,r)})):[e.toString()]}function u1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yr(n)&&!g0(n))return!1}return!0}var Fm=Jd(vs),Hm=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&u1(t),this.componentId=n,this.baseHash=qn(Fm,n),this.baseStyle=r,Go.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Sn(i,this.staticRulesId);else{var o=la(an(this.rules,t,n,r)),s=sa(qn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=Sn(i,s),this.staticRulesId=s}else{for(var a=qn(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var g=la(an(f,t,n,r));a=qn(a,g+d),c+=g}}if(c){var y=sa(a>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=Sn(i,y)}}return i},e}(),y0=_t.createContext(void 0);y0.Consumer;var tl={};function Vm(e,t,n){var r=g0(e),i=e,o=!el(e),s=t.attrs,l=s===void 0?ys:s,a=t.componentId,c=a===void 0?function(j,k){var $=typeof j!="string"?"sc":Ku(j);tl[$]=(tl[$]||0)+1;var C="".concat($,"-").concat(qd(vs+$+tl[$]));return k?"".concat(k,"-").concat(C):C}(t.displayName,t.parentComponentId):a,d=t.displayName,f=d===void 0?function(j){return el(j)?"styled.".concat(j):"Styled(".concat(hm(j),")")}(e):d,g=t.displayName&&t.componentId?"".concat(Ku(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;x=function(j,k){return w(j,k)&&E(j,k)}}else x=w}var h=new Hm(n,g,r?i.componentStyle:void 0);function p(j,k){return function($,C,T){var M=$.attrs,_=$.componentStyle,z=$.defaultProps,de=$.foldedComponentIds,je=$.styledComponentId,Ve=$.target,$t=_t.useContext(y0),ze=ca(),Be=$.shouldForwardProp||ze.shouldForwardProp,L=Yd(C,$t,z)||vr,R=function(Bt,Ue,Tt){for(var Sr,gn=be(be({},Ue),{className:void 0,theme:Tt}),ws=0;ws<Bt.length;ws+=1){var Ei=yr(Sr=Bt[ws])?Sr(gn):Sr;for(var Ut in Ei)gn[Ut]=Ut==="className"?Sn(gn[Ut],Ei[Ut]):Ut==="style"?be(be({},gn[Ut]),Ei[Ut]):Ei[Ut]}return Ue.className&&(gn.className=Sn(gn.className,Ue.className)),gn}(M,C,L),A=R.as||Ve,X={};for(var J in R)R[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&R.theme===L||(J==="forwardedAs"?X.as=R.forwardedAs:Be&&!Be(J,A)||(X[J]=R[J]));var mn=function(Bt,Ue){var Tt=ca(),Sr=Bt.generateAndInjectStyles(Ue,Tt.styleSheet,Tt.stylis);return Sr}(_,R),lt=Sn(de,je);return mn&&(lt+=" "+mn),R.className&&(lt+=" "+R.className),X[el(A)&&!Kd.has(A)?"class":"className"]=lt,X.ref=T,N.createElement(A,X)}(v,j,k)}p.displayName=f;var v=_t.forwardRef(p);return v.attrs=y,v.componentStyle=h,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?Sn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=g,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?function(k){for(var $=[],C=1;C<arguments.length;C++)$[C-1]=arguments[C];for(var T=0,M=$;T<M.length;T++)aa(k,M[T],!0);return k}({},i.defaultProps,j):j}}),v0(v,function(){return".".concat(v.styledComponentId)}),o&&r1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function ic(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var oc=function(e){return Object.assign(e,{isCss:!0})};function c1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yr(e)||vi(e))return oc(an(ic(ys,gi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?an(r):oc(an(ic(r,t)))}function da(e,t,n){if(n===void 0&&(n=vr),!t)throw Ti(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,c1.apply(void 0,gi([i],o,!1)))};return r.attrs=function(i){return da(e,t,be(be({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return da(e,t,be(be({},n),i))},r}var d1=function(e){return da(Vm,e)},B=d1;Kd.forEach(function(e){B[e]=d1(e)});var Bm=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=u1(t),Go.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(la(an(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Go.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Um(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=c1.apply(void 0,gi([e],t,!1)),i="sc-global-".concat(qd(JSON.stringify(r))),o=new Bm(r,i),s=function(a){var c=ca(),d=_t.useContext(y0),f=_t.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(f,a,c.styleSheet,d,c.stylis),_t.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,a,c.styleSheet,d,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,a,c.styleSheet,d,c.stylis]),null};function l(a,c,d,f,g){if(o.isStatic)o.renderStyles(a,cm,d,g);else{var y=be(be({},c),{theme:Yd(c,f,s.defaultProps)});o.renderStyles(a,y,d,g)}}return _t.memo(s)}const m={blue1:"#001332",blue2:"#001C49",blue3:"#0040A7",blue4:"#0051D2",blue5:"#0060FB",highlightBlue:"#0062ff",white:"#FFFFFF",valid:"#4EFF80",validDark:"#34AF57",invalid:"#FF4E4E",invalidDark:"#A83131",warning:"#FFE44E",warningDark:"#B19F36"},S={0:"00",3:"07",5:"0D",10:"1A",15:"26",20:"33",25:"40",30:"4D",35:"59",40:"66",45:"73",50:"80",55:"8C",60:"99",65:"A6",70:"B3",75:"BF",80:"CC",85:"D9",90:"E6",95:"F2",100:"FF"},O={shadowSmall:"0 2px 2px rgba(0, 0, 0, .15)",cardShadowSharp:"0 4px 6px rgba(0, 0, 0, .1)",cardShadowSoft:"0 0 20px rgba(0, 0, 0, .05)",innerShadowImprinted:"0 0 24px rgb(0, 28, 73) inset",outerGlowHover:`0 0 12px ${m.blue5+S[60]}`,outerGlowHoverValid:`0 0 12px ${m.valid+S[60]}`,outerGlowHoverInvalid:`0 0 12px ${m.invalid+S[60]}`,outerGlowHoverWarning:`0 0 12px ${m.warning+S[60]}`,outerGlowActive:`0 0 24px ${m.blue5+S[60]}`,outerGlowActiveValid:`0 0 24px ${m.valid+S[60]}`,outerGlowActiveInvalid:`0 0 24px ${m.invalid+S[60]}`,outerGlowActiveWarning:`0 0 24px ${m.warning+S[60]}`,fullGlowHover:`0 0 12px ${m.blue5+S[30]} inset, 0 0 12px ${m.blue5+S[30]}`,fullGlowHoverValid:`0 0 12px ${m.valid+S[30]} inset, 0 0 12px ${m.valid+S[30]}`,fullGlowHoverInvalid:`0 0 12px ${m.invalid+S[30]} inset, 0 0 12px ${m.invalid+S[30]}`,fullGlowHoverWarning:`0 0 12px ${m.warning+S[30]} inset, 0 0 12px ${m.warning+S[30]}`,fullGlowActive:`0 0 12px ${m.blue5+S[60]} inset, 0 0 24px ${m.blue5+S[60]}`,fullGlowActiveValid:`0 0 12px ${m.valid+S[60]} inset, 0 0 24px ${m.valid+S[60]}`,fullGlowActiveInvalid:`0 0 12px ${m.invalid+S[60]} inset, 0 0 24px ${m.invalid+S[60]}`,fullGlowActiveWarning:`0 0 12px ${m.warning+S[60]} inset, 0 0 24px ${m.warning+S[60]}`},Wm=Um`
  /* https://meyerweb.com/eric/tools/css/reset/ */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    color: ${m.white}
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* --------------------------------------------------------------- */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
    font-family: 'Lato', sans-serif;
    max-height: 100vh;
    max-width: 100vw;
    background-color: ${m.blue2};
    overflow-x: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(50% + ${({isMini:e})=>e?"4rem":"13rem"});
      height: 90%;
      aspect-ratio: 1/1;
      transform: translate(-50%, -50%);
      background-image: url(${"/easytrack/background-logo.svg"});
      background-size: contain;
      background-repeat: no-repeat;
      pointer-events: none;
      z-index: -1;
      ${({page:e})=>e==="welcome"||!e?"opacity: 0;":""}
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  h1, h2, h3 {
    width: 100%;
  }

  h1 {
    font-size: 10rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.6rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2.4rem;

    .button-group {
      display: flex;
      gap: 1rem;
      align-self: flex-end;
    }
  }

  input, textarea {
    width: 100%;
  }

  button {
    white-space: nowrap;
    vertical-align: middle;
    font-family: 'Lato', sans-serif;
  }

  label {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: ${m.white+S[60]};
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .box {
    /* Using pseudo element for background blur, otherwise nested elements would not be able to use blur as well */
    position: relative;
    border-radius: .8rem;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      var(--inner-color) 0,
      var(--outer-color) 35rem
    );

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: ${m.white+S[3]};
      border-top: 1px solid ${m.highlightBlue};
      border-radius: .8rem;
      box-shadow: ${O.cardShadowSharp}, ${O.cardShadowSoft};
      backdrop-filter: blur(20px);
      z-index: -1;
    }
  }

  @supports (-webkit-hyphens: none) and (not (overflow: -webkit-marquee)) {
    .box::before {
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      background-color: ${m.blue2+S[75]} !important;
    }
  }

  .warning {
    width: 100%;
    padding: .8rem 1.6rem;
    border: 1px solid ${m.warning+S[50]};
    border-radius: .8rem;
    background-color: ${m.warningDark+S[50]};
    text-align: center;
  }

  .icon {
    filter: drop-shadow(${O.shadowSmall});
    transition: color .25s, opacity .25s;
    cursor: pointer;

    &:hover {
      animation: .5s ease-out bobbing forwards;
    }
  }

  hr {
    height: .2rem;
    min-height: .2rem;
    border-width: 0;
    background: linear-gradient(to right, rgba(0, 96, 251, 0), rgba(0, 96, 251, .5), rgba(0, 96, 251, 0));    
  }

  .vr {
    min-height: 100%;
    min-width: .2rem;
    flex-shrink: 0;
    background: linear-gradient(to bottom, rgba(0, 96, 251, 0), rgba(0, 96, 251, .5), rgba(0, 96, 251, 0));
  }

  #notification {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 1003;
  }

  #modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002;
  }

  .priority-tag {
    display: inline-block;
    width: fit-content;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${m.white};
    padding: 0.4rem 1.2rem;
    background-color: ${m.white+S[10]};
    white-space: nowrap;
    text-transform: uppercase;
    border-top: 1px solid ${m.white+S[25]};
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    border-radius: 2rem;
    box-shadow: ${O.shadowSmall};

    &.low {
      background-color: ${m.valid+S[25]}
    }
    &.medium {
      background-color: ${m.warning+S[25]}
    }
    &.high {
      background-color: ${m.invalid+S[25]}
    }
  }

  // -------- animations --------
  @keyframes neon-flicker {
    0% {opacity: 0;}
    14% {opacity: 0;}
    15% {opacity: .33;}
    29% {opacity: .33;}
    30% {opacity: 0;}
    44% {opacity: 0;}
    45% {opacity: .66;}
    59% {opacity: .66;}
    60% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes bobbing {
    0% {transform: scale(1);}
    40% {transform: scale(1.4);}
    60% {transform: scale(1.2);}
    100% {transform: scale(1.3);}
  }

  @keyframes popIn {
    0% {opacity: 0; transform: scale(.98);}
    80% {opacity: 1; transform: scale(1.02);}
    100% {opacity: 1; transform: scale(1);}
  }

  @keyframes highlighter {
    0% {background-color: transparent;}
    40% {background-color: ${m.blue3+S[50]};}
    100% {background-color: transparent;}
  }

  @keyframes highlighterGreen {
    0% {background-color: transparent;}
    40% {background-color: ${m.valid+S[20]};}
    100% {background-color: transparent;}
  }

  @keyframes highlighterRed {
    0% {background-color: transparent;}
    40% {background-color: ${m.invalid+S[20]};}
    100% {background-color: transparent;}
  }

  @keyframes pulseShadow {
    from {box-shadow: 0 0 0 0 ${m.highlightBlue+S[25]}}
    to {box-shadow: 0 0 0 1.2rem ${m.highlightBlue+S[0]}}
  }

  @keyframes grow {
    0% {transform: scale(1);}
    100% {transform: scale(1.3);}
  }

  @keyframes gloss {
    0% {
      background: linear-gradient(45deg, transparent 35%, ${m.white+S[3]} 45%, ${m.white+S[3]} 55%, transparent 55%);
      background-size: 200%;
      background-position-x: 150%;
    }

    100% {
      background: linear-gradient(45deg, transparent 35%, ${m.white+S[3]} 45%, ${m.white+S[3]} 55%, transparent 55%);
      background-size: 200%;
      background-position-x: -50%;
    }
  }

  @keyframes fade-left {
    0% {
      opacity: 1;
    }

    100% {
      transform: translateX(-50%);
      opacity: 0;
    }
  }

  /* Scrollbar styling (Mozilla not supported) */
  ::-webkit-scrollbar {
    height: .8rem;
    width: .8rem;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${m.white+S[3]};
    border-top: 1px solid ${m.highlightBlue};
    border-radius: .8rem;
    box-shadow: 0 0 .8rem rgba(0, 96, 251, .6) inset;
    cursor: pointer;

    &:hover {
      border: 1px solid ${m.highlightBlue};
      box-shadow: 0 0 .8rem rgba(0, 96, 251, 1) inset;
    }
  }

  @-moz-document url-prefix() {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${m.white+S[25]} transparent;
    }  
  }
`;var f1={exports:{}},Gm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Zm=Gm,Qm=Zm;function p1(){}function h1(){}h1.resetWarningCache=p1;var Ym=function(){function e(r,i,o,s,l,a){if(a!==Qm){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:h1,resetWarningCache:p1};return n.PropTypes=n,n};f1.exports=Ym();var Km=f1.exports;const P=sc(Km),Xm=B.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 25rem;
  max-width: 35rem;
  padding: 1.6rem;
  color: ${m.white};
  background-color: ${m.white+S[3]};
  border-radius: 0.8rem;
  border: 1px solid
    ${({$state:e})=>{if(e==="success")return m.valid;if(e==="failed")return m.invalid;if(e==="warning")return m.warning;if(e==="default")return m.blue5}};

  box-shadow: ${({$state:e})=>{if(e==="success")return O.outerGlowActiveValid;if(e==="failed")return O.outerGlowActiveInvalid;if(e==="warning")return O.outerGlowActiveWarning;if(e==="default")return O.outerGlowActive}};
  backdrop-filter: blur(20px);
  cursor: pointer;
  transition: all 0.5s ease-out;

  ${({$exitAnimate:e})=>{if(e)return`opacity: 0;
      transform: translateX(100%);`}}

  @supports (-webkit-hyphens: none) and (not (overflow: -webkit-marquee)) {
    background-color: ${m.blue2+S[90]} !important;
  }

  @starting-style {
    opacity: 0;
    transform: translateY(-100%);
  }

  h4 {
    margin: 0;
    font-size: 2rem;
    line-height: 120%;
  }

  p {
    font-size: 1.6rem;
    line-height: 120%;
    white-space: pre-line;
  }

  progress {
    position: relative;
    height: 0.5rem;
    background-color: ${m.blue1};
    border-radius: 4px;
    overflow: hidden;
    margin-top: 0.5rem;
    width: 100%;

    &::-webkit-progress-bar {
      background-color: ${m.blue1};
    }

    &::-webkit-progress-value {
      background-color: ${({$state:e})=>{if(e==="success")return m.valid;if(e==="failed")return m.invalid;if(e==="warning")return m.warning;if(e==="default")return m.blue5}};
    }
  }
`;function m1({id:e,title:t,message:n,duration:r=5e3,state:i="default"}){const o=he(),[s,l]=N.useState(r),[a,c]=N.useState(!1),d=()=>{c(!0),setTimeout(()=>{o(F.removeNotification(e))},500)};return N.useEffect(()=>{const f=setInterval(()=>{l(x=>x-10)},10),g=setTimeout(()=>{c(!0)},r),y=setTimeout(()=>{o(F.removeNotification(e))},r+500);return()=>{clearInterval(f),clearTimeout(g),clearTimeout(y)}},[e,r,o]),u.jsxs(Xm,{$state:i,$exitAnimate:a,onClick:d,children:[u.jsx("h4",{children:t}),u.jsx("hr",{}),u.jsx("p",{children:n}),u.jsx("progress",{value:s,max:r})]})}m1.propTypes={id:P.string,title:P.string,message:P.string,state:P.string,duration:P.number};function Jm(){const e=W(t=>t.data.notifications);return l0.createPortal(u.jsx(u.Fragment,{children:e.map(t=>u.jsx(m1,{...t},t.id))}),document.getElementById("notification"))}const In=()=>e=>{e(D.setFormType(null)),e(D.setConfirmationType(null)),e(F.setTempData(null))},g1=e=>t=>{const n={projectId:e.projectId,taskId:e.id,time:e.time,trackedTime:0,status:"active",startedAt:G(),refTime:G()};t(F.addTracker(n)),t(F.addNotification({id:Q(),title:"Tracking started!",message:`The "${e.name}" task is being tracked.`}))},qm=(e,t)=>n=>{const r=_e(e);r.status="paused",r.trackedTime=t,n(F.replaceTracker(r))},e9=e=>t=>{const n=_e(e);n.status="active",n.refTime=G(),t(F.replaceTracker(n))},v1="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23%205L19%201L4%2015.5L1%2023L8%2020L23%205Z'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M18.219%200.21912C18.2886%200.149275%2018.3714%200.0938608%2018.4625%200.0560512C18.5536%200.0182415%2018.6513%20-0.0012207%2018.75%20-0.0012207C18.8486%20-0.0012207%2018.9463%200.0182415%2019.0374%200.0560512C19.1285%200.0938608%2019.2113%200.149275%2019.281%200.21912L23.781%204.71912C23.8508%204.78879%2023.9062%204.87155%2023.944%204.96267C23.9818%205.05379%2024.0013%205.15147%2024.0013%205.25012C24.0013%205.34877%2023.9818%205.44645%2023.944%205.53757C23.9062%205.62869%2023.8508%205.71145%2023.781%205.78112L8.78095%2020.7811C8.70898%2020.8526%208.62325%2020.9087%208.52895%2020.9461L1.02895%2023.9461C0.892657%2024.0007%200.743347%2024.014%200.599533%2023.9845C0.455718%2023.955%200.323724%2023.884%200.219914%2023.7802C0.116105%2023.6763%200.0450444%2023.5444%200.0155432%2023.4005C-0.013958%2023.2567%20-0.00060275%2023.1074%200.0539533%2022.9711L3.05395%2015.4711C3.09135%2015.3768%203.14748%2015.2911%203.21895%2015.2191L18.219%200.21912ZM16.8105%203.75012L20.25%207.18962L22.1895%205.25012L18.75%201.81062L16.8105%203.75012ZM19.1895%208.25012L15.75%204.81062L5.99995%2014.5606V15.0001H6.74995C6.94887%2015.0001%207.13963%2015.0791%207.28028%2015.2198C7.42094%2015.3604%207.49995%2015.5512%207.49995%2015.7501V16.5001H8.24995C8.44887%2016.5001%208.63963%2016.5791%208.78028%2016.7198C8.92094%2016.8604%208.99995%2017.0512%208.99995%2017.2501V18.0001H9.43945L19.1895%208.25012ZM4.54795%2016.0126L4.38895%2016.1716L2.09695%2021.9031L7.82845%2019.6111L7.98745%2019.4521C7.84438%2019.3987%207.72104%2019.3028%207.63393%2019.1774C7.54681%2019.0519%207.50007%2018.9029%207.49995%2018.7501V18.0001H6.74995C6.55104%2018.0001%206.36028%2017.9211%206.21962%2017.7805C6.07897%2017.6398%205.99995%2017.449%205.99995%2017.2501V16.5001H5.24995C5.09722%2016.5%204.94817%2016.4533%204.82272%2016.3661C4.69727%2016.279%204.60141%2016.1557%204.54795%2016.0126Z'%20fill='white'/%3e%3c/svg%3e",w0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='11'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M16.425%207.48799L16.455%207.45499C16.6649%207.2469%2016.9483%207.12979%2017.2439%207.12897C17.5395%207.12816%2017.8235%207.2437%2018.0346%207.45063C18.2457%207.65757%2018.3668%207.93925%2018.3719%208.2348C18.3769%208.53034%2018.2654%208.81599%2018.0615%209.02999L12.0735%2016.515C11.9706%2016.6256%2011.8465%2016.7144%2011.7086%2016.776C11.5706%2016.8376%2011.4217%2016.8708%2011.2706%2016.8736C11.1196%2016.8764%2010.9695%2016.8487%2010.8294%2016.7923C10.6893%2016.7358%2010.5619%2016.6517%2010.455%2016.545L6.48602%2012.5745C6.2873%2012.3612%206.17911%2012.0792%206.18426%2011.7877C6.1894%2011.4963%206.30747%2011.2182%206.51359%2011.0121C6.71971%2010.8059%206.99778%2010.6879%207.28924%2010.6827C7.58069%2010.6776%207.86276%2010.7858%208.07602%2010.9845L11.2155%2014.1255L16.425%207.48799Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.4853%2020.4853C18.2348%2022.7357%2015.1826%2024%2012%2024C8.8174%2024%205.76516%2022.7357%203.51472%2020.4853C1.26428%2018.2348%200%2015.1826%200%2012C0%208.8174%201.26428%205.76516%203.51472%203.51472C5.76516%201.26428%208.8174%200%2012%200C15.1826%200%2018.2348%201.26428%2020.4853%203.51472C22.7357%205.76516%2024%208.8174%2024%2012C24%2015.1826%2022.7357%2018.2348%2020.4853%2020.4853ZM4.57538%2019.4246C6.54451%2021.3938%209.21523%2022.5%2012%2022.5C14.7848%2022.5%2017.4555%2021.3938%2019.4246%2019.4246C21.3938%2017.4555%2022.5%2014.7848%2022.5%2012C22.5%209.21523%2021.3938%206.54451%2019.4246%204.57538C17.4555%202.60625%2014.7848%201.5%2012%201.5C9.21523%201.5%206.54451%202.60625%204.57538%204.57538C2.60625%206.54451%201.5%209.21523%201.5%2012C1.5%2014.7848%202.60625%2017.4555%204.57538%2019.4246Z'%20fill='white'/%3e%3c/svg%3e",x0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_359_2740)'%3e%3ccircle%20cx='12'%20cy='12'%20r='11'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M22.5%2012C22.5039%209.47336%2021.5928%207.03076%2019.935%205.124L5.124%2019.9365C6.64532%2021.2547%208.5135%2022.1078%2010.506%2022.3943C12.4985%2022.6807%2014.5313%2022.3883%2016.3624%2021.552C18.1934%2020.7157%2019.7454%2019.3706%2020.8336%2017.6771C21.9218%2015.9836%2022.5002%2014.013%2022.5%2012ZM4.065%2018.876L18.876%204.0635C16.8693%202.326%2014.2789%201.41302%2011.6262%201.50828C8.97353%201.60353%206.45534%202.69994%204.57839%204.57689C2.70144%206.45384%201.60503%208.97203%201.50978%2011.6247C1.41452%2014.2774%202.3275%2016.8693%204.065%2018.876ZM24%2012C24%2015.1826%2022.7357%2018.2348%2020.4853%2020.4853C18.2348%2022.7357%2015.1826%2024%2012%2024C8.8174%2024%205.76516%2022.7357%203.51472%2020.4853C1.26428%2018.2348%200%2015.1826%200%2012C0%208.8174%201.26428%205.76516%203.51472%203.51472C5.76516%201.26428%208.8174%200%2012%200C15.1826%200%2018.2348%201.26428%2020.4853%203.51472C22.7357%205.76516%2024%208.8174%2024%2012Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_359_2740'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",C0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.0001%204.5C13.621%204.50062%2015.1982%205.02639%2016.4953%205.99856C17.7923%206.97072%2018.7396%208.33696%2019.195%209.89262C19.6505%2011.4483%2019.5897%2013.1096%2019.0217%2014.6278C18.4538%2016.1461%2017.4092%2017.4394%2016.0446%2018.3142C14.6799%2019.1889%2013.0686%2019.598%2011.4519%2019.4801C9.8352%2019.3623%208.30022%2018.7238%207.07684%2017.6604C5.85346%2016.597%205.00754%2015.1658%204.66578%2013.5813C4.32401%2011.9968%204.5048%2010.3442%205.18107%208.871C5.25468%208.69189%205.25616%208.49126%205.1852%208.31108C5.11424%208.13091%204.97635%207.98516%204.80038%207.90435C4.6244%207.82353%204.42399%207.81391%204.24109%207.8775C4.05818%207.94109%203.90696%208.07295%203.81907%208.2455C3.00759%2010.0134%202.79072%2011.9966%203.20097%2013.8981C3.61121%2015.7996%204.62648%2017.5169%206.09469%2018.793C7.56289%2020.069%209.40501%2020.835%2011.3451%2020.9762C13.2852%2021.1175%2015.2188%2020.6263%2016.8564%2019.5764C18.4939%2018.5264%2019.7472%2016.9742%2020.4285%2015.1522C21.1098%2013.3301%2021.1824%2011.3364%2020.6355%209.46967C20.0886%207.6029%2018.9516%205.96357%2017.3948%204.79723C15.8381%203.63089%2013.9453%203.00033%2012.0001%203V4.5Z'%20fill='white'/%3e%3cpath%20d='M12%206.69889V0.800885C12%200.72963%2011.9797%200.659857%2011.9414%200.599737C11.9032%200.539617%2011.8486%200.491638%2011.7841%200.461419C11.7195%200.4312%2011.6477%200.419992%2011.5771%200.429106C11.5064%200.438221%2011.4398%200.467282%2011.385%200.512885L7.84504%203.46189C7.80283%203.49708%207.76888%203.54112%207.74558%203.59089C7.72228%203.64065%207.71021%203.69493%207.71021%203.74988C7.71021%203.80484%207.72228%203.85912%207.74558%203.90888C7.76888%203.95865%207.80283%204.00269%207.84504%204.03788L11.385%206.98689C11.4398%207.03249%2011.5064%207.06155%2011.5771%207.07066C11.6477%207.07978%2011.7195%207.06857%2011.7841%207.03835C11.8486%207.00813%2011.9032%206.96015%2011.9414%206.90003C11.9797%206.83991%2012%206.77014%2012%206.69889Z'%20fill='white'/%3e%3c/svg%3e",k0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.47046%201H15.5295V4.2937H19.6692V15.3042H18.9226V22.792H5.07739V15.3042H4.33081V4.2937H8.47046V1Z'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M9.75%201.5H14.25C14.4489%201.5%2014.6397%201.57902%2014.7803%201.71967C14.921%201.86032%2015%202.05109%2015%202.25V3.75H9V2.25C9%202.05109%209.07902%201.86032%209.21967%201.71967C9.36032%201.57902%209.55109%201.5%209.75%201.5ZM16.5%203.75V2.25C16.5%201.65326%2016.2629%201.08097%2015.841%200.65901C15.419%200.237053%2014.8467%200%2014.25%200L9.75%200C9.15326%200%208.58097%200.237053%208.15901%200.65901C7.73705%201.08097%207.5%201.65326%207.5%202.25V3.75H2.25C2.05109%203.75%201.86032%203.82902%201.71967%203.96967C1.57902%204.11032%201.5%204.30109%201.5%204.5C1.5%204.69891%201.57902%204.88968%201.71967%205.03033C1.86032%205.17098%202.05109%205.25%202.25%205.25H3.057L4.3365%2021.24C4.39684%2021.9918%204.73813%2022.6933%205.29241%2023.2048C5.84669%2023.7162%206.57329%2024.0002%207.3275%2024H16.6725C17.4267%2024.0002%2018.1533%2023.7162%2018.7076%2023.2048C19.2619%2022.6933%2019.6032%2021.9918%2019.6635%2021.24L20.943%205.25H21.75C21.9489%205.25%2022.1397%205.17098%2022.2803%205.03033C22.421%204.88968%2022.5%204.69891%2022.5%204.5C22.5%204.30109%2022.421%204.11032%2022.2803%203.96967C22.1397%203.82902%2021.9489%203.75%2021.75%203.75H16.5ZM19.437%205.25L18.168%2021.12C18.1378%2021.4959%2017.9672%2021.8466%2017.69%2022.1024C17.4129%2022.3581%2017.0496%2022.5001%2016.6725%2022.5H7.3275C6.9504%2022.5001%206.5871%2022.3581%206.30996%2022.1024C6.03282%2021.8466%205.86217%2021.4959%205.832%2021.12L4.563%205.25H19.437ZM8.2065%206.75C8.405%206.73853%208.59993%206.80634%208.74845%206.93855C8.89696%207.07075%208.9869%207.25651%208.9985%207.455L9.7485%2020.205C9.75638%2020.4012%209.68702%2020.5926%209.55533%2020.7382C9.42363%2020.8838%209.24009%2020.972%209.04411%2020.9838C8.84814%2020.9955%208.65536%2020.93%208.50716%2020.8012C8.35897%2020.6725%208.26718%2020.4907%208.2515%2020.295L7.5%207.545C7.49391%207.44647%207.50733%207.34771%207.5395%207.25437C7.57166%207.16104%207.62193%207.07498%207.68743%207.00112C7.75293%206.92726%207.83236%206.86705%207.92118%206.82396C8.01%206.78087%208.10645%206.75573%208.205%206.75H8.2065ZM15.7935%206.75C15.8921%206.75573%2015.9885%206.78087%2016.0773%206.82396C16.1661%206.86705%2016.2456%206.92726%2016.3111%207.00112C16.3766%207.07498%2016.4268%207.16104%2016.459%207.25437C16.4912%207.34771%2016.5046%207.44647%2016.4985%207.545L15.7485%2020.295C15.7445%2020.3947%2015.7207%2020.4925%2015.6784%2020.5829C15.6361%2020.6732%2015.5762%2020.7542%2015.5022%2020.8211C15.4282%2020.888%2015.3417%2020.9395%2015.2475%2020.9726C15.1534%2021.0056%2015.0537%2021.0195%2014.9541%2021.0135C14.8545%2021.0076%2014.7572%2020.9818%2014.6677%2020.9377C14.5782%2020.8936%2014.4984%2020.8321%2014.433%2020.7568C14.3676%2020.6815%2014.3178%2020.594%2014.2866%2020.4992C14.2555%2020.4044%2014.2435%2020.3044%2014.2515%2020.205L15.0015%207.455C15.0131%207.25651%2015.103%207.07075%2015.2516%206.93855C15.4001%206.80634%2015.595%206.73853%2015.7935%206.75ZM12%206.75C12.1989%206.75%2012.3897%206.82902%2012.5303%206.96967C12.671%207.11032%2012.75%207.30109%2012.75%207.5V20.25C12.75%2020.4489%2012.671%2020.6397%2012.5303%2020.7803C12.3897%2020.921%2012.1989%2021%2012%2021C11.8011%2021%2011.6103%2020.921%2011.4697%2020.7803C11.329%2020.6397%2011.25%2020.4489%2011.25%2020.25V7.5C11.25%207.30109%2011.329%207.11032%2011.4697%206.96967C11.6103%206.82902%2011.8011%206.75%2012%206.75Z'%20fill='white'/%3e%3c/svg%3e",t9=B.span`
  display: inline-block;
  width: fit-content;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${m.white};
  padding: 0.4rem 1.2rem;
  background-color: ${m.white+S[10]};
  white-space: nowrap;

  border-top: 1px solid ${m.white+S[25]};
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
  border-radius: 2rem;
  box-shadow: ${O.shadowSmall};

  &.active {
    background-color: ${m.blue3};
    border: 1px solid #3784fe;
    box-shadow: ${O.fullGlowActive};
  }

  &.paused {
    background-color: ${m.white+S[25]};
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
  }
`;function vt({value:e,addition:t,...n}){const[r,i]=N.useState(e);N.useEffect(()=>{if(t){let s=t/1e3,l=Math.floor(s/3600),a=Math.floor(s%3600/60),c=Math.floor(s%3600%60);if(l){let d=0,f=setInterval(()=>{d<l?(i(g=>g+36e5),d++):clearInterval(f)},1e3/l)}if(a){let d=0,f=setInterval(()=>{d<a?(i(g=>g+6e4),d++):clearInterval(f)},1e3/a)}if(c){let d=0,f=setInterval(()=>{d<c?(i(g=>g+1e3),d++):clearInterval(f)},1e3/c)}}},[e,t]);let o;return t?o=Oo(r):o=Oo(e),u.jsx(t9,{...n,children:o})}vt.propTypes={value:P.number,addition:P.number};const n9=B.button`
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  padding: 0.7rem 1.6rem;
  color: ${m.white};
  border: 1px solid ${m.white+S[25]};
  border-radius: 0.8rem;
  transition: 0.25s ease-out;

  height: fit-content;
  line-height: 1;
  text-shadow: ${O.shadowSmall};
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid ${m.highlightBlue};
    box-shadow: ${O.fullGlowHover};
  }

  &:active {
    background-color: ${m.blue3};
    box-shadow: ${O.fullGlowActive};
  }

  &.active {
    background-color: ${m.blue3};

    &:hover,
    &:focus,
    &:focus-visible {
      box-shadow: ${O.fullGlowHover};
    }

    &:active {
      background-color: ${m.blue3};
      box-shadow: ${O.fullGlowActive};
    }
  }

  &.confirm {
    background-color: ${m.validDark+S[50]};

    &:hover,
    &:focus,
    &:focus-visible {
      border: 1px solid ${m.valid+S[50]};
      box-shadow: ${O.fullGlowHoverValid};
    }

    &:active {
      background-color: ${m.validDark+S[50]};
      box-shadow: ${O.fullGlowActiveValid};
    }
  }

  &.delete {
    background-color: ${m.invalidDark+S[50]};

    &:hover,
    &:focus,
    &:focus-visible {
      border: 1px solid ${m.invalid+S[50]};
      box-shadow: ${O.fullGlowHoverInvalid};
    }

    &:active {
      background-color: ${m.invalidDark+S[50]};
      box-shadow: ${O.fullGlowActiveInvalid};
    }
  }

  &:disabled {
    pointer-events: none;
    color: ${m.white+S[25]};
  }
`;function ve({children:e,...t}){return u.jsx(n9,{...t,children:e})}ve.propTypes={children:P.any};const r9=B.div`
  position: relative;
  align-items: center;
  display: flex;
  gap: 1.6rem;
  padding: 0.6rem 0.8rem 0.6rem 3.2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    height: 0.8rem;
    width: 0.8rem;
    background-color: ${m.white};
    border-radius: 0.8rem;
  }

  span {
    font-size: 1.6rem;
    white-space: nowrap;

    &:last-of-type {
      margin-left: auto;
      font-size: 1.4rem;
    }
  }
`;function y1({log:e}){return u.jsxs(r9,{children:[u.jsx("span",{children:U(e.start,"dd.mm.yyyy.")}),u.jsxs("span",{children:["start: ",U(e.start,"hh:mm:ss")]}),u.jsxs("span",{children:["end: ",U(e.end,"hh:mm:ss")]}),u.jsx(vt,{value:e.time})]})}y1.propTypes={log:P.object};const i9=B.div`
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      line-height: 3.2rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &-icons {
      display: flex;
      gap: 0.8rem;
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .info {
      display: flex;
      gap: 1rem;

      .dates {
        display: flex;
        gap: 1.2rem;
        width: 100%;

        span {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          line-height: 1.6rem;
          font-size: 1.4rem;
        }
      }

      .tags {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .task-description {
      font-size: 1.6rem;
      line-height: 150%;
      white-space: pre-line;
    }

    .task-logs {
      position: relative;
      display: flex;
      flex-direction: column;
      max-height: 300px;
      overflow: auto;

      & > div:nth-of-type(odd) {
        background-color: ${m.white+S[3]};
      }
    }
  }
`;function w1({onClose:e}){const t=he(),n=W(g=>g.data.tempData),r=W(g=>g.data.trackers.some(y=>y.taskId===n.id)),i=W(g=>g.projects.find(y=>y.id===n.projectId).status!=="active"),o=()=>{t(g1(n)),t(In())},s=()=>{t(D.setFormType("edit-task")),t(D.setActionOrigin("details"))},l=()=>{t(D.setFormType("confirmation")),t(D.setConfirmationType("finish-task")),t(D.setActionOrigin("details"))},a=()=>{t(D.setFormType("confirmation")),t(D.setConfirmationType("discard-task")),t(D.setActionOrigin("details"))},c=()=>{t(D.setFormType("confirmation")),t(D.setConfirmationType("restore-task")),t(D.setActionOrigin("details"))},d=()=>{t(D.setFormType("confirmation")),t(D.setConfirmationType("remove-task")),t(D.setActionOrigin("details"))},f=()=>{t(D.changePage("trackers")),t(In())};return u.jsxs(i9,{className:"form",children:[u.jsxs("div",{className:"card-header",children:[u.jsx("h2",{children:n.name}),u.jsxs("div",{className:"card-header-icons",children:[n.status==="active"&&u.jsxs(u.Fragment,{children:[u.jsx("img",{className:"icon",src:v1,alt:"Pencil icon",onClick:s}),r?u.jsx("img",{className:"icon",src:"/easytrack/stopwatch.svg",alt:"Stopwatch icon",onClick:f}):u.jsxs(u.Fragment,{children:[u.jsx("img",{className:"icon",src:w0,alt:"Check icon",onClick:l}),u.jsx("img",{className:"icon",src:x0,alt:"Discard icon",onClick:a})]})]}),n.status==="discarded"&&!i&&u.jsx(u.Fragment,{children:u.jsx("img",{className:"icon",src:C0,alt:"Undo icon",onClick:c})}),(n.status==="discarded"||n.status==="finished")&&u.jsx(u.Fragment,{children:u.jsx("img",{className:"icon",src:k0,alt:"Trash icon",onClick:d})})]})]}),u.jsx("hr",{}),u.jsxs("div",{className:"card-body",children:[u.jsxs("div",{className:"info",children:[u.jsxs("div",{className:"dates",children:[u.jsxs("span",{children:[u.jsx("label",{children:"Created:"}),U(n.dateCreated,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(n.dateCreated,"hh:mm:ss")," )"]}),n.dateModified&&u.jsxs("span",{children:[u.jsx("label",{children:"Modified:"})," ",U(n.dateModified,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(n.dateModified,"hh:mm:ss")," )"]}),n.dateFinished&&u.jsxs("span",{children:[u.jsx("label",{children:"Finished:"})," ",U(n.dateFinished,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(n.dateFinished,"hh:mm:ss")," )"]}),n.dateDiscarded&&u.jsxs("span",{children:[u.jsx("label",{children:"Discarded:"})," ",U(n.dateDiscarded,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(n.dateDiscarded,"hh:mm:ss")," )"]}),n.deadline&&u.jsxs("span",{children:[u.jsx("label",{children:"Deadline: "}),U(n.deadline,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(n.deadline,"hh:mm:ss")," )"]})]}),u.jsxs("div",{className:"tags",children:[u.jsx(vt,{value:n.time}),!i&&u.jsx("span",{className:`priority-tag ${n.priority}`,children:n.priority})]})]}),u.jsx("p",{className:"task-description",children:n.description}),u.jsx("div",{className:"task-logs",children:n.trackLogs.map((g,y)=>u.jsx(y1,{log:g},n.id+y))})]}),u.jsx("hr",{}),u.jsxs("div",{className:"button-group",children:[u.jsx(ve,{type:"button",onClick:e,children:"Close"}),n.status==="active"&&!r&&u.jsx(ve,{className:"active",type:"button",autoFocus:!0,onClick:o,children:"Start tracking"})]})]})}w1.propTypes={onClose:P.func};const o9=B.input`
  position: relative;
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  padding: 0.7rem 0.8rem;
  color: ${m.white};
  border: 1px solid ${m.white+S[25]};
  border-radius: 0.8rem;
  transition: 0.25s ease-out;

  height: 3.2rem;
  background-color: ${m.white+S[5]};
  box-shadow: ${O.shadowSmall};

  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid ${m.highlightBlue};
    box-shadow: ${O.fullGlowHover};
    outline: none;
  }

  &:disabled {
    color: ${m.white+S[25]};
    border: none;
    box-shadow: none;
  }

  &.valid {
    border-color: ${m.valid};
  }

  &.invalid {
    border-color: ${m.invalid};
  }

  &[type='date'],
  &[type='datetime-local'] {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0.8rem;
      height: 1.6rem;
      width: 1.6rem;
      transform: translateY(50%);
      background-image: url(${({$validValue:e})=>"/easytrack/"+(e?"calendar-checked.svg":"calendar.svg")});
      background-size: contain;
      background-repeat: no-repeat;
      pointer-events: none;
    }

    &::-webkit-calendar-picker-indicator {
      opacity: 0;
    }
  }
`;function yi(e){return u.jsx(o9,{...e,$validValue:e.type==="datetime-local"&&e.value})}yi.propTypes={type:P.string,value:P.string};const s9=B.form`
  span {
    font-weight: bold;
    &.red {
      color: ${m.invalid};
    }
  }

  p {
    line-height: 2rem;
  }
`;function x1({type:e,onClose:t}){const n=he(),r=W(c=>c.data.tempData),[i,o]=N.useState("");let s=!1;e==="remove-project"?s=i==="DELETE-PROJECT":e==="remove-task"&&(s=i==="DELETE-TASK");const l=c=>{o(c.target.value)},a=c=>{c.preventDefault(),e==="finish-project"?n(M5(r)):e==="discard-project"?n(L5(r)):e==="remove-project"?n(I5(r)):e==="restore-project"?n(z5(r)):e==="finish-task"?n(A5(r)):e==="discard-task"?n(F5(r)):e==="remove-task"?n(H5(r)):e==="restore-task"&&n(V5(r)),n(In())};return u.jsxs(s9,{className:"form",onSubmit:a,children:[u.jsxs("h2",{children:[e==="finish-project"&&"Sweet, sweet victory!",e==="finish-task"&&"Stepping stone to success!",(e==="discard-project"||e==="discard-task")&&"Are you sure?",(e==="restore-project"||e==="restore-task")&&"Change of mind?",(e==="remove-project"||e==="remove-task")&&"This is permanent!"]}),u.jsx("hr",{}),e==="finish-project"&&u.jsxs("p",{children:['Finish the project "',u.jsx("span",{children:r.name}),'"?',u.jsx("br",{}),"Any remaining active tasks will be finished."]}),e==="finish-task"&&u.jsxs("p",{children:['Finish the task "',u.jsx("span",{children:r.name}),'"?']}),e==="discard-project"&&u.jsxs("p",{children:['Discard the project "',u.jsx("span",{children:r.name}),'"?',u.jsx("br",{}),"Any remaining active tasks will be discarded."]}),e==="discard-task"&&u.jsxs("p",{children:['Discard the task "',u.jsx("span",{children:r.name}),'"?']}),e==="restore-project"&&u.jsxs("p",{children:['Restore the project "',u.jsx("span",{children:r.name}),'"?']}),e==="restore-task"&&u.jsxs("p",{children:['Restore the task "',u.jsx("span",{children:r.name}),'"?']}),e==="remove-project"&&u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:['Permanently delete the project "',u.jsx("span",{children:r.name}),'"?',u.jsx("br",{}),'Type "',u.jsx("span",{className:"red",children:"DELETE-PROJECT"}),'" to confirm this action.']}),u.jsx(yi,{value:i,onChange:l})]}),e==="remove-task"&&u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:['Permanently delete the task "',u.jsx("span",{children:r.name}),'"?',u.jsx("br",{}),'Type "',u.jsx("span",{className:"red",children:"DELETE-TASK"}),'" to confirm this action.']}),u.jsx(yi,{value:i,onChange:l})]}),u.jsx("hr",{}),u.jsxs("div",{className:"button-group",children:[u.jsx(ve,{type:"button",onClick:t,children:"No"}),(e==="restore-project"||e==="restore-task")&&u.jsxs(ve,{className:"active",type:"submit",autoFocus:!0,children:["Restore the ",e==="restore-project"?"project":"task"]}),e!=="restore-project"&&e!=="restore-task"&&e!=="remove-project"&&e!=="remove-task"&&u.jsxs(ve,{className:`${e==="finish-task"||e==="finish-project"?"confirm":"delete"}`,type:"submit",autoFocus:!0,children:[e==="finish-task"&&"Finish the task",e==="discard-task"&&"Discard the task",e==="finish-project"&&"Finish the project",e==="discard-project"&&"Discard the project"]}),s&&u.jsxs(ve,{className:`${e==="finish-task"||e==="finish-project"?"confirm":"delete"}`,type:"submit",autoFocus:!0,children:[e==="remove-task"&&"Delete the task",e==="remove-project"&&"Delete the project"]})]})]})}x1.propTypes={type:P.string,onClose:P.func};const l9=B.div`
  width: 100%;

  label.error {
    color: ${m.invalid};
  }
`;function kt({id:e,label:t,error:n,children:r}){const i=N.useId(),o=e||i,s=N.cloneElement(r,{id:e,className:n?"invalid":""});return u.jsxs(l9,{children:[t&&u.jsx("label",{htmlFor:o,className:n?"error":"",children:n||t}),s]})}kt.propTypes={id:P.string,label:P.string,error:P.string,children:P.object};const a9=B.div`
  position: relative;

  .head {
    position: relative;
    font-size: 1.6rem;
    padding: 0.7rem 2.4rem 0.7rem 0.8rem;
    color: ${m.white};
    border: 1px solid ${m.white+S[25]};
    border-radius: 0.8rem;
    background-color: ${m.white+S[5]};
    box-shadow: ${O.shadowSmall};
    transition: 0.25s ease-out;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      top: 0.7rem;
      right: 0.8rem;
      height: 1.6rem;
      width: 1.6rem;
      background-image: url(${"/easytrack/chevron-bold.svg"});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: transform 0.25s ease-out;
    }

    span {
      display: block;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .body {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 14.8rem;
    width: 100%;
    border: 1px solid ${m.white+S[25]};
    border-top: 0;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    background-color: ${m.white+S[5]};
    backdrop-filter: blur(20px);
    z-index: 1;
    opacity: 0;
    transition: 0.25s ease-out;

    &.visible {
      opacity: 1;
    }

    input {
      height: 2.4rem;
      padding: 0.4rem 0.8rem;
      font-size: 1.4rem;
      color: ${m.white+S[75]};
      border: none;
      background-color: transparent;
      box-shadow: ${O.shadowSmall};

      &::placeholder {
        color: ${m.white+S[50]};
      }

      &:focus {
        outline: none;
      }
    }

    .list {
      max-height: 12rem;

      &.scrollable {
        overflow-y: scroll;
      }

      & > div {
        padding: 0.4rem 0.8rem;
        font-size: 1.6rem;
        cursor: pointer;
        transition: background-color 0.25s ease-out;

        &:hover {
          background-color: ${m.white+S[3]};
        }

        &.selected {
          background-color: ${m.blue5+S[20]};
        }
      }
    }
  }

  &:hover,
  &:focus-visible,
  &:focus-within {
    .head {
      border: 1px solid ${m.highlightBlue};
      box-shadow: ${O.fullGlowHover};
      outline: none;
    }

    .body {
      border: 1px solid ${m.highlightBlue};
      border-top: 0;
      box-shadow: ${O.fullGlowHover};
    }
  }

  &.open {
    .head {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      &:after {
        transform: rotate(180deg);
      }
    }

    .body {
      display: block;
    }
  }

  &.disabled {
    pointer-events: none;

    .head {
      border: none;
      box-shadow: none;

      &::after {
        opacity: 0.25;
      }
      span {
        color: ${m.white+S[25]};
      }
    }
  }

  &.valid {
    .head {
      border-color: ${m.valid};
    }
  }

  &.invalid {
    .head {
      border-color: ${m.invalid};
    }
  }

  select {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: 0;
    padding: 0;
    opacity: 0;
    clip: rect(0 0 0 0);
    pointer-events: none;
  }
`;function wi({options:e,initial:t="",className:n="",disabled:r,...i}){const[o,s]=N.useState(""),[l,a]=N.useState(""),[c,d]=N.useState(typeof t=="object"?t.value:t),[f,g]=N.useState(typeof t=="object"?t.text:t),[y,x]=N.useState(""),w=N.useRef(null),E=()=>{o?(a(""),setTimeout(()=>{s(""),x(""),w.current.scrollTo(0,0)},250)):(s("open"),setTimeout(()=>{a("visible")},10))},h=C=>{x(C.target.value)},p=C=>{g(C.target.textContent),d(C.target.dataset.value),E()},v=e.filter(C=>{if(typeof C=="string")return C.toLowerCase().includes(y.toLowerCase());if(typeof C=="object")return C.text.toLowerCase().includes(y.toLowerCase())}),j=v.map(C=>{if(typeof C=="string")return u.jsx("div",{className:f===C?"selected":"",onClick:p,"data-value":C,children:C},Q());if(typeof C=="object")return u.jsx("div",{className:f===C.text?"selected":"",onClick:p,"data-value":C.value,children:C.text},Q())}),k=e.map(C=>{if(typeof C=="string")return u.jsx("option",{value:C,children:C},Q());if(typeof C=="object")return u.jsx("option",{value:C.value,children:C.text},Q())}),$=v.length>5?"scrollable":"";return u.jsxs(a9,{className:`${n} ${o} ${r?"disabled":""}`,children:[u.jsx("div",{className:"head",onClick:E,tabIndex:r?-1:0,children:u.jsx("span",{children:f||"Please select"})}),u.jsxs("div",{className:`body ${l}`,children:[e.length>=10&&u.jsx("input",{type:"text",placeholder:"Search...",spellCheck:"false",value:y,onChange:h}),u.jsx("div",{ref:w,className:`list ${$}`,children:j})]}),u.jsxs("select",{value:c,readOnly:!0,disabled:r,tabIndex:-1,...i,children:[!t&&u.jsx("option",{disabled:!0,hidden:!0,value:"",children:"Please select"}),k]})]})}wi.propTypes={options:P.array.isRequired,initial:P.oneOfType([P.string,P.object]),className:P.string,disabled:P.bool};const u9=B.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      width: 100%;
      font-size: 1.2rem;

      &:first-of-type {
        text-align: left;
      }

      &.value {
        text-align: center;
        font-weight: bold;
      }

      &:last-of-type {
        text-align: right;
      }
    }
  }

  input[type='range'] {
    appearance: none;
    height: 0.4rem;
    background-color: ${m.blue3+S[3]};
    border-radius: 0.4rem;
    outline: none;
    box-shadow: 0 0 0.4rem ${m.blue1} inset;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 1.6rem;
      height: 1.6rem;
      border: 1px solid ${m.white+S[25]};
      border-radius: 50%;
      background-color: ${m.white+S[50]};
      box-shadow: ${O.shadowSmall};
      backdrop-filter: blur(1px);
      cursor: grab;
    }

    &::-moz-range-thumb {
      appearance: none;
      width: 1.6rem;
      height: 1.6rem;
      border: 1px solid ${m.white+S[25]};
      border-radius: 50%;
      background-color: ${m.white+S[50]};
      box-shadow: ${O.shadowSmall};
      backdrop-filter: blur(1px);
      cursor: grab;
    }

    &:hover {
      &::-webkit-slider-thumb {
        box-shadow: 0 0 12px ${m.blue5+S[30]} inset;
      }
    }
  }
`;function fa({min:e,max:t,value:n,onChange:r,...i}){return u.jsxs(u9,{children:[u.jsxs("div",{children:[u.jsx("span",{children:e}),u.jsx("span",{className:"value",children:n}),u.jsx("span",{children:t})]}),u.jsx("input",{type:"range",min:e,max:t,value:n,onChange:r,...i})]})}fa.propTypes={min:P.number,max:P.number,value:P.number,onChange:P.func};function C1({onClose:e}){const t=he(),n=W(f=>f.ui.timeline),[r,i]=N.useState(n.startAt),[o,s]=N.useState(n.endAt),l=f=>{f.preventDefault();const g=new FormData(f.target),y=Object.fromEntries(g.entries());y.startAt=+y.startAt,y.endAt=+y.endAt,t(D.setTimeline(y)),Tn("timeline",y),t(In())},a=f=>{i(+f.target.value)},c=f=>{s(+f.target.value)},d=[{value:"days-full",text:"Days full ( Monday, Tuesday etc. )"},{value:"days-short",text:"Days short ( Mon, Tue etc. )"},{value:"dates-full",text:"Dates full ( DD.MM.YYYY )"},{value:"dates-short",text:"Dates short ( DD.MM. )"}];return u.jsxs("form",{className:"form",onSubmit:l,children:[u.jsx("h2",{children:"Timeline Settings"}),u.jsx("hr",{}),u.jsx(kt,{label:"Clock type",children:u.jsx(wi,{name:"clockType",options:["12h","24h"],initial:n.clockType})}),u.jsx(kt,{label:"Start at",children:u.jsx(fa,{name:"startAt",min:0,max:24,value:r,onChange:a})}),u.jsx(kt,{label:"End at",children:u.jsx(fa,{name:"endAt",min:0,max:24,value:o,onChange:c})}),u.jsx(kt,{label:"Row label",children:u.jsx(wi,{name:"rowLabel",options:d,initial:d.find(f=>f.value===n.rowLabel)})}),u.jsx("hr",{}),u.jsxs("div",{className:"button-group",children:[u.jsx(ve,{type:"button",onClick:e,children:"Close"}),u.jsx(ve,{className:"active",type:"submit",children:"Save changes"})]})]})}C1.propTypes={onClose:P.func};function nl(e,t){const[n,r]=N.useState(e),i=t(n);return{value:n,handleChange:s=>{r(s.target.value)},invalid:!i}}const rl=e=>e.trim()!=="",c9=(e,t,n=null)=>{const i=new Date(e).getTime(),o=i<G();if(t==="project")return n?!o&&i>n:!o;if(t==="task")return n?!o&&i<n:!o},d9=B.textarea`
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  padding: 0.7rem 0.8rem;
  color: ${m.white};
  border: 1px solid ${m.white+S[25]};
  border-radius: 0.8rem;
  transition: 0.25s ease-out;

  resize: vertical;
  min-height: 10rem;
  max-height: 40rem;
  outline: none;
  background-color: ${m.white+S[5]};

  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid ${m.highlightBlue};
    box-shadow: ${O.fullGlowHover};
    outline: none;
  }

  &:disabled {
    color: ${m.white+S[25]};
    border: none;
    box-shadow: none;
  }

  &.valid {
    border-color: ${m.valid};
  }

  &.invalid {
    border-color: ${m.invalid};
  }
`;function f9(e){return u.jsx(d9,{...e})}function k1({onClose:e}){const t=he(),n=W(C=>C.ui.formType),r=W(C=>C.data.tempData),i=W(C=>C.projects),[o,s]=N.useState(!1),[l,a]=n.split("-");let c=null;if(a==="task"){let C=i.find(T=>T.id===(l==="new"?r:r.projectId));c=C.deadline?C.deadline:null}else a==="project"&&l==="edit"&&(c=i.find(M=>M.id===r.id).tasks.reduce((M,_)=>_.deadline!==void 0&&_.status==="active"&&_.deadline>M?_.deadline:M,null));const{value:d,handleChange:f,invalid:g}=nl(l==="edit"&&(r!=null&&r.name)?r.name:"",C=>rl(C)),{value:y,handleChange:x,invalid:w}=nl(l==="edit"&&(r!=null&&r.deadline)?U(r.deadline,"yyyy-mm-ddThh:mm:ss"):"",C=>c9(C,a,c)||!rl(C)),{value:E,handleChange:h,invalid:p}=nl(l==="edit"&&(r!=null&&r.description)?r.description:"",C=>rl(C)),v=C=>{C.target.closest("form").reset(),e()},j=C=>{if(C.preventDefault(),s(!0),g||w||p){setTimeout(()=>{s(!1)},5e3);return}const T=new FormData(C.target),M=Object.fromEntries(T.entries()),_=_e(r);M.deadline?M.deadline=U(M.deadline,"ms"):(_&&delete _.deadline,delete M.deadline),a==="project"?(l==="new"?t(P5(M)):l==="edit"&&t(D5({..._,...M})),t(In())):a==="task"&&(l==="new"?(t(O5(M)),t(In())):l==="edit"&&(t(R5({..._,...M})),t(D.setFormType("task-details")))),t(D.setActionOrigin(null)),C.target.reset()};let k,$;return a==="task"&&l==="new"&&(k=i.filter(T=>T.status==="active").map(T=>({text:T.name,value:T.id})),$=k.find(T=>T.value===r)),u.jsxs("form",{className:"form",onSubmit:j,children:[u.jsxs("h2",{children:[l==="new"?"New":"Edit",a==="project"?" project":" task",":"]}),u.jsx("hr",{}),a==="task"&&l==="new"&&u.jsx(kt,{label:"Project",children:u.jsx(wi,{name:"projectId",options:k,initial:$})}),u.jsx(kt,{label:"Name",error:g&&o?"Please fill this field":"",children:u.jsx(yi,{name:"name",value:d,onChange:f,autoFocus:!0})}),u.jsx(kt,{label:"Deadline (optional)",error:w&&o?"The date must not be in the past or later than the project deadline":"",children:u.jsx(yi,{name:"deadline",type:"datetime-local",value:y,onChange:x})}),u.jsx(kt,{label:"Priority",children:u.jsx(wi,{name:"priority",options:["low","medium","high"],initial:r&&typeof r=="object"?r.priority:"low"})}),u.jsx(kt,{label:"Description",error:p&&o?"Please fill this field":"",children:u.jsx(f9,{rows:5,name:"description",value:E,onChange:h})}),u.jsx("hr",{}),u.jsxs("div",{className:"button-group",children:[u.jsx(ve,{type:"button",onClick:v,children:"Close"}),u.jsxs(ve,{className:"active",type:"submit",children:[l==="new"?"Create":"Edit",a==="project"?" Project":" Task"]})]})]})}k1.propTypes={onClose:P.func};const p9=B.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 28, 73, 0.5);
  backdrop-filter: blur(20px);
  z-index: 1;
`,h9=B.div`
  &.fixed {
    position: fixed;
  }

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${O.cardShadowSharp}, ${O.cardShadowSoft};
  z-index: 2;
  min-width: 50rem;
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  background-clip: padding-box;
`;function m9(){const e=he(),t=W(c=>c.ui.formType),n=W(c=>c.ui.confirmationType),r=W(c=>c.ui.actionOrigin),i=N.useCallback(()=>{t!==null&&(r==="details"?(e(D.setFormType("task-details")),e(D.setActionOrigin(null))):e(In()))},[t,r,e]),o=c=>{Ht(c,m.white+S[3],"transparent")},s=c=>{Vt(c,"transparent")};let l;t==="new-project"||t==="edit-project"||t==="new-task"||t==="edit-task"?l=u.jsx(k1,{onClose:i}):t==="task-details"?l=u.jsx(w1,{onClose:i}):t==="timeline-settings"?l=u.jsx(C1,{onClose:i}):t==="confirmation"&&(l=u.jsx(x1,{type:n,onClose:i}));const a=t!==null;return N.useEffect(()=>{const c=d=>{d.key==="Escape"&&a&&i()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[a,i,e]),a?l0.createPortal(u.jsxs(u.Fragment,{children:[u.jsx(p9,{onClick:i}),u.jsx(h9,{className:"box fixed",onMouseMove:o,onMouseLeave:s,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title","aria-describedby":"modal-description",children:l})]}),document.getElementById("modal")):null}const g9="/easytrack/assets/logo-full-ibM1iglr.svg",v9="/easytrack/assets/logo-symbol-BRA1Bjhj.svg",y9="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.9336%2010.9857L12%202.80029L4.06641%2010.9857H4.2618V21.2701H19.6884V10.9857H19.9336Z'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M13.0605%202.24997C12.7792%201.96876%2012.3977%201.81079%2012%201.81079C11.6022%201.81079%2011.2208%201.96876%2010.9395%202.24997L0.968971%2012.219C0.899239%2012.2887%200.843925%2012.3715%200.806186%2012.4626C0.768447%2012.5537%200.749023%2012.6514%200.749023%2012.75C0.749023%2012.8486%200.768447%2012.9462%200.806186%2013.0373C0.843925%2013.1285%200.899239%2013.2112%200.968971%2013.281C1.1098%2013.4218%201.30081%2013.5009%201.49997%2013.5009C1.59859%2013.5009%201.69624%2013.4815%201.78735%2013.4438C1.87846%2013.406%201.96124%2013.3507%202.03097%2013.281L2.99997%2012.3105V20.25C2.99997%2020.8467%203.23702%2021.419%203.65898%2021.841C4.08094%2022.2629%204.65323%2022.5%205.24997%2022.5H18.75C19.3467%2022.5%2019.919%2022.2629%2020.341%2021.841C20.7629%2021.419%2021%2020.8467%2021%2020.25V12.3105L21.969%2013.281C22.1098%2013.4218%2022.3008%2013.5009%2022.5%2013.5009C22.6991%2013.5009%2022.8901%2013.4218%2023.031%2013.281C23.1718%2013.1401%2023.2509%2012.9491%2023.2509%2012.75C23.2509%2012.5508%2023.1718%2012.3598%2023.031%2012.219L19.5%208.68947V3.74997C19.5%203.55106%2019.421%203.36029%2019.2803%203.21964C19.1396%203.07899%2018.9489%202.99997%2018.75%202.99997H17.25C17.0511%202.99997%2016.8603%203.07899%2016.7196%203.21964C16.579%203.36029%2016.5%203.55106%2016.5%203.74997V5.68947L13.0605%202.24997ZM19.5%2010.8105V20.25C19.5%2020.4489%2019.421%2020.6396%2019.2803%2020.7803C19.1396%2020.921%2018.9489%2021%2018.75%2021H5.24997C5.05106%2021%204.86029%2020.921%204.71964%2020.7803C4.57899%2020.6396%204.49997%2020.4489%204.49997%2020.25V10.8105L12%203.31047L19.5%2010.8105Z'%20fill='white'/%3e%3c/svg%3e",w9="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.72583%202.77026H11.6074V5.75073H22.5059V17.4666H21.5176V19.8953H2.52173V17.4666H1.5V5.75073H1.72583V2.77026Z'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M0.80998%205.805L0.74998%204.5C0.74998%203.70435%201.06605%202.94129%201.62866%202.37868C2.19127%201.81607%202.95433%201.5%203.74998%201.5H9.25798C10.0536%201.50017%2010.8165%201.81635%2011.379%202.379L12.621%203.621C13.1835%204.18365%2013.9464%204.49983%2014.742%204.5H20.715C21.1319%204.49996%2021.5442%204.5868%2021.9256%204.75499C22.3071%204.92317%2022.6493%205.16902%2022.9304%205.47683C23.2116%205.78465%2023.4255%206.14768%2023.5585%206.54276C23.6915%206.93785%2023.7407%207.35633%2023.703%207.7715L22.7475%2018.2715C22.6797%2019.0169%2022.3358%2019.71%2021.7833%2020.2148C21.2307%2020.7197%2020.5094%2020.9997%2019.761%2021H4.23898C3.49054%2020.9997%202.76923%2020.7197%202.21668%2020.2148C1.66412%2019.71%201.32021%2019.0169%201.25248%2018.2715L0.29698%207.7715C0.233059%207.07667%200.414571%206.38141%200.80998%205.8065V5.805ZM3.28498%206C3.07661%205.99999%202.87052%206.04339%202.67985%206.12744C2.48918%206.21149%202.31812%206.33434%202.17756%206.48816C2.037%206.64199%201.93003%206.82341%201.86348%207.02086C1.79692%207.21832%201.77223%207.42747%201.79098%207.635L2.74648%2018.135C2.78016%2018.5077%202.95193%2018.8543%203.22807%2019.1069C3.5042%2019.3594%203.86477%2019.4996%204.23898%2019.5H19.761C20.1352%2019.4996%2020.4958%2019.3594%2020.7719%2019.1069C21.048%2018.8543%2021.2198%2018.5077%2021.2535%2018.135L22.209%207.635C22.2277%207.42747%2022.203%207.21832%2022.1365%207.02086C22.0699%206.82341%2021.963%206.64199%2021.8224%206.48816C21.6818%206.33434%2021.5108%206.21149%2021.3201%206.12744C21.1294%206.04339%2020.9234%205.99999%2020.715%206H3.28498ZM10.32%203.4395C10.1805%203.30002%2010.015%203.18941%209.83274%203.114C9.65051%203.03858%209.4552%202.99984%209.25798%203H3.74998C3.35704%202.99993%202.97977%203.15405%202.69927%203.42922C2.41877%203.70439%202.25745%204.07864%202.24998%204.4715L2.25898%204.68C2.57998%204.563%202.92498%204.5%203.28498%204.5H11.379L10.32%203.4395Z'%20fill='white'/%3e%3c/svg%3e",x9="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%203C0%202.60218%200.158035%202.22064%200.43934%201.93934C0.720644%201.65804%201.10218%201.5%201.5%201.5H22.5C22.8978%201.5%2023.2794%201.65804%2023.5607%201.93934C23.842%202.22064%2024%202.60218%2024%203V6C24%206.39782%2023.842%206.77936%2023.5607%207.06066C23.2794%207.34196%2022.8978%207.5%2022.5%207.5V18.75C22.5%2019.7446%2022.1049%2020.6984%2021.4017%2021.4017C20.6984%2022.1049%2019.7446%2022.5%2018.75%2022.5H5.25C4.25544%2022.5%203.30161%2022.1049%202.59835%2021.4017C1.89509%2020.6984%201.5%2019.7446%201.5%2018.75V7.5C1.10218%207.5%200.720644%207.34196%200.43934%207.06066C0.158035%206.77936%200%206.39782%200%206V3ZM3%207.5V18.75C3%2019.3467%203.23705%2019.919%203.65901%2020.341C4.08097%2020.7629%204.65326%2021%205.25%2021H18.75C19.3467%2021%2019.919%2020.7629%2020.341%2020.341C20.7629%2019.919%2021%2019.3467%2021%2018.75V7.5H3ZM22.5%203H1.5V6H22.5V3ZM7.5%2011.25C7.5%2011.0511%207.57902%2010.8603%207.71967%2010.7197C7.86032%2010.579%208.05109%2010.5%208.25%2010.5H15.75C15.9489%2010.5%2016.1397%2010.579%2016.2803%2010.7197C16.421%2010.8603%2016.5%2011.0511%2016.5%2011.25C16.5%2011.4489%2016.421%2011.6397%2016.2803%2011.7803C16.1397%2011.921%2015.9489%2012%2015.75%2012H8.25C8.05109%2012%207.86032%2011.921%207.71967%2011.7803C7.57902%2011.6397%207.5%2011.4489%207.5%2011.25Z'%20fill='white'/%3e%3cpath%20d='M1%202H23V7H22V20H21V21H3V20H2V7H1V2Z'%20fill='white'%20fill-opacity='0.2'/%3e%3c/svg%3e",C9="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='8'%20width='16'%20height='15'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.25%209C5.05109%209%204.86032%209.07902%204.71967%209.21967C4.57902%209.36032%204.5%209.55109%204.5%209.75V21.75C4.5%2021.9489%204.57902%2022.1397%204.71967%2022.2803C4.86032%2022.421%205.05109%2022.5%205.25%2022.5H18.75C18.9489%2022.5%2019.1397%2022.421%2019.2803%2022.2803C19.421%2022.1397%2019.5%2021.9489%2019.5%2021.75V9.75C19.5%209.55109%2019.421%209.36032%2019.2803%209.21967C19.1397%209.07902%2018.9489%209%2018.75%209H15.75C15.5511%209%2015.3603%208.92098%2015.2197%208.78033C15.079%208.63968%2015%208.44891%2015%208.25C15%208.05109%2015.079%207.86032%2015.2197%207.71967C15.3603%207.57902%2015.5511%207.5%2015.75%207.5H18.75C19.3467%207.5%2019.919%207.73705%2020.341%208.15901C20.7629%208.58097%2021%209.15326%2021%209.75V21.75C21%2022.3467%2020.7629%2022.919%2020.341%2023.341C19.919%2023.7629%2019.3467%2024%2018.75%2024H5.25C4.65326%2024%204.08097%2023.7629%203.65901%2023.341C3.23705%2022.919%203%2022.3467%203%2021.75V9.75C3%209.15326%203.23705%208.58097%203.65901%208.15901C4.08097%207.73705%204.65326%207.5%205.25%207.5H8.25C8.44891%207.5%208.63968%207.57902%208.78033%207.71967C8.92098%207.86032%209%208.05109%209%208.25C9%208.44891%208.92098%208.63968%208.78033%208.78033C8.63968%208.92098%208.44891%209%208.25%209H5.25Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.531%2016.2797C12.4614%2016.3495%2012.3786%2016.4049%2012.2875%2016.4427C12.1964%2016.4805%2012.0987%2016.5%2012%2016.5C11.9014%2016.5%2011.8037%2016.4805%2011.7126%2016.4427C11.6215%2016.4049%2011.5387%2016.3495%2011.469%2016.2797L6.96903%2011.7797C6.8282%2011.6388%206.74908%2011.4478%206.74908%2011.2487C6.74908%2011.0495%206.8282%2010.8585%206.96903%2010.7177C7.10986%2010.5768%207.30087%2010.4977%207.50003%2010.4977C7.69919%2010.4977%207.8902%2010.5768%208.03103%2010.7177L11.25%2013.9382L11.25%200.748659C11.25%200.549747%2011.329%200.358981%2011.4697%200.218328C11.6104%200.0776762%2011.8011%20-0.00134087%2012%20-0.00134085C12.1989%20-0.00134083%2012.3897%200.0776762%2012.5304%200.218329C12.671%200.358981%2012.75%200.549747%2012.75%200.748659L12.75%2013.9382L15.969%2010.7177C16.0388%2010.6479%2016.1215%2010.5926%2016.2127%2010.5549C16.3038%2010.5171%2016.4014%2010.4977%2016.5%2010.4977C16.6992%2010.4977%2016.8902%2010.5768%2017.031%2010.7177C17.1008%2010.7874%2017.1561%2010.8702%2017.1938%2010.9613C17.2316%2011.0524%2017.251%2011.15%2017.251%2011.2487C17.251%2011.4478%2017.1719%2011.6388%2017.031%2011.7797L12.531%2016.2797Z'%20fill='white'/%3e%3c/svg%3e",k9="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='8'%20width='16'%20height='15'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.25%209C5.05109%209%204.86032%209.07902%204.71967%209.21967C4.57902%209.36032%204.5%209.55109%204.5%209.75V21.75C4.5%2021.9489%204.57902%2022.1397%204.71967%2022.2803C4.86032%2022.421%205.05109%2022.5%205.25%2022.5H18.75C18.9489%2022.5%2019.1397%2022.421%2019.2803%2022.2803C19.421%2022.1397%2019.5%2021.9489%2019.5%2021.75V9.75C19.5%209.55109%2019.421%209.36032%2019.2803%209.21967C19.1397%209.07902%2018.9489%209%2018.75%209H15.75C15.5511%209%2015.3603%208.92098%2015.2197%208.78033C15.079%208.63968%2015%208.44891%2015%208.25C15%208.05109%2015.079%207.86032%2015.2197%207.71967C15.3603%207.57902%2015.5511%207.5%2015.75%207.5H18.75C19.3467%207.5%2019.919%207.73705%2020.341%208.15901C20.7629%208.58097%2021%209.15326%2021%209.75V21.75C21%2022.3467%2020.7629%2022.919%2020.341%2023.341C19.919%2023.7629%2019.3467%2024%2018.75%2024H5.25C4.65326%2024%204.08097%2023.7629%203.65901%2023.341C3.23705%2022.919%203%2022.3467%203%2021.75V9.75C3%209.15326%203.23705%208.58097%203.65901%208.15901C4.08097%207.73705%204.65326%207.5%205.25%207.5H8.25C8.44891%207.5%208.63968%207.57902%208.78033%207.71967C8.92098%207.86032%209%208.05109%209%208.25C9%208.44891%208.92098%208.63968%208.78033%208.78033C8.63968%208.92098%208.44891%209%208.25%209H5.25Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.469%200.21912C11.5386%200.149275%2011.6214%200.0938608%2011.7125%200.0560512C11.8036%200.0182415%2011.9013%20-0.0012207%2012%20-0.0012207C12.0986%20-0.0012207%2012.1963%200.0182415%2012.2874%200.0560512C12.3785%200.0938608%2012.4613%200.149275%2012.531%200.21912L17.031%204.71912C17.1718%204.85995%2017.2509%205.05096%2017.2509%205.25012C17.2509%205.44928%2017.1718%205.64029%2017.031%205.78112C16.8901%205.92195%2016.6991%206.00107%2016.5%206.00107C16.3008%206.00107%2016.1098%205.92195%2015.969%205.78112L12.75%202.56062V15.7501C12.75%2015.949%2012.671%2016.1398%2012.5303%2016.2805C12.3896%2016.4211%2012.1989%2016.5001%2012%2016.5001C11.8011%2016.5001%2011.6103%2016.4211%2011.4696%2016.2805C11.329%2016.1398%2011.25%2015.949%2011.25%2015.7501V2.56062L8.03097%205.78112C7.96124%205.85085%207.87846%205.90617%207.78735%205.9439C7.69624%205.98164%207.59859%206.00107%207.49997%206.00107C7.30081%206.00107%207.1098%205.92195%206.96897%205.78112C6.89924%205.71139%206.84392%205.6286%206.80619%205.5375C6.76845%205.44639%206.74902%205.34874%206.74902%205.25012C6.74902%205.05096%206.82814%204.85995%206.96897%204.71912L11.469%200.21912Z'%20fill='white'/%3e%3c/svg%3e",S9=B.label`
  position: relative;
  display: inline-block;
  width: 4.8rem;
  height: 2.4rem;
  margin: 0;

  span {
    position: absolute;
    inset: 0;
    border: 1px solid ${m.white+S[25]};
    border-radius: 3.2rem;
    background-color: ${({$state:e})=>e?m.blue5:"transparent"};
    transition: 0.4s;
    cursor: pointer;

    &:before {
      position: absolute;
      content: '';
      height: 1.6rem;
      width: 1.6rem;
      left: 0.4rem;
      top: 0.3rem;
      border-radius: 50%;
      background-color: ${m.white};
      ${({$state:e})=>e?"transform: translateX(2.2rem);":""}
      transition: 0.4s;
    }
  }
`;function S1({state:e,onClick:t}){return u.jsx(S9,{$state:e,children:u.jsx("span",{onClick:t})})}S1.propTypes={state:P.bool,onClick:P.func};const j9=B.header`
  // variables used by trackMouse() /helpers.js
  --inner-color: ${m.blue2};
  --outer-color: ${m.blue2};

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 24rem;
  padding: 3.2rem 1.6rem;
  color: ${m.text};
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    var(--inner-color) 0,
    var(--outer-color) 35rem
  );

  isolation: isolate;
  z-index: 1000;
  transition: left 0.5s ease-out;

  &.hidden {
    left: -24rem;
  }

  .edge {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 12px;
    background: transparent;
    cursor: url(${"/easytrack/arrow-left.svg"}), auto;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 2px;
      background: linear-gradient(
        to bottom,
        ${m.blue5+S[25]} 0%,
        ${m.blue5+S[50]} 51%,
        ${m.blue5+S[25]} 100%
      );
    }
  }

  .logo {
    cursor: pointer;
    height: 4.8rem;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    height: 100%;

    li {
      display: flex;
      gap: 1.6rem;
      align-items: center;
      border-radius: 0.8rem;
      font-size: 2.4rem;
      padding: 0.8rem 1.6rem;
      text-shadow: ${O.shadowSmall};
      box-shadow: ${O.innerShadowImprinted};
      z-index: 2;

      cursor: pointer;
      transition: all 0.25s ease-out, padding 0s;

      &:hover {
        background-color: rgba(0, 64, 167, 0.5);
        box-shadow: ${O.fullGlowHover};
      }

      &.active {
        background-color: ${m.blue3};
        box-shadow: ${O.fullGlowActive};
        z-index: 1;
      }

      img {
        filter: drop-shadow(${O.shadowSmall});
      }
    }
  }

  .nav-footer {
    margin-top: auto;

    hr {
      margin-bottom: 1.6rem;
    }

    .import-export {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      div {
        display: flex;
        gap: 1.6rem;
        align-items: center;
        border-radius: 0.8rem;
        font-size: 1.6rem;
        padding: 0.8rem 1.6rem;
        text-shadow: ${O.shadowSmall};
        box-shadow: ${O.innerShadowImprinted};

        cursor: pointer;
        transition: all 0.25s ease-out;

        &:hover {
          background-color: rgba(0, 64, 167, 0.5);
          box-shadow: ${O.fullGlowHover};
        }
      }
    }

    .toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.6rem;
    }
  }

  &.mini {
    width: fit-content;

    &.hidden {
      left: -8rem;
    }

    nav ul li,
    .nav-footer .import-export div {
      padding-inline: 1.2rem;
    }

    .edge {
      cursor: url(${"/easytrack/arrow-right.svg"}), auto;
    }
  }
`;function $9(){const e=he(),t=W(x=>x.ui.showWelcome),n=W(x=>x.ui.minimizedHeader),r=W(x=>x.ui.page),i=W(x=>x.projects),o=W(x=>x.data.trackers),s=()=>{e(D.setShowWelcome(!t)),Tn("showWelcome",!t)},l=x=>{e(D.changePage(x)),e(F.setTempData(null))},a=x=>{Ht(x,"#052354",m.blue2)},c=x=>{Vt(x,m.blue2)},d=()=>{e(D.changePage("welcome"))},f=()=>{e(D.setMinimized(!n)),Tn("minimizedHeader",!n)},g=()=>{e(N5())},y=()=>{e(_5())};return u.jsxs(j9,{className:`${n?"mini":""} ${r==="welcome"||!r?"hidden":""}`,onMouseMove:a,onMouseLeave:c,children:[n?u.jsx("img",{src:v9,className:"logo",alt:"Logo Easy Track",onClick:d}):u.jsx("img",{src:g9,className:"logo",alt:"Logo Easy Track",onClick:d}),u.jsx("nav",{children:u.jsxs("ul",{children:[i.length>0&&u.jsxs("li",{className:r==="dashboard"?"active":"",onClick:()=>l("dashboard"),children:[u.jsx("img",{src:y9,alt:"House icon"}),!n&&"Dashboard"]}),u.jsxs("li",{className:r==="projects"?"active":"",onClick:()=>l("projects"),children:[u.jsx("img",{src:w9,alt:"Folder icon"}),!n&&"Projects"]}),o.length>0&&u.jsxs("li",{className:r==="trackers"?"active":"",onClick:()=>l("trackers"),children:[u.jsx("img",{src:"/easytrack/stopwatch.svg",alt:"Stopwatch icon"}),!n&&"Trackers"]}),i.filter(x=>x.status!=="active").length>0&&u.jsxs("li",{className:r==="archive"?"active":"",onClick:()=>l("archive"),children:[u.jsx("img",{src:x9,alt:"Archive icon"}),!n&&"Archive"]})]})}),u.jsxs("div",{className:"nav-footer",children:[u.jsx("hr",{}),u.jsxs("div",{className:"import-export",children:[u.jsxs("div",{onClick:y,children:[u.jsx("img",{src:k9,alt:"Export icon"}),!n&&u.jsx("p",{children:"Export Data"})]}),u.jsxs("div",{onClick:g,children:[u.jsx("img",{src:C9,alt:"Import icon"}),!n&&u.jsx("p",{children:"Import Data"})]})]}),u.jsxs("div",{className:"toggle",children:[!n&&u.jsx("p",{children:"Welcome screen:"}),u.jsx(S1,{state:t,onClick:s})]})]}),u.jsx("div",{className:"edge",onClick:f})]})}const T9=B.label`
  position: relative;
  display: block;
  height: 146px;
  width: 56px;
  margin: 0;
  border-radius: 0.8rem;
  border: 1px solid ${m.blue5};
  box-shadow: ${O.outerGlowHover};
  flex-shrink: 0;
  z-index: 1;
  transition: 0.4s;

  &:hover {
    box-shadow: ${O.outerGlowActive};
  }

  .switch {
    cursor: pointer;
    height: 130px;
    width: 40px;
    background: linear-gradient(to bottom, ${m.blue3} 40%, ${m.blue1} 40%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.4rem;
    overflow: hidden;

    &:before {
      content: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_228_3218)'%3E%3Cpath d='M3.00001 9.00004C2.99996 7.51386 3.36795 6.0508 4.07113 4.74149C4.7743 3.43218 5.79077 2.31739 7.02977 1.49665C8.26877 0.675903 9.69173 0.17476 11.1716 0.0379644C12.6515 -0.098831 14.1422 0.132979 15.5106 0.712695C16.8791 1.29241 18.0827 2.20199 19.014 3.36021C19.9452 4.51844 20.5752 5.88925 20.8476 7.35026C21.1199 8.81127 21.0263 10.317 20.5749 11.733C20.1236 13.149 19.3286 14.4312 18.261 15.465C17.9565 15.759 17.7225 16.065 17.5815 16.3935L16.4385 19.047C16.3805 19.1815 16.2844 19.2961 16.1621 19.3766C16.0397 19.4571 15.8965 19.5 15.75 19.5C15.9489 19.5 16.1397 19.5791 16.2803 19.7197C16.421 19.8604 16.5 20.0511 16.5 20.25C16.5 20.449 16.421 20.6397 16.2803 20.7804C16.1397 20.921 15.9489 21 15.75 21C15.9489 21 16.1397 21.0791 16.2803 21.2197C16.421 21.3604 16.5 21.5511 16.5 21.75C16.5 21.949 16.421 22.1397 16.2803 22.2804C16.1397 22.421 15.9489 22.5 15.75 22.5L15.414 23.1705C15.2895 23.4197 15.0981 23.6292 14.8613 23.7757C14.6245 23.9222 14.3515 23.9999 14.073 24H9.92701C9.64852 23.9999 9.37556 23.9222 9.13872 23.7757C8.90188 23.6292 8.71049 23.4197 8.58601 23.1705L8.25001 22.5C8.0511 22.5 7.86033 22.421 7.71968 22.2804C7.57903 22.1397 7.50001 21.949 7.50001 21.75C7.50001 21.5511 7.57903 21.3604 7.71968 21.2197C7.86033 21.0791 8.0511 21 8.25001 21C8.0511 21 7.86033 20.921 7.71968 20.7804C7.57903 20.6397 7.50001 20.449 7.50001 20.25C7.50001 20.0511 7.57903 19.8604 7.71968 19.7197C7.86033 19.5791 8.0511 19.5 8.25001 19.5C8.1033 19.5003 7.95973 19.4575 7.83709 19.377C7.71444 19.2965 7.61811 19.1818 7.56001 19.047L6.41851 16.392C6.25387 16.0421 6.02314 15.7274 5.73901 15.465C4.87117 14.627 4.1813 13.6225 3.71067 12.5117C3.24004 11.4008 2.99834 10.2065 3.00001 9.00004ZM12 1.50004C10.5063 1.49979 9.04645 1.94559 7.80768 2.78031C6.56891 3.61503 5.60762 4.80064 5.047 6.1852C4.48637 7.56976 4.35196 9.09019 4.66098 10.5516C4.97001 12.0131 5.70839 13.3489 6.78151 14.388C7.17601 14.769 7.55251 15.234 7.79551 15.7995L8.74501 18H15.258L16.206 15.7995C16.449 15.234 16.8255 14.769 17.22 14.388C18.2932 13.3489 19.0316 12.0128 19.3406 10.5513C19.6496 9.08968 19.515 7.56913 18.9542 6.18451C18.3934 4.79988 17.4319 3.61429 16.1929 2.77968C14.9539 1.94507 13.4939 1.49949 12 1.50004Z' fill='%230040A7'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_228_3218'%3E%3Crect width='24' height='24' fill='%230040A7'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      display: block;
      position: absolute;
      height: 60px;
      text-align: center;
      line-height: 60px;
      width: 100%;
      top: 5px;
      left: 0;
      padding-top: 5px;
      background: ${m.blue1};
      color: ${m.blue3};
      border-radius: 0.4rem 0.4rem 0 0;
      transition: 0.4s cubic-bezier(1, 0, 1, 1);
    }

    &:after {
      content: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_228_3220)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.34512 6.52495C3.11559 7.32989 2.99947 8.16292 3.00012 8.99995C3.00012 11.5364 4.05012 13.83 5.73912 15.465C6.04362 15.759 6.27762 16.0649 6.41862 16.3934L7.56162 19.0469C7.61962 19.1814 7.71572 19.296 7.83807 19.3765C7.96042 19.457 8.10366 19.4999 8.25012 19.4999C8.05121 19.4999 7.86044 19.579 7.71979 19.7196C7.57914 19.8603 7.50012 20.051 7.50012 20.2499C7.50012 20.4489 7.57914 20.6396 7.71979 20.7803C7.86044 20.9209 8.05121 20.9999 8.25012 20.9999C8.05121 20.9999 7.86044 21.079 7.71979 21.2196C7.57914 21.3603 7.50012 21.551 7.50012 21.7499C7.50012 21.9489 7.57914 22.1396 7.71979 22.2803C7.86044 22.4209 8.05121 22.4999 8.25012 22.4999L8.58612 23.1704C8.71061 23.4196 8.90199 23.6291 9.13883 23.7756C9.37567 23.9221 9.64863 23.9998 9.92712 23.9999H14.0731C14.3516 23.9998 14.6246 23.9221 14.8614 23.7756C15.0983 23.6291 15.2896 23.4196 15.4141 23.1704L15.7501 22.4999C15.949 22.4999 16.1398 22.4209 16.2805 22.2803C16.4211 22.1396 16.5001 21.9489 16.5001 21.7499C16.5001 21.551 16.4211 21.3603 16.2805 21.2196C16.1398 21.079 15.949 20.9999 15.7501 20.9999C15.949 20.9999 16.1398 20.9209 16.2805 20.7803C16.4211 20.6396 16.5001 20.4489 16.5001 20.2499C16.5001 20.051 16.4211 19.8603 16.2805 19.7196C16.1398 19.579 15.949 19.4999 15.7501 19.4999C15.9047 19.5001 16.0556 19.4524 16.1821 19.3635L14.8171 17.9999H8.74512L7.79712 15.7994C7.55405 15.2675 7.20963 14.7881 6.78312 14.3879C5.91045 13.5464 5.25574 12.505 4.87549 11.3539C4.49525 10.2027 4.40091 8.97624 4.60062 7.78045L3.34512 6.52495ZM5.72712 2.54545L6.78912 3.60595C8.20364 2.23976 10.0982 1.48381 12.0646 1.50089C14.0311 1.51798 15.9122 2.30675 17.3028 3.69731C18.6933 5.08787 19.4821 6.96896 19.4992 8.93544C19.5163 10.9019 18.7603 12.7964 17.3941 14.2109L18.4546 15.2714C20.094 13.574 21.0012 11.3006 20.9807 8.94084C20.9602 6.58107 20.0137 4.32376 18.345 2.65508C16.6763 0.986409 14.419 0.039889 12.0592 0.0193832C9.69946 -0.00112258 7.42454 0.906027 5.72712 2.54545ZM2.46912 2.46895C2.53879 2.3991 2.62155 2.34369 2.71267 2.30588C2.80379 2.26807 2.90147 2.24861 3.00012 2.24861C3.09877 2.24861 3.19645 2.26807 3.28757 2.30588C3.37869 2.34369 3.46145 2.3991 3.53112 2.46895L21.5311 20.4689C21.6719 20.6098 21.7511 20.8008 21.7511 20.9999C21.7511 21.1991 21.6719 21.3901 21.5311 21.531C21.3903 21.6718 21.1993 21.7509 21.0001 21.7509C20.801 21.7509 20.6099 21.6718 20.4691 21.531L2.46912 3.53095C2.39928 3.46128 2.34386 3.37852 2.30605 3.2874C2.26824 3.19628 2.24878 3.0986 2.24878 2.99995C2.24878 2.9013 2.26824 2.80362 2.30605 2.7125C2.34386 2.62138 2.39928 2.53862 2.46912 2.46895Z' fill='%230060FB'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_228_3220'%3E%3Crect width='24' height='24' fill='%230060FB'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      display: block;
      position: absolute;
      height: 65px;
      text-align: center;
      line-height: 65px;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-top: 5px;
      background: ${m.blue2};
      color: ${m.blue5};
      border-radius: 0 0 0.4rem 0.4rem;
      transition: 0.4s cubic-bezier(1, 0, 1, 1);
    }
  }

  ${({$animated:e})=>{if(e)return"pointer-events: none;"}}

  #checkbox {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;

    &:checked + .switch {
      &:before {
        content: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_228_3218)'%3E%3Cpath d='M3.00001 9.00004C2.99996 7.51386 3.36795 6.0508 4.07113 4.74149C4.7743 3.43218 5.79077 2.31739 7.02977 1.49665C8.26877 0.675903 9.69173 0.17476 11.1716 0.0379644C12.6515 -0.098831 14.1422 0.132979 15.5106 0.712695C16.8791 1.29241 18.0827 2.20199 19.014 3.36021C19.9452 4.51844 20.5752 5.88925 20.8476 7.35026C21.1199 8.81127 21.0263 10.317 20.5749 11.733C20.1236 13.149 19.3286 14.4312 18.261 15.465C17.9565 15.759 17.7225 16.065 17.5815 16.3935L16.4385 19.047C16.3805 19.1815 16.2844 19.2961 16.1621 19.3766C16.0397 19.4571 15.8965 19.5 15.75 19.5C15.9489 19.5 16.1397 19.5791 16.2803 19.7197C16.421 19.8604 16.5 20.0511 16.5 20.25C16.5 20.449 16.421 20.6397 16.2803 20.7804C16.1397 20.921 15.9489 21 15.75 21C15.9489 21 16.1397 21.0791 16.2803 21.2197C16.421 21.3604 16.5 21.5511 16.5 21.75C16.5 21.949 16.421 22.1397 16.2803 22.2804C16.1397 22.421 15.9489 22.5 15.75 22.5L15.414 23.1705C15.2895 23.4197 15.0981 23.6292 14.8613 23.7757C14.6245 23.9222 14.3515 23.9999 14.073 24H9.92701C9.64852 23.9999 9.37556 23.9222 9.13872 23.7757C8.90188 23.6292 8.71049 23.4197 8.58601 23.1705L8.25001 22.5C8.0511 22.5 7.86033 22.421 7.71968 22.2804C7.57903 22.1397 7.50001 21.949 7.50001 21.75C7.50001 21.5511 7.57903 21.3604 7.71968 21.2197C7.86033 21.0791 8.0511 21 8.25001 21C8.0511 21 7.86033 20.921 7.71968 20.7804C7.57903 20.6397 7.50001 20.449 7.50001 20.25C7.50001 20.0511 7.57903 19.8604 7.71968 19.7197C7.86033 19.5791 8.0511 19.5 8.25001 19.5C8.1033 19.5003 7.95973 19.4575 7.83709 19.377C7.71444 19.2965 7.61811 19.1818 7.56001 19.047L6.41851 16.392C6.25387 16.0421 6.02314 15.7274 5.73901 15.465C4.87117 14.627 4.1813 13.6225 3.71067 12.5117C3.24004 11.4008 2.99834 10.2065 3.00001 9.00004ZM12 1.50004C10.5063 1.49979 9.04645 1.94559 7.80768 2.78031C6.56891 3.61503 5.60762 4.80064 5.047 6.1852C4.48637 7.56976 4.35196 9.09019 4.66098 10.5516C4.97001 12.0131 5.70839 13.3489 6.78151 14.388C7.17601 14.769 7.55251 15.234 7.79551 15.7995L8.74501 18H15.258L16.206 15.7995C16.449 15.234 16.8255 14.769 17.22 14.388C18.2932 13.3489 19.0316 12.0128 19.3406 10.5513C19.6496 9.08968 19.515 7.56913 18.9542 6.18451C18.3934 4.79988 17.4319 3.61429 16.1929 2.77968C14.9539 1.94507 13.4939 1.49949 12 1.50004Z' fill='%230060FB'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_228_3218'%3E%3Crect width='24' height='24' fill='%230060FB'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
        height: 65px;
        top: 0;
        padding-top: 5px;
        line-height: 65px;
        background: ${m.blue2};
        color: ${m.blue5};
      }
      &:after {
        content: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_228_3220)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.34512 6.52495C3.11559 7.32989 2.99947 8.16292 3.00012 8.99995C3.00012 11.5364 4.05012 13.83 5.73912 15.465C6.04362 15.759 6.27762 16.0649 6.41862 16.3934L7.56162 19.0469C7.61962 19.1814 7.71572 19.296 7.83807 19.3765C7.96042 19.457 8.10366 19.4999 8.25012 19.4999C8.05121 19.4999 7.86044 19.579 7.71979 19.7196C7.57914 19.8603 7.50012 20.051 7.50012 20.2499C7.50012 20.4489 7.57914 20.6396 7.71979 20.7803C7.86044 20.9209 8.05121 20.9999 8.25012 20.9999C8.05121 20.9999 7.86044 21.079 7.71979 21.2196C7.57914 21.3603 7.50012 21.551 7.50012 21.7499C7.50012 21.9489 7.57914 22.1396 7.71979 22.2803C7.86044 22.4209 8.05121 22.4999 8.25012 22.4999L8.58612 23.1704C8.71061 23.4196 8.90199 23.6291 9.13883 23.7756C9.37567 23.9221 9.64863 23.9998 9.92712 23.9999H14.0731C14.3516 23.9998 14.6246 23.9221 14.8614 23.7756C15.0983 23.6291 15.2896 23.4196 15.4141 23.1704L15.7501 22.4999C15.949 22.4999 16.1398 22.4209 16.2805 22.2803C16.4211 22.1396 16.5001 21.9489 16.5001 21.7499C16.5001 21.551 16.4211 21.3603 16.2805 21.2196C16.1398 21.079 15.949 20.9999 15.7501 20.9999C15.949 20.9999 16.1398 20.9209 16.2805 20.7803C16.4211 20.6396 16.5001 20.4489 16.5001 20.2499C16.5001 20.051 16.4211 19.8603 16.2805 19.7196C16.1398 19.579 15.949 19.4999 15.7501 19.4999C15.9047 19.5001 16.0556 19.4524 16.1821 19.3635L14.8171 17.9999H8.74512L7.79712 15.7994C7.55405 15.2675 7.20963 14.7881 6.78312 14.3879C5.91045 13.5464 5.25574 12.505 4.87549 11.3539C4.49525 10.2027 4.40091 8.97624 4.60062 7.78045L3.34512 6.52495ZM5.72712 2.54545L6.78912 3.60595C8.20364 2.23976 10.0982 1.48381 12.0646 1.50089C14.0311 1.51798 15.9122 2.30675 17.3028 3.69731C18.6933 5.08787 19.4821 6.96896 19.4992 8.93544C19.5163 10.9019 18.7603 12.7964 17.3941 14.2109L18.4546 15.2714C20.094 13.574 21.0012 11.3006 20.9807 8.94084C20.9602 6.58107 20.0137 4.32376 18.345 2.65508C16.6763 0.986409 14.419 0.039889 12.0592 0.0193832C9.69946 -0.00112258 7.42454 0.906027 5.72712 2.54545ZM2.46912 2.46895C2.53879 2.3991 2.62155 2.34369 2.71267 2.30588C2.80379 2.26807 2.90147 2.24861 3.00012 2.24861C3.09877 2.24861 3.19645 2.26807 3.28757 2.30588C3.37869 2.34369 3.46145 2.3991 3.53112 2.46895L21.5311 20.4689C21.6719 20.6098 21.7511 20.8008 21.7511 20.9999C21.7511 21.1991 21.6719 21.3901 21.5311 21.531C21.3903 21.6718 21.1993 21.7509 21.0001 21.7509C20.801 21.7509 20.6099 21.6718 20.4691 21.531L2.46912 3.53095C2.39928 3.46128 2.34386 3.37852 2.30605 3.2874C2.26824 3.19628 2.24878 3.0986 2.24878 2.99995C2.24878 2.9013 2.26824 2.80362 2.30605 2.7125C2.34386 2.62138 2.39928 2.53862 2.46912 2.46895Z' fill='%230051D2'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_228_3220'%3E%3Crect width='24' height='24' fill='%230051D2'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
        height: 60px;
        bottom: 5px;
        padding-top: 5px;
        line-height: 60px;
        background: ${m.blue3};
        color: ${m.blue2};
      }
    }
  }
`;function j1({onClick:e,animated:t}){return u.jsxs(T9,{htmlFor:"checkbox",onClick:e,$animated:t,children:[u.jsx("input",{type:"checkbox",id:"checkbox"}),u.jsx("div",{className:"switch"})]})}j1.propTypes={onClick:P.func,animated:P.bool};const E9="/easytrack/assets/neon-flicker-BegtQltS.wav",b9=B.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  height: 100%;
  width: 100%;
  max-width: 100rem;
  margin-inline: auto;
  padding: 4.8rem 2.4rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.6rem;
  }

  #logo-symbol {
    overflow: visible;

    &.animate {
      .ring {
        path {
          opacity: 0.1;
        }
        .group-1 path {
          animation: 0.75s linear 0.85s neon-flicker forwards;
        }

        .group-2 path {
          animation: 0.75s linear 1.1s neon-flicker forwards;
        }

        .group-3 path {
          animation: 0.75s linear 1.35s neon-flicker forwards;
        }
      }

      .check {
        opacity: 0.1;
        animation: 0.75s linear 1.6s neon-flicker forwards;
      }
    }

    .ring {
      path {
        opacity: 0.1;
      }
      .group-1 path {
        fill: ${m.blue5};
        filter: drop-shadow(0 0 24px rgba(0, 96, 251, 0.6));
      }

      .group-2 path {
        fill: ${m.blue4};
        filter: drop-shadow(0 0 24px rgba(0, 96, 251, 0.6));
      }

      .group-3 path {
        fill: ${m.blue3};
        filter: drop-shadow(0 0 24px rgba(0, 96, 251, 0.6));
      }
    }

    .check {
      fill: ${m.blue4};
      filter: drop-shadow(0 0 24px rgba(0, 96, 251, 0.6));
      opacity: 0.1;
    }
  }

  h1 {
    text-align: center;

    &.animate {
      span:first-of-type {
        color: ${m.blue5};
        animation: 0.75s linear 1.25s neon-flicker forwards;
      }
      span:last-of-type {
        color: ${m.blue4};
        animation: 0.75s linear 1.5s neon-flicker forwards;
      }
    }

    span {
      opacity: 0.1;
      text-shadow: ${O.outerGlowActive};

      &:first-of-type {
        color: ${m.blue5};
      }

      &:last-of-type {
        color: ${m.blue4};
      }
    }
  }

  p {
    font-size: 2rem;
    line-height: 120%;
    text-align: center;
  }
`;function N9(){const e=he(),t=W(o=>o.projects),[n,r]=N.useState(!1),i=()=>{n||(r(!0),new Audio(E9).play().catch(o=>console.error("Audio play failed:",o)),setTimeout(()=>{t.length?e(D.changePage("dashboard")):e(D.changePage("projects"))},3500))};return u.jsxs(b9,{children:[u.jsxs("div",{children:[u.jsxs("svg",{id:"logo-symbol",className:n?"animate":"",xmlns:"http://www.w3.org/2000/svg",width:"256",height:"256",viewBox:"0 0 256 256",children:[u.jsxs("g",{className:"ring",children:[u.jsxs("g",{className:"group-3",children:[u.jsx("path",{d:"M21.33,128c0-9.49,1.28-18.77,3.63-27.52l-20.59-5.55C1.49,105.49,0,116.59,0,128c0,35.31,14.29,67.31,37.44,90.56l15.15-15.15c-19.31-19.2-31.25-45.87-31.25-75.41Z"}),u.jsx("path",{d:"M164.48,228.27c-11.41,4.16-23.68,6.4-36.48,6.4-6.29,0-12.48-.53-18.45-1.6l-3.73,21.01c7.15,1.28,14.61,1.92,22.19,1.92,15.36,0,30.08-2.67,43.73-7.68l-7.25-20.05Z"}),u.jsx("path",{d:"M201.39,23.15l-12.27,17.49c12.69,8.85,23.47,20.48,31.25,34.03l18.45-10.67c-9.39-16.21-22.19-30.19-37.44-40.85Z"})]}),u.jsxs("g",{className:"group-2",children:[u.jsx("path",{d:"M220.37,181.33c-9.28,16.21-22.83,29.65-39.04,39.04l10.67,18.56c19.41-11.2,35.63-27.41,46.83-46.93l-18.45-10.67Z"}),u.jsx("path",{d:"M54.61,23.15c-18.35,12.8-33.07,30.29-42.67,50.77l19.41,9.07c7.89-17.07,20.27-31.68,35.52-42.35l-12.27-17.49Z"})]}),u.jsxs("g",{className:"group-1",children:[u.jsx("path",{d:"M73.92,12.05l8.96,19.31c13.65-6.4,29.01-10.03,45.12-10.03s31.47,3.63,45.12,10.03l8.96-19.31C165.65,4.27,147.31,0,128,0s-37.65,4.27-54.08,12.05Z"}),u.jsx("path",{d:"M248.32,84.16l-20.05,7.36c4.16,11.41,6.4,23.68,6.4,36.48s-2.24,25.17-6.4,36.48l20.05,7.36c4.91-13.65,7.68-28.48,7.68-43.84s-2.77-30.19-7.68-43.84Z"}),u.jsx("path",{d:"M66.88,215.36l-12.27,17.49c9.07,6.4,18.99,11.63,29.65,15.47l7.25-20.05c-8.85-3.2-17.07-7.57-24.64-12.91Z"})]})]}),u.jsx("polygon",{className:"check",points:"173.25 82.75 112.92 143.08 82.75 112.92 67.66 128 112.92 173.25 128 158.17 188.34 97.83 173.25 82.75"})]}),u.jsxs("h1",{className:n?"animate":"",children:[u.jsx("span",{children:"Easy"}),u.jsx("span",{children:"Track"})]})]}),u.jsx("p",{children:"My personal project management hub—designed to simplify the way you organize, track, and achieve your goals. Whether you're managing daily tasks or long-term projects, this tool helps you stay on top of your progress, maintain focus, and reach new milestones with ease."}),u.jsx(j1,{onClick:i,animated:n})]})}function Ar({size:e,percentage:t,number:n,color:r}){const[i,o]=N.useState(0);N.useEffect(()=>{if(!t&&t!==0||!n&&n!==0)return;let l,a;const c=t*20,d=f=>{l||(l=f);const g=f-l,y=Math.min(g/c,1),x=Math.floor(y*t);o(x),y<1?a=requestAnimationFrame(d):o(Yr(t))};return a=requestAnimationFrame(d),()=>cancelAnimationFrame(a)},[t,n]);const s=N.useId();return u.jsxs("svg",{height:e,width:e,viewBox:`0 0 ${e} ${e}`,xmlns:"http://www.w3.org/2000/svg",style:{overflow:"visible"},children:[u.jsx("defs",{children:u.jsx("filter",{id:s,x:"-50%",y:"-50%",width:"200%",height:"200%",children:u.jsx("feDropShadow",{dx:"0",dy:"0",stdDeviation:"2",floodColor:r,floodOpacity:"1"})})}),u.jsx("circle",{cx:e/2,cy:e/2,r:e/2-10,fill:"none",stroke:m.white+S[10],strokeWidth:"1"}),u.jsx("circle",{cx:e/2,cy:e/2,r:e/2-10,fill:"none",stroke:r,strokeWidth:"5",strokeDasharray:2*Math.PI*(e/2-10),strokeDashoffset:2*Math.PI*(e/2-10)*(1-i/100),strokeLinecap:"round",transform:`rotate(-90 ${e/2} ${e/2})`,filter:`url(#${s})`}),u.jsxs("text",{x:e/2,y:n?e/2+e/6/2+2:e/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:e/6,fill:r,children:[i,"%"]}),n&&u.jsx("text",{x:e/2,y:e/2-e/6/2-2,textAnchor:"middle",dominantBaseline:"middle",fontSize:e/6,fill:r,children:`(${n})`})]})}Ar.propTypes={size:P.number,percentage:P.number,number:P.number,color:P.string};const _9=B.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;
  border: 1px solid
    ${({$type:e})=>{if(e==="active")return m.white+S[10];if(e==="finished")return m.valid+S[20];if(e==="discarded")return m.invalid+S[20]}};
  border-radius: 0.8rem;
  background-color: transparent;
  cursor: pointer;
  ${({$deadline:e})=>e?"":"min-width: 40rem;"}

  @starting-style {
    opacity: 0;
    transform: translateY(1rem);
  }

  &:hover {
    animation: 0.5s gloss forwards;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
  }

  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    line-height: 1.6rem;
    font-size: 1.4rem;

    &.yellow {
      color: ${m.warning};
    }
    &.red {
      color: ${m.invalid};
    }
  }

  .info {
    display: flex;
    gap: 1.6rem;

    .tasks,
    .progress {
      & > div {
        display: flex;
      }

      label {
        white-space: nowrap;
      }
    }
  }
`;function S0({item:e,deadline:t=!1,style:n}){const r=he();let i,o,s,l,a,c,d,f;if(t)e.deadline-G()<2592e5&&(i="yellow"),e.deadline<G()&&(i="red");else if(!t&&e.tasks.length){const x=e.tasks.length;o=e.tasks.filter(w=>w.status==="active").length,s=e.tasks.filter(w=>w.status==="finished").length,l=e.tasks.filter(w=>w.status==="discarded").length,a=o/x*100,c=s/x*100,d=l/x*100,f=s/(o+s)*100,c===0&&(f=0)}let g;e!=null&&e.tasks?g=e.tasks.reduce((x,w)=>x+w.time,0):g=e.time;const y=()=>{Object.hasOwn(e,"projectId")?(r(F.setTempData(e)),r(D.setFormType("task-details")),r(D.changePage("projects"))):e.status==="active"?(r(F.setTempData(e)),r(D.changePage("projects"))):(r(F.setTempData(e)),r(D.changePage("archive")))};return u.jsxs(_9,{$type:e.status,$deadline:t,style:n,onClick:y,children:[u.jsxs("div",{className:"card-header",children:[u.jsx("h2",{children:e.name}),!t&&u.jsx(vt,{value:g})]}),u.jsx("hr",{}),u.jsx("div",{className:"card-body",children:t?u.jsxs("span",{className:i,children:[U(e.deadline,"dd.mm.yyyy.")," (",U(e.deadline,"hh:mm:ss"),")"]}):u.jsxs("div",{className:"info",children:[u.jsxs("div",{className:"tasks",children:[u.jsx("label",{children:"Tasks progress (by category)"}),u.jsxs("div",{children:[u.jsx(Ar,{size:80,percentage:a,number:o,color:m.blue5}),u.jsx(Ar,{size:80,percentage:c,number:s,color:m.validDark}),u.jsx(Ar,{size:80,percentage:d,number:l,color:m.invalidDark})]})]}),u.jsx("span",{className:"vr"}),u.jsxs("div",{className:"progress",children:[u.jsx("label",{children:"Total progress"}),u.jsx("div",{children:u.jsx(Ar,{size:80,percentage:f,color:m.white+S[80]})})]})]})})]})}S0.propTypes={item:P.object,deadline:P.bool,style:P.object};function P9(){const[e,t]=N.useState({overflowing:!1,position:null}),n=N.useRef(null),r=N.useCallback(()=>{const i=n.current;if(i){let o="middle";i.scrollTop===0?o="top":i.scrollTop===i.scrollHeight-i.offsetHeight&&(o="bottom"),t({overflowing:i.scrollHeight>i.clientHeight,position:o})}},[]);return N.useEffect(()=>{r()},[r]),{scrollState:e,containerRef:n,checkScroll:r}}const D9=B.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: ${({$padding:e})=>e}rem;

  ${({$scrollState:e})=>{if(e.overflowing)return`background: linear-gradient(to bottom, ${e.position!=="top"?"rgba(0, 0, 0, 0.15) 0%, transparent 1.6rem":""} ${e.position==="middle"?", ":""} ${e.position!=="bottom"?"transparent calc(100% - 1.6rem), rgba(0, 0, 0, 0.15) 100%":""});`}}
`;function j0({children:e,category:t}){const{scrollState:n,containerRef:r,checkScroll:i}=P9();let o=0;return r.current&&r.current.scrollHeight>r.current.clientHeight&&(o=.8),N.useEffect(()=>{i()},[t,i]),u.jsx(D9,{ref:r,onScroll:i,$scrollState:n,$padding:o,children:e})}j0.propTypes={children:P.oneOfType([P.array,P.element]),category:P.string};const M9=B.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      font-size: 1.6rem;
    }

    .button-group {
      display: flex;

      button {
        padding-inline: 0.8rem;
        border-radius: 0;

        &:first-of-type {
          border-top-left-radius: 0.8rem;
          border-bottom-left-radius: 0.8rem;
        }

        &:last-of-type {
          border-top-right-radius: 0.8rem;
          border-bottom-right-radius: 0.8rem;
        }
      }
    }
  }
`;function $1({className:e}){const t=W(a=>a.projects),[n,r]=N.useState("projects"),i=a=>{Ht(a,m.white+S[3],"transparent")},o=a=>{Vt(a,"transparent")};let s=[];n==="projects"?s=t.reduce((a,c)=>(c.deadline!==void 0&&c.status==="active"&&a.push(c),a),[]):s=t.reduce((a,c)=>(c.status==="active"&&c.tasks.forEach(d=>{d.deadline!==void 0&&d.status==="active"&&a.push(d)}),a),[]),s.sort((a,c)=>a.deadline-c.deadline);const l=a=>{a.target.textContent==="P"?r("projects"):a.target.textContent==="T"&&r("tasks")};return u.jsxs(M9,{className:`${e} box`,onMouseMove:i,onMouseLeave:o,children:[u.jsxs("div",{className:"header",children:[u.jsx("h2",{children:"Deadlines"}),u.jsxs("div",{className:"button-group",onClick:l,children:[u.jsx(ve,{className:n==="projects"?"active":"",children:"P"}),u.jsx(ve,{className:n==="tasks"?"active":"",children:"T"})]})]}),u.jsx("hr",{}),u.jsx(j0,{category:n,children:s.length!==0?s.map((a,c)=>u.jsx(S0,{item:a,deadline:!0,style:{transition:`opacity .25s ${.2*c}s, transform .5s ${.2*c}s`}},a.id)):u.jsx("p",{className:"warning",children:"There are no deadlines for this category"})})]})}$1.propTypes={className:P.string};const L9="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%204.5C10.3791%204.50062%208.80195%205.02639%207.50486%205.99856C6.20778%206.97072%205.26056%208.33696%204.8051%209.89262C4.34963%2011.4483%204.41043%2013.1096%204.97838%2014.6278C5.54633%2016.1461%206.59087%2017.4394%207.95555%2018.3142C9.32022%2019.1889%2010.9316%2019.598%2012.5482%2019.4801C14.1649%2019.3623%2015.6999%2018.7238%2016.9233%2017.6604C18.1467%2016.597%2018.9926%2015.1658%2019.3343%2013.5813C19.6761%2011.9968%2019.4953%2010.3442%2018.8191%208.871C18.7454%208.69189%2018.744%208.49126%2018.8149%208.31108C18.8859%208.13091%2019.0238%207.98516%2019.1997%207.90435C19.3757%207.82353%2019.5761%207.81391%2019.759%207.8775C19.9419%207.94109%2020.0932%208.07295%2020.1811%208.2455C20.9925%2010.0134%2021.2094%2011.9966%2020.7992%2013.8981C20.3889%2015.7996%2019.3736%2017.5169%2017.9054%2018.793C16.4372%2020.069%2014.5951%2020.835%2012.655%2020.9762C10.7149%2021.1175%208.78129%2020.6263%207.14375%2019.5764C5.50622%2018.5264%204.25294%2016.9742%203.57164%2015.1522C2.89034%2013.3301%202.8177%2011.3364%203.3646%209.46967C3.9115%207.6029%205.04849%205.96357%206.60528%204.79723C8.16206%203.63089%2010.0548%203.00033%2012%203V4.5Z'%20fill='white'/%3e%3cpath%20d='M12%206.69889V0.800885C12%200.72963%2012.0203%200.659857%2012.0586%200.599737C12.0968%200.539617%2012.1514%200.491638%2012.2159%200.461419C12.2805%200.4312%2012.3523%200.419992%2012.4229%200.429106C12.4936%200.438221%2012.5602%200.467282%2012.615%200.512885L16.155%203.46189C16.1972%203.49708%2016.2311%203.54112%2016.2544%203.59089C16.2777%203.64065%2016.2898%203.69493%2016.2898%203.74988C16.2898%203.80484%2016.2777%203.85912%2016.2544%203.90888C16.2311%203.95865%2016.1972%204.00269%2016.155%204.03788L12.615%206.98689C12.5602%207.03249%2012.4936%207.06155%2012.4229%207.07066C12.3523%207.07978%2012.2805%207.06857%2012.2159%207.03835C12.1514%207.00813%2012.0968%206.96015%2012.0586%206.90003C12.0203%206.83991%2012%206.77014%2012%206.69889Z'%20fill='white'/%3e%3c/svg%3e",il="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3951%209.882L9.96005%2010.3125L9.83705%2010.8825L10.5121%2011.007C10.9531%2011.112%2011.0401%2011.271%2010.9441%2011.7105L9.83705%2016.9125C9.54605%2018.258%209.99455%2018.891%2011.0491%2018.891C11.8666%2018.891%2012.8161%2018.513%2013.2466%2017.994L13.3785%2017.37C13.0785%2017.634%2012.6405%2017.739%2012.3495%2017.739C11.937%2017.739%2011.7871%2017.4495%2011.8936%2016.9395L13.3951%209.882ZM13.5001%206.75C13.5001%207.14782%2013.342%207.52936%2013.0607%207.81066C12.7794%208.09196%2012.3979%208.25%2012.0001%208.25C11.6022%208.25%2011.2207%208.09196%2010.9394%207.81066C10.6581%207.52936%2010.5001%207.14782%2010.5001%206.75C10.5001%206.35218%2010.6581%205.97064%2010.9394%205.68934C11.2207%205.40804%2011.6022%205.25%2012.0001%205.25C12.3979%205.25%2012.7794%205.40804%2013.0607%205.68934C13.342%205.97064%2013.5001%206.35218%2013.5001%206.75Z'%20fill='white'/%3e%3c/svg%3e",I9=B.div.attrs(({$active:e,$finished:t,$discarded:n,$category:r})=>r==="active"?{style:{background:`conic-gradient(
            ${m.blue5} 0%,
            ${m.blue5+S[40]} ${e}%,
            ${m.validDark+S[20]} ${e}%,
            ${m.validDark+S[10]} ${t}%,
            ${m.invalidDark+S[20]} ${t}%,
            ${m.invalidDark+S[10]} ${n}%,
            transparent ${n}%
          )`}}:r==="finished"?{style:{background:`conic-gradient(
            ${m.blue5+S[20]} 0%,
            ${m.blue5+S[10]} ${e}%,
            ${m.validDark} ${e}%,
            ${m.validDark+S[40]} ${t}%,
            ${m.invalidDark+S[20]} ${t}%,
            ${m.invalidDark+S[10]} ${n}%,            transparent ${n}%
          )`}}:r==="discarded"?{style:{background:`conic-gradient(
            ${m.blue5+S[20]} 0%,
            ${m.blue5+S[10]} ${e}%,
            ${m.validDark+S[20]} ${e}%,
            ${m.validDark+S[10]} ${t}%,
            ${m.invalidDark} ${t}%,
            ${m.invalidDark+S[40]} ${n}%,
            transparent ${n}%
          )`}}:{style:{background:`conic-gradient(
            ${m.blue5} 0%,
            ${m.blue5+S[40]} ${e}%,
            ${m.validDark} ${e}%,
            ${m.validDark+S[40]} ${t}%,
            ${m.invalidDark} ${t}%,
            ${m.invalidDark+S[40]} ${n}%,
            transparent ${n}%
          )`}})`
  position: relative;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  flex-shrink: 0;

  .icon {
    @starting-style {
      opacity: 0;
    }
  }

  label {
    position: absolute;
    top: 3rem;
    left: calc(50% - 5rem);
    width: 10rem;
    margin-bottom: 0;
    transform-origin: 5rem 7rem;
    transition: all 0.5s;
    pointer-events: none;

    @starting-style {
      opacity: 0;
    }

    & > div {
      display: flex;
      flex-direction: column;
      pointer-events: all;
      cursor: pointer;
    }

    span {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      white-space: nowrap;
      text-shadow: ${O.shadowSmall};
      pointer-events: none;
    }
  }

  .reset {
    position: absolute;
    top: 0;
    right: 0;
  }

  .ball {
    height: 2rem;
    width: 2rem;
    background-color: ${m.white+S[15]};
    border-radius: 50%;
    margin-inline: auto;
  }
`;function T1({data:e,onSelect:t}){const n=e.filter(_=>_.status==="active"),r=e.filter(_=>_.status==="discarded"),i=e.filter(_=>_.status==="finished"),o=e.length,s=n.length/o*100,l=r.length/o*100,a=i.length/o*100,[c,d]=N.useState(0),[f,g]=N.useState(0),[y,x]=N.useState(0),[w,E]=N.useState(!1),[h,p]=N.useState(!1),[v,j]=N.useState(""),k=_=>{_.target.classList.contains("active")?(j("active"),t("active")):_.target.classList.contains("finished")?(j("finished"),t("finished")):_.target.classList.contains("discarded")&&(t("discarded"),j("discarded"))},$=()=>{j(""),t("")};N.useEffect(()=>{let _,z;const de=s*10,je=Ve=>{_||(_=Ve);const $t=Ve-_,ze=Math.min($t/de,1),Be=Math.floor(ze*s);d(Be),ze<1?z=requestAnimationFrame(je):(d(s),E(!0))};return z=requestAnimationFrame(je),()=>cancelAnimationFrame(z)},[s]),N.useEffect(()=>{if(!w)return;let _,z;const de=a*10,je=Ve=>{_||(_=Ve);const $t=Ve-_,ze=Math.min($t/de,1),Be=Math.floor(ze*a);g(Be),ze<1?z=requestAnimationFrame(je):(g(a),p(!0))};return z=requestAnimationFrame(je),()=>cancelAnimationFrame(z)},[a,w]),N.useEffect(()=>{if(!w||!h)return;let _,z;const de=l*10,je=Ve=>{_||(_=Ve);const $t=Ve-_,ze=Math.min($t/de,1),Be=Math.floor(ze*l);x(Be),ze<1?z=requestAnimationFrame(je):x(l)};return z=requestAnimationFrame(je),()=>cancelAnimationFrame(z)},[l,w,h]);const C=3.6*s-360*s/100/2,T=3.6*(s+a)-360*a/100/2,M=3.6*(s+a+l)-360*l/100/2;return u.jsxs(I9,{$active:c,$finished:c+f,$discarded:c+f+y,$category:v,onClick:k,children:[v!==""&&u.jsx("img",{className:"icon reset",src:L9,alt:"Refresh icon",onClick:$}),c?u.jsx("label",{style:{transform:`rotate(${C}deg)`,opacity:`${v!=="active"&&v!==""?.5:1}`},children:s>12.5||v==="active"?u.jsxs("div",{className:"active",style:{transform:`rotate(-${C}deg)`},children:[u.jsxs("span",{children:[n.length," project",n.length>1&&"s"]}),u.jsxs("span",{children:["(",Yr(s),"%)"]})]}):u.jsx("div",{className:"ball",style:{transform:`rotate(-${C}deg)`},children:u.jsx("img",{className:"icon active",src:il,alt:"Info icon"})})}):"",f?u.jsx("label",{style:{transform:`rotate(${T}deg)`,opacity:`${v!=="finished"&&v!==""?.5:1}`},children:a>12.5||v==="finished"?u.jsxs("div",{className:"finished",style:{transform:`rotate(-${T}deg)`},children:[u.jsxs("span",{children:[i.length," project",i.length>1&&"s"]}),u.jsxs("span",{children:["(",Yr(a),"%)"]})]}):u.jsx("div",{className:"ball",style:{transform:`rotate(-${T}deg)`},children:u.jsx("img",{className:"icon finished",src:il,alt:"Info icon"})})}):"",y?u.jsx("label",{style:{transform:`rotate(${M}deg)`,opacity:`${v!=="discarded"&&v!==""?.5:1}`},children:l>12.5||v==="discarded"?u.jsxs("div",{className:"discarded",style:{transform:`rotate(-${M}deg)`},children:[u.jsxs("span",{children:[r.length," project",r.length>1&&"s"]}),u.jsxs("span",{children:["(",Yr(l),"%)"]})]}):u.jsx("div",{className:"ball",style:{transform:`rotate(-${M}deg)`},children:u.jsx("img",{className:"icon discarded",src:il,alt:"Info icon"})})}):""]})}T1.propTypes={data:P.array,onSelect:P.func};const z9=B.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex-grow: 1;
  max-height: 20rem;
  width: 20rem;
  max-width: 20rem;

  p {
    width: 100%;
    text-align: center;
  }
  .values-container {
    display: flex;
    gap: 0.8rem;

    span {
      font-size: 1.6rem;
      text-align: center;
      width: 100%;
    }
  }

  .bars-container {
    display: flex;
    align-items: flex-end;
    gap: 0.8rem;
    height: 100%;
    border-bottom: 1px dashed ${m.white+S[5]};
    border-top: 1px dashed ${m.white+S[5]};

    .bar {
      width: 100%;
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      transform-origin: center 100%;
      transition: all 1s;

      @starting-style {
        transform: scaleY(0);
      }

      &.active {
        height: ${({$active:e,$part:t})=>e*t+"%"};
        background: linear-gradient(to top, ${m.blue5+S[40]}, ${m.blue5});
        border-top-left-radius: ${({$active:e})=>e===0?"0":".4"}rem;
        border-top-right-radius: ${({$active:e})=>e===0?"0":".4"}rem;
      }
      &.finished {
        height: ${({$finished:e,$part:t})=>e*t+"%"};
        background: linear-gradient(to top, ${m.validDark+S[40]}, ${m.validDark});
        border-top-left-radius: ${({$finished:e})=>e===0?"0":".4"}rem;
        border-top-right-radius: ${({$finished:e})=>e===0?"0":".4"}rem;
      }
      &.discarded {
        height: ${({$discarded:e,$part:t})=>e*t+"%"};
        background: linear-gradient(to top, ${m.invalidDark+S[40]}, ${m.invalidDark});
        border-top-left-radius: ${({$discarded:e})=>e===0?"0":".4"}rem;
        border-top-right-radius: ${({$discarded:e})=>e===0?"0":".4"}rem;
      }
    }
  }
`;function E1({projects:e,all:t}){const n=e.reduce((i,o)=>(o.tasks.forEach(s=>{s.status in i?i[s.status]+=1:i[s.status]=1}),i),{active:0,finished:0,discarded:0});let r=0;return(n.active||n.finished||n.discarded)&&(r=100/Math.max(n.active,n.finished,n.discarded)),u.jsxs(z9,{$active:n.active,$finished:n.finished,$discarded:n.discarded,$part:r,children:[u.jsxs("p",{children:[t?"All":"Category"," tasks"]}),u.jsxs("div",{className:"values-container",children:[u.jsx("span",{children:n.active}),u.jsx("span",{children:n.finished}),u.jsx("span",{children:n.discarded})]}),u.jsxs("div",{className:"bars-container",children:[u.jsx("div",{className:"bar active"}),u.jsx("div",{className:"bar finished"}),u.jsx("div",{className:"bar discarded"})]})]})}E1.propTypes={projects:P.array,all:P.bool};const O9=B.div`
  display: flex;
  gap: 1.6rem;

  .charts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.8rem;
  }

  .vr {
    display: none;
  }

  @container dashboard (max-width: 664px) {
    flex-direction: column;

    .charts {
      flex-direction: row;
      justify-content: space-around;
    }

    ul {
      min-height: 17.2rem;
      max-height: 35.6rem;
    }

    .vr {
      display: block;
    }

    hr {
      display: none;
    }
  }
`;function b1({className:e}){const t=W(f=>f.projects),[n,r]=N.useState(""),i=f=>{r(f)},o=f=>{Ht(f,m.white+S[3],"transparent")},s=f=>{Vt(f,"transparent")},l=t.filter(f=>f.status==="active"),a=t.filter(f=>f.status==="finished"),c=t.filter(f=>f.status==="discarded");let d=[...l,...a,...c];return n==="active"?d=l:n==="finished"?d=a:n==="discarded"&&(d=c),u.jsxs(O9,{className:`${e} box`,onMouseMove:o,onMouseLeave:s,children:[u.jsxs("div",{className:"charts",children:[u.jsx(T1,{data:t,onSelect:i}),u.jsx("hr",{}),u.jsx("span",{className:"vr"}),u.jsx(E1,{projects:d,all:n===""})]}),u.jsx(j0,{category:n,children:d.map((f,g)=>u.jsx(S0,{item:f,style:{transition:`opacity .25s ${.2*g}s, transform .5s ${.2*g}s`}},f.id))})]})}b1.propTypes={className:P.string};const R9=B.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      font-size: 1.6rem;
    }

    .button-group {
      display: flex;

      button {
        padding-inline: 0.8rem;
        border-radius: 0;

        &:first-of-type {
          border-top-left-radius: 0.8rem;
          border-bottom-left-radius: 0.8rem;
        }

        &:last-of-type {
          border-top-right-radius: 0.8rem;
          border-bottom-right-radius: 0.8rem;
        }
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    height: 100%;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 0;
      height: 2.2rem;

      label {
        margin-bottom: 0;

        @starting-style {
          opacity: 0;
          transform: translateX(-1rem);
        }
      }

      span {
        text-transform: lowercase;
        font-size: 1.6rem;

        @starting-style {
          opacity: 0;
          transform: translateX(1rem);
        }
      }
    }
  }
`;function N1({className:e}){const t=W(w=>w.projects),[n,r]=N.useState("day"),i=w=>{Ht(w,m.white+S[3],"transparent")},o=w=>{Vt(w,"transparent")},s=Jn(G(),n),l=t.reduce((w,E)=>(E.tasks.forEach(h=>{h.trackLogs.forEach(p=>{p.start>s.start&&p.start<s.end&&(w+=p.time)})}),w),0),a=t.reduce((w,E)=>(E.dateCreated>s.start&&E.dateCreated<s.end&&w++,w),0),c=t.reduce((w,E)=>(E.dateFinished>s.start&&E.dateFinished<s.end&&w++,w),0),d=t.reduce((w,E)=>(E.dateDiscarded>s.start&&E.dateDiscarded<s.end&&w++,w),0),f=t.reduce((w,E)=>(E.tasks.forEach(h=>{h.dateCreated>s.start&&h.dateCreated<s.end&&w++}),w),0),g=t.reduce((w,E)=>(E.tasks.forEach(h=>{h.dateFinished>s.start&&h.dateFinished<s.end&&w++}),w),0),y=t.reduce((w,E)=>(E.tasks.forEach(h=>{h.dateDiscarded>s.start&&h.dateDiscarded<s.end&&w++}),w),0),x=w=>{w.target.textContent==="D"?r("day"):w.target.textContent==="W"?r("week"):w.target.textContent==="M"?r("month"):w.target.textContent==="Y"&&r("year")};return u.jsxs(R9,{className:`${e} box`,onMouseMove:i,onMouseLeave:o,children:[u.jsxs("div",{className:"header",children:[u.jsx("h2",{children:"Activity"}),u.jsxs("div",{className:"button-group",onClick:x,children:[u.jsx(ve,{className:n==="day"?"active":"",children:"D"}),u.jsx(ve,{className:n==="week"?"active":"",children:"W"}),u.jsx(ve,{className:n==="month"?"active":"",children:"M"}),u.jsx(ve,{className:n==="year"?"active":"",children:"Y"})]})]}),u.jsx("hr",{}),u.jsxs("div",{className:"body",children:[u.jsxs("span",{children:[u.jsx("label",{style:{transition:"all .1s .05s ease-out"},children:"Time tracked"}),u.jsx(vt,{value:l,style:{transition:"all .1s .05s ease-out"}},Q())]}),u.jsxs("span",{children:[u.jsx("label",{style:{transition:"all .1s .1s ease-out"},children:"Projects created"}),u.jsx("span",{style:{transition:"all .1s .1s ease-out"},children:a},Q())]}),u.jsxs("span",{children:[u.jsx("label",{style:{transition:"all .1s .15s ease-out"},children:"Projects finished"}),u.jsx("span",{style:{transition:"all .1s .15s ease-out"},children:c},Q())]}),u.jsxs("span",{children:[u.jsx("label",{style:{transition:"all .1s .2s ease-out"},children:"Projects discarded"}),u.jsx("span",{style:{transition:"all .1s .2s ease-out"},children:d},Q())]}),u.jsxs("span",{children:[u.jsx("label",{style:{transition:"all .1s .25s ease-out"},children:"Tasks created"}),u.jsx("span",{style:{transition:"all .1s .25s ease-out"},children:f},Q())]}),u.jsxs("span",{children:[u.jsx("label",{style:{transition:"all .1s .3s ease-out"},children:"Tasks finished"}),u.jsx("span",{style:{transition:"all .1s .3s ease-out"},children:g},Q())]}),u.jsxs("span",{children:[u.jsx("label",{style:{transition:"all .1s .35s ease-out"},children:"Tasks discarded"}),u.jsx("span",{style:{transition:"all .1s .35s ease-out"},children:y},Q())]})]})]})}N1.propTypes={className:P.string};const A9="/easytrack/assets/gear-DJ00mRTm.svg",F9=B.div`
  position: absolute;
  top: ${({$overlap:e,$overlapNum:t})=>e!==null?100/t*e:0}%;
  bottom: 0;
  left: ${({$start:e})=>e+"%"};

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({$overlapNum:e})=>e!==null?100/e:100}%;
  width: ${({$width:e})=>e+"%"};
  border: 1px solid transparent;
  border-top-color: ${m.white+S[10]};
  border-radius: 0.8rem;
  box-shadow: ${O.cardShadowSharp}, ${O.cardShadowSoft};
  backdrop-filter: blur(2px);
  cursor: pointer;
  overflow: hidden;

  transition: all 0.25s;

  &.start {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.end {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.active {
    background-color: ${m.white+S[3]};

    &:hover {
      box-shadow: ${O.fullGlowActive};
    }

    &.targeted {
      background-color: ${m.blue3};
    }
  }

  &.finished {
    background-color: ${m.validDark+S[20]};

    &:hover {
      box-shadow: ${O.fullGlowActiveValid};
    }

    &.targeted {
      background-color: ${m.valid+S[40]};
    }
  }

  &.discarded {
    background-color: ${m.invalidDark+S[20]};

    &:hover {
      box-shadow: ${O.fullGlowActiveInvalid};
    }

    &.targeted {
      background-color: ${m.invalid+S[40]};
    }
  }

  p {
    line-height: 2.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    pointer-events: none;
    margin-inline: 1.2rem;
  }
`;function _1({task:e,log:t,timeFrame:n,targetId:r,handleInfo:i,overlap:o,overlapNum:s}){const l=he(),c=W(h=>h.projects).find(h=>h.id===e.projectId);let d=(t.start-n.start)/(n.end-n.start)*100,f=(t.end-t.start)/(n.end-n.start)*100,g=!1;t.start<n.start&&(d=0,f=(t.end-n.start)/(n.end-n.start)*100,g=!0);let y=!1;t.end>n.end&&(f=100-d,y=!0);const x=()=>{i({taskId:e.id,taskName:e.name,logTime:t.time})},w=()=>{i(h=>({...h,taskId:null}))},E=()=>{l(F.setTempData(e)),l(D.setFormType("task-details")),c.status==="active"?l(D.changePage("projects")):l(D.changePage("archive"))};return u.jsx(F9,{$start:d,$width:f,$overlap:o,$overlapNum:s,className:`bar ${e.status} ${e.id===r?"targeted":""} ${g?"start":""} ${y?"end":""}`,onMouseEnter:x,onMouseLeave:w,onClick:E,children:u.jsx("p",{children:e.name})})}_1.propTypes={task:P.object,log:P.object,timeFrame:P.object,targetId:P.string,handleInfo:P.func,overlap:P.oneOfType([P.number,P.oneOf([null])]),overlapNum:P.number};const H9=B.div`
  position: relative;
  display: inline-block;
  height: 100%;
  font-size: 1.6rem;
`;function P1({date:e,timeScale:t,targetId:n,handleInfo:r}){const i=W(d=>d.projects),o=Jn(e,"day"),s=o.start+t.start*36e5,l=o.start+t.end*36e5,a=i.reduce((d,f)=>(f.tasks.forEach(g=>{g.trackLogs.forEach(y=>{(y.start>s&&y.start<l||y.end>s&&y.end<l)&&d.push({task:g,log:y})})}),d),[]),c=Ah(a);return u.jsx(H9,{children:c.flatMap(d=>d.map((f,g)=>u.jsx(_1,{task:f.task,log:f.log,timeFrame:{start:s,end:l},targetId:n,handleInfo:r,overlap:f.overlaps?g:null,overlapNum:f.groupSize},f.task.id+f.log.start)))})}P1.propTypes={date:P.string,timeScale:P.object,targetId:P.string,handleInfo:P.func};const V9=B.div.attrs(({$marker:e})=>({style:{"--marker-position":`${e}%`,"--marker-display":e?"block":"none"}}))`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .column-left {
    display: flex;
    flex-direction: column;

    .options {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        cursor: pointer;

        &.prev {
          transform: rotate(90deg);
        }

        &.next {
          transform: rotate(-90deg);
        }
      }
    }

    .vertical {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      height: 100%;
      margin-top: 0.8rem;

      .segment {
        display: inline-block;
        height: 100%;
        text-align: center;
        align-content: center;
        font-size: 1.6rem;
        padding: 0.8rem;

        @starting-style {
          transform: translateX(-100%);
          opacity: 0;
        }
      }
    }
  }

  .column-right {
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    width: 100%;

    .horizontal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.8rem;
      height: 2.4rem;

      .marker {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        width: 2.6rem;
        white-space: nowrap;

        @starting-style {
          transform: translateY(-100%);
          opacity: 0;
        }
      }
    }

    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      height: 100%;
      margin: 0.8rem 1.3rem 0 2.1rem;

      .tooltip {
        position: absolute;
        display: none;
        flex-direction: column;
        gap: 0.8rem;
        height: fit-content;
        max-width: 20rem;
        padding: 1.2rem;
        z-index: 1;

        &::before {
          border-color: transparent;
        }
      }

      .lines {
        position: absolute;
        inset: -5px 0 0 0;
        display: flex;
        justify-content: space-between;

        .line {
          width: 1px;
          background-color: ${m.white+S[5]};
        }
      }

      &::before {
        display: var(--marker-display);
        content: '';
        position: absolute;
        bottom: 0;
        left: var(--marker-position);
        height: calc(100% + 0.4rem);
        width: 1px;
        background-color: ${m.invalidDark+S[50]};
      }

      &::after {
        display: var(--marker-display);
        content: '';
        position: absolute;
        top: -0.8rem;
        left: calc(var(--marker-position) - 0.2rem);
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
        background-color: ${m.invalidDark};
      }
    }
  }
`;function D1({className:e}){const t=he(),n=W(k=>k.ui.timeline),[r,i]=N.useState(Jn(G(),"week")),[o,s]=N.useState({taskId:null,taskName:"",logTime:null}),l=N.useRef(null),[a,c]=N.useState(null),d=()=>{t(D.setFormType("timeline-settings"))},f=(k,$,C)=>{const T=[];if(C==="24h")for(let M=0;M<=$-k;M++)k+M<10?T.push("0"+(k+M)+":00"):T.push(k+M+":00");else if(C==="12h")for(let M=0;M<=$-k;M++)k+M===0||k+M===24?T.push("12 AM"):k+M===12?T.push("12 PM"):k+M<12?T.push(k+M+" AM"):T.push(k+M-12+" PM");return T},g=k=>{if(k==="days-full")return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];if(k==="days-short")return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];if(k==="dates-full")return p.map($=>U($,"dd.mm.yyyy."));if(k==="dates-short")return p.map($=>U($,"dd.mm.yyyy.").slice(0,-5))},y=k=>{const $=l.current;if(k.target.classList.contains("bar")){const{clientX:C,clientY:T}=k,M=k.currentTarget.getBoundingClientRect(),_=C-M.left,z=T-M.top;$.style.display="flex",$.style.top=z-$.offsetHeight+"px",$.style.left=_+"px"}else $.style.display="none"},x=()=>{i(k=>Jn(k.start-36e5,"week"))},w=()=>{i(k=>Jn(k.end+36e5,"week"))},E=k=>{Ht(k,m.white+S[3],"transparent")},h=k=>{Vt(k,"transparent")},p=[];for(let k=0;k<7;k++)p.push(U(r.start+864e5*k,"yyyy-mm-dd"));const v=f(n.startAt,n.endAt,n.clockType),j=g(n.rowLabel);return N.useEffect(()=>{let k;const $=()=>{const C=G(),T=Jn(C,"day"),M=T.start+n.startAt*36e5,_=T.start+n.endAt*36e5,z=Yr((C-M)/(_-M)*100,2);c(z)};return G()>r.start&&G()<r.end?($(),k=setInterval(()=>{$()},6e4)):c(null),()=>{clearInterval(k)}},[n.startAt,n.endAt,r.start,r.end]),u.jsxs(V9,{className:`${e} box`,$marker:a,onMouseMove:E,onMouseLeave:h,children:[u.jsxs("div",{className:"column-left",children:[u.jsxs("div",{className:"options",children:[u.jsx("img",{src:"/easytrack/chevron-bold.svg",alt:"Arrow left icon",className:"prev",onClick:x}),u.jsx("img",{src:A9,alt:"Settings icon",onClick:d}),u.jsx("img",{src:"/easytrack/chevron-bold.svg",alt:"Arrow right icon",className:"next",onClick:w})]}),u.jsx("div",{className:"vertical",children:j.map((k,$)=>u.jsx("span",{className:"segment",style:{transition:`all .1s ${.05*$}s ease-out`},children:k},k))})]}),u.jsxs("div",{className:"column-right",children:[u.jsx("div",{className:"horizontal",children:v.map((k,$)=>u.jsx("span",{className:"marker",style:{transition:`all .1s ${.05*$}s ease-out`},children:k},k+$))}),u.jsxs("div",{className:"content",onMouseMove:y,children:[u.jsxs("div",{className:"tooltip box",ref:l,children:[u.jsx("p",{children:o.taskName}),u.jsx(vt,{value:o.logTime})]}),u.jsx("div",{className:"lines",children:v.map((k,$)=>u.jsx("div",{className:"line"},$))}),p.map(k=>u.jsx(P1,{date:k,timeScale:{start:n.startAt,end:n.endAt},targetId:o.taskId,handleInfo:s},k))]})]})]})}D1.propTypes={className:P.string};const B9=B.section`
  container-name: dashboard;
  container-type: inline-size;

  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .item {
      padding: 1.6rem;
      height: calc((100vh - 6.5rem) / 2);

      &-4 {
        min-width: 90rem;
      }
    }

    .first-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;
      
      .item {
        height: calc((100vh - 6.5rem) / 2);
        flex: 1 0;

        &-1 {
          width: 55%;
          min-width: 66.4rem;
        }

        &-2 {
          width: 22.5%;
          min-width: 30rem;
        }

        &-3 {
          width: 22.5%;
          min-width: 30rem;
        }
      }
    }
    
    @container dashboard (max-width: 1287px) {
      .first-row .item {
        &-3 {
          height: 30rem;
        }
      }
    }

    @container dashboard (max-width: 1024px) {
      overflow-x: auto;
    }

    @container dashboard (max-width: 979px) {
      .first-row .item {
        &-1 {
          height: 41.6rem;
        }
        
        &-2 {
          height: 30rem;
        }
      }
    }

    @container dashboard (max-width: 664px) {
      .first-row .item {
        height: fit-content;
        min-width: 45rem;

        &-2, &-3 {
          height: 30rem;
        }
      }
    }
    @container dashboard (max-width: 615px) {
      .first-row .item {
        &-2 {
          height: fit-content;
        }
      }
    }
  }
`;function U9(){return u.jsx(B9,{children:u.jsxs("div",{className:"dashboard",children:[u.jsxs("div",{className:"first-row",children:[u.jsx(b1,{className:"item item-1"}),u.jsx(N1,{className:"item item-2"}),u.jsx($1,{className:"item item-3"})]}),u.jsx(D1,{className:"item item-4"})]})})}const W9="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%203C4%201.89543%204.89543%201%206%201H13.222C13.7224%201%2014.2046%201.18757%2014.5735%201.52569L19.3514%205.90549C19.7647%206.28431%2020%206.81919%2020%207.3798V21C20%2022.1046%2019.1046%2023%2018%2023H6C4.89543%2023%204%2022.1046%204%2021V3Z'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M12%209.75C12.1989%209.75%2012.3897%209.82902%2012.5303%209.96967C12.671%2010.1103%2012.75%2010.3011%2012.75%2010.5V12.75H15C15.1989%2012.75%2015.3897%2012.829%2015.5303%2012.9697C15.671%2013.1103%2015.75%2013.3011%2015.75%2013.5C15.75%2013.6989%2015.671%2013.8897%2015.5303%2014.0303C15.3897%2014.171%2015.1989%2014.25%2015%2014.25H12.75V16.5C12.75%2016.6989%2012.671%2016.8897%2012.5303%2017.0303C12.3897%2017.171%2012.1989%2017.25%2012%2017.25C11.8011%2017.25%2011.6103%2017.171%2011.4697%2017.0303C11.329%2016.8897%2011.25%2016.6989%2011.25%2016.5V14.25H9C8.80109%2014.25%208.61032%2014.171%208.46967%2014.0303C8.32902%2013.8897%208.25%2013.6989%208.25%2013.5C8.25%2013.3011%208.32902%2013.1103%208.46967%2012.9697C8.61032%2012.829%208.80109%2012.75%209%2012.75H11.25V10.5C11.25%2010.3011%2011.329%2010.1103%2011.4697%209.96967C11.6103%209.82902%2011.8011%209.75%2012%209.75Z'%20fill='white'/%3e%3cpath%20d='M21%206.75V21C21%2021.7956%2020.6839%2022.5587%2020.1213%2023.1213C19.5587%2023.6839%2018.7956%2024%2018%2024H6C5.20435%2024%204.44129%2023.6839%203.87868%2023.1213C3.31607%2022.5587%203%2021.7956%203%2021V3C3%202.20435%203.31607%201.44129%203.87868%200.87868C4.44129%200.316071%205.20435%200%206%200L14.25%200L21%206.75ZM16.5%206.75C15.9033%206.75%2015.331%206.51295%2014.909%206.09099C14.4871%205.66903%2014.25%205.09674%2014.25%204.5V1.5H6C5.60218%201.5%205.22064%201.65804%204.93934%201.93934C4.65804%202.22064%204.5%202.60218%204.5%203V21C4.5%2021.3978%204.65804%2021.7794%204.93934%2022.0607C5.22064%2022.342%205.60218%2022.5%206%2022.5H18C18.3978%2022.5%2018.7794%2022.342%2019.0607%2022.0607C19.342%2021.7794%2019.5%2021.3978%2019.5%2021V6.75H16.5Z'%20fill='white'/%3e%3c/svg%3e",M1="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_254_3158)'%3e%3ccircle%20cx='12'%20cy='12'%20r='11'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M9.80452%207.50126C9.6669%207.49121%209.52918%207.51931%209.4065%207.58248C9.28393%207.64563%209.18115%207.74134%209.10943%207.8591C9.03772%207.97685%208.99986%208.1121%209%208.24998V15.75C8.99989%2015.8879%209.03781%2016.0232%209.10958%2016.1409C9.18136%2016.2587%209.28422%2016.3544%209.40686%2016.4175C9.52949%2016.4806%209.66715%2016.5086%209.80469%2016.4986C9.94224%2016.4885%2010.0744%2016.4407%2010.1865%2016.3605L15.4365%2012.6105C15.5337%2012.5411%2015.613%2012.4495%2015.6676%2012.3433C15.7223%2012.2371%2015.7509%2012.1194%2015.7509%2012C15.7509%2011.8805%2015.7223%2011.7628%2015.6676%2011.6566C15.613%2011.5505%2015.5337%2011.4589%2015.4365%2011.3895L10.1865%207.63948C10.0743%207.55915%209.94214%207.51132%209.80452%207.50126Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.4853%2020.4853C18.2348%2022.7357%2015.1826%2024%2012%2024C8.8174%2024%205.76516%2022.7357%203.51472%2020.4853C1.26428%2018.2348%200%2015.1826%200%2012C0%208.8174%201.26428%205.76516%203.51472%203.51472C5.76516%201.26428%208.8174%200%2012%200C15.1826%200%2018.2348%201.26428%2020.4853%203.51472C22.7357%205.76516%2024%208.8174%2024%2012C24%2015.1826%2022.7357%2018.2348%2020.4853%2020.4853ZM4.57538%2019.4246C6.54451%2021.3938%209.21523%2022.5%2012%2022.5C14.7848%2022.5%2017.4555%2021.3938%2019.4246%2019.4246C21.3938%2017.4555%2022.5%2014.7848%2022.5%2012C22.5%209.21523%2021.3938%206.54451%2019.4246%204.57538C17.4555%202.60625%2014.7848%201.5%2012%201.5C9.21523%201.5%206.54451%202.60625%204.57538%204.57538C2.60625%206.54451%201.5%209.21523%201.5%2012C1.5%2014.7848%202.60625%2017.4555%204.57538%2019.4246Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_254_3158'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",G9=B.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem 2.4rem 1.6rem 1.6rem;
  border: 1px ${({$isTracked:e})=>e?"dashed":"solid"} ${({$status:e})=>{if(e==="active")return m.white+S[10];if(e==="finished")return m.valid+S[20];if(e==="discarded")return m.invalid+S[20]}};
  border-radius: 0.8rem;
  background-color: transparent;
  transition: all 0.25s ease-out;
  overflow: hidden;
  opacity: ${({$initial:e})=>e?0:1};
  z-index: 1;
  cursor: pointer;

  ${({$initial:e,$delay:t,$status:n})=>{if(e){if(n==="active")return`animation: .75s ease-in-out ${t}ms popIn forwards, .75s ease-in-out ${t}ms highlighter forwards;`;if(n==="finished")return`animation: .75s ease-in-out ${t}ms popIn forwards, .75s ease-in-out ${t}ms highlighterGreen forwards;`;if(n==="discarded")return`animation: .75s ease-in-out ${t}ms popIn forwards, .75s ease-in-out ${t}ms highlighterRed forwards;`}else return"&:hover { animation: .5s pulseShadow forwards}"}}

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0.4rem);
    right: 6.4rem;
    height: 80%;
    aspect-ratio: 1/1;
    transform: translateY(-50%);
    background-image: url(${"/easytrack/stopwatch.svg"});
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: -1;
    opacity: 0;
    filter: blur(5px);

    ${({$isTracked:e})=>{if(e)return"opacity: .1"}}
  }

  &:hover {
    padding-right: 6.4rem;

    .options {
      padding: 1.6rem 1.2rem;
      width: 4.8rem;
      box-shadow: ${({$status:e})=>{if(e==="active")return O.fullGlowActive;if(e==="finished")return O.fullGlowActiveValid;if(e==="discarded")return O.fullGlowActiveInvalid}};

      .icon {
        opacity: 1;
      }
    }
  }

  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .tags {
    display: flex;
    gap: 1.2rem;
  }

  .options {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    width: 0;
    padding: 0.4rem;
    background-color: ${({$status:e})=>{if(e==="active")return m.blue5+S[75];if(e==="finished")return m.validDark+S[75];if(e==="discarded")return m.invalidDark+S[75]}};
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    transition: all 0.25s ease-out;

    .icon {
      transition: color 0.25s, opacity 0.25s 0.25s;
      opacity: 0;
    }
  }
`;function $0({archived:e=!1,task:t,index:n}){const r=he(),i=W(w=>w.data.trackers),[o,s]=N.useState(!0),l=w=>{w.stopPropagation(),r(D.setFormType("task-details")),r(F.setTempData(t))},a=w=>{w.stopPropagation(),r(D.setFormType("confirmation")),r(D.setConfirmationType("finish-task")),r(F.setTempData(t))},c=w=>{w.stopPropagation(),r(D.setFormType("confirmation")),r(D.setConfirmationType("discard-task")),r(F.setTempData(t))},d=w=>{w.stopPropagation(),r(g1(t))},f=w=>{w.stopPropagation(),r(D.setFormType("confirmation")),r(D.setConfirmationType("restore-task")),r(F.setTempData(t))},g=w=>{w.stopPropagation(),r(D.setFormType("confirmation")),r(D.setConfirmationType("remove-task")),r(F.setTempData(t))},y=w=>{w.stopPropagation(),r(D.changePage("trackers"))};N.useEffect(()=>{const w=setTimeout(()=>{s(!1)},n*250+1e3);return()=>clearTimeout(w)},[n]);const x=i.some(w=>w.taskId===t.id);return u.jsxs(G9,{$initial:o,$delay:n*250+250,$isTracked:x,$status:t.status,onClick:l,children:[u.jsx("h2",{children:t.name}),u.jsxs("div",{className:"tags",children:[u.jsx(vt,{value:t.time}),!e&&u.jsx("span",{className:`priority-tag ${t.priority}`,children:t.priority})]}),u.jsx("p",{children:t.description}),u.jsxs("div",{className:"options",children:[t.status==="active"&&!e&&(x?u.jsx("img",{className:"icon",src:"/easytrack/stopwatch.svg",alt:"Stopwatch icon",onClick:y}):u.jsxs(u.Fragment,{children:[u.jsx("img",{className:"icon",src:M1,alt:"Play icon",onClick:d}),u.jsx("img",{className:"icon",src:w0,alt:"Check icon",onClick:a}),u.jsx("img",{className:"icon",src:x0,alt:"Discard icon",onClick:c})]})),t.status==="discarded"&&!e&&u.jsx("img",{className:"icon",src:C0,alt:"Undo icon",onClick:f}),(t.status==="discarded"||t.status==="finished")&&u.jsx("img",{className:"icon",src:k0,alt:"Trash icon",onClick:g})]})]})}$0.propTypes={archived:P.bool,task:P.object,index:P.number};const Z9=B.li`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem;
  cursor: pointer;
  background-clip: padding-box;

  &::after {
    content: '';
    position: absolute;
    top: 6rem;
    right: 12rem;
    height: 10rem;
    aspect-ratio: 1/1;
    background-image: url(${"/easytrack/stopwatch.svg"});
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
    filter: blur(5px);
    z-index: -1;
    opacity: 0;
    transition: all 0.5s ease-out;

    ${({$taskTracked:e,$isExpanded:t})=>{if(e&&!t)return`
        opacity: 0.1;
        transform: translateY(-2rem);
        `}}
  }

  &:hover {
    animation: 0.5s pulseShadow forwards;

    .card-header {
      &-icons {
        position: unset;

        .icon {
          opacity: 1;
        }
      }
    }
  }

  .card-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      line-height: 2.4rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &-icons {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      gap: 0.8rem;

      .icon {
        opacity: 0;
      }
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .info {
      display: flex;
      justify-content: space-between;
      gap: 1.2rem;

      .dates {
        display: flex;
        gap: 1.2rem;
        width: 100%;

        span {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          line-height: 1.6rem;
          font-size: 1.4rem;

          &.yellow {
            color: ${m.warning};
          }
          &.red {
            color: ${m.invalid};
          }
        }
      }

      .tags {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .project-description {
      font-size: 1.6rem;
      line-height: 150%;
      white-space: pre-line;
    }

    .project-tasks {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      opacity: 0;
      transition: all 0.5s;

      &.show {
        opacity: 1;
      }

      .chart-nav {
        display: flex;
        flex-wrap: nowrap;
        height: 3.2rem;
        width: 100%;

        button {
          height: 100%;
          padding: 0.8rem;
          font-size: 1.6rem;
          line-height: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: ${m.white};
          background-color: transparent;
          transition: all 0.25s ease-out;
          cursor: pointer;

          &.active {
            background-color: ${m.blue5+S[50]};
            border: 1px solid ${m.blue5+S[50]};

            &.target,
            &:hover {
              background-color: ${m.blue5+S[75]};
              border-color: ${m.blue5};
              box-shadow: ${O.outerGlowHover};
            }
          }
          &.finished {
            background-color: ${m.validDark+S[50]};
            border: 1px solid ${m.validDark+S[50]};
            border-left: none;
            border-right: none;

            &.target,
            &:hover {
              background-color: ${m.validDark+S[75]};
              border-color: ${m.validDark};
              box-shadow: ${O.outerGlowHoverValid};
            }
          }
          &.discarded {
            background-color: ${m.invalidDark+S[50]};
            border: 1px solid ${m.invalidDark+S[50]};

            &.target,
            &:hover {
              background-color: ${m.invalidDark+S[75]};
              border-color: ${m.invalidDark};
              box-shadow: ${O.outerGlowHoverInvalid};
            }
          }

          &:first-of-type {
            border-top-left-radius: 0.8rem;
            border-bottom-left-radius: 0.8rem;
            border-right: none;
          }
          &:last-of-type {
            border-top-right-radius: 0.8rem;
            border-bottom-right-radius: 0.8rem;
            border-left: none;
          }
        }
      }
    }
  }
`;function L1({project:e,isExpanded:t,onClick:n}){const r=he(),i=W(z=>z.data.trackers.some(de=>de.projectId===e.id)),[o,s]=N.useState("active"),l=z=>{z.stopPropagation(),r(D.setFormType("edit-project")),r(F.setTempData(e))},a=z=>{z.stopPropagation(),r(D.setFormType("confirmation")),r(D.setConfirmationType("finish-project")),r(F.setTempData(e))},c=z=>{z.stopPropagation(),r(D.setFormType("confirmation")),r(D.setConfirmationType("discard-project")),r(F.setTempData(e))},d=z=>{z.stopPropagation(),r(D.setFormType("new-task")),r(F.setTempData(e.id))},f=z=>{z.stopPropagation(),z.target.className!==o&&!z.target.classList.contains("target")&&s(z.target.className)},g=z=>{Ht(z,m.white+S[3],"transparent")},y=z=>{Vt(z,"transparent")};let x;e.tasks&&(x=e.tasks.reduce((z,de)=>z+de.time,0));let w=e.tasks;const E=w.filter(z=>z.status==="active"),h=w.filter(z=>z.status==="finished"),p=w.filter(z=>z.status==="discarded"),v=(E.length/w.length*100).toFixed(0)+"%",j=(h.length/w.length*100).toFixed(0)+"%",k=(p.length/w.length*100).toFixed(0)+"%",$=`(${E.length} task${E.length>1?"s":""}, ${v})`,C=`(${h.length} task${h.length>1?"s":""}, ${j})`,T=`(${p.length} task${p.length>1?"s":""}, ${k})`;o==="active"?w=E:o==="finished"?w=h:o==="discarded"&&(w=p),w.length===0&&(E.length>0?(w=E,s("active")):h.length>0?(w=h,s("finished")):p.length>0?(w=p,s("discarded")):t&&o!=="active"&&s("active"));const M=jd(w);let _="";return e.deadline-G()<2592e5&&(_="yellow"),e.deadline<G()&&(_="red"),u.jsxs(Z9,{className:"box",$isExpanded:t,$taskTracked:i,onClick:n,onMouseMove:g,onMouseLeave:y,children:[u.jsxs("div",{className:"card-header",children:[u.jsx("h2",{children:e.name}),u.jsxs("div",{className:"card-header-icons",children:[u.jsx("img",{className:"icon",src:v1,alt:"Pencil icon",onClick:l}),u.jsx("img",{className:"icon",src:W9,alt:"Add file icon",onClick:d}),!i&&u.jsxs(u.Fragment,{children:[u.jsx("img",{className:"icon",src:w0,alt:"Check icon",onClick:a}),u.jsx("img",{className:"icon",src:x0,alt:"Discard icon",onClick:c})]})]})]}),u.jsx("hr",{}),u.jsxs("div",{className:"card-body",children:[u.jsxs("div",{className:"info",children:[u.jsxs("div",{className:"dates",children:[u.jsxs("span",{children:[u.jsx("label",{children:"Created:"}),U(e.dateCreated,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(e.dateCreated,"hh:mm:ss")," )"]}),e.dateModified&&u.jsxs("span",{children:[u.jsx("label",{children:"Modified:"}),U(e.dateModified,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(e.dateModified,"hh:mm:ss")," )"]}),e.deadline&&u.jsxs("span",{className:_,children:[u.jsx("label",{children:"Deadline: "}),U(e.deadline,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(e.deadline,"hh:mm:ss")," )"]})]}),u.jsxs("div",{className:"tags",children:[u.jsx(vt,{value:x}),u.jsx("span",{className:`priority-tag ${e.priority}`,children:e.priority})]})]}),u.jsx("p",{className:"project-description",children:e.description}),t&&e.tasks.length!==0&&u.jsxs("ul",{className:`project-tasks ${t?"show":""}`,children:[u.jsxs("div",{className:"chart-nav",onClick:f,children:[E.length!==0&&u.jsxs("button",{className:`active${o==="active"?" target":""}`,style:{width:v},title:`Active ${$}`,children:["Active ",$]}),h.length!==0&&u.jsxs("button",{className:`finished${o==="finished"?" target":""}`,style:{width:j},title:`Finished ${C}`,children:["Finished ",C]}),p.length!==0&&u.jsxs("button",{className:`discarded${o==="discarded"?" target":""}`,style:{width:k},title:`Discarded ${T}`,children:["Discarded ",T]})]}),w.length>0&&M.map((z,de)=>u.jsx($0,{task:z,index:de},z.id))]}),t&&e.tasks.length===0&&u.jsx("p",{className:"warning",children:"There are no tasks in this project yet, please create a task."})]})]})}L1.propTypes={project:P.object,isExpanded:P.bool,onClick:P.func};const Q9=B.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 1.6rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
  }
`;function Y9(){const e=he(),t=W(a=>a.data.tempData),[n,r]=N.useState(()=>{if(t)return Object.hasOwn(t,"projectId")?t.projectId:t.id}),o=W(a=>a.projects).filter(a=>a.status==="active"),s=jd(o),l=()=>{e(D.setFormType("new-project"))};return u.jsxs(Q9,{children:[u.jsx(ve,{className:"active",onClick:l,children:"Create Project"}),o.length!==0?u.jsx("ul",{children:s.map(a=>u.jsx(L1,{project:a,isExpanded:a.id===n,onClick:()=>r(c=>c!==a.id?a.id:null)},a.id))}):u.jsx("p",{className:"warning",children:"Looks like you have no active projects. Add project to start tracking."})]})}const K9="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='11'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M8.04918%208.04918C7.69754%208.40081%207.5%208.87772%207.5%209.375V14.625C7.5%2015.1223%207.69754%2015.5992%208.04918%2015.9508C8.40081%2016.3025%208.87772%2016.5%209.375%2016.5C9.87228%2016.5%2010.3492%2016.3025%2010.7008%2015.9508C11.0525%2015.5992%2011.25%2015.1223%2011.25%2014.625V9.375C11.25%208.87772%2011.0525%208.40081%2010.7008%208.04918C10.3492%207.69754%209.87228%207.5%209.375%207.5C8.87772%207.5%208.40081%207.69754%208.04918%208.04918Z'%20fill='white'/%3e%3cpath%20d='M13.2992%208.04918C12.9475%208.40081%2012.75%208.87772%2012.75%209.375V14.625C12.75%2015.1223%2012.9475%2015.5992%2013.2992%2015.9508C13.6508%2016.3025%2014.1277%2016.5%2014.625%2016.5C15.1223%2016.5%2015.5992%2016.3025%2015.9508%2015.9508C16.3025%2015.5992%2016.5%2015.1223%2016.5%2014.625V9.375C16.5%208.87772%2016.3025%208.40081%2015.9508%208.04918C15.5992%207.69754%2015.1223%207.5%2014.625%207.5C14.1277%207.5%2013.6508%207.69754%2013.2992%208.04918Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.4853%2020.4853C18.2348%2022.7357%2015.1826%2024%2012%2024C8.8174%2024%205.76516%2022.7357%203.51472%2020.4853C1.26428%2018.2348%200%2015.1826%200%2012C0%208.8174%201.26428%205.76516%203.51472%203.51472C5.76516%201.26428%208.8174%200%2012%200C15.1826%200%2018.2348%201.26428%2020.4853%203.51472C22.7357%205.76516%2024%208.8174%2024%2012C24%2015.1826%2022.7357%2018.2348%2020.4853%2020.4853ZM4.57538%2019.4246C6.54451%2021.3938%209.21523%2022.5%2012%2022.5C14.7848%2022.5%2017.4555%2021.3938%2019.4246%2019.4246C21.3938%2017.4555%2022.5%2014.7848%2022.5%2012C22.5%209.21523%2021.3938%206.54451%2019.4246%204.57538C17.4555%202.60625%2014.7848%201.5%2012%201.5C9.21523%201.5%206.54451%202.60625%204.57538%204.57538C2.60625%206.54451%201.5%209.21523%201.5%2012C1.5%2014.7848%202.60625%2017.4555%204.57538%2019.4246Z'%20fill='white'/%3e%3c/svg%3e",X9="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='11'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M8.15901%208.15901C7.73705%208.58097%207.5%209.15326%207.5%209.75V14.25C7.5%2014.8467%207.73705%2015.419%208.15901%2015.841C8.58097%2016.2629%209.15326%2016.5%209.75%2016.5H14.25C14.8467%2016.5%2015.419%2016.2629%2015.841%2015.841C16.2629%2015.419%2016.5%2014.8467%2016.5%2014.25V9.75C16.5%209.15326%2016.2629%208.58097%2015.841%208.15901C15.419%207.73705%2014.8467%207.5%2014.25%207.5H9.75C9.15326%207.5%208.58097%207.73705%208.15901%208.15901Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.4853%2020.4853C18.2348%2022.7357%2015.1826%2024%2012%2024C8.8174%2024%205.76516%2022.7357%203.51472%2020.4853C1.26428%2018.2348%200%2015.1826%200%2012C0%208.8174%201.26428%205.76516%203.51472%203.51472C5.76516%201.26428%208.8174%200%2012%200C15.1826%200%2018.2348%201.26428%2020.4853%203.51472C22.7357%205.76516%2024%208.8174%2024%2012C24%2015.1826%2022.7357%2018.2348%2020.4853%2020.4853ZM4.57538%2019.4246C6.54451%2021.3938%209.21523%2022.5%2012%2022.5C14.7848%2022.5%2017.4555%2021.3938%2019.4246%2019.4246C21.3938%2017.4555%2022.5%2014.7848%2022.5%2012C22.5%209.21523%2021.3938%206.54451%2019.4246%204.57538C17.4555%202.60625%2014.7848%201.5%2012%201.5C9.21523%201.5%206.54451%202.60625%204.57538%204.57538C2.60625%206.54451%201.5%209.21523%201.5%2012C1.5%2014.7848%202.60625%2017.4555%204.57538%2019.4246Z'%20fill='white'/%3e%3c/svg%3e",J9=B.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;

  .card-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      line-height: 2.4rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &-icons {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      gap: 0.8rem;

      .icon {
        opacity: 0;
      }
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .info {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 1rem;

      .fade-out {
        animation: 0.5s ease-out fade-left forwards;
      }
    }

    .task-description {
      font-size: 1.6rem;
      line-height: 1.8rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .button-group {
    display: flex;
    gap: 1rem;
    align-self: flex-end;

    &.blocked {
      pointer-events: none;

      img {
        opacity: 0.5;
      }
    }

    img {
      filter: drop-shadow(${O.shadowSmall});
      cursor: pointer;

      &:hover {
        color: ${m.primary};
        animation: 0.5s ease-out bobbing forwards;
      }
    }
  }
`;function I1({tracker:e}){const t=he(),r=W(w=>w.projects.find(E=>E.id===e.projectId)).tasks.find(w=>w.id===e.taskId),[i,o]=N.useState(()=>{if(e.status==="active")return Math.floor((G()-e.refTime+e.trackedTime)/1e3)*1e3;if(e.status==="paused")return e.trackedTime}),[s,l]=N.useState(()=>{if(e.status==="active")return!0;if(e.status==="paused")return!1}),[a,c]=N.useState(""),d=()=>{l(!0),t(e9(e))},f=()=>{l(!1),t(qm(e,i))},g=()=>{l(!1),c("fade-out"),setTimeout(()=>{const w={projectId:e.projectId,taskId:e.taskId,trackedTime:Math.floor(i/1e3)*1e3,startedAt:e.startedAt,endedAt:G()};t(Ad(w)),t(F.removeTracker(e.taskId))},2e3)},y=w=>{Ht(w,m.white+S[3],"transparent")},x=w=>{Vt(w,"transparent")};return N.useEffect(()=>{let w;return s&&(w=setInterval(()=>{o(E=>E+1e3)},1e3)),()=>{clearInterval(w)}},[s]),u.jsxs(J9,{className:"box",onMouseMove:y,onMouseLeave:x,children:[u.jsx("div",{className:"card-header",children:u.jsx("h2",{children:r.name})}),u.jsx("hr",{}),u.jsxs("div",{className:"card-body",children:[u.jsxs("div",{className:"info",children:[u.jsx(vt,{value:e.time,addition:a?i:null}),u.jsx(vt,{value:i,className:`${s?"active":"paused"} ${a}`})]}),u.jsx("p",{className:"task-description",children:r.description})]}),u.jsx("hr",{}),u.jsxs("div",{className:`button-group ${a&&"blocked"}`,children:[s?u.jsx("img",{src:K9,alt:"Pause icon",onClick:f}):u.jsx("img",{src:M1,alt:"Play icon",onClick:d}),u.jsx("img",{src:X9,alt:"Stop icon",onClick:g})]})]})}I1.propTypes={tracker:P.object};const q9=B.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
`;function e3(){const e=he(),t=W(n=>n.data.trackers);return N.useEffect(()=>{t.length===0&&e(D.changePage("projects"))},[t,e]),u.jsx(q9,{children:t.map(n=>u.jsx(I1,{tracker:n},n.taskId))})}const t3=B.li`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;

  border: 1px solid
    ${({$status:e})=>{if(e==="finished")return m.valid+S[20];if(e==="discarded")return m.invalid+S[20]}};
  border-radius: 0.8rem;
  cursor: pointer;

  &:hover {
    animation: 0.5s pulseShadow forwards;

    .card-header {
      &-icons {
        position: unset;

        .icon {
          opacity: 1;
        }
      }
    }
  }

  .card-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      line-height: 2.4rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &-icons {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      gap: 0.8rem;

      .icon {
        opacity: 0;
      }
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.2rem;

      .dates {
        display: flex;
        gap: 1.2rem;
        width: 100%;

        span {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          line-height: 1.6rem;
          font-size: 1.4rem;
        }
      }
    }

    .project-description {
      font-size: 1.6rem;
      line-height: 150%;
      white-space: pre-line;
    }

    .project-tasks {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      opacity: 0;
      transition: all 0.5s;

      &.show {
        opacity: 1;
      }

      .chart-nav {
        display: flex;
        flex-wrap: nowrap;
        height: 3.2rem;
        width: 100%;

        button {
          height: 100%;
          padding: 0.8rem;
          font-size: 1.6rem;
          line-height: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: ${m.white};
          background-color: transparent;
          transition: all 0.25s ease-out;
          cursor: pointer;

          &.finished {
            background-color: ${m.validDark+S[50]};
            border: 1px solid ${m.validDark+S[50]};
            border-left: none;
            border-right: none;

            &.target,
            &:hover {
              background-color: ${m.validDark+S[75]};
              border-color: ${m.validDark};
              box-shadow: ${O.outerGlowHoverValid};
            }
          }
          &.discarded {
            background-color: ${m.invalidDark+S[50]};
            border: 1px solid ${m.invalidDark+S[50]};

            &.target,
            &:hover {
              background-color: ${m.invalidDark+S[75]};
              border-color: ${m.invalidDark};
              box-shadow: ${O.outerGlowHoverInvalid};
            }
          }

          &:first-of-type {
            border-top-left-radius: 0.8rem;
            border-bottom-left-radius: 0.8rem;
            border-right: none;
          }
          &:last-of-type {
            border-top-right-radius: 0.8rem;
            border-bottom-right-radius: 0.8rem;
            border-left: none;
          }
        }
      }
    }
  }
`;function z1({project:e,isExpanded:t,onClick:n}){const r=he(),[i,o]=N.useState("finished"),s=h=>{h.stopPropagation(),r(D.setFormType("confirmation")),r(D.setConfirmationType("restore-project")),r(F.setTempData(e))},l=h=>{h.stopPropagation(),r(D.setFormType("confirmation")),r(D.setConfirmationType("remove-project")),r(F.setTempData(e))},a=h=>{h.stopPropagation(),h.target.className!==i&&!h.target.classList.contains("target")&&o(h.target.className)};let c;e.tasks&&(c=e.tasks.reduce((h,p)=>h+p.time,0));let d=e.tasks;const f=d.filter(h=>h.status==="finished"),g=d.filter(h=>h.status==="discarded"),y=(f.length/d.length*100).toFixed(0)+"%",x=(g.length/d.length*100).toFixed(0)+"%",w=`(${f.length} task${f.length>1?"s":""}, ${y})`,E=`(${g.length} task${g.length>1?"s":""}, ${x})`;return i==="finished"?d=f:i==="discarded"&&(d=g),d.length===0&&(f.length>0?(d=f,o("finished")):g.length>0?(d=g,o("discarded")):t&&i!=="finished"&&o("finished")),u.jsxs(t3,{$status:e.status,$isExpanded:t,onClick:n,children:[u.jsxs("div",{className:"card-header",children:[u.jsx("h2",{children:e.name}),u.jsxs("div",{className:"card-header-icons",children:[e.status==="discarded"&&u.jsx("img",{className:"icon",src:C0,alt:"Restore icon",onClick:s}),u.jsx("img",{className:"icon",src:k0,alt:"Trash icon",onClick:l})]})]}),u.jsx("hr",{}),u.jsxs("div",{className:"card-body",children:[u.jsxs("div",{className:"info",children:[u.jsxs("div",{className:"dates",children:[u.jsxs("span",{children:[u.jsx("label",{children:"Created:"}),U(e.dateCreated,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(e.dateCreated,"hh:mm:ss")," )"]}),e.dateFinished&&u.jsxs("span",{children:[u.jsx("label",{children:"Finished:"}),U(e.dateFinished,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(e.dateFinished,"hh:mm:ss")," )"]}),e.dateDiscarded&&u.jsxs("span",{children:[u.jsx("label",{children:"Discarded:"}),U(e.dateDiscarded,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(e.dateDiscarded,"hh:mm:ss")," )"]}),e.deadline&&u.jsxs("span",{children:[u.jsx("label",{children:"Deadline: "}),U(e.deadline,"dd.mm.yyyy."),u.jsx("br",{}),"( ",U(e.deadline,"hh:mm:ss")," )"]})]}),u.jsx(vt,{value:c})]}),u.jsx("p",{className:"project-description",children:e.description}),t&&e.tasks.length!==0&&u.jsxs("ul",{className:`project-tasks ${t?"show":""}`,children:[u.jsxs("div",{className:"chart-nav",onClick:a,children:[f.length!==0&&u.jsxs("button",{className:`finished${i==="finished"?" target":""}`,style:{width:y},title:`Finished ${w}`,children:["Finished ",w]}),g.length!==0&&u.jsxs("button",{className:`discarded${i==="discarded"?" target":""}`,style:{width:x},title:`Discarded ${E}`,children:["Discarded ",E]})]}),d.length>0&&d.map((h,p)=>u.jsx($0,{task:h,index:p,archived:!0},h.id))]}),t&&e.tasks.length===0&&u.jsx("p",{className:"warning",children:"There are no tasks in this project."})]})]})}z1.propTypes={project:P.object,isExpanded:P.bool,onClick:P.func};const n3=B.section`
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.4rem;
    width: 100%;
    background-clip: padding-box;
  }

  .tabs {
    flex-direction: row;
    gap: 1.6rem;
    font-size: 1.6rem;
    border-bottom: 2px solid
      ${({$status:e})=>{if(e==="all")return m.blue5+S[75];if(e==="finished")return m.validDark+S[75];if(e==="discarded")return m.invalidDark+S[75]}};

    li {
      text-align: center;
      padding: 0.8rem 0;
      width: 12rem;
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      cursor: pointer;
      transition: all 0.25s ease-out;

      &.all.target {
        background-color: ${m.blue5+S[75]};
        border-color: ${m.blue5};
        box-shadow: ${O.outerGlowHover};
      }
      &.finished.target {
        background-color: ${m.validDark+S[75]};
        border-color: ${m.validDark};
        box-shadow: ${O.outerGlowHoverValid};
      }
      &.discarded.target {
        background-color: ${m.invalidDark+S[75]};
        border-color: ${m.invalidDark};
        box-shadow: ${O.outerGlowHoverInvalid};
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
  }
`;function r3(){const e=he(),t=W(y=>y.data.tempData),[n,r]=N.useState(()=>{if(t)return Object.hasOwn(t,"projectId")?t.projectId:t.id}),i=W(y=>y.projects),o=i.filter(y=>y.status!=="active"),s=i.filter(y=>y.status==="finished"),l=i.filter(y=>y.status==="discarded"),[a,c]=N.useState(()=>{if(s.length&&l.length)return"all";if(s.length&&!l.length)return"finished";if(!s.length&&l.length)return"discarded"});let d;a==="all"?s.length&&l.length?d=o:s.length&&!l.length?(c("finished"),d=s):!s.length&&l.length&&(c("discarded"),d=l):a==="finished"?s.length?d=s:(c("all"),d=o):a==="discarded"&&(l.length?d=l:(c("all"),d=o));const f=y=>{Ht(y,m.white+S[3],"transparent")},g=y=>{Vt(y,"transparent")};return N.useEffect(()=>{o.length===0&&i.length>0?e(D.changePage("dashboard")):o.length===0&&!i.length&&e(D.changePage("projects"))},[o,i,e]),u.jsx(n3,{$status:a,children:u.jsxs("div",{className:"box",onMouseMove:f,onMouseLeave:g,children:[u.jsxs("ul",{className:"tabs",children:[s.length>0&&l.length>0&&u.jsx("li",{className:`all ${a==="all"?"target":""}`,onClick:()=>c("all"),children:"All"}),s.length>0&&u.jsx("li",{className:`finished ${a==="finished"?"target":""}`,onClick:()=>c("finished"),children:"Finished"}),l.length>0&&u.jsx("li",{className:`discarded ${a==="discarded"?"target":""}`,onClick:()=>c("discarded"),children:"Discarded"})]}),u.jsx("ul",{children:d&&d.map(y=>u.jsx(z1,{project:y,isExpanded:y.id===n,onClick:()=>r(x=>x!==y.id?y.id:null)},y.id))})]})})}const i3=B.main`
  position: relative;
  z-index: 1;

  height: 100%;
  padding: 2.4rem;
  overflow-x: hidden;
  overflow-y: auto;

  ${({$page:e,$isMini:t})=>{if(e!=="welcome")return t?"margin-left: 8rem;":"margin-left: 24rem;"}}

  @media only screen and (max-width: 1024px) {
    padding: 1.6rem;
  }
`;function O1({page:e,isMini:t}){let n;return e==="welcome"?n=u.jsx(N9,{}):e==="dashboard"?n=u.jsx(U9,{}):e==="projects"?n=u.jsx(Y9,{}):e==="trackers"?n=u.jsx(e3,{}):e==="archive"&&(n=u.jsx(r3,{})),u.jsx(i3,{$page:e,$isMini:t,children:n})}O1.propTypes={page:P.node,isMini:P.bool};function o3(){const e=he(),t=W(s=>s.ui.page),n=W(s=>s.ui.minimizedHeader),r=W(s=>s.projects),i=W(s=>s.data.trackers),o=N.useRef(!0);return N.useEffect(()=>{if(o.current){e(B5()),e(E5()),o.current=!1;return}else e(b5(r))},[r,e]),N.useEffect(()=>{const s=()=>{i.forEach(l=>{let a;l.status==="active"?a=Math.floor((G()-l.refTime+l.trackedTime)/1e3)*1e3:l.status==="paused"&&(a=l.trackedTime);const c={projectId:l.projectId,taskId:l.taskId,trackedTime:Math.floor(a/1e3)*1e3,startedAt:l.startedAt,endedAt:G()};e(Ad(c))})};return window.addEventListener("unload",s),()=>{window.removeEventListener("unload",s)}},[i,e]),u.jsxs(u.Fragment,{children:[u.jsx(Wm,{page:t,isMini:n}),u.jsx(Jm,{}),u.jsx(m9,{}),u.jsx($9,{}),u.jsx(O1,{page:t,isMini:n})]})}const s3=c5({reducer:{ui:T5,data:S5,projects:j5}});wd(document.getElementById("root")).render(u.jsx(N.StrictMode,{children:u.jsx(Nh,{store:s3,children:u.jsx(o3,{})})}));
