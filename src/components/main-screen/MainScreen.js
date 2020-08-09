import React, { useState } from 'react'
import SpinningBottle from '../spinning-bottle/SpinningBottle'
import Modal from '../modal/Modal'

const MainScreen = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	return (
		<>
			<SpinningBottle setIsModalOpen={setIsModalOpen} />
			<Modal headerText='Choose One:' isModalOpen={isModalOpen} />
		</>
	)
}

export default MainScreen
