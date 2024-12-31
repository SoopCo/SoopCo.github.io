import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <img
                src={logo}
                alt="Battle Team Logo"
                className="logo"
                style={{ width: "50vw" }}
            />
            <h1>Welcome to Battle Team</h1>
            <p>
                Battle Team is cool. Here's but a taste of one of our most
                popular campaign books.
            </p>
            <p>
                <i>...{"woff ".repeat(10000)}...</i>
            </p>
        </div>
    );
};

export default Navbar;