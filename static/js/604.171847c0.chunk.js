"use strict";(self.webpackChunkcodeblytest=self.webpackChunkcodeblytest||[]).push([[604],{6604:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var i=t(9439),a=t(4554),r=t(9218),l=t(184),o=function(e){var n=e.changeFilter;return(0,l.jsx)(a.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,l.jsx)("div",{children:(0,l.jsx)(r.Z,{id:"filter",label:"Search field",type:"search",onChange:n})})})},s=t(2791),c=t(3967),d=t(9836),u=t(3382),h=t(3994),x=t(9281),p=t(8582),j=t(799),Z=t(5855),f=t(5527),g=t(3400),m=t(2715),b=t(1133),v=t(5397),C=t(111);function w(e){var n=(0,c.Z)(),t=e.count,i=e.page,r=e.rowsPerPage,o=e.onPageChange;return(0,l.jsxs)(a.Z,{sx:{flexShrink:0,ml:2.5},children:[(0,l.jsx)(g.Z,{onClick:function(e){o(e,0)},disabled:0===i,"aria-label":"first page",children:"rtl"===n.direction?(0,l.jsx)(C.Z,{}):(0,l.jsx)(m.Z,{})}),(0,l.jsx)(g.Z,{onClick:function(e){o(e,i-1)},disabled:0===i,"aria-label":"previous page",children:"rtl"===n.direction?(0,l.jsx)(v.Z,{}):(0,l.jsx)(b.Z,{})}),(0,l.jsx)(g.Z,{onClick:function(e){o(e,i+1)},disabled:i>=Math.ceil(t/r)-1,"aria-label":"next page",children:"rtl"===n.direction?(0,l.jsx)(b.Z,{}):(0,l.jsx)(v.Z,{})}),(0,l.jsx)(g.Z,{onClick:function(e){o(e,Math.max(0,Math.ceil(t/r)-1))},disabled:i>=Math.ceil(t/r)-1,"aria-label":"last page",children:"rtl"===n.direction?(0,l.jsx)(m.Z,{}):(0,l.jsx)(C.Z,{})})]})}var P=function(e){var n=e.data,t=s.useState(0),a=(0,i.Z)(t,2),r=a[0],o=a[1],c=s.useState(5),g=(0,i.Z)(c,2),m=g[0],b=g[1],v=r>0?Math.max(0,(1+r)*m-n.length):0;return(0,l.jsx)(x.Z,{component:f.Z,children:n&&(0,l.jsxs)(d.Z,{sx:{minWidth:500},"aria-label":"custom pagination table",children:[(0,l.jsxs)(u.Z,{children:[(m>0?n.slice(r*m,r*m+m):n).map((function(e){return(0,l.jsxs)(Z.Z,{sx:{bgcolor:"".concat(e.color)},children:[(0,l.jsx)(h.Z,{component:"th",scope:"row",children:e.id}),(0,l.jsx)(h.Z,{style:{width:160},align:"right",children:e.name}),(0,l.jsx)(h.Z,{style:{width:160},align:"right",children:e.year})]},e.id)})),v>0&&(0,l.jsx)(Z.Z,{style:{height:53*v},children:(0,l.jsx)(h.Z,{colSpan:6})})]}),(0,l.jsx)(p.Z,{children:(0,l.jsx)(Z.Z,{children:(0,l.jsx)(j.Z,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:n.length,rowsPerPage:m,page:r,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onPageChange:function(e,n){o(n)},onRowsPerPageChange:function(e){b(parseInt(e.target.value,10)),o(0)},ActionsComponent:w})})})]})})},k=t(1614),S=function(e){var n=e.children;return(0,l.jsx)(k.Z,{maxWidth:"sm",children:n})},y=t(6151),M=t(890),A=t(15),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function T(){var e=s.useState(!1),n=(0,i.Z)(e,2),t=n[0],r=n[1];return(0,l.jsxs)("div",{children:[(0,l.jsx)(y.Z,{onClick:function(){return r(!0)},children:"Open modal"}),(0,l.jsx)(A.Z,{open:t,onClose:function(){return r(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(a.Z,{sx:F,children:[(0,l.jsx)(M.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),(0,l.jsx)(M.Z,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})}var D=t(818),I=t(5048),O=t(427);function Q(){var e=D.L.useGetAllDataQuery(),n=e.data,t=e.isSuccess,a=(0,s.useState)([]),r=(0,i.Z)(a,2),c=r[0],d=r[1],u=(0,I.I0)(),h=(0,I.v9)((function(e){return e.filter.value})),x=Number(h);return(0,s.useEffect)((function(){n&&d(""===h?n.data:n.data.filter((function(e){return e.id===x})))}),[h,n,x]),console.log(c),(0,l.jsxs)(S,{children:[(0,l.jsx)(o,{changeFilter:function(e){u((0,O.Q)(e.currentTarget.value))}}),t&&(0,l.jsx)(P,{data:c}),(0,l.jsx)(T,{})]})}}}]);
//# sourceMappingURL=604.171847c0.chunk.js.map