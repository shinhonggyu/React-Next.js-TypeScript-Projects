import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const EmptyPage = () => {
  return (
    <Fragment>
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌아가기</Link>
    </Fragment>
  );
};

export default EmptyPage;
