import React from 'react';

export default class User extends React.Component {
 render() {
      return (
         <div>
            <form>
            	Username: <input type="text" /> <br />
            	Password: <input type="password" /><br />
            	<input type="submit" />
            </form>
         </div>
      );
   }
}//User