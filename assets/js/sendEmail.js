function sendMail(contactForm) {
	emailjs
		.send("service_4a70f3d", "template_ale9tm1", {
			from_name: contactForm.name.value,
			from_email: contactForm.emailaddress.value,
			message: contactForm.projectsummary.value,
		})
		.then(
			function (response) {
				console.log("SUCCESS", response);
			},
			function (error) {
				console.log("FAILED", error);
			}
		);
	return false; // To block from loading a new page
}
