import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = (props) => {
  return (
    <StyledGame>
      <h3>{props.name}</h3>
      <p>{props.released}</p>
      <img src={props.image} alt={props.name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
