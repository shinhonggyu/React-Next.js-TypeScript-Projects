import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const DayList = () => {
  const days = useFetch('http://localhost:3001/days');

  if (days.length === 0) {
    return <h3>Loading...</h3>;
  }

  return (
    <Fragment>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default DayList;
