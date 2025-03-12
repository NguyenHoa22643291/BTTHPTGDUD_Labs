import { useEffect, useState } from "react";
import Danhmuc from "./Danhmuc";
import "./Sanpham.css";

export default function Bai02() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://67d0f320825945773eb2668f.mockapi.io/api/tuan4/sanPham")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setArr(data);
      });
  }, []);

  console.log(arr);

  return (
    <ul>
      {arr.map((item, index) => {
        return (
          <li key={index}>
            <Danhmuc text={item.name} image={item.image}></Danhmuc>
          </li>
        );
      })}
    </ul>
  );
}
