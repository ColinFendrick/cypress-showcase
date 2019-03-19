import React from 'react';

export const Results = (results) => {
  console.log(results)
  return (
    <div>
      {results.map(result => <div>`${result}`</div>)}
    </div>
  );
};
