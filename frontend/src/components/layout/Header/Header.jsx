import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const options = {};

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="green"
      burgerColorHover="#a62d24"
      navColor1="lightblue"
      logo="https://res.cloudinary.com/sayur-kangkung/image/upload/v1654156721/saya/Capture_htu2wr.jpg"
      logoWidth="8vmax"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.2vmax"
      link1Color="rgba(35, 35, 35, 0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link2ColorHover="#eb4034"
      link3ColorHover="#eb4034"
      link4ColorHover="#eb4034"
      link1Margin="1vmax"
      profileIconUrl="/login"
      searchIcon={true}
      SearchIconElement={BsSearch}
      searchIconColor="rgb(35, 35, 35, 0.8)"
      profileIcon={true}
      profileIconColor="rgb(35, 35, 35, 0.8)"
      ProfileIconElement={CgProfile}
      cartIcon={true}
      CartIconElement={AiOutlineShoppingCart}
      cartIconColor="rgb(35, 35, 35, 0.8)"
      profileIconColorHover="#eb4034"
      searchIconColorHover="#eb4034"
      cartIconColorHover="#eb4034"
    />
  );
};

export default Header;
