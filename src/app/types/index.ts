export interface Response {
    data: Product[]
}

export interface Product {
    apk: string,
    category?: string,
    img: string,
    title: string
}

