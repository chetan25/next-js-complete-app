import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postDirPath = path.join(process.cwd(), 'content', 'posts');


export const getPostData = (postIdentifier) => {
   const slug = postIdentifier.replace(/\.md$/, '');

   const filePath = path.join(postDirPath, `${slug}.md`);
   const fileContent = fs.readFileSync(filePath, 'utf-8');
   
   // data is meta data and content is the markdown content
   const {data, content} = matter(fileContent);

   const postData = {
      slug: slug,
      ...data,
      content: content
    };

    return postData;
};

export const getAllPostFiles = () => {
    return fs.readdirSync(postDirPath);
};

export const getAllPosts = () => {
   const postFiles = getAllPostFiles();
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