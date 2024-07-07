import SocialResponse from "@repository/like/response/Social.response";

interface ProfileResponse {
    id: number
    email: string
    name: string
    bio: string
    job: string
    createdAt: string
    socialAccounts: SocialResponse[]
}

export default ProfileResponse;