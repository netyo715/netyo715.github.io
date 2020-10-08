import React from "react";
import ChampionIcon from "./champion-icon";
import "./team-composition.css" 

class TeamComposition extends React.Component{
  render(){
    const champions = this.props.champions.map((champ) =>
      <li><ChampionIcon name={champ}/></li>
    );
    return(
      <div>
        <p>{this.props.name}</p>
        <ul class="comp">{champions}</ul>
      </div>
    )
  }
}

class TeamCompositionTable extends React.Component{
  render(){
    const risuto = [
      ["にんじゃ", "Akali", "Shen", "Zed", "Kennen"],
      ["ヤスオ", "Yasuo", "Yone"]
    ];
    const comps = risuto.map((row) =>
      <li><TeamComposition name={row[0]} champions={row.slice(1)}/></li>
    );
    return(
      <div>
        <ul>{comps}</ul>
        {/* </div><TeamComposition name="テスト構成1" champions={c}/> */}
      </div>
    )
  }
}

export default TeamCompositionTable;