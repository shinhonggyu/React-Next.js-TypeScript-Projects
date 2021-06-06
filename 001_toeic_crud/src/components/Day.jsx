import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Word from './Word';

const Day = () => {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <Fragment>
      <h2>Day {day}</h2>
      {words.length === 0 && <h3>Loading...</h3>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Day;
