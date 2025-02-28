import React, {useState} from "react";

const bai2input=()=>{
    const [invest,setInvest]=useState(100);
    const [rate,setRate]= useState(10);
    const [goal,setGoal]= useState(150);
    const [result, setResult]= useState([]);

    const tinhtoan=()=>{
        let year= 2024;
        let amount =invest;
        let ratePhantram =rate;
        let data= [];

        while(amount<goal){
            let endYear = amount * (1 + rate / 100);
            data.push({ year: ++year, amount:amount.toFixed(0), ratePhantram, endYear:endYear.toFixed(0) });
            amount = endYear;
            
        }
        setResult(data);
    }
    return(
        <div>
            <h2>CALCULATION INVESTMENT</h2>
            <label >invest</label>
            <input type="number" value={invest} onChange={(e)=>setInvest(e.target.value)} name="" id="" />
            <br />
            <label >Rate</label>
            <input type="number" value={rate} onChange={(e)=>setRate(e.target.value)} name="" id="" />
            <br />
            <label >invest</label>
            <input type="number" value={goal} onChange={(e)=>setGoal(e.target.value)} name="" id="" />
            <br />
            <button onClick={tinhtoan}>click</button>

            {result.length>0 &&(
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>invest</th>
                            <th>rate</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((item,index)=>(
                            <tr key={index}>
                                <td>{item.year}</td>
                                <td>{item.amount}</td>
                                <td>{item.ratePhantram}</td>
                                <td>{item.endYear}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            )
            }
        </div>
    )


}
export default bai2input;