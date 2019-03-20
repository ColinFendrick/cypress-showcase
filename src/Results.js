import React from 'react';

export const Results = ({ results }) => {
  return (
    <div>
      {results.map(result => <div key={result.id}>{result.body}</div>)}
    </div>
  );
};
