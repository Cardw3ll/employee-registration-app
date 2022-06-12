
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
 
import Home from './home';
import Register from './register';
import Login from './login';
 import Employees from './employees'
 import Landing from './landing'
function App() {
    return (      
      <Router>
        <div>
          
          <Switch>

        <Route exact path="/" ><Home/></Route>
         <Route exact path="/employees" ><Employees/></Route>
         <Route exact path="/register" ><Register/></Route>
         <Route exact path="/login"><Login/></Route>
         <Route exact path="/landing"><Landing/></Route>
</Switch>
    
   
        </div> 
        </Router>
    );
  }
export default App;
