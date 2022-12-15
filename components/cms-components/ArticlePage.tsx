import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styled from "styled-components";

const NarrowContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
`;

const Page = (props) => {
  const { blok, title } = props;
  console.log(blok);
  return (
    <NarrowContent className="content-container" {...storyblokEditable(blok)}>
      <h1>{title}</h1>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </NarrowContent>
  );
};

export default Page;
