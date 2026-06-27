// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// function App() {
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <p>My first React component</p>
//     </div>
//   );
// }

// export default App;

// import JobCard from "./JobCard";

// function App() {
//   return (
//     <div>
//       <h1>Nepal IT Jobs</h1>
//       <JobCard
//         title="Frontend Developer"
//         company="Leapfrog"
//         location="Kathmandu"
//         salary={50000}
//       />
//     </div>
//   );
// }

// export default App;

// import JobCard from "./JobCard";

// const jobs = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     company: "Leapfrog",
//     location: "Kathmandu",
//     salary: 50000,
//   },
//   {
//     id: 2,
//     title: "Backend Developer",
//     company: "Cotiviti",
//     location: "Lalitpur",
//     salary: 70000,
//   },
//   {
//     id: 3,
//     title: "React Developer",
//     company: "CloudFactory",
//     location: "Pokhara",
//     salary: 60000,
//   },
// ];

// function App() {
//   return (
//     <div>
//       <h1>Nepal IT Jobs</h1>
//       {jobs.map((job) => (
//         <JobCard
//           key={job.id}
//           title={job.title}
//           company={job.company}
//           location={job.location}
//           salary={job.salary}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Leapfrog",
    location: "Kathmandu",
    salary: 50000,
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Cotiviti",
    location: "Lalitpur",
    salary: 70000,
  },
  {
    id: 3,
    title: "React Developer",
    company: "CloudFactory",
    location: "Pokhara",
    salary: 60000,
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.location.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Nepal IT Jobs</h1>
      <input
        type="text"
        placeholder="Search by location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
        />
      ))}
    </div>
  );
}

export default App;
