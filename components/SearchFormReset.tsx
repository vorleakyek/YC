"use client"

import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {

  const reset = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event?.currentTarget.form;
    form?.reset();

  }


  return(
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
}

export default SearchFormReset;
