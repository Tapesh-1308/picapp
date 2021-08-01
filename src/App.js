import React, {useState} from 'react';
import SearchBox from './components/SearchBox';
import Gallery from './components/Gallery';

function App() {
  const [input, setinput] = useState('')
  return (
    <center>
      
      <SearchBox input={input} setinput={setinput}/>
      <Gallery query={input}/>
    </center>
  );
}

export default App;
