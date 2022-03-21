import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import "./Cardcomp.css";
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: "lightgrey",
        margin: "10px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function Cardcomp({index,title,subtitle,image ,handleDelete,handleUpdate}) {
    const classes = useStyles();
    console.log("card component");
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={image}
               
            />
           
            <CardContent className='content'>
               <h1>{title}</h1>
               <h2>{subtitle}</h2>
               <button onClick={()=>handleUpdate(index)}>Edit</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
            </CardContent>
            
        </Card>
    );
}



export default Cardcomp;