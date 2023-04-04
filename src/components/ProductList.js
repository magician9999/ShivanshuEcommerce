import React from 'react'
import { useFilterContext } from '../context/filtercontext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

  const {filter_products,grid_view,all_products} = useFilterContext();

  if(grid_view === true){
    return <GridView products={filter_products} />

  }

  if(grid_view === false){
    return <ListView products={filter_products} />
    
  }
   
  return (
    <div>
      this is the product list component;
    </div>
  )
}

export default ProductList;
