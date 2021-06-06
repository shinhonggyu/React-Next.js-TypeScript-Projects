import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useFetch } from '../hooks/useFetch';

const CreateWrod = () => {
  const days = useFetch('http://localhost:3001/days');
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch('http://localhost:3001/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: +dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('생성이 완료되었습니다');
          history.push(`/day/${+dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? 'Saving..' : '저장'}
      </button>
    </form>
  );
};

export default CreateWrod;
