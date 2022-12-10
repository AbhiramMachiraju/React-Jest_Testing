import Application from './component/application/application';
import { Users } from './component/httpmockapplication/Users';
import { MockPage } from './component/mockapplication/MockPage';
import { Skills } from './component/skills/Skills';

function App() {
  return (
    <div className="App">
     {/*  <Application/>  
      <Skills skills={['HTML', 'CSS']} />
      <MockPage count={1} /> */}
       <Users />
    </div>
  );
}
export default App;
