(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(10),c=a(2),s=a(7),o=a(5),l=(a(15),a(1)),d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(m.jsxs)("article",{"data-id":a,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(m.jsx)(j,{user:r})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=["id"];function p(e){return O.find((function(t){return t.id===e}))||null}var x=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:p(e.userId)})}));function v(e){return Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.id}))))+1}var y=function(){var e=Object(l.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(0),d=Object(c.a)(i,2),u=d[0],j=d[1],b=Object(l.useState)(x),y=Object(c.a)(b,2),S=y[0],N=y[1],g=Object(l.useState)(!1),I=Object(c.a)(g,2),C=I[0],_=I[1],k=Object(l.useState)(!1),D=Object(c.a)(k,2),M=D[0],T=D[1],w=function(e){(e.preventDefault(),_(!a||0===a.trim().length),T(!u),a.trim().length>0&&u>0)&&(!function(e){e.id;var t=Object(r.a)(e,f),a=Object(o.a)({id:v(S)},t);N((function(e){return[].concat(Object(s.a)(e),[a])}))}({id:Math.random(),title:a,userId:u,completed:!1,user:p(u)}),n(""),j(0),_(!1),T(!1))};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:w,children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["Title: ",Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),_(!1)}})]}),C&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["User: ",Object(m.jsxs)("select",{"data-cy":"userSelect",value:u,onChange:function(e){j(+e.target.value),T(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),O.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]})]}),M&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:w,children:"Add"})]}),Object(m.jsx)(h,{todos:S})]})};i.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.28b7ece2.chunk.js.map