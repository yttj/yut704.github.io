// SECTION 1: VARIABLES
// Our API Key for Airtable
const airtableApiKey = "keyBbQJcVDAvox5Zu";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/app61YONuxsjiVAn7/Table%201";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

// Colors 
const foregroundColors = ["#604F4F", "#895141", "#353A4C", "#02040a", "#0040ff"] // 
const backgroundColors = ["#EADFC9", "#80825B", "#532354", "#7d687d", "#3a8c42", "#314a33"]

// SECTION 2: DOM References 
const bodyElement = document.querySelector('body')
const applicationElement = document.querySelector('#application')
const adjectiveElement = document.querySelector('#adjective')
const typeElement = document.querySelector('#type')
const nameElement = document.querySelector('#name')
const regionElement = document.querySelector('#region')
const verbElement = document.querySelector('#verb')

// SECTION 3: Application
// Choose Foreground and Background Colors
const foregroundColor = foregroundColors[Math.floor(Math.random()*foregroundColors.length)]
const backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)]

// Set Foreground and Background Colors 
bodyElement.style.color = foregroundColor
bodyElement.style.backgroundColor = backgroundColor

// Get a 'Promise' Representing the Data that Will be Returned
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const words = data.records;
    const adjectives = words.filter((word) => {
        return word.fields.Type === 'adjective'
    })
    // Filter for Word Types 
    const names = words.filter((word) => {
        return word.fields.Type === 'name'
    })
    const types = words.filter((word) => {
        return word.fields.Type === 'type'
    })    
    const regions = words.filter((word) => {
        return word.fields.Type === 'region'
    })
    const verbs = words.filter((word) => {
        return word.fields.Type === 'verb'
    })

    // Set Values onto HTML Elements 
    adjectiveElement.innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)].fields.Copy
    nameElement.innerHTML = names[Math.floor(Math.random()*names.length)].fields.Copy
    regionElement.innerHTML = regions[Math.floor(Math.random()*regions.length)].fields.Copy
    verbElement.innerHTML = verbs[Math.floor(Math.random()*verbs.length)].fields.Copy
    applicationElement.classList.add('loaded')
  })
  .catch((error) => {
    console.log(error);
  });
