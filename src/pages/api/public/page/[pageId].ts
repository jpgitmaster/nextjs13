import { NextApiRequest, NextApiResponse} from 'next';
import { prisma } from '@/dbconnect/db';


export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET'){
        const { pageId } = req.query;
        const page = await prisma.link.findFirst({
            where: {
                slug: String(pageId)
            },
            select: {
                id: true,
                name: true,
                slug: true,
                page: {
                    select: {
                        id: true,
                        title: true,
                        content: true,
                        pageTemplate: true,
                        postCategory: true
                    }
                }
            }
        });
        return res.send(
            {
                results: page
            }
        );
    }
};