import { Fragment } from "react";
import MedsFunction from "./MedsFunction";
import AvailableMeds from "./AvailableMeds";

const meds = () => {
  return (
    <Fragment>
      <MedsFunction></MedsFunction>
      <AvailableMeds></AvailableMeds>
    </Fragment>
   );
};

export default meds;
