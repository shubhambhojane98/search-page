"use client";
import BCard from "@/components/BCard";
import SearchBar from "@/components/SearchBar";
import { Input } from "@/components/ui/input";
import BlogData from "@/data";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = BlogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen mt-10 mx-10">
      <SearchBar handleSearch={(e: any) => handleSearch(e)} />
      <div className="mt-5  grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredBlogs.map((blog) => (
          <BCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            category={blog.category}
            posted={blog.posted}
            comments={blog.comments}
          />
        ))}
      </div>
      {filteredBlogs.length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          No blogs found for "{searchTerm}"
        </div>
      )}
    </div>
  );
}
