import { getFacilities, setFacility, getGovernors, setGovernor } from "./database.js"
import { Governors } from "./Governors.js"


const governor = getGovernors()

const facilities = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setChosenMiningFacility(parseInt(event.target.value))
        }
    }
)

// const displayMineral = (facilities) => {
//     if (facility.id === governor.colonyId && facility.active === governor.active) {
//         return `<div class= "facility options">
//         <input onclick="displayMineral()" type="button" name="facility" value="${facility.name}"/> </div>
//         `
//     } else {
//         return `<div class= "facility options">
//         <input onclick="displayMineral()" disabled="true" type="button" name="facility" value="${facility.name}"/> </div>
//         `
//     }
// }




export const Facilities = () => {
    let html = "<article id= 'facilities'>"

    const listItemsArray = facilities.map(facility => {
        if (facility.active === true && governor.) {
            return `<div class= "facility options">
            <button name="facility"/> ${facility.name}</div>
            `
        } else {
            return `<div class= "facility options">
            <button name="facility" disabled/> ${facility.name}</div>
            `
        }
    }
    
)

    html += listItemsArray.join("")
    html += "</article>"
    return html
}