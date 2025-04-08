import Footer from "../../components/footer/Footer";
import BrandsBlock from "../brandBlock/BrandsBlock";
import DiscountBlock from "../discountBlock/DiscountBlock";

const MainPage: React.FC = () => {
  return (
    <>
      <DiscountBlock />
      <BrandsBlock />
      <Footer />
    </>
  );
};

export default MainPage;
