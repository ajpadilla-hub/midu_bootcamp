export const Mensaje = (props) => {
  console.log(props);
  return <h1 style={
    {
      color: props.color,
      backgroundColor: props.bgcolor
    }
  }>{props.message}
  </h1>;
};
