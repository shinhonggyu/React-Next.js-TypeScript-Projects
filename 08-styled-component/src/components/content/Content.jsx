import * as Styled from './Content.styles';

const Content = ({ title, children }) => {
  return (
    <Styled.Container>
      <Styled.Headline>{title}</Styled.Headline>

      <Styled.Text invalid>{children}</Styled.Text>
    </Styled.Container>
  );
};

export default Content;
