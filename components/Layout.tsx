import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  const { links, children } = props;

  return (
    <>
      <Header links={links} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
