import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
					<Button sx={{ my: 2, color: "white", display: "block" }}>Main</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
}
