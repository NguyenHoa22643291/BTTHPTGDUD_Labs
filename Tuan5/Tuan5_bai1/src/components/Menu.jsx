import { useEffect, useState } from "react";
import Danhmuc from "./Danhmuc";
import "./Sanpham.css";

export default function MenuLon() {
  const [arr, setArr] = useState([]);

  //useEffect dung de goi API va cap nhat danh sach sp ngay khi
  //component duoc render lan dau tien
  //[] (dependency array) giúp đảm bảo đoạn code này chỉ chạy 1 lần khi component được mount.
  useEffect(() => {
    fetch("https://67d0f320825945773eb2668f.mockapi.io/api/tuan4/sanPham")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setArr(data);
      });
  }, []);

  return (
    <>
     <div className="flex gap-6 p-6">
    <aside className="w-1/4 bg-white p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-bold mb-4">FILTERS</h3>
        <div className="filter-group mb-4">
          <h4 className="font-semibold">Type</h4>
          {["Pan-fried", "Stir-fried", "Grilled", "Roasted", "Sauteed", "Baked", "Steamed", "Stewed"].map((type) => (
            <label key={type} className="block">
              <input type="checkbox" className="mr-2" /> {type}
            </label>
          ))}
        </div>
          <div className="filter-group mt-4">
            <h4 className="font-semibold">Time</h4>
            <input type="range" min="10" max="90" className="w-full accent-pink-500" />
          </div>
          {/* <div className="filter-group mt-4">
            <h4 className="font-semibold">Rating</h4>
            <div className="rating flex flex-col gap-2">
            <label>
              <input type="radio" name="rating" value="5" />
              <div className="stars">★★★★★</div>
            </label>
            <label>
              <input type="radio" name="rating" value="4" />
              <div className="stars">★★★★☆</div>
            </label>
            <label>
              <input type="radio" name="rating" value="3" />
              <div className="stars">★★★☆☆</div>
            </label>
            <label>
              <input type="radio" name="rating" value="2" />
              <div className="stars">★★☆☆☆</div>
            </label>
            <label>
              <input type="radio" name="rating" value="1" />
              <div className="stars">★☆☆☆☆</div>
            </label>
          </div>

          </div> */}


            <div>
          <h4 className="font-semibold">Rating</h4> 
          <div className="flex flex-col space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star} className="flex items-center space-x-2">
                <input type="radio" name="rating" value={star} className="accent-pink-500" />
                <span>{"★".repeat(star) + "☆".repeat(5 - star)}</span>
              </label>
            ))}
          </div>
        </div>
          <button className="w-full mt-4 py-2 bg-pink-500 text-gray-900 font-semibold rounded-lg">Apply</button>
        </aside>
      
        <div className="w-3/4">
           <h3 className="text-3xl font-bold mb-6">Salad ({arr.length})</h3>
           <div className="grid grid-cols-3 gap-6">
           {arr.map((item, index) => (
            <Danhmuc key={index} text={item.name} image={item.image} time={item.time} />
          ))}
           </div>
           
        </div>
        </div>
        {/* <ul class="rounded-b-3xl">
      {arr.map((item, index) => {
        return (
          <li key={index}>
            <Danhmuc text1={item.name} image={item.image} text2={item.minut}></Danhmuc>
          </li>
        );
      })}
    </ul> */}
    </> 
  );
}
