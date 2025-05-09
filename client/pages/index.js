import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import ChatWindow from "../components/ChatWindow";
import Navbar from "../components/Navbar";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      const decoded = jwt.decode(token);
      setUser(decoded);
    } catch (err) {
      router.push("/login");
    }
  }, [router]);

  if (!user) return null;

  return (
    <div>
      <Navbar />
      <ChatWindow user={user} />
    </div>
  );
}