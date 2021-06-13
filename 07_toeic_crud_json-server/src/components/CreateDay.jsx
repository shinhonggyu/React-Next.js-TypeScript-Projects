import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { useFetch } from '../hooks/useFetch';

const CreateDay = () => {
  const days = useFetch('http://localhost:3001/days');
  const history = useHistory();

  const addDayHandler = () => {
    fetch('http://localhost:3001/days', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료되었습니다');
        history.push(`/`);
      }
    });
  };

  return (
    <Fragment>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDayHandler}>Day 추가</button>
    </Fragment>
  );
};

export default CreateDay;
