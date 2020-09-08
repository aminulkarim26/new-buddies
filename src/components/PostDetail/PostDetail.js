import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [postDetail , setPostDetail]= useState([])
    const PostDetail = (props) => {

    const { userId, title, body } = props.postDetail;    
    useEffect (()=> {
        const url = `https://jsonplaceholder.typicode.com/comments?postid=${userId}`;
        fetch (url)
        .then (res=> res.json())
        .then (data => setPostDetail(data));
        
            
       
         
   }


    )
     return (
        <div>
           <p> Id : {postId} </p>
           <h3 > See More {userId}  </h3>
           
        </div>
    );
}}

  export default PostDetail;

