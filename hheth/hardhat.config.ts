/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-19 14:35:22
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-19 15:04:57
 * @FilePath: \hheth\hardhat.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks:{
    rinkeby: {
      url: 'https://rpc.ankr.com/eth_rinkeby',
      accounts:["4394a9ab9c42f2efccd246ed9ecdcd3127fbe6f07f4eb66874d5e575b686b311"],
    },
  }
};


export default config;
