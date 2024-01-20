import InputSearch from "@/components/Navbar/InputSearch"
import Link from "next/link"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-color-accent p-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
            <div>
                <Link href='/'>
                    <h1 className="font-bold text-2xl">AnimeBrow</h1>
                </Link>
            </div>
            <div className="flex gap-3 md:w-72">
                <InputSearch />
            </div>
                <UserActionButton />
        </header>    
    )
}

export default Navbar