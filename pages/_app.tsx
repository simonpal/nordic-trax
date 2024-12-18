import { Open_Sans } from '@next/font/google';
import { ThemeProvider } from 'styled-components';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import '../styles/global.css';
import theme from '../styles/theme';
import Feature from '../components/cms-components/Feature';
import Teaser from '../components/cms-components/Teaser';
import Page from '../components/cms-components/Page';
import CmsGrid from '../components/cms-components/CmsGrid';
import Hero from '../components/Hero';
import GlobalReference from '../components/cms-components/GlobalReference';
import CoWorkers from '../components/cms-components/CoWorkers';
import Worker from '../components/cms-components/Worker';
import Blockquote from '../components/cms-components/Blockquote';
import Article from '../components/cms-components/Article';
import ArticlePage from '../components/cms-components/ArticlePage';
import TeaserImage from '../components/cms-components/TeaserImage';
import RichText from '../components/cms-components/RichText';
import SEOMeta from '../components/cms-components/SEOMeta';
import ContactBox from '../components/cms-components/ContactBox';
import ContactBoxList from '../components/cms-components/ContactBoxList';

// If loading a variable font, you don't need to specify the font weight
const inter = Open_Sans({ subsets: ['latin'] });

const components = {
  feature: Feature,
  grid: CmsGrid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  workers: CoWorkers,
  Worker: Worker,
  blockquote: Blockquote,
  article: Article,
  articlepage: ArticlePage,
  teaserimage: TeaserImage,
  richtext: RichText,
  seo_meta: SEOMeta,
  contactbox: ContactBox,
  contactboxlist: ContactBoxList,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <main className={`page-content ${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
