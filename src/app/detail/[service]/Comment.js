'use client'

import { useEffect, useState } from "react"

export default function Comment({post}) {
    let  [comment, setComment] = useState('')
    let  [commentData, setCommentData] = useState([]);
    useEffect(() => {
        fetch('/api/post/comment_list?id=' + post._id).then(res => res.json()).then((data) => {
            setCommentData(data);
        })
    },[])
    return (
    <div>
        <hr></hr>
        {
            commentData.length > 0 ?
            commentData.map((a,i) => {
                return (
                    <p key = {i}>{a.content}</p>
                ) 
            })  : '댓글이 없습니다'
        }
        <input onChange = {(e) => {setComment(e.target.value)}}  />
        <button onClick = {() => {
            fetch('/api/post/comment', {method : 'POST' , 
            body : JSON.stringify({comment : comment, postId : post._id}) }).then((then) => {
                if(then.status == 302){
                    fetch('/api/post/comment_list?id=' + post._id).then(res => res.json()).then((data) => {
                        setCommentData(data);
                    })
                }
            })
        }}>댓글전송</button>
    </div>
    )
}