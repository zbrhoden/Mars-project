import { getGovernors, setGovernor } from "./database.js"


const governor = getGovernors()

export const Governors = () => {
    let html = "<select>"

    const listItemsArray = governor.map(governor => {
        return `<option input type="checkbox" name="governor" value=${governor.name}/>${governor.name}
        </option>`
    })

    html += listItemsArray.join("")
    html += "</select>"
    return html
}