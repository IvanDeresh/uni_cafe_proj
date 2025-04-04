import { useState } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        email,
        username,
        password,
      });
      setEmail("");
      setUserName("");
      setPassword("");
      console.log(response);
      localStorage.setItem("token", response.data);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-green-400 rounded-3xl border-b-4 border-b-green-500 w-sm p-5 flex flex-col items-center justify-between h-[30rem]"
        action=""
      >
        <h2 className="text-3xl text-green-400">Sign up</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <label className="text-green-400" htmlFor="#name_signin">
              Name
            </label>
            <input
              type="name"
              id="#name_signin"
              name="name_signin"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Joe Doeh"
              className="w-60 border-b border-green-400 text-green-400 outline-none h-10"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-green-400" htmlFor="#email_signin">
              Email
            </label>
            <input
              type="email"
              id="#email_signin"
              name="email_signin"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-60 border-b border-green-400 text-green-400 outline-none h-10"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-green-400" htmlFor="#email_signin">
              Password
            </label>
            <input
              type="password"
              id="#password_signin"
              name="password_signin"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="@ds$saj#4121"
              className="w-60 border-b border-green-400 text-green-400 outline-none h-10"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Button
            styles="w-36 h-12 border-b-2 text-white text-xl border-green-600 bg-green-400 rounded-2xl flex justify-center items-center"
            label="Sign up"
            type="submit"
          />
          <div className="flex gap-3 mt-2 text-green-500">
            <Link
              to="/sign-in"
              className={`flex text-sm justify-center items-center w-14 h-7 rounded-md text-white border border-b-2 border-green-500 bg-green-400`}
            >
              Sign in
            </Link>
            |
            <Link
              className={`flex justify-center text-sm items-center w-14 h-7 rounded-md text-white border border-b-2 border-green-500 bg-green-300`}
              to="/sign-up"
            >
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
