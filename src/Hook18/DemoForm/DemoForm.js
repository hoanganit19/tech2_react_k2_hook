import React, { useRef } from "react";
import Input from "./Input";

export default function DemoForm() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(username, email, password);
  };

  console.log("re-render");
  return (
    <form onSubmit={handleSubmit}>
      <Input name={"username"} label={"Tên người dùng"} ref={usernameRef} />
      <Input name={"email"} label={"Email"} ref={emailRef} />
      <Input name={"password"} label={"Mật khẩu"} ref={passwordRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
