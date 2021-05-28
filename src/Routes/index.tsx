import { Route, Switch } from "react-router";
import Day01 from "../days/day01";
import Home from "../Pages/home";

export default function Routes(): JSX.Element {
  return (
    <Switch >
      <Route path='/' exact component={Home} />
      <Route path='/day01' component={Day01} />
    </Switch>
  )
}
