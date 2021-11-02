### Install

```shell
# install vyper
virtualenv -p python3 venv
source venv/bin/activate
pip install vyper

cp .env.sample .env
```

### For windows

```
virtualenv -p python3 venv
venv\Scripts\activate
pip install vyper

```

### To run

```
venv\Scripts\activate







```

### Test

```shell
source .env

# using infura.io
https://api.mycryptoapi.com/eth
npx ganache-cli \
--fork https://mainnet.infura.io/v3/$WEB3_INFURA_PROJECT_ID \
--unlock $WETH_WHALE \
--unlock $DAI_WHALE \
--unlock $USDC_WHALE \
--unlock $USDT_WHALE \
--unlock $WBTC_WHALE \
--networkId 999

# using archivenode.io (limit 10 req / sec)
## fork at block
BLOCK=11597142
ARCHIVE_NODE_URL=https://api.archivenode.io/$ARCHIVE_NODE_API_KEY@$BLOCK
## latest block
ARCHIVE_NODE_URL=https://api.archivenode.io/$ARCHIVE_NODE_API_KEY

ganache-cli \
--fork $ARCHIVE_NODE_URL \
--unlock $WETH_WHALE \
--unlock $DAI_WHALE \
--unlock $USDC_WHALE \
--unlock $USDT_WHALE \
--unlock $WBTC_WHALE \
--networkId 999

npx truffle test --network mainnet_fork test/test-erc20.js
npx truffle test --network mainnet_fork test/test-dydx.js

```

PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
source venv/bin/activate
source .env


npx ganache-cli \
--fork https://mainnet.infura.io/v3/$WEB3_INFURA_PROJECT_ID \
--unlock $DAI_WHALE \
--networkId 999





truffle compile

npx truffle test --network mainnet_fork test/test-flash-swap.js

/npx truffle test --network mainnet_fork test/test-uniswap-optimal.js

/npx truffle test --network mainnet_fork test/test-uniswap.js

//npx truffle test --network mainnet_fork test/test-erc20.js

//npx truffle test --network mainnet_fork test/test-curve-exchange.js

npx truffle test --network mainnet_fork test/test-curve-liquidity.js
ppppppppppppppppppppppppppppppppppppppp

new BN(10).pow(new BN)).mul(new BN(1000000)); //1,000,00 DAI



