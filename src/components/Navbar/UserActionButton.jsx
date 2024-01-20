import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between items-center gap-3">
            {
                user ? <Link href="/users/dashboard">Dashboard</Link> : null
            }
            
            <Link href={actionURL} className="bg-color-dark text-color-primary py-1 px-5">{actionLabel}</Link>
        </div>    
    )
}

export default UserActionButton