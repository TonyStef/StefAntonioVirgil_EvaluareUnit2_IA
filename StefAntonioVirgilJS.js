
document.getElementById('monitorizare-resurse').ondblclick = function () {
    const images = document.querySelectorAll('.monitorizare');
    let index = 0;

  
    images.forEach(img => img.style.display = 'none');
    function showSlide() {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
        index = (index + 1) % images.length;
    }

    setInterval(showSlide, 3000);
    showSlide(); // Afișăm primul slide imediat
};
