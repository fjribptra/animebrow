import { getApiResource } from "@/libs/hit-api";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const animeById = await getApiResource(`anime/${id}`);
  const animeDetail = animeById.data;
  console.log(animeById);

  const Grades = ({ title, text }) => {
    return (
      <span className="text-color-primary border-2 flex flex-col gap-1 px-5 py-1 justify-center items-center">
        <p className="text-color-accent">{title}</p>
        <p>{text}</p>
      </span>
    );
  };

  return (
    <div className="p-6 text-color-primary flex flex-col gap-5">
      <div>
        <h1 className="font-bold md:text-4xl text-2xl">
          {animeDetail.title} ({animeDetail.year})
        </h1>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        <Grades title="Episodes" text={animeDetail.episodes} />
        <Grades title="Score" text={animeDetail.score} />
        <Grades title="Rank" text={animeDetail.rank} />
        <Grades title="Favorites" text={animeDetail.favorites} />
        <Grades title="Popularity" text={animeDetail.popularity} />
        <Grades title="Members" text={animeDetail.members} />
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        <Image className="w-full" src={animeDetail.images.webp.image_url} alt={animeDetail.images.jpg.image_url} width={100} height={100} />
        <div className="md:w-[2900px]">
          <p>{animeDetail.synopsis}</p>
        </div>
        <VideoPlayer youtubeId={animeDetail.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Page;
