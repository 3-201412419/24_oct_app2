'use client'

import Link from "next/link"

export default function ListItem(props) {


    return (
            <div>
                {
                 props.result.map((a, b) => 
                    <div className = "list-item" key = {b}>
                            <Link href = {"/detail/" + props.result[b]._id }> <h4>{props.result[b].title}</h4> </Link>
                            <p>{props.result[b].content}</p>
                            
                            <Link href = {'/edit/' + props.result[b]._id}>🖋️</Link>

                        
                            <span onClick = {(e) => {
                                // fetch('/api/post/delete', {  1. 정석를 사용한 삭제 방법
                                //     method : 'DELETE',
                                //     headers : {
                                //         'Conent-Type' : 'application/json'
                                //     },
                                //     body : JSON.stringify({id : props.result[b]._id})
                                // }).then((r) => {
                                //     if (r.status == 200){
                                //         return r.json();
                                //     }else {

                                //     }
                                // }).then((result) => {
                                //     e.target.parentElement.style.opacity = 0;
                                //     setTimeout(() => {
                                //         e.target.parentElement.style.display = 'none';
                                //     }, 1000)
                                // }).catch((error) => {
                                //     console.log(error);
                                // })

                                                                                            //2. queryString을 사용한 삭제 방법
                                fetch('/api/post/delete?id=' + props.result[b]._id  + '&author=' + props.result[b].author , { 

                                }).then((result)=> {
                                    console.log(result);
                                    if(result.status == 302){
                                   e.target.parentElement.style.opacity = 0;
                                   setTimeout(() => {
                                        e.target.parentElement.style.display = 'none';
                                   }, 1000)

                                    }else{
                                        alert('권한이 없습니다.');
                                        return false;
                                    }
                                })

                                // fetch('/api/abc/' + props.result[b]._id , {              // 3. 다이나믹 라우팅 을 이용한 삭제 방법
                                // }).then((result) => {
                                //     e.target.parentElement.style.opacity = 0;
                                //     setTimeout(() => {
                                //         e.target.parentElement.style.display = 'none';
                                //     }, 1000)
                                // })

                            }}>🗑️</span>
                        </div>
                 )
                }
            </div>
    ) 
}