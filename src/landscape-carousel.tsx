import { useEffect, useRef, useState } from "react";

type LandscapeItemType = { id: number, image: string, title: string };

const items: LandscapeItemType[] = [
    {
        id: 1,
        image: '/images/dolomites.jpeg',
        title: 'Dolomiti'
      },
      {
        id: 2,
        image: '/images/bruges.jpeg',
        title: 'Brugge'
      },
      {
        id: 3,
        image: '/images/new-york.jpeg',
        title: 'New York'
      },
      {
        id: 4,
        image: '/images/bali.jpeg',
        title: 'Bali'
      },
      {
        id: 5,
        image: '/images/london.jpeg',
        title: 'London'
      },
      {
        id: 6,
        image: '/images/hoi-an.jpeg',
        title: 'Hoi An'
      },
      {
        id: 7,
        image: '/images/vienna.jpeg',
        title: 'Vienna'
      },
      {
        id: 8,
        image: '/images/koh-samui.jpeg',
        title: 'Koh Samui'
      },
      {
        id: 9,
        image: '/images/amsterdam.jpeg',
        title: 'Amsterdam'
      },
      {
        id: 10,
        image: '/images/verdon.jpg',
        title: 'Gorges du Verdon'
      }
]

export default function LandscapeCarousel() {
    const [ selected, setSelected] = useState<LandscapeItemType|null>(null);

    return <div className="container">
        <h1 className="text-center">Landscape carousel</h1>
        <div className="items" onMouseLeave={() => setSelected(null)}>
            {
                items.map((item) => <LandscapeItem key={item.id} image={item.image} onMouseOver={() => {setSelected(null); setSelected(item)}} />)
            }
        </div>

        <div className="item-title-container">
            {
                items.map((item) => <h2 className={`item-title ${selected?.id == item.id ? 'active': ''}`} key={item.id}> <span>{item.title}</span></h2>)
            }
        </div>
    </div>
}

function LandscapeItem({ image, onMouseOver }: {image: string, onMouseOver: () => void}) {
    return <div className="item" onMouseOver={onMouseOver}>
        <div className="item">
            <img src={image} alt="" />
        </div>
    </div>
}