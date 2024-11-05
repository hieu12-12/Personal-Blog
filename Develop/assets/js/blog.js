// Select the main element where blog posts will be displayed
const getMain = document.querySelector('main');
const getBack = document.getElementById('back');

// Function to display a message if there are no blog posts
const noPosts = function () {
    const message = document.createElement('p');
    message.textContent = 'No Blog posts yet...';
    getMain.appendChild(message);
    console.log("No posts found.");
};

// Function to render the list of blog posts
const renderBlogList = function () {
    const blogKeys = Object.keys(localStorage).filter(key => key.startsWith("blog_"));

    if (blogKeys.length === 0) {
        noPosts();
    } else {
        blogKeys.forEach(key => {
            const postValue = JSON.parse(localStorage.getItem(key));
            const newBlog = document.createElement('article');

            // Display the username, title, and content of each blog post
            newBlog.innerHTML = `
                <h2>${postValue.title}</h2>
                <blockquote>${postValue.content}</blockquote>
                <p>Posted by: ${postValue.username}</p>
            `;
            getMain.appendChild(newBlog);
            console.log("Post rendered:", postValue);
        });
    }
};

// Render the blog list on page load
renderBlogList();

// Redirect to the home page when the back button is clicked
getBack.addEventListener('click', () => {
    redirectPage('./index.html'); // Adjusted path to use relative path
});
