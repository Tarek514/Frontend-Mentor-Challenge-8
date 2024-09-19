const shareButton = document.getElementById("share-button");
const iconContainer = document.getElementById("icon-container");

shareButton.addEventListener("click", () => {
  shareButton.classList.toggle("active");
  iconContainer.style.display =
    iconContainer.style.display === "flex" ? "none" : "flex";
});
