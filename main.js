// Your job is to define the different objects and resources, 
// their structure, and the corresponding properties for each, 
// to represent the following information about Elizabeth's campaign.

// 1. Her congressional district (you can use yours here) - e wil be used to represent Elizabth in the variable names
const eDistrict = {
    district: "Tennesse Congressional District 5"
}
// Function to change property of district
const changeDistrict = (objectToChange, propertyToChange) => {
    console.log(objectToChange = propertyToChange)
}

// calls function changeDistrict and makes it Tennessee 7th District
changeDistrict(eDistrict, "Tennesse 7th District");

// 2. Her platform statements for the following issues.
const ePlatforms = {
    //  Taxes
    taxes: "No taxes for everyone!",
    // Jobs
    jobs: "High paying jobs for everyone!",
    // Infrastructure
    infrastructure: "More sidewalks for students",
    // Health care
    health: "free best healthcare!",
    // Crime and enforcement
    crime: "kill all the bad guys"
}

// Function that iterates through ePlatform and changes the values of properties
const changeEplatforms = (objectToChange, propertyToChange, value1) => { 
         objectToChange[propertyToChange] = value1
         return value1
}


// calls changeEplatforms
changeEplatforms(ePlatforms, "taxes", "All the moneys!");
console.log(ePlatforms)
// 3. URL for donation form
const eUrlForDonation = {
    url1: "http://www.givemeallyourmoney.com"
}

// 4. Calendar of events - might do this as an array of arrays
const eCalenderEvents = [
    ["January", {evt1: "TBD", evt2: "TBD"}],
    ["February", {evt1: "February 14th ~ Kissy hearts day!"}],
    ["March", {evt1: "March 17th ~ Give the irish all the moneys!", evt2: "TBD"}],
    ["April", {evt1: "April 1st ~ Enjoy Spring day!"}],
    ["May", {evt1:"TBD"}],
    ["June", {evt1:"Too hot to determine"}],
    ["July", {evt1: "July 4th ~ It's patriotic to give money"}],
    ["August", {evt: "After election, don't care"}]
]

// 5. Volunteer information (needs to be more secure)
const eVolInfo = Object.create({}, {
    // Name
    name: {
        enumerable: true,
        writable: false,
        value: "Bobby Bo-Jangles"
    },
    // Address
    address: {
        enumerable: true,
        writable: false,
        value: "321 Bob Street, Nashville, TN 37207"
    },
    // Email
    email: {
        enumerable: true,
        writable: false,
        value: "bobby@bo-jangles.com"
    },
    // Phone number
    phoneNumber: {
        enumerable: true,
        writable: false,
        value: "123-555-7777"
    },
    // Availability
    availability: {
        enumerable: true,
        writable: false,
        value: "05/01/18"
    },
    // What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
    activities: {
        enumerable: true,
        writable: false,
        value: "staring awkwardly"
    },
})

// 6. Biography
const eBio = {
    bio: "Elizabeth Sanger started at Coyote Ugly, she then progressed to top bar tender. She wants to put those skills to use to serve the populace of Nashville. She cares deeply about people and wants to serve her community"
}

// 7. Image gallery
const eGallery = Object.create({}, {
    // Head shot
  headShot: {
      enumerable: true,
      writable: false,
      value: "headshot-es.jpeg"
  },
    // Picture of family
    familyPic: {
        enumerable: true,
        writable: false,
        value: "es-fam.jpg"
    },
    // Picture of constituents
    nashvillianPic: {
        enumerable: true,
        writable: false,
        value: "constituents.jpg"
    }

})

// 8. Mission statement
const eMission = {
    statement: "To save the world, one penguin, I mean Nashvillian at a time"
}

// 9. URL for registering to vote
const eUrlForRegisitering = {
    urlRego: "http://www.registerToVote.gov"
}