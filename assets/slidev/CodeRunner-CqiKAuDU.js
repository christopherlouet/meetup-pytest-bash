const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/shiki-C2DJgLr_.js","assets/monaco/bundled-types-DlS-qEOd.js","assets/modules/file-saver-qMbZxJ5p.js","assets/modules/vue-BcXR-XPM.js","assets/monaco/bundled-types-DIajs1OS.css","assets/modules/shiki-4Ye-lH7Q.js","assets/modules/shiki-Bxv373Z5.css"])))=>i.map(i=>d[i]);
import{M as L}from"../modules/unplugin-icons-BAY7Zn2p.js";import{r as w,d as V,G as P,f as a,o,ab as D,z as J,S as z,O as F,aE as H,Q as q,E as G,ae as K,i as M,as as Q,g as U,t as $,J as x,F as k,ag as R,b as W,n as X,aF as Y,k as Z,e as B,w as ee}from"../modules/vue-BcXR-XPM.js";import{n as te,_ as N,l as ne,k as j}from"../monaco/bundled-types-DlS-qEOd.js";import{a as se,a0 as re}from"../index-BMd8pJFY.js";import{u as oe}from"./context-Bv8MnJqM.js";import{_ as ie}from"./IconButton.vue_vue_type_script_setup_true_lang-D4RWKkIe.js";import"../modules/file-saver-qMbZxJ5p.js";import"../modules/shiki-4Ye-lH7Q.js";const T={},ae=[],le=te(async()=>{const i={javascript:O,js:O,typescript:O,ts:O},{getHighlighter:t}=await N(async()=>{const{getHighlighter:r}=await import("./shiki-C2DJgLr_.js");return{getHighlighter:r}},__vite__mapDeps([0,1,2,3,4,5,6])),s=await t(),f=async(r,p,l)=>{try{const d=i[p];if(!d)throw new Error(`Runner for language "${p}" not found`);return await d(r,{options:l,highlight:s,run:async(e,n)=>await f(e,n,l)})}catch(d){return console.error(d),{error:`${d}`}}};for(const r of ae){const p=await r(i);Object.assign(i,p)}return{highlight:s,run:f}});function ce(i){const t=w([]),s=e=>t.value.push({error:String(e)}),f=(...e)=>t.value.push(e.map(p)),r=Object.assign({},console);r.info=r.log=r.debug=r.warn=r.error=f,r.clear=()=>t.value.length=0;try{const e=`return async (console, __slidev_import, __slidev_on_error) => {
      try {
        ${d(i)}
      } catch (e) {
        __slidev_on_error(e)
      }
    }`;new Function(e)()(r,n=>{const u=T[n];if(!u)throw new Error(`Module not found: ${n}.
Available modules: ${Object.keys(T).join(", ")}. Please refer to https://sli.dev/custom/config-code-runners#additional-runner-dependencies`);return u},s)}catch(e){s(e)}function p(e){return typeof e=="string"?{text:e}:{text:l(e),highlightLang:"javascript"}}function l(e){var u;let n="";if(e instanceof Error)n=`Error: ${JSON.stringify(e.message)}`;else if(e==null||typeof e=="symbol")n=String(e);else if(Array.isArray(e))n=`[${e.map(l).join(", ")}]`;else if(e instanceof Set){const c=[...e];n=`Set (${e.size}) {${c.map(l).join(", ")}}`}else if(e instanceof Map){const c=[...e.entries()];n=`Map (${e.size}) {${c.map(([m,h])=>`${l(m)} => ${l(h)}`).join(", ")}}`}else if(e instanceof RegExp)n=e.toString();else if(typeof e=="string")n=JSON.stringify(e);else if(typeof e=="object"){const c=((u=e.constructor)==null?void 0:u.name)??"",m=c&&c==="Object"?"":c;n=(m?`${m}: `:"")+JSON.stringify(e,(g,_)=>_===void 0?"__undefined__":_,2).replace(/"__undefined__"/g,"undefined"),n=String(n)}else n=String(e);return n}function d(e){return e=e.replace('import "reflect-metadata"',"").replace('require("reflect-metadata")',""),e=e.replace("export {};",""),e}return t}let E;async function O(i){E??(E=await N(()=>import("../monaco/bundled-types-DlS-qEOd.js").then(s=>s.t),__vite__mapDeps([1,2,3,4]))),i=E.transpileModule(i,{compilerOptions:{module:E.ModuleKind.ESNext,target:E.ScriptTarget.ES2022},transformers:{after:[ue]}}).outputText;const t=/import\s*\((.+)\)/g;return i=i.replace(t,(s,f)=>`__slidev_import(${f})`),ce(i)}function ue(i){const{factory:t}=i,{isImportDeclaration:s,isNamedImports:f,NodeFlags:r}=E;return p=>{var d,e;const l=[...p.statements];for(let n=0;n<l.length;n++){const u=l[n];if(!s(u))continue;let c;const m=(d=u.importClause)==null?void 0:d.namedBindings,h=[];if((e=u.importClause)!=null&&e.name&&h.push(t.createBindingElement(void 0,t.createIdentifier("default"),u.importClause.name)),m)if(f(m)){for(const _ of m.elements)h.push(t.createBindingElement(void 0,_.propertyName,_.name));c=t.createObjectBindingPattern(h)}else c=t.createIdentifier(m.name.text);else c=t.createObjectBindingPattern(h);const g=t.createVariableStatement(void 0,t.createVariableDeclarationList([t.createVariableDeclaration(c,void 0,void 0,t.createAwaitExpression(t.createCallExpression(t.createIdentifier("import"),void 0,[u.moduleSpecifier])))],r.Const));l[n]=g}return t.updateSourceFile(p,l)}}const de=V({__name:"DomElement",props:{element:{}},setup(i){const t=i,s=w();return P(()=>{s.value&&s.value.appendChild(t.element)}),(f,r)=>(o(),a("div",{ref_key:"container",ref:s},null,512))}}),pe={key:0,class:"text-sm text-center opacity-50"},me={key:1,class:"text-sm text-center opacity-50"},fe={key:2,class:"text-sm text-center opacity-50"},he=["innerHTML"],_e={key:1,class:"text-red-500"},ve={key:3,class:"output-line"},ge=["innerHTML"],ye={key:2,class:"separator"},xe={key:0,class:"absolute right-1 top-1 max-h-full flex gap-1"},je=V({__name:"CodeRunner",props:{modelValue:{},lang:{},autorun:{type:[Boolean,String]},height:{},showOutputAt:{type:[null,Boolean,String,Number,Array]},highlightOutput:{type:Boolean},runnerOptions:{}},emits:["update:modelValue"],setup(i,{emit:t}){const s=i,f=t,{isPrintMode:r}=se(),p=D(s,"modelValue",f),{$renderContext:l,$clicksContext:d}=oe(),e=J(()=>!["slide","presenter"].includes(l.value)),n=r.value?"once":s.autorun,u=w(n),c=z(),m=w(0),h=w(),g=w(s.showOutputAt);if(s.showOutputAt){const b=re();F(()=>{const y=d.calculate(s.showOutputAt);y?(d.register(b,y),H(()=>{g.value=!y.isActive.value})):g.value=!1}),q(()=>d.unregister(b))}const _=ne(200,async()=>{if(e.value)return;const{highlight:b,run:y}=await le();h.value=b;const C=setTimeout(()=>{u.value=!0},500);c.value=await y(p.value,s.lang,s.runnerOptions??{}),m.value+=1,u.value=!1,clearTimeout(C)});return n==="once"?_():n&&G(p,_,{immediate:!0}),(b,y)=>{const C=L;return o(),a(k,null,[K(U("div",{class:"relative flex flex-col rounded-b border-t border-main",style:Z({height:s.height}),"data-waitfor":".slidev-runner-output"},[e.value?(o(),a("div",pe,' Code is disabled in the "'+$(x(l))+'" mode ',1)):u.value?(o(),a("div",me," Running... ")):c.value?(o(),a("div",{key:`run-${m.value}`,class:"slidev-runner-output"},[(o(!0),a(k,null,R(x(j)(Y(c.value)),(v,I)=>(o(),a(k,{key:I},["html"in v?(o(),a("div",{key:0,innerHTML:v.html},null,8,he)):"error"in v?(o(),a("div",_e,$(v.error),1)):"element"in v?(o(),W(de,{key:2,element:v.element},null,8,["element"])):(o(),a("div",ve,[(o(!0),a(k,null,R(x(j)(v),(S,A)=>(o(),a(k,{key:A},[S.highlightLang&&h.value?(o(),a("span",{key:0,class:"highlighted",innerHTML:h.value(S.text,S.highlightLang)},null,8,ge)):(o(),a("span",{key:1,class:X(S.class)},$(S.text),3)),A<x(j)(v).length-1?(o(),a("span",ye,",")):M("",!0)],64))),128))]))],64))),128))])):(o(),a("div",fe," Click the play button to run the code "))],4),[[Q,!g.value]]),x(p).trim()?(o(),a("div",xe,[B(ie,{class:"w-8 h-8 max-h-full flex justify-center items-center",title:"Run code",onClick:x(_)},{default:ee(()=>[B(C)]),_:1},8,["onClick"])])):M("",!0)],64)}}});export{je as default};
