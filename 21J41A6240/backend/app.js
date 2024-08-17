const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/products', async (req, res) => {
    
    const { top, minPrice, maxPrice } = req.query;
    
   
    const url = `http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    try {
        
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODc5NjM3LCJpYXQiOjE3MjM4NzkzMzcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVmMTlhMjE5LTg1NDktNDAyZS04OWIwLWU5ZmVmZmZjZjhjZiIsInN1YiI6Im5hdmFiZGFydmVzaGFsaUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJhZmZvcmRtZWQiLCJjbGllbnRJRCI6IjVmMTlhMjE5LTg1NDktNDAyZS04OWIwLWU5ZmVmZmZjZjhjZiIsImNsaWVudFNlY3JldCI6Im1wdnRpVnlyYmd6VXNsYXMiLCJvd25lck5hbWUiOiJOYXZhYiBEYXJ2ZXNoYWxpIiwib3duZXJFbWFpbCI6Im5hdmFiZGFydmVzaGFsaUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMUo0MUE2MjQwIn0.2l4D83PzEy-fo4p_XnW6lw2NhOKoesV2VefCBwr24zo`
            }
        });

  
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
