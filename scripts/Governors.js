import { getGovernors, setGovernor } from "./database.js"


const governor = getGovernors()


//<button onclick="myFunction()">Click me</button>
// this code breaks it but we are using it in a minute.









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