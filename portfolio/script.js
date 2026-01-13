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
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  document.getElementById("clock").textContent =
    `${hours}:${minutes} ${ampm}`;
}

updateTime();
setInterval(updateTime, 60000);
