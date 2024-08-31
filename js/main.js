window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-section');
    if (window.scrollY > 50) { // Adjust this value for when you want the animation to trigger
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



document.addEventListener('DOMContentLoaded', function() {
        // Get all menu links
        const menuLinks = document.querySelectorAll('.menu-name a');
        
        // Get all card elements
        const cards = document.querySelectorAll('.cards-container .card');
        
        // Function to filter cards
        function filterCards(category) {
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }



    // Get all the nav links
    const navLinks = document.querySelectorAll('.header-nav li a');

    // Loop through each link
    navLinks.forEach(link => {
        // Check if the href matches the current URL
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });





        // Add click event to menu links
        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                // Remove 'active' class from all links
                menuLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' class to the clicked link
                this.classList.add('active');

                // Get the category from the clicked link
                const category = this.getAttribute('data-category');

                // Filter cards based on the category
                filterCards(category);
            });
        });
    });

document.addEventListener('DOMContentLoaded', function() {
        var currentYear = new Date().getFullYear();
        document.getElementById('current-year').textContent = currentYear;
    });



