import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "../pages/Feed";
import AddFeed from "../pages/AddFeed";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/adicionarFeed" component={AddFeed} />
    </Switch>
  );
}
