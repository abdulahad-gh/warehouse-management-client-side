import React from 'react';

const Blog = () => {
    return (
        <div className='h-screen flex items-center px-4 my-80  md:my-0'>
            <div>
                <h2 className='text-center text-3xl mb-16'>Blog</h2>

                <div>
                    <h3 className='text-xl'>Q1: Difference between javascript and nodejs?</h3>
                    <p>Ans: <strong>Javascript</strong> is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. <strong>NodeJS</strong> is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser, </p>
                </div>
                <div className='my-6'>
                    <h3 className='text-xl'>Q2: When should you use nodejs and when should you use mongodb?</h3>
                    <p>Ans: When create api we should use node.js to make api.like get,post,put,delete. we can get req using by node.js. and when  we send data to database, we should use mongodb.MongoDB allows geospatial queries and is text-search enabled. CouchDB goes another level and allows document versioning. </p>
                </div>
                <div>
                    <h3 className='text-xl'>Q3: What is the purpose of jwt and how does it work?</h3>
                    <p>Ans: JWT is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;