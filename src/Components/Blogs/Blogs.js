import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-10'>Question and Answer</h1>
            <div className='w-11/12 mx-auto'>
                <p className='mt-5 font-bold '>What is the difference between javascript and Node.js ?</p>
                <p>Ans: Javascript is a light weight and object oriented scripting language that's used to make dynamic HTML pages with interactive conclusion on a webpage. It is also used for game development and mobile application development. Mostly it is known as a browser language. It can be use for both server and client side dev.
                    <br /><br />
                    Node.js is a open source javascript runtime environment that make javascript enable to run on the server side. Node.js makes javascript enable to run outside of the browser. It can be used to create a variety of applicatio9ns, including web applications, chat apps etc.
                </p>
                <p className='mt-5 font-bold'>What is the differences between sql and nosql databases?</p>
                <p>Ans: SQL means the Structured Query Language which is the most common and popular programming language for  relational database management systems. It is a language which is designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.
                    <p className='text-2xl font-semibold'>SQL Features</p>
                    <ol>
                        <li>Provide High-Performance Capabilities</li>
                        <li>Open Source Programming Language</li>
                        <li>Supports Data Definition Language and Data Manipulation Language to query the databases</li>
                        <li>Handle Large Transactions with efficiency</li>
                        <li>Suitable for every type of organization – large or small.</li>
                    </ol>
                    <br /><br />
                    NoSQL database mainly provides a mechanism for storage and retrieval of data that is modelled other than table format. It was introduced by CARL STROZ in  1998. He called it a Non-relational database. Now, it is Not only for SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.
                    <p className='text-2xl font-semibold'>NoSQL Features</p>
                    <ol>
                        <li>NoSQL allows the distribution of data on more than just one device.</li>
                        <li>NoSQL has higher scalability than other database management systems</li>
                        <li>Supports Data Definition Language and Data Manipulation Language to query the databases</li>
                        <li>Does not require data normalizatio</li>
                        <li>Can store unstructured, semi-structured, or structured data.</li>
                    </ol>
                </p>
                <p className='mt-5 font-bold'>What is the purpose of jwt and how does it work?</p>
                <p>Ans: JSON Web Token or JWT is an open standard for securely transmitting information between parties as JSON object.
                    <br /> <br />
                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded. It is not encrypted. JWT is a token based stateless authentication system. Since it is a client side based stateless session, server doesn not have to completely rely on a datastore or database to save session information.
                </p>

            </div>
        </div>
    );
};

export default Blogs;