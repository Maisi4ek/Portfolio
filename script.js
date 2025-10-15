const sections = Array.from(document.querySelectorAll("section"));
let active = document.querySelector(".active");
const buttons = document.querySelectorAll(".link");

window.addEventListener("scroll", function () {
    const position = window.scrollY

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (sectionTop <= position && position < sectionBottom) {
            const index = sections.indexOf(section);
            const newActiveButton = buttons[index];
            active.classList.remove("active");
            newActiveButton.classList.add("active");
            active = newActiveButton;
        }
    }
})