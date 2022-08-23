(function(){"use strict";var e={9486:function(e,t,o){var r=o(9242),s=o(3396);const n={class:"container mx-auto px-8"};function a(e,t,o,r,a,l){const i=(0,s.up)("navBarTop"),c=(0,s.up)("navBarLink"),u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(i),(0,s.Wm)(c),(0,s.Wm)(u)])}var l=o(7139);const i={class:"nav flex items-center justify-between"},c={class:"logo basis-1/4"},u={class:"font-bold text-2xl text-start"},d=(0,s.Uk)("Booksy"),h=(0,s._)("label",{for:"voice-search",class:"sr-only"},"Search",-1),p={class:"relative w-full"},m={class:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-pointer"},g=(0,s._)("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"},null,-1),k=[g],w=(0,s._)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),v=[w],f={class:"search-list"},b={class:"text-start"},y=(0,s.uE)('<div class="nav-options flex justify-end basis-1/4 items-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg><span class="num rounded-full text-white">0</span><span class="lang">EN</span></div>',1);function _(e,t,o,n,a,g){const w=(0,s.up)("router-link"),_=(0,s.up)("Loader");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",c,[(0,s._)("h1",u,[(0,s.Wm)(w,{to:"/"},{default:(0,s.w5)((()=>[d])),_:1})])]),(0,s._)("form",{class:"flex items-center basis-1/2",onSubmit:t[5]||(t[5]=(0,r.iM)((()=>{}),["prevent"]))},[h,(0,s._)("div",p,[(0,s._)("div",m,[((0,s.wg)(),(0,s.iD)("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",onClick:t[0]||(t[0]=(...e)=>g.searchFun&&g.searchFun(...e))},k))]),(0,s.wy)((0,s._)("input",{type:"text",id:"voice-search",class:"bg-gray-50 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-zinc-100 dark:border-gray-600",placeholder:"Search...",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>a.search=e),onKeypress:t[2]||(t[2]=(0,r.D2)(((...e)=>g.searchFun&&g.searchFun(...e)),["enter"])),onKeyup:t[3]||(t[3]=(...e)=>g.resetList&&g.resetList(...e))},null,544),[[r.nr,a.search]]),(0,s._)("button",{type:"button",class:"flex absolute inset-y-0 right-0 items-center pr-3",onClick:t[4]||(t[4]=(...e)=>g.removeSearch&&g.removeSearch(...e))},v)]),(0,s._)("ul",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.authorsInfo,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.id,class:"flex items-center justify-between"},[(0,s._)("span",b,"Title: "+(0,l.zw)(e.title),1),(0,s._)("span",null,"Downloaded: "+(0,l.zw)(e.download_count),1)])))),128)),g.showLoader?((0,s.wg)(),(0,s.j4)(_,{key:0})):(0,s.kq)("",!0)])],32),y])}const x={class:"loading flex justify-center items-center"},B=(0,s._)("span",{class:"loader"},null,-1),L=[B];function D(e,t,o,r,n,a){return(0,s.wg)(),(0,s.iD)("div",x,L)}var S={},I=o(89);const C=(0,I.Z)(S,[["render",D]]);var $=C,j={data(){return{search:""}},components:{Loader:$},methods:{searchFun(){0!=this.search.length&&(this.$store.dispatch("searchFunc",this.search),document.querySelector(".search-list").classList.add("active"))},resetList(){0!=this.authorsInfo.length&&document.querySelector(".search-list").classList.remove("active")},removeSearch(){this.search="",this.$store.state.searchBoxData=[],document.querySelector(".search-list").classList.remove("active")},checkSearchArr(){this.authorsInfo.length}},computed:{authorsInfo(){return this.$store.state.searchBoxData},showLoader(){return this.$store.state.showLoader}}};const W=(0,I.Z)(j,[["render",_]]);var A=W;const z={class:"px-4 mx-auto md:px-6"},M={class:"flex items-center justify-center"},N={class:"flex mt-0 mr-6 space-x-8 text-sm font-medium",id:"links-list"},q={class:"active home","data-link":"home"},Z=(0,s.Uk)("Home"),P={"data-link":"bestseller"},O=(0,s.Uk)("Best Seller"),U={"data-link":"category"},F=(0,s.Uk)("Category"),T={"data-link":"findstore"},E=(0,s.Uk)("Find Store"),H={"data-link":"blog"},R=(0,s.Uk)("Blog"),K=(0,s._)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Y=[K],J=(0,s._)("span",{id:"burger-one"},null,-1),V=(0,s._)("span",{id:"burger-two"},null,-1),G=(0,s._)("span",{id:"burger-three"},null,-1),Q=[J,V,G];function X(e,t,o,r,n,a){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",null,[(0,s._)("div",z,[(0,s._)("div",M,[(0,s._)("ul",N,[(0,s._)("li",q,[(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((()=>[Z])),_:1})]),(0,s._)("li",P,[(0,s.Wm)(l,{to:"/bestseller"},{default:(0,s.w5)((()=>[O])),_:1})]),(0,s._)("li",U,[(0,s.Wm)(l,{to:"/category"},{default:(0,s.w5)((()=>[F])),_:1})]),(0,s._)("li",T,[(0,s.Wm)(l,{to:"/findstore"},{default:(0,s.w5)((()=>[E])),_:1})]),(0,s._)("li",H,[(0,s.Wm)(l,{to:"/blog"},{default:(0,s.w5)((()=>[R])),_:1})]),(0,s._)("span",{onClick:t[0]||(t[0]=(...e)=>a.burger&&a.burger(...e)),class:"close-icon"},Y)]),(0,s._)("li",{class:"burger",onClick:t[1]||(t[1]=(...e)=>a.burger&&a.burger(...e))},Q)])])])}var ee={methods:{checkRouter(){if(document.querySelector("nav ul li.active").classList.remove("active"),"Error404"===this.$route.name||"AllBooks"===this.$route.name||"Book"===this.$route.name)return void document.querySelector("nav ul li.home").classList.add("active");let e=document.querySelectorAll("nav ul li");e.forEach((e=>{this.$route.name===e.getAttribute("data-link")&&e.classList.add("active")}))},burger(){let e=document.querySelector(".burger"),t=document.getElementById("links-list");e.classList.contains("active")?(t.classList.remove("active"),e.classList.remove("active")):(t.classList.add("active"),e.classList.add("active"))},closeNav(){}},created(){this.checkRouter},watch:{$route(){this.checkRouter()}}};const te=(0,I.Z)(ee,[["render",X]]);var oe=te,re={components:{navBarTop:A,navBarLink:oe}};const se=(0,I.Z)(re,[["render",a]]);var ne=se,ae=o(2483);const le={class:"home"};function ie(e,t,o,r,n,a){const l=(0,s.up)("buildLibrary"),i=(0,s.up)("Popular");return(0,s.wg)(),(0,s.iD)("div",le,[(0,s.Wm)(l),(0,s.Wm)(i)])}const ce={class:"library flex justify-center rounded-xl mb-10"},ue=(0,s._)("div",{class:"library-content"},[(0,s._)("h1",{class:"text-5xl font-bold"},"Build Your Library"),(0,s._)("p",{class:"mt-2 mb-3"},[(0,s.Uk)("Buy Two Selected boosk and get "),(0,s._)("br"),(0,s.Uk)(" one for free")]),(0,s._)("button",{class:"rounded-lg btn"},"View All")],-1),de=[ue];function he(e,t,o,r,n,a){return(0,s.wg)(),(0,s.iD)("div",ce,de)}var pe={};const me=(0,I.Z)(pe,[["render",he]]);var ge=me;const ke={class:"popular pb-8"},we={class:"title flex justify-between items-center pb-6"},ve=(0,s._)("h2",{class:"text-2xl font-bold mb-0"},"Popular Now",-1),fe={class:"flex"},be=(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"},null,-1),ye=[be],_e=(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1),xe=[_e];function Be(e,t,o,r,n,a){const l=(0,s.up)("popularBook");return(0,s.wg)(),(0,s.iD)("div",ke,[(0,s._)("div",we,[ve,(0,s._)("div",fe,[((0,s.wg)(),(0,s.iD)("svg",{class:"w-5",onClick:t[0]||(t[0]=(...e)=>a.goLeft&&a.goLeft(...e)),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},ye)),((0,s.wg)(),(0,s.iD)("svg",{class:"w-5",onClick:t[1]||(t[1]=(...e)=>a.goRight&&a.goRight(...e)),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},xe))])]),(0,s.Wm)(l,{popularBook:a.popularBook},null,8,["popularBook"])])}const Le={class:"book-pop mb-12"},De=["onClick"],Se=(0,s.Uk)("View All");function Ie(e,t,o,r,n,a){const l=(0,s.up)("BookContent"),i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("ul",Le,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.popularBook,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.id,class:"card text-start",onClick:t=>a.bookPage(e.id)},[(0,s.Wm)(l,{book:e},null,8,["book"])],8,De)))),128))]),(0,s.Wm)(i,{class:"btn view-all",to:{path:"/allBooks/1"}},{default:(0,s.w5)((()=>[Se])),_:1})])}const Ce={class:"card-header"},$e=["src"],je={class:"card-content flex flex-col gap-1"},We={class:"font-semibold"},Ae={key:0,class:"text-slate-400"};function ze(e,t,o,r,n,a){const i=(0,s.up)("Stars");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",Ce,[(0,s._)("img",{src:this.selected,alt:"Book",ref:"img"},null,8,$e)]),(0,s._)("div",je,[(0,s._)("span",We,(0,l.zw)(o.book.title),1),o.book.authors.length>0?((0,s.wg)(),(0,s.iD)("span",Ae,(0,l.zw)(o.book.authors[0].name),1)):(0,s.kq)("",!0),(0,s.Wm)(i)])])}const Me={class:"rate flex gap-1"},Ne=(0,s.uE)('<svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg><svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg><svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg><svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg><svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>',5),qe=[Ne];function Ze(e,t,o,r,n,a){return(0,s.wg)(),(0,s.iD)("div",Me,qe)}var Pe={};const Oe=(0,I.Z)(Pe,[["render",Ze]]);var Ue=Oe,Fe={props:["book"],data(){return{imgArr:["https://yi-files.s3.eu-west-1.amazonaws.com/products/796000/796518/1358774-full.jpg","https://img.freepik.com/premium-vector/modern-creative-corporate-book-cover-design-premium-vector_536050-18.jpg?w=2000","https://img.freepik.com/free-vector/blue-creative-annual-report-book-cover-template_1201-1094.jpg?w=2000"],selected:null}},components:{Stars:Ue},methods:{getImage(){let e=Math.floor(Math.random()*this.imgArr.length);return this.imgArr[e]}},created(){this.selected=this.getImage()}};const Te=(0,I.Z)(Fe,[["render",ze]]);var Ee=Te,He={props:["popularBook"],components:{BookContent:Ee},methods:{bookPage(e){let t=event.target.firstElementChild.firstElementChild.firstElementChild.src;localStorage.setItem("imgSrc",JSON.stringify(t)),this.$router.push({path:`/book/${e}`})}}};const Re=(0,I.Z)(He,[["render",Ie]]);var Ke=Re,Ye={components:{popularBook:Ke},computed:{popularBook(){return this.$store.state.popularBook}},methods:{goLeft(){console.log("done"),document.querySelector(".book-pop").scrollLeft-=200},goRight(){console.log("done"),document.querySelector(".book-pop").scrollLeft+=200}}};const Je=(0,I.Z)(Ye,[["render",Be]]);var Ve=Je,Ge={name:"HomeView",components:{buildLibrary:ge,Popular:Ve},created(){this.$store.dispatch("getAllBookInfo")}};const Qe=(0,I.Z)(Ge,[["render",ie]]);var Xe=Qe;function et(e,t,o,r,n,a){return(0,s.wg)(),(0,s.iD)("h1",null,"Welcome To BestSeller")}var tt={};const ot=(0,I.Z)(tt,[["render",et]]);var rt=ot;function st(e,t,o,r,n,a){return(0,s.wg)(),(0,s.iD)("h1",null,"Welcome To Categories")}var nt={};const at=(0,I.Z)(nt,[["render",st]]);var lt=at;function it(e,t,o,r,n,a){return(0,s.wg)(),(0,s.iD)("h1",null,"Welcome To Find Store")}var ct={};const ut=(0,I.Z)(ct,[["render",it]]);var dt=ut;function ht(e,t,o,r,n,a){return(0,s.wg)(),(0,s.iD)("h1",null,"Welcome To Blog Page")}var pt={};const mt=(0,I.Z)(pt,[["render",ht]]);var gt=mt;function kt(e,t,o,r,n,a){return(0,s.wg)(),(0,s.iD)("h1",null,"Not Founded 404")}var wt={};const vt=(0,I.Z)(wt,[["render",kt],["__scopeId","data-v-0d274bce"]]);var ft=vt;const bt={class:"book-page mt-10"},yt={class:"flex mx-auto justify-center gap-6"},_t={class:"book-img basis-1/4 rounded-sm"},xt=["src"],Bt={class:"text-start book-content"},Lt=(0,s.Uk)(" Title: "),Dt={key:0},St=(0,s.Uk)(" Author Name: "),It={key:0},Ct=(0,s.Uk)(" Download Count: "),$t={key:0},jt=(0,s.Uk)(" Languages: "),Wt={key:0};function At(e,t,o,r,n,a){const i=(0,s.up)("Loader");return(0,s.wg)(),(0,s.iD)("div",bt,[(0,s._)("div",yt,[(0,s._)("div",_t,[(0,s._)("img",{src:n.imgSrc,class:"rounded-sm"},null,8,xt)]),(0,s._)("div",Bt,[(0,s._)("h2",null,[Lt,a.bookInfo.title.length>0?((0,s.wg)(),(0,s.iD)("span",Dt,(0,l.zw)(a.bookInfo.title),1)):(0,s.kq)("",!0)]),(0,s._)("h2",null,[St,a.bookInfo.authors.length>0?((0,s.wg)(),(0,s.iD)("span",It,(0,l.zw)(a.bookInfo.authors[0].name),1)):(0,s.kq)("",!0)]),(0,s._)("h2",null,[Ct,a.bookInfo.download_count>0?((0,s.wg)(),(0,s.iD)("span",$t,(0,l.zw)(a.bookInfo.download_count),1)):(0,s.kq)("",!0)]),(0,s._)("h2",null,[jt,a.bookInfo.languages.length>0?((0,s.wg)(),(0,s.iD)("span",Wt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.bookInfo.languages,((e,t)=>((0,s.wg)(),(0,s.iD)("span",{key:t},(0,l.zw)(e),1)))),128))])):(0,s.kq)("",!0)])])]),a.showLoader?((0,s.wg)(),(0,s.j4)(i,{key:0})):(0,s.kq)("",!0)])}var zt={data(){return{imgSrc:null}},components:{Loader:$},created(){this.$store.dispatch("getBookInfo",this.$route.params.id)},mounted(){this.imgSrc=JSON.parse(localStorage.getItem("imgSrc"))},computed:{bookInfo(){return this.$store.state.bookInfo},showLoader(){return this.$store.state.showLoader}}};const Mt=(0,I.Z)(zt,[["render",At]]);var Nt=Mt;const qt={class:"all-books py-10"},Zt=(0,s._)("h1",{class:"text-4xl mb-6"},"All Books",-1),Pt={class:"book-row"};function Ot(e,t,o,r,n,a){const l=(0,s.up)("popularBook"),i=(0,s.up)("Pagination"),c=(0,s.up)("loader");return(0,s.wg)(),(0,s.iD)("div",qt,[Zt,(0,s._)("div",Pt,[(0,s.Wm)(l,{popularBook:a.popularBook},null,8,["popularBook"])]),(0,s.Wm)(i),a.showLoader?((0,s.wg)(),(0,s.j4)(c,{key:0})):(0,s.kq)("",!0)])}const Ut=e=>((0,s.dD)("data-v-1a6dcaae"),e=e(),(0,s.Cn)(),e),Ft={class:"paginated"},Tt=Ut((()=>(0,s._)("li",null,". . .",-1)));function Et(e,t,o,r,n,a){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("ul",Ft,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.arrNum,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t},[(0,s.Wm)(i,{to:{path:"/allBooks/"+e}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e),1)])),_:2},1032,["to"])])))),128)),Tt,(0,s._)("li",null,[(0,s.Wm)(i,{to:{path:"/allBooks/"+n.lastInd}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(n.lastInd),1)])),_:1},8,["to"])])])}var Ht={data(){return{numSelected:null,lastInd:null,arrNum:[]}},methods:{getNumbers(e){this.arrNum=[];let t=parseInt(e)+4;for(let o=e;o<t;o++)this.arrNum.push(o);this.lastInd=t+4}},mounted(){this.getNumbers(this.$route.params.id)},watch:{$route(){this.getNumbers(this.$route.params.id)}}};const Rt=(0,I.Z)(Ht,[["render",Et],["__scopeId","data-v-1a6dcaae"]]);var Kt=Rt,Yt={components:{popularBook:Ke,loader:$,Pagination:Kt},mounted(){this.$store.dispatch("booksWithNumPage",this.$route.params.id)},methods:{checkMyRouter(){this.$store.dispatch("booksWithNumPage",this.$route.params.id)}},computed:{popularBook(){return this.$store.state.books},showLoader(){return this.$store.state.showLoader}},watch:{$route(){this.checkMyRouter()}}};const Jt=(0,I.Z)(Yt,[["render",Ot]]);var Vt=Jt;const Gt=[{path:"/",name:"home",component:Xe,meta:{title:"Home"}},{path:"/BestSeller",name:"bestseller",component:rt,meta:{title:"Best Seller"}},{path:"/Category",name:"category",component:lt,meta:{title:"Category"}},{path:"/FindStore",name:"findstore",component:dt,meta:{title:"Find Store"}},{path:"/Blog",name:"blog",component:gt,meta:{title:"Blog"}},{path:"/:pathMatch(.*)*",name:"Error404",component:ft,meta:{title:"Page Not Found"}},{path:"/book/:id",name:"Book",component:Nt,meta:{title:"Book"},props:!0},{path:"/AllBooks/:id",name:"AllBooks",component:Vt,meta:{title:"All Books"}}],Qt=(0,ae.p7)({history:(0,ae.PO)("/"),routes:Gt});Qt.beforeEach(((e,t,o)=>{document.title=`${e.meta.title}`,o()}));var Xt=Qt,eo=o(65),to=o(6265),oo=o.n(to),ro=(0,eo.MT)({state:{allBooks:null,popularBook:null,books:null,bookInfo:null,showLoader:!1,searchBoxData:[]},getters:{},mutations:{setAllBookInfo(e,t){e.allBooks=t,e.popularBook=t.slice(0,8)},setBookInfo(e,t){e.bookInfo=t},setBookPage(e,t){e.books=t},setSearchAutherData(e,t){e.searchBoxData=t}},actions:{async getAllBookInfo({commit:e}){let t=JSON.parse(localStorage.getItem("popBook"));if(t)e("setAllBookInfo",t);else try{let t=await oo().get("https://gutendex.com/books/");console.log(t),e("setAllBookInfo",t.data.results),localStorage.setItem("popBook",JSON.stringify(t.data.results))}catch(o){console.log(o)}},async getBookInfo({commit:e,state:t},o){t.showLoader=!0;try{let r=await oo().get(`https://gutendex.com/books/${o}`);e("setBookInfo",r.data),t.showLoader=!1}catch(r){console.log(r),t.showLoader=!1}},async booksWithNumPage({commit:e,state:t},o){t.showLoader=!0;try{let r=await oo().get(`https://gutendex.com/books/?page=${o}&title=The+Adventures+of+Sherlock+Holmes`);e("setBookPage",r.data.results),t.showLoader=!1}catch(r){t.showLoader=!1,console.log(r)}},async searchFunc({commit:e,state:t},o){t.showLoader=!0;try{let r=await oo().get(`https://gutendex.com/books/?search=${o}`);e("setSearchAutherData",r.data.results),t.showLoader=!1}catch(r){t.showLoader=!0,console.log(r)}}},modules:{}});(0,r.ri)(ne).use(ro).use(Xt).mount("#app")}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,r,s,n){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],n=e[u][2];for(var l=!0,i=0;i<r.length;i++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](r[i])}))?r.splice(i--,1):(l=!1,n<a&&(a=n));if(l){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,s,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,n,a=r[0],l=r[1],i=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(i)var u=i(o)}for(t&&t(r);c<a.length;c++)n=a[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},r=self["webpackChunkharam_tasks"]=self["webpackChunkharam_tasks"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(9486)}));r=o.O(r)})();
//# sourceMappingURL=app.15f7ab4e.js.map