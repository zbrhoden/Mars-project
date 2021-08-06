import { getGovernors, setGovernor } from "./database.js"


const governor = getGovernors()


{/* <button onclick="myFunction()">Click me</button> */}
// this code breaks it but we are using it in a minute.









export const Governors = () => {
    let html = "<select>"

    const listItemsArray = governor.map(governor => {
        if (governor.active === true) {
            return `<option input type="checkbox" name="governor" value=${governor.name}/> ${governor.name}
        </option>`
        } else {
            return `<option input type="checkbox" disabled="true" name="governor" value=${governor.name}/> ${governor.name}
            </option>`
        }
        // we added the disabled class feature to the else statement so the names remained grayed.
    })

    html += listItemsArray.join("")
    html += "</select>"
    return html
}