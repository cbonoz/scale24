import lighthouse from '@lighthouse-web3/sdk'

const LIGHTHOUSE_KEY = process.env.NEXT_PUBLIC_LIGHTHOUSE as string

const progressCallback = (progressData: any) => {
    let percentageDone =
        100 -
        ((progressData?.total / progressData?.uploaded) as any)?.toFixed(2)
    console.log(percentageDone)
}
// https://docs.lighthouse.storage/lighthouse-1/how-to/upload-data/file
export const uploadFile = async (file: File) => {
    const output = await lighthouse.upload(
        file,
        LIGHTHOUSE_KEY,
        false,
        null,
        progressCallback
    )
    console.log('File Status:', output)
    /*
    output:
      data: {
        Name: "filename.txt",
        Size: 88000,
        Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
      }
    Note: Hash in response is CID.
  */
    return output.data.Hash
}
