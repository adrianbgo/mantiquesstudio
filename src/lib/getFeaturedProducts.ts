import { MockFeaturedItems } from "@/mocks/MockEtsyData";

export const getFeaturedProducts = async () => {
    return Response.json(MockFeaturedItems)
}