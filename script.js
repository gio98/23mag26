const openButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const closeButtons = document.querySelectorAll("[data-close-modal]");

if (openButton && modal) {
  const toggleModal = (isOpen) => {
    modal.classList.toggle("hidden", !isOpen);
    modal.setAttribute("aria-hidden", String(!isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  openButton.addEventListener("click", () => {
    toggleModal(true);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      toggleModal(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleModal(false);
    }
  });
}
