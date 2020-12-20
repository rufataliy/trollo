import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const isEmptyString = (str: string) => !Boolean(str.trim());

interface Props {
  handleSubmit: (values: DefaultRegisterValues) => void;
}

const defaultValues: DefaultRegisterValues = {
  trollo_name: "",
  trollo_company: "",
};

const defaultErrors = { name: false, company: false };

export const Register: React.FC<Props> = ({ handleSubmit }) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      isEmptyString(values.trollo_company) ||
      isEmptyString(values.trollo_name)
    ) {
      return setErrors((errors) => ({
        ...errors,
        company: isEmptyString(values.trollo_company),
        name: isEmptyString(values.trollo_name),
      }));
    }

    handleSubmit(values);
  };

  const onReset = () => {
    setErrors({ ...defaultErrors });
    setValues({ ...defaultValues });
  };

  return (
    <Form
      onReset={onReset}
      onSubmit={onSubmit}
      className="register-form text-light d-flex flex-column justify-content-between bg-dark-op p-3 p-lg-5"
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          isInvalid={errors.name}
          onChange={(e) =>
            setValues((values) => ({
              ...values,
              trollo_name: e.target.value,
            }))
          }
        />
        <Form.Text className="text-light">
          Nothing will be persisted or saved
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your organization"
          isInvalid={errors.company}
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
    </Form>
  );
};

export default Register;
