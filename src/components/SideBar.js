import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'

function SideBar(props){
    return (
        <div className='sidebar'>
            <List disablePadding dense>
                {props.menu.map(({ label, name, ...rest})=>(
                    <Link to='/master'>
                        <ListItem key={name} button {...rest}>
                            <ListItemText>{label}</ListItemText>
                        </ListItem>
                    </Link>
                 ))}
            </List>
        </div>
    )
}

export default SideBar