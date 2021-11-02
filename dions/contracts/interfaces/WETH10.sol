// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

interface WETH10 {
  function flashLoan(
    address receiver,
    address token,
    uint256 value,
    bytes calldata data
  ) external returns (bool);
}
