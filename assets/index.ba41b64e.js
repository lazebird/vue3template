import{r as h,c as D,a as x,o as b,b as F,d as l,w as s,u as U,e as w,f as E,p as J,g as q,h as f,F as X,i as $,j as W,k as V,n as G,t as Q,l as Y,A as Z}from"./vendor.665d4a49.js";const ee=function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const u of e)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function v(e){const u={};return e.integrity&&(u.integrity=e.integrity),e.referrerpolicy&&(u.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?u.credentials="include":e.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function c(e){if(e.ep)return;e.ep=!0;const u=v(e);fetch(e.href,u)}};ee();var te=(p,m)=>{const v=p.__vccOpts||p;for(const[c,e]of m)v[c]=e;return v};const N=p=>(J("data-v-7048e968"),p=p(),q(),p),ae={class:"example"},le=N(()=>f("a",{href:"https://github.com/lazebird/xliff-helper",target:"_blank"},"@lazebird/xliff-helper",-1)),ne=V(" + New Tag "),oe=N(()=>f("br",null,null,-1)),re=N(()=>f("label",null,"XLIFF/XML File ",-1)),se=N(()=>f("br",null,null,-1)),ue=N(()=>f("label",null,"JSON File ",-1)),ie=N(()=>f("br",null,null,-1)),ce={setup(p){const m=[{title:"ID",dataIndex:"id"},{title:"Source",dataIndex:"srcText"},{title:"Target",dataIndex:"tgtText"},{title:"New",dataIndex:"newtgt"}];var v;const c=h({searchVal:""}),e=h({idName:"id",unitName:"trans-unit",srcName:"source",tgtName:"target"}),u=h([]),d=h(["SWITCH.*#"]),_=h({input:!1,val:""}),k=h(),L=D(()=>u.value.filter(a=>!c.value.searchVal||a.tgtText.indexOf(c.value.searchVal)!==-1||a.srcText.indexOf(c.value.searchVal)!==-1));function I(a,t){var n=document.createElement("a");n.setAttribute("download",t),n.style.display="none";var i=new Blob([a]);n.href=URL.createObjectURL(i),document.body.appendChild(n),n.click(),document.body.removeChild(n)}function M(a){d.value=d.value.filter(t=>t!==a)}function C(){_.value.val&&d.value.indexOf(_.value.val)===-1&&(d.value=[...d.value,_.value.val]),_.value={input:!1,val:""}}function A(){_.value.input=!0,G(()=>{k.value.focus()})}function O(a){for(const t of d.value)if(new RegExp(t).test(a))return!0;return!1}function j(a){var t=a.target.result,n=new DOMParser;v=n.parseFromString(t,"text/xml");var i=v.querySelectorAll(e.value.unitName);for(const o of i){const g=o.querySelector(e.value.srcName),y=o.querySelector(e.value.tgtName);u.value.push({id:o[e.value.idName],source:g,target:y,srcText:g.innerHTML,tgtText:y.innerHTML})}}function H(a){var i;var t=a.target.result,n=JSON.parse(t);for(const o of u.value)try{O(o.srcText)?o.target.innerHTML=o.srcText:o.target.innerHTML=(i=n[o.id])!=null?i:o.tgtText,o.newtgt=o.target.innerHTML}catch(g){console.log(g),console.log(o),console.log(o.srcText),console.log(O(o.srcText)),console.log(n[o.id])}}function R(a){let t=new FileReader;t.readAsText(a.target.files[0],"UTF-8"),t.onload=j}function B(){const a={};for(const t of u.value)a[t.id]=t.srcText;I(JSON.stringify(a),"sources.json")}function K(a){let t=new FileReader;t.readAsText(a.target.files[0],"UTF-8"),t.onload=H}function P(){I(new XMLSerializer().serializeToString(v),"result.xliff")}return(a,t)=>{const n=x("a-form-item"),i=x("a-input"),o=x("a-form"),g=x("a-tag"),y=x("a-col"),S=x("a-row"),z=x("a-table");return b(),F("div",ae,[l(o,{class:"actionbar",layout:"inline",model:c.value},{default:s(()=>[l(n,{label:"Home"},{default:s(()=>[le]),_:1}),l(n,{label:"Filter"},{default:s(()=>[l(i,{value:c.value.searchVal,"onUpdate:value":t[0]||(t[0]=r=>c.value.searchVal=r),"allow-clear":""},null,8,["value"])]),_:1})]),_:1},8,["model"]),l(o,{class:"confbar",layout:"inline",model:e.value},{default:s(()=>[l(n,{label:"idName"},{default:s(()=>[l(i,{value:e.value.idName,"onUpdate:value":t[1]||(t[1]=r=>e.value.idName=r)},null,8,["value"])]),_:1}),l(n,{label:"unitName"},{default:s(()=>[l(i,{value:e.value.unitName,"onUpdate:value":t[2]||(t[2]=r=>e.value.unitName=r)},null,8,["value"])]),_:1}),l(n,{label:"srcName"},{default:s(()=>[l(i,{value:e.value.srcName,"onUpdate:value":t[3]||(t[3]=r=>e.value.srcName=r)},null,8,["value"])]),_:1}),l(n,{label:"tgtName"},{default:s(()=>[l(i,{value:e.value.tgtName,"onUpdate:value":t[4]||(t[4]=r=>e.value.tgtName=r)},null,8,["value"])]),_:1}),l(n,{label:"ignorePatterns"},{default:s(()=>[(b(!0),F(X,null,$(d.value,r=>(b(),w(g,{key:r,closable:"",onClose:T=>M(r)},{default:s(()=>[V(Q(r),1)]),_:2},1032,["onClose"]))),128)),_.value.input?(b(),w(i,{key:0,ref_key:"inputRef",ref:k,value:_.value.val,"onUpdate:value":t[5]||(t[5]=r=>_.value.val=r),type:"text",size:"small",style:{width:"100px"},onBlur:C,onKeyup:W(C,["enter"])},null,8,["value","onKeyup"])):(b(),w(g,{key:1,style:{background:"#fff","border-style":"dashed"},onClick:A},{default:s(()=>[ne]),_:1}))]),_:1})]),_:1},8,["model"]),oe,l(S,null,{default:s(()=>[l(y,{span:8},{default:s(()=>[re,f("input",{type:"file",onChange:R,accept:".xliff, text/xml"},null,32)]),_:1}),l(y,{span:8},{default:s(()=>[l(S,{class:"btnrow"},{default:s(()=>[f("button",{onClick:B},"Extract Souces")]),_:1}),se,l(S,{class:"btnrow"},{default:s(()=>[f("button",{onClick:P},"Save")]),_:1})]),_:1}),l(y,{span:8},{default:s(()=>[ue,f("input",{type:"file",onChange:K,accept:".json, application/JSON"},null,32)]),_:1})]),_:1}),ie,U(L).length?(b(),w(z,{key:0,dataSource:U(L),columns:m,rowKey:(r,T)=>T,class:"ant-table-striped","row-class-name":(r,T)=>T%2===1?"table-striped":null},null,8,["dataSource","rowKey","row-class-name"])):E("v-if",!0)])}}};var de=te(ce,[["__scopeId","data-v-7048e968"]]);const fe={setup(p){return(m,v)=>(b(),w(de))}};const pe=Y(fe);pe.use(Z).mount("#app");