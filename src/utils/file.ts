import { promises } from "fs"
export const deleteFile = async (filename: string) => {
    try {
        await promises.stat(filename) //verifica se existe
    } catch {
        return //caso não existe, sai da aplicação
    }
    await promises.unlink(filename) // remove caso o stat achar
}