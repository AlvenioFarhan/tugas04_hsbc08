import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implementasi logika login di sini (misalnya, memeriksa username dan password)
    if (username === "admin" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      alert("Login gagal. Coba lagi.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="text-center">
        <p className=" py-5 font-bold text-4xl text-blue-400">
          Selamat datang, {username}!
        </p>
        <button
          onClick={handleLogout}
          className=" bg-blue-400 h-10 w-20 rounded-md font-bold text-blue-200"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className=" flex flex-col gap-3 items-center ">
      <h2 className=" font-bold text-4xl my-5 text-blue-400">Silahkan Login</h2>
      <input
        className=" rounded-md h-10 border border-blue-500 text-center"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className=" rounded-md h-10 border border-blue-500 text-center"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className=" bg-blue-400 h-10 w-20 rounded-md font-bold text-blue-200"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
