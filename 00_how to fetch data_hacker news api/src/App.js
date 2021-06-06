import React, { useState, Fragment } from 'react';
import { useHacKerNewsApi } from './hooks/useHackerNewsApi';

const App = () => {
  const [query, setQuery] = useState('redux');
  const [dataFetchstate, doFetch] = useHacKerNewsApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] }
  );

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          style={{
            opacity: dataFetchstate.isLoading ? 0.3 : 1,
          }}
          type="submit"
        >
          {dataFetchstate.isLoading ? 'Saving..' : 'Search'}
        </button>
      </form>

      {dataFetchstate.isError && <h3>Something went wrong ...</h3>}

      {dataFetchstate.isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {dataFetchstate.data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default App;
