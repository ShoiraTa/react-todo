(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],[,,,,function(t,e,n){t.exports={item:"ToDoListItem_item__noJ6A",itemLeft:"ToDoListItem_itemLeft__3uNxT",completed:"ToDoListItem_completed__1YPhU",p:"ToDoListItem_p__1Vg_V",dNone:"ToDoListItem_dNone__2H9rL",dBlock:"ToDoListItem_dBlock__3Er79"}},,,function(t,e,n){t.exports={form:"ToDoListForm_form__3_3eJ",formInput:"ToDoListForm_formInput__3ddsK",inputSubmit:"ToDoListForm_inputSubmit__oEqlj"}},,function(t,e,n){t.exports={container:"ToDoList_container__1mjV9",p:"ToDoList_p__2YEvu"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),a=n(10),i=n.n(a),r=(n(16),n(17),n(11)),s=n(2),u=n(4),l=n.n(u),m=n(6),d=n(0);var j=function(t){var e=t.task,n=t.deleteHandler,c=Object(o.useState)(!1),a=Object(s.a)(c,2),i=a[0],r=a[1],u=function(){r(!i)};return Object(d.jsxs)("div",{className:l.a.item,children:[Object(d.jsxs)("div",{className:"".concat(l.a.itemLeft," ").concat(i?l.a.completed:null),children:[Object(d.jsx)("input",{type:"checkbox",onChange:u}),Object(d.jsxs)("p",{className:l.a.p,contenteditable:"true",children:[e," "]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("button",{onChange:u,onClick:n,children:[" ",Object(d.jsx)(m.b,{style:{color:"orangered",fontSize:"16px"}})]})})]})},b=n(9),p=n.n(b),_=n(7),f=n.n(_);var O=function(t){var e=t.onSubmit,n=Object(o.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(d.jsxs)("form",{className:f.a.form,onSubmit:function(t){if(t.preventDefault(),0!==a.trim().length){var n={task:a,id:Math.floor(1e3*Math.random())+1,status:!1};e(n),i("")}else window.alert("Please write item")},children:[Object(d.jsx)("input",{onChange:function(t){i(t.target.value)},name:"title",placeholder:"Add todo...",className:f.a.formInput,type:"text",value:a}),Object(d.jsx)("button",{type:"submit",className:f.a.inputSubmit,children:Object(d.jsx)(m.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})};var x=function(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)(),i=Object(s.a)(a,2);return i[0],i[1],Object(d.jsxs)("div",{className:p.a.container,children:[Object(d.jsx)("p",{className:p.a.p,children:" TODOS "}),Object(d.jsx)(O,{onSubmit:function(t){c([].concat(Object(r.a)(n),[t]))}}),n.map((function(t){return Object(d.jsx)(j,{deleteHandler:function(){return e=t.id,void c(n.filter((function(t){return t.id!==e})));var e},task:t.task},t.id)}))]})};var h=function(){return Object(d.jsx)(x,{})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.83a56cd6.chunk.js.map