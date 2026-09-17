import React, { useState } from 'react';
import './ProductList.css';

function ProductList() {
    const [showCart, setShowCart] = useState(false);

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

    return (
        <div>
            {/* Header / Navbar */}
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="Flat" height="68" width="68">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <path d="M184,184a16,16,0,1,1-16-16A16,16,0,0,1,184,184ZM88,168a16,16,0,1,0,16,16A16,16,0,0,0,88,168Zm152-104V160a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V40H24a8,8,0,0,1,0-16H64a8,8,0,0,1,8,8V160H224V64H88a8,8,0,0,1,0-16H232A8,8,0,0,1,240,64Z"></path>
                                </svg>
                            </h1>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Product Grid */}
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
                                    <button className="product-button">Add to Cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
