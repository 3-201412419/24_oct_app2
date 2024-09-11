import { getServerSession } from "next-auth"
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

export default async function Wrtie() {
        let session = await getServerSession(authOptions);
        console.log(session);
        if(!session){
            return (
                <div>
                    <div>로그인이 필요합니다 로그인 하시겠습니까?</div>
                </div>
            )
        }else{
            return (
                <div className = "p-20">
                    <h4>글 작성</h4>
                    <form action = "/api/post/new" method = "POST">
                        <input type = "text" name = "title" placeholder = "제목"/>
                        <input name = "content" placeholder ="내용"/>
                        <button type = "submit">버튼</button>
                    </form>
                </div>
            )
        }

}