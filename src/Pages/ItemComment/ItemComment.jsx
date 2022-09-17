import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

import { useGetCommentsOfStoryQuery, useGetItemsQuery } from '../../services/hackernews';
import { trimUrlString, calculateDate } from '../../utils/helperFunctions';
import { Input } from '../index';

function ItemComment() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetCommentsOfStoryQuery(id);
  const { data: itemData, isFetching: itemDataIsFetching, error: itemDataError } = useGetItemsQuery(id);
  console.log(itemData);
  console.log(data);
  if (isFetching || itemDataIsFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress className="text-slate-700 mt-24" size="8rem" />
      </Box>
    );
  }
  if (error || itemDataError) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong. Go back!</Link>
      </Box>
    );
  }
  return (
    <div className="px-[190px] py-10 text-slate-300 bg-slate-800 flex justify-start flex-wrap">
      <div
        className="flex flex-wrap w-full h-20
        border-solid border-2 px-4 py-2 my-2 rounded-xl border-slate-400
        bg-slate-700 transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300
        "
      >
        <Typography
          className="w-full font-bold text-slate-100"
          variant="h6"
        >
          <a href={itemData.url} target="_blank" rel="noreferrer">{itemData.title}</a> <Link to={`/from/${trimUrlString(itemData.url)}`}>({ trimUrlString(itemData.url) })</Link>
        </Typography>
        <Typography variant="subtitle2">
          {itemData.points} point(s) by {itemData.author} <Link className="hover:underline" to={`/item/${itemData.objectID}`}>{calculateDate(itemData.created_at)}h ago</Link>  | hide | <Link className="hover:underline" to={`/item/${itemData.objectID}`}>{itemData.num_comments} comments</Link>
        </Typography>
      </div>
      <Box className="w-full">
        <Input />
      </Box>
    </div>
  );
}

export default ItemComment;
