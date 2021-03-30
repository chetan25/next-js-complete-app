import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getAllPostFiles } from '../../helpers/posts-util';

// posts/next-js-read

const PostDetailPage = (props) => {
   return <>
      <Head>
         <title>{props.post.title}</title>
         <meta name='description' content={props.post.excerpt} />
      </Head> 
      <PostContent post={props.post}/>
   </>
}

export function getStaticPaths() {

   // doing it this way, the data will be prepared on demand when we visit the page.
   // and we would need a fallback UI. 
   // Scenario is valid for when we have too many posts
   // return {
   //    paths: [],
   //    fallback: true
   // }

   const postFiles = getAllPostFiles();
   const paths = postFiles.map(fileName => {
      return {
         params: {
            slug: fileName.replace(/\.md$/, '')
         }
      };
   });

   return {
      paths: paths,
      fallback: false
   }
};

export function getStaticProps(context) {
   const { params: { slug } } = context;

   const postData = getPostData(slug);

   return {
      props: {
         post: postData
      },
      revalidate: 600
   }
}

export default PostDetailPage;