import "./styles/all.css";
import TrainIcon from "./icons/icon3.svg";
import { useEffect, useRef, useState } from "react";
import ProductBtn from "./components/ProductBtn";
function App() {
  const [width1, setWidth1] = useState(null);
  const [productArr, setProductArr] = useState(null);
  const a = [
    "金質獎",
    "登山健行",
    "建築走讀",
    "建築走讀",
    "建築走讀",
    "建築走讀",
    "建築走讀",
    "建築走讀",
    "建築走讀",
    "建築走讀",
    "建築走讀",
    "建築走讀",
    "建築走讀",
    "建築走讀",
  ];
  const [trainActive, setTrainActive] = useState({
    state1: false,
    state2: false,
    state3: false,
  });
  const ref = useRef(null);
  const testRef = useRef(null);
  useEffect(() => {
    const width2 = ref.current ? ref.current.offsetWidth : 0;
    const width3 = testRef.current ? testRef.current.offsetWidth : 0;
    setWidth1(width3);
  }, [width1]);
  useEffect(() => {
    setProductArr([...a]);
  }, []);
  const trainBtnClick = (state) => {
    switch (state) {
      case "state1":
        setTrainActive({ ...trainActive, state1: !trainActive.state1 });
        break;
      case "state2":
        setTrainActive({ ...trainActive, state2: !trainActive.state2 });
        break;
      case "state3":
        setTrainActive({ ...trainActive, state3: !trainActive.state3 });
        break;
      default:
        break;
    }
  };
  return (
    <div className="tab_container">
      <div className="tab_inner_container">
        <div className="transportDiv">
          <h3>遊玩交通</h3>
          <div className="tripBtnContainer" ref={ref}>
            <button
              className={trainActive.state1 ? "tripBtn active" : "tripBtn"}
              onClick={() => trainBtnClick("state1")}
            >
              <img className="activeIcon" src={TrainIcon} alt="" />
              <p className="tt">鐵道旅遊</p>
            </button>
            <button
              className={trainActive.state2 ? "tripBtn active" : "tripBtn"}
              onClick={() => trainBtnClick("state2")}
            >
              <img className="activeIcon" src={TrainIcon} alt="" />
              <p>巴士旅遊</p>
            </button>
            <button
              className={trainActive.state3 ? "tripBtn active" : "tripBtn"}
              onClick={() => trainBtnClick("state3")}
            >
              <img className="activeIcon" src={TrainIcon} alt="" />
              <p>郵輪旅遊</p>
            </button>
          </div>
        </div>
        <div className="productDiv">
          <h3>產品規格</h3>
          <div className="productBtnContainer" ref={testRef}>
            {/*  {productArr && productArr.map((item) => <ProductBtn item={item} />)} */}
          </div>
          <div>
            <p className="blue">顯示</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
