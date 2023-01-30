import { NextApiRequest, NextApiResponse} from 'next';
import { prisma } from '@/dbconnect/db';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET'){
        const { categoryID } = req.query;
        const category = await prisma.postCategory.findUnique({
            where: {
                id: String(categoryID),
            },
            include: {
                posts: {
                    select: {
                        id: true,
                        title: true,
                        content: true,
                        image: true
                    }
                },
            },
        });
        return res.send(
            {
                category: category
            }
        );
    }
};