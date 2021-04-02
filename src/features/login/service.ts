import {HttpClient} from "../../app/http/http-client";
import {AxiosBasicCredentials} from "axios";

class LoginService extends HttpClient {
  async login(authInfo: AxiosBasicCredentials): Promise<any> {
    return await this.instance.post("/api/authorize", authInfo).then((res) => res.data);
  }
}

export default new LoginService();
