import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {
        <section className="footer">
          <p>
            Все фотографии, тексты и видеоматериалы принадлежат их владельцам и
            использованы для демонстрации.
          </p>
          <div style={{ display: "inline-flex" }}>
            <img className="footerImg" src="../images/copyright1.png" alt="" />
            <h6> ООО "НАЛОГОВЫЙ КОНСУЛЬТАНТ", 2024 </h6>
          </div>
          <br /> <h6>ИНН 3525429677 | ОГРН 1183525029775</h6>
        </section>
      }
    </footer>
  );
};

export default Footer;