import React from "react";

import useGithub from "./hooks/github-hooks";
import Layout from "./componentes/layout";
import Profile from "./componentes/profile";
import Repositories from "./componentes/repositories";
import NoSearch from "./componentes/no-search";

function App() {
	const { githubState } = useGithub();
	return (
		<Layout>
			{githubState.hasUser ? (
				<>
					{githubState.loading ? (
						<p>Loading</p>
					) : (
						<>
							<Profile />
							<Repositories />
						</>
					)}{" "}
				</>
			) : (
				<NoSearch />
			)}
		</Layout>
	);
}

export default App;
