import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Task from '../task/Task'

const Dare = () => {
	const { dareId } = useParams()
	const dares = useSelector(state => state.dare)
	return (
		<Container>
			{dares.map(dare =>
				dare.id === Number(dareId) ? (
					<Task key={dare.id} text={dare.text} />
				) : null
			)}
		</Container>
	)
}

const Container = styled.div`
	background-color: #050505;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default Dare
