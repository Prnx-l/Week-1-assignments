function JobCard({ title, company, location, salary }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{company}</p>
      <p>{location}</p>
      <p>Rs. {salary}</p>
    </div>
  );
}

export default JobCard;
