import { GetTranscriptionJobCommand, StartTranscriptionJobCommand, TranscribeClient } from "@aws-sdk/client-transcribe";

function getClient(){
    return new TranscribeClient({
        region: "eu-west-3",
        credentials:{
            accessKeyId: process.env.AWS_ACCES_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCES_KEY,
        },
    });

}

function createTranscriptionCde(filename){
    return new StartTranscriptionJobCommand({
        TranscriptionJobName: filename,
        OutputBucketName: process.env.AWS_BUCKET_NAME,
        OutputKey: filename + '.transcription',
        IdentifyLanguage: true,
        Media:{
            MediaFileUri: 's3://' + process.env.AWS_BUCKET_NAME + '/' + filename
        }
    })

}

async function createTranscriptionJob(filename){
    const transcribeClient = getClient();
    const transcriptionCommand = createTranscriptionCde(filename)
    return await transcribeClient.send(transcriptionCommand)
}

async function getJob(filename){
    const transcriptionJobStatusCommand = new GetTranscriptionJobCommand({
        TranscriptionJobName: filename,
    });
}

export async function GET(req) {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams)
    const filename = searchParams.get('filename');
    const transcribeClient = getClient();

    //check if already transcribing
    let existingJobFound = false;

    try {
        const jobStatusResult = await transcribeClient.send(transcriptionJobStatusCommand)
        existingJobFound = true
        console.log(jobStatusResult);
    } catch (error) { }

    console.log(existingJobFound);

    if (!existingJobFound){
        createTranscriptionJob(filename);
    }
    
    return Response.json("ok");
    // return Response.json(result);
}