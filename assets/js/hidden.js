document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.hdn .a').forEach(el => {
    el.classList.remove('a');
    el.classList.add('y');
  });
  document.querySelectorAll('.hdn .b').forEach(el => {
    el.classList.remove('b');
    el.classList.add('n');
  });
});
