import "./landing-page.css";

export const LandingPage = () => {
  return (
    <>
      <div className="banner relative text-center">
        <img
          className="w-full"
          src={"/images/Home_main_visual_1.jpg"}
          alt="Solux landing photo"
        />
        <img
          className="solux-logo absolute"
          src={"/images/logo.png"}
          alt="Solux logo"
        />
        <div className="content absolute text-left text-white">
          10 years of dedicated <br /> expertise in solar lighting <br />{" "}
          manufacturing
        </div>
        <button className="view-more-btn rounded-full border border-white absolute text-center text-white xs:px-2 xs:py-1 md:px-4 md:py-2 xs:tracking-widest">
          VIEW MORE
        </button>
        <button className="drop-down-btn absolute">
          <img
          className="drop-down-icon"
          src={"/images/menu-dropdown.svg"}
          alt="menu dropdown image"
          />
        </button>
        <button className="email-btn absolute">
          <img
          className="email-icon"
          src={"/images/email-icon.svg"}
          alt="email icon"
          />
        </button>
      </div>

      <div className="introduction relative">
        <img
          className="introduction-background"
          src={"/images/Introduction-background.jpg"}
          alt=""
        />
        <img
          className="introduction_img absolute"
          src={"/images/photo-intro.png"}
          alt="Introduction Solux lighting product"
        />
        <div className="heading-introduction absolute">
              We manufacture light solutions<br />respecful of our environment
        </div>
        <div className="introduction-description absolute">
          For 10 years, and over 500 000 installations in 73 countries,<br />
          Solux sino-european manjor manufacturer, has been designing<br />
          and developing premium solar-powered lighting made to<br />
          illuminate all year in every condition, offering real<br />
          ecological alternative to the lighting industry.<br />
          <br />
          Solux has worked effortless to create what we define has the<br />
          ideal lighting solution to preserve our planet.<br />
        </div>
        <div className="certified absolute">
              Certified by
        </div>
        <img
        className="certified-photo absolute"
        src={"/images/iso-icons.svg"}
        alt="All certificated ISO CE TUV IP65 EMC ROHS"/>

        <ul className="list flexbox">
          <li className="list-horizontal">
            <h4 className="header-list">Solux<br/>company facts</h4>
            <h3 className="header-value">10+</h3>
            <p className="text-list">10 years in the Solar<br/>Lighting as a pure player</p>
          </li>
          <li className="list-horizontal">
            <h4 className="header-list">Installations<br/><br/></h4>
            <h3 className="header-value">500K +</h3>
            <p className="text-list">Installation realised in +73<br/>countries</p>
          </li>
          <li className="list-horizontal">
            <h4 className="header-list">Solux main<br/>Manufacture</h4>
            <h3 className="header-value">9000m2</h3>
            <p className="text-list">600 m2 dedicated Testing<br/>Lab</p>
          </li>
          <li className="list-horizontal">
            <h4 className="header-list">Pattern designs<br/>& co</h4>
            <h3 className="header-value">32</h3>
            <p className="text-list">We protect & develop our<br/>technology constantly</p>
          </li>
          <li className="list-horizontal">
            <h4 className="header-list">Dedicated<br/>people</h4>
            <h3 className="header-value">8+</h3>
            <p className="text-list">Engineers experts in light & solar<br/>lighting</p>
          </li>
        </ul>
      </div>

      <div className="middle-banner relative">
        <img
          className="middle-banner-bg"
          src={"/images/middle-banner-bg.jpg"}
          alt=""/>
        <div className="middle-banner-header absolute text-white flex items-center">
          A solution for every projects
        </div>
        <img
          className="middle-banner-ic absolute flex items-center"
          src={"/images/middle-banner-icon.svg"}
          alt=""/>
        <div className="middle-banner-desc absolute text-white flex items-center">
          Thanks to it's wide range of products offering all kind of solar lighting<br/>
          possibilities for your project
        </div>
      </div>
    </>
  );
};
