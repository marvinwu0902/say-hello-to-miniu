const miniu = require('miniu');

async function createKey() {
  const { privateKey, publicKey } = await miniu.createKey({
    type: 'rsa2',
    scheme: 'pkcs8'
  });
  return {
    privateKey,
    publicKey,
  };
}

async function matchKey({ publicKey, privateKey }) {
  const result = await miniu.matchKey({
    privateKey,
    publicKey,
  });
  return result;
}

async function keyDemo() {
  const keyMap = await createKey();
  const matchResult = await matchKey(keyMap);
  console.log('private key = ', keyMap.privateKey);
  console.log('public key = ', keyMap.publicKey);
  console.log('the result of match private & public key is: ', matchResult);
}

keyDemo();
