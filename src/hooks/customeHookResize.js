import {useEffect,useState} from "react";

function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);

	function onResize(evt) {
		setWidth(evt.target.innerWidth);

		console.log("Resized window");
	}

	useEffect(() => {
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return { width };
}
export default useWindowWidth;
