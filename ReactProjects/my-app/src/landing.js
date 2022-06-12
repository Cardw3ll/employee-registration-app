import React from 'react';
import HomeCss from './home.module.css';
import Link from 'react-dom'
const Landing=()=>{
    return(
      <body>

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
    <button type="button" name="button" ><Link to ="register">Cardwell</Link></button>
    {/* <button type="button" name="button" className={ HomeCss.button}><Link to ="register">Sign in</Link></button> */}
    <br/>
   
   
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
export default Landing;