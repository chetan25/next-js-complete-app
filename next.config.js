const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// to override next config
// module.exports = {
//  env: {
//      mongodb_username: 'blog_user',
//      mongodb_password: 'bloguser1234',
//      mongodb_cluster: 'cluster0',
//      mongodb_database: 'blog-site'
//  }    
// }

// will be executed by nextjs and get the phase value
module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'blog_user',
                mongodb_password: 'bloguser1234',
                mongodb_cluster: 'cluster0',
                mongodb_database: 'blog-site'
            }   
        }
    }

    // this is not in dev mode, we could pass in different db credentials
    return {
        env: {
            mongodb_username: 'blog_user',
            mongodb_password: 'bloguser1234',
            mongodb_cluster: 'cluster0',
            mongodb_database: 'blog-site'
        }   
    }
}