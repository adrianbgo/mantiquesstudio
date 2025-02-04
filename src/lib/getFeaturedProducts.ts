import { IEtsyInfo } from "@/types";

export const getFeaturedProducts = async () => {
    const mockResponse: IEtsyInfo = {
        count: 5,
        results: [
            {
                title: "velit culpa",
                description: "non adipisicing labore proidentmagna sintlaboris enim laborum do inlaborislabore incididunt deserunt fugiat eiusmod",
                url: "https://nd.muykzhauj8T8Mq2",
                price: {
                  amount: 200
                },
                images: [
                  {
                    url_fullxfull: "https://i.etsystatic.com/31388394/r/il/9254bd/6214283602/il_794xN.6214283602_hdab.jpg"
                }
                ]
              },
              {
                title: "sit",
                description: "reprehenderit dolor id Duisdolore nisi temporculpa veniamveniamsed aliquip sint suntproident dolore et ex sint",
                url: "http://SjWxDDuJXcBbQwucOCLFSdNisWJDoT.uhlVulosPHf8a5IaCbwxRtK9hRk.EwRmRe0Ksz4YJh+TrifrvSFMyAvY,YI8ks,zyrD9PVWkD",
                price: {
                    amount: 2500
                },
                images: [
                  {
                    url_fullxfull: "https://i.etsystatic.com/31388394/r/il/9254bd/6214283602/il_794xN.6214283602_hdab.jpg"
                }
                ]
              },
              {
                title: "eiusmod no",
                description: "qui ex estquis et sed proidentsit id Excepteur adipisicingaliqua non enim mollit euculpa in voluptate ad ipsum",
                url: "http://ffApc.zvZKgV6NBwbh2N2cp",
                price: {
                    amount: 350.47
                },
                images: [
                  {
                    url_fullxfull: "https://i.etsystatic.com/31388394/r/il/9254bd/6214283602/il_794xN.6214283602_hdab.jpg"
                }
                ]
              },
        ]
    }
    return Response.json(mockResponse);
}