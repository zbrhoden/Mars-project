import { getGovernors, setGovernor } from "./database.js"



export const Governors = () => {
    const governor = getGovernors()
    let html = "<ul>"

    const listItemsArray = governor.map(governor => {
        return `<li><input type="radio" name="governor" value="${governor.id}"/> ${governor.name}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"
    return html
}