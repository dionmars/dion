// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

interface ILendingPool {
  function flashLoan(
    address receiverAddress,
    address reserve,
    uint256 amount,
    bytes calldata params
  ) external;
}
