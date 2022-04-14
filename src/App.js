import "./styles/all.css";
import TrainIcon from "./icons/icon3.svg";
import { useEffect, useRef, useState } from "react";
function App() {
  /*   const tripArr = [
    { TypeName: "鐵道旅遊", TypeCode: 1 },
    { TypeName: "巴士旅遊", TypeCode: 2 },
    { TypeName: "郵輪旅遊", TypeCode: 3 },
  ]; */
  /* const [tripTypeList, setTripTypeList] = useState(tripArr); */
  const [width1, setWidth1] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    const width2 = ref.current ? ref.current.offsetWidth : 0;
    setWidth1(width2);
    console.log(width2);
  }, [width1]);
  return (
    <div className="tab_container">
      <div className="tab_inner_container">
        <div className="transportDiv">
          <h3>遊玩交通</h3>
          <div className="tripBtnContainer" ref={ref}>
            <button className="tripBtn">
              <img src={TrainIcon} alt="" />
              <p>鐵道旅遊</p>
            </button>
            <button className="tripBtn">
              <img src={TrainIcon} alt="" />
              <p>巴士旅遊</p>
            </button>
            <button className="tripBtn">
              <img src={TrainIcon} alt="" />
              <p>郵輪旅遊</p>
            </button>
          </div>
        </div>
        <div className="productDiv">
          <h3>產品規格</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
