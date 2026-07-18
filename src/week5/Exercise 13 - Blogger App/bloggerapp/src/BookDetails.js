function BookDetails() {

    const books = [

        {
            id: 1,
            name: "Java Programming",
            author: "Herbert Schildt",
            price: 650
        },

        {
            id: 2,
            name: "React Guide",
            author: "Dan Abramov",
            price: 550
        },

        {
            id: 3,
            name: "Spring Boot",
            author: "Craig Walls",
            price: 700
        }

    ];

    return (

        <div>

            <h2>Book Details</h2>

            <ul>

                {

                    books.map(book => (

                        <li key={book.id}>

                            {book.name} |
                            {book.author} |
                            ₹{book.price}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default BookDetails;