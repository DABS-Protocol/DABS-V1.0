// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require('hardhat');

exports.deploy = async function() {
    
    const eth = { address: '0x0000000000000000000000000000000000000000' };
    const TestERC20 = await ethers.getContractFactory('TestERC20');
    const DabsGovernance = await ethers.getContractFactory('DabsGovernance');
    const DabsPlatform = await ethers.getContractFactory('DabsPlatform');
    const DabsLedger = await ethers.getContractFactory('DabsLedger');
    const DabsStableCoin = await ethers.getContractFactory('DabsStableCoin');
    const NestGovernance = await ethers.getContractFactory('NestGovernance');
    const NestLedger = await ethers.getContractFactory('NestLedger');
    const NestBatchPlatform2 = await ethers.getContractFactory('NestBatchPlatform2');
    const CoFiXGovernance = await ethers.getContractFactory('CoFiXGovernance');
    const CoFiXRouter = await ethers.getContractFactory('CoFiXRouter');

    console.log('** Deploy: rinkeby@20220512.js **');
    
    //     ** Deploy: rinkeby@20220512.js **
    // nest: 0xE313F3f49B647fBEDDC5F2389Edb5c93CBf4EE25
    // pusd: 0x5407cab67ad304FB8A4aC46D83b3Dd63A9dbA575
    // hbtc: 0xaE73d363Cb4aC97734E07e48B01D0a1FF5D1190B
    // dabsGovernance: 0xEd95E0CA0A4a8dF1198fc8509460927124060448
    // dabsPlatform: 0x74130b7f9CC53631184f2fb776571e0ce8384362
    // dabsLedger: 0xA4238A6C8834D2a0fFd5672f912D576DdbEA623b
    // nestBatchPlatform2: 0xc08E6A853241B9a08225EECf93F3b279FA7A1bE7
    // cofixGovernance: 0x4A01418AFAfD5d7870130F1cA2967BaD09863539
    // cofixRouter: 0x9f7997EFb0aF6f5e370dea99b1941D73330825C9
    /// proxyAdmin: 0xb23914E0ee8F0a651A3e2A919a26Cc6C7d5709EE

    // 1. Deploy dependent contract

    //const nest = await TestERC20.deploy('nest', 'nest', 18);
    const nest = await TestERC20.attach('0xE313F3f49B647fBEDDC5F2389Edb5c93CBf4EE25');
    console.log('nest: ' + nest.address);

    //const pusd = await TestERC20.deploy('PUSD', 'PUSD', 18);
    const pusd = await TestERC20.attach('0x5407cab67ad304FB8A4aC46D83b3Dd63A9dbA575');
    console.log('pusd: ' + pusd.address);

    //const hbtc = await TestERC20.deploy('Huobi-BTC', 'HBTC', 18);
    const hbtc = await TestERC20.attach('0xaE73d363Cb4aC97734E07e48B01D0a1FF5D1190B');
    console.log('hbtc: ' + hbtc.address);

    //const dabsGovernance = await upgrades.deployProxy(DabsGovernance, ['0x0000000000000000000000000000000000000000'], { initializer: 'initialize' });
    const dabsGovernance = await DabsGovernance.attach('0xEd95E0CA0A4a8dF1198fc8509460927124060448');
    console.log('dabsGovernance: ' + dabsGovernance.address);

    //const dabsPlatform = await upgrades.deployProxy(DabsPlatform, [dabsGovernance.address], { initializer: 'initialize' });
    const dabsPlatform = await DabsPlatform.attach('0x74130b7f9CC53631184f2fb776571e0ce8384362');
    console.log('dabsPlatform: ' + dabsPlatform.address);

    //const dabsLedger = await upgrades.deployProxy(DabsLedger, [dabsGovernance.address], { initializer: 'initialize' });
    const dabsLedger = await DabsLedger.attach('0xA4238A6C8834D2a0fFd5672f912D576DdbEA623b');
    console.log('dabsLedger: ' + dabsLedger.address);

    //const nestBatchPlatform2 = await upgrades.deployProxy(NestBatchPlatform2, [nestGovernance.address], { initializer: 'initialize' });
    const nestBatchPlatform2 = await NestBatchPlatform2.attach('0xc08E6A853241B9a08225EECf93F3b279FA7A1bE7');
    console.log('nestBatchPlatform2: ' + nestBatchPlatform2.address);

    //const cofixGovernance = await upgrades.deployProxy(CoFiXGovernance, ['0x0000000000000000000000000000000000000000'], { initializer: 'initialize' });
    const cofixGovernance = await CoFiXGovernance.attach('0x4A01418AFAfD5d7870130F1cA2967BaD09863539');
    console.log('cofixGovernance: ' + cofixGovernance.address);

    //const cofixRouter = await upgrades.deployProxy(CoFiXRouter, [cofixGovernance.address], { initializer: 'initialize' });
    const cofixRouter = await CoFiXRouter.attach('0x9f7997EFb0aF6f5e370dea99b1941D73330825C9');
    console.log('cofixRouter: ' + cofixRouter.address);

    // console.log('1. nestGovernance.setBuiltinAddress()');
    // await dabsGovernance.setBuiltinAddress(
    //     dabsPlatform.address,
    //     dabsLedger.address,
    //     cofixRouter.address,
    //     nestBatchPlatform2.address,
    //     pusd.address
    // );

    // console.log('4. dabsPlatform.update()');
    // await dabsPlatform.update(dabsGovernance.address);

    // await cofixGovernance.setGovernance(dabsPlatform.address, 1);

    console.log('---------- OK ----------');
    
    const contracts = {
        nest: nest,
        pusd: pusd,
        hbtc: hbtc,

        nestBatchPlatform2: nestBatchPlatform2,
        dabsPlatform: dabsPlatform,

        cofixRouter: cofixRouter
    };

    return contracts;
};