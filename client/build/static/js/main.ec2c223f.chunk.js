(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{31:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(5),r=n.n(l),o=n(15),u=n(24),i=n.n(u);var m=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement(i.a,null),"Keeper"))};var s=function(){var e=(new Date).getFullYear();return c.a.createElement("footer",null,c.a.createElement("p",null,"Copyright \u24d2 ",e))},f=n(26),h=n.n(f);var E=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},c.a.createElement(h.a,null)))},p=n(17),d=n(22),b=n(27),v=n.n(b),j=n(55),O=n(56);var g=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),l=n[0],r=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],s=i[1];function f(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(p.a)({},n,a))}))}function h(t){t.preventDefault(),fetch("/home",{method:"POST",mode:"cors",body:JSON.stringify({title:m.title,content:m.content}),headers:{"Content-Type":"application/json"}}),s({title:"",content:""}),fetch("/home").then((function(e){return e.json()})).then((function(t){return e.setLists(t)}))}return c.a.createElement("div",null,c.a.createElement("form",{className:"create-note",onSubmit:h},l&&c.a.createElement("input",{name:"title",onChange:f,value:m.title,placeholder:"Title"}),c.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:f,value:m.content,placeholder:"Take a note...",rows:l?3:1}),c.a.createElement(O.a,{in:l},c.a.createElement(j.a,{onClick:h},c.a.createElement(v.a,null)))))};var k=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];function r(e){fetch("/home/"+e,{method:"DELETE"}).then((function(){return console.log("Deleted the "+e+" successfully")})),fetch("/home").then((function(e){return e.json()})).then((function(e){return l(e)}))}return Object(a.useEffect)((function(){fetch("/home").then((function(e){return e.json()})).then((function(e){return l(e)}))}),{}),c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement(g,{setLists:l}),n.map((function(e){return c.a.createElement(E,{key:e._id,id:e._id,title:e.title,content:e.content,onDelete:r})})),c.a.createElement(s,null))};r.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ec2c223f.chunk.js.map