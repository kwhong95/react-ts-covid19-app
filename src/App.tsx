import React, { FC, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App: FC = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getCovidKR = async() => {
      try {
        setError(null);
        setData(null);

        setLoading(true);
        const res = await axios.get('http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=mQ12y4QAfbuZL2fpRcPbVSTKZY%2BoEy6pNjTBVz1wFY6Wd9BEkEJ6a0o85TUBK6o9NXHaF6c%2B6FZ%2BshGbhzAygw%3D%3D');  
        setData(res.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    getCovidKR();
  }, []);

  if (loading) return <div>Loading...</div>
  if (error) return <div>에러가 발생했습니다.</div> 

  console.log(data);

  return (
    <div className="App">
      Fucking-Covid19
    </div>
  );
}

export default App;
