import { NextApiRequest, NextApiResponse} from 'next';
import { prisma } from '@/dbconnect/db';


export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET'){
        const links = await prisma.link.findMany({
            where: {
                parentId: null,
            },
            select: {
                id: true,
                name: true,
                slug: true,
                depth: true,
                parentId: true,
                sublinks: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        depth: true,
                        parentId: true,
                        page: {
                            select: {
                                id: true,
                                title: true,
                                content: true
                            }
                        }
                    }
                },
                page: {
                    select: {
                        id: true,
                        title: true,
                        content: true,
                        linkId: true
                    }
                }
            }
        });
        return res.send(
            {
                results: links
            }
        );
    }
};