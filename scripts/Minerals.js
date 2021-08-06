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


export const facilityMinerals = () => {
    let html = "<div class= 'minerals'>"

    const listItems = minerals.map(mineral => {
        return `<ul>
            <input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.type}
        </ul>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

