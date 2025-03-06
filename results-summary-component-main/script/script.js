const data = [
    { "category": "Reaction", "score": 80, "icon": "./assets/images/icon-reaction.svg" },
    { "category": "Memory", "score": 92, "icon": "./assets/images/icon-memory.svg" },
    { "category": "Verbal", "score": 61, "icon": "./assets/images/icon-verbal.svg"},
    { "category": "Visual","score": 72, "icon": "./assets/images/icon-visual.svg" }
]

function renderSummary() {
    const summaryContainer = document.querySelector(".summary-content")
    const button = document.querySelector(".btn-continue")

    document.querySelectorAll(".summary-item").forEach(el => el.remove())

    data.forEach(item => {
        const summaryItem = document.createElement("div")
        summaryItem.classList.add("summary-item", item.category.toLowerCase())

        summaryItem.innerHTML = `
            <div>
                <img src="${item.icon}" alt="${item.category} icon" class="icon">
                <span class="category">${item.category}</span>
            </div>
            <div>
                <span class="score">${item.score}</span>
                <span class="total">/ 100</span>
            </div>
        `

        summaryContainer.insertBefore(summaryItem, button)
    })
}

renderSummary()