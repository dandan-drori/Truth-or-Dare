import React, { useState } from 'react'
import styled from 'styled-components'
import corona from '../../images/corona.jpg'
import { getRandomValue } from '../../utils/utils'

const SpinningBottle = ({ setIsModalOpen }) => {
	const [degrees, setDegrees] = useState(null)
	return (
		<Container>
			<Header>Click To Spin!</Header>
			<Image
				src={corona}
				alt='bottle'
				degrees={degrees}
				onClick={() => {
					setDegrees(getRandomValue(1080, 2160))
					setTimeout(() => setIsModalOpen(true), 3000)
				}}
			/>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: #111;
	height: 100vh;
`

const Header = styled.p`
	color: #fff;
	font-size: 1.5em;
	font-weight: 500;
`

const Image = styled.img`
	width: 3.3rem;
	object-fit: contain;
	cursor: pointer;
	margin-bottom: 6rem;
	transition: 2s ease-in-out;

	&:hover {
		transform: rotate(${({ degrees }) => (degrees ? degrees + 'deg' : '0deg')});
	}
`

export default SpinningBottle
