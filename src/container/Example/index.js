import * as React from "../../_base";
import "./style.css";
import { Button, Header, Footer } from "@Components";

export const Example = () => (
  <div class="container">
    <Header />
    <div class="contentWrapper">
      <p>JSX example without "React"</p>
      <ul>
        {[
          { value: 1, className: "primary" },
          { value: 2, className: "secondary" },
          { value: 3, className: "primary" },
          { value: 4, className: "secondary" },
          { value: 5, className: "primary" },
        ].map(({ value, className }) => (
          <li>
            <Button
              name="button"
              class={`btn ${className} `}
              children={`Button ${value}`}
              onClick={() => console.log(`Action button ${value}`)}
            />
          </li>
        ))}
      </ul>
    </div>
    <Footer />
  </div>
);
