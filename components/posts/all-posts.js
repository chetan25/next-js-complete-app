import styles from './all-posts.module.css';
import PostsGrid from './posts-grid';

const AllPosts = (props) => {
   return (
     <section className={styles.posts}>
        <h1>All Post</h1>
        <PostsGrid posts={props.posts} />
     </section>
   );
}

export default AllPosts;