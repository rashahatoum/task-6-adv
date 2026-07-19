interface NewlettersSectionProps{
    title:string;
    desc:string;
    btn:string;
    placeholder:string;
    privacy:string;
    link:string;
}
const NewlettersSection = ({title,desc,btn,placeholder,privacy,link}:NewlettersSectionProps) => {
    return (
        <div className="flex-col max-w-3xl mx-auto items-start md:items-center">
            <p className="text-[#7F56D9] pb-12 text-center">Newlatters</p>
            <h1 className="text-5xl pb-24 md:text-center">{title}</h1>
            <p className="text-xl pb-40 text-brand-gray md:text-center">{desc}</p>
            <form className="max-w-494 md:mx-auto mx-0">
                <input type="email" placeholder={placeholder} className="text-left border border-[#D0D5DD] rounded-lg px-16 py-12 mr-16  w-full max-w-360  text-brand-gray dark:bg-white dark:text-brand-gray"/>
                <button type="submit" className="bg-[#7F56D9] rounded-lg px-20 py-12 text-white mt-12 md:mt-0">{btn}</button>
                <p className="text-sm text-left pt-8">{privacy} <span><a href="#" className="underline">{link}</a></span></p>
            </form>
        </div>
    )
}

export default NewlettersSection