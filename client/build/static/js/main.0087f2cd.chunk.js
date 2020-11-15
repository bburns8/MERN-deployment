(this["webpackJsonpmern-deployment"]=this["webpackJsonpmern-deployment"]||[]).push([[0],{24:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(17),i=c.n(r),o=(c(24),c(5)),j=c.n(o),l=c(2),b=c(3),h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],h=i[1],d=Object(n.useState)(""),u=Object(l.a)(d,2),O=u[0],p=u[1],x=Object(n.useState)(""),m=Object(l.a)(x,2),g=m[0],f=m[1],v=Object(n.useState)(""),N=Object(l.a)(v,2),P=N[0],k=N[1],C=Object(n.useState)(""),y=Object(l.a)(C,2),S=y[0],w=y[1],F=Object(n.useState)({}),E=Object(l.a)(F,2),H=E[0],_=E[1];return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{children:"Add a Pirate"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("http://localhost:8000/api/pirate",{name:c,image:o,treasure:O,phrase:g,position:P,feature:S}).then((function(e){e.data.errors?_(e.data.errors):Object(b.c)("/"),console.log(e)})).catch((function(e){return console.log(e)}))},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Pirate Name:"}),Object(a.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},className:"form-control"}),Object(a.jsx)("span",{className:"text-danger",children:H.name?H.name.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Image URL"}),Object(a.jsx)("input",{type:"text",onChange:function(e){return h(e.target.value)},className:"form-control"}),Object(a.jsx)("span",{className:"text-danger",children:H.image?H.image.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"# of Treasure Chests:"}),Object(a.jsx)("input",{type:"number",onChange:function(e){return p(e.target.value)},className:"form-control"}),Object(a.jsx)("span",{className:"text-danger",children:H.treasure?H.treasure.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Pirate Catch Phrase:"}),Object(a.jsx)("input",{type:"text",onChange:function(e){return f(e.target.value)},className:"form-control"}),Object(a.jsx)("span",{className:"text-danger",children:H.phrase?H.phrase.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Crew Position:"}),Object(a.jsx)("input",{list:"crew-position",onChange:function(e){return k(e.target.value)},className:"form-control"}),Object(a.jsx)("span",{className:"text-danger",children:H.position?H.position.message:""}),Object(a.jsxs)("datalist",{id:"crew-position",children:[Object(a.jsx)("option",{value:"Captain"}),Object(a.jsx)("option",{value:"First Mate"}),Object(a.jsx)("option",{value:"Quarter Master"}),Object(a.jsx)("option",{value:"Boat Swain"}),Object(a.jsx)("option",{value:"Powder Monkey"})]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Pirate Feature:"}),Object(a.jsx)("input",{type:"checkbox",value:"Peg Leg",checked:"checked",onChange:function(e){return w(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"Peg Leg",children:"Peg Leg"}),Object(a.jsx)("input",{type:"checkbox",value:"Eye Patch",checked:"checked"}),Object(a.jsx)("label",{htmlFor:"Eye Patch",children:"Eye Patch"}),Object(a.jsx)("input",{type:"checkbox",value:"Hook Hand",checked:"checked"}),Object(a.jsx)("label",{htmlFor:"Hook Hand",children:"Hook Hand"})]}),Object(a.jsx)("input",{type:"submit",value:"Add Pirate",className:"btn btn-primary"}),Object(a.jsx)("button",{onClick:function(e){Object(b.c)("/")},className:"btn btn-danger",children:"Cancel"})]})]})},d=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],r=c[1];Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/pirates").then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{children:"Pirate Crew"}),Object(a.jsx)("table",{className:"table table-hover table-striped",children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"View Pirate Info"}),Object(a.jsx)("th",{children:"Image"}),Object(a.jsx)("th",{children:"Actions"})]}),s.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(b.a,{to:"/pirate/".concat(e._id),children:e.name})}),Object(a.jsxs)("td",{children:[Object(a.jsx)("img",{src:"https://i.pinimg.com/originals/5d/f5/0c/5df50c705763e944bb025258ce92812a.jpg",height:100,width:100}),e.image]}),Object(a.jsxs)("td",{children:[Object(a.jsx)(b.a,{to:"/edit/".concat(e._id),className:"btn btn-primary",children:"Edit"}),Object(a.jsx)(b.a,{to:"/${pirate._id}",onClick:function(t){var c;c=e._id,j.a.delete("http://localhost:8000/api/pirate/".concat(c)).then((function(e){console.log(e),Object(b.c)("/")})).catch((function(e){return console.log(e)}))},className:"btn btn-danger",children:"Walk the plank!"})]})]},e._id)}))]})})]})},u=function(e){var t=Object(n.useState)({}),c=Object(l.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(0),o=Object(l.a)(i,2);o[0],o[1];Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/pirate/"+e._id).then((function(e){r(e.data),console.log(e)})).catch((function(e){return console.log("Error:",e)}))}),[e._id]);return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h3",{children:["Details about ",s.name]}),Object(a.jsxs)("p",{children:["Image URL: ",s.image]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("img",{src:"https://i.pinimg.com/originals/5d/f5/0c/5df50c705763e944bb025258ce92812a.jpg",height:100,width:100}),s.image]}),Object(a.jsxs)("p",{children:["# of Treasure Chests: ",s.treasure]}),Object(a.jsxs)("p",{children:["Catch Phrase:",Object(a.jsx)("ul",{children:s.phrase?Object(a.jsx)("li",{children:s.phrase}):""})]}),Object(a.jsxs)("p",{children:["Crew Position:",s.position?Object(a.jsx)("li",{children:s.position}):""]}),Object(a.jsxs)("p",{children:["Pirate Feature: ",s.feature,s.feature?Object(a.jsx)("li",{children:s.feature}):"Peg Leg, Eye Patch, Hook Hand"]})]})},O=function(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),h=o[0],d=o[1],u=Object(n.useState)(""),O=Object(l.a)(u,2),p=O[0],x=O[1],m=Object(n.useState)(""),g=Object(l.a)(m,2),f=g[0],v=g[1],N=Object(n.useState)(""),P=Object(l.a)(N,2),k=P[0],C=P[1],y=Object(n.useState)(""),S=Object(l.a)(y,2),w=S[0],F=S[1],E=Object(n.useState)({}),H=Object(l.a)(E,2),_=H[0],L=H[1];Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/pirate/".concat(e._id)).then((function(e){r(e.data.name),d(e.data.image),x(e.data.treasure),v(e.data.phrase),C(e.data.position),F(e.data.feature),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[e._id]);return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{children:"Pirate Crew"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j.a.put("http://localhost:8000/api/pirate/".concat(e._id),{name:s,image:h,treasure:p,phrase:f,position:k,feature:w}).then((function(e){e.data.errors?L(e.data.errors):Object(b.c)("/"),console.log(e)})).catch((function(e){return console.log(e)}))},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Pirate Name:"}),Object(a.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},className:"form-control",value:s}),Object(a.jsx)("span",{className:"text-danger",children:_.name?_.name.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Image Url:"}),Object(a.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},className:"form-control",value:h}),Object(a.jsx)("span",{className:"text-danger",children:_.image?_.image.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"# of Treasure Chests:"}),Object(a.jsx)("input",{type:"number",onChange:function(e){return x(e.target.value)},className:"form-control",value:p}),Object(a.jsx)("span",{className:"text-danger",children:_.treasure?_.treasure.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Pirate Catch Phrase:"}),Object(a.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)},className:"form-control",value:f}),Object(a.jsx)("span",{className:"text-danger",children:_.phrase?_.phrase.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Crew Position:"}),Object(a.jsx)("input",{list:"crew-position",onChange:function(e){return C(e.target.value)},className:"form-control",value:k}),Object(a.jsx)("span",{className:"text-danger",children:_.position?_.position.message:""}),Object(a.jsxs)("datalist",{id:"crew-position",children:[Object(a.jsx)("option",{value:"Captain"}),Object(a.jsx)("option",{value:"First Mate"}),Object(a.jsx)("option",{value:"Quarter Master"}),Object(a.jsx)("option",{value:"Boat Swain"}),Object(a.jsx)("option",{value:"Powder Monkey"})]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Pirate Feature:"}),Object(a.jsx)("input",{type:"checkbox",value:"Peg Leg",checked:"checked",onChange:function(e){return F(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"Peg Leg",children:"Peg Leg"}),Object(a.jsx)("input",{type:"checkbox",value:"Eye Patch",checked:"checked"}),Object(a.jsx)("label",{htmlFor:"Eye Patch",children:"Eye Patch"}),Object(a.jsx)("input",{type:"checkbox",value:"Hook Hand",checked:"checked"}),Object(a.jsx)("label",{htmlFor:"Hook Hand",children:"Hook Hand"})]}),Object(a.jsx)("input",{type:"submit",value:"Edit Pirate",className:"btn btn-success"})]})]})},p=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(b.a,{to:"/",children:"Crew Board"})," |",Object(a.jsx)(b.a,{to:"/new",children:" Add a Pirate"})]}),Object(a.jsxs)(b.b,{children:[Object(a.jsx)(d,{path:"/"}),Object(a.jsx)(h,{path:"/new"}),Object(a.jsx)(u,{path:"/pirate/:_id"}),Object(a.jsx)(O,{path:"/edit/:_id"})]})]})};var x=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(p,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),m()}},[[48,1,2]]]);
//# sourceMappingURL=main.0087f2cd.chunk.js.map