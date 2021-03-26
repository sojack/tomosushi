import * as React from "react";
import SEO from "../components/seo";
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
    position: sticky;
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
  @media (max-width: 768px) {
    .menuSection {
      grid-template-columns: 1fr;
    }
    .sectionTitle {
      grid-column: 1/2;
    }
  }
`;

const MenuNav = styled.div`
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

const TopButton = styled.a`
  background-color: var(--primary-dark);
  color: white;
  display: block;
  position: fixed;
  right: 1em;
  bottom: 10px;
  text-align: center;
  padding: 1em;
  border-radius: 6px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="menu" />
      <h1 id="top">Menu</h1>
      <MenuNav>
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
            <a href="/">SALAD</a>
          </li>
          <li>
            <a href="/">NOODLE</a>
          </li>
          <li>
            <a href="/">LUNCH</a>
          </li>
          <li>
            <a href="/">ROLLS</a>
          </li>
          <li>
            <a href="/">DINNER</a>
          </li>
          <li>
            <a href="/">A LA CARTE</a>
          </li>
          <li>
            <a href="/">DRINKS</a>
          </li>
          <li>
            <a href="/">DESSERTS</a>
          </li>
        </ul>
      </MenuNav>
      <MenuContainer>
        {/* –––––––––––––––– Party Tray –––––––––––––––– */}
        <div className="menuSection">
          <h2 className="sectionTitle" id="partyTray">
            Party Tray
          </h2>
          {/* <MenuItem
            title="SSSim"
            description="asdf"
            price="22"
            imageUrl="../images/menu/partyTray/partyTray-1.jpg"
          ></MenuItem> */}
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
              <span className="optionPrice">$36</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Medium</span>
              <span className="optionDesc">40 pcs sashimi</span>
              <span className="optionQuant"></span>
              <span className="optionPrice">$57</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Large</span>
              <span className="optionDesc">60 pcs sashimi</span>
              <span className="optionQuant"></span>
              <span className="optionPrice">$84</span>
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
              <span className="optionPrice">$52</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Medium</span>
              <span className="optionDesc">36 pcs sushi, 26 pcs roll</span>
              <span className="optionQuant">62 pcs</span>
              <span className="optionPrice">$77</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Large</span>
              <span className="optionDesc">50 pcs sushi, 32 pcs roll</span>
              <span className="optionQuant">82 pcs</span>
              <span className="optionPrice">$102</span>
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
              <span className="optionPrice">$52</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Medium</span>
              <span className="optionDesc">
                32 pcs sashimi, 20 pcs sushi, 20 pcs roll
              </span>
              <span className="optionQuant">72 pcs</span>
              <span className="optionPrice">$89</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Large</span>
              <span className="optionDesc">
                42 pcs sashimi, 24 pcs sushi, 26 pcs roll
              </span>
              <span className="optionQuant">92 pcs</span>
              <span className="optionPrice">$114</span>
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
                16 pcs sashimi, 12 pcs sushi, 8 pcs roll
              </span>
              <span className="optionQuant">36 pcs</span>
              <span className="optionPrice">$75</span>
            </div>
            <div className="menuOption menuOptionFour">
              <span className="optionSize">Large</span>
              <span className="optionDesc">
                28 pcs sashimi, 18 pcs sushi, 14 pcs roll
              </span>
              <span className="optionQuant">60 pcs</span>
              <span className="optionPrice">$110</span>
            </div>
          </div>
        </div>{" "}
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
              <span className="optionPrice">$19</span>
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
              <span className="optionPrice">$29</span>
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
              <span className="optionPrice">$30</span>
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
              <span className="optionPrice">$33</span>
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
              <span className="optionPrice">$40</span>
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
              <span className="optionPrice">$43</span>
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
              <span className="optionPrice">$44</span>
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
              <span className="optionPrice">$59</span>
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
              <span className="optionPrice">$66</span>
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
              <span className="optionPrice">$7</span>
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
              <span className="optionPrice">$6</span>
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
              <span className="optionPrice">$14</span>
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
              <span className="optionPrice">$11</span>
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
              <span className="optionPrice">$12</span>
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
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/020-TunaSushiPizza.jpg"
                alt="Sushi Pizza "
              />
            </div>
            <div className="menuTitle">Sushi Pizza </div>
            <div className="menuOption menuOptionThree">
              <span className="optionDesc">
                4 pcs Chef choice assorted sushi
              </span>
              <span className="optionPrice">Salmon</span>
              <span className="optionPrice">$10</span>
              <span></span>
              <span className="optionPrice">Avocado</span>
              <span className="optionPrice">$10</span>
              <span></span>
              <span className="optionPrice">Tuna</span>
              <span className="optionPrice">$11</span>
              <span></span>
              <span className="optionPrice">Crab Salad</span>
              <span className="optionPrice">$12</span>
              <span>* spicy pizza add $1</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/oyster-shot-BIMG3614.jpg"
                alt="Oyster Shot"
              />
            </div>
            <div className="menuTitle">Oyster Shot</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                Oyster, uni, ikura, scallion, quail egg, ponzu jello
              </span>
              <span className="optionPrice">$8</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/001-Tuna-tartare.jpg"
                alt="Tuna Tartare"
              />
            </div>
            <div className="menuTitle">Tuna Tartare</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Tuna, avocado, tatare sauce</span>
              <span className="optionPrice">$13</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/Aburi-Hakko-BIMG3583.jpg"
                alt="Aburi Hakko"
              />
            </div>
            <div className="menuTitle">Aburi Hakko</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">
                8 pcs Kansai style box sushi with seared assorted fish
              </span>
              <span className="optionPrice">$12</span>
            </div>
          </div>
          <div className="menuItem">
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
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/Shime-saba-app-BIMG3664.jpg"
                alt="Shime Saba"
              />
            </div>
            <div className="menuTitle">Shime Saba</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">Seared mackerel, tataki sauce</span>
              <span className="optionPrice">$12</span>
            </div>
          </div>
          <div className="menuItem">
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
          </div>
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
              <span className="optionPrice">$12</span>
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
              <span className="optionPrice">$15</span>
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
              <span className="optionPrice">$17</span>
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
              <span className="optionPrice">$11</span>
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
              <span className="optionPrice">$11</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="menuImage">
              <StaticImage
                src="../images/menu/app/012-ChickenKatsuAppetizer.jpg"
                alt="Chicken Katsu"
              />
            </div>
            <div className="menuTitle">
              Deep-fried breaded chicken, katsu sauce
            </div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">desc</span>
              <span className="optionPrice">$13</span>
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
              <span className="optionPrice">$17</span>
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
                Grilled black cod with miso base sauce
              </span>
              <span className="optionPrice">$22</span>
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
              <span className="optionPrice">$9</span>
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
              <span className="optionPrice">$14</span>
            </div>
          </div>
        </div>
        {/* –––––––––––––––– Appetizers –––––––––––––––– */}
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
              <span className="optionPrice">$6</span>
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
              <span className="optionPrice">$7</span>
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
              <span className="optionPrice">$9</span>
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
              <span className="optionDesc">desc</span>
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
              <span className="optionDesc">desc</span>
              <span className="optionPrice">$3</span>
            </div>
          </div>
        </div>
        {/* 

$9



$2


$3
 
        
        */}
      </MenuContainer>
      <TopButton href="#top">top</TopButton>
    </Layout>
  );
};

export default IndexPage;

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
