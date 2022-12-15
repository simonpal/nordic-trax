import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  const { links, footer, children } = props;

  return (
    <>
      <Header links={links} />
      {children}
      <Footer content={footer} />
    </>
  );
};

export default Layout;
