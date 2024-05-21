import IServerResponse from './server.response';

export default interface IDomainResponse<T> {
  getPayload(): Promise<IServerResponse<T>>;
}
