'use client'

import { signOut } from 'next-auth/react'

export default function LoginOut() {
    return (
            <button style = {{margin : '10px'}} onClick = {() => {signOut()}}>로그아웃</button> 
    )
}