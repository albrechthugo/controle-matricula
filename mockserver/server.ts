import { ContoleMatriculaDefaultDB } from "./utils/controle-matriculaDefaultDB";

const mockserver = require('mockserver-node');

mockserver
  .start_mockserver({
    serverPort: 1080,
    verbose: true,
    jvmOptions: '-Dmockserver.enableCORSForAllResponses=true'
  })
  .then(async () => {
    console.log('started MockServer');
    const checkListDefaultDB = new ContoleMatriculaDefaultDB();
    await checkListDefaultDB.initialize();
  },
    (error: any) => {
      console.log(JSON.stringify(error));
    }
  );
