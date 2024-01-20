import { scrollTop } from "@/libs/scrollTop";

const Pagination = ({ page, lastPage, setPage }) => {
  const handleNextPage = () => {
    setPage((prev) => {
      if (prev == lastPage) return prev;
      return prev + 1;
    });
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prev) => {
      if (prev == 1) return prev;
      return prev - 1;
    });
    scrollTop();
  };

  return (
    <div className="flex w-full text-color-primary justify-center items-center p-4 gap-5">
      <button className="p-2 transition-all hover:text-color-accent" onClick={handlePrevPage}>
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button className="p-2 transition-all hover:text-color-accent" onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
