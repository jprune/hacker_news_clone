import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

import { useGetNewCommentsQuery } from '../../services/hackernews';
import { trimUrlString, calculateDate } from '../../utils/helperFunctions';

function Comments() {
  const { data, error, isFetching } = useGetNewCommentsQuery();
  console.log(data);

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
    <div className="px-[190px] py-10 text-slate-300 bg-slate-800 flex justify-start flex-wrap">
      {
        // comments header muss noch angepasst werden!!, More button also needs to be calculated
      data?.hits.map((comment, idx) => (
        <div
          className="flex flex-wrap w-full
      border-solid border-2 px-4 py-2 my-2 rounded-xl border-slate-400
      bg-slate-700 transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300
      "
          key={idx}
        >
          <Typography variant="subtitle2" className="mb-2">
            {comment.author} {calculateDate(comment.created_at)}h ago | next [ - ]
          </Typography>
          <Typography
            className="w-full font-bold text-slate-100"
            variant="body1"
          >
            {comment.comment_text}
          </Typography>
        </div>
      ))
      }
    </div>
  );
}

export default Comments;
