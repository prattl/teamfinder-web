import React from "react";
import { IndexRoute, Route } from "react-router";

import About from "components/About";
import Base from "components/Base";
import CreateTeam from "components/teams/CreateTeam";
import EditProfile from "components/EditProfile";
import EditSettings from "components/EditSettings";
import EditTeam from "components/teams/EditTeam";
import FinishSteamSignIn from "components/auth/FinishSteamSignIn";
import Index from "components/Index";
import LogIn from "components/auth/LogIn";
import LogOut from "components/auth/LogOut";
import ManageTeam from "components/teams/ManageTeam";
import ManageTeams from "components/teams/ManageTeams";
import PlayerProfile from "components/PlayerProfile";
import PlayerSearch from "components/PlayerSearch";
import TeamProfile from "components/teams/TeamProfile";
import TeamSearch from "components/TeamSearch";

export default (
  <Route path="/">
    <IndexRoute component={Index} />
    <Route path="" component={Base}>
      <Route path="about" component={About} />
      <Route
        path="login-required"
        component={props => <LogIn alertRequired={true} {...props} />}
      />
      <Route path="logout" component={LogOut} />
      <Route path="settings" component={EditSettings} />
      <Route path="profile" component={EditProfile} />
      <Route path="players" component={PlayerSearch} />
      <Route path="players/:id" component={PlayerProfile} />
      <Route path="teams">
        <IndexRoute component={TeamSearch} />
        <Route path="create" component={CreateTeam} />
        <Route path="edit">
          <Route path=":id" component={EditTeam} />
        </Route>
        <Route path="manage">
          <IndexRoute component={ManageTeams} />
          <Route path=":id" component={ManageTeam} />
        </Route>
        <Route path=":id" component={TeamProfile} />
      </Route>
    </Route>
    <Route path="finish-steam/:token" component={FinishSteamSignIn} />
  </Route>
);
