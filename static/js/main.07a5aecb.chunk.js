(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{101:function(e,t,a){e.exports=a(116)},106:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(106),a(10)),i=a(12),m=a(15),s=a(20),u=a(85),d=a(184),f=a(161),p=a(162),g=a(88),E=a(156),b=a(81),h=a.n(b),x=a(159),y=a(80),v=a.n(y),w=r.a.createContext(),C=function(){var e=r.a.useContext(w).cantTotal;return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(x.a,{badgeContent:e(),style:{color:"#f7d04b"},showZero:!0},r.a.createElement(v.a,{style:{color:"white"}}))))},k=a(36),j=a(160),O=Object(j.a)((function(e){return{root:{flexGrow:1},appBar:{backgroundColor:"black"},title:{flexGrow:1,padding:"7px",height:"43px"},formControl:{margin:e.spacing(1),minWidth:180},categoria:{color:"white",textDecoration:"none"},categoriaMobile:{color:"black",textDecoration:"none"},sectionDesktop:Object(k.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(k.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),N=a(41),D=(a(76),N.initializeApp({apiKey:"AIzaSyCQWAnM8Svs3PfRB0ImV_KWrmTPW3y-HHk",authDomain:"react-ecommerce-740c2.firebaseapp.com",databaseURL:"https://react-ecommerce-740c2.firebaseio.com",projectId:"react-ecommerce-740c2",storageBucket:"react-ecommerce-740c2.appspot.com",messagingSenderId:"381973464289",appId:"1:381973464289:web:fc3a2065c6796f9ec823a0",measurementId:"G-GPGYL05WW9"}));function F(){return N.firestore(D)}var B=function(){var e=O();Object(n.useEffect)((function(){F().collection("categories").get().then((function(e){0===e.size?console.log("no results"):e.docs.map((function(e){return Object(s.a)({},e.data(),{id:e.id})}))})).catch((function(e){console.log("Error searching categories",e)}))}),[]);var t=r.a.useState(null),a=Object(m.a)(t,2),l=a[0],c=a[1],i=Boolean(l),b=r.a.createElement(u.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:function(){c(null)}},r.a.createElement(o.b,{className:e.categoriaMobile,to:"/categories/notebooks"},r.a.createElement(d.a,null,"Notebooks")),r.a.createElement(o.b,{className:e.categoriaMobile,to:"/categories/audio"},r.a.createElement(d.a,null,"Audio")),r.a.createElement(o.b,{className:e.categoriaMobile,to:"/categories/smartwatches"},r.a.createElement(d.a,null,"Smartwatches")));return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{position:"static",className:e.appBar},r.a.createElement(p.a,null,r.a.createElement(g.a,{variant:"h6",className:e.title},r.a.createElement(o.c,{to:"/"},r.a.createElement("img",{className:e.title,src:"https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/themes/common/logo-1421680389-1571774718-1624cbbd901c2cf55aa291fb448a8c991571774719.png?",alt:"imagen-logo"}))),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(o.b,{className:e.categoria,to:"/"},r.a.createElement(d.a,null,"Home")),r.a.createElement(o.b,{className:e.categoria,to:"/categories/notebooks"},r.a.createElement(d.a,null,"Notebooks")),r.a.createElement(o.b,{className:e.categoria,to:"/categories/audio"},r.a.createElement(d.a,null,"Audio")),r.a.createElement(o.b,{className:e.categoria,to:"/categories/smartwatches"},r.a.createElement(d.a,null,"Smartwatches"))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(E.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit"},r.a.createElement(h.a,null))),r.a.createElement(o.c,{to:"/cart"},r.a.createElement(C,null)))),b)},M=a(181),S=a(163),T=function(e){var t=e.item,a=t.id,n=t.name,l=(t.description,t.price),c=t.img;return r.a.createElement(M.a,{flexDirection:"colum",marginTop:"60px"},r.a.createElement("h2",null,n),r.a.createElement("div",{style:{paddingBottom:"20px"}},r.a.createElement("span",null,"Price: $",l)),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/item/".concat(a)},r.a.createElement("img",{src:c,alt:"img",width:"350"}))),r.a.createElement(o.b,{to:"/item/".concat(a),style:{textDecoration:"none",color:"black"}},r.a.createElement(S.a,{variant:"contained",style:{backgroundColor:"#f7d04b"}},"Details")))},W=function(e){var t=e.list;return r.a.createElement(M.a,{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginBottom:"100px"},t.map((function(e){return r.a.createElement(T,{key:e.id,item:e})})))},A=[{idCategory:"notebooks",img:"https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},{idCategory:"audio",img:"https://images.unsplash.com/photo-1528148343865-51218c4a13e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},{idCategory:"smartwatches",img:"https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"}],I=function(e){var t=e.imgCategory,a=A.filter((function(e){return e.idCategory===t}));return r.a.createElement(r.a.Fragment,null,a.length>0&&r.a.createElement("div",null,r.a.createElement("img",{src:a[0].img,alt:"categories",style:{width:"100%",height:"350px",objectFit:"cover"}})))},H=a(164);function G(){return r.a.createElement("div",{style:{marginLeft:"50%",paddingTop:"15%",marginBottom:"28%"}},r.a.createElement(H.a,{disableShrink:!0,style:{color:"#f7d04b"}}))}var V=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(i.g)().categoryId;return Object(n.useEffect)((function(){var e=F();(c?e.collection("items").where("categoryId","==",c):e.collection("items")).get().then((function(e){0===e.size&&console.log("No existen resultados"),l(e.docs.map((function(e){return Object(s.a)({},e.data(),{id:e.id})})))}))}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{imgCategory:c}),a.length>0?r.a.createElement(W,{list:a}):r.a.createElement(G,null))},q=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://d319yleido6tgg.cloudfront.net/stores/001/063/033/themes/cubo/slide-1571835719477-7385694174-9537d0d86060d32ec8c5dc6d975ab9741571835723-1920-1920.jpg?755810131",alt:"sections",style:{width:"100%",height:"450px",objectFit:"cover"}}))},R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(V,null))},z=a(64),P=a.n(z),Y=a(82),L=a(180),X=a(183),J=a(169),$=a(167),K=a(168),U=a(166),Z=a(165),_=r.a.forwardRef((function(e,t){return r.a.createElement(Z.a,Object.assign({direction:"up",ref:t},e))})),Q=function(e){var t=e.open,a=e.setOpen,n=function(){a(!1)};return r.a.createElement("div",null,r.a.createElement(S.a,{variant:"outlined",color:"primary",onClick:function(){a(!0)}},"Finish buying"),r.a.createElement(X.a,{open:t,TransitionComponent:_,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(U.a,{id:"alert-dialog-slide-title"},"Alert to continue shopping"),r.a.createElement($.a,null,r.a.createElement(K.a,{id:"alert-dialog-slide-description"},"Error! Verify that all the fields are complete and that the emails are the same")),r.a.createElement(J.a,null,r.a.createElement(S.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(S.a,{onClick:n,color:"primary"},"Agree"))))},ee=function(e){var t=e.createOrder,a=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"36ch"}}}})),l=Object(n.useState)({firstName:"",lastName:"",adress:"",email:"",emailConfirmation:"",phone:""}),c=Object(m.a)(l,2),o=c[0],i=c[1],u=r.a.useState(!1),d=Object(m.a)(u,2),f=d[0],p=d[1],g=function(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(s.a)({},e,Object(k.a)({},a,n))}))},E=a(),b=!(o.email.length&&o.firstName.length&&o.lastName.length&&o.adress.length&&o.emailConfirmation.length&&o.phone.length>0&&o.email===o.emailConfirmation);return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{display:"flex",justifyContent:"center",margin:"60px 0"},r.a.createElement("form",{className:E.root,noValidate:!0,autoComplete:"off",fullWidth:!0},r.a.createElement("h2",null,"To continue with the purchase, complete the data"),r.a.createElement(M.a,null,r.a.createElement(L.a,{required:!0,label:"First Name",Value:o.firstName,placeholder:"Andrea",multiline:!0,name:"firstName",variant:"outlined",onChange:g,helperText:"First name"}),r.a.createElement(L.a,{required:!0,label:"Last Name",Value:o.lastName,placeholder:"Bernales Jorge",multiline:!0,name:"lastName",variant:"outlined",onChange:g,helperText:"Last name"})),r.a.createElement(M.a,null,r.a.createElement(L.a,{required:!0,label:"Adress",Value:o.adress,placeholder:"Calle Segovia N\xba 1892 - Barrio Norte",multiline:!0,name:"adress",variant:"outlined",onChange:g,helperText:"Adress"}),r.a.createElement(L.a,{required:!0,label:"Email",Value:o.email,placeholder:"andrea@gmail.com",multiline:!0,name:"email",variant:"outlined",onChange:g,helperText:"E-mail"})),r.a.createElement(M.a,null,r.a.createElement(L.a,{required:!0,label:"Repetir email",Value:o.emailConfirmation,placeholder:"andrea@gmail.com",multiline:!0,name:"emailConfirmation",variant:"outlined",onChange:g,helperText:"Repeat email"}),r.a.createElement(L.a,{required:!0,label:"15111008",Value:o.phone,placeholder:"Tel\xe9fono de contacto",multiline:!0,name:"phone",variant:"outlined",onChange:g})),r.a.createElement(M.a,{display:"flex",justifyContent:" flex-end",p:1},b?r.a.createElement(Q,{open:f,setOpen:p}):r.a.createElement(S.a,{variant:"contained",style:{backgroundColor:"#f7d04b",color:"#000"},onClick:function(){var e=o.firstName,a=o.lastName,n=o.adress,r=o.email,l=o.phone;t({firstName:e,lastName:a,adress:n,email:r,phone:l})}},"Finish buying")))))},te=function(e){var t=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"80px",margin:"80px 0"},r.a.createElement("div",null,r.a.createElement("h2",{style:{marginBottom:"20px"}},t)),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(S.a,{variant:"contained",style:{backgroundColor:"#f7d04b"}},"See products")))))},ae=a(170),ne=a(171),re=a(172),le=a(83),ce=a.n(le),oe=[{img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/063/033/themes/cubo/img-1496020818-1571836119-9fd777a762857253dee5c85d391f64461571836120-480-0.jpg?755810131",title:"Notebooks"},{img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/063/033/themes/cubo/img-81464767-1571836118-cf19072a3268d9b4cd867a36615b71741571836119-640-0.jpg?755810131",title:"Auriculares"},{img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/063/033/themes/cubo/img-1376843658-1571836121-06f7c810f528aa2735df6d4d549505dc1571836121-640-0.jpg?755810131",title:"Smartphones"},{img:"https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"Notebooks"},{img:"https://images.unsplash.com/photo-1528148343865-51218c4a13e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"Auriculares"},{img:"https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",title:"smartwatches"}],ie=Object(j.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.primary.light},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}}));function me(){var e=ie();return r.a.createElement("div",{className:e.root},r.a.createElement(ae.a,{className:e.gridList,cols:2.5},oe.map((function(t){return r.a.createElement(ne.a,{key:t.img},r.a.createElement("img",{src:t.img,alt:t.title}),r.a.createElement(re.a,{title:t.title,classes:{root:e.titleBar,title:e.title},actionIcon:r.a.createElement(E.a,{"aria-label":"star ".concat(t.title)},r.a.createElement(ce.a,{className:e.title}))}))}))))}var se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{text:"\ud83d\ude41 Ups, no product has been selected!"}),r.a.createElement("div",null,r.a.createElement(me,null)))},ue=function(e){var t=e.orderId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{text:"Your purchase order is: ".concat(t)}),r.a.createElement("div",{style:{paddingTop:"400px"}},r.a.createElement(me,null)))},de=a(174),fe=a(177),pe=a(178),ge=a(173),Ee=a(175),be=a(176),he=a(118),xe=function(e){return Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"}).format(e)},ye=function(e){var t=e.setShowForm;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{display:"flex",justifyContent:" flex-end",p:1},r.a.createElement(S.a,{variant:"contained",style:{backgroundColor:"#000",color:"#fff"},onClick:function(){return t(!0)}},"Checkout")),r.a.createElement(M.a,{display:"flex",justifyContent:" flex-end",p:1,mb:10},r.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(S.a,{variant:"contained",style:{backgroundColor:"#f7d04b"}},"Continue buying"))))},ve=Object(j.a)({root:{width:"80%",margin:"auto",marginTop:"20px"}}),we=function(e){var t=e.setShowForm,a=r.a.useContext(w),n=a.cartItem,l=a.costoTotal,c=ve();return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{className:c.root},r.a.createElement(ge.a,null,r.a.createElement(de.a,{className:c.table,stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(Ee.a,null,r.a.createElement(be.a,null,r.a.createElement(fe.a,{style:{minWidth:170}},"Product"),r.a.createElement(fe.a,{style:{minWidth:170}},"Title"),r.a.createElement(fe.a,{align:"right",style:{minWidth:100}},"Count"),r.a.createElement(fe.a,{align:"right",style:{minWidth:170}},"Price"))),r.a.createElement(pe.a,null,n.map((function(e){return r.a.createElement(be.a,{key:e.id},r.a.createElement(fe.a,{component:"th",scope:"row"},r.a.createElement("img",{src:e.img,alt:"img",style:{width:"82px"}})),r.a.createElement(fe.a,null,e.name),r.a.createElement(fe.a,{align:"right"},e.count),r.a.createElement(fe.a,{align:"right"},xe(e.price)))})))),r.a.createElement(M.a,{display:"flex",justifyContent:"flex-end",p:1},"Total cost: ",l())),r.a.createElement(ye,{setShowForm:t})))},Ce=function(){var e=r.a.useContext(w),t=e.cartItem,a=e.costoTotal,l=e.resetCantCart,c=Object(n.useState)(!1),o=Object(m.a)(c,2),i=o[0],u=o[1],d=Object(n.useState)(null),f=Object(m.a)(d,2),p=f[0],g=f[1];if(0===t.length&&null===p)return r.a.createElement(se,null);function E(){return(E=Object(Y.a)(P.a.mark((function e(n){var r,c,o,i,m,u,d,f,p;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=F(),c=r.collection("orders"),o={buyer:n,cartItem:t,date:N.firestore.FieldValue.serverTimestamp(),total:a()},e.prev=3,e.next=6,c.add(o);case 6:i=e.sent,m=i.id,g(m),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("Error");case 14:return u=r.collection("items").where(N.firestore.FieldPath.documentId(),"in",t.map((function(e){return e.id}))),e.next=17,u.get();case 17:if(d=e.sent,f=r.batch(),p=[],d.docs.forEach((function(e,a){e.data().stock>=t[a].count?f.update(e.ref,{stock:e.data().stock-t[a].count}):p.push(Object(s.a)({},e.data(),{id:e.id}))})),0!==p.length){e.next=24;break}return e.next=24,f.commit();case 24:l();case 25:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return p?r.a.createElement(ue,{orderId:p}):r.a.createElement(r.a.Fragment,null,i?r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{createOrder:function(e){return E.apply(this,arguments)}}),r.a.createElement(me,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(we,{setShowForm:u}),r.a.createElement(me,null)))},ke=a(179),je=a(84),Oe=a.n(je),Ne=function(e){var t=e.min,a=e.stock,n=e.count,l=e.setCount;return r.a.createElement(M.a,{flexDirection:"colum",width:"185px",height:"100px"},r.a.createElement(M.a,{display:"flex",justifyContent:"space-between",border:"solid 1px black",borderRadius:"8px"},a>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe.a,{style:{fontSize:30},onClick:function(){n>t&&l(n-1)}}),r.a.createElement("span",{style:{paddingTop:"7px"}},n),r.a.createElement(ke.a,{style:{fontSize:30},disabled:n===a,onClick:function(){n<a&&l(n+1)}},"add_circle"))))},De=function(e){var t=e.item,a=r.a.useState(1),n=Object(m.a)(a,2),l=n[0],c=n[1],i=r.a.useState(!1),s=Object(m.a)(i,2),u=s[0],d=s[1],f=r.a.useContext(w).productsAdd;return r.a.createElement(M.a,{display:"flex",justifyContent:"center",margin:"auto",flexWrap:"wrap",marginBottom:"150px"},r.a.createElement(M.a,{flexDirection:"colum",marginTop:"60px"},r.a.createElement("h2",null,t.name),r.a.createElement("img",{src:t.img,alt:"img",width:"350"})),r.a.createElement(M.a,{paddingTop:10,margin:5},r.a.createElement("div",{style:{fontWeight:"bold"}},t.description),r.a.createElement("p",null,"price: $ ",Intl.NumberFormat().format(t.price)),r.a.createElement("p",null,"Available stock: ",t.stock),r.a.createElement(Ne,{setCount:c,count:l,min:1,stock:t.stock}),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(o.b,{style:{textDecoration:"none"},to:"/cart"},r.a.createElement(S.a,{variant:"contained",color:"secondary",style:{marginBottom:"20px",backgroundColor:"#000"}},"Finish buying"))),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(S.a,{variant:"contained",color:"primary",style:{backgroundColor:"#f7d04b"}},"Continue buying")))):r.a.createElement(S.a,{variant:"contained",style:{backgroundColor:"#000",color:"#fff"},fullWidth:!0,onClick:function(){l>0&&(d(!0),f({id:t.id,name:t.name,img:t.img,count:l,price:t.price,stock:t.stock}))},disabled:0===t.stock},"Add to cart")))},Fe=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),u=o[0],d=o[1],f=Object(i.g)().productId;return Object(n.useEffect)((function(){l(!0),F().collection("items").doc(f).get().then((function(e){l(!1),d(Object(s.a)({id:e.id},e.data()))}))}),[f]),r.a.createElement(r.a.Fragment,null,!0===a?r.a.createElement(G,null):r.a.createElement(De,{item:u}))},Be=function(){return r.a.createElement(M.a,{style:{background:"black",height:"60px",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("span",null,"Designed and built by Roc\xedo Esteban"))},Me=a(86),Se=function(e){var t=e.children,a=Object(n.useState)([]),l=Object(m.a)(a,2),c=l[0],o=l[1];return r.a.createElement(w.Provider,{value:{cartItem:c,productsAdd:function(e){if(c.find((function(t){return t.id===e.id}))){var t=c.map((function(t){return t.id===e.id?Object(s.a)({},t,{count:e.count+t.count}):t}));o(t)}else o((function(t){return[].concat(Object(Me.a)(t),[e])}))},costoTotal:function(){var e=c.reduce((function(e,t){return e+t.price*t.count}),0);return xe(e)},cantTotal:function(){return c.reduce((function(e,t){return e+t.count}),0)},resetCantCart:function(){o([])}}},t)};var Te=function(){return r.a.createElement(Se,null,r.a.createElement(o.a,null,r.a.createElement(B,null),r.a.createElement(i.d,null,r.a.createElement(i.a,{from:"/react-ecommerce",to:"/"}),r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(R,null)),r.a.createElement(i.b,{path:"/categories/:categoryId"},r.a.createElement(V,null)),r.a.createElement(i.b,{exact:!0,path:"/cart"},r.a.createElement(Ce,null)),r.a.createElement(i.b,{exact:!0,path:"/item/:productId"},r.a.createElement(Fe,null))),r.a.createElement(Be,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.07a5aecb.chunk.js.map