import MyForm from "./components/crud/MyForm";
import PostHooks from "./components/PostHooks";
import Navi from "./components/Navi";
import { Route, Switch } from "react-router-dom";
import Not_Found from "./components/Not_Found";
import List from "./components/List";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="container">
      <div className="row">
      </div>
      <Navi />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route exact path="/crud" component={MyForm} />
        <Route exact path="/post" component={PostHooks} />
        <Route exact path="/posts-list" component={List} />
        <Route component={Not_Found} />
      </Switch>
    </div>
  );
}

export default App;
