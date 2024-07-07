import {growAxios} from "@repository/global/growAxios";
import {BaseVoidResponse} from "@repository/global/Base.response";

class LikeApi {
    private static path = 'like'

    patchLike = async (forumId: number): Promise<BaseVoidResponse> => {
        const {data} = await growAxios.patch(`${LikeApi.path}/${forumId}`);
        return data;
    };
}

const likeApi = new LikeApi();

export default likeApi;