(this["webpackJsonpsocial-media-admin"]=this["webpackJsonpsocial-media-admin"]||[]).push([[0],{202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},239:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(42),s=n.n(r),i=(n(202),n(46)),o=(n(203),n(8)),l=n(21),d=n(153),j=n(3),u=n(35),b=(n(204),n(108)),h=n(89),m=n(126),O=n(71),p=n(19),x=n.n(p),f=n(61),v=n(62),g=n.n(v),w=n(2);var y=function(){var e=Object(l.g)(),t=Object(a.useState)({email:null,password:null}),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)({error:!1,message:null}),i=Object(o.a)(s,2),d=i[0],p=i[1],v=function(e){r(Object(u.a)(Object(u.a)({},c),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(w.jsx)("div",{className:"loginpage",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-lg-4",children:Object(w.jsxs)("div",{className:"card shadow p-5",children:[Object(w.jsx)(b.a,{variant:"h4",className:"text-center",style:{fontWeight:"bold"},children:" ADMIN LOGIN "}),Object(w.jsx)(h.a,{className:"mt-4",children:Object(w.jsx)(m.a,{id:"outlined-basic",onChange:v,label:"Email",name:"email",type:"email",required:!0,variant:"outlined"})}),Object(w.jsx)(h.a,{className:"mt-4",children:Object(w.jsx)(m.a,{id:"outlined-basic",onChange:v,label:"Password",name:"password",type:"password",required:!0,variant:"outlined"})}),d.error&&Object(w.jsx)("span",{style:{color:"red"},children:d.message}),Object(w.jsx)(O.a,{variant:"contained",className:"mt-4",onClick:function(){console.log(c);var t;""===c.email?p({error:!0,message:"Email Is Requerd"}):/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(c.email)?""===c.password?p({error:!0,message:"Password Is Requerd"}):(t=c,new Promise(function(){var e=Object(f.a)(x.a.mark((function e(n,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),g.a.post("http://localhost:4000/api/v1/admin/login",t).then((function(e){localStorage.setItem("token",e.data.token),console.log(e.data),localStorage.setItem("admin",JSON.stringify(e.data.admin)),n(e)})).catch((function(e){console.log("err",e),a(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())).then((function(t){e.push("/")})).catch((function(e){p({error:!0,message:e.response.data.message})})):p({error:!0,message:"invalid Email format "})},children:"LOGIN"})]})})})})},N=n(331),k=n(330),S=n(317),I=n(315),B=n(325),A=n(72),C=n(123),D=n.n(C),P=n(328),z=n(323),U=n(171),M=n(316),E=n(103),_=n.n(E),F=n(160),L=n.n(F),R=n(329),W=240;var q=function(e){var t=e.window,n=a.useState(!1),c=Object(o.a)(n,2),r=c[0],s=c[1],l=function(){s(!r)},d=Object(w.jsxs)("div",{children:[Object(w.jsx)(R.a,{}),Object(w.jsx)(I.a,{}),Object(w.jsxs)(P.a,{children:[Object(w.jsx)(i.b,{to:"/",style:{textDecoration:"none",color:"#757575"},children:Object(w.jsxs)(z.a,{button:!0,children:[Object(w.jsx)(U.a,{children:Object(w.jsx)(D.a,{})}),Object(w.jsx)(M.a,{primary:"Dashboard"})]})}),Object(w.jsx)(i.b,{to:"/addBanner",style:{textDecoration:"none",color:"#757575"},children:Object(w.jsxs)(z.a,{button:!0,children:[Object(w.jsx)(U.a,{children:Object(w.jsx)(D.a,{})}),Object(w.jsx)(M.a,{primary:"addbanner"})]})}),Object(w.jsx)(i.b,{to:"/banner",style:{textDecoration:"none",color:"#757575"},children:Object(w.jsxs)(z.a,{button:!0,children:[Object(w.jsxs)(U.a,{children:[" ",Object(w.jsx)(_.a,{})]}),Object(w.jsx)(M.a,{primary:"Banner Management"})]})})]}),Object(w.jsx)(I.a,{})]}),j=void 0!==t?function(){return t().document.body}:void 0;return Object(w.jsxs)(k.a,{sx:{display:"flex"},children:[Object(w.jsx)(S.a,{}),Object(w.jsx)(N.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(W,"px)")},ml:{sm:"".concat(W,"px")}},children:Object(w.jsxs)(R.a,{children:[Object(w.jsx)(A.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:l,sx:{mr:2,display:{sm:"none"}},children:Object(w.jsx)(L.a,{})}),Object(w.jsx)(b.a,{variant:"h6",noWrap:!0,component:"div",children:"Admin Pannel"})]})}),Object(w.jsxs)(k.a,{component:"nav",sx:{width:{sm:W},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(w.jsx)(B.a,{container:j,variant:"temporary",open:r,onClose:l,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:W}},children:d}),Object(w.jsx)(B.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:W}},open:!0,children:d})]}),Object(w.jsxs)(k.a,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(W,"px)")}},children:[Object(w.jsx)(R.a,{}),e.children]})]})},T=n(161),G=n(249),J=n(318),Y=n(124),Z=n.n(Y);n(239);var V=function(){var e=Object(l.g)(),t=[{field:"id",headerName:"ID",width:200},{field:"name",headerName:"First Name",width:180},{field:"username",headerName:"User Name",width:180},{field:"isActive",headerName:"Active Status",width:180},{field:"Block",headerName:"Block / Unblock",sortable:!1,width:180,renderCell:function(t){return Object(w.jsx)(G.a,{checked:!t.row.isActive,onChange:function(n){var a;(a={userId:t.row.id,status:!t.row.isActive},new Promise(function(){var e=Object(f.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=localStorage.getItem("token"),g.a.patch("http://localhost:4000/api/v1/admin/editUser",a,{headers:{Authorization:c}}).then((function(e){console.log(e.data.users),t(e)})).catch((function(e){n(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())).then((function(e){var t=e.data.users.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:e._id})}));s(t)})).catch((function(t){403==t.response.status&&(localStorage.removeItem("token"),e.push("/login"))}))},name:"loading",color:"primary"})}},{field:"action",headerName:"Action",sortable:!1,renderCell:function(t){return Object(w.jsx)(A.a,{onClick:function(n){n.stopPropagation(),Z.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){var a;n.isConfirmed&&(a=t.row._id,new Promise(function(){var e=Object(f.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=localStorage.getItem("token"),g.a.patch("http://localhost:4000/api/v1/admin/deleteUser",{userId:a},{headers:{Authorization:c}}).then((function(e){console.log(e.data.users),t(e)})).catch((function(e){n(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())).then((function(e){console.log(e);var t=e.data.users.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:e._id})}));s(t),Z.a.fire("Deleted!","Your file has been deleted.","success")})).catch((function(t){403==t.response.status&&(localStorage.removeItem("token"),e.push("/login"))}))})),console.log(t)},style:{backgroundColor:"#1976d2"},children:Object(w.jsx)(J.a,{style:{color:"red"}})})}}],n=Object(a.useState)([]),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){new Promise(function(){var e=Object(f.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=localStorage.getItem("token"),g.a.get("http://localhost:4000/api/v1/admin/getAllUsers",{headers:{Authorization:a}}).then((function(e){t(e)})).catch((function(e){n(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()).then((function(e){var t=e.data.users.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:e._id})}));console.log(t),s(t)})).catch((function(t){403==t.response.status&&(localStorage.removeItem("token"),e.push("/login"))}))}),[]),Object(w.jsxs)("div",{className:"ViewUser card p-4",children:[Object(w.jsxs)("div",{className:"header",children:[Object(w.jsx)("h3",{children:"Users"}),Object(w.jsx)(O.a,{variant:"contained",children:"Add User"})]}),Object(w.jsx)("div",{style:{height:400,width:"100%"},children:Object(w.jsx)(T.a,{rows:r,columns:t,pageSize:5,rowsPerPageOptions:[5],pagination:!0,dense:!0})})]})};var $=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(q,{children:Object(w.jsx)(V,{})})})},H=n(107),K=n(48);n(241);var Q=function(){var e=Object(l.g)(),t=Object(a.useState)({days:5}),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),d=i[0],b=i[1],p=Object(a.useState)(""),v=Object(o.a)(p,2),y=v[0],N=v[1],k=Object(a.useState)({}),S=Object(o.a)(k,2),I=(S[0],S[1],function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(j.a)({},e.target.name,e.target.value))}))});return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"card p-4",children:[Object(w.jsx)("h4",{children:"  Banner Management "}),Object(w.jsxs)("div",{className:"row  align-items-center",children:[Object(w.jsxs)("div",{className:"col-lg-6",children:[Object(w.jsx)(m.a,{variant:"outlined",label:"description",inputProps:{maxLength:40},name:"description",fullWidth:!0,value:c.description,onChange:I,className:"mt-4"}),Object(w.jsx)(h.a,{variant:"outlined",fullWidth:!0,style:{border:"1px solid #c4c4c4",borderRadius:"3px",padding:"13px",marginTop:"30px"},children:Object(w.jsx)("input",{type:"file",name:"files",multiple:!1,value:c.files,id:"",onChange:function(e){0!==e.target.files.length?(N(URL.createObjectURL(e.target.files[0])),b(e.target.files),r((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(j.a)({},e.target.name,e.target.value))}))):(N(""),b([]))},accept:"image/*"})}),Object(w.jsx)(h.a,{fullWidth:!0,className:"mt-4",children:Object(w.jsxs)(H.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Days",name:"days",onChange:I,children:[Object(w.jsx)(K.a,{value:5,children:"5 Days"}),Object(w.jsx)(K.a,{value:10,children:"10 Days"}),Object(w.jsx)(K.a,{value:15,children:"15 Days"})]})}),Object(w.jsx)(O.a,{className:"mt-3",variant:"outlined",onClick:function(){var t=new FormData,n=!0;if(c.days?t.append("days",c.days):n=!1,c.description?t.append("description",c.description):n=!1,d.length>0)for(var a=0;a<d.length;a++)t.append("files",d[a]);else n=!1;n&&function(e){return new Promise(function(){var t=Object(f.a)(x.a.mark((function t(n,a){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=localStorage.getItem("token"),g.a.post("http://localhost:4000/api/v1/admin/addBanner",e,{headers:{Authorization:c,"Content-Type":"multipart/form-data"}}).then((function(e){n(e.data)})).catch((function(e){a(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}(t).then((function(){e.push("/banner"),r({days:5,description:""}),N(""),b([])}))},children:"Add Banner"})]}),Object(w.jsx)("div",{className:"col-lg-5",children:y&&Object(w.jsx)("div",{className:"SidebarBanner",children:Object(w.jsxs)("div",{className:"banner",children:[Object(w.jsx)("img",{src:y,alt:""}),Object(w.jsx)("span",{children:c.description})]})})})]})]})})},X=n(319),ee=n(321);var te=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){new Promise(function(){var e=Object(f.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=localStorage.getItem("token"),g.a.get("http://localhost:4000/api/v1/admin/getAllBanners",{headers:{Authorization:a}}).then((function(e){t(e)})).catch((function(e){n(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()).then((function(e){console.log(e),c(e.data.Banner)})).catch((function(e){}))}),[]);var r=function(e){(function(e){return new Promise(function(){var t=Object(f.a)(x.a.mark((function t(n,a){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=localStorage.getItem("token"),g.a.get("http://localhost:4000/api/v1/admin/deleteBanner/"+e,{headers:{Authorization:c}}).then((function(e){console.log(e.data),n(e)})).catch((function(e){a(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())})(e).then((function(e){c(e.data.Banner)}))};return Object(w.jsxs)("div",{className:"Banners",children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between p-3",children:[Object(w.jsx)(X.a,{variant:"h4",children:"Banner Management"}),Object(w.jsx)(i.b,{style:{textDecoration:"none"},to:"/addBanner",children:Object(w.jsx)(ee.a,{variant:"contained",style:{color:"#000",backgroundColor:"#0FFF5070"},children:"Add Banner"})})]}),Object(w.jsx)("div",{className:"card  p-2",children:n?n.map((function(e,t){return Object(w.jsxs)("div",{className:" col-lg-4 SidebarBanner",children:[Object(w.jsxs)("div",{className:"banner",children:[Object(w.jsx)("img",{src:e.files[0],alt:""}),Object(w.jsx)("span",{children:e.description})]}),Object(w.jsx)(ee.a,{onClick:function(){return r(e._id)},style:{textDecoration:"none",color:"red"},children:" Delete "})]})})):null})]})};var ne=function(){return Object(w.jsx)("div",{className:"banner",children:Object(w.jsx)(q,{children:Object(w.jsx)(te,{})})})};var ae=function(){return Object(w.jsx)("div",{className:"banner",children:Object(w.jsx)(q,{children:Object(w.jsx)(Q,{})})})};var ce=function(){var e=Object(l.g)(),t=Object(l.h)(),n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)({}),j=Object(o.a)(i,2),u=(j[0],j[1]);Object(a.useEffect)((function(){if(s(localStorage.getItem("token")),u(localStorage.getItem("user")),r){var e=Object(d.a)(r);1e3*e.exp<(new Date).getTime()&&b(),console.log(e)}s(localStorage.getItem("token"))}),[t]);var b=function(){console.log("logout"),localStorage.removeItem("token"),s(null),e.push("/login")};return Object(w.jsxs)(l.d,{children:[Object(w.jsx)(l.b,{exact:!0,path:"/",children:r?Object(w.jsx)($,{}):Object(w.jsx)(l.a,{to:"/login"})}),Object(w.jsx)(l.b,{exact:!0,path:"/login",children:r?Object(w.jsx)(l.a,{to:"/"}):Object(w.jsx)(y,{})}),Object(w.jsx)(l.b,{exact:!0,path:"/Banner",children:Object(w.jsx)(ne,{})}),Object(w.jsx)(l.b,{exact:!0,path:"/addBanner",children:r?Object(w.jsx)(ae,{}):Object(w.jsx)(l.a,{to:"/login"})})]})};var re=function(){return Object(w.jsx)(i.a,{children:Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(ce,{})})})};s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(re,{})}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.7615d8f7.chunk.js.map