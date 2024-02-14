import React, { Fragment, useState } from "react";
import x from "./OptionsNav.module.css";
import { MdPhoneIphone } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import palestine from "../../Images/palestine.png";
import Arabic from "../../Images/Arabic.png";
const OptionsNav = () => {
  const [currencies, setCurrencies] = useState(false);
  const [languages, setLanguages] = useState(false);
  const [currency, setCurrency] = useState("$ USD");
  const [language, setLanguage] = useState({
    flag: palestine,
    lang: "English"
  });
  const currencyMenu = () => {
    setCurrencies(!currencies);
  };
  const languagesMenu = () => {
    setLanguages(!languages);
  };
  const changeCurrency = (str) => {
    setCurrency(str);
  };
  const changeLanguage = (fl, lan) => {
    setLanguage({ flag: fl, lang: lan });
  };
  return (
    <Fragment>
      <header class={x.header}>
        <nav className="OptionNav" class={x.OptionNav}>
          <ul class={x.ul}>
            <li
              className="ln"
              class={x.ln}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "3px"
                }}
                onClick={languagesMenu}
              >
                <img
                  alt=""
                  src={language.flag}
                  style={{ width: "25px", height: "25px" }}
                />
                {language.lang}
                <div
                  style={{ display: languages ? "block" : "none" }}
                  className="langs"
                  class={x.langs}
                >
                  <ol>
                    <li onClick={() => changeLanguage(palestine, "English")}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "3px"
                        }}
                      >
                        <img
                          alt=""
                          src={palestine}
                          style={{ width: "20px", height: "20px" }}
                        />
                        English
                      </div>
                    </li>
                    <li onClick={() => changeLanguage(Arabic, "Arabic")}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "3px"
                        }}
                      >
                        <img
                          alt=""
                          src={Arabic}
                          style={{ width: "22px", height: "20px" }}
                        />
                        Arabic
                      </div>
                    </li>
                  </ol>
                </div>
                {!languages ? (
                  <RiArrowDropDownLine size={25} />
                ) : (
                  <RiArrowDropUpLine size={25} />
                )}
              </div>
            </li>
            <li
              onClick={currencyMenu}
              className="cur"
              class={x.cur}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {currency}
              <div
                style={{ display: currencies ? "block" : "none" }}
                className="currencies"
                class={x.currencies}
              >
                <ol>
                  <li onClick={() => changeCurrency("$ USD")}>$ USD</li>
                  <li onClick={() => changeCurrency("£ EGP")}>£ EGP</li>
                  <li onClick={() => changeCurrency("€ EUR")}>€ EUR</li>
                </ol>
              </div>
              {!currencies ? (
                <RiArrowDropDownLine size={25} />
              ) : (
                <RiArrowDropUpLine size={25} />
              )}
            </li>

            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "text"
              }}
            >
              <MdPhoneIphone />
              123-456-789
            </li>
          </ul>
          <ol class={x.ol}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px"
              }}
            >
              <FaCodeCompare />
              Compare
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px"
              }}
            >
              <FaRegHeart />
              Wishlist
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px"
              }}
            >
              <FaUserAlt size={15} />
              Login
            </li>
          </ol>
        </nav>
      </header>
      {/* <hr /> */}
    </Fragment>
  );
};

export default OptionsNav;
