// async function getData() {
//   const response = await fetch("https://someapi.com/data");
//   const data = await response.json();
//   console.log(data);
// }

// getData();

// async function getData() {
//   const response = await fetch("https://someapi.com/data");
//   const data = await response.json();
//   console.log(data);
// }

// getData();

// async function getAllUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();

//   // now use your array skills!
//   const names = users.map((user) => user.name);
//   console.log(names);
// }

// getAllUsers();

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log("Something went wrong:", error);
//   }
// }

// getUsers();

async function getJobs() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const firstFive = posts.slice(0, 5);
    const mapped = firstFive.map((job) => ({ title: job.title, id: job.id }));
    console.log(mapped);
  } catch (error) {
    console.log("something went wrong", error);
  }
}
getJobs();
