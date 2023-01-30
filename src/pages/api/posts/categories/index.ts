import { NextApiRequest, NextApiResponse} from 'next';
import { prisma } from '@/dbconnect/db';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET'){
        const getCounts = await prisma.postCategory.count();
        const categories = await prisma.postCategory.findMany({
            include: {
                _count: {
                    select: {
                        posts: true
                    }
                }
            },
        });
        // console.log(categories);
        return res.send(
            {
                results: categories,
                total: getCounts
            }
        );
    }
    
    if(req.method === 'POST'){
        const {
            name,
            title,
            code,
            description,
        } = req.body;
        const checkCodeExist = await prisma.postCategory.count({
            where: {
              code: code
            }
        });
        if(checkCodeExist){
            return res.status(400).send({
                code: 'Code already Exist'
            });
        }else{
            // console.log(pageId);
            const newPostCategory = await prisma.postCategory.create({
                data: {
                    name,
                    title,
                    code,
                    description,
                }
            });
            return res.status(201).send(newPostCategory);
        }
    }
}