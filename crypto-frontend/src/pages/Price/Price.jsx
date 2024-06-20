import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";


export default function Price (props) {
     
  const apiKey = "8133BBD2-A2DD-4153-88E5-1FC13483F153";
  // Grabbing the currency symbol from the URL Params.
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL.
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  
  // State to hold the coin data.
  const [coin, setCoin] = useState("null");

  // Function to fetch coin data.
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch(e) {
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mounts.
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
        <div>
            <h1>{coin.asset_id_base}/{coin.asset_id_quote} </h1>
            <h2>{coin.rate}</h2>
            {/* { <Route path="/price/:symbol" element={<Price/>}/> } */}
        </div>
    );
};

    const loading = () => {
        return <h1>Loading...</h1>
    };


    return coin && coin.rate ? loaded() : loading();
}