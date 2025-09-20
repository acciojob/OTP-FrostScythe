//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus(); // Focus first field on load

codes.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value.match(/[0-9]/)) {
      if (index < codes.length - 1) {
        codes[index + 1].focus();
      }
    } else {
      e.target.value = ""; // prevent non-numeric
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) {
          codes[index - 1].focus();
          codes[index - 1].value = "";
        }
      } else {
        input.value = "";
      }
    }
  });
});