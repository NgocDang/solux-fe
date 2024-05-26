import "./landing-page.css";

export const LandingPage = () => {
  return (
    <div className="banner relative text-center">
      <img
        className="w-full"
        src={"/images/Home_main_visual_1.jpg"}
        alt="Snow"
      />
      <div
        className="content absolute text-left text-white"
        style={{
          fontFamily: "LightEx",
        }}
      >
        10 years of dedicated <br /> expertise in solar lighting <br />{" "}
        manufacturing
      </div>
      <button
        className="view-more-btn rounded-full border border-white absolute text-center text-white xs:px-2 xs:py-1 md:px-4 md:py-2 xs:tracking-widest"
        style={{
          fontFamily: "AG",
        }}
      >
        VIEW MORE
      </button>
    </div>
  );
};
