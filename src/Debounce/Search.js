import React, { useCallback } from "react";

import { DebounceInput } from "react-debounce-input";

export default function Search() {
  const handleDebounceFn = async (keyword) => {
    const res = await fetch(`https://api.plos.org/search?q=${keyword}`);
    const result = await res.json();
    console.log(result.response.docs);
  };

  //   const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

  //   const handleSearch = (e) => {
  //     debounceFn(e.target.value);
  //   };

  const handleSearch = (e) => {
    handleDebounceFn(e.target.value);
  };

  return (
    <div>
      {/* <input
        type={"search"}
        onChange={handleSearch}
        placeholder={"Từ khóa tìm kiếm..."}
      /> */}
      <DebounceInput
        element={"input"}
        type={"search"}
        placeholder={"Từ khóa tìm kiếm..."}
        onChange={handleSearch}
        debounceTimeout={1000}
      />
    </div>
  );
}
