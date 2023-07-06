import "./App.css";

const gallery = <i class="fa-solid fa-images"></i>;

function App() {
	return (
		<>
			<header>
				<h1>Palegen</h1>
				<div className="input">
					<label htmlFor="file">{gallery} Upload Image</label>
					<input type="file" id="file" hidden />
				</div>
			</header>
		</>
	);
}

export default App;
