// 햄버거 메뉴 클릭 시 네비게이션 열기/닫기
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// 서브 메뉴 열기/닫기 (메뉴 항목 클릭 시)
const menuItems = document.querySelectorAll("nav ul li");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const submenu = item.querySelector(".submenu");
    if (submenu) {
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    }
  });
});
