"use strict";(self.webpackChunkgoit_test_task=self.webpackChunkgoit_test_task||[]).push([[984],{7984:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t,s,u,o,a=r(3433),c=r(9439),i=r(8683),l=r(4925),d=r(168),p=r(6444),f=p.default.button(t||(t=(0,d.Z)(["\n  display: inline-flex;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  background-color: #ebd8ff;\n  color: inherit;\n\n  /* .btn.isSelected {\n  background-color: #1976d2;\n  color: #fff;\n} */\n\n  :hover {\n    background-color: #1976d2;\n    color: #fff;\n  }\n\n  /* :active {\n    background-color: #1565c0;\n    color: #fff;\n  } */\n"]))),x=r(184),h=["selected","type","children"],b=function(n){n.selected;var e=n.type,r=void 0===e?"button":e,t=n.children,s=(0,l.Z)(n,h);return(0,x.jsx)(f,(0,i.Z)((0,i.Z)({type:r},s),{},{children:t}))},v=r(2791),g=p.default.li(s||(s=(0,d.Z)(["\n  width: 380px;\n  height: 460px;\n  background-color: pink;\n"]))),m=(p.default.p(u||(u=(0,d.Z)(['\n  font-family: "Montserrat";\n\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1, 2;\n  text-transform: uppercase;\n\n  color: #ebd8ff;\n']))),p.default.div(o||(o=(0,d.Z)(["\n  /* width: 80px;\n  height: 80px;\n\n  border-width: 9px;\n  border-radius: 50%;\n\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff; */\n"])))),w=r(5861),k=r(7757),y=r.n(k),Z=r(1243);Z.Z.defaults.baseURL="https://641b2a469b82ded29d4bddd7.mockapi.io";var j,L=function(){var n=(0,w.Z)(y().mark((function n(){var e;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.Z.get("/users");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),F=function(){var n=(0,w.Z)(y().mark((function n(e){var r;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("user:",e),n.prev=1,n.next=4,Z.Z.put("/users/".concat(e.id),{followers:e.followers+1});case 4:return r=n.sent,console.log("res:",r.data),n.abrupt("return",r.data);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),O=function(){var n=(0,w.Z)(y().mark((function n(e){var r;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.Z.put("/users/".concat(e.id),{followers:e.followers-1});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),S=r(6403),C=r(3418),q=r(4477),E=r(9434),W=function(n){var e=n.user,r=(0,S.NL)(),t=(0,E.I0)(),s=(0,C.D)({mutationFn:F,onSuccess:function(){t((0,q.mX)(e)),r.invalidateQueries({queryKey:["users"]})}}),u=(0,C.D)({mutationFn:O,onSuccess:function(){t((0,q.Fg)(e.id)),r.invalidateQueries({queryKey:["users"]})}});return(0,x.jsxs)(g,{children:[(0,x.jsx)("p",{children:e.user}),(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:e.awatar,alt:"user avatar"})}),(0,x.jsxs)("p",{children:[e.tweets," TWEETS"]}),(0,x.jsxs)("p",{children:[e.followers," FOLLOWERS"]}),(0,x.jsx)(m,{}),(0,x.jsx)(b,{type:"button",onClick:function(){s.mutate(e)},children:"FOLLOW"}),(0,x.jsx)(b,{type:"button",onClick:function(){u.mutate(e)},children:"FOLLOWING"})]})},_=r(6444).default.ul(j||(j=(0,d.Z)(["\n  display: flex;\n  gap: 10px;\n  margin: 0 auto;\n\n  flex-direction: column;\n"]))),K=function(n){var e=n.users;return console.log("visibleUsers:",e),(0,v.useEffect)((function(){console.log("UsersList")})),e&&(0,x.jsx)(_,{children:e.map((function(n){return(0,x.jsx)(W,{user:n},n.id)}))})},U=r(5530);var D=function(){var n=(0,U.a)({queryKey:["users"],queryFn:L}).data,e=void 0===n?[]:n,r=(0,v.useState)(1),t=(0,c.Z)(r,2),s=t[0],u=t[1],o=(0,a.Z)(e).splice(0,3*s),i=Math.ceil(e.length/3);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(K,{users:o}),(0,x.jsx)(b,{type:"button",onClick:function(){s>=i||u((function(n){return n+1}))},children:"Load more"})]})}}}]);
//# sourceMappingURL=984.d989a574.chunk.js.map