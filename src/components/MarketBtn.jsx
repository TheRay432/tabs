import React from "react";

const MarketBtn = ({ item, marketSelectBtn, setMarketSelectBtn }) => {
  const handleBtnClick = (pName) => {
    if (marketSelectBtn.tName === pName) {
      setMarketSelectBtn({
        tName: `${pName}`,
        state: !marketSelectBtn.state,
      });
    } else {
      setMarketSelectBtn({
        tName: `${pName}`,
        state: true,
      });
    }
  };
  return (
    <li
      className={
        marketSelectBtn.tName === item.TagName && marketSelectBtn.state
          ? "testBtn active"
          : "testBtn"
      }
      onClick={() => handleBtnClick(item.TagName)}
    >
      {item.TagName}
    </li>
  );
};

export default MarketBtn;
