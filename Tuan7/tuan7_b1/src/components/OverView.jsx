import { useEffect, useState } from "react";

const useOverView =()=>{


    const [data, setData] = useState([]);
    const [turnover, setTurnover] = useState(null);
    const [profit, setProfit] = useState(null);
    const [newCustomer, setNewCustomer] = useState(null);
    

      useEffect(() => {
        fetch("http://localhost:3002/customers") // Đảm bảo file data.json nằm trong thư mục public/
          .then((res) => res.json())
          .then((json) => setData(json));
      }, []);

     //3cai card
      useEffect(() => {
        fetch("http://localhost:3002/card")
          .then((res) => res.json())
          .then((data) => {
            setTurnover(data.turnover);
            setProfit(data.profit);
            setNewCustomer(data.newCustomer);
          })
          .catch((error) => console.error("Lỗi fetch:", error));
      }, []);

      return {data, turnover, profit, newCustomer};

};

export default useOverView;