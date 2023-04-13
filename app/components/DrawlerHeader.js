"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selector";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import authSlice from "../logic/authSlice";

export default function DrawlerHeader() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
              {user.data || existUser ? (
                <button
                  className="bg-[#FFBD59] font-bold uppercase hover:text-white text-black py-2 px-6 rounded-lg border-b-[4px] border-[#CC8C00] hover:bg-[#E88F08] hover:border-[#E88F08]"
                  onClick={handleClearUser}
                >
                  đăng xuất
                </button>
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
        <MenuIcon className="text-black text-[40px]" />
      </IconButton>
    </>
  );
}
