const format = JSON.stringify;

const command = {
  command: "compile",
  description: "Compile contract source files",
  builder: {},
  help: {
    usage: "truffle visualize",
    options: [
      {
        option: "--all",
        description:
          "Compile all contracts instead of only the contracts changed since last compile."
      },
      {
        option: "--network <name>",
        description:
          "Specify the network to use, saving artifacts specific to that network. " +
          " Network name must exist in the\n                    configuration."
      },
      {
        option: "--list <filter>",
        description:
          "List all recent stable releases from solc-bin.  If filter is specified then it will display only " +
          "that\n                    type of release or docker tags. The filter parameter must be one of the following: " +
          "prereleases,\n                    releases, latestRelease or docker."
      },
      {
        option: "--quiet",
        description: "Suppress all compilation output."
      }
    ]
  },
  run: function(options, done) {
    const visualize = require("truffle-visualize");
    const v = new visualize();
    console.log(JSON.stringify(options, null, 2));
  },
};
module.exports = command;
