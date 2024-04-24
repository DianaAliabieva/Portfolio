import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import NorthAmericaImage from '../photos/northamerica.png';
import Southamerica from '../photos/southamerica.png';
import Europe from '../photos/europe.png';
import Africa from '../photos/africa.png';
import Asia from '../photos/asia.png';
import Australia from '../photos/australia.png';
import Antarctica from '../photos/antarctica.png';
 

export default function Continents(){
//function - name with big letter
    return(
        <> 
            <div className='up'>
                <Link to="/Chosen?continent=North America">
                    <img src={NorthAmericaImage} alt="Map of North America" className="image" />
                </Link>
                <Link to="/Chosen?continent=Europe">
                    <img src={Europe} alt="europe" className='europe'/> 
                </Link>
                <Link to="/Chosen?continent=Asia">
                    <img src={Asia} alt="asia" className='asia'/> 
                </Link> 
            </div>
            <div className='middle'>
                <Link to="/Chosen?continent=South America">
                    <img src={Southamerica} alt="south america" className='south'/> 
                </Link> 
                <Link to="/Chosen?continent=Africa">
                    <img src={Africa} alt="africa" className='africa'/>
                </Link>
                <Link to="/Chosen?continent=Oceania">
                    <img src={Australia} alt="Oceania" className='oceania'/>
                </Link>
            </div>
            <div className='down'>
                <Link to="/Chosen?continent=Antarctica"> 
                    <img src={Antarctica} alt="Antarctica" className='antarctica'/>
                </Link>
            </div>
        </>
           
    )
}


