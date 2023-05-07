(function(){"use strict";var t={8152:function(t,e,a){var r=a(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-navbar-brand",{staticClass:"m-3",attrs:{href:"#"}},[t._v("TuneUp")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"m-3"},[e("b-nav-item",{attrs:{to:"/"}},[t._v("ToDo")]),e("b-nav-item",{attrs:{to:"/form"}},[t._v("Form")])],1)],1)],1)],1),e("router-view")],1)},s=[],n=a(1001),i={},l=(0,n.Z)(i,o,s,!1,null,null,null),u=l.exports,c=a(2631),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-2"},[e("b-form",[e("b-form-group",{attrs:{label:"Title","label-for":"subject"}},[e("b-form-input",{attrs:{id:"subject",type:"text",placeholder:"Wash car",required:"",autocomplete:"off"},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),e("b-form-group",{attrs:{label:"Description","label-for":"description"}},[e("b-form-textarea",{attrs:{id:"description",type:"text",placeholder:"I need to wash my car",required:"",autocomplete:"off"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e("b-button",{staticClass:"m-2",attrs:{type:"submit",variant:"outline-primary"},on:{click:t.saveTask}},[t._v("Save")])],1)],1)},f=[],m=(a(7658),{methods:{showToast(t,e,a){this.$root.$bvToast.toast(a,{title:e,autoHideDelay:3e3,variant:t,solid:!0})}}}),v={name:"Form",mx:[m],data(){return{form:{subject:"",description:""},methodSave:"new"}},created(){if(0===this.$route.params.index||void 0!==this.$route.params.index){this.methodSave="update";let t=JSON.parse(localStorage.getItem("tasks"));this.form=t[this.$route.params.index]}},methods:{saveTask(){if("update"===this.methodSave){let t=JSON.parse(localStorage.getItem("tasks"));return t[this.$route.params.index]=this.form,localStorage.setItem("tasks",JSON.stringify(t)),this.showToast("success","Success","Updated!"),void this.$router.push({name:"list"})}let t=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];t.push(this.form),localStorage.setItem("tasks",JSON.stringify(t)),this.showToast("success","Success","Created!"),this.$router.push({name:"list"})}}},p=v,h=(0,n.Z)(p,d,f,!1,null,null,null),b=h.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-2"},[t._l(t.tasks,(function(a,r){return e("div",{key:r},[e("b-card",{attrs:{title:a.subject}},[e("b-card-text",[t._v(t._s(a.description))]),e("b-button",{staticClass:"m-2",attrs:{variant:"outline-secondary"},on:{click:function(e){return t.edit(r)}}},[t._v("Edit")]),e("b-button",{staticClass:"m-2",attrs:{variant:"outline-danger"},on:{click:function(e){return t.remove(a,r)}}},[t._v("Delete")])],1)],1)})),e("b-modal",{ref:"modalRemove",attrs:{"hide-footer":"",title:"Exclusion"}},[e("div",{staticClass:"d-block text-center"},[t._v(" You are about to delete "+t._s(t.taskSelected.subject)+" ")]),e("div",{staticClass:"mt-3 d-flex justify-content-end"},[e("b-button",{staticClass:"m-2",attrs:{variant:"outline-secondary"},on:{click:t.hideModal}},[t._v("Cancel")]),e("b-button",{staticClass:"m-2",attrs:{variant:"outline-danger"},on:{click:function(e){return t.confirmRemove(t.task,t.index)}}},[t._v("Delete anyway")])],1)])],2)},k=[],S={name:"List",data(){return{tasks:[],taskSelected:[]}},created(){this.tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]},methods:{edit(t){this.$router.push({name:"form",params:{index:t}})},remove(t,e){this.taskSelected=t,this.taskSelected.index=e,this.$refs.modalRemove.show()},hideModal(){this.$refs.modalRemove.hide()},confirmRemove(){this.tasks.splice(this.taskSelected.index,1),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.hideModal()}}},y=S,x=(0,n.Z)(y,g,k,!1,null,null,null),_=x.exports;r["default"].use(c.ZP);const O=[{path:"/",name:"list",component:_},{path:"/form",name:"form",component:b}],w=new c.ZP({mode:"history",base:"/",routes:O});var j=w,C=a(6882);a(7024);r["default"].use(C.XG7),r["default"].config.productionTip=!1,new r["default"]({router:j,render:t=>t(u)}).$mount("#app")}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,s){if(!r){var n=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],s=t[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(i=!1,s<n&&(n=s));if(i){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,o,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,n=r[0],i=r[1],l=r[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var c=l(a)}for(e&&e(r);u<n.length;u++)s=n[u],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(c)},r=self["webpackChunktuneup"]=self["webpackChunktuneup"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(8152)}));r=a.O(r)})();
//# sourceMappingURL=app.e52f5a92.js.map