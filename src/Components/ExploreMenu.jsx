import { menu_list } from "../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="my-10">
      <div className="lg:w-[60%] ml-7">
        <h1 className="text-3xl font-semibold py-3">Explore our menu</h1>
        <p className="text-gray-500">
          Prepare your taste buds for our delectable main course options. Our
          talented chefs have crafted a variety of dishes using the finest
          ingredients and time-honored recipes. Choose from hearty pasta dishes,
          tender grilled meats, succulent seafood preparations, and flavorful
          vegetarian options.
        </p>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 py-10">
        {menu_list.map((item, idx) => (
          <div key={idx} className="flex items-center flex-col space-y-4">
            <img src={item.menu_image} alt="" />
            <h1 className="text-gray-400 text-lg">{item.menu_name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
