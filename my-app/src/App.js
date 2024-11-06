import React, { useState, useEffect } from 'react';
import MemoForm from '../src/components/MemoForm';
import MemoList from '../src/components/MemoList';
import './App.css';

const App = () => {
  const [memos, setMemos] = useState(JSON.parse(localStorage.getItem('memos')) || []);

  useEffect(() => {
    localStorage.setItem('memos', JSON.stringify(memos));
  }, [memos]);

  const addMemo = (memo) => {
    setMemos([...memos, memo]);
  };

  const clearMemos = () => {
    setMemos([]);
  };

  return (
    <div>
      <h2>Memo App</h2>
      <MemoForm addMemo={addMemo} />
      <button onClick={clearMemos}>Clear Memos</button>
      <MemoList memos={memos} />
    </div>
  );
};

export default App;