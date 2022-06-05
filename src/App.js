import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { APP_ROUTE } from "./routes/routes";
import { Skeleton } from "antd";
function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Router>
        <Switch>
          {APP_ROUTE.map((value) => {
            if (value.private) {
              return <PrivateRoute key={value.name} component={value.component} path={value.path} exact={value.exact} />;
            } else {
              return <PublicRoute key={value.name} restricted={value.restricted} path={value.path} component={value.component} exact={value.exact} />;
            }
          })}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
