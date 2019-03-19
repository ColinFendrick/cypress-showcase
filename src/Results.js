import React from 'react';

export const Results = ({ results }) => {
  return (
    <div>
      {results.map(result => <div>{result}</div>)}
    </div>
  );
};
