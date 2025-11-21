function selectClass(selected) {
    // store player choice
    localStorage.setItem("playerClass", selected);

    // Go to the entrance after selecting class
    window.location.href = "story/entrance.html?class=" + selected;
}

function getClass() {
    // URL has the class so it can go between pages
    const params = new URLSearchParams(window.location.search);
    let cls = params.get("class");

    // fallback to saved choice
    if (!cls) cls = localStorage.getItem("playerClass");

    return cls;
}