import React from 'react'
import styled from 'styled-components'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getRandomValue } from '../../utils/utils'
import devices from '../../styles/devices'

const Modal = ({ headerText, isModalOpen }) => {
	return (
		<Container isModalOpen={isModalOpen}>
			<ContentWrapper>
				<Header>{headerText}</Header>
				<FlexWrapper>
					<ActionBox>
						<StyledLink to={`truth/${getRandomValue(1, 10)}`}>
							<QuestionIcon />
							<ActionText>Truth</ActionText>
						</StyledLink>
					</ActionBox>
					<ActionBox>
						<StyledLink to={`dare/${getRandomValue(1, 10)}`}>
							<QuestionIcon />
							<ActionText>Dare</ActionText>
						</StyledLink>
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

	@media ${devices.mobileL} {
		padding: 1rem;
	}
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

	@media ${devices.mobileL} {
		margin: 0.3rem 0.5rem;
		width: 50%;
	}
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

const StyledLink = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: #050505;
	padding: 5rem;

	@media ${devices.mobileL} {
		padding: 4rem;
	}
`

export default Modal
