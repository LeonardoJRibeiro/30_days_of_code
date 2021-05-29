import { Route, Switch } from "react-router";
import Day01 from "../days/day01";
import Day02 from "../days/day02";
import Home from "../Pages/home";

export default function Routes(): JSX.Element {
  return (
    <Switch >
      <Route path='/' exact component={Home} />
      <Route path='/day01' component={Day01} />
      <Route path='/day02' component={Day02} />
    </Switch>
  )
}
