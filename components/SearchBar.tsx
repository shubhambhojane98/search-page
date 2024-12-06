import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Search {
  handleSearch: (e: any) => void;
}

const SearchBar = ({ handleSearch }: Search) => {
  return (
    <div className="flex max-w-2xl">
      <Input onChange={(e) => handleSearch(e)} placeholder="Search..." />
      <Search className="relative right-10 top-1" />
    </div>
  );
};

export default SearchBar;
