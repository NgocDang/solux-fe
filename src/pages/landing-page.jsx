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
          className="introduction_img absolute"
          src={"/images/photo-intro.png"}
          alt="Introduction Solux lighting product"
        />
        <div class="heading-introduction absolute">
              We manufacture light solution<br />respecful of our environment
        </div>
        <div class="introduction-description absolute">
          For 10 years, and over 500 000 installations in 73 countries,<br />
          Solux sino-european manjor manufacturer, has been designing<br />
          and developing premium solar-powered lighting made to<br />
          illuminate all year in every condition, offering real<br />
          ecological alternative to the lighting industry.<br />
          <br />
          Solux has worked effortless to create what we define has the<br />
          ideal lighting solution to preserve our planet.<br />
        </div>
        <div class="certified absolute">
              Certified by
        </div>
        <img
        class="certified-photo absolute"
        src={"/images/iso-icons.svg"}
        alt="All certificated ISO CE TUV IP65 EMC ROHS"/>
      </div>
    </>
  );
};
