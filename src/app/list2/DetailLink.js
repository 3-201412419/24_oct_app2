'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink() {
   let router =  useRouter()
   let url = usePathname()
   let url_string = useSearchParams();
   console.log(url_string);
    return (
        <button onClick={() => {
            router.back()
        }}>버튼</button>
    )
}