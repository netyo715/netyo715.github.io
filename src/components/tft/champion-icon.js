import React from "react";
import Image from "../image"

class ChampionIcon extends React.Component{
  render(){
    return(
      <div>
        <Image filename={"tft/champion/"+this.props.name+".png"} alt={this.props.name}/>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default ChampionIcon;