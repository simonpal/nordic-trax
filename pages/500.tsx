import Image from "next/image";
import CenteredContent from "../components/CenteredContent";

export default function Custom500() {
  return (
    <CenteredContent>
      <Image src="/images/logo.jpg" alt="Nordic Trax" width="311" height="65" />
      <h1>500 - Serverfel</h1>
    </CenteredContent>
  );
}
