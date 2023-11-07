import * as React from "react";
import "./index.css";
import { navigate } from "gatsby";
import Modal from "../components/Modal";
import { useState } from "react";

const IndexPage = () => {
	const [formSubmit, setFormSubmit] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();

		const myForm = event.target;
		const formData = new FormData(myForm);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response; // Pass the response to the next .then()
			})
			.then((response) => {
				// Access the status code
				const statusCode = response.status;
				// Handle the response as needed
				return response.text(); // Example: Return the response text
			})

			.catch((error) => {
				alert(`Error: ${error.message}`);
			});
	};

	return (
		<main>
			<h1>Netlify Form Integration</h1>
			<form
				method="post"
				netlify-honeypot="bot-field"
				data-netlify="true"
				name="contact"
				onSubmit={handleSubmit}
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
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
