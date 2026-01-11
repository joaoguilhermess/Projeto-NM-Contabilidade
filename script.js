class Home {
	static Init() {
		this.addLinks();

		// this.setReload();

		// this.setScroll();
	}

	static addLinks() {
		const buttons = document.querySelectorAll("button");

		for (let i = 0; i < buttons.length; i++) {
			const button = buttons[i];

			button.addEventListener("click", () => {
				window.open(button.getAttribute("url"));
			});
		}
	}

	static setReload() {
		setTimeout(() => {
			window.location.reload();
		}, 1000 * 5);
	}

	static setScroll() {
		document.body.scrollTop = document.body.scrollHeight;
	}
}

Home.Init();