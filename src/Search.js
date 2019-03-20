import React, { useState } from 'react';

import { getRequest } from './SearchActions';

export const Search = ({ onSubmit }) => {
  const [param, setParam] = useState('posts');
  
  return (
    <div>
      <input type='text' value={param} onChange={e => setParam(e.target.value)} />
      <button type='submit' onClick={() => getRequest(param, (error, res) => onSubmit(error, res))}>search</button>
    </div>
  );
}
