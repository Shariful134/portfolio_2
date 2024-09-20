import banner from "../../assets/image/Mask_group-removebg-preview.png";

const Banner = () => {
  return (
    <div className="bg-background  ">
      <div className="container mx-auto">
        <div className=" pt-10 flex items-center justify-between flex-col lg:flex-row sm:gap-20 md:gap-20 lg:gap-0">
          <div>
            <h2 className="text-white text-5xl max-w-xl pb-5 ">
              <span className="text-indigo-300">Welcome</span> To Our Website
              For <span className="text-indigo-300">Purches Products</span>
            </h2>
            <p className="text-white pt-5 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
          </div>
          <img
            className="pt-10 ps-7 pr-7 bg-fuchsia-400 rounded-3xl "
            src={banner}
            alt="bannerImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
