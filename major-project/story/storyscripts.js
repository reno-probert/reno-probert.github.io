      // Class helper so pages know the player's class
      function getClass() {
        const params = new URLSearchParams(window.location.search);
        let cls = params.get("class");
        if (!cls) cls = localStorage.getItem("playerClass");
        return cls;
      }

      // Optional: show class-exclusive options
      
function setupChoices() {
  const playerClass = getClass();

  const barbarianBtn = document.getElementById("barbarian-only");
  if (barbarianBtn && playerClass !== "barbarian") {
    barbarianBtn.style.display = "none";
  }

  const rogueBtn = document.getElementById("rogue-only");
  if (rogueBtn && playerClass !== "rogue") {
    rogueBtn.style.display = "none";
  }

  const bardBtn = document.getElementById("bard-only");
  if (bardBtn && playerClass !== "bard") {
    bardBtn.style.display = "none";
  }

  const druidBtn = document.getElementById("druid-only");
  if (druidBtn && playerClass !== "druid") {
    druidBtn.style.display = "none";
  }
}

      window.onload = setupChoices;