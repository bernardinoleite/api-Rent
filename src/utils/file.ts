import fs from "fs"
export const deleteFile = async (filename: string) => {
    try {
        await fs.promises.stat(filename) //verifica se existe
    } catch (error) {
        console.log("cai aqui")
        return //caso não existe, sai da aplicação
    }
    await fs.promises.unlink(filename) // remove caso o stat achar

}