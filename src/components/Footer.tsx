interface FooterProps {
    year: string;
    items: string[];
}

const Footer = ({ year, items }: FooterProps) => {
    return (
        <div className="w-full flex flex-col-reverse items-center gap-14 px-32 pb-30 lg:px-112 
                        md:flex-row md:justify-start md:items-center">
            <p className="text-xl"> &copy; {year}</p>
            <ul className="flex flex-col items-center gap-14 md:flex-row md:gap-24">
                {items.map((item, index) => (
                    <li key={index} className="text-xl cursor-pointer hover:underline">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Footer