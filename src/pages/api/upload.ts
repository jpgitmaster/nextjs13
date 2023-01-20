import { NextApiRequest, NextApiResponse } from 'next'
import S3 from 'aws-sdk/clients/s3'

// accessKeyId: 'AKIATUO2YDN6MIVDI34Z', // FOR CLI GLOBAL ACCESS
// secretAccessKey: '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', // FOR CLI GLOBAL ACCESS
const env = process.env
const newS3 = new S3({
    region: env.NEXT_PUBLIC_AWS_REGION,
    accessKeyId: env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4'
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST'){
        try{
            const { name, type } = req.body
            // console.log(req.body)
            const fileParams = {
                Bucket: env.NEXT_PUBLIC_AWS_S3_BUCKET,
                Key: name,
                Expires: 60,
                ContentType: type,
            }
            const url = await newS3.getSignedUrlPromise('putObject', fileParams)
            res.status(200).json({ url })
        }catch(err){
            console.log(err)
            res.status(400).json({message: err})
        }
    }
}