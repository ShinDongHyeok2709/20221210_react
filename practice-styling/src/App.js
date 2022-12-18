import { createGlobalStyle } from "styled-components";
import Section from "./components/Section";
import Slider from "./components/Slider";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`;
export default function App() {
  return (
    <div>
      {/*<Slider /> */}
      <Section />
    </div>
  );
}
