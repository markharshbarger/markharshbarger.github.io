reports =[
    ["1", "Over the course of this week we created a github repo and discord. We've begun researching frameworks and discussing requirements. We met up with the team and discussed upcoming meeting times.", "Continuing discussing different frameworks that we are all familiar with. We are not familiar with GitHub pages so the plan for next week is to research that and possibly get it set up.", "Met 1 time for an hour"],
    ["2", "We set up GitHub pages for our team website with a barebones set up. We have decided to use React or pure html and css. For our database we have decided to use Postgresql. For the backend we are currently looking at using Spring.", "Next week we are looking at figuring out the structuring of the frontend and backend and formulating our Q/A to ask in the slack chat. We plan on making a skeleton of our project.", "Met 2 times for a total of 2 hours"],
    ["3", "We scrapped the wright state course catalog. We have setup more of the base code. We have decided on using FastAPI as a backend. Discussed the requirements.", "Continue learning the different frameworks. Fill out requirements presentation. Begin the SRS document. Work on making a login screen/code backend required for backend page.", "Met for a total of 3 hours"],
    ["4", "Filled out the requirements excel sheet and made the requirements presentation for the top 5. Set up API endpoints for basic user login. Updated user login page on the front end.", "Dashboard skeletons for the front end. Start working on the course scheduler for the back end. Creating endpoints for course scheduler and set up with a mock generated course.", "Met for a total of 3 hours this week"],
    ["5", "Setup student dashboards. Got the navigation bar set up. Got more of the schema for the database set up. Set up tests for the API endpoints that we do have.", "Continue working on the different dashboards. Continue working on the back end with the database ie more user operations and course related operations.", "Met for a total of 2 hours this week"]
]

for(var i =0; i < reports.length; i++){
    const container = document.createElement("div")
    container.className = "report-container"

    const d = document.createElement('div')
    container.appendChild(d)

    header = document.createElement("h1")
    header.textContent = "Report " + reports[i][0]
    d.appendChild(header)


    cwd = document.createElement("div")
    cwd.className = "report-spacing"
    cw = document.createElement("h2")
    cw.textContent = "Completed Work"
    cwd.appendChild(cw)

    cwp = document.createElement("p")
    cwp.textContent = reports[i][1]
    cwd.appendChild(cwp)

    d.appendChild(cwd)

    pwd = document.createElement("div")
    pwd.className = "report-spacing"
    pw = document.createElement("h2")
    pw.textContent = "Planned Work"
    pwd.appendChild(pw)

    pwp = document.createElement("p")
    pwp.textContent = reports[i][2]
    pwd.appendChild(pwp)

    d.appendChild(pwd)

    med = document.createElement('div')
    med.className = "report-spacing"
    me = document.createElement("h2")
    me.textContent = "Meetings"
    med.appendChild(me)

    mep = document.createElement("p")
    mep.textContent = reports[i][3]
    med.appendChild(mep)

    d.appendChild(med)

    const element = document.getElementById("reports-content")
    element.appendChild(container)
}


