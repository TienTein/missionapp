"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/selector";
import { Drawer, IconButton } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import authSlice from "../logic/authSlice";

export default function DrawlerHeader() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { data: session } = useSession();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [existUser, setExistUser] = useState(null);

  useEffect(() => {
    try {
      const user = localStorage.getItem("user");
      if (user === null) {
        setExistUser(null);
      } else {
        setExistUser(JSON.parse(user));
      }
    } catch (error) {
      console.log("Error parsing user from local storage:", error);
      setExistUser(null);
    }
  }, []);

  const handleClearUser = () => {
    localStorage.removeItem("user");
    setExistUser(null);
    dispatch(authSlice.actions.clearUserData());
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <div className="bg-black text-white px-[10vw] py-[30px]">
          {pathname === "/auth" ? null : (
            <div className="w-full flex justify-end">
              {user.data || existUser || session.user ? (
                <div className="flex flex-col items-end">
                  <p className={`text-[#E88F08] font-bold capitalize py-2`}>
                    {user.data
                      ? user.data.fullName
                      : session.user && session.user.name}
                  </p>
                  <button
                    className="bg-[#FFBD59] font-bold uppercase border hover:text-white text-black py-2 px-6 rounded-lg border-b-[4px] border-[#CC8C00] hover:bg-[#FFBD59] hover:border hover:border-[#E88F08] transition duration-500 hover:transition hover:duration-500  hover:-translate-y-1 hover:mb-[4px]"
                    onClick={handleClearUser}
                  >
                    đăng xuất
                  </button>
                </div>
              ) : (
                <Link
                  href="/auth"
                  className="bg-[#FFBD59] font-bold uppercase hover:text-white text-black py-2 px-6 rounded-lg border-b-[4px] border-[#CC8C00] hover:bg-[#E88F08] hover:border-[#E88F08] block"
                >
                  đăng nhập
                </Link>
              )}
            </div>
          )}
        </div>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className="w-fit rounded-none"
      >
        <MenuIcon className="text-white text-[40px]" />
      </IconButton>
    </>
  );
}
