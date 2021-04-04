import {HttpClient} from "../../app/http/http-client";

interface QueryTimeType {
  date: string | undefined,
  startTime: number | undefined,
  endTime: number | undefined
}

enum COURT_SUB_TYPE {
  LEFT,
  RIGHT
}

interface CourtType {
  id: string,
  court: string,
  subCourt: COURT_SUB_TYPE,
  isAvailable: boolean
}

interface CourtsResType {
  date: string,
  startTime: number,
  endTime: number,
  courts: CourtType[]
}

class BookCourtService extends HttpClient {
  async queryCourts(queryTime: QueryTimeType): Promise<CourtsResType> {
    return await this.instance.get("/api/courts", {params: queryTime}).then((res) => res.data);
  }
}

export default new BookCourtService();
