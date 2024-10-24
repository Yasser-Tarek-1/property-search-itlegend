"use server";
import { getData } from "@/services/fetchData";
import BlogHead from "../components/BlogHead";
import BlogContent from "../components/BlogContent";

export const fetchData = async (id) => {
  const blog = await getData(`/api/Blog/${id}`);
  return blog?.data;
};

export async function generateMetadata({ params }) {
  const blog = await fetchData(params.id);

  const title = params.locale == "ar" ? blog?.seoTitle : blog?.seoTitle;
  const description =
    params.locale == "ar" ? blog?.seoDescription : blog?.seoDescription;
  let metaTags = [];
  try {
    metaTags = JSON.parse(blog?.seoMetaTags || "[]");
  } catch (error) {
    console.error("Failed to parse seoMetaTags:", error);
  }

  return {
    title: title,
    description,
    openGraph: {
      title: title,
      description,
    },
    twitter: {
      title: title,
      description,
    },
    other:
      metaTags.length > 0
        ? metaTags.map((tag) => ({
            name: tag,
            content: tag,
          }))
        : [],
  };
}

const page = async ({ params }) => {
  const blog = await fetchData(params.id);
  const imagePath = `${process.env.NEXT_PUBLIC_ARTICLES_CONTENTS_IMAGE}`;

  return (
    <>
      {/* Blog Section Area */}
      <section className="our-blog pt150 ">
        <BlogHead blog={blog} imagePath={imagePath} />
        <BlogContent contents={blog?.contents} imagePath={imagePath} />
      </section>
      {/* End Blog Details */}
      {/* <section className="pb90 pb20-md pt-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="main-title text-start text-md-center">
                <h2 className="title">Related Posts</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default page;
