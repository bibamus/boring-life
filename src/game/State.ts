import Job from '@/game/Job';

export default interface State {
	jobs: {
		group1: Job[]
	},
	activeJob: Job | null
}
