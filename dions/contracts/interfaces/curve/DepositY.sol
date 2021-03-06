// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

interface DepositY {
  function calc_withdraw_one_coin(uint256 _token_amount, int128 i)
    external
    view
    returns (uint256);
}
