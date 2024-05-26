const handleClickOpen = (btn, content, icon) => {
  document.getElementById(btn).addEventListener("click", () => {
    document.getElementById(content).classList.toggle("d-none");
    if (icon) {
      document.getElementById(icon).classList.toggle("arrow-rotate");
    }
  });
};

handleClickOpen("content-btn-1", "content-box-1");
