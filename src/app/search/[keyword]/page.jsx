import { getApiResource } from "@/libs/hit-api";
import Animelist from "@/components/Animelist/Animelist";
import Header from "@/components/Animelist/Header";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getApiResource("anime", `q=${keyword}`);

  return (
    <>
      <section>
        <Header title={`Searching for ${decodedKeyword}...`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
