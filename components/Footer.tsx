import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2rem 0;
  margin-top: 2rem;
  border-top: 1px solid #eee;
  color: #888;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Nordic Trax AB | Rågåkersgatan 23 78174 Borlänge
    </StyledFooter>
  );
};

export default Footer;
