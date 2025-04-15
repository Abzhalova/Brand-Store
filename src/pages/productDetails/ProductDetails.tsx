import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  deleteProduct,
  getProductById,
} from "../../features/slices/productsSlice";
import { Box, LinearProgress } from "@mui/material";

import { CartItem } from "../../types/types";
import { addToCart } from "../../features/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { productById, error, loading } = useAppSelector(
    (state) => state.products
  );

  const [selectImg, setSelectImg] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleClickImage = (image: string) => {
    setSelectImg(image);
  };

  const handleDeleteProduct = (id: number) => {
    dispatch(deleteProduct(id));
    navigate("/");
  };

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart({...product, quantity: 1}));
  };

  useEffect(() => {
    if (productById) {
      setSelectImg(productById.images[0]);
    }
  }, [productById]);

  useEffect(() => {
    dispatch(getProductById(Number(id)));
  }, [dispatch, id]);

  if (error) return <div>Продукты не найдены</div>;
  if (loading)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );

  return (
    <div>
      {productById && (
        <div className="flex gap-5 items-center mt-8 ml-6">
          <div className="flex flex-col gap-5">
            {productById.images.map((img) => (
              <img
                key={img}
                src={img}
                alt="error :("
                className="w-[100px] h-[120px] cursor-pointer"
                onClick={() => handleClickImage(img)}
              />
            ))}
          </div>
          <img src={selectImg} alt="error :(" className="w-[600px] h-[600]" />
          <div>
            <h1 className=" text-lg text-gray-400">
              Название:{" "}
              <span className="text-2xl text-black ml-5">
                {productById.title}
              </span>
            </h1>
            <p className=" text-lg text-gray-400">
              Цена:{" "}
              <span className="text-2xl text-yellow-300 ml-5">
                {productById.price}
              </span>{" "}
              сом
            </p>
            <p className="w-[600px] text-lg text-gray-400">
              Описание:{" "}
              <span className=" text-black ml-5">
                {productById.description}
              </span>
            </p>
            <Link to={`/update-product/${productById.id}`} className="py-3 px-14 rounded-lg bg font-mono  bg-green-600 hover:bg-green-400 text-white mt-10 mr-10">
              Изменить
            </Link>
            <button
              className="w-[200px] h-[40px] rounded-lg bg font-mono mt-5 bg-slate-600 hover:bg-slate-400 text-white  mr-10"
              onClick={() => handleAddToCart({...productById, quantity: 1})}
            >
              Добавить в корзину
            </button>
            <button
              className="w-[200px] h-[40px] rounded-lg bg font-mono mt-5 bg-red-600 hover:bg-red-400 text-white "
              onClick={() => handleDeleteProduct(productById.id)}
            >
              Удалить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
