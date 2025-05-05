const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

lightBtn.addEventListener("click", () => {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
});

darkBtn.addEventListener("click", () => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
});


lightBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
});

darkBtn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
});