import PropTypes from "prop-types";
// aqui se puede poner name = "" para definir un default, al igual con el texto.
export function Button({ texto, name }) {
  return (
    <button onClick={function(){
      alert('Hola Mundo')
    }}>
      {texto}-{name}
    </button>
  );
}
Button.propTypes = {
  texto: PropTypes.string.isRequired,
};
//Otra forma de definir un default
Button.defaultProps = {
  name: "Some User",
};
