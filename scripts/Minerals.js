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

    // This is how you have been converting objects to <li> elements
    for (const mineral of minerals) {
        html += `<li>
            <input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.type}
        </li>`
    }

    html += "</ul>"
    return html
}
