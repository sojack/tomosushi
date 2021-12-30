import React, { useState } from "react";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import styled from "styled-components";
// import MenuItem from "../components/menuItem";

const MenuContainer = styled.div`
  .menuSection {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 1rem;
    padding: 0 1rem;
    margin-bottom: 3rem;
  }
  .sectionTitle {
    /* position: sticky; */
    top: 0;
    z-index: 5;
    background-color: var(--grey-dark);
    color: white;
    text-align: center;
    padding: 1rem;
    grid-column: 1/3;
  }
  .menuItem {
    display: flex;
    flex-direction: column;
    /* margin: 1rem 0; */
    background-color: #ffffff;
    padding-bottom: 1rem;
    padding-top: 1rem;
    border-radius: 1rem;
    box-shadow: 2px 2px 5px gray;
    overflow: hidden;
  }
  .menuOption {
    display: grid;
    margin: 1rem 1rem 0;
  }
  .menuOptionFour {
    grid-template-columns: 1fr 4fr 1fr 1fr;
  }
  .menuOptionThree {
    grid-template-columns: 4fr 1fr 1fr;
  }
  .menuOptionTwo {
    grid-template-columns: 4fr 1fr;
  }
  .menuImage {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
  .menuTitle {
    font-family: var(--titleFont);
    font-size: 1.4rem;
    text-align: center;
  }
  .optionSize {
    color: var(--primary-dark);
    font-weight: bold;
  }
  .optionPrice {
    text-align: right;
  }
  .optionQuant {
    text-align: right;
  }
  h3,
  p {
    text-align: center;
    grid-column: 1/3;
  }
  p {
    margin: -20px 0;
  }
  h3 {
    background-color: var(--primary);
    color: white;
    padding: 5px;
  }
  .menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3em;
    row-gap: 1rem;
    align-items: flex-start;
    /* max-width: 60em; */
    /* margin: 0 auto; */
    grid-column: 1 / span 2;
    padding: 0;
  }
  .price {
    text-align: right;
    em {
      margin-right: 1rem;
    }
  }
  .menu > li {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    margin: 0.7em 0;
    /* align-items: flex-end; */
  }
  ul.drinks {
    grid-template-columns: 1fr;
  }
  .menu > li.drink-01 {
    grid-template-columns: 20% 20% repeat(6, auto);
  }
  .menu > li.drink-02 {
    grid-template-columns: 60% repeat(2, 1fr);
  }
  .menu > li.drink-03 {
    grid-template-columns: 30% 30% repeat(2, 1fr);
  }
  .menu > li.drink-04 {
    grid-template-columns: 60% repeat(3, 1fr);
  }
  .menu > li.drink-05 {
    grid-template-columns: 60% 1fr;
  }

  li.drink-01 span:first-child {
    font-family: var(--titleFont);
  }
  li.drink-02 span:first-child {
    font-family: var(--titleFont);
  }
  li.drink-03 span:first-child {
    font-family: var(--titleFont);
  }
  li.drink-04 span:first-child {
    font-family: var(--titleFont);
  }
  li.drink-05 span:first-child {
    font-family: var(--titleFont);
  }
  .item-title {
    font-family: var(--titleFont);
    font-size: 1.4rem;
    grid-row: 1/2;
    text-transform: capitalize;
  }
  @media (max-width: 768px) {
    .menuSection {
      grid-template-columns: 1fr;
    }
    .menu {
      grid-template-columns: 1fr;
      grid-column: 1 / 2;
      margin: 0 auto;
    }
    .alacarte .price {
      min-width: 10em;
      grid-row: 1 / span2;
      white-space: nowrap;
    }
    .sectionTitle,
    h3,
    p {
      grid-column: 1/2;
    }
    .drinks {
      margin: 0;
      font-size: 10px;
    }
  }

  .active {
    display: block;
  }

  .inactive {
    display: none;
  }
`;

const FlyingMenuContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 100%;
  max-width: 300px;
  height: 70%;
  padding: 0 8px 10px;
  background-color: #f8f9fa;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
  z-index: 200;
  overflow: auto;
  background-color: var(--primary-dark);

  ul {
    width: 100%;
    height: 100%;
    margin-block-start: 0;
    padding: 8px 0 8px;
  }
  li {
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    font-family: var(--titleFont);
    margin-bottom: 8px;
    :hover {
      background-color: var(--grey-dark);
      a {
        color: white;
      }
    }
  }
  a {
    text-decoration: none;
    padding: 23px 0;
    height: 100%;
    color: var(--primary-dark);
  }
`;

const MenuNav = styled.div`
  padding-top: 2rem;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  li {
    font-family: var(--titleFont);
    padding: 0.5rem 1rem;
  }
  a {
    color: var(--primary);
  }

  a:hover {
    color: var(--primary-dark);
  }
`;

const TomoMenu = styled.div`
  text-transform: uppercase;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 100%;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-block-start: 0;
    padding-inline-start: 0;
    padding-top: 1rem;
  }
  li {
    display: inline-block;
  }
  a {
    text-decoration: none;
    padding: 5rem 0.7rem;
    color: white;
    font-size: 1.2rem;
  }
`;

const TopButton = styled.div`
  background-color: var(--primary-dark);
  color: white;
  display: block;
  position: fixed;
  right: 20px;
  bottom: 20px;
  text-align: center;
  padding: 1em 2em;
  border-radius: 6px;
  z-index: 100;
  cursor: pointer;
`;
const MenuMg = () => {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <Layout>
      <Seo title="menu" />
      <TomoMenu>
        <ul>
          <li>
            <a target="_parent" href="https://www.tomosushi.ca">
              home
            </a>
          </li>
          <li>
            <a target="_parent" href="https://www.tomosushi.ca/gallery.html">
              gallery
            </a>
          </li>
          <li>
            <a target="_parent" href="https://www.tomosushi.ca/contacts.html">
              contact
            </a>
          </li>
          <li>
            <a
              target="_parent"
              href="https://www.tomosushi.ca/mississauga-online.html"
            >
              order online
            </a>
          </li>
        </ul>
      </TomoMenu>

      <MenuNav id="top">
        <ul>
          <li>
            <a href="#partyTray">PARTY TRAY</a>
          </li>
          <li>
            <a href="#rollCombo">ROLL COMBINATION</a>
          </li>
          <li>
            <a href="#appetizers">APPETIZERS</a>
          </li>
          <li>
            <a href="#soup">SOUP</a>
          </li>
          <li>
            <a href="#salad">SALAD</a>
          </li>
          <li>
            <a href="#lunch">LUNCH</a>
          </li>
          <li>
            <a href="#rolls">ROLLS</a>
          </li>
          <li>
            <a href="#noodle">NOODLE</a>
          </li>
          <li>
            <a href="#dinner">DINNER</a>
          </li>
          <li>
            <a href="#alacarte">A LA CARTE</a>
          </li>
          <li>
            <a href="#drinks">DRINKS</a>
          </li>
          <li>
            <a href="#desserts">DESSERTS</a>
          </li>
        </ul>
      </MenuNav>
      <MenuContainer>
        <FlyingMenuContainer className={menuState ? "active" : "inactive"}>
          <ul>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#partyTray"
              >
                PARTY TRAY
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#rollCombo"
              >
                ROLL COMBINATION
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#appetizers"
              >
                APPETIZERS
              </a>
            </li>
            <li>
              <a onClick={clickHandler} onKeyDown={clickHandler} href="#soup">
                SOUP
              </a>
            </li>
            <li>
              <a onClick={clickHandler} onKeyDown={clickHandler} href="#salad">
                SALAD
              </a>
            </li>
            <li>
              <a onClick={clickHandler} onKeyDown={clickHandler} href="#lunch">
                LUNCH
              </a>
            </li>
            <li>
              <a onClick={clickHandler} onKeyDown={clickHandler} href="#rolls">
                ROLLS
              </a>
            </li>
            <li>
              <a onClick={clickHandler} onKeyDown={clickHandler} href="#noodle">
                NOODLE
              </a>
            </li>
            <li>
              <a onClick={clickHandler} onKeyDown={clickHandler} href="#dinner">
                DINNER
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#alacarte"
              >
                A LA CARTE
              </a>
            </li>
            <li>
              <a onClick={clickHandler} onKeyDown={clickHandler} href="#drinks">
                DRINKS
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#desserts"
              >
                DESSERTS
              </a>
            </li>
          </ul>
        </FlyingMenuContainer>
{/* –––––––––––––––– Party Tray –––––––––––––––– */}
<div className="menuSection">
          <h2 className="sectionTitle" id="partyTray">
            Party Tray
          </h2>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/partyTray/partyTray-1.jpg"
                alt="Sashimi"
              />
            </div>
            <div className="menuTitle">Sashimi</div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Small</span>
              <span className="optionDesc">25 pcs sashimi</span>
              <span className="optionQuant"></span>
              <span className="optionPrice">$40</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Medium</span>
              <span className="optionDesc">40 pcs sashimi</span>
              <span className="optionQuant"></span>
              <span className="optionPrice">$63</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Large</span>
              <span className="optionDesc">60 pcs sashimi</span>
              <span className="optionQuant"></span>
              <span className="optionPrice">$95</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/partyTray/partyTray-2.jpg"
                alt="Sushi &amp; Roll"
              />
            </div>
            <div className="menuTitle">Sushi &amp; Roll</div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Small</span>
              <span className="optionDesc">22 pcs sushi, 20 pcs roll</span>
              <span className="optionQuant">42 pcs</span>
              <span className="optionPrice">$58</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Medium</span>
              <span className="optionDesc">36 pcs sushi, 26 pcs roll</span>
              <span className="optionQuant">62 pcs</span>
              <span className="optionPrice">$86</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Large</span>
              <span className="optionDesc">50 pcs sushi, 32 pcs roll</span>
              <span className="optionQuant">82 pcs</span>
              <span className="optionPrice">$115</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/partyTray/partyTray-3.jpg"
                alt="Sushi, Sashimi &amp; Roll"
              />
            </div>
            <div className="menuTitle">Sushi, Sashimi &amp; Roll</div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Small</span>
              <span className="optionDesc">
                16 pcs sashimi, 12 pcs sushi, 14 pcs roll
              </span>
              <span className="optionQuant">42 pcs</span>
              <span className="optionPrice">$58</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Medium</span>
              <span className="optionDesc">
                32 pcs sashimi, 20 pcs sushi, 20 pcs roll
              </span>
              <span className="optionQuant">72 pcs</span>
              <span className="optionPrice">$100</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Large</span>
              <span className="optionDesc">
                42 pcs sashimi, 24 pcs sushi, 26 pcs roll
              </span>
              <span className="optionQuant">92 pcs</span>
              <span className="optionPrice">$127</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/partyTray/partyTray-4.jpg"
                alt="Chef's Choice Deluxe"
              />
            </div>
            <div className="menuTitle">Chef's Choice Deluxe Party Tray</div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Small</span>
              <span className="optionDesc">
                18 pcs sashimi, 14 pcs sushi, 8 pcs roll
              </span>
              <span className="optionQuant">40 pcs</span>
              <span className="optionPrice">$85</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Large</span>
              <span className="optionDesc">
                30 pcs sashimi, 20 pcs sushi, 14 pcs roll
              </span>
              <span className="optionQuant">64 pcs</span>
              <span className="optionPrice">$130</span>
            </div>
          </div>
        </div>
       {/* –––––––––––––––– Roll Combination –––––––––––––––– */}
       <div className="menuSection">
          <h2 className="sectionTitle" id="rollCombo">
            Roll Combination
          </h2>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rCombo/MomentSet.jpg"
                alt="Moments Set"
              />
            </div>
            <div className="menuTitle">Moments Set</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                6 pcs California, 4 pcs dynamite, 4 pcs spider
              </span>
              <span className="optionQuant">14 pcs</span>
              <span className="optionPrice">$20</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rCombo/Spicyrollset.jpg"
                alt="Spicy Roll Set"
              />
            </div>
            <div className="menuTitle">Spicy Roll Set</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                Spicy salmon, spicy tuna, Spicy dynamite roll
              </span>
              <span className="optionQuant">20 pcs</span>
              <span className="optionPrice">$31</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rCombo/VeggieCombo.jpg"
                alt="Veggie Combo"
              />
            </div>
            <div className="menuTitle">Veggie Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                Green field, yam tempura, avocado, kappa, asparagus roll
              </span>
              <span className="optionQuant">32 pcs</span>
              <span className="optionPrice">$34</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rCombo/LoveSalmonSet.jpg"
                alt="Love Salmon Set"
              />
            </div>
            <div className="menuTitle">Love Salmon Set</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                5 pcs sashimi, 4 pcs sushi, salmon roll, salmon hand roll,
                salmon avocado roll
              </span>
              <span className="optionQuant">23 pcs</span>
              <span className="optionPrice">$37</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rCombo/PopularCombo.jpg"
                alt="Popular Combo"
              />
            </div>
            <div className="menuTitle">Popular Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                California, dynamite, fire, spicy salmon, yam tempura roll
              </span>
              <span className="optionQuant">32 pcs</span>
              <span className="optionPrice">$44</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rCombo/SpicyCombo.jpg"
                alt="Spicy Combo"
              />
            </div>
            <div className="menuTitle">Spicy Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                Spicy California, spicy salmon, spicy tuna, spicy yam, spicy
                dynamite roll
              </span>
              <span className="optionQuant">32 pcs</span>
              <span className="optionPrice">$46</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rCombo/DragonTrio.jpg"
                alt="Dragon Trio"
              />
            </div>
            <div className="menuTitle">Dragon Trio</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                Red dragon, black dragon, green dragon roll
              </span>
              <span className="optionQuant">24 pcs</span>
              <span className="optionPrice">$47</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rCombo/BigCombo.jpg"
                alt="Big Combo"
              />
            </div>
            <div className="menuTitle">Big Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                Dynamite, spider, fire, crunch spicy salmon, California, spicy
                salmon roll
              </span>
              <span className="optionQuant">42 pcs</span>
              <span className="optionPrice">$64</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rCombo/TomoDeluxeCombo.jpg"
                alt="Tomo Deluxe Combo"
              />
            </div>
            <div className="menuTitle">Tomo Deluxe Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                Richmond Hill, Tomo, Vege Dragon, Russian Roulette, Salmon
                avocado
              </span>
              <span className="optionQuant">38 pcs</span>
              <span className="optionPrice">$70</span>
            </div>
          </div>
        </div>
 {/* –––––––––––––––– Appetizers –––––––––––––––– */}
 <div className="menuSection">
          <h2 className="sectionTitle" id="appetizers">
            Appetizers
          </h2>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/003-AgedashiTofu-.jpg"
                alt="Agedashi Tofu"
              />
            </div>
            <div className="menuTitle">Agedashi Tofu</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                4 pcs Deep-fried tofu, teriyaki sauce
              </span>
              <span className="optionPrice">$7</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/002-Edamame.jpg"
                alt="Edamame"
              />
            </div>
            <div className="menuTitle">Edamame</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Japanese soy bean</span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/004-VeggieGyoza.jpg"
                alt="Gyoza"
              />
            </div>
            <div className="menuTitle">Gyoza</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs Deep-fried vegetable or beef dumpling
              </span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/005-Harumaki.jpg"
                alt="Harumaki"
              />
            </div>
            <div className="menuTitle">Harumaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                5 pcs Deep-fried vegetable spring roll
              </span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/006-EbiShumai.jpg"
                alt="Ebi Shumai"
              />
            </div>
            <div className="menuTitle">Ebi Shumai</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">6 pcs Steamed shrimp dumpling</span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/Beef-Sashimi-App-BIMG3575.jpg"
                alt="Beef Sashimi"
              />
            </div>
            <div className="menuTitle">Beef Sashimi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Sliced raw beef, ponzu sauce</span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/019-SashimiAppetizer.jpg"
                alt="Sashimi Appetizer"
              />
            </div>
            <div className="menuTitle">Sashimi Appetizer</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs Chef choice assorted sashimi
              </span>
              <span className="optionPrice">$12</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/018-SalmonSashimiAppetizer.jpg"
                alt="Salmon Sashimi Appetizer"
              />
            </div>
            <div className="menuTitle">Salmon Sashimi Appetizer</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">6 pcs Salmon sashimi</span>
              <span className="optionPrice">$13</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/017-SushiAppetizer.jpg"
                alt="Sushi Appetizer"
              />
            </div>
            <div className="menuTitle">Sushi Appetizer</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                4 pcs Chef choice assorted sushi
              </span>
              <span className="optionPrice">$9</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/020-TunaSushiPizza.jpg"
                alt="Sushi Pizza"
              />
            </div>
            <div className="menuTitle">Sushi Pizza</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc"></span>
              <span className="optionPrice">Salmon</span>
              <span className="optionPrice">$11</span>
              <span></span>
              <span className="optionPrice">Avocado</span>
              <span className="optionPrice">$10</span>
              <span></span>
              <span className="optionPrice">Tuna</span>
              <span className="optionPrice">$12</span>
              <span></span>
              <span className="optionPrice">Crab Salad</span>
              <span className="optionPrice">$11</span>
              <span>* spicy pizza add $1</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/2021-12-16-Tomo-036.jpg"
                alt="Tomo Tartare"
              />
            </div>
            <div className="menuTitle">Tomo Tartare</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
              Tuna or Salmon, avocado, tartare sauce
              </span>
              <span className="optionPrice">Salmon</span>
              <span className="optionPrice">$13</span>
              <span></span>
              <span className="optionPrice">Tuna</span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          {/* <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/2021-12-16-Tomo-017.jpg"
                alt="Hakko Sushi"
              />
            </div>
            <div className="menuTitle">Hakko Sushi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Torched fish on sushi rice with unagi sauce, furikake, tobiko, scallion. **** spicy add $1</span>
              <span></span>
              <span className="optionPrice">Salmon</span>
              <span className="optionPrice">$13</span>
              <span className="optionPrice">Tuna</span>
              <span className="optionPrice">$14</span>
              <span className="optionPrice">Rainbow (Assorted fish)</span>
              <span className="optionPrice">$15</span>
              <span className="optionPrice">Bluefin tuna</span>
              <span className="optionPrice">$20</span>

            </div>
          </div> */}
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/2021-12-16-Tomo-028.jpg"
                alt="Tomo Tataki"
              />
            </div>
            <div className="menuTitle">Tomo Tataki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
              Seared fish with yuzu ponzu, scallion, garlic oil
              </span>
              <span></span>
              <span className="optionPrice">Salmon</span>
              <span className="optionPrice">$15</span>
              <span className="optionPrice">Tuna</span>
              <span className="optionPrice">$18</span>
              <span className="optionPrice">Bluefin tuna</span>
              <span className="optionPrice">$25</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/2021-12-16-Tomo-035.jpg"
                alt="Tomo Carpaccio"
              />
            </div>
            <div className="menuTitle">Tomo Carpaccio</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
              Thinly sliced fish with arugula, grape tomato, yuzu vinaigrette, mustard, wasabi mayo, ponzu sauce
              </span>
              <span></span>
              <span className="optionPrice">Salmon</span>
              <span className="optionPrice">$15</span>
              <span className="optionPrice">Seabass</span>
              <span className="optionPrice">$16</span>
              <span className="optionPrice">Scallop</span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/2021-12-16-Tomo-004.jpg"
                alt="Loli loli"
              />
            </div>
            <div className="menuTitle">Loli loli</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
              4pcs Smoked salmon, Cream cheese, asparagus, garlic mayo sauce 
              </span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
          {/* <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/021-Aburisushi.jpg"
                alt="Aburi Sushi"
              />
            </div>
            <div className="menuTitle">Aburi Sushi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Kansai style box sushi with seared fish with garlic sauce
              </span>
              <span className="optionPrice">$13</span>
            </div>
          </div> */}
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/Shime-saba-app-BIMG3664.jpg"
                alt="Shime Saba"
              />
            </div>
            <div className="menuTitle">Shime Saba</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">7 pcs Seared mackerel, tataki sauce</span>
              <span className="optionPrice">$12</span>
            </div>
          </div>
          {/* <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/TunaTataki-BIMG3824.jpg"
                alt="Tuna Tataki"
              />
            </div>
            <div className="menuTitle">Tuna Tataki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Seared tuna, garden salad, tataki sauce
              </span>
              <span className="optionPrice">$13</span>
            </div>
          </div> */}
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/007-VeggieTempuraAppetizer.jpg"
                alt="Vegetable Tempura"
              />
            </div>
            <div className="menuTitle">Vegetable Tempura</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">7 pieces assorted vegetable</span>
              <span className="optionPrice">$10</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/008-ShrimpwithVegetableTempuraAppetizer.jpg"
                alt="Shrimp Tempura With Vegetables"
              />
            </div>
            <div className="menuTitle">Shrimp Tempura With Vegetables</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                2 pieces shrimp, 5 pieces vegetable
              </span>
              <span className="optionPrice">$13</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/001-ShrimpTempuraAppetizer.jpg"
                alt="Shrimp Tempura"
              />
            </div>
            <div className="menuTitle">Shrimp Tempura</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">6 pcs shrimp</span>
              <span className="optionPrice">$16</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/009-LobsterTempuraAppetizer.jpg"
                alt="Lobster Tempura"
              />
            </div>
            <div className="menuTitle">Lobster Tempura</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                2 pcs 4oz lobster, 5 pieces vegetable
              </span>
              <span className="optionPrice">$20</span>
            </div>
          </div>

          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/010-FriedCalamari.jpg"
                alt="Fried Calamari"
              />
            </div>
            <div className="menuTitle">Fried Calamari</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Deep-fried squid-rings</span>
              <span className="optionPrice">$13</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/011-BeefEnoki.jpg"
                alt="Beef Enoki Mushroom"
              />
            </div>
            <div className="menuTitle">Beef Enoki Mushroom</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Deep-fried enoki mushroom rolled with rib eye beef, teriyaki
                sauce
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/012-ChickenKatsuAppetizer.jpg"
                alt="Chicken Katsu"
              />
            </div>
            <div className="menuTitle">Chicken Katsu</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Deep-fried breaded chicken, katsu sauce
              </span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/013-LAKalbiAppetizer.jpg"
                alt="L.A. Kalbi"
              />
            </div>
            <div className="menuTitle">L.A. Kalbi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Marinated beef short ribs</span>
              <span className="optionPrice">$19</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/014-BlackCodMisoyaki.jpg"
                alt="Black Cod Miso Yaki"
              />
            </div>
            <div className="menuTitle">Black Cod Miso Yaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Grilled black cod marinated with miso base sauce with unagi
                sauce on top
              </span>
              <span className="optionPrice">$24</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/015-SalmonKama.jpg"
                alt="Salmon Kama"
              />
            </div>
            <div className="menuTitle">Salmon Kama</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Grilled salmon neck</span>
              <span className="optionPrice">$10</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/016-HamachiKama.jpg"
                alt="Hamachi Kama"
              />
            </div>
            <div className="menuTitle">Hamachi Kama</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Grilled hamachi neck</span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
        </div>
        {/* –––––––––––––––– Soup –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="soup">
            Soup
          </h2>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/soup/001-MisoSoup.jpg"
                alt="Miso Soup"
              />
            </div>
            <div className="menuTitle">Miso Soup</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Healthy soy bean paste soup</span>
              <span className="optionPrice">$3</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/soup/002-WontonSoup.jpg"
                alt="Wonton Soup"
              />
            </div>
            <div className="menuTitle">Wonton Soup</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Vegetable dumpling soup with egg
              </span>
              <span className="optionPrice">$5</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/soup/003-ShiitakeMushroomSoup.jpg"
                alt="Shiitake Mushroom Soup"
              />
            </div>
            <div className="menuTitle">Shiitake Mushroom Soup</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Assorted mushroom, vegetable in miso base soup
              </span>
              <span className="optionPrice">$7</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/soup/005-SeafoodSoup.jpg"
                alt="Seafood Soup"
              />
            </div>
            <div className="menuTitle">Seafood Soup</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Assorted seafood in miso base soup
              </span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/soup/004-LobsterSoup.jpg"
                alt="Lobster Soup"
              />
            </div>
            <div className="menuTitle">Lobster Soup</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">2oz lobster in miso base soup</span>
              <span className="optionPrice">$11</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/soup/006-SteamedRice.jpg"
                alt="Steamed Rice"
              />
            </div>
            <div className="menuTitle">Steamed Rice</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc"></span>
              <span className="optionPrice">$2</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/soup/007-BrownRice.jpg"
                alt="Brown Rice"
              />
            </div>
            <div className="menuTitle">Brown Rice</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc"></span>
              <span className="optionPrice">$3</span>
            </div>
          </div>
        </div>
        {/* –––––––––––––––– Salad –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="salad">
            Salad
          </h2>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/salad/001-GardenSalad.jpg"
                alt="Garden Salad"
              />
            </div>
            <div className="menuTitle">Garden Salad</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">House green salad</span>
              <span className="optionPrice">$5</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/salad/002-KaisoSalad.jpg"
                alt="Kaiso Salad"
              />
            </div>
            <div className="menuTitle">Kaiso Salad</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Seasoned seaweed salad</span>
              <span className="optionPrice">$7</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/salad/003-AvocadoSalad.jpg"
                alt="Avocado Salad"
              />
            </div>
            <div className="menuTitle">Avocado Salad</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Avocado slices on garden salad</span>
              <span className="optionPrice">$7</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/salad/004-SunomonoSalad.jpg"
                alt="Sunomono Salad"
              />
            </div>
            <div className="menuTitle">Sunomono Salad</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Shrimp, tako, crab meat, seaweed, cucumber, sunomono sauce
              </span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/salad/005-KaniSalad.jpg"
                alt="Kani Salad"
              />
            </div>
            <div className="menuTitle">Kani Salad</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Crab meat, Japanese mayo, masago, cucumber
              </span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/salad/001-Spicy-Sashimi-salad.jpg"
                alt="Spicy Sashimi Salad"
              />
            </div>
            <div className="menuTitle">Spicy Sashimi Salad</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Assorted sashimi, garden salad, chojang, sesame seed
              </span>
              <span className="optionPrice">$12</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/salad/2021-12-16-Tomo-039.jpg"
                alt="Asian pear &amp; Bulgogi salad"
              />
            </div>
            <div className="menuTitle">Asian pear &amp; Bulgogi salad</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
              Asian pear &amp; bulgogi with arugula, tomato, yuzu vinaigrette, wasabi mayo
              </span>
              <span className="optionPrice">$16</span>
            </div>
          </div>
        </div>
        {/* –––––––––––––––– Lunch –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="lunch">
            Lunch Menu
          </h2>
          <p>
            11:30 am to 3 pm
          </p>
          <h3>Donburi Lunch</h3>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/002-ChickenDonburi.jpg"
                alt="Chicken Donburi"
              />
            </div>
            <div className="menuTitle">Chicken Donburi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Chicken, egg &amp; vegetables on a bowl of rice
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/001-ChickenKatsuDonburi.jpg"
                alt="Chicken Katsu Donburi"
              />
            </div>
            <div className="menuTitle">Chicken Katsu Donburi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Deep fried chicken, egg &amp; vegetables on a bowl of rice
              </span>
              <span className="optionPrice">$19</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/003-BeefDonburi.jpg"
                alt="Beef Donburi"
              />
            </div>
            <div className="menuTitle">Beef Donburi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Beef, egg &amp; vegetables on a bowl of rice
              </span>
              <span className="optionPrice">$20</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/004-UnagiDonburi.jpg"
                alt="Unagi Donburi"
              />
            </div>
            <div className="menuTitle">Unagi Donburi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                B.B.Q fresh water eel on a bowl of rice
              </span>
              <span className="optionPrice">$23</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/001-HaeDupPap.jpg"
                alt="Hae Dup Bap"
              />
            </div>
            <div className="menuTitle">Hae Dup Bap</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Assorted chopped raw fish &amp; vegetables, chojang
              </span>
              <span className="optionPrice">$20</span>
            </div>
          </div>
          <h3>Sashimi &amp; Sushi Lunch</h3>
          <p>Served with miso soup and salad</p>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchSashSush/002-Sashimilunchregular.jpg"
                alt="Sashimi Lunch Regular"
              />
            </div>
            <div className="menuTitle">Sashimi Lunch Regular</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">15 pcs assorted raw fish</span>
              <span className="optionPrice">$21</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchSashSush/001-SushiregulaA.jpg"
                alt="Sushi Lunch Regular A"
              />
            </div>
            <div className="menuTitle">Sushi Lunch Regular A</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs sushi, 6 pcs California roll
              </span>
              <span className="optionPrice">$19</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchSashSush/002-SushiregulaB.jpg"
                alt="Sushi Lunch Regular B"
              />
            </div>
            <div className="menuTitle">Sushi Lunch Regular B</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                10 pcs sushi, 8 pcs shrimp kappa roll
              </span>
              <span className="optionPrice">$24</span>
            </div>
          </div>
          
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchSashSush/001-Salmonsushilunch.jpg"
                alt="Salmon Sushi Lunch"
              />
            </div>
            <div className="menuTitle">Salmon Sushi Lunch</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                9 pcs salmon sushi &amp; 6 pcs salmon roll
              </span>
              <span className="optionPrice">$21</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchSashSush/003-SalmonsashimisushiRolllunch.jpg"
                alt="Salmon Sashimi, Sushi &amp; Roll Lunch"
              />
            </div>
            <div className="menuTitle">
              Salmon Sashimi, Sushi &amp; Roll Lunch
            </div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                5 pcs sashimi, 7 pcs sushi, 6 pcs salmon roll
              </span>
              <span className="optionPrice">$24</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchSashSush/004-SashimiSushilunchregular.jpg"
                alt="Sashimi &amp; Sushi Lunch Regular"
              />
            </div>
            <div className="menuTitle">Sashimi &amp; Sushi Lunch Regular</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">8 pcs sashimi, 6 pcs sushi</span>
              <span className="optionPrice">$21</span>
            </div>
          </div>
          
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchSashSush/001-Chirashi-LunchReg.jpg"
                alt="Chirashi Lunch Regular"
              />
            </div>
            <div className="menuTitle">Chirashi Lunch Regular</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                15 pcs assorted raw fish on sushi rice
              </span>
              <span className="optionPrice">$21</span>
            </div>
          </div>
          

          {/* ––––––– Roll Set  ––––––––– */}
          <h3>Roll Set Lunch</h3>
          <p>Served with miso soup and salad</p>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSet/005-MakisetlunchVeggie.jpg"
                alt="Maki Set Lunch Veggie"
              />
            </div>
            <div className="menuTitle">Maki Set Lunch Veggie</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs yam tempura, 6 pcs avocado, 6 pcs kappa roll
              </span>
              <span className="optionPrice">$16</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSet/001-MakisetlunchA.jpg"
                alt="Maki Set Lunch A"
              />
            </div>
            <div className="menuTitle">Maki Set Lunch A</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs California, 8 pcs dynamite roll
              </span>
              <span className="optionPrice">$16</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSet/002-MakisetlunchB.jpg"
                alt="Maki Set Lunch B"
              />
            </div>
            <div className="menuTitle">Maki Set Lunch B</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs spicy salmon, 6 pcs spicy tuna roll
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSet/004-MakisetlunchC.jpg"
                alt="Maki Set Lunch C"
              />
            </div>
            <div className="menuTitle">Maki Set Lunch C</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs California, 6 pcs salmon, 6 pcs avocado roll
              </span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSet/003-MakisetlunchD.jpg"
                alt="Maki Set Lunch D"
              />
            </div>
            <div className="menuTitle">Maki Set Lunch D</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs California, 8 pcs Green, Red or Black dragon roll
              </span>
              <span className="optionPrice">$20</span>
            </div>
          </div>
          {/* ––––––– Bento  ––––––––– */}
          <h3>Bento Box</h3>
          <p>Served with miso soup, salad and rice</p>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/bentoLunch/002-TofuTeriyakiLunch.jpg"
                alt="Tofu Teriyaki"
              />
            </div>
            <div className="menuTitle">Tofu Teriyaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Fried tofu, teriyaki sauce</span>
              <span className="optionPrice">$13</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/bentoLunch/001-TempuraLunch.jpg"
                alt="Tempura Lunch"
              />
            </div>
            <div className="menuTitle">Tempura Lunch</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Deep-fried shrimps and vegetables
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/bentoLunch/005-ChickenTeriyakiLunch.jpg"
                alt="Chicken Teriyaki"
              />
            </div>
            <div className="menuTitle">Chicken Teriyaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Grilled chicken breast, teriyaki sauce
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/bentoLunch/003-ChickenKatsuLunch.jpg"
                alt="Chicken Katsu"
              />
            </div>
            <div className="menuTitle">Chicken Katsu</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Breaded chicken white meat, katsu sauce
              </span>
              <span className="optionPrice">$16</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/bentoLunch/007-SalmonTeriyakiLunch.jpg"
                alt="Salmon Teriyaki"
              />
            </div>
            <div className="menuTitle">Salmon Teriyaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Grilled salmon, teriyaki sauce</span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/bentoLunch/008-BulgogiLunch.jpg"
                alt="Bul-Go-Gi Lunch"
              />
            </div>
            <div className="menuTitle">Bul-Go-Gi Lunch</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Stir fried sliced beef marinated in Tomo special sauce
              </span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/bentoLunch/006-BeefTeriyakiLunch.jpg"
                alt="Beef Teriyaki"
              />
            </div>
            <div className="menuTitle">Beef Teriyaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Grilled beef, teriyaki sauce</span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/bentoLunch/004-LAKalbiLunch.jpg"
                alt="Kal-Bi Lunch"
              />
            </div>
            <div className="menuTitle">Kal-Bi Lunch</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">B.B.Q beef short-ribs</span>
              <span className="optionPrice">$20</span>
            </div>
          </div>
          {/* ––––––– Lunch Combo  ––––––––– */}
          <h3>Lunch Combo</h3>
          <p>served with miso soup, garden salad &amp; rice</p>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchCombo/001-TofuTeriyakiComboLunch.jpg"
                alt="Tofu Combo"
              />
            </div>
            <div className="menuTitle">Tofu Combo</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                No rice Tofu teriyaki, 6 pcs Kappa roll, 6 pcs veggie tempura
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchCombo/003-ChickenTeriyakiLunchCombo.jpg"
                alt="Teriyaki Combo"
              />
            </div>
            <div className="menuTitle">Teriyaki Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                3 pcs California roll with shrimp &amp; veggie tempura
              </span>
              <span className="optionQuant">Chicken</span>
              <span className="optionPrice">$18</span>
              <span></span>
              <span className="optionQuant">Salmon</span>
              <span className="optionPrice">$19</span>
              <span></span>
              <span className="optionQuant">Beef</span>
              <span className="optionPrice">$22</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchCombo/001-KalbiLunchCombo.jpg"
                alt="Bul-Go-Gi Or Kalbi Combo"
              />
            </div>
            <div className="menuTitle">Bul-Go-Gi Or Kalbi Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                3 pcs California roll with shrimp &amp; veggie tempura
              </span>
              <span className="optionQuant">Bul-go-gi</span>
              <span className="optionPrice">$18</span>
              <span></span>
              <span className="optionQuant">Kalbi</span>
              <span className="optionPrice">$23</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchCombo/005-SashimiComboLunch.jpg"
                alt="Sashimi Combo"
              />
            </div>
            <div className="menuTitle">Sashimi Combo</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                No rice 5 pcs salmon sashimi, 4 pcs sushi, 6cps California,
                shrimp &amp; veggie tempura
              </span>
              <span className="optionPrice">$23</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/lunchCombo/002-UdonComboLunch.jpg"
                alt="Udon Combo"
              />
            </div>
            <div className="menuTitle">Udon Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                Udon noodle soup with 6 pcs California roll
              </span>
              <span className="optionQuant">Veggie </span>
              <span className="optionPrice">$17</span>
              <span></span>
              <span className="optionQuant">Chicken</span>
              <span className="optionPrice">$19</span>
              <span></span>
              <span className="optionQuant">Beef</span>
              <span className="optionPrice">$20</span>
            </div>
          </div>
        </div>
        {/* –––––––––––––––– Rolls –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="rolls">
            Rolls
          </h2>
          <h3>Basic Rolls</h3>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/002-Californiaroll.jpg"
                alt="California Roll"
              />
            </div>
            <div className="menuTitle">California Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (6 pcs) Avocado, crab meat, cucumber, masago
              </span>
              <span className="optionPrice">$7</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/001-Salmonroll.jpg"
                alt="Salmon Roll"
              />
            </div>
            <div className="menuTitle">Salmon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">(6 pcs)</span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/002-SpicySalmonroll.jpg"
                alt="Spicy Salmon Roll"
              />
            </div>
            <div className="menuTitle">Spicy Salmon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (6 pcs) Tempura bits, salmon, spicy mayo
              </span>
              <span className="optionPrice">$9</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/Tunaroll.jpg"
                alt="Tuna Roll"
              />
            </div>
            <div className="menuTitle">Tuna Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">(6 pcs)</span>
              <span className="optionPrice">$9</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/001-SpicyTunaroll.jpg"
                alt="Spicy Tuna Roll"
              />
            </div>
            <div className="menuTitle">Spicy Tuna Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (6 pcs) Tempura bits, tuna, spicy mayo
              </span>
              <span className="optionPrice">$10</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/002-Tamagoroll.jpg"
                alt="Tamago Roll"
              />
            </div>
            <div className="menuTitle">Tamago Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">(6 pcs) Egg omelette</span>
              <span className="optionPrice">$7</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/001-Crabmeatroll.jpg"
                alt="Crab Meat Roll"
              />
            </div>
            <div className="menuTitle">Crab Meat Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">(6 pcs)</span>
              <span className="optionPrice">$7</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/002-ShrimpKapparoll.jpg"
                alt="Shrimp Kappa Roll"
              />
            </div>
            <div className="menuTitle">Shrimp Kappa Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (8 pcs) Shrimp tempura, cucumber, unagi sauce
              </span>
              <span className="optionPrice">$9</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/001-SalmonAvocadoroll.jpg"
                alt="Salmon Avocado Roll"
              />
            </div>
            <div className="menuTitle">Salmon Avocado Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">(6 pcs) Salmon, avocado</span>
              <span className="optionPrice">$9</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/002-Philadelphiaroll.jpg"
                alt="Philadelphia Roll"
              />
            </div>
            <div className="menuTitle">Philadelphia Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (6 pcs) Cream cheese, scallion, smoked salmon
              </span>
              <span className="optionPrice">$10</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/001-Unagiroll.jpg"
                alt="Unagi Roll"
              />
            </div>
            <div className="menuTitle">Unagi Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">(6 pcs) BBQ eel, cucumber</span>
              <span className="optionPrice">$11</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/002-NegiHamachiroll.jpg"
                alt="Negi Hamachi Roll"
              />
            </div>
            <div className="menuTitle">Negi Hamachi Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">(6 pcs) Hamachi, scallion</span>
              <span className="optionPrice">$12</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/NegiOtoroRoll.jpg"
                alt="Negi Otoro Roll"
              />
            </div>
            <div className="menuTitle">Negi Otoro Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">(6 pcs) Otoro, scallion</span>
              <span className="optionPrice">$16</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/002-Chickenroll.jpg"
                alt="Chicken Roll"
              />
            </div>
            <div className="menuTitle">Chicken Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (8 pcs) Chicken, cucumber, avocado, unagi sauce
              </span>
              <span className="optionPrice">$11</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/001-Dynamiteroll.jpg"
                alt="Dynamite Roll"
              />
            </div>
            <div className="menuTitle">Dynamite Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (8 pcs) Shrimp tempura, avocado, cucumber, masago, unagi sauce
              </span>
              <span className="optionPrice">$13</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/001-Futoroll.jpg"
                alt="Futo Roll"
              />
            </div>
            <div className="menuTitle">Futo Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (8 pcs) Crab meat, cucumber, shiitake mushroom, pickled radish,
                tamago, kampyo
              </span>
              <span className="optionPrice">$12</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/001-Spiderroll.jpg"
                alt="Spider Roll"
              />
            </div>
            <div className="menuTitle">Spider Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (8 pcs) Soft-shell crab tempura, avocado, cucumber, masago,
                unagi sauce
              </span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
          {/* <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollBasic/001-Kalbiroll.jpg"
                alt="Kalbi Roll"
              />
            </div>
            <div className="menuTitle">Kalbi Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (6 pcs) Kalbi, avocado, cucumber, crab meat, masago, unagi sauce
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div> */}
          {/* ––––––– Veggie Roll  ––––––––– */}
          <h3>Veggie Rolls</h3>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollVeg/001-Avocadoroll.jpg"
                alt="Avocado Roll"
              />
            </div>
            <div className="menuTitle">Avocado Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">6 pcs</span>
              <span className="optionPrice">$7</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollVeg/002-Kapparoll.jpg"
                alt="Kappa Roll"
              />
            </div>
            <div className="menuTitle">Kappa Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">6 pcs Cucumber</span>
              <span className="optionPrice">$6</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollVeg/001-Asparagusroll.jpg"
                alt="Asparagus Roll"
              />
            </div>
            <div className="menuTitle">Asparagus Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">6 pcs</span>
              <span className="optionPrice">$6</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollVeg/001-Yamtempuraroll.jpg"
                alt="Yam Tempura Roll"
              />
            </div>
            <div className="menuTitle">Yam Tempura Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">6 pcs</span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollVeg/001-AvoKapparoll.jpg"
                alt="Avo Kappa Roll"
              />
            </div>
            <div className="menuTitle">Avo Kappa Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">6 pcs Avocado, cucumber</span>
              <span className="optionPrice">$7</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollVeg/001-AACroll.jpg"
                alt="AAC Roll"
              />
            </div>
            <div className="menuTitle">AAC Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs Asparagus, avocado, cucumber
              </span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollVeg/001-Avocadocrunchroll.jpg"
                alt="Avocado Crunch Roll"
              />
            </div>
            <div className="menuTitle">Avocado Crunch Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Tempura bits, mayo, avocado
              </span>
              <span className="optionPrice">$10</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollVeg/001-GreenFieldroll.jpg"
                alt="Green Field Roll"
              />
            </div>
            <div className="menuTitle">Green Field Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Lettuce, avocado, cucumber, shiitake mushroom, kampyo
              </span>
              <span className="optionPrice">$11</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollVeg/001-VeggieDragonroll.jpg"
                alt="Veggie Dragon Roll"
              />
            </div>
            <div className="menuTitle">Veggie Dragon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Deep fried yam on avocado, cucumber, asparagus, deep fried
                butter squash
              </span>
              <span className="optionPrice">$13</span>
            </div>
          </div>
          {/* ––––––– Contemporary Rolls  ––––––––– */}
          <h3>Contemporary Rolls</h3>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/001-Fireroll.jpg"
                alt="Fire Roll"
              />
            </div>
            <div className="menuTitle">Fire Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs Deep fried roll with crab meat, avocado, cucumber, masago,
                ebi, cream cheese
              </span>
              <span className="optionPrice">$11</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/001-Spicybeefroll.jpg"
                alt="Spicy Beef Roll"
              />
            </div>
            <div className="menuTitle">Spicy Beef Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs Rib-eye beef, spicy mayo, tempura bits
              </span>
              <span className="optionPrice">$12</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/001-ParadiseinTorontoroll.jpg"
                alt="Paradise In Toronto"
              />
            </div>
            <div className="menuTitle">Paradise In Toronto</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs Salmon, crab meat, avocado, cream cheese, tobiko, rice
                wrapped with cucumber
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/Gotrainroll.jpg"
                alt="Go Train Roll"
              />
            </div>
            <div className="menuTitle">Go Train Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Deep fried salmon-topped avocado roll, unagi sauce
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/CrunchSpicySalmonroll.jpg"
                alt="Crunch Spicy Salmon Roll"
              />
            </div>
            <div className="menuTitle">Crunch Spicy Salmon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Chunk Salmon, cucumber, lettuce, tempura bits and spicy
                sauce.
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/AngrySalmonroll.jpg"
                alt="Angry Salmon Roll"
              />
            </div>
            <div className="menuTitle">Angry Salmon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Deep fried roll with spicy salmon, avocado and banana
                pepper
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/BakeScalloproll.jpg"
                alt="Baked Scallop Roll"
              />
            </div>
            <div className="menuTitle">Baked Scallop Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                6 pcs Scallop, mushroom, scallion on top of California roll with
                special sauce
              </span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/WOWroll.jpg"
                alt="WOW Roll"
              />
            </div>
            <div className="menuTitle">WOW Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Seared fish mixed with wasabi sauce on top of shrimp kappa
                roll
              </span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/TTroll.jpg"
                alt="T.T Roll"
              />
            </div>
            <div className="menuTitle">T.T Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
              8 pcs Tuna, tomato, masago, garlic sauce on dynamite
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/Seanpongroll.jpg"
                alt="app"
              />
            </div>
            <div className="menuTitle">Sean Pong Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (No Rice) 8 pcs Rice paper roll with spicy tuna, unagi, avocado,
                cucumber, masago, radish
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollCont/PEIroll.jpg"
                alt="P.E.I Roll"
              />
            </div>
            <div className="menuTitle">P.E.I Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Lobster tempura, avocado, cucumber, masago
              </span>
              <span className="optionPrice">$21</span>
            </div>
          </div>
          {/* ––––––– Signature Rolls  ––––––––– */}
          <h3>Signature Rolls</h3>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Greendragonroll.jpg"
                alt="Green Dragon Roll"
              />
            </div>
            <div className="menuTitle">Green Dragon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Avocado on shrimp tempura, avocado, cucumber
              </span>
              <span className="optionPrice">$16</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Blackdragonroll.jpg"
                alt="Black Dragon Roll"
              />
            </div>
            <div className="menuTitle">Black Dragon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">8 pcs Eel, avocado on dynamite</span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Reddragonroll.jpg"
                alt="Red Dragon Roll"
              />
            </div>
            <div className="menuTitle">Red Dragon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Salmon, avocado on dynamite
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/GoldDragon.jpg"
                alt="Gold Dragon Roll"
              />
            </div>
            <div className="menuTitle">Gold Dragon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Torched albacore tuna on dynamite with garlic sauce,
                scallion
              </span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Whitedragonroll.jpg"
                alt="White Dragon Roll"
              />
            </div>
            <div className="menuTitle">White Dragon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Torched scallop on top of dynamite with garlic sauce,
                scallion
              </span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Rainbowdragonroll.jpg"
                alt="Rainbow Dragon Roll"
              />
            </div>
            <div className="menuTitle">Rainbow Dragon Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Assorted fish on dynamite
              </span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Rockyroll.jpg"
                alt="Rocky Roll"
              />
            </div>
            <div className="menuTitle">Rocky Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Spicy salmon, tempura bit, on California roll
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Caterpillarroll.jpg"
                alt="Caterpillar Roll"
              />
            </div>
            <div className="menuTitle">Caterpillar Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">8 pcs Avocado on unagi roll</span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Rainbowroll.jpg"
                alt="Rainbow Roll"
              />
            </div>
            <div className="menuTitle">Rainbow Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs 7 assorted fish on California roll
              </span>
              <span className="optionPrice">$15</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Kamikazeroll.jpg"
                alt="Kamikaze Roll"
              />
            </div>
            <div className="menuTitle">Kamikaze Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Avocado on spicy tuna roll
              </span>
              <span className="optionPrice">$14</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Sugarmamaroll.jpg"
                alt="Sugar Mama Roll"
              />
            </div>
            <div className="menuTitle">Sugar Mama Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Torched white tuna on scallop, tempura bits, mayo roll
              </span>
              <span className="optionPrice">$16</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Himalayaroll.jpg"
                alt="Himalaya"
              />
            </div>
            <div className="menuTitle">Himalaya</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Seared escola on dynamite, garlic sauce, scallion
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Orangevilleroll.jpg"
                alt="Orangeville Roll"
              />
            </div>
            <div className="menuTitle">Orangeville Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Spicy scallop in California roll topped with salmon
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Russianrouletteroll.jpg"
                alt="Russian Roulette Roll"
              />
            </div>
            <div className="menuTitle">Russian Roulette Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Spicy salmon, jalapeño on spicy banana pepper, avocado
                roll
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/LasVegasroll.jpg"
                alt="Las Vegas Roll"
              />
            </div>
            <div className="menuTitle">Las Vegas Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Tuna, salmon, avocado on dynamite, cream cheese roll
              </span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Crispybeefroll.jpg"
                alt="Crispy Beef Roll"
              />
            </div>
            <div className="menuTitle">Crispy Beef Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Sirloin beef, leek on avocado, lettuce, cucumber,
                deep-fried mushroom roll, tataki sauce
              </span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Hawaiianvolcanoroll.jpg"
                alt="Hawaiian Volcano"
              />
            </div>
            <div className="menuTitle">Hawaiian Volcano</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Smoked salmon on dynamite, garlic sauce, scallion and
                spicy mayo
              </span>
              <span className="optionPrice">$19</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/Tomoroll.jpg"
                alt="Tomo Roll"
              />
            </div>
            <div className="menuTitle">Tomo Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Spicy salmon, eel, avocado, jalapeño on dynamite
              </span>
              <span className="optionPrice">$19</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/MississaugaSalmonRoll.jpg"
                alt="Mississauga Roll"
              />
            </div>
            <div className="menuTitle">Mississauga Roll</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                8 pcs (no rice) Rice paper with salmon or tuna, avocado,
                cucumber, spring mix, crab meat, tataki sauce on top
              </span>
              <span className="optionQuant">Salmon</span>
              <span className="optionPrice">$14</span>
              <span />
              <span className="optionQuant">Tuna</span>
              <span className="optionPrice">$15</span>
            </div>
          </div>{" "}
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/rollSig/RichmondHillroll.jpg"
                alt="Richmond Hill Roll"
              />
            </div>
            <div className="menuTitle">Richmond Hill Roll</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Torched crab salad on top of spicy salmon, shrimp,
                avocado, leek with unagi sauce, spicy mayo
              </span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
        </div>
        {/* –––––––––––––––– Noodle –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="noodle">
            Noodle
          </h2>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/noodle/HouseCrunchNoodleSoup.jpg"
                alt="House Crunch Noodle Soup "
              />
            </div>
            <div className="menuTitle">House Crunch Noodle Soup </div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">(Take-Out Only)</span>
              <span className="optionPrice">$9</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/noodle/VegetableUdon.jpg"
                alt="Vegetable Udon"
              />
            </div>
            <div className="menuTitle">Vegetable Udon</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Vegetable noodle soup</span>
              <span className="optionPrice">$13</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/noodle/ChickenUdon.jpg"
                alt="Chicken Udon"
              />
            </div>
            <div className="menuTitle">Chicken Udon</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Chicken noodle soup</span>
              <span className="optionPrice">$16</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/noodle/BeefUdon.jpg"
                alt="Beef Udon"
              />
            </div>
            <div className="menuTitle">Beef Udon</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Beef noodle soup</span>
              <span className="optionPrice">$17</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/noodle/SpicySeafoodUdon.jpg"
                alt="Spicy Seafood Udon"
              />
            </div>
            <div className="menuTitle">Spicy Seafood Udon</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Spicy seafood noodle soup</span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/noodle/NabeyakiUdon.jpg"
                alt="Nabeyaki Udon"
              />
            </div>
            <div className="menuTitle">Nabeyaki Udon</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Seafood noodle soup in hot pot</span>
              <span className="optionPrice">$19</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/noodle/ShrimpTempuraUdon.jpg"
                alt="Shrimp Tempura Udon"
              />
            </div>
            <div className="menuTitle">Shrimp Tempura Udon</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Vegetable noodle soup, shrimp &amp; vegetable tempura
              </span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/noodle/Yakisoba.jpg"
                alt="Yaki Soba"
              />
            </div>
            <div className="menuTitle">Yaki Soba</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">Pan-fried egg noodle</span>
              <span className="optionQuant">Veggie</span>
              <span className="optionPrice">$14</span>
              <span></span>
              <span className="optionQuant">chicken or beef</span>
              <span className="optionPrice">$17</span>
              <span></span>
              <span className="optionQuant">shrimp</span>
              <span className="optionPrice">$19</span>
            </div>
          </div>

          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/noodle/YakiUdon.jpg"
                alt="Yaki U-Don"
              />
            </div>
            <div className="menuTitle">Yaki U-Don</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">Pan-fried udon noodle</span>
              <span className="optionQuant">Veggie</span>
              <span className="optionPrice">$15</span>
              <span></span>
              <span className="optionQuant">chicken or beef</span>
              <span className="optionPrice">$18</span>
              <span></span>
              <span className="optionQuant">shrimp</span>
              <span className="optionPrice">$20</span>
            </div>
          </div>
        </div>
        {/* –––––––––––––––– Dinner –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="dinner">
            Dinner
          </h2>
{/* ––––––– Sushi & Sashimi  ––––––––– */}
<h3>Sushi &amp; Sashimi</h3>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/sushiSash/Sashimiregular.jpg"
                alt="Sashimi Regular"
              />
            </div>
            <div className="menuTitle">Sashimi Regular (18 pcs)</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">18 pcs assorted raw fish</span>
              <span className="optionPrice">$27</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/sushiSash/SashimiLunchDelux.jpg"
                alt="Sashimi Deluxe"
              />
            </div>
            <div className="menuTitle">Sashimi Deluxe (20 pcs)</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Chef’s selection 20 pcs assorted raw fish
              </span>
              <span className="optionPrice">$41</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/sushiSash/SushiregulaA.jpg"
                alt="Sushi Regular A (16 pcs)"
              />
            </div>
            <div className="menuTitle">Sushi Regular A (16 pcs)</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">10 pcs sushi, 6 pcs California</span>
              <span className="optionPrice">$24</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/sushiSash/SushiregulaB.jpg"
                alt="Sushi Regular B (20 pcs)"
              />
            </div>
            <div className="menuTitle">Sushi Regular B (20 pcs)</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                12 pcs sushi, 8 pcs shrimp kappa
              </span>
              <span className="optionPrice">$29</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/sushiSash/SushiLunchDelux.jpg"
                alt="Sushi Deluxe (18 pcs)"
              />
            </div>
            <div className="menuTitle">Sushi Deluxe (18 pcs)</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Chef’s selection 12 pcs sushi, 6 pcs maki
              </span>
              <span className="optionPrice">$39</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/sushiSash/Sashimisushiregular.jpg"
                alt="Sashimi &amp; Sushi Regular (16 pcs)"
              />
            </div>
            <div className="menuTitle">
              Sashimi &amp; Sushi Regular (16 pcs)
            </div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">10 pcs sashimi, 6 pcs sushi</span>
              <span className="optionPrice">$26</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/sushiSash/Sashimisushideluxe.jpg"
                alt="Sashimi &amp; Sushi Deluxe (18 pcs)"
              />
            </div>
            <div className="menuTitle">Sashimi &amp; Sushi Deluxe (18 pcs)</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Chef’s selection 10 pcs sashimi, 8 pcs sushi
              </span>
              <span className="optionPrice">$41</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/sushiSash/Chirashi-LunchReg.jpg"
                alt="Chirashi Regular"
              />
            </div>
            <div className="menuTitle">Chirashi Regular</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Assorted raw fish on sushi rice
              </span>
              <span className="optionPrice">$29</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/sushiSash/Chirashi-LunchDelux.jpg"
                alt="Chirashi Deluxe"
              />
            </div>
            <div className="menuTitle">Chirashi Deluxe</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Chef’s selection assorted raw fish on sushi rice
              </span>
              <span className="optionPrice">$42</span>
            </div>
          </div>
          {/* ––––––– Donburi  ––––––––– */}
          <h3>Donburi</h3>
          <p>Served with miso soup, garden salad</p>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/002-ChickenDonburi.jpg"
                alt="Chicken Donburi"
              />
            </div>
            <div className="menuTitle">Chicken Donburi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Chicken, egg &amp; vegetables on a bowl of rice
              </span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/001-ChickenKatsuDonburi.jpg"
                alt="Chicken Katsu Donburi"
              />
            </div>
            <div className="menuTitle">Chicken Katsu Donburi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Deep fried chicken, egg &amp; vegetables on a bowl of rice
              </span>
              <span className="optionPrice">$20</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/003-BeefDonburi.jpg"
                alt="Beef Donburi"
              />
            </div>
            <div className="menuTitle">Beef Donburi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Beef, egg &amp; vegetables on a bowl of rice
              </span>
              <span className="optionPrice">$23</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/004-UnagiDonburi.jpg"
                alt="Unagi Donburi"
              />
            </div>
            <div className="menuTitle">Unagi Donburi</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                B.B.Q fresh water eel on a bowl of rice
              </span>
              <span className="optionPrice">$26</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/donburi/001-HaeDupPap.jpg"
                alt="Hae Dup Bap"
              />
            </div>
            <div className="menuTitle">Hae Dup Bap</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Assorted chopped raw fish &amp; vegetables, chojang
              </span>
              <span className="optionPrice">$21</span>
            </div>
          </div>
          {/* ––––––– Dinner  ––––––––– */}
          <h3>Dinner</h3>
          <p>Served with miso soup, garden salad</p>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/TofuTeriyakiDinner.jpg"
                alt="Tofu Teriyaki"
              />
            </div>
            <div className="menuTitle">Tofu Teriyaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Fried tofu with teriyaki sauce</span>
              <span className="optionPrice">$18</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/ChickenTeriyakiDinner.jpg"
                alt="Chicken Teriyaki"
              />
            </div>
            <div className="menuTitle">Chicken Teriyaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Grilled chicken breast, teriyaki sauce
              </span>
              <span className="optionPrice">$22</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/SalmonTeriyakiDinner.jpg"
                alt="Salmon Teriyaki"
              />
            </div>
            <div className="menuTitle">Salmon Teriyaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Grilled salmon, teriyaki sauce</span>
              <span className="optionPrice">$24</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/BeefTeriyakiDinner.jpg"
                alt="Beef Teriyaki"
              />
            </div>
            <div className="menuTitle">Beef Teriyaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Grilled beef, teriyaki sauce</span>
              <span className="optionPrice">$27</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/TeriyakiSetDinner.jpg"
                alt="Teriyaki Set"
              />
            </div>
            <div className="menuTitle">Teriyaki Set</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Your choice of two from chicken, salmon or beef
              </span>
              <span className="optionPrice">$26</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/ShrimpTeriyakiDinner.jpg"
                alt="Shrimp Teriyaki"
              />
            </div>
            <div className="menuTitle">Shrimp Teriyaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                12 pieces of shrimp, vegetable, teriyaki sauce
              </span>
              <span className="optionPrice">$25</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/ShrimpTempuraDinner.jpg"
                alt="Shrimp Tempura Moriawase"
              />
            </div>
            <div className="menuTitle">Shrimp Tempura Moriawase</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                4 pcs of deep-fried shrimps &amp; vegetable
              </span>
              <span className="optionPrice">$24</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/LobsterTempuraDinner.jpg"
                alt="Lobster Tempura Moriawase"
              />
            </div>
            <div className="menuTitle">Lobster Tempura Moriawase</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Deep fried lobster tail, vegetables
              </span>
              <span className="optionPrice">$34</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/ChickenKatsuDinner.jpg"
                alt="Chicken Katsu Dinner"
              />
            </div>
            <div className="menuTitle">Chicken Katsu Dinner</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Breaded chicken breast, katsu sauce
              </span>
              <span className="optionPrice">$23</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/BulgogiDinner.jpg"
                alt="Bul-Go-Gi Dinner"
              />
            </div>
            <div className="menuTitle">Bul-Go-Gi Dinner</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Stir fried sliced beef marinated in Tomo special sauce
              </span>
              <span className="optionPrice">$22</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/LAKalbiDinner.jpg"
                alt="Kalbi Dinner"
              />
            </div>
            <div className="menuTitle">Kalbi Dinner</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                B.B.Q marinated short ribs of beef
              </span>
              <span className="optionPrice">$30</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/dinner/UnagiKabayaki.jpg"
                alt="Unagi Kabayaki"
              />
            </div>
            <div className="menuTitle">Unagi Kabayaki</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                B.B.Q fresh water eel with onion
              </span>
              <span className="optionPrice">$30</span>
            </div>
          </div>
          {/* ––––––– Dinner Combo  ––––––––– */}
          <h3>Dinner Combo</h3>
          <p>Served with miso soup, garden salad &amp; rice</p>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/combo/TofuTeriyakiComboDinner.jpg"
                alt="Tofu Combo"
              />
            </div>
            <div className="menuTitle">Tofu Combo</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Tofu teriyaki, avo kappa roll, veggie tempura
              </span>
              <span className="optionPrice">$25</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/combo/ChickenTeriyakiDinnerCombo.jpg"
                alt="Teriyaki Combo"
              />
            </div>
            <div className="menuTitle">Teriyaki Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                6 pcs California roll with shrimp &amp; veggie tempura
              </span>
              <span className="optionQuant">chicken</span>
              <span className="optionPrice">$26</span>
              <span></span>
              <span className="optionQuant">salmon</span>
              <span className="optionPrice">$28</span>
              <span></span>
              <span className="optionQuant">beef</span>
              <span className="optionPrice">$32</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/combo/KalbiDinnerCombo.jpg"
                alt="Bul-Go-Gi Or Kalbi Combo"
              />
            </div>
            <div className="menuTitle">Bul-Go-Gi Or Kalbi Combo</div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                6 pcs California roll with shrimp &amp; veggie tempura
              </span>
              <span className="optionQuant">bul-go-gi</span>
              <span className="optionPrice">$26</span>
              <span></span>
              <span className="optionQuant">kalbi</span>
              <span className="optionPrice">$34</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/combo/SashimiComboDinner.jpg"
                alt="Sashimi Combo"
              />
            </div>
            <div className="menuTitle">Sashimi Combo</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (no rice) 6 pcs salmon sashimi, 5 pcs sushi, 6 pcs California
                roll with shrimp &amp; veggie tempura
              </span>
              <span className="optionPrice">$32</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/combo/UdonComboDinner.jpg"
                alt="Udon Combo"
              />
            </div>
            <div className="menuTitle">Udon Combo</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                (no miso, no rice) 6 pcs California roll with shrimp &amp;
                veggie tempura
              </span>
              <span className="optionPrice">$22</span>
            </div>
          </div>
        </div>
        {/* –––––––––––––––– A LA CARTE –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="alacarte">
            A LA CARTE
          </h2>
          <p>Sushi 2 pcs, Sashimi 3 pcs</p>
          <ul className="menu alacarte">
            <li>
              <span className="item-title">Maguro</span>
              <span className="price">
                <em>sushi</em> $10
                <br />
                <em>sashimi</em> $11
              </span>
              <span className="description">tuna</span>
            </li>
            <li>
              <span className="item-title">Otoro</span>
              <span className="price">
                <em>sushi</em> $30
                <br />
                <em>sashimi</em> $35
              </span>
              <span className="description">fatty bluefin tuna</span>
            </li>
            <li>
              <span className="item-title">Bincho maguro</span>
              <span className="price">
                <em>sushi</em> $9
                <br />
                <em>sashimi</em> $10
              </span>
              <span className="description">albacore tuna</span>
            </li>
            <li>
              <span className="item-title">Sake</span>
              <span className="price">
                <em>sushi</em> $8
                <br />
                <em>sashimi</em> $9
              </span>
              <span className="description">altlantic salmon</span>
            </li>
            {/* <li>
              <span className="item-title">King salmon</span>
              <span className="price">
                <em>sushi</em> $10
                <br />
                <em>sashimi</em> $12
              </span>
              <span className="description">pacific salmon</span>
            </li> */}
            <li>
              <span className="item-title">Hamachi</span>
              <span className="price">
                <em>sushi</em> $11
                <br />
                <em>sashimi</em> $14
              </span>
              <span className="description">yellow tail</span>
            </li>
            <li>
              <span className="item-title">Kurodai</span>
              <span className="price">
                <em>sushi</em> $9
                <br />
                <em>sashimi</em> $12
              </span>
              <span className="description">black sea-bream</span>
            </li>
            <li>
              <span className="item-title">Madai</span>
              <span className="price">
                <em>sushi</em> $11
                <br />
                <em>sashimi</em> $14
              </span>
              <span className="description">red sea-bream</span>
            </li>
            <li>
              <span className="item-title">Shima Aji</span>
              <span className="price">
                <em>sushi</em> $11
                <br />
                <em>sashimi</em> $14
              </span>
              <span className="description">Striped jack </span>
            </li>
            <li>
              <span className="item-title">Aji</span>
              <span className="price">
                <em>sushi</em> $13
                <br />
                <em>sashimi</em> $16
              </span>
              <span className="description">jack mackerel</span>
            </li>
            <li>
              <span className="item-title">Kampachi</span>
              <span className="price">
                <em>sushi</em> $11
                <br />
                <em>sashimi</em> $14
              </span>
              <span className="description">amber jack</span>
            </li>
            <li>
              <span className="item-title">Suzuki</span>
              <span className="price">
                <em>sushi</em> $9
                <br />
                <em>sashimi</em> $12
              </span>
              <span className="description">sea-bass</span>
            </li>
            <li>
              <span className="item-title">Shime saba</span>
              <span className="price">
                <em>sushi</em> $9
                <br />
                <em>sashimi</em> $10
              </span>
              <span className="description">marinated mackerel</span>
            </li>
            <li>
              <span className="item-title">Escolar</span>
              <span className="price">
                <em>sushi</em> $8
                <br />
                <em>sashimi</em> $9
              </span>
              <span className="description">oil fish</span>
            </li>
            <li>
              <span className="item-title">Unagi</span>
              <span className="price">
                <em>sushi</em> $10
                <br />
                <em>sashimi</em> $12
              </span>
              <span className="description">fresh water eel</span>
            </li>
            <li>
              <span className="item-title">Hotategai</span>
              <span className="price">
                <em>sushi</em> $8
                <br />
                <em>sashimi</em> $10
              </span>
              <span className="description">scallop</span>
            </li>
            <li>
              <span className="item-title">Uni</span>
              <span className="price">
                <em>sushi</em> $15
                <br />
                <em>sashimi</em> $20
              </span>
              <span className="description">sea urchin</span>
            </li>
            <li>
              <span className="item-title">Botan Ebi</span>
              <span className="price">
                <em>sushi</em> $11
                <br />
                <em>sashimi</em> $13
              </span>
              <span className="description">spot shrimp</span>
            </li>
            <li>
              <span className="item-title">Ebi</span>
              <span className="price">
                <em>sushi</em> $8
                <br />
                <em>sashimi</em> $9
              </span>
              <span className="description">boiled black tiger shrimp</span>
            </li>
            <li>
              <span className="item-title">Ama ebi</span>
              <span className="price">
                <em>sushi</em> $9
                <br />
                <em>sashimi</em> $11
              </span>
              <span className="description">sweet shrimp</span>
            </li>
            <li>
              <span className="item-title">Tako</span>
              <span className="price">
                <em>sushi</em> $8
                <br />
                <em>sashimi</em> $9
              </span>
              <span className="description">steamed octopus</span>
            </li>
            <li>
              <span className="item-title">Mongo ika</span>
              <span className="price">
                <em>sushi</em> $7
                <br />
                <em>sashimi</em> $8
              </span>
              <span className="description">squid</span>
            </li>
            <li>
              <span className="item-title">Ikura</span>
              <span className="price">
                <em>sushi</em> $8
                <br />
                <em>sashimi</em> $9
              </span>
              <span className="description">marinated salmon roe</span>
            </li>
            <li>
              <span className="item-title">Tobiko</span>
              <span className="price">
                <em>sushi</em> $6
                <br />
                <em>sashimi</em> $7
              </span>
              <span className="description">flying fish roe</span>
            </li>
            <li>
              <span className="item-title">Hokigai</span>
              <span className="price">
                <em>sushi</em> $5
                <br />
                <em>sashimi</em> $6
              </span>
              <span className="description">surf clam</span>
            </li>
            <li>
              <span className="item-title">Tamago</span>
              <span className="price">
                <em>sushi</em> $5
                <br />
                <em>sashimi</em> $6
              </span>
              <span className="description">egg omelette</span>
            </li>
          </ul>
        </div>
        {/* –––––––––––––––– Drinks –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="drinks">
            Drinks
          </h2>
          <h3>White Wine</h3>
          <ul className="menu drinks">
            <li className="drink-01">
              <span>Woodbridge</span> <span>Sauvignon Blanc (USA)</span>
              <span className="xsmall">5oz.&nbsp;Glass</span>
              <span>9</span>
              <span className="xsmall">1∕2&nbsp;L</span>
              <span>25</span>
              <span className="xsmall">Bottle</span>
              <span>37</span>
            </li>
            <li className="drink-01">
              <span>Lindenmans Bin 65</span>{" "}
              <span>Chardonnay (Austrailia)</span>
              <span className="xsmall">5oz.&nbsp;Glass</span>
              <span>8</span>
              <span className="xsmall">1∕2&nbsp;L</span>
              <span>24</span>
              <span className="xsmall">Bottle</span>
              <span>35</span>
            </li>
            <li className="drink-01">
              <span>Trius</span> <span>Pinot Grigio (Niagara)</span>
              <span className="xsmall">5oz.&nbsp;Glass</span>
              <span>11</span>
              <span className="xsmall">1∕2&nbsp;L</span>
              <span>29</span>
              <span className="xsmall">Bottle</span>
              <span>42</span>
            </li>
            <li className="drink-01">
              <span>Oyster Bay</span> <span>Chardonnay (New Zealand)</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span className="xsmall">Bottle</span>
              <span>48</span>
            </li>
            <li className="drink-01">
              <span>Villa Maria</span>{" "}
              <span>Sauvignon Blanc (New Zealand)</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span className="xsmall">Bottle</span>
              <span>50</span>
            </li>
          </ul>

          <h3>Red Wine</h3>
          <ul className="menu drinks">
            <li className="drink-01">
              <span>Woodbridge</span>
              <span>Cabernet Sauvignon (USA)</span>
              <span className="xsmall">5oz.&nbsp;Glass</span>
              <span>9</span>
              <span className="xsmall">1/2&nbsp;L</span>
              <span>25</span>
              <span className="xsmall">Bottle</span>
              <span>37</span>
            </li>
            <li className="drink-01">
              <span>George Wyndham Bin 555</span>
              <span>Shiraz (Austrailia)</span>
              <span className="xsmall">5oz.&nbsp;Glass</span>
              <span>10</span>
              <span className="xsmall">1/2&nbsp;L</span>
              <span>28</span>
              <span className="xsmall">Bottle</span>
              <span>40</span>
            </li>
            <li className="drink-01">
              <span>Josh Cellars</span>
              <span>Merlot (USA)</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span className="xsmall">Bottle</span>
              <span>50</span>
            </li>
            <li className="drink-01">
              <span>J. Lohr</span>
              <span>Cabernet Sauvignon (USA)</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span className="xsmall">Bottle</span>
              <span>60</span>
            </li>
          </ul>

          <h3>Plum Wine</h3>
          <ul className="menu drinks">
            <li className="drink-02">
              <span>Gekkeikan</span>
              <span className="xsmall">5oz. Glass</span>
              <span>9 </span>
            </li>
            <li className="drink-02">
              <span>Takara</span>
              <span className="xsmall">5oz. Glass</span>
              <span>10</span>
            </li>
          </ul>
          <h3>Beer</h3>
          <ul className="menu drinks">
            <li className="drink-02">
              <span>Sapporo</span>
              <span className="xsmall">341ml</span>
              <span>7</span>
            </li>
            <li className="drink-02">
              <span>Sapporo(Can)</span>
              <span className="xsmall">500 ml</span>
              <span>10</span>
            </li>
            <li className="drink-02">
              <span>Asahi</span>
              <span className="xsmall">330 ml</span>
              <span>7</span>
            </li>
            <li className="drink-02">
              <span>Asahi(Can)</span>
              <span className="xsmall">500 ml</span>
              <span>10</span>
            </li>
            <li className="drink-02">
              <span>Asahi Black</span>
              <span className="xsmall">334 ml</span>
              <span>9</span>
            </li>
            {/* <li className="drink-02">
              <span>Kirin</span>
              <span className="xsmall">500 ml</span>
              <span>9</span>
            </li> */}
            <li className="drink-02">
              <span>Stella</span>
              <span className="xsmall">330 ml</span>
              <span>7</span>{" "}
            </li>
            <li className="drink-02">
              <span>Corona</span>
              <span className="xsmall">330 ml</span>
              <span>7</span>{" "}
            </li>
            <li className="drink-02">
              <span>Canadian</span>
              <span className="xsmall">341 ml</span>
              <span>6</span>{" "}
            </li>
            <li className="drink-02">
              <span>Coors Light</span>
              <span className="xsmall">341 ml</span>
              <span>6</span>
            </li>
          </ul>

          <h3>Cold Sake</h3>
          <ul className="menu drinks">
            <li className="drink-03">
              <span>Hakutsuru</span>
              <span>Junmai, Draft</span>
              <span className="xsmall">300 ml bottle</span>
              <span>17</span>
            </li>
            <li className="drink-03">
              <span>Sayuri</span>
              <span>Nigori</span>
              <span className="xsmall">300 ml bottle</span>
              <span>20</span>
            </li>
            <li className="drink-03">
              <span>Sho Chiku Bai</span>
              <span>Ginjo</span>
              <span className="xsmall">300 ml bottle</span>
              <span>35</span>
            </li>
            <li className="drink-03">
              <span>Tamanohikari</span>
              <span>Junmai Dai Ginjo</span>
              <span className="xsmall">300 ml bottle</span>
              <span>46</span>
            </li>
            <li className="drink-03">
              <span>Otokoyama</span>
              <span>Tokubetsu Junmai</span>
              <span className="xsmall">500 ml bottle</span>
              <span>70</span>
            </li>
            <li className="drink-03">
              <span>Soju</span>
              <span></span>
              <span className="xsmall">375 ml bottle</span>
              <span>18 </span>
            </li>
          </ul>
          <h3>Hot Sake</h3>
          <ul className="menu drinks">
            <li className="drink-04">
              <span></span>
              <span className="xsmall">
                Small
                <br />4 oz
              </span>
              <span className="xsmall">
                Medium
                <br />
                10 oz
              </span>
              <span className="xsmall">
                Pot
                <br />
                720 ml
              </span>
            </li>

            <li className="drink-04">
              <span>Sho Chiku Bai</span>
              <span>6</span>
              <span>12</span>
              <span>28</span>
            </li>
          </ul>

          <h3>Beverages Non-Alcohol</h3>
          <ul className="menu drinks">
            <li className="drink-05">
              <span>Evian Water</span>
              <span>3.50</span>
            </li>
            <li className="drink-05">
              <span>Perrier Small</span>
              <span>3.50</span>
            </li>
            <li className="drink-05">
              <span>Coke, Diet Coke </span>
              <span>2</span>
            </li>
            <li className="drink-05">
              <span>Ginger Ale, Sprite </span>
              <span>2</span>
            </li>
            <li className="drink-05">
              <span>C+</span>
              <span>2</span>
            </li>
            <li className="drink-05">
              <span>Nestea</span>
              <span>3</span>
            </li>
            <li className="drink-05">
              <span>Orange Juice </span>
              <span>3.50</span>
            </li>
            <li className="drink-05">
              <span>Apple Juice</span>
              <span>3.50</span>
            </li>
          </ul>
        </div>
        {/* –––––––––––––––– Drinks –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="desserts">
            DESSERTS
          </h2>
          <ul className="menu drinks">
            <li className="drink-05">
              <span>Green Tea, Mango, Vanilla Ice Cream </span>
              <span>3</span>
            </li>
            <li className="drink-05">
              <span>Mochi Ice Cream (2 pcs) </span>
              <span>5</span>
            </li>
            <li className="drink-05">
              <span>Tempura Ice Cream </span>
              <span>5</span>
            </li>
          </ul>
        </div>
        {/*

*/}
      </MenuContainer>
      <TopButton onClick={clickHandler} onKeyDown={clickHandler}>
        menu
      </TopButton>
    </Layout>
  );
};

export default MenuMg;

// export const pageQuery = graphql`
//   query MyQuery {
//     allImageSharp {
//       edges {
//         node {
//           fluid {
//             src
//           }
//         }
//       }
//     }
//   }
// `;
