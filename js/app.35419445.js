(function(e){function t(t){for(var o,s,l=t[0],c=t[1],a=t[2],d=0,h=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},n={app:0},i=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("HelloWorld")],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mx-auto p-5"},[r("div",{staticClass:"grid grid-cols-3 gap-0"},[r("div",{staticClass:"col-span-2 border-solid border rounded-l-lg border-gray-500 flex justify-center p-10"},[r("button",{staticClass:"border-solid border rounded-full h-60 w-60 border-gray-500 font-bold sm:text-2xl lg:text-3xl",class:e.btnClass,staticStyle:{"touch-action":"manipulation"},on:{click:e.click}},[e._v("Click ("+e._s(e.score)+"ms)")])]),r("div",{staticClass:"border-solid border rounded-r-lg border-l-0 border-gray-500"},[r("div",{staticClass:"border-solid border border-t-0 border-r-0 border-l-0 border-gray-500 p-3 font-bold"},[e._v("Best achievement")]),r("div",{staticClass:"flex justify-center sm:text-4xl lg:text-6xl mt-5 font-bold"},[r("div",[e._v(e._s(e.highScore?e.highScore+"ms":"--"))])]),r("button",{staticClass:"bg-yellow-400 border-solid border rounded-full h-16 w-16 border-gray-500 font-bold mt-5",on:{click:e.reset}},[e._v("Reset")])])])])},l=[],c={name:"HelloWorld",data:function(){return{histories:[],highScore:null,score:0,btnClass:"bg-green-500"}},methods:{click:function(){if(this.histories.push((new Date).getTime()),2==this.histories.length){if(this.btnClass="bg-green-500",this.score=this.calcScore(),null===this.highScore||this.highScore>this.score){if(this.score<100)return alert("Thôi tắt tool đi bố"),void(this.histories=[]);this.highScore=this.score}this.histories=[]}else this.btnClass="bg-red-500"},reset:function(){this.histories=[],this.highScore=null,this.score=0,this.btnClass="bg-green-500"},calcScore:function(){return 2==this.histories.length?this.histories[1]-this.histories[0]:0}}},a=c,u=r("2877"),d=Object(u["a"])(a,s,l,!1,null,null,null),h=d.exports,f={name:"App",components:{HelloWorld:h}},b=f,p=(r("034f"),Object(u["a"])(b,n,i,!1,null,null,null)),g=p.exports;r("b972");o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.35419445.js.map