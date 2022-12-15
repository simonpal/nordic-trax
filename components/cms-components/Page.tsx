import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styled from "styled-components";

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const Page = (props) => {
  const { blok } = props;
  return (
    <MainContent className="content-container" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </MainContent>
  );
};

export default Page;
