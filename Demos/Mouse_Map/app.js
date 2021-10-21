document.addEventListener("mousemove", e => {
  const x = Math.floor(e.pageX * 255 / window.innerWidth);
  const y = Math.floor(e.pageY * 255 / window.innerHeight);

  const color = `rgb(0, ${x}, ${y})`;
  document.body.style.backgroundColor = color;
})