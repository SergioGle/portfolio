const navList: NodeListOf<Node> = document.querySelectorAll(".li-menu");
const sections: NodeListOf<Node> = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec: any) => {
    const top: number = window.scrollY;
    const offset: number = sec.offsetTop - 160;
    const height: number = sec.offsetHeight;
    const id: string = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navList.forEach((links: any) => {
        links.classList.remove("slider-line");
        document
          .querySelector("header ul li a[href*=" + id + "]")
          ?.classList.add("slider-line");
      });
    }
  });
};
