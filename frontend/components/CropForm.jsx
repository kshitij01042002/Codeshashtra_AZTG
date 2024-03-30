import React from "react";
import { useState } from "react";
import axios from "axios";
import CardTable from "components/Cards/CardTable.js";
import ReactLoading from "react-loading";

const CropForm = () => {
  const [formData, setFormData] = useState({
    N: 0,
    P: 0,
    K: 0,
    Location: "mumbai",
    PH: 0,
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      .post("http://192.168.189.180:5000/crop-predict", {
        N: Number(formData.N),
        P: Number(formData.P),
        K: Number(formData.K),
        Location: formData.Location,
        PH: Number(formData.PH),
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
      N: 0,
      P: 0,
      K: 0,
      Location: formData.Location,
      PH: 0,
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
                htmlFor="PH"
              >
                PH
              </label>
              <input
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                id="PH"
                type="number"
                placeholder="PH"
                name="PH"
                required
                min="0"
                max="100"
                onChange={handleChange}
                value={formData.PH}
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

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isDisabled}
              className="w-full md:w-96 h-12 flex justify-center items-center text-md text-white bg-blueGray-800 hover:bg-blueGray-800 transition-all font-medium rounded-lg px-5 py-2.5 text-center"
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
            <div className="mt-2 p-4 mb-4 text-sm rounded-lg" role="alert">
              <CardTable output={output} />
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

export default CropForm;
