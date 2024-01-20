import Image from 'next/image'
import Link from 'next/link'

const Animelist = ({api}) => {
    return (
        <>
        <div className="bg-slate-400 p-4 grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
        {api.data?.map(a => {
            return (
                <Link href={`/anime/${a.mal_id}`} className="flex flex-col gap-2 p-2 text-color-primary hover:text-color-accent transition-all hover:-translate-y-2" key={a.mal_id}>
                    <Image src={a.images.webp.image_url} alt='' width={100} height={300} className="w-full md:h-72 lg:h-80 h-60"/> 
                    <h1 className="font-bold md:text-xl text-sm">{a.title}</h1>
                </Link>    
            )
        })}
    </div> 
        </>
    )
}

export default Animelist