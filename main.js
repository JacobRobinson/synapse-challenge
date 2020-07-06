import Permissions from './Permissions'

const p = {...Permissions}
const synapse = new p.Org('Synapse')
const jimmy = synapse.addUser('Jimmy')
const codeBlue = synapse.createProject('CodeBlue')

//assign function reference
const productOwner = new p.Role('po', synapse.projects[0].createTask)

// inheritance
const productManager = new p.Role('pm', synapse.projects[0].createTask, productOwner)
jimmy.addRole(projectManager)


// To use on the front end, I might use a JWT or cookie with role names mapped to 
// random strings (maybe using a keyed/salted hash) 