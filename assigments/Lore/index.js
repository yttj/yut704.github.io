// STEP 1: VARIABLES
const users = [{
  name: "Ruins Greatsword", 
  description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
  attack: 124
}, {

}, {
  name: "Eclipse Shotel", 
  description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
  attack: 77, 
}, {

},{
  name: "Grafted Blade Greatsword", 
  description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
  attack: 157, 
},]

// STEP 2: DOM REFERENCES
const usersContainerElement = document.querySelector('#users')
const showUsersWithAttackInDollarsButtonElement = document.querySelector("button#map")
const showAttackAscendingElement = document.querySelector('button#authenticated')
const showUsersSortedByNameAscendingButtonElement = document.querySelector('button#sort-ascending')
const showUsersSortedByNameDescendingButtonElement = document.querySelector('button#sort-descending')

// STEP 3: FUNCTIONS
const createUserElement = (user) => {
    // Create Container Element
    const containerElement = document.createElement('div')
    containerElement.classList.add('user')
    // Create Name Element
    const nameElement = document.createElement('p')
    nameElement.innerHTML = 'Name: ' + user.name
    // Create Description Element
    const descriptionElement = document.createElement('p')
    descriptionElement.innerHTML = 'Description: ' + user.description
    // Create Attack Element
    const attackElement = document.createElement('p')
    attackElement.innerHTML = 'Attack:' + user.attack
    containerElement.appendChild(nameElement)
    containerElement.appendChild(descriptionElement)
    containerElement.appendChild(attackElement)
    return containerElement
}

const removeUsers = () => {
    usersContainerElement.innerHTML = ""
}

const addUsers = (users) => {
    users.forEach(user => {
        const userElement = createUserElement(user)
        usersContainerElement.appendChild(userElement)
    });
}

// STEP 4: APPLICATION
// MAP
const usersWithAttackInDollars = users.map((user) => {
    const userWithAttackInDollars = {
        name: user.name, 
        attack: user.attack, 
        description: user.description
    }
    const attackInDollars = userWithAttackInDollars.attack / 10
    userWithAttackInDollars.attack = '$' + attackInDollars
    return userWithAttackInDollars
})

// FILTER
const AttackAscending = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(AttackAscending.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// SORT 
const usersSortedByNameAscending = users.sort((userA, userB) => {
    if (userA.name < userB.name) {
        return -1;
      }
      if (userA.name > userB.name) {
        return 1;
      }
    
      // names must be equal
      return 0;
})

const usersSortedByNameDescending = usersSortedByNameAscending.slice().reverse() 

// SET EVENT LISTENERS
showUsersWithAttackInDollarsButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersWithAttackInDollars)
})


showUsersSortedByNameAscendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameAscending)
})

showUsersSortedByNameDescendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameDescending)
})

showAttackAscendingElement.addEventListener('click', () => {
  removeUsers()
  addUsers(AttackAscending)
})

// START APP
addUsers(users)