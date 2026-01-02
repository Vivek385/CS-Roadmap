function getProgress() {
  return JSON.parse(localStorage.getItem("progress")) || {};
}

function saveProgress(skillId) {
  const progress = getProgress();
  progress[skillId] = true;
  localStorage.setItem("progress", JSON.stringify(progress));
}

function isCompleted(skillId) {
  return getProgress()[skillId] === true;
}
