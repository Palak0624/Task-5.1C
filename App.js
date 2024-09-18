import React, {useState} from 'react';
import './App.css';
import Menu from './Components/Menu';
import Answer from './Components/Answer';
import FormPart from './Components/Form';
import Info from './Components/Information';

function App(){
  const[selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };
   return(
    <div className="App">
      <Menu />
      <Answer onSelect={handlePostTypeChange}/>
      {selectedPostType === 'question' ? <FormPart /> :null}
      {selectedPostType == 'article' ? <Info /> : null}
    </div>
   );
}

export default App;