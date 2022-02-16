#!/bin/sh
echo 'WHAT-I-DID'
echo 'Personal Logger'

cp -rf ./what-i-did ~/.what-i-did
echo '-----> files copied'

npm --prefix ~/.what-i-did install ~/.what-i-did
echo '-----> dependencies installed'

echo "alias wid='node ~/.what-i-did/wid.js'" >> ~/.zshrc
source ~/.zshrc
alias wid='node ~/.what-i-did/wid.js'
echo '-----> terminal command installed'

echo 'DONE'
