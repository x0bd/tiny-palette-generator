import React, { useState } from "react";
import "./listItem.css";

const copy = <i className="far fa-copy"></i>;

const ListItem = ({ rgb, hex }) => {
	const [copied, setCopied] = useState(false);

	return (
		<div className="colorName" style={{ background: rgb }}>
			<span>
				{copied ? "Copied" : hex} {copy}
			</span>
		</div>
	);
};

export default ListItem;
