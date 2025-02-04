"use server";

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return Response.json({
        count: 1,
        results: [
            {
                title: "Bar Cabinet with Bluetooth",
                description: "One-of-a-kind bar cabinet crafted from a vintage RCA television cabinet features a pull-out cherry wood drawer and JBL blue tooth speaker. Cabinet is lighted, spotlighting the tin ceiling tile back. Wow! What a show piece!",
                images: [
                    {
                        url_fullxfull: "https://i.etsystatic.com/31388394/r/il/9254bd/6214283602/il_794xN.6214283602_hdab.jpg"
                    },
                    {
                        url_fullxfull: "https://i.etsystatic.com/31388394/r/il/bb9cea/6262322301/il_794xN.6262322301_pts5.jpg"
                    }
                ],
                price: {
                    amount: 700,
                },
                url: "https://www.etsy.com/listing/1767943180/bar-cabinet-with-bluetooth?click_key=b38ddaf918c84d3c9587e1319621eebd3405f8b2%3A1767943180&click_sum=ec5ff446&ref=shop_home_feat_1&frs=1",
            },
            {
                title: "Early American Whirligig",
                description: "This charming one-of-a-kind whirligig was found in the hills of Virginia. Hand-crafted from wood. Just look at their faces! Watch the woman work the wheel as the man sharpens the blade! Did you catch that it is mounted on a vintage Rain King sprinkler?!",
                images: [
                    {
                        url_fullxfull: "https://i.etsystatic.com/31388394/r/il/657265/6121519206/il_794xN.6121519206_kpjt.jpg"
                    },
                    {
                        url_fullxfull: "https://i.etsystatic.com/31388394/r/il/33c4aa/6169604855/il_794xN.6169604855_ooww.jpg"
                    }
                ],
                price: {
                    amount: 450
                },
                url: "https://www.etsy.com/listing/1761077297/early-american-whirligig?click_key=808fb9163ca7a9da9f19e718158a292173d1e1b1%3A1761077297&click_sum=b48a47f5&ref=shop_home_feat_2&frs=1"
            }
        ]
    });
}