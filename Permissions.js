class Org {
    constructor (name) {
        this.name = name
        this.users = []
        this.projects = []
    }

    addUser(name) {
        const u = new User(name, this)
        this.users.push(u)

        return u
    }

    createProject(name){
        const p = new Project(name, this)
        this.projects.push(p)

        return p
    }
}

class User {
    constructor (name, organization) {
        this.name = name
        this.org = organization
        this.roles = []
    }

    addRole(role) {
        this.roles.push(role)
    }

    checkPermission (operation) {
        let allowed = false
        this.roles.forEach(role => {
            if (role.operations.includes(operation))
            {
                allowed = true
            }
        });
        return allowed
    }
}

class Role {
    constructor (name, ops, role) {
        this.name = name
        // ops is an array of function reference
        this.operations = ops
        // optionally pass a role to inherit
        if (role) {
            this.operations.concat(role.operations)
        }
    }
}

class Project {
    constructor (name, org) {
        this.name = name
        this.org = org
        this.tasks = []
    }

    createTask (name, user) {
        const task = new Task(name, this, user)
        this.tasks.push(task)

        return task
    }
    
}

class Task {
    constructor (name, project, participant) {
        this.name = name
        this.project = project
        this.participant = participant
        this.done = false
    }

    markDone() {
        this.done = true
        return true
    }
}

export default {Org, User, Role, Project, Task}
