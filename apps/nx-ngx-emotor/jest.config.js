module.exports = {
  name: 'nx-ngx-emotor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-ngx-emotor',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
