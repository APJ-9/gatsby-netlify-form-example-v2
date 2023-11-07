import * as React from "react";
import "./index.css";
import { useState } from "react";

const Modal = ({ isOpen, closeModal, children }) => {
	return (
		isOpen && (
			<div className="modal">
				<div className="modal-content">
					<span className="close" onClick={closeModal}>
						&times;
					</span>
					{children}
				</div>
			</div>
		)
	);
};

const IndexPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [statusCode, setStatusCode] = useState();

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

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
				const StatusCode = response.status;
				setStatusCode(StatusCode);
				if (StatusCode === 200) {
					openModal();
				} else {
					closeModal();
				}
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
			<Modal isOpen={isModalOpen} closeModal={closeModal}>
				<h2>Modal Content</h2>
				<p>This is a simple modal component.</p>
				<p>{statusCode}</p>
			</Modal>
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
