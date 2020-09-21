const dev = {
    STRIPE_KEY: "pk_test_51HQgNQFXjxfmP3NeMHmSfzjhP02W7OtsZo7fFrJiqnGz1DreNVgruCPLsRshpyKhXhiK2A6vzkYb1NtqmzZJJldK00pwEvEt1x",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-5vcaywz9nvrx"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://cn0ujdp9v0.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_ACHxIaNMr",
        APP_CLIENT_ID: "4itq199kcpuabrvmv687uvp6qn",
        IDENTITY_POOL_ID: "us-east-1:29fc5f3f-42ed-4345-922f-32f29781045f"
      }
  };

  const prod = {
    STRIPE_KEY: "pk_test_51HQgNQFXjxfmP3NeMHmSfzjhP02W7OtsZo7fFrJiqnGz1DreNVgruCPLsRshpyKhXhiK2A6vzkYb1NtqmzZJJldK00pwEvEt1x",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ixyfh9kxcfqj"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://wmxdkzk226.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_kN7z1MAHG",
      APP_CLIENT_ID: "4rf0uoc3r9k9e1nbajk34anoi0",
      IDENTITY_POOL_ID: "us-east-1:e8922dee-bb3a-4e73-98e3-0d19b730304d"
    }
  };

  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };