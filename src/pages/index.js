import * as React from "react";
import "./index.css";
const IndexPage = () => {
	return (
		<main>
			<h1>Netlify Form Integration</h1>
			<form
				method="post"
				netlify-honeypot="bot-field"
				data-netlify="true"
				name="contact"
			>
				<input type="hidden" name="bot-field" />
				<input type="hidden" name="form-name" value="contact" />
				<label>
					Name
					<input type="text" name="name" id="name" required />
				</label>
				<label>
					Email
					<input type="email" name="email" id="email" required />
				</label>
				<label>
					Subject
					<input type="text" name="subject" id="subject" required />
				</label>
				<label>
					Message
					<textarea name="message" id="message" rows="5" required />
				</label>
				<button type="submit">Send</button>
				<input type="reset" value="Clear" />
			</form>
			<form
				method="post"
				netlify-honeypot="bot-field"
				data-netlify="true"
				name="newForm"
			>
				<input type="hidden" name="bot-field" />
				<input type="hidden" name="form-name" value="newForm" />
				<label>
					Name
					<input type="text" name="name" id="name" required />
				</label>
				<label>
					Email
					<input type="email" name="email" id="email" required />
				</label>
				<label>
					Subject
					<input type="text" name="subject" id="subject" required />
				</label>
				<label>
					Message
					<textarea name="message" id="message" rows="5" required />
				</label>
				<button type="submit">Send</button>
				<input type="reset" value="Clear" />
			</form>
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
