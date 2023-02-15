import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    * {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	//font-family: "Titillium Web", sans-serif;
}

:root {
	--mainColor: #29335c;
	--mainColorLight: #5767aa;
	--secondaryColor: #db2b39;
	--textColor: #eee;
}

header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	padding: 0 2rem;
	background-color: var(--mainColor);
	color: var(--textColor);
}

nav a {
	margin: 0 1rem;
	color: var(--textColor);
	text-decoration: none;
}

nav a:hover {
	color: var(--secondaryColor);
}

header .nav-btn {
	padding: 5px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: var(--textColor);
	visibility: hidden;
	opacity: 0;
	font-size: 1.8rem;
}

header div,
nav {
	display: flex;
	align-items: center;
}

@media only screen and (max-width: 1024px) {
	header .nav-btn {
		visibility: visible;
		opacity: 1;
	}

	header nav {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background-color: var(--mainColor);
		transition: 1s;
		transform: translateY(-100vh);
	}

	header .responsive_nav {
		transform: none;
	}

	nav .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}

	nav a {
		font-size: 1.5rem;
	}
}
`;

export default GlobalStyle;
