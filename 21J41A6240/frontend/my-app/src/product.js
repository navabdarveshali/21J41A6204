import React, { useState } from 'react';
import axios from 'axios';

function Products() {
    const [top, setTop] = useState(10);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products', {
                params: {
                    top,
                    minPrice,
                    maxPrice
                }
            });
            setProducts(response.data);
            setError(null); // 
        } catch (err) {
            setError('Error fetching products');
            console.error(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchProducts();
    };

    return (
        <div>
            <h1>Product List</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Top:
                        <input
                            type="number"
                            value={top}
                            onChange={(e) => setTop(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Min Price:
                        <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Max Price:
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Fetch Products</button>
            </form>
            {error && <p>{error}</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
