import React from 'react'
import styled from 'styled-components'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getRandomValue } from '../../utils/utils'

const Modal = ({ headerText, isModalOpen }) => {
	const linkStyles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textDecoration: 'none',
		color: '#050505',
		padding: '5rem',
	}
	return (
		<Container isModalOpen={isModalOpen}>
			<ContentWrapper>
				<Header>{headerText}</Header>
				<FlexWrapper>
					<ActionBox>
						<Link to={`truth/${getRandomValue(1, 10)}`} style={linkStyles}>
							<QuestionIcon />
							<ActionText>Truth</ActionText>
						</Link>
					</ActionBox>
					<ActionBox>
						<Link to={`dare/${getRandomValue(1, 10)}`} style={linkStyles}>
							<QuestionIcon />
							<ActionText>Dare</ActionText>
						</Link>
					</ActionBox>
				</FlexWrapper>
			</ContentWrapper>
		</Container>
	)
}

const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.35);
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	display: ${({ isModalOpen }) => (isModalOpen ? 'flex' : 'none')};
`

const ContentWrapper = styled.div`
	background-color: #fefefe;
	padding: 3rem;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

const Header = styled.p`
	font-size: 1.5em;
	margin-bottom: 2rem;
`

const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`

const ActionBox = styled.div`
	border: 1px solid black;
	margin: 0 3rem;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #050505;
`

const ActionText = styled.p`
	font-size: 1.2em;
	margin-top: 2rem;
	color: #fefefe;
`

const QuestionIcon = styled(FaQuestion)`
	font-size: 1.3em;
	color: #fefefe;
`

export default Modal
