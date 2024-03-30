import React, { useState } from "react";

const LabForm = () => {
  const [formData, setFormData] = useState({
    city: "",
    option: "fertilizerShop", // Default option is fertilizer shop
  });

  const [output, setOutput] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    setOutput(true);
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="flex-auto px-4 lg:px-10 py-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mr-2">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              id="city"
              type="text"
              placeholder="City"
              name="city"
              required
              onChange={handleChange}
              value={formData.city}
            />
          </div>
          
          <div className="mb-3 mr-2">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="option"
            >
              Select an option
            </label>
            <select
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              id="option"
              name="option"
              onChange={handleChange}
              value={formData.option}
            >
              <option value="fertilizerShop">Fertilizer Shop</option>
              <option value="labs">Labs</option>
            </select>
          </div>

          <div className="flex justify-center my-6">
            <button
              type="submit"
              className="w-96 h-12 flex justify-center items-center text-md text-white bg-blueGray-800 hover:bg-blueGray-800 transition-all font-medium rounded-lg px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>

          {output ? (
            <div>
              <iframe
                width="100%"
                height="600"
                src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${formData.option === 'fertilizerShop' ? 'fertilizer+and+seed+shop' : 'soil+testing+labs'}+${formData.city}&ie=UTF8&t=&z=14&iwloc=B&output=embed&zoom=0`}
              >
                <a href="https://www.maps.ie/map-my-route/">Plot a route map</a>
              </iframe>
            </div>
          ) : (
            <div className="flex justify-center">
              <img src="https://res.cloudinary.com/sarveshp46/image/upload/v1673158646/nothing-here_w38mzj.webp" alt="Nothing here" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LabForm;
