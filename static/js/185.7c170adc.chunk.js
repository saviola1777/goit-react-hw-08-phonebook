"use strict";(self.webpackChunkreact_homework_08_phonebook=self.webpackChunkreact_homework_08_phonebook||[]).push([[185],{5185:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var r="Cointeiner_cointeiner__CcW5D",a=n(184),o=function(t){var e=t.children;return(0,a.jsx)("div",{className:r,children:e})},c=n(9434),u={form:"ContactForm_form__dhl+T",name:"ContactForm_name__ZqciK",input:"ContactForm_input__Bl93P",button:"ContactForm_button__eSwX9"},i="NOT_FOUND";var s=function(t,e){return t===e};function l(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?s:r,o=n.maxSize,c=void 0===o?1:o,u=n.resultEqualityCheck,l=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),f=1===c?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:i},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return i}return{get:r,put:function(e,a){r(e)===i&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,l);function p(){var e=f.get(arguments);if(e===i){if(e=t.apply(null,arguments),u){var n=f.getEntries(),r=n.find((function(t){return u(t.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function f(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function p(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,c=0,u={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(u=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=u,l=s.memoizeOptions,p=void 0===l?n:l,m=Array.isArray(p)?p:[p],d=f(r),v=t.apply(void 0,[function(){return c++,i.apply(null,arguments)}].concat(m)),h=t((function(){for(var t=[],e=d.length,n=0;n<e;n++)t.push(d[n].apply(null,arguments));return o=v.apply(null,t)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:v,dependencies:d,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),h};return a}var m=p(l),d=function(t){return t.contacts.items},v=(m([d,function(t){return t.filter}],(function(t,e){if(!e)return t;var n=e.toLocaleLowerCase();return t.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))})),n(4747)),h=function(){var t=(0,c.v9)(d),e=(0,c.I0)();console.log(t);return(0,a.jsx)("div",{className:u.wrapper,children:(0,a.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.currentTarget.name.value,r=t.currentTarget.number.value;e(v.xe({name:n,number:r})),t.currentTarget.reset()},className:u.form,children:[(0,a.jsxs)("label",{className:u.name,children:[" Name",(0,a.jsx)("input",{className:u.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})," "]}),(0,a.jsxs)("label",{className:u.name,children:["Number",(0,a.jsx)("input",{className:u.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,a.jsx)("button",{className:u.button,type:"submit",children:"Add contact"})]})})},_={contactList:"ContactList_contactList__UFVCg",contactItem:"ContactList_contactItem__ppNQ5",contactButton:"ContactList_contactButton__QiycO"},y=n(2791),b=function(t){return t.filter},x=function(){var t=(0,c.v9)(d),e=function(t,e){var n=t.toLocaleLowerCase().trim();return e.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))}((0,c.v9)(b),t);console.log("contacts",t);var n=(0,c.I0)();(0,y.useEffect)((function(){n(v.CL())}),[n]);var r=e.map((function(t){var e=t.id,r=t.name,o=t.number;return(0,a.jsxs)("li",{className:_.contactItem,children:[(0,a.jsx)("p",{className:_.contactSpan,children:r}),(0,a.jsx)("p",{className:_.contactSpam,children:o}),(0,a.jsx)("button",{className:_.contactButton,type:"button",onClick:function(){return function(t){n(v.ze(t))}(e)},children:"delete"})]},e)}));return(0,a.jsx)("ol",{className:_.contactList,children:r})},g="Filter_filterWrapper__ohvAm",j="Filter_label__vEd1E",C="Filter_input__N7T3z",N=n(3240),w=function(){var t=(0,c.I0)();return(0,a.jsx)("div",{className:g,children:(0,a.jsxs)("label",{className:j,children:["Find contacts by name",(0,a.jsx)("input",{className:C,type:"text",name:"filter",onChange:function(e){var n=e.target,r=(0,N.T)(n.value);t(r),console.log(r)}})]})})},k=function(){return(0,a.jsxs)(o,{children:[(0,a.jsx)("h2",{children:"phonebook"}),(0,a.jsx)(h,{}),(0,a.jsx)("h2",{children:"Contacts"}),(0,a.jsx)(w,{}),(0,a.jsx)(x,{})]})}}}]);
//# sourceMappingURL=185.7c170adc.chunk.js.map