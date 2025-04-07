const Box = (props) => {
  return (
    <div className="box">
      <p>{props.fullName}</p>
      <p>{props.title}</p>
      <p>{props.myAnimal}</p>
      <p>{props.age}</p>
    </div>
  );
};

export default Box;
