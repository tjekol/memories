import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-xl w-full mb-10 items-center justify-between font-mono text-sm lg:flex">
        This is my photography gallery.
      </div>

      <div className="columns-xs gap-4 space-y-4 w-4/5" m-2>
        <img className="w-full aspect-picture" src='https://i.etsystatic.com/7680109/r/il/39ccd0/3370717066/il_1588xN.3370717066_bcz3.jpg'/>
        <img className="w-full aspect-picture" src='https://i.pinimg.com/originals/c5/ab/aa/c5abaacf2eb008b28c9b6ca1ae442ed6.png'/>
        <img className="w-full aspect-picture" src='https://i.etsystatic.com/12920008/r/il/cb7a33/3757503860/il_1588xN.3757503860_3n41.jpg'/>
        <img className="w-full aspect-picture" src='https://i.etsystatic.com/7680109/r/il/39ccd0/3370717066/il_1588xN.3370717066_bcz3.jpg'/>
        <img className="w-full aspect-picture" src='https://i.etsystatic.com/12920008/r/il/cb7a33/3757503860/il_1588xN.3757503860_3n41.jpg'/>
        <img className="w-full aspect-picture" src='https://i.etsystatic.com/7680109/r/il/39ccd0/3370717066/il_1588xN.3370717066_bcz3.jpg'/>
        <img className="w-full aspect-picture" src='https://i.pinimg.com/originals/c5/ab/aa/c5abaacf2eb008b28c9b6ca1ae442ed6.png'/>
        <img className="w-full aspect-picture" src='https://i.etsystatic.com/12920008/r/il/cb7a33/3757503860/il_1588xN.3757503860_3n41.jpg'/>
        <img className="w-full aspect-picture" src='https://i.etsystatic.com/7680109/r/il/39ccd0/3370717066/il_1588xN.3370717066_bcz3.jpg'/>
        <img className="w-full aspect-picture" src='https://i.pinimg.com/originals/c5/ab/aa/c5abaacf2eb008b28c9b6ca1ae442ed6.png'/>
        <img className="w-full aspect-picture" src='https://i.pinimg.com/originals/c5/ab/aa/c5abaacf2eb008b28c9b6ca1ae442ed6.png'/>
        <img className="w-full aspect-picture" src='https://i.etsystatic.com/12920008/r/il/cb7a33/3757503860/il_1588xN.3757503860_3n41.jpg'/>
      </div>
    </main>
  )
}
