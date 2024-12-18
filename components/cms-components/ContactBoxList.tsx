import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import styled from 'styled-components';
const ContactBoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const ContactBoxList = ({ blok }) => {
  return (
    <ContactBoxGrid className="column feature" {...storyblokEditable(blok)}>
      {blok.contactboxlist.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </ContactBoxGrid>
  );
};

export default ContactBoxList;
