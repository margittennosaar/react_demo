import "./Box.css";
const Box = (props) => {
  return (
    <div className="box">
      <p>{props.fullName}</p>
      <p>{props.title}</p>
      <p>{props.myAnimal}</p>
      <p>{props.age}</p>
      <p>ID: {props.id}</p>
    </div>
  );
};

export default Box;
