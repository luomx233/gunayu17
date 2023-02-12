import{i as C,j as f,k as A,o as l,b as c,h as t,F as r,l as _,c as h,w as n,e as i,T as V,m as j,p as z,v as D,u,q as F,s as L,a as T,t as $,r as E,f as S,x as q,y as P}from"./entry.c4655e8a.js";import{_ as R}from"./itemCard.88960f15.js";import{_ as G}from"./itemLink.9c6d8a02.js";const H={class:"content relative"},J={class:"nav-button flex justify-center gap-4 mt-4"},K=["onClick"],M=C({__name:"SlideBar",async setup(g){let s,o;const p=([s,o]=f(()=>$fetch("/api/index/slidebar")),s=await s,o(),s),d=A(0),b=()=>{try{document.hidden||(d.value>=p.value.length-1?d.value=0:d.value+=1)}catch{}};let m=setInterval(b,3e3);const x=w=>{d.value=w,clearInterval(m),setTimeout(()=>{clearInterval(m),m=setInterval(b,3e3)},2e3)};return(w,U)=>{const B=L;return l(),c(r,null,[t("div",H,[(l(!0),c(r,null,_(u(p),(I,a)=>(l(),h(B,{to:"/",key:a},{default:n(()=>[i(V,{name:"pic",mode:"out-in"},{default:n(()=>[j(t("div",{class:"w-full h-96 bg-cover",style:z({backgroundImage:"url("+I.imgUrl+")"})},null,4),[[D,a==d.value]])]),_:2},1024)]),_:2},1024))),128))]),t("div",J,[(l(!0),c(r,null,_(u(p),(I,a)=>(l(),c("div",{onClick:N=>x(a),key:a,class:F([{"current itemborder":d.value==a},"navitems"])},null,10,K))),128))])],64)}}}),O=T(M,[["__scopeId","data-v-5b4c9719"]]),Q=t("div",{class:"text-3xl text-white bg-blue-500 p-6"},"\u4EA7\u54C1\u7CFB\u5217",-1),W=C({__name:"pageLeft",async setup(g){let s,o;const p=([s,o]=f(()=>$fetch("/api/index/productslist")),s=await s,o(),s);return(d,b)=>{const m=L;return l(),c("div",null,[Q,(l(!0),c(r,null,_(u(p),(x,w)=>(l(),h(m,{to:x.linkto,key:x.linkto},{default:n(()=>[t("div",{class:F(["w-full p-3 text-blue-700 hover:text-orange-500",w%2?"bg-slate-200":"bg-neutral-100"])},$(x.title),3)]),_:2},1032,["to"]))),128))])}}}),X={class:"overflow-hidden"},Y=C({__name:"ScrollBar",setup(g){const s=A(null);return(o,p)=>(l(),c("div",X,[t("div",{ref_key:"scrollbar",ref:s,class:"flex flex-nowrap"},[E(o.$slots,"default")],512)]))}});const v=g=>(q("data-v-3deb766e"),g=g(),P(),g),Z={class:"container mx-auto"},tt={class:"mt-4 mb-4 content1 grid grid-cols-7"},et={class:"left col-span-2 mr-9"},st={class:"right col-span-5"},nt=v(()=>t("div",{class:"text-white"},"\u65B0\u54C1\u63A8\u8350",-1)),lt={class:"text-center m-2 hover:text-orange-500"},ot=["src"],ct=v(()=>t("div",{class:"text-white"},"\u70ED\u9500\u4EA7\u54C1",-1)),it={class:"grid xl:grid-cols-4 2xl:grid-cols-4 sm:grid-cols-3 text-gray-600 text-md"},at=v(()=>t("div",{class:"content2 iamge1 mt-4 mb-4"},[t("img",{src:"http://www.guanyu17.com/image/index_img2.png",alt:"",class:"w-full mt-2 mb-2"})],-1)),rt={class:"content4 box-border border-4 border-neutral-300 p-4 grid grid-cols-2"},dt={class:"grid grid-cols-2 gap-4"},_t={class:"box-border border-2 border-neutral-300 p-1"},ut=["src"],ht={class:"p-2"},vt={class:"text-sky-600"},pt={class:"hover:text-orange-500 text-gray-500"},gt={class:"hover:text-orange-500 grid grid-cols-4 border-b border-dashed p-1 text-gray-500 mr-4"},mt={class:"col-span-3"},xt=v(()=>t("span",{class:"col-span-1 text-right"},"\u8BE6\u60C5\u4ECB\u7ECD>>",-1)),ft={class:"contentbase mt-4 mb-4"},bt=v(()=>t("div",{class:"text-white"},"\u516C\u53F8\u65B0\u95FB",-1)),wt={class:"grid grid-cols-2 text-gray-600 text-md"},yt=v(()=>t("div",{class:"text-white"},"\u6280\u672F\u670D\u52A1",-1)),kt={class:"grid grid-cols-2 text-gray-600 text-md"},$t=v(()=>t("div",{class:"content3 image2 mt-4 mb-4"},[t("img",{src:"http://www.guanyu17.com/image/index_img1.png",alt:"",class:"w-full mt-2 mb-2"})],-1)),It={class:"contentbase mt-4 mb-4"},St=v(()=>t("div",{class:"text-white"},"\u516C\u53F8\u65B0\u95FB",-1)),Bt={class:"grid grid-cols-2 text-gray-600 text-md"},Ct=v(()=>t("div",{class:"text-white"},"\u6280\u672F\u670D\u52A1",-1)),Lt={class:"grid grid-cols-2 text-gray-600 text-md"},Nt={__name:"index",async setup(g){let s,o;const p=([s,o]=f(()=>$fetch("/api/index/recommend")),s=await s,o(),s),d=([s,o]=f(()=>$fetch("/api/index/news")),s=await s,o(),s),b=([s,o]=f(()=>$fetch("/api/index/skillsserve")),s=await s,o(),s),m=([s,o]=f(()=>$fetch("/api/index/scrollbar")),s=await s,o(),s),x=([s,o]=f(()=>$fetch("/api/index/recommendArticle")),s=await s,o(),s);return(w,U)=>{const B=O,I=W,a=L,N=Y,y=R,k=G;return l(),c("div",null,[i(B),t("div",Z,[t("div",tt,[t("div",et,[t("div",null,[i(I)])]),t("div",st,[i(y,null,{left:n(()=>[nt]),content:n(()=>[i(N,null,{default:n(()=>[(l(!0),c(r,null,_(u(m),e=>(l(),h(a,{key:e.title,to:e.linkto},{default:n(()=>[t("div",lt,[t("img",{src:e.imgUrl,alt:"",class:"border p-1 border-gray-400"},null,8,ot),t("span",null,$(e.title),1)])]),_:2},1032,["to"]))),128))]),_:1})]),_:1}),i(y,null,{left:n(()=>[ct]),content:n(()=>[t("div",it,[(l(!0),c(r,null,_(u(p),e=>(l(),h(k,{key:e.id,id:e.id,title:e.title},null,8,["id","title"]))),128))])]),_:1})])]),at,t("div",rt,[(l(!0),c(r,null,_(u(x).mainArticle,e=>(l(),c("div",null,[i(a,{to:e.linkto},{default:n(()=>[t("div",dt,[t("div",_t,[t("img",{src:e.imgUrl,alt:"",class:"w-full h-60"},null,8,ut)]),t("div",ht,[t("div",vt,$(e.title),1),t("div",pt,$(e.intro),1)])])]),_:2},1032,["to"])]))),256)),(l(!0),c(r,null,_(u(d),e=>(l(),h(a,{key:e.title,to:e.linkto},{default:n(()=>[t("div",gt,[t("span",mt,"\xB7 "+$(e.title),1),xt])]),_:2},1032,["to"]))),128))]),t("div",ft,[t("div",null,[i(y,null,{left:n(()=>[bt]),content:n(()=>[t("div",wt,[(l(!0),c(r,null,_(u(d),e=>(l(),h(k,{key:e.id,id:e.id,title:e.title},null,8,["id","title"]))),128))])]),right:n(()=>[i(a,{to:"news",class:"hover:text-orange-500"},{default:n(()=>[S(">>\u66F4\u591A")]),_:1})]),_:1})]),t("div",null,[i(y,null,{left:n(()=>[yt]),content:n(()=>[t("div",kt,[(l(!0),c(r,null,_(u(b),e=>(l(),h(k,{key:e.id,id:e.id,title:e.title},null,8,["id","title"]))),128))])]),right:n(()=>[i(a,{to:"news",class:"hover:text-orange-500"},{default:n(()=>[S(">>\u66F4\u591A")]),_:1})]),_:1})])]),$t,t("div",It,[t("div",null,[i(y,null,{left:n(()=>[St]),content:n(()=>[t("div",Bt,[(l(!0),c(r,null,_(u(d),e=>(l(),h(k,{key:e.id,id:e.id,title:e.title},null,8,["id","title"]))),128))])]),right:n(()=>[i(a,{to:"news",class:"hover:text-orange-500"},{default:n(()=>[S(">>\u66F4\u591A")]),_:1})]),_:1})]),t("div",null,[i(y,null,{left:n(()=>[Ct]),content:n(()=>[t("div",Lt,[(l(!0),c(r,null,_(u(b),e=>(l(),h(k,{key:e.id,id:e.id,title:e.title},null,8,["id","title"]))),128))])]),right:n(()=>[i(a,{to:"news",class:"hover:text-orange-500"},{default:n(()=>[S(">>\u66F4\u591A")]),_:1})]),_:1})])])])])}}},Ut=T(Nt,[["__scopeId","data-v-3deb766e"]]);export{Ut as default};
