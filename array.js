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
function searchJobs(location) {
  const filtered = jobs.filter((job) => job.location === location);
  const sortedTitle = filtered.sort((a, b) => b.salary - a.salary);
  const titles = sortedTitle.map((job) => job.title);
  //   const filteredTitle = titles.sort((job) => job.salary);
  return titles;
}
console.log(searchJobs("Kathmandu"));
