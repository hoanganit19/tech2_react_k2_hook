import React, { useState, useMemo } from "react";

const getTotal = (products) => {
  console.log("re-render");
  return products.reduce((total, product) => {
    return total + product.price;
  }, 0);
};

export default function Products() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleChangeValue = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }

    if (e.target.name === "price") {
      setPrice(e.target.value);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setProducts(products.concat({ name: name, price: parseFloat(price) }));
    setName("");
    setPrice("");
  };

  const total = useMemo(() => {
    return getTotal(products);
  }, [products]);
  /*
  Tham số thứ nhất phải return
   */

  return (
    <div style={{ margin: "3%" }}>
      <form onSubmit={handleAdd}>
        <p>
          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm..."
            onChange={handleChangeValue}
            value={name}
            required
          />
        </p>
        <p>
          <input
            type="number"
            name="price"
            placeholder="Giá sản phẩm..."
            onChange={handleChangeValue}
            value={price}
            required
          />
        </p>
        <button type="submit">Add</button>
      </form>
      <hr />
      <h2>Danh sách sản phẩm</h2>
      {products.map(({ name, price }, index) => {
        return (
          <div key={index}>
            <p>Tên: {name}</p>
            <p>Giá: {price}</p>
          </div>
        );
      })}
      <h3>Tổng tiền: {total}</h3>
    </div>
  );
}
