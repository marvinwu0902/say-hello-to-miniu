const miniu = require('miniu');
const ora = require('ora');
const path = require('path');
const getPreviewApp = require('./base');

const spinner = ora('preview start...\n').start();

const codePath = path.join(__dirname, '../');

async function previewTinyApp() {
  const app = await getPreviewApp();
  const previewResult =  await miniu.miniPreview({
    project: codePath,
    appId: app.appId,
    qrcodeFormat: 'image',
    onProgressUpdate (info) {
      const { status, data } = info
      console.log(status, data);
    },
  });
  console.log('the result of preview tiny app is: ', previewResult);
  spinner.succeed('小程序预览成功');
  return previewResult;
}

previewTinyApp();
