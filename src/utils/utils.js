export const getRandomValue = (max, min) => {
	return Math.round(Math.random() * (max - min) + min)
}
