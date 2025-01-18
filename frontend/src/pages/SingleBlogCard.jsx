// import React from 'react'
// import { formateDate } from '../utils/formateDate.js';
// import EditorJS from '@editorjs/editorjs';
// const editorJSHTML = EditorJS();
// const SingleBlogCard = ({blog}) => {
//   const {title,description,content,coverImg,category,rating,autor,createdAt} = blog || {};

//   const htmlContent = editorJSHTML.parse(content).join('');
//   return (
//     <>
//     <div className='bg-white p-8'>
//       <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
//       <p className='mb-6'>{formateDate(createdAt)} by <span className='text-blue-400 cursor-pointer'>admin</span></p>
//     </div>
//     <div>
//       <img src={coverImg} alt="" className='w-full md:h-[520px] bg-cover' />
//     </div>
//     <div>
//       <div dangerouslySetInnerHTML={{__html:htmlContent}} />
//     </div>
//     </>
//   )
// }

// export default SingleBlogCard

import React from 'react';
import { formateDate } from '../utils/formateDate.js';
import parse from 'html-react-parser';

const SingleBlogCard = ({ blog }) => {
  const { title, description, content, coverImg, category, rating, autor, createdAt } = blog || {};

  // Assuming `content` is stored as HTML or a string that can be parsed
  const htmlContent = content ? parse(content) : '';

  return (
    <>
      <div className="bg-white p-8">
        <h1 className="md:text-4xl text-3xl font-medium mb-4">{title}</h1>
        <p className="mb-6">
          {formateDate(createdAt)} by <span className="text-blue-400 cursor-pointer">admin</span>
        </p>
      </div>
      <div>
        <img src={coverImg} alt="" className="w-full md:h-[520px] bg-cover" />
      </div>
      <div className='mt-8 space-y-4'>
        {/* Safely render HTML content */}
        <div className='space-y-3 editorjsdiv'>{htmlContent}</div>
        <div>
          <span className='text-lg font-medium'>Rating:</span>
          <span>{rating}  (based on 2370 reviews)</span>
        </div>
      </div>
    </>
  );
};

export default SingleBlogCard;
