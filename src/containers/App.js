import React from 'react';
import Header from '../components/Header.js';
import Content from '../components/Content.js';


export default class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}//App