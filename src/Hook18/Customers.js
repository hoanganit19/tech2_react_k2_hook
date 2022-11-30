import React, { useState, useTransition } from "react";
import data from "./data.json";

const { customers } = data;

export default function Customers() {
  const [keyword, setKeyword] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };

  const jsx = customers.map((customer, index) => {
    let css = {};
    if (keyword !== "") {
      const check = customer.indexOf(keyword);
      css = check !== -1 ? { background: "yellow" } : {};
    }

    return (
      <p key={index} style={css}>
        {customer}
      </p>
    );
  });
  return (
    <div>
      <input
        type={"search"}
        placeholder="Từ khóa tìm kiếm..."
        onChange={handleChange}
      />
      <hr />
      {isPending ? <p>Seaching...</p> : jsx}
    </div>
  );
}
