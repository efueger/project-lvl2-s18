import program from 'commander';
import pack from '../../package.json';

export default () => {
  program
  .version(pack.version)
  .description('Compares two configuration files and shows a difference.')
  .arguments('<first_config> <second_config>')
  .option('-f, --format [type]', 'Output format');

  program.parse(process.argv);

  if (!program.args.length) {
    program.help();
  }
};
