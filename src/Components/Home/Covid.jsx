import { useState, useEffect } from 'react';
import './Covid.css';
const Covid = () => {

  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try{
      const covid = await fetch('https://data.covid19india.org/data.json');
      const CovidData = await covid.json();
      setData(CovidData.statewise[0]);
      console.log(CovidData.statewise[0]);
    }catch(err){
      console.log(err);
    }
    
  }

  useEffect(() => {
    getCovidData();
  }, [])

  return (
    <>
      <section className='CovidApp'>
        <div className='CovidHead'>
          <h1><i className="fa-solid fa-circle fa-beat fa-2xs" style={{ color: "red" }}></i> LIVE</h1>
          <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        </div>

        <div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4 mb-4">
                <div className='boxCard'>
                  <h5><span>our</span> Country</h5>
                  <h4>INDIA</h4>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className='box1Card'>
                  <h5><span>TOTAL</span> RECOVERED</h5>
                  <h4>{data.recovered}</h4>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className='box2Card'>
                  <h5><span>TOTAL</span> CONFIRMED</h5>
                  <h4>{data.confirmed}</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className='box3Card'>
                  <h5><span>TOTAL</span> DEATHS</h5>
                  <h4>{data.deaths}</h4>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className='boxCard'>
                  <h5><span>TOTAL</span> ACTIVE</h5>
                  <h4>{data.active}</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className='box4Card'>
                  <h5><span>LAST</span> UPDATED</h5>
                  <h4>{data.lastupdatedtime}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default Covid;