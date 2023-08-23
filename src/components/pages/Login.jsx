import { useEffect, useState } from "react";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { PageLayout } from "../common/PageLayout";
import styled from "styled-components";
import { PasswordInput } from "../common/PasswordInput";
import { Spinner } from "../common/Spinner";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

export const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    setFormFields({});
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              type="text"
              value={formFields.username}
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <PasswordInput
              value={formFields.password}
              name="password"
              onChange={handleChange}
            />
          </>
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};
