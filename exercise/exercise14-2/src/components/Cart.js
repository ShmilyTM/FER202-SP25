import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Alert } from "react-bootstrap"; // Import Alert từ Bootstrap

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalValue } = useContext(CartContext);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleOrderConfirmation = () => {
    console.log("Xác nhận đơn hàng"); // Kiểm tra xem hàm có được gọi không
    setIsOrderConfirmed(true); // Thay đổi trạng thái để hiển thị thông báo
    clearCart(); // Xóa giỏ hàng sau khi xác nhận đơn
    alert("Đơn hàng của bạn đã được xác nhận và thanh toán thành công!"); // Thêm thông báo alert của JS

    // Dùng setTimeout để ẩn thông báo sau 3 giây
    setTimeout(() => setIsOrderConfirmed(false), 10000); // Ẩn thông báo sau 3 giây
  };

  return (
    <div className="cart-container">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="cart-item-price">${parseFloat(item.price).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p><strong>Tổng số món: {cartItems.length}</strong></p>
            <p><strong>Tổng giá trị: ${totalValue}</strong></p>
            <button onClick={clearCart} className="clear-btn">Clear Cart</button>
            <button onClick={handleOrderConfirmation} className="confirm-btn">Xác nhận đơn hàng</button>
          </div>

          {/* Hiển thị thông báo khi đơn hàng được xác nhận */}
          {isOrderConfirmed && (
            <Alert variant="success">
              Đơn hàng của bạn đã được xác nhận và thanh toán thành công!
            </Alert>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
