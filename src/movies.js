export default function Movies(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.img} alt="" />
    </div>
  );
}
