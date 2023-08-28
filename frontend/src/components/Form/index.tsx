import Button from "../Button";
import FieldText from "../FieldText";
import "./Form.css";

export default function Form() {
  return (
    <section className="form">
      <form>
        <FieldText></FieldText>
        <FieldText></FieldText>
        <Button></Button>
      </form>
    </section>
  );
}
