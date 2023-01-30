import { NextApiRequest, NextApiResponse} from 'next';
import { prisma } from '@/dbconnect/db';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method === 'POST'){
        const {
            title,
            content,
            categoryId,
            imagecode,
        } = req.body;
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                categoryId,
                imagecode: imagecode ? imagecode : null,
            }
        });
        return res.status(201).send(newPost);
    }
}