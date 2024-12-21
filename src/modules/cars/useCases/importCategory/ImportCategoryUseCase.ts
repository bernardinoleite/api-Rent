import fs from "node:fs"
import { Transform } from "node:stream"
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"


interface IImportCategories {
    name: string
    description: string
}
class ImportCategoryUseCase {

    constructor(private categoriesRepository: CategoriesRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
        const categories: IImportCategories[] = []
        return new Promise((resolve, rejects) => {

            const stream = fs.createReadStream(file.path)
            const parseFile = new Transform({
                transform(chunk, encoding, callback) {
                    const lineQuebrada = chunk.toString().split(/\r?\n/)

                    let lines = lineQuebrada.map(line => line.trim().split(","))

                    callback(null, JSON.stringify(lines));
                }
            })
            // Bernardino Leite......................................
            stream
                .pipe(parseFile)
                .on("data", (lines) => {

                    JSON.parse(lines).forEach(line => {
                        const [name, description] = line


                        categories.push({
                            name: name.trim(), description: description.trim()
                        })
                    })
                })
                .on("end", () => {
                    fs.promises.unlink(file.path)
                    resolve(categories)
                })
                .on("error", (error) => {
                    rejects(error)
                })

        })

    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.forEach(async (line) => {
            const { name, description } = line
            const alreadExistCategory = await this.categoriesRepository.findByName(name)
            if (!alreadExistCategory) {
                await this.categoriesRepository.create({ name, description })

            }

        })

    }

}


export {
    ImportCategoryUseCase
}