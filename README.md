# CryptoCodersCancel changes
React.js로 구현하는 Ethereum Dapp

🔴 Let’s Build Cryptopunks 2.0 NFT with ReactJS | Web3.JS | Ethereum | Solidity & Truffle 

From Youtube Channel called 'Naz Dumanskyy', "https://www.youtube.com/watch?v=UoA6eALKS6g" (Posting date : 29.Jan.2022)

# 개발 순서
- Solidty와 Truffle을 사용하여 ERC721 스마트컨트랙트를 작성한다.
- Ganache를 사용하여 local Ethereum Blockain을 실행한다.
- Ganache에 스마트컨트랙트를 배포한다.
- React.js을 사용하여 프론트엔드 앱을 구축하고 Metamask와 연결한다.
- 민팅(Minting)기능을 추가하여 React.js 앱을 완성한다.

# Installation
1. Truffle

>스마트 계약을 사용하기 시작하는 데 필요한 기본적인 모든 것이 포함되어 있다.
https://trufflesuite.com/boxes/react/index.html

    npx truffle unbox react

2. Metamask
"Install Metamask for Chrome"
https://metamask.io/download.html

3. Ganache
https://trufflesuite.com/ganache/

4. OpenZepplin
https://github.com/OpenZeppelin/openzeppelin-contracts
    $ npm install @openzeppelin/contracts

# 개발 화면

![image](https://user-images.githubusercontent.com/62468132/162725757-071fc75a-0938-4fe3-a22d-c31dda437128.png)

# 함수(function)

* 민팅(minting) 
''''
    function mint(string memory _coder) public {
        // Color 
        require(!_coderExists[_coder]);
        coders.push(_coder);
        uint _id = coders.length - 1;
        _mint(msg.sender, _id);
        _coderExists[_coder] = true;
    }
''''

OpenZepplin(Github)
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Enumerable.sol

''''
pragma solidity ^0.8.0;

import "../client/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../client/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";


contract CryptoCoder is ERC721, ERC721Enumerable {

    string[] public coders;
    mapping(string => bool) _coderExists;

    constructor() ERC721("CryptoCoder", "CC") {
    }

    function mint(string memory _coder) public {
        // Color 
        require(!_coderExists[_coder]);
        coders.push(_coder);
        uint _id = coders.length - 1;
        _mint(msg.sender, _id);
        _coderExists[_coder] = true;
    }
 
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
''''
