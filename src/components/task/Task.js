import React from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../../styles/GlobalStyle'
import { Link } from 'react-router-dom'
import devices from '../../styles/devices'

const Task = ({ text }) => {
	const linkStyles = {
		textDecoration: 'none',
		color: '#fefefe',
		padding: '0.3rem 1rem',
	}
	return (
		<Container>
			<Text>{text}</Text>
			<Text>Or....</Text>
			<Shot>Drink 1 Shot!</Shot>
			<Done>
				<Link to='/' style={linkStyles}>
					Done
				</Link>
			</Done>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 12rem;
`

const Text = styled.p`
	color: #fefefe;
	font-size: 1.5em;

	@media ${devices.mobileL} {
		text-align: center;
		max-width: 80vw;
	}
`

const Shot = styled.p`
	font-size: 1.5em;
	color: #ff4433;
`

const Done = styled(SecondaryButton)`
	padding: 0.3rem 0;
`

export default Task
