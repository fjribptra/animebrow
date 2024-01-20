import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async() => {
    const user = await authUserSession()
    return (
        <div className="text-color-primary py-5 px-4">
            <h1 className="font-bold text-2xl">DASHBOARD</h1>
            <div className="flex justify-center items-center gap-4 px-2 py-6">
                <Image src={user.image} alt='...' width={100} height={100} className="rounded-[50%]" />
                <div>
                    <h3 className="font-bold text-xl">{user.name}</h3>
                    <p className="text-color-[#444]">{user.email}</p>
                </div>
            </div>
        </div>    
    )
}

export default Page