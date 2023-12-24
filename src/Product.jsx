function Product({ title, name = "User" }) {
  return (
    <div>
      <h1>
        {title}, dice {name}
      </h1>
    </div>
  );
}
export function NavBar() {
  return <nav>React</nav>;
}
export function Usercard(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>${props.amount}</p>
      <p>{props.married ? "Esta casado" : "No esta casado"}</p>
      <ul>
      <li>City:{props.address.city}</li>
      <li>Address:{props.address.street}</li>
      </ul>
    </>
  );
}
export default Product;
