export default interface IQuery<T> {
  execute(): Promise<T>;
}
