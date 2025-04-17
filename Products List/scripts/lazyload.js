export function lazyLoadImages() {
    const images = document.querySelectorAll(".lazy-img");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.classList.add("loaded");
                observer.unobserve(img);
           
            }
        });
    });

    images.forEach(img => observer.observe(img));
}