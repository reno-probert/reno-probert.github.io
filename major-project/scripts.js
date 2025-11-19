function selectClass(selected) {
    // Save for use in future pages
    localStorage.setItem("playerClass", selected);

    // Navigate to the dungeon intro page with class parameter
    window.location.href = "story/entrance.html?class=" + selected;
}

function getClass() {
    // URL parameter takes priority
    const params = new URLSearchParams(window.location.search);
    let cls = params.get("class");

    // fallback to saved choice
    if (!cls) cls = localStorage.getItem("playerClass");

    return cls;
}