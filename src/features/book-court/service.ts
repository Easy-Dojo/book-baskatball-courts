import { HttpClient } from '../../app/http/http-client';

export interface QueryTimeType {
  date: string | undefined,
  startTime: number | undefined,
  endTime: number | undefined
}

export enum CourtSubType {
  LEFT,
  RIGHT,
}

export interface CourtType {
  id: string,
  court: string,
  subCourt: CourtSubType,
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
  selectedCourts: string[]
}

class BookCourtService extends HttpClient {
  async queryCourts(queryTime: QueryTimeType): Promise<SearchedCourtsType> {
    return this.instance.get('/api/courts', { params: queryTime }).then((res) => res.data);
  }

  async bookCourts(bookCourtsRequest: BookCourtsRequestType): Promise<any> {
    return this.instance.post('/api/orders', bookCourtsRequest).then((res) => res.data);
  }
}

export default new BookCourtService();
