import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  a {
    display: inline-flex;
    padding: 0.5rem 0;
    margin: 0 1rem;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    position: relative;
    &:after {
      content: "";
      height: 4px;
      background-color: #000;
      width: 0;
      transition: all 0.3s ease;
      position: absolute;
      left: 0;
      top: 100%;
    }
    &:hover:after {
      width: 100%;
    }
    &.active:after {
      width: 100%;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    a {
      margin: 0 0.25rem;
    }
  }
`;

// interface MenuItem {
//   path: string;
//   title: string;
// }
// interface NavigationProps {
//   menuItems: MenuItem[];
// }

const Navigation = ({ menuItems }: any) => {
  const router = useRouter();
  const isActive = (url) => {
    if (url === "home") {
      return router.asPath === "/";
    }
    return router.asPath === `/${url}`;
  };
  return (
    <StyledNav>
      {menuItems.map((item) => (
        <Link
          key={item.path.id}
          href={item.path.cached_url === "home" ? "/" : item.path.cached_url}
          className={isActive(item.path.cached_url) ? "active" : ""}
        >
          {item.displayName}
        </Link>
      ))}
    </StyledNav>
  );
};

export default Navigation;
