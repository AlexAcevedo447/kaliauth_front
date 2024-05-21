export default interface IServerResponse<T> {
  status?: number | undefined;
  success?: boolean | undefined;
  message?: string | undefined;
  data?: T;
}
