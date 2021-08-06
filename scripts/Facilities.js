import { getFacilities, setFacility } from "./database.js"


const facilities = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setChosenMiningFacility(parseInt(event.target.value))
        }
    }
)





export const Facilities = () => {
    let html = "<article id= 'facilities'>"

    const listItemsArray = facilities.map(facility => {
        return `<div class= "facility options">
        <input type= "button" name="facility" value="${facility.name}"/> </div>
        `
    }
)

    html += listItemsArray.join("")
    html += "</article>"
    return html
}