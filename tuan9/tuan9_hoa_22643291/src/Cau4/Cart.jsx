import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../slice/cartSlice';

const Cart = () => {
  // Dùng đúng key cartItems từ slice
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  // Kiểm tra an toàn trước khi dùng reduce
  const total = cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  return (
    <div>
      <h1 className='font-bold'>Cart- Giỏ hàng</h1>
      <button
        className='border px-2 py-1 bg-green-200 hover:bg-green-300 rounded'
        onClick={() =>
          dispatch(addItem({ id: Date.now(), name: 'SP mới', price: 100 }))
        }
      >
        Thêm sản phẩm
      </button>

      {cartItems.map(item => (
        <div key={item.id} className="my-2 flex justify-between items-center border p-2 rounded">
          <span>{item.name} - SL: {item.quantity} - Giá: {item.price}đ</span>
          <div className="space-x-2">
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))} className='text-red-500'>Xoá</button>
          </div>
        </div>
      ))}

      <p className="mt-4 font-semibold">Tổng tiền: {total}đ</p>
    </div>
  );
};

export default Cart;
