import "./displayImage.css";
import ListItem from "./ListItem";

export default function DisplayImage({ uploadedImage, colorPalette }) {
	const toHex = (rgb) => {
		let hex = Number(rgb).toString(16);
		if (hex.length < 2) {
			hex = "0" + hex;
		}

		return hex;
	};

	return (
		<div className="content">
			<div className="image">
				{uploadedImage ? (
					<img src={uploadedImage} alt="uploaded" />
				) : (
					"Please upload an image.."
				)}
			</div>

			{colorPalette && (
				<ul className="colors">
					{colorPalette.map((color, index) => {
						const rgb = `rgb(${color.join(",")})`;
						console.log(rgb);
						const hex =
							"#" +
							toHex(color[0]) +
							toHex(color[1]) +
							toHex(color[2]);
						console.log(hex, rgb);
						return (
							<ListItem key={index} rgb={rgb} hex={hex} />
						);
					})}
				</ul>
			)}
		</div>
	);
}
