export interface GithubResponse {
    avatarUrl: string | null
    bio: string
    totalCommits: number
    weekCommits: CommitResponse[]
    todayCommits: CommitResponse
}

export interface CommitResponse {
    date: string;
    contributionCount: number;
}
