import Image from "next/image";
import styled from "styled-components";
//524

const StyledImage = styled(Image)`
  height: auto;
  border-radius: 30px;
  margin-bottom: 1rem;
`;

const TeaserImage = ({ blok }) => {
  const { image } = blok;
  return (
    <StyledImage
      src={image.filename}
      width="1280"
      height="524"
      alt={image?.alt || "Image"}
    />
  );
};

export default TeaserImage;
