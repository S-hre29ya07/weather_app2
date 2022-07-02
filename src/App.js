import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {  useEffect, useState } from "react";
import axios from "axios";

function App() {


  const apiKey = "27c5c1239d9d495dc2f671aab25462eb"
  const [data, setData] = useState({})


  const getWetherDetails = (YOU_ACCESSS_KEY) => {
    if (!YOU_ACCESSS_KEY) return
    const apiURL = "http://api.weatherstack.com/current?"+ YOU_ACCESSS_KEY + "&query=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

useEffect(()=>{
  getWetherDetails("New York")
},[])
  return (
    <div className="col-md-12">
      <div className="wetherBg">
    <h1 className="heading">weather app</h1>
    <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
             />
          <button className="btn btn-primary" type="button"
           
          >Search</button>
        </div>
    </div>
    <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
          <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="" />
              <h5 className="weathorCity">
              {data?.name}
            </h5>
            <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          </div>
        </div>
    </div>
  );
}

export default App;
