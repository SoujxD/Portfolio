document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('downloadBtn').addEventListener('click', function () {
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = 'https://github.com/SoujxD/Python-Automation/blob/main/soujanyaresume.pdf'; // Replace with the path to your PDF
    link.download = 'soujanyaresume.pdf'; // The name of the downloaded file
    link.style.display = 'none'; // Hide the link element
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Trigger a click on the link
    document.body.removeChild(link); // Remove the link from the body
});
const navLinks = document.querySelectorAll('nav a');

