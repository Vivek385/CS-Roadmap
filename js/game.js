const container = document.getElementById("skillContainer");

SKILLS.forEach(skill => {
  const card = document.createElement("div");
  card.className = "card";

  if (isCompleted(skill.id)) {
    card.classList.add("completed");
  }

  card.innerHTML = `
    <h3>${skill.name}</h3>
    <p>Level: ${skill.level}</p>
    <button>Complete</button>
  `;

  card.querySelector("button").onclick = () => {
    saveProgress(skill.id);
    card.classList.add("completed");
  };

  container.appendChild(card);
});
