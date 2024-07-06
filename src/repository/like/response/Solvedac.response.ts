import SolveResponse from "./Solve.response";

interface SolvedacResponse {
    name: string
    avatarUrl: string | null;
    bio: string;
    tier: number;
    rating: number;
    maxStreak: number;
    totalRank: number;
    totalSolves: number
    weekSolves: SolveResponse[]
    todaySolves: SolveResponse
}

export default SolvedacResponse;