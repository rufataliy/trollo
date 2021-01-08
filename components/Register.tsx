import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const isEmptyString = (str: string) => !Boolean(str.trim());

interface Props {
  handleSubmit: (values: DefaultRegisterValues) => void;
}

const defaultValues: DefaultRegisterValues = {
  trollo_company: "Awesome company",
  trollo_name: "Me",
};

const defaultErrors = { name: false, company: false };

export const Register: React.FC<Props> = ({ handleSubmit }) => {
  const [values, setValues] = useState(defaultValues);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(values);
  };

  const onReset = () => {
    setValues({ ...defaultValues });
  };

  return (
    <Form
      onReset={onReset}
      onSubmit={onSubmit}
      className="register-form text-light d-flex flex-column justify-content-between bg-dark-op p-3 p-lg-5"
    >
      <Form.Text className="text-light">
        Values will be saved to local storage of your browser.
      </Form.Text>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={(e) =>
            setValues((values) => ({
              ...values,
              trollo_name: e.target.value,
            }))
          }
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your organization"
          onChange={(e) =>
            setValues((values) => ({
              ...values,
              trollo_company: e.target.value,
            }))
          }
        />
      </Form.Group>
      <div className="d-flex">
        <Button
          className="w-100 btn-success mr-3"
          variant="primary"
          type="submit"
        >
          Create
        </Button>

        <Button className="w-100 btn-secondary" variant="primary" type="reset">
          Reset
        </Button>
      </div>
      <Button
        block
        className="w-100 btn btn-new"
        variant="primary"
        type="submit"
      >
        Demo
      </Button>
    </Form>
  );
};

export default Register;
