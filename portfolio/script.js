// TAB TOGGLE
const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.dataset.view;
    views.forEach(view => {
      view.classList.toggle("active", view.id === target);
    });
  });
});

// REAL-TIME CLOCK
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert 0-23 to 12-hour
  document.querySelector(".time").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// initial call
updateTime();

// update every second
setInterval(updateTime, 1000);

// AVATAR FOLLOW CURSOR
const avatar = document.getElementById('avatar');
document.addEventListener('mousemove', e => {
  const x = (e.clientX - window.innerWidth/2)/40;
  const y = (e.clientY - 200)/40;
  avatar.style.transform = `translate(${x}px, ${y}px)`;
});
