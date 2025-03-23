document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab-item');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and content
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabContent = document.querySelector(`#${this.dataset.tab}`);
            tabContent.classList.add('active');
        });
    });
});
