import { getFacilities, setFacility } from "./database.js"







export const Facilities = () => {
    const facility = getFacilities()
    let html = "<ul>"

    const listItemsArray = facility.map(facility => {
        return `<li><input type="radio" name="facility" value="${facility.id}"/> ${facility.name}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"
    return html
}