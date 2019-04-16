import React, { useState } from 'react';

import { getRequest } from './SearchActions';

export const Search = ({ onSubmit }) => {
  const [userId, setUserId] = useState(1);
  
  return (
    <div>
      <input type='text' value={userId} onChange={e => setUserId(e.target.value)} />
      <button type='submit' onClick={() => getRequest(userId, (error, res) => onSubmit(error, res))}>search</button>
    </div>
  );
}
