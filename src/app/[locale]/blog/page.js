import Pagination from "@/components/blog/Pagination";
import Blog from "@/components/blog/blog-list-v1/Blog";
import BlogSidebar from "@/components/blog/sidebar";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata = {
  title: "Blog List v1  || Homez - Real Estate NextJS Template",
};

const BlogV1 = () => {
  const nav = useTranslations("nav");
  return (
    <div className="bgc-f7 pt70 pb-0">
      {/* Breadcrumb Start */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">{nav("blog")}</h2>
                <div className="breadcumb-list d-flex gap-1">
                  <Link href="/">{nav("home")}</Link> <span>/</span>{" "}
                  <span href="#">{nav("blog")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section Area */}
      <section className="our-blog pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-8">
              <Blog />
              <div className="row">
                <div className="mbp_pagination text-center">
                  <Pagination />
                  <p className="mt10 pagination_page_count text-center">
                    1 – 20 of 300+ property available
                  </p>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}

            <div className="col-lg-4">
              <BlogSidebar />
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    </div>
  );
};

export default BlogV1;
