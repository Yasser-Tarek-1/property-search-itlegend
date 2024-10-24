"use server";
import BlogSidebar from "./components/BlogSidebar";
import BlogsWrapper from "./components/BlogsWrapper";
import BlogBreadcumb from "./components/BlogBreadcumb";
import { getData } from "@/services/fetchData";

export const fetchData = async (page = 1, pageSize) => {
  const blogs = await getData(`/api/Blog?page=${page}&pageSize=${pageSize}`);
  return blogs?.data;
};

const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const pageSize = 10;
  const blogs = await fetchData(page, pageSize);

  return (
    <div className="bgc-f7 pt0-md pt70 pb-0">
      <BlogBreadcumb />
      <section className="our-blog pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="">
              {/* col-lg-8 */}
              <BlogsWrapper pageSize={pageSize} blogs={blogs} />
            </div>
            {/* <div className="col-lg-4">
              <BlogSidebar />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
