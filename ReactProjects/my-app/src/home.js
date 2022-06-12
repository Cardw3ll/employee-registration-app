import React from 'react';
import { Link } from 'react-router-dom';
import HomeCss from './home.module.css';
const Home = ()=>{
    return(
        <body >

        <nav>
          <ul>
            <li>Spiral Flex</li>
          <div className={ HomeCss.ove}>
        
            <li><Link to="/">Home</Link></li>
            <li><Link to="employees" >Employees</Link></li>
            <li><a href="Contact.html">Contact</a></li>
            <li><a href="About.html">About us</a></li>
    
    
          </div>
    
    
          </ul>
          </nav>
    <button type="button" name="button" className={HomeCss.button}><Link to ="register">Sign in</Link></button>
    <button type="button" name="button" className={HomeCss.button9}><Link to="login">Login</Link></button>
   
          <h1 className={ HomeCss.Come}>Come build with us</h1>
          <p className={ HomeCss.state}>Here at spiral flex your knowledge is power, with it we can achieve <br/>
    the most outstanding thing. Feel free to express yourself and share <br/>
    a few things with us  </p>
      <div className={ HomeCss.out}>
    
      </div>
      <div className={ HomeCss.inner}>
    
      </div>
      <div className={ HomeCss.text}><Link>Start working now </Link></div>
      <div className={ HomeCss.thePic}>
    
      </div>
        </body>
    );
}
export default Home;