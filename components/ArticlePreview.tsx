import Image from "next/image";
import styled from "styled-components";

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

const ArticlePreview = () => {
  return (
    <StyledArticle>
      <Image
        src="/images/gryning-resized-min.jpg"
        alt="Something"
        width="1280"
        height="960"
      />
      <h3>Mer om oss</h3>
      <p>
        På Nordic Trax drivs vi av att alltid leverera tjänster inom
        järnvägssektorn utifrån rätt kvalitet, säkerhet och flexibilitet efter
        kundens önskemål.
      </p>
    </StyledArticle>
  );
};

export default ArticlePreview;
