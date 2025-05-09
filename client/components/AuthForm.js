import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AuthForm = ({ isSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignup ? "/api/auth/signup" : "/api/auth/login";
      const res = await axios.post(`http://localhost:5000${endpoint}`, {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      router.push("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-form">
      <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? "Sign Up" : "Log In"}</button>
      </form>
      {error && <p className="error">{error}</p>}
      <style jsx>{`
        .auth-form {
          max-width: 400px;
          margin: 50px auto;
          text-align: center;
        }
        input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
        }
        button {
          width: 100%;
          padding: 10px;
          background: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
        }
        .error {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default AuthForm;