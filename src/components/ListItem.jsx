import React, { useState } from "react";
import "./listItem.css";

const copy = <i className="far fa-copy"></i>;

const ListItem = ({ rgb, hex }) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = (str) => {};

	return (
		<div className="colorName" style={{ background: rgb }}>
			<span
				onClick={() => {
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 1234);
				}}
			>
				{copied ? "Copied" : hex} {copy}
			</span>
		</div>
	);
};

export default ListItem;
