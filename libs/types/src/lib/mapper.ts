export interface Mapper<F, T> {
  map(entity: F): T;

  getConditions();
}
