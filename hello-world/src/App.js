import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Parent from './components/Parent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      {/* <Message /> */}
      {/* <Parent /> */}

      <UserGreeting />

      {/* <Greet name="Khaleesi" actorName="Emilia Clarke">
        <p>
          This is the queen
        </p>
      </Greet>
      <Greet name="Jon Snow" actorName="Kit Harrington">
        <button>The King in the North </button>
      </Greet>
      <Greet name="Arya Stark" actorName="Maise Williams"/>

      <Welcome name="Khaleesi" actorName="Emilia Clarke"/>
      <Welcome name="Jon Snow" actorName="Kit Harrington"></Welcome>
      <Welcome name="Arya Stark" actorName="Maise Williams"/> */}

      {/* <Hello/> */}
    </div>
  );
}

export default App;
