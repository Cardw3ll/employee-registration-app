import React from 'react';
import { Link } from 'react-router-dom';
import LoginCss from './login.module.css'
const Login=()=>{
    return(
<center>
    <form class="" action="" method="post">
      <div class={LoginCss.block}>
      </div>
        <h1 class={LoginCss.logText}>Login</h1>

        <label for="uname" class={LoginCss.userN}><b>Username:</b></label>

      <div class="input-icons">

      {/* <i class="fa fa-user icon" style='font-size:48px'></i> */}
   <input type="text" placeholder="Type your username" name="uname" required class={LoginCss.stBlock}/>
</div>
  <div class="input-icons1">
   {/* <i class='fa fa-lock icon' style='font-size:48px'></i> */}
   <label for="psw" class={LoginCss.passW}><b>Password:</b></label>
   <input type="password" placeholder="Type your password" name="psw" required class={LoginCss.tBlock}/>
</div>


   <button type="submit" class={LoginCss.button}  ><div class={LoginCss.logT}>
    <Link to="/"> Login</Link>
   </div></button>

  <p class={LoginCss.tex}>Or sign up</p>
  <label class={LoginCss.rem}>
    <input type="checkbox" checked="checked" name="remember" /> Remember me
  </label>
  <span class={LoginCss.psw}>Forgot <Link>password?</Link> </span>
  <button type="submit" class={LoginCss.button1} ><div class={LoginCss.signT}>
  <Link to="register"> Sign up</Link>
  </div></button>
    </form>
</center>
    );
}
export default Login;