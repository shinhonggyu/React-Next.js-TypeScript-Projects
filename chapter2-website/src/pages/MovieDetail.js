import styled from 'styled-components';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const MovieDetail = () => {
  const history = useHistory();
  const location = useLocation();
  const routeMatch = useRouteMatch();
  console.log('history', history);
  console.log('location', location);
  console.log('routeMatch', routeMatch);
  return (
    <div>
      <h1>MovieDetail</h1>
    </div>
  );
};

export default MovieDetail;
