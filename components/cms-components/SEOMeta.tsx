import Head from "next/head";

{
  /* <meta property="og:title"              content="When Great Minds Don’t Think Alike" />
<meta property="og:description"        content="How much does culture influence creative thinking?" />
<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" /> */
}
const SEOMeta = ({ blok }) => {
  console.log(blok);
  const { title, description, og_image } = blok;
  if (!title && !description && !og_image.filename) return null;
  return (
    <Head>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {og_image && og_image.filename && (
        <meta property="og:image" content={og_image.filename} />
      )}
    </Head>
  );
};

export default SEOMeta;
