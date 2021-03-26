import Link from 'next/link';
import Image from 'next/image';
import styles from './post-item.module.css';

const PostItem = (props) => {
   const { post } = props;

   const imagePath = `/images/posts/${post.slug}/${post.image}`;
   console.log(imagePath);

   const formatDate = (date) => {
     return new Date(date).toLocaleDateString('en-us', {
         day: 'numeric',
         month: 'long',
         year: 'numeric'
     });
   }

   return (
    <li className={styles.post}>   
        <Link href={`/posts/${post.slug}`}>
            <a>
                <div className={styles.image}>
                    <Image
                      src={imagePath}
                      alt={post.title}
                      width={300}
                      height={200}
                      layout="responsive"
                    />
                </div>
                <div className={styles.content}>
                    <h3>{post.title}</h3>
                    <time>{formatDate(post.date)}</time>
                    <p>{post.excerpt}</p>
                </div>
            </a>
        </Link>
    </li>   
   );
}

export default PostItem;