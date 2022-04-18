import React from "react";

const CruiseBtn = ({ item, setCruiseSelectBtn, cruiseSelectBtn }) => {
  const handleBtnClick = (pName) => {
    if (cruiseSelectBtn.tName === pName) {
      setCruiseSelectBtn({
        tName: `${pName}`,
        state: !cruiseSelectBtn.state,
      });
    } else {
      setCruiseSelectBtn({
        tName: `${pName}`,
        state: true,
      });
    }
  };
  return (
    <li
      className={
        cruiseSelectBtn.tName === item.TagName && cruiseSelectBtn.state
          ? "testBtn active"
          : "testBtn"
      }
      onClick={() => handleBtnClick(item.TagName)}
    >
      {item.TagName}
    </li>
  );
};

export default CruiseBtn;
