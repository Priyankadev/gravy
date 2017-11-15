import React from 'react';
import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';



export default class App extends React.Component {
   render() {
      return (
         <div>
            <Header headerValue="Gravy Project"/>
            <Content />
            <Footer />
         </div>
      );
   }
}//App