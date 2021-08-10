import { Facilities } from "./Facilities.js"

import { facilityMinerals } from "./FacilityMinerals.js"
//import { Orders } from "./Orders.js"
import { Governors } from "./Governors.js"
import { getGovernors } from "./database.js"
import { ColonyMinerals } from "./ColonyMinerals.js"

const governors = getGovernors()
const minerals = facilityMinerals()

export const willYouBeMine = () => {
    return `
        <h1>Will You Be Mine</h1>


        <article class="choices">
            <section class="options Facilities">
                <h2 class="facilityHead">Active Mining Facilities</h2>
                    ${Facilities()}
            </section> 
        </button>
            <div id="calisto" class="individual__facility">
            </div>
            <div id="europa" class="individual__facility">
            </div>
            <div id="triton" class="individual__facility">
            </div>
            <div id="rhea" class="individual__facility">
            </div>
        </article>

        <article>
            <button id="orderButton">Purchase Materials</button>
        </article>
        
        <article class="Colony Selected">
            <h2>Selected Colony</h2>
           
        </article>

    

        <article class="Governor Selection">
            <section>
            <h2>Governor Selection</h2>
            ${Governors()}
            </section>
            <section>
            <h2>Available Colony Minerals</h2>
                ${ColonyMinerals()}
            </section>
        </article>
    `
}