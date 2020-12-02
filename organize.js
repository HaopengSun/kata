const organizeInstructors = function(instructors) {
    let reply = [];
    let courses = [];
    for (const instructor of instructors){
        let exisiting = courses.includes(instructor.course);
        console.log(exisiting);
        if (exisiting === false){
            reply[instructor.course] = instructor.name;
            courses.push(instructor.course);
        } else {
            reply[instructor.course] += ', ';
            reply[instructor.course] += instructor.name;
        }
    }
    return reply;
};
console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
]));