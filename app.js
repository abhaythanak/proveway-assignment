function toggleBox(element) {
    // If the clicked box is already active, remove 'active' class to close it
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      // Remove 'active' class from all other boxes
      document
        .querySelectorAll(".box")
        .forEach((box) => box.classList.remove("active"));
      // Add 'active' class to the clicked box
      element.classList.add("active");
    }
  }