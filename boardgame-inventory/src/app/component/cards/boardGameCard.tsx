import Image from "next/image"

interface BoardGameCardProps {

}

export const BoardGameCard = () => {
    return (
        <div className=" p-3">
            <div className="boardgameImage">
                <Image src={"https://picsum.photos/200/300"} alt="" width={250} height={250} />
            </div>
        </div>
    )
}