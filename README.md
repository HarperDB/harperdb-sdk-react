# 🧰 useHarperDB

A React Hook for accessing HarperDB.

## 🚀 Getting Started

HarperDB has a built-in http API, which means you can query data directly from within your client-side application. This React hook makes it easy to keep track of the loading, error, and data state of those queries.

React Version Note: React Hooks require React 16.8.0+

Client-Side Security Note: For a public, web-based application, NEVER use the default (super-user) account. Super-Users have unrestricted access to the database- they can add/drop schemas and tables, so they could delete all your data.

Instead, create a web-specific user that only has read/write/update/delete access to the specific tables they require.

For queries where users should only have access to specific ROWS of data (for example):

`SELECT * FROM dev.dog WHERE owner_id = 2`

...you'll still need to implement a server-side API to prevent the user from simply swapping out the `2` for some other `owner_id`

---

#### Install the hook
```
npm i -s use-harperdb
```
or
```
yarn add use-harperdb
```

#### Add the HarperDBProvider to your index.js file
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HarperDBProvider } from 'use-harperdb';

ReactDOM.render(
  <React.StrictMode>
    <HarperDBProvider url="http://localhost:9925" user="HDB_ADMIN" password="password">
      <App />
    </HarperDBProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

---

## useHarperDB
- Executes a HarperDB operation using the Provider's url, user, and password
- (optionally) set up an `interval` to re-run the operation


#### parameters
| parameter | type | description |
|:---|:---|:---|
|`query` | Object | The HarperDB operation you wish to execute |
|`interval` | Integer | (optional) rate in ms to re-run the query |

#### usage
```jsx
import React from 'react';
import './App.css';
import { useHarperDB } from 'use-harperdb';

import loadingLogo from './logo-loading.svg';
import logo from './logo.svg';

export default () => {
  // primary request, re-run every 5 seconds
  const [ data, loading, error, refresh ] = useHarperDB({ query: { operation: 'sql', sql: 'select * from dev.dog' }, interval: 5000 });
  // secondary request, no interval, not making use of loading, error, or refresh
  const [ data2 ] = useHarperDB({ query: { operation: 'sql', sql: 'select count(*) as totalDogs from dev.dog' } });

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
```
