// SPDX-License-Identifier: LGPL-3.0-only

pragma solidity 0.8.4;

library TestLibrary {
    event Debug();

    function test() external {
      emit Debug();
    }
}
