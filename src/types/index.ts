export interface Listing {
    title: string,
    description: string,
    url: string,
    price: {
        amount: number
    },
    images: Array<
        { 
            url_fullxfull: string 
        }
    >
}
export interface IEtsyInfo {
    count: number,
    results: Array<Listing>
}