import React, { useState, useMemo } from 'react';
import MemoList from './components/MemoList';
import MemoFilter from './components/MemoFilter';
import { memos } from './components/memo_data';
import './App.css';
const App = () => {
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredMemos = useMemo(() => {
    return memos
      .filter((memo) =>
        memo.title.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => {
        if (sortField === 'date') {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        } else if (sortField === 'id') {
          return sortOrder === 'asc' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
        } else {
          return sortOrder === 'asc'
            ? a[sortField].localeCompare(b[sortField])
            : b[sortField].localeCompare(a[sortField]);
        }
      });
  }, [filter, sortField, sortOrder]);

  return (
    <div className="container">
      <h2>Memo List</h2>
      <MemoFilter filter={filter} setFilter={setFilter} />
      <button onClick={() => { setSortField('id'); setSortOrder('asc'); }}>ID(昇順)</button>
      <button onClick={() => { setSortField('id'); setSortOrder('desc'); }}>ID(降順)</button>
      <button onClick={() => { setSortField('title'); setSortOrder('asc'); }}>タイトル(昇順)</button>
      <button onClick={() => { setSortField('title'); setSortOrder('desc'); }}>タイトル(降順)</button>
      <button onClick={() => { setSortField('date'); setSortOrder('asc'); }}>日付(昇順)</button>
      <button onClick={() => { setSortField('date'); setSortOrder('desc'); }}>日付(降順)</button>
      <MemoList memos={filteredMemos} />
    </div>
  );

};

export default App;