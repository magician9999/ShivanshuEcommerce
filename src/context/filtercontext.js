import React,{ createContext, useContext,useReducer, useEffect, useState } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterreducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [] ,
    all_products: [] ,
    grid_view: true,
    sorting_value: "lowest",
    filters: {
      text: "",
      category: "all",
      company: "all",
      color: "all",
      maxPrice: 0,
      price: 0,
      minPrice: 0,
    },
  
  };


export const FilterContextProvider = ({ children }) => {
  
  const { products } = useProductContext();
 
  
  const [state,dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const sorting = () => {
    dispatch({ type: "GET_SORT_LIST" })
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [products,state.sorting_value,state.filters]);
 

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
 
 
 


  return (
    <FilterContext.Provider
      value={{...state , setGridView ,setListView,sorting}}>
      {children}
    </FilterContext.Provider>
  );
};


export const useFilterContext = () => {
  return useContext(FilterContext);
};

