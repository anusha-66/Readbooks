import React, { useEffect, useState } from "react";
import { FaMagic } from 'react-icons/fa';

const WishList = () => {
    
    return (
        <>
          <div className="nav-wishlist">
            <div className="button">
              <FaMagic className="wishListIcon" />
              <span>Wish List</span>
            </div>
          </div>
        <div className="side-menu">
            <li>book 1</li>
            <li>book 2</li>
            <li>book 3</li>
        </div>
        </>
    );
};

export default WishList;
