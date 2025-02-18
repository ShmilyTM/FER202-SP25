import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NamePerson from "./NamePerson";
import PersonDetails from "./PersonDetails";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import SortByOccupationAndAge from "./SortByOccupationAndAge";
import GroupByOccupation from "./GroupByOccupation";
import OldestAndYoungest from "./OldestAndYoungest";
import AverageAgeByOccupation from "./AverageAgeByOccupation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NamePerson />
    <PersonDetails />
    <PeopleList />
    <PeopleTable />
    <FirstTeenager />
    <AreAllTeenagers />
    <SortByOccupationAndAge />
    <GroupByOccupation />
    <OldestAndYoungest />
    <AverageAgeByOccupation />
  </React.StrictMode>
  
);
