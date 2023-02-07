(function(){"use strict";var n={4330:function(n,t,e){var r=e(7195),o=function(){var n=this,t=n._self._c,e=n._self._setupProxy;return t(e.HomePage)},i=[],a=function(){var n=this,t=n._self._c;return t("div",[n.scanMode?t("section",{staticClass:"scanner__wrapper"},[t("div",{staticClass:"video__wrapper"},[t("video",{ref:"video"}),n.isFoundCamera?n._e():t("div",{staticClass:"message"},[n._v("Камера не найдена")])]),t("button",{on:{click:n.startScan}},[n._v("Сканировать новый QR-код")]),t("button",{on:{click:n.stopScan}},[n._v("Остановить сканирование")]),t("div",[n._v("Результат: "+n._s(this.res))])]):t("section",{staticClass:"main__page"},[t("h1",[n._v("Оставить отзыв об обеде")]),t("img",{attrs:{src:e(7347),alt:""}}),t("button",{on:{click:n.startScan}},[n._v("Сканировать новый QR-код")])])])},s=[],c=e(5716),u={data(){return{qrScanner:{},res:"",isFoundCamera:!1,scanMode:!0}},mounted(){this.qrScanner=new c.Z(this.$refs.video,(n=>{this.res=n.data}),{onDecodeError:()=>{this.res="Не удалось прочесть код"},highlightScanRegion:!0,highlightCodeOutline:!0,returnDetailedScanResult:!0})},methods:{stopScan(){this.qrScanner.stop().then((()=>{this.isFoundCamera=!1}))},startScan(){this.scanMode=!0,this.qrScanner.start().then((()=>{this.isFoundCamera=!0})).catch((n=>{console.log(n,"err")}))}}},l=u,d=e(1001),f=(0,d.Z)(l,a,s,!1,null,null,null),v=f.exports;const p={components:{HomePage:v}};var h=Object.assign(p,{__name:"App",setup(n){return{__sfc:!0,HomePage:v}}}),m=h,g=(0,d.Z)(m,o,i,!1,null,null,null),_=g.exports,b=e(2241),S=function(){var n=this,t=n._self._c;return t("section",{staticClass:"main__page"},[t("h1",[n._v("Оставить отзыв об обеде")]),t("img",{attrs:{src:e(7347),alt:""}}),t("router-link",{attrs:{to:"/scan"}},[n._v("Сканировать новый QR-код")])],1)},y=[],C={},w=(0,d.Z)(C,S,y,!1,null,null,null),k=w.exports,O=function(){var n=this,t=n._self._c;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"contentarea"},[t("div",{staticClass:"camera"},[t("video",{ref:"video",attrs:{id:"video"}},[n._v("Video stream not available.")])]),t("div",[t("button",{on:{click:n.startScan}},[n._v("startScan")]),t("button",{on:{click:n.stopScan}},[n._v("stopScan")])]),t("div",[n._v(n._s(this.res))])])])},P=[],q={data(){return{qrScanner:{},res:"empty"}},mounted(){this.qrScanner=new c.Z(this.$refs.video,(n=>{this.res=n.data,console.log("decoded qr code:",n)}),{highlightScanRegion:!0,highlightCodeOutline:!0})},methods:{stopScan(){this.qrScanner.stop()},startScan(){this.qrScanner.start(),console.log(this.$refs.video)}}},j=q,Z=(0,d.Z)(j,O,P,!1,null,null,null),x=Z.exports;r.ZP.use(b.ZP);var T=new b.ZP({mode:"history",routes:[{path:"/",component:k},{path:"/scan",component:x}]});r.ZP.config.productionTip=!1,new r.ZP({router:T,render:n=>n(_)}).$mount("#app")},7347:function(n,t,e){n.exports=e.p+"img/onsoup_rating.caed1ed5.svg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],i=n[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){n.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+".1049e3da.js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="qr-code-scanner:";e.l=function(r,o,i,a){if(n[r])n[r].push(o);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,e.nc&&s.setAttribute("nonce",e.nc),s.setAttribute("data-webpack",t+i),s.src=r),n[r]=[o];var f=function(t,e){s.onerror=s.onload=null,clearTimeout(v);var o=n[r];if(delete n[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(n){return n(e)})),t)return t(e)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/qr-code-scanner/"}(),function(){var n={143:0};e.f.j=function(t,r){var o=e.o(n,t)?n[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(e,r){o=n[t]=[e,r]}));r.push(o[2]=i);var a=e.p+e.u(t),s=new Error,c=function(r){if(e.o(n,t)&&(o=n[t],0!==o&&(n[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};e.l(a,c,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],c=r[2],u=0;if(a.some((function(t){return 0!==n[t]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(c)var l=c(e)}for(t&&t(r);u<a.length;u++)i=a[u],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},r=self["webpackChunkqr_code_scanner"]=self["webpackChunkqr_code_scanner"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4330)}));r=e.O(r)})();
//# sourceMappingURL=app.7284a43c.js.map