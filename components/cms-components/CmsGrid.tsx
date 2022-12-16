import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styled from "styled-components";

const StyledCmsGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: calc(1280px + 2rem);
  max-width: calc(1280px + 2rem);
  align-items: flex-start;
  margin: 0 -1rem;
  .column {
    width: ${(props) => `${100 / props.cols}%`};
    padding: 0 1rem;
    /* &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      padding-right: 0;
    } */
  }
  @media screen and (max-width: 1280px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    /* .column {
      width: 50%;
    } */
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    margin: 0;
    max-width: 100%;
    .column {
      width: 100%;
      /* &:first-of-type {
        padding-left: 1rem;
      }
      &:last-of-type {
        padding-right: 1rem;
      } */
    }
  }
`;

const CmsGrid = ({ blok }) => {
  const cols = blok.columns.length;
  return (
    <StyledCmsGrid cols={cols} className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </StyledCmsGrid>
  );
};

export default CmsGrid;
