export interface DeletePet {
  delete: (petId: string) => Promise<void>
}
