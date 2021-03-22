import * as React from "react";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import styled from "styled-components";

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

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="menu" />
      <h1>Menu</h1>
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
            <a href="">SOUP</a>
          </li>
          <li>
            <a href="">SALAD</a>
          </li>
          <li>
            <a href="">NOODLE</a>
          </li>
          <li>
            <a href="">LUNCH</a>
          </li>
          <li>
            <a href="">ROLLS</a>
          </li>
          <li>
            <a href="">DINNER</a>
          </li>
          <li>
            <a href="">A LA CARTE</a>
          </li>
          <li>
            <a href="">DRINKS</a>
          </li>
          <li>
            <a href="">DESSERTS</a>
          </li>
        </ul>
      </MenuNav>
      <MenuContainer>
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
                src="../images/menu/app/003-AgedashiTofu-.jpg"
                alt="app"
              />
            </div>
            <div className="menuTitle">app</div>
            <div className="menuOption menuOptionTwo">
              <span className="optionDesc">desc</span>
              <span className="optionPrice">$66</span>
            </div>
          </div>
        </div>
        {/* 
        
        
$7

tofu
Edamame
$7
Japanese soy bean
tofu
Gyoza
$8
6 pcs Deep-fried vegetable or beef dumpling
tofu
Harumaki
$8
5 pcs Deep-fried vegetable spring roll
tofu
Ebi Shumai
$7
6 pcs Steamed shrimp dumpling
tofu
Beef Sashimi
$14
Sliced raw beef, ponzu sauce
tofu
Sashimi Appetizer
$11
6 pcs Chef choice assorted sashimi
tofu
Salmon Sashimi Appetizer
$12
6 pcs Salmon sashimi
tofu
Sushi Appetizer
$8
4 pcs Chef choice assorted sushi
tofu
Sushi Pizza 
$Salmon 10
 Tuna 11
 Avocado 10
 Crab Salad 12
4 pcs Chef choice assorted sushi
* spicy pizza add $1
tofu
Oyster Shot
$8
Oyster, uni, ikura, scallion, quail egg, ponzu jello
tofu
Tuna Tartare
$13
Tuna, avocado, tatare sauce
tofu
Aburi Hakko
$12
8 pcs Kansai style box sushi with seared assorted fish
tofu
Aburi Sushi
$13
8 pcs Kansai style box sushi with seared fish with garlic sauce
tofu
Shime Saba
$12
Seared mackerel, tataki sauce
tofu
Tuna Tataki
$13
Seared tuna, garden salad, tataki sauce
tofu
Vegetable Tempura
$10
7 pieces assorted vegetable
tofu
Shrimp Tempura With Vegetables
$12
2 pieces shrimp, 5 pieces vegetable
tofu
Shrimp Tempura
$15
6 pcs shrimp
tofu
Lobster Tempura
$17
2 pcs 4oz lobster, 5 pieces vegetable
tofu
Fried Calamari
$11
Deep-fried squid-rings
tofu
Beef Enoki Mushroom
$11
Deep-fried enoki mushroom rolled with rib eye beef, teriyaki sauce
tofu
Chicken Katsu
$13
Deep-fried breaded chicken, katsu sauce
tofu
L.A. Kalbi
$17
Marinated beef short ribs
tofu
Black Cod Miso Yaki
$22
Grilled black cod with miso base sauce
tofu
Salmon Kama
$9
Grilled salmon neck
tofu
Hamachi Kama
$14
Grilled hamachi neck
        
        
        */}
      </MenuContainer>
    </Layout>
  );
};

export default IndexPage;
