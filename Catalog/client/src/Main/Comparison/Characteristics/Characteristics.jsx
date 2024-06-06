import { useEffect, useState } from "react";
import axios from "axios";
import "../Comparison.css";
function Characteristics(/* { arr } */) {
  const paramArr = [
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
  let arr = [
    "Apple iOS",
    'экран 6.1" OLED (1179x2556) 60 Гц',
    "Apple A16 Bionic",
    "ОЗУ 6 ГБ",
    "память 128 ГБ",
    "камера 48 Мп",
    "1 SIM (nano-SIM/eSIM)",
    "влагозащита IP68",
  ];
  function sortAllParam() {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].toLowerCase().includes(paramArr[i].toLowerCase)) {
        a(paramArr[i], i);
      }
    }
  }
  function a(param, index) {
    let a = "";
    let b = "";
    for (let k = 0; k < arr.length; k++) {
      if (arr[k].toLowerCase().includes(param)) {
        const indexToReplace = k;
        a = arr[k];
        b = arr[index];
        console.log(a, b);
      }
    }
  }
  sortAllParam();
  /* function compareAndReplace() {
    for (let i = 0; i < paramArr.length; i++) {
      if (arr[i].toLowerCase().includes(paramArr[i].toLocaleLowerCase())) {
        if (paramArr.indexOf(arr[i]) !== i) {
          const indexToReplace = arr2.indexOf(arr1[i]);
          arr2[indexToReplace] = arr2[i];
        } else {
        }
      } else {
      }
    }
} */
  return (
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
  );
}

export default Characteristics;
