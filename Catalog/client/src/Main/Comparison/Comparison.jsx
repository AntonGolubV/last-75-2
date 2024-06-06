import { useEffect, useState } from "react";
import axios from "axios";
import "./Comparison.css";
import Block from "./Block/Block";
import Characteristics from "./Characteristics/Characteristics";

function Comparison() {
  const [dataSmartphone, setDataSmartphone] = useState([]);
  const arr = [
    "OC",
    "Экран",
    "Процессор",
    "ОЗУ",
    "Память",
    "Kамера",
    "Aкумулятор",
    "SIM",
    "Влагозащита",
  ];

  useEffect(() => {
    getComparisonSmartphone();
  }, []);

  useEffect(() => {
    console.log(dataSmartphone);
  }, [dataSmartphone]);

  function getComparisonSmartphone() {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:5000",
    });
    axiosInstance
      .get("/get/Smartphone/ByComparison")
      .then((response) => {
        setDataSmartphone(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <h1 style={{ marginLeft: "40px" }}>Сравнение телефонов</h1>
      <div className="comparison_main">
        <div className="block_all_comp_img">
          <div className="block_comp_img1"></div>
          {/*           <div className="block_comp_img">
            <img src={a} alt="" className="img_comp"/>
            <div style={{ width: "100%", height: "25%" }}>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="block_comp_img"></div> */}

          {dataSmartphone.map((item, index) => (
            <div key={`img_${index}`} className="block_comp_img">
              <img src={item.images.header} alt="" className="img_comp" />
              <div style={{ width: "100%", height: "25%" }}></div>
            </div>
          ))}
        </div>
        <h3 className="h3_comp">Характеристики</h3>
        <div className="characteristics">
          <div className="block_characteristics1">
            {arr.map((item, index) => (
              <div key={`comp_${index}`} className="block_char_comp">
                {item}
              </div>
            ))}
          </div>
          {dataSmartphone.map((item, index) => (
            <div key={`comp_${index}`} className="block_characteristics">
              <div className="block_char_comp">{item.description_list[0]}</div>
              <div className="block_char_comp">{item.description_list[1]}</div>
              <div className="block_char_comp">{item.description_list[2]}</div>
              <div className="block_char_comp">{item.description_list[3]}</div>
              <div className="block_char_comp">{item.description_list[4]}</div>
              <div className="block_char_comp">{item.description_list[5]}</div>
              <div className="block_char_comp">{item.description_list[6]}</div>
              <div className="block_char_comp">{item.description_list[7]}</div>
              <div className="block_char_comp">{item.description_list[8]}</div>
            </div>
          ))}
          {/* <div className="block_characteristics">
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
          </div>
          <div className="block_characteristics">
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
            <div className="block_char_comp"></div>
          </div> */}
        </div>
        {/* <div className="block_comparison">
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
       {/*  <div className="block_comparison"></div>
        <div className="block_comparison"></div> */}
        {/* {dataSmartphone.map((item, index) => (
          <Block /* key={`${index}`} data={item} ></Block>
        ))}  */}
      </div>
    </>
  );
}

export default Comparison;
