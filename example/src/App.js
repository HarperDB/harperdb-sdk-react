import React from 'react';
import './App.css';
import { useHarperDB } from 'use-harperdb';

import loadingLogo from './logo-loading.svg';
import logo from './logo.svg';

const App = () => {
  const [ data, loading, error, refresh ] = useHarperDB({ query: { operation: 'sql', sql: 'select * from dev.dogs' }, interval: 5000 });
  const [ data2 ] = useHarperDB({ query: { operation: 'sql', sql: 'select count(*) as totalDogs from dev.dogs' } });

  return (
    <div className="App">
      <header className="App-header">
        <img src={loading ? loadingLogo : logo} className="App-logo" alt="logo" />
        <hr />
        <button onClick={refresh}>refresh</button>
        <hr />
        Total Dogs: {data2 ? data2[0].totalDogs : '...'}
        <hr />
        {data ? (
          <pre>{JSON.stringify(data)}</pre>
        ) : error ? (
          <div style={{ color: 'red' }}>error: {error || 'false'}</div>
        ) : (
          <div>Loading</div>
        )}
      </header>
    </div>
  );
}

export default App;
