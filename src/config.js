export default{
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "town-notes-app"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://itobbwj6rd.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_p0aV67lu0",
        APP_CLIENT_ID: "4g621ltqejmk5oj9o6skrat835",
        IDENTITY_POOL_ID: "us-east-1:64d9f280-2a6e-49bb-8b83-c007df432f9c"
    }
};