import React from 'react';
import Directory from '../../directory/directory.component';
import './homepage.styles.scss';

 const Homepage = ({ history }) => (
     <div className='homepage'>
         <Directory history={history} />
     </div>
 );

 export default Homepage;