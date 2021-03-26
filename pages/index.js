import React from 'react';
import { getFeaturedPost } from '../helpers/posts-util';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';


const HomePage = (props) => {
   return (
      <>
       <Hero />
       <FeaturedPosts posts={props.featuredPosts}/>
      </>
   );
}

// gets run at build time
export async function getStaticProps() {
   const featuredPosts = getFeaturedPost();

   return {
      props: {
         featuredPosts: featuredPosts
      },
      revalidate: 1800 // 1800 sec, this causes to rerun after every 1800 sec
   }
}

export default HomePage;