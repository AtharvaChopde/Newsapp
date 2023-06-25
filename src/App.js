import logo from './logo.svg';
import './App.css';


import { useState } from 'react';
import News from './components/News';

function App() {

  const [items,setItems]= useState([]);


  return (
    
      <div>
      
        <News/>
      </div>
    
  );
}

export default App;
