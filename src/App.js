
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pedido from "./pages/Pedido/index.js";
import Intro from "./pages/Intro";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Switch>
      <Route path="/" exact component={Intro} />
      <Route path="/pedido" component={Pedido}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
