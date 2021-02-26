(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(13),a=n.n(s),i=(n(19),n(3)),l=(n(20),n(0));var o=function(){return Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("header",{className:"p-4",children:[Object(l.jsx)("h1",{children:"Employee Directory"}),Object(l.jsx)("p",{children:"Click on row titles to sort, or use the search box to search by name."})]})})})},j=r.a.createContext({});var d=function(){var e=Object(c.useContext)(j).handleInputChange;return Object(l.jsxs)("div",{className:"row p-3",children:[Object(l.jsx)("div",{className:"col-4"}),Object(l.jsx)("div",{className:"col-4",children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("h4",{children:"Search by Name:"}),Object(l.jsx)("input",{id:"employee-search",className:"form-control",onChange:e})]})}),Object(l.jsx)("div",{className:"col-4"})]})};var h=function(){var e=Object(c.useContext)(j).filteredEmployees;return Object(l.jsx)(l.Fragment,{children:e.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:e.picture.medium,alt:e.name.first})}),Object(l.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.dob.date})]},e.login.uuid)}))})};var u=function(){var e=Object(c.useContext)(j).handleSort;return Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table table-striped",children:[Object(l.jsx)("thead",{className:"thead-dark",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Image"}),Object(l.jsx)("th",{id:"header-name",onClick:e,children:"Name"}),Object(l.jsx)("th",{id:"header-phone",onClick:e,children:"Phone Number"}),Object(l.jsx)("th",{id:"header-email",onClick:e,children:"Email"}),Object(l.jsx)("th",{children:"Date of Birth"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsx)(h,{})})]})})},b=n(14),m=n.n(b),O=function(){return m.a.get("https://randomuser.me/api/?results=200&nat=us")};var f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(n),a=Object(i.a)(s,2),h=a[0],b=a[1],m=Object(c.useState)(n),f=Object(i.a)(m,2),x=f[0],p=f[1],v=Object(c.useState)({name:0}),g=Object(i.a)(v,2),C=g[0],y=g[1];return Object(c.useEffect)((function(){O().then((function(e){return r(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){n.length>0&&p(n.filter((function(e){return(e.name.first+" "+e.name.last).toLowerCase().indexOf(h)>-1})))}),[n,h]),Object(c.useEffect)((function(){if(n.length>0)if(1===C.name)p(x.sort((function(e,t){return e.name.first.localeCompare(t.name.first)})));else{if(-1!==C.name)return;p(x.sort((function(e,t){return t.name.first.localeCompare(e.name.first)})))}}),[n.length,x,C]),Object(l.jsx)("div",{className:"App container",children:Object(l.jsxs)(j.Provider,{value:{employees:n,filteredEmployees:x,handleInputChange:function(){var e=document.getElementById("employee-search").value.toLowerCase();b(e)},handleSort:function(){0===C.name?y({name:1}):y({name:-C.name}),console.log(C)}},children:[Object(l.jsx)(o,{}),Object(l.jsx)(d,{}),n.length>0?Object(l.jsx)(u,{employeeList:n}):Object(l.jsx)("div",{})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(40);a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),x()}},[[41,1,2]]]);
//# sourceMappingURL=main.9db4e496.chunk.js.map