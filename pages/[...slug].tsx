import Head from "next/head";
// import styles from "../styles/Home.module.css";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../components/Layout";

export default function Page({ story, nav, footer }) {
  story = useStoryblokState(story);

  return (
    <Layout links={nav ? nav.links : []} footer={footer}>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      {/* <h1>{story ? story.name : "My Site"}</h1> */}

      <StoryblokComponent
        title={story?.name || "Nordic Trax"}
        blok={story.content}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let nav = await storyblokApi.get(`cdn/stories/global/header-links`);
  let footer = await storyblokApi.get(`cdn/stories/global/footer`);
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      nav: nav?.data?.story?.content || false,
      footer: footer?.data?.story?.content || false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
