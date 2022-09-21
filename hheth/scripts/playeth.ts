/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-19 14:39:55
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-19 17:07:13
 * @FilePath: \hheth\scripts\playeth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
    async function main(){

        const ethers =require("ethers")
        const provider = new ethers.providers.AlchemyProvider()

        const blocknumber  =await provider.getBlockNumber()
        console.log("blocknumber", blocknumber)

        const balance = await provider.getBalance("ethers.eth")
        console.log("balance of ethers.eth",ethers.utils.formatEther(balance))



    }

    main()