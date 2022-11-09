// import logo from './logo.svg';
import './App.css';
import IdCards from './components/IdCards-01';
import Greetings from './components/Greetings-02';
import Random from './components/Random-03';
import BoxColor from './components/BoxColor-04';

function App() {
  return (
    <div className="App">

      <IdCards/>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="en">Smith</Greetings>
      <Greetings lang="es">Diogo</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6}/>
      <Random min={95} max={100}/>

      <BoxColor r={255} g={255} b={255} />
      <BoxColor r={0} g={0} b={0} /> 
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={200} g={0} b={0} />
      <BoxColor r={0} g={255} b={0} />
      <BoxColor r={0} g={0} b={255} />
      <BoxColor r={128} g={128} b={128} />
      <BoxColor r={126} g={126} b={126} />

    </div>
  );
}

export default App;
