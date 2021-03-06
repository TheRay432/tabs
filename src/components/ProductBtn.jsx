import React from "react";

const ProductBtn = ({ item, setProductSelectBtn, productSelectBtn }) => {
  const handleBtnClick = (pName) => {
    if (productSelectBtn.tName === pName) {
      setProductSelectBtn({
        tName: `${pName}`,
        state: !productSelectBtn.state,
      });
    } else {
      setProductSelectBtn({
        tName: `${pName}`,
        state: true,
      });
    }
  };
  return (
    <button
      className={
        productSelectBtn.tName === item.TagName && productSelectBtn.state
          ? "testBtn active"
          : "testBtn"
      }
      onClick={() => handleBtnClick(item.TagName)}
    >
      {item.TagName}
    </button>
  );
};

export default ProductBtn;
