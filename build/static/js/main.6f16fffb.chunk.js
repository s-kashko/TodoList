(window["webpackJsonpsimple-todolist"]=window["webpackJsonpsimple-todolist"]||[]).push([[0],{31:function(t,e,n){t.exports=n(43)},36:function(t,e,n){},41:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(13),s=n.n(i),c=(n(36),n(9)),l=n(10),o=n(8),u=(n(41),n(15)),d=n(16),p=n(18),m=n(17),f=n(19),E=n(24),b=n(28);function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){Object(b.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O=null!==localStorage.getItem("TrainList")?JSON.parse(localStorage.getItem("TrainList")):{lists:[{id:0,title:"\u0421\u043f\u043e\u0440\u0442",tasks:[{id:1,title:"\u041f\u0440\u044b\u0433",isDone:!1}]},{id:1,title:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",tasks:[{id:1,title:"\u0421\u043a\u043e\u043a",isDone:!1}]}]},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-LIST":var n=t.lists.length,r={id:n,title:e.title,tasks:[]};return I({},t,{lists:[].concat(Object(E.a)(t.lists),[r])});case"DELETE-LIST":return I({},t,{lists:t.lists.filter((function(t){return t.id!==e.listId})).map((function(t,e){return I({},t,{id:e})}))});case"ADD-TASK":var a=t.lists[e.listId].tasks.length+1,i={id:a,title:e.title,isDone:!1};return I({},t,{lists:t.lists.map((function(t){return t.id===e.listId?I({},t,{tasks:[].concat(Object(E.a)(t.tasks),[i])}):t}))});case"DELETE-TASK":return I({},t,{lists:t.lists.map((function(t){return t.id===e.listId?I({},t,{tasks:t.tasks.filter((function(t){return t.id!==e.taskId})).map((function(t,e){return I({},t,{id:e+1})}))}):t}))});case"UPDATE-TASK":return I({},t,{lists:t.lists.map((function(t){return t.id===e.listId?I({},t,{tasks:t.tasks.map((function(t){return t.id===e.taskId?I({},t,{},e.dataObj):t}))}):t}))});default:return t}},v=function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).state={newTitle:"",inputError:!1},n.resetInputError=function(){!0===n.state.inputError&&n.setState({inputError:!1})},n.enterItemTitle=function(t){n.resetInputError(),n.setState({newTitle:t.currentTarget.value})},n.addItem=function(){""===n.state.newTitle?n.setState({inputError:!0}):(n.props.addItem(n.state.newTitle,n.props.listId),n.setState({newTitle:""}))},n.addItemOnKey=function(t){"Enter"===t.key&&n.addItem()},n}return Object(f.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=!0===this.state.inputError?"inputError":"",e=this.props.placeHolder;return a.a.createElement("div",{className:"addItem"},a.a.createElement("input",{onChange:this.enterItemTitle,value:this.state.newTitle,onKeyPress:this.addItemOnKey,className:t,onBlur:this.resetInputError,placeholder:e}),a.a.createElement("button",{onClick:this.addItem},"+"))}}]),e}(a.a.Component),T=Object(o.b)(null,(function(t){return{deleteTask:function(e,n){return t(function(t,e){return{type:"DELETE-TASK",listId:t,taskId:e}}(e,n))},updateTask:function(e,n,r){return t(function(t,e,n){return{type:"UPDATE-TASK",listId:t,taskId:e,dataObj:n}}(e,n,r))}}}))((function(t){var e=t.task,n=t.listId;return a.a.createElement("li",{key:e.id},a.a.createElement("input",{type:"checkbox",checked:e.isDone,onClick:function(r){return t.updateTask(n,e.id,{isDone:r.currentTarget.checked})}}),e.title," \xa0",a.a.createElement("button",{onClick:function(){return t.deleteTask(n,e.id)},className:"deleteTask"},"X"))})),y=function(t){var e=t.tasks.map((function(e){return a.a.createElement(T,{listId:t.listId,task:e})}));return a.a.createElement("ul",{className:"tasks"},e)},j=function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).deleteList=function(){n.props.deleteList(n.props.list.id)},n}return Object(f.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.list;return a.a.createElement("div",{className:"todoList"},a.a.createElement("h2",null," ",t.title," \xa0",a.a.createElement("button",{className:"deleteList",onClick:this.deleteList},"X")),a.a.createElement(v,{listId:t.id,addItem:this.props.addTask,placeHolder:"add task"}),a.a.createElement(y,{tasks:t.tasks,listId:t.id}))}}]),e}(a.a.Component),D=Object(o.b)(null,(function(t){return{deleteList:function(e){var n=function(t){return{type:"DELETE-LIST",listId:t}}(e);t(n)},addTask:function(e,n){var r=function(t,e){return{type:"ADD-TASK",listId:e,title:t}}(e,n);t(r)}}}))(j),g=function(t){var e=t.linkData.map((function(t){return a.a.createElement(l.b,{to:"list ".concat(t.id)},t.title)}));return a.a.createElement("nav",{className:"app_navigation"},e)};var S=Object(o.b)((function(t){return{lists:t.lists}}),(function(t){return{addList:function(e){var n=function(t){return{type:"ADD-LIST",title:t}}(e);t(n)}}}))((function(t){var e=t.lists,n=e.map((function(t){return a.a.createElement(c.a,{path:"/list ".concat(t.id),render:function(){return a.a.createElement(D,{list:t,key:t.id})}})})),r=e.map((function(t){return a.a.createElement(D,{list:t,key:t.id})})),i=e.map((function(t){return{id:t.id,title:t.title}}));return a.a.createElement("div",{className:"App"},a.a.createElement(l.b,{to:"/",exact:!0},a.a.createElement("h2",null,"\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0437\u0430\u0434\u0430\u0447")),a.a.createElement(v,{addItem:t.addList,placeHolder:"add list"}),a.a.createElement(g,{linkData:i}),a.a.createElement(c.a,{path:"/",exact:!0,render:function(){return a.a.createElement("div",{className:"todoLists"},r)}}),a.a.createElement("div",{className:"todoLists"},n))})),w=n(11),L=n(30),A=Object(w.createStore)(h,Object(L.composeWithDevTools)());s.a.render(a.a.createElement(l.a,null,a.a.createElement(o.a,{store:A},a.a.createElement(S,null))),document.getElementById("root")),A.subscribe((function(){localStorage.setItem("TrainList",JSON.stringify(A.getState()))}))}},[[31,1,2]]]);
//# sourceMappingURL=main.6f16fffb.chunk.js.map