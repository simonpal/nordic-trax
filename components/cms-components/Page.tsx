import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styled from "styled-components";

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media screen and (max-width: 1280px) {
    padding: 0 1rem;
  }
`;

const Page = (props) => {
  const { blok, title } = props;
  return (
    <MainContent className="content-container" {...storyblokEditable(blok)}>
      <h1>{title}</h1>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </MainContent>
  );
};

export default Page;
