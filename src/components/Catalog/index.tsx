import React from "react";
import { useSelector } from "react-redux";

export default function Catalog() {
	const catalog = useSelector((store) => store);

	console.log(catalog);

	return <div>Catalog</div>;
}
