


import React from 'react';
import Menulist from "../Data/data";
import Layout from '../component/layout/Layout';
import "../Style/Menustyle.css"

function Menu() {
  return (
    <Layout>
      {
        Menulist.map((menu, index) => (
          <div key={index} style={{ marginBottom: "20px" }}  className='menu'>
            <img src={menu.image} alt={menu.name} style={{ height: "400px", width: "100%", objectFit: "cover" }} />
            <h2>{menu.name}</h2>
            <p>{menu.description}</p>
            <p>Price: ${menu.price}</p>
          </div>
        ))
      }
    </Layout>
  );
}

export default Menu;
