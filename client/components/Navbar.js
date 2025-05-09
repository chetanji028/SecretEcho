import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav>
      <h1>SecretEcho</h1>
      <button onClick={handleLogout}>Logout</button>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #f8f8f8;
        }
        h1 {
          margin: 0;
        }
        button {
          padding: 10px 20px;
          background: #ff4d4f;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;