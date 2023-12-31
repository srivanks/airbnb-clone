'use client'

import Image from 'next/image'
// import { useReducer } from "next/navigation";

const Logo = () => {
    // const router = new Router();

    return (
        <Image
            alt="logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src="/images/logo.png"
        />
    )
}

export default Logo
