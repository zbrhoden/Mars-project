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
        if (governor.active === true && facility.active === true) {
            return `<div class= "facility options">
            <input onclick="displayMineral()" type="button" name="facility" value="${facility.name}"/> </div>
            `
        } else {
            return `<div class= "facility options">
            <input onclick="displayMineral()" disabled="true" type="button" name="facility" value="${facility.name}"/> </div>
            `
        }
    }
    
)

    html += listItemsArray.join("")
    html += "</article>"
    return html
}