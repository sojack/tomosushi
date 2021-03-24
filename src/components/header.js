import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const navlinks = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "Menu",
    slug: "/",
  },
  {
    name: "Contact",
    slug: "/",
  },
  {
    name: "Order Online",
    slug: "/",
  },
  // {
  //   name: "Contact",
  //   slug: "/contact",
  //   sublink: [
  //     { name: "Car", slug: "/item1" },
  //     { name: "Potatoe", slug: "/item2" },
  //     { name: "Hexcarnivore", slug: "/item3" },
  //   ],
  // },
];

const TheNav = styled.div`
  background-color: var(--primary-dark);
  height: 55px;
  width: 100%;
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  .logo {
    margin: 6px;
  }
  .currentPage {
    /* text-decoration: underline; */
    border-bottom: 5px solid var(--secondary-dark);
  }
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Montserrat";
    font-weight: 600;
  }
  a {
    text-decoration: none;
  }
  .bars {
    display: none;
  }

  ul {
    margin: 1em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    list-style: none;
    padding-inline-start: 0;
    li {
      padding: 0 20px 13px;
      position: relative;
      ul {
        background-color: var(--primary);
        margin: 0;
        padding: 0 0 0 1em;
        padding-inline-start: 0;
        display: flex;
        flex-direction: column;
        max-height: 0;
        min-width: 140px;
        /* transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.1s ease-in-out; */
        overflow: hidden;
        transition: max-height 200ms ease-in-out;
        position: absolute;
        top: 100%;
        left: 0;
        li {
          margin: 0;
          padding: 10px 20px;
          width: 100%;
          min-height: 50px;
        }
        li:hover {
          background-color: var(--primary-dark);
          a {
            display: block;
            color: white;
            width: 100%;
          }
        }
      }
    }
    li:hover {
      ul {
        max-height: 500px;
        /* transform: scaleY(1); */
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      transition: max-height 300ms ease-in;
      overflow: hidden;
    }
    a:hover {
      /* border-bottom: 2px solid var(--secondary-dark); */
      color: var(--primary-light);
    }
    ul.inactive {
      max-height: 0;
      * {
        display: none;
      }
    }
    ul.active {
      display: flex;
      max-height: 800px;
      position: absolute;
      top: 52;
      left: 0;
      flex-direction: column;
      background-color: var(--primary-dark);
      margin: 0;
      padding: 1em;
      z-index: 10;
      a + ul {
        margin-top: 1em;
      }
      li {
        margin-bottom: 1em;

        ul {
          background-color: transparent;
          max-height: initial;
          margin-left: 1em;
          position: relative;
          a:hover {
            color: var(--secondary-light);
          }
          li {
            margin-bottom: 0;
          }
        }
      }
    }

    .barContainer {
      margin-left: auto;
      padding: 12px;
      cursor: pointer;
      background-color: var(--primary);
      :hover {
        background-color: var(--primary-light);
      }
    }
    .barContainer:focus {
      outline: none;
    }
    .bars {
      background: white;
      display: inline-block;
      height: 3px;
      position: relative;
      width: 20px;
      top: 1px;
    }
    .bars:before,
    .bars:after {
      background: white;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.3s ease-out;
      width: 100%;
    }
    .bars:before {
      top: 7px;
    }
    .bars:after {
      bottom: 7px;
    }
  }
`;

function renderSublinks(x) {
  return (
    <ul>
      {x.map((sublink, j) => (
        <li key={j}>
          <Link
            to={sublink.slug}
            title={sublink.name}
            className={
              typeof window !== `undefined`
                ? window.location.pathname.replace(/\/$/, "") === sublink.slug
                  ? "currentPage"
                  : ""
                : null
            }
          >
            {sublink.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <TheNav>
      <div className="logo">
        <Link to="/" title="home">
          <StaticImage
            src="../images/logo-tomo-white-600.png"
            alt="logo"
            height={40}
          />
        </Link>
      </div>
      <ul className={menuState ? "active" : "inactive"}>
        {navlinks.map((navlink, i) => (
          <li
            key={i}
            className={
              typeof window !== `undefined`
                ? window.location.pathname.replace(/\/$/, "") ===
                  navlinks[i].slug
                  ? "currentPage"
                  : ""
                : null
            }
          >
            <Link to={navlinks[i].slug}>{navlinks[i].name}</Link>
            {navlinks[i].sublink ? renderSublinks(navlinks[i].sublink) : null}
          </li>
        ))}
      </ul>
      <div
        className="barContainer"
        onClick={clickHandler}
        onKeyDown={clickHandler}
        role="button"
        tabIndex={0}
      >
        <span className="bars"></span>
      </div>
    </TheNav>
  );
};

export default Header;
