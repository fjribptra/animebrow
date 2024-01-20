"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if(event.key === 'Enter' || event.type === 'click') {
            const keyword = searchRef.current.value
            if(!keyword || keyword.trim() == "") return
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }


  return (
    <div className="relative w-full  bg-color-dark">
      <input className="p-2 w-full" type="text" placeholder="Search..." ref={searchRef} onKeyDown={handleSearch}/>
      <button className="absolute top-1 right-2" onClick={handleSearch}>
      <MagnifyingGlass size={30} color="#121212" />
      </button>
      {/* <button 
      className="bg-color-red text-color-primary p-2 rounded-md cursor-pointer hover:bg-color-dark hover:text-color-accent transition-all"
      > Search
      </button> */}
    </div>
  );
};

export default InputSearch;
