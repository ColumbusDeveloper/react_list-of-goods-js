(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(8),r=n.n(s),c=n(4),a=n(5),i=(n(7),n(14),n(1)),o=n(9),d=n.n(o),u=n(0),l=function(e){var t=e.btn,n=e.searchField,s=e.setSearchField,r=(e.goodsRender,e.isReversed),c=e.setIsReversed;e.setGoodsRender;return Object(u.jsx)("button",{type:"button",className:d()("button",{"is-info":"Sort alphabetically"===t,"is-success":"Sort by length"===t,"is-warning":"Reverse"===t,"is-danger":"Reset"===t,"is-hidden":"Reset"===t&&""===n,"is-light":t!==n.btn&&"Reverse"!==t||"Reverse"===t&&!r}),onClick:function(){switch(t){case"Reverse":c((function(e){return!e}));break;case"Reset":c(!1),s("");break;default:c(!1),s({btn:t})}},children:t})},b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=["Sort alphabetically","Sort by length","Reverse","Reset"],j=b.map((function(e){return{id:b.indexOf(e)+1,name:e}})),f=h.map((function(e){return{id:h.indexOf(e)+1,name:e}}));var m=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(j),o=Object(a.a)(r,2),d=o[0],b=o[1],h=Object(i.useState)(!1),m=Object(a.a)(h,2),O=m[0],p=m[1],v=function(e,t){var n=Object(c.a)(e);return t&&n.sort((function(e,n){switch(t){case"Sort alphabetically":return e.name.localeCompare(n.name);case"Sort by length":return e.name.length-n.name.length;default:return 0}})),n}(j,n.btn);return Object(i.useEffect)((function(){b(O?function(e){return Object(c.a)(e).reverse()}:v)}),[n,O]),Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsx)("div",{className:"buttons",children:f.map((function(e){return Object(u.jsx)(l,{btn:e.name,searchField:n,setSearchField:s,goodsRender:d,setGoodsRender:b,isReversed:O,setIsReversed:p,children:e},e.id)}))}),Object(u.jsx)("ul",{children:d.map((function(e){return Object(u.jsx)("li",{"data-cy":"Good",children:e.name},e.id)}))})]})};r.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5fa971a8.chunk.js.map