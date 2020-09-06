import React from 'react';
import { Link } from 'react-router-dom';


import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
   
    
    root2: {
        maxWidth: 500,
        
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom:50
      },
      
    
  }));


const Post = (props) => {
    const {title ,body,id }=props.post;

    const classes = useStyles();
      
    return (
        <div>
             <Card className={classes.root2}>
                            <CardActionArea>
                                
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                <p>{body}</p>
                                </Typography>
                                
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Link to={`/PostDetails/${id}`} >
                                <Button variant="contained" color="primary">
                                See More
                                </Button>
                        </Link>
                        </CardActions>
                           
                     </Card>
            {/* <h4>title : {title}</h4>
            <Link to={`/PostDetails/${id}`} >
                <Button variant="contained" color="primary">
                   See More
                </Button>
            </Link> */}
     
    </div>
    
       
    );
};

export default Post;