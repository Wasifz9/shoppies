(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(2),a=n.n(i),c=n(8),r=n.n(c),o=(n(15),n(3)),l=n(4),d=n(1),h=n(6),j=n(5),u=(n(16),n(17),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={title:"",director:"",plot:"",year:"",genre:"",moreInfo:!1,selected:!1},s.handleInfo=s.handleInfo.bind(Object(d.a)(s)),s.handleSelects=s.handleSelects.bind(Object(d.a)(s)),s}return Object(l.a)(n,[{key:"handleInfo",value:function(e){var t=this;fetch("https://www.omdbapi.com/?t="+e.Title+"&apikey=316355da").then((function(e){return e.json()})).then((function(e){t.setState({title:e.Title,director:e.Director,plot:e.Plot,year:e.Year,genre:e.Genre,moreInfo:!0})}))}},{key:"handleSelects",value:function(e){this.setState({selected:!0}),this.props.handleNominations(e)}},{key:"renderInfo",value:function(e){var t=this;return 0==this.state.moreInfo?Object(s.jsx)("p",{class:"more",onClick:function(n){return t.handleInfo(e)},children:"More Information"}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{class:"card-info",children:["Title: ",this.state.title," (",this.state.year,") "]}),Object(s.jsxs)("p",{class:"card-info",children:[" Director: ",this.state.director," "]}),Object(s.jsxs)("p",{class:"card-info",children:[" Plot: ",this.state.plot," "]}),Object(s.jsxs)("p",{class:"card-info",children:[" Genre: ",this.state.genre," "]})]})}},{key:"render",value:function(){var e=this,t=this.props.info,n=this.props.nomineeIDs;return t?Object(s.jsx)("div",{class:"container-fluid",children:Object(s.jsx)("div",{class:"row",children:Object(s.jsx)("div",{class:"col-12 mt-3",children:Object(s.jsxs)("div",{className:this.state.selected||n.includes(t.imdbID)||n.length>4?"selected-card":"card",children:[Object(s.jsxs)("div",{class:"card-horizontal",children:[Object(s.jsx)("div",{class:"img-square-wrapper",children:Object(s.jsx)("img",{class:"",src:t.Poster,alt:"Card image cap"})}),Object(s.jsx)("div",{class:"card-body",children:Object(s.jsxs)("p",{class:"card-title",children:[" ",t.Title," (",t.Year,") "]})}),Object(s.jsx)("div",{class:"middle",children:this.renderInfo(t)})]}),Object(s.jsx)("div",{class:"card-footer",onClick:function(n){return e.handleSelects(t)},children:Object(s.jsx)("p",{children:" ADD +"})})]})})})}):Object(s.jsx)("div",{className:"card",style:{height:"150px",width:"100%"}})}}]),n}(a.a.Component)),m=(n(18),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={isOpen:!1},s.openHandler=s.openHandler.bind(Object(d.a)(s)),s}return Object(l.a)(n,[{key:"openHandler",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"removeHandler",value:function(e){this.props.removeNominations(e),this.render()}},{key:"render",value:function(){var e=this,t=this.props.nominations;return Object(s.jsxs)("div",{className:"Nominee",children:[Object(s.jsxs)("button",{className:this.state.isOpen?"selected-opnbtn":"opnbtn",onClick:function(t){return e.openHandler()},children:[Object(s.jsxs)("span",{children:[" Shortlist (",t.length,")"]})," "]}),this.state.isOpen&&Object(s.jsx)("div",{className:"nominationItems",children:Object(s.jsx)("p",{children:t.map((function(t){return Object(s.jsxs)("ul",{children:[" ",Object(s.jsxs)("li",{children:[" ",t.Title," ",Object(s.jsx)("br",{})," (",t.Year,") ",Object(s.jsx)("br",{})," ",Object(s.jsx)("button",{onClick:function(){return e.removeHandler(t)},children:" remove "})," "]})," "]})}))})})]})}}]),n}(a.a.Component)),b=n(9),p="&apikey=316355da",O=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).callAPI=Object(b.debounce)((function(){var e=s.state.value;fetch("https://www.omdbapi.com/?s="+e+p).then((function(e){return e.json()})).then((function(t){Array.isArray(t.Search)?s.setState({items:t,isLoaded:!0}):fetch("https://www.omdbapi.com/?t="+e+p).then((function(e){return e.json()})).then((function(e){s.setState({items:e,isLoaded:!0})}))}))}),750),s.handleChange=function(e){var t=e.target.value;s.updateValue(t),s.callAPI()},s.state={items:[],isSearched:!1,isLoaded:!1,isFinished:!1,value:"",nominations:[],nomineeIDs:[]},s.updateValue=s.updateValue.bind(Object(d.a)(s)),s.callAPI=s.callAPI.bind(Object(d.a)(s)),s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleNominations=s.handleNominations.bind(Object(d.a)(s)),s.removeNominations=s.removeNominations.bind(Object(d.a)(s)),s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?s="+this.state.value+p).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}))}},{key:"updateValue",value:function(e){this.setState({value:e,isLoaded:!1})}},{key:"handleNominations",value:function(e){this.state.nominations.push(e),this.state.nomineeIDs.push(e.imdbID),this.setState({nominations:this.state.nominations,nomineeIDs:this.state.nomineeIDs})}},{key:"removeNominations",value:function(e){var t=this.state.nominations.indexOf(e);this.state.nominations.splice(t,1),t=this.state.nomineeIDs.indexOf(e.imdbID),this.state.nomineeIDs.splice(t,1),this.setState({nominations:this.state.nominations,nomineeIDs:this.state.nomineeIDs})}},{key:"renderItems",value:function(){var e=this,t=this.state.items;return""==this.state.value?Object(s.jsx)("div",{className:"home",children:Object(s.jsx)("p",{className:"resultstext",style:{textAlign:"center",fontSize:22},children:"Start typing to find your favourite movies!"})}):this.state.isLoaded?"False"==t.Response?null:t.hasOwnProperty("Plot")&&"movie"==t.Type?Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("span",{className:"resultstext",children:"Results"})]}),Object(s.jsx)(u,{nomineeIDs:this.state.nomineeIDs,handleNominations:this.handleNominations,info:this.state.items})]}):Array.isArray(t.Search)?(t.Search=t.Search.filter((function(e){return"movie"===e.Type})),Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("span",{className:"resultstext",children:"Results"})]}),Object(s.jsx)("ul",{children:this.state.items.Search.map((function(t){return Object(s.jsx)(u,{nomineeIDs:e.state.nomineeIDs,handleNominations:e.handleNominations,info:t})}))})]})):null:Object(s.jsx)("div",{className:"home",children:Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("span",{className:"resultstext",children:"Loading..."})]})})}},{key:"renderDirections",value:function(){return this.state.nomineeIDs.length>4?Object(s.jsxs)("p",{className:"searchHeadertext",style:{color:"#e74242",borderColor:"#e74242"},children:[" >> Your list is full! You can remove a film to continue. ",Object(s.jsx)("br",{})," "]}):Object(s.jsxs)("p",{className:"searchHeadertext",children:[" >> Search for movies to add to your short list! ",Object(s.jsx)("br",{})," "]})}},{key:"render",value:function(){var e=this.state;e.isLoaded,e.isSearched,e.isFinished,e.items;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"searchHeader",children:[this.renderDirections(),Object(s.jsx)("input",{type:"text",placeholder:"search",value:this.state.value,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("div",{className:"results",children:this.renderItems()}),Object(s.jsx)("div",{className:"shortlist",children:Object(s.jsx)(m,{removeNominations:this.removeNominations,nominations:this.state.nominations})})]})]})}}]),n}(a.a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),f()}},[[21,1,2]]]);
//# sourceMappingURL=main.6c5bcdf4.chunk.js.map