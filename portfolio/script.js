const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    views.forEach(view => view.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    const target = document.getElementById(tab.dataset.view);
    target.classList.add("active");
    tab.classList.add("active");
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

// HERO CHARACTER TILT ANIMATION
const character = document.getElementById('hero-character');

document.addEventListener('mousemove', (e) => {
    if (!character) return;

    const rect = character.getBoundingClientRect();
    const charCenterX = rect.left + rect.width / 2;
    const charCenterY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleX = (charCenterY - mouseY) / 25;
    const angleY = (mouseX - charCenterX) / 25;

    const limit = 20;
    const constrainedX = Math.max(Math.min(angleX, limit), -limit);
    const constrainedY = Math.max(Math.min(angleY, limit), -limit);

    character.style.transform = `rotateX(${constrainedX}deg) rotateY(${constrainedY}deg)`;
});

// Reset when mouse leaves window
document.addEventListener('mouseleave', () => {
    if (character) character.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
