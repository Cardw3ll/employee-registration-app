import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import EmployeeStyle from './employees.module.css';
import Cap from './components/j.jpg'
const Employees=()=>{
    return(
        <div >
    <nav>
      <ul>
        <li>Spiral Flex</li>
      <div class={EmployeeStyle.ove}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><a href="Contact.html">Contact</a></li>
        <li><a href="About.html">About us</a></li>


      </div>


      </ul>
<button type="button" name="button">Cardwell</button>

    </nav>
    <h1>Work Force</h1>
    <div class={EmployeeStyle.row}>
      <div class={EmployeeStyle.column}>
        <div class={EmployeeStyle.card}>
          <img src={Cap} alt="" className={EmployeeStyle.Cap}/>
          <div class={EmployeeStyle.container}>
            <p class="title">Administerator</p>
            <h3>Caprynda</h3>
          </div>
        </div>

      </div>

      {/* <div class={EmployeeStyle.column}>
        <div class={EmployeeStyle.card}>
          <img src="" alt=""/>
          <div class={EmployeeStyle.container}>
            <p class="title">Sectary</p>
            <h3>Rango</h3>
          </div>
        </div>

      </div> */}
      {/* <div class={EmployeeStyle.column}>
        <div class={EmployeeStyle.card}>
          <img src="" alt=""/>
          <div class={EmployeeStyle.container}>
            <p class="title">Executive</p>
            <h3>Jessica</h3>
          </div>
        </div>

      </div> */}
    </div>
  
    </div>

    );
}
export default Employees;