document.getElementById("icon-share").addEventListener("click", function () {
  const sharePopup = document.getElementById("share-popup");

  // Toggle visibility of the popup
  if (sharePopup.style.display === "none" || sharePopup.style.display === "") {
    sharePopup.style.display = "block"; // Pokazuje chmurkę
  } else {
    sharePopup.style.display = "none"; // Ukrywa chmurkę
  }
});
