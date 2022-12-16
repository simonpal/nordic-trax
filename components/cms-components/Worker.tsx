import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import styled from "styled-components";
import Image from "next/image";

const StyledWorker = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  padding: 1rem;
  h3 {
    margin: 1rem 0;
  }
  img {
    border-radius: 50%;
    max-width: 80%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    border-bottom: 1px solid #eee;
  }
`;

const Worker = ({ blok }) => {
  return (
    <StyledWorker {...storyblokEditable(blok)}>
      <Image
        src={blok.image.filename}
        alt={blok.image.alt}
        width="300"
        height="300"
      />
      <h3>{blok.Name}</h3>
      {blok?.Description && render(blok.Description)}
    </StyledWorker>
  );
};

export default Worker;
