import{d as h,a as g,b as m,f as u,J as c,o as a,w as y,j as k,z as v,i as T,k as L,n as C,F as P,ag as I,e as p,g as N,v as b,x as D}from"../modules/vue-BcXR-XPM.js";import{u as $,f as M}from"./context-Bv8MnJqM.js";import{a as z}from"../index-BMd8pJFY.js";import{_ as A}from"./title-renderer.md_vue_type_script_setup_true_lang-ByO1al6K.js";import{k as S}from"../monaco/bundled-types-DlS-qEOd.js";import{I as B}from"./default-CIoH8iRD.js";import"../modules/shiki-4Ye-lH7Q.js";import"../modules/file-saver-qMbZxJ5p.js";const H=["href","innerHTML"],V=["href"],F=h({__name:"Link",props:{to:{},title:{}},setup(d){const{isPrintMode:n}=z();return(e,r)=>{const s=g("RouterLink");return!c(n)&&e.title?(a(),m(s,{key:0,to:String(e.to),onClick:r[0]||(r[0]=i=>i.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!c(n)&&!e.title?(a(),m(s,{key:1,to:String(e.to),onClick:r[1]||(r[1]=i=>i.target.blur())},{default:y(()=>[k(e.$slots,"default")]),_:3},8,["to"])):c(n)&&e.title?(a(),u("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,H)):(a(),u("a",{key:3,href:`#${e.to}`},[k(e.$slots,"default")],8,V))}}}),O=["start"],R=h({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(d){const n=d,e=v(()=>[...S(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]),r=v(()=>[...S(n.listStyle||[])]);return(s,i)=>{const f=F,l=g("TocList",!0);return s.list&&s.list.length>0?(a(),u("ol",{key:0,class:C(e.value),start:s.level===1?s.start:void 0,style:L(r.value.length>=s.level?`list-style:${r.value[s.level-1]}`:void 0)},[(a(!0),u(P,null,I(s.list,t=>(a(),u("li",{key:t.path,class:C(["slidev-toc-item",[{"slidev-toc-item-active":t.active},{"slidev-toc-item-parent-active":t.activeParent}]])},[p(f,{to:t.path},{default:y(()=>[p(c(A),{no:t.no},null,8,["no"])]),_:2},1032,["to"]),t.children.length>0?(a(),m(l,{key:0,level:s.level+1,"list-style":s.listStyle,list:t.children,"list-class":s.listClass},null,8,["level","list-style","list","list-class"])):T("",!0)],2))),128))],14,O)):T("",!0)}}}),j=h({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(d){const n=d,{$slidev:e}=$();function r(l,t=1){if(t>Number(n.maxDepth))return[];if(t<Number(n.minDepth)){const o=l.find(_=>_.active||_.activeParent);return o?r(o.children,t+1):[]}return l.map(o=>({...o,children:r(o.children,t+1)}))}function s(l){return l.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:s(t.children)}))}function i(l){const t=l.some(o=>o.active||o.activeParent||o.hasActiveParent);return l.filter(()=>t).map(o=>({...o,children:i(o.children)}))}const f=v(()=>{const l=e==null?void 0:e.nav.tocTree;if(!l)return[];let t=r(l);return n.mode==="onlyCurrentTree"?t=s(t):n.mode==="onlySiblings"&&(t=i(t)),t});return(l,t)=>(a(),u("div",{class:"slidev-toc",style:L(`column-count:${l.columns}`)},[p(R,{level:1,start:l.start,"list-style":l.listStyle,list:f.value,"list-class":l.listClass},null,8,["start","list-style","list","list-class"])],4))}}),U={__name:"slides.md__slidev_2",setup(d){const{$clicksContext:n,$frontmatter:e}=$();return n.setup(),(r,s)=>{const i=j;return a(),m(B,b(D(c(M)(c(e),1))),{default:y(()=>[s[0]||(s[0]=N("h1",null,"Sommaire",-1)),p(i,{minDepth:"1",maxDepth:"2"})]),_:1},16)}}};export{U as default};
