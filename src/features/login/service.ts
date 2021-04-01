import ENV from "../../env";
import {HttpClient} from "../../app/http/http-client";
import {AxiosBasicCredentials} from "axios";

class LoginService extends HttpClient {
  constructor() {
    super(ENV.API_ENDPOINT);
  }

  async authorize(authInfo: AxiosBasicCredentials): Promise<any> {
    return await this.instance.post("/authorize", authInfo).then((res) => res.data);
  }
}

export default new LoginService();
