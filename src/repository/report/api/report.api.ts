import ReportRequest from "@repository/report/req/Report.request";
import {BaseVoidResponse} from "@repository/global/Base.response";
import {growAxios} from "@repository/global/growAxios";

class ReportApi {
    async reportComment(id: number, req: ReportRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.post(`comment/${id}/report`);
        return data;
    }

    async reportForum(id: number, req: ReportRequest): Promise<BaseVoidResponse> {
        const {data} = await growAxios.post(`community/${id}/report`);
        return data;
    }
}

export default new ReportApi();