(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(54)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),l=a.n(o),c=a(57),s=a(58),i=a(59),m=a(6),u=a(7),d=a(10),v=a(8),E=a(11),f=a(5),h=a.n(f),p={getGoogleBookSearch:function(e){return h.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},saveBook:function(e){return h.a.post("/api/books",e)},getBooks:function(){return h.a.get("/api/books")},getBook:function(e){return h.a.get("/api/books/"+e)},deleteBook:function(e){return h.a.delete("/api/books/"+e)}};function k(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function b(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function g(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(44);var N=function(e){var t=e.children;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid d-flex align-items-center"},r.a.createElement("div",{className:"container text-center"},t))};var B=function(){return r.a.createElement("div",{className:"input-group col-12"},r.a.createElement("input",{className:"form-control py-2 border-right-0 border",type:"search",placeholder:"Search by Book Topic",id:"searchbar"}),r.a.createElement("span",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary border-left-0 border",type:"button"},r.a.createElement("i",{className:"fa fa-search"}))))};var y=function(e){return r.a.createElement("div",{className:"form-group row mt-2 mx-auto"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary",id:"searchbutton",onClick:function(t){return e.searchBooks(t)}},"Search Books")))};a(45);var S=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form-inline"},t))};a(46);var w=function(e){return r.a.createElement("div",null,r.a.createElement(S,null,r.a.createElement(B,null),r.a.createElement(y,{searchBooks:e.searchBooks})),r.a.createElement("hr",null))};a(47);function O(e){return r.a.createElement("div",{className:"ResultsCard row",id:e.title+" Card"},r.a.createElement("div",{className:"ImageDiv col-2"},r.a.createElement("img",{src:e.image,alt:"Image of"+e.title})),r.a.createElement("div",{className:"InfoDiv col-9"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"col-8"},e.title),r.a.createElement("h3",{className:"col-4"},e.author)),r.a.createElement("p",{className:"ResultDescription"},e.description)),r.a.createElement("p",{className:"link"},e.infoLink),r.a.createElement("div",{className:"ResultOptions col-1"},r.a.createElement("a",{href:e.link,target:"_blank"},r.a.createElement("button",{className:"btn btn-secondary ViewMore ResultOption"},"..")),r.a.createElement("button",{className:"btn btn-secondary SaveResult ResultOption",id:e.id,onClick:function(t){return e.saveBook(t)}},"Save")))}var j=function(e){return 0===e.results.length?r.a.createElement("div",{id:"ResultsWrapper"},r.a.createElement("h1",null," Search Results ")):r.a.createElement("div",{id:"ResultsWrapper"},r.a.createElement("h1",null," Search Results "),e.results.map(function(t){return r.a.createElement(O,{key:t.id,id:t.id,image:t.image,title:t.title,author:t.authors,description:t.description,link:t.link,saveBook:e.saveBook})}))},x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",results:[],error:""},a.searchBooks=function(e){e.preventDefault();var t=document.getElementById("searchbar").value;p.getGoogleBookSearch(t).then(function(e){var t=e.data.items;t=t.map(function(e){return{id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,image:e.volumeInfo.imageLinks.thumbnail,description:e.volumeInfo.description,link:e.volumeInfo.infoLink}}),a.setState({results:t})}).catch(function(e){return console.log(e)})},a.saveBook=function(e){e.preventDefault();var t=a.state.results.filter(function(t){return t.id===e.target.id});t=t[0],p.saveBook(t).then(console.log(t)).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{fluid:!0},r.a.createElement(N,null,r.a.createElement("h1",{className:"text-white"},"Book Finder"),r.a.createElement("h2",{className:"text-white"},"Find the book you're looking for!")),r.a.createElement(k,null,r.a.createElement(w,{searchBooks:this.searchBooks}),r.a.createElement(j,{results:this.state.results,saveBook:this.saveBook})))}}]),t}(n.Component);a(48);function R(e){return r.a.createElement("div",{className:"SavedCard row",id:e.id+"Card"},r.a.createElement("div",{className:"ImageDiv col-2"},r.a.createElement("img",{src:e.image,alt:"Image of"+e.title})),r.a.createElement("div",{className:"InfoDiv col-9"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"col-8"},e.title),r.a.createElement("h3",{className:"col-4"},e.author)),r.a.createElement("p",{className:"SavedDescription"},e.description)),r.a.createElement("div",{className:"SavedOptions col-1"},r.a.createElement("a",{href:e.link,target:"_blank"},r.a.createElement("button",{className:"btn btn-secondary ViewMore SavedOption"},"..")),r.a.createElement("button",{className:"btn btn-secondary RemoveSaved SavedOption",id:e.id,onClick:function(t){e.deleteBook(t.target.id)}},"x")))}var I=function(e){return 0===e.saved.length?r.a.createElement("div",{id:"SavedBooks"},r.a.createElement("h1",null," 0 Saved Results ")):r.a.createElement("div",{id:"SavedBooks"},r.a.createElement("h1",null," Saved Books "),e.saved.map(function(t){return r.a.createElement(R,{key:t._id,id:t._id,image:t.image,title:t.title,author:t.authors,description:t.description,link:t.link,deleteBook:e.removeBook})}))},C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},a.getBooks=function(){p.getBooks().then(function(e){return a.setState({results:e.data})}).catch(function(e){return console.log(e)})},a.removeBook=function(e){p.deleteBook(e).then(function(){a.getBooks()}).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"render",value:function(){return r.a.createElement(k,{fluid:!0},r.a.createElement(N,null,r.a.createElement("h1",{className:"text-white"},"React Google Book Search"),r.a.createElement("h2",{className:"text-white"},"Your Saved Books")),r.a.createElement(k,null,r.a.createElement(I,{saved:this.state.results,removeBook:this.removeBook})))}}]),t}(n.Component);var D=function(){return r.a.createElement(k,{fluid:!0},r.a.createElement(b,null,r.a.createElement(g,{size:"md-12"},r.a.createElement(N,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var F=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Book Search"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Find a book")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/saved"},"Saved Books")))))};a(49);var _=function(){return r.a.createElement("footer",{className:"footer mt-auto py-3"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{is:"copyright"},"\xa9 created by Jack Polo")))};var G=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(s.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:x}),r.a.createElement(i.a,{exact:!0,path:"/saved",component:C}),r.a.createElement(i.a,{exact:!0,path:"/saved/:id",component:C}),r.a.createElement(i.a,{component:D})),r.a.createElement(_,null)))};a(53);l.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.6e0f800c.chunk.js.map