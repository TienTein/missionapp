"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selector";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useAuth from "../../../hooks/useAuth";
import GoogleAuth from "./GoogleAuth";

const AuthInputs = () => {
  const router = useRouter();
  const user = useSelector(selectUser);
  const { data: session } = useSession();
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const { signin, signup } = useAuth();
  const [showPass, setShowPass] = useState(false);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuth = () => {
    signin({
      username: inputs.username,
      password: inputs.password,
    });
  };

  useEffect(() => {
    if (user.data || session) {
      if (user.data) {
        localStorage.setItem("user", JSON.stringify(user.data));
      } else if (session) {
        localStorage.setItem("user", JSON.stringify(session.user));
      }
      router.push("/");
    }
  }, [user.data || session]);

  return (
    <div className={`${isMatchMD ? "w-[80%]" : "w-[50%]"} p-1 bg-white`}>
      <div className="py-[5vh] w-full h-full flex flex-col border-4 border-[#FFBD59] [&>*]:w-[80%] [&>*]:mx-auto [&>*]:mb-4 [&>input]:border [&>input]:border-[#DAD8D3] [&>input]:rounded-sm [&>input]:p-2 [&>button]:transition [&>button]:duration-500">
        <h1 className="text-[28px] text-center font-bold">Đăng nhập</h1>
        <input
          type="text"
          name="username"
          placeholder="Nhập tên tài khoản ..."
          onChange={handleChangeInput}
          value={inputs.username}
        />
        <div className="relative border border-[#DAD8D3]">
          <input
            type={`${showPass ? "text" : "password"}`}
            placeholder="Nhập mật khẩu ..."
            name="password"
            value={inputs.password}
            onChange={handleChangeInput}
            className="w-full h-full p-2"
          />
          {showPass ? (
            <VisibilityIcon
              className="absolute right-2 top-0 bottom-0 my-auto"
              onClick={() => setShowPass(false)}
            />
          ) : (
            <VisibilityOffIcon
              className="absolute right-2 top-0 bottom-0 my-auto"
              onClick={() => setShowPass(true)}
            />
          )}
        </div>
        <button
          className="text-black p-[1px] rounded-md border px-4 py-2 bg-[#FFBD59] border-[#FFBD59] hover:text-white hover:bg-[#E88F08] font-bold"
          onClick={handleAuth}
        >
          Đăng nhập ngay
        </button>

        <Link
          href="#"
          className="text-[#FFBD59] p-[1px] rounded-md border px-4 py-2 bg-black boder hover:border-[#E88F08] hover:text-black hover:bg-white font-bold text-center transition duration-500"
        >
          Tạo tài khoản mới
        </Link>

        <GoogleAuth />
        <div className="flex justify-end">
          <Link href="#" className="hover:underline">
            Quên mật khẩu?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthInputs;
