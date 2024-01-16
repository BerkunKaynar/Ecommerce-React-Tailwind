import React from "react";
import { useState, useEffect } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data, "data");
      setCategory(data);
    };
    fetchCategory();
  }, []);

  if (category.length === 0) return <div>Loading.....</div>;

  return (
    <>
      <FeatureCard cards={category} />
    </>
  );
};

export default Categories;
