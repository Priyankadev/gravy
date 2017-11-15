import React from 'react';

export default class Header extends React.Component {

	constructor(props) {
      super(props);
    }



   	render() {


   	var myStyle = {
         fontSize: 100,
         color: '#0000ff'
    };

    return (
         <div>
            <h1 style = {myStyle}>{this.props.headerValue}</h1>

         </div>
      );
   }
}//Header