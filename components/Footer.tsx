import { render } from "storyblok-rich-text-react-renderer";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2rem 0;
  margin-top: 2rem;
  border-top: 1px solid #eee;
  color: #888;
  text-align: center;
`;

const Footer = ({ content }) => {
  console.log("footer content: ", content);
  return (
    <StyledFooter>
      {content && content.links.map((item) => render(item.content))}
      {/* Nordic Trax AB | Rågåkersgatan 23 78174 Borlänge */}
    </StyledFooter>
  );
};

export default Footer;
