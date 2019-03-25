const {spawn} = require('child_process');
const whichpm = require('which-pm');

exports.update = async function(opts) {
  const options = opts || {};
  const cwd = options.cwd || process.cwd();
  const pkg = options.pkg || require('./package.json');
  const dumpIO = options.dumpIO || false;

  const {name} = await whichpm(cwd);
  let args;
  const processOptions = dumpIO ? { stdio: ['inherit', 'inherit', 'inherit'] } : {};
  if (name === 'npm')
    args = ['i', '-g', pkg.name];
  else if (name === 'yarn')
    args = ['global', 'add', pkg.name];

  return new Promise((resolve, reject) => {
    if (!args)
      reject(`Unknown package manager (${name})`);
    const p = spawn(name, args, processOptions);
    p.on('exit', code => code ? reject(`Package manager (${name}) failed with ${code}`) : resolve());
    p.on('error', error => reject(`Package manager (${name}) failed with ${error.name}`));
  });
};
