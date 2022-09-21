//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract ClassToken is ERC20PresetMinterPauser {
        constructor(uint256 initialSupply) ERC20PresetMinterPauser("ClassToken", "CLT") {
        _mint(msg.sender, initialSupply);
        }
}