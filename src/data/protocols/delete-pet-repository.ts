export interface DeletePetRepository {
  delete: (id: string) => Promise<void>
}
