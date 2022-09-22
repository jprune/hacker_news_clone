import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';


import { useGetPastItemsQuery } from '../../services/hackernews';

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState < DateRange < Dayjs >> ([null, null]);
  
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}

function Past() {
  const { data, error, isFetching } = useGetPastItemsQuery();


  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress className="text-slate-700 mt-24" size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      //Error page HERE!!!?
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/src/components/Error/ErrorPage.jsx"></Link>
      </Box>
    );
  }
  return (
        
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
  );
}
