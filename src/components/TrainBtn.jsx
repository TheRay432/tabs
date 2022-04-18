import React from "react";

const TrainBtn = ({ item, setTrainSelectBtn, trainSelectBtn }) => {
  const handleBtnClick = (pName) => {
    if (trainSelectBtn.tName === pName) {
      setTrainSelectBtn({
        tName: `${pName}`,
        state: !trainSelectBtn.state,
      });
    } else {
      setTrainSelectBtn({
        tName: `${pName}`,
        state: true,
      });
    }
  };
  return (
    <li
      className={
        trainSelectBtn.tName === item.TagName && trainSelectBtn.state
          ? "testBtn active"
          : "testBtn"
      }
      onClick={() => handleBtnClick(item.TagName)}
    >
      {item.TagName}
    </li>
  );
};

export default TrainBtn;
