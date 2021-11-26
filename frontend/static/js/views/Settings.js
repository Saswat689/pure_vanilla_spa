import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle('Settings')
	}

	async getHtml() {
		return `
			<h1>Did you just forgot your password idiot?</h1>
			<p>
				We all do that and its very common for humans to be idiots. That is why you came to this page. But you know what we aren't going to change your password hehe
			</p>
			<p>
				<a href="/posts">Back to posts</a>
			</p>
		`
	}
}