import * as Realm  from "realm-web";

const app = new Realm.App({ id: "application-0-uhlwt" });
const credentials = Realm.Credentials.anonymous();


const get_data = async() => {
  const user = await app.logIn(credentials);
  const datas = await user.functions.Get_data_home();
  //console.log(datas)
  return datas;
}

const get_spaces = async() => {
  const user = await app.logIn(credentials);
  // const datas = await user.functions.Get_data_spaces();
  const datas = await user.functions.Get_data_spaces();
  
  console.log(datas)
  return datas;
}

export default get_data
export {get_spaces};