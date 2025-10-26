

type PageTitleProps= {
    children: React.ReactNode
}

export default function PageTitle({children}: PageTitleProps){


    return (
        <h1 className=" w-full text-5xl text-center text-white pt-25 mb-10 ">{children}</h1>
    )
}