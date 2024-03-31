import React from "react";
import Layout from "./Layout";
import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

const FertilizerForm = () => {
  const [formData, setFormData] = useState({
    Location: "mumbai",
    Moist: 0,
    Soil: 0,
    Crop: 0,
    N: 0,
    K: 0,
    P: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [output, setOutput] = useState(null);
  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setIsLoading(true);
    console.log(formData);
    let data = null;

    await axios
      .post("http://192.168.189.180:5000/fertilizer-predict", {
        location: formData.Location,
        Moist: Number(formData.Moist),
        Soil: Number(formData.Soil),
        Crop: Number(formData.Crop),
        N: Number(formData.N),
        K: Number(formData.K),
        P: Number(formData.P),
      })
      .then(function (response) {
        setIsDisabled(false);
        setIsLoading(false);
        data = response.data;
        console.log(data);
        setOutput(data);
        console.log(output);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFormData({
      Location: formData.Location,
      Moist: 0,
      Soil: 0,
      Crop: 0,
      N: 0,
      K: 0,
      P: 0,
    });
  };
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="flex-auto px-4 lg:px-10 py-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="Location"
              >
                Location
              </label>
              <input
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                id="Location"
                placeholder="Location"
                name="Location"
                required
                onChange={handleChange}
                value={formData.Location}
              />
            </div>
            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="Moist"
              >
                Moisture
              </label>
              <input
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                id="Moist"
                type="number"
                placeholder="Moisture"
                name="Moist"
                required
                min="0"
                max="100"
                onChange={handleChange}
                value={formData.Moist}
              />
            </div>
            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="N"
              >
                Nitrogen (in PPM)
              </label>
              <input
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                id="N"
                type="number"
                placeholder="Nitrogen"
                name="N"
                required
                min="0"
                max="100"
                onChange={handleChange}
                value={formData.N}
              />
            </div>
            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="K"
              >
                Potassium (in PPM)
              </label>
              <input
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                id="K"
                type="number"
                placeholder="Potassium"
                name="K"
                required
                min="0"
                max="100"
                onChange={handleChange}
                value={formData.K}
              />
            </div>
            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="P"
              >
                Phosphorus (in PPM)
              </label>
              <input
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                id="P"
                type="number"
                placeholder="Phosphorous"
                name="P"
                required
                min="0"
                max="100"
                onChange={handleChange}
                value={formData.P}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="Crop"
              >
                Crop Type
              </label>
              <select
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                id="Crop"
                name="Crop"
                required
                onChange={handleChange}
                value={formData.Crop}
              >
                <option value="0">Barley</option>
                <option value="1">Cotton</option>
                <option value="2">Ground Nuts</option>
                <option value="3">Maize</option>
                <option value="4">Millets</option>
                <option value="5">Oil seeds</option>
                <option value="6">Paddy</option>
                <option value="7">Pulses</option>
                <option value="8">Sugarcane</option>
                <option value="9">Tobacco</option>
                <option value="10">Wheat</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="Soil"
              >
                Soil Type
              </label>
              <select
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                id="Soil"
                name="Soil"
                required
                onChange={handleChange}
                value={formData.Soil}
              >
                <option value="0">Black</option>
                <option value="1">Clayey</option>
                <option value="2">Loamy</option>
                <option value="3">Red</option>
                <option value="4">Sandy</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isDisabled}
              className="w-96 h-12 flex justify-center items-center text-md text-white bg-blueGray-800 hover:bg-blueGray-800 transition-all font-medium rounded-lg px-5 py-2.5 text-center"
            >
              {isLoading ? (
                <ReactLoading
                  type="bars"
                  color="#ffffff"
                  height={25}
                  width={25}
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
          {output ? (
            <div className="px-6 py-4 border-0 rounded relative my-4">
              <div
                className="bg-blue-100 border-t-4 border-blue-500 rounded-b flex text-blue-900 px-4 py-3 shadow-md"
                role="alert"
              >
                <div className="flex items-center">
                  <p className="font-bold text-xl">Recommended Fertilizer: </p>
                  <p className="text-lg ml-4">{output.name}</p>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <img className="w-96" src={output.img} alt="" />
              </div>
              <div className="mt-4">
                <p className="font-bold text-xl">How to use: </p>
                <p className="text-lg">{output.how_to_use}</p>
              </div>
              <div className="mt-4">
                <p className="font-bold text-xl">LINK TO BUY:</p>
                <a
                  href={output.buylink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {output.buylink}
                </a>
                <div>
                  <img src={output.image} alt="fertilizer image " width="200" height="150" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <img src="https://res.cloudinary.com/sarveshp46/image/upload/v1673158646/nothing-here_w38mzj.webp" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FertilizerForm;
