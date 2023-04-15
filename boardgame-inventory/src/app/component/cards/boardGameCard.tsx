import Image from "next/image"
import Link from "next/link"

interface BoardGameCardProps {

}

export const BoardGameCard = () => {
    return (
        <Link href={"#"} style={{ maxWidth: "260px" }} className="boardGameCard p-3 bg-[#332e59] rounded-xl">
            <div className="boardgameImage">
                {/* <Image src={`${process.env.lorem_picsum}/200/300`} alt="" width={250} height={250} /> */}
                <Image className="rounded-md" src={`https://picsum.photos/250/250`} alt="" width={250} height={250} />
                <div className="infos p-2 flex flex-col justify-between">
                    <div className="title text-lg">
                        <h5 className="text-center">Terraforming Mars</h5>
                    </div>
                    <div className="category">
                        <ul className="flex flex-wrap justify-between mt-4">
                            <li className="px-3 py-0.5 ml-2 mt-2 bg-blue-600 rounded-xl text-white text-sm flex" >
                                <Image className="mr-1" src="/image/Chart.png" alt="" width={20} height={20}/>
                                Plateau
                            </li>
                            <li className="px-3 py-0.5 ml-2 mt-2 bg-pink-600 rounded-xl text-white text-sm flex" >
                                <Image className="mr-1" src="/image/Chart.png" alt="" width={20} height={20}/>
                                1 à 5
                            </li>
                            <li className="px-3 py-0.5 ml-2 mt-2 bg-green-600 rounded-xl text-white text-sm flex" >
                                <Image className="mr-1" src="/image/Chart.png" alt="" width={20} height={20}/>
                                12+
                            </li>
                            <li className="px-3 py-0.5 ml-2 mt-2 bg-orange-600 rounded-xl text-white text-sm flex" >
                                <Image className="mr-1" src="/image/Chart.png" alt="" width={20} height={20}/>
                                90+
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Link>
    )
}