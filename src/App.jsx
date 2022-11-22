import { Fragment } from "react";
import "./App.css";
import {Header, Footer, Container, Hero} from "./components/index";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
          <Hero />
      </Container>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default App;
