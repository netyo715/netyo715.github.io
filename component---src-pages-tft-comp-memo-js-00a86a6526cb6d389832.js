(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4Ozk":function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),i=(n("Wbzz"),n("Bl7J")),l=n("vrFN"),o=n("dI71");function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var s={aatrox:"1",ahri:"2",akali:"3",annie:"4",aphelios:"5",ashe:"6",azir:"7",cassiopeia:"8",diana:"9",elise:"10",evelynn:"11",ezreal:"12",fiora:"13",garen:"14",hecarim:"15",irelia:"16",janna:"17",jarvaniv:"18",jax:"19",jhin:"20",jinx:"21",kalista:"22",katarina:"23",kayn:"24",kennen:"25",kindred:"26",leesin:"27",lillia:"28",lissandra:"29",lulu:"30",lux:"31",maokai:"32",morgana:"33",nami:"34",nidalee:"35",nunu:"36",pyke:"37",riven:"38",sejuani:"39",sett:"40",shen:"41",sylas:"42",tahmkench:"43",talon:"44",teemo:"45",thresh:"46",twistedfate:"47",vayne:"48",veigar:"49",vi:"50",warwick:"51",monkeyking:"52",xinzhao:"53",yasuo:"54",yone:"55",yuumi:"56",zed:"57",zilean:"58"},c=function(t){function e(e){var n;return(n=t.call(this)||this).state={text:""},n.inputValue=n.inputValue.bind(u(n)),n.handleClick=n.handleClick.bind(u(n)),n}Object(o.a)(e,t);var n=e.prototype;return n.inputValue=function(t){this.setState({text:t.target.value})},n.handleClick=function(){var t=[this.state.text.slice(44).split(",").map((function(t){return s[t]}))],e=this.props.risuto.concat(t);this.props.updateState({risuto:e}),this.setState({text:""})},n.render=function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.state.text,onChange:this.inputValue}),r.a.createElement("input",{type:"button",value:"追加",onClick:this.handleClick}))},e}(r.a.Component),p=n("tBDR"),h=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){return r.a.createElement("div",{class:"icon"},r.a.createElement(p.a,{filename:"tft/champion/"+this.props.id+".png"}))},e}(r.a.Component),m=(n("KaBm"),function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){var t=this.props.ids.map((function(t){return r.a.createElement("li",null,r.a.createElement(h,{id:t}))}));return r.a.createElement("div",null,r.a.createElement("ul",{class:"comp"},t))},e}(r.a.Component)),d=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){var t=this.props.risuto.map((function(t){return r.a.createElement("li",null,r.a.createElement(m,{ids:t}))}));return r.a.createElement("div",null,r.a.createElement("ul",null,t))},e}(r.a.Component),f=function(t){function e(e){var n;return(n=t.call(this)||this).storage="undefined"!=typeof localStorage?localStorage:NaN,n.state={risuto:n.importCompsFromLocalStorage()},n}Object(o.a)(e,t);var n=e.prototype;return n.importCompsFromLocalStorage=function(){for(var t=[],e=0;e<this.storage.length;e++){var n=this.storage.key(e);t.push(this.storage.getItem(n).split(","))}return t},n.updateState=function(t){this.setState(t);for(var e=0;e<t.risuto.length;e++)this.storage.setItem(e,t.risuto[e].join())},n.clearComps=function(){this.setState({risuto:[]}),this.storage.clear()},n.render=function(){var t=this;return r.a.createElement("div",null,r.a.createElement(c,{risuto:this.state.risuto,updateState:this.updateState.bind(this)}),r.a.createElement("input",{type:"button",value:"リセット",onClick:function(){return t.clearComps()}}),r.a.createElement(d,{risuto:this.state.risuto}))},e}(r.a.Component);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"TFTの構成をメモするためのツール"}),r.a.createElement("h1",null,"TFTの構成がメモ出来るやつ"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://lolchess.gg/simulator/4.0",target:"blank"},"TFT シナジーシミュレータ"),"のShareボタンから取得できるURLを貼ると構成が表示されます。"),r.a.createElement("p",null,"まだまだ開発中"),r.a.createElement(f,null))}},KaBm:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-tft-comp-memo-js-00a86a6526cb6d389832.js.map