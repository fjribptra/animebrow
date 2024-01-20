"use client";
import { useState, useEffect } from "react";
import Animelist from "@/components/Animelist/Animelist";
import Pagination from "@/components/Utilities/Pagination";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import { getApiResource } from "@/libs/hit-api";

const Page = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const data = await getApiResource("top/anime", `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`THE MOST POPULAR ANIMES #${page}`} />
      <Animelist api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
    </>
  );
};

export default Page;
