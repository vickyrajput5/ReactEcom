import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import Listview from "./Listview";


const ProductList = () => {
  const { filter_products, setGridView } = useFilterContext();

  if (setGridView) {
    return <GridView products={filter_products} />;
  }

//   if (grid_view === false) {
//     return <Listview products={filter_products} />;
//   }
};

export default ProductList;