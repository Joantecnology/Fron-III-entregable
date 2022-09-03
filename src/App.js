import { userState } from 'react';
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'

function App() {

  const [itemCount , setCounter] = userState(0)
  const addItem = () => {
    setCounter(itemCount+1)
  }

  return (
    <div className="App">
      <Cabecera items={itemCount}/>
      <Listado addItem={addItem}/>
    </div>
  );
}

export default App;
