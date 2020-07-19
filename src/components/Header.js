import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Header = () => {
    return(
        <div className='header-container'>
            <Button component={Link} to={'/'} style={{color: 'white', fontSize: '1.5rem', float: 'left'}}>
                Rekam Medis
            </Button>
        </div>
    )
}

export default Header