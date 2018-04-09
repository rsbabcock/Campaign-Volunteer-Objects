// Your job is to define the different objects and resources, 
// their structure, and the corresponding properties for each, 
// to represent the following information about Elizabeth's campaign.

// 1. Her congressional district (you can use yours here) - e wil be used to represent Elizabth in the variable names
const eDistrict = {
    district: "Tennesse Congressional District 5"
}

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

// 3. URL for donation form
const eUrlForDonation = {
    url1: "http://www.givemeallyourmoney.com"
}

// 4. Calendar of events - might do this as an array of arrays
const eCalenderEvents = { months: [ 
    {month: "January", evt1: "TBD", evt2: "TBD"},
    {month: "February", evt1: "February 14th ~ Kissy hearts day!"},
    {month: "March", evt1: "March 17th ~ Give the irish all the moneys!", evt2: "TBD"},
    {month: "April", evt1: "April 1st ~ Enjoy Spring day!"},
    {month: "May", evt1:"TBD"},
    {month: "June", evt1:"Too hot to determine"},
    {month: "July", evt1: "July 4th ~ It's patriotic to give money"},
    {month: "August", evt: "After election, don't care"}
]}

// Function to update and change an event in the eCalenderEvents function
const changeECalender = (objectToChange, propertyToAdd, eventToChange) => {
    // let monthsAcess = eCalenderEvents["months"];
    return objectToChange.months[0][propertyToAdd] = eventToChange;
}
// Changes eCalender to have new event in January
changeECalender(eCalenderEvents, "evt3", "January 1st, Happy New Year");
    //  console.log(eCalenderEvents)


// 5. Volunteer information (needs to be more secure)
const eVolInfo = {
    // Name
    name: {
        enumerable: true,
        writable: true,
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
};


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

// Functions

// calls function changeDistrict and makes it Tennessee 7th District
// Function to change property of district
const changeDistrict = (objectToChange, propertyToChange, value1) => {
    console.log(objectToChange[propertyToChange] = value1)
}

// Calls changeDistrict Function
changeDistrict(eDistrict, "district", "Tennesse 7th District");


// Function that changes property through ePlatform and changes the values of properties
const changeEplatforms = (objectToChange, propertyToChange, value1) => { 
    objectToChange[propertyToChange] = value1
}
console.log(ePlatforms);
// calls changeEplatforms
changeEplatforms(ePlatforms, "taxes", "All the moneys!");

// function changes URL
const changeUrlForDonation = (objectToChange, propertyToChange, value1) => {
    objectToChange[propertyToChange] = value1
}

changeUrlForDonation(eUrlForDonation, "url1", "http://www.savethesquirrels.com");


// updateVolInfo(eVolInfo, "value", "Blue Steel");
const updateVolName = (object) => {
    (eVolInfo.name.value = "Blue Steel")
    console.log(updateVolInfo);
}

updateVolName(eVolInfo); 
