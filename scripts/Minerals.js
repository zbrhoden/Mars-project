import { getMinerals, setMineral } from "./database.js"


const minerals = getMinerals()

document.addEventListener(

    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
        }
    }
)


export const Minerals = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = minerals.map(mineral => {
        return `<li>
            <input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

