import React from 'react';
import Topbar from '../Shared/Topbar/Topbar';
import Menubar from '../Shared/Menubar/Menubar';
import Cover from '../../Components/Cover/Cover';
import Products from '../../Components/Products/Products';
import '../../Pages/Shared/Topbar/Topbar';


const Shop = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Menubar></Menubar>
      <Cover></Cover>
      <Products></Products>
    </div>
  );
};

export default Shop;