import React from 'react';

import Button from '@material-ui/core/Button';
import { useHistory , handleCLick } from 'react-router-dom';


  

const Post = (props) => {

    const { userId, title, body } = props.post;
    const history = useHistory();

    const handleCLick =(postId)=>{
        const url =`/post/${postId}`;
        history.push(url);
    }
    
    return (
        <div>
            
            <h3>Id :{userId} </h3>
            <p> Title : {title}</p>

        
        <Button onClick={()=> handleCLick(userId)}> See More </Button>
        
        </div>
    );
};

export default Post;