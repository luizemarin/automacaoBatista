# automacaoBatista

# Pre condition

Have installed: - NodeJs - Yarn or Npm - Git

# Step 1

To run tests, first must be necessary to download the dependencies (node_modules)
after that just run `npm i` or `yarn` command. This command will be download all necessary dependencies.

# Step 2

In package.json have commands were configured so that the tests are run.

- `npm run cy:open` or `yarn cy:open` this command will open the cypress screen so that if you want to run one or all of the tests, you can follow the tests being executed.
- `npm run cy:chrome` or `yarn cy:chrome` this command will run the tests in the background using browser chrome and each completed test will generate a video as evidence and screenshots.
- `npm run cy:firefox` or `yarn cy:firefox` this command will run the tests in the background using browser firefox and each completed test will generate a video as evidence and screenshots.
