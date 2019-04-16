import React from 'react';

export const Results = ({ results }) =>
  <div>
    {results.map(result =><div key={result.id} className={`results-${result.userId}`}>{result.id}: {result.body}</div>)}
  </div>

