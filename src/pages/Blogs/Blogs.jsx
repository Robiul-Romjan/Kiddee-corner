import { useEffect } from "react";


const Blogs = () => {

    useEffect(()=>{
        document.title= "KiddieCorner | Blogs"
    }, [])

    return (
        <div className="form-container">
            <div className="container row mx-auto">
                <div className="col-lg-12">
                    <h2 className="text-center mb-4">Blog Questions And Answers</h2>
                    <div className="card">
                        <div className="row p-4">
                            <div className="col-lg-6 first-q-col">
                                <h4>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                                <hr />
                                <p><strong>Access token:</strong> An access token is a credential that is used to access protected resources or perform authorized actions on behalf of a user. It is typically issued by an authentication server after a user successfully authenticates with their credentials (e.g., username and password) or through other means like social login or OAuth.Access tokens are short-lived and have an expiration time. They carry information about the users identity and the permissions granted. The server verifies the access token with each request to ensure the user has the necessary authorization to access the requested resource.</p>
                                <p><strong>Refresh token:</strong> A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It is usually issued alongside the access token and is kept securely on the client-side. Refresh tokens have a longer lifespan compared to access tokens and can be revoked by the authentication server.</p>
                                <p><strong>They works:</strong>A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.</p>

                                <h4>2.Compare SQL and NoSQL databases?</h4>
                                <hr />
                                <strong>SQL Databases:</strong>
                                <ul>
                                    <li>SQL databases are based on a rigid structure with predefined schemas. Data is organized into tables, and each table has columns and rows with a fixed structure.</li>
                                    <li>The schema defines the structure, data types, and relationships between tables, enforcing data integrity and consistency.</li>
                                    <li>SQL databases use SQL as the standard language for querying and manipulating data.</li>
                                    <li>SQL provides a rich set of operations for complex queries, joins, aggregations, and transactions.</li>
                                    <li>SQL databases usually scale vertically by adding more powerful hardware to handle </li>
                                </ul>
                                <strong>NoSQL Databases:</strong>
                                <ul>
                                    <li>NoSQL databases offer a flexible schema that allows storing unstructured or semi-structured data. The data model can evolve over time without requiring predefined schemas or explicit migrations.</li>
                                    <li>NoSQL databases use various query languages, including key-value, document, columnar, or graph-based models, depending on the database type.</li>
                                    <li>Query capabilities may vary between NoSQL databases, but they generally provide efficient data retrieval based on keys, document structures, or indexes.</li>
                                    <li>NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers, handle large volumes of data, and scale horizontally by adding more commodity hardware.</li>
                                    <li>NoSQL databases often prioritize availability and partition tolerance over strict consistency.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h4>3.What is express js? What is Nest JS?</h4>
                                <hr />
                                <strong>Express Js:</strong>
                                <ul>
                                    <li>Express.js is a minimalist web application framework for Node.js. It provides a simple and un-opinionated way to build web applications and APIs.</li>
                                    <li>It offers a set of flexible and lightweight features, allowing developers to have granular control over the applications structure and behavior.</li>
                                    <li>Express.js provides a routing system for defining routes, middleware for handling requests and responses, and various utility functions to facilitate web development.</li>
                                    <li>It has a large ecosystem of middleware and extensions that developers can leverage to add additional functionality to their applications.</li>
                                    <li>Express.js is known for its simplicity and flexibility, making it a popular choice for small to medium-sized projects or when developers prefer a more lightweight approach.</li>
                                </ul>
                                <strong>Nest Js:</strong>
                                <ul>
                                    <li>Nest.js is a progressive and opinionated web application framework for Node.js, heavily inspired by Angulars architecture and TypeScript.</li>
                                    <li>It focuses on providing a modular, scalable, and maintainable structure for building server-side applications, APIs, and microservices.</li>
                                    <li>Nest.js emphasizes the use of decorators, dependency injection, and TypeScripts strong typing to enable robust and scalable application development.</li>
                                    <li>It provides a powerful module-based architecture that encourages the separation of concerns, enabling easy code organization and module reusability.</li>
                                    <li>Nest.js offers a built-in support for features like routing, dependency injection, middleware, authentication, caching, and more, making it a comprehensive framework for building complex applications.</li>
                                </ul>

                                <h4>4.What is MongoDB aggregate and how does it work?</h4>
                                <hr />
                                <p><strong>MongoDB aggregate</strong> In MongoDB, the aggregate framework is a powerful tool for performing data aggregation operations, such as grouping, filtering, transforming, and analyzing data within a collection. It allows you to process data and retrieve results based on complex queries and computations.</p>
                                <p><strong>Work: </strong> The aggregate operation in MongoDB uses a pipeline approach, where data flows through a sequence of stages. Each stage performs a specific operation on the input data and passes the transformed data to the next stage in the pipeline. The aggregate pipeline consists of multiple stages, and each stage has its own purpose and operation. Filters documents based on specified conditions, similar to the regular find operation. Sorts documents based on specified fields and sorting orders. Limits the number of documents returned and skips a specified number of documents. Reshapes documents, includes or excludes fields, and calculates computed fields.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;