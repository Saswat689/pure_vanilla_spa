import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle('Posts')
	}

	async getHtml() {
		return `
			<h1>Lookup for new Posts</h1>
			<p>
				Always on the trend. These are the latest recommendations for you
			</p>
			<p>
				<a href="/dashboard">Back to the dashboard</a>
			</p>
		`
	}
}