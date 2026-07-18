import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div style={{ margin: "20px" }}>

            <h1>Blogger App</h1>

            {/* 1. Logical AND */}

            {showBooks && <BookDetails />}

            <hr />

            {/* 2. Ternary Operator */}

            {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

            <hr />

            {/* 3. Element Variable */}

            {

                (() => {

                    let component;

                    if (showCourses) {

                        component = <CourseDetails />;

                    }
                    else {

                        component = <h3>No Courses Available</h3>;

                    }

                    return component;

                })()

            }

        </div>

    );

}

export default App;