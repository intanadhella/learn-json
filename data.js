const DATA = {
    "employees":[
        {"firstName":"John", "lastName":"Doe"}, 
        {"firstName":"Anna", "lastName":"Smith"}, 
        {"firstName":"Peter", "lastName":"Jones"},
        {"firstName":"Doni", "lastName":"Wong"}, 
        {"firstName":"Slamet", "lastName":"Jordan"}, 
        {"firstName":"Carlo", "lastName":"wee"}, 
        {"firstName":"philips", "lastName":"morris"},
        {"firstName":"angga", "lastName":"dwi"}, 
        {"firstName":"vicky", "lastName":"sasongko"},
        {"firstName":"nadya", "lastName":"lembayung"} 
    ],
    "jobs": [
        {"department": "QC", "title": "QA"},
        {"department": "IT", "title": ['IT Support', 'Software engineer', 'UI/UX', 'DevOps', 'Tester']},
        {"department": "Human Resources Development", "title": "SPV"},
        {"department": "Finance and Accounting", "title": "Finance"},
        {"department": "Marketing dan Customer Service", "title": "marketing"},
        {"department": "Maintenance and Facility", "title": "maintenance"},
    ],
    "details": [
        {"age": [22, 23, 24, 29, 30, 32 ]},
        {"experience": ['2 Tahun', '3 Tahun', '4 Tahun',]}
    ]
}

let employees = [];

//name :jhon doe, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
// console.log(`name :${DATA.employees[0].firstName} ${DATA.employees[0].lastName}, department: ${DATA.jobs[1].department}, title: ${DATA.jobs[1].title[2]}, age: ${DATA.details[0].age[1]}, experience: ${DATA.details[1].experience[0]}`)
employees[0] = {
    name: `${DATA.employees[0].firstName} ${DATA.employees[0].lastName}`,
    "department": DATA.jobs[1].department,
    "title": DATA.jobs[1].title[2],
    "age": DATA.details[0].age[1],
    "experience": DATA.details[1].experience[0]
}
console.log(`name :${employees[0].name}, department: ${employees[0].department}, title: ${employees[0].title}, age: ${employees[0].age}, experience: ${employees[0].experience}`)

//name :anna smith, jobs: department: Human Resources Development, title: SPV, age: 29, experience: 4 Tahun
// console.log(`name :${DATA.employees[1].firstName} ${DATA.employees[1].lastName}, department: ${DATA.jobs[2].department}, title: ${DATA.jobs[2].title}, age: ${DATA.details[0].age[3]}, experience: ${DATA.details[1].experience[2]}`)
employees[1] = {
    "name": `${DATA.employees[1].firstName} ${DATA.employees[1].lastName}`,
    "department": DATA.jobs[2].department,
    "title": DATA.jobs[2].title,
    "age": DATA.details[0].age[3],
    "experience": DATA.details[1].experience[2]
}
console.log(`name :${employees[1].name}, department: ${employees[1].department}, title: ${employees[1].title}, age: ${employees[1].age}, experience: ${employees[1].experience}`)

//name :Peter jhon, jobs: department: IT, title: DevOps, age: 24, experience: 3 Tahun
// console.log(`name :${DATA.employees[2].firstName} ${DATA.employees[2].lastName}, department: ${DATA.jobs[1].department}, title: ${DATA.jobs[1].title[3]}, age: ${DATA.details[0].age[2]}, experience: ${DATA.details[1].experience[1]}`)
employees[2] = {
    "name": `${DATA.employees[2].firstName} ${DATA.employees[2].lastName}`,
    "department": DATA.jobs[1].department,
    "title": DATA.jobs[1].title[3],
    "age": DATA.details[0].age[2],
    "experience": DATA.details[1].experience[1]
}
console.log(`name :${employees[2].name}, department: ${employees[2].department}, title: ${employees[2].title}, age: ${employees[2].age}, experience: ${employees[2].experience}`)

// name :doni wong, jobs: department: IT, title: Tester, age: 22, experience: 2 Tahun
// console.log(`name :${DATA.employees[3].firstName} ${DATA.employees[3].lastName}, department: ${DATA.jobs[1].department}, title: ${DATA.jobs[1].title[4]}, age: ${DATA.details[0].age[0]}, experience: ${DATA.details[1].experience[0]}`)
employees[3] = {
    "name": `${DATA.employees[3].firstName} ${DATA.employees[3].lastName}`,
    "department": DATA.jobs[1].department,
    "title": DATA.jobs[1].title[4],
    "age": DATA.details[0].age[0],
    "experience": DATA.details[1].experience[0]
}
console.log(`name :${employees[3].name}, department: ${employees[3].department}, title: ${employees[3].title}, age: ${employees[3].age}, experience: ${employees[3].experience}`)

//name :slamet jordan, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
// console.log(`name :${DATA.employees[4].firstName} ${DATA.employees[4].lastName}, department: ${DATA.jobs[1].department}, title: ${DATA.jobs[1].title[2]}, age: ${DATA.details[0].age[1]}, experience: ${DATA.details[1].experience[0]}`)
employees[4] = {
    "name": `${DATA.employees[4].firstName} ${DATA.employees[4].lastName}`,
    "department": DATA.jobs[1].department,
    "title": DATA.jobs[1].title[2],
    "age": DATA.details[0].age[1],
    "experience": DATA.details[1].experience[0]
}
console.log(`name :${employees[4].name}, department: ${employees[4].department}, title: ${employees[4].title}, age: ${employees[4].age}, experience: ${employees[4].experience}`)

//name :carlo wee, jobs: department: Finance and Accounting, title: Finance, age: 32, experience: 4 Tahun
// console.log(`name :${DATA.employees[5].firstName} ${DATA.employees[5].lastName}, department: ${DATA.jobs[3].department}, title: ${DATA.jobs[3].title}, age: ${DATA.details[0].age[5]}, experience: ${DATA.details[1].experience[2]}`)
employees[5] = {
    "name": `${DATA.employees[5].firstName} ${DATA.employees[5].lastName}`,
    "department": DATA.jobs[3].department,
    "title": DATA.jobs[3].title,
    "age": DATA.details[0].age[5],
    "experience": DATA.details[1].experience[2]
}
console.log(`name :${employees[5].name}, department: ${employees[5].department}, title: ${employees[5].title}, age: ${employees[5].age}, experience: ${employees[5].experience}`)

//name :philips morris, jobs: department: Maintenance and Facility, title: maintenance, age: 29, experience: 2 Tahun
// console.log(`name :${DATA.employees[6].firstName} ${DATA.employees[6].lastName}, department: ${DATA.jobs[5].department}, title: ${DATA.jobs[5].title}, age: ${DATA.details[0].age[3]}, experience: ${DATA.details[1].experience[0]}`)
employees[6] = {
    "name": `${DATA.employees[6].firstName} ${DATA.employees[6].lastName}`,
    "department": DATA.jobs[5].department,
    "title": DATA.jobs[5].title,
    "age": DATA.details[0].age[3],
    "experience": DATA.details[1].experience[0]
}
console.log(`name :${employees[6].name}, department: ${employees[6].department}, title: ${employees[6].title}, age: ${employees[6].age}, experience: ${employees[6].experience}`)

//name :angga dwi, jobs: department: IT, title: IT Support, age: 23, experience: 2 Tahun
// console.log(`name :${DATA.employees[7].firstName} ${DATA.employees[7].lastName}, department: ${DATA.jobs[1].department}, title: ${DATA.jobs[1].title[0]}, age: ${DATA.details[0].age[1]}, experience: ${DATA.details[1].experience[0]}`)
employees[7] = {
    "name": `${DATA.employees[7].firstName} ${DATA.employees[7].lastName}`,
    "department": DATA.jobs[1].department,
    "title": DATA.jobs[1].title[0],
    "age": DATA.details[0].age[1],
    "experience": DATA.details[1].experience[0]
}
console.log(`name :${employees[7].name}, department: ${employees[7].department}, title: ${employees[7].title}, age: ${employees[7].age}, experience: ${employees[7].experience}`)

//name :vicky sasongko, jobs: department: QC, title: QA, age: 24, experience: 2 Tahun
// console.log(`name :${DATA.employees[8].firstName} ${DATA.employees[8].lastName}, department: ${DATA.jobs[0].department}, title: ${DATA.jobs[0].title}, age: ${DATA.details[0].age[2]}, experience: ${DATA.details[1].experience[0]}`)
employees[8] = {
    "name": `${DATA.employees[8].firstName} ${DATA.employees[8].lastName}`,
    "department": DATA.jobs[0].department,
    "title": DATA.jobs[0].title,
    "age": DATA.details[0].age[2],
    "experience": DATA.details[1].experience[0]
}
console.log(`name :${employees[8].name}, department: ${employees[8].department}, title: ${employees[8].title}, age: ${employees[8].age}, experience: ${employees[8].experience}`)

//name :nadya lembayung, jobs: department: IT, title: Software engineer, age: 23, experience: 2 Tahun    
// console.log(`name :${DATA.employees[9].firstName} ${DATA.employees[9].lastName}, department: ${DATA.jobs[1].department}, title: ${DATA.jobs[1].title[1]}, age: ${DATA.details[0].age[1]}, experience: ${DATA.details[1].experience[0]}`)
employees[9] = {
    "name": `${DATA.employees[9].firstName} ${DATA.employees[9].lastName}`,
    "department": DATA.jobs[1].department,
    "title": DATA.jobs[1].title[1],
    "age": DATA.details[0].age[1],
    "experience": DATA.details[1].experience[0]
}
console.log(`name :${employees[9].name}, department: ${employees[9].department}, title: ${employees[9].title}, age: ${employees[9].age}, experience: ${employees[9].experience}`)
