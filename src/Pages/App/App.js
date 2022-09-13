import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

import { useGetItemsFrontPageQuery } from '../../services/hackernews';

function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isFetching } = useGetItemsFrontPageQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // data.hits --> Array with object: array.author, .title, .url
  console.log(data?.hits);
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress className="text-slate-700 mt-24" size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong. Go back!</Link>
      </Box>
    );
  }
  return (
    <ol className="ml-8 list-decimal">
      {data?.hits.map((item, i) => <li key={i}>{item.author}</li>)}
    </ol>
  );
}

export default App;
