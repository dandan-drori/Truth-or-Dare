import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

export const PrimaryButton = styled.button`
	padding: 0.3rem 1rem;
	border-radius: 5px;
	background-color: #ff4433;
	color: #fefefe;
	border: 1px solid #ff4433;
	font-size: 1.1em;
	cursor: pointer;
	outline: none;
	box-shadow: 1px 1px 3px 1px rgba(255, 255, 255, 0.25);
`

export const SecondaryButton = styled.button`
	padding: 0.3rem 1rem;
	border-radius: 5px;
	background-color: #050505;
	border: 1px solid #ff4433;
	font-size: 1.1em;
	cursor: pointer;
	outline: none;
	box-shadow: 1px 1px 3px 1px rgba(255, 255, 255, 0.25);
	color: #ff4433;
`

export default GlobalStyle
