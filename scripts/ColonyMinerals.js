import { getColonies, setColony, getMinerals, getOrderBuilder, getChosenGovernors } from "./database.js"

const minerals = getMinerals()
const colonies = getColonies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "colony") {
            setColony(parseInt(event.target.value))
        }
    }
)


// export const Colonies = () => {
//     let html = "<ul>"

//     // Use .map() for converting objects to <li> elements
//     const listItems = colonies.map(colony => {
//         return `<li>
//             <input type="radio" name="colony" value="${colony.id}" /> ${colony.name}
//         </li>`
//     })

//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }

export const ColonyMinerals = () => {
    const order = getOrderBuilder()
    let html = "<ul>"

    const listItems = minerals.map(mineral => {
        return `>li>
            <name="minerals" value="${mineral.id}" /> ${mineral.name}
            </li>
            `
    })
    html += listItems.join("")
    html += "</ul>"

}