
const Hero = ({ title }: { title: string }) => {
    return (
        <div className="md:mt-[13.6vh] mt-92 xl:px-120 px-0">
            <h1 className="text-[clamp(40px,16vw,230px)] 
            font-bold 
            border-t 
            border-b 
            border-[#00000057] 
            dark:border-white
            text-center 
            px-32 
            lg:px-0
            whitespace-nowrap">
        {title}</h1>
        </div>
    )
}

export default Hero