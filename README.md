**DATA FETCHING WITH REACT HOOKS**

```js
const App = () => {
  const [data, setData] = useState({ hits: [] });

  // useEffect(() => {
  //   fetch('https://hn.algolia.com/api/v1/search?query=redux')
  //     .then((res) => res.json())
  //     .then((result) => setData(result));
  // });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux'
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
```

**HOW TO TRIGGER A HOOK**

```js
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  // const [search, setSearch] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  );

  // useEffect(() => {
  //   fetch('https://hn.algolia.com/api/v1/search?query=redux')
  //     .then((res) => res.json())
  //     .then((result) => setData(result));
  // });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setData(result.data);
    };

    fetchData();
  }, [url]);

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default App;
```

**LOADING INDICATOR WITH REACT HOOKS**

```js
const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        {isLoading ? 'Saving..' : 'Search'}
      </button>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};
```

**ERROR HANDLING WITH REACT HOOKS**

```js
const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        {isLoading ? 'Saving..' : 'Search'}
      </button>

      {isError && <h3>Something went wrong ...</h3>}

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};
```

**FETCHING DATA WITH FORMS AND REACT**

```js
const App = () => {
  •••
  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          style={{
            opacity: isLoading ? 0.3 : 1,
          }}
          type="submit"
        >
          {isLoading ? 'Saving..' : 'Search'}
        </button>
      </form>
      •••

    </Fragment>
  );
};

export default App;

```

**CUSTOM DATA FETCHING HOOK**

```js
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useHacKerNewsApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};
```
