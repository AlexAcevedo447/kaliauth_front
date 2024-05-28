export default interface IQuery<Received, Returned> {
  execute(data?: Received): Promise<Returned>;
}
