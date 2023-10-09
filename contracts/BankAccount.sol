pragma solidity >=0.4.22 <=0.8.19;

contract BankAccount {
  event Deposit(
    address indexed user,
    uint indexed accountId,
    uint value,
    uint timestamp
  );
}