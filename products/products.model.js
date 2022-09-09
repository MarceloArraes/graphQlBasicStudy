 const products = [
    {
      id: 'redshoe',
      description: 'Red Shoe',
      price: 42.12,
      reviews:[]
    },
    {
      id: 'bluejean',
      description: 'Blue Jeans',
      price: 55.55,
      reviews:[]
    },
 ]

function getAllproducts() {
  return products
}

getProductsByPrice = (min, max) => {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  })
}
getProductById = (id) => {
  return products.find(product => product.id == id);
}
addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: []
  };
  products.push(newProduct);
  return newProduct;
}

addNewProductReview = (id, rating, comment) => {
  const newReview = {
    rating,
    comment
  }
  const productToUpdate = products.find(product => product.id === id)
  productToUpdate.reviews.push(newReview);
  return productToUpdate
}

module.exports = {
  getAllproducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview
}