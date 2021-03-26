import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-util';


const AllPostsPage = (props) => {
   return <AllPosts posts={props.allPosts} />
}

// gets run at build time
export async function getStaticProps() {
   const allPosts = getAllPosts();

   return {
      props: {
         allPosts: allPosts
      },
      revalidate: 1800 // 1800 sec, this causes to rerun after every 1800 sec
   }
}
export default AllPostsPage;