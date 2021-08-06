import { getGovernors, setGovernor } from "./database.js"


const governor = getGovernors()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governor") {
            setGovernor(parseInt(event.target.value))
        }
    }
)









{/* <button onclick="myFunction()">Click me</button> */}
// this code breaks it but we are using it in a minute.









export const Governors = () => {
    let html = "<select class=‘governors’><option value='0'>Please select a governor...</option>"

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