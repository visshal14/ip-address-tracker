import { useEffect, useState } from 'react';
import './App.css';
import BottomMapComponent from './Components/BottomMapComponent';
import TopComponent from './Components/TopComponent';

function App() {

  const [ip, setIp] = useState("")
  const [data, setData] = useState()

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_gATmUz1HjtCl4qMFyoGEzmsDdJvIv&ipAddress=${data.ip}`)
          .then(response => response.json())
          .then(data => {

            setIp(data.ip)
            setData(data)
          });
      });

  }, [])

  function checkIp() {
    if (ip?.length > 1) return
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_gATmUz1HjtCl4qMFyoGEzmsDdJvIv&ipAddress=${ip}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
      });

  }

  return (
    <div style={{ height: "100vh" }}>
      <TopComponent data={data} setIp={setIp} checkIp={checkIp} />
      {data?.location?.lat && data?.location?.lng && <BottomMapComponent lat={data?.location?.lat} lng={data?.location?.lng} />}
    </div>
  );
}

export default App;
