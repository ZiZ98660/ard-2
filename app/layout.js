import { Inter } from "next/font/google";
// import "@/styles/globals.css";
import "@/styles/main.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ARD DELSUTH",
	description: "Official web application for ARD DELSUTH.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className=" w-full ">
					<Nav />
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
