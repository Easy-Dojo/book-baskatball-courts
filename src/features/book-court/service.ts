import {HttpClient} from "../../app/http/http-client";
import {CheckboxValueType} from "antd/lib/checkbox/Group";

export interface QueryTimeType {
  date: string | undefined,
  startTime: number | undefined,
  endTime: number | undefined
}

export enum COURT_SUB_TYPE {
  LEFT,
  RIGHT
}

export interface CourtType {
  id: string,
  court: string,
  subCourt: COURT_SUB_TYPE,
  isAvailable: boolean
}

export interface SearchedCourtsType {
  date: string,
  startTime: number,
  endTime: number,
  courts: CourtType[]
}

export interface BookCourtsRequestType {
  date: string,
  startTime: number,
  endTime: number,
  selectedCourts: Array<CheckboxValueType>
}

class BookCourtService extends HttpClient {
  async queryCourts(queryTime: QueryTimeType): Promise<SearchedCourtsType> {
    return await this.instance.get("/api/courts", {params: queryTime}).then((res) => res.data);
  }

  async bookCourts(bookCourtsRequest: BookCourtsRequestType): Promise<any> {
    return await this.instance.post("/api/courts", bookCourtsRequest).then((res) => res.data);
  }
}

export default new BookCourtService();
