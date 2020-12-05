import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import EditionProduct from "../../components/LugProduct/EditionProduct";
import CabinProduct from "../../components/LugProduct/CabinProduct";
import "./ProductList.scss";

const ProductList = () => {
  const getData = async () => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => console.log(res.products));
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
};

export default withRouter(ProductList);
