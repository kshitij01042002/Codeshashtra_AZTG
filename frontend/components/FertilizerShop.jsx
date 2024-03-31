import React, { useState } from "react";
import axios from "axios";

const FertilizerShop = () => {
  const [formData, setFormData] = useState({
    city: "",
  });

  const [output, setOutput] = useState(false);

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    setOutput(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-bold text-gray-700"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="w-full px-3 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:border-blue-500"
              id="city"
              type="text"
              placeholder="Enter city name"
              name="city"
              required
              onChange={handleChange}
              value={formData.city}
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {output && (
          <div className="mt-8">
            <iframe
              className="w-full h-96"
              src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=fertilizer+and+seed+shop+${formData.city}&ie=UTF8&t=&z=14&iwloc=B&output=embed&zoom=0`}
              title="Fertilizer Shop Location"
            >
              <a href="https://www.maps.ie/map-my-route/">Plot a route map</a>
            </iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default FertilizerShop;
