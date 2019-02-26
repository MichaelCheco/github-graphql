import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Repository from './Repository';
const STARRED_REPOS_QUERY = gql`
	query StarredReposQuery($numRepos: Int) {
		viewer {
			id
			starredRepositories(last: $numRepos) {
				nodes {
					id
					name
					description
					pushedAt
					url
					languages(first: 5) {
						nodes {
							id
							color
							name
						}
					}
				}
			}
		}
	}
`;

export default function StarredRepos() {
	const { data, loading } = useQuery(STARRED_REPOS_QUERY, {
		variables: { numRepos: 25 },
	});

	if (loading) {
		return <p>Loading...</p>;
	}
	return data.viewer.starredRepositories.nodes.map(node => (
		<Repository data={node} key={node.id} />
	));
}
