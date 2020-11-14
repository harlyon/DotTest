import React from 'react';
import {useContext, useState} from 'react';
import NewsContext from '../context/newsContext';
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const Search = () => {
  const { searchNews, filteredDates } = useContext(NewsContext);
  const [date, setDate] = useState('');



// console.log(date)
  return (
    <div className="container">
    <div className="option-inner">
      <div className="others-options d-flex align-items-center">
        <div className="option-item d-flex">
        <DatePicker
          format='yyyy-MM-dd'
          date={date}
          value={date}
          onDateChange={setDate}
          onChange={(e) => filteredDates(date(e))}
          locale={enGB}
          className="search-box"
        >
          {({ inputProps, focused }) => (

            <input
              className={'input' + (focused ? ' -focused' : '')}
              {...inputProps}
            />
          )}
        </DatePicker>
          <form className="search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Search for.."
              onChange={(e) => searchNews(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Search;