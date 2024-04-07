import Card from "../UI/Card";
import classes from "./AvailableMeds.module.css";
import MedItem from "./MedItem/MedItem";

const DUMMY_MEDS = [
  {
    id: "m1",
    name: "Aspirine",
    description:
      "anti-inflammatory drug used to reduce pain, fever, and inflammation",
    price: 1.99,
  },
  {
    id: "m2",
    name: "Dramamine",
    description:
      "an over-the-counter medication used to treat motion sickness and nausea.",
    price: 2.5,
  },
  {
    id: "m3",
    name: "Ibuprofen",
    description:
      "anti-inflammatory drug that is used to relieve pain, fever, and inflammation.",
    price: 4.99,
  },
  {
    id: "m4",
    name: "Vicodin",
    description: "Prescription drug used to treat moderate to severe pain.",
    price: 5.99,
  },
];

const AvailableMeds = () => {
  const medsList = DUMMY_MEDS.map((med) => (
    <MedItem
      key={med.id}
      id={med.id}
      name={med.name}
      description={med.description}
      price={med.price}
    ></MedItem>
  ));
  return (
    <section className={classes.meds}>
      <Card>
        <ul>{medsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeds;
