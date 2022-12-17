import Head from "next/head";
import Image from "next/image";
import CenteredContent from "../components/CenteredContent";

export default function Custom500() {
  return (
    <CenteredContent>
      <Head>
        <title>Internt servefel - Nordic Trax</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Image src="/images/logo.jpg" alt="Nordic Trax" width="311" height="65" />
      <h1>500 - Serverfel</h1>
    </CenteredContent>
  );
}
