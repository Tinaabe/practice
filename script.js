document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    this.style.left = `${Math.max(0, x)}px`;
    this.style.top = `${Math.max(0, y)}px`;
});

document.getElementById("yes").addEventListener("click", function() {
    alert("Yay! I love you! 💖");
});