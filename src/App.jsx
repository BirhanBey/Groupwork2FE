import React from 'react';
import ListGenerator from './components/ListGenerator';

function App() {
  return (
    <div className="App" >      
      <div className='is-flex-direction-column '>
        <div className='is-flex is-justify-content-center mr-3 mb-3'>
          <h1 className='title mx-auto has-text-grey'>Peri's TodoList Generator</h1>
        </div>
        <ListGenerator />
      </div>         
    </div>
    

  );
}

export default App;