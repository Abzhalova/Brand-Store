import React from "react";
import EllipseImg from "../../assets/Ellipse section3.svg";
import removeBg from "../../assets/image-removebg-preview section4.svg";
import headerFon from "../../assets/header-fon.svg";
import vector from "../../assets/Vector 8.svg";
import { Link } from "react-router-dom";

const DiscountBlock: React.FC = () => {
  return (
    <div
      style={{
        height: "600px",
        display: "flex",
        position: "relative",
        background: "#F7C59F",
        top: "50px",
      }}
    >
      <div style={{ position: "absolute" }}>
        {" "}
        <img
          src={headerFon}
          alt="error"
          style={{ height: "600px", background: "#111827" }}
        />
      </div>

      <div
        style={{
          position: "relative",
          left: "900px",
          width: "620px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={EllipseImg} alt="error" style={{ position: "relative" }} />
        <img src={removeBg} alt="error" style={{ position: "absolute" }} />
      </div>
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "270px",
          background: "#1F2937",
          padding: "40px 50px",
          margin: "150px 200px",
        }}
      >
        <div>
          <h1
            style={{
              color: "white",
              marginBottom: " 15px",
              fontFamily: "Almarai",
            }}
            className="text-4xl"
          >
            Получите скидку до 30%
          </h1>
          <h1
            style={{
              color: "#F7C59F",
              marginBottom: " 15px",
              fontFamily: "Almarai",
            }}
          >
            Новые поступления
          </h1>
          <p
            style={{
              color: "#F3F4F6",
              marginBottom: " 25px",
              fontFamily: "Almarai",
            }}
          >
            Представляем нашу последнюю коллекцию продукции
          </p>
        </div>

        <button
          style={{
            width: "200px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            color: "#F3F4F6",
            background: "#111827",
            border: "1px solid #F3F4F6",
          }}
        >
          <Link to="/">ОФОРМИТЬ ЗАКАЗ</Link>
          <img src={vector} alt="error" />
        </button>
      </div>
    </div>
  );
};

export default DiscountBlock;
