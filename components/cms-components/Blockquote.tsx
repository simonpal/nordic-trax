import styled from "styled-components";

const StyledBlockquote = styled.div`
  position: relative;
  display: block;
  width: 400px;
  max-width: 100%;
  margin: 0 auto 4rem auto;
  padding: 2rem 0;
  font-size: 2.5rem;
  line-height: 110%;
  font-weight: bold;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  &:after {
    position: absolute;
    content: "”";
    font-size: 10rem;
    line-height: 0;
    bottom: -43px;
    right: 30px;
  }
  @media screen and (max-width: 420px) {
    font-size: 2rem;
    padding: 0 1rem;
    &:after {
      font-size: 5rem;
    }
  }
`;

const Blockquote = ({ blok }) => {
  return <StyledBlockquote>{blok.text}</StyledBlockquote>;
};

export default Blockquote;
