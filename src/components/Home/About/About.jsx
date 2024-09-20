import person from "../../../assets/image/Rectangle 4.jpg";
import pers from "../../../assets/image/Rectangle 5.jpg";

const About = () => {
  return (
    <div className="bg-background">
      <div className="hero  min-h-screen pt-36 pb-48">
        <div className="hero-content flex-col lg:flex-row sm:gap-36 md:gap-36 lg:gap-0">
          <div className="w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={pers}
              className="absolute top-1/2 right-10 w-1/2 rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-white w-1/2">
            <h4 className="text-xl text-indigo-300  pb-5">About</h4>
            <h1 className="text-5xl font-bold">
              <span className="text-indigo-300">We are </span>qualified & of
              experience in <span className="text-indigo-300">this field</span>
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
          </div>
        </div>
      </div>

      {/*         
      <div className="container mx-auto  pt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="relative">
          <img className="" src={img_about_2} alt="" />
          <img className="absolute	left-10 top-1/2" src={img_about_1} alt="" />
        </div>
        <div className="text-white max-w-xl">
          <h4 className="text-xl text-indigo-300  pb-5">About</h4>
          <h2 className="  text-5xl pb-5">
            
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </div>
      </div> */}
    </div>
  );
};

export default About;
