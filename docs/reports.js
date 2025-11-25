reports =[
    ["1", "Over the course of this week we created a github repo and discord. We've begun researching frameworks and discussing requirements. We met up with the team and discussed upcoming meeting times.", "Continuing discussing different frameworks that we are all familiar with. We are not familiar with GitHub pages so the plan for next week is to research that and possibly get it set up.", "Met 1 time for an hour"],
    ["2", "We set up GitHub pages for our team website with a barebones set up. We have decided to use React or pure html and css. For our database we have decided to use Postgresql. For the backend we are currently looking at using Spring.", "Next week we are looking at figuring out the structuring of the frontend and backend and formulating our Q/A to ask in the slack chat. We plan on making a skeleton of our project.", "Met 2 times for a total of 2 hours"],
    ["3", "We scrapped the wright state course catalog. We have setup more of the base code. We have decided on using FastAPI as a backend. Discussed the requirements.", "Continue learning the different frameworks. Fill out requirements presentation. Begin the SRS document. Work on making a login screen/code backend required for backend page.", "Met for a total of 3 hours"],
    ["4", "Filled out the requirements excel sheet and made the requirements presentation for the top 5. Set up API endpoints for basic user login. Updated user login page on the front end.", "Dashboard skeletons for the front end. Start working on the course scheduler for the back end. Creating endpoints for course scheduler and set up with a mock generated course.", "Met for a total of 3 hours this week"],
    ["5", "Setup student dashboards. Got the navigation bar set up. Got more of the schema for the database set up. Set up tests for the API endpoints that we do have.", "Continue working on the different dashboards. Continue working on the back end with the database ie more user operations and course related operations.", "Met for a total of 2 hours this week"],
    ["6", "Made more API endpoints for additional admin processes. Got more database tables schema finalized. Got more student and faculty functionality on the front end dashboards", "Continue working on API endpoints, continue working on algorithm, and database tables. Continue working on student and faculty and dashboards on the front end.", "Met for a total of 2 hours this week"],
    ["7", "We changed from meeting two times a week to meeting one time a week on Thursday after this meeting. We have continued to work on the front end and back end. Front end has gotten faculty dashboard almost complete. Back end we have gotten OAuth 2.0 and set up more tables on the database.", "Continue working on the front end dashboards. Continue working on the backed and start work on the algorithm and at least make a mock up endpoint for the course scheduler.", "Met 1 time for a total of 1 hour"],
    ["8", "Backend set up a mock endpoint for course scheduler and continued working on algorithm by going through the different major requirements. Front end continued working on dashboards.", "Work planned for next week is to continue working on algorithm and continue working on dashboards. We also are starting to talk about implementing the front end and back end together.", "Met for a total of 1 hour this week"],
    ["9", "The front end implemented the login requests by using the back end endpoints. Continued working on the algorithm, and endpoints for student and faculty.", "Work on admin dashboards and profile page for the front end. Continue working on the algorithm. Continue working on endpoints for student and faculty.", "Met for a total of 1 hour this week"],
    ["10", "On the back end continue working on algorithm and got more progress on it scheduling. Also continued working on faculty endpoints. For front end got more functionality on admin dashboard like displaying all the users in the database and highlighting users that have locked their accounts.", "Continue working on back end with the algorithm and faculty endpoints. For front end working on profile pages and continue working on admin dashboard.", "Met for a total of 1 hour this week"],
    ["11", "Got a working algorithm that schedules classes. Is not the most efficient algorithm yet. Admin dashboard is completed and progress has been made on the profile page.", "Continue working on algorithm and make it so it can save to the database for students. Continue working on faculty endpoint. Start working on SRS and testing template.", "Met for a total of 1 hour this week"],
    ["12", "Got faculty and student endpoints, generated schedules can save in the back end, algorithm schedules all combinations of major and minors. Added 3 admin endpoints. Got admin dashboard completed with the pre-existing endpoints.", "Start working on the SRS document. Continue working on student and faculty endpoints. Work on student and faculty dashboard and notifications area. Add additional endpoints for faculty.", "Met for a total of 1 hour this week"],
    ["13", "Faculty dash on the front end now has more functionality. Overall adjustment of the CSS. Re worked the front end to match some of the updated endpoints.", "Summary of work planned for next week is to continue getting the front end set up with the new back end endpoints. Get started working on the SRS template and testing template.", "Met for a total of 1 hour this week"],
    ["14", "Finishing SRS, set up front end endpoints, finishing testing and making some unit tests for back end components. Double check to see if we have everything we need for presentation.", "We are planning to present on December 4th. We plan on finishing anything else we need for our presentation by looking at all the requirements. Make students with the different combinations of majors and minors.", "Met for a total of 1 hour this week"],
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


