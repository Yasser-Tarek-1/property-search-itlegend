"use client";
import React, { useState } from "react";
import Pagination from "@/layout/Pagination";
import Blog from "./Blog";

const BlogsWrapper = ({ blogs = {}, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs?.totalRecords / pageSize);

  return (
    <>
      <div className="blog-wrapper">
        {blogs?.items?.map((blog) => (
          <Blog id={blog.id} blog={blog} />
        ))}
      </div>
      <div className="row">
        <div className="mbp_pagination text-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default BlogsWrapper;
