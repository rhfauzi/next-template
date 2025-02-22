'use client'
import React, { useState } from 'react'

const dataDummy = [
  {
    id: 1,
    name: 'Wonder Woman 1984',
    href: '#',
    date: '2020',
    rating: '7.0',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/1ada/4eb2/d67ce9c62be7df7fa2b89abe5bd6fa1c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VBRtG-dHScCN4XQcq9kXQmAXAEF5omEScmvxbbXq0AsNyC9-8SjvB79OQvkG23DJjg9tt1Mt2VKgtw~8Y8dMk4qjDyiFYl7B-temk1TKgxc5KBK~c0v~7UNDYyhZI0W4JmE4OuYJLWhDRy7frscOTd05gdyAo3XOHuPcFQ8i-hBWwUfieH-S86s9CRFIxoYmdaeT7-ykPo2fXEGdZEgS5nHv~1jyzkZGKWlx~keD8GfvMmKu4WFzG-07pVOnl909xFAdUqTn43spj1N7SeNFQQUSFXpEwjwuCmih9Cfkz3AELd8fzQsfOTQv7nABlvPhdhq9bkxS0419g8cmsekRTQ__',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Below Zero',
    href: '#',
    date: '2021',
    rating: '6.4',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/50e1/0030/e1e4f2a3f5b98a14f7d38520def160ee?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZpGr6SS0PPzVrj85Cjdg9t21vifGgj1mcUUZBB9o65Wz0xokovWdhxLrXiqtXMDm87ZpyBjPJ3DMUUEpstSbQrb~gsuatMstQyw4U1CUxmrW61vJmz7C0EY4wlyHSax0Iook7poI2nxuTDiuRmDAmKBgZoJtMS6lgdjl1ySfoi2P6~Y0~7f9ujagXFb5D6Ks-XwJUkD8qKovPZFzALXBN6EXCwXqjiEYFmGv0X2r-lQZ0h0A2~-H3f~f-y67k-ZJu02Vf3ptjgaXTtpq2wn88KbK4LQqJuU6PpMAZVqZnfoA~xXOF5uMZsqMMQh7CwxAomf5omgI2M1yP3wmh5XUQQ__',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'The Little Things',
    href: '#',
    date: '2021',
    rating: '6.3',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/6b95/1d0b/848b2bc287abc2e05914b51148f30764?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMqzuYvjaeDDksI42k2iLe2C6jeqyxr7d5oIeXj7OWIDyGLaCPCeYDqu6O-yYPxOAuYz0nuP922lnGGHrx-agP2mR5htHX7TuKTnHMMBKsFnyDsdAaPB8tc-SkOokV~4YvzyGqpm5ohlddJ27xE8d7X7HB8c4fMHViMmieqCPB~rYNNpxk2kjylyj04CbOaoM1BmRpYTYWpVBk5OSsL9HQcONcIQAzjHmA8HAGm32NaS1I60fpLXnN79iWl6ssKHQkJ1oqrpsYlkC2v5pZeOZsr3MPKssBs~n2p4nG9CADUF6BQj8YycP93qh8jwIAAw846avmidIZ~xGZSRdNfXWA__',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Outside the Wire',
    href: '#',
    date: '2021',
    rating: '6.3',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/c3f2/9232/011dec11357f6555a79258ac52e7ef1e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tp7cgvrOPMwtvMBz~mFdYNTKOFbCLWxOfhO7dy~DIIsXSut~vY4PHa1q4YyrsyAQNwLcMJya4grR3rLvzN1l-IIUTJTBKAEJFYC4wEeTmHSuh9sACBBHHOhzhFvbse6o-gO2QLldOmxRUDfh9cAK91BTdxNl00V3lndnkg2UpNAPtvDDSLSpuYmYs9BprGkarvBpnzmhmbXFs1VbqlrTpCmy0UjQkwI-5HDosX3tng9zFsexezZ6dLWm~3ioVu7T577bufOu~ZEXzzVmf4PgTfBLABLr2vG3oQZuKNOshUtWEYQa7zxyiNoTZ~Z5t-K~9k--jzSJIhYTrVMRgOxgEA__',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Nomad Tumbler',
    href: '#',
    date: '2021',
    rating: '6.3',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/6667/a34a/5d1b105565b0f4b62c609e4f7dca1337?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l~sa1QOgjJXvcCil42zlWUPtDdob9ElsL4Kib0SYZcaWI-Oi~AOa3oiqt1cMfBwQZZXDPa-2Zvit4PvNbiWtHigH3TOmDyUhUZwvOUVzJzO1S-NIQnFBrMZOvImgm~C--GYuid44U3J~puvGGD9zDwdZ3IUcrsYeyZQkjsC33QKt0X1MUCFd3l-uU8sRsYluG30PQmOpI2FI1JhY0zlRjxnoQEdijNPCf2THZC5xLBgMq08bN3htSifEKhCbZ7nYFeUQS~Hb3Bxyn1wYiQReG8Kdir8PTHLxvkJiKY7zyhQmgA0xrY0Nn~ZsGQoRl~Gt5syLiuaaeKcTv4s1lx32rw__',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 6,
    name: 'Wonder Woman 1984',
    href: '#',
    date: '2020',
    rating: '6.3',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/1ada/4eb2/d67ce9c62be7df7fa2b89abe5bd6fa1c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VBRtG-dHScCN4XQcq9kXQmAXAEF5omEScmvxbbXq0AsNyC9-8SjvB79OQvkG23DJjg9tt1Mt2VKgtw~8Y8dMk4qjDyiFYl7B-temk1TKgxc5KBK~c0v~7UNDYyhZI0W4JmE4OuYJLWhDRy7frscOTd05gdyAo3XOHuPcFQ8i-hBWwUfieH-S86s9CRFIxoYmdaeT7-ykPo2fXEGdZEgS5nHv~1jyzkZGKWlx~keD8GfvMmKu4WFzG-07pVOnl909xFAdUqTn43spj1N7SeNFQQUSFXpEwjwuCmih9Cfkz3AELd8fzQsfOTQv7nABlvPhdhq9bkxS0419g8cmsekRTQ__',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 7,
    name: 'Below Zero',
    href: '#',
    date: '2021',
    rating: '6.3',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/50e1/0030/e1e4f2a3f5b98a14f7d38520def160ee?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZpGr6SS0PPzVrj85Cjdg9t21vifGgj1mcUUZBB9o65Wz0xokovWdhxLrXiqtXMDm87ZpyBjPJ3DMUUEpstSbQrb~gsuatMstQyw4U1CUxmrW61vJmz7C0EY4wlyHSax0Iook7poI2nxuTDiuRmDAmKBgZoJtMS6lgdjl1ySfoi2P6~Y0~7f9ujagXFb5D6Ks-XwJUkD8qKovPZFzALXBN6EXCwXqjiEYFmGv0X2r-lQZ0h0A2~-H3f~f-y67k-ZJu02Vf3ptjgaXTtpq2wn88KbK4LQqJuU6PpMAZVqZnfoA~xXOF5uMZsqMMQh7CwxAomf5omgI2M1yP3wmh5XUQQ__',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 8,
    name: 'The Little Things',
    href: '#',
    date: '2021',
    rating: '6.3',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/6b95/1d0b/848b2bc287abc2e05914b51148f30764?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMqzuYvjaeDDksI42k2iLe2C6jeqyxr7d5oIeXj7OWIDyGLaCPCeYDqu6O-yYPxOAuYz0nuP922lnGGHrx-agP2mR5htHX7TuKTnHMMBKsFnyDsdAaPB8tc-SkOokV~4YvzyGqpm5ohlddJ27xE8d7X7HB8c4fMHViMmieqCPB~rYNNpxk2kjylyj04CbOaoM1BmRpYTYWpVBk5OSsL9HQcONcIQAzjHmA8HAGm32NaS1I60fpLXnN79iWl6ssKHQkJ1oqrpsYlkC2v5pZeOZsr3MPKssBs~n2p4nG9CADUF6BQj8YycP93qh8jwIAAw846avmidIZ~xGZSRdNfXWA__',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 9,
    name: 'Outside the Wire',
    href: '#',
    date: '2021',
    rating: '6.3',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/c3f2/9232/011dec11357f6555a79258ac52e7ef1e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tp7cgvrOPMwtvMBz~mFdYNTKOFbCLWxOfhO7dy~DIIsXSut~vY4PHa1q4YyrsyAQNwLcMJya4grR3rLvzN1l-IIUTJTBKAEJFYC4wEeTmHSuh9sACBBHHOhzhFvbse6o-gO2QLldOmxRUDfh9cAK91BTdxNl00V3lndnkg2UpNAPtvDDSLSpuYmYs9BprGkarvBpnzmhmbXFs1VbqlrTpCmy0UjQkwI-5HDosX3tng9zFsexezZ6dLWm~3ioVu7T577bufOu~ZEXzzVmf4PgTfBLABLr2vG3oQZuKNOshUtWEYQa7zxyiNoTZ~Z5t-K~9k--jzSJIhYTrVMRgOxgEA__',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 10,
    name: 'Nomad Tumbler',
    href: '#',
    date: '2021',
    rating: '6.3',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/6667/a34a/5d1b105565b0f4b62c609e4f7dca1337?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l~sa1QOgjJXvcCil42zlWUPtDdob9ElsL4Kib0SYZcaWI-Oi~AOa3oiqt1cMfBwQZZXDPa-2Zvit4PvNbiWtHigH3TOmDyUhUZwvOUVzJzO1S-NIQnFBrMZOvImgm~C--GYuid44U3J~puvGGD9zDwdZ3IUcrsYeyZQkjsC33QKt0X1MUCFd3l-uU8sRsYluG30PQmOpI2FI1JhY0zlRjxnoQEdijNPCf2THZC5xLBgMq08bN3htSifEKhCbZ7nYFeUQS~Hb3Bxyn1wYiQReG8Kdir8PTHLxvkJiKY7zyhQmgA0xrY0Nn~ZsGQoRl~Gt5syLiuaaeKcTv4s1lx32rw__',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
]

export default function ProductList() {
  const [sortBy, setSortBy] = useState(true)
  console.log('sortBy', sortBy)
  const [dataMovies, setDataMovies] = useState(dataDummy)

  console.log('dataMovies', dataMovies)

  const handleSortBy = (sort: string) => {
    console.log('sort', sort)
    setDataMovies(dataMovies.reverse())

    // if (sort === 'popularity') {
    //   const data = dataDummy.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    //   console.log('data', data)
    //   setDataMovies(data)
    // } else {
    //   const data = dataDummy.sort((a: any, b: any) => parseInt(a.date) - parseInt(b.date))
    //   setDataMovies(data)
    // }
    console.log('3333333333333')
  }

  return (
    <div className="product">
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-24">
        <div className="header-page">
          <div className="title-box">
            <div className="line" />
            <h2>Discover Movies</h2>
          </div>

          <div className="button-box">
            <button
              className="px-4 mt-4 bg-red-700 text-white hover:bg-red-950 transition"
              onClick={() => {
                setSortBy(!sortBy)
                handleSortBy('popularity')
              }}
            >
              Popularity
            </button>
            <button
              className="px-4 mt-4 bg-neutral-800 text-white hover:bg-neutral-950 transition"
              onClick={() => {
                setSortBy(!sortBy)
                handleSortBy('date')
              }}
            >
              Release Date
            </button>
          </div>
        </div>

        <div className="product-single grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {dataMovies?.map((items: any) => (
            <div
              key={items.id}
              onClick={() => items.href}
              className="group product-single"
              title={items.name}
            >
              <div className="rating bg-neutral-900">{items.rating}</div>
              <img
                alt={items.imageAlt}
                src={items.imageSrc}
                className="w-full bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-2 text-sm text-neutral-50">{items.name}</h3>
              <p className="mt-1 text-sm text-neutral-500 font-medium">{items.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
