import styled, { css } from 'styled-components';

const red = css`
  color: red;
`;

export const Container = styled.section`
  border-bottom: 1px solid grey;
  padding: 20px;
`;

export const Headline = styled.h1`
  font-size: 18px;
  ${red}
`;

export const Text = styled.span`
  text-decoration: ${(props) => (props.invalid ? 'line-through' : 'none')};

  font-size: 14px;
  ${red}
`;
