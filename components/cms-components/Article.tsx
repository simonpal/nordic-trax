import { StoryblokComponent } from "@storyblok/react";
import styled from "styled-components";

const StyledArticle = styled.div`
  max-width: 600px;
  margin: 0 auto;
  @media screen and (max-width: 420px) {
    padding: 0 1rem;
  }
`;

const Article = ({ blok }) => {
  return (
    <StyledArticle>
      {blok.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </StyledArticle>
  );
};

export default Article;
