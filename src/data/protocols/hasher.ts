export interface Hasher {
  hash: (value) => Promise<string>
}
