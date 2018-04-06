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
const eCalenderEvents = [
    {january: "TBD"},
    {february: "February 14th ~ Kissy hearts day!"},
    {march: "March 17th ~ Give the irish all the moneys!"},
    {april: "April 1st ~ Enjoy Spring day!"},
    {may:"TBD"},
    {june: "Too hot to determine"},
    {july: "July 4th ~ It's patriotic to give money"},
    {august: "After election, don't care"}
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
  }
    // Picture of family
    familyPic: {
        enumerable: true,
        writable: false,
        value: "es-fam.jpg"
    }
    // Picture of constituents
    constPic: {
        enumerable: true,
        writable: false,
        value: "constituents.jpg"
    }

})

// 8. Mission statement

// 9. URL for registering to vote