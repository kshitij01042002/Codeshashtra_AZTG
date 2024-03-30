import React, { useState } from "react";
import Select from "react-select";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "firebase/compat/storage";
import ClipLoader from "react-spinners/ClipLoader";

const categories = [
  { value: "equipments", label: "Equipments" },
  { value: "fertilizer", label: "Fertilizer" }
];

const subcategories = [
  { value: "compost", label: "Shirt" },
  { value: "liquid", label: "T-shirt" },
  { value: "shoes", label: "Shoes" },
  { value: "pants", label: "Pant" },
  { value: "skirt", label: "Skirt" },
  { value: "casual", label: "Casual" },
  { value: "sports", label: "Sports" },
  { value: "formal", label: "Formal" },
];

export const Admin = () => {
  const [title, settitle] = useState(null);
  const [desc, setdesc] = useState(null);
  const [price, setprice] = useState(null);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [selectedSubCategory, setselectedSubCategory] = useState(null);
  const [imgUpload, setimgUpload] = useState(null);
  const [loading, setloading] = useState(false);

  const addProduct = async () => {
    setloading(true);
    const timestamp = new Date().getTime();
    const imgfile = `${timestamp + imgUpload.name}`;
    const imageRef = ref(storage, `${selectedCategory.value}/${imgfile}`);

    try {
      uploadBytes(imageRef, imgUpload)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              addDoc(collection(db, "Products"), {
                category: selectedCategory.value,
                price: price,
                title: title,
                desc: desc,
                subCategory: 'compost',
                imgurl: url,
              })
                .then(() => {
                  setloading(false);
                  alert("Product Added Successfully");
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });
            })
            .catch((error) => {
              console.error("Error getting download URL: ", error);
            });
        })
        .catch((error) => {
          console.error("Error uploading bytes: ", error);
        });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center space-y-5"
      style={{ margin: 20 }}
    >
      <ClipLoader loading={loading} />
      <input
        className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
        onChange={(e) => settitle(e.target.value)}
        placeholder="Name of the Product"
        type="text"
        name="title"
        required
      />
      <input
        className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
        onChange={(e) => setdesc(e.target.value)}
        placeholder="Enter Description of the project"
        type="text"
        name="desc"
        required
      />
      <input
        className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
        onChange={(e) => setprice(e.target.value)}
        placeholder="Enter Price"
        type="number"
        name="price"
        required
      />
      <input
        className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
        onChange={(e) => setimgUpload(e.target.files[0])}
        placeholder="Enter Price"
        type="file"
        accept="image/*"
        name="image"
        required
      />
      <Select
        className="placeholder:text-gray-800 px-5 py-1  w-80"
        options={categories}
        isClearable={true}
        name="category"
        defaultValue={selectedCategory}
        onChange={setselectedCategory}
        placeholder="Category"
        required
      />

      <div className="flex justify-center items-center w-72 bg-black text-white py-2">
        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
};

