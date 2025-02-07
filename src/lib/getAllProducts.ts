import { MockEtsyData } from "@/mocks/MockEtsyData"

export const getAllProducts = async () => {
    return Response.json(MockEtsyData);
}