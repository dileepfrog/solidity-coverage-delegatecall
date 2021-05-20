// SPDX-License-Identifier: LGPL-3.0-only

pragma solidity 0.8.4;

import { TestLibrary } from './TestLibrary.sol';

contract TestContract {
    struct S{
      int56 x;
    }

    function test(int56,S calldata,bytes2,bytes2,bytes2,int56,int56,bytes2,bytes2,bytes2,int56,int56,int56) external {
      TestLibrary.test();
    }
}
