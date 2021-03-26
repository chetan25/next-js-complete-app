import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postDirPath = path.join(process.cwd(), 'content', 'posts');


const getPostData = (fileName) => {
   const filePath = path.join(postDirPath, fileName);
   const fileContent = fs.readFileSync(filePath, 'utf-8');
   
   // data is meta data and content is the markdown content
   const {data, content} = matter(fileContent);

   const slug = fileName.replace(/\.md$/, '');

   const postData = {
      slug: slug,
      ...data,
      content: content
    };

    return postData;
};

export const getAllPosts = () => {
   const postFiles = fs.readdirSync(postDirPath);
   const postsData = postFiles.map(file => {
       return getPostData(file);
   });
   
   // recent post are first
   const sortedPostData = postsData.sort((postA, postB) => postA.date > postB ? -1 : 1);
  
   return sortedPostData;
};

export const getFeaturedPost = () => {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}