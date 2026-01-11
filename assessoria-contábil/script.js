class AssessoriaContábil {
	static Init() {
		this.addLinks();
	}

	static addLinks() {
		const buttons = document.querySelectorAll("button");

		for (let i = 0; i < buttons.length; i++) {
			const button = buttons[i];
			
			if (!button.getAttribute("url")) continue;

			button.addEventListener("click", () => {
				window.open(button.getAttribute("url"));
			});
		}
	}
}

AssessoriaContábil.Init();