function openModal(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("imageModal").classList.remove("hidden");
  document.getElementById("imageModal").classList.add("flex");
}
function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
  document.getElementById("imageModal").classList.remove("flex");
}
