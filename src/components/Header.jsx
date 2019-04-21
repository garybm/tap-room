import React from 'react'
import { Link } from 'react-router-dom';
import keg from '../assets/images/keg.png';
import hero from '../assets/images/hero.jpg';

function Header(){
  const styles ={
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  }
  return (
    <div>
      <div style={styles}>
        <style jsx>{`
            div {
              background-color: brown;
            }
            a {
              text-decoration: none;
              margin-left: 10%;
              font-size: 25px;
              color: white;
            }
            a:hover {
              color: red;
            }
            img {
              width: 75px;
              margin-left: 5%;

            }
            `}</style>
          <a><Link to="/"><img src={keg}/></Link></a>
          <a><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link></a>
          <a><Link to="/newkeg" style={{textDecoration: 'none', color: 'white'}} >Add New Keg</Link></a>
        </div>
    </div>

  )
}

export default Header
