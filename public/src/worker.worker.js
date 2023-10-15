!function(){"use strict";const t=(t,e,n=0)=>{for(let r=n+1;r<t.length;r++)if(!e.includes(t[r]))return{char:t[r],index:r};return{char:null,index:null}};class e{constructor(t){this.FUNCTION_KEYWORD="function",this.ARROW_FUNCTION_KEYWORD="=>",this.code=t.trim(),this.isTraditional=!this.code.indexOf(this.FUNCTION_KEYWORD)}get args(){let t;return t=this.isTraditional?this.code.substring(this.FUNCTION_KEYWORD.length,this.getTraditionalFunctionStartBodyIndex()):this.code.substring(0,this.getArrowFunctionStartIndex()),((t,e)=>{let n="";for(let r=0;r<t.length;r++)e.includes(t[r])||(n+=t[r]);return n})(t,["(",")"," ","*"])}get body(){let e,n,r=!1;if(this.isTraditional)e=this.getTraditionalFunctionStartBodyIndex()+1,n=this.code.lastIndexOf("}");else{e=this.getArrowFunctionStartIndex()+this.ARROW_FUNCTION_KEYWORD.length;const i=t(this.code,[" "],e);if("("===i.char)r=!0,e=i.index+1,n=this.code.lastIndexOf(")");else{let i=t(this.code,[" "],e);"{"===i.char?(e=i.index+1,n=this.code.lastIndexOf("}")):(r=!0,n=this.code.length)}}let i=this.code.substring(e,n).trim();return r&&i?` return ${i}`:i}get isGenerator(){return this.isTraditional&&"*"===t(this.code,[" "],this.FUNCTION_KEYWORD.length-1).char}getTraditionalFunctionStartBodyIndex(){return this.code.indexOf("{")}getArrowFunctionStartIndex(){return this.code.indexOf(this.ARROW_FUNCTION_KEYWORD)}}const n=(t,{cache:n}={cache:null})=>{let r=(t=>(t=>{let e;for(let n=0;n<t.length;n++)e=Math.imul(31,e)+t.charCodeAt(n)|0;return e})(t).toString())(t);if(n&&n[r])return n[r];const i=new e(t),o=i.isGenerator?((t,e)=>(0,Object.getPrototypeOf((function*(){})).constructor)(t,e))(i.args,i.body):new Function(i.args,i.body);return n&&(n[r]=o),o};var r;!function(t){t.FUNCTION="f"}(r||(r={}));const i=[Date,RegExp,Blob,File,FileList],o=(t,e)=>{if(t.length<2)return[];const[n,s]=t;return n===r.FUNCTION?e(s):(t=>null===t||i.some((e=>"number"==typeof t||"string"==typeof t||"boolean"==typeof t||t instanceof e)))(s)?s:Array.isArray(s)?s.map((t=>o(t,e))):Object.keys(s).reduce(((t,n)=>(t[n]=o(s[n],e),t)),{})};var s;!function(t){t.SENT="sent",t.STARTED="started",t.COMPLETED="completed",t.NEXT="next",t.ERROR="error"}(s||(s={})),Worker;class a extends Error{}const c=self,l={};let u,d=null,h=null;function T(t){return n(t,{cache:l})}function f(t,{startTime:e=null,resolveEventName:n=s.COMPLETED}){t.then((t=>O(n,{startTime:e},t))).catch((t=>O(s.ERROR,{startTime:e},t)))}function O(t,{startTime:e=null}={},n=null){c.postMessage(Object.assign({eventName:t,result:n,taskRunId:u},e&&{tookTime:performance.now()-e}))}c.onmessage=t=>{const{data:e}=t;if(u=e.taskRunId,e.next||e.return||e.throw){if(!h)throw new a("Generator function is already finished or was not initiated");O(s.STARTED);const t=performance.now();let n;n=e.next?h.next(...e.args):e.return?h.return(e.args[0]):h.throw(e.args[0]),(n.done||e.throw)&&(h=null);const r=e.throw||n.done?s.COMPLETED:s.NEXT;return!e.throw&&n.value instanceof Promise?void n.value.then((e=>O(r,{startTime:t},e))).catch((e=>O(s.ERROR,{startTime:t},e))):void O(r,{startTime:t},n.value)}if(null===d&&(d=(e.deps||[]).length>0,d))try{importScripts(...e.deps)}catch(t){console.error(t)}const n=T(e.func),r=o(e.args||[],T),i={reply:(t,e)=>O(t,{startTime:c},e)};O(s.STARTED);const c=performance.now(),l=n.apply(i,r);if("GeneratorFunction"===n.constructor.name){const t=l.next(...r);return t.done||(h=l),t.value instanceof Promise?void f(t.value,{startTime:c,resolveEventName:t.done?s.COMPLETED:s.NEXT}):void O(t.done?s.COMPLETED:s.NEXT,{startTime:c},t.value)}l instanceof Promise?f(l,{startTime:c}):O(s.COMPLETED,{startTime:c},l)},c.onerror=t=>{O(s.ERROR,{},t)},(()=>c).bind(c)}();
//# sourceMappingURL=worker.worker.js.map