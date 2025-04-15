import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  fetchProducts,
  filterByCategory,
  getCategories,
  setCurrentPage,
  toggleLike,
} from "../../features/slices/productsSlice";
import { Link } from "react-router-dom";
import {
  Box,
  LinearProgress,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { CartItem, Product } from "../../types/types";
import { addToCart } from "../../features/slices/cartSlice";

const ProductsPage: React.FC = () => {
  const {
    filteredProducts,
    categories,
    selectedCategory,
    currentPage,
    itemsPerPage,
    loading,
    error,
  } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const searchFilterProducts = filteredProducts.filter((product) =>
    product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const handleCategoryChange = (
    event: SelectChangeEvent<{ value: string }>
  ): void => {
    const category = event.target.value as string;
    dispatch(filterByCategory(category === "Все категории" ? null : category));
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    dispatch(setCurrentPage(page));
  };

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getCategories());
  }, [dispatch]);

  if (error) return <div>Продукты не найдены</div>;
  if (loading)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentPageProducts = searchFilterProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(searchFilterProducts.length / itemsPerPage);

  return (
    <>
      <input
        type="text"
        placeholder="Поиск товара..."
        className="w-full  h-10 border border-black pl-5 mt-3"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "20px 30px 10px",
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={{ value: selectedCategory || "" }}
          sx={{ width: "auto" }}
          onChange={handleCategoryChange}
        >
          <MenuItem value={"Все категории"}>Все категории</MenuItem>
          {categories.map((category) => (
            <MenuItem value={category.name} key={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-wrap gap-20 justify-around mt-10 cursor-pointer">
        {currentPageProducts.map((product: Product) => (
          <div key={product.id} className="w-[215px] h-full">
            <Link to={`/product-details/${product.id}`}>
              <img
                src={product.images[0]}
                alt="error"
                className="w-full h-[250px] rounded-lg"
              />
            </Link>
            <div className="flex justify-between items-center">
              <p className="text-orange-600 font-bold mt-3">
                {product.price} сом
              </p>
              <button onClick={() => dispatch(toggleLike(product.id))}>
                {product.like ? "❤️" : "🤍"}
              </button>
            </div>
            <p className="text-xl font-sans mt-2">{product.title}</p>
            <button
              className="w-full h-10 rounded-2xl text-white text-md font-mono mt-5 bg-slate-600 hover:bg-slate-400"
              onClick={() => handleAddToCart({ ...product, quantity: 1 })}
            >
              В корзину
            </button>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          marginTop="50px"
        >
          <Pagination
            count={totalPages}
            variant="outlined"
            color="primary"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      )}
    </>
  );
};

export default ProductsPage;
