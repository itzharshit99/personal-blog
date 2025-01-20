// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { useFetchRelatedBlogsQuery } from "../redux/features/blogs/blogsApi.js";

// const RelatedBlog = () => {
//   const { id } = useParams();
//   const { data: blogs = [], error, isLoading } = useFetchRelatedBlogsQuery(id);
//   return (
//     <div>
//       <h3 className="text-2xl font-medium pt-8 px-8 ">Related Blogs</h3>
//       <hr />
//       {blogs.length > 0 ? (
//         <div className="p-8">No related Blogs Found</div>
//       ) : (
//         <div className="space-y-4 mt-5">
//           {blogs.map((blog) => {
//             <Link to={`/blogs/${blog?._id}`} className="flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4">
//               <div className="size-14">
//                 <img
//                   className="h-full w-full rounded ring-2 ring-blue-700"
//                   src={blog.coverImg}
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h4 className="font-medium text-[#1E73BE]">{blogs?.title.subString(0,50)}</h4>
//                 <p>{blogs?.description.subString(0,50)}</p>
//               </div>
//             </Link>;
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RelatedBlog;
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchRelatedBlogsQuery } from "../redux/features/blogs/blogsApi.js";

const RelatedBlog = () => {
  const { id } = useParams();
  const { data: blogs = [], error, isLoading } = useFetchRelatedBlogsQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching related blogs.</div>;
  }

  return (
    <div>
      <h3 className="text-2xl font-medium pt-8 px-8">Related Blogs</h3>
      <hr />
      {blogs.length === 0 ? (
        <div className="p-8">No related Blogs Found</div>
      ) : (
        <div className="space-y-4 mt-5">
          {blogs.map((blog) => (
            <Link
              to={`/blogs/${blog?._id}`}
              key={blog?._id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4"
            >
              <div className="size-14">
                <img
                  className="h-full w-full rounded ring-2 ring-blue-700"
                  src={blog?.coverImg}
                  alt={blog?.title || "Blog Cover"}
                />
              </div>
              <div>
                <h4 className="font-medium text-[#1E73BE]">
                  {blog?.title?.substring(0, 50)}...
                </h4>
                <p>{blog?.description?.substring(0, 50)}...</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedBlog;
