export interface ILogIn {
  login: (username: string, password: string) => any;
  onInstagramLogIn: () => void;
  fetchTokenAction: () => any;
}
