import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import styled from "styled-components";
const CoWorkerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CoWorkers = ({ blok }) => {
  return (
    <CoWorkerGrid className="column feature" {...storyblokEditable(blok)}>
      {blok.workers.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </CoWorkerGrid>
  );
};

export default CoWorkers;
