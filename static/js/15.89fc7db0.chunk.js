(window["webpackJsonptrack-behaviour-ga"]=window["webpackJsonptrack-behaviour-ga"]||[]).push([[15],{613:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),o=t(23),c=t(24),i=t(26),s=t(25),u=t(27),m=t(88),b=t.n(m),d=t(77),p=t(74),h=t.n(p),g=t(104),E={labels:["Cars","Trains","Airplanes"],datasets:[{data:[300,50,100],backgroundColor:["#8dace7","#71deb9","#ef869e"],hoverBackgroundColor:["#7097e1","#4dd6a7","#eb6886"]}]},v=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.b,{data:E}))}}]),a}(r.a.Component),f={labels:["Cars","Trains","Airplanes"],datasets:[{data:[300,50,100],backgroundColor:["#8dace7","#71deb9","#ef869e"],hoverBackgroundColor:["#8dace7","#71deb9","#ef869e"]}]},O=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.e,{dataKey:"value",data:f}))}}]),a}(r.a.Component);function j(e,a){return Math.floor(Math.random()*(a-e+1))+e}var y=function(){return{labels:["Cars","Trains","Airplanes"],datasets:[{data:[j(50,200),j(100,150),j(150,250)],backgroundColor:["#cbd5dc","#71deb9","#ef869e"],hoverBackgroundColor:["#7097e1","#4dd6a7","#eb6886"]}]}},C=t(386)({displayName:"DynamicDoughnutExample",getInitialState:function(){return y()},componentWillMount:function(){var e=this;setInterval((function(){e.setState(y())}),5e3)},render:function(){return r.a.createElement("div",null,r.a.createElement(g.b,{data:this.state}))}}),k={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},N=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.g,{data:k}))}}]),a}(r.a.Component),M={datasets:[{data:[11,16,7,3,14],backgroundColor:["#8dace7","#4BC0C0","#ef869e","#E7E9ED","#71deb9"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},S=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.f,{data:M}))}}]),a}(r.a.Component),B=t(71),T=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{component:"div",transitionName:"TabsAnimation",transitionAppear:!0,transitionAppearTimeout:0,transitionEnter:!1,transitionLeave:!1},r.a.createElement(B.Z,null,r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Doughnut"),r.a.createElement(v,null)))),r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Dynamic Doughnut Chart"),r.a.createElement(C,null)))),r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Radar Chart"),r.a.createElement(N,null)))),r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Polar Chart"),r.a.createElement(S,null)))),r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Pie Chart"),r.a.createElement(O,null)))))))}}]),a}(r.a.Component),w={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"#ed0f51",borderColor:"#ed0f51",borderCapStyle:"round",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ed0f51",pointBackgroundColor:"#ffffff",pointBorderWidth:2,pointHoverRadius:10,pointHoverBackgroundColor:"#ed0f51",pointHoverBorderColor:"#ed0f51",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},F=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.d,{data:w}))}}]),a}(r.a.Component),_={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"round",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},A=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.d,{data:_}))}}]),a}(r.a.Component),I={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",borderCapStyle:"round",data:[65,59,80,81,56,55,40]}]},P=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,{data:I,width:100,height:50,options:{maintainAspectRatio:!0}}))}}]),a}(r.a.Component),H={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",borderCapStyle:"round",data:[65,59,80,81,56,55,40]}]},L=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.c,{data:H}))}}]),a}(r.a.Component),D=t(17);function J(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?J(t,!0).forEach((function(a){Object(D.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var W={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"round",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},x=t(386)({displayName:"Graph",componentWillMount:function(){this.setState(W)},componentDidMount:function(){var e=this;setInterval((function(){for(var a=e.state.datasets[0],t=[],n=0;n<e.state.labels.length;n++)t.push(Math.floor(100*Math.random()));var r=R({},a);r.data=t;var l=R({},W,{datasets:[r]});e.setState(l)}),5e3)},render:function(){return r.a.createElement(g.d,{data:this.state})}}),U=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null))}}]),a}(r.a.Component),G=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{component:"div",transitionName:"TabsAnimation",transitionAppear:!0,transitionAppearTimeout:0,transitionEnter:!1,transitionLeave:!1},r.a.createElement(B.Z,null,r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Line Chart"),r.a.createElement(F,null)))),r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Animated Line Chart"),r.a.createElement(U,null)))),r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Area Chart"),r.a.createElement(A,null)))),r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Bar Chart"),r.a.createElement(P,null)))),r.a.createElement(B.u,{lg:"6"},r.a.createElement(B.g,{className:"main-card mb-3"},r.a.createElement(B.h,null,r.a.createElement(B.o,null,"Horizontal Bar Chart"),r.a.createElement(L,null)))))))}}]),a}(r.a.Component),z=[{title:"Circular Charts",content:r.a.createElement(T,null)},{title:"Lines & Bars Charts",content:r.a.createElement(G,null)}];var V=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d.a,{heading:"ChartJS",subheading:"Huge selection of charts created with the React ChartJS Plugin",icon:"pe-7s-bandaid icon-gradient bg-amy-crisp"}),r.a.createElement(b.a,{tabsWrapperClass:"body-tabs body-tabs-layout",transform:!1,showInkBar:!0,items:z.map((function(e,a){return{title:e.title,getContent:function(){return e.content},key:a}}))}))}}]),a}(n.Component),Y=t(96),Z=t(97),K=t(95);a.default=function(e){var a=e.match;return r.a.createElement(n.Fragment,null,r.a.createElement(Y.a,null),r.a.createElement("div",{className:"app-main"},r.a.createElement(Z.a,null),r.a.createElement("div",{className:"app-main__outer"},r.a.createElement("div",{className:"app-main__inner"},r.a.createElement(l.b,{path:"".concat(a.url,"/chartjs"),component:V})),r.a.createElement(K.a,null))))}},77:function(e,a,t){"use strict";var n=t(23),r=t(24),l=t(26),o=t(25),c=t(27),i=t(0),s=t.n(i),u=t(14),m=t(8),b=t.n(m),d=t(17),p=t(71),h=t(78),g=t(79),E=t(29),v=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).notify22=function(){return t.toastId=Object(E.toast)("Another toastify example!!!",{transition:E.Slide,closeButton:!0,autoClose:5e3,position:"bottom-center",type:"success"})},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"toggle",value:function(e){var a;this.setState((a={},Object(d.a)(a,e,!this.state[e]),Object(d.a)(a,"progress",.5),a))}},{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(p.e,{className:"btn-shadow mr-3",onClick:this.notify22,color:"dark",id:"Tooltip-123"},s.a.createElement(g.a,{icon:h.F})),s.a.createElement(p.hb,{placement:"left",target:"Tooltip-123"},"Show a Toastify notification example!"),s.a.createElement(p.gb,{className:"d-inline-block"},s.a.createElement(p.z,{color:"info",className:"btn-shadow",caret:!0},s.a.createElement("span",{className:"btn-icon-wrapper pr-2 opacity-7"},s.a.createElement(g.a,{icon:h.v})),"Buttons"),s.a.createElement(p.y,{right:!0},s.a.createElement(p.S,{vertical:!0},s.a.createElement(p.T,null,s.a.createElement(p.U,{href:"javascript:void(0);"},s.a.createElement("i",{className:"nav-link-icon lnr-inbox"}," "),s.a.createElement("span",null,"Inbox"),s.a.createElement("div",{className:"ml-auto badge badge-pill badge-secondary"},"86"))),s.a.createElement(p.T,null,s.a.createElement(p.U,{href:"javascript:void(0);"},s.a.createElement("i",{className:"nav-link-icon lnr-book"}," "),s.a.createElement("span",null,"Book"),s.a.createElement("div",{className:"ml-auto badge badge-pill badge-danger"},"5"))),s.a.createElement(p.T,null,s.a.createElement(p.U,{href:"javascript:void(0);"},s.a.createElement("i",{className:"nav-link-icon lnr-picture"}," "),s.a.createElement("span",null,"Picture"))),s.a.createElement(p.T,null,s.a.createElement(p.U,{disabled:!0,href:"javascript:void(0);"},s.a.createElement("i",{className:"nav-link-icon lnr-file-empty"}," "),s.a.createElement("span",null,"File Disabled")))))))}}]),a}(i.Component),f=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.enablePageTitleIcon,t=e.enablePageTitleSubheading,n=e.heading,r=e.icon,l=e.subheading;return s.a.createElement("div",{className:"app-page-title"},s.a.createElement("div",{className:"page-title-wrapper"},s.a.createElement("div",{className:"page-title-heading"},s.a.createElement("div",{className:b()("page-title-icon",{"d-none":!a})},s.a.createElement("i",{className:r})),s.a.createElement("div",null,n,s.a.createElement("div",{className:b()("page-title-subheading",{"d-none":!t})},l))),s.a.createElement("div",{className:"page-title-actions"},s.a.createElement(v,null))))}}]),a}(i.Component);a.a=Object(u.connect)((function(e){return{enablePageTitleIcon:e.ThemeOptions.enablePageTitleIcon,enablePageTitleSubheading:e.ThemeOptions.enablePageTitleSubheading}}),(function(e){return{}}))(f)},81:function(e,a,t){"use strict";var n=t(128),r=t(23),l=t(24),o=t(26),c=t(25),i=t(27),s=t(0),u=t.n(s),m=t(14),b=t(91),d=t.n(b),p=t(8),h=t.n(p),g=t(78),E=t(79),v=t(71),f=t(28),O=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).toggleMobileSidebar=function(){var e=t.props,a=e.enableMobileMenu;(0,e.setEnableMobileMenu)(!a)},t.toggleMobileSmall=function(){var e=t.props,a=e.enableMobileMenuSmall;(0,e.setEnableMobileMenuSmall)(!a)},t.state={openLeft:!1,openRight:!1,relativeWidth:!1,width:280,noTouchOpen:!1,noTouchClose:!1},t.state={active:!1,mobile:!1,activeSecondaryMenuMobile:!1},t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props.enableMobileMenu;return u.a.createElement(s.Fragment,null,u.a.createElement("div",{className:"app-header__mobile-menu"},u.a.createElement("div",{onClick:this.toggleMobileSidebar},u.a.createElement(d.a,{active:a,type:"elastic",onClick:function(){return e.setState({activeMobile:!e.state.activeMobile})}}))),u.a.createElement("div",{className:"app-header__menu"},u.a.createElement("span",{onClick:this.toggleMobileSmall},u.a.createElement(v.e,{size:"sm",className:h()("btn-icon btn-icon-only",{active:this.state.activeSecondaryMenuMobile}),color:"primary",onClick:function(){return e.setState({activeSecondaryMenuMobile:!e.state.activeSecondaryMenuMobile})}},u.a.createElement("div",{className:"btn-icon-wrapper"},u.a.createElement(E.a,{icon:g.B}))))))}}]),a}(u.a.Component),j=Object(m.connect)((function(e){return{closedSmallerSidebar:e.ThemeOptions.closedSmallerSidebar,enableMobileMenu:e.ThemeOptions.enableMobileMenu,enableMobileMenuSmall:e.ThemeOptions.enableMobileMenuSmall}}),(function(e){return{setEnableMobileMenu:function(a){return e(Object(f.c)(a))},setEnableMobileMenuSmall:function(a){return e(Object(f.d)(a))}}}))(O),y=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).toggleEnableClosedSidebar=function(){var e=t.props,a=e.enableClosedSidebar;(0,e.setEnableClosedSidebar)(!a)},t.state={openLeft:!1,openRight:!1,relativeWidth:!1,width:280,noTouchOpen:!1,noTouchClose:!1},t.state={active:!1,mobile:!1,activeSecondaryMenuMobile:!1},t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props.enableClosedSidebar;return Object(n.a)(this.state),u.a.createElement(s.Fragment,null,u.a.createElement("div",{className:"app-header__logo"},u.a.createElement("div",{className:"logo-src"}),u.a.createElement("div",{className:"header__pane ml-auto"},u.a.createElement("div",{onClick:this.toggleEnableClosedSidebar},u.a.createElement(d.a,{active:a,type:"elastic",onClick:function(){return e.setState({active:!e.state.active})}})))),u.a.createElement(j,null))}}]),a}(u.a.Component);a.a=Object(m.connect)((function(e){return{enableClosedSidebar:e.ThemeOptions.enableClosedSidebar,enableMobileMenu:e.ThemeOptions.enableMobileMenu,enableMobileMenuSmall:e.ThemeOptions.enableMobileMenuSmall}}),(function(e){return{setEnableClosedSidebar:function(a){return e(Object(f.b)(a))},setEnableMobileMenu:function(a){return e(Object(f.c)(a))},setEnableMobileMenuSmall:function(a){return e(Object(f.d)(a))}}}))(y)},95:function(e,a,t){"use strict";var n=t(23),r=t(24),l=t(26),o=t(25),c=t(27),i=t(0),s=t.n(i),u=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"app-footer"},s.a.createElement("div",{className:"app-footer__inner"},s.a.createElement("div",{className:"app-footer-left"},s.a.createElement("ul",{className:"nav"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"javascript:void(0);",className:"nav-link"},"Footer Link 1")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"javascript:void(0);",className:"nav-link"},"Footer Link 2")))),s.a.createElement("div",{className:"app-footer-right"},s.a.createElement("ul",{className:"nav"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"javascript:void(0);",className:"nav-link"},"Footer Link 3")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"javascript:void(0);",className:"nav-link"},s.a.createElement("div",{className:"badge badge-success mr-1 ml-0"},s.a.createElement("small",null,"NEW")),"Footer Link 4")))))))}}]),a}(s.a.Component);a.a=u},96:function(e,a,t){"use strict";var n=t(23),r=t(24),l=t(26),o=t(25),c=t(27),i=t(0),s=t.n(i),u=t(8),m=t.n(u),b=t(14),d=t(74),p=t.n(d),h=t(81),g=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).state={activeSearch:!1},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:m()("search-wrapper",{active:this.state.activeSearch})},s.a.createElement("div",{className:"input-holder"},s.a.createElement("input",{type:"text",className:"search-input"}),s.a.createElement("button",{onClick:function(){return e.setState({activeSearch:!e.state.activeSearch})},className:"search-icon"},s.a.createElement("span",null))),s.a.createElement("button",{onClick:function(){return e.setState({activeSearch:!e.state.activeSearch})},className:"close"})))}}]),a}(s.a.Component),E=t(29),v=(t(78),t(79),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).notify2=function(){return t.toastId=Object(E.toast)("You don't have any new items in your calendar for today! Go out and play!",{transition:E.Bounce,closeButton:!0,autoClose:5e3,position:"bottom-center",type:"success"})},t.state={active:!1},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"header-btn-lg pr-0"},s.a.createElement("div",{className:"widget-content p-0"},s.a.createElement("div",{className:"widget-content-wrapper"}))))}}]),a}(s.a.Component)),f=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.headerBackgroundColor,t=e.enableMobileMenuSmall,n=e.enableHeaderShadow;return s.a.createElement(i.Fragment,null,s.a.createElement(p.a,{component:"div",className:m()("app-header",a,{"header-shadow":n}),transitionName:"HeaderAnimation",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnter:!1,transitionLeave:!1},s.a.createElement(h.a,null),s.a.createElement("div",{className:m()("app-header__content",{"header-mobile-open":t})},s.a.createElement("div",{className:"app-header-left"},s.a.createElement(g,null)),s.a.createElement("div",{className:"app-header-right"},s.a.createElement(v,null)))))}}]),a}(s.a.Component);a.a=Object(b.connect)((function(e){return{enableHeaderShadow:e.ThemeOptions.enableHeaderShadow,closedSmallerSidebar:e.ThemeOptions.closedSmallerSidebar,headerBackgroundColor:e.ThemeOptions.headerBackgroundColor,enableMobileMenuSmall:e.ThemeOptions.enableMobileMenuSmall}}),(function(e){return{}}))(f)},97:function(e,a,t){"use strict";var n=t(23),r=t(24),l=t(26),o=t(25),c=t(27),i=t(0),s=t.n(i),u=t(14),m=t(8),b=t.n(m),d=t(7),p=t(129),h=t.n(p),g=[{icon:"pe-7s-rocket",label:"Dashboard Example",to:"#/dashboards/basic"}],E=[{icon:"pe-7s-diamond",label:"Elements",content:[{label:"Standard Buttons",to:"#/elements/buttons-standard"},{label:"Dropdowns",to:"#/elements/dropdowns"},{label:"Icons",to:"#/elements/icons"},{label:"Badges",to:"#/elements/badges-labels"},{label:"Cards",to:"#/elements/cards"},{label:"List Groups",to:"#/elements/list-group"},{label:"Navigation Menus",to:"#/elements/navigation"},{label:"Utilities",to:"#/elements/utilities"}]},{icon:"pe-7s-car",label:"Components",content:[{label:"Tabs",to:"#/components/tabs"},{label:"Notifications",to:"#/components/notifications"},{label:"Modals",to:"#/components/modals"},{label:"Progress Bar",to:"#/components/progress-bar"},{label:"Tooltips & Popovers",to:"#/components/tooltips-popovers"},{label:"Carousel",to:"#/components/carousel"},{label:"Maps",to:"#/components/maps"}]},{icon:"pe-7s-display2",label:"Regular Tables",to:"#/tables/regular-tables"}],v=[{icon:"pe-7s-light",label:"Controls",to:"#/forms/controls"},{icon:"pe-7s-eyedropper",label:"Layouts",to:"#/forms/layouts"},{icon:"pe-7s-pendrive",label:"Validation",to:"#/forms/validation"}],f=[{icon:"pe-7s-graph2",label:"Dashboard Boxes",to:"#/widgets/dashboard-boxes"}],O=[{icon:"pe-7s-graph2",label:"ChartJS",to:"#/charts/chartjs"}],j=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement("h5",{className:"app-sidebar__heading"},"PRO VERSION"),s.a.createElement("div",{className:"metismenu vertical-nav-menu"},s.a.createElement("ul",{className:"metismenu-container"},s.a.createElement("li",{className:"metismenu-item"},s.a.createElement("a",{className:"metismenu-link",href:"https://dashboardpack.com/theme-details/architectui-dashboard-react-pro",target:"_blank"},s.a.createElement("i",{className:"metismenu-icon pe-7s-diamond"}),"Upgrade to PRO")))),s.a.createElement("h5",{className:"app-sidebar__heading"},"Menu"),s.a.createElement(h.a,{content:g,activeLinkFromLocation:!0,className:"vertical-nav-menu",iconNamePrefix:"",classNameStateIcon:"pe-7s-angle-down"}),s.a.createElement("h5",{className:"app-sidebar__heading"},"UI Components"),s.a.createElement(h.a,{content:E,activeLinkFromLocation:!0,className:"vertical-nav-menu",iconNamePrefix:"",classNameStateIcon:"pe-7s-angle-down"}),s.a.createElement("h5",{className:"app-sidebar__heading"},"Widgets"),s.a.createElement(h.a,{content:f,activeLinkFromLocation:!0,className:"vertical-nav-menu",iconNamePrefix:"",classNameStateIcon:"pe-7s-angle-down"}),s.a.createElement("h5",{className:"app-sidebar__heading"},"Forms"),s.a.createElement(h.a,{content:v,activeLinkFromLocation:!0,className:"vertical-nav-menu",iconNamePrefix:"",classNameStateIcon:"pe-7s-angle-down"}),s.a.createElement("h5",{className:"app-sidebar__heading"},"Charts"),s.a.createElement(h.a,{content:O,activeLinkFromLocation:!0,className:"vertical-nav-menu",iconNamePrefix:"",classNameStateIcon:"pe-7s-angle-down"}))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),a}(i.Component),y=Object(d.e)(j),C=t(74),k=t.n(C),N=t(130),M=t.n(N),S=t(81),B=t(28),T=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={},t.toggleMobileSidebar=function(){var e=t.props,a=e.enableMobileMenu;(0,e.setEnableMobileMenu)(!a)},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.backgroundColor,t=e.enableBackgroundImage,n=e.enableSidebarShadow,r=e.backgroundImage,l=e.backgroundImageOpacity;return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"sidebar-mobile-overlay",onClick:this.toggleMobileSidebar}),s.a.createElement(k.a,{component:"div",className:b()("app-sidebar",a,{"sidebar-shadow":n}),transitionName:"SidebarAnimation",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnter:!1,transitionLeave:!1},s.a.createElement(S.a,null),s.a.createElement(M.a,null,s.a.createElement("div",{className:"app-sidebar__inner"},s.a.createElement(y,null))),s.a.createElement("div",{className:b()("app-sidebar-bg",l),style:{backgroundImage:t?"url("+r+")":null}})))}}]),a}(i.Component);a.a=Object(u.connect)((function(e){return{enableBackgroundImage:e.ThemeOptions.enableBackgroundImage,enableSidebarShadow:e.ThemeOptions.enableSidebarShadow,enableMobileMenu:e.ThemeOptions.enableMobileMenu,backgroundColor:e.ThemeOptions.backgroundColor,backgroundImage:e.ThemeOptions.backgroundImage,backgroundImageOpacity:e.ThemeOptions.backgroundImageOpacity}}),(function(e){return{setEnableMobileMenu:function(a){return e(Object(B.c)(a))}}}))(T)}}]);
//# sourceMappingURL=15.89fc7db0.chunk.js.map