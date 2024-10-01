'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DarkMode(){
    let router = useRouter()
    const [mode , setMode] = useState('');
    useEffect(() => {
       let cookie_mode = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
       if(cookie_mode == ''){
        document.cookie = 'mode=light; max-age = ' + (3600 * 24 * 400)
        setMode('light')
       }
    }, [])
    return (
        <span  className = "cookie_star" onClick={() => {
            let cookie_val = ('; ' + document.cookie).split('; mode=').pop().split(';')[0]
            if(cookie_val == 'dark'){
                document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
                router.refresh();
                setMode('light')
            }else {
                document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
                router.refresh();
                setMode('dark')
            }
        }}>{mode === 'dark' ? '🔥' : '🌙'}</span>
    )
}