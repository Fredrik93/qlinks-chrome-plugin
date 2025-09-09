function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    document.getElementById("status").textContent = "✅ Copied!";
    setTimeout(() => {
      document.getElementById("status").textContent = "";
    }, 1500);
  });
}

document.getElementById("copyGithub").addEventListener("click", () => {
  copyToClipboard("https://github.com/Fredrik93");
});

document.getElementById("copyLinkedIn").addEventListener("click", () => {
  copyToClipboard("https://www.linkedin.com/in/fredrik-ullman-919645174/");
});
