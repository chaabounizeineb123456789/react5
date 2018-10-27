import React, {Component} from "react";
import logo from '../wolf.jpg';
import '../App.css';

class Box extends Component{
	render() {
		 const block = {
		 display: 'block',
         color: 'DimGrey '
	}
         const male ={
         	border:'3px solid blue',
         }
         const female ={
            border:'3px solid yellow',
         }
	let instructor = male 
	if (instructor === 'male') {
		instructor = female
	}


		return(

			<div className="box wol" >
                 <img src={require('../wolf.jpg')} style={instructor} /> 
                 
				<h2> {this.props.name} </h2>

				<h1 style={block}>{this.props.para}</h1>
				<h1 style={block}>{this.props.demo}</h1>
			</div>
		);
	}
}

export default Box;