import { NextApiRequest, NextApiResponse} from 'next';
import { prisma } from '@/dbconnect/db';
// import Authenticated from '@/utils/Authenticator';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET'){
        const links = await prisma.link.findMany();
        const getCounts = await prisma.link.count();
        return res.send(
            {
                results: links,
                total: getCounts
            }
        );
    }

    if(req.method === 'POST'){
        // console.log(req.body);
        const {
            name,
            slug,
            depth,
            parentId,
        } = req.body;
        const newLink = await prisma.link.create({
            data: {
                name,
                slug,
                depth: depth === '1' ? true : false,
                parentId: parentId ? parentId : null
            }
        });
        return res.status(201).send(newLink);
    }
}