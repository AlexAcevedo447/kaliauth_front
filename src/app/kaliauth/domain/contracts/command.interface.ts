export default interface ICommand<Received, Returned> {
  execute(data?: Received): Promise<Returned>;
}
