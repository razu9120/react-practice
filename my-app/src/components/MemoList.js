import React from 'react';

const MemoList = ({ memos }) => {
  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id}>
          <h3>{memo.title}</h3>
          <span>ID: {memo.id}</span>
          <span>{memo.date}</span>
          <p>{memo.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MemoList;