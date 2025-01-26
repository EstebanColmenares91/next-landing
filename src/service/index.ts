import { Product } from "@/app/types"

interface Response {
    data: Product[]
}

export async function getProductsFilteredByTitle (): Promise<Response> {
    const response = await fetch('http://localhost:3000/api')
    const { data } = await response.json()

    return data
}