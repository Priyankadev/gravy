import React from 'react';

export default class Header extends React.Component {

	constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...',
         name: 'Angel'
      }
      this.updateState = this.updateState.bind(this);
      this.updateName  = this.updateName.bind(this);
   	};

   	updateState() {
      this.setState({data: 'Data updated...'})
  	};

  	updateName(e) {
      this.setState({name: e.target.value})
  	};

  	componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

   	render() {

   		var myStyle = {
        	 fontSize: 100,
         	color: '#0000ff'
    	};

    return (
         <div>
            <h3 style = {myStyle}>{this.props.headerValue}</h3>
            {console.log ("[INFO] rendering header")}
            <button onClick = {this.updateState}>CLICK</button>
            <h4>{this.state.data}</h4>
            Name: <input type = "text" value = {this.state.name} 
               onChange = {this.updateName} />
            <h4>{this.state.name}</h4>
         </div>
      );
   }
}//Header