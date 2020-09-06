import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
   
    root: {
        maxWidth: 350,
        
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom:50
      },
        
    root2: {
        maxWidth: 500,
        
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom:50
      },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));




const PostDetails = () => {
    const {postId} =useParams();
 
    const [postDetail , setPostDetails]=useState([]);
    const [comments , setComments]=useState([]);
    const [pictures , setPictures]=useState([]);

    const classes = useStyles();
    
    useEffect(()=>{
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPostDetails(data))
    },[postId])
    console.log( "post",postDetail);

    useEffect(()=>{
        let url=`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setComments(data))


    },[postId])
  
    

     
    useEffect(()=>{
        let query=['person', 'girl', 'man','childhood', 'Human', 'boy', 'male'];
        let randomImageIndex = Math.floor(Math.random() * query.length);
        console.log("comment",query[ randomImageIndex]);

        let url = `https://api.unsplash.com/search/photos?client_id=TKdCuO35_IWymQ79_GKGz7GUnnShogtYQRtN3tSKah8&query=${query[randomImageIndex]}`;
       
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPictures(data.results))
    },[])
    console.log( "pictures",pictures);
    let fakeData=[];
    for(let i=0; i<comments.length ;i++)
    {
        fakeData.push(
            {"name": comments[i].name, "email": comments[i].email,"body":comments[i].body ,"Picture": pictures[i].urls.small}

        )
    }
    console.log( "fake data",fakeData);

    
    

    return (
        <div >
               <Card className={classes.root2}>
                            <CardActionArea>
                                
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                {postDetail.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                <p>{postDetail.body}</p>
                                </Typography>
                                
                                </CardContent>
                            </CardActionArea>
                           
                     </Card>
        
            <h1 style={{textAlign: 'center'}}><strong>Comments</strong></h1>
            {
                fakeData.map((fk)=>
                    <Card className={classes.root}>
                            <CardActionArea>
                                
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                <Avatar alt="Remy Sharp" src={fk.Picture} className={classes.large} />Name: {fk.name}
                                 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   Email:  {fk.email}

                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Comment :{fk.body}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                           
                     </Card>
                    
                      
                    )
                    
                       
                       
                    
                
            }
             
          
        
        
      </div>
    )
    
       
};

export default PostDetails;