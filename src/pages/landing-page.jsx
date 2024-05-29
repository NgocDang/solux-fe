import "./landing-page.css";

export const LandingPage = () => {
  return (
    <>
      <div className="banner relative text-center">
        <img
          className="w-full"
          src={"/images/Home_main_visual_1.jpg"}
          alt="Solux landing"
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
            alt="menu dropdown"
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

      <div className="xs:flex xs:flex-col xs:p-10 xs:pb-12 sm:p-20 sm:pb-24 xs:gap-2 md:px-32 md:pt-20 md:pb-32 md:gap-8 lg:flex-row lg:gap-24 2xl:gap-32">
        <img
          className="xs:grow xs:w-full md:grow-0 lg:w-1/2 xl:shrink"
          src={"/images/photo-intro.png"}
          alt="Introduction Solux lighting product"
        />
        <div className="grow flex justify-between flex-col xs:gap-5 md:gap-10">
          <span className="heading-introduction xs:text-xl lg:text-4xl">
            We manufacture light solutions respecful of our environment
          </span>
          <div className="flex flex-col gap-4 xs:text-xs lg:text-xl lg:w-4/5">
            <span>
              For 10 years, and over 500 000 installations in 73 countries,
              Solux sino-european manjor manufacturer, has been designing and
              developing premium solar-powered lighting made to illuminate all
              year in every condition, offering real ecological alternative to
              the lighting industry.
            </span>
            <span>
              Solux has worked effortless to create what we define has the ideal
              lighting solution to preserve our planet.
            </span>
          </div>
          <div className="flex flex-col xs:gap-2 md:gap-3 lg:gap-5">
            <span className="xs:text-xs md:text-xl lg:text-2xl font-bold">
              Certified by
            </span>
            <img
              className="md:w-2/3 lg:w-full xl:w-2/3 2xl:w-1/2"
              src={"/images/iso-icons.svg"}
              alt="All certificated ISO CE TUV IP65 EMC ROHS"
            />
          </div>
        </div>
      </div>

      <div className="grid xs:grid-cols-1 md:grid-cols-5 grid-cols-5 xs:divide-y md:divide-x divide-black xs:border-t md:divide-y-0 xs:border-t-black">
        {[
          {
            title: "Solux company fact",
            amount: "10+",
            content: "10 years in the Solar Lighting as a pure player",
          },
          {
            title: "Installations",
            amount: "500K+",
            content: "Installation realised in +73 countries",
          },
          {
            title: "Solux main Manufacture",
            amount: "9000m2",
            content: "600 m2 dedicated Testing Lab",
          },
          {
            title: "Pattern designs & co",
            amount: "32",
            content: "We protect & develop our technology constantly",
          },
          {
            title: "Dedicated people",
            amount: "8+",
            content: "Engineers experts in light & solar lighting",
          },
        ].map((x) => (
          <div className="flex flex-col p-4 gap-5">
            <span>{x.title}</span>
            <span>{x.amount}</span>
            <span>{x.content}</span>
          </div>
        ))}
      </div>
      {/* <div className="middle-banner">
        <div className="middle-banner-header absolute text-white">
          A solution for every projects
        </div>
        <img
          className="middle-banner-ic absolute"
          src={"/images/middle-banner-icon.svg"}
          alt=""
        />
        <div className="middle-banner-desc absolute text-white">
          Thanks to it's wide range of products offering all kind of solar
          lighting
          <br />
          possibilities for your project
        </div>
      </div> */}
    </>
  );
};
