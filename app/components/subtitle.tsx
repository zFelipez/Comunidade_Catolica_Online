import React from "react"

type SubtitleProps = {
    children: React.ReactNode,
}


export function Subtitle( {children} : SubtitleProps){

    return (
        <h2 className=" text-amber-300 text-2xl mb-8"> { children } </h2>
    )
}