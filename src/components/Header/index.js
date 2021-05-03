import * as React from "../../_base";
import estartandodevs from "./estartandodevs.png";

export function Header(props) {
  return (
    <header class="app-header" {...props}>
      <img src={estartandodevs} alt="estartandodevs" />
    </header>
  );
}
