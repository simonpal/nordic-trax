import ArticlePreview from "../components/ArticlePreview";
import Button from "../components/Button";
import Column from "../components/Column";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Head from "next/head";

function HomePage({ story, nav }) {
  story = useStoryblokState(story);
  return (
    <Layout links={nav ? nav.links : []}>
      {/* Welcome to Next.js! <Button>A button</Button> */}
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
      {/* <Hero /> */}
      {/* <Grid spacing="xxlarge">
        <Column lg="4" md="4" sm="4" xs="12">
          <ArticlePreview />
        </Column>
        <Column lg="4" md="4" sm="4" xs="12">
          <ArticlePreview />
        </Column>
        <Column lg="4" md="4" sm="4" xs="12">
          <ArticlePreview />
        </Column>
      </Grid> */}
    </Layout>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let nav = await storyblokApi.get(`cdn/stories/global/header-links`);
  console.log(data);
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      nav: nav?.data?.story?.content || false,
    },
    revalidate: 3600,
  };
}

export default HomePage;
