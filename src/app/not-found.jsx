import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center flex-col gap-3">
            <h1 className="text-color-accent text-4xl font-bold">Not Found</h1>
            <Link href={'/'} className="text-color-primary underline">Kembali</Link>
        </div>    
    )
}

export default NotFound