import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center object-cover lg:h-[36vw] rounded-2xl mx-2 mt-10 "
      style={{ backgroundImage: `url('/header_img.png')` }}
    >
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full h-full rounded-2xl flex items-center">
        <Fade duration={3000} >
          <div
            className="lg:max-w-2xl  px-6 py-3 lg:pl-20"
          >
            <h1 className="lg:text-6xl text-4xl text-white font-medium lg:py-4 py-2">
              Order your favourite food here
            </h1>
            <p className="text-white py-2 lg:py-4">
              Craving your go-to comfort meal or looking to try something new?
              With our wide variety of cuisine options, you're sure to find
              something to satisfy your taste buds. Browse our extensive menu
              featuring dishes from around the world, prepared fresh with
              high-quality ingredients
            </p>
            <button className="border-none text-[#747474] font-medium bg-white px-7 my-2 lg:my-4 py-3 rounded-full">
              View Menu
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Header;
