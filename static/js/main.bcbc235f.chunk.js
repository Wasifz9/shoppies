(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(2),a=n.n(i),c=n(8),r=n.n(c),o=(n(16),n(3)),l=n(4),d=n(1),h=n(6),u=n(5),m=(n(17),n(18),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={title:"",director:"",plot:"",year:"",genre:"",moreInfo:!1,selected:!1,show:!1},s.handleInfo=s.handleInfo.bind(Object(d.a)(s)),s.handleSelects=s.handleSelects.bind(Object(d.a)(s)),s.revealer=s.revealer.bind(Object(d.a)(s)),s.hider=s.hider.bind(Object(d.a)(s)),s}return Object(l.a)(n,[{key:"handleInfo",value:function(e){var t=this;fetch("https://www.omdbapi.com/?t="+e.Title+"&apikey=316355da").then((function(e){return e.json()})).then((function(e){t.setState({title:e.Title,director:e.Director,plot:e.Plot,year:e.Year,genre:e.Genre,moreInfo:!0})}))}},{key:"revealer",value:function(){this.setState({show:!0})}},{key:"hider",value:function(){this.setState({show:!1}),this.props.returnHandler()}},{key:"componentDidMount",value:function(){this.props.returnHandler(),setTimeout(this.revealer,10)}},{key:"componentWillUnmount",value:function(){this.props.returnHandler()}},{key:"handleSelects",value:function(e){this.props.handleNominations(e)}},{key:"renderInfo",value:function(e){var t=this;return 0==this.state.moreInfo?Object(s.jsx)("span",{class:"more",onClick:function(n){return t.handleInfo(e)},children:" More"}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{class:"card-info",children:["Title: ",this.state.title," (",this.state.year,") "]}),Object(s.jsxs)("p",{class:"card-info",children:[" Director: ",this.state.director," "]}),Object(s.jsxs)("p",{class:"card-info",children:[" Plot: ",this.state.plot," "]}),Object(s.jsxs)("p",{class:"card-info",children:[" Genre: ",this.state.genre," "]})]})}},{key:"render",value:function(){var e=this,t=this.props.info,n=this.props.nomineeIDs;return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:this.state.show?"container-fluid animated animatedFadeInUp fadeInUp":"container-fluid",children:Object(s.jsx)("div",{class:"col-12 mt-3",children:Object(s.jsxs)("div",{className:n.includes(t.imdbID)?"selected-card card":"card",children:[Object(s.jsxs)("div",{class:"card-horizontal",onClick:function(n){return e.handleInfo(t)},children:[Object(s.jsx)("div",{class:"img-square-wrapper",children:Object(s.jsx)("img",{class:"poster",src:t.Poster,onerror:"this.src='100x150.png'; console.log('notworking');"})}),Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsxs)("p",{class:"card-title",children:[" ",t.Title," ",Object(s.jsx)("br",{})," "]}),Object(s.jsxs)("p",{className:"highlighted1",children:[" ",t.Year," "]})]}),Object(s.jsxs)("div",{class:"middle",children:[Object(s.jsx)("p",{className:0==this.state.moreInfo?"extraInfoTitle shown":"extraInfoTitle",children:Object(s.jsx)("span",{class:"more",children:" More"})}),Object(s.jsx)("div",{className:this.state.moreInfo?"extraInfo shown":"extraInfo",children:Object(s.jsxs)("p",{class:"card-info",children:[" ",Object(s.jsx)("span",{className:"highlighted",children:"Title:"})," ",this.state.title,Object(s.jsxs)("span",{className:"highlighted",children:["(",this.state.year,")"]})," ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"highlighted",children:"Director:"})," ",this.state.director,"   ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"highlighted",children:"Plot:"})," ",this.state.plot," ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"highlighted",children:"Genre:"})," ",this.state.genre]})})]})]}),Object(s.jsx)("div",{className:n.length>4?"card-footer inactive":"card-footer",onClick:function(n){return e.handleSelects(t)},children:"+"})]})})})})}}]),n}(a.a.Component)),j=(n(19),n(9)),b=n.n(j),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={isOpen:!1},s.openHandler=s.openHandler.bind(Object(d.a)(s)),s}return Object(l.a)(n,[{key:"openHandler",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"removeHandler",value:function(e){this.props.removeNominations(e)}},{key:"clearHandler",value:function(){this.props.clearNoms()}},{key:"saveAs",value:function(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)}},{key:"screenShot",value:function(){b()(document.getElementById("shortList")).then((function(e){console.log(e);var t=e.toDataURL(),n=document.createElement("a");"string"===typeof n.download?(n.href=t,n.download="canvas.png",document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(t)}))}},{key:"render",value:function(){var e=this,t=this.props.nominations;return Object(s.jsxs)("div",{className:"Nominee",children:[Object(s.jsxs)("button",{className:this.state.isOpen?"opnbtn selected-opnbtn":"opnbtn",onClick:function(t){return e.openHandler()},children:[Object(s.jsxs)("span",{children:[" Favourites (",t.length,")"]})," "]}),Object(s.jsxs)("div",{className:this.state.isOpen?"nominationItems show ":"nominationItems",children:[Object(s.jsxs)("div",{className:"actionButtons",children:[Object(s.jsx)("button",{className:"Sharebtn",onClick:function(){return e.screenShot()},children:" SHARE "}),Object(s.jsx)("button",{className:"Clearbtn",onClick:function(){return e.clearHandler()},children:" CLEAR "})]}),t.map((function(t){return Object(s.jsx)("ul",{id:"faveList",className:"faveList",children:Object(s.jsxs)("li",{className:"faveListItem animated animatedFadeInUp fadeInUp",children:[t.Title,Object(s.jsx)("br",{}),"(",t.Year,") ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"rmvbtn",onClick:function(){return e.removeHandler(t)},children:" remove "}),Object(s.jsx)("div",{className:"divider"})]})})}))]})]})}}]),n}(a.a.Component),f=(n.p,n(10)),v="&apikey=316355da",O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).callAPI=Object(f.debounce)((function(){var e=s.state.value;fetch("https://www.omdbapi.com/?s="+e+v).then((function(e){return e.json()})).then((function(t){Array.isArray(t.Search)?s.setState({items:t,isLoaded:!0}):fetch("https://www.omdbapi.com/?t="+e+v).then((function(e){return e.json()})).then((function(e){s.setState({items:e,isLoaded:!0})}))}))}),750),s.handleChange=function(e){var t=e.target.value;s.updateValue(t),s.callAPI()},s.state={items:[],isReturned:!1,isLoaded:!1,isFinished:!1,value:"",nominations:[],nomineeIDs:[]},s.updateValue=s.updateValue.bind(Object(d.a)(s)),s.callAPI=s.callAPI.bind(Object(d.a)(s)),s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleNominations=s.handleNominations.bind(Object(d.a)(s)),s.removeNominations=s.removeNominations.bind(Object(d.a)(s)),s.returnHandler=s.returnHandler.bind(Object(d.a)(s)),s.clearNoms=s.clearNoms.bind(Object(d.a)(s)),s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?s="+this.state.value+v).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}))}},{key:"returnHandler",value:function(){this.setState({isReturned:!this.state.isReturned})}},{key:"updateValue",value:function(e){this.setState({value:e,isLoaded:!1})}},{key:"handleNominations",value:function(e){this.state.nominations.push(e),this.state.nomineeIDs.push(e.imdbID),this.setState({nominations:this.state.nominations,nomineeIDs:this.state.nomineeIDs})}},{key:"removeNominations",value:function(e){var t=this.state.nominations.indexOf(e);this.state.nominations.splice(t,1),t=this.state.nomineeIDs.indexOf(e.imdbID),this.state.nomineeIDs.splice(t,1),this.setState({nominations:this.state.nominations,nomineeIDs:this.state.nomineeIDs})}},{key:"clearNoms",value:function(){this.setState({nominations:[],nomineeIDs:[]})}},{key:"renderItems",value:function(){var e=this,t=this.state.items;return""==this.state.value?Object(s.jsx)("div",{className:"home1",children:Object(s.jsx)("p",{className:"resultstext animated animatedFadeInUp fadeInUp",style:{textAlign:"center",fontSize:28},children:"Start typing to find your all-time movies!"})}):this.state.isLoaded?"False"==t.Response?Object(s.jsx)("div",{className:"home1",children:Object(s.jsx)("p",{className:"resultstext animated animatedFadeInUp fadeInUp",style:{textAlign:"center"},children:"No results... Try another one?"})}):t.hasOwnProperty("Plot")&&"movie"==t.Type?Object(s.jsx)("div",{id:"to screenshot",children:Object(s.jsx)(m,{returnHandler:this.returnHandler,nomineeIDs:this.state.nomineeIDs,handleNominations:this.handleNominations,info:this.state.items})}):Array.isArray(t.Search)?(t.Search=t.Search.filter((function(e){return"movie"===e.Type})),Object(s.jsx)("div",{id:"to screenshot",children:Object(s.jsx)("ul",{id:"cardList",className:"cardList",children:this.state.items.Search.map((function(t){return Object(s.jsx)(m,{returnHandler:e.returnHandler,nomineeIDs:e.state.nomineeIDs,handleNominations:e.handleNominations,info:t})}))})})):Object(s.jsx)("div",{className:"home1",children:Object(s.jsx)("p",{className:"resultstext animated animatedFadeInUp fadeInUp",style:{textAlign:"center"},children:"No results... Try another one?"})}):Object(s.jsx)("div",{className:"home1",children:Object(s.jsx)("div",{class:"loader"})})}},{key:"renderDirections",value:function(){return this.state.nomineeIDs.length>4?Object(s.jsxs)("p",{className:"searchHeadertext",style:{color:"white"},children:[" ","Remove to continue. ",Object(s.jsx)("br",{})," "]}):Object(s.jsx)("p",{className:"searchHeadertext",children:" Search! "})}},{key:"render",value:function(){var e=this.state;e.isLoaded,e.isSearched,e.isFinished,e.items;return Object(s.jsxs)("div",{id:"App",className:"App",children:[Object(s.jsxs)("div",{className:this.state.nomineeIDs.length>4?"invalid searchHeader":"searchHeader",children:[this.renderDirections(),Object(s.jsx)("input",{type:"text",placeholder:"search",value:this.state.value,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:this.state.isReturned?"content extraspace":"content",children:[Object(s.jsxs)("div",{id:"resultsPage",className:"results",children:[Object(s.jsx)("p",{className:this.state.isReturned?"animated animatedFadeInUp fadeInUp":"container-fluid1",children:Object(s.jsx)("span",{className:"resultstext",children:"Results:"})}),this.renderItems()]}),Object(s.jsx)("div",{id:"shortList",className:"shortlist",children:Object(s.jsx)(p,{clearNoms:this.clearNoms,removeNominations:this.removeNominations,nominations:this.state.nominations})})]})]})}}]),n}(a.a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),x()}},[[22,1,2]]]);
//# sourceMappingURL=main.bcbc235f.chunk.js.map