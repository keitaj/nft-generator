pragma solidity ^0.6.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyCollectible is ERC721 {
    constructor() ERC721("MyCollectible", "MCO") public {
    }

    function mint(uint256 _tokenId) public payable {
      _safeMint(msg.sender, _tokenId);
    }

    function setTokenURI(uint256 _tokenId, string memory _tokenURI) internal virtual {
      _setTokenURI(_tokenId, _tokenURI);
    }
}
