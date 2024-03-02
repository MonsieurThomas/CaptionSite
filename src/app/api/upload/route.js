import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from "uniqid"

export async function POST(req) {
    // console.log("arrivé")
    const formData = await req.formData()
    const file = formData.get('file');
    const {name, type} = file;
    const data = await file.arrayBuffer();


        // console.log("AWS_ACCES_KEY = ", process.env.AWS_ACCES_KEY)
        // console.log("AWS_SECRET_ACCES_KEY = ", process.env.AWS_SECRET_ACCES_KEY)
        // console.log("AWS_BUCKET_NAME =", process.env.AWS_BUCKET_NAME)

        const s3client = new S3Client({
            region: "eu-west-3",
            credentials:{
                accessKeyId: process.env.AWS_ACCES_KEY,
                secretAccessKey: process.env.AWS_SECRET_ACCES_KEY,
            },
        });

    const id = uniqid();
    const ext = name.split('.').slice(-1)[0];
    const newName = id + '.' + ext;

    const uploadCommand = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: data,
        ACL: 'public-read',
        ContentType: type,
        Key: newName,
    });

       await s3client.send(uploadCommand)
        
    return Response.json({name,ext,newName,id});

}