// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

interface ILendingPoolAddressesProvider {
  function getLendingPool() external view returns (address);
}
