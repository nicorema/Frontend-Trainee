import axios from "axios";
import _ from "lodash";

axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    const { data } = res;
  })
  .catch((e) => console.log("err"));
