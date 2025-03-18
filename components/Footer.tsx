import { StoryblokComponent } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 2rem 1rem;
  margin-top: 2rem;
  border-top: 1px solid #eee;
  color: #555;
  text-align: center;
  img {
    display: inline-block;
    margin: 0 1rem;
  }
`;

const Footer = ({ content }) => {
  console.log('footer content: ', content);
  return (
    <StyledFooter>
      {content && content.links.map((item) => render(item.content))}
      {/* <StoryblokComponent key={item._uid} blok={item.content} /> */}
    </StyledFooter>
  );
};

export default Footer;
