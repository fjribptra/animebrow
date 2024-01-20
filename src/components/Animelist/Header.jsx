import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex px-6 mt-6 justify-between items-center text-color-primary">
            <h1 className="font-bold text-xl">{title}</h1>
            {linkHref && linkTitle ? 
                <Link href={linkHref} className="text-purple-600 underline hover:text-color-accent">{linkTitle}</Link> 
                : null
            }
        </div>
    )
}

export default Header