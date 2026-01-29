import Image from "next/image";
import download from './download.jpg'

export default function ProductCard({item,price}){

    return (
        <div className="p-2">
            <Image src={download} alt='proimg'></Image>
            <div>Product ${item}</div>
            <div>Price ${price}</div>
            <button className="p-1 bg-yellow-200 w-1/4">Add TO Cart</button>
        </div>

    );
}