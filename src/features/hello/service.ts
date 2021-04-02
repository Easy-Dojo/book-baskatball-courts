import { HttpClient } from "../../app/http/http-client";

class Service extends HttpClient {
  async hello(): Promise<any> {
    return await this.instance.get("/").then((res) => res.data);
  }
}

export default new Service();
