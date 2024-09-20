const blogs = [
    {
        title: 'Landscaping Tips',
        description: 'A quick guide to improve your garden.',
        category: 'Landscaping',
        link: 'blogs/landscaping.html',
        image: 'images/landscaping.jpg' // Add the path to the image
    },
    {
        title: 'Roofing Essentials',
        description: 'What you need to know about your roof.',
        category: 'Roofing',
        link: 'blogs/roofing.html',
        image: 'images/roof.jpg' // Add the path to the image
    },
    // Add more blog objects as needed
];

const blogGrid = document.getElementById('blogGrid');
const searchBar = document.getElementById('searchBar');

function displayBlogs(filteredBlogs) {
    blogGrid.innerHTML = '';
    filteredBlogs.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="blog-thumbnail">
            <h2>${blog.title}</h2>
            <p>${blog.description}</p>
            <p><strong>Category:</strong> ${blog.category}</p>
            <a class="blog-link" href="${blog.link}">Read Blog</a>
        `;
        blogGrid.appendChild(card);
    });
}

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.description.toLowerCase().includes(searchTerm)
    );
    displayBlogs(filteredBlogs);
});

displayBlogs(blogs); // Initial display of blogs
