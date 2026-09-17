import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total quantity of items in cart
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/lavender-829555_1280.jpg",
                    description: "Calming scent, helps reduce stress.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://cdn.pixabay.com/photo/2019/08/08/11/33/jasmine-4392802_1280.jpg",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
    };

    return (
        <div>
            {/* Header / Navigation Bar */}
            <nav className="navbar">
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/">
                            <div>
                                <h3>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="ul">
                    <div>
                        <a href="#" onClick={() => setShowCart(false)}>Plants</a>
                    </div>
                    <div>
                        <a href="#" onClick={() => setShowCart(true)}>
                            <h1 className="cart">
                                🛒 <span className="cart-count">{totalQuantity}</span>
                            </h1>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Display Cart Page or Product Catalog */}
            {showCart ? (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            ) : (
                <div className="product-grid">
                    {plantsArray.map((categoryObj, index) => (
                        <div key={index} className="category-section">
                            <h2 className="plant_heading">{categoryObj.category}</h2>
                            <div className="plant-list">
                                {categoryObj.plants.map((plant, pIndex) => (
                                    <div key={pIndex} className="product-card">
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <p>{plant.description}</p>
                                        <div className="product-price">{plant.cost}</div>
                                        <button
                                            className="product-button"
                                            disabled={addedToCart[plant.name]}
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;
