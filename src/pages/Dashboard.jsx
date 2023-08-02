import React, { useEffect, useState } from 'react'
// import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo.png"
import logo3 from "../assets/logo1.png"
import logo4 from "../assets/logo2.png"
import logo5 from "../assets/logo3.png"
import logo6 from "../assets/logo4.png"

const Dashboard = () => {

  const [players, setPlayers] = useState([]);
  const [Flag, setFlag] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://auth-backend-93eo.onrender.com/api/user/players');
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFlag(true)
        console.log(data)
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  console.log(players)

  useEffect(() => {

    if (!Flag) {
      // const navigate = useNavigate();
    }

  }, [])


  return (
    <div className='container2'>
      <div className='box2'>
        <img id="logo2" src={logo2} alt="" />
        <h4>The Original</h4>

        <button className='btn'>Dashboard</button>
        <button className='btn'>Players</button>
        <button className='btn'>Settings</button>

      </div>

      <div className='box4'>

        <button className='btnone'>+ Add New</button>


        <div className='box5'>
          <h6>Main Balance</h6>
          <img id="logo3" src={logo3} alt="" />
        </div>

        <div className='box6'>
          <h6>Main Balance</h6>
          <img id="logo4" src={logo4} alt="" />
        </div>

        <div className='box7'>
          <h6>Main Balance</h6>
          <img id="logo5" src={logo5} alt="" />
        </div>

        <div className='box8'>
          <h6>Main Balance</h6>
          <img id="logo6" src={logo6} alt="" />
        </div>
        <p>Recent Transaction Details</p>

        <input className="Searchbar" type="search" placeholder='Search Transaction' />

        <div className='box10'></div>

      </div>



    </div>
  )
}

export default Dashboard
