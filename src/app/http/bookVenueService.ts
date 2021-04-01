import ENV from "../../env";
import { HttpClient } from "./http-client";

class BookVenueService extends HttpClient {
  constructor() {
    super(ENV.API_ENDPOINT);
  }

  async hello(): Promise<any> {
    return await this.instance.get("/").then((res) => res.data);
  }
}

export default new BookVenueService();
