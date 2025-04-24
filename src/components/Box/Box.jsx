import "./Box.css";
const Box = ({ fullName, title, myAnimal, age, id }) => {
  return (
    <div className="box">
      <p>{fullName}</p>
      <p>{title}</p>
      <p>{myAnimal}</p>
      <p>{age}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default Box;
