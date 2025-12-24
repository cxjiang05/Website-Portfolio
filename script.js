document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip");
  if (!tooltip) return;

  const OFFSET_X = 12;
  const OFFSET_Y = 14;

  document.querySelectorAll("[data-tip]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      tooltip.textContent = el.dataset.tip || "";
      tooltip.style.display = "block";
    });

    el.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.clientX + OFFSET_X}px`;
      tooltip.style.top = `${e.clientY + OFFSET_Y}px`;
    });

    el.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
