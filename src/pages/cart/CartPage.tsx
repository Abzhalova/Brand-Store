import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../../features/slices/cartSlice";


const CartPage: React.FC = () => {
  const { items, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (items.length === 0) return <h2>Корзина пусто</h2>;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Товары</TableCell>
              <TableCell align="right">Название</TableCell>
              <TableCell align="right">Цена</TableCell>
              <TableCell align="right">категория</TableCell>
              <TableCell align="right">Количество</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={item.images[0]}
                    alt="error"
                    className="w-16 rounded-full"
                  />
                </TableCell>
                <TableCell align="right">{item.title}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.category.name}</TableCell>
                <TableCell align="right">
                  <input
                  className="w-10"
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                  />
                </TableCell>

                <TableCell align="right">
                  {" "}
                  <DeleteIcon
                    onClick={() => dispatch(removeFromCart(item.id))}
                    color="error"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="w-full  h-[100px] flex justify-between items-center">
             <p>
              Общая стоимость: {totalPrice} сом
             </p>
             <button
              className="w-[200px] h-[40px] rounded-lg bg font-mono mt-5 bg-red-600 hover:bg-red-400 text-white "
              onClick={() => dispatch(clearCart())}
            >
              Очистить корзину
            </button>
        </div>
      </TableContainer>
    </>
  );
};

export default CartPage;
