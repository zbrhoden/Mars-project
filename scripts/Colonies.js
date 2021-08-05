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

    // Use .map() for converting objects to <li> elements
    const listItems = colonies.map(colony => {
        return `<li>
            <input type="radio" name="colony" value="${colony.id}" /> ${colony.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}