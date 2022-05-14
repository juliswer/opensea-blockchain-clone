import React from 'react'

const NftCard = ({nftItem}) => {
  return (
    <img src={nftItem.image} alt="nft" />
  )
}

export default NftCard