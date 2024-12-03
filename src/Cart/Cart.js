import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";
import { useEffect, useState } from "react";

const Cart = ({ cart, products, handleClearCart, getOffer, offer }) => {
  const [freeItem, setFreeItem] = useState(false);

  // Tính toán tổng giá tiền của giỏ hàng và đảm bảo là số nguyên
  const calculateTotalPrice = () => {
    let total = 0;
    // Tính tổng giá của các sản phẩm trong giỏ hàng
    cart.forEach(product => {
      total += product?.price * product?.quantity;
    });

    // Nếu có sản phẩm được tặng, trừ giá sản phẩm đó
    if (offer && offer.price) {
      total -= offer.price;
    }

    // Làm tròn tổng giá xuống số nguyên
    return Math.floor(total);
  };

  // Cập nhật trạng thái freeItem khi có sự thay đổi trong giỏ hàng
  useEffect(() => {
    if (cart.length) {
      setFreeItem(true);
    } else {
      setFreeItem(false);
    }
  }, [cart]);

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Order Shoes</h1>
        <button
          onClick={handleClearCart}
          className="remove-button"
          title="Clear Cart"
        >
          <IoTrashBin color="white" size={20} />
        </button>
      </div>
      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <img src={product?.pairImage} alt="" />
          <div>
            <p>
              {product?.name} {product?.color}
              <span className="quantity">{product?.quantity}</span>
            </p>
            <p>$ {product?.price}</p>
          </div>
        </div>
      ))}
      <small>Buy One Get 1 Free*</small>
      <button
        onClick={() => getOffer(products)}
        className={freeItem ? "offer-button" : "offer-button-disabled"}
        disabled={!freeItem ? true : false}
      >
        Get One For Me
      </button>
      {Object.keys(offer).length !== 0 && (
        <div className="cart-item">
          <img src={offer.pairImage} alt="" />
          <div>
            <p>
              {offer.name} {offer.color}
            </p>
            <p>$ {offer.price}</p>
          </div>
        </div>
      )}
      {/* Hiển thị tổng giá */}
      <div className="cart-total">
        <h3>Total Price: ${calculateTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default Cart;
