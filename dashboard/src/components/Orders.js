import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Orders = () => {
  let [allOrders,setAllOrders]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3002/orders').then((res)=>{
      setAllOrders(res.data);
    })

  },[])
  {if(allOrders.length===0){
    
      return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
  }else{
    return(
    <div className="order-table">
        <table>
          <tr>
            <th>name</th>
            <th>Qty.</th>
            <th>price</th>
          </tr>
          {allOrders.map((stock)=>{
            return(
            <tr>
              <td>{stock.name}</td>
               <td>{stock.qty}</td>
                <td>{stock.price}</td>
            </tr>
            )
          })}
          </table>
          </div>
    )
  }
}

};

export default Orders;
