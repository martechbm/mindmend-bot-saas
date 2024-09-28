import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="bg-secondary">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">NeuroPsych AI</Link>
        <div className="flex items-center space-x-4">
          <Link to="/"><Button variant="ghost">Dashboard</Button></Link>
          <Link to="/chatbot"><Button variant="ghost">AI Chatbot</Button></Link>
          <Link to="/profile"><Button variant="ghost">Profile</Button></Link>
          <Link to="/login"><Button variant="outline">Login</Button></Link>
          <Link to="/register"><Button>Register</Button></Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;