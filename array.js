const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Leapfrog",
    location: "Kathmandu",
    salary: 50000,
    type: "fulltime",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Cotiviti",
    location: "Lalitpur",
    salary: 70000,
    type: "fulltime",
  },
  {
    id: 3,
    title: "UI Designer",
    company: "CloudFactory",
    location: "Kathmandu",
    salary: 40000,
    type: "parttime",
  },
  {
    id: 4,
    title: "React Developer",
    company: "Leapfrog",
    location: "Pokhara",
    salary: 60000,
    type: "fulltime",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Fusemachines",
    location: "Kathmandu",
    salary: 55000,
    type: "contract",
  },
];
// function searchJobs(location) {
//   const filtered = jobs.filter((job) => job.location === location);
//   const sortedTitle = filtered.sort((a, b) => b.salary - a.salary);
//   const titles = sortedTitle.map((job) => job.title);
//   //   const filteredTitle = titles.sort((job) => job.salary);
//   return titles;
// }
// console.log(searchJobs("Kathmandu"));

// function filterJObs(type, minSalary) {
//   const filteredJobs = jobs.filter(
//     (job) => job.type === type && job.salary > minSalary,
//   );
//   const mappedJobs = filteredJobs.map((job) => ({
//     title: job.title,
//     salary: job.salary,
//   }));
//   return mappedJobs;
// }
// console.log(filterJObs("fulltime", 55000));

// function avgSalaryByType() {
// function avgSalaryByType() {
//   const result = jobs.reduce((acc, job) => {
//     if (!acc[job.type]) {
//       acc[job.type] = 0; // create the key if it doesn't exist
//     }
//     acc[job.type] = acc[job.type] + 1; // count jobs
//     return acc;
//   }, {});
//   return result;
// }
// console.log(avgSalaryByType());

//   const result = jobs.reduce((type, job)=>{
//   //   jobs.map(job=>{} )
//   // });
//   employees.reduce((acc, emp) => {

//   )}};
//   // { fulltime: 3, parttime: 1, contract: 1 }
//   // return an object like this:
//   // {
//   //   fulltime: 60000,
//   //   parttime: 40000,
//   //   contract: 55000
//   // }
// }

// console.log(avgSalaryByType());

// const result = jobs.reduce((type, salary) =>
//   //   jobs.map(job=>{} )
//   // });
//   jobs.reduce((acc, emp) => {}),
// );
// // { fulltime: 3, parttime: 1, coantract: 1 }
// // return an object like this:
// // {n
// //   fulltime: 60000,
// //   parttime: 40000,
// //   contract: 55000
// // }

// console.log(avgSalaryByType());
function avgSalaryByType() {
  const result = jobs.reduce((acc, job) => {
    if (!acc[job.type]) {
      acc[job.type] = {
        total: 0,
        count: 0,
      };
    }

    acc[job.type].total += job.salary;
    acc[job.type].count++;

    return acc;
  }, {});

  for (let type in result) {
    result[type] = result[type].total / result[type].count;
  }

  return result;
}

console.log(avgSalaryByType());
