(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4Ozk":function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),i=n.n(a),r=n("Wbzz"),l=n("Bl7J"),o=n("vrFN"),u=n("dI71");function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c={aatrox:"1",ahri:"2",akali:"3",annie:"4",aphelios:"5",ashe:"6",azir:"7",cassiopeia:"8",diana:"9",elise:"10",evelynn:"11",ezreal:"12",fiora:"13",garen:"14",hecarim:"15",irelia:"16",janna:"17",jarvaniv:"18",jax:"19",jhin:"20",jinx:"21",kalista:"22",katarina:"23",kayn:"24",kennen:"25",kindred:"26",leesin:"27",lillia:"28",lissandra:"29",lulu:"30",lux:"31",maokai:"32",morgana:"33",nami:"34",nidalee:"35",nunu:"36",pyke:"37",riven:"38",sejuani:"39",sett:"40",shen:"41",sylas:"42",tahmkench:"43",talon:"44",teemo:"45",thresh:"46",twistedfate:"47",vayne:"48",veigar:"49",vi:"50",warwick:"51",monkeyking:"52",xinzhao:"53",yasuo:"54",yone:"55",yuumi:"56",zed:"57",zilean:"58"},p=function(t){function e(e){var n;return(n=t.call(this)||this).state={text:""},n.inputValue=n.inputValue.bind(s(n)),n.handleClick=n.handleClick.bind(s(n)),n}Object(u.a)(e,t);var n=e.prototype;return n.inputValue=function(t){this.setState({text:t.target.value})},n.handleClick=function(){var t=[this.state.text.slice(44).split(",").map((function(t){return c[t]}))],e=this.props.risuto.concat(t);this.props.updateState({risuto:e}),this.setState({text:""})},n.render=function(){return i.a.createElement("div",null,i.a.createElement("input",{type:"text",value:this.state.text,onChange:this.inputValue}),i.a.createElement("input",{type:"button",value:"追加",onClick:this.handleClick}))},e}(i.a.Component),h=n("tBDR"),m=function(t){function e(){return t.apply(this,arguments)||this}return Object(u.a)(e,t),e.prototype.render=function(){return i.a.createElement("div",{class:"icon"},i.a.createElement(h.a,{filename:"tft/champion/"+this.props.id+".png"}))},e}(i.a.Component),d=(n("KaBm"),function(t){function e(){return t.apply(this,arguments)||this}return Object(u.a)(e,t),e.prototype.render=function(){var t=this.props.ids.map((function(t){return i.a.createElement("li",null,i.a.createElement(m,{id:t}))}));return i.a.createElement("div",null,i.a.createElement("ul",{class:"comp"},t))},e}(i.a.Component)),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(u.a)(e,t),e.prototype.render=function(){var t=this.props.risuto.map((function(t){return i.a.createElement("li",null,i.a.createElement(d,{ids:t}))}));return i.a.createElement("div",null,i.a.createElement("ul",null,t))},e}(i.a.Component),v=function(t){function e(e){var n;return(n=t.call(this)||this).storage=localStorage,n.state={risuto:n.importCompsFromLocalStorage()},n}Object(u.a)(e,t);var n=e.prototype;return n.importCompsFromLocalStorage=function(){for(var t=[],e=0;e<this.storage.length;e++){var n=this.storage.key(e);t.push(this.storage.getItem(n).split(","))}return t},n.updateState=function(t){this.setState(t)},n.clearComps=function(){this.setState({risuto:[]})},n.render=function(){var t=this;return i.a.createElement("div",null,i.a.createElement(p,{risuto:this.state.risuto,updateState:this.updateState.bind(this)}),i.a.createElement("input",{type:"button",value:"リセット",onClick:function(){return t.clearComps()}}),i.a.createElement(f,{risuto:this.state.risuto}))},e}(i.a.Component);e.default=function(){return i.a.createElement(l.a,null,i.a.createElement(o.a,{title:"TFTの構成をメモするためのツール"}),i.a.createElement("h1",null,"TFTの構成がメモ出来るやつ"),i.a.createElement("p",null,i.a.createElement(r.Link,{to:"https://lolchess.gg/simulator/4.0"},"TFT シナジーシミュレータ"),"のShareボタンから取得できるURLを貼ると構成が表示されます。"),i.a.createElement("p",null,"まだまだ開発中"),i.a.createElement(v,null))}},KaBm:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-tft-comp-memo-js-3fadac033a44737bcf11.js.map