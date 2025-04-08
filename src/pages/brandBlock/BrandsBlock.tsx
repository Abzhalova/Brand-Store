import React from "react";
import Shanel from "../../assets/Shanel.svg";
import DG from "../../assets/DG.svg";
import Dior from "../../assets/Dior.svg";
import Versace from "../../assets/Versace.svg";
import Zara from "../../assets/zara.svg";
import Gucci from "../../assets/Gucci.svg";
import BrandsText from "../../assets/BrandsText.svg";

const BrandsBlock: React.FC = () => {
  return (
    <div style={{width: '500px', margin: '90px 500px'}}>
      <img src={BrandsText} alt="error"  style={{marginLeft: '180px'}}/>
      <div style={{width:'500px', display:'flex',alignItems:'center' , justifyContent:'space-between', marginTop:'25px'}}>
        <img src={Shanel} alt="error" />
        <img src={DG} alt="error" />
        <img src={Dior} alt="error" />
        <img src={Versace} alt="error" />
        <img src={Zara} alt="error" />
        <img src={Gucci} alt="error" />
      </div>
    </div>
  );
};

export default BrandsBlock;
