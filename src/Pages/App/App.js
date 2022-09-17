import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

import { useGetItemsFrontPageQuery } from '../../services/hackernews';
import { trimUrlString, calculateDate } from '../../utils/helperFunctions';

function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isFetching } = useGetItemsFrontPageQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // data.hits --> Array with object: array.author, .title, .url

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
    <ul className="px-[190px] py-10 text-slate-300 bg-slate-800 flex justify-start flex-wrap">
      {data?.hits.map((item, i) => (
        <div
          key={i}
          className="flex flex-wrap w-full h-20
        border-solid border-2 px-4 py-2 my-2 rounded-xl border-slate-400
        bg-slate-700 transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300
        "
        >
          <li
            key={i}
            className="w-full font-bold text-slate-100"
          >
            {i + 1}. <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a> <Link to={`/from/${trimUrlString(item.url)}`}>({ trimUrlString(item.url) })</Link>
          </li>
          <p className="text-sm">
            {item.points} point(s) by {item.author} <Link className="hover:underline" to={`/item/${item.objectID}`}>{calculateDate(item.created_at)}h ago</Link>  | hide | <Link className="hover:underline" to={`/item/${item.objectID}`}>{item.num_comments} comments</Link>
          </p>
        </div>
      ))}
    </ul>
  );
}

export default App;
