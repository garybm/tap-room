import React from 'react';
import { Link } from 'react-router-dom';
import keg from '../assets/images/keg.png';


function Header(){
  const styles ={
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  };
  return (
    <div>
      <div style={styles}>
        <style jsx>{`
            div {
              background-color: #262626;
              height: 100px;
            }
            a {
              text-decoration: none;
              padding-right: 25px;
              font-size: 25px;
              color: white;
            }
            a:hover {
              color: grey;
            }
            img {
              width: 75px;
              margin-right: 5%;

            }
            `}</style>
        <Link to="/"><a><img src={keg}/></a></Link>
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}><a>Inventory</a></Link>
        <Link to="/image" style={{textDecoration: 'none', color: 'white'}}><a>imag</a></Link>
      </div>
    </div>

  );
}

export default Header;
