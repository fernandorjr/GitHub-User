import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GitHubContext = createContext({
	loading: false,
	user: {},
	repositories: [],
	starred: [],
});

const GithubProvider = ({ children }) => {
	// eslint-disable-next-line no-unused-vars
	const [githubState, setGitHubState] = useState({
		hasUser: false,
		loading: false,
		user: {
			id: undefined,
			avatar: undefined,
			login: undefined,
			name: undefined,
			htmlUrl: undefined,
			blog: undefined,
			company: undefined,
			location: undefined,
			followers: 0,
			following: 0,
			publicGists: 0,
			public_repos: 0,
		},
		repositories: [],
		starred: [],
	});

	const getUser = (username) => {
		setGitHubState((prevState) => ({
			...prevState,
			loading: !prevState.loading,
		}));

		api.get(`users/${username}`)
			.then(({ data }) => {
				setGitHubState((prevState) => ({
					...prevState,
					hasUser: true,
					user: {
						id: data.id,
						avatar: data.avatar_url,
						login: data.login,
						name: data.name,
						htmlUrl: data.htmlUrl,
						blog: data.blog,
						company: data.company,
						location: data.location,
						followers: data.followers,
						following: data.following,
						publicGists: data.publicGists,
						public_repos: data.public_repos,
					},
				}));
			})
			.finally(() => {
				setGitHubState((prevState) => ({
					...prevState,
					loading: !prevState.loading,
				}));
			});
	};

	const getUserRepos = (username) => {
		api.get(`users/${username}/repos`).then(({ data }) => {
			setGitHubState((prevState) => ({
				...prevState,
				repositories: data,
			}));
		});
	};

	const getUserStarred = (username) => {
		api.get(`users/${username}/starred`).then(({ data }) => {
			setGitHubState((prevState) => ({
				...prevState,
				starred: data,
			}));
		});
	};

	const contextValue = {
		githubState,
		getUser: useCallback((username) => getUser(username), []),
		getUserRepos: useCallback((username) => getUserRepos(username), []),
		getUserStarred: useCallback((username) => getUserStarred(username), []),
	};

	return (
		<GitHubContext.Provider value={contextValue}>
			{children}
		</GitHubContext.Provider>
	);
};

export default GithubProvider;
