import "./styles/all.css";
import TrainIcon from "./icons/icon3.svg";
import { useEffect, useRef, useState } from "react";
import ProductBtn from "./components/ProductBtn";
import MarketBtn from "./components/MarketBtn";
import TrainBtn from "./components/TrainBtn";
import CruiseBtn from "./components/CruiseBtn";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
function App() {
  const ref = useRef(null);
  const [productArr, setProductArr] = useState(null);
  const [marketArr, setMarketArr] = useState(null);
  const [trainArr, setTrainArr] = useState(null);
  const [cruiseArr, setCruiseArr] = useState(null);
  const [productSelectBtn, setProductSelectBtn] = useState({
    tName: "",
    state: false,
  });
  const [marketSelectBtn, setMarketSelectBtn] = useState({
    tName: "",
    state: false,
  });
  const [trainSelectBtn, setTrainSelectBtn] = useState({
    tName: "",
    state: false,
  });
  const [cruiseSelectBtn, setCruiseSelectBtn] = useState({
    tName: "",
    state: false,
  });

  const [trainActive, setTrainActive] = useState({
    state1: false,
    state2: false,
    state3: false,
  });
  const [showMoreProductsState, setShowMoreProductsState] = useState({
    showName: "",
    state: false,
  });

  /*產品規格 */
  useEffect(() => {
    const getProdcutArr = async () => {
      const res = await axios.get("data.json");
      const testArr = res.data[0].TypeList[0].GroupList[0].TagList;
      const test2Arr = res.data[0].TypeList[1].GroupList[0].TagList;
      const test3Arr = res.data[0].TypeList[2].GroupList[0].TagList;
      const test4Arr = res.data[0].TypeList[3].GroupList[0].TagList;
      const test5Arr = res.data[0].TypeList[3].GroupList[1].TagList;
      const test6Arr = res.data[0].TypeList[3].GroupList[2].TagList;
      const test7Arr = res.data[0].TypeList[3].GroupList[3].TagList;
      const test8Arr = res.data[0].TypeList[3].GroupList[4].TagList;
      const test9Arr = res.data[0].TypeList[4].GroupList[0].TagList;
      const test10Arr = res.data[0].TypeList[5].GroupList[0].TagList;
      const test11Arr = res.data[0].TypeList[5].GroupList[1].TagList;
      setProductArr([
        ...testArr,
        ...test2Arr,
        ...test3Arr,
        ...test4Arr,
        ...test5Arr,
        ...test6Arr,
        ...test7Arr,
        ...test8Arr,
        ...test9Arr,
        ...test10Arr,
        ...test11Arr,
      ]);
    };
    getProdcutArr();
  }, []);
  /*行銷活動 */
  useEffect(() => {
    const getMarketData = async () => {
      const res = await axios.get("data.json");
      const test = res.data[1].TypeList[0].GroupList[0].TagList;
      const testMarketArr = [...test];
      setMarketArr(testMarketArr);
    };
    getMarketData();
  }, []);
  /*鐵道規格 */
  useEffect(() => {
    const getTrainData = async () => {
      const res = await axios.get("data.json");
      const testArr = res.data[2].TypeList[1].GroupList[0].TagList;
      const test1Arr = res.data[2].TypeList[1].GroupList[1].TagList;
      const test2Arr = res.data[2].TypeList[1].GroupList[2].TagList;
      setTrainArr([...testArr, ...test1Arr, ...test2Arr]);
    };
    getTrainData();
  }, []);
  /*郵輪規格 */
  useEffect(() => {
    const getCruiseData = async () => {
      const res = await axios.get("data.json");
      const testArr = res.data[2].TypeList[0].GroupList[0].TagList;
      const testArr1 = res.data[2].TypeList[0].GroupList[1].TagList;
      const testArr2 = res.data[2].TypeList[0].GroupList[2].TagList;
      setCruiseArr([...testArr, ...testArr1, ...testArr2]);
    };
    getCruiseData();
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
  const showMore = () => {
    if (showMoreProductsState.state) {
      setShowMoreProductsState({
        ...showMoreProductsState,
        showName: "",
        state: false,
      });
    } else {
      setShowMoreProductsState({
        ...showMoreProductsState,
        showName: "show",
        state: true,
      });
    }
  };

  return (
    <div className="tab_container">
      <div className="tab_inner_container">
        {/*交通選項*/}
        <div className="transportDiv">
          <h3>遊玩交通</h3>
          <div className="tripBtnContainer">
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
        {/*鐵道規格*/}
        {trainActive.state1 && (
          <div className="productDiv">
            <h3>鐵道規格</h3>
            <ul className="productBtnContainer">
              {trainArr &&
                trainArr.map((item) => {
                  return (
                    <TrainBtn
                      key={item.TagName}
                      item={item}
                      setTrainSelectBtn={setTrainSelectBtn}
                      trainSelectBtn={trainSelectBtn}
                    />
                  );
                })}
            </ul>
          </div>
        )}
        {/*郵輪規格*/}
        {trainActive.state3 && (
          <div className="productDiv">
            <h3>郵輪規格</h3>
            <ul className="productBtnContainer">
              {cruiseArr &&
                cruiseArr.map((item) => {
                  return (
                    <CruiseBtn
                      key={item.TagName}
                      item={item}
                      setCruiseSelectBtn={setCruiseSelectBtn}
                      cruiseSelectBtn={cruiseSelectBtn}
                    />
                  );
                })}
            </ul>
          </div>
        )}
        {/*產品規格 */}
        <div className={`productDiv ty ${showMoreProductsState.showName}`}>
          <h3>產品規格</h3>
          <ul className="productBtnContainer" ref={ref}>
            {productArr &&
              productArr.map((item) => (
                <ProductBtn
                  key={item.TagName}
                  item={item}
                  setProductSelectBtn={setProductSelectBtn}
                  productSelectBtn={productSelectBtn}
                />
              ))}
          </ul>
          <div className="more" onClick={showMore}>
            {showMoreProductsState.state && (
              <>
                <p className="blue">收起</p>
                <FontAwesomeIcon icon={faAngleUp} />
              </>
            )}
            {showMoreProductsState.state || (
              <>
                <p className="blue">更多</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </>
            )}
          </div>
        </div>
        {/*行銷活動*/}
        <div className="productDiv">
          <h3>行銷活動</h3>
          <ul className="productBtnContainer">
            {marketArr &&
              marketArr.map((item) => (
                <MarketBtn
                  key={item.TagName}
                  item={item}
                  setMarketSelectBtn={setMarketSelectBtn}
                  marketSelectBtn={marketSelectBtn}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
