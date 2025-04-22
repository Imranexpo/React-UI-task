import mainPicture from "../assest/Group 34165.png";
import indiaretail from "../assest/indiaretail-logo-23 1.png";
import menuItems from "../assest/Vector (2).svg";
import wheatherIcon from "../assest/Vector (1).svg";
import news1 from "../assest/Link ⏵ news4.jpg.png";
import news2 from "../assest/Link ⏵ news4.jpg (1).png";
import news3 from "../assest/Mask group.png";
import raghulGandhi from "../assest/Link ⏵ Figure ⏵ 169731-rbmaxpyfhd-1644061237.jpg.png";
import ArchiesStore from "../assest/ArchiesStore.png";
import enhancingStore from "../assest/enchaning.png";
import groupPhoto from "../assest/Group 18896.png";
import KFCoutlet from "../assest/Group 18897.png";
import Floral from "../assest/image 34.png";
import arrow from "../assest/down-arrow 1.svg";
import advertisment from "../assest/image 41.png";
import fashionImg from "../assest/Fashion.png";
import DLFCreate from "../assest/DLFcreate.png";
import flim from "../assest/flim.png";
import Aienhancing from "../assest/Aienhancing.png";
import invests from "../assest/invest.png";
import AppleStore from "../assest/image 22.png";
import IPOChart from "../assest/Link ⏵ image.jpg.png";
import UniqloStore from "../assest/Link ⏵ image.jpg (1).png";
import Research from "../assest/div.mpp-element-slider-card-img.png";
import LeeStore from "../assest/Link ⏵ image.jpg (2).png";
import Ellipse1 from "../assest/Ellipse 1.png";
import Ellipse2 from "../assest/Ellipse 2.png";
import Ellipse3 from "../assest/Ellipse 3.png";
import lullumal from "../assest/image 44.png";
import sencoGold from "../assest/jewellary.png";
import fastrack from "../assest/fasetrack.png";
import ZocaCafe from "../assest/Zofacafe.png";
import IndiaD2C from "../assest/IndiaD2c.png";
import planetfashion from "../assest/planetFashion.png";
import unwrapping from "../assest/unwrapping.png";
import guess from "../assest/image 71.png";
import filaUnique from "../assest/Fila uniquie.png";
import french from "../assest/image 19.png";
import Shailesh from "../assest/Shailesh.png";
import clothes from "../assest/image 20.png";
import arvind from "../assest/arvind.png";
import songwriter from "../assest/image 21.png";
import sugar from "../assest/sugar.png";
import athiya from "../assest/athiya.png";
import saraa from "../assest/Link ⏵ Saraaa.JPG.png";
import footprint from "../assest/footprint.png";
import recode from "../assest/recode.png";
import wowMomos from "../assest/image 32.png";
import barista from "../assest/Link ⏵ newsimage2.png.png";
import flippin from "../assest/image 14.png";
import keventers from"../assest/Link ⏵ newsimage8.png.png";
import barbeque from "../assest/image 33.png";
import Composable from "../assest/image 19 (1).png";
import automated from "../assest/image 20 (1).png";
import shiprocket from "../assest/image 21 (1).png";
import Shailesh2 from "../assest/image 19 (2).png";
import zouk from "../assest/image 20 (2).png";
import flowers from "../assest/image 21 (2).png";
import D2C from "../assest/image 19 (3).png";
import mira from "../assest/image 20 (3).png";
import D2CSubmit from "../assest/image 21 (3).png";
import raymondStore from "../assest/image 34.png";
import mall from "../assest/image 34 (1).png";
import galeries from "../assest/image 34 (2).png";
import privilegemember from "../assest/image 27.png";
import locopod from "../assest/logod.png.png";
import locopad2 from "../assest/logod.png (1).png";
import maskGroup from "../assest/Mask group.png";
import ajay from "../assest/Anjay.png";
import truck from "../assest/truck.png";
import sunglass from "../assest/image 19 (4).png";
import yoga from "../assest/yoga.png";
import ksh from "../assest/KSH.png";
import malabor from "../assest/image 21 (4).png";
import offlods from "../assest/offlods.png";
import cotten from "../assest/cotten.png";
import capital from"../assest/capital.png";
import invester from "../assest/invests.png";
import firstImgs from "../assest/image 32 (1).png";
import shoes from "../assest/shoes.png";
import juice from "../assest/image 14 (1).png";
import milkjuice from "../assest/Link ⏵ newsimage8.png (1).png";
import house from "../assest/image 33 (1).png";
import DHL from "../assest/DHL.png";
import archies from "../assest/image 27 (1).png";
import Intelligence from "../assest/image 28.png";
import forum from "../assest/image 27 (2).png";
import forum1 from "../assest/image 27 (3).png";
import forum2 from "../assest/image 28 (1).png";
import forum3 from "../assest/image 28 (2).png";
import "../styles/tridots_ui.css";

const Tridots_ui = () => {
  return (
    <div className="tridots-container">
      <div className="main-image-container">
        <img src={mainPicture} alt="Main" />
      </div>

      <div className="top-bar">
        <div className="search-team">
          <i className="bi bi-search"></i>
          <input placeholder="Search here..." />
        </div>

        <div className="logo-container">
          <img src={indiaretail} alt="India Retail" />
        </div>

        <div className="subscribe-item">
          <button className="btn1">Subscribe</button>
          <button className="btn2">Sign in</button>
        </div>
      </div>
      <div className="tgmenu__wrap">
        <div className="tgmenu__firstlayer">
          <div className="tgmenu__left">
            <img src={menuItems} className="tgmenu__icon" alt="Weather Icon" />
          </div>
          <div className="tgmenu__center">
            <span className="tgmenu__item active">Home</span>
            <span className="tgmenu__item">Categories</span>
            <span className="tgmenu__item">IR Prime</span>
            <span className="tgmenu__item">Events</span>
            <span className="tgmenu__item">Bookstore</span>
            <span className="tgmenu__item">Newsletter</span>
            <span className="tgmenu__item">Video</span>
          </div>
          <div className="tgmenu__right">
            <img
              src={wheatherIcon}
              className="tgmenu__weather-icon"
              alt="Weather Icon"
            />
            <span className="tgmenu__date">Friday, 30 June 2023</span>
          </div>
        </div>
        <div className="tgmenu__subnav">
          <span className="subnav__item">Fashion & Lifestyle</span>
          <span className="subnav__dot">•</span>
          <span className="subnav__item">Beauty & Wellness</span>
          <span className="subnav__dot">•</span>
          <span className="subnav__item">Food & Beverage</span>
          <span className="subnav__dot">•</span>
          <span className="subnav__item">Consumer Durables & IT</span>
          <span className="subnav__dot">•</span>
          <span className="subnav__item">Entertainment</span>
          <span className="subnav__dot">•</span>
          <span className="subnav__item">Home Decor & Furnishing</span>
          <span className="subnav__dot">•</span>
          <span className="subnav__item">Specialty Retail</span>
        </div>
      </div>
      <div className="news-card-wrap">
        <div className="news-card">
          <img src={news1} alt="Card Image" />
          <div className="news-content">
            <div className="news-category">HOTSPOTS</div>
            <div className="news-title">
              Luxury hotspots: 5 most expensive high streets in the..
            </div>
          </div>
        </div>

        <div className="news-card">
          <img src={news2} alt="Card Image" />
          <div className="news-content">
            <div className="news-category">AI</div>
            <div className="news-title">
              5 ways to leverage the power of ChatGPT in retail
            </div>
          </div>
        </div>

        <div className="news-card">
          <img src={news3} alt="Card Image" />
          <div className="news-content">
            <div className="news-category">SHIPPING</div>
            <div className="news-title">
              Reliance to open 250 Azorte stores in 2–3 years
            </div>
          </div>
        </div>
      </div>
      <div className="lay-container">
        <div className="left-column">
          <article className="main-story">
            <img
              src={raghulGandhi}
              alt="Rahul Gandhi walking amidst security and people in Manipur"
            />
            <div className="story-content">
              <span className="category__focus focus">IN FOCUS</span>
              <h2>
                Rahul Gandhi In Manipur: Chopper Ride After Women Protesters
                Surround Car
              </h2>
              <p className="author">Rahul Gandhi</p>
            </div>
          </article>

          <article className="small-story">
            <img src={groupPhoto} alt="Group photo outside Wow Momo outlet" />
            <div className="story-details">
              <span className="category citywalk">SELECT CITYWALK</span>
              <div className="d-flex justify-content-between">
                <p className="story-content">
                  Wow! Momo Foods enters Bhopal with Wow!
                </p>
                <img src={arrow} alt="arrow" className="mt-1" />
              </div>
              <div>
                <span className="tags1"># Citywalk</span>
                <span className="tags2">#reel stories podcast</span>
              </div>
            </div>
          </article>

          <article className="small-story">
            <img src={KFCoutlet} alt="KFC outlet opening with red carpet" />
            <div className="story-details">
              <span className="category food">FOOD & BEVERAGE</span>
              <div className="d-flex justify-content-between">
                <p className="story-content">
                  KFC opens another outlet in Punjab KFC opens another outlet in
                  Punjab
                </p>
                <img src={arrow} alt="arrow" className="mt-1" />
              </div>
              <div>
                <span className="tags1"># Beverage</span>
                <span className="tags2">#reel stories podcast</span>
              </div>
            </div>
          </article>

          <article className="small-story">
            <img src={Floral} alt="Floral arrangement from Ferns N Petals" />
            <div className="story-details">
              <span className="category citywalk">SELECT CITYWALK</span>
              <div className="d-flex justify-content-between">
                <p className="story-content">
                  FNP (Ferns N Petals) appoints Ashish Goel
                </p>
                <img src={arrow} alt="arrow" className="mt-1" />
              </div>
              <div>
                <span className="tags1"># Citywalk</span>
                <span className="tags2">#reel stories podcast</span>
              </div>
            </div>
          </article>
        </div>

        <div className="right-column">
          <span className="new-title">Latest News</span>
          <hr className="title-hr" />

          <article className="side-story">
            <img src={ArchiesStore} alt="archies" />
            <p>Unwrapping the Archies reinvention plan</p>
          </article>

          <article className="side-story">
            <img src={enhancingStore} alt="enchaning" />
            <p>How AI is enhancing stores, How AI is enhancing stores</p>
          </article>
          <hr />
          <p className="snippet-head">
            Croma opens 58 outlets in 6, Croma retails more than 16,000
          </p>
          <p className="snippet">
            These companies created a lot of hype when they listed on the...
          </p>
          <hr />
          <hr />
          <p className="snippet-head">
            Select Citywalk opens 4 new stores in June
          </p>
          <p className="snippet">
            These companies created a lot of hype when they listed on the...
          </p>
        </div>
      </div>
      <hr />
      <div className="main-container">
        <section className="web-specials-section">
          <p className="title-content">Web Specials</p>
          <hr className="title-hr" />
          <div className="web-specials-content">
            <article className="featured-article">
              <img src={raghulGandhi} alt="Rahul Gandhi in Manipur" />
              <div className="article-overlay">
                <h3>
                  Rahul Gandhi In Manipur: Chopper Ride After Women Protesters
                  Surround Car
                </h3>
                <p>Rahul Gandhi</p>
              </div>
            </article>
            <aside className="news-list">
              <ul>
                <li>
                  <p>
                    <span className="dot"></span>Cinema industry welcomes
                    lowering GST rates
                  </p>
                </li>
                <li>
                  <p>
                    <span className="dot"></span>Patanjali Ayurved to sell 7%
                    stake in Patanjali
                  </p>
                </li>
                <li>
                  <p>
                    <span className="dot"></span>Select Citywalk opens 4 new
                    stores in June
                  </p>
                </li>
                <li>
                  <p>
                    <span className="dot"></span>Govt imposes import
                    restrictions on certain gold
                  </p>
                </li>
                <li>
                  <p>
                    <span className="dot"></span>Joom Marketplace offers a
                    global window for sellers
                  </p>
                </li>
              </ul>
            </aside>

            <aside className="advertisement">
              <p className="ad-label">- Advertisement -</p>
              <img src={advertisment} alt="Vida V1 Pro Scooter Ad" />
            </aside>
          </div>
          <hr className="title-hr2" />
        </section>

        <nav className="quick-links-row">
          <p>
            <span className="dot"></span>B2B managed marketplace The Yarn
          </p>
          <p>
            <span className="dot"></span>Sequoia Capital exits Go Fashion
          </p>
          <p>
            <span className="dot"></span>B2B managed marketplace The Yarn
          </p>
          <p>
            <span className="dot"></span>Sequoia Capital exits Go Fashion
          </p>
        </nav>
        <section className="more-stories-section">
          <div className="stories-grid-container">
            <div className="stories-grid">
              <article className="story-item">
                <div className="image-wrapper">
                  <img src={fashionImg} alt="Story 1" />
                  <span className="story-icon"></span>
                </div>
                <p className="story-caption">
                  Fashion brand Icons: Shailesh Chaturvedi of Arvind Fashions
                  Frances
                </p>
              </article>
              <article className="story-item">
                <div className="image-wrapper">
                  <img src={DLFCreate} alt="Story 2" />
                  <span className="story-icon"></span>
                </div>
                <p className="story-caption">
                  DLF creating new retail space in Delhi for Frances Galeries
                  Lafayette
                </p>
              </article>
              <article className="story-item">
                <div className="image-wrapper">
                  <img src={flim} alt="Story 3" />
                  <span className="story-icon"></span>
                </div>
                <p className="story-caption">
                  PE firm Carlyle offloads entire, Carlyle through its
                  special-purpose
                </p>
              </article>
              <article className="story-item">
                <div className="image-wrapper">
                  <img src={Aienhancing} alt="Story 4" />
                  <span className="story-icon"></span>
                </div>
                <p className="story-caption">
                  How AI is enhancing stores, How AI is enhancing stores
                </p>
              </article>
              <article className="story-item">
                <div className="image-wrapper">
                  <img src={invests} alt="Story 5" />
                </div>
                <p className="story-caption">
                  Shilpa Shetty Kundra invests, KisanKonnect is at Rs 120 crore
                </p>
              </article>
              <article className="story-item">
                <div className="image-wrapper">
                  <img src={DLFCreate} alt="Story 2" />
                  <span className="story-icon"></span>
                </div>
                <p className="story-caption">
                  DLF creating new retail space in Delhi for Frances Galeries
                  Lafayette
                </p>
              </article>
              <article className="story-item">
                <div className="image-wrapper">
                  <img src={invests} alt="Story 5" />
                </div>
                <p className="story-caption">
                  Shilpa Shetty Kundra invests, KisanKonnect is at Rs 120 crore
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
      <div className="trending-container">
        <p className="trending-title">Trending</p>
        <hr className="title-hr3" />
        <div className="trending-wrapper">
          <div className="trending-content">
            <p className="trending-tag">Rahul Gandhi In Manipur</p>
            <p className="trending-tag">Meta</p>
            <p className="trending-tag">E-Commerce</p>
            <p className="trending-tag">Fashion</p>
            <p className="trending-tag">Live Cricket Score</p>
            <p className="trending-tag">Adipurush</p>
            <p className="trending-tag">Sushant Singh Rajput death Case</p>
            <p className="trending-tag">Myntra Launches</p>
            <p className="trending-tag">Sports</p>
            <p className="trending-tag">Video Games</p>
            <p className="trending-tag">Today News</p>
            <p className="trending-tag">Today New Jobs</p>
            <p className="trending-tag">Entertainment</p>
            <p className="trending-tag">Live Cricket </p>
            <p className="trending-tag">&lt;</p>
            <p className="trending-tag">&gt;</p>
          </div>
        </div>
      </div>
      <div className="main-container2">
        <section className="content-carousel-section">
          <div className="section-header">
            <p className="first-head">Leaders Ink</p>
            <p className="search-head">
              See more <img src={arrow} alt="arrow" />
            </p>
          </div>
          <div className="card-carousel-container">
            <div className="card-row">
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={AppleStore} alt="Apple Store" />
                </div>
                <div className="card-content">
                  <div className="author-title-row">
                    <img
                      src={Ellipse1}
                      alt="Arundhati Roy"
                      className="author-icon"
                    />
                    <h3 className="card-title">
                      Top 5 iconic Apple stores across the world by design
                    </h3>
                  </div>
                  <p className="card-snippet">
                    From a total of around 522 Apple stores across the world..
                  </p>
                  <p className="card-author">Arundhati Roy</p>
                </div>
              </article>
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={IPOChart} alt="IPO Chart" />
                </div>
                <div className="card-content">
                  <div className="author-title-row">
                    <img
                      src={Ellipse2}
                      alt="Vikram Seth"
                      className="author-icon"
                    />
                    <h3 className="card-title">
                      Rollercoaster ride of four retail industry IPOs
                    </h3>
                  </div>
                  <p className="card-snippet">
                    These companies created a lot of hype when they listed on
                    the...
                  </p>
                  <p className="card-author">Vikram Seth</p>
                </div>
              </article>
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={UniqloStore} alt="Uniqlo Store" />
                </div>
                <div className="card-content">
                  <div className="author-title-row">
                    <img
                      src={Ellipse3}
                      alt="Jhumpa Lahiri"
                      className="author-icon"
                    />
                    <h3 className="card-title">
                      Uniqlo Indias Success Mantra: Making headway...
                    </h3>
                  </div>
                  <p className="card-snippet">
                    Uniqlo, Asias largest fashion retailer has managed to hit..
                  </p>
                  <p className="card-author">Jhumpa Lahiri</p>
                </div>
              </article>
            </div>
          </div>
          <div className="pagination-dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>

        <section className="content-carousel-section">
          <div className="section-header">
            <p className="first-head">Research</p>
            <p className="search-head">
              See more <img src={arrow} alt="arrow" />
            </p>
          </div>
          <div className="card-carousel-container">
            <div className="card-row">
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={Research} alt="Research Image" />
                  <div className="video-overlay">▶ 5 min</div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">
                    Human touchpoint is extremely important for us,
                  </h3>
                  <p className="card-category">FASHION</p>
                </div>
              </article>
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={LeeStore} alt="Lee Store" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">
                    US denim brand Lee opens outlets in Sikar, Patna..
                  </h3>
                  <p className="card-category">BEAUTY</p>
                </div>
              </article>
            </div>
          </div>
          <div className="pagination-dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>
      </div>
      <div className="main-container3">
        <section className="video-wall-section">
          <div className="video-wall-grid">
            <div className="video-column video-column-large">
            <div className="section-header">
              <p className="video-text">IR Video Wall</p>
              <p className="search-head">
              See more <img src={arrow} alt="arrow" />
              </p>
              </div>
              <div className="video-item video-item-large">
                <div className="video-thumbnail-container">
                  <img src={lullumal} alt="Reebok Store Opening" />
                  <div className="play-icon">
                    <svg
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="30,20 80,50 30,80" fill="#FFF" />
                    </svg>
                  </div>
                  <h3 className="video-title-overlay">
                    Reebok opens store at Lulu Mall, Lucknow
                  </h3>
                </div>
              </div>
            </div>

            <div className="video-column video-column-small">
              <p className="video-text1">Retail With Rasul</p>
              <div className="video-item video-item-small">
                <div className="video-thumbnail-container1">
                  <img src={sencoGold} alt="Senco Gold IPO" />
                </div>
                <h4 className="video-title">
                  Senco Gold IPO subscribed 69% on first day of subscription
                </h4>
              </div>
              <div className="video-item video-item-small">
                <div className="video-thumbnail-container1">
                  <img src={IndiaD2C} alt="India D2C Summit" />
                </div>
                <h4 className="video-title">
                  India D2C Summit & Awards 2023 Trailblazing Brands and
                  Professionals
                </h4>
              </div>
            </div>
            <div className="video-column video-column-small">
              <p className="video-text1">The Store</p>
              <div className="video-item video-item-small">
                <div className="video-thumbnail-container1">
                  <img src={fastrack} alt="Fastrack Smart" />
                </div>
                <h4 className="video-title">
                  Fastrack Smart onboards Ranveer Singh as brand ambassador
                </h4>
              </div>
              <div className="video-item video-item-small">
                <div className="video-thumbnail-container1">
                  <img src={planetfashion} alt="Planet Fashion" />
                </div>
                <h4 className="video-title">
                  Planet Fashion by ABFRL opens 2 outlets in Mumbai
                </h4>
              </div>
            </div>

            <div className="video-column video-column-small">
              <p className="video-text1">IR Studio</p>
              <div className="video-item video-item-small">
                <div className="video-thumbnail-container1">
                  <img src={ZocaCafe} alt="Zoca Cafe" />
                </div>
                <h4 className="video-title">
                  Zoca Cafe launches outlet in Bengaluru launches outlet
                </h4>
              </div>
              <div className="video-item video-item-small">
                <div className="video-thumbnail-container1">
                  <img src={unwrapping} alt="Archies Reinvention" />
                </div>
                <h4 className="video-title">
                  Unwrapping the Archies reinvention plan
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="main-container4">
       <img src={guess} alt="guess"/>
      </div>
      <div className="main-container5">
<div className="lifestyle-content-area">
    <section className="content-column grid-column">
        <div className="section-column-header" >
         <p className="column-title">Fashion & Lifestyle</p>
         <p className="search-head-title">See more<img src={arrow} alt="arrow"/></p>
        </div>
        <div className="card-grid grid-3x2">
            <article className="content-card">
                <div className="card-image-wrapper">
                    <img src={filaUnique} alt="Fashion 1"/> 
                    <div className="card-icon-overlay">
                        <span className="icon-book"></span> 
                        <span className="icon-time">1 min</span>
                    </div>
                </div>
                <div className="card-text-content">
                    <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary">FOOD</span>
                    </div>
                    <h1>What makes Fila unique is its attitude and...</h1>
                    <p className="snippet">The singer-songwriter has been spotted in the hybrid garment...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
            <article className="content-card">
                 <div className="card-image-wrapper">
                    <img src={french} alt="Fashion 2"/> 
                    <div className="card-icon-overlay">
                        <span className="icon-book"></span>
                        <span className="icon-time">1 min</span>
                    </div>
                </div>
                <div className="card-text-content">
                   <div className="category-tags">
                        <span className="category-tag primary">SIDDHANT</span>
                        <span className="category-tag secondary">FASHION</span>
                    </div>
                    <h1>French Connection announces Siddhant Chaturvedi as ..</h1>
                    <p className="snippet">The singer-songwriter has been spotted in the hybrid garment...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
             <article className="content-card">
                <div className="card-image-wrapper">
                    <img src={Shailesh} alt="Fashion 3"/> 
                    <div className="card-icon-overlay">
                        <span className="icon-book"></span>
                        <span className="icon-time">1 min</span>
                    </div>
                </div>
                <div className="card-text-content">
                    <div className="category-tags">
                        <span className="category-tag primary">SHAILESH</span>
                        <span className="category-tag secondary">FASHION</span>
                    </div>
                    <h1>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</h1>
                    <p className="snippet">The Gucci loafer has been a signature style for 70 years.</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
            <article className="content-card">
                 <div className="card-image-wrapper">
                    <img src={clothes} alt="Fashion 4"/> 
                     <div className="card-icon-overlay">
                        <span className="icon-book"></span>
                        <span className="icon-time">1 min</span>
                    </div>
                </div>
                <div className="card-text-content">
                     <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary">RETAILERS</span>
                    </div>
                    <h1>Indian fashion retailers to witness revenue ...</h1>
                    <p className="snippet">The singer-songwriter has been spotted in the hybrid garment...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
            <article className="content-card">
                 <div className="card-image-wrapper">
                    <img src={arvind} alt="Fashion 5"/> 
                     <div className="card-icon-overlay">
                        <span className="icon-book"></span>
                        <span className="icon-time">1 min</span>
                    </div>
                </div>
                <div className="card-text-content">
                     <div className="category-tags">
                        <span className="category-tag primary">LIFESTYLE</span>
                        <span className="category-tag secondary">FASHION</span>
                    </div>
                    <h1>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</h1>
                    <p className="snippet">BTS attended the 2022 Grammy Awards in complementary ...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
            <article className="content-card">
                 <div className="card-image-wrapper">
                    <img src={songwriter} alt="Fashion 6"/>
                     <div className="card-icon-overlay">
                        <span className="icon-book"></span>
                        <span className="icon-time">1 min</span>
                    </div>
                </div>
                <div className="card-text-content">
                     <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary">ZOUK</span>
                    </div>
                    <h1>Zouk marries heritage with functionality</h1>
                    <p className="snippet">The singer-songwriter has been spotted in the hybrid garment...</p>
                    <p className="hashtag mt-3">#lifestyle</p>
                </div>
            </article>
        </div>
    </section>
    <section className="content-column list-column">
         <div className="section-column-header" >
         <p className="column-title">Beauty & Wellness</p>
         <p className="search-head-title">See more<img src={arrow} alt="arrow"/></p>
        </div>
         <div className="list-container">
         <div className="category-tags">
              <span className="category-tag primary">BEAUTY</span>
              <span className="category-tag secondary-grey">NEWS</span>
         </div>
             <article className="list-item">
                 <div className="list-item-image">
                     <img src={sugar} alt="Sugar Cosmetics"/>
                 </div>
                 <div className="list-item-text">
                    <h4>Sugar Cosmetics unveils its 200th brand-owned store</h4>
                 </div>
             </article>
             <div className="category-tags">
                 <span className="category-tag primary">WELLNESS</span>
                 <span className="category-tag secondary-grey">NEWS</span>
             </div>
              <article className="list-item">
                 <div className="list-item-image">
                     <img src={athiya} alt="Athiya Shetty"/> 
                 </div>
                 <div className="list-item-text">
                    <h4>Athiya Shetty becomes the face of Just Herbs...</h4>
                 </div>
             </article>
             <div className="category-tags">
                        <span className="category-tag primary">WELLNESS</span> 
                        <span className="category-tag secondary-grey">NEWS</span>
                    </div>
             <article className="list-item">
                 <div className="list-item-image">
                     <img src={saraa} alt="Cannes 2023"/> 
                 </div>
                 <div className="list-item-text">
                    <h4>Indian stars dazzle at Cannes 2023</h4>
                 </div>
             </article>
             <div className="category-tags">
                        <span className="category-tag primary">BEAUTY</span>
                        <span className="category-tag secondary-grey">NEWS</span>
                    </div>
             <article className="list-item">
                 <div className="list-item-image">
                     <img src={footprint} alt="Recode Studios"/>
                 </div>
                 <div className="list-item-text">
                    <h4>Recode Studios to expand footprint with 5 store...</h4>
                 </div>
             </article>
             <div className="category-tags">
                        <span className="category-tag primary">BEAUTY</span>
                        <span className="category-tag secondary-grey">NEWS</span>
                    </div>
              <article className="list-item">
                 <div className="list-item-image">
                     <img src={recode} alt="Recode Logistics"/> 
                 </div>
                 <div className="list-item-text">
                    <h4>Recode Studios to expand footprint with 5 store...</h4> 
                 </div>
             </article>
         </div>
    </section>

</div>

</div> 
<div className="main-container6">
        <section className="food-beverage-section">
            <h2 className="section-title">Food & Beverage</h2>
            <div className="horizontal-scroll-container">
                <div className="card-row-flex">
                    <article className="food-card">
                        <div className="food-card-image">
                            <img src={wowMomos} alt="Wow! Momo"/> 
                            <div className="icon-overlay">
                                <span className="bar short"></span>
                                <span className="bar medium"></span>
                                <span className="bar tall"></span>
                            </div>
                        </div>
                        <div className="food-card-content">
                            <h4>Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China</h4>
                            <p className="hashtag">#Lifestyle</p>
                        </div>
                    </article>
                     <article className="food-card">
                        <div className="food-card-image">
                            <img src={barista}alt="Barista Coffee"/>
                             <div className="icon-overlay">
                                <span className="bar short"></span>
                                <span className="bar medium"></span>
                                <span className="bar tall"></span>
                            </div>
                        </div>
                        <div className="food-card-content">
                            <h4>Barista Coffee Company opens its first café in Ahmedabad</h4>
                            <p className="hashtag">#Lifestyle</p>
                        </div>
                    </article>
                    <article className="food-card">
                        <div className="food-card-image">
                            <img src={flippin} alt="Good Flippin Burgers"/> 
                            <div className="icon-overlay">
                                <span className="bar short"></span>
                                <span className="bar medium"></span>
                                <span className="bar tall"></span>
                            </div>
                        </div>
                        <div className="food-card-content">
                            <h4>Good Flippin Burgers raises $4 Million in Series A Round</h4>
                             <p className="hashtag">#Lifestyle</p>
                        </div>
                    </article>
                    <article className="food-card">
                        <div className="food-card-image">
                            <img src={keventers} alt="Keventers"/>
                            <div className="icon-overlay">
                                <span className="bar short"></span>
                                <span className="bar medium"></span>
                                <span className="bar tall"></span>
                            </div>
                        </div>
                        <div className="food-card-content">
                            <h4>How Keventers is milking milkshakes business opportunity</h4>
                            <p className="hashtag">#Lifestyle</p>
                        </div>
                    </article>
                     <article className="food-card">
                        <div className="food-card-image">
                            <img src={barbeque} alt="Barbeque Nation"/> 
                             <div className="icon-overlay">
                                <span className="bar short"></span>
                                <span className="bar medium"></span>
                                <span className="bar tall"></span>
                            </div>
                        </div>
                        <div className="food-card-content">
                            <h4>Barbeque Nation Q4 net loss at Rs 11.60cr</h4>
                             <p className="hashtag">#Lifestyle</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

    </div> 
    <div className="main-container7"> 
<section className="multi-column-section">
    <div className="content-list-column">
        <div className="column-header">
            <h2 className="column-list-title">E-Commerce</h2>
            <a href="#" className="see-more-link">See more <img src={arrow} className="arrow" alt="arrow"/></a>
        </div>
        <div className="items-list">
            <article className="list-item-card">
                <div className="card-list-image">
                    <img src={Composable} alt="Composable Commerce"/>
                </div>
                <div className="card-list-text">
                    <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary-grey">TAYLOR SWIFT</span> 
                    </div>
                    <h4>Why retailers cant afford to ignore composable</h4>
                    <p className="snippet">Composable commerce opens new avenues for brands to thrive...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
             <article className="list-item-card">
                <div className="card-list-image">
                    <img src={automated} alt="ONDC"/> 
                </div>
                <div className="card-list-text">
                    <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary-grey">TAYLOR SWIFT</span>
                    </div>
                    <h4>ONDC has completely automated grievance</h4>
                    <p className="snippet">ONDC is also enabling an online resolution mechanism apart...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
            <article className="list-item-card">
                <div className="card-list-image">
                    <img src={shiprocket} alt="Shiprocket App"/> 
                </div>
                <div className="card-list-text">
                    <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary-grey">TAYLOR SWIFT</span>
                    </div>
                    <h4>Shiprocket seller app integrates with ONDC</h4>
                    <p className="snippet">Shiprocket plans to enable five key categories on ONDC...</p>
                    <p className="hashtag">#lifestyle</p>
                </div>
            </article>
        </div>
    </div>
     <div className="content-list-column">
         <div className="column-header">
            <h2 className="column-list-title">People</h2>
            <a href="#" className="see-more-link">See more <img src={arrow} className="arrow" alt="arrow"/></a>
        </div>
         <div className="items-list">
            <article className="list-item-card">
                <div className="card-list-image">
                    <img src={Shailesh2} alt="Shailesh Chaturvedi"/> 
                </div>
                <div className="card-list-text">
                    <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary-grey">TAYLOR SWIFT</span>
                    </div>
                    <h4>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</h4>
                    <p className="snippet">IndiaRetailing brings you a series in which we highlight...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
             <article className="list-item-card">
                <div className="card-list-image">
                    <img src={zouk} alt="Zouk"/>
                </div>
                <div className="card-list-text">
                     <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary-grey">TAYLOR SWIFT</span>
                    </div>
                    <h4>Zouk marries heritage with functionality</h4>
                    <p className="snippet">IndiaRetailing brings you a series in which we highlight...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
             <article className="list-item-card">
                <div className="card-list-image">
                    <img src={flowers} alt="FNP Flowers"/> 
                </div>
                <div className="card-list-text">
                     <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary-grey">TAYLOR SWIFT</span>
                    </div>
                    <h4>FNP (Ferns N Petals) appoints Ashish Goel as...</h4>
                    <p className="snippet">Goel will spearhead the companys technological..</p>
                    <p className="hashtag">#lifestyle</p>
                </div>
            </article>
         </div>
    </div>
     <div className="content-list-column">
         <div className="column-header">
            <h2 className="column-list-title">D2C Remove Buzz</h2>
            <a href="#" className="see-more-link">See more <img src={arrow} className="arrow" alt="arrow"/></a>
        </div>
         <div className="items-list">
            <article className="list-item-card">
                <div className="card-list-image">
                    <img src={D2C} alt="D2C Growth"/>
                </div>
                <div className="card-list-text">
                     <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary-grey">TAYLOR SWIFT</span>
                    </div>
                    <h4>The D2C growth story According to reports</h4>
                    <p className="snippet">According to reports in Q2 2022, Indian D2C startups...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
            <article className="list-item-card">
                <div className="card-list-image">
                    <img src={mira} alt="Mira Kapoor"/> 
                </div>
                <div className="card-list-text">
                    <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary-grey">TAYLOR SWIFT</span>
                    </div>
                    <h4>D2C brand Koparo onboards Mira Kapoor as brand</h4>
                    <p className="snippet">The singer-songwriter has been spotted in the hybrid garment...</p>
                    <p className="hashtag">#fashion</p>
                </div>
            </article>
             <article className="list-item-card">
                <div className="card-list-image">
                    <img src={D2CSubmit} alt="D2C Summit"/> 
                </div>
                <div className="card-list-text">
                     <div className="category-tags">
                        <span className="category-tag primary">FASHION</span>
                        <span className="category-tag secondary-grey">TAYLOR SWIFT</span>
                    </div>
                    <h4>India D2C Summit & Awards 2023 Honours..</h4>
                    <p className="snippet">House of Chikankari, Plum Goodness, Accessorize London..</p>
                    <p className="hashtag">#lifestyle</p>
                </div>
            </article>
         </div>
    </div>

</section> 
</div>
<div className="main-container"> 
<section className="shopping-privilege-section">
    <div className="column column-shopping">
        <div className="shopping-header">
        <p className="column-title">Shopping Centers</p>
        <p className="shopping-search">See more<img src={arrow} alt="arrow"/></p>
        </div>
        <div className="shopping-items-list">
            <article className="shopping-item">
                <div className="shopping-item-image">
                    <img src={raymondStore} alt="Raymond Store"/> 
                </div>
                <div className="shopping-item-text">
                    <div className="category-tags">
                        <span className="category-tag primary">SELECT CITYWALK</span>
                        <span className="category-tag secondary">LIFESTYLE</span>
                    </div>
                    <h4>Select Citywalk opens 4 new stores in June</h4>
                    <p className="snippet">The new stores opened at Select Citywalk include Choko la, Raymond, Looks Salon and Home Stop</p>
                    <p className="source-tag">#reel stories podcast</p>
                </div>
            </article>
            <article className="shopping-item">
                <div className="shopping-item-image">
                    <img src={mall} alt="Infiniti Mall Artwork"/>
                </div>
                <div className="shopping-item-text">
                     <div className="category-tags">
                        <span className="category-tag primary">INFINITI MALL</span>
                        <span className="category-tag secondary">NEWS</span>
                    </div>
                    <h4>Infiniti Mall collaborates with T-Series & PVR Inox to unveil Adipurush artwork</h4>
                    <p className="snippet">Constructed by Rubiks Cubes mosaic artist Selwyn Santmajor and Nikhil from Nikhil Artwork</p>
                    <p className="source-tag">#reel stories podcast</p>
                </div>
            </article>
            <article className="shopping-item">
                <div className="shopping-item-image">
                    <img src={galeries} alt="Galeries Lafayette"/> 
                </div>
                <div className="shopping-item-text">
                     <div className="category-tags">
                        <span className="category-tag primary">MULTIMEDIA</span>
                        <span className="category-tag secondary">NEWS</span>
                    </div>
                    <h4>DLF creating new retail space in Delhi for Frances Galeries Lafayette</h4>
                    <p className="snippet">DLF is earmarking space for the luxury retailer between two of its top-end malls, Emporio and Promenade..</p>
                    <p className="source-tag">#reel stories podcast</p>
                </div>
            </article>
        </div>
    </div>
    <div className="column column-privilege">
        <div className="shopping-header">
        <p className="column-title">Privilege Members Corner</p>
        <p className="shopping-search">See more<img src={arrow} alt="arrow"/></p>
        </div>
         <div className="privilege-video-item">
            <div className="video-thumbnail-container">
                <img src={privilegemember} alt="Privilege Member Video"/> 
                <div className="video-duration-overlay">
                    <span className="play-icon-small">▶</span> 5 min
                </div>
            </div>
            <h4 className="video-title">India D2C Summit & Awards 2023 Trailblazing Brands and Professionals</h4>
         </div>
         <div className="podcast-section-container">
        <div className="podcast-header">
            <h3 className="podcast-title">Podcast</h3>
            <a href="#" className="podcast-see-more">See more <img src={arrow} className="arrow" alt="podcast"/></a>
        </div>
        <div className="podcast-list">
            <div className="podcast-item">
                <div className="podcast-item-image">
                    <img src={locopod} alt="Insight Story Podcast"/>
                </div>
                <div className="podcast-item-text">
                    <h4>Simplifying Retai Industry Compliance Management</h4>
                    <p>TV & Film:Film Interviews</p>
                </div>
            </div>
             <div className="podcast-item">
                <div className="podcast-item-image">
                    <img src={locopad2} alt="ModernRetail Podcast"/>
                </div>
                <div className="podcast-item-text">
                    <h4>Simplifying Retai Industry Compliance Management</h4>
                    <p>TV & Film:Film Interviews</p>
                </div>
            </div>
        </div>
    </div>

    </div>

</section> 

</div> 
<div className="main-container4">
  <div className="mask-group">
  <img src={maskGroup} alt="guess"/>
  </div>
</div>  
<div className="main-content-wrapper">
<div className="news-grid">
    <article className="news-item">
        <div className="news-image-container">
            <img src={ajay} alt="Ajay Chitkara" className="news-image"/>
            <div className="read-time-overlay">
                <svg className="icon" width="14" height="14"></svg>
                <span>1 min</span>
            </div>
        </div>
        <div className="news-content">
            <div className="news-categories">
                <span className="category-primary">FASHION</span> | <span className="category-secondary">TAYLOR SWIFT</span>
            </div>
            <h3 className="news-headline">Ecom Express appoints Ajay Chitkara as...</h3>
            <p className="news-description">Chitkara, who is at present serving as...</p>
            <span className="news-hashtag">#fashion</span>
        </div>
    </article>
    <article className="news-item">
        <div className="news-image-container">
            <img src={sunglass} alt="Man in sunglasses" className="news-image"/>
             <div className="read-time-overlay">
                <svg className="icon" width="14" height="14"></svg>
                <span>1 min</span>
            </div>
        </div>
        <div className="news-content">
            <div className="news-categories">
                <span className="category-primary">FASHION</span> | <span className="category-secondary">TAYLOR SWIFT</span>
            </div>
            <h3 className="news-headline">Voyage Eyewear collaborates with actor...</h3>
            <p className="news-description">During the 3-month partnership, both parties will...</p>
            <span className="news-hashtag">#fashion</span>
        </div>
    </article>
    <article className="news-item">
        <div className="news-image-container">
            <img src={truck} alt="Trucks lined up" className="news-image"/>
             <div className="read-time-overlay">
                <svg className="icon" width="14" height="14"></svg>
                <span>1 min</span>
            </div>
        </div>
        <div className="news-content">
            <div className="news-categories">
                <span className="category-primary">FASHION</span> | <span className="category-secondary">FASHION</span>
            </div>
            <h3 className="news-headline">DTDC sets up super hub in...</h3>
            <p className="news-description">Spread over 1,75,000 square feet of space...</p>
            <span className="news-hashtag">#fashion</span>
        </div>
    </article>
     <article className="news-item">
        <div className="news-image-container">
            <img src={yoga} alt="People doing yoga outdoors" className="news-image"/>
             <div className="read-time-overlay">
                <svg className="icon" width="14" height="14"></svg>
                <span>1 min</span>
            </div>
        </div>
        <div className="news-content">
            <div className="news-categories">
                <span className="category-primary">FASHION</span> | <span className="category-secondary">TAYLOR SWIFT</span>
            </div>
            <h3 className="news-headline">From Yogathons to special offers, heres a quick...</h3>
            <p className="news-description">The singer-songwriter has been spotted in the hybrid garment...</p>
            <span className="news-hashtag">#fashion</span>
        </div>
    </article>
     <article className="news-item">
        <div className="news-image-container">
            <img src={ksh} alt="Worker near trucks at warehouse" className="news-image"/>
             <div className="read-time-overlay">
                <svg className="icon" width="14" height="14"></svg>
                <span>1 min</span>
            </div>
        </div>
        <div className="news-content">
            <div className="news-categories">
                <span className="category-primary">LIFESTYLE</span> | <span className="category-secondary">BTS</span>
            </div>
            <h3 className="news-headline">KSH Distriparks bolsters its fleet with...</h3>
            <p className="news-description">With the addition of new vehicles, the...</p>
            <span className="news-hashtag">#fashion</span>
        </div>
    </article>
     <article className="news-item">
        <div className="news-image-container">
            <img src={malabor} alt="NTR Jr" className="news-image"/>
             <div className="read-time-overlay">
                <svg className="icon" width="14" height="14"></svg>
                <span>1 min</span>
            </div>
        </div>
        <div className="news-content">
            <div className="news-categories">
                <span className="category-primary">FASHION</span> | <span className="category-secondary">TAYLOR SWIFT</span>
            </div>
            <h3 className="news-headline">Malabar Gold & Diamonds ropes...</h3>
            <p className="news-description">Signing NTR Jr, who starred in RRR,...</p>
            <span className="news-hashtag">#lifestyle</span>
        </div>
    </article>

</div>
<aside className="sidebar-news">
    <article className="sidebar-item">
        <div className="sidebar-categories">
            <span className="sidebar-category-primary">FINANCE</span> | <span className="sidebar-category-secondary">NEWS</span>
        </div>
        <div className="sidebar-item-content">
            <img src={offlods} alt="Delhivery Truck" className="sidebar-image"/>
            <p className="sidebar-text">PE firm Carlyle offloads entire, Carlyle through its special-purpose</p>
        </div>
    </article>
    <article className="sidebar-item">
        <div className="sidebar-categories">
            <span className="sidebar-category-primary">FINANCE</span> | <span className="sidebar-category-secondary">NEWS</span>
        </div>
        <div className="sidebar-item-content">
            <img src={cotten} alt="Spools of Yarn" className="sidebar-image"/>
            <p className="sidebar-text">B2B managed marketplace The Yarn, The investment was..</p>
        </div>
    </article>
    <article className="sidebar-item">
        <div className="sidebar-categories">
            <span className="sidebar-category-primary">FUNDING</span> | <span className="sidebar-category-secondary">NEWS</span>
        </div>
        <div className="sidebar-item-content">
            <img src={capital} alt="Folded Shirts" className="sidebar-image"/>
            <p className="sidebar-text">Sequoia Capital exits Go Fashion, US-based Sequoia Capital.</p>
        </div>
    </article>
    <article className="sidebar-item">
        <div className="sidebar-categories">
              <span className="sidebar-category-primary">FUNDING</span> | <span className="sidebar-category-secondary">NEWS</span>
        </div>
        <div className="sidebar-item-content">
            <img src={invester} alt="Farm equipment" className="sidebar-image"/>
            <p className="sidebar-text">Shilpa Shetty Kundra invests, Kisankonnect is at Rs 120 crore</p>
        </div>
    </article>

</aside> 

</div> 
<div className="main-container2">
        <section className="content-carousel-section">
          <div className="section-header">
            <p className="first-head">case studies</p>
            <p className="search-head">
              See more <img src={arrow} alt="arrow" />
            </p>
          </div>
          <div className="card-carousel-container">
            <div className="card-row">
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={firstImgs} alt="Apple Store" />
                </div>
                <div className="card-content">
                  <p className="card-snippet">
                  Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China
                  </p>
                  <p className="card-author">#Fashion</p>
                </div>
              </article>
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={shoes} alt="IPO Chart" />
                </div>
                <div className="card-content">
                  <p className="card-snippet2">
                  Simplifying Compliance Management for the Retail...
                  </p>
                  <p className="card-author">#Fashion</p>
                </div>
              </article>
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={juice} alt="Uniqlo Store" />
                </div>
                <div className="card-content">
                  <p className="card-snippet2">
                  ‘Doubling Retailers’ Incomes Through Focus On...
                  </p>
                  <p className="card-author">#Lifestyle</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="content-carousel-section">
          <div className="section-header">
            <p className="first-head">Photo Essays</p>
            <p className="search-head">
              See more <img src={arrow} alt="arrow" />
            </p>
          </div>
          <div className="card-carousel-container">
            <div className="card-row">
            <article className="news-card1">
                <div className="card-image-container">
                  <img src={milkjuice} alt="IPO Chart" />
                </div>
                <div className="card-content">
                  <p className="card-snippet2">
                  JACK&JONES x Ranveer Singh for
                  #DontHoldBack 3.0
                  </p>
                  <p className="card-author">#Lifestyle</p>
                </div>
              </article>
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={house} alt="IPO Chart" />
                </div>
                <div className="card-content">
                  <p className="card-snippet2">
                  JACK&JONES x Ranveer Singh for
                  #DontHoldBack 3.0
                  </p>
                  <p className="card-author">#Lifestyle</p>
                </div>
              </article>
              <article className="news-card1">
                <div className="card-image-container">
                  <img src={IPOChart} alt="IPO Chart" />
                </div>
                <div className="card-content">
                  <p className="card-snippet2">
                  Simplifying Compliance Management for the Retail...
                  </p>
                  <p className="card-author">#Lifestyle</p>
                </div>
              </article>
            </div>
          </div>
          <div className="pagination-dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>
      </div>
      <div className="main-container10"> 

<section className="events-section">
    <div className="events-header">
        <h2 className="events-section-title">Images Group Events</h2>
        <a href="#" className="events-see-more">See more <img src={arrow} className='arrow' alt="arrow"/></a>
    </div>

    <div className="events-grid-layout">

        <div className="event-column-featured">
            <article className="featured-event-card">
                <div className="featured-event-image">
                    <img src={DHL} alt="D2C Summit & Awards"/> 
                </div>
                <div className="featured-event-content">
                    <span className="event-category featured-category">TECHNOLOGY</span>
                    <h3>D2C India</h3>
                    <div className="event-meta featured-meta">
                    <span className="meta-item"><i className="bi bi-calendar-fill"></i> Wed, 09 Aug 2023</span>
                    <span className="meta-item"><i className="bi bi-geo-alt-fill"></i> Barkha Dutt</span>
                    </div>
                    <p className="event-snippet">Get inspired building brands for the next decade of consumption</p>
                </div>
            </article>
        </div>

        <div className="event-column-list">
            <article className="small-event-card">
                <div className="event-background">
                <div className="small-event-image">
                     <img src={archies} alt="Archies Event"/> 
                </div>
                </div>
                <div className="small-event-text">
                    <h4>Unwrapping the Archies reinvention plan</h4>
                    <p className="snippet">The Middle East Retail Forum (MRF) is a powerful</p>
                    <div className="event-meta">
                        <span className="meta-item"><i className="bi bi-calendar-fill"></i> Wed, 09 Aug 2023</span>
                        <span className="meta-item"><i className="bi bi-geo-alt-fill"></i> Barkha Dutt</span>
                    </div>
                    <a href="#" className="registration-link">Registration Now <img src={arrow} alt="arrow" className="arrow"/></a>
                </div>
            </article>
           
             <article className="small-event-card">
             <div className="event-background">
                <div className="small-event-image">
                     <img src={Intelligence} alt="Archies Event"/> 
                </div>
                </div>
                <div className="small-event-text">
                     <h4>Phygital Retail Convention</h4>
                     <p className="snippet">Indias Largest Retail Intelligence Event</p>
                    <div className="event-meta">
                        <span className="meta-item"><i className="bi bi-calendar-fill"></i> Wed, 09 Aug 2023</span>
                        <span className="meta-item"><i className="bi bi-geo-alt-fill"></i> Barkha Dutt</span>
                    </div>
                     <a href="#" className="registration-link">Registration Now <img src={arrow} alt="arrow" className="arrow"/></a>
                </div>
            </article>
            <article className="small-event-card">
                <div className="event-background">
                <div className="small-event-image">
                <img src={forum} alt="India Fashion Forum"/> 
                </div>
                </div>
                <div className="small-event-text">
                     <h4>India Fashion Forum</h4>
                     <p className="snippet">Launched in 2000, India Fashion Forum (IFF) is Indias largest</p>
                     <div className="event-meta">
                        <span className="meta-item"><i className="bi bi-calendar-fill"></i> Wed, 09 Aug 2023</span>
                        <span className="meta-item"><i className="bi bi-geo-alt-fill"></i> Barkha Dutt</span>
                    </div>
                      <a href="#" className="registration-link">Registration Now <img src={arrow} alt="arrow" className="arrow"/></a>
                </div>
            </article>
        </div>

         <div className="event-column-list">
              
            <article className="small-event-card">
            <div className="event-background">
                <div className="small-event-image">
                     <img src={forum1} alt="Archies Event"/> 
                </div>
                </div>
                <div className="small-event-text">
                      <h4>India Food Forum</h4>
                      <p className="snippet">The aisles are open at Indias most powerfulfood b2b</p>
                     <div className="event-meta">
                        <span className="meta-item"><i className="bi bi-calendar-fill"></i> Wed, 09 Aug 2023</span>
                        <span className="meta-item"><i className="bi bi-geo-alt-fill"></i> Barkha Dutt</span>
                    </div>
                      <a href="#" className="registration-link">Registration Now <img src={arrow} className="arrow" alt="arrow"/></a>
                </div>
            </article>
            <article className="small-event-card">
            <div className="event-background">
                <div className="small-event-image">
                     <img src={forum2} alt="Archies Event"/> 
                </div>
                </div>
                <div className="small-event-text">
                      <h4>India Food Forum</h4>
                      <p className="snippet">Mobile commerce has become a worldwide phenomenon</p>
                     <div className="event-meta">
                        <span className="meta-item"><i className="bi bi-calendar-fill"></i> Wed, 09 Aug 2023</span>
                        <span className="meta-item"><i className="bi bi-geo-alt-fill"></i> Barkha Dutt</span>
                    </div>
                      <a href="#" className="registration-link">Registration Now <img src={arrow} alt="arrow" className="arrow"/></a>
                </div>
            </article>
             <article className="small-event-card">
             <div className="event-background">
                <div className="small-event-image">
                     <img src={forum3} alt="Archies Event"/> 
                </div>
                </div>
                <div className="small-event-text">
                      <h4>Shopping Centres Next</h4>
                     <p className="snippet">Shopping Centres Next is Indias most differentiated</p>
                     <div className="event-meta">
                        <span className="meta-item"><i className="bi bi-calendar-fill"></i> Wed, 09 Aug 2023</span>
                        <span className="meta-item"><i className="bi bi-geo-alt-fill"></i> Barkha Dutt</span>
                    </div>
                      <a href="#" className="registration-link">Registration Now <img src={arrow} alt="arrow" className="arrow"/></a>
                </div>
            </article>
         </div>

    </div> 
</section> 

</div>
    </div>
  );
};

export default Tridots_ui;