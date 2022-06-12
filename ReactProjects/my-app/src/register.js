import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import FileBase64 from 'react-file-base64';
import Reg from './regsiter.module.css';

const Register=() =>{
  const [ email, setEmail] = useState('');
  const [name,setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [employeeList,setEmployeeList] = useState([]);

useEffect(()=>{
  Axios.get( "http://localhost:3001/read").then((response)=>{
    setEmployeeList(response.data);
  })
});

function addToList(){
  Axios.post( "http://localhost:3001/insert",{email:email,name:name,lastName:lastName,username:username,password:password} )
}
    return(
      <center>
        <form className="" action="">
        <div className={Reg.theWhite}>
        
        </div>
        
                <h1 className={Reg.RegsiterText}>Regsiter</h1>
        
        {/* <!-- email --> */}
        <label for="uname" className={Reg.userEmail}><b>E-mail:</b></label>
        <div class="input-icons3">
        
        {/* <i class="fa fa-envelope icon" style='font-size:48px'></i> */}
        <input type="text" placeholder="Type your email" name="uname" required className={Reg.block1} onChange={(event) => {setEmail(event.target.value)}}/>
        </div>
        {/* <!-- last name & first name --> */}
        <label for="uname" className={Reg.userFirst}><b>Fisrt Name:</b></label>
              <div class="input-icons4">
{/*         
              <i class="fa fa-user icon" style='font-size:48px'></i> */}
           <input type="text" placeholder="Type your first name" name="uname" required className={Reg.block2} onChange={(event) => {setName(event.target.value)}}/>
        </div>
        <label for="uname" className={Reg.userLast}><b>Last Name:</b></label>
        <div class="input-icons5">
{/*         
        <i class="fa fa-user icon" style='font-size:48px'></i> */}
        <input type="text" placeholder="Type your last name" name="uname" required className={Reg.block3} onChange={(event) => {setLastName(event.target.value)}}/>
        </div>
        
        {/* <!-- usernamr --> */}
        <label for="uname" className={Reg.userN1}><b>Username:</b></label>
        <div class="input-icons6">
        
        {/* <i class="fa fa-user icon" style='font-size:48px'></i> */}
        <input type="text" placeholder="Type your username" name="uname" required className={Reg.block4} onChange={(event) => {setUsername(event.target.value)}}/>
        </div>
        {/* <!-- password --> */}
          <div class="input-icons7">
           {/* <i class='fa fa-lock icon' style='font-size:48px'></i> */}
           <label for="psw" className={Reg.passW1}><b>Password:</b></label>
           <input type="password" placeholder="Type your password" name="psw" required className={Reg.block5} onChange={(event) => {setPassword(event.target.value)}}/>
        </div>
        <div class="input-icons8">
         {/* <i class='fa fa-lock icon' style='font-size:48px'></i> */}
         <label for="psw" className={Reg.passW2}><b>Confirm Password:</b></label>
         <input type="password" placeholder="Type your password" name="psw" required class={Reg.block6}/>
        </div>
        <Link to="/landing">
        <button className={Reg.buttonR} onClick={addToList}>
        <div className={Reg.RegisterT}>
             {/* <a href="landingPage.html"></a> */}
             Sign up
           </div></button>
           </Link>
          <p class={Reg.text1}>Or sign up</p>
        
          <button type="submit" className={Reg.button2 } onClick="login.html"><div className={Reg.LogT1}>
            <Link to="/login">Login</Link>
          </div></button>
        
        {/* {employeeList.map((val,key)=>{
          return <div>{val.email}</div>
        })} */}
            </form>
            </center>
    );
}
export default Register;