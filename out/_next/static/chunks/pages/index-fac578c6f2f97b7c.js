(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4981)}])},4981:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),a=n(7294),c=n(4596);var o=e=>{const t=t=>{const n=e=>e instanceof HTMLAnchorElement&&e.href?e:e instanceof HTMLElement&&e.parentElement?n(e.parentElement):null,r=n(t.target);if(!(r instanceof HTMLAnchorElement))return;const{href:a}=r;a.match(new RegExp(`^(http://www.|https://www.|http://|https://)+(${window.location.hostname})`))||e.trackLink({href:a})};(0,a.useEffect)((()=>(window.document.addEventListener("click",t,{capture:!0}),()=>window.document.removeEventListener("click",t,{capture:!0}))),[])};var l=function(){const e=(0,a.useContext)(c.Z),t=(0,a.useCallback)((t=>null===e||void 0===e?void 0:e.trackPageView(t)),[e]);return{trackEvent:(0,a.useCallback)((t=>null===e||void 0===e?void 0:e.trackEvent(t)),[e]),trackEvents:(0,a.useCallback)((()=>null===e||void 0===e?void 0:e.trackEvents()),[e]),trackPageView:t,trackSiteSearch:(0,a.useCallback)((t=>null===e||void 0===e?void 0:e.trackSiteSearch(t)),[e]),trackLink:(0,a.useCallback)((t=>null===e||void 0===e?void 0:e.trackLink(t)),[e]),enableLinkTracking:(0,a.useCallback)((()=>{e&&o(e)}),[e]),pushInstruction:(0,a.useCallback)(((t,...n)=>{null===e||void 0===e||e.pushInstruction(t,...n)}),[e])}},s=n(9008),i=n.n(s),u=n(1589),f=function(){var e=(0,a.useState)(""),t=e[0],n=e[1],c=(0,u.F)().theme;return(0,a.useEffect)((function(){n(window.location.hostname)}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{style:{color:c.yellow},children:"guest"}),(0,r.jsx)("span",{style:{color:c.white},children:"@"}),(0,r.jsx)("span",{style:{color:c.green},children:t}),(0,r.jsx)("span",{style:{color:c.white},children:":$ ~"})]})},d=function(e){var t=e.history;return(0,r.jsx)(r.Fragment,{children:t.map((function(e,t){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,r.jsx)("div",{className:"flex-shrink",children:(0,r.jsx)(f,{})}),(0,r.jsx)("div",{className:"flex-grow",children:e.command})]}),(0,r.jsx)("p",{className:"whitespace-pre-wrap mb-2",style:{lineHeight:"normal"},dangerouslySetInnerHTML:{__html:e.output}})]},e.command+t)}))})},h=n(7568),p=n(4051),m=n.n(p),v=n(5018),k=n(9869),x=n(5435),w=function(e,t){var n=Object.keys(k).filter((function(t){return t.startsWith(e)}));1===n.length&&t(n[0])},y=function(e){var t=e.inputRef,n=e.containerRef,c=l().trackEvent,o=(0,u.F)().theme,s=(0,a.useState)(""),i=s[0],d=s[1],p=(0,x.S)(),y=p.setCommand,g=p.history,b=p.lastCommandIndex,j=p.setHistory,E=p.setLastCommandIndex,C=p.clearHistory;(0,a.useEffect)((function(){n.current.scrollTo(0,n.current.scrollHeight)}),[g]);var N,_=function(){var e=(0,h.Z)(m().mark((function e(t){var n,r,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=g.map((function(e){return e.command})).filter((function(e){return e})),"c"===t.key&&t.ctrlKey&&(t.preventDefault(),d(""),j(""),E(0)),"l"===t.key&&t.ctrlKey&&(t.preventDefault(),C()),"Tab"===t.key&&(t.preventDefault(),w(i,d)),"Enter"!==t.key&&"13"!==t.code||(t.preventDefault(),E(0),y(i),d(""),c({category:"Command Executed",action:i||"no command"})),"ArrowUp"!==t.key){e.next=11;break}if(t.preventDefault(),n.length){e.next=9;break}return e.abrupt("return");case 9:(r=b+1)<=n.length&&(E(r),d(n[n.length-r]));case 11:if("ArrowDown"!==t.key){e.next=17;break}if(t.preventDefault(),n.length){e.next=15;break}return e.abrupt("return");case 15:(a=b-1)>0?(E(a),d(n[n.length-a])):(E(0),d(""));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,r.jsx)("label",{htmlFor:"prompt",className:"flex-shrink",children:(0,r.jsx)(f,{})}),(0,r.jsx)("input",{ref:t,id:"prompt",type:"text",className:"focus:outline-none flex-grow","aria-label":"prompt",style:{backgroundColor:o.background,color:(N=i,-1!==["clear"].concat((0,v.Z)(Object.keys(k))).indexOf(N.split(" ")[0])||""===i?o.green:o.red)},value:i,onChange:function(e){return d(e.target.value)},autoFocus:!0,onKeyDown:_,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off"})]})},g=n(1181),b=function(e){var t=e.inputRef,n=l().trackPageView,c=(0,x.S)().history,o=(0,u.F)().theme,s=a.useRef(null);return a.useEffect((function(){n({})}),[]),a.useEffect((function(){t.current&&t.current.focus()}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Monir Bishal | Home"})}),(0,r.jsx)("div",{className:"overflow-hidden h-full rounded",style:{borderColor:o.yellow,padding:g.Cg?16:8,borderWidth:g.Cg?2:0},children:(0,r.jsxs)("div",{ref:s,className:"overflow-y-auto h-full",children:[(0,r.jsx)(d,{history:c}),(0,r.jsx)(y,{inputRef:t,containerRef:s})]})})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);