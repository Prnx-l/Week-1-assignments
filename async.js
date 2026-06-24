async function getData() {
  const response = await fetch("https://someapi.com/data");
  const data = await response.json();
  console.log(data);
}

getData();

async function getData() {
  const response = await fetch("https://someapi.com/data");
  const data = await response.json();
  console.log(data);
}

getData();

async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  // now use your array skills!
  const names = users.map((user) => user.name);
  console.log(names);
}

getAllUsers();

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getUsers();
