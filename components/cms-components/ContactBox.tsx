import { storyblokEditable } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';
import styled from 'styled-components';
import Image from 'next/image';
import { useRef } from 'react';

const StyledContactBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border: ${({ theme }) => `1px solid ${theme.colors.mediumGray}`};
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
`;

const StyledIconWrapper = styled.div`
  font-family: system-ui, sans-serif;
  line-height: 100%;
  aspect-ratio: 1;
  display: inline-grid;
  place-items: center;
  min-width: 2em;
  min-height: 2em;
  padding: 0.5em;
  background-color: ${({ theme }) => theme.colors.lightBeige};
  border-radius: 50%;
  box-sizing: border-box;
`;

const ContactBox = ({ blok }) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };
  return (
    <StyledContactBox {...storyblokEditable(blok)} onClick={handleClick}>
      <StyledIconWrapper>
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          width="100"
          height="100"
        />
      </StyledIconWrapper>
      <div>
        <h3>{blok.Title}</h3>
        {blok?.Email && (
          <a ref={linkRef} href={`mailto:${blok.Email}`}>
            {render(blok.Email)}
          </a>
        )}
      </div>
    </StyledContactBox>
  );
};

export default ContactBox;
