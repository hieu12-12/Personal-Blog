// Select the form elements
const getForm = document.querySelector('form');
const getUsername = document.getElementById('username');
const getTitle = document.getElementById('title');
const getContent = document.getElementById('content');
const error = document.getElementById('error'); // Ensure this ID exists in the HTML

// Function to handle form submission
const formSubmit = function () {
    const post = {
        username: getUsername.value.trim(),
        title: getTitle.value.trim(),
        content: getContent.value.trim()
    };

    // Check if any field is empty and display an error message if so
    if (!post.username || !post.title || !post.content) {
        error.textContent = 'Please complete all fields before submitting';
        error.style.display = 'block'; // Ensure the error message is visible
        console.log("Error: Some fields are empty");
    } else {
        // Store the blog post object in local storage with a unique key
        localStorage.setItem(`blog_${post.title}`, JSON.stringify(post));
        console.log("Post saved:", post);

        // Redirect to the blog page (adjust path if needed)
        redirectPage('./blog.html');

        // Clear the form fields and error message after submission
        getUsername.value = '';
        getTitle.value = '';
        getContent.value = '';
        error.textContent = '';
        error.style.display = 'none'; // Hide the error message after submission
    }
};

// Attach the event listener to handle form submission
getForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    formSubmit(); // Call the custom form submission function
});
