import Animelist from "@/components/Animelist/Animelist";
import Header from "@/components/Animelist/Header";
import { getApiResource, getNestedAnimeResponse } from "@/libs/hit-api";
import { generateRandomNumber } from "@/libs/generateRandomNumber";
import { reproduce } from "@/libs/reporoduce";

const Page = async () => {
  const topAnime = await getApiResource("top/anime", "limit=10");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");

  recommendedAnime = reproduce(recommendedAnime, 10)
  
  return (
    <>
      <section>
        <Header title="Most popular" linkHref="/popular" linkTitle="See all" />
        <Animelist api={topAnime} />
      </section>
      <section>
        <Header title="Recommendations"/>
        <Animelist api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
