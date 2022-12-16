import Head from "next/head";

const SEOMeta = ({ blok }) => {
  console.log(blok);
  const { title, description, og_image } = blok;
  if (!title && !description && !og_image.filename) return null;
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Head>
  );
};

export default SEOMeta;
