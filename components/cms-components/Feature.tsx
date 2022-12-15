import { storyblokEditable } from "@storyblok/react";
import styled from "styled-components";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
const StyledArticle = styled.div`
  margin-top: 2rem;
  img {
    height: auto;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
`;

const Feature = ({ blok }) => {
  let protocol = "http:";
  if (typeof window !== "undefined") {
    // Client-side-only code
    protocol = window.location.protocol;
  }
  return (
    <StyledArticle className="column feature" {...storyblokEditable(blok)}>
      {blok?.image && (
        <Image
          src={`${protocol}${blok.image}`}
          alt={blok.name}
          width="1280"
          height="960"
        />
      )}
      <h3>{blok.name}</h3>
      {blok?.text && render(blok.text)}
    </StyledArticle>
  );
};

export default Feature;
