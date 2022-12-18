import Application from './component/application/application';
import Chat from './component/Hooks/Chat';
import Messages from './component/Hooks/Messages';
import { Users } from './component/httpmockapplication/Users';
import { Signin } from './component/loginpage/Signin';
import { MockPage } from './component/mockapplication/MockPage';
import { Skills } from './component/skills/Skills';
import {HashRouter, Route, Switch} from 'react-router-dom'
import ListAllData from './component/FormPages/ListAllData';
import CreateData from './component/FormPages/CreateData';


function App() {
  return (
    <div className="App">
     {/*  <Application/>  
      <Skills skills={['HTML', 'CSS']} />
      <MockPage count={1} /> */}
       {/* <Users /> */}
       {/* <Signin data-testid="child"/> */}
       {/* <Chat /> */}
       <div className="container">
       <HashRouter hashType="slash">
                    <Switch> 
                          <Route path = "/" exact component = {ListAllData}></Route>
                          <Route path = "/employees" component = {ListAllData}></Route>
                          <Route path = "/add-employee/:id" component = {CreateData}></Route>
                         {/*  <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
                    </Switch>
                    </HashRouter>
                </div>


    </div>
  );
}
export default App;
