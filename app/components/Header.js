"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DrawlerHeader from "./DrawlerHeader";
import logo from "../../public/images/logo.png";
import authSlice from "../logic/authSlice";
import { selectUser } from "../redux/selector";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const [existUser, setExistUser] = useState(null);
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      const isVisible =
        currentPosition < scrollPosition || currentPosition < 200;
      setIsHeaderVisible(isVisible);
      setIsHeaderFixed(currentPosition > 0);
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActive(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActive(false);
  };

  const handleClearUser = (event) => {
    signOut();
    localStorage.removeItem("user");
    setExistUser(null);
    dispatch(authSlice.actions.clearUserData());
    router.push("/");
  };

  return (
    <AppBar
      className={`bg-black text-black flex justify-between flex-row py-6 ${
        isMatchMD ? "px-[3vw]" : "px-[10vw]"
      }`}
      style={{
        position: isHeaderFixed ? "fixed" : "static",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <Link href="/">
        <Image src={logo} alt="mission logo" className="h-12 w-52" />
      </Link>
      {!isMatchMD ? (
        <>
          {pathname === "/auth" ? null : (
            <div className="w-fit">
              {user.data || existUser || session ? (
                <div className="flex">
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    className={`${
                      active ? "text-[#E88F08]" : ""
                    } hover:bg-transparent hover:text-[#E88F08] font-bold capitalize py-2 px-6`}
                  >
                    {user.data
                      ? user.data.fullName
                      : session && session.user.name}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseMenu}
                    disableScrollLock={true}
                    className="[&>*>ul]:bg-[#19181C] [&>*>ul]:text-white [&>*>ul]:p-4 [&>*>ul>li]:border-b [&>*>ul>li]:border-white"
                  >
                    <MenuItem onClick={handleCloseMenu}>
                      <button
                        className="bg-[#FFBD59] font-bold uppercase border hover:text-white text-black py-2 px-6 rounded-lg border-b-[4px] border-[#CC8C00] hover:bg-[#FFBD59] hover:border hover:border-[#E88F08] transition duration-500 hover:transition hover:duration-500  hover:-translate-y-1 hover:mb-[4px]"
                        onClick={handleClearUser}
                      >
                        đăng xuất
                      </button>
                    </MenuItem>
                  </Menu>
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
        </>
      ) : (
        <>{pathname === "/auth" ? null : <DrawlerHeader />}</>
      )}
    </AppBar>
  );
};

export default Header;
