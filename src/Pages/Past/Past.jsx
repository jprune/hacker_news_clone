import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCallback, useState } from "react";
//import { DateInput2 } from "@blueprintjs/datetime2";

import { useGetPastItemsQuery } from '../../services/hackernews';

function Past() {
  const { data, error, isFetching } = useGetPastItemsQuery();
  const [dateValue, setDateValue] = useState<string>(null);
  const handleChange = useCallback(setDateValue, []);
  const formatDate = useCallback((date: Date) => date.toLocaleString(), []);
  const parseDate = useCallback((str: string) => new Date(str), []);

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
  
    <div>
        <DateInput2
            formatDate={formatDate}
            onChange={handleChange}
            parseDate={parseDate}
            placeholder="M/D/YYYY"
            value={dateValue}
        />
      
     <ul className="px-[190px] py-10 text-slate-300 bg-slate-800 flex justify-start flex-wrap">
      {data?.hits.map((item, i) => (
        <div className="flex flex-wrap w-full h-20
        border-solid border-2 px-4 py-2 my-2 rounded-xl border-slate-400
        bg-slate-700 transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300
        "
        >
          <li
            key={i}
            className="w-full font-bold text-slate-100"
          >
            {i - 1}. {item.title} ({item.url})
          </li>
          <p className="text-sm">{item.points} by {item.author} {item.created_at} | hide | {item.num_comments} comments</p>
        </div>
      ))}
      </ul>
      </div>
  );
}

export default Past;

function Example() {
    const [dateValue, setDateValue] = useState<string>(null);
    const handleChange = useCallback(setDateValue, []);
    const formatDate = useCallback((date: Date) => date.toLocaleString(), []);
    const parseDate = useCallback((str: string) => new Date(str), []);
 
    return (
        <DateInput2
            formatDate={formatDate}
            onChange={handleChange}
            parseDate={parseDate}
            placeholder="M/D/YYYY"
            value={dateValue}
        />
    );
}