import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import styles from './post-content.module.css';

const DUMMY_POST = {
    slug: 'dummy-posts',
    title: 'Dummy',
    image: 'dummy-posts.jpg',
    content: '# This is first Post',
    date: '2021-03-23'
};

const PostContent = (props) => {
   return (
     <article className={styles.content}>
        <PostHeader  title={DUMMY_POST.title} image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`} />
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
     </article>
   );
};

export default PostContent;