import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Product from "../Product/Product";
import banner from "../assets/images/background/banner.webp";
import "./Home.css";

const Home = () => {

    const products = [
        { id: 1, name: "Cavalier Black", price: "$190", imgSrc: "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Cavalier-Black-092121-3.4_672x672.jpg?v=1633034593" },
        { id: 2, name: "Cavalier Sandstone", price: "$190", imgSrc: "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Cavalier-Sandstone-012422-3.4_672x672.jpg?v=1646426165" },
        { id: 3, name: "Cavalier Shadow Gray", price: "$190", imgSrc: "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Mens-Cavalier-Shadow-Grey-190225_672x672.jpg?v=1569110766" },
    ];

    // const [flipImage, setFlipImage] = useState(false);
    // const { name, pairImage, color, price, sideImage } = product;
    const navigate = useNavigate(); // Khởi tạo navigate

    // Hàm điều hướng đến trang Shop
    const handleShopNow = () => {
        navigate("/shop");
    };
    return (
        <div className="home">
            <h1>Welcome to QL7 Shop</h1>
            <p>Discover the best shoes online.</p>

            <div className="banner-container">
                <img src={banner} alt="banner" className="banner" />
                <button className="shop-now-btn" onClick={handleShopNow}>SHOP NOW</button>
            </div>

            {/* <div
                className='product-card'
                onMouseEnter={() => setFlipImage(true)}
                onMouseLeave={() => setFlipImage(false)}
            >
                <div className='image-container'>
                    <img
                        className='product-image'
                        src={flipImage ? sideImage : pairImage}
                        alt=''
                    />
                </div>
                <div className='product-info'>
                    <div>
                        <p>
                            {name} {color}
                        </p>
                        <small>$ {price}</small>
                    </div>
                </div>
            </div> */}

            <section className="product-section">
                <h2>Our Bestselling Shoes</h2>
                <div className="product-list">
                    {products.map((product) => (
                        <div className="card" key={product.id}>
                            <img src={product.imgSrc} alt={product.name} className="product-img" />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* <Product /> */}
        </div>
    );
};

export default Home;
