const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('App listening on port'+ PORT);
  });
});

// api/categories
// api/products
// api/tags

// {
//   "id": 6,
//   "product_name": "Hiking Shoes",
//   "price": 120,
//   "stock": 20,
//   "category_id": 5,
//   "category": {
//     "id": 5,
//     "category_name": "Shoes"
//   },
//   "tags": []
// } 