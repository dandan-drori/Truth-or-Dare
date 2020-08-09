import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Task from '../task/Task'

const Truth = () => {
	const { truthId } = useParams()
	const truths = useSelector(state => state.truth)
	return (
		<Container>
			{truths.map(truth =>
				truth.id === Number(truthId) ? <Task text={truth.text} /> : null
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

export default Truth
