import "./displayImage.css";

export default function DisplayImage({ uploadedImage, colorPalette }) {
	return (
		<div className="content">
			<div className="image">
				{uploadedImage ? (
					<img src={uploadedImage} alt="uploaded" />
				) : (
					"Please upload an image.."
				)}
			</div>
		</div>
	);
}
