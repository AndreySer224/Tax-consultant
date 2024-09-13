import React from "react";

const Header = () => {
  return (
    <header>
      {
        <nav
          className="navbar navbar-expand-sm bg-black"
          style={{ height: "100px", backgroundColor: "black" }}
        >
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a
                  className="nav-link active"
                  onClick="window.location.href='#section1'"
                  style={{ color: "white" }}
                > */}
                <a
                  className="nav-link active"
                  href="#section1"
                  // onClick={() => (window.location.href = "#section1")}
                  style={{ color: "white" }}
                >
                  Налоговый консультант
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  style={{ color: "white" }}
                >
                  О нас
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#services"
                  style={{ color: "white" }}
                >
                  Наши услуги
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contacts"
                  style={{ color: "white" }}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </nav>
      }
    </header>
  );
};

export default Header;