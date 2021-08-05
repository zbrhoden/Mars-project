import { getColonies, setColony } from "./database.js"


const colonies = getColonies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "colony") {
            setColony(parseInt(event.target.value))
        }
    }
)


export const Colonies = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const colony of colonies) {
        html += `<li>
            <input type="radio" name="colony" value="${colony.id}" /> ${colony.name}
        </li>`
    }

    html += "</ul>"
    return html
}
