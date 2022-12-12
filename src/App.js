import Application from './component/application/application';
import Chat from './component/Hooks/Chat';
import Messages from './component/Hooks/Messages';
import { Users } from './component/httpmockapplication/Users';
import { Signin } from './component/loginpage/Signin';
import { MockPage } from './component/mockapplication/MockPage';
import { Skills } from './component/skills/Skills';



function App() {
  return (
    <div className="App">
     {/*  <Application/>  
      <Skills skills={['HTML', 'CSS']} />
      <MockPage count={1} /> */}
       {/* <Users /> */}
       {/* <Signin data-testid="child"/> */}



       <Chat />
    </div>
  );
}
export default App;
