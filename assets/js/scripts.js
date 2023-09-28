const topButton = document.getElementById("btn-back-to-top");

const scrollFunction = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        topButton.classList.remove("hidden");
    } else {
        topButton.classList.add("hidden");
    }
};
const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

topButton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);
