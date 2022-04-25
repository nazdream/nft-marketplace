const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarket", function () {
  it("Should create and execute market sales", async function () {
    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();
    await market.deployed();

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits("1", "ether");

    await market.createToken("https://www.mytokenlocation.com", auctionPrice, { value: listingPrice });
    await market.createToken("https://www.mytokenlocation2.com", auctionPrice, { value: listingPrice });

    const [_, buyerAddres] = await ethers.getSigners()

    await market.connect(buyerAddres).createMarketSale(nftContractAddress, 1, { value: auctionPrice });

    const items = await market.fetchMarketItems();
    
    console.log("items: ", items);
  });
});
