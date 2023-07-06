import { useState } from "react";
import "./App.css";
import DisplayImage from "./components/DisplayImage";
import ColorThief from "colorthief";

const gallery = <i class="fa-solid fa-images"></i>;

function App() {
	const [uploadedImage, setUploadedImage] = useState(null);
	const [colorPalette, setColorPalette] = useState(null);

	const uploadImage = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = async (event) => {
			const img = new Image();

			img.onload = () => {
				const colorThief = new ColorThief();
				const colorPalette = colorThief.getPalette(img, 6);

				setUploadedImage(event.target.result);
				setColorPalette(colorPalette);
			};
			img.src = event.target.result;
		};

		reader.readAsDataURL(file);
	};

	return (
		<>
			<header>
				<h1>Palegen</h1>
				<div className="input">
					<label htmlFor="file">{gallery} Upload Image</label>
					<input
						type="file"
						id="file"
						hidden
						onChange={uploadImage}
					/>
				</div>
			</header>
			<main className="main">
				Hello Ma!
				<DisplayImage />
			</main>
			;
		</>
	);
}

export default App;
