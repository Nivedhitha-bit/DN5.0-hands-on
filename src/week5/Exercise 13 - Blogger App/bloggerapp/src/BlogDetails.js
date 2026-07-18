function BlogDetails() {

    const blogs = [

        {
            id: 1,
            title: "Learning React",
            author: "John"
        },

        {
            id: 2,
            title: "Understanding JSX",
            author: "Alice"
        },

        {
            id: 3,
            title: "React Router",
            author: "David"
        }

    ];

    return (

        <div>

            <h2>Blog Details</h2>

            <ul>

                {

                    blogs.map(blog => (

                        <li key={blog.id}>

                            {blog.title} - {blog.author}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default BlogDetails;