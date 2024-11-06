import React from 'react';

const MemoList = ({ memos }) => {
  return (
    <ul className="memo-list">
      {memos.map((memo, index) => (
        <li key={index}>{memo}</li>
      ))}
    </ul>
  );
};

export default MemoList;