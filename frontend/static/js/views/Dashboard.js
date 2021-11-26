import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle('Dashboard')
	}

	async getHtml() {
		return `
			<h1>Welcome back, Saswat</h1>
			<p>
				How's your productivity going for the day? Lets start with a cup of chai.
			</p>
			<p>
				<a href="/posts">How to make a Indian chai in 5 mins</a>
			</p>
		`
	}
}