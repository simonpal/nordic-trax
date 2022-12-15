import styled from "styled-components";
import Image from "next/image";
import Grid from "./Grid";
import Column from "./Column";
import Button from "./Button";
import { useRouter } from "next/router";

const HeroContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;
  padding-top: 45.32%;
  /* border-radius: 30px; */
  /* background: url(/images/hero-image.png) center center no-repeat;
  background-size: cover; */
  svg {
    max-width: 100%;
    height: auto;
  }
  .hero-inner {
    padding-top: 45.32%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  h1.hero-text,
  .hero-action {
    position: absolute;
    width: 48%;
    top: 1rem;
    left: 0;
    font-size: 1.5rem;
    /* background: url(/images/text-bg-tl.svg) left top no-repeat;
    background-size: contain; */
  }
  .hero-action {
    left: auto;
    top: auto;
    bottom: 1rem;
    right: 0;
    font-size: 1rem;
  }
  @media screen and (max-width: 1280px) {
    h1.hero-text {
      left: 0.5rem;
    }
    .hero-action {
      right: 0.5rem;
    }
  }
  @media screen and (max-width: 1120px) {
    h1.hero-text {
      font-size: 1rem;
    }
    .hero-action {
      font-size: 0.875rem;
    }
  }
  @media screen and (max-width: 990px) {
    h1.hero-text {
      font-size: 1rem;
    }
    .hero-action {
      font-size: 0.875rem;
    }
  }
  @media screen and (max-width: 860px) {
    padding-top: 0;
    .hero-action,
    .hero-inner {
      position: static;
    }
    .hero-action {
      width: 80%;
      margin: 1rem auto;
    }
  }
  @media screen and (max-width: 768px) {
    h1.hero-text {
      position: static;
      width: 80%;
      margin: 1rem auto;
      text-align: center;
    }
  }
`;
// const ImageContainer = styled.div`
//   height: calc(580 / 1280);
//   overflow: hidden;
//   img {
//     height: auto;
//     width: 100%;
//     object-fit: cover;
//     mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 580'%3E%3Cpath d='M628 30C628 13.4315 641.431 0 658 0H1250C1266.57 0 1280 13.4315 1280 30V420C1280 436.569 1266.57 450 1250 450H682C665.431 450 652 463.431 652 480V550C652 566.569 638.569 580 622 580H30C13.4315 580 0 566.569 0 550V160C0 143.431 13.4314 130 30 130H598C614.569 130 628 116.569 628 100V30Z'/%3E%3C/svg%3E");
//   }
// `;
const Hero = ({ blok }) => {
  const router = useRouter();
  const {
    background_image = "",
    button_link,
    button_title,
    hero_action_text,
    hero_text,
  } = blok;
  return (
    <HeroContainer>
      <h1 className="hero-text">{hero_text}</h1>
      <div
        className="hero-inner"
        style={{ backgroundImage: `url(${background_image})` }}
      />
      <div className="hero-action">
        <Grid spacing="small" alignItems="center">
          <Column lg="4" md="3" sm="3" xs="12">
            <Button onClick={() => router.push(`/${button_link.cached_url}`)}>
              {button_title}
            </Button>
          </Column>
          <Column lg="8" md="9" sm="9" xs="12">
            {hero_action_text}
          </Column>
        </Grid>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        viewBox="0 0 1280 580"
        fill="none"
      >
        <defs>
          <clipPath id="hero-mask">
            <path
              d="M628 30C628 13.4315 641.431 0 658 0H1250C1266.57 0 1280 13.4315 1280 30V420C1280 436.569 1266.57 450 1250 450H682C665.431 450 652 463.431 652 480V550C652 566.569 638.569 580 622 580H30C13.4315 580 0 566.569 0 550V160C0 143.431 13.4314 130 30 130H598C614.569 130 628 116.569 628 100V30Z"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
      <ImageContainer>
        <Image
          src="/images/gryning-resized-min.jpg"
          alt="Welcome to Nordic Trax"
          width="1280"
          height="960"
        />
      </ImageContainer> */}
    </HeroContainer>
  );
};

export default Hero;
