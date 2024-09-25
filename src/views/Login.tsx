import { useContext, useEffect, useRef } from "react";
import { useForm } from "../../src/hooks/useForm";
import { UserContext } from "../context/UserContext";

interface InitialForm {
  userName: string;
  email: string;
  password: string;
}

export const LoginForm = () => {
  const focusRef = useRef<HTMLInputElement>(null);

  const initialForm: InitialForm = {
    userName: "",
    email: "",
    password: "",
  };

  const { form, onInputChange } = useForm(initialForm);

  const { userName, email, password }: InitialForm = form;

  const { setUser } = useContext(UserContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(form);
    console.log(form);
  };

  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return (
    <form onSubmit={onSubmit} className="login_form">
      <div className="login_item">
        <label htmlFor="userName">User Name</label>
        <input
          ref={focusRef}
          type="text"
          className="login_input"
          name="userName"
          placeholder="Enter User Name"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="login_item">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="login_input"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="login_item">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="login_input"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="principalButton">
        Submit
      </button>
    </form>
  );
};