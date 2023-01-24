import { NextApiRequest, NextApiResponse} from 'next';
import { prisma } from '@/dbconnect/db';
// import Authenticated from '@/utils/Authenticator';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method === 'POST'){
        // console.log(req.body);
        const {
            title,
            linkId,
            content,
            pageTemplate,
            postCategory
        } = req.body;
        const newPage = await prisma.page.create({
            data: {
                title,
                linkId,
                content,
                pageTemplate,
                postCategory
            }
        });
        return res.status(201).send(newPage);
    }
}