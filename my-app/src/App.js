import './App.css';
import React, { useState } from 'react';
import Test1 from '../src/components/Test1';

const App = () => {
  const [name, setName] = useState('');
  const [flg, setFlg] = useState(true);
  const str = "タイトル";
  const props = "props";
  const animals = ["Lion", "Elephant", "Tiger", "Giraffe", "Zebra"];
  const sum = (num1, num2) => {
    return num1 + num2;
  };
  const nameCopy = (e) => {
    return setName(e.target.value);
  };
  const changeFlg = () => {
    return flg ? setFlg(false) : setFlg(true);
  };

  return (
    <div>
      <h1>{str}</h1>
      <ul>
        {animals.map((animal, index) => <li key={index}>{animal}</li>)}
      </ul>
      <Test1 props={props} sum={sum} />
      {/* <input type='text' id='input-name' name='input-name' onChange={(e) => setName(e.target.value)} />
      <input type='text' id='output-name' name='output-name' value={name} /> */}
      <input type='text' id='input-name' name='input-name' onChange={nameCopy} />
      <input type='text' id='output-name' name='output-name' value={name} />
      <button type='submit' onClick={changeFlg}>検索</button>
      {flg ? <div>true</div> : <div>false</div>}
    </div>
  );
}

export default App;
