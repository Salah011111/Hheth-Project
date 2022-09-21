/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-19 15:42:49
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-19 15:42:55
 * @FilePath: \hheth\scripts\deploy_classtoken.ts
    * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
    */
    import { ethers } from "hardhat";

    async function main() {

        const initialSupply = ethers.utils.parseEther('10000')
        const ClassToken = await ethers.getContractFactory("ClassToken");
        const token = await ClassToken.deploy(initialSupply);
        await token.deployed();

        console.log("ClassToken deployed to:", token.address);
    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });