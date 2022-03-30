(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{311:function(e,r,a){},312:function(e,r,a){"use strict";a.r(r),a.d(r,"initForm",(function(){return Ee}));var t=a(1),s=a(11),c=a(0),n=a.n(c),o=a(22),l=a(13),i=a(7),d=a(142),j=a(139),b=a(143),p=a(335),u=a(334),h=a(317),m=a(318),O=a(319),x=a(152),y=a(320),g=function(e){var r=Object(i.d)((function(e){return e.search.type})),a=Object(i.c)();return Object(t.jsxs)(p.a,{bg:"primary",variant:"dark",sticky:"top",children:[Object(t.jsx)(p.a.Brand,{children:"Git Repo Search"}),Object(t.jsx)(u.a,{className:"mr-auto navbarOuter",children:Object(t.jsx)(h.a,{fluid:!0,className:"horNavContainer",children:Object(t.jsxs)(m.a,{className:"horNavRow",children:[Object(t.jsx)(O.a,{className:"horNavLinkCol",children:Object(t.jsx)("span",{className:"creatorInfo",onClick:function(){window.open(window.location.origin+"/?query="+encodeURIComponent("user:fotoamg"),"createdby","width=1200,height=600,scrollbars=yes,resizable=yes")},children:"Rea\xa9ted by FotoAmg"})}),Object(t.jsx)(O.a,{className:"vertNavDropCol",children:Object(t.jsx)(x.a,{children:Object(t.jsx)(y.a,{id:"dropdown-button-drop-vert",drop:"left",title:" ",children:"search"===r?Object(t.jsx)(x.a.Item,{onClick:function(){return a({type:"HISTORY_TYPE_NAV"})},children:Object(t.jsx)("h3",{children:"History"})}):Object(t.jsx)(x.a.Item,{onClick:function(){return a({type:"SEARCH_TYPE_NAV"})},children:Object(t.jsx)("h3",{children:"Search"})})},"vertMenu")})})]})})})]})},f=a(147),N=a(148),v=a(153),R=a(151),C=a(83),k=a(137),S=a(138),w=a(140),z=a(71),E=a(146),_=a(321),T=a(322),B=a(323),I=a(324),H=a(325),A=a(326),F=function(e){return e&&e.length>2?void 0:"Must be at least 3 char."},L=function(e){return e&&isNaN(Number(e))?"Must be a number":void 0},P=function(e,r,a){var t=!1;if(e[r]&&""!==e[r]){var s=L(e[r]);s?a[r]=s:t=!0}return t},M=function(e,r,a,t){var s=!1;if(e[r]&&""!==e[r]){var c=L(e[r]);if(c)a[r]=c;else Number.parseInt(e[t],10)<Number.parseInt(e[r],10)?s=!0:a[t]="Max should be greater number than Min"}else a[t]="If Min filled, Max also needs to be filled";return s},q=function(e,r,a,t){if(e[r]&&""!==e[r]){var s=F(e[r]);s?a[r]=s:t=!0}return t},G=function(e){var r,a,t={},s=!1;if(e.searchValue&&""!==e.searchValue){var c=F(e.searchValue);c?t.searchValue=c:e&&(e.name||e.description||e.readme)?s=!0:t.filter="Select at least one of the filters!"}if(s=(s=(s=s||q(e,"user",t,s))||function(e,r,a,t){return e[r]&&""!==e[r]&&(t=!0),t}(e,"lang",0,s))||q(e,"topic",t,s),r=P(e,"starsNumber",t),s=s||r,"between"===e.starCheck&&r){var n=M(e,"starsMax",t,"starsNumber");s=s||n}if(a=P(e,"sizeNumber",t),s=s||a,"between"===e.sizeCheck&&a){var o=M(e,"sizeMax",t,"sizeNumber");s=s||o}return function(e,r,a,t){var s=q(e,r,a,t);s||a[r]||(a[r]="Fill at least one search option!")}(e,"org",t,s),t},V=function(e){var r=e.className,a=e.input,c=e.label,n=e.type,o=e.meta,l=o.touched,i=o.error,d=o.warning;return Object(t.jsxs)("span",{className:r,children:[Object(t.jsx)("input",Object(s.a)(Object(s.a)({},a),{},{placeholder:c,type:n})),Object(t.jsx)("div",{className:"inputErrorHolder",children:l&&(i&&Object(t.jsx)("span",{className:"errorMsg",children:i})||d&&Object(t.jsx)("span",{children:d}))})]})},D=function(e){e.input,e.label,e.type;var r=e.meta,a=(r.touched,r.error),s=r.warning;r.submitting;return Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"filterCell",children:[Object(t.jsx)("span",{children:" In: "}),Object(t.jsxs)("span",{className:"filterCheckItem",children:[Object(t.jsx)(k.a,{name:"name",id:"name",component:"input",type:"checkbox"}),Object(t.jsx)("label",{htmlFor:"name",children:"name "})]}),Object(t.jsxs)("span",{className:"filterCheckItem",children:[Object(t.jsx)(k.a,{name:"description",id:"description",component:"input",type:"checkbox"}),Object(t.jsx)("label",{htmlFor:"description",children:"desc. "})]}),Object(t.jsxs)("span",{className:"filterCheckItem",children:[Object(t.jsx)(k.a,{name:"readme",id:"readme",component:"input",type:"checkbox"}),Object(t.jsx)("label",{htmlFor:"readme",children:"readme "})]})]}),Object(t.jsx)("div",{className:"filterCellError",children:a&&Object(t.jsx)("span",{className:"errorMsg",children:a})||s&&Object(t.jsx)("span",{children:s})})]})},U=function(e){var r=e.id,a=e.input,c=e.label,n=e.type,o=e.meta;o.touched,o.error,o.warning;return Object(t.jsxs)("span",{children:[Object(t.jsx)("input",Object(s.a)(Object(s.a)({},a),{},{id:r,type:n})),Object(t.jsx)("label",{htmlFor:r,children:c})]})},W=function(e){var r=e.handleSubmit,a=e.reset,n=e.submitting,o=e.pristine,l=e.valid,d=e.onReset,j=e.onTypeToggle,b=e.starsCheckedVal,p=e.sizeCheckedVal,u=e.manualSearchFn,x=e.onStarsToggle,y=e.onSizeToggle,g=Object(i.d)((function(e){return e.search.isLoading})),f=Object(i.d)((function(e){return e.search.starsOpen})),N=Object(i.d)((function(e){return e.search.sizeOpen})),v=Object(i.d)((function(e){return e.form.simpleSearch})),R=Object(i.d)((function(e){return e.search.searchHistory})),S=Object(i.c)(),w=Object(c.useState)(!1),z=Object(C.a)(w,2),F=z[0],L=z[1];Object(c.useEffect)((function(){if(!F&&R.length<1){var e=new URLSearchParams(window.location.search).get("query");L(!0),e&&(console.log("Start fetching form: ",v),console.log("Forms should have been parsed by a query!! "+e),u(Object(s.a)({},v.values)))}}),[S,R,F,v,u]);return Object(t.jsx)("form",{onSubmit:r,children:Object(t.jsxs)(h.a,{fluid:!0,children:[Object(t.jsxs)(m.a,{className:"simpleSearchRow",children:[Object(t.jsxs)(O.a,{md:4,sm:4,className:"searchCell searchByCell",children:[Object(t.jsx)("label",{htmlFor:"searchValue",children:"Search by: "}),Object(t.jsx)(k.a,{name:"searchValue",component:V,type:"text",label:"search by",className:"searchby"})]}),Object(t.jsx)(O.a,{md:6,sm:5,children:Object(t.jsx)(k.a,{name:"filter",id:"filter",component:D,type:"checkbox"})}),Object(t.jsxs)(O.a,{md:2,sm:3,className:"modToggleOuter",children:[Object(t.jsx)(E.a,{className:"queryButton",variant:"primary",size:"sm",type:"submit",disabled:n||!l||g,children:g?Object(t.jsx)(_.a,{color:"white",size:14}):Object(t.jsx)(T.a,{color:"white",size:14})}),Object(t.jsx)(E.a,{className:"queryButton",variant:"primary",size:"sm",type:"button",disabled:n||g||o,onClick:function(){a.apply(void 0,arguments),d.apply(void 0,arguments)},children:Object(t.jsx)(B.a,{size:14})}),Object(t.jsx)(E.a,{className:"queryButton",variant:"primary",size:"sm",disabled:n||!l||g,onClick:j,children:Object(t.jsx)(I.a,{size:14})})]})]}),Object(t.jsxs)(m.a,{className:"simpleSearchRow",children:[Object(t.jsxs)(O.a,{md:3,xs:6,className:"searchCell",children:[Object(t.jsx)("label",{htmlFor:"user",children:"User: "}),Object(t.jsx)(k.a,{name:"user",component:V,type:"text",label:"user name"})]}),Object(t.jsxs)(O.a,{md:3,xs:6,className:"searchCell",children:[Object(t.jsx)("label",{htmlFor:"org",children:"Org.: "}),Object(t.jsx)(k.a,{name:"org",component:V,type:"text",label:"organization"})]}),Object(t.jsxs)(O.a,{md:3,xs:6,className:"searchCell",children:[Object(t.jsx)("label",{htmlFor:"lang",children:"Lang.: "}),Object(t.jsx)(k.a,{name:"lang",component:V,type:"text",label:"language"})]}),Object(t.jsxs)(O.a,{md:3,xs:6,className:"searchCell",children:[Object(t.jsx)("label",{htmlFor:"topic",children:"Topic: "}),Object(t.jsx)(k.a,{name:"topic",component:V,type:"text",label:"topic"})]})]}),Object(t.jsxs)(m.a,{children:[Object(t.jsx)(O.a,{xs:!0,lg:6,className:"starsFilterOuter",children:f?Object(t.jsxs)("span",{className:"starsFilter",children:[Object(t.jsx)(H.a,{color:"yellow",size:12,title:"close stars filter",onClick:x}),Object(t.jsx)("span",{className:"starsMainLabel",children:"\xa0"}),Object(t.jsx)(k.a,{name:"starCheck",component:U,value:"equal",id:"starCheckEqual",type:"radio",label:"equal"}),Object(t.jsx)(k.a,{name:"starCheck",component:U,value:"greater",id:"starCheckgreat",type:"radio",label:"greater than"}),Object(t.jsx)(k.a,{name:"starCheck",component:U,value:"less",id:"starCheckLess",type:"radio",label:"less than"}),Object(t.jsx)(k.a,{name:"starCheck",component:U,value:"between",id:"starCheckBetween",type:"radio",label:"between"}),Object(t.jsxs)("span",{className:"starsFilterNumberRow",children:[Object(t.jsxs)("span",{className:"wpNoWrap",children:[Object(t.jsxs)("label",{htmlFor:"starsNumber",children:["between"===b?"Min: ":"Stars: "," "]}),Object(t.jsx)(k.a,{name:"starsNumber",component:V,type:"text",label:"number"})]}),Object(t.jsxs)("span",{className:"wpNoWrap",children:[Object(t.jsx)("label",{className:"between"===b?"":"hiddenContent",htmlFor:"starsMax",children:"Max:"}),Object(t.jsx)(k.a,{className:"between"===b?"":"hiddenContent",name:"starsMax",component:V,type:"text",label:"number"})]})]})]}):Object(t.jsxs)("span",{className:"filterToggler",onClick:x,title:"show stars filter",children:[Object(t.jsx)(H.a,{color:"yellow",size:12}),Object(t.jsx)("span",{className:"starsMainLabel",children:" filter"})]})}),Object(t.jsx)(O.a,{xs:!0,lg:6,className:"sizeFilterOuter",children:N?Object(t.jsxs)("span",{className:"sizeFilter",children:[Object(t.jsx)(A.a,{color:"lightblue",size:12,title:"close size filter",onClick:y}),Object(t.jsx)("span",{className:"sizeMainLabel",children:"\xa0"}),Object(t.jsx)(k.a,{name:"sizeCheck",component:U,value:"equal",id:"sizeCheckEqual",type:"radio",label:"equal"}),Object(t.jsx)(k.a,{name:"sizeCheck",component:U,value:"greater",id:"sizeCheckgreat",type:"radio",label:"greater than"}),Object(t.jsx)(k.a,{name:"sizeCheck",component:U,value:"less",id:"sizeCheckLess",type:"radio",label:"less than"}),Object(t.jsx)(k.a,{name:"sizeCheck",component:U,value:"between",id:"sizeCheckBetween",type:"radio",label:"between"}),Object(t.jsxs)("span",{className:"sizeFilterNumberRow",children:[Object(t.jsxs)("span",{className:"wpNoWrap",children:[Object(t.jsxs)("label",{htmlFor:"sizeNumber",children:["between"===p?"Min: ":"Size: "," "]}),Object(t.jsx)(k.a,{name:"sizeNumber",component:V,type:"text",label:"number"})]}),Object(t.jsxs)("span",{className:"wpNoWrap",children:[Object(t.jsx)("label",{className:"between"===p?"":"hiddenContent",htmlFor:"sizeMax",children:"Max:"}),Object(t.jsx)(k.a,{className:"between"===p?"":"hiddenContent",name:"sizeMax",component:V,type:"text",label:"number"})]})]})]}):Object(t.jsxs)("span",{className:"filterToggler",onClick:y,title:"show size filter",children:[Object(t.jsx)(A.a,{color:"lightblue",size:12}),Object(t.jsx)("span",{className:"sizeMainLabel",children:" size filter"})]})})]})]})})};W=Object(S.a)({destroyOnUnmount:!1,forceUnregisterOnUnmount:!1,form:"simpleSearch",validate:G})(W);var Y=Object(w.a)("simpleSearch"),Q=W=Object(i.b)((function(e){var r=Y(e,"starCheck"),a=Y(e,"sizeCheck");return{initialValues:e.form.simpleSearch,starsCheckedVal:r,sizeCheckedVal:a}}),(function(e){return{change:z.a}}))(W),J=a(87),Z=a(86),K=a.n(Z),X={repos:[],isloading:!1,searchHistory:[],currPage:1,orderBy:"desc",sortBy:"stars",type:"search",starsOpen:!1,sizeOpen:!1},$=function(e){return{name:e.name,full_name:e.full_name,html_url:e.html_url,stars:e.stargazers_count,forks:e.forks,language:e.language,languages_url:e.languages_url,owner:e.owner.login,description:e.description,created_at:e.created_at,updated_at:e.updated_at,owner_html_url:e.owner.html_url,owner_avatar_url:e.owner.avatar_url}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(s.a)({},X),r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SEARCH_START":(e=Object(s.a)({},e)).isLoading=!0,e.error=!1;break;case"SEARCH_FINISHED":(e=Object(s.a)({},e)).total=r.payload.result.total_count;var a=r.payload.result.items.map((function(e){return $(e)}));e.repos=a,e.currPage=r.payload.currPage||X.currPage,e.orderBy=r.payload.orderBy||X.orderBy,e.sortBy=r.payload.sortBy||X.sortBy,e.links=K()(r.payload.links),e.links&&e.links.last?e.lastPage=e.links.last.page:e.lastPage=e.currPage,e.searchHistory=Object(J.a)(e.searchHistory),r.payload.skipHistory||e.searchHistory.push({queryString:r.payload.queryString,repos:a}),e.isLoading=!1,e.url=r.payload.url;break;case"SEARCH_ERROR":if((e=Object(s.a)({},e)).isLoading=!1,e.error={},r.payload.error&&r.payload.error.response&&403===r.payload.error.response.status){if(r.payload.error.response.data.message&&(e.error.message=r.payload.error.response.data.message),r.payload.error.response.headers["x-ratelimit-used"]){e.error.limitRemain=" Limit remaining: "+r.payload.error.response.headers["x-ratelimit-remaining"]+" ",e.error.limitUsed=" Limit used: "+r.payload.error.response.headers["x-ratelimit-used"]+" ";var t=Math.round((new Date).getTime()/1e3),c=Number.parseInt(r.payload.error.response.headers["x-ratelimit-reset"],10);e.error.remainingSecs="  Please wait for "+(c-t)+" seconds. "}}else r.payload.error&&r.payload.error.response&&422===r.payload.error.response.status?(r.payload.error.response.data.message&&(e.error.errorType=r.payload.error.response.data.message),r.payload.error.response.data.errors&&Array.isArray(r.payload.error.response.data.errors)&&r.payload.error.response.data.errors.length>0&&r.payload.error.response.data.errors[0]&&r.payload.error.response.data.errors[0].message&&(e.error.message=r.payload.error.response.data.errors[0].message)):r.payload.error&&r.payload.error.message&&(e.error.message=r.payload.error.message);e.error.errorType=e.error.errorType||r.payload.customErrorType||"Error loading data:";break;case"SORTORDER_START":(e=Object(s.a)({},e)).isLoading=!0,e.error=!1,r.payload.orderBy&&(e.orderBy=r.payload.orderBy),r.payload.sortBy&&(e.sortBy=r.payload.sortBy);break;case"SORTORDER_FINISHED":(e=Object(s.a)({},e)).total=r.payload.result.total_count,e.repos=r.payload.result.items.map((function(e){return $(e)})),e.links=K()(r.payload.links),e.searchHistory=Object(J.a)(e.searchHistory),e.isLoading=!1,e.url=r.payload.url;break;case"PAGER_START":(e=Object(s.a)({},e)).isLoading=!0,e.error=!1;break;case"PAGER_FINISHED":(e=Object(s.a)({},e)).total=r.payload.result.total_count,e.repos=r.payload.result.items.map((function(e){return $(e)})),e.links=K()(r.payload.links),e.searchHistory=Object(J.a)(e.searchHistory),e.isLoading=!1,e.url=r.payload.url,r.payload.currPage&&(e.currPage=r.payload.currPage);break;case"INIT_STATE":e=Object(s.a)(Object(s.a)({},e),{},{repos:[]});break;case"TYPE_TOGGLE":(e=Object(s.a)({},e)).type=r.payload.type||X.type;break;case"STARS_TOGGLE":(e=Object(s.a)({},e)).starsOpen=!e.starsOpen;break;case"SIZE_TOGGLE":(e=Object(s.a)({},e)).sizeOpen=!e.sizeOpen;break;case"SEARCH_TYPE_NAV":(e=Object(s.a)({},e)).type="search";break;case"HISTORY_TYPE_NAV":(e=Object(s.a)({},e)).type="history"}return e},re=a(150),ae=a(28),te=a.n(ae),se=function(e){var r="";return e.searchValue&&e.searchValue.length>2&&(r+="".concat(e.searchValue).concat(e.name?" in:name":"").concat(e.description?" in:description":"").concat(e.readme?" in:readme":"")),e.user&&e.user.length>2&&(r.length>0&&(r+=" "),r+="user:".concat(e.user)),e.org&&e.org.length>2&&(r.length>0&&(r+=" "),r+="org:".concat(e.org)),e.lang&&e.lang.length>0&&(r.length>0&&(r+=" "),r+="language:".concat(e.lang)),e.topic&&e.topic.length>2&&(r.length>0&&(r+=" "),r+="topic:".concat(e.topic)),e.starCheck&&e.starsNumber&&e.starsNumber.length>0&&!isNaN(Number(e.starsNumber))&&(r.length>0&&(r+=" "),"equal"===e.starCheck?r+="stars:".concat(e.starsNumber):"greater"===e.starCheck?r+="stars:>".concat(e.starsNumber):"less"===e.starCheck?r+="stars:<".concat(e.starsNumber):"between"===e.starCheck&&e.starsMax&&e.starsMax.length>0&&!isNaN(Number(e.starsMax))&&(r+="stars:".concat(e.starsNumber,"..").concat(e.starsMax))),e.sizeCheck&&e.sizeNumber&&e.sizeNumber.length>0&&!isNaN(Number(e.sizeNumber))&&(r.length>0&&(r+=" "),"equal"===e.sizeCheck?r+="size:".concat(e.sizeNumber):"greater"===e.sizeCheck?r+="size:>".concat(e.sizeNumber):"less"===e.sizeCheck?r+="size:<".concat(e.sizeNumber):"between"===e.sizeCheck&&e.sizeMax&&e.sizeMax.length>0&&!isNaN(Number(e.sizeMax))&&(r+="size:".concat(e.sizeNumber,"..").concat(e.sizeMax))),r},ce=a(336),ne=function(e){Object(v.a)(a,e);var r=Object(R.a)(a);function a(e){var t;return Object(f.a)(this,a),(t=r.call(this,e)).handleAdvancedSubmit=function(e){var r=G(e);if(0!==Object.keys(r).length){var a=r[Object.keys(r)[0]];return t.props.validationError(a),!1}t.props.startSearch(),t.props.searchClick(e,t.pageSize,X.currPage,X.orderBy,X.sortBy)},t.showQuery=function(){var e=se(t.props.form.values),r={title:"GitRepoSearch",text:"Shared Git Repo search query URL",url:window.location.origin+"/?query="+encodeURIComponent(e)};navigator.share?navigator.share(r):alert(r.url)},t.handleReset=function(e){t.props.initState()},t.pageSize=e.pageSize||10,t.currPage=e.currPage||X.currPage,t.sortBy=e.sortBy||X.sortBy,t.orderBy=e.orderBy||X.orderBy,t.type=e.type||X.type,t}return Object(N.a)(a,[{key:"render",value:function(){return Object(t.jsxs)(h.a,{fluid:!0,children:[Object(t.jsx)(m.a,{className:"searchContainer",children:Object(t.jsx)(O.a,{children:Object(t.jsx)(Q,{onSubmit:this.handleAdvancedSubmit,onReset:this.handleReset,onTypeToggle:this.showQuery,manualSearchFn:this.handleAdvancedSubmit,onStarsToggle:this.props.starsToggle,onSizeToggle:this.props.sizeToggle})})}),this.props.isError?Object(t.jsx)(m.a,{children:Object(t.jsx)(O.a,{children:Object(t.jsxs)(ce.a,{variant:"danger",children:[this.props.isError.errorType," ",Object(t.jsx)("strong",{children:this.props.isError.message}),Object(t.jsx)("br",{}),this.props.isError.limitRemain,this.props.isError.limitUsed,this.props.isError.remainingSecs]})})}):""]})}}]),a}(n.a.Component),oe=Object(i.b)((function(e){return{orderBy:e.search.orderBy,sortBy:e.search.sortBy,currPage:e.search.currPage,isError:e.search.error,type:e.search.type,form:e.form.simpleSearch}}),(function(e){return{searchClick:function(r,a,t,s,c){var n=se(r);return function(e,r,a,t,s){var c="https://api.github.com/search/repositories?q=".concat(e,"&page=").concat(a,"&per_page=").concat(r,"&sort=").concat(s,"&order=").concat(t);return te.a.get(c)}(encodeURIComponent(n),a,t,s,c).then((function(r){200===r.status?e({type:"SEARCH_FINISHED",payload:{result:r.data,links:r.headers.link,queryString:n,currPage:t,sortBy:c,orderBy:s,url:r.config.url}}):e({type:"SEARCH_ERROR",payload:{}})})).catch((function(r){e({type:"SEARCH_ERROR",payload:{error:r}})}))},initState:function(){e({type:"INIT_STATE",payload:{}})},validationError:function(r){e({type:"SEARCH_ERROR",payload:{customErrorType:"Form validation error: ",error:{message:r}}})},typeChange:function(r){e({type:"TYPE_TOGGLE",payload:{type:r}})},startSearch:function(){return e({type:"SEARCH_START",payload:{}})},starsToggle:function(){return e({type:"STARS_TOGGLE",payload:{}})},sizeToggle:function(){return e({type:"SIZE_TOGGLE",payload:{}})}}}))(ne);var le=function(e){var r=e.language,a=e.langUrl,s=Object(i.d)((function(e){return e.loader[a]})),n=Object(i.c)(),o=Object(c.useState)(!0),l=Object(C.a)(o,2),d=l[0],j=l[1];return Object(c.useEffect)((function(){s||d||(j(!0),te.a.get(a).then((function(e){200===e.status&&n({type:"URL_FETCHED",payload:{data:e.data,url:a}})})).catch((function(e){})))}),[n,d,s,a]),Object(t.jsxs)("div",{children:[s?"":Object(t.jsx)(E.a,{variant:"secondary",size:"sm",disabled:!0,children:r}),(s||[]).map((function(e,r){return Object(t.jsx)(E.a,{variant:"secondary",size:"sm",disabled:!0,children:e},r)}))]})},ie=a(327),de=a(328),je=a(329);var be=function(e){return Object(t.jsxs)(m.a,{className:"repoRow",children:[Object(t.jsxs)(O.a,{className:"repoColName",md:3,sm:4,xs:4,children:[Object(t.jsxs)("div",{className:"repoNameTop",children:[Object(t.jsx)("div",{title:e.repo.name,children:e.repo.name}),Object(t.jsx)("div",{children:Object(t.jsx)("a",{href:e.repo.html_url,target:"blank",children:Object(t.jsx)("div",{title:e.repo.full_name,className:"repoFullName",children:e.repo.full_name})})})]}),Object(t.jsxs)("div",{className:"smallSizeOnly repoNameMeta",children:[Object(t.jsxs)("span",{className:"wsNoWrap",title:"stars",children:[Object(t.jsx)(ie.a,{size:16})," ",e.repo.stars]}),"\xa0",Object(t.jsxs)("span",{className:"wsNoWrap",title:"forks",children:[Object(t.jsx)("img",{alt:"",src:"./iconfinder_github-fork_83308.png"})," ",e.repo.forks]})]})]}),Object(t.jsxs)(O.a,{className:"repoColMeta bigSizeOnly",md:1,sm:0,xs:0,children:[Object(t.jsxs)("div",{title:"stars",children:[Object(t.jsx)(ie.a,{size:16})," ",e.repo.stars]}),Object(t.jsxs)("div",{title:"forks",children:[Object(t.jsx)("img",{alt:"",src:"./iconfinder_github-fork_83308.png"})," ",e.repo.forks]})]}),Object(t.jsx)(O.a,{className:"repoColDesc",md:3,sm:5,xs:5,children:Object(t.jsx)("p",{title:e.repo.description,children:e.repo.description})}),Object(t.jsxs)(O.a,{className:"repoColLangs",xs:1,children:[Object(t.jsx)(le,{language:e.repo.language,langUrl:e.repo.languages_url}),Object(t.jsx)("div",{className:"smallSizeOnly",children:Object(t.jsx)("a",{href:e.repo.owner_html_url,target:"blank",children:Object(t.jsx)("img",{alt:e.repo.owner,src:e.repo.owner_avatar_url,width:"30px"})})})]}),Object(t.jsxs)(O.a,{className:"repoColDates",md:2,sm:2,xs:2,children:[Object(t.jsxs)("div",{title:"created at",children:[Object(t.jsx)(de.a,{size:16})," ",e.repo.created_at.substring(0,10)]}),Object(t.jsxs)("div",{title:"updated at",children:[Object(t.jsx)(je.a,{size:16})," ",e.repo.updated_at.substring(0,10)]})]}),Object(t.jsxs)(O.a,{className:"repoCol bigSizeOnly",md:1,sm:0,xs:0,children:["By: ",e.repo.owner]}),Object(t.jsx)(O.a,{className:"repoColImg bigSizeOnly",md:1,sm:0,xs:0,children:Object(t.jsx)("a",{href:e.repo.owner_html_url,target:"blank",children:Object(t.jsx)("img",{alt:e.repo.owner,src:e.repo.owner_avatar_url,width:"30px"})})})]},e.keyProp)},pe=a(39);var ue=function(e){var r=Object(i.d)((function(e){return e.search.total})),a=Object(i.d)((function(e){return e.search.orderBy})),s=Object(i.d)((function(e){return e.search.sortBy})),c=Object(i.d)((function(e){return e.search.url})),n=Object(i.c)();return Object(t.jsxs)(m.a,{className:"sortOrderRow",children:[Object(t.jsxs)(O.a,{className:"sortByCol",children:[Object(t.jsx)("span",{className:"wpNoWrap",children:"Sort by:"}),Object(t.jsxs)(pe.RadioGroup,{name:"sortBy",selectedValue:s,onChange:function(e){n({type:"SORTORDER_START",payload:{sortBy:e}});var r=c.replace("&sort="+s,"&sort="+e);return te.a.get(r).then((function(e){200===e.status?n({type:"SORTORDER_FINISHED",payload:{result:e.data,links:e.headers.link,url:e.config.url}}):n({type:"SEARCH_ERROR",payload:{}})})).catch((function(e){n({type:"SEARCH_ERROR",payload:{error:e}})})),!0},children:[Object(t.jsxs)("span",{className:"wpNoWrap",children:[Object(t.jsx)(pe.Radio,{id:"stars",name:"stars",value:"stars"}),Object(t.jsx)("label",{htmlFor:"stars",children:"stars "})]}),Object(t.jsxs)("span",{className:"wpNoWrap",children:[Object(t.jsx)(pe.Radio,{id:"forks",name:"forks",value:"forks"}),Object(t.jsx)("label",{htmlFor:"forks",children:"forks "})]})]})]}),Object(t.jsxs)(O.a,{className:"orderByCol",children:[Object(t.jsx)("span",{className:"wpNoWrap",children:"Order by:"}),Object(t.jsxs)(pe.RadioGroup,{name:"orderBy",selectedValue:a,onChange:function(e){n({type:"SORTORDER_START",payload:{orderBy:e}});var r=c.replace("&order="+a,"&order="+e);return te.a.get(r).then((function(e){200===e.status?n({type:"SORTORDER_FINISHED",payload:{result:e.data,links:e.headers.link,url:e.config.url}}):n({type:"SEARCH_ERROR",payload:{}})})).catch((function(e){n({type:"SEARCH_ERROR",payload:{error:e}})})),!0},children:[Object(t.jsxs)("span",{className:"wpNoWrap",children:[Object(t.jsx)(pe.Radio,{id:"desc",name:"desc",value:"desc"}),Object(t.jsx)("label",{htmlFor:"desc",children:"desc "})]}),Object(t.jsxs)("span",{className:"wpNoWrap",children:[Object(t.jsx)(pe.Radio,{id:"asc",name:"asc",value:"asc"}),Object(t.jsx)("label",{htmlFor:"asc",children:"asc "})]})]})]}),Object(t.jsxs)(O.a,{className:"totalResultCol",children:[Object(t.jsx)("span",{className:"wpNoWrap",children:"Total results:"})," ",r]})]})},he=a(330),me=a(331),Oe=a(332),xe=a(333);var ye=function(e){var r=Object(i.d)((function(e){return e.search.currPage})),a=Object(i.d)((function(e){return e.search.lastPage||r})),s=Object(i.d)((function(e){return e.search.links||[]})),c=Object(i.c)(),n=function(e){var r=s[e].url+"",a=s[e].page+"";return c({type:"PAGER_START",payload:{}}),te.a.get(r).then((function(e){200===e.status?c({type:"PAGER_FINISHED",payload:{result:e.data,links:e.headers.link,url:e.config.url,currPage:a}}):c({type:"SEARCH_ERROR",payload:{}})})).catch((function(e){c({type:"SEARCH_ERROR",payload:{error:e}})})),!0};return Object(t.jsxs)(m.a,{className:"pagerRow",children:[Object(t.jsx)(O.a,{md:6,sm:2}),Object(t.jsxs)(O.a,{md:6,sm:10,className:"totalResultCol",children:[Object(t.jsxs)("span",{className:"totalResultCurrent",children:[" Current page: ",r," of ",a," "]}),s.first?Object(t.jsxs)("span",{className:"pagerButton",onClick:function(e){n("first")},children:[Object(t.jsx)(he.a,{color:"white",size:16}),Object(t.jsx)("br",{}),"First"]}):"",s.prev?Object(t.jsxs)("span",{className:"pagerButton",onClick:function(e){n("prev")},children:[Object(t.jsx)(me.a,{color:"white",size:16}),Object(t.jsx)("br",{}),"Prev"]}):"",s.next?Object(t.jsxs)("span",{className:"pagerButton",onClick:function(e){n("next")},children:[Object(t.jsx)(Oe.a,{color:"white",size:16}),Object(t.jsx)("br",{}),"Next"]}):"",s.last?Object(t.jsxs)("span",{className:"pagerButton",onClick:function(e){n("last")},children:[Object(t.jsx)(xe.a,{color:"white",size:16}),Object(t.jsx)("br",{}),"Last"]}):""]})]})};var ge=function(e){var r=Object(i.d)((function(e){return e.search.isLoading})),a=Object(t.jsx)("div",{className:"spinningLoader"});return Object(t.jsx)(h.a,{fluid:!0,children:Object(t.jsx)(m.a,{children:Object(t.jsx)(O.a,{className:"resultCol justify-content-md-center",children:r?a:e.repos&&0!==e.repos.length?Object(t.jsxs)(h.a,{fluid:!0,className:"repoList",children:[e.includeControls?Object(t.jsx)(ue,{}):"",e.repos.map((function(e,r){return Object(t.jsx)(be,{repo:e,keyProp:r},r)})),e.includeControls?Object(t.jsx)(ye,{}):""]}):Object(t.jsx)("div",{className:"emptyResult",children:"Search results are coming here"})})})})};var fe=Object(i.b)((function(e){return{repos:e.search.repos,isError:e.search.error}}),(function(e){return{}}))((function(e){return Object(t.jsxs)(h.a,{className:"container",fluid:!0,children:[Object(t.jsx)(m.a,{children:Object(t.jsx)(O.a,{children:Object(t.jsx)(oe,{pageSize:8})})}),Object(t.jsx)(m.a,{children:Object(t.jsx)(O.a,{children:Object(t.jsx)(ge,{repos:e.repos||[],includeControls:!0})})}),e.isError?Object(t.jsx)(m.a,{children:Object(t.jsx)(O.a,{children:Object(t.jsxs)(ce.a,{variant:"danger",children:[e.isError.errorType," ",Object(t.jsx)("strong",{children:e.isError.message}),Object(t.jsx)("br",{})]})})}):""]})})),Ne=function(e){var r=Object(i.d)((function(e){return e.search.searchHistory})),a=Object(i.d)((function(e){return e.history.items})),s=Object(i.d)((function(e){return e.history.selectedIndex})),c=Object(i.d)((function(e){return e.history.selectedIndex>=0?window.location.origin+"/?query="+encodeURIComponent(e.search.searchHistory[e.history.selectedIndex].queryString):""})),n=Object(i.c)();return Object(t.jsx)("div",{children:Object(t.jsx)(h.a,{className:"historyContainer",fluid:!0,children:Object(t.jsxs)(m.a,{className:"historyContainerRow",children:[Object(t.jsxs)(O.a,{className:"historyLeft",xs:2,children:[Object(t.jsxs)("div",{className:"historyTotalReq",children:["Total requests: ",r.length]}),r.map((function(e,r){return Object(t.jsx)("span",{className:r===s?"historyItemSelected":"historyItem",onClick:function(a){return n({type:"HISTORY_SELECT",payload:{index:r,items:e.repos}}),!0},children:Object(t.jsx)("textarea",{rows:5,maxLength:900,disabled:!1,readOnly:!0,value:e.queryString})},r)})),Object(t.jsx)("br",{})]}),Object(t.jsxs)(O.a,{className:"historyRight",xs:10,children:[Object(t.jsxs)("div",{className:"historyQuery",children:[" ",s>=0?" Query link:":"<- Select from the list! ",Object(t.jsxs)("a",{href:c,target:"_blank",rel:"noreferrer",children:[" ",c," "]})]}),Object(t.jsx)(ge,{repos:a||[],includeControls:!1})]})]})})})};var ve=function(e){var r=Object(i.d)((function(e){return e.search.type}));return Object(c.useEffect)((function(){document.title="Git Repo Search App"}),[]),Object(t.jsxs)("div",{children:[Object(t.jsx)(g,{}),Object(t.jsx)("div",{className:"mainContainer",children:"search"===r?Object(t.jsx)(fe,{}):Object(t.jsx)(Ne,{})})]})},Re={items:[],selectedIndex:-1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(s.a)({},Re),r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"HISTORY_SELECT":(e=Object(s.a)({},e)).items=r.payload.items,e.selectedIndex=r.payload.index}return e},ke={},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(s.a)({},ke),r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"URL_FETCHED":(e=Object(s.a)({},e))[r.payload.url]=Object.keys(r.payload.data)}return e},we=(a(310),a(311),{search:ee,history:Ce,loader:Se,form:j.a}),ze=Object(l.combineReducers)(we),Ee={searchValue:"",user:"",org:"",lang:"",topic:"",name:!0,description:!1,readme:!1,starCheck:"greater",starsNumber:"",sizeCheck:"greater",sizeNumber:""},_e=function(e){var r=Object(s.a)({},e)||{},a=new URLSearchParams(window.location.search).get("query");if(a){var t,c=Object(re.a)(decodeURIComponent(a).trim().split(" "));try{for(c.s();!(t=c.n()).done;){var n=t.value,o=n.split(":");1===o.length?r.searchValue=n:2===o.length&&("user"===o[0]?r.user=o[1]:"org"===o[0]?r.org=o[1]:"language"===o[0]?r.lang=o[1]:"topic"===o[0]?r.topic=o[1]:"in"===o[0]&&(r[o[1]]=!0))}}catch(l){c.e(l)}finally{c.f()}}return r}(Ee),Te=Object(l.createStore)(ze,{search:X,history:Re,loader:ke,form:{simpleSearch:Object(s.a)({},_e)}},Object(b.composeWithDevTools)(Object(l.applyMiddleware)(d.a)));Object(o.render)(Object(t.jsx)(i.a,{store:Te,children:Object(t.jsx)(ve,{})}),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.0169ba84.chunk.js.map