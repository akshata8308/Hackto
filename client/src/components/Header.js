import React from 'react'
import ListAltIcon from '@material-ui/icons/PlaylistAddCheck';

const Header = () => {
    return (
        <div className="card bg-info text-center  text-light rounded-0">
            <h1 className="display-4">
            <ListAltIcon style={{fontSize:"4rem"}}/> <span style={{color:"black"}}>MERN</span> TODO LIST
            </h1>            
        </div>
    )
}

export default Header
