import React from 'react';
import {FruitSearchBar} from "./fruitsearchbar.js";
import {FruitPrice} from "./fruitprice.js";
import {AddButton} from "./AddButton.js";
import {TotalPrice} from "./TotalPrice.js";

export const Cart = () =>{
  return(
      <div>
          <FruitSearchBar />
          <AddButton />
          <FruitPrice />
          <TotalPrice />
      </div>
  );
};