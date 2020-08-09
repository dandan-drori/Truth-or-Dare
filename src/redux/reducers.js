import { combineReducers } from 'redux'

const truth = (
	state = [
		{ id: 1, text: 'Name your first crush' },
		{ id: 2, text: 'When was the last time you lied?' },
		{ id: 3, text: 'When was the last time you cried?' },
		{
			id: 4,
			text: "What's something you're glad your mum doesn't know about you?",
		},
		{
			id: 5,
			text: "What's the worst thing you've ever done?",
		},
		{
			id: 6,
			text: "What's a secret you've never told anyone?",
		},
		{
			id: 7,
			text: 'Do you have a hidden talent?',
		},
		{
			id: 8,
			text: "What's the most drunk you've ever been?",
		},
		{
			id: 9,
			text: "What's your biggest insecurity?",
		},
		{
			id: 10,
			text: "What's your worst habit?",
		},
	],
	{ type, payload }
) => {
	switch (type) {
		case 'SOME':
			return { ...state, state }
		default:
			return state
	}
}

const dare = (
	state = [
		{ id: 1, text: 'Show the most embarrassing photo on your phone' },
		{
			id: 2,
			text: 'Show the last five people you texted and what the messages said',
		},
		{
			id: 3,
			text: 'Do 50 squats',
		},
		{
			id: 4,
			text: 'Keep three ice cubes in your mouth until they melt',
		},
		{
			id: 5,
			text: 'Say something dirty to the person on your left',
		},
		{
			id: 6,
			text: 'Put 10 different available liquids into a cup and drink it',
		},
		{
			id: 7,
			text: 'Put 10 different available liquids into a cup and drink it',
		},
		{
			id: 8,
			text: 'Pretend to be the person to your right for 10 minutes',
		},
		{
			id: 9,
			text: 'Eat a snack without using your hands',
		},
		{
			id: 10,
			text: 'Try to lick your elbow',
		},
	],
	{ type, payload }
) => {
	switch (type) {
		case 'ELSE':
			return { ...state, state }
		default:
			return state
	}
}

const reducer = combineReducers({ truth, dare })
export default reducer
