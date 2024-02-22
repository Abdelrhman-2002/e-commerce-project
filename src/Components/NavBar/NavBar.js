import React, { Fragment, useState, useEffect } from "react";
import y from "./NavBar.module.css";
import storeLogo from "../../Images/store.png";
import { IoMdSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [bigMenu, setBigMenu] = useState(false);
  const numOfItems = useSelector((state) => state.cart.cart.length);
  const toggleBigMenu = () => {
    setBigMenu(!bigMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const handleResize = (e) => {
      if (e.currentTarget.innerWidth < 612) {
        setMenuButton(true);
      } else {
        setMenuButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const DropdownMenu = () => (
    <div className={y.dropdownMenu}>
      <ul>
        <li>
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About Us</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={"/404"}>404 Not Found</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>cart</NavLink>
        </li>
      </ul>
    </div>
  );
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <Fragment>
      <nav
        className={y.mainNav}
        style={{ position: isFixed ? "fixed" : "static" }}
      >
        <div className={y.logo}>
          <img src={storeLogo} alt="" />
          <p>Shoppa</p>
        </div>
        <ul style={{ display: !menuButton ? "flex" : "none" }}>
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li
            style={{ padding: "15px", position: "relative", height: "60px" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="menu">
              <li>
                <p>
                  Pages <RiArrowDropDownLine size={20} />
                </p>{" "}
              </li>
              {isDropdownVisible && <DropdownMenu />}
            </div>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
        </ul>
        <ol>
          <li>
            <IoMdSearch size={24} />
          </li>
          <li className={y.cart}>
            <NavLink
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              to={"/cart"}
            >
              <TiShoppingCart size={24} />
            </NavLink>

            <div className={y.itemNum}>
              <p>{numOfItems}</p>
            </div>
          </li>
          <li
            onClick={toggleBigMenu}
            style={{ display: menuButton ? "flex" : "none" }}
            className="bigMenuButton"
          >
            {!bigMenu ? <IoIosMenu size={24} /> : <IoClose size={24} />}
            <div
              style={{
                display: bigMenu ? "flex" : "none",
                top: !isFixed ? "110px" : "50px"
              }}
              className={y.elbigMenu}
            >
              <ol>
                <li>
                  <NavLink to={"/home"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
                <li>
                  <NavLink to={"/cart"}>cart</NavLink>
                </li>
                <li>
                  <NavLink to={"/404"}>404 Not Found</NavLink>
                </li>
              </ol>
            </div>
          </li>
        </ol>
      </nav>
    </Fragment>
  );
};

export default NavBar;
